# Feasibility Report

## Assessment
**A bounded, non-operational demonstrator is technically feasible.** A full real-time enterprise decision-support product is not established by this prototype and would require a separate scope, data permissions, security engineering, validated optimisation and operational review.

## Evidence in the current repository
- React + TypeScript source and a Vite build configuration.
- Generic seeded Resource and PlanningTask examples, explicitly marked SYNTHETIC_DEMO.
- Deterministic heuristic and independent validation code.
- CSV/JSON task intake, controlled resource outage, session events and JSON export.
- Automated tests cover unknown-state exclusion, task accounting, validator acceptance of a generated candidate and outage state change.

## Feasibility by workstream
| Workstream | Assessment | Main dependency |
|---|---|---|
| Responsive UI | Feasible | Build verification and browser testing |
| Generic planning algorithm | Feasible for a student demo | More edge-case tests; solver is heuristic |
| Data-quality imports | Feasible for documented schemas | Quoted CSV support, richer conflict/freshness rules |
| Independent validation | Feasible for current constraints | Adversarial tests and full coverage |
| Public-data connector | Feasible as a separate bounded task | Endpoint, terms, time fields and failure testing |
| Predictive maintenance | Researchable, not implemented | Obtain dataset, verify terms and reproduce training/evaluation |
| External LLM | Possible future extension | Server-side key handling, grounding, rate limits and cost controls |
| Authentication / persistent storage | Future extension | Backend rules, retention and security tests |
| Enterprise / safety-critical use | Not established | Independent safety, legal, security and domain qualification |

## Risks and mitigations
- **Data access:** use a small verified public dataset only after checking availability and terms; don't imply that public data includes military readiness.
- **False confidence:** keep UNKNOWN states explicit and block unsupported assignments.
- **Solver limitations:** describe results as candidates, not guaranteed optima; run independent checks.
- **Cloud costs / secrets:** current demo requires no key; any future secret must remain server-side.
- **Scope creep:** sequence a working core before adding 3D, prediction or live connectors.

## Acceptance gates
1. Install dependencies and pass production build in CI.
2. Pass unit and import validation tests.
3. Verify invalid candidate schedules are rejected.
4. Demonstrate one feasible and one infeasible case.
5. Reproduce outage/replanning evidence and export.
6. Document every public-data source and current integration status.

This is a desk feasibility assessment of the repository design; it is not an external certification or a completed production audit.
