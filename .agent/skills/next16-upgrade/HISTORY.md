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

## 4. Current Status
- **Phase**: **Frontend (Phase 1) Implementation - Page by Page**.
- [x] Migrated **Course** (과정안내) page.
- [x] Migrated **Review** (수강효과) page with dynamic GraphQL data.
- [x] Migrated **Requirement** (수강요건) page.

## 4. Current Status
- **Phase**: **Frontend (Phase 1) Implementation - Page by Page**.
- [x] Migrated **Board Write/View** functionality completely.
- [x] Migrated **Enrollment** (수강신청) page.
- [ ] Migrated **Payment** page (Refactored to Hook Form v7 + Zod, PortOne Removed).
- **Next Task**: **Payment** completion page.
