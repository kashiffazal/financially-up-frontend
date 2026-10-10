import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenProfitabilityReviewIsUseful from "./components/WhenProfitabilityReviewIsUseful";
import FindingWhatDrivesProfit from "./components/FindingWhatDrivesProfit";
import ProfitAndCashSeparateAttention from "./components/ProfitAndCashSeparateAttention";
import ChangesAnalysisMightSupport from "./components/ChangesAnalysisMightSupport";
import TestingImprovementOptions from "./components/TestingImprovementOptions";
import WhatFinanciallyUpDoesWithYou from "./components/WhatFinanciallyUpDoesWithYou";
import FirstDiscussionAndCredentials from "./components/FirstDiscussionAndCredentials";
import ProfitabilityRelatedServicesRibbon from "./components/ProfitabilityRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 8 (8- Profitability)
 */
export const metadata = {
  title: "Profitability Consulting for Business | Financially Up",
  description:
    "Understand where profit is made and lost. Financially Up reviews margins, pricing and costs, then helps you test opportunities to improve profitability.",
  keywords: [
    "profitability consulting",
    "profit improvement consultant",
    "profitability analysis services",
    "profit margin accountant",
    "business profitability Australia",
    "small business pricing analysis",
    "cost structure review",
    "business advisory Sydney",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/profitability/",
  },
  openGraph: {
    title: "Profitability Consulting for Business | Financially Up",
    description:
      "Understand where profit is made and lost. Financially Up reviews margins, pricing and costs, then helps you test opportunities to improve profitability.",
    url: "https://financiallyup.com.au/services/business-advisory/profitability/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "Profitability" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 8: Profitability)
 */
const profitabilityFaqs = [
  {
    key: "1",
    label: "Can profitability consulting help a small business?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, if its records support an analysis suited to its size. Even a
        simple review of margins, recurring costs and pricing assumptions can
        clarify where to investigate.
      </p>
    ),
  },
  {
    key: "2",
    label: "Will lowering expenses always improve profit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Cutting a cost that supports quality, delivery or sales can harm
        the business. The expected effect and operational trade-offs need to be
        considered.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if I do not know profit by customer or job?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can start with the figures available and identify what extra cost or
        time information would make a more detailed comparison reliable.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is a profitable business necessarily cash healthy?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Profit and cash are different measures. Payment timing, inventory
        and debt obligations can create pressure even when the accounts show
        profit.
      </p>
    ),
  },
];

/**
 * Schema.org Structured Data
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Profitability Consulting and Margin Optimization",
      serviceType: "Commercial Advisory / Profitability Analysis",
      description:
        "Financially Up delivers diagnostic profitability consulting, gross and net margin reviews, pricing models, and cost optimization across Australia.",
      provider: {
        "@type": "AccountingService",
        name: "Financially Up",
        url: "https://financiallyup.com.au",
        telephone: "+61-1300-328-316",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Level 5, 100 Walker St",
          addressLocality: "North Sydney",
          addressRegion: "NSW",
          postalCode: "2060",
          addressCountry: "AU",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can profitability consulting help a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if its records support an analysis suited to its size. Even a simple review of margins, recurring costs and pricing assumptions can clarify where to investigate.",
          },
        },
        {
          "@type": "Question",
          name: "Will lowering expenses always improve profit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Cutting a cost that supports quality, delivery or sales can harm the business. The expected effect and operational trade-offs need to be considered.",
          },
        },
        {
          "@type": "Question",
          name: "What if I do not know profit by customer or job?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can start with the figures available and identify what extra cost or time information would make a more detailed comparison reliable.",
          },
        },
        {
          "@type": "Question",
          name: "Is a profitable business necessarily cash healthy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Profit and cash are different measures. Payment timing, inventory and debt obligations can create pressure even when the accounts show profit.",
          },
        },
      ],
    },
  ],
};

/**
 * Profitability Consulting Page Component
 * =======================================
 * Dedicated subpage for Pillar 12: Business Advisory
 * Route: /services/business-advisory/profitability
 */
export default function ProfitabilityPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SubServiceHero Component */}
      <SubServiceHero
        title="Profitability Consulting Grounded in Your Business Numbers"
        subtitle="Profitability Consulting"
        description={[
          "Profitability consulting helps a business understand what it earns from its work after the relevant costs are considered, then identify changes worth testing. Higher sales do not always bring higher profit. A busy product line can absorb labour, materials and overhead while contributing less than expected.",
          "Financially Up works with owners who want to see where profit is made, where it leaks away and which changes may be realistic. We start with your accounts and how the business operates, rather than assuming that cutting costs or raising prices is always the answer. Book an Appointment to discuss the profit concern and the information available.",
        ]}
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Advisory Hub"
        secondaryButtonHref="/services/business-advisory"
        badge="Commercial Profitability Analysis"
        features={[
          "Gross & Net Margin Diagnostics",
          "Pricing & Capacity Scenario Modelling",
          "Profit vs Cash Flow Separation",
          "Activity & Product Line Analysis",
        ]}
      />

      {/* Section 1: When is a profitability review useful? */}
      <WhenProfitabilityReviewIsUseful />

      {/* Section 2: How do you find what drives profit? */}
      <FindingWhatDrivesProfit />

      {/* Section 3: Profit and cash need separate attention */}
      <ProfitAndCashSeparateAttention />

      {/* Section 4: What changes might the analysis support? */}
      <ChangesAnalysisMightSupport />

      {/* Section 5: How should improvement options be tested? */}
      <TestingImprovementOptions />

      {/* Section 6: What Financially Up can do with you */}
      <WhatFinanciallyUpDoesWithYou />

      {/* Section 7: What happens in the first discussion? & Accreditation */}
      <FirstDiscussionAndCredentials />

      {/* Section 8: Related Advisory Services Ribbon */}
      <ProfitabilityRelatedServicesRibbon />

      {/* Section 9: Profitability FAQs */}
      <FaqSection
        title="Profitability FAQs"
        subtitle="Common Questions"
        description="Clear answers regarding small business margin reviews, expense reductions vs operational trade-offs, job costing gaps, and cash flow divergence."
        faqList={profitabilityFaqs}
      />

      {/* Section 10: Call to Action Banner */}
      <CallToActionBanner
        title="Understand the drivers before changing course"
        description="Book an Appointment with Financially Up to discuss the profitability question, the records available and a practical scope for analyzing and monitoring your options."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
      />
    </>
  );
}
