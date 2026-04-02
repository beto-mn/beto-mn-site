# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

**Nuxt 4 + Vue 3** portfolio site with a cyberpunk / glassmorphism aesthetic.

- `app/pages/index.vue` — single-page app; all sections rendered here
- `app/components/ui/` — reusable primitives (Button, Card, Carousel, Header, Footer, Spinner)
- `app/components/sections/` — page sections composed into the home page (Hero, About, Projects, Contact)
- `public/` — static assets (images, resume PDF, favicon)

Components are **auto-imported** by Nuxt — no explicit imports needed. In templates, `UiButton` maps to `components/ui/Button.vue`, `SectionsHero` to `components/sections/Hero.vue`, etc.

## Styling

Tailwind CSS with a custom color palette defined in `tailwind.config.ts`:

- Backgrounds: `void-black`, `cyber-void`, `cyber-pulse`
- Accents: `neon-cyan`, `electric-blue`, `quantum-blue`, `plasma-magenta`, `fusion-pink`, `holo-pink`
- Font: SF Pro Display/Text stack

Common patterns: `backdrop-blur` + semi-transparent borders for glassmorphism; `@keyframes gradient-move` for animated gradient backgrounds; mobile-first responsive with `sm:` / `md:` / `lg:` breakpoints.

## Code Conventions

- Vue 3 Composition API with `<script setup lang="ts">` in all components
- `ref()` for primitive state, `reactive()` for form/object state
- Always clean up event listeners in `onUnmounted`
- Button variants: `primary` | `gradient`; sizes: `sm` | `md` | `lg`
- ESLint enforces PascalCase components and self-closing tags
- Prettier: single quotes, 2-space indent, 80-char width, trailing commas (es5)
- Husky runs `eslint --fix` + `prettier --write` on staged files pre-commit

## Deployment

The project builds as a static site (`nuxt generate`) and deploys to an AWS S3 bucket. The S3 bucket is already configured to serve content under the custom domain purchased in AWS.
