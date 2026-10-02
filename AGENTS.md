# AGENTS.md

This file gives coding agents project-specific context. Keep it short and update it when workflows change.

## Project Overview

- Primary app or package: Concentration (Angular memory-matching game)
- Main entry points: `src/main.ts`, `src/index.html`
- Important directories: `src/app/modules/game/` (game UI, services, utils)

## Architecture Notes

- Module boundaries: single Angular application; game feature lives under `src/app/modules/game/`
- Generated or vendored code: build output in `dist/`; do not commit `.fallow/`
- Sensitive areas: game state in `GameService`; keep `rxjs` and `tslib` (Angular / `importHelpers`)

## Commands

<!-- fallow init prefilled these from package.json; confirm before relying on them -->
- Install: `pnpm install`
- Build: `pnpm build`
- Test: `pnpm test`
- Lint / format: `pnpm check`, `pnpm lint-css`
- Fallow full analysis: `pnpm fallow`
- Fallow PR gate: `pnpm fallow:audit`

## Fallow

After substantive edits, run:

```bash
pnpm fallow:audit --format json
```

1. Read `verdict` first (`pass` / `warn` / `fail`).
2. Fix only findings with `introduced: true`.
3. Do not invent custom finding counts; CI fails only on a `fail` verdict (exit code 1).

Targeted checks:

- `pnpm fallow` / `pnpm exec fallow dead-code` / `dupes` / `health` for full-repo analysis
- `fallow list --entry-points --format json --quiet` to inspect reachability before deleting files

Do not delete `rxjs` or `tslib`. CSS `@import` of `reset-css` and `open-props` in `src/style/styles.css` counts as usage.

<!-- generated:task-matrix:start -->
| When the agent is about to... | Run |
|---|---|
| delete an "unused" export or file | `fallow dead-code --trace <file>:<export>` |
| prove a TypeScript symbol's exact consumers before refactoring | `fallow dead-code --type-aware --symbol-impact <file>:<export-or-class.method>` |
| find how one module reaches another | `fallow trace --path <from> <to>` (Reports `reachable: false` instead of failing when no import path exists; type-only hops are reported, not skipped.) |
| delete an "unused" dependency | `fallow dead-code --trace-dependency <name>` |
| commit or open a PR | `fallow audit --base <ref>` |
| read a diff before approving it | `fallow review --base <ref> --brief` (orientation, never gates: deterministic and always exit 0, unlike the audit row) |
| prioritize refactoring | `fallow health --hotspots --targets` |
| ask who owns code | `fallow health --ownership` |
| check untested-but-reachable code | `fallow health --coverage-gaps` |
| consolidate duplication | `fallow dupes --trace dup:<fingerprint>` |
| find feature flags | `fallow flags` |
| check which architecture rules apply to a file before changing it | `fallow guard <files>` |
| surface security candidates | `fallow security` |
| understand a finding | `fallow explain <issue-type>` |
| scope a monorepo | `--workspace <glob> / --changed-workspaces <ref>` (global flags, prefix any command) |
<!-- generated:task-matrix:end -->

## Agent Rules

- Do not expand unrelated modernization issues into this workstream.
- Prefer deleting true dead code over broad suppressions; keep exceptions narrow.
- Preferred style: match existing Angular / Biome / Stylelint conventions in the repo.
