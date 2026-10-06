import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatBusinessAccountantDoes from "./components/WhatBusinessAccountantDoes";
import BusinessServicesGrid from "./components/BusinessServicesGrid";
import WhoWeHelp from "./components/WhoWeHelp";
import BusinessTaxReporting from "./components/BusinessTaxReporting";
import BusinessStructureMatters from "./components/BusinessStructureMatters";
import WhatToHaveReady from "./components/WhatToHaveReady";
import WhyChooseFinanciallyUp from "./components/WhyChooseFinanciallyUp";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 2nd pillar Business Tax Final Pages.docx)
 */
export const metadata = {
  title: "Business Tax Accountant | Financially Up",
  description:
    "Business tax accountant helping with tax returns, year-end accounts, compliance and practical accounting support for businesses Australia-wide.",
  keywords: [
    "business tax accountant",
    "business tax return",
    "business tax return accountant",
    "company tax accountant",
    "trust tax return accountant",
    "small business tax accountant",
    "business accounting Australia",
    "business tax compliance",
    "partnership tax return",
    "year end accounting Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/",
  },
  openGraph: {
    title: "Business Tax Accountant | Financially Up",
    description:
      "Business tax accountant helping with tax returns, year-end accounts, compliance and practical accounting support for businesses Australia-wide.",
    url: "https://financiallyup.com.au/services/business-tax/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Business Tax
 */
const businessTaxBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Business Tax" },
];

/**
 * 5 Practice Scope Items for Business Tax
 */
const businessTaxScopeItems = [
  {
    icon: "bank",
    theme: "emerald",
    title: "Company, Trust & Partnership Returns",
    description: "Pty Ltd, Family Trusts, Partnerships & Sole Traders",
    tag: "Entity Returns",
  },
  {
    icon: "wallet",
    theme: "blue",
    title: "Year-End Financial Statements",
    description:
      "Balance sheets, profit & loss, notes & ledger reconciliations",
    tag: "Accounts",
  },
  {
    icon: "calculator",
    theme: "teal",
    title: "Asset Depreciation & Write-Offs",
    description: "Asset registers, instant write-offs & capital allowances",
    tag: "Depreciation",
  },
  {
    icon: "history",
    theme: "amber",
    title: "BAS, GST & PAYG Compliance",
    description: "Quarterly lodgments, instalment plans & ATO compliance",
    tag: "Compliance",
  },
  {
    icon: "calendar",
    theme: "purple",
    title: "Australia-Wide Consultations",
    description: "100% online video meetings or in-person appointments",
    tag: "Flexible",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const businessTaxVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "100% ATO Compliant",
  },
  {
    icon: "team",
    label: "CPA & IPA Qualified",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Pillar 2)
 */
const businessTaxFaqs = [
  {
    key: "1",
    label: "Do I need a business accountant as well as a bookkeeper?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Bookkeeping keeps day-to-day records organized. A business accountant
        typically uses those records for financial reporting, tax returns,
        year-end adjustments and higher-level tax or accounting work. Some
        businesses need both services, while others only need periodic
        accounting support.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can you help with both business tax and accounting?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up provides business accounting services as well as
        taxation, bookkeeping and business advisory services. The exact scope
        can be agreed based on your structure, records and obligations.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if my bookkeeping is not up to date?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can still start the process. We can identify gaps in the records and
        determine what needs to be reconciled or completed before the tax return
        or financial statements are prepared.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do all businesses pay tax in the same way?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The tax treatment depends on the entity and circumstances.
        Companies, trusts, partnerships and sole traders have different
        reporting rules, and concessions or tax rates can also depend on
        eligibility conditions.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can you provide tax planning as well as compliance?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, where appropriate. Tax planning or advisory work can be scoped
        separately from routine tax-return and accounting preparation so the
        purpose and work required are clear.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Search Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a business accountant as well as a bookkeeper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bookkeeping keeps day-to-day records organized. A business accountant typically uses those records for financial reporting, tax returns, year-end adjustments and higher-level tax or accounting work. Some businesses need both services, while others only need periodic accounting support.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with both business tax and accounting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Financially Up provides business accounting services as well as taxation, bookkeeping and business advisory services. The exact scope can be agreed based on your structure, records and obligations.",
      },
    },
    {
      "@type": "Question",
      name: "What if my bookkeeping is not up to date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can still start the process. We can identify gaps in the records and determine what needs to be reconciled or completed before the tax return or financial statements are prepared.",
      },
    },
    {
      "@type": "Question",
      name: "Do all businesses pay tax in the same way?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The tax treatment depends on the entity and circumstances. Companies, trusts, partnerships and sole traders have different reporting rules, and concessions or tax rates can also depend on eligibility conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide tax planning as well as compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where appropriate. Tax planning or advisory work can be scoped separately from routine tax-return and accounting preparation so the purpose and work required are clear.",
      },
    },
  ],
};

/**
 * BusinessTaxMainPage
 * ===================
 * Pillar 2: Business Tax & Accounting Main Hub Page (/services/business-tax/).
 *
 * Implements the full client content from '2nd pillar Business Tax Final Pages.docx',
 * structured into 10 cohesive, responsive, and beautifully styled sections.
 */
export default function BusinessTaxMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={businessTaxBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Business Tax Accountant"
        titleHighlight="for Australian Businesses"
        description={
          <p className="m-0">
            Running a business means managing more than an annual tax return.
            Your tax position is shaped by your business structure, income,
            expenses, GST, payroll, record keeping, year-end accounts and the
            decisions you make throughout the year. Financially Up Pty Ltd
            provides business tax and accounting support for businesses that
            want their compliance handled properly and their numbers explained
            clearly.
          </p>
        }
        subDescription={
          <p className="m-0">
            As your business tax accountant, we can assist with business tax
            returns, financial statements, year-end accounting, tax compliance
            and related accounting work. The service is suitable for established
            businesses, growing small businesses and owners whose affairs have
            become too detailed to manage confidently without professional
            support.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Use your first appointment to discuss your business structure,
            current accounting records, tax obligations, outstanding issues and
            the support you need next.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#business-services-overview",
        }}
        supportingText="Trusted by Australian Pty Ltd companies, trusts, partnerships and growing businesses."
        scopeTag="Practice Scope Overview"
        scopeTitle="Business Tax Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={businessTaxScopeItems}
        verificationBadges={businessTaxVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Business Tax Accountant"
      />

      {/* 2. What Does a Business Tax Accountant Do? (Entity Differences) */}
      <WhatBusinessAccountantDoes />

      {/* 3. Our Business Tax Services - 12 Card Navigation Grid */}
      <BusinessServicesGrid />

      {/* 4. Who We Help - 6 Target Profiles & Dedicated Entity Routing */}
      <WhoWeHelp />

      {/* 5. Business Income, Expenses & Tax Reporting - 9 Compliance Areas */}
      <BusinessTaxReporting />

      {/* 6. Business Structure Matters - Comparison & Tax Impact */}
      <BusinessStructureMatters />

      {/* 7. What to Have Ready - Documentation & 5-Year ATO Rule */}
      <WhatToHaveReady />

      {/* 8. Why Choose Financially Up - Credentials & Contact Clarity */}
      <WhyChooseFinanciallyUp />

      {/* 9. Frequently Asked Questions (Central FaqSection with 5 Exact FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about business tax returns, accounting, bookkeeping coordination, and tax compliance."
        image="/images/services/faq.webp"
        imageAlt="Business Tax Accountant Frequently Asked Questions"
        items={businessTaxFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Exact title and subtitle from doc) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Discuss your business structure, accounts, tax return, compliance obligations and any issues that need attention."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
