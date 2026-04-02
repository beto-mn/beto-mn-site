# 🌐 beto-mn-site

Personal portfolio site for **Roberto Mirón Nájera** — Full Stack Developer. Built with Nuxt 4 and Vue 3, featuring a cyberpunk / glassmorphism aesthetic.

## 🛠️ Tech Stack

| Layer              | Technology                              |
| ------------------ | --------------------------------------- |
| 🧩 Framework       | Nuxt 4 + Vue 3                          |
| 🎨 Styling         | Tailwind CSS (custom cyberpunk theme)   |
| 🔷 Language        | TypeScript                              |
| ☁️ Contact backend | AWS API Gateway + Lambda (mx-central-1) |
| 🚢 Hosting         | AWS S3 (static site)                    |
| ⚙️ CI/CD           | GitHub Actions                          |
| ✅ Code quality    | ESLint + Prettier + Husky + lint-staged |
| 📦 Package manager | pnpm                                    |

## 🚀 Getting Started

```bash
cp .env.example .env
# fill in the values in .env
pnpm install
pnpm dev        # http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env` file at the root (already gitignored) based on `.env.example`:

| Variable                      | Description                                   |
| ----------------------------- | --------------------------------------------- |
| `NUXT_PUBLIC_CONTACT_API_URL` | AWS API Gateway endpoint for the contact form |
| `NUXT_PUBLIC_CONTACT_API_KEY` | API key for the AWS API Gateway               |

In production these values are injected by GitHub Actions via repository secrets/variables — no `.env` file is needed in CI.

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

## ⚙️ CI/CD

Two GitHub Actions workflows handle quality checks and deployment.

### CI — Pull Request to `master`

Runs automatically on every PR. Validates:

| Check      | Command              |
| ---------- | -------------------- |
| Lint       | `eslint .`           |
| Format     | `prettier --check .` |
| Type check | `nuxt typecheck`     |
| Build      | `nuxt generate`      |

After all steps finish, the bot posts a comment on the PR with a pass/fail table and collapsible error details for any failing check. The comment is updated (not duplicated) on each new push to the branch.

### Deploy — Push / merge to `master`

Runs automatically when code lands on `master`:

1. Runs `nuxt generate` to produce the static output in `.output/public/`
2. Authenticates to AWS using repository secrets
3. Syncs the bundle to S3 with `aws s3 sync --delete`:
   - Static assets (JS, CSS, images) → `Cache-Control: max-age=31536000, immutable`
   - HTML and JSON files → `Cache-Control: no-cache`

#### Required GitHub secrets and variables

| Type     | Name                          | Description                 |
| -------- | ----------------------------- | --------------------------- |
| Secret   | `AWS_ACCESS_KEY_ID`           | IAM access key ID           |
| Secret   | `AWS_SECRET_ACCESS_KEY`       | IAM secret access key       |
| Secret   | `NUXT_PUBLIC_CONTACT_API_KEY` | API key for AWS API Gateway |
| Variable | `AWS_REGION`                  | AWS region of the bucket    |
| Variable | `S3_BUCKET_NAME`              | Name of the S3 bucket       |
| Variable | `NUXT_PUBLIC_CONTACT_API_URL` | AWS API Gateway endpoint    |

The IAM user only needs `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`, and `s3:GetObject` permissions on the target bucket.

## 🪝 Git Hooks

Husky runs lint-staged on every commit:

- `*.{js,ts,vue}` → `eslint --fix` + `prettier --write`
- `*.{json,md,yml,css,html}` → `prettier --write`
