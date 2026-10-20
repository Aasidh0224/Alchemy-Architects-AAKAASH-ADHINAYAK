export type Readiness = 'AVAILABLE' | 'UNAVAILABLE' | 'MAINTENANCE' | 'UNKNOWN';
export type Priority = 'URGENT' | 'HIGH' | 'NORMAL' | 'LOW';

export interface Resource {
  id: string;
  name: string;
  category: string;
  site: string;
  readiness: Readiness;
  capacity: number;
  tags: string[];
  availableFrom: number;
  availableUntil: number;
  maintenance?: { start: number; end: number };
  provenance: 'SYNTHETIC_DEMO' | 'PUBLIC_DATA' | 'UPLOADED';
  updatedAt: string;
}

export interface PlanningTask {
  id: string;
  title: string;
  priority: Priority;
  duration: number;
  earliestStart: number;
  deadline: number;
  demand: number;
  requiredTags: string[];
  status: 'PENDING' | 'COMPLETED';
}

export interface Assignment {
  taskId: string;
  resourceId: string;
  start: number;
  end: number;
  delay: number;
}

export interface PlanningResult {
  runId: string;
  createdAt: string;
  assigned: Assignment[];
  unassignedTaskIds: string[];
  totalDelay: number;
  utilizationPercent: number;
  runtimeMs: number;
  objective: number;
  status: 'CANDIDATE';
  inputLabel: string;
}

const rank: Record<Priority, number> = { URGENT: 4, HIGH: 3, NORMAL: 2, LOW: 1 };

function overlaps(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return aStart < bEnd && bStart < aEnd;
}

function hasMaintenanceConflict(resource: Resource, start: number, end: number): boolean {
  const m = resource.maintenance;
  return !!m && overlaps(start, end, m.start, m.end);
}

export function optimisePlan(resources: Resource[], tasks: PlanningTask[], inputLabel = 'DEMO'): PlanningResult {
  const t0 = performance.now();
  const schedules = new Map<string, Assignment[]>();
  for (const resource of resources) schedules.set(resource.id, []);
  const ordered = [...tasks].sort((a, b) => rank[b.priority] - rank[a.priority] || a.deadline - b.deadline || a.id.localeCompare(b.id));
  const assigned: Assignment[] = [];
  const unassignedTaskIds: string[] = [];

  for (const task of ordered) {
    let best: Assignment | undefined;
    for (const resource of resources) {
      if (resource.readiness !== 'AVAILABLE') continue;
      if (resource.capacity < task.demand) continue;
      if (!task.requiredTags.every((tag) => resource.tags.includes(tag))) continue;
      const busy = schedules.get(resource.id) ?? [];
      const candidateStarts = [task.earliestStart, ...busy.map((x) => x.end)].sort((a, b) => a - b);
      for (const start0 of candidateStarts) {
        const start = Math.max(task.earliestStart, start0, resource.availableFrom);
        const end = start + task.duration;
        if (end > task.deadline || end > resource.availableUntil) continue;
        if (hasMaintenanceConflict(resource, start, end)) continue;
        if (busy.some((x) => overlaps(start, end, x.start, x.end))) continue;
        const candidate: Assignment = { taskId: task.id, resourceId: resource.id, start, end, delay: Math.max(0, start - task.earliestStart) };
        if (!best || candidate.start < best.start || (candidate.start === best.start && resource.id < best.resourceId)) best = candidate;
        break;
      }
    }
    if (best) {
      assigned.push(best);
      schedules.get(best.resourceId)!.push(best);
      schedules.get(best.resourceId)!.sort((a, b) => a.start - b.start);
    } else {
      unassignedTaskIds.push(task.id);
    }
  }

  const totalDelay = assigned.reduce((sum, a) => sum + a.delay, 0);
  const occupied = assigned.reduce((sum, a) => sum + (a.end - a.start), 0);
  const available = resources.filter((r) => r.readiness === 'AVAILABLE').reduce((sum, r) => sum + Math.max(0, r.availableUntil - r.availableFrom), 0);
  return {
    runId: `RUN-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    assigned,
    unassignedTaskIds,
    totalDelay,
    utilizationPercent: available ? Math.min(100, (occupied / available) * 100) : 0,
    runtimeMs: Math.max(0, performance.now() - t0),
    objective: unassignedTaskIds.length * 1000 + totalDelay,
    status: 'CANDIDATE',
    inputLabel,
  };
}

export interface ValidationReport {
  passed: boolean;
  checkedAt: string;
  checks: { name: string; passed: boolean; detail: string }[];
}

export function validatePlan(resources: Resource[], tasks: PlanningTask[], result: PlanningResult): ValidationReport {
  const byResource = new Map(resources.map((r) => [r.id, r]));
  const byTask = new Map(tasks.map((t) => [t.id, t]));
  const checks: ValidationReport['checks'] = [];
  const seenTasks = new Set<string>();
  let assignmentsWellFormed = true;
  let hardConstraintsPass = true;
  for (const a of result.assigned) {
    const r = byResource.get(a.resourceId);
    const t = byTask.get(a.taskId);
    if (!r || !t || seenTasks.has(a.taskId)) { assignmentsWellFormed = false; continue; }
    seenTasks.add(a.taskId);
    const valid = r.readiness === 'AVAILABLE'
      && r.capacity >= t.demand
      && t.requiredTags.every((tag) => r.tags.includes(tag))
      && a.start >= t.earliestStart
      && a.end === a.start + t.duration
      && a.end <= t.deadline
      && a.start >= r.availableFrom
      && a.end <= r.availableUntil
      && !hasMaintenanceConflict(r, a.start, a.end);
    if (!valid) hardConstraintsPass = false;
  }
  const noOverlap = resources.every((r) => {
    const plan = result.assigned.filter((a) => a.resourceId === r.id).sort((a, b) => a.start - b.start);
    return plan.every((a, i) => i === 0 || plan[i - 1].end <= a.start);
  });
  const coverage = result.assigned.length + result.unassignedTaskIds.length === tasks.length
    && tasks.every((t) => seenTasks.has(t.id) || result.unassignedTaskIds.includes(t.id));
  checks.push({ name: 'Known IDs and unique task assignments', passed: assignmentsWellFormed, detail: assignmentsWellFormed ? 'Every assignment references a known resource/task and no task is assigned twice.' : 'An assignment contains an unknown ID or a duplicate task.' });
  checks.push({ name: 'Availability, capacity, tags and time windows', passed: hardConstraintsPass, detail: hardConstraintsPass ? 'All assigned tasks satisfy the implemented hard constraints.' : 'At least one assignment violates readiness, capability, capacity, maintenance or timing constraints.' });
  checks.push({ name: 'No double-booking', passed: noOverlap, detail: noOverlap ? 'No resource has overlapping assignments.' : 'Overlapping assignments were detected.' });
  checks.push({ name: 'Task accounting', passed: coverage, detail: coverage ? 'Every task is accounted for as assigned or unassigned.' : 'Task accounting is incomplete.' });
  return { passed: checks.every((c) => c.passed), checkedAt: new Date().toISOString(), checks };
}

export function applyResourceOutage(resources: Resource[], resourceId: string): Resource[] {
  return resources.map((r) => r.id === resourceId ? { ...r, readiness: 'UNAVAILABLE' } : r);
}
