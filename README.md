<div align="center">

# AAKAASH ADHINAYAK
### Evidence-to-Decision Intelligence for Resource Planning
**Alchemy Architects · Smart India Hackathon 2026 · SIH26250**

[Open the hosted prototype](https://aakaash-adhinayak.ai.studio/)

</div>

## Overview
AAKAASH ADHINAYAK is a student research prototype exploring traceable resource planning: structured inputs, data-quality checks, deterministic scheduling, independent validation, controlled scenario replay and evidence-led explanations. The embedded local helper is named **VAYU NEXA AI**.

This repository contains a safe, non-operational demo using generic, explicitly synthetic resource/task fixtures. It is not a live aircraft/defence command system, and it is not approved by or connected to the Ministry of Defence.

## Demo workflow
`IMPORT → VALIDATE → OPTIMISE → INDEPENDENTLY VERIFY → EXPLAIN → REPLAN → EXPORT EVIDENCE`

### Features in this edition
- Responsive React + TypeScript dark analytics interface.
- Deterministic heuristic planner for generic tasks, capabilities, capacity, availability, deadlines and maintenance windows.
- Separate validator for assignment IDs, time windows, capacity/tags, double-booking and task accounting.
- CSV/JSON task import with schema, value and duplicate-ID checks.
- Synthetic resource-outage simulation and replanning.
- JSON export of runs, registry and evidence ledger.
- Session-only audit events.
- Local rule-based VAYU NEXA helper grounded in current browser state.
- SIH research, feasibility, viability, impact, revenue and reference documents under `docs/`.

## Run locally
Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Checks:
```bash
npm test
npm run build
```

No API credentials are required for this demo edition. Do not commit real secrets, tokens, service-account credentials or populated `.env` files.

## Judge demonstration
1. Open Command Centre and point out the synthetic-data banner.
2. Run the planning cycle and inspect assigned/unassigned tasks.
3. Open the independent validation report.
4. Simulate a generic resource outage and rerun.
5. Import a documented CSV/JSON task file.
6. Export the current run and evidence ledger.
7. Ask VAYU NEXA about unassigned tasks, failed checks or provenance.

## Data integrity and limitations
- Bundled records are synthetic, not operational or public-live data.
- No public weather connectors, external LLM, server database, role-enforced authentication or durable audit service are configured here.
- The heuristic is a small deterministic demonstration, not a certified or globally optimal solver.
- Runtime and allocation summaries describe only the current demo run. No universal accuracy, speed, efficiency or impact claim is made.
- A capability is not counted as implemented merely because it is described in a report.

## Responsible scope
This repository omits live military personnel/asset readiness, weapon/payload selection, targeting, tactical combat routing, threat evasion, autonomous combat control and restricted defence-network integration. Do not portray synthetic resource IDs, locations or statuses as genuine military information.

## Project documents
- [Technical approach](docs/TECHNICAL_APPROACH.md)
- [Feasibility](docs/FEASIBILITY.md)
- [Viability](docs/VIABILITY.md)
- [Impact and benefits](docs/IMPACT_AND_BENEFITS.md)
- [Revenue model](docs/REVENUE_MODEL.md)
- [References and research](docs/REFERENCES_AND_RESEARCH.md)
- [35-area roadmap](docs/35_AREA_ROADMAP.md)
- [Repository scope and limitations](docs/REPOSITORY_SCOPE.md)

**Evidence over assumption. Human review before real-world action.**
