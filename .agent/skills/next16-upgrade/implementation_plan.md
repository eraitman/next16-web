# Full-Stack Upgrade Plan: Next.js 16 & Modern Node.js Server

This plan outlines the coordinated migration of a legacy full-stack application to a modern architecture.

## 1. Project Topology
- **Legacy Frontend**: [next-web](file:///Users/garymini/Documents/dev/next-web)
- **New Frontend**: [next16-web](file:///Users/garymini/Documents/dev/next16-web)
- **Legacy Server**: [ce-server](file:///Users/garymini/Documents/dev/ce-server)
- **New Server**: [homepage-server](file:///Users/garymini/Documents/dev/homepage-server)

## User Review Required

> [!IMPORTANT]
> **Project Paths**: The projects are successfully initialized at `next16-web` and `homepage-server`.
> **Server Migration**: We will migrate the Prisma schema from `ce-server` to `homepage-server`, upgrading to Prisma 5 and native ESM.
> **Sequential Approach**: We will prioritize the Frontend logic and KG Inicis migration first (Phase 1), followed by the Server refactor (Phase 2).

## Proposed Changes

### 1. New Frontend (next16-web)
- **Framework**: Next.js 16 (App Router) with React Compiler.
- **Features**: Internal A/B testing (URL-persistent), mobile-first design, SEO-optimized metadata.

### 2. New Server (homepage-server) [Phase 2]
- **Environment**: Node.js 22 LTS (ESM).
- **GraphQL**: Apollo Server 4 (Replacing v2).
- **ORM**: Prisma 5 (Upgrading from v2).
- **Core Activities**:
  - `schema.prisma` migration & introspection.
  - Resolver refactoring for modern TypeScript/ESM patterns.
  - Integration with existing DB while upgrading the client.

### 2. Internal A/B Testing (URL-Persistent)
- **Middleware**: Detects segments and sets `x-ab-variant` header.
- **RSC Strategy**: Server Components read the header and import different layouts/components dynamically.
- **In-house Analytics**: Create a `useTracker` hook and a server-side `trackEvent` function to log impressions and conversions to our DB via GraphQL.

### 3. Payment System Migration (KG Inicis)
- **Logic Analysis**: Deep dive into `pages/payment` and related components to extract encryption, callback, and verification logic.
- **Standardization**: Wrap the payment logic in a robust Service class/hook for reuse and easier testing.
- **Error Handling**: Strictly implement all edge cases for payment failures and cancellations.

### 3. SEO & AI Optimization
- **Metadata API**: Use `generateMetadata` for dynamic SEO tags.
- **Semantic Structure**: Strictly follow HTML5 semantic tags to help AI scrapers and search engines understand content hierarchy.
- **JSON-LD**: Inject structured data for courses and educational content.
- **Sitemap/Robots**: Automated generation via `next-sitemap`.

### 4. Multidisciplinary Proposals

#### Aesthetic Enhancements
- **Authority-driven Typography**: Use *Pretendard* or *Inter* with bold weights to convey the "Firmness" (단호함) of the brand.
- **Swiss Minimalism**: Favor clarity over decoration. Use solid grids and precise alignment to reflect "Honesty and Precision".
- **Functional Motion**: Use Framer Motion for revealing content in a way that feels like "unfolding a story" rather than a sales pitch.

#### Marketing Psychology (Authentic Evidence)
- **Radical Transparency**: Components that showcase actual student progress logs and data-driven results instead of just testimonials.
- **Authority over Persuasion**: Position the content as an "Expert Guide" rather than a "Service Salesman".
- **Goal-Oriented CTAs**: Use "Commit to Your Growth" or "View the Curriculum" to emphasize the hard work and honesty required.
- **A/B Testing for Clarity**: Test how different ways of presenting complex "Course Flows" affect user comprehension, not just "conversion".

## 5. Page-Specific Development Strategy

### [Home] (index.tsx)
- **Goal**: Establish authority and the "Firm/Honest" brand identity.
- **Mobile Focus**: Instant-load hero images (webp), prioritized above-the-fold content for 80% mobile users.
- **A/B Test Internal Logic**: 
  - Variant A: "Core Philosophy First" (Focus on 'Why' it's hard/honest).
  - Variant B: "Result Evidence First" (Focus on 'What' students achieved).

### [Course] (course/page.tsx)
- **Goal**: Detail the curriculum without "sugar-coating".
- **Key Component**: `Body__01__r2.js` (EBD method explanation) migration to TSX.
- **Mobile Focus**: Vertical timeline for curriculum steps. Collapsible sections for dense curriculum details to avoid scroll-fatigue.
- **A/B Test Internal Logic**: 
  - Variant A: Vertical scrolling narrative.
  - Variant B: Tabbed navigation for sections (Overview / Principles / Flow).

### [Review] (review/list/page.tsx)
- **Goal**: Provide transparent, unfiltered student testimonials.
- **Strategy**: Migrate board-style list to a modern, searchable, and filterable grid.
- **SEO**: Dynamic JSON-LD for "Review" schema.

### [Enrollment/Payment] (payment/page.tsx)
- **CRITICAL**: Accurate migration of KG Inicis flows.
- **Mobile Focus**: Optimized form inputs (proper input types for numbers/email to trigger correct mobile keyboards). Large, accessible "Register" button.
- **Transparency**: Clear, honest breakdown of costs and requirements before the payment wall.

## Verification Plan

### Automated Tests
- `yarn build`: Ensure the project builds successfully on Next.js 16.
- `next-sitemap` check: Verify sitemap generation.
- Lighthouse/PageSpeed: Baseline check for SEO and performance.

### Manual Verification
- **A/B Test Verification**: Manually set variant cookies and verify that different page layouts are rendered correctly.
- **GraphQL Connectivity**: Verify that the Apollo Client successfully fetches data from the existing Prisma/GraphQL server.
- **Social Metadata**: Verify OpenGraph tags using social debugger tools.
