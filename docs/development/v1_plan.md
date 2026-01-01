# olchov.uz — V1 Development Plan

**Status:** 🚧 In Development  
**Version:** 1.1  
**Last Updated:** 2025-01-27

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Development Phases](#development-phases)
4. [Feature Breakdown](#feature-breakdown)
5. [Branch Strategy](#branch-strategy)
6. [Commit Guidelines](#commit-guidelines)
7. [Testing Checklist](#testing-checklist)
8. [Dependencies & Infrastructure](#dependencies--infrastructure)
9. [Architecture Decisions](#architecture-decisions)

---

## Executive Summary

This document serves as the **single source of truth** for olchov.uz V1 development. It provides a comprehensive roadmap for building a frontend-only, SEO-optimized unit conversion website targeting Uzbek users.

### Current Progress

- ✅ **Phase 0:** Setup & Dependencies — Complete
- ✅ **Phase 1:** Routes Configuration — Complete
- ✅ **Phase 2:** Conversion Logic — Complete
- ✅ **Phase 3:** Page Structure — Complete & Enhanced
- ⏳ **Phase 4:** Converter UI — Pending
- ⏳ **Phase 5:** Homepage Search — Pending
- ⏳ **Phase 6:** SEO Infrastructure — Pending
- ⏳ **Phase 7:** Internal Linking — Pending
- ⏳ **Phase 8:** Polish & Testing — Pending

**Overall Progress:** 4 of 9 phases complete (44%)

---

## Project Overview

### Project Goals (V1)

olchov.uz is a **frontend-only unit conversion website** designed specifically for Uzbek users. The V1 release focuses on:

- ✅ **17 converter pages** across 5 categories (uzunlik, og'irlik, harorat, maydon, hajm)
- ✅ **SEO-first architecture** with structured data and optimized metadata
- ✅ **Mobile-first responsive design** using Tailwind CSS v4
- ✅ **Dark/light theme support** with manual toggle
- ✅ **Static site generation** optimized for Cloudflare Pages
- ✅ **Zero backend dependencies** — all calculations client-side
- ✅ **Uzbek typo support** — handles common misspellings (metir, dyum, etc.)

### Tech Stack

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| Framework | Next.js | 16.1.1 | App Router, SSG |
| Language | TypeScript | 5 | Type safety |
| Styling | Tailwind CSS | v4 | Utility-first CSS |
| Hosting | Cloudflare Pages | - | Static hosting |
| CI/CD | GitHub Actions | - | Automated testing |

### Architecture Principles

1. **Config-driven:** Single source of truth (`src/config/routes.ts`)
2. **Frontend-only:** No backend, all calculations client-side
3. **SEO-first:** Every page optimized for search engines
4. **Mobile-first:** Responsive design from the ground up
5. **Accessibility:** WCAG 2.1 AA compliance target
6. **Performance:** Static generation, minimal JavaScript

---

## Development Phases

### Phase 0: Setup & Dependencies ✅
**Branch:** `feature/0-setup-dependencies`  
**Status:** ✅ Complete  
**Completed:** 2025-01-27

**Objectives:**
- Verify and configure Tailwind CSS v4
- Implement manual dark/light theme toggle
- Set up GitHub Actions CI/CD
- Configure Prettier with ESLint integration

**Completed Tasks:**
- [x] Verified Tailwind CSS v4 installation and compilation
- [x] Implemented manual dark/light theme toggle with localStorage persistence
- [x] Added blocking script for theme initialization (prevents flash)
- [x] Created GitHub Actions workflow for CI
- [x] Configured Prettier with ESLint integration
- [x] Added npm scripts for linting, formatting, and type checking
- [x] Excluded `docs` directory from all checks

**Files Created:**
- `components/ThemeToggle.tsx` — Theme toggle component
- `.github/workflows/ci.yml` — CI/CD workflow
- `.prettierrc.json` — Prettier configuration
- `.prettierignore` — Prettier ignore patterns
- `docs/development/github-actions-setup.md` — CI/CD documentation

**Files Modified:**
- `app/globals.css` — Added Tailwind v4 dark mode custom variant
- `app/layout.tsx` — Added theme toggle and blocking script
- `app/page.tsx` — Created test page (later replaced in Phase 3)
- `package.json` — Added Prettier, eslint-config-prettier, scripts
- `eslint.config.mjs` — Integrated Prettier config
- `tsconfig.json` — Updated path mapping, excluded docs

**Key Features:**
- Theme toggle with smooth transitions
- Theme persistence across page reloads
- CI/CD with lint, typecheck, and build checks
- Automated formatting with Prettier
- Professional code quality standards

**Estimated Time:** 30-45 minutes  
**Actual Time:** ~45 minutes

---

### Phase 1: Core Configuration (Step A) ✅
**Branch:** `feature/1-routes-config`  
**Status:** ✅ Complete  
**Completed:** 2025-01-27

**Objectives:**
- Create single source of truth for all routes
- Define all units with labels, symbols, and variants
- Configure all 5 categories with 17 conversion pairs
- Implement helper functions for routing and SEO

**Completed Tasks:**
- [x] Created `src/config/routes.ts` with complete configuration
- [x] Defined `CategorySlug`, `CategoryConfig`, `UnitConfig`, `Pair` types
- [x] Created `UNITS` dictionary (17+ units with variants)
- [x] Created `CATEGORIES` config (5 categories, 17 pairs)
- [x] Implemented `getAllConverterPages()` helper
- [x] Implemented `getAllCategoryPages()` helper
- [x] Implemented `findPair()` helper
- [x] Implemented `assertUnitExists()` helper

**Files Created:**
- `src/config/routes.ts` — Complete routes configuration

**Key Features:**
- Single source of truth for all routing
- Support for Uzbek typo variants (metir, miter, dyum, etc.)
- SEO keywords per conversion pair
- URL slug conventions (hyphen-separated, lowercase)
- Type-safe configuration

**Categories & Pairs:**
- **Uzunlik:** 5 pairs (dyuym-santimetr, santimetr-dyuym, metr-fut, kilometr-mil, millimetr-dyuym)
- **Og'irlik:** 4 pairs (kg-funt, funt-kg, gramm-untsiya, tonna-kg)
- **Harorat:** 2 pairs (selsiy-farengeyt, farengeyt-selsiy)
- **Maydon:** 3 pairs (kvadrat-metr-sotix, sotix-gektar, gektar-kvadrat-metr)
- **Hajm:** 3 pairs (litr-gallon, ml-litr, kub-metr-litr)

**Estimated Time:** 1-1.5 hours  
**Actual Time:** ~1 hour

---

### Phase 2: Conversion Logic (Step C) ✅
**Branch:** `feature/2-conversion-logic`  
**Status:** ✅ Complete  
**Completed:** 2025-01-27

**Objectives:**
- Implement frontend-only conversion calculations
- Create smart rounding utility
- Define conversion factors for all categories
- Handle temperature conversions (special formulas)

**Completed Tasks:**
- [x] Created `src/lib/convert.ts` with conversion functions
- [x] Created `src/lib/round.ts` with smart rounding
- [x] Created `src/conversions/index.ts` with conversion factors
- [x] Implemented `convertByFactor()` for universal conversions
- [x] Implemented `cToF()` and `fToC()` for temperature
- [x] Implemented `roundSmart()` (4 digits for >=1, 6 for <1)
- [x] Defined `FACTORS` object for all categories
- [x] Created `isTemperatureCategory()` helper

**Files Created:**
- `src/lib/convert.ts` — Core conversion functions
- `src/lib/round.ts` — Smart rounding utility
- `src/conversions/index.ts` — Conversion factors and types

**Key Features:**
- Base unit model (metr, kg, kvadrat-metr, litr)
- Deterministic formulas for consistent results
- Smart rounding for readability
- Temperature special handling (formulas, not factors)
- Frontend-only (no backend required)

**Conversion Factors:**
- **Uzunlik:** 7 units (base: metr)
- **Og'irlik:** 5 units (base: kg)
- **Maydon:** 3 units (base: kvadrat-metr)
- **Hajm:** 4 units (base: litr)
- **Harorat:** Special case (uses formulas)

**Estimated Time:** 1-1.5 hours  
**Actual Time:** ~1 hour

---

### Phase 3: Page Structure (Step B) ✅
**Branch:** `feature/3-page-skeletons`  
**Status:** ✅ Complete & Enhanced  
**Completed:** 2025-01-27

**Objectives:**
- Create homepage with all required sections
- Implement category pages with static generation
- Implement converter pages with SEO metadata
- Ensure all pages are statically generated

**Completed Tasks:**
- [x] Created homepage (`app/page.tsx`) with all sections
- [x] Created category pages (`app/[category]/page.tsx`)
- [x] Created converter pages (`app/[category]/[pair]/page.tsx`)
- [x] Implemented `generateStaticParams()` for all pages
- [x] Implemented `generateMetadata()` with SEO templates
- [x] Added quick category links (tabs)
- [x] Enhanced display names (shows "Dyuym → Santimetr" instead of URLs)
- [x] Moved typo/variants to SEO-only (hidden from users)

**Files Created:**
- `app/[category]/page.tsx` — Category pages
- `app/[category]/[pair]/page.tsx` — Converter pages

**Files Modified:**
- `app/page.tsx` — Complete homepage implementation
- `tsconfig.json` — Updated path mapping for `@/config/routes`

**Homepage Enhancements:**
1. ✅ Removed "(Uzbek)" from H1
2. ✅ Removed "Onlayn, bepul, tez." subtitle
3. ✅ Added quick category links (clickable tabs to popular converters)
4. ✅ "Mashhur konvertatsiyalar" shows names (e.g., "Dyuym → Santimetr")
5. ✅ "Barcha konvertorlar" shows names instead of URLs
6. ✅ Typo/variants section moved to `sr-only` (SEO-only, hidden from users)

**Key Features:**
- Static generation for all 26 pages (1 homepage + 5 categories + 17 converters + 3 system)
- SEO-optimized metadata per page
- Quick access category tabs
- Proper unit label display
- Dark mode support throughout
- Mobile-first responsive design

**Build Verification:**
- ✅ All 26 pages generated successfully
- ✅ TypeScript compilation passes
- ✅ ESLint passes
- ✅ Static generation working correctly

**Estimated Time:** 1.5-2 hours  
**Actual Time:** ~2 hours (including enhancements)

---

### Phase 4: Converter UI (Step C)
**Branch:** `feature/4-converter-ui`  
**Status:** ⏳ Pending

**Objectives:**
- Create interactive converter component
- Implement real-time conversion as user types
- Add swap functionality
- Support Uzbek comma decimal separator
- Add copy result functionality

**Tasks:**
- [ ] Create `src/components/ConverterClient.tsx`
  - [ ] Client component setup ("use client")
  - [ ] State management (input value)
  - [ ] Number parsing (comma/dot support)
  - [ ] Live conversion calculation
  - [ ] Result display with smart rounding
  - [ ] Swap button functionality
  - [ ] Copy result button
  - [ ] Input validation
  - [ ] Error handling (empty/invalid input)
  - [ ] Loading states
- [ ] Integrate into converter pages
  - [ ] Replace placeholder UI
  - [ ] Connect to conversion logic
  - [ ] Handle temperature conversions

**Files to Create:**
- `src/components/ConverterClient.tsx`

**Files to Modify:**
- `app/[category]/[pair]/page.tsx` — Integrate ConverterClient

**Key Requirements:**
- Real-time conversion as user types
- Support Uzbek comma decimal separator (1,5 = 1.5)
- Smart rounding display
- Temperature special handling
- Accessible form controls
- Mobile-friendly input fields

**Estimated Time:** 1.5-2 hours

**Commit Strategy:**
1. Basic component structure and props
2. Input state and parsing (comma/dot support)
3. Conversion calculation logic integration
4. UI layout and styling
5. Swap functionality
6. Copy result functionality
7. Error handling and edge cases

---

### Phase 5: Homepage Features (Step D)
**Branch:** `feature/5-homepage-search`  
**Status:** ⏳ Pending

**Objectives:**
- Implement global search functionality
- Support typo/variant matching
- Create fast client-side search
- Integrate search into homepage

**Tasks:**
- [ ] Create `src/lib/search.ts`
  - [ ] `normalize()` function for search queries
  - [ ] `unitVariants()` helper
  - [ ] `searchConverters()` function
  - [ ] Search scoring algorithm
  - [ ] Typo/variant matching logic
- [ ] Create `src/components/HomeSearch.tsx`
  - [ ] Client component setup
  - [ ] Search input with debouncing
  - [ ] Real-time results display
  - [ ] Keyboard shortcuts (ESC to clear)
  - [ ] Results linking
  - [ ] Empty state handling
- [ ] Update homepage
  - [ ] Replace search placeholder with HomeSearch
  - [ ] Ensure search works with all converters

**Files to Create:**
- `src/lib/search.ts` — Search logic and scoring
- `src/components/HomeSearch.tsx` — Search UI component

**Files to Modify:**
- `app/page.tsx` — Integrate HomeSearch component

**Key Requirements:**
- Search by unit name, slug, variant, keyword
- Fuzzy matching for typos (metir → metr, dyum → dyuym)
- Fast client-side search (no API calls)
- Results sorted by relevance score
- Minimum 2 characters to search
- Keyboard navigation support

**Search Features:**
- URL slug matching
- Unit label matching
- Variant matching (typos)
- Keyword matching
- Category matching
- Relevance scoring

**Estimated Time:** 2-2.5 hours

**Commit Strategy:**
1. Search normalization utilities
2. Search scoring algorithm
3. Search function implementation
4. HomeSearch component structure
5. Search UI and results display
6. Keyboard shortcuts and UX polish
7. Homepage integration and testing

---

### Phase 6: SEO Infrastructure (Steps E, F, G, H)
**Status:** ⏳ Pending

This phase is split into 4 sub-phases for better organization:

#### 6.1 Sitemap & Robots (Step E)
**Branch:** `feature/6-seo-sitemap-robots`

**Tasks:**
- [ ] Create `app/sitemap.xml/route.ts`
  - [ ] Dynamic sitemap generation from routes.ts
  - [ ] Homepage entry (priority 1.0)
  - [ ] Category pages entries (priority 0.7)
  - [ ] Converter pages entries (priority 0.8)
  - [ ] Lastmod timestamps
  - [ ] XML formatting
- [ ] Create `app/robots.txt/route.ts`
  - [ ] Allow all user agents
  - [ ] Sitemap reference
  - [ ] Edge runtime support
- [ ] Test sitemap.xml generation
- [ ] Test robots.txt generation
- [ ] Verify with Google Search Console

**Files to Create:**
- `app/sitemap.xml/route.ts`
- `app/robots.txt/route.ts`

**Estimated Time:** 30-45 minutes

---

#### 6.2 JSON-LD Structured Data (Step F)
**Branch:** `feature/7-seo-jsonld`

**Tasks:**
- [ ] Create `src/lib/jsonld.ts`
  - [ ] `buildWebApplicationJsonLd()` function
  - [ ] `buildFaqPageJsonLd()` function
  - [ ] Type definitions
  - [ ] Schema.org compliance
- [ ] Update converter pages
  - [ ] Add WebApplication JSON-LD
  - [ ] Add FAQPage JSON-LD (placeholder for now)
- [ ] Test structured data validation
  - [ ] Google Rich Results Test
  - [ ] Schema.org validator

**Files to Create:**
- `src/lib/jsonld.ts`

**Files to Modify:**
- `app/[category]/[pair]/page.tsx`

**Estimated Time:** 45-60 minutes

---

#### 6.3 SEO Content Generation (Step G)
**Branch:** `feature/8-seo-content`

**Tasks:**
- [ ] Create `src/lib/seoContent.ts`
  - [ ] `SeoContent` type definition
  - [ ] `buildSeoContent()` function
  - [ ] Formula generation (with actual conversion factors)
  - [ ] Examples generation (1, 5, 10, 100 values)
  - [ ] FAQ generation (3 questions per converter)
  - [ ] Variants line generation
- [ ] Create `src/components/SeoContentBlock.tsx`
  - [ ] Formula section display
  - [ ] Examples table
  - [ ] FAQ accordion/cards
  - [ ] Variants paragraph
- [ ] Update converter pages
  - [ ] Integrate SeoContentBlock
  - [ ] Use generated content
  - [ ] Replace placeholder sections

**Files to Create:**
- `src/lib/seoContent.ts`
- `src/components/SeoContentBlock.tsx`

**Files to Modify:**
- `app/[category]/[pair]/page.tsx`

**Estimated Time:** 1.5-2 hours

---

#### 6.4 JSON-LD ↔ SEO Content Sync (Step H)
**Branch:** `feature/8-seo-content` (continuation)

**Tasks:**
- [ ] Refactor converter pages
  - [ ] Use `buildSeoContent()` as single source of truth
  - [ ] Generate FAQ JSON-LD from SEO content
  - [ ] Ensure UI FAQ = JSON-LD FAQ (no mismatches)
- [ ] Test synchronization
- [ ] Validate no mismatches
- [ ] Update JSON-LD generation to use SEO content

**Files to Modify:**
- `app/[category]/[pair]/page.tsx`
- `src/lib/jsonld.ts`

**Key Requirement:**
- `buildSeoContent()` must be the single source of truth
- FAQ in UI must match FAQ in JSON-LD exactly
- No manual FAQ entries (all generated)

**Estimated Time:** 30-45 minutes

---

### Phase 7: Internal Linking (Step I)
**Branch:** `feature/9-internal-linking`  
**Status:** ⏳ Pending

**Objectives:**
- Implement breadcrumb navigation
- Add related conversions logic
- Create internal linking structure
- Improve crawl depth and topical authority

**Tasks:**
- [ ] Create `src/components/Breadcrumbs.tsx`
  - [ ] Breadcrumb navigation component
  - [ ] Accessibility (aria-label, semantic HTML)
  - [ ] Home → Category → Converter structure
  - [ ] Styling with Tailwind
- [ ] Create `src/lib/related.ts`
  - [ ] `getRelatedPairs()` function
  - [ ] Reverse pair logic (most important)
  - [ ] Same category pairs logic
  - [ ] Limit to 3-6 related conversions
- [ ] Create `src/components/RelatedConversions.tsx`
  - [ ] Related conversions list component
  - [ ] Link generation with proper labels
  - [ ] Styling and layout
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

**Key Requirements:**
- Breadcrumbs on all pages (except homepage)
- Related conversions show reverse + same category pairs
- All internal links use proper anchor text
- No orphan pages
- Logical link hierarchy

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
**Status:** ⏳ Pending

**Objectives:**
- Refine theme toggle
- Ensure mobile responsiveness
- Complete accessibility audit
- Optimize performance
- Cross-browser testing

**Tasks:**
- [ ] Theme toggle refinement
  - [ ] Smooth transitions
  - [ ] Icon updates (if needed)
  - [ ] Accessibility improvements
  - [ ] Keyboard navigation
- [ ] Mobile responsiveness
  - [ ] Test all pages on mobile devices
  - [ ] Fix any layout issues
  - [ ] Ensure touch target sizes (min 44x44px)
  - [ ] Test on various screen sizes
- [ ] Accessibility audit
  - [ ] Keyboard navigation (Tab, Enter, Escape)
  - [ ] Screen reader testing
  - [ ] ARIA labels verification
  - [ ] Color contrast (WCAG AA)
  - [ ] Focus indicators
- [ ] Performance optimization
  - [ ] Image optimization (if any images added)
  - [ ] Font loading optimization
  - [ ] Bundle size analysis
  - [ ] Lighthouse score target (>90)
- [ ] Cross-browser testing
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile browsers
- [ ] Final content review
  - [ ] All 17 converter pages reviewed
  - [ ] SEO metadata verified
  - [ ] Internal links verified
  - [ ] No broken links

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

| # | Feature | Branch | Status | Priority | Dependencies |
|---|---------|--------|--------|----------|--------------|
| 0 | Setup & Dependencies | `feature/0-setup-dependencies` | ✅ Complete | P0 | - |
| 1 | Routes Configuration | `feature/1-routes-config` | ✅ Complete | P0 | 0 |
| 2 | Conversion Logic | `feature/2-conversion-logic` | ✅ Complete | P0 | 1 |
| 3 | Page Structure | `feature/3-page-skeletons` | ✅ Complete | P0 | 1, 2 |
| 4 | Converter UI | `feature/4-converter-ui` | ⏳ Pending | P0 | 3 |
| 5 | Homepage Search | `feature/5-homepage-search` | ⏳ Pending | P1 | 1, 3 |
| 6 | Sitemap & Robots | `feature/6-seo-sitemap-robots` | ⏳ Pending | P1 | 1 |
| 7 | JSON-LD Structured Data | `feature/7-seo-jsonld` | ⏳ Pending | P1 | 3 |
| 8 | SEO Content | `feature/8-seo-content` | ⏳ Pending | P1 | 2, 7 |
| 9 | Internal Linking | `feature/9-internal-linking` | ⏳ Pending | P1 | 3 |
| 10 | Polish & Testing | `feature/10-polish` | ⏳ Pending | P2 | All |

**Priority Legend:**
- **P0:** Critical - Blocks other features or core functionality
- **P1:** High - Important for V1 launch and SEO
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

1. **Create branch** from `main` (or current base branch)
2. **Develop feature** with small, focused commits
3. **Test locally** before completing
4. **Review changes** (self-review or team review)
5. **Merge to main** after approval

### Branch Dependencies

```
main
├── feature/0-setup-dependencies ✅
├── feature/1-routes-config ✅ (depends on: 0)
├── feature/2-conversion-logic ✅ (depends on: 1)
├── feature/3-page-skeletons ✅ (depends on: 1, 2)
├── feature/4-converter-ui ⏳ (depends on: 3)
├── feature/5-homepage-search ⏳ (depends on: 1, 3)
├── feature/6-seo-sitemap-robots ⏳ (depends on: 1)
├── feature/7-seo-jsonld ⏳ (depends on: 3)
├── feature/8-seo-content ⏳ (depends on: 2, 7)
├── feature/9-internal-linking ⏳ (depends on: 3)
└── feature/10-polish ⏳ (depends on: all)
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
- `style`: Formatting, styling (no logic changes)
- `refactor`: Code restructuring (no feature changes)
- `test`: Tests
- `chore`: Maintenance tasks (deps, config, etc.)

**Scopes:**
- `config`: Configuration files
- `converter`: Converter-related features
- `homepage`: Homepage features
- `seo`: SEO-related features
- `theme`: Theme-related changes
- `ui`: UI components
- `lib`: Library/utility functions

**Examples:**
```
feat(config): add routes.ts with all categories and units
feat(converter): implement live conversion calculation
fix(theme): persist theme preference in localStorage
docs(plan): update v1_plan.md with phase 3 enhancements
style(homepage): format homepage code with Prettier
refactor(converter): extract conversion logic to separate function
```

### Commit Size Guidelines

- ✅ **Small commits:** 1-3 files, focused change
- ✅ **Logical grouping:** Related changes together
- ✅ **Working state:** Each commit should leave code in working state
- ❌ **Avoid:** Large commits with unrelated changes
- ❌ **Avoid:** "WIP" or "fix everything" commits
- ❌ **Avoid:** Commits that break the build

### Commit Frequency

- Commit after completing a logical unit of work
- Commit before moving to a different file/feature
- Commit when a feature is working (even if incomplete)
- Commit before major refactoring

---

## Testing Checklist

### Phase 0: Setup ✅
- [x] Tailwind CSS compiles without errors
- [x] Theme toggle switches between dark/light
- [x] Theme preference persists on page reload
- [x] Build process completes successfully
- [x] Dev server runs without errors
- [x] GitHub Actions CI passes
- [x] Prettier formatting works

### Phase 1-2: Core Logic ✅
- [x] All units defined correctly
- [x] All conversion pairs configured
- [x] Conversion calculations accurate
- [x] Rounding works correctly
- [x] Temperature conversions correct
- [x] TypeScript types correct

### Phase 3: Pages ✅
- [x] Homepage renders correctly
- [x] All category pages accessible
- [x] All converter pages accessible
- [x] Static generation works
- [x] SEO metadata correct
- [x] Quick category links work
- [x] Display names show correctly

### Phase 4: Converter UI ⏳
- [ ] Converter UI calculates correctly
- [ ] Swap functionality works
- [ ] Copy result works
- [ ] Comma decimal separator works
- [ ] Temperature conversions work
- [ ] Input validation works
- [ ] Error handling works

### Phase 5: Search ⏳
- [ ] Search finds correct converters
- [ ] Typo variants work (metir, dyum, etc.)
- [ ] Results sorted by relevance
- [ ] Keyboard shortcuts work (ESC)
- [ ] Empty state displays correctly
- [ ] Minimum character requirement works

### Phase 6: SEO ⏳
- [ ] Sitemap.xml generates correctly
- [ ] Robots.txt accessible
- [ ] JSON-LD validates (Google Rich Results Test)
- [ ] SEO content displays correctly
- [ ] FAQ syncs with JSON-LD
- [ ] No schema validation errors

### Phase 7: Linking ⏳
- [ ] Breadcrumbs display correctly
- [ ] Related conversions show relevant links
- [ ] All internal links work
- [ ] No broken links
- [ ] Proper anchor text used

### Phase 8: Final ⏳
- [ ] Mobile responsive (all pages)
- [ ] Dark/light theme works everywhere
- [ ] Accessibility (keyboard nav, screen reader)
- [ ] Performance (Lighthouse score >90)
- [ ] Cross-browser compatibility
- [ ] All 17 converter pages reviewed

---

## Dependencies & Infrastructure

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
    "eslint-config-prettier": "^9.1.0",
    "prettier": "^3.2.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### No Additional Dependencies Needed

All functionality implemented using:
- Next.js built-in features (App Router, SSG, Metadata API)
- React hooks (useState, useEffect, useMemo)
- Tailwind CSS utilities
- Native browser APIs (localStorage, etc.)

### Infrastructure

- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`)
- **Code Quality:** ESLint + Prettier
- **Type Safety:** TypeScript strict mode
- **Hosting:** Cloudflare Pages (static-first)

---

## Architecture Decisions

### Key Decisions (Locked)

- ✅ **URL Structure:** `/{category}/{from}-{to}` (hyphen-separated, lowercase)
- ✅ **17 Converter Pages:** V1 scope locked (per IA document)
- ✅ **Frontend-Only:** No backend, all calculations client-side
- ✅ **Tailwind CSS v4:** Using latest version with custom variant support
- ✅ **Next.js App Router:** Using App Router (not Pages Router)
- ✅ **Static Generation:** All pages pre-rendered at build time
- ✅ **Config-Driven:** Single source of truth (`src/config/routes.ts`)

### Design Principles

1. **SEO-First:** Every page optimized for search engines
2. **Mobile-First:** Responsive design from the start
3. **Accessibility:** WCAG 2.1 AA compliance target
4. **Performance:** Static generation, minimal JavaScript
5. **Maintainability:** Clean code, type safety, documentation
6. **Scalability:** Easy to add new converters/categories

### Future Considerations (Post-V1)

- Additional converter categories (tezlik, quvvat, etc.)
- PWA support for offline usage
- Analytics integration (privacy-friendly)
- AdSense monetization
- Multi-language support (if needed)
- User preferences (favorite converters)

---

## Progress Tracking

### Completed ✅

- **Phase 0:** Setup & Dependencies
  - Tailwind CSS v4 configured
  - Theme toggle implemented
  - GitHub Actions CI/CD set up
  - Prettier + ESLint integrated

- **Phase 1:** Routes Configuration
  - Complete routes.ts with all units and categories
  - Helper functions implemented
  - Type-safe configuration

- **Phase 2:** Conversion Logic
  - Conversion functions implemented
  - Smart rounding utility
  - Conversion factors defined

- **Phase 3:** Page Structure
  - Homepage with all sections
  - Category pages with static generation
  - Converter pages with SEO metadata
  - Enhanced with quick links and proper names

### In Progress 🚧

- None currently

### Pending ⏳

- **Phase 4:** Converter UI
- **Phase 5:** Homepage Search
- **Phase 6:** SEO Infrastructure (4 sub-phases)
- **Phase 7:** Internal Linking
- **Phase 8:** Polish & Testing

---

## Notes

### Development Workflow

1. **Review Phase Requirements:** Read phase details in this document
2. **Check Dependencies:** Ensure prerequisite phases are complete
3. **Create Branch:** Use naming convention
4. **Implement Feature:** Follow commit strategy
5. **Test Locally:** Run lint, typecheck, build
6. **Review & Commit:** Self-review before committing
7. **Update Status:** Mark tasks complete in this document

### Quality Standards

- **TypeScript:** Strict mode, no `any` types
- **ESLint:** Zero errors, warnings acceptable if justified
- **Prettier:** All code formatted automatically
- **Build:** Must pass without errors
- **Accessibility:** WCAG 2.1 AA target
- **Performance:** Lighthouse score >90 target

---

**Last Updated:** 2025-01-27  
**Next Review:** After Phase 4 completion
