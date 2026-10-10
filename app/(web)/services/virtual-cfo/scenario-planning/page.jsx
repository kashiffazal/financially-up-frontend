import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsScenarioPlanning from "./components/WhatIsScenarioPlanning";
import WhenScenarioAnalysisHelps from "./components/WhenScenarioAnalysisHelps";
import WhatDoWeTestAndHow from "./components/WhatDoWeTestAndHow";
import FromNumbersToADecision from "./components/FromNumbersToADecision";
import HowFinanciallyUpCanHelpScenario from "./components/HowFinanciallyUpCanHelpScenario";
import WhatToExpectAndEngagementScope from "./components/WhatToExpectAndEngagementScope";
import RelatedServiceRibbonScenario from "./components/RelatedServiceRibbonScenario";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 4)
 */
export const metadata = {
  title: "Financial Scenario Planning Services | Financially Up",
  description:
    "Explore what different business outcomes could mean for profit and cash. Financially Up helps test assumptions, risks and practical responses before you decide.",
  keywords: [
    "financial scenario planning services",
    "business scenario analysis",
    "cash flow sensitivity analysis",
    "stress testing business finances",
    "scenario modelling australia",
    "downside cash forecast",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/scenario-planning/",
  },
  openGraph: {
    title: "Financial Scenario Planning Services | Financially Up",
    description:
      "Explore what different business outcomes could mean for profit and cash. Financially Up helps test assumptions, risks and practical responses before you decide.",
    url: "https://financiallyup.com.au/services/virtual-cfo/scenario-planning/",
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
  { label: "Scenario Planning" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document
 */
const scenarioPlanningFaqs = [
  {
    key: "1",
    label: "How many scenarios do I need?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Enough to expose the meaningful choices and risks. A few well-reasoned cases are usually more useful than many arbitrary combinations.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is scenario planning the same as a cash flow forecast?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A cash flow forecast projects cash under a particular set of assumptions. Scenario planning compares how cash and other results change when those assumptions differ.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can you calculate the chance of each outcome?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A scenario can illustrate consequences without assigning a reliable probability. Any probability would need evidence and an agreed method appropriate to the decision.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if our accounts are out of date?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can identify what needs updating and explain which scenarios can be tested responsibly with the data available. A model should not disguise uncertain records.
      </p>
    ),
  },
];

/**
 * ScenarioPlanningPage Component
 * ==============================
 * Route: /services/virtual-cfo/scenario-planning
 * Subpage 4 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ScenarioPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: scenarioPlanningFaqs.map((faq) => ({
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
        title="Financial Scenario Planning Services for Uncertain Decisions"
        subtitle="Stress-Test Assumptions & Evaluate Alternative Outcomes Before Committing"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Financial scenario planning services compare possible business outcomes and show what each could mean for profit, cash and commitments. The aim is to prepare for uncertainty: what happens if a major customer pays late, input costs rise or sales grow faster than capacity? A clear scenario helps you choose a response before pressure forces a rushed decision.
            </span>
            <span className="block mt-2">
              Financially Up works with owners and managers facing decisions where a single forecast hides important risks. We define a practical set of assumptions, model their effects and discuss actions you could take if conditions change.
            </span>
            <span className="block mt-2">
              Book an Appointment to explain the decision and the uncertainties you want to test.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.4 • Risk & Scenario Planning"
        highlights={[
          "Stress-Test High, Base & Downside Cases",
          "Working Capital & Liquidity Shock Tests",
          "Australia-Wide Online & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "Coherent", label: "Scenario Cases" },
          { value: "Actionable", label: "Trigger Points" },
          { value: "CPA & IPA", label: "Senior Advisors" },
          { value: "10+ Years", label: "Commercial Insight" },
        ]}
      />

      {/* 1. What is financial scenario planning? */}
      <WhatIsScenarioPlanning />

      {/* 2. When can scenario analysis help? */}
      <WhenScenarioAnalysisHelps />

      {/* 3. What do we test and how? */}
      <WhatDoWeTestAndHow />

      {/* 4. From numbers to a decision */}
      <FromNumbersToADecision />

      {/* 5. How Financially Up can help */}
      <HowFinanciallyUpCanHelpScenario />

      {/* 6. What to expect at your first appointment & Engagement coverage */}
      <WhatToExpectAndEngagementScope />

      {/* 7. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about scenario counts, cash flow distinctions, probability calculations, and historical records."
        image="/images/services/faq.webp"
        imageAlt="Financial Scenario Planning Frequently Asked Questions"
        items={scenarioPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Prepare for More Than One Outcome"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss your key uncertainty, the information available and a scenario planning scope that helps you decide what to do next."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 9. Related Service Ribbon */}
      <RelatedServiceRibbonScenario />
    </main>
  );
}
