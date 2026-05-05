# BodPose

## Overview

BodPose is a mobile bodybuilding posing coach built with React Native and Expo. It helps physique athletes practice stage poses using on-device skeleton alignment, track consistency and score progress, identify weak muscle groups, and receive motivational coaching from the AI gym buddy Vj. The app is local-first and remains useful offline, while online AI services are used only for higher-value features such as body photo analysis, dynamic Vj coaching, and custom pose generation.

## Goals

1. Deliver real-time, offline pose alignment feedback with clear scoring and joint-level corrections.
2. Help users identify weak muscle groups and map them to practical exercise recommendations.
3. Build habit consistency through streaks, heatmaps, and progress history.
4. Provide motivating coaching personality (Vj) without creating constant API dependence.
5. Keep core app behavior fully usable offline and sync safely when online.

## Core User Flow

1. User opens the app, completes onboarding, and signs in with Firebase Auth.
2. User sets profile details (name, body stats, category, experience level).
3. User starts a Pose Practice session and receives real-time skeleton alignment feedback.
4. User completes a session and sees score summary, corrections, and progress impact.
5. User marks weak muscles on the body map and receives local exercise suggestions.
6. User checks Progress for heatmap activity, streaks, and score trends over time.
7. User optionally uploads a body photo for AI analysis and category-specific pose suggestions.
8. User receives Vj coaching updates based on triggers (improvement, inactivity, PB, weekly summary).

## Features

### Offline Core Features

- Camera-based pose practice with MediaPipe keypoint detection and live alignment scoring.
- Pre-bundled pose library and local rule-based correction engine.
- Muscle weakness selection with bundled exercise database and recommendations.
- Local progress tracking using workout logs, heatmaps, and streak calculation.

### Online AI and Cloud Features

- Claude Vision body-photo analysis with cached structured assessment.
- Vj AI coaching messages for specific trigger events.
- Replicate ControlNet custom pose image generation (premium feature).
- Firebase cloud backup (profile, logs, sessions, generated assets) when online.

### UX and Engagement

- Dark-first bodybuilding theme using the Power House palette.
- Vj mini-widget on Home plus full Vj chat/coaching screen.
- Push reminders and streak-oriented feedback loops.

## Scope

### In Scope

- React Native + Expo mobile app for iOS and Android.
- Offline-first core (pose practice, scoring, exercise mapping, progress tracking).
- Firebase Auth and conditional cloud sync.
- FastAPI backend for AI service orchestration.
- MVP phased delivery:
  - Phase 1: local core + auth + basic Vj messaging.
  - Phase 2: expanded AI analysis and full pose/muscle coverage.
  - Phase 3: premium custom pose generation and advanced coaching flows.

### Out of Scope

- Desktop or web-first client implementation.
- Continuous real-time cloud inference for every frame.
- Social feed/community features in MVP.
- Multi-user coaching or trainer portal in MVP.
- Wearable integrations and biometric hardware support in MVP.

## Success Criteria

1. A signed-in user can complete a full pose session offline and receive live score + correction feedback.
2. Local data (profile, sessions, weakness selections, progress logs) persists across app restarts without internet.
3. Weak muscle selections immediately produce relevant exercise recommendations from local data.
4. Progress view correctly renders streak and heatmap using locally recorded workout activity.
5. AI analysis and Vj trigger messages execute online, cache results, and do not block core offline behavior.
6. Cloud sync pushes unsynced records to Firebase when network is restored without losing local data.
