# Unit 02: Authentication and Initial Profile Setup

## Goal

Implement user identity flow for BodPose with Firebase Auth (email/password; Google-ready scaffold), plus an initial profile setup screen that collects core user attributes and gates main app tabs until profile completion.

## Design

- Keep all auth/profile screens dark themed and token-driven.
- Use clear, compact cards on dark surfaces with high-contrast labels.
- Primary actions use BodPose accent red.
- Keep forms mobile-first with simple vertical layout and readable spacing.

## Implementation

### 1) Firebase Auth Scaffold

- Add Firebase client initialization module with environment-variable based config.
- Add auth service helpers:
  - email sign-up
  - email sign-in
  - sign-out
  - auth state subscription
- Keep Google sign-in as scaffold-only in this unit unless Expo Google integration is already configured.

### 2) Auth State Store

- Create a Zustand auth store for:
  - current authenticated user
  - auth loading state
  - profile completion flag
  - profile data
- Expose actions to set user, clear session, and save initial profile.

### 3) Auth Screens

- Add `(auth)` route group with:
  - `login.tsx`
  - `signup.tsx`
- Each screen includes:
  - email + password fields
  - clear success/error feedback
  - link to switch between login/signup
  - optional “Google sign-in coming soon” button placeholder

### 4) Profile Setup Screen

- Add profile setup screen at `app/profile/setup.tsx`.
- Required fields:
  - name
  - height
  - weight
  - competition category
  - experience level
- Save profile to auth/profile store in this unit (local persistence and cloud sync are later units).

### 5) Route Gating

- Update root layout guard:
  - unauthenticated users go to auth flow
  - authenticated but incomplete profile goes to profile setup
  - authenticated + complete profile can access tabs
- Keep guard deterministic and free of async race flicker.

## Dependencies

- `firebase` (auth provider SDK)
- `zustand` (auth + profile app state)

## Verify When Done

- [ ] Unauthenticated launch enters login/signup flow.
- [ ] User can sign up via email/password and be routed to profile setup.
- [ ] User can log in via email/password and reach tabs when profile exists.
- [ ] Profile setup enforces required fields and writes data to state.
- [ ] Route guarding behaves correctly for all three states (logged out, logged in incomplete profile, logged in complete profile).
- [ ] No TypeScript errors in edited files.
- [ ] No linter issues in edited files.
