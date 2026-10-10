import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAreOutsourcedCfoServices from "./components/WhatAreOutsourcedCfoServices";
import WhenCfoOutsourcingMakesSense from "./components/WhenCfoOutsourcingMakesSense";
import MonthlyFinanceCycleSteps from "./components/MonthlyFinanceCycleSteps";
import ForecastingAndScenarioAnalysis from "./components/ForecastingAndScenarioAnalysis";
import OutsourcedCfoVsBookkeeping from "./components/OutsourcedCfoVsBookkeeping";
import OutsourcedCfoScopeResponsibilities from "./components/OutsourcedCfoScopeResponsibilities";
import InformationToPrepareCfo from "./components/InformationToPrepareCfo";
import WhyChooseFinanciallyUpCfoSub from "./components/WhyChooseFinanciallyUpCfoSub";
import RelatedServiceRibbonCfo from "./components/RelatedServiceRibbonCfo";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 1)
 */
export const metadata = {
  title: "Outsourced CFO Services Australia | Financially Up",
  description:
    "Outsourced CFO services for growing businesses. Financially Up supports reporting, forecasting, cash flow, budgets and commercially focused finance decisions.",
  keywords: [
    "outsourced cfo services",
    "virtual cfo services",
    "fractional cfo australia",
    "external cfo for small business",
    "cfo advisory services",
    "financial management retainer",
    "sme cfo support",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/virtual-cfo-services/",
  },
  openGraph: {
    title: "Outsourced CFO Services Australia | Financially Up",
    description:
      "Outsourced CFO services for growing businesses. Financially Up supports reporting, forecasting, cash flow, budgets and commercially focused finance decisions.",
    url: "https://financiallyup.com.au/services/virtual-cfo/virtual-cfo-services/",
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
  { label: "Outsourced CFO Services" },
];

/**
 * 3 Exact Frequently Asked Questions from Client Document
 */
const outsourcedCfoFaqs = [
  {
    key: "1",
    label: "What is the difference between a fractional CFO and an outsourced CFO?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The terms are often used for similar arrangements. Both generally describe senior finance support delivered without a full-time in-house CFO. The important issue is the agreed scope, frequency and responsibility rather than the label.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can outsourced CFO services include bookkeeping?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They can be coordinated, but bookkeeping and CFO work are different functions. The service scope should make clear who is responsible for transaction processing, reconciliations, monthly close, reporting and analysis.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can an outsourced CFO help prepare reports for a lender or board?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, where the required reporting is within the agreed accounting and business advisory scope. Any formal assurance, audit or regulated financial product advice is separate and may require another appropriately qualified professional.
      </p>
    ),
  },
];

/**
 * OutsourcedCfoServicesPage Component
 * ===================================
 * Route: /services/virtual-cfo/virtual-cfo-services
 * Subpage 1 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function OutsourcedCfoServicesPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: outsourcedCfoFaqs.map((faq) => ({
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
        title="Outsourced CFO Services"
        subtitle="Senior Finance Leadership & Management Rhythm for Growing Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Outsourced CFO services give a business access to senior finance capability through an external provider rather than a permanent in-house CFO. The service can cover a recurring package of management reporting, forecasting, cash flow review, budgeting and financial analysis, with the level of involvement matched to the size and complexity of the business.
            </span>
            <span className="block mt-2">
              Financially Up provides outsourced CFO support for owners and management teams that need more than bookkeeping and annual compliance. The objective is to create a dependable finance function that produces timely information, explains what the numbers mean and supports the decisions management is responsible for making.
            </span>
            <span className="block mt-2">
              If your business has outgrown ad hoc financial reporting, an initial discussion can help define the reporting cycle, responsibilities and level of CFO support you need.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.1 • Executive Finance Advisory"
        highlights={[
          "Structured Monthly Finance Cycles",
          "Registered Tax Agent & CPA/IPA Team",
          "100% Online Australia-Wide & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Financial Leadership" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Custom Rhythm", label: "Monthly / Quarterly" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What are outsourced CFO services? */}
      <WhatAreOutsourcedCfoServices />

      {/* 2. When does CFO outsourcing make sense? */}
      <WhenCfoOutsourcingMakesSense />

      {/* 3. A structured monthly finance cycle */}
      <MonthlyFinanceCycleSteps />

      {/* 4. Forecasting and scenario analysis */}
      <ForecastingAndScenarioAnalysis />

      {/* 5. Outsourced CFO versus bookkeeping and year-end accounting */}
      <OutsourcedCfoVsBookkeeping />

      {/* 6. What Financially Up can help with & Responsibilities and engagement scope */}
      <OutsourcedCfoScopeResponsibilities />

      {/* 7. Information to prepare */}
      <InformationToPrepareCfo />

      {/* 8. Why Financially Up? */}
      <WhyChooseFinanciallyUpCfoSub />

      {/* 9. Frequently Asked Questions (Verbatim 3 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about outsourced CFO scopes, bookkeeping coordination, and reporting rhythms."
        image="/images/services/faq.webp"
        imageAlt="Outsourced CFO Services Frequently Asked Questions"
        items={outsourcedCfoFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready to Scale Your Finance Function?"
        title="Book an Appointment"
        subtitle="If you want a more structured finance function without adding a full-time CFO, book an appointment to discuss an outsourced CFO service that matches your reporting and decision needs."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedServiceRibbonCfo />
    </main>
  );
}
