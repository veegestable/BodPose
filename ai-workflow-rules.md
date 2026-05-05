# AI Workflow Rules

## Approach

Build BodPose incrementally using a spec-driven workflow. Read the six context files before implementation, implement one scoped unit at a time, verify behavior, then update `progress-tracker.md`. Do not invent new product behavior that is not grounded in `BodPose.md` and the current context files.

## Scoping Rules

- Work on one feature unit at a time
- Prefer small, verifiable increments over large speculative changes
- Do not combine unrelated system boundaries in a single implementation step
- Prioritize offline-core units before optional online/premium enhancements
- Keep architecture changes explicit and documented before implementation

## When to Split Work

Split an implementation step if it combines:

- UI layout creation and backend API/queue behavior
- New data model design and unrelated UI polish
- Multiple independent endpoints in one change
- Unclear requirements that would force assumption-based implementation

If a change cannot be verified end to end quickly,
the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files
- If a requirement is ambiguous, resolve it in the relevant context file before implementing
- If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing
- Default to MVP-safe decisions that preserve local-first behavior and architecture invariants

## Protected Files

Do not modify the following unless explicitly instructed:

- Third-party package internals in `node_modules/`
- Generated lockfiles beyond necessary dependency updates
- Bundled design assets in `assets/` unless the task explicitly requests asset changes
- Existing environment or secret files (for example `.env*`, credential artifacts)

## Keeping Docs in Sync

Update the relevant context file whenever implementation
changes:

- System architecture or boundaries
- Storage model decisions
- Code conventions or standards
- Feature scope
- MVP phase status or unit completion state
- Keep `progress-tracker.md` updated after every meaningful implementation change

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope
2. No invariant defined in `architecture.md` was violated
3. `progress-tracker.md` reflects the completed work
4. Lint/build checks pass for affected code paths
5. Offline behavior remains functional for core user flows
