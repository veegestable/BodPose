# UI Context

## Theme

Dark-only visual language with a competitive bodybuilding identity ("Power House"). No light mode. Prioritize high contrast, bold display headings, and minimal chrome so camera overlays, scores, and body guidance remain the visual focus.

## Colors

All components must use semantic tokens. Do not hardcode ad hoc colors in screen components.

| Role            | CSS Variable       | Value    |
| --------------- | ------------------ | -------- |
| Page background | `--color-bg` | `#000000` |
| Surface | `--color-surface` | `#111111` |
| Elevated surface | `--color-surface-2` | `#1A1A1A` |
| Primary text | `--color-text-primary` | `#FFFFFF` |
| Muted text | `--color-text-secondary` | `#B0BEC5` |
| Primary accent | `--color-accent` | `#D32F2F` |
| Detail / border | `--color-detail` | `#B0BEC5` |
| Warning | `--color-warning` | `#FFC107` |
| Success | `--color-success` | `#4CAF50` |

## Typography

| Role      | Font              | Variable      |
| --------- | ----------------- | ------------- |
| Display headings | Bebas Neue | `--font-display` |
| UI/body text | DM Sans | `--font-body` |
| Score/stats mono | JetBrains Mono | `--font-mono` |

## Border Radius

| Context           | Class            |
| ----------------- | ---------------- |
| Inline / small UI | `rounded-md` |
| Cards / panels    | `rounded-xl` |
| Modals / overlays | `rounded-xl` |

## Component Library

Use reusable components under `src/components/ui/` with domain composition in `src/components/{pose,body,vj,progress,exercises}/`. Favor tokenized NativeWind classes and shared component variants over per-screen style duplication.

## Layout Patterns

- Bottom tab shell for primary app areas: Home, Pose, Analyze, Muscles, Progress.
- Full-bleed camera layout for Pose Practice with overlay controls and persistent score panel.
- Card-based vertical sections for Dashboard, Analyze output, and Progress summaries.
- Body-map interaction uses front/back layered silhouettes with tap states and clear highlight contrast.
- Vj appears as a persistent mini presence on Home and as a full-screen coaching experience.

## Icons

Use Lucide React Native for functional UI icons and project assets for branded tabs/medals. Keep iconography stroke-clean, high contrast, and consistent with dark surfaces. Red is reserved for active/critical actions, amber only for warning/correction contexts.
