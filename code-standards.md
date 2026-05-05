# Code Standards

## General

- Keep modules small and single-purpose; one file should solve one clear responsibility.
- Fix root causes instead of patching symptoms with temporary workarounds.
- Keep screen orchestration, state, domain logic, and network integration in separate layers.
- Prefer deterministic, testable utility functions for pose math and mapping logic.
- Preserve offline-first behavior when adding any new feature.

## TypeScript

- Use strict TypeScript and explicit domain types from `src/types/`.
- Do not use `any` unless there is no practical alternative and scope is narrowly isolated.
- Validate unknown external data at boundaries (API responses, camera payloads, storage hydration).
- Prefer discriminated unions for stateful workflow and result status modeling.
- Keep type definitions close to the domain (`pose.types.ts`, `body.types.ts`, etc.).

## React Native and Expo

- Keep `app/` route files focused on composition and navigation; move behavior into hooks/services.
- Use hooks for reusable screen behavior (`usePoseDetection`, `useAlignmentScore`, `useBodyAnalysis`).
- Isolate platform permissions (camera, media, notifications) behind focused helpers/hooks.
- Avoid blocking renders with heavy calculations; move expensive work to memoized utilities.

## Styling

- Use only design tokens from `src/constants/colors.ts` and `ui-context.md`; avoid raw hex values in components.
- Respect typography roles (Bebas Neue for display, DM Sans for body, JetBrains Mono for stats).
- Follow spacing rhythm (8px grid, 16px base padding) and consistent radii.
- Use semantic status colors consistently: warning only for corrections, success only for valid alignment.

## API Routes

- Validate request payloads with explicit schemas before provider calls.
- Enforce auth and user ownership checks before returning or mutating user data.
- Keep each endpoint focused on one job: analyze, generate, coach, or keypoint processing.
- Return predictable response contracts and explicit error payloads for client handling.
- Use queue-based execution for expensive generation jobs; avoid long blocking request lifetimes.

## Data and Storage

- Persist relational session/log data in WatermelonDB first.
- Store cache-like profile snapshots and AI message/results in MMKV.
- Store binary images in file system/Firebase Storage, not in document fields.
- Every persistable record must be tagged with `userId`, timestamps, and sync status metadata when applicable.
- Sync must be retry-safe and idempotent to prevent duplicate cloud records.

## File Organization

- `app/` — Route and navigation entry points only.
- `src/components/` — Reusable UI by domain (`pose`, `body`, `vj`, `progress`, `exercises`).
- `src/services/` — API integrations and offline engines.
- `src/stores/` — Zustand slices and state actions without hidden side effects.
- `src/db/` — Local schema, models, and database initialization.
- `server/` — FastAPI routes, service adapters, and queue integration.
