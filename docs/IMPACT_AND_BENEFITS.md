# Impact and Benefits Report

## Intended benefits
AAKAASH ADHINAYAK aims to demonstrate how transparent data validation and constraint checks can support clearer generic scheduling decisions. Its present benefits are educational and demonstrative; real-world operational impact has not been measured.

## Potential benefit pathways
- **Data quality:** surface malformed, duplicate, unknown or stale records before they enter a plan.
- **Constraint compliance:** independently check assignments for readiness, capacity, capability, maintenance and timing.
- **Disruption response:** compare a baseline run with a controlled synthetic outage.
- **Explainability:** present the records, unassigned tasks and validation state driving an outcome.
- **Auditability:** export input/output evidence and record local actions in the current browser session.
- **Learning:** give students a testable full-stack workflow connecting UI, typed data, a planner and a validator.

## Measurement framework
| Dimension | Suggested measure | Baseline needed |
|---|---|---|
| Plan feasibility | Hard-constraint violations in independent checks | Reference validator and adversarial cases |
| Coverage | Assigned and unassigned task count | Same task dataset in baseline and candidate |
| Delay | Total schedule delay | Existing/manual method |
| Replanning | Time and result difference after a controlled disruption | Repeatable scenario set |
| Data quality | Detection rate for seeded errors | Labelled ground-truth issue set |
| Usability | Task completion time / observed errors | User pilot |
| Reliability | Failed imports, exceptions and recovery | Automated/integration test suite |

## Evidence rules
Report measured values only with the dataset/version, scenario, baseline, test method and limitations. Runtime varies by machine and input. Do not turn demo results into claims of real-world savings, accuracy or lives protected.

## Scope and governance
The version in this repository uses synthetic generic records. It does not integrate live defence data or execute operational plans. Any future real-world use needs authorised data, domain review, human oversight, privacy/security controls and risk assessment.
