# Project Upgrade History (HISTORY.md)

## 1. Initial Phase: Research & Planning (2026-02-05)
- **Objective**: Upgrade `next-web` to Next.js 16 (Absolute Latest) while upgrading `ce-server` to a modern Node.js 22 server (`homepage-server`).
- **Key Requirements**:
  - Internal A/B testing (URL-persistent).
  - Accurate KG Inicis payment migration.
  - Mobile-first (80%+) design priority.
  - Authentic, firm, and honest brand identity.
  - React Compiler enablement.
  - Modern Backend (Apollo Server 4, Prisma 5, ESM).

## 2. Decision Log
- **[Design]**: Adopted "Swiss Minimalism / Authentic Evidence" style. Removed flashy effects in favor of bold typography and data transparency.
- **[Aesthetics]**: Selected *Pretendard/Inter* as the primary typeface for an authoritative feel.
- **[Constraint]**: **LEGACY READ-ONLY POLICY**. Established a strict rule that `next-web` and `ce-server` must remain unmodified at all times. All changes must be made in the new directories.
- **[Payment]**: Verified legacy flows. Planned for a consolidated `PaymentService`.
- **[Server]**: Decided to upgrade legacy backend to a modern ESM-native `homepage-server` instead of just maintaining `ce-server`.

## 3. Milestones Accomplished
- [x] Analyzed existing project structure (`next-web`, `ce-server`).
- [x] Established `RULES.md`, `SKILLS.md`, and `implementation_plan.md`.
- [x] Initialized `next16-web` (Frontend) and `homepage-server` (Backend).
- [x] Connected frontend and backend projects to GitHub repositories (`master` branch).
- [x] Migrated `schema.prisma` and resolved Prisma 7 ESM compatibility.
- [x] Implemented Automated Modular Schema system in `homepage-server`.
- [x] Ported core backend logic: `Board`, `Payment`, `Tracking`.
- [x] Implemented Global Layout (Header, Footer, Brand Theme) in `next16-web`.
- [x] Migrated Home Page (Section 1-4) with responsive assets and animations.

## 4. Current Status (Updated 2026-02-05)
- **Phase**: **Frontend & Backend Parallel Migration**

### Frontend (`next16-web`)
- [x] **Layout**: Global Header, Footer, Brand Theme implemented.
- [x] **Home**: Sections 1-4 migrated (Refining Section 2).
- [x] **Introduction (소개)**: Content fully migrated (Legacy text preserved 1:1).
- [x] **Course (과정안내)**: Migrated.
- [x] **Review (수강효과)**: Migrated with dynamic GraphQL data.
- [x] **Requirement (수강요건)**: Migrated.
- [x] **Board**: Write/View functionality migrated.
- [x] **Enrollment (수강신청)**: Migrated (Fixed default tab logic).
- [x] **Deployment**: Vercel configuration finalized (`package.json`, `next.config.ts`).
- [ ] **Payment**: Logic refactoring (Hook Form v7 + Zod) in progress.

### Backend (`homepage-server`)
- [x] **Infrastructure**: Upgraded to Node.js 22, ESM, TypeScript.
- [x] **Database**: Prisma 7 setup & Schema migrated from `ce-server`.
- [x] **Services**: `PaymentService` skeleton, Batch System (Ping Check refined).
- [ ] **API**: Full GraphOS Routing migration pending.

## 5. Next Steps
- Complete **Payment** page integration (Frontend).
- Finalize `PaymentService` logic (Backend).
- Verify Vercel deployment build.
