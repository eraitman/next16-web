# Design Rules (RULES.md)

> [!CAUTION]
> **CRITICAL: READ-ONLY LEGACY POLICY**
> The original projects `next-web` and `ce-server` must **NEVER** be modified. They are preserved strictly for reference and comparison. All new work, bug fixes, and feature implementations must occur only within `next16-web` and `homepage-server`.

## 1. Visual Language & Aesthetics (Mobile-First 80%+)
- **Philosophy**: **Authentic & Authoritative**. Avoid flashy commercialism. The focus is on "Firmness, Honesty, and Transparent Results" (단호, 정직, 솔직한 성과).
- **Design Style**: Modern Minimalist / Swiss Style. Clean lines, generous white space, and a focus on content hierarchy.
- **Priority**: **MOBILE FIRST**. Design for small screens first, then scale up.
- **Color Palette**: 
  - Primary: `#FFCD00` (Pantone Yellow - Clarity/Focus)
  - Secondary: `#00589B` (Pantone Blue - Authority/Stability)
  - Neutral: `#1D1D1B` (Bold Black for text), `#F5F5F5` (Clean backgrounds)
- **Typography**: 
  - Headers: Bold, resolute sans-serif (e.g., *Inter* or *Pretendard*). High weight for "Firmness".
  - Body: Clear, legible sans-serif. Focus on readability.
- **Micro-animations**: Subtle, functional transitions that guide the user's attention. No "bouncing" or flashy effects.

## 2. Layout & Components
- **Data Transparency**: Design components to showcase "Unfiltered Results" (e.g., actual student logs, progress charts).
- **Honest Hierarchy**: Key information (curriculum, schedule) should be presented directly without sales-heavy copy.
- **Consistency**: Follow the "Section > Title + Content" hierarchy but with a more "editorial" or "report" feel than a sales page.

## 3. Internal A/B Testing Architecture (URL-Persistent)
- **Mechanism**: The same URL MUST serve different variants without redirection or query params.
- **Logic**: 
  - Middleware detects `ab-variant` cookie.
  - If missing, assigns a variant weight-balanced.
  - Next.js 16 Parallel Routes or RSC Component selection based on cookie.
- **Tracking**: Built-in event logging to the existing GraphQL backend (GA4-like core functionality).

## 4. SEO & AI Readiness
- **Semantic HTML**: Mandatory use of `header`, `main`, `section`, `footer`, `article`.
- **Accessibility**: ARIA labels for all interactive elements.

## 5. Server-Side Principles (homepage-server)
- **Transparent Logic**: Prefer clear, explicit business logic over "magic" abstractions.
- **Robust Error Handling**: API errors must be honest and descriptive (e.g., distinguishing between "Validation failed" and "Internal error") while hiding structural secrets.
- **Performance by Default**: Opt for efficient Prisma queries and minimal resolver overhead.
