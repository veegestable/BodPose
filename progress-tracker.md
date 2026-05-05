# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Planning complete, implementation setup in progress.

## Current Goal

- Prepare Unit 05 pose practice core shell after completing Unit 04 home dashboard.

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
- Created `context/specs/02-auth-profile-setup.md`.
- Completed Unit 02 authentication and profile setup foundation:
  - Added Firebase auth scaffold with env-based config.
  - Added Zustand auth/profile state store.
  - Added login/signup screens and route group.
  - Added initial profile setup screen and route gating.
  - Added `.env.example` for Firebase public variables.
- Created `context/specs/03-local-data-foundation.md`.
- Completed Unit 03 local data foundation:
  - Added MMKV storage wrapper helpers and profile storage key strategy.
  - Added WatermelonDB schema, model classes, and database singleton bootstrap.
  - Enabled TypeScript decorator support for WatermelonDB models.
  - Added app startup profile hydration and persistence through auth store integration.
- Created `context/specs/04-home-dashboard-foundation.md`.
- Completed Unit 04 home dashboard foundation:
  - Replaced Home placeholder with a multi-section dashboard layout.
  - Added Vj mini-card block, streak snapshot, quick-start actions, and account status panel.
  - Added reusable `SectionCard` home component.
  - Preserved logout flow and tab navigation links from dashboard actions.
- Applied Stitch/Iron Precision palette alignment:
  - Updated app color tokens in `src/constants/colors.ts`.
  - Updated `ui-context.md` color system and theme notes to match referenced design language.
- Applied UI polish and navigation constraint updates:
  - Bottom tab navigation now enforces a maximum of 4 visible buttons (Home, Pose, Muscles, Progress).
  - Analyze route remains accessible but is hidden from the tab bar.
  - Updated card, form, button, and border styling for Iron Precision consistency.
- Applied Stitch rhythm pass for screen structure:
  - Added shared `AppTopBar` component.
  - Updated tab screen placeholder layout to 16/24 spacing rhythm and unified section hierarchy.
  - Updated Home screen to use the same top-bar + spacing cadence as the rest of tab UI.

## In Progress

- Unit 05 planning and implementation setup (pose practice core shell).

## Next Up

- Unit 05: Offline pose practice core shell (camera + detector wrapper + score panel scaffold).
- Unit 06: Offline alignment engine and feedback rules.
- Unit 07: Pose library and pose detail foundation.

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
- Unit 02 verification status:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited files.
  - Auth flow requires Firebase env values in runtime for real sign-in/sign-up behavior.
- Unit 03 verification status:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited files.
  - WatermelonDB and MMKV packages are installed and scaffolded for upcoming feature units.
- Unit 04 verification status:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited files.
  - Home dashboard now includes actionable UI sections instead of placeholder-only content.
- Palette alignment verification:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited files.
- Navigation/polish verification:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited files.
- Rhythm/topbar verification:
  - TypeScript check passes (`npm run typecheck`).
  - No linter errors in edited files.
