# stephen-park.dev

Personal website for Stephen Park — Senior Software Engineer based in Seattle, WA.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [DaisyUI](https://daisyui.com). Deployed on [Vercel](https://vercel.com).

## Stack

| Layer | Technology |
| :---- | :--------- |
| Framework | Astro 7 |
| Styling | Tailwind CSS v4 + DaisyUI v5 + `@tailwindcss/typography` |
| Analytics | Vercel Analytics + Speed Insights |
| Testing | Vitest |
| Package Manager | pnpm |
| Node | >=24.18.0 |

## Commands

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Install dependencies                        |
| `pnpm dev`       | Start local dev server at `localhost:4321`  |
| `pnpm build`     | Type-check with `astro check` and build     |
| `pnpm preview`   | Preview production build locally            |
| `pnpm test`      | Run Vitest build validation tests           |

## Project Structure

```
src/
├── components/
│   └── Prose.astro       # Prose styling wrapper
├── layouts/
│   └── Layout.astro      # Root layout: theme toggle, meta, analytics
├── pages/
│   └── index.astro       # Homepage
└── styles/
    └── global.css        # Tailwind + DaisyUI config, animations
public/
└── favicon.svg
```
