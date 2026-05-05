# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Planning complete, implementation setup in progress.

## Current Goal

- Start Unit 02 (authentication and initial profile setup) after completing Unit 01 app shell.

## Completed

- Consolidated full product specification in `BodPose.md`.
- Established technology, feature, and phase direction for offline-first BodPose MVP.
- Replaced all six workflow context files with BodPose-specific implementation guidance.
- Created `context/specs/00-build-plan.md` with full phased unit order.
- Created `context/specs/01-bootstrap-app-shell.md` as implementation-ready Unit 01 spec.
- Completed Unit 01 foundation:
  - Bootstrapped Expo + Expo Router TypeScript project.
  - Added root and tab layouts with 5 BodPose routes.
  - Implemented dark theme token baseline and shared placeholder screen shell.
  - Added startup font loading gate via splash screen handling.

## In Progress

- Unit 02 planning and implementation setup (auth + profile onboarding flow).

## Next Up

- Unit 02: Auth and profile setup flow (Firebase Auth + initial profile capture).
- Unit 03: Local data foundation (WatermelonDB + MMKV wiring).
- Unit 04: Home dashboard foundation (Vj mini card, streak, quick-start shell).

## Open Questions

- Confirm final package selection for on-device pose detection path (MediaPipe bridge strategy vs TFLite-first fallback).
- Confirm premium gating strategy and entitlement source for custom pose generation.
- Confirm exact schema/versioning strategy for syncing WatermelonDB records to Firestore.

## Architecture Decisions

- Local-first architecture is mandatory; core pose functionality must not depend on internet.
- MMKV and WatermelonDB split is preserved: fast key-value cache vs relational historical records.
- AI provider calls are event-triggered and cached to control costs and latency.
- FastAPI remains the orchestration boundary for external AI providers and queue-backed tasks.

## Session Notes

- The six-file context system is now aligned to BodPose product requirements.
- Build plan and first spec file now exist and are ready for direct implementation prompt execution.
- Unit 01 verification status:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited `app/` and `src/` files.
