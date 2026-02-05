---
name: next16-upgrade
description: Guidelines and technical standards for upgrading to Next.js 16 and Node.js 22.
---

# Next.js 16 Upgrade Skill

> [!IMPORTANT]
> **LEGACY IS READ-ONLY**: Do not modify any code in the original `next-web` or `ce-server` directories. Use them only for architecture analysis and content extraction.

## 1. Core Framework & Language
- **Frontend**: Next.js 16 (App Router) + TypeScript.
- **Server**: Node.js 22 (LTS) with Native ESM support.
- **Package Manager**: `yarn`.

## 2. Server Stack (homepage-server)
- **GraphQL**: Apollo Server 4.
- **ORM**: Prisma 5.
- **Structure**: Clean architecture with separate Resolvers, Services, and Schema definitions.
- **Execution**: `ts-node-esm` or `tsx` for development.

## 2. Styling & UI
- **Tailwind CSS**: Primary styling engine.
- **[Aesthetics]**: Selected *Pretendard/Inter* as the primary typeface for an authoritative feel.
- **[Constraint]**: **LEGACY READ-ONLY POLICY**. Established a strict rule to never modify `next-web` or `ce-server`.
- **Lucide React**: Primary icon set.
- **File Structure**: Separate styling logic from component structure where complexity is high.

## 3. Data & State Management
- **GraphQL (Apollo Client)**: Interface with the existing backend.
- **Prisma**: Used in the backend service (not direct client-side). The frontend should expect types generated from the GraphQL schema.
- **MVC Pattern**: Next.js App Router acts as the "View/Controller" layer, while the separate Prisma/GraphQL server acts as the "Model/Service" layer. Keep them decoupled.

## 4. Performance & Optimization
- **Server Components (RSC)**: Default to Server Components for data fetching.
- **Image Optimization**: Always use `next/image` with proper `priority`, `sizes`, and `alt` tags.
- **Bundle Analysis**: Keep the main bundle size minimal.

## 6. Internal Analytics & A/B Support
- **A/B Controller**: A server-side utility to read `x-ab-variant` headers and consistently resolve the correct component variant.
- **Event Tracker**:
  - `trackImpression(variantId, pageId)`: Logged when a variant is served.
  - `trackConversion(variantId, eventType)`: Logged on key actions (e.g., "Registration Button Click", "Payment Success").
- **Storage**: Persistence via the existing GraphQL API to a dedicated `ab_logs` table in the Prisma schema.
- **Privacy**: No PII in A/B logs. Only session IDs/variant IDs.

## 7. Migration Principles
- **Accuracy First**: For legacy logic (Payment/Form validation), use strict TDD (Test Driven Development) to ensure zero regressions.
- **Mobile-First CSS**: Use Tailwind's `max-*` or `sm:*` modifiers consistently to ensure 80%+ mobile users have a perfect experience.
