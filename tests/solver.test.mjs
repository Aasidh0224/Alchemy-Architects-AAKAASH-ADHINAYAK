import test from 'node:test';
import assert from 'node:assert/strict';
import { optimisePlan, validatePlan, applyResourceOutage } from '../src/solver.ts';

const resources = [
  { id: 'R1', name: 'Cargo resource', category: 'Transport', site: 'HUB-A', readiness: 'AVAILABLE', capacity: 5, tags: ['CARGO'], availableFrom: 0, availableUntil: 300, provenance: 'SYNTHETIC_DEMO', updatedAt: new Date().toISOString() },
  { id: 'R2', name: 'Unknown resource', category: 'Support', site: 'HUB-B', readiness: 'UNKNOWN', capacity: 9, tags: ['CARGO'], availableFrom: 0, availableUntil: 300, provenance: 'SYNTHETIC_DEMO', updatedAt: new Date().toISOString() },
];
const tasks = [
  { id: 'T1', title: 'Cargo task', priority: 'HIGH', duration: 60, earliestStart: 0, deadline: 120, demand: 3, requiredTags: ['CARGO'], status: 'PENDING' },
  { id: 'T2', title: 'Too long', priority: 'LOW', duration: 90, earliestStart: 120, deadline: 150, demand: 3, requiredTags: ['CARGO'], status: 'PENDING' },
];

test('unknown resources are not allocated', () => {
  const plan = optimisePlan(resources, [tasks[0]]);
  assert.equal(plan.assigned[0].resourceId, 'R1');
});

test('optimizer accounts for every task', () => {
  const plan = optimisePlan(resources, tasks);
  assert.equal(plan.assigned.length + plan.unassignedTaskIds.length, tasks.length);
  assert.ok(plan.unassignedTaskIds.includes('T2'));
});

test('independent validator accepts a valid generated candidate', () => {
  const plan = optimisePlan(resources, [tasks[0]]);
  const report = validatePlan(resources, [tasks[0]], plan);
  assert.equal(report.passed, true);
});

test('outage changes only the selected generic resource status', () => {
  const next = applyResourceOutage(resources, 'R1');
  assert.equal(next.find(r => r.id === 'R1').readiness, 'UNAVAILABLE');
  assert.equal(next.find(r => r.id === 'R2').readiness, 'UNKNOWN');
});
