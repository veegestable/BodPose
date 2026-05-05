# BodPose Build Plan

This plan decomposes BodPose into scoped, verifiable implementation units in dependency order.

## Phase 1 (MVP Must-Have)

### Unit 01: Bootstrap and App Shell
Build the Expo Router base app shell, dark theme tokens, font loading, and bottom-tab navigation skeleton.
Dependencies: none.

### Unit 02: Authentication and Initial Profile Setup
Implement Firebase Auth (email/Google where supported), plus profile setup form for core user attributes.
Dependencies: Unit 01.

### Unit 03: Local Data Foundation
Set up MMKV and WatermelonDB schema/models/bootstrap, plus app-level storage initialization.
Dependencies: Unit 01.

### Unit 04: Home Dashboard Foundation
Build Home screen sections: greeting, Vj mini card placeholder, streak badge shell, quick-start card.
Dependencies: Units 01, 02, 03.

### Unit 05: Pose Practice Core (Offline)
Implement camera permissions, live camera view, pose detector wrapper integration, skeleton overlay surface, and live score panel shell.
Dependencies: Units 01, 03.

### Unit 06: Offline Alignment Engine and Feedback Rules
Implement joint angle comparison, per-joint status (green/amber/red), total score computation, and rule-based corrective text.
Dependencies: Unit 05.

### Unit 07: Pose Library and Pose Detail
Ship initial bundled pose set, pose selector UI, and pose detail screen with keypoint guidance and practice launch.
Dependencies: Units 05, 06.

### Unit 08: Muscles and Exercise Suggestions (Offline)
Implement front/back muscle map selection, weak-muscle persistence, and local exercise list filtering.
Dependencies: Units 03, 04.

### Unit 09: Progress Tracking and Heatmap
Implement workout/pose log writing, streak computation, heatmap data generation, and progress charts shell.
Dependencies: Units 03, 04, 06.

### Unit 10: Basic Vj Experience (Offline First)
Implement Vj state store, prewritten motivational message bank, trigger wiring for core events, and mini/full Vj views.
Dependencies: Units 04, 06, 09.

## Phase 2 (Extended Core + AI)

### Unit 11: FastAPI Backend Scaffold
Create FastAPI app structure, routers, schema models, and environment handling for AI integrations.
Dependencies: none on mobile units; can be parallelized after architecture setup.

### Unit 12: Body Photo Analysis (Claude Vision)
Implement analyze upload flow and backend endpoint, structured analysis parsing, caching, and UI rendering.
Dependencies: Units 02, 03, 11.

### Unit 13: Firebase Backup Sync
Implement online sync queue logic from local records to Firestore/Storage and conflict-safe retries.
Dependencies: Units 02, 03, 09.

### Unit 14: Vj Live AI Coaching
Implement backend coaching endpoint and event-based fetch/caching for online Vj message generation.
Dependencies: Units 10, 11, 13.

### Unit 15: Full Pose and Muscle Library Expansion
Expand from initial MVP subset to full pose and muscle/exercise catalog defined in product spec.
Dependencies: Units 07, 08.

## Phase 3 (Premium + Advanced)

### Unit 16: Custom Pose Generation (Replicate + Queue)
Implement keypoint-to-image generation pipeline via FastAPI + BullMQ + Redis and mobile consumption flow.
Dependencies: Units 05, 11, 13.

### Unit 17: Competition Mode
Implement sequence-based judged posing mode with scoring rollup and timed transitions.
Dependencies: Units 06, 07, 09.

### Unit 18: Social and Sharing Layer
Implement score sharing/export and optional social-style distribution features.
Dependencies: Units 09, 13.

## Build Order Validation

- Security and identity precede user-scoped cloud operations.
- Offline core behavior is delivered before premium or cloud-dependent features.
- Backend integrations are introduced only when a specific unit requires them.
- Every unit has one primary visible result and can be verified without waiting several units.
