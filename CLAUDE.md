# CLAUDE.md - AI Coding Assistant Guidelines

![Agent Friendly](https://img.shields.io/badge/Agent-Onboarding-3178C6?style=for-the-badge)
![Conventions](https://img.shields.io/badge/Conventions-Strict-FF6B00?style=for-the-badge)
![Version](https://img.shields.io/badge/Specification-v1.0-000000?style=for-the-badge)

A path-anchored reference guide for AI coding assistants working on the Aasia Travel project.

---

## Technical Context

| Variable | Value | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2.10 (App Router) | Core SSR / SSG framework |
| **Libraries** | React 19.2.4, Tailwind CSS v4, Framer Motion v12 | UI, Styling, and Animations |
| **Scrolling** | Lenis Custom Smooth Scroll | Smooth exponential-eased scrolling |
| **Checkout** | WhatsApp Public API Redirect | Serverless checkout communication |

---

## Key Development Commands

| Command | Action | Output / Behavior |
| :--- | :--- | :--- |
| `pnpm dev` | Start development server | Launches Next.js locally on port `3000` |
| `pnpm dev:turbo` | Start Turbopack dev server | Fast incremental module bundling |
| `pnpm build` | Compile dynamic pages | Performs static site generation (SSG) to `.next/` |
| `pnpm check` | Run all validation checks | Sequentially runs linting, formatting, and type checks |
| `pnpm lint` | Run ESLint checks | Analyzes syntax rules and React hooks boundaries |
| `pnpm format` | Run Prettier formatter | Formats code in-place |
| `pnpm typecheck` | Run tsc check | Performs dry-run static type checks without emitting files |

---

## Codebase Map & Directory Layout

```text
aasiatravel_module1/
├── src/
│   ├── app/                              # Route-level definitions & layout structure
│   │   ├── packages/                     # Dynamic package routes
│   │   │   └── [id]/                     # Dynamic detail views (Page, Skeleton, 404)
│   │   └── globals.css                   # Global Tailwind imports & custom theme keys
│   │
│   ├── components/                       # Modular page layout components
│   │   ├── landing/                      # Landing page sections (Hero, Cards, Testimonials)
│   │   ├── layout/                       # Shared navigation layouts (Navbar, Footer, Menu)
│   │   └── package-details/              # Detailed tabs (calculator, hotel, flights)
│   │
│   ├── data/                             # Mock databases & message constants
│   │   ├── packages.ts                   # Static package items schema
│   │   └── whatsapp.ts                   # Outgoing text template formatters
│   │
│   ├── types/                            # TypeScript interface entries
│   │   ├── common.ts                     # Layout configuration types
│   │   └── whatsapp.ts                   # WhatsApp payload interfaces
│   │
│   └── lib/                              # Reusable library helper utilities
│       ├── utils.ts                      # Common string/price utilities
│       └── whatsapp.ts                   # URL building functions
```

---

## Code & Quality Standards

### 1. React Component Boundaries
* **State & Effects**: Any file using React state (`useState`, `useEffect`) or event handlers (`onClick`, `onChange`) must explicitly start with `'use client';` at the top.
* **Server Components**: Keep components as Server Components by default unless client-side interactivity is requested.

### 2. Ref Usage Checks
* **Strict Rule**: Do **NOT** access ref properties (such as `ref.current`) inside render bodies or JSX parameters. 
* **Correction**: Destructure refs or move accesses to `useEffect` or event callbacks.

### 3. WhatsApp Message Architecture
* **Decoupled Text**: Never write multiline template literals or message text templates inside component JSX or helper logic.
* **Formatters**: Store all formatters in [data/whatsapp.ts](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/src/data/whatsapp.ts) and reference them inside [lib/whatsapp.ts](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/src/lib/whatsapp.ts) to keep the layout layer clean.
* **Text Formatting**: Format labels (e.g. `*Price:*`) in bold using asterisks and list details using Unicode bullets (`•`) to comply with WhatsApp markdown.

### 4. TypeScript Typing
* **Strict Mode**: Do **NOT** use `any` typings. Define interfaces under `src/types/` and export them globally through `src/types/index.ts`.
