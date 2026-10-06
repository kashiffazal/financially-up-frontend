# Implementation Plan: Master Services Landing Page (`/services`)

## Executive Summary
Now that all 15 individual service pillar pages have been created across `/services/*`, we need to build the central **`/services` master hub page**. This page will act as the primary directory, SEO aggregator, and user navigation center connecting all 15 services into a cohesive, modern, and interactive digital experience.

---

## 1. Technical & Architectural Strategy

### File Location
- **Main Route Page**: `app/(web)/services/page.jsx` (Next.js Server Component for optimal SEO and metadata)
- **Subcomponents**: `app/(web)/services/components/`
  1. `ServicesHero.jsx`: Master Hero section with breadcrumbs, dynamic company details (`useCompany()`), credential badges, search bar, and category quick-jump anchors.
  2. `ServicesDirectory.jsx`: Client Component offering interactive category tabs, real-time live search filter, result counter, and 15 rich service cards with micro-animations.
  3. `ClientPathwayMatrix.jsx`: "Find Your Solution" interactive matrix directing 6 key client personas (Wage Earners, Sole Traders, Companies, Property Investors, Trusts & SMSFs, Scaleups) to their tailored service combinations.
  4. `ServicesProcessSteps.jsx`: 4-step streamlined engagement pathway (Connect -> Secure Portal -> Expert Analysis -> ATO/ASIC Lodgement).
  5. `WhyFinanciallyUpSection.jsx`: 6 core value pillars emphasizing Australian CPA credentials, fixed transparent pricing, and bank-grade digital workflow.
  6. `ServicesFaq.jsx`: Master FAQ section covering multi-service bundling, remote vs in-person consultations, records preparation, and turnaround times.
  7. `ServicesData.js`: Centralized, maintainable dataset mapping all 15 services, their pillar identifiers, descriptions, scope bullets, icons, categories, and direct URLs.

---

## 2. All 15 Services Data Model Mapping

The directory will showcase all 15 pillars with rich metadata:

| # | Slug | Service Title | Category | Key Scope / Focus |
|---|---|---|---|---|
| **01** | `/services/individual-tax` | Individual Tax Accounting | Personal & Property Tax | Salary & wages, investments, crypto, CGT, overdue returns |
| **02** | `/services/business-tax` | Business Tax Accounting | Business & Corporate Tax | Company, trust, sole trader & partnership returns, Div 7A, financial statements |
| **03** | `/services/tax-planning` | Tax Planning & Advisory | Strategic Advisory & Planning | Pre-30 June reviews, distribution strategy, asset timing, restructuring |
| **04** | `/services/bookkeeping` | Bookkeeping Services | Business Operations | Bank reconciliation, payroll, invoicing, Xero/MYOB setup, monthly reports |
| **05** | `/services/bas-payroll` | BAS, GST & Payroll Services | Business & Corporate Tax | Business Activity Statements (BAS), IAS, STP 2.0 payroll, super compliance |
| **06** | `/services/business-structures` | Business Structures & Setup | Structures, Trusts & Wealth | Company registration, discretionary trusts, unit trusts, asset protection |
| **07** | `/services/asic` | ASIC Compliance & Secretarial | Business Operations | Annual reviews, solvency resolutions, share transfers, director changes |
| **08** | `/services/trusts` | Trust Accounting & Tax | Structures, Trusts & Wealth | Discretionary & unit trusts, Section 100A, distribution minutes, trust returns |
| **09** | `/services/smsf` | SMSF Accounting & Audit | Structures, Trusts & Wealth | Fund accounts, annual tax returns, independent audit coordination, pensions |
| **10** | `/services/property-tax` | Property Tax Accounting | Personal & Property Tax | Negative gearing, rental deductions, CGT discount, 6-year rule, developments |
| **11** | `/services/ato-help` | ATO Help, Debt & Audit Support | Resolution & Support | Payment plans, penalty remissions, audit defense, overdue lodgements |
| **12** | `/services/business-advisory` | Business Advisory & Growth | Strategic Advisory & Planning | KPI dashboards, budgeting & forecasting, financial modeling, profit strategy |
| **13** | `/services/virtual-cfo` | Virtual CFO Services | Strategic Advisory & Planning | Fractional CFO leadership, cash flow modeling, board reporting, scaling |
| **14** | `/services/international-tax` | International Tax Accounting | Personal & Property Tax | Foreign income, expat returns, residency rules, foreign tax offsets (FITO) |
| **15** | `/services/rd-tax-incentive` | R&D Tax Incentive Consulting | Business & Corporate Tax | AusIndustry registration, eligible R&D claims, refundable tax offsets |

---

## 3. Key Interactive Features & UI/UX

1. **Instant Search & Category Filtering**:
   - Filter by: `All (15)`, `Personal & Property Tax`, `Business & Corporate Tax`, `Structures, Trusts & SMSF`, `Bookkeeping & Operations`, `Advisory & Virtual CFO`, `Resolution & Compliance`.
   - Real-time text search filtering title, keywords, and practice scope tags.
   - Interactive badge count showing matching services.

2. **Visual Aesthetics (Tailwind CSS + Glassmorphism)**:
   - Deep emerald hero backdrop with radial lighting effects matching brand identity.
   - Responsive grid cards with smooth lift animations (`-translate-y-2`), colored category pills, glowing hover borders, and icon containers.
   - Clean dark mode support with contrast-tested text (`dark:bg-zinc-900`, `dark:text-zinc-100`).

3. **Client Persona Pathway Navigator**:
   - 6 Persona cards (Wage Earners, Sole Traders, Companies, Property Investors, Trustees, Scaleups) that allow one-click recommendation of services.

4. **SEO & Structured Data**:
   - Complete Metadata export with canonical `https://financiallyup.com.au/services/`.
   - Schema.org JSON-LD `ItemList` defining all 15 services for Google Search rich snippets.

5. **Compliance with Repository Rules**:
   - Dynamic company data via `useCompany()` from `@/context/SettingsContext` (no hardcoded phone/email/address).
   - Reusable components (`CallToActionBanner`, `FaqSection`).
   - Clean, well-commented code following established component patterns.

---

## 4. Verification & Testing Plan

1. **Build & Syntax Verification**:
   - Run Next.js lint / compilation check to ensure zero syntax or import errors.
2. **Navigation & Link Validation**:
   - Test that each of the 15 service cards properly routes to its respective `/services/{slug}` page.
   - Validate breadcrumbs link correctly (`Home -> Services`).
3. **Responsiveness & Theme Testing**:
   - Verify layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
   - Check seamless transition between Light and Dark mode.
4. **Interactive Filters**:
   - Validate category tabs and search input work smoothly without layout jumping.
