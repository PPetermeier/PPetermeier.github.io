# Astro Migration Plan

## Overview
This document outlines the complete migration from Hugo + HugoBlox to Astro for the personal homepage. The migration is split into two distinct phases to maintain clarity and reduce complexity.

## Phase Strategy

### Phase 1: Technical Migration (Current Focus)
- **Goal**: 1:1 migration of existing content and functionality to Astro
- **Scope**: Framework migration, layout recreation, feature parity
- **Content**: Keep existing content exactly as-is during migration
- **Timeline**: Complete technical migration first

### Phase 2: Content Enhancement (Future)
- **Goal**: Content updates, additions, and improvements
- **Scope**: New sections, updated copy, additional features
- **Prerequisites**: Completed Phase 1 migration
- **Timeline**: After successful Astro deployment

---

## Phase 1: Technical Migration

### Step 1: Project Setup
```bash
# Create migration branch
git checkout -b astro-migration

# Clean up Hugo-specific files
git rm -r config/ layouts/ hugoblox.yaml
git rm go.mod go.sum hugo_stats.json netlify.toml

# Initialize Astro project
npm create astro@latest . -- --template minimal --typescript
```

### Step 2: Project Structure
```
/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   └── SkillCard.astro
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/              # Routes (file-based routing)
│   │   ├── index.astro     # Homepage
│   │   ├── skills.astro    # Skills page
│   │   ├── ambitions.astro # Ambitions page
│   │   └── projects/       # Projects section
│   ├── styles/             # CSS/SCSS files
│   │   ├── global.css
│   │   └── components/
│   ├── data/               # Static data files
│   │   ├── profile.ts      # Profile information
│   │   └── skills.ts       # Skills data
│   └── utils/              # Helper functions
├── public/                 # Static assets
│   ├── media/              # Images and media
│   └── uploads/            # CV and documents
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── tailwind.config.mjs     # Tailwind CSS config
```

### Step 3: Content Migration Map

#### Current Hugo Structure → Astro Structure
- `content/_index.md` → `src/pages/index.astro`
- `content/Skills.md` → `src/pages/skills.astro`
- `content/Ambitions.md` → `src/pages/ambitions.astro`
- `content/projects/_index.md` → `src/pages/projects/index.astro`
- `content/projects/DRL_Intraday/` → `src/pages/projects/drl-intraday.astro`
- `content/authors/admin/` → `src/data/profile.ts`
- `assets/media/` → `public/media/`
- `static/uploads/` → `public/uploads/`

#### Hugo Features → Astro Implementation
- **Hugo Shortcodes** → Astro Components
- **Front Matter** → Astro frontmatter or TypeScript data
- **Resume Blocks** → Custom Astro components
- **Icon Integration** → Astro Icon or custom SVG components
- **SEO Configuration** → Astro SEO component

### Step 4: Key Dependencies
```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@astrojs/node": "^8.0.0",
    "astro-icon": "^1.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}
```

### Step 5: Core Features to Implement

#### Navigation System
- Responsive navigation bar
- Mobile hamburger menu
- Active page highlighting
- Social media links integration

#### Layout System
- Base layout with common elements
- Page-specific layouts for different content types
- Responsive grid system using Tailwind CSS

#### Component Library
- **Biography Component**: Resume-style bio section
- **Skills Component**: Skill cards with proficiency levels
- **Project Cards**: Project showcase with images and descriptions
- **Contact Info**: Social links and contact information
- **SEO Component**: Meta tags and structured data

#### Styling Approach
- **Framework**: Tailwind CSS for rapid development
- **Typography**: Modern font stack with good readability
- **Color Scheme**: Professional palette with accent colors
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Optional toggle for theme switching

### Step 6: SEO & Performance
- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Image optimization
- Lighthouse performance optimization

### Step 7: GitHub Pages Deployment
```yaml
# .github/workflows/deploy.yml
name: Deploy Astro to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Astro
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Step 8: Testing & Quality Assurance

#### Pre-merge Checklist
- [ ] All pages render correctly
- [ ] Navigation works on all devices
- [ ] Images load and display properly
- [ ] CV download link functions
- [ ] Social media links work
- [ ] SEO meta tags are present
- [ ] Lighthouse score > 90 for all metrics
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness tested
- [ ] No broken links or 404 errors

#### Performance Targets
- **Lighthouse Performance**: > 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

### Step 9: Merge Strategy
1. **Feature Complete**: All Hugo functionality replicated
2. **Testing Complete**: All QA checks passed
3. **Backup Created**: Current Hugo version tagged
4. **Deployment Ready**: GitHub Actions configured
5. **Merge to Main**: Deploy new Astro version

---

## Phase 2: Content Enhancement (Future)

### Planned Improvements
- [ ] Updated professional summary
- [ ] New project additions
- [ ] Enhanced skills section
- [ ] Blog/articles section
- [ ] Interactive elements
- [ ] Contact form integration
- [ ] Newsletter signup
- [ ] Additional social integrations

### Content Strategy
- Review and update existing content
- Add new sections as needed
- Improve SEO with better content
- Add more interactive elements
- Consider adding a blog section

---

## Migration Timeline

### Week 1: Setup & Foundation
- Project initialization
- Basic layout structure
- Navigation implementation

### Week 2: Content Migration
- Page content conversion
- Asset migration
- Component development

### Week 3: Styling & Polish
- Responsive design implementation
- Performance optimization
- SEO implementation

### Week 4: Testing & Deployment
- Quality assurance
- Cross-browser testing
- Production deployment

---

## Notes

### Why This Approach?
1. **Separation of Concerns**: Technical migration separate from content updates
2. **Risk Mitigation**: Maintain existing content during framework change
3. **Easier Testing**: Verify 1:1 functionality before enhancements
4. **Cleaner Git History**: Distinct commits for migration vs content changes

### Key Decisions
- **Astro**: Chosen for performance and simplicity
- **Tailwind CSS**: For rapid, responsive styling
- **TypeScript**: For better development experience
- **Component-Based**: Modular, reusable architecture

### Success Metrics
- Site loads faster than current Hugo version
- All existing functionality preserved
- Improved Lighthouse scores
- Better mobile experience
- Easier content management for future updates