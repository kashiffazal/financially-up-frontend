import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatSmsfPropertyAccountantDoes from "./components/WhatSmsfPropertyAccountantDoes";
import SmsfPropertyRulesAndRestrictions from "./components/SmsfPropertyRulesAndRestrictions";
import AnnualPropertyAccountingAndTaxWork from "./components/AnnualPropertyAccountingAndTaxWork";
import SmsfPropertyTaxReportingAndTransactions from "./components/SmsfPropertyTaxReportingAndTransactions";
import PropertyRecordsChecklistAndSupport from "./components/PropertyRecordsChecklistAndSupport";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Property Accountant & Accounting | Financially Up",
  description:
    "SMSF property accountant support for accounting, tax reporting, valuations and compliance. Practical help for SMSF property trustees Australia-wide.",
  keywords: [
    "SMSF property accountant",
    "SMSF property accounting",
    "SMSF property tax return",
    "business real property SMSF",
    "SMSF property valuation",
    "SMSF residential property rules",
    "superannuation property accounting",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/property/",
  },
  openGraph: {
    title: "SMSF Property Accountant & Accounting | Financially Up",
    description:
      "SMSF property accountant support for accounting, tax reporting, valuations and compliance. Practical help for SMSF property trustees Australia-wide.",
    url: "https://financiallyup.com.au/services/smsf/property/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the SMSF hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SMSF", href: "/services/smsf" },
  { label: "SMSF Property" },
];

/**
 * 6 Quick Specifications for SMSF Property
 */
const smsfPropertyQuickSpecs = [
  {
    icon: "home",
    label: "Property Types",
    value: "Commercial business real property & arm's-length third-party residential property",
  },
  {
    icon: "team",
    label: "Related Party Rules",
    value: "Residential acquisition from relatives prohibited; commercial business real property permitted",
  },
  {
    icon: "lineChart",
    label: "Annual Valuation",
    value: "Objective market value evidence required for 30 June reporting and independent audit",
  },
  {
    icon: "file",
    label: "Tax Deductibility",
    value: "Division 43 capital works, Division 40 depreciation schedules & expense classification",
  },
  {
    icon: "bank",
    label: "LRBA Legislation",
    value: "New borrowings from 10 Aug 2026 restricted to business real property only",
  },
  {
    icon: "safety",
    label: "Audit Assurance",
    value: "Full workpaper file compiled for independent ASIC-registered approved SMSF auditor",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const smsfPropertyFaqs = [
  {
    key: "1",
    label: "Can my SMSF buy residential property from me or a relative?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally no. An SMSF is restricted from acquiring assets from related parties unless a specific exception applies. Residential property ordinarily does not satisfy the business real property exception. The transaction should be checked before any contract is signed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can my business rent commercial property from my SMSF?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may be possible if the property qualifies as business real property and the lease complies with the relevant rules, including arm&apos;s-length and market-value requirements. The facts and documents should be reviewed before relying on this treatment.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does an SMSF property need a valuation every year?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The property must be reported at market value each year in the fund&apos;s accounts and statements. Trustees need objective, supportable evidence for the value and should reassess whether earlier valuation evidence remains suitable.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does Financially Up perform the SMSF audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can prepare the accounting records and audit file. The annual audit must be completed independently by an approved SMSF auditor who meets the applicable independence requirements.
      </p>
    ),
  },
];

/**
 * SmsfPropertySubpage Component
 * ==============================
 * Route: /services/smsf/property
 * Pillar 9.3: SMSF Property Accountant & Accounting Services (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfPropertySubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my SMSF buy residential property from me or a relative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally no. An SMSF is restricted from acquiring assets from related parties unless a specific exception applies. Residential property ordinarily does not satisfy the business real property exception. The transaction should be checked before any contract is signed.",
        },
      },
      {
        "@type": "Question",
        name: "Can my business rent commercial property from my SMSF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It may be possible if the property qualifies as business real property and the lease complies with the relevant rules, including arm's-length and market-value requirements. The facts and documents should be reviewed before relying on this treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Does an SMSF property need a valuation every year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The property must be reported at market value each year in the fund's accounts and statements. Trustees need objective, supportable evidence for the value and should reassess whether earlier valuation evidence remains suitable.",
        },
      },
      {
        "@type": "Question",
        name: "Does Financially Up perform the SMSF audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Financially Up can prepare the accounting records and audit file. The annual audit must be completed independently by an approved SMSF auditor who meets the applicable independence requirements.",
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
        badge="SMSF Property"
        title="SMSF Property Accountant and Accounting Services"
        subtitle="Property held through a self-managed super fund brings together property records, superannuation rules, tax reporting, annual valuation and audit requirements. An SMSF property accountant helps trustees record the property correctly and prepare reliable information for the fund's financial statements, independent audit and SMSF annual return."
        bodyText={
          <span>
            Financially Up Pty Ltd provides SMSF property accounting, tax-return preparation and compliance support Australia-wide. We prepare year-end schedules and identify matters requiring separately scoped tax, legal, lending or financial product advice. We do not recommend that you buy, sell or hold a particular property or financial product.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Appointment:
              </span>
              If your fund owns property, is preparing to acquire property or has records that need to be brought up to date, the first appointment can clarify the relevant records, service scope and next steps.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.3 • SMSF Practice"
        highlights={[
          "Residential vs Business Real Property Review",
          "Rental Income, Expenses & Depreciation Schedules",
          "30 June Objective Market Valuation Collateral",
          "Integrated SMSF Annual Return (SAR) Reporting",
        ]}
        quickSpecs={smsfPropertyQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What does an SMSF property accountant do? */}
      <WhatSmsfPropertyAccountantDoes />

      {/* 2. SMSF property rules trustees need to consider */}
      <SmsfPropertyRulesAndRestrictions />

      {/* 3. Annual SMSF property accounting and tax work */}
      <AnnualPropertyAccountingAndTaxWork />

      {/* 4. How is SMSF property reported for tax? & Buying, selling or changing property */}
      <SmsfPropertyTaxReportingAndTransactions />

      {/* 5. Records to keep, How Financially Up can help & Why choose us */}
      <PropertyRecordsChecklistAndSupport />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about related-party property acquisitions, commercial leasing to member businesses, annual valuations, and independent audits."
        image="/images/services/faq.webp"
        imageAlt="SMSF Property Accounting Frequently Asked Questions"
        items={smsfPropertyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF Property Accounting"
        subtitle="Book an appointment to discuss the fund's property records, annual accounting position, audit requirements and the work needed next."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="property" />
    </main>
  );
}
