# Implementation Plan: Pillar 13 (Virtual CFO) Subpages

## 1. Overview & Objective

This plan outlines the end-to-end implementation for creating all **7 subpages** under Pillar 13: **Virtual CFO** (`/services/virtual-cfo/`), extracted verbatim from the client's master SEO document:
`financially-up-frontend\agent-data\new-content\13th Pillar Virtual CFO.docx`.

As instructed:

- **100% Verbatim Content**: All copy, headings, bullet lists, FAQs, and calls-to-action written by the SEO specialist are strictly preserved without rephrasing.
- **Reference Architecture**: Following the proven design and component pattern of `/services/individual-tax/individual-tax-return`.
- **Dynamic Company Hook**: Full integration with `useCompany()` from `@/context/SettingsContext` for dynamic phone numbers, email addresses, legal name, ABN, and contact references.
- **Hero & Navigation Rules**: Strict adherence to workspace rules for `<SubServiceHero />` with complete `breadcrumbs` and `parentService={{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }}`.
- **Modern UI & Visual Excellence**: Built with Tailwind CSS, Ant Design 5 icons/tags/buttons, subtle micro-animations, glassmorphism, responsive mobile-first layouts, and dark mode compatibility.

---

## 2. Subpage Routes & SEO Metadata Registry

| #     | Subpage Title                   | Route / Canonical URL                         | Primary Keyword                        | Components Folder                     |
| ----- | ------------------------------- | --------------------------------------------- | -------------------------------------- | ------------------------------------- |
| **1** | Outsourced CFO Services         | `/services/virtual-cfo/virtual-cfo-services`  | `outsourced cfo services`              | `./virtual-cfo-services/components/`  |
| **2** | Management Reporting Services   | `/services/virtual-cfo/management-reporting`  | `management reporting services`        | `./management-reporting/components/`  |
| **3** | Financial Modelling Services    | `/services/virtual-cfo/financial-modelling`   | `financial modelling services`         | `./financial-modelling/components/`   |
| **4** | Financial Scenario Planning     | `/services/virtual-cfo/scenario-planning`     | `financial scenario planning services` | `./scenario-planning/components/`     |
| **5** | Board Reporting Services        | `/services/virtual-cfo/board-reporting`       | `board reporting services`             | `./board-reporting/components/`       |
| **6** | Finance Dashboard Services      | `/services/virtual-cfo/dashboards`            | `finance dashboard services`           | `./dashboards/components/`            |
| **7** | Three Way Financial Forecasting | `/services/virtual-cfo/three-way-forecasting` | `three way financial forecasting`      | `./three-way-forecasting/components/` |

---

## 3. Architecture & Structural Pattern per Subpage

Every subpage will be structured in `app/(web)/services/virtual-cfo/[slug]/` with a primary `page.jsx` and modular components in a dedicated `./components/` subfolder:

```
financially-up-frontend/app/(web)/services/virtual-cfo/
├── page.jsx                               # Main Pillar 13 Hub (already created)
├── components/                            # Main Hub components
│
├── virtual-cfo-services/                  # Subpage 1
│   ├── page.jsx
│   └── components/
│       ├── WhatAreOutsourcedCfoServices.jsx
│       ├── WhenCfoOutsourcingMakesSense.jsx
│       ├── MonthlyFinanceCycleSteps.jsx
│       ├── ForecastingAndScenarioAnalysis.jsx
│       ├── OutsourcedCfoVsBookkeeping.jsx
│       ├── OutsourcedCfoScopeResponsibilities.jsx
│       ├── InformationToPrepareCfo.jsx
│       ├── WhyChooseFinanciallyUpCfoSub.jsx
│       └── RelatedServiceRibbonCfo.jsx
│
├── management-reporting/                  # Subpage 2
│   ├── page.jsx
│   └── components/
│       ├── WhatIsManagementReporting.jsx
│       ├── MonthlyReportingScopeList.jsx
│       ├── MonthlyVsYearEndReporting.jsx
│       ├── BudgetVsActualVarianceAnalysis.jsx
│       ├── CashFlowManagementReporting.jsx
│       ├── UsefulReportCharacteristics.jsx
│       ├── RecordsAndAccessNeededReporting.jsx
│       ├── WhyChooseFinanciallyUpReporting.jsx
│       └── RelatedServiceRibbonReporting.jsx
│
├── financial-modelling/                   # Subpage 3
│   ├── page.jsx
│   └── components/
│       ├── WhenBusinessNeedsFinancialModel.jsx
│       ├── WhatFinancialModellingIncludes.jsx
│       ├── ForecastInputsAndDrivers.jsx
│       ├── HowWeBuildAndUseModels.jsx
│       ├── InformationToPrepareModelling.jsx
│       ├── ScopeAndProfessionalBoundariesModelling.jsx
│       ├── WhyChooseFinanciallyUpModelling.jsx
│       └── RelatedServiceRibbonModelling.jsx
│
├── scenario-planning/                     # Subpage 4
│   ├── page.jsx
│   └── components/
│       ├── WhatIsScenarioPlanning.jsx
│       ├── WhenScenarioAnalysisHelps.jsx
│       ├── CommonScenariosTested.jsx
│       ├── DesigningMeaningfulScenarios.jsx
│       ├── HowWeBuildScenarioModels.jsx
│       ├── InformationNeededScenario.jsx
│       ├── WhyChooseFinanciallyUpScenario.jsx
│       └── RelatedServiceRibbonScenario.jsx
│
├── board-reporting/                       # Subpage 5
│   ├── page.jsx
│   └── components/
│       ├── WhatFinancialBoardPackIncludes.jsx
│       ├── WhyCommentaryMatters.jsx
│       ├── KeyBoardPackComponents.jsx
│       ├── PredictableBoardReportingSchedule.jsx
│       ├── BoardReportingVsStatutoryAccounts.jsx
│       ├── InformationNeededBoardReporting.jsx
│       ├── WhyChooseFinanciallyUpBoardReporting.jsx
│       └── RelatedServiceRibbonBoardReporting.jsx
│
├── dashboards/                            # Subpage 6
│   ├── page.jsx
│   └── components/
│       ├── WhenFinanceDashboardHelps.jsx
│       ├── WhatBelongsOnUsefulDashboard.jsx
│       ├── CoreDashboardMetricsGrid.jsx
│       ├── DashboardPitfallsAndIntegrity.jsx
│       ├── HowWeDesignAndMaintainDashboards.jsx
│       ├── InformationNeededDashboards.jsx
│       ├── WhyChooseFinanciallyUpDashboards.jsx
│       └── RelatedServiceRibbonDashboards.jsx
│
└── three-way-forecasting/                 # Subpage 7
    ├── page.jsx
    └── components/
        ├── ThreePartsOfThreeWayForecast.jsx
        ├── WhenIntegratedForecastingUseful.jsx
        ├── HowThreeWayForecastIsBuilt.jsx
        ├── WhatForecastHelpsYouDecide.jsx
        ├── BuildStepsTimeline.jsx
        ├── WhatToBringThreeWayForecasting.jsx
        ├── ProfessionalBoundariesThreeWay.jsx
        ├── WhyChooseFinanciallyUpThreeWay.jsx
        └── RelatedServiceRibbonThreeWay.jsx
```

---

## 4. Subpage Details & Content Specifications

### Subpage 1: `/services/virtual-cfo/virtual-cfo-services` (Outsourced CFO Services)

- **Metadata**:
  - `title`: `"Outsourced CFO Services Australia | Financially Up"`
  - `description`: `"Outsourced CFO services for growing businesses. Financially Up supports reporting, forecasting, cash flow, budgets and commercially focused finance decisions."`
  - `keywords`: `["outsourced cfo services", "virtual cfo services", "fractional cfo australia", "external cfo for small business", "cfo advisory services", "financial management retainer", "sme cfo support"]`
- **SubServiceHero**:
  - `title`: `"Outsourced CFO Services"`
  - `subtitle`: `"Senior Finance Leadership & Management Rhythm for Growing Businesses"`
  - `description`: Verbatim lead paragraphs (recurring management reporting, cash flow review, budgeting, financial analysis matched to complexity).
  - `breadcrumbs`: `Home > Services > Virtual CFO > Outsourced CFO Services`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.1 • Executive Finance Advisory"`
  - `metrics`: `10+ Years Experience`, `CPA & IPA Specialists`, `Australia-Wide Online & In-Person`, `Custom Retainer Scopes`
- **Core Sections**:
  1. _What are outsourced CFO services?_ (9-point scope checklist with rich icon cards).
  2. _When does CFO outsourcing make sense?_ (8 trigger scenario indicators).
  3. _A structured monthly finance cycle_ (7-step workflow from period close to action tracking).
  4. _Forecasting and scenario analysis_ (Testing decisions before committing + visible assumptions).
  5. _Outsourced CFO versus bookkeeping and year-end accounting_ (Side-by-side comparative grid).
  6. _Responsibilities, engagement scope & What Financially Up can help with_ (Governance boundaries and commercial support).
  7. _Information to prepare_ (6 items to get started).
  8. _Why Financially Up?_ (Dynamic `useCompany()` phone/email/credentials).
  9. _Verbatim FAQs_ (3 items with JSON-LD schema).
  10. _CTA Banner & Related Service Ribbon_.

---

### Subpage 2: `/services/virtual-cfo/management-reporting` (Management Reporting Services)

- **Metadata**:
  - `title`: `"Management Reporting Services | Financially Up"`
  - `description`: `"Management reporting services that turn accounting data into useful monthly insights, KPIs, variance analysis and clearer business performance information."`
  - `keywords`: `["management reporting services", "monthly management reports", "kpi reporting accountants", "variance analysis australia", "management accounts small business", "budget vs actual reporting"]`
- **SubServiceHero**:
  - `title`: `"Management Reporting Services"`
  - `subtitle`: `"Actionable Monthly Insights, Variance Analysis & Decision-Ready Metrics"`
  - `breadcrumbs`: `Home > Services > Virtual CFO > Management Reporting`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.2 • Performance Reporting"`
- **Core Sections**:
  1. _What is management reporting?_ (Government business guidance reference, tailoring by business type).
  2. _What can monthly management reporting include?_ (9 key elements with interactive visual cards).
  3. _Why monthly reporting can be more useful than year-end reporting alone_ (Shorter feedback loop vs stale annual accounts).
  4. _Budget versus actual and variance analysis_ (Root cause analysis: volume vs timing vs pricing).
  5. _Cash flow and management reporting_ (Accounting profit vs cash liquidity).
  6. _Management reporting versus statutory financial statements_ (Internal decision tool vs compliance).
  7. _What makes a useful management report & Disclosing estimates vs actuals_ (7 golden principles).
  8. _Records and access needed & Why Financially Up_ (`useCompany()` contact dynamic linking).
  9. _Verbatim FAQs_ (3 items with schema).
  10. _CTA Banner & Related Service Ribbon_.

---

### Subpage 3: `/services/virtual-cfo/financial-modelling` (Financial Modelling Services)

- **Metadata**:
  - `title`: `"Financial Modelling Services for Business | Financially Up"`
  - `description`: `"Build a financial model around your business decisions. Financially Up connects forecasts, cash flow and assumptions so you can plan with clearer numbers."`
  - `keywords`: `["financial modelling services", "business financial model", "three statement financial model", "cash flow forecasting model", "financial model consultant australia", "investment decision modelling"]`
- **SubServiceHero**:
  - `title`: `"Financial Modelling Services for Business Decisions"`
  - `subtitle`: `"Connect Forecasts, Working Capital & Assumptions Before Making Major Decisions"`
  - `breadcrumbs`: `Home > Services > Virtual CFO > Financial Modelling`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.3 • Strategic Financial Modelling"`
- **Core Sections**:
  1. _When does a business need a financial model?_ (Multi-part decisions: expansion, new site, large contract timing gaps).
  2. _What does financial modelling for business include?_ (3-statement linked structure vs concise cash model).
  3. _What goes into a useful forecast?_ (6 key drivers: seasonal demand, direct costs, payment timing, debt, capex).
  4. _How Financially Up builds and uses the model_ (Clarifying question, traceable inputs, lender/investor pack support).
  5. _What to bring to the first discussion_ (Financials, budget, pipeline, loan schedules).
  6. _Service scope, professional boundaries & Why Financially Up_ (`useCompany()` credentials).
  7. _Verbatim FAQs_ (4 items with schema).
  8. _CTA Banner & Related Service Ribbon_.

---

### Subpage 4: `/services/virtual-cfo/scenario-planning` (Financial Scenario Planning Services)

- **Metadata**:
  - `title`: `"Financial Scenario Planning Services | Financially Up"`
  - `description`: `"Explore what different business outcomes could mean for profit and cash. Financially Up helps test assumptions, risks and practical responses before you decide."`
  - `keywords`: `["financial scenario planning services", "business scenario analysis", "cash flow sensitivity analysis", "stress testing business finances", "scenario modelling australia"]`
- **SubServiceHero**:
  - `title`: `"Financial Scenario Planning Services for Uncertain Decisions"`
  - `subtitle`: `"Stress-Test Assumptions & Evaluate Alternative Outcomes Before Committing"`
  - `breadcrumbs`: `Home > Services > Virtual CFO > Scenario Planning`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.4 • Risk & Scenario Planning"`
- **Core Sections**:
  1. _What is financial scenario planning?_ (Expected vs downside vs upside; coherent commercial logic).
  2. _When can scenario analysis help?_ (Hiring, lease signing, capex, price increases, customer concentration).
  3. _5 Core Scenarios Businesses Test_ (Demand drop, cost inflation, working capital stretch, delays, refinancing).
  4. _Designing meaningful scenarios & Identifying trigger points_ (Operational levers and breakeven cushions).
  5. _How Financially Up builds scenario models_ (Sensitivity tables, cash runway indicators).
  6. _Information needed & Boundaries_ (Base accounts, variable costs, contractual commitments).
  7. _Why Financially Up_ (`useCompany()` dynamic resolution).
  8. _Verbatim FAQs_ (4 items with schema).
  9. _CTA Banner & Related Service Ribbon_.

---

### Subpage 5: `/services/virtual-cfo/board-reporting` (Board Reporting Services)

- **Metadata**:
  - `title`: `"Board Reporting Services for Directors | Financially Up"`
  - `description`: `"Give directors clearer financial information. Financially Up prepares tailored board packs with results, cash flow, variances and decision-focused commentary."`
  - `keywords`: `["board reporting services", "board pack preparation", "director financial reporting", "advisory board reports australia", "management commentary for directors", "governance financial packs"]`
- **SubServiceHero**:
  - `title`: `"Board Reporting Services for Better Informed Decisions"`
  - `subtitle`: `"Authoritative Board Packs, Executive Summaries & Clear Strategic Commentary"`
  - `breadcrumbs`: `Home > Services > Virtual CFO > Board Reporting`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.5 • Governance & Board Support"`
- **Core Sections**:
  1. _What should a financial board pack include?_ (P&L, balance sheet, cash forecast, KPI dashboard, variance notes).
  2. _Why does the commentary matter?_ (Explaining the 'why' behind the numbers for governance oversight).
  3. _6 Essential Pillars of an Effective Board Report_ (Executive flash numbers, margin drilldowns, runway).
  4. _Establishing a predictable board reporting schedule_ (Month-end close to pack distribution rhythm).
  5. _Board reporting versus statutory audited accounts_ (Distinguishing management governance from external audit).
  6. _What Financially Up provides & Information needed_ (Tailored templates, objective commentary).
  7. _Why choose Financially Up_ (`useCompany()` contact data).
  8. _Verbatim FAQs_ (4 items with schema).
  9. _CTA Banner & Related Service Ribbon_.

---

### Subpage 6: `/services/virtual-cfo/dashboards` (Finance Dashboard Services)

- **Metadata**:
  - `title`: `"Finance Dashboard Services for Business | Financially Up"`
  - `description`: `"See the financial measures behind your decisions. Financially Up helps design and maintain dashboards that present results, cash and trends with useful context."`
  - `keywords`: `["finance dashboard services", "financial kpi dashboard", "business intelligence accounting", "xero dashboard reporting", "executive finance dashboard australia", "cash flow dashboard"]`
- **SubServiceHero**:
  - `title`: `"Finance Dashboard Services for Clearer Decisions"`
  - `subtitle`: `"Visualise Key Performance Indicators, Working Capital & Trends in Real Time"`
  - `breadcrumbs`: `Home > Services > Virtual CFO > Dashboards`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.6 • Visual Analytics & KPIs"`
- **Core Sections**:
  1. _When does a finance dashboard help?_ (Cutting through noise, multi-entity/location visibility).
  2. _What belongs on a useful dashboard?_ (Start with the question, not the chart; 6 essential metric categories).
  3. _Common dashboard pitfalls and data integrity_ (Avoiding vanity metrics and un-reconciled feeds).
  4. _Data integrity and system connectivity_ (Xero/MYOB integration, reconciliation gates).
  5. _How Financially Up designs and maintains dashboards_ (Definition agreement, refresh cadence).
  6. _Information needed & Boundaries_ (Source systems, KPI priorities).
  7. _Why choose Financially Up_ (`useCompany()` phone/email/credentials).
  8. _Verbatim FAQs_ (4 items with schema).
  9. _CTA Banner & Related Service Ribbon_.

---

### Subpage 7: `/services/virtual-cfo/three-way-forecasting` (Three Way Financial Forecasting)

- **Metadata**:
  - `title`: `"Three Way Financial Forecasting | Financially Up"`
  - `description`: `"See how future profit, cash and financial position fit together. Financially Up builds connected forecasts around your business assumptions and decisions."`
  - `keywords`: `["three way financial forecasting", "three statement financial model", "integrated cash flow forecast", "balance sheet forecasting australia", "three way forecast small business", "bank finance forecasting"]`
- **SubServiceHero**:
  - `title`: `"Three Way Financial Forecasting for Business Planning"`
  - `subtitle`: `"Integrated Profit & Loss, Balance Sheet, and Cash Flow Projections"`
  - `breadcrumbs`: `Home > Services > Virtual CFO > Three Way Forecasting`
  - `parentService`: `{ label: "Virtual CFO Hub", href: "/services/virtual-cfo" }`
  - `subPillarTag`: `"Pillar 13.7 • Integrated Financial Forecasting"`
- **Core Sections**:
  1. _What are the three parts of a three way forecast?_ (The interconnected trio: P&L + Balance Sheet + Cash Flow).
  2. _When is integrated forecasting useful?_ (Why profitable plans can create cash shortages; working capital timing).
  3. _How is the forecast built?_ (Opening balances, operating assumptions, 6-step practical build).
  4. _What does the forecast help you decide?_ (Funding runway, debt servicing capacity, growth feasibility).
  5. _How Financially Up can help & Professional boundaries_ (Assumptions documentation, lender compliance limits).
  6. _What to bring to the first discussion_ (Financials, loan terms, pipeline, pricing).
  7. _Why Financially Up_ (`useCompany()` dynamic contact integration).
  8. _Verbatim FAQs_ (4 items with schema).
  9. _CTA Banner & Related Service Ribbon_.

---

## 5. Reusable Component Strategy & Design Tokens

1. **Icons & Ant Design**:
   - Clean, professional financial icons from `@ant-design/icons` (`FundOutlined`, `LineChartOutlined`, `CalculatorOutlined`, `CompassOutlined`, `BankOutlined`, `RiseOutlined`, `AuditOutlined`, `SafetyCertificateOutlined`, `ClockCircleOutlined`, `FileDoneOutlined`).
2. **Typography & Hierarchy**:
   - Section titles with brand tag badges (`Tag color="green"` / `"blue"` / `"cyan"`).
   - Crisp headings (`text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white`).
   - Clean body copy (`text-slate-600 dark:text-zinc-300 leading-relaxed`).
3. **Card & Container Styling**:
   - rounded-lg cards with subtle borders (`border border-slate-200/80 dark:border-zinc-800`).
   - Premium soft hover elevations (`hover:shadow-lg hover:border-brand-primary/40 transition-all duration-300`).
   - Smooth light/dark mode transitions.
4. **Structured Data (Schema.org)**:
   - Every subpage embeds JSON-LD `FAQPage` schema dynamically generated from its exact verbatim FAQ list for maximum SEO indexing.

---

## 6. Implementation Sequence (Step-by-Step)

Once approved, implementation will proceed systematically:

1. **Batch 1: Subpage 1 & 2**
   - Create `app/(web)/services/virtual-cfo/virtual-cfo-services/` with all sub-components and `page.jsx`.
   - Create `app/(web)/services/virtual-cfo/management-reporting/` with all sub-components and `page.jsx`.
2. **Batch 2: Subpage 3 & 4**
   - Create `app/(web)/services/virtual-cfo/financial-modelling/` with all sub-components and `page.jsx`.
   - Create `app/(web)/services/virtual-cfo/scenario-planning/` with all sub-components and `page.jsx`.
3. **Batch 3: Subpage 5, 6 & 7**
   - Create `app/(web)/services/virtual-cfo/board-reporting/` with all sub-components and `page.jsx`.
   - Create `app/(web)/services/virtual-cfo/dashboards/` with all sub-components and `page.jsx`.
   - Create `app/(web)/services/virtual-cfo/three-way-forecasting/` with all sub-components and `page.jsx`.
4. **Verification & Testing**
   - Execute Next.js build / lint / compile check across all 7 routes to guarantee zero SSR or hydration errors.
   - Verify responsiveness, links, dynamic company contact display, and metadata fidelity.
