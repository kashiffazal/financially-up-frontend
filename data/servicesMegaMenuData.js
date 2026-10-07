/**
 * servicesMegaMenuData.js
 * =======================
 * Master registry of all 15 Service Pillars and their sub-services for Financially Up.
 * Strictly aligned with URL Architecture Blueprint (Pages.png & Excel Mapping).
 */

export const MEGA_MENU_CATEGORIES = [
  {
    id: "all",
    label: "All Services",
    count: 15,
    description: "Complete directory of our 15 accounting, taxation & advisory pillars",
  },
  {
    id: "personal-tax",
    label: "Personal & Property",
    count: 3,
    description: "Tailored taxation for wage earners, property investors, and international expats",
  },
  {
    id: "business-tax",
    label: "Business & Corporate",
    count: 3,
    description: "Comprehensive corporate compliance, payroll STP 2.0, and innovation tax incentives",
  },
  {
    id: "structures-wealth",
    label: "Structures & Wealth",
    count: 3,
    description: "Entity setups, asset protection, discretionary family trusts, and self-managed super",
  },
  {
    id: "operations",
    label: "Bookkeeping",
    count: 2,
    description: "Day-to-day cloud bookkeeping, bank reconciliations, and ASIC corporate registers",
  },
  {
    id: "advisory-cfo",
    label: "Advisory & CFO",
    count: 4,
    description: "Strategic tax planning, executive 3-way forecasting, business growth, and ATO dispute defense",
  },
];

export const MAIN_SERVICES_MEGA_MENU = [
  {
    id: "individual-tax",
    number: "01",
    title: "Individual Tax",
    shortTitle: "Individual Tax",
    category: "personal-tax",
    href: "/services/individual-tax",
    badge: "Personal & Expats",
    description: "Tax return lodgements, property deductions, crypto & high-income advisory.",
    iconKey: "UserOutlined",
    subServices: [
      {
        title: "Individual Tax Returns",
        href: "/services/individual-tax/individual-tax-returns",
        badge: "Core",
      },
      {
        title: "High-Income Professionals",
        href: "/services/individual-tax/high-income-professionals",
        badge: "Executive",
      },
      {
        title: "Sole Trader Tax",
        href: "/services/individual-tax/sole-trader-tax-return",
      },
      {
        title: "Investment Property Tax",
        href: "/services/individual-tax/investment-property-tax-accountant",
        badge: "Popular",
      },
      {
        title: "Capital Gains Tax",
        href: "/services/individual-tax/capital-gains-tax",
      },
      {
        title: "Shares & Investment Income",
        href: "/services/individual-tax/share-trading-investment-accountant",
      },
      {
        title: "Cryptocurrency Tax",
        href: "/services/individual-tax/cryptocurrency-tax",
        badge: "Web3",
      },
      {
        title: "Foreign Income Tax",
        href: "/services/individual-tax/foreign-income-tax-accountant",
      },
      {
        title: "Employee Share Schemes",
        href: "/services/individual-tax/employee-share-schemes",
      },
      {
        title: "Prior-Year & Overdue Returns",
        href: "/services/individual-tax/prior-year-overdue-tax-returns",
      },
      {
        title: "Tax Return Amendments",
        href: "/services/individual-tax/tax-return-amendments",
      },
      {
        title: "Deceased Estate Tax",
        href: "/services/individual-tax/deceased-estate-tax-returns",
      },
    ],
  },
  {
    id: "business-tax",
    number: "02",
    title: "Business Tax & Accounting",
    shortTitle: "Business Tax",
    category: "business-tax",
    href: "/services/business-tax",
    badge: "Pty Ltd & SMEs",
    description: "Company tax returns, balance sheets, Division 7A, and business compliance.",
    iconKey: "BankOutlined",
    subServices: [
      {
        title: "Company Tax Returns",
        href: "/services/business-tax/company-tax-returns",
        badge: "Popular",
      },
      {
        title: "Trust Tax Returns",
        href: "/services/business-tax/trust-tax-returns",
      },
      {
        title: "Partnership Tax Returns",
        href: "/services/business-tax/partnership-tax-returns",
      },
      {
        title: "Sole Trader Tax Returns",
        href: "/services/business-tax/sole-trader-tax",
      },
      {
        title: "Business Financial Statements",
        href: "/services/business-tax/business-financial-statements",
      },
      {
        title: "Year-End Accounting",
        href: "/services/business-tax/year-end-accounting",
      },
      {
        title: "Business Tax Compliance",
        href: "/services/business-tax/business-tax-compliance",
      },
      {
        title: "Division 7A Compliance",
        href: "/services/business-tax/division-7a",
      },
      {
        title: "Shareholder / Director Loans",
        href: "/services/business-tax/shareholder-director-loans",
      },
      {
        title: "Trust Distribution Tax",
        href: "/services/business-tax/trust-distribution-tax",
      },
      {
        title: "Small Business CGT",
        href: "/services/business-tax/small-business-cgt",
      },
      {
        title: "Tax Consolidation",
        href: "/services/business-tax/tax-consolidation",
      },
    ],
  },
  {
    id: "tax-planning",
    number: "03",
    title: "Tax Planning & Advisory",
    shortTitle: "Tax Planning",
    category: "advisory-cfo",
    href: "/services/tax-planning",
    badge: "Pre-30 June",
    description: "Strategic tax minimization, trust resolutions, and restructuring roadmaps.",
    iconKey: "SolutionOutlined",
    subServices: [
      {
        title: "Business Tax Planning",
        href: "/services/tax-planning/business-tax-planning",
      },
      {
        title: "Personal Tax Planning",
        href: "/services/tax-planning/personal-tax-planning",
      },
      {
        title: "High-Income Tax Planning",
        href: "/services/tax-planning/high-income-tax-planning",
        badge: "Strategic",
      },
      {
        title: "Property Tax Planning",
        href: "/services/tax-planning/property-tax-planning",
      },
      {
        title: "Business Structure Advice",
        href: "/services/tax-planning/business-structure-advice",
      },
      {
        title: "Year-End Planning",
        href: "/services/tax-planning/year-end-planning",
      },
      {
        title: "CGT Planning & Concessions",
        href: "/services/tax-planning/cgt-planning",
      },
      {
        title: "Division 7A Planning",
        href: "/services/tax-planning/division-7a-planning",
      },
      {
        title: "Trust Distribution Planning",
        href: "/services/tax-planning/trust-distribution-planning",
      },
      {
        title: "Business Restructuring",
        href: "/services/tax-planning/business-restructuring",
      },
      {
        title: "Investment Tax Advice",
        href: "/services/tax-planning/investment-tax-advice",
      },
    ],
  },
  {
    id: "bookkeeping",
    number: "04",
    title: "Bookkeeping",
    shortTitle: "Bookkeeping",
    category: "operations",
    href: "/services/bookkeeping",
    badge: "Xero Certified",
    description: "Punctual day-to-day accounts, bank reconciliations, accounts payable & AR.",
    iconKey: "BookOutlined",
    subServices: [
      {
        title: "Xero Bookkeeping",
        href: "/services/bookkeeping/xero-bookkeeping",
        badge: "Cloud",
      },
      {
        title: "Monthly Bookkeeping",
        href: "/services/bookkeeping/monthly-bookkeeping",
      },
      {
        title: "Catch-Up Bookkeeping",
        href: "/services/bookkeeping/catch-up-bookkeeping",
        badge: "Urgent",
      },
      {
        title: "Bookkeeping Clean-Up",
        href: "/services/bookkeeping/bookkeeping-clean-up",
      },
      {
        title: "Accounts Payable",
        href: "/services/bookkeeping/accounts-payable",
      },
      {
        title: "Accounts Receivable",
        href: "/services/bookkeeping/accounts-receivable",
      },
      {
        title: "Bank Reconciliation",
        href: "/services/bookkeeping/bank-reconciliation",
      },
      {
        title: "Management Reporting",
        href: "/services/bookkeeping/reporting",
      },
    ],
  },
  {
    id: "bas-payroll",
    number: "05",
    title: "BAS, GST & Payroll",
    shortTitle: "BAS & Payroll",
    category: "business-tax",
    href: "/services/bas-payroll",
    badge: "STP 2.0 & ATO",
    description: "Lodgement of BAS/IAS, GST reconciliations, superannuation, and Single Touch Payroll.",
    iconKey: "AuditOutlined",
    subServices: [
      {
        title: "BAS Lodgement",
        href: "/services/bas-payroll/bas-lodgement",
        badge: "Quarterly",
      },
      {
        title: "GST Registration",
        href: "/services/bas-payroll/gst-registration",
      },
      {
        title: "Payroll Services",
        href: "/services/bas-payroll/payroll-services",
      },
      {
        title: "Single Touch Payroll (STP)",
        href: "/services/bas-payroll/stp",
        badge: "ATO Ready",
      },
      {
        title: "Fringe Benefits Tax (FBT)",
        href: "/services/bas-payroll/fringe-benefits-tax",
      },
      {
        title: "IAS Lodgement",
        href: "/services/bas-payroll/ias",
      },
      {
        title: "PAYG Withholding & Instalments",
        href: "/services/bas-payroll/payg",
      },
      {
        title: "Payroll Tax Lodgement",
        href: "/services/bas-payroll/payroll-tax",
      },
      {
        title: "Employer Compliance",
        href: "/services/bas-payroll/employer-compliance",
      },
      {
        title: "Super Guarantee Processing",
        href: "/services/bas-payroll/super-processing",
      },
    ],
  },
  {
    id: "business-structures",
    number: "06",
    title: "Business Structures",
    shortTitle: "Structures",
    category: "structures-wealth",
    href: "/services/business-structures",
    badge: "Asset Protection",
    description: "Entity advisory, company incorporation, partnership agreements, and restructuring.",
    iconKey: "DeploymentUnitOutlined",
    subServices: [
      {
        title: "Company Registration",
        href: "/services/business-structures/company-registration",
        badge: "Instant",
      },
      {
        title: "ABN Registration",
        href: "/services/business-structures/abn-registration",
      },
      {
        title: "Business Name Registration",
        href: "/services/business-structures/business-name-registration",
      },
      {
        title: "Business Structure Advice",
        href: "/services/business-structures/business-structure-advice",
      },
      {
        title: "Partnership Registration",
        href: "/services/business-structures/partnership-registration",
      },
      {
        title: "Corporate Trustee Setup",
        href: "/services/business-structures/corporate-trustee",
      },
      {
        title: "Business Restructure",
        href: "/services/business-structures/business-restructure",
      },
    ],
  },
  {
    id: "asic",
    number: "07",
    title: "ASIC Services",
    shortTitle: "ASIC Compliance",
    category: "operations",
    href: "/services/asic",
    badge: "Registered Agent",
    description: "Corporate secretarial support, annual company reviews, solvency, and register upkeep.",
    iconKey: "FileProtectOutlined",
    subServices: [
      {
        title: "ASIC Registered Agent",
        href: "/services/asic/registered-agent",
      },
      {
        title: "Company Changes",
        href: "/services/asic/company-changes",
      },
      {
        title: "Business Name Renewal",
        href: "/services/asic/business-name-renewal",
      },
      {
        title: "Company Deregistration",
        href: "/services/asic/company-deregistration",
      },
      {
        title: "Director Changes",
        href: "/services/asic/director-changes",
      },
      {
        title: "Share Changes & Transfers",
        href: "/services/asic/share-changes",
      },
      {
        title: "Address Changes",
        href: "/services/asic/address-changes",
      },
      {
        title: "Annual Company Reviews",
        href: "/services/asic/annual-reviews",
        badge: "Solvency",
      },
      {
        title: "Corporate Registers",
        href: "/services/asic/corporate-registers",
      },
    ],
  },
  {
    id: "trusts",
    number: "08",
    title: "Trust Services",
    shortTitle: "Trusts",
    category: "structures-wealth",
    href: "/services/trusts",
    badge: "Wealth Protection",
    description: "Family discretionary trusts, unit trusts, distribution planning, and Sec 100A compliance.",
    iconKey: "SafetyOutlined",
    subServices: [
      {
        title: "Family Trust Setup & Tax",
        href: "/services/trusts/family-trust",
        badge: "Popular",
      },
      {
        title: "Unit Trust Accounting",
        href: "/services/trusts/unit-trust",
      },
      {
        title: "Bare Trust Establishment",
        href: "/services/trusts/bare-trust",
      },
      {
        title: "Corporate Trustee",
        href: "/services/trusts/corporate-trustee",
      },
      {
        title: "Trust Tax Returns",
        href: "/services/trusts/trust-tax-returns",
      },
      {
        title: "Trust Restructuring",
        href: "/services/trusts/trust-restructuring",
      },
      {
        title: "Change Trustee",
        href: "/services/trusts/change-trustee",
      },
      {
        title: "Appointor Changes",
        href: "/services/trusts/appointor-changes",
      },
      {
        title: "Trust ABN / TFN",
        href: "/services/trusts/trust-abn-tfn",
      },
      {
        title: "Distribution Planning (100A)",
        href: "/services/trusts/distribution-planning",
        badge: "ATO Focus",
      },
    ],
  },
  {
    id: "smsf",
    number: "09",
    title: "SMSF",
    shortTitle: "SMSF",
    category: "structures-wealth",
    href: "/services/smsf",
    badge: "Superannuation",
    description: "Self-managed super fund accounting, tax return lodgement, and independent audit coordination.",
    iconKey: "SafetyCertificateOutlined",
    subServices: [
      {
        title: "SMSF Accounting",
        href: "/services/smsf/accounting",
        badge: "Annual",
      },
      {
        title: "SMSF Establishment",
        href: "/services/smsf/establishment",
      },
      {
        title: "SMSF Property Purchases",
        href: "/services/smsf/property",
      },
      {
        title: "SMSF LRBA Borrowing",
        href: "/services/smsf/lrba",
      },
      {
        title: "SMSF Administration",
        href: "/services/smsf/administration",
      },
      {
        title: "Audit Coordination",
        href: "/services/smsf/audit-coordination",
        badge: "Independent",
      },
      {
        title: "SMSF Compliance Reviews",
        href: "/services/smsf/compliance",
      },
      {
        title: "SMSF Wind Up",
        href: "/services/smsf/wind-up",
      },
    ],
  },
  {
    id: "property-tax",
    number: "10",
    title: "Property Tax",
    shortTitle: "Property Tax",
    category: "personal-tax",
    href: "/services/property-tax",
    badge: "Investors & Devs",
    description: "Negative gearing, CGT calculations, subdivisions, 6-year rule, and depreciation advice.",
    iconKey: "HomeOutlined",
    subServices: [
      {
        title: "Investment Property Tax",
        href: "/services/property-tax/investment-property-tax",
        badge: "Popular",
      },
      {
        title: "Property Development Tax",
        href: "/services/property-tax/property-development-tax",
      },
      {
        title: "Property Subdivision Tax",
        href: "/services/property-tax/property-subdivision-tax",
      },
      {
        title: "Property Capital Gains Tax",
        href: "/services/property-tax/property-capital-gains-tax",
      },
      {
        title: "GST on Property (Margin Scheme)",
        href: "/services/property-tax/gst-on-property",
      },
      {
        title: "Negative Gearing Schedules",
        href: "/services/property-tax/negative-gearing",
      },
      {
        title: "Main Residence Exemption",
        href: "/services/property-tax/main-residence",
      },
      {
        title: "6-Year Absence Rule",
        href: "/services/property-tax/6-year-rule",
      },
      {
        title: "Ownership Structures",
        href: "/services/property-tax/ownership-structures",
      },
      {
        title: "Property Through SMSF",
        href: "/services/property-tax/property-through-smsf",
      },
    ],
  },
  {
    id: "ato-help",
    number: "11",
    title: "ATO Help",
    shortTitle: "ATO Help",
    category: "advisory-cfo",
    href: "/services/ato-help",
    badge: "Resolution & Debt",
    description: "Tax debt payment arrangements, penalty and interest remission, and ATO audit defense.",
    iconKey: "SecurityScanOutlined",
    subServices: [
      {
        title: "ATO Debt Negotiation",
        href: "/services/ato-help/ato-debt",
        badge: "Urgent",
      },
      {
        title: "ATO Audit Assistance",
        href: "/services/ato-help/ato-audit",
      },
      {
        title: "Overdue Tax Returns",
        href: "/services/ato-help/overdue-tax-returns",
      },
      {
        title: "Penalty & GIC Remission",
        href: "/services/ato-help/penalty-remission",
      },
      {
        title: "Voluntary Disclosures",
        href: "/services/ato-help/voluntary-disclosure",
      },
      {
        title: "ATO Payment Plans",
        href: "/services/ato-help/payment-plans",
      },
      {
        title: "ATO Formal Reviews",
        href: "/services/ato-help/ato-reviews",
      },
      {
        title: "ATO Letter Responses",
        href: "/services/ato-help/ato-letters",
      },
      {
        title: "Tax Agent Representation",
        href: "/services/ato-help/ato-representation",
      },
      {
        title: "Overdue BAS Catch-Up",
        href: "/services/ato-help/overdue-bas",
      },
    ],
  },
  {
    id: "business-advisory",
    number: "12",
    title: "Business Advisory",
    shortTitle: "Advisory",
    category: "advisory-cfo",
    href: "/services/business-advisory",
    badge: "Growth & Profit",
    description: "Cash flow modeling, KPI performance dashboards, budgeting, and business valuations.",
    iconKey: "RiseOutlined",
    subServices: [
      {
        title: "Cash Flow Management",
        href: "/services/business-advisory/cash-flow-management",
        badge: "Key",
      },
      {
        title: "Budgeting & Forecasting",
        href: "/services/business-advisory/budgeting-forecasting",
      },
      {
        title: "Business Growth Strategy",
        href: "/services/business-advisory/business-growth",
      },
      {
        title: "Business Valuations",
        href: "/services/business-advisory/business-valuations",
      },
      {
        title: "Buying & Selling Business",
        href: "/services/business-advisory/buying-selling-business",
      },
      {
        title: "KPI Reporting",
        href: "/services/business-advisory/kpi-reporting",
      },
      {
        title: "Profitability Analysis",
        href: "/services/business-advisory/profitability",
      },
      {
        title: "Industry Benchmarking",
        href: "/services/business-advisory/benchmarking",
      },
      {
        title: "Succession Planning",
        href: "/services/business-advisory/succession-planning",
      },
    ],
  },
  {
    id: "virtual-cfo",
    number: "13",
    title: "Virtual CFO",
    shortTitle: "Virtual CFO",
    category: "advisory-cfo",
    href: "/services/virtual-cfo",
    badge: "Executive Leadership",
    description: "Fractional CFO leadership, 3-way cash flow forecasting, board reporting, and strategy.",
    iconKey: "LineChartOutlined",
    subServices: [
      {
        title: "Virtual CFO Services",
        href: "/services/virtual-cfo/virtual-cfo-services",
        badge: "Executive",
      },
      {
        title: "Management Reporting",
        href: "/services/virtual-cfo/management-reporting",
      },
      {
        title: "Financial Modelling",
        href: "/services/virtual-cfo/financial-modelling",
      },
      {
        title: "Scenario & Stress Testing",
        href: "/services/virtual-cfo/scenario-planning",
      },
      {
        title: "Board Presentations",
        href: "/services/virtual-cfo/board-reporting",
      },
      {
        title: "Executive Dashboards",
        href: "/services/virtual-cfo/dashboards",
      },
      {
        title: "Three-Way Forecasting",
        href: "/services/virtual-cfo/three-way-forecasting",
        badge: "P&L/BS/CF",
      },
    ],
  },
  {
    id: "international-tax",
    number: "14",
    title: "International Tax",
    shortTitle: "International Tax",
    category: "personal-tax",
    href: "/services/international-tax",
    badge: "Cross-Border",
    description: "Australian tax residency determinations, foreign income tax offsets, and expat returns.",
    iconKey: "GlobalOutlined",
    subServices: [
      {
        title: "Foreign Income Tax",
        href: "/services/international-tax/foreign-income-tax",
      },
      {
        title: "Tax Residency Status",
        href: "/services/international-tax/tax-residency",
        badge: "Crucial",
      },
      {
        title: "New Migrants Tax",
        href: "/services/international-tax/new-migrants-tax",
      },
      {
        title: "Foreign Rental Income",
        href: "/services/international-tax/foreign-rental-income",
      },
      {
        title: "Foreign Tax Offsets (FITO)",
        href: "/services/international-tax/foreign-tax-offset",
      },
      {
        title: "Capital Gains (International)",
        href: "/services/international-tax/capital-gains-international",
      },
      {
        title: "Australians Overseas / Expats",
        href: "/services/international-tax/australians-overseas",
      },
    ],
  },
  {
    id: "rd-tax-incentive",
    number: "15",
    title: "R&D Tax Incentive",
    shortTitle: "R&D Incentive",
    category: "business-tax",
    href: "/services/rd-tax-incentive",
    badge: "Refundable Offsets",
    description: "Eligible expenditure claims, AusIndustry registrations, and company tax offset schedules.",
    iconKey: "ExperimentOutlined",
    subServices: [
      {
        title: "R&D Tax Claim Preparation",
        href: "/services/rd-tax-incentive/rnd-tax-claim-preparation",
        badge: "Government",
      },
      {
        title: "Eligibility Assessment",
        href: "/services/rd-tax-incentive/eligibility-assessment",
      },
      {
        title: "Government Grants & Offsets",
        href: "/services/rd-tax-incentive/government-grants",
      },
      {
        title: "Application & Audit Support",
        href: "/services/rd-tax-incentive/application-support",
      },
    ],
  },
];

/**
 * Normalizes a URL path for consistent cross-route comparison.
 * - Trims whitespace
 * - Converts to lower-case
 * - Removes trailing slashes
 * - Guarantees leading slash
 */
export function normalizeServicePath(path) {
  if (!path || typeof path !== "string") return "";
  let clean = path.trim().toLowerCase().replace(/\/+$/, "");
  if (!clean.startsWith("/")) clean = "/" + clean;
  return clean;
}

/**
 * Checks whether a target URL matches the current active pathname.
 * Handles exact matches as well as matching when '/services' prefix is present or omitted.
 */
export function isServicePathMatch(targetHref, currentPath) {
  const normTarget = normalizeServicePath(targetHref);
  const normCurrent = normalizeServicePath(currentPath);
  if (!normTarget || !normCurrent) return false;

  // Exact canonical match
  if (normTarget === normCurrent) return true;

  // Matched when one path has '/services' prefix and the other doesn't
  if (`/services${normCurrent}` === normTarget) return true;
  if (normCurrent.replace(/^\/services/, "") === normTarget) return true;

  return false;
}

/**
 * Resolves the corresponding Service Pillar based on the given pathname.
 * Checks direct pillar href, sub-service hrefs, and route prefixes.
 */
export function findPillarByPath(pathname) {
  if (!pathname || typeof pathname !== "string") return null;
  const normCurrent = normalizeServicePath(pathname);

  // 1. Direct pillar match (e.g. /services/bookkeeping or /bookkeeping)
  for (const pillar of MAIN_SERVICES_MEGA_MENU) {
    if (isServicePathMatch(pillar.href, normCurrent)) {
      return pillar;
    }
  }

  // 2. Sub-service match (e.g. /services/bookkeeping/catch-up-bookkeeping or /bookkeeping/catch-up-bookkeeping)
  for (const pillar of MAIN_SERVICES_MEGA_MENU) {
    if (
      pillar.subServices?.some((sub) => isServicePathMatch(sub.href, normCurrent))
    ) {
      return pillar;
    }
  }

  // 3. Fallback prefix check for nested sub-routes
  for (const pillar of MAIN_SERVICES_MEGA_MENU) {
    const normPillar = normalizeServicePath(pillar.href);
    if (
      normCurrent.startsWith(normPillar) ||
      `/services${normCurrent}`.startsWith(normPillar)
    ) {
      return pillar;
    }
  }

  return null;
}
