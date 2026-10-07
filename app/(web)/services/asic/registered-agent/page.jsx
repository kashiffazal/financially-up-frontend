import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAsicRegisteredAgentDoes from "./components/WhatAsicRegisteredAgentDoes";
import AnnualStatementsAndAgentVsOneOff from "./components/AnnualStatementsAndAgentVsOneOff";
import WhyUseRegisteredAgent from "./components/WhyUseRegisteredAgent";
import WhatWeNeedAndHowWeHelp from "./components/WhatWeNeedAndHowWeHelp";
import AsicRegisteredAgentRelatedRibbon from "./components/AsicRegisteredAgentRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 / Pillar 7.1)
 */
export const metadata = {
  title: "ASIC Registered Agent Service Australia | Financially Up",
  description:
    "ASIC registered agent service for companies needing support with ASIC correspondence, annual reviews, company updates and routine corporate lodgements.",
  keywords: [
    "ASIC registered agent",
    "ASIC registered agent Australia",
    "Form 362 registered agent",
    "ASIC corporate secretarial",
    "ASIC annual review",
    "ASIC agent portal",
    "company compliance agent",
    "ASIC corporate governance",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/registered-agent/",
  },
  openGraph: {
    title: "ASIC Registered Agent Service Australia | Financially Up",
    description:
      "ASIC registered agent service for companies needing support with ASIC correspondence, annual reviews, company updates and routine corporate lodgements.",
    url: "https://financiallyup.com.au/services/asic/registered-agent/",
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
  { label: "ASIC Compliance", href: "/services/asic" },
  { label: "ASIC Registered Agent" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const registeredAgentFaqs = [
  {
    key: "1",
    label: "What is an ASIC registered agent?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An ASIC registered agent is a person or business registered with ASIC that a company can appoint to perform certain ASIC-related tasks on its behalf, including accessing company details and completing common lodgements.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does appointing a registered agent make the agent responsible for the company?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Directors and other officeholders retain their own legal duties. The agent can assist with administration and lodgements, but the company remains responsible for valid decisions, accurate information and compliance with applicable obligations.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can an ASIC registered agent receive the company annual statement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. ASIC states that where a registered agent is appointed, the agent address has first priority in its delivery order for the company’s annual statement.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a registered agent change company details with ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A registered agent can complete common ASIC lodgements for companies they represent, provided the company has properly authorised the arrangement and supplied the information required for the filing.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is a registered agent the same as a company secretary?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A registered agent is an external ASIC administration role. A company secretary, where appointed, is an officeholder of the company and has separate responsibilities.
      </p>
    ),
  },
];

/**
 * AsicRegisteredAgentPage Component
 * =================================
 * Route: /services/asic/registered-agent
 * Pillar 7.1: ASIC Registered Agent Service (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AsicRegisteredAgentPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: registeredAgentFaqs.map((faq) => ({
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
        title="ASIC Registered Agent Service for Australian Companies"
        subtitle="Official ASIC Representation, Portal Lodgements & Corporate Administration Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An ASIC registered agent is appointed by a company to carry out certain ASIC-related tasks on its behalf. For directors who do not want corporate correspondence and routine lodgements managed ad hoc, a registered agent service can provide a consistent administrative contact for annual statements, company updates and common ASIC filings.
            </span>
            <span className="block mt-2">
              Financially Up provides an ASIC registered agent service for companies that want their ASIC administration coordinated with their accounting and tax records. The service is administrative and compliance-focused: appointing an agent does not transfer directors’ legal duties or responsibility for the accuracy of company information.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.1 • Corporate Secretarial & Governance"
        highlights={[
          "Official ASIC Correspondence Address",
          "Form 362 Agent Appointment Process",
          "Agent Portal Direct Lodgements",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "ASIC Agent", label: "Registered Portal Access" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Does an ASIC Registered Agent Do? */}
      <WhatAsicRegisteredAgentDoes />

      {/* 2. Annual Statements & Registered Agent vs One-off Lodgements */}
      <AnnualStatementsAndAgentVsOneOff />

      {/* 3. Why Use a Registered Agent & Timely Instructions */}
      <WhyUseRegisteredAgent />

      {/* 4. What We May Need to Get Started & How Financially Up Can Help */}
      <WhatWeNeedAndHowWeHelp />

      {/* 5. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about ASIC registered agent representation, director responsibilities, annual review delivery priority, and portal lodgements."
        image="/images/services/faq.webp"
        imageAlt="ASIC Registered Agent Frequently Asked Questions"
        items={registeredAgentFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you want a consistent point of contact for ASIC correspondence and company administration, book an appointment to discuss appointing Financially Up as your registered agent and the ongoing service scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 7. Related Service Ribbon linking back to Pillar Hub */}
      <AsicRegisteredAgentRelatedRibbon />
    </main>
  );
}
