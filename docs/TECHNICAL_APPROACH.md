# Technical Approach Report

## Project identity
AAKAASH ADHINAYAK · VAYU NEXA AI · Alchemy Architects · SIH 2026 · SIH26250.

## Objective
Demonstrate a traceable, non-operational resource-planning workflow in which records are validated before a deterministic candidate plan is calculated, independently checked, explained and replayed after a controlled disruption.

## Architecture
- **Presentation:** React and TypeScript; responsive dark analytics UI; keyboard-usable tabs, tables and forms.
- **Domain types:** typed generic Resource, PlanningTask, Assignment, PlanningResult and ValidationReport records.
- **Planning:** deterministic priority/deadline heuristic; considers availability, capability tags, capacity, schedule overlap, maintenance and deadline constraints.
- **Independent verification:** rechecks known IDs, duplicate assignments, readiness/capacity/tags/time windows, maintenance conflicts, overlap and task accounting.
- **Data import:** browser-local CSV/JSON task import with schema/number/value checks and duplicate task-ID rejection.
- **Scenario engine:** a controlled synthetic outage changes one resource state and triggers a new plan.
- **Evidence:** downloadable JSON snapshots for runs, registry and session ledger.
- **VAYU NEXA AI:** local rule-based response helper reads current app state; no external LLM integration is configured.
- **Persistence:** browser memory only; history is not durable server-side storage.

## Workflow
Import → validate → optimise → independently verify → explain → replan → audit → export.

## Evaluation
Test whether unknown/unavailable resources are excluded, every task is assigned or explicitly unassigned, schedules do not overlap, all hard constraints are rechecked, invalid imports are rejected and disruption replay changes the scenario reproducibly. The included small test suite covers core solver behavior; expand it before relying on the app.

## Data provenance
The bundled IDs, hubs, tasks and time windows are synthetic. No live public data source is connected. A future connector should record publisher, endpoint, terms/licence, retrieval time, observation time, freshness, schema version and failure state.

## Limitations and scope
This is a heuristic demo, not an industrial optimisation solver. It has no trained predictive model, Three.js visualisation, external LLM, public-data connector, backend database, server-enforced roles or persistent audit system. No live military readiness, weapon selection, targeting, combat routing or restricted system integration is included. The prototype is not certified or MoD-approved.
