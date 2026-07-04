# Aasia Travel Web Application

A consolidated, single unified web application built using **Next.js 16 (App Router)**, **TypeScript**, and **pnpm** as the package manager. 

This repository consolidates two separate legacy applications (`LandingPage` and `packageDetails`), eliminating overlapping codebase, redundant components, and duplicate assets, while providing production-grade modular components, dynamic sitemaps, semantic layout loading skeleton screens, custom 404 boundaries, and a unified theme palette.

---

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (PostCSS config)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: pnpm

---

## 📁 Folder Structure

```
src/
  app/                      # App router routes & page layouts
    layout.tsx              # Root HTML wrapper with theme providers and fonts
    page.tsx                # Unified landing page route ("/")
    loading.tsx             # Global loader
    error.tsx               # Global error fallback boundary
    not-found.tsx           # Global 404 handler
    sitemap.ts              # Dynamic XML sitemap generator
    robots.ts               # Robots.txt configuration
    packages/
      [id]/
        page.tsx            # Package detail route ("/packages/[id]")
        loading.tsx         # Route level page skeleton
        not-found.tsx       # Local 404 fallback for invalid IDs
  components/
    layout/                 # Shared UI layouts
      navbar/               # Navbar & responsive MobileMenu
      footer/               # Global brand footer
    landing/                # Landing-page-specific section elements
    package-details/        # Package-details-specific feature components
    ui/                     # Basic design system components (Button, Badge, Skeleton)
  config/                   # Site config parameters and SEO defaults
  data/                     # Structured JSON mock databases
  hooks/                    # Custom application hooks
  lib/                      # Helper libraries & shared utilities
  types/                    # Structured TypeScript interfaces
  providers/                # Context provider wraps
public/
  images/                   # Clean local image directory (zero Figma expiring URL dependency)
```

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```

2. **Run Development Server**:
   ```bash
   pnpm dev
   ```

3. **Build Application**:
   ```bash
   pnpm build
   ```

4. **Start Production Server**:
   ```bash
   pnpm start
   ```

5. **Lint Code**:
   ```bash
   pnpm lint
   ```
