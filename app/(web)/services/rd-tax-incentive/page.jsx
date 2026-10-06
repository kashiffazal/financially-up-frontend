import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatRdIncentiveInvolves from "./components/WhatRdIncentiveInvolves";
import RdTaxServicesGrid from "./components/RdTaxServicesGrid";
import CoreVsSupportingActivities from "./components/CoreVsSupportingActivities";
import WhichCostsCanBeConsidered from "./components/WhichCostsCanBeConsidered";
import WhatRecordsShouldKeep from "./components/WhatRecordsShouldKeep";
import HowFinanciallyUpHelpsRd from "./components/HowFinanciallyUpHelpsRd";
import WhatInformationNeededRd from "./components/WhatInformationNeededRd";
import WhyChooseFinanciallyUpRd from "./components/WhyChooseFinanciallyUpRd";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 15th Pillar R&D Tax Incentive.docx)
 */
export const metadata = {
  title: "R&D Tax Incentive Australia | Financially Up",
  description:
    "Understand R&D activity eligibility, records, registration deadlines and the company tax claim. Discuss your Australian R&D project with Financially Up.",
  keywords: [
    "R&D tax incentive",
    "R&D tax incentive Australia",
    "core R&D activities",
    "supporting R&D activities",
    "R&D tax offset",
    "notional deductions",
    "R&D tax claim preparation",
    "R&D tax incentive eligibility assessment",
    "AusIndustry R&D registration",
    "overseas finding R&D",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/rd-tax-incentive/",
  },
  openGraph: {
    title: "R&D Tax Incentive Australia | Financially Up",
    description:
      "Understand R&D activity eligibility, records, registration deadlines and the company tax claim. Discuss your Australian R&D project with Financially Up.",
    url: "https://financiallyup.com.au/services/rd-tax-incentive/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for R&D Tax Incentive
 */
const rdBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "R&D Tax Incentive" },
];

/**
 * 5 Practice Scope Items for R&D Tax Incentive
 */
const rdScopeItems = [
  {
    icon: "experiment",
    theme: "emerald",
    title: "Activity Registration",
    description: "Department customer portal activity registration & core/supporting tests",
    tag: "Registration",
  },
  {
    icon: "calculator",
    theme: "blue",
    title: "Notional Deductions",
    description: "Eligible staff time, contractor fees, materials & $20,000 threshold",
    tag: "Expenditure",
  },
  {
    icon: "dollar",
    theme: "amber",
    title: "Company Tax Return Claim",
    description: "ATO Company Tax Return lodgement & R&D schedule calculations",
    tag: "ATO Claim",
  },
  {
    icon: "file-done",
    theme: "purple",
    title: "Contemporaneous Records",
    description: "Documenting evidence before, during and after experimental activities",
    tag: "Evidence Trail",
  },
  {
    icon: "bank",
    theme: "teal",
    title: "Overseas Findings & Timing",
    description: "Strict year-end finding submissions, CRC & registered RSP exceptions",
    tag: "Findings",
  },
];

/**
 * Trust & Credential Verification Badges (Non-wrapping single row)
 */
const rdVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "Registered Tax Agent",
  },
  {
    icon: "team",
    label: "CPA & IPA Qualified",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Pillar 15: 1- R and D Tax Incentive)
 */
const rdFaqs = [
  {
    key: "1",
    label: "Is every innovation project eligible?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The program tests the entity, activities and expenditure against specific rules.
        Commercial novelty alone is not enough.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does registration mean the tax offset is guaranteed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Registration of activities does not by itself establish that all claimed expenditure is
        eligible or that the tax calculation is correct.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can a company claim if a project failed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially. The outcome of an eligible experiment need not be commercially successful; the
        activities and records still need to meet the rules.
      </p>
    ),
  },
  {
    key: "4",
    label: "When should we start keeping R&D records?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Before work starts and throughout the project. Dated records of the question, experiment and
        results are stronger than a later reconstruction.
      </p>
    ),
  },
];

/**
 * JSON-LD Schema for Google Search Rich Snippets
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is every innovation project eligible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The program tests the entity, activities and expenditure against specific rules. Commercial novelty alone is not enough.",
      },
    },
    {
      "@type": "Question",
      name: "Does registration mean the tax offset is guaranteed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Registration of activities does not by itself establish that all claimed expenditure is eligible or that the tax calculation is correct.",
      },
    },
    {
      "@type": "Question",
      name: "Can a company claim if a project failed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Potentially. The outcome of an eligible experiment need not be commercially successful; the activities and records still need to meet the rules.",
      },
    },
    {
      "@type": "Question",
      name: "When should we start keeping R&D records?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before work starts and throughout the project. Dated records of the question, experiment and results are stronger than a later reconstruction.",
      },
    },
  ],
};

/**
 * RdTaxIncentiveMainPage
 * ======================
 * Pillar 15: R&D Tax Incentive Australia Hub Page (/services/rd-tax-incentive/).
 *
 * Implements 100% verbatim client content from '15th Pillar R&D Tax Incentive.docx' (1- R and D Tax Incentive),
 * structured into responsive sections with strict alternating background palette:
 * - Section 1: Hero (Dark / Brand Hero with exact H1 & verbatim intro)
 * - Section 2: How does the R&D tax incentive work? (Lite Brand Gradient)
 * - Section 3: Our R&D Tax Incentive Services - 4 Sub-Service Navigation Grid (Clean White)
 * - Section 4: What kinds of work might qualify? (Lite Brand Gradient)
 * - Section 5: Which costs can be considered? (Clean White)
 * - Section 6: What records should the company keep? (Lite Brand Gradient)
 * - Section 7: How Financially Up can help (Clean White)
 * - Section 8: What should you bring to a first discussion? (Lite Brand Gradient)
 * - Section 9: Why Choose Financially Up? (Clean White)
 * - Section 10: Frequently Asked Questions (Lite Brand Gradient)
 * - Section 11: Discuss your project before the deadline - Pre-Footer CTA (Dark Brand Accent)
 */
export default function RdTaxIncentiveMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship ServiceHero with Exact H1 & Verbatim Lead Text */}
      <ServiceHero
        breadcrumbs={rdBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "Registered Tax Agents • Innovation & R&D Review • Australia-Wide",
        }}
        title="R&D Tax Incentive"
        titleHighlight="Advice for Australian Businesses"
        description={
          <p className="m-0">
            The R&amp;D tax incentive is an Australian Government program that may provide an
            eligible company with a tax offset for qualifying research and development expenditure.
            It is designed around specific activities and evidence, not simply the fact that a
            business created something new or spent money on innovation. The company must assess
            eligibility, register activities and substantiate its tax claim.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up helps businesses understand the financial and tax work involved and
            coordinate an appropriate review of their projects and records. Book an Appointment to
            discuss the company, the work undertaken and where you are in the application process. We
            can agree which eligibility and claim preparation services are needed before you commit
            to further work.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Discuss your Australian R&amp;D project, contemporaneous records, and statutory deadlines
            with Financially Up.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#rd-services-overview",
        }}
        supportingText="Registered tax agent review of R&D tax offset calculations and Australian company tax returns."
        scopeTag="R&D Practice Scope Overview"
        scopeTitle="R&D Tax Incentive Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={rdScopeItems}
        verificationBadges={rdVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="R&D Tax Incentive Advice for Australian Businesses"
      />

      {/* 2. How does the R&D tax incentive work? (Lite Brand Gradient) */}
      <WhatRdIncentiveInvolves />

      {/* 3. Our R&D Tax Incentive Services - 4 Card Navigation Grid (Clean White) */}
      <RdTaxServicesGrid />

      {/* 4. What kinds of work might qualify? (Lite Brand Gradient) */}
      <CoreVsSupportingActivities />

      {/* 5. Which costs can be considered? (Clean White) */}
      <WhichCostsCanBeConsidered />

      {/* 6. What records should the company keep? (Lite Brand Gradient) */}
      <WhatRecordsShouldKeep />

      {/* 7. How Financially Up can help (Clean White) */}
      <HowFinanciallyUpHelpsRd />

      {/* 8. What should you bring to a first discussion? (Lite Brand Gradient) */}
      <WhatInformationNeededRd />

      {/* 9. Why Choose Financially Up? (Clean White) */}
      <WhyChooseFinanciallyUpRd />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="R&D tax incentive FAQs"
        subtitle="Common questions about innovation eligibility, registration vs offset guarantees, failed project claims, and record timing."
        image="/images/services/faq.webp"
        imageAlt="R&D Tax Incentive Frequently Asked Questions"
        items={rdFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) with Exact Document Verbatim Text */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="Discuss your project before the deadline"
        subtitle="Book an Appointment with Financially Up to review the project, records and registration timing and agree the appropriate scope for R&D tax incentive assistance."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
