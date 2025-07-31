# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Philipp Petermeier's personal website, built with Astro and migrated from Hugo. It's a static site focused on professional networking and job seeking, featuring a component-based architecture with centralized data management.

## Essential Commands

```bash
# Development
npm run dev          # Start development server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview built site locally
npm run astro        # Run Astro CLI commands

# Deployment
# Site builds to ./dist/ for static hosting (GitHub Pages)
```

## Architecture & Data Flow

### Core Pattern: Centralized Data + Component Composition

The site follows a **data-driven component architecture**:

1. **Single Source of Truth**: All content lives in `src/data/profile.ts` with TypeScript interfaces
2. **Component Consumption**: Components import and render data from profile.ts
3. **Page Composition**: Pages compose multiple components (Hero, Overview, SkillsPreview, etc.)
4. **Layout Wrapping**: BaseLayout provides SEO, meta tags, and site structure

**Data Flow**: `profile.ts` → **Components** → **Pages** → **BaseLayout** → **Static HTML**

### Key Files & Relationships

- **`src/data/profile.ts`**: Central data store with TypeScript interfaces (Profile, SocialProfile, Skill, etc.)
- **`src/layouts/BaseLayout.astro`**: Site-wide layout with comprehensive SEO, meta tags, and JSON-LD structured data
- **`src/components/`**: 6 reusable components that consume profile data
- **`src/pages/index.astro`**: Homepage composition of all components
- **`astro.config.mjs`**: Site config with sitemap, Tailwind, and icon integrations

## Content Management

### Adding/Updating Content

**Always update `src/data/profile.ts` first** - components automatically reflect changes:

- **Personal info**: Update `Profile` interface properties
- **Skills**: Modify `skillCategories` array (components auto-select top 8)
- **Social profiles**: Update `socialProfiles` array
- **Work experience**: Update `workExperience` array

### Component Data Relationships

- **Hero**: Uses `name`, `role`, `status`, `bio`, `avatar`
- **SkillsPreview**: Dynamically selects top 8 skills across all categories
- **Languages**: Renders `languages` array with proficiency levels
- **Navigation/Footer**: Use `socialProfiles` for links and icons

## Styling Architecture

### Tailwind + Custom Components

The site uses **Tailwind-first** approach with semantic component classes:

```css
/* Established utility classes in global.css: */
.btn, .btn-primary, .btn-secondary     /* Button variants */
.card                                  /* Card container */
.container-custom                      /* Page width container */
.section-padding                       /* Consistent section spacing */
```

### Color System & Theming

- **Primary**: Blue scale (`blue-50` to `blue-900`)
- **Secondary**: Gray scale for neutral elements  
- **Dark Mode**: System preference-based (`prefers-color-scheme`)
- **Responsive**: Mobile-first breakpoints

## Icon System

Uses `astro-icon` with multiple libraries configured:
- **Usage**: `<Icon name="mdi:github" />` or `<Icon name="skill-icons:typescript" />`
- **Libraries**: MDI, Simple Icons, Skill Icons, Logos, Heroicons, Tabler, Carbon, Phosphor, Lucide, Font Awesome
- **Social Icons**: Automatically resolved from `socialProfiles.platform` field

## SEO & Performance

### Built-in SEO Features

BaseLayout includes comprehensive SEO:
- Meta tags (title, description, viewport)
- Open Graph + Twitter Cards
- JSON-LD structured data for person/professional schema
- Canonical URLs
- Sitemap generation via `@astrojs/sitemap`

### Performance Targets (from migration plan)

- **Lighthouse Performance**: >90
- **First Contentful Paint**: <2s  
- **Largest Contentful Paint**: <3s
- **Cumulative Layout Shift**: <0.1

## Migration Context

### Hugo → Astro Migration Status

- **✅ Phase 1 Complete**: Technical migration, component architecture, SEO optimization
- **📋 Phase 2 Planned**: Content expansion per `WEBSITE_IMPROVEMENTS_TODO.md`

### Backup & Content Reference

- **`/backup/`**: Complete Hugo site structure for content reference
- **Content Strategy**: Professional networking focus with "Seeker" status
- **Future Pages**: `/skills` and `/projects` linked in navigation (not yet implemented)

## Development Guidelines

### When Adding Features

1. **Extend TypeScript interfaces** in profile.ts for new data
2. **Follow component patterns**: Props-based, data-driven components  
3. **Maintain SEO standards**: Update BaseLayout if adding new page types
4. **Use established utility classes**: Leverage existing Tailwind patterns
5. **Test responsiveness**: Mobile-first approach with breakpoint testing

### Type Safety

All components expect typed data from profile.ts. When adding fields:
- Update interface definitions
- Components will type-check automatically
- Use optional properties (`field?: string`) for incremental additions

## Domain & Deployment

- **Production URL**: https://www.infornomics.de
- **Build Target**: Static site (perfect for GitHub Pages)
- **Assets**: Properly organized in `/public/` for static serving
- **CNAME**: Configured for custom domain