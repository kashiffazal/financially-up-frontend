import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsIncludedInSmsfAccounting from "./components/WhatIsIncludedInSmsfAccounting";
import SmsfFinancialStatementsAndTaxReturn from "./components/SmsfFinancialStatementsAndTaxReturn";
import PreparingFundForIndependentAudit from "./components/PreparingFundForIndependentAudit";
import CommonSmsfAccountingIssuesAndRecords from "./components/CommonSmsfAccountingIssuesAndRecords";
import WhyChooseFinanciallyUpSmsfAcc from "./components/WhyChooseFinanciallyUpSmsfAcc";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Accounting & Annual Accounts | Financially Up",
  description:
    "SMSF accounting for annual accounts, financial statements, tax reporting and audit preparation. Get practical support from Financially Up Australia-wide.",
  keywords: [
    "SMSF accounting",
    "SMSF annual accounts",
    "SMSF financial statements",
    "SMSF tax return",
    "SMSF audit preparation",
    "self managed super fund accounting",
    "SMSF accountant Australia",
    "SMSF tax agent",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/accounting/",
  },
  openGraph: {
    title: "SMSF Accounting & Annual Accounts | Financially Up",
    description:
      "SMSF accounting for annual accounts, financial statements, tax reporting and audit preparation. Get practical support from Financially Up Australia-wide.",
    url: "https://financiallyup.com.au/services/smsf/accounting/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back to the SMSF Hub
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SMSF", href: "/services/smsf" },
  { label: "SMSF Accounting" },
];

/**
 * 6 Quick Specifications for SMSF Accounting
 */
const smsfAccountingQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Established SMSFs requiring annual accounts, financial statements, and tax returns",
  },
  {
    icon: "file",
    label: "Core Statements",
    value: "Annual operating statement and statement of financial position with market values",
  },
  {
    icon: "calendar",
    label: "Audit Deadline",
    value: "Approved auditor appointed at least 45 days prior to annual return due date",
  },
  {
    icon: "percentage",
    label: "Tax Reporting",
    value: "Comprehensive SMSF annual return (SAR) incorporating deductibility & member balances",
  },
  {
    icon: "lineChart",
    label: "Asset Valuations",
    value: "Objective market-value evidence required at 30 June for property, shares, and assets",
  },
  {
    icon: "safety",
    label: "Professional Scope",
    value: "Registered Tax Agent #26242127 lodgement with independent audit file preparation",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const smsfAccountingFaqs = [
  {
    key: "1",
    label: "What financial statements does an SMSF need each year?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        SMSFs generally prepare an operating statement and a statement of financial position each year. The fund&apos;s accounting records must support those statements and allow them to be properly audited.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does the SMSF annual return get lodged before the audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The annual audit needs to be finalized first, and the SMSF annual return includes auditor information from the completed audit.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do SMSF assets need to be valued every year?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The ATO requires SMSF assets to be reported at market value for annual accounts and reporting. The type of evidence required depends on the asset and the circumstances.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can accounting fees be deductible to an SMSF?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Some accounting and tax-administration costs may be deductible, but the treatment depends on the nature of the expense. Capital establishment or structural costs are different and may not be deductible under the general rules.
      </p>
    ),
  },
];

/**
 * SmsfAccountingSubpage Component
 * ================================
 * Route: /services/smsf/accounting
 * Pillar 9.1: SMSF Accounting & Annual Accounts (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfAccountingSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What financial statements does an SMSF need each year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SMSFs generally prepare an operating statement and a statement of financial position each year. The fund's accounting records must support those statements and allow them to be properly audited.",
        },
      },
      {
        "@type": "Question",
        name: "Does the SMSF annual return get lodged before the audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The annual audit needs to be finalized first, and the SMSF annual return includes auditor information from the completed audit.",
        },
      },
      {
        "@type": "Question",
        name: "Do SMSF assets need to be valued every year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ATO requires SMSF assets to be reported at market value for annual accounts and reporting. The type of evidence required depends on the asset and the circumstances.",
        },
      },
      {
        "@type": "Question",
        name: "Can accounting fees be deductible to an SMSF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some accounting and tax-administration costs may be deductible, but the treatment depends on the nature of the expense. Capital establishment or structural costs are different and may not be deductible under the general rules.",
        },
      },
    ],
  };

  return (
    <main className="w-full">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 0. Dedicated Sub-Service Hero with Verbatim Lead Copy */}
      <SubServiceHero
        badge="SMSF Accounting"
        title="SMSF Accounting & Annual Accounts"
        subtitle="SMSF accounting turns the fund's bank, investment and member activity into the annual financial statements and tax information needed for compliance. Accurate records also give trustees and the independent auditor a clear view of the fund's financial position at year end."
        bodyText={
          <span>
            Financially Up provides SMSF accounting support for established funds that need annual accounts preparation, reconciliations, member reporting and SMSF tax accounting. This page focuses on the accounting work itself. For broader SMSF support, see our SMSF accountant services; for a new fund, see SMSF setup.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Discussion:
              </span>
              If your SMSF records are ready for year-end processing, or you are unsure what is missing, an initial discussion can identify the accounting records required and the next steps before audit and lodgement.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.1 • SMSF Practice"
        highlights={[
          "Annual Financial Accounts & Operating Statements",
          "Comprehensive SMSF Annual Return (SAR)",
          "Audit-Ready Workpapers Pack",
          "Market Valuation Evidence Support",
        ]}
        quickSpecs={smsfAccountingQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "SMSF Accounting Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is included in SMSF accounting? & SMSF accounts preparation */}
      <WhatIsIncludedInSmsfAccounting />

      {/* 2. SMSF financial statements and annual accounts & SMSF tax accounting */}
      <SmsfFinancialStatementsAndTaxReturn />

      {/* 3. Preparing the fund for its independent audit */}
      <PreparingFundForIndependentAudit />

      {/* 4. Common SMSF accounting issues & Records to provide */}
      <CommonSmsfAccountingIssuesAndRecords />

      {/* 5. Why choose Financially Up for SMSF accounting? */}
      <WhyChooseFinanciallyUpSmsfAcc />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about annual accounts, independent audit requirements, market valuations, and tax deductibility."
        image="/images/services/faq.webp"
        imageAlt="SMSF Accounting Frequently Asked Questions"
        items={smsfAccountingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF Accounting & Annual Accounts"
        subtitle="For SMSF accounting, annual financial statements, tax reporting and audit preparation, book an appointment with Financially Up to discuss the fund's records and year-end requirements."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="accounting" />
    </main>
  );
}
