import test from 'node:test';
import assert from 'node:assert/strict';
import {DEMO_RESOURCES,DEMO_WORK,optimisePlan,validatePlan,createOutage} from '../src/core.ts';
test('unknown resources are not assigned',()=>{const p=optimisePlan(DEMO_RESOURCES,[DEMO_WORK[4]]);assert.ok(p.assigned.every(a=>a.resourceId!=='R5'));});
test('every task is accounted for',()=>{const p=optimisePlan(DEMO_RESOURCES,DEMO_WORK);assert.equal(p.assigned.length+p.unassigned.length,DEMO_WORK.length);});
test('candidate passes independent validation',()=>{const p=optimisePlan(DEMO_RESOURCES,DEMO_WORK);assert.equal(validatePlan(DEMO_RESOURCES,DEMO_WORK,p).passed,true);});
test('outage does not mutate baseline data',()=>{const p=createOutage(DEMO_RESOURCES,'R1');assert.equal(p.find(r=>r.id==='R1')?.state,'UNAVAILABLE');assert.equal(DEMO_RESOURCES.find(r=>r.id==='R1')?.state,'AVAILABLE');});
test('validator rejects a duplicate assignment',()=>{const p=optimisePlan(DEMO_RESOURCES,[DEMO_WORK[0]]);assert.equal(validatePlan(DEMO_RESOURCES,[DEMO_WORK[0]],{...p,assigned:[...p.assigned,...p.assigned],unassigned:[]}).passed,false);});
