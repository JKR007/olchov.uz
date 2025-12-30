# olchov.uz — V1 Development Plan

**Status:** 🚧 In Development  
**Version:** 1.0  
**Last Updated:** 2025-01-27

---

## Table of Contents

1. [Overview](#overview)
2. [Development Phases](#development-phases)
3. [Feature Breakdown](#feature-breakdown)
4. [Branch Strategy](#branch-strategy)
5. [Commit Guidelines](#commit-guidelines)
6. [Testing Checklist](#testing-checklist)
7. [Dependencies](#dependencies)

---

## Overview

This document serves as the **single source of truth** for olchov.uz V1 development. All features, implementation steps, and technical decisions are documented here.

### Project Goals (V1)

- ✅ Frontend-only unit conversion website
- ✅ 17 converter pages across 5 categories
- ✅ SEO-optimized with structured data
- ✅ Mobile-first responsive design
- ✅ Dark/light theme support
- ✅ Fast, static generation (Cloudflare Pages ready)

### Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Hosting:** Cloudflare Pages (static-first)
- **No Backend:** All conversions client-side

---

## Development Phases

### Phase 0: Setup & Dependencies ✅
**Branch:** `feature/0-setup-dependencies`  
**Status:** In Progress

**Tasks:**
- [x] Verify Tailwind CSS v4 installation
- [ ] Test Tailwind CSS compilation
- [ ] Implement manual dark/light theme toggle
- [ ] Test theme persistence (localStorage)
- [ ] Verify build process works

**Files to Create/Modify:**
- `app/globals.css` (theme variables)
- `components/ThemeToggle.tsx` (new)
- `app/layout.tsx` (add theme provider)

**Estimated Time:** 30-45 minutes

---

### Phase 1: Core Configuration (Step A)
**Branch:** `feature/1-routes-config`  
**Status:** Pending

**Tasks:**
- [ ] Create `src/config/routes.ts`
- [ ] Define `CategorySlug` type
- [ ] Define `CategoryConfig` type
- [ ] Define `UnitConfig` type
- [ ] Define `Pair` type
- [ ] Create `UNITS` dictionary (all units with labels, symbols, variants)
- [ ] Create `CATEGORIES` config (5 categories, 17 pairs)
- [ ] Implement `getAllConverterPages()` helper
- [ ] Implement `getAllCategoryPages()` helper
- [ ] Implement `findPair()` helper
- [ ] Implement `assertUnitExists()` helper

**Files to Create:**
- `src/config/routes.ts`

**Key Requirements:**
- Single source of truth for all routes
- Support for Uzbek typo variants (metir, miter, dyum, etc.)
- SEO keywords per pair
- URL slug conventions (hyphen-separated, lowercase)

**Estimated Time:** 1-1.5 hours

**Commit Strategy:**
1. Initial types and interfaces
2. UNITS dictionary (length units)
3. UNITS dictionary (weight, temperature, area, volume)
4. CATEGORIES config (uzunlik category)
5. CATEGORIES config (remaining categories)
6. Helper functions

---

### Phase 2: Conversion Logic (Step C)
**Branch:** `feature/2-conversion-logic`  
**Status:** Pending

**Tasks:**
- [ ] Create `src/lib/convert.ts`
  - [ ] `convertByFactor()` function
  - [ ] `cToF()` function (temperature)
  - [ ] `fToC()` function (temperature)
- [ ] Create `src/lib/round.ts`
  - [ ] `roundSmart()` function (4 digits for >=1, 6 for <1)
- [ ] Create `src/conversions/index.ts`
  - [ ] `ConversionCategory` type
  - [ ] `FACTORS` object (base unit conversion factors)
  - [ ] `isTemperatureCategory()` helper

**Files to Create:**
- `src/lib/convert.ts`
- `src/lib/round.ts`
- `src/conversions/index.ts`

**Key Requirements:**
- Frontend-only calculations
- Deterministic formulas
- Smart rounding for readability
- Temperature special handling

**Estimated Time:** 1-1.5 hours

**Commit Strategy:**
1. Basic conversion functions
2. Temperature conversion functions
3. Rounding utility
4. Conversion factors (length)
5. Conversion factors (weight, area, volume)
6. Type exports and helpers

---

### Phase 3: Page Structure (Step B)
**Branch:** `feature/3-page-skeletons`  
**Status:** Pending

**Tasks:**
- [ ] Homepage (`app/page.tsx`)
  - [ ] Basic layout structure
  - [ ] Hero section (H1, subtitle)
  - [ ] Search placeholder
  - [ ] Category cards skeleton
  - [ ] Popular conversions section
  - [ ] Full directory section
  - [ ] Typo/variants SEO block
  - [ ] Footer
- [ ] Category page (`app/[category]/page.tsx`)
  - [ ] `generateStaticParams()`
  - [ ] `generateMetadata()`
  - [ ] Category header
  - [ ] Converter pairs list
  - [ ] Breadcrumb navigation
- [ ] Converter page (`app/[category]/[pair]/page.tsx`)
  - [ ] `generateStaticParams()`
  - [ ] `generateMetadata()` (SEO template)
  - [ ] Page header (H1)
  - [ ] Converter UI placeholder
  - [ ] Formula section placeholder
  - [ ] Related links section

**Files to Create/Modify:**
- `app/page.tsx` (replace existing)
- `app/[category]/page.tsx` (new)
- `app/[category]/[pair]/page.tsx` (new)

**Key Requirements:**
- Static generation for all pages
- SEO-friendly HTML structure
- Mobile-first responsive design
- Proper metadata generation

**Estimated Time:** 1.5-2 hours

**Commit Strategy:**
1. Homepage basic structure
2. Homepage content sections
3. Category page structure
4. Category page static generation
5. Converter page structure
6. Converter page static generation
7. Metadata generation for all pages

---

### Phase 4: Converter UI (Step C)
**Branch:** `feature/4-converter-ui`  
**Status:** Pending

**Tasks:**
- [ ] Create `src/components/ConverterClient.tsx`
  - [ ] Client component setup ("use client")
  - [ ] State management (input value)
  - [ ] Number parsing (comma/dot support)
  - [ ] Live conversion calculation
  - [ ] Result display
  - [ ] Swap button functionality
  - [ ] Copy result button
  - [ ] Input validation
  - [ ] Error handling (empty/invalid input)

**Files to Create:**
- `src/components/ConverterClient.tsx`

**Files to Modify:**
- `app/[category]/[pair]/page.tsx` (integrate ConverterClient)

**Key Requirements:**
- Real-time conversion as user types
- Support Uzbek comma decimal separator
- Smart rounding display
- Temperature special handling
- Accessible form controls

**Estimated Time:** 1.5-2 hours

**Commit Strategy:**
1. Basic component structure and props
2. Input state and parsing
3. Conversion calculation logic
4. UI layout and styling
5. Swap functionality
6. Copy result functionality
7. Error handling and edge cases

---

### Phase 5: Homepage Features (Step D)
**Branch:** `feature/5-homepage-search`  
**Status:** Pending

**Tasks:**
- [ ] Create `src/lib/search.ts`
  - [ ] `normalize()` function
  - [ ] `unitVariants()` helper
  - [ ] `searchConverters()` function
  - [ ] Search scoring algorithm
  - [ ] Typo/variant matching
- [ ] Create `src/components/HomeSearch.tsx`
  - [ ] Client component setup
  - [ ] Search input
  - [ ] Real-time results display
  - [ ] Keyboard shortcuts (ESC to clear)
  - [ ] Results linking
- [ ] Update homepage
  - [ ] Integrate HomeSearch component
  - [ ] Popular conversions links
  - [ ] Category cards with preview links
  - [ ] Full directory with search integration

**Files to Create:**
- `src/lib/search.ts`
- `src/components/HomeSearch.tsx`

**Files to Modify:**
- `app/page.tsx`

**Key Requirements:**
- Search by unit name, slug, variant, keyword
- Fuzzy matching for typos
- Fast client-side search
- Results sorted by relevance

**Estimated Time:** 2-2.5 hours

**Commit Strategy:**
1. Search normalization utilities
2. Search scoring algorithm
3. Search function implementation
4. HomeSearch component structure
5. Search UI and results display
6. Keyboard shortcuts and UX polish
7. Homepage integration

---

### Phase 6: SEO Infrastructure (Steps E, F, G, H)
**Branch:** `feature/6-seo-sitemap-robots` → `feature/7-seo-jsonld` → `feature/8-seo-content`  
**Status:** Pending

#### 6.1 Sitemap & Robots (Step E)
**Branch:** `feature/6-seo-sitemap-robots`

**Tasks:**
- [ ] Create `app/sitemap.xml/route.ts`
  - [ ] Dynamic sitemap generation
  - [ ] Homepage entry
  - [ ] Category pages entries
  - [ ] Converter pages entries
  - [ ] Priority and lastmod
- [ ] Create `app/robots.txt/route.ts`
  - [ ] Allow all user agents
  - [ ] Sitemap reference
- [ ] Test sitemap.xml generation
- [ ] Test robots.txt generation

**Files to Create:**
- `app/sitemap.xml/route.ts`
- `app/robots.txt/route.ts`

**Estimated Time:** 30-45 minutes

**Commit Strategy:**
1. Sitemap route handler
2. Robots.txt route handler
3. Testing and validation

---

#### 6.2 JSON-LD Structured Data (Step F)
**Branch:** `feature/7-seo-jsonld`

**Tasks:**
- [ ] Create `src/lib/jsonld.ts`
  - [ ] `buildWebApplicationJsonLd()` function
  - [ ] `buildFaqPageJsonLd()` function
  - [ ] Type definitions
- [ ] Update converter pages
  - [ ] Add WebApplication JSON-LD
  - [ ] Add FAQPage JSON-LD (placeholder)
- [ ] Test structured data validation

**Files to Create:**
- `src/lib/jsonld.ts`

**Files to Modify:**
- `app/[category]/[pair]/page.tsx`

**Estimated Time:** 45-60 minutes

**Commit Strategy:**
1. JSON-LD utility functions
2. WebApplication schema
3. FAQPage schema
4. Converter page integration
5. Validation and testing

---

#### 6.3 SEO Content Generation (Step G)
**Branch:** `feature/8-seo-content`

**Tasks:**
- [ ] Create `src/lib/seoContent.ts`
  - [ ] `SeoContent` type
  - [ ] `buildSeoContent()` function
  - [ ] Formula generation
  - [ ] Examples generation (1, 5, 10, 100)
  - [ ] FAQ generation
  - [ ] Variants line generation
- [ ] Create `src/components/SeoContentBlock.tsx`
  - [ ] Formula section
  - [ ] Examples table
  - [ ] FAQ accordion/cards
  - [ ] Variants paragraph
- [ ] Update converter pages
  - [ ] Integrate SeoContentBlock
  - [ ] Use generated content

**Files to Create:**
- `src/lib/seoContent.ts`
- `src/components/SeoContentBlock.tsx`

**Files to Modify:**
- `app/[category]/[pair]/page.tsx`

**Estimated Time:** 1.5-2 hours

**Commit Strategy:**
1. SEO content types and interfaces
2. Formula generation logic
3. Examples generation
4. FAQ generation
5. SeoContentBlock component structure
6. Component UI implementation
7. Converter page integration

---

#### 6.4 JSON-LD ↔ SEO Content Sync (Step H)
**Branch:** `feature/8-seo-content` (continuation)

**Tasks:**
- [ ] Refactor converter pages
  - [ ] Use `buildSeoContent()` as single source
  - [ ] Generate FAQ JSON-LD from SEO content
  - [ ] Ensure UI FAQ = JSON-LD FAQ
- [ ] Test synchronization
- [ ] Validate no mismatches

**Files to Modify:**
- `app/[category]/[pair]/page.tsx`
- `src/lib/jsonld.ts` (if needed)

**Estimated Time:** 30-45 minutes

**Commit Strategy:**
1. Refactor to use buildSeoContent()
2. Sync FAQ JSON-LD with UI
3. Testing and validation

---

### Phase 7: Internal Linking (Step I)
**Branch:** `feature/9-internal-linking`  
**Status:** Pending

**Tasks:**
- [ ] Create `src/components/Breadcrumbs.tsx`
  - [ ] Breadcrumb navigation component
  - [ ] Accessibility (aria-label)
  - [ ] Home → Category → Converter structure
- [ ] Create `src/lib/related.ts`
  - [ ] `getRelatedPairs()` function
  - [ ] Reverse pair logic
  - [ ] Same category pairs logic
- [ ] Create `src/components/RelatedConversions.tsx`
  - [ ] Related conversions list
  - [ ] Link generation
- [ ] Update converter pages
  - [ ] Add breadcrumbs
  - [ ] Add related conversions section
  - [ ] Add category hub link
- [ ] Update category pages
  - [ ] Add breadcrumbs
  - [ ] Add homepage link

**Files to Create:**
- `src/components/Breadcrumbs.tsx`
- `src/lib/related.ts`
- `src/components/RelatedConversions.tsx`

**Files to Modify:**
- `app/[category]/page.tsx`
- `app/[category]/[pair]/page.tsx`

**Estimated Time:** 1-1.5 hours

**Commit Strategy:**
1. Breadcrumbs component
2. Related pairs logic
3. RelatedConversions component
4. Converter page integration
5. Category page integration
6. Testing and validation

---

### Phase 8: Polish & Testing
**Branch:** `feature/10-polish`  
**Status:** Pending

**Tasks:**
- [ ] Theme toggle refinement
  - [ ] Smooth transitions
  - [ ] Icon updates
  - [ ] Accessibility improvements
- [ ] Mobile responsiveness
  - [ ] Test all pages on mobile
  - [ ] Fix any layout issues
  - [ ] Touch target sizes
- [ ] Accessibility audit
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
  - [ ] ARIA labels
  - [ ] Color contrast
- [ ] Performance optimization
  - [ ] Image optimization (if any)
  - [ ] Font loading
  - [ ] Bundle size check
- [ ] Cross-browser testing
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari
- [ ] Final content review
  - [ ] All 17 converter pages
  - [ ] SEO metadata
  - [ ] Internal links

**Estimated Time:** 1-1.5 hours

**Commit Strategy:**
1. Theme toggle improvements
2. Mobile responsiveness fixes
3. Accessibility improvements
4. Performance optimizations
5. Final testing and bug fixes

---

## Feature Breakdown

### Complete Feature List

| # | Feature | Branch | Status | Priority |
|---|---------|--------|--------|----------|
| 0 | Setup & Dependencies | `feature/0-setup-dependencies` | 🚧 In Progress | P0 |
| 1 | Routes Configuration | `feature/1-routes-config` | ⏳ Pending | P0 |
| 2 | Conversion Logic | `feature/2-conversion-logic` | ⏳ Pending | P0 |
| 3 | Page Skeletons | `feature/3-page-skeletons` | ⏳ Pending | P0 |
| 4 | Converter UI | `feature/4-converter-ui` | ⏳ Pending | P0 |
| 5 | Homepage Search | `feature/5-homepage-search` | ⏳ Pending | P1 |
| 6 | Sitemap & Robots | `feature/6-seo-sitemap-robots` | ⏳ Pending | P1 |
| 7 | JSON-LD Structured Data | `feature/7-seo-jsonld` | ⏳ Pending | P1 |
| 8 | SEO Content | `feature/8-seo-content` | ⏳ Pending | P1 |
| 9 | Internal Linking | `feature/9-internal-linking` | ⏳ Pending | P1 |
| 10 | Polish & Testing | `feature/10-polish` | ⏳ Pending | P2 |

**Priority Legend:**
- **P0:** Critical - Blocks other features
- **P1:** High - Important for V1 launch
- **P2:** Medium - Nice to have, can be refined post-launch

---

## Branch Strategy

### Branch Naming Convention

```
feature/{number}-{feature-name}
enhancement/{purpose}
```

**Examples:**
- `feature/0-setup-dependencies`
- `feature/1-routes-config`
- `enhancement/development-plan-v1`

### Branch Workflow

1. **Create branch** from `main` (or current base)
2. **Develop feature** with small, focused commits
3. **Test locally** before completing
4. **Request review** (if needed)
5. **Merge to main** after approval

### Branch Dependencies

```
main
├── feature/0-setup-dependencies
├── feature/1-routes-config (depends on: 0)
├── feature/2-conversion-logic (depends on: 1)
├── feature/3-page-skeletons (depends on: 1, 2)
├── feature/4-converter-ui (depends on: 3)
├── feature/5-homepage-search (depends on: 1, 3)
├── feature/6-seo-sitemap-robots (depends on: 1)
├── feature/7-seo-jsonld (depends on: 3)
├── feature/8-seo-content (depends on: 2, 7)
├── feature/9-internal-linking (depends on: 3)
└── feature/10-polish (depends on: all)
```

---

## Commit Guidelines

### Commit Message Format

```
type(scope): brief description

Optional longer explanation if needed.
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, styling
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(config): add routes.ts with categories and units
feat(converter): implement live conversion calculation
fix(theme): persist theme preference in localStorage
docs(plan): update v1_plan.md with phase 2 details
```

### Commit Size Guidelines

- ✅ **Small commits:** 1-3 files, focused change
- ✅ **Logical grouping:** Related changes together
- ❌ **Avoid:** Large commits with unrelated changes
- ❌ **Avoid:** "WIP" or "fix everything" commits

### Commit Frequency

- Commit after completing a logical unit of work
- Commit before moving to a different file/feature
- Commit when a feature is working (even if incomplete)

---

## Testing Checklist

### Phase 0: Setup
- [ ] Tailwind CSS compiles without errors
- [ ] Theme toggle switches between dark/light
- [ ] Theme preference persists on page reload
- [ ] Build process completes successfully
- [ ] Dev server runs without errors

### Phase 1-2: Core Logic
- [ ] All units defined correctly
- [ ] All conversion pairs configured
- [ ] Conversion calculations accurate
- [ ] Rounding works correctly
- [ ] Temperature conversions correct

### Phase 3-4: Pages & UI
- [ ] Homepage renders correctly
- [ ] All category pages accessible
- [ ] All converter pages accessible
- [ ] Converter UI calculates correctly
- [ ] Swap functionality works
- [ ] Copy result works

### Phase 5: Search
- [ ] Search finds correct converters
- [ ] Typo variants work (metir, dyum, etc.)
- [ ] Results sorted by relevance
- [ ] Keyboard shortcuts work (ESC)

### Phase 6: SEO
- [ ] Sitemap.xml generates correctly
- [ ] Robots.txt accessible
- [ ] JSON-LD validates (Google Rich Results Test)
- [ ] SEO content displays correctly
- [ ] FAQ syncs with JSON-LD

### Phase 7: Linking
- [ ] Breadcrumbs display correctly
- [ ] Related conversions show relevant links
- [ ] All internal links work
- [ ] No broken links

### Phase 8: Final
- [ ] Mobile responsive (all pages)
- [ ] Dark/light theme works everywhere
- [ ] Accessibility (keyboard nav, screen reader)
- [ ] Performance (Lighthouse score >90)
- [ ] Cross-browser compatibility

---

## Dependencies

### Current Dependencies

```json
{
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### No Additional Dependencies Needed

All functionality will be implemented using:
- Next.js built-in features
- React hooks
- Tailwind CSS utilities
- Native browser APIs (localStorage, etc.)

---

## Notes

### Development Principles

1. **Config-driven:** Single source of truth (`routes.ts`)
2. **Frontend-only:** No backend, all calculations client-side
3. **SEO-first:** Every page optimized for search
4. **Mobile-first:** Responsive design from the start
5. **Accessibility:** WCAG 2.1 AA compliance target
6. **Performance:** Static generation, minimal JS

### Key Decisions (Locked)

- ✅ URL structure: `/{category}/{from}-{to}`
- ✅ 17 converter pages (V1 scope)
- ✅ Frontend-only architecture
- ✅ Tailwind CSS v4
- ✅ Next.js App Router
- ✅ Static generation (SSG)

### Future Considerations (Post-V1)

- Additional converter categories
- PWA support
- Analytics integration
- AdSense monetization
- Multi-language support (if needed)

---

## Progress Tracking

### Completed ✅
- Project setup
- Documentation review
- Development plan creation

### In Progress 🚧
- Phase 0: Setup & Dependencies

### Pending ⏳
- All other phases

---

**Last Updated:** 2025-01-27  
**Next Review:** After Phase 0 completion

