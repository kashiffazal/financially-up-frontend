import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatBasLodgementInvolves from "./components/WhatBasLodgementInvolves";
import BasPayrollServicesGrid from "./components/BasPayrollServicesGrid";
import WhoNeedsBasServices from "./components/WhoNeedsBasServices";
import BasComplianceNotice from "./components/BasComplianceNotice";
import BasHelpSmallBusiness from "./components/BasHelpSmallBusiness";
import HowFinanciallyUpHelps from "./components/HowFinanciallyUpHelps";
import WhatInformationNeeded from "./components/WhatInformationNeeded";
import WhyChooseFinanciallyUp from "./components/WhyChooseFinanciallyUp";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1 - Verbatim)
 */
export const metadata = {
  title: "BAS Lodgement & GST Services Australia | Financially Up",
  description:
    "BAS lodgement, GST and payroll support for Australian businesses. Financially Up helps with activity statements, GST records and compliance.",
  keywords: [
    "BAS lodgement",
    "BAS lodgement service",
    "GST registration",
    "GST records",
    "activity statement accountant",
    "payroll support Australia",
    "PAYG withholding",
    "PAYG instalments",
    "superannuation processing",
    "business activity statement",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/",
  },
  openGraph: {
    title: "BAS Lodgement & GST Services Australia | Financially Up",
    description:
      "BAS lodgement, GST and payroll support for Australian businesses. Financially Up helps with activity statements, GST records and compliance.",
    url: "https://financiallyup.com.au/services/bas-payroll/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for BAS & Payroll
 */
const basPayrollBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "BAS, GST & Payroll" },
];

/**
 * 5 Practice Scope Items for BAS & Payroll
 */
const basPayrollScopeItems = [
  {
    icon: "file-text",
    theme: "emerald",
    title: "Activity Statement Preparation",
    description: "Quarterly & monthly BAS lodgement with registered tax agent extensions",
    tag: "BAS Lodgement",
  },
  {
    icon: "safety",
    theme: "blue",
    title: "GST Registration & Records",
    description: "Turnover assessments, voluntary registration & input credit substantiation",
    tag: "GST Support",
  },
  {
    icon: "dollar",
    theme: "amber",
    title: "PAYG Withholding & Instalments",
    description: "Wage tax deductions, director fees & income tax instalment management",
    tag: "PAYG Tax",
  },
  {
    icon: "solution",
    theme: "teal",
    title: "Single Touch Payroll (STP)",
    description: "STP Phase 2 compliance, modern award rates & superannuation clearing",
    tag: "Payroll & STP",
  },
  {
    icon: "calculator",
    theme: "purple",
    title: "FBT & Monthly IAS Reporting",
    description: "Fringe benefits tax returns, salary packaging & monthly IAS reporting",
    tag: "FBT & IAS",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const basPayrollVerificationBadges = [
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
 * 5 Exact Frequently Asked Questions from Client Document (Pillar 5, Page 1 - Verbatim)
 */
const basPayrollFaqs = [
  {
    key: "1",
    label: "What is a BAS?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A business activity statement is an ATO form used to report tax
        obligations that apply to a business, which may include GST, PAYG
        withholding and PAYG instalments. The labels that appear depend on the
        business&apos;s registrations and circumstances.
      </p>
    ),
  },
  {
    key: "2",
    label: "How often do I need to lodge a BAS?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Businesses may report monthly, quarterly or annually depending on their
        circumstances and ATO reporting cycle. Your actual due dates and
        reporting frequency should be checked against the activity statement
        issued by the ATO or your ATO account.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need a BAS agent or accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can manage your own activity statements if you are comfortable doing
        so, but many businesses use professional BAS lodgement support to review
        records, prepare figures and reduce avoidable reporting errors. The
        appropriate service depends on the complexity of the business and its
        records.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you help if my bookkeeping is behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Where records are incomplete, the bookkeeping may need to be
        brought up to date or reconciled before a BAS can be prepared reliably.
        Catch-up work can be scoped separately where required.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is BAS lodgement the same as a business tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A BAS reports activity-statement obligations for a reporting period.
        A business tax return is a separate annual income-tax reporting process.
        Some figures may relate, but the lodgements are different.
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
      name: "What is a BAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A business activity statement is an ATO form used to report tax obligations that apply to a business, which may include GST, PAYG withholding and PAYG instalments. The labels that appear depend on the business's registrations and circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "How often do I need to lodge a BAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses may report monthly, quarterly or annually depending on their circumstances and ATO reporting cycle. Your actual due dates and reporting frequency should be checked against the activity statement issued by the ATO or your ATO account.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a BAS agent or accountant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage your own activity statements if you are comfortable doing so, but many businesses use professional BAS lodgement support to review records, prepare figures and reduce avoidable reporting errors. The appropriate service depends on the complexity of the business and its records.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help if my bookkeeping is behind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Where records are incomplete, the bookkeeping may need to be brought up to date or reconciled before a BAS can be prepared reliably. Catch-up work can be scoped separately where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is BAS lodgement the same as a business tax return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A BAS reports activity-statement obligations for a reporting period. A business tax return is a separate annual income-tax reporting process. Some figures may relate, but the lodgements are different.",
      },
    },
  ],
};

/**
 * BasPayrollMainPage
 * ==================
 * Pillar 5: BAS Lodgement, GST & Payroll Support Hub Page (/services/bas-payroll/).
 *
 * Implements 100% of the verbatim client content from '5th Pillar BAS, GST & Payroll.docx',
 * structured into cohesive, responsive sections with strict alternating background palette:
 * 1. Hero: ServiceHero Composite
 * 2. Section 1: What Does BAS Lodgement Involve? (Lite Brand Gradient)
 * 3. Section 2: Our BAS, GST & Payroll Services - 10 Card Hub (Clean White)
 * 4. Section 3: Who May Need BAS Services? (Lite Brand Gradient)
 * 5. Section 4: GST, BAS & Payroll Service Boundaries (Clean White)
 * 6. Section 5: BAS Help for Small Business (Lite Brand Gradient)
 * 7. Section 6: How Financially Up Can Help (Clean White)
 * 8. Section 7: What Information May Be Needed? (Lite Brand Gradient)
 * 9. Section 8: Why Choose Financially Up? (Clean White)
 * 10. Section 9: Frequently Asked Questions (Lite Brand Gradient)
 * 11. Section 10: Call to Action Banner (Dark Brand Accent)
 */
export default function BasPayrollMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={basPayrollBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="BAS Lodgement, GST & Payroll Support"
        titleHighlight=""
        description={
          <p className="m-0">
            Financially Up provides practical BAS lodgement, GST and payroll
            support for businesses that want their activity-statement reporting,
            GST records and related compliance kept organized. The service is
            suited to sole traders, companies, trusts and partnerships that need
            help understanding what belongs on a business activity statement,
            preparing accurate figures and keeping records ready for lodgement.
          </p>
        }
        subDescription={
          <p className="m-0">
            A BAS can report more than GST. Depending on a business&apos;s
            registrations and obligations, an activity statement may also
            include PAYG withholding, PAYG instalments and other amounts. What
            appears on a particular BAS depends on the business and the
            registrations the ATO has in place.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Need help working out what needs to be reported and what records are
            required? Book an appointment to discuss your business activity
            statements, registrations, and filing cycle.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#bas-payroll-services-overview",
        }}
        supportingText="Trusted BAS and payroll compliance for Australian employers, companies, and sole traders."
        scopeTag="Compliance Scope Overview"
        scopeTitle="BAS & Payroll Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={basPayrollScopeItems}
        verificationBadges={basPayrollVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian BAS Lodgement and Payroll Services"
      />

      {/* 2. What Does BAS Lodgement Involve? (Section 1 - Lite Brand Gradient) */}
      <WhatBasLodgementInvolves />

      {/* 3. Our BAS, GST & Payroll Services - 10 Card Navigation Grid (Section 2 - Clean White) */}
      <BasPayrollServicesGrid />

      {/* 4. Who May Need BAS Services? (Section 3 - Lite Brand Gradient) */}
      <WhoNeedsBasServices />

      {/* 5. GST, BAS and Payroll Are Related - But Distinct Services (Section 4 - Clean White) */}
      <BasComplianceNotice />

      {/* 6. BAS Help for Small Business (Section 5 - Lite Brand Gradient) */}
      <BasHelpSmallBusiness />

      {/* 7. How Financially Up Can Help - 6 Practical Steps (Section 6 - Clean White) */}
      <HowFinanciallyUpHelps />

      {/* 8. What Information May Be Needed? & 5-Year Rule (Section 7 - Lite Brand Gradient) */}
      <WhatInformationNeeded />

      {/* 9. Why Choose Financially Up? - Credentials & Contact (Section 8 - Clean White) */}
      <WhyChooseFinanciallyUp />

      {/* 10. Frequently Asked Questions (Section 9 - Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about BAS due dates, agent extensions, GST registration thresholds, and payroll lodgements."
        image="/images/services/faq.webp"
        imageAlt="BAS and Payroll Frequently Asked Questions"
        items={basPayrollFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Section 10 - Dark Brand Accent) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an appointment to discuss your BAS cycle, GST registrations, payroll-related reporting, bookkeeping records and any outstanding activity statements. We can help establish what information is needed and the appropriate scope of work."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
