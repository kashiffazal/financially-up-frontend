import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import ThreePartsOfThreeWayForecast from "./components/ThreePartsOfThreeWayForecast";
import WhenIntegratedForecastingUseful from "./components/WhenIntegratedForecastingUseful";
import HowThreeWayForecastIsBuilt from "./components/HowThreeWayForecastIsBuilt";
import WhatForecastHelpsYouDecide from "./components/WhatForecastHelpsYouDecide";
import HowWeHelpAndEngagementScopeThreeWay from "./components/HowWeHelpAndEngagementScopeThreeWay";
import WhatToBringThreeWayForecasting from "./components/WhatToBringThreeWayForecasting";
import RelatedServiceRibbonThreeWay from "./components/RelatedServiceRibbonThreeWay";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 7)
 */
export const metadata = {
  title: "Three Way Financial Forecasting | Financially Up",
  description:
    "See how future profit, cash and financial position fit together. Financially Up builds connected forecasts around your business assumptions and decisions.",
  keywords: [
    "three way financial forecasting",
    "three statement financial model",
    "integrated cash flow forecast",
    "balance sheet forecasting australia",
    "three way forecast small business",
    "bank finance forecasting",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/three-way-forecasting/",
  },
  openGraph: {
    title: "Three Way Financial Forecasting | Financially Up",
    description:
      "See how future profit, cash and financial position fit together. Financially Up builds connected forecasts around your business assumptions and decisions.",
    url: "https://financiallyup.com.au/services/virtual-cfo/three-way-forecasting/",
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
  { label: "Virtual CFO", href: "/services/virtual-cfo" },
  { label: "Three Way Forecasting" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document
 */
const threeWayForecastingFaqs = [
  {
    key: "1",
    label: "Why is a profit forecast alone insufficient?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Profit does not show when customers pay, when stock is bought or when loan principal must be repaid. An integrated forecast shows how those movements affect cash and the balance sheet.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is a three way cash flow forecast a guarantee of cash available?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. It projects cash from stated assumptions. Collections, costs, timing and finance arrangements may differ from the forecast.
      </p>
    ),
  },
  {
    key: "3",
    label: "How often should a three way forecast be updated?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Update it when actual results or important assumptions change, at a frequency suited to the decision. A business with tight cash may need more frequent review.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can it support a funding application?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may form part of the supporting information, subject to the lender's requirements and the quality of the underlying data. The lender decides whether finance is offered.
      </p>
    ),
  },
];

/**
 * ThreeWayForecastingPage Component
 * =================================
 * Route: /services/virtual-cfo/three-way-forecasting
 * Subpage 7 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ThreeWayForecastingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: threeWayForecastingFaqs.map((faq) => ({
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
        title="Three Way Financial Forecasting for Business Planning"
        subtitle="Integrated Profit & Loss, Balance Sheet, and Cash Flow Projections"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Three way financial forecasting connects a projected profit and loss statement, balance sheet and cash flow statement. It shows how a plan may affect earnings, the assets and liabilities the business holds, and the cash available to meet commitments. This matters when a profitable-looking plan could still create a funding gap.
            </span>
            <span className="block mt-2">
              Financially Up works with businesses planning growth, capital purchases, funding or a change in operations. We build an agreed forecast around the decision and the records available, then explain which results depend most on assumptions.
            </span>
            <span className="block mt-2">
              Book an Appointment to discuss your planning question and whether an integrated forecast is the right tool.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.7 • Integrated Financial Forecasting"
        highlights={[
          "Interconnected Three-Statement Modeling",
          "Working Capital & Debt Cash Synchronization",
          "Australia-Wide Online & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "3-Statement", label: "Integrated Model" },
          { value: "Funding", label: "Readiness Focus" },
          { value: "CPA & IPA", label: "Senior Advisors" },
          { value: "10+ Years", label: "Financial Rigor" },
        ]}
      />

      {/* 1. What are the three parts of a three way forecast? */}
      <ThreePartsOfThreeWayForecast />

      {/* 2. When is integrated forecasting useful? */}
      <WhenIntegratedForecastingUseful />

      {/* 3. How is the forecast built? */}
      <HowThreeWayForecastIsBuilt />

      {/* 4. What does the forecast help you decide? */}
      <WhatForecastHelpsYouDecide />

      {/* 5. How Financially Up can help & Professional boundaries */}
      <HowWeHelpAndEngagementScopeThreeWay />

      {/* 6. What to bring to the first discussion */}
      <WhatToBringThreeWayForecasting />

      {/* 7. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about three-way forecasting, profit differences, cash guarantees, and funding applications."
        image="/images/services/faq.webp"
        imageAlt="Three Way Financial Forecasting Frequently Asked Questions"
        items={threeWayForecastingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="See the Full Effect of Your Plan"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss the decision, available records and whether three way financial forecasting would provide the connected view you need."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 9. Related Service Ribbon */}
      <RelatedServiceRibbonThreeWay />
    </main>
  );
}
