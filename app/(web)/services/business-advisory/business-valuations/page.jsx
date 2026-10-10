import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenBusinessValuationIsNeeded from "./components/WhenBusinessValuationIsNeeded";
import HowIsABusinessValued from "./components/HowIsABusinessValued";
import WhatAffectsValueBeyondAccounts from "./components/WhatAffectsValueBeyondAccounts";
import WhichDocumentsAreUsefulValuation from "./components/WhichDocumentsAreUsefulValuation";
import UnderstandingValuationScope from "./components/UnderstandingValuationScope";
import ValueAndTaxConnectedDistinct from "./components/ValueAndTaxConnectedDistinct";
import WhyChooseFinanciallyUpValuation from "./components/WhyChooseFinanciallyUpValuation";
import ValuationsRelatedServicesRibbon from "./components/ValuationsRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 5 (5- Business Valuations)
 */
export const metadata = {
  title: "Business Valuation Services | Financially Up",
  description:
    "Need to understand what a business may be worth? Financially Up reviews financial performance, assets and valuation assumptions for informed decisions.",
  keywords: [
    "business valuation services",
    "business valuation accountant",
    "small business valuation Australia",
    "business worth assessment",
    "earnings multiple valuation",
    "commercial planning valuation",
    "business advisory Australia",
    "due diligence valuation",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/business-valuations/",
  },
  openGraph: {
    title: "Business Valuation Services | Financially Up",
    description:
      "Need to understand what a business may be worth? Financially Up reviews financial performance, assets and valuation assumptions for informed decisions.",
    url: "https://financiallyup.com.au/services/business-advisory/business-valuations/",
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
  { label: "Business Valuations" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 5: Business Valuations)
 */
const valuationFaqs = [
  {
    key: "1",
    label: "Can I value a business using a profit multiple?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A multiple can be one input, but it needs a supportable earnings figure
        and evidence that the multiple fits the business and transaction. A
        generic industry number is not a valuation on its own.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is goodwill included?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Goodwill may be part of an overall business value, depending on the
        method and what is being transferred. It should not be added again if
        already reflected in an earnings-based calculation.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need a formal independent valuation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        That depends on the purpose and the party relying on it. Tell us whether
        the work is for planning, a buyer, a lender, a legal dispute or a tax
        requirement so the appropriate scope and specialist can be identified.
      </p>
    ),
  },
  {
    key: "4",
    label: "Will a valuation tell me the final sale price?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A negotiated price also reflects buyer demand, deal terms, financing
        and due diligence findings. The valuation provides a reasoned basis for
        discussion.
      </p>
    ),
  },
];

/**
 * BusinessValuationsSubpage Component
 * ===================================
 * Route: /services/business-advisory/business-valuations
 * Pillar 12.4: Business Valuation Services (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessValuationsSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: valuationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.children.props.children,
      },
    })),
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
        title="Business Valuation Services"
        subtitle="Evidence-Based Commercial Value Reviews, Normalised Earnings & Transaction Context"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An asking price is not the same as a supported business value. The
              figure depends on what is being valued, the reason for the
              valuation, the financial evidence, future prospects and the terms
              of a proposed transaction. A business that is profitable can
              still be difficult to sell at the price its owner expects.
            </span>
            <span className="block mt-2">
              Financially Up provides business valuation services within an
              agreed scope to help owners and prospective buyers understand the
              numbers and assumptions behind a value. We begin by clarifying the
              purpose. A preliminary commercial estimate for planning differs
              from a formal report required for litigation, tax, a shareholder
              dispute or an external lender.
            </span>
            <span className="block mt-2 text-xs font-medium text-emerald-800 dark:text-emerald-300">
              Book an Appointment to discuss what the valuation needs to
              support.
            </span>
          </span>
        }
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 12.4 • Business Valuation & Equity"
        highlights={[
          "Commercial Planning & Negotiation Support",
          "Normalised Earnings & Asset Adjustments",
          "100% Online or In-Person Consultations",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Commercial Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. When Might You Need a Business Valuation? */}
      <WhenBusinessValuationIsNeeded />

      {/* 2. How is a Business Valued? */}
      <HowIsABusinessValued />

      {/* 3. What Affects the Value Beyond the Accounts? */}
      <WhatAffectsValueBeyondAccounts />

      {/* 4. Which Documents Are Useful? */}
      <WhichDocumentsAreUsefulValuation />

      {/* 5. Understanding the Scope of Our Service */}
      <UnderstandingValuationScope />

      {/* 6. Value and Tax are Connected but Distinct */}
      <ValueAndTaxConnectedDistinct />

      {/* 7. Why Choose Financially Up for a Business Valuation? */}
      <WhyChooseFinanciallyUpValuation />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about profit multiples, goodwill inclusions, formal independent reports, and final negotiated sale prices."
        image="/images/services/faq.webp"
        imageAlt="Business Valuation Frequently Asked Questions"
        items={valuationFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Start with the Purpose of the Valuation"
        title="Book an Appointment"
        subtitle="Bring recent financial information and explain the decision the valuation must support. Financially Up can identify the appropriate scope, records and next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Business Advisory Services"
        secondaryButtonHref="/services/business-advisory"
      />

      {/* 10. Related Services Ribbon (Verbatim cross-links) */}
      <ValuationsRelatedServicesRibbon />
    </main>
  );
}
