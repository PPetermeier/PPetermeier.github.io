# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Philipp Petermeier's personal website, built with Astro and migrated from Hugo. It's a static site focused on professional networking and job seeking, featuring a component-based architecture with centralized data management and a unified visual design system.

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
3. **Page Composition**: Pages compose multiple components with consistent visual language
4. **Layout Wrapping**: BaseLayout provides SEO, meta tags, fonts, and site structure

**Data Flow**: `profile.ts` → **Components** → **Pages** → **BaseLayout** → **Static HTML**

### Key Files & Relationships

#### Core Data & Layout
- **`src/data/profile.ts`**: Central data store with TypeScript interfaces (Profile, SocialProfile, Skill, etc.)
- **`src/layouts/BaseLayout.astro`**: Site-wide layout with SEO, meta tags, JSON-LD, and font imports

#### Pages
- **`src/pages/index.astro`**: Minimal landing page (Navigation + Hero + Footer only)
- **`src/pages/skills.astro`**: Full skills/experience page with sidebar navigation
- **`src/pages/projects.astro`**: Projects page (structure defined, needs content)

#### Components
- **`src/components/Navigation.astro`**: Sticky top nav with mobile menu
- **`src/components/Hero.astro`**: Landing page hero with CTAs and scroll animations
- **`src/components/Footer.astro`**: Site footer with links and social icons
- **`src/components/Animate.astro`**: Reusable animation wrapper for scroll-triggered reveals
- **`src/components/SkillsPreview.astro`**: Skills preview (currently unused)
- **`src/components/Languages.astro`**: Languages display (currently unused)
- **`src/components/Overview.astro`**: Overview section (commented out, preserved for reference)

#### Configuration
- **`astro.config.mjs`**: Site config with sitemap, Tailwind, and icon integrations
- **`tailwind.config.mjs`**: Color system, fonts, custom animations, and keyframes

## Site Structure & Design Philosophy

### Information-Dense, User-Respecting Design

The site follows an **opinionated, minimal approach**:

**Landing Page (`/`):**
- Single hero section with name, role, introduction
- Two CTAs: "Get In Touch" (primary), "Download CV" (secondary)
- No scrolling required—everything important is immediately visible
- Navigation provides access to detailed pages

**Skills Page (`/skills`):**
- Documentation-style sidebar navigation (sticky, highlights active section)
- All content immediately visible (no "scroll to discover")
- White content cards on warm off-white canvas (passepartout/matting effect)
- Sections: Technical Skills, Languages, Education, Experience, Research Interests

**Philosophy**: Respect user time. Make important information accessible immediately. Details are one click away, not hidden behind scroll journeys.

## Visual Language System

### Unified Design System

The site uses **consistent visual vocabulary** applied **differently** to communicate hierarchy:

#### Color Palette
```js
background: #faf9f7   // Warm off-white canvas
primary-50: #f6f8f6   // Lightest sage green (subtle tints)
primary-100: #e8ede8  // Light sage green (borders)
primary-600: #6b8e6b  // Main sage green (accents)
secondary: gray scale // Neutral elements
```

**Brand Colors**: Sage green + terracotta (from header pattern) = earth tones suggesting sustainability, energy, nature

#### Visual Hierarchy Layers

```
1. Navigation       → White + shadow-sm + border-b (floating utility)
2. Hero/Page Header → Gradient + pattern + border-b (special focus)
3. Canvas/Background → #faf9f7 warm off-white (the "wall")
4. Content Cards    → White + shadow-sm + border + rounded-lg (interactive)
5. Interactive Elements → Hover states, transitions, animations
```

**Passepartout Effect**: Content cards on warm background create matting/framing effect (like artwork in a gallery)

#### Consistent Visual Cues
- **Shadows**: `shadow-sm` (subtle) → `shadow-md` (hover) → `shadow-lg` (emphasis)
- **Borders**: `border-gray-100` (neutral) or `border-primary-100` (thematic)
- **Gradients**: `from-primary-50 via-white to-primary-50` (hero & page headers)
- **Spacing**: Uses Tailwind scale (4, 6, 8, 12) consistently

See **`VISUAL_LANGUAGE_SYSTEM.md`** for complete design system documentation.

## Typography & Fonts

### Font System

```js
font-sans: Inter        // Body text, UI elements (warm, professional)
font-display: Fraunces  // Headlines (elegant serif, sophisticated)
font-mono: JetBrains Mono // Code, technical content
```

**Loaded via @fontsource** in BaseLayout:
- Inter: 400, 500, 600, 700
- Fraunces: 600, 700

### Typography Scale

```css
h1: text-4xl md:text-5xl  (36px → 48px)
h2: text-3xl md:text-4xl  (30px → 36px)
h3: text-2xl md:text-3xl  (24px → 30px)
h4: text-xl md:text-2xl   (20px → 24px)
body: text-base (16px)
```

**All headings use `font-display`** (Fraunces serif) for visual distinction and personality.

## Animation System

### Scroll-Triggered Animations

**Reusable Component**: `<Animate>` wrapper with Intersection Observer

```astro
import Animate from '../components/Animate.astro';

<Animate type="fade-up" delay={150}>
  <div>Content fades up when scrolling into view</div>
</Animate>
```

**Available Types**:
- `fade-up` - Slide up + fade (default, professional)
- `fade-in` - Simple opacity transition
- `slide-left` / `slide-right` - Directional reveals
- `scale-in` - Scale from 95% to 100%
- `bounce-in` - Playful pop-in (use sparingly)
- `rotate-in` - Rotate + scale (decorative)

### Continuous Animations (CSS Keyframes)

Defined in `tailwind.config.mjs`:
- `animate-glow-pulse` - Subtle pulsing glow (CTAs, badges)
- `animate-float` - Gentle floating motion (decorative elements)
- `animate-shimmer` - Loading/premium shimmer effect
- `animate-gradient-shift` - Animated gradient backgrounds
- `animate-draw-line` - SVG path drawing

### Animation Philosophy

**Every animation serves a purpose:**
1. **Feedback** - Confirms user actions (hover, click)
2. **Attention** - Guides eye to important content
3. **Explanation** - Shows state changes (loading, success)
4. **Delight** - Adds personality (subtle, not distracting)

See **`ANIMATIONS_GUIDE.md`** and **`ANIMATION_LIBRARY.md`** for complete documentation.

## Styling Architecture

### Tailwind + Custom Components

**Tailwind-first** approach with semantic component classes:

```css
/* Button System (unified) */
.btn                 /* Base button with shadow + transitions */
.btn-primary         /* Solid primary color fill */
.btn-secondary       /* Solid secondary color fill */
.btn-outline         /* Border-only with hover fill */

/* Card System (unified) */
.card                /* White card with shadow-sm + border */
.card-hover          /* Adds hover:shadow-md */
.card-interactive    /* Enhanced hover with shadow-lg */

/* Layout */
.container-custom    /* max-w-6xl with responsive padding */
.section-padding     /* py-12 md:py-16 lg:py-20 */
```

### Responsive Design (Mobile-First)

**Tailwind Breakpoints**:
```
(default) = Mobile (0px+)
sm:       = 640px+  (small tablets)
md:       = 768px+  (tablets)
lg:       = 1024px+ (laptops)
xl:       = 1280px+ (desktops)
2xl:      = 1536px+ (large desktops)
```

**The site is fully responsive** using mobile-first utilities:
- Hero grid: `grid lg:grid-cols-2` (stacks on mobile, side-by-side on desktop)
- Typography: `text-5xl md:text-6xl` (smaller on mobile, larger on desktop)
- Buttons: `flex flex-col sm:flex-row` (stack on mobile, horizontal on tablet+)
- Skills grid: `grid md:grid-cols-2 lg:grid-cols-4` (1 → 2 → 4 columns)
- Sidebar: `grid lg:grid-cols-[240px_1fr]` (stacks on mobile, sidebar on desktop)

**Always test in browser DevTools** (Cmd+Shift+M) at 375px, 768px, 1024px, 1440px.

## Content Management

### Adding/Updating Content

**Always update `src/data/profile.ts` first** - components automatically reflect changes:

- **Personal info**: Update `Profile` interface properties (`name`, `role`, `status`, `bio`)
- **Skills**: Modify `skills` array (Skills page shows all, SkillsPreview selects top 8)
- **Social profiles**: Update `profiles` array (used in Navigation and Footer)
- **Work experience**: Update `work` array
- **Education**: Update `education` array
- **Languages**: Update `languages` array
- **Interests**: Update `interests` array

### Component Data Relationships

- **Hero**: Uses `name`, `role`, `status`, `avatar`
- **Skills Page**: Renders all `skills` categories, `languages`, `education`, `work`, `interests`
- **Navigation/Footer**: Use `profiles` for social links and icons
- **SkillsPreview** (unused): Dynamically selects top 8 skills across all categories

## Icon System

Uses `astro-icon` with multiple icon libraries:

**Usage**:
```astro
import { Icon } from 'astro-icon/components';

<Icon name="mdi:github" size={24} />
<Icon name="skill-icons:typescript" />
<Icon name="mdi:file-download" />
```

**Available Libraries**: MDI, Simple Icons, Skill Icons, Logos, Heroicons, Tabler, Carbon, Phosphor, Lucide, Font Awesome

**Social Icons**: Automatically resolved from `profiles.icon` field in profile.ts

## SEO & Performance

### Built-in SEO Features

BaseLayout includes comprehensive SEO:
- Meta tags (title, description, viewport)
- Open Graph + Twitter Cards
- JSON-LD structured data for person/professional schema
- Canonical URLs
- Sitemap generation via `@astrojs/sitemap`

### Performance Optimization

- **Static site generation** (no client-side JS for content)
- **Minimal JavaScript** (only for animations and mobile menu)
- **Optimized animations** (GPU-accelerated transforms and opacity only)
- **Web fonts** loaded via @fontsource (self-hosted, no external requests)

**Animation Performance**:
- Only animate `transform` and `opacity` (GPU-accelerated)
- Never animate `width`, `height`, `top`, `left` (causes layout recalculation)
- Respect `prefers-reduced-motion` (users can disable animations)

### Performance Targets

- **Lighthouse Performance**: >90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <3s
- **Cumulative Layout Shift**: <0.1

## Migration Context

### Hugo → Astro Migration Status

- **✅ Phase 1 Complete**: Technical migration, component architecture, SEO optimization
- **✅ Visual Design System**: Unified color palette, typography, animations, passepartout framing
- **✅ Skills Page**: Complete with sidebar navigation and all content sections
- **📋 Projects Page**: Needs content
- **📋 Hero Introduction**: Could be rewritten to be less job-seeking focused, more personal

### Backup & Content Reference

- **`/backup/`**: Complete Hugo site structure for content reference
- **Content Strategy**: Professional networking focus, currently seeking opportunities
- **Status**: "Research Associate | Seeking New Opportunities"

## Development Guidelines

### When Adding Features

1. **Extend TypeScript interfaces** in profile.ts for new data
2. **Follow component patterns**: Props-based, data-driven components
3. **Maintain visual language**: Use established card/shadow/border system
4. **Use `<Animate>` component**: For scroll-triggered reveals
5. **Follow responsive patterns**: Mobile-first with semantic breakpoints
6. **Maintain SEO standards**: Update BaseLayout if adding new page types
7. **Test responsiveness**: DevTools at 375px, 768px, 1024px, 1440px

### Visual Design Checklist

When adding new sections/components:
- [ ] Use `bg-background` for canvas/page background
- [ ] Use white cards with `shadow-sm border border-gray-100`
- [ ] Use `rounded-lg` for all cards
- [ ] Add hover states (`hover:shadow-md hover:border-primary-200`)
- [ ] Use consistent spacing (Tailwind scale: 4, 6, 8, 12)
- [ ] Use thematic borders (`border-primary-100`) for section separators
- [ ] Wrap in `<Animate>` for scroll reveals
- [ ] Test mobile responsiveness

### Type Safety

All components expect typed data from profile.ts. When adding fields:
- Update interface definitions
- Components will type-check automatically
- Use optional properties (`field?: string`) for incremental additions

### Animation Guidelines

- **Use sparingly** - Every animation should serve a purpose
- **Stagger delays** - For lists/grids (50-100ms between items)
- **Keep durations short** - 200-700ms (longer feels sluggish)
- **Test performance** - DevTools Performance tab, watch for jank
- **Respect accessibility** - Handle `prefers-reduced-motion`

## Domain & Deployment

- **Production URL**: https://www.infornomics.de
- **Build Target**: Static site (GitHub Pages)
- **Assets**: Organized in `/public/` for static serving
- **CNAME**: Configured for custom domain

## Design Philosophy Summary

**User-Respecting, Information-Dense Design**:
- No forced scroll journeys
- Important info immediately accessible
- Details available on demand (one click away)
- Consistent visual language (same vocabulary, different sentences)
- Professional but warm (earth tones, elegant typography)
- Opinionated about usability over trends

**Visual Grammar**: Use consistent cues (shadows, borders, gradients, spacing) applied differently to communicate hierarchy while maintaining unity.

This is **taste**—choosing restraint and function over flash and trends.
