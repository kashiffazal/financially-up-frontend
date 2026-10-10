import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenBusinessNeedsFinancialModel from "./components/WhenBusinessNeedsFinancialModel";
import WhatFinancialModellingIncludes from "./components/WhatFinancialModellingIncludes";
import ForecastInputsAndDrivers from "./components/ForecastInputsAndDrivers";
import HowWeBuildAndUseModels from "./components/HowWeBuildAndUseModels";
import InformationToPrepareModelling from "./components/InformationToPrepareModelling";
import ScopeAndProfessionalBoundariesModelling from "./components/ScopeAndProfessionalBoundariesModelling";
import RelatedServiceRibbonModelling from "./components/RelatedServiceRibbonModelling";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 3)
 */
export const metadata = {
  title: "Financial Modelling Services for Business | Financially Up",
  description:
    "Build a financial model around your business decisions. Financially Up connects forecasts, cash flow and assumptions so you can plan with clearer numbers.",
  keywords: [
    "financial modelling services",
    "business financial model",
    "three statement financial model",
    "cash flow forecasting model",
    "financial model consultant australia",
    "investment decision modelling",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/financial-modelling/",
  },
  openGraph: {
    title: "Financial Modelling Services for Business | Financially Up",
    description:
      "Build a financial model around your business decisions. Financially Up connects forecasts, cash flow and assumptions so you can plan with clearer numbers.",
    url: "https://financiallyup.com.au/services/virtual-cfo/financial-modelling/",
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
  { label: "Financial Modelling" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document
 */
const financialModellingFaqs = [
  {
    key: "1",
    label: "Is a financial model the same as a budget?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A budget sets planned income and spending, while a model can connect multiple assumptions and statements to explore the financial effect of a decision. A budget may provide a starting input.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a model tell me whether an investment will succeed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can test the financial consequences of stated assumptions, not guarantee sales, costs or future outcomes. The quality of the conclusion depends on the evidence and the risks considered.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I always need a three statement model?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A focused cash forecast may be enough for a short-term decision. A connected profit and loss, balance sheet and cash flow model is useful when the relationship among earnings, assets, debt and cash matters.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I update the model when circumstances change?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, if it is built for that purpose and the inputs are maintained. We can discuss who will update it and when the assumptions should be checked.
      </p>
    ),
  },
];

/**
 * FinancialModellingPage Component
 * ================================
 * Route: /services/virtual-cfo/financial-modelling
 * Subpage 3 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function FinancialModellingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: financialModellingFaqs.map((faq) => ({
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
        title="Financial Modelling Services for Business Decisions"
        subtitle="Connect Forecasts, Working Capital & Assumptions Before Making Major Decisions"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Financial modelling services turn assumptions about sales, costs, investment and payment timing into connected forecasts. A useful model helps you understand what a decision could mean for profit, cash and financial position. It does not predict the future with certainty; it makes the assumptions behind a plan visible and testable.
            </span>
            <span className="block mt-2">
              Financially Up helps business owners and management teams develop models for decisions such as expansion, staffing, investment or funding. We establish the question first, then build a model at a level your records and the decision can support.
            </span>
            <span className="block mt-2">
              Book an Appointment to discuss your proposed decision and the information available.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.3 • Strategic Financial Modelling"
        highlights={[
          "Traceable Inputs & Formula-Driven Architecture",
          "Integrated 3-Statement or Focused Cash Models",
          "Australia-Wide Online & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "Dynamic", label: "Scenario Drivers" },
          { value: "3-Way", label: "Integrated Statements" },
          { value: "CPA & IPA", label: "Senior Advisors" },
          { value: "10+ Years", label: "Commercial Experience" },
        ]}
      />

      {/* 1. When does a business need a financial model? */}
      <WhenBusinessNeedsFinancialModel />

      {/* 2. What does financial modelling for business include? */}
      <WhatFinancialModellingIncludes />

      {/* 3. What goes into a useful forecast? */}
      <ForecastInputsAndDrivers />

      {/* 4. How Financially Up builds and uses the model */}
      <HowWeBuildAndUseModels />

      {/* 5. What to bring to the first discussion */}
      <InformationToPrepareModelling />

      {/* 6. Service scope and professional boundaries & Why Financially Up */}
      <ScopeAndProfessionalBoundariesModelling />

      {/* 7. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about business models, budget differences, three-statement builds, and model updates."
        image="/images/services/faq.webp"
        imageAlt="Financial Modelling Services Frequently Asked Questions"
        items={financialModellingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Test the Decision Before Committing"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss the decision, the records available and the type of financial modelling services that would help you assess it."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 9. Related Service Ribbon */}
      <RelatedServiceRibbonModelling />
    </main>
  );
}
