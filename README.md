# stephen-park.dev

Personal website for Stephen Park — Senior Software Engineer based in Seattle, WA.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [DaisyUI](https://daisyui.com). Deployed on Vercel.

## Stack

- **Framework**: Astro 6
- **Styling**: Tailwind CSS v4 + DaisyUI v5 + `@tailwindcss/typography`
- **Analytics**: Vercel Speed Insights
- **Package Manager**: pnpm
- **Node**: >=24.15.0

## Commands

| Command          | Action                                  |
| :--------------- | :-------------------------------------- |
| `pnpm install`   | Install dependencies                    |
| `pnpm dev`       | Start local dev server at `localhost:4321` |
| `pnpm build`     | Type-check and build to `./dist/`       |
| `pnpm preview`   | Preview production build locally        |
| `pnpm test`      | Run tests with Vitest                   |

## Project Structure

```
src/
├── components/
│   └── Prose.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
public/
```
