import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhatDoesRestructuringInvolve from "./components/WhatDoesRestructuringInvolve";
import RestructureTaxAndRegistrations from "./components/RestructureTaxAndRegistrations";
import HowRestructureAccountantHelps from "./components/HowRestructureAccountantHelps";
import RestructureProcessAndInfoNeeded from "./components/RestructureProcessAndInfoNeeded";
import WhyChooseFinanciallyUpRestructure from "./components/WhyChooseFinanciallyUpRestructure";

export const metadata = {
  title: "Business Restructuring Services Australia | Financially Up",
  description:
    "Business restructuring services Australia for owners changing structure, ownership or operations, with tax, accounting and registration support.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/business-restructure/",
  },
  openGraph: {
    title: "Business Restructuring Services Australia | Financially Up",
    description:
      "Business restructuring services Australia for owners changing structure, ownership or operations, with tax, accounting and registration support.",
    url: "https://financiallyup.com.au/services/business-structures/business-restructure/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "Business Restructure" },
];

const businessRestructureFaqs = [
  {
    question: "Can a restructure trigger capital gains tax?",
    answer:
      "Yes, transferring business assets or ownership interests can trigger CGT events. A roll-over or concession may be available in some circumstances, but eligibility depends on the specific rules and facts. The position should be reviewed before the transfer.",
  },
  {
    question: "Do I need a new ABN when changing structure?",
    answer:
      "Generally, a new legal entity needs its own ABN. For example, moving from sole trader to a newly registered company means the company needs its own ABN. Some partnership changes can be more fact-dependent, so the registration position should be checked rather than assumed.",
  },
];

export default function BusinessRestructurePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Restructuring Services Australia",
    description:
      "Professional business restructuring services in Australia assisting owners with entity transitions, capital gains tax roll-overs, registrations, and opening balance reconciliation.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Business Restructuring & Structural Transition",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100">
        {/* Hero Section */}
        <SubServiceHero
          parentService={{
            label: "Business Structures Hub",
            href: "/services/business-structures",
          }}
          breadcrumbs={breadcrumbs}
          badgeText="Commercial Restructuring & Entity Transition"
          title="Business Restructuring Services Australia"
          description={[
            "Business restructuring services help business owners move from an existing structure, ownership arrangement or operating setup to a new one while considering the tax, accounting, registration and implementation consequences. A restructure may involve moving from sole trader to company, changing a partnership, introducing a new entity, transferring business assets or reorganizing ownership as the business grows.",
            "This service concerns changes to a business's entity, ownership or operating structure. It is not the formal small business restructuring process under Part 5.3B of the Corporations Act for an eligible company in financial distress, which involves a registered restructuring practitioner and may require insolvency and legal advice.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="If you are considering a restructure, an initial discussion can help map the current structure, the proposed change, likely tax and accounting issues, registrations and the professional work required before implementation."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="business-restructure" />

        {/* Section 1: What does business restructuring involve? & Triggers */}
        <WhatDoesRestructuringInvolve />

        {/* Section 2: Tax implications, GST, state taxes & practical registrations */}
        <RestructureTaxAndRegistrations />

        {/* Section 3: How a business restructure accountant can help */}
        <HowRestructureAccountantHelps />

        {/* Section 4: Practical restructure process & Information needed */}
        <RestructureProcessAndInfoNeeded />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpRestructure />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about restructuring Australian business entities, tax roll-overs, and registrations."
          faqs={businessRestructureFaqs}
        />

        {/* Section 7: CTA Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          subtitle="If you are planning to restructure a business, book an appointment with Financially Up to discuss the current structure, proposed change, tax and accounting implications, registrations and the professional work needed before implementation."
          buttonText="Book an Appointment"
          buttonLink="/contact"
        />
      </main>
    </>
  );
}
