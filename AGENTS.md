# Repository Guidelines

## Project Structure & Module Organization
- `src/app`: Next.js App Router pages, route handlers, and layout shells; add new routes as nested folders with `page.tsx` and `loading.tsx` when needed.
- `src/components`: Reusable React/TypeScript UI, typically one component per file using PascalCase filenames (e.g., `WalletAvatar.tsx`).
- `src/lib`: Shared utilities such as Supabase helpers or formatting logic; keep pure functions here to avoid circular imports.
- `public`: Static assets (fonts, images, OG templates) served as-is; reference them via `/asset-name.ext`.
- `scripts/auth.js`: Local Supabase automation; run with `node scripts/auth.js` after exporting the required environment variables.

## Build, Test, and Development Commands
- `npm run dev`: Launches the Next.js dev server with hot reload; visit `http://localhost:3000`.
- `npm run build`: Produces an optimized production bundle; run before cutting a release.
- `npm run start`: Serves the production build in Node; use to smoke-test the build locally.
- `npm run lint`: Executes `next lint` with the repo ESLint config; required before opening a PR.

## Coding Style & Naming Conventions
- TypeScript-first: prefer `.tsx` for components and .ts for utilities; keep strict typing and narrow union types.
- Functional React components with hooks; avoid default exports so imports stay consistent.
- Two-space indentation, trailing commas enabled, and Tailwind classes grouped by layout → spacing → color for readability.
- Name components and context providers in PascalCase, hooks in camelCase prefixed with `use`, and route folders in kebab-case (e.g., `app/user-settings`).

## Testing Guidelines
- Automated testing is not yet wired into package scripts; when adding coverage, colocate tests as `*.test.ts`/`*.test.tsx` within `src`.
- Strive for deterministic component tests using Testing Library patterns (`render`, user events) and mock network calls via `viem`/`supabase` stubs.
- Document any manual QA steps in the PR description until a unified test runner is added.

## Commit & Pull Request Guidelines
- Follow the existing Git log style: short, imperative subject lines under 72 characters (e.g., `Add wallet tooltip copy`).
- Each PR should include: purpose summary, linked issue or Notion ticket, screenshots/GIFs for UI changes, and notes on testing or migration steps.
- Rebase onto `main` before requesting review; resolve lint warnings and ensure `npm run build` succeeds.

## Security & Configuration Tips
- Keep secrets in `.env.local`; never commit API keys or Supabase service roles. Update `.env.example` if you add required variables.
- Review external packages before adding them; prefer first-party Next.js or lightweight utilities to reduce bundle size and attack surface.
