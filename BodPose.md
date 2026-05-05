# BodPose — Full MVP Prompt for Base44 AI

---

## 🧠 App Overview

**App Name:** BodPose  
**Tagline:** "Your AI Posing Coach. Built for Champions."  
**Platform:** Mobile (iOS + Android) via React Native + Expo  
**Architecture:** Hybrid — Offline-first core with online AI features called sparingly  
**Primary Goal:** Help bodybuilders improve their competition posing through AI-powered body analysis, real-time skeleton overlay alignment, muscle weakness targeting, and a motivational AI gym buddy named **Vj**.

---

## 🎨 Design System — "Power House" Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#000000` (Obsidian) | Primary background, all screens |
| `--color-accent` | `#D32F2F` (Crimson Red) | Target muscles, CTAs, active states |
| `--color-detail` | `#B0BEC5` (Silver Metallic) | Secondary text, borders, icons, UI details |
| `--color-warning` | `#FFC107` (Amber) | Pose correction warnings, "off" joint indicators |
| `--color-success` | `#4CAF50` (Green) | Correct alignment, completed sets |
| `--color-surface` | `#111111` | Card backgrounds, modals |
| `--color-surface-2` | `#1A1A1A` | Elevated surfaces, bottom sheets |
| `--color-text-primary` | `#FFFFFF` | Headlines, primary text |
| `--color-text-secondary` | `#B0BEC5` | Subtext, labels, captions |

**Typography:**
- Display / Headers: `Bebas Neue` (aggressive, bodybuilding feel)
- Body / UI: `DM Sans` (clean, readable)
- Monospace / Stats: `JetBrains Mono` (for numbers, timers, scores)

**UI Principles:**
- Dark-first, high contrast
- Bold section headers in Bebas Neue uppercase
- Minimal chrome — let content breathe
- Red accents only on interactive or critical elements
- Amber used ONLY for warnings / corrections
- Card corners: `border-radius: 12px`
- Consistent 16px base padding, 8px grid spacing

---

## 📱 Tech Stack

### Mobile (React Native + Expo)
| Category | Technology | Purpose |
|----------|-----------|---------|
| Framework | React Native 0.74+ | Core mobile framework |
| Build Tool | Expo SDK 51+ (managed workflow) | Camera, file system, device APIs |
| Routing | Expo Router v3 (file-based) | Navigation across all screens |
| Styling | NativeWind v4 (Tailwind for RN) | Utility-first styling |
| State — UI | Zustand | Local UI state, user session, Vj state |
| State — Server | TanStack React Query v5 | API caching, background sync, retry logic |
| Local DB | WatermelonDB | Offline-first relational data (workouts, poses, progress) |
| Fast Cache | MMKV (react-native-mmkv) | Ultra-fast key-value cache (body profile, settings) |
| Pose Rendering | React Native Skia | Draw skeleton overlays, silhouettes, heatmaps on camera |
| Camera | Expo Camera | Live camera feed for pose alignment |
| Image Picker | Expo Image Picker | Upload body reference photos |
| File System | Expo File System | Save generated pose figures, cached assets locally |
| Animations | Reanimated 3 + Moti | Smooth transitions, Vj animations, skeleton interpolation |
| Charts | Victory Native XL | Heatmap calendar, progress graphs |
| Icons | Lucide React Native | Consistent icon system |
| Lottie | Lottie React Native | Vj avatar animations, celebration effects |
| Haptics | Expo Haptics | Feedback on pose lock-in, corrections |
| Notifications | Expo Notifications | Vj daily check-in reminders |
| Secure Store | Expo Secure Store | Store API keys, auth tokens securely |

### Backend / API Server
| Category | Technology | Purpose |
|----------|-----------|---------|
| API Server | FastAPI (Python 3.11+) | Bridge between app and AI services |
| Hosting | Railway.app (or Render.com) | Free tier available, auto-deploy from GitHub |
| Job Queue | BullMQ + Redis (Upstash free tier) | Queue image generation jobs, prevent GPU overload |
| Image Generation | Replicate API (Stable Diffusion XL + ControlNet) | Generate pose figures from skeleton keypoints |
| Body Analysis | Claude API (claude-sonnet-4-20250514, Vision) | Analyze uploaded body photo, proportions, muscle assessment |
| AI Coaching | Claude API | Personalized posing tips, Vj motivational messages |
| Pose Keypoints | MediaPipe Pose (server-side Python) | Server-side fallback for keypoint extraction |

### Firebase (Your Existing Stack)
| Service | Purpose |
|---------|---------|
| Firebase Auth | User authentication (email, Google) |
| Firestore | Cloud backup of user profile, progress, generated poses |
| Firebase Storage | Store uploaded body photos, generated pose figures |
| Firebase Analytics | Track feature usage, funnel analysis |

### Offline AI (On-Device)
| Technology | Purpose |
|-----------|---------|
| TensorFlow Lite (via react-native-fast-tflite) | Run lightweight pose detection model on-device |
| MediaPipe Pose (WASM bridge or native) | 33-point body skeleton extraction from camera |
| Pre-built Pose Library (JSON + SVG, bundled) | 25 standard bodybuilding poses shipped with app |
| Rule-based feedback engine (JS) | "Raise left arm 10°", "Tuck chin down" — no API needed |

---

## 🗂️ Folder Structure

```
bodpose/
├── app/                          # Expo Router screens (file-based routing)
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── signup.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx           # Bottom tab navigator
│   │   ├── index.tsx             # Home / Dashboard
│   │   ├── pose.tsx              # Pose Practice (camera + overlay)
│   │   ├── analyze.tsx           # Upload photo for AI analysis
│   │   ├── muscles.tsx           # Muscle Weakness Selector
│   │   ├── exercises.tsx         # Exercise Library (by muscle)
│   │   └── progress.tsx          # Progress + Heatmap
│   ├── pose/
│   │   └── [poseId].tsx          # Individual pose detail screen
│   ├── vj/
│   │   └── index.tsx             # Vj AI buddy full screen
│   ├── settings/
│   │   └── index.tsx
│   └── _layout.tsx               # Root layout
│
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Skeleton.tsx      # Loading skeleton
│   │   │   └── Toast.tsx
│   │   ├── pose/
│   │   │   ├── PoseOverlay.tsx   # Skia skeleton drawing on camera
│   │   │   ├── PoseCard.tsx      # Pose thumbnail + name
│   │   │   ├── PoseSelector.tsx  # Horizontal scroll pose picker
│   │   │   ├── AlignmentScore.tsx # Real-time joint score display
│   │   │   └── JointIndicator.tsx # Red/Amber/Green dot per joint
│   │   ├── body/
│   │   │   ├── BodyHeatmap.tsx   # Front/back muscle heatmap SVG
│   │   │   ├── MuscleSelector.tsx # Tap-to-select muscle weakness
│   │   │   └── BodyStats.tsx     # Height, weight, body type display
│   │   ├── vj/
│   │   │   ├── VjAvatar.tsx      # Lottie animated Vj character
│   │   │   ├── VjBubble.tsx      # Speech bubble with Vj message
│   │   │   └── VjMiniCard.tsx    # Mini Vj widget on home screen
│   │   ├── progress/
│   │   │   ├── HeatmapCalendar.tsx  # Workout frequency heatmap
│   │   │   ├── ProgressChart.tsx    # Line/bar chart for scores
│   │   │   └── StreakBadge.tsx
│   │   └── exercises/
│   │       ├── ExerciseCard.tsx
│   │       └── ExerciseList.tsx
│   │
│   ├── stores/                   # Zustand stores
│   │   ├── useUserStore.ts       # User profile, body measurements
│   │   ├── usePoseStore.ts       # Active pose, alignment score, session
│   │   ├── useVjStore.ts         # Vj messages, mood, last interaction
│   │   ├── useMuscleStore.ts     # Selected weak muscles
│   │   └── useProgressStore.ts  # Streak, heatmap data
│   │
│   ├── services/                 # API + data services
│   │   ├── api/
│   │   │   ├── claudeService.ts  # Claude API calls (analysis, coaching)
│   │   │   ├── replicateService.ts # Pose figure generation
│   │   │   └── firebaseService.ts  # Firebase sync
│   │   ├── offline/
│   │   │   ├── poseLibrary.ts    # Load pre-built poses from assets
│   │   │   ├── alignmentEngine.ts # Joint angle scoring (offline)
│   │   │   └── feedbackRules.ts  # Rule-based pose corrections
│   │   └── mediapipe/
│   │       └── poseDetector.ts   # MediaPipe wrapper
│   │
│   ├── db/                       # WatermelonDB schema + models
│   │   ├── schema.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── PoseSession.ts
│   │   │   ├── WorkoutLog.ts
│   │   │   ├── ExerciseEntry.ts
│   │   │   └── BodyAnalysis.ts
│   │   └── database.ts           # DB initialization
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useCamera.ts
│   │   ├── usePoseDetection.ts
│   │   ├── useAlignmentScore.ts
│   │   ├── useBodyAnalysis.ts    # Triggers Claude API (cached)
│   │   ├── useVjMessage.ts       # Fetches Vj motivational message
│   │   └── useHeatmap.ts
│   │
│   ├── constants/
│   │   ├── poses.ts              # 25 pre-built pose definitions (keypoints)
│   │   ├── muscles.ts            # Muscle group definitions + body map coords
│   │   ├── exercises.ts          # Exercise library (local, no API needed)
│   │   ├── colors.ts             # Design tokens
│   │   └── config.ts             # API endpoints, feature flags
│   │
│   ├── types/
│   │   ├── pose.types.ts
│   │   ├── body.types.ts
│   │   ├── exercise.types.ts
│   │   └── vj.types.ts
│   │
│   └── utils/
│       ├── angleCalculator.ts    # Joint angle math
│       ├── keypointMapper.ts     # MediaPipe → app keypoint format
│       ├── heatmapGenerator.ts   # Build calendar heatmap data
│       ├── cacheManager.ts       # MMKV read/write helpers
│       └── backupManager.ts      # Firebase backup trigger logic
│
├── assets/
│   ├── poses/                    # Pre-built pose SVGs + keypoint JSON
│   │   ├── front-double-bicep.svg
│   │   ├── front-double-bicep.json
│   │   ├── side-chest.svg
│   │   ├── side-chest.json
│   │   ├── rear-lat-spread.svg
│   │   ├── rear-lat-spread.json
│   │   ├── front-lat-spread.svg
│   │   ├── front-lat-spread.json
│   │   ├── most-muscular.svg
│   │   ├── most-muscular.json
│   │   ├── side-tricep.svg
│   │   ├── side-tricep.json
│   │   ├── rear-double-bicep.svg
│   │   ├── rear-double-bicep.json
│   │   ├── abdominal-thigh.svg
│   │   ├── abdominal-thigh.json
│   │   └── [16 more standard poses...]
│   │
│   ├── vj/                       # Vj avatar assets
│   │   ├── vj-idle.json          # Lottie idle animation
│   │   ├── vj-celebrate.json     # Lottie celebration animation
│   │   ├── vj-thinking.json      # Lottie thinking animation
│   │   ├── vj-disappointed.json  # Lottie disappointed animation
│   │   ├── vj-hype.json          # Lottie hype/pump-up animation
│   │   └── vj-avatar.png         # Static fallback avatar
│   │
│   ├── muscles/                  # Muscle heatmap SVG layers
│   │   ├── body-front-base.svg   # Base body silhouette (front)
│   │   ├── body-back-base.svg    # Base body silhouette (back)
│   │   ├── muscle-chest.svg      # Chest overlay layer
│   │   ├── muscle-shoulders.svg
│   │   ├── muscle-biceps.svg
│   │   ├── muscle-triceps.svg
│   │   ├── muscle-forearms.svg
│   │   ├── muscle-traps.svg
│   │   ├── muscle-lats.svg
│   │   ├── muscle-upper-back.svg
│   │   ├── muscle-lower-back.svg
│   │   ├── muscle-abs.svg
│   │   ├── muscle-obliques.svg
│   │   ├── muscle-quads.svg
│   │   ├── muscle-hamstrings.svg
│   │   ├── muscle-glutes.svg
│   │   └── muscle-calves.svg
│   │
│   ├── icons/                    # App-specific custom icons
│   │   ├── app-icon.png          # 1024x1024 app icon
│   │   ├── app-icon-dark.png     # Dark variant
│   │   ├── splash-screen.png     # Splash screen (2732x2732)
│   │   ├── adaptive-icon.png     # Android adaptive icon
│   │   ├── icon-pose.png         # Tab: Pose
│   │   ├── icon-analyze.png      # Tab: Analyze
│   │   ├── icon-muscles.png      # Tab: Muscles
│   │   ├── icon-progress.png     # Tab: Progress
│   │   ├── icon-medal-gold.png   # Achievement: Gold
│   │   ├── icon-medal-silver.png # Achievement: Silver
│   │   ├── icon-medal-bronze.png # Achievement: Bronze
│   │   ├── icon-streak-fire.png  # Streak indicator
│   │   └── icon-vj-mini.png      # Mini Vj tab icon
│   │
│   ├── images/
│   │   ├── onboarding-1.png      # Onboarding screen 1 hero image
│   │   ├── onboarding-2.png      # Onboarding screen 2 hero image
│   │   ├── onboarding-3.png      # Onboarding screen 3 hero image
│   │   ├── placeholder-body.png  # Default body placeholder (no photo)
│   │   ├── placeholder-pose.png  # Default pose placeholder
│   │   └── bg-texture.png        # Subtle dark texture for backgrounds
│   │
│   └── fonts/
│       ├── BebasNeue-Regular.ttf
│       ├── DMSans-Regular.ttf
│       ├── DMSans-Medium.ttf
│       ├── DMSans-Bold.ttf
│       └── JetBrainsMono-Regular.ttf
│
├── server/                       # FastAPI backend
│   ├── main.py
│   ├── routers/
│   │   ├── analyze.py            # Body photo analysis endpoint
│   │   ├── generate.py           # Pose figure generation endpoint
│   │   ├── coaching.py           # Vj coaching message endpoint
│   │   └── keypoints.py          # Server-side MediaPipe endpoint
│   ├── services/
│   │   ├── claude_service.py
│   │   ├── replicate_service.py
│   │   └── mediapipe_service.py
│   ├── models/
│   │   └── schemas.py            # Pydantic request/response schemas
│   └── requirements.txt
│
├── app.json                      # Expo config
├── tailwind.config.js            # NativeWind config
├── babel.config.js
├── tsconfig.json
└── package.json
```

---

## 📋 App Screens — Full List

### Onboarding Flow
1. **Splash Screen** — BodPose logo, Power House palette, animated logo reveal
2. **Onboarding 1** — "Train Like a Champion" — intro to pose practice
3. **Onboarding 2** — "AI Analyzes Your Body" — body photo upload intro
4. **Onboarding 3** — "Meet Vj, Your Gym Buddy" — introduce Vj avatar
5. **Sign Up / Login** — Firebase Auth (email or Google)
6. **Profile Setup** — Name, height (cm/ft), weight (kg/lbs), body goal, experience level, competition category (Classic, Men's Physique, Open Bodybuilding)

### Main App (Bottom Tabs)
7. **Home / Dashboard** — Greeting, Vj mini widget with today's message, streak badge, quick-start pose session, last session score
8. **Pose Practice** — Camera feed with Skia skeleton overlay, pose selector, real-time joint alignment score, amber/green indicators per joint, session timer
9. **AI Analyze** — Upload body photo, view Claude analysis results (proportions, strengths, weaknesses), cached per photo
10. **Muscles & Exercises** — Interactive front/back body heatmap, tap muscle to mark as weak, see exercise list with descriptions
11. **Progress** — Heatmap calendar (workout frequency), pose score trend chart, streak counter, before/after photo timeline

### Secondary Screens
12. **Pose Detail** — Full-screen pose guide, keypoints breakdown, coaching tips, practice button
13. **Exercise Detail** — Exercise name, targeted muscle, sets/reps recommendation, description, difficulty badge
14. **Vj Full Screen** — Full Vj avatar with chat interface, motivational messages, progress commentary
15. **Settings** — Units, notification preferences, backup status, account, data export

---

## 🤖 AI Features — Detailed Spec

### 1. Body Analysis (Claude Vision API)
**Trigger:** User uploads a body photo (first time or new upload)  
**What Claude receives:**
- Body photo (base64)
- Height, weight, competition category
- Body measurement context

**What Claude returns (JSON):**
```json
{
  "bodyType": "mesomorph",
  "proportions": {
    "shoulderToWaist": "excellent",
    "chestDepth": "good",
    "legDevelopment": "needs_work"
  },
  "strengths": ["Wide clavicles", "Full chest", "Defined arms"],
  "weaknesses": ["Quad sweep", "Hamstring thickness", "Calf size"],
  "recommendedPoses": ["front-double-bicep", "most-muscular", "side-chest"],
  "bodyFatEstimate": "10-12%",
  "vjComment": "Bro your upper body is STACKED. We just need to bring up those wheels!"
}
```
**Caching:** Result stored in MMKV + Firestore. Only re-called when user uploads a new photo.

---

### 2. Real-Time Pose Alignment (Offline — MediaPipe + Skia)
**Trigger:** User enters Pose Practice screen  
**Process:**
- MediaPipe extracts 33 keypoints from camera feed at 30fps
- App compares user's keypoints to selected pose's reference keypoints
- Angle difference calculated per joint
- Skia draws:
  - Green lines: joints within 10° of target
  - Amber lines: joints 10°–25° off
  - Red lines: joints 25°+ off
- Alignment score (0–100) shown in real-time
- Rule-based text feedback: "Raise your right arm 15° higher"

**Fully offline — zero API calls.**

---

### 3. Vj AI Gym Buddy (Claude API — Called Sparingly)
**Character:** Vj is a hype, street-smart, motivational AI gym buddy. Talks like a real gym bro. Supportive but honest. Never overly formal.  
**Personality traits:** Energetic, direct, funny, pushes you hard but celebrates your wins  
**Voice style:** "Bro", "Let's get it", "No excuses", "That's actually fire progress"

**Trigger events for Vj API call:**
- User completes a pose session (calls Claude with session score)
- User hasn't practiced in 2+ days (push notification → Vj message)
- User hits a new personal best score
- User marks a new muscle weakness
- Weekly Sunday progress summary

**Vj message examples:**
- Score improved: *"YO that's a 12-point jump from last week! Your front double bicep is coming ALIVE bro. Keep that elbow flare consistent and you're gonna cook on stage."*
- Missed 3 days: *"Bro... where you been? Stage doesn't wait for nobody. 15 minutes. That's all I need from you today. Let's go."*
- New weakness selected (calves): *"Calves huh? The most skipped muscle in bodybuilding and also the most judged. Respect for being honest. Let's fix this."*

**Vj is cached** — messages stored in MMKV, only fetches new message on trigger events.

---

### 4. Pose Figure Generation (Replicate — ControlNet)
**Trigger:** User wants a custom pose figure (premium feature)  
**Process:**
- User's keypoints from MediaPipe sent to FastAPI server
- Server sends keypoints to Replicate ControlNet endpoint
- Returns a stylized bodybuilder pose figure image
- Saved to Firebase Storage + local file system
- Used as the overlay target in Pose Practice

**Standard poses use pre-built SVGs (zero cost).**  
**Custom poses only = API call.**

---

### 5. Muscle Weakness → Exercise Suggestions (Offline)
**Trigger:** User selects weak muscle groups on body heatmap  
**Process (fully offline):**
- User taps muscle group on interactive SVG body map
- Selected muscles stored in Zustand + WatermelonDB
- App filters local exercise library (bundled with app, ~200 exercises)
- Returns exercise cards with: name, description, sets/reps, difficulty, target muscle

**Exercise library is pre-built JSON, no API needed.**  
Vj comments on chosen muscles via Claude API only on first selection.

---

## 📊 Data Models

### User Profile (MMKV + Firestore)
```typescript
{
  id: string
  name: string
  height: number        // cm
  weight: number        // kg
  competitionCategory: 'classic' | 'physique' | 'open' | 'wellness'
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'
  bodyPhotoUri?: string
  bodyAnalysis?: BodyAnalysis   // Cached Claude result
  weakMuscles: MuscleGroup[]
  createdAt: Date
  updatedAt: Date
}
```

### Pose Session (WatermelonDB)
```typescript
{
  id: string
  userId: string
  poseId: string
  date: Date
  durationSeconds: number
  peakScore: number       // 0-100
  avgScore: number
  jointScores: Record<JointName, number>
  feedback: string[]      // Rule-based corrections logged
  vjCommentTriggered: boolean
}
```

### Workout Log (WatermelonDB) — for heatmap
```typescript
{
  id: string
  userId: string
  date: Date            // Used to build heatmap
  type: 'pose' | 'gym'
  durationMinutes: number
  musclesWorked: MuscleGroup[]
  notes?: string
}
```

---

## 🗺️ Heatmap — Progress Tracker

- **Style:** GitHub-style contribution calendar
- **Color gradient:** `#1A1A1A` (no activity) → `#D32F2F` (crimson, high activity)
- **What counts as activity:** Any pose session OR manual gym log
- **Data source:** WatermelonDB WorkoutLog table
- **Backup:** Synced to Firestore when online
- **Display:** Last 365 days, grouped by week, tappable day shows session summary

---

## 💾 Data Storage Strategy

### Local Storage (Primary — Always Available)
| Data | Storage | Why |
|------|---------|-----|
| User profile + body analysis | MMKV | Ultra-fast reads, persists across sessions |
| Pose sessions + workout logs | WatermelonDB | Relational, queryable, offline-first |
| Generated pose figures | Expo File System | Binary image files |
| Vj messages cache | MMKV | Instant access, no API wait |
| Exercise library | Bundled JSON (constants/) | Zero latency, no storage needed |
| Pre-built poses | Bundled SVG + JSON (assets/) | Zero latency, no storage needed |

### Cloud Backup (Firebase — When Online)
| Data | Service | Trigger |
|------|---------|---------|
| User profile | Firestore | On update or app background |
| Pose sessions | Firestore | On session complete |
| Workout logs | Firestore | On log entry |
| Body photos | Firebase Storage | On upload |
| Generated poses | Firebase Storage | On generation |

**Backup logic:** App checks network status via `@react-native-community/netinfo`. When online, queues unsynced records and pushes to Firebase. User always sees local data instantly.

---

## 🏋️ Pre-Built Pose Library (25 Poses — Bundled)

| # | Pose Name | Category |
|---|-----------|----------|
| 1 | Front Double Bicep | Classic + Open |
| 2 | Front Lat Spread | Classic + Open |
| 3 | Side Chest (Left) | Classic + Open |
| 4 | Side Chest (Right) | Classic + Open |
| 5 | Side Tricep (Left) | Classic + Open |
| 6 | Side Tricep (Right) | Classic + Open |
| 7 | Rear Double Bicep | Classic + Open |
| 8 | Rear Lat Spread | Classic + Open |
| 9 | Abdominal & Thigh | Classic + Open |
| 10 | Most Muscular (Crab) | Open |
| 11 | Most Muscular (Hands Clasped) | Open |
| 12 | Front Relaxed | Men's Physique |
| 13 | Side Relaxed | Men's Physique |
| 14 | Rear Relaxed | Men's Physique |
| 15 | Quarter Turn Left | All categories |
| 16 | Quarter Turn Right | All categories |
| 17 | Quarter Turn Back | All categories |
| 18 | Classic Physique Vacuum | Classic |
| 19 | Classic Physique Front Double Bicep | Classic |
| 20 | Wellness Front Pose | Wellness |
| 21 | Wellness Back Pose | Wellness |
| 22 | Figure Front Pose | Figure |
| 23 | Figure Back Pose | Figure |
| 24 | Bodybuilding Transition Flow (sequence) | All |
| 25 | Custom (AI Generated) | Premium |

---

## 💪 Muscle Groups + Exercise Library Structure

### Muscle Groups (17 groups)
```
Upper Body (Push): Chest, Front Shoulders, Side Shoulders, Triceps
Upper Body (Pull): Lats, Traps, Rear Delts, Biceps, Forearms, Upper Back, Lower Back
Core: Abs, Obliques
Lower Body: Quads, Hamstrings, Glutes, Calves
```

### Exercise Card Structure
```typescript
{
  id: string
  name: string                  // e.g. "Hack Squat"
  targetMuscle: MuscleGroup     // Primary
  secondaryMuscles: MuscleGroup[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  equipment: 'barbell' | 'dumbbell' | 'machine' | 'cable' | 'bodyweight'
  sets: string                  // e.g. "4"
  reps: string                  // e.g. "8-12"
  description: string           // 2-3 sentence technique description
  bodybuilderTip: string        // Posing-specific benefit e.g. "Builds quad sweep for front lat spread"
}
```

---

## 🧩 Vj Avatar — Asset Requirements

Vj is a stylized, athletic character — think a cartoon gym bro mascot. NOT a realistic human. Bold lines, confident stance.

| Asset | Format | Dimensions | Description |
|-------|--------|-----------|-------------|
| `vj-idle.json` | Lottie | — | Vj standing, slight breathing/bob loop |
| `vj-celebrate.json` | Lottie | — | Vj pumping fist, jumping, celebration |
| `vj-thinking.json` | Lottie | — | Vj stroking chin, eyes moving |
| `vj-disappointed.json` | Lottie | — | Vj shaking head slowly, arms crossed |
| `vj-hype.json` | Lottie | — | Vj clapping, screaming hype |
| `vj-avatar.png` | PNG | 512x512 | Static fallback, transparent bg |
| `vj-mini.png` | PNG | 128x128 | Small avatar for cards/widgets |

**Vj Design Notes:** Dark skin, athletic built, wearing a black tank top, silver dog tags, red wristbands. Expression is always intense or smiling. Eyes forward, confident. Has the word "VJ" on his shirt or cap.

---

## 🖼️ Required Assets Checklist for Base44

### Icons (PNG, transparent background)
- [ ] App icon 1024x1024
- [ ] Splash screen 2732x2732
- [ ] Adaptive icon (Android) 1024x1024
- [ ] Tab icons x5 (Home, Pose, Analyze, Muscles, Progress) — 48x48 each
- [ ] Medal icons x3 (Gold, Silver, Bronze) — 64x64
- [ ] Streak fire icon — 64x64
- [ ] Vj mini icon — 64x64

### Pose SVGs (vector, viewBox 0 0 200 400, black silhouette)
- [ ] 24 standard pose silhouettes
- [ ] Each with corresponding keypoint JSON

### Muscle Map SVGs (vector, layered)
- [ ] Body front base silhouette
- [ ] Body back base silhouette
- [ ] 17 individual muscle overlay SVGs (each a separate layer, colored with CSS)

### Vj Animations (Lottie JSON)
- [ ] vj-idle.json
- [ ] vj-celebrate.json
- [ ] vj-thinking.json
- [ ] vj-disappointed.json
- [ ] vj-hype.json

### Onboarding Images (PNG, 1080x1920)
- [ ] onboarding-1.png — Dark gym background, person posing silhouette
- [ ] onboarding-2.png — Camera scanning body silhouette, skeleton overlay
- [ ] onboarding-3.png — Vj character introduction

### Fonts
- [ ] BebasNeue-Regular.ttf
- [ ] DMSans-Regular.ttf
- [ ] DMSans-Medium.ttf
- [ ] DMSans-Bold.ttf
- [ ] JetBrainsMono-Regular.ttf

---

## 🔑 API Keys Needed

| Service | Key Name | Where to Get |
|---------|---------|-------------|
| Anthropic | `ANTHROPIC_API_KEY` | console.anthropic.com |
| Replicate | `REPLICATE_API_TOKEN` | replicate.com |
| Firebase | Firebase config object | Firebase Console |
| Upstash Redis | `UPSTASH_REDIS_URL` + `UPSTASH_REDIS_TOKEN` | upstash.com |

Store all mobile-side keys in `Expo Secure Store`. Server-side keys in Railway environment variables.

---

## ⚡ Offline vs Online Feature Matrix

| Feature | Offline | Online | Notes |
|---------|---------|--------|-------|
| Camera pose alignment | ✅ | — | MediaPipe on-device |
| Pre-built pose library | ✅ | — | Bundled SVG + JSON |
| Real-time joint scoring | ✅ | — | Math engine |
| Rule-based corrections | ✅ | — | Local feedback rules |
| Exercise library | ✅ | — | Bundled JSON |
| Muscle weakness selector | ✅ | — | Local state |
| Progress heatmap | ✅ | — | WatermelonDB |
| Streak tracking | ✅ | — | Local |
| Body photo analysis | — | ✅ | Claude API (cached) |
| Custom pose generation | — | ✅ | Replicate API (premium) |
| Vj motivational messages | ✅ (cached) | ✅ (new) | Hybrid |
| Cloud backup | — | ✅ | Firebase auto-sync |
| Auth | — | ✅ | Firebase Auth |

---

## 🚀 MVP Scope (Phase 1 — Build This First)

### Must Have ✅
- User profile setup (height, weight, category)
- 10 pre-built poses with SVG overlay
- Camera + skeleton overlay + alignment score (offline)
- Basic Vj messages (5 pre-written, no API)
- 3 muscle groups + exercise list
- Local data storage (MMKV + WatermelonDB)
- Progress heatmap (local)
- Firebase Auth

### Phase 2 ⏳
- Claude body photo analysis
- All 25 poses
- Full muscle library (17 groups)
- Vj live Claude messages
- Firebase backup sync

### Phase 3 🔮
- Custom pose generation (Replicate ControlNet)
- Vj full chat interface
- Competition mode (sequence of poses, judged)
- Social sharing of scores

---

## 📝 Additional Notes for Base44

1. **All screens use dark background `#000000`** — no white screens anywhere
2. **Bottom tab bar** is dark with silver icons, red active indicator
3. **All primary buttons** are Crimson Red `#D32F2F` with white text in Bebas Neue
4. **Amber `#FFC107`** used ONLY for warnings and corrections, never for primary actions
5. **Vj always appears** on the home screen in a mini card — his expression changes based on user's streak (idle if active, disappointed if 3+ days missed)
6. **Onboarding is skippable** after step 1
7. **All data is local-first** — app works fully without internet except for AI features
8. **Image placeholders needed** on: Analyze screen (before photo upload), Pose detail (loading state), Vj screen (loading animation)
9. **The app must handle permission requests** gracefully: Camera, Photo Library, Notifications
10. **Font loading** must show a splash screen until fonts are ready (Expo Font)
