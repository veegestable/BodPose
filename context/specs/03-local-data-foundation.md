# Unit 03: Local Data Foundation

## Goal

Establish BodPose local-first persistence with MMKV and WatermelonDB, including schema/models/database bootstrap and app-level initialization hooks so subsequent units can persist profile, sessions, and logs reliably offline.

## Design

- Keep persistence internals isolated from UI screens.
- MMKV is for fast key-value snapshots (profile/settings/cache).
- WatermelonDB is for relational records (pose sessions, workout logs, analysis history).
- Initialization should be safe, deterministic, and non-blocking for initial shell render.

## Implementation

### 1) Dependencies and Configuration

- Install and wire:
  - `react-native-mmkv`
  - `@nozbe/watermelondb`
- Ensure TypeScript config supports WatermelonDB model decorators.

### 2) MMKV Storage Service

- Add reusable MMKV wrapper helpers:
  - set JSON value
  - get JSON value
  - remove value
- Define storage keys for profile and future cached entities.

### 3) WatermelonDB Schema and Models

- Create `src/db/schema.ts` with baseline tables:
  - users
  - pose_sessions
  - workout_logs
- Add model classes under `src/db/models/` for each table.
- Include timestamps and user ownership fields for future sync behavior.

### 4) Database Bootstrap

- Add `src/db/database.ts`:
  - SQLite adapter setup
  - database instance creation
  - model registration
- Export stable singleton access for downstream services/hooks.

### 5) App-Level Hydration Hook

- Hydrate auth profile store from MMKV on startup.
- Persist profile updates back to MMKV when profile changes.
- Keep this unit local-only (no cloud sync yet).

## Dependencies

- `react-native-mmkv`
- `@nozbe/watermelondb`

## Verify When Done

- [ ] MMKV helpers can read/write/remove JSON profile payloads.
- [ ] WatermelonDB schema and model scaffolding compile successfully.
- [ ] Database bootstrap exports a usable singleton instance.
- [ ] Profile state hydrates from MMKV after app restart.
- [ ] Profile changes persist into MMKV without runtime errors.
- [ ] No TypeScript errors in edited files.
- [ ] No linter issues in edited files.
