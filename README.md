# 🌐 beto-mn-site

Personal portfolio site for **Roberto Mirón Nájera** — Full Stack Developer. Built with Nuxt 4 and Vue 3, featuring a cyberpunk / glassmorphism aesthetic.

## 🛠️ Tech Stack

| Layer              | Technology                              |
| ------------------ | --------------------------------------- |
| 🧩 Framework       | Nuxt 4 + Vue 3                          |
| 🎨 Styling         | Tailwind CSS (custom cyberpunk theme)   |
| 🔷 Language        | TypeScript                              |
| ☁️ Contact backend | AWS API Gateway + Lambda (mx-central-1) |
| ✅ Code quality    | ESLint + Prettier + Husky + lint-staged |
| 📦 Package manager | pnpm                                    |

## 🚀 Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## 📜 Scripts

```bash
pnpm dev            # Start development server
pnpm build          # Build for production
pnpm generate       # Static site generation
pnpm preview        # Preview production build

pnpm lint           # ESLint check
pnpm lint:fix       # ESLint auto-fix
pnpm format         # Prettier write
pnpm format:check   # Prettier check
pnpm type-check     # TypeScript type check
```

## 🗂️ Structure

Single-page app. All sections are rendered in `app/pages/index.vue`:

| Section     | Component               | Description                                                   |
| ----------- | ----------------------- | ------------------------------------------------------------- |
| 🦸 Hero     | `sections/Hero.vue`     | Intro, photo, animated tech marquee, CTA buttons              |
| 👤 About    | `sections/About.vue`    | Skill cards in a carousel (Front-End, Back-End, DevOps, etc.) |
| 💼 Projects | `sections/Projects.vue` | Project grid cards with tech tags                             |
| 📬 Contact  | `sections/Contact.vue`  | Contact form → AWS API Gateway                                |

Reusable primitives live in `app/components/ui/`: `Button`, `Card`, `Carousel`, `Header`, `Footer`, `Spinner`.

Components are auto-imported by Nuxt — no explicit imports needed.

## 📄 Sections Overview

### 🦸 Hero

Displays name, animated gradient role title, an infinite-loop marquee of technologies (TypeScript, Node.js, NestJS, Go, AWS, Terraform, Docker, GraphQL, REST, gRPC, React, Next.js, Vue.js, Nuxt.js, PostgreSQL, MongoDB), and two CTAs: **Got a project?** (scrolls to contact) and **Download Resume** (`/downloads/resume.pdf`).

### 👤 About

Skill carousel with 8 knowledge areas: Front-End, Software Architecture & Design, Back-End, Database, DevOps & Cloud, Consulting & Custom Solutions, Integrations & APIs, and Security. Each card has a description, a tech stack icon list, and/or tag pills.

### 💼 Projects

Grid of project cards, each with title, description, icon, technology badges, demo link, and GitHub link.

### 📬 Contact

Glassmorphism form (name, email, message) that POSTs to AWS API Gateway in `mx-central-1`. On success, transitions to a confirmation state with an option to send another message.

## 🎨 Styling

Custom Tailwind color palette defined in `tailwind.config.ts`:

- 🌑 **Backgrounds:** `void-black`, `cyber-void`, `cyber-pulse`
- ✨ **Accents:** `neon-cyan`, `electric-blue`, `quantum-blue`, `plasma-magenta`, `fusion-pink`, `holo-pink`
- 🔤 **Font:** SF Pro Display / SF Pro Text

Common patterns: `backdrop-blur` + semi-transparent borders for glassmorphism, `@keyframes gradient-move` for animated gradient text, `@keyframes marquee` for the hero tech strip.

## 🪝 Git Hooks

Husky runs lint-staged on every commit:

- `*.{js,ts,vue}` → `eslint --fix` + `prettier --write`
- `*.{json,md,yml,css,html}` → `prettier --write`
