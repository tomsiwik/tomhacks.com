# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server on port 1408 with Turbopack
- `pnpm build` - Production build
- `pnpm preview` - Build and preview production build (port 1408)

### Code Quality
- `pnpm lint` - Run ESLint checks
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm check-types` - TypeScript type checking
- `pnpm format:check` - Check Prettier formatting
- `pnpm format:write` - Apply Prettier formatting

### Component Registry
- `pnpm registry:build` - Build component registry for distribution

## Architecture

This is a Next.js 15 portfolio website with the following architecture:

### Technology Stack
- **Framework**: Next.js 15 with React 19, TypeScript 5.7
- **Styling**: Tailwind CSS v4 (@tailwindcss/postcss), shadcn/ui
- **Package Manager**: pnpm
- **Node**: v20 or >=22

### Key Directories
- `src/app/` - Next.js app router pages
  - `(app)/` - Main application routes
  - `(llms)/` - AI-friendly markdown endpoints
  - `api/` - API routes
  - `og/` - Dynamic OG image generation
- `src/features/` - Feature-based modules (e.g., profile)
- `src/components/` - Shared UI components
- `src/registry/` - Component registry for distribution
- `src/content/` - MDX blog posts
- `src/data/` - Static data (user info, blog metadata)

### Important Features
1. **Component Registry**: Custom shadcn-based system for distributing components via URLs like `/r/[component].json`
2. **Blog System**: MDX support with syntax highlighting, located in `src/content/`
3. **Dark Mode**: Theme switching with CSS custom properties
4. **SEO**: JSON-LD schema, sitemap, RSS feed, OG images
5. **AI-Friendly**: `/llms.txt` endpoint for LLM consumption

### Environment Variables
Required (see .env.example):
- `APP_URL` - Application URL
- `REGISTRY_URL` - Component registry URL
- `GITHUB_API_TOKEN` - GitHub API access
- `NEXT_PUBLIC_POSTHOG_*` - Analytics configuration

### Development Notes
- Server Components are the default; use `"use client"` directive for client components
- Path aliases configured: `@/*` maps to `src/*`
- Husky pre-commit hooks run lint-staged (ESLint + Prettier)
- Custom CSS properties in `src/styles/globals.css` for theming
- Blog posts in `src/content/` support MDX with custom components

### Testing
Currently no testing framework is configured. The project relies on TypeScript for type safety and ESLint/Prettier for code quality.