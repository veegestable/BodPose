# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Mobile framework | React Native 0.74+ with Expo SDK 51+ | Cross-platform iOS/Android app shell and native API access |
| Routing | Expo Router v3 | File-based app navigation and nested route groups |
| UI styling | NativeWind v4 | Utility-based styling with tokenized design system usage |
| Rendering/animation | React Native Skia, Reanimated 3, Moti, Lottie | Pose overlays, smooth interactions, Vj avatar animation |
| Local state | Zustand | Session/UI state for user, pose, muscles, and Vj |
| Server state/cache | TanStack React Query v5 | API fetching, caching, retries, and sync lifecycle |
| Local database | WatermelonDB | Offline-first relational persistence for sessions and logs |
| Local KV cache | MMKV | Fast reads for profile, settings, and cached AI outputs |
| Mobile AI inference | MediaPipe Pose, TensorFlow Lite bridge | On-device keypoint extraction and offline feedback support |
| Backend API | FastAPI (Python 3.11+) | AI orchestration, validation, and service abstraction |
| Queue/workers | BullMQ + Redis (Upstash) | Async/queued AI jobs for expensive generation tasks |
| AI providers | Claude API, Replicate API | Body analysis/coaching (Claude) and custom pose generation (Replicate) |
| Cloud auth/data | Firebase Auth, Firestore, Firebase Storage | Authentication and conditional cloud backup |

## System Boundaries

- `app/` — Route-level screens and navigation structure only; no heavy business logic.
- `src/components/` — Reusable presentational and composed UI components.
- `src/hooks/` — Stateful screen-level behavior wrappers for camera, scoring, and API flows.
- `src/services/offline/` — Pure local logic (pose library, alignment engine, correction rules).
- `src/services/api/` — All client-side API integration layers (Claude/Firebase/Replicate endpoints via backend).
- `src/stores/` — App state containers; no direct network side effects inside store definitions.
- `src/db/` — WatermelonDB schema/models/database bootstrap; source of truth for relational local records.
- `src/constants/` — Static domain assets (poses, muscles, exercises, config flags, token maps).
- `src/utils/` — Shared deterministic helpers (angles, mapping, heatmap generation, cache management).
- `server/` — FastAPI routes, schema validation, provider service wrappers, and queue orchestration.
- `assets/` — Bundled static assets required for offline UX and base rendering.

## Storage Model

- **MMKV (local key-value):** User profile snapshot, settings, feature flags, cached body analysis, cached Vj messages.
- **WatermelonDB (local relational):** Pose sessions, workout logs, exercise entries, and progress-linked structured records.
- **Local file system (Expo File System):** Generated pose images and cached binary media for offline reuse.
- **Bundled static assets (`assets/`, `src/constants/`):** Pose templates, muscle maps, exercise library, iconography, fonts.
- **Firestore (cloud backup):** Synced user profile and historical records needed across devices.
- **Firebase Storage (cloud media):** Uploaded body photos and generated pose figure images.

## Auth and Access Model

- Authentication is handled by Firebase Auth (email/password and Google).
- Every stored record is user-scoped with `userId`; reads/writes must be filtered to the authenticated user.
- Local-first writes are allowed while offline; cloud writes happen via sync queue when connectivity returns.
- FastAPI endpoints that mutate or return user-specific data must validate authenticated identity before processing.

## Invariants

1. Core pose alignment, scoring, correction feedback, and exercise suggestion flows must work without internet.
2. No raw provider API keys are embedded in app code or committed to source; secrets stay in secure mobile/server env storage.
3. Online AI calls are event-triggered and cached; the app must never require constant AI round-trips for baseline UX.
4. All user-generated records are written locally first, then synced; cloud failure must not block local completion.
5. Route-level UI files in `app/` orchestrate only; domain logic lives in services/hooks/stores.
6. Color, spacing, and typography decisions must use UI tokens defined in `ui-context.md`; avoid ad hoc visual constants.
