# UI Context

## Theme

Iron Precision visual language with a competitive bodybuilding identity. Use clean light surfaces, high-contrast typography, and strict crimson accents for high-priority interactions only. Preserve the same structural hierarchy used in BodPose (cards, sectioned dashboard blocks, focused action CTAs), but render it with warm neutrals + obsidian text.

## Colors

All components must use semantic tokens. Do not hardcode ad hoc colors in screen components.

| Role            | CSS Variable       | Value    |
| --------------- | ------------------ | -------- |
| Page background | `--color-bg` | `#FFF8F7` |
| Surface | `--color-surface` | `#FFFFFF` |
| Elevated surface | `--color-surface-2` | `#F9DCD9` |
| Primary text | `--color-text-primary` | `#1A1A1A` |
| Muted text | `--color-text-secondary` | `#636262` |
| Primary accent | `--color-accent` | `#AF101A` |
| Accent strong | `--color-accent-strong` | `#D32F2F` |
| Detail / border | `--color-detail` | `#8F6F6C` |
| Outline variant | `--color-border` | `#E4BEBA` |
| Warning | `--color-warning` | `#F57C00` |
| Success | `--color-success` | `#2E7D32` |

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

Use Lucide React Native for functional UI icons and project assets for branded tabs/medals. Keep iconography stroke-clean and high contrast against light surfaces. Crimson is reserved for active/critical actions; amber is warning/correction only.
