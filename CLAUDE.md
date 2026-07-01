# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # astro check (type-check) + astro build → ./dist/
pnpm preview      # Preview production build locally
pnpm test         # Run Vitest (validates build succeeds)
pnpm test -- --reporter=verbose  # Run tests with full output
```

There is no separate lint command — `pnpm build` runs `astro check` for TypeScript and Astro component type validation.

## Architecture

This is a single-page Astro 7 static site. The only page is `src/pages/index.astro`.

**Rendering model**: Fully static (no server-side rendering). All content is baked at build time and deployed to Vercel as static assets.

**Styling**: Tailwind CSS v4 integrated via `@tailwindcss/vite` (not the legacy PostCSS plugin). DaisyUI v5 and `@tailwindcss/typography` are loaded as Tailwind plugins in `src/styles/global.css`. Do not add a `tailwind.config.mjs` for v4-style config — it uses CSS-first configuration.

**Theming**: Two DaisyUI themes — `silk` (light) and `dark`. The active theme is set as `data-theme` on `<html>` and persisted to `localStorage` under the key `theme`. Theme toggle logic lives entirely in `src/layouts/Layout.astro` as an inline `<script>`.

**Images**: The profile headshot is hosted on AWS S3. The S3 domain is whitelisted in `astro.config.mjs` under `image.domains` so Astro's built-in image optimization (`<Image />`) can process it.

**Analytics**: `@vercel/analytics` and `@vercel/speed-insights` are rendered as Astro components inside `Layout.astro`.

**Tests**: `tests/build.test.ts` runs a single Vitest integration test that shells out to `pnpm build` and asserts it exits cleanly. It has a 60-second timeout. There are no unit tests.

**CI**: GitHub Actions runs CodeQL static analysis on push/PR to `master` (`.github/workflows/codeql.yml`). No separate lint or test CI step exists.
