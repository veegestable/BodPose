# Unit 01: Bootstrap and App Shell

## Goal

Create the BodPose mobile foundation: working Expo Router app shell, dark Power House design tokens, global font loading, and bottom tab navigation skeleton with placeholder screens for Home, Pose, Analyze, Muscles, and Progress.

## Design

- Use the dark-first BodPose theme from `ui-context.md`:
  - `#000000` base background.
  - `#111111` and `#1A1A1A` layered surfaces.
  - `#D32F2F` accent for active/primary.
  - `#B0BEC5` for muted text and detail.
- Use Bebas Neue for large display headers and DM Sans for body UI.
- Keep navigation chrome minimal and high-contrast.
- Bottom tab bar should be dark with clear active-state indication.

## Implementation

### 1) Project Setup and Dependencies

- Initialize or validate Expo app setup with Expo Router.
- Ensure required packages for:
  - Expo Router navigation.
  - NativeWind styling.
  - Font loading (`expo-font`).
  - Icon usage (`lucide-react-native` or app tab icons fallback).

### 2) Root App Layout

- Implement `app/_layout.tsx` as root container.
- Load custom fonts before rendering app content.
- Keep splash/loader visible until fonts are ready.
- Provide base app theme context and global background style.

### 3) Tabs Layout

- Implement `app/(tabs)/_layout.tsx` with 5 routes:
  - `index` (Home)
  - `pose`
  - `analyze`
  - `muscles`
  - `progress`
- Add labels/icons and active tint treatment based on BodPose theme.
- Keep tab order stable and aligned with product spec.

### 4) Placeholder Screens

- Create screen files:
  - `app/(tabs)/index.tsx`
  - `app/(tabs)/pose.tsx`
  - `app/(tabs)/analyze.tsx`
  - `app/(tabs)/muscles.tsx`
  - `app/(tabs)/progress.tsx`
- Each screen includes:
  - Screen title.
  - Short placeholder description.
  - Shared page wrapper style using theme tokens.

### 5) Theme Token Baseline

- Add or normalize token constants in `src/constants/colors.ts`.
- Ensure all placeholder screens use token references, not hardcoded colors.
- Set baseline spacing and typography usage for future units.

### 6) Quality Guardrails

- Keep all behavior static in this unit (no business logic).
- Do not include auth, persistence, AI, or camera integrations here.
- Focus on navigation and visual foundation only.

## Dependencies

- `expo-router` (routing)
- `nativewind` (utility styling)
- `expo-font` (font loading)
- `lucide-react-native` (icons)

Install only what is missing from current project state.

## Verify When Done

- [ ] App launches and displays tabbed shell without runtime crashes.
- [ ] Fonts load before first full render and no flash of incorrect typography is visible.
- [ ] All five tab routes open successfully.
- [ ] Placeholder screens follow dark BodPose theme tokens.
- [ ] No TypeScript errors in edited files.
- [ ] No linter issues in edited files.
- [ ] Build/start command succeeds for the app shell.
