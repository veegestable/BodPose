# Unit 04: Home Dashboard Foundation

## Goal

Replace the Home placeholder with a real dashboard foundation that includes a personalized greeting, Vj mini-card, streak snapshot, quick-start actions, and latest account status blocks.

## Design

- Keep dark-first BodPose visual language and token usage.
- Use section cards with clear hierarchy:
  - Header greeting
  - Vj motivation card
  - Streak card
  - Quick start actions
  - Session/status card
- Display actionable buttons with accent red for primary CTA.

## Implementation

### 1) Home Screen Structure

- Replace `app/(tabs)/index.tsx` placeholder with dashboard sections.
- Keep layout scrollable and mobile-first.
- Pull user email/profile from auth store for personalized text.

### 2) Vj Mini Card

- Add a compact motivational panel for daily coaching.
- Include a mock motivation line and quick action to jump to pose practice.

### 3) Streak and Progress Snapshot

- Add a streak indicator card with sample values for now.
- Include secondary progress context text for upcoming data-driven units.

### 4) Quick Start Card

- Add explicit actions:
  - Start pose session
  - Open progress
- Route to existing tabs.

### 5) Session and Account Status

- Show signed-in account identifier and current phase status.
- Retain logout action.

## Dependencies

- None beyond current app dependencies.

## Verify When Done

- [ ] Home screen no longer displays the generic placeholder block.
- [ ] Dashboard sections render correctly on mobile.
- [ ] Quick-start buttons navigate to target tabs.
- [ ] Logged-in email/status renders correctly.
- [ ] Logout still works.
- [ ] No TypeScript errors in edited files.
- [ ] No linter issues in edited files.
