import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAtoRepresentationIncludes from "./components/WhatAtoRepresentationIncludes";
import WhenToSeekTaxAgentRepresentation from "./components/WhenToSeekTaxAgentRepresentation";
import HowAuthorityToRepresentWorks from "./components/HowAuthorityToRepresentWorks";
import WhatRepresentativeAccountantCanDo from "./components/WhatRepresentativeAccountantCanDo";
import RepresentationDuringReviewsAuditsDisputes from "./components/RepresentationDuringReviewsAuditsDisputes";
import WhatInformationToHaveReadyRepresentation from "./components/WhatInformationToHaveReadyRepresentation";
import WhyChooseFinanciallyUpRepresentation from "./components/WhyChooseFinanciallyUpRepresentation";
import RelatedAtoRepresentationRibbon from "./components/RelatedAtoRepresentationRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 10 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Representation Services Australia | Financially Up",
  description:
    "ATO representation services for individuals and businesses needing a registered tax agent to communicate with the ATO and manage complex ATO tax matters.",
  keywords: [
    "ATO representation services",
    "tax agent ATO representation",
    "accountant deal with ATO",
    "ATO client-to-agent linking",
    "registered tax agent representation",
    "ATO tax dispute representation",
    "ATO authority to act",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/ato-representation/",
  },
  openGraph: {
    title: "ATO Representation Services Australia | Financially Up",
    description:
      "ATO representation services for individuals and businesses needing a registered tax agent to communicate with the ATO and manage complex ATO tax matters.",
    url: "https://financiallyup.com.au/services/ato-help/ato-representation/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ATO Help", href: "/services/ato-help" },
  { label: "ATO Representation" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 10)
 */
const representationFaqs = [
  {
    key: "1",
    label: "Can a registered tax agent speak to the ATO for me?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, where the agent has the required authority for the relevant account or obligation. Depending on the client type, an agent nomination or client-to-agent linking step may also be required before a new registered agent can access and act through ATO online services.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can Financially Up represent me if I already have another accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the matter and the existing agent relationships. A client can change registered agents, and in some circumstances representation may be limited to a particular obligation. The current authorizations should be reviewed before changes are made so access is not disrupted unnecessarily.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does ATO representation include preparing overdue returns or BAS?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Representation covers agreed dealings with the ATO. Preparing overdue returns, BAS, financial statements or other records may be a separate service if those documents are needed to resolve the issue.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a tax agent guarantee that the ATO will accept a request?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The ATO makes its own decisions under the tax law and administrative policies. Professional representation can help ensure the facts, records and request are presented clearly, but it cannot guarantee a particular outcome.
      </p>
    ),
  },
];

/**
 * AtoRepresentationPage Component
 * ===============================
 * Route: /services/ato-help/ato-representation
 * Pillar 11.9: ATO Representation (Page 10 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AtoRepresentationPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: representationFaqs.map((faq) => ({
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
        title="ATO Representation Services"
        subtitle="Authorised Registered Tax Agent Representation, Client-to-Agent Linking & Structured ATO Liaison"
        description={
          <span className="space-y-3 block">
            <span className="block">
              ATO representation services allow an authorized registered tax agent to deal with the Australian Taxation Office on your behalf for agreed tax matters. This can be useful when an ATO issue is taking time, the correspondence is technical, multiple lodgments or accounts are involved, or you want a professional to coordinate the next steps and communicate consistently with the ATO.
            </span>
            <span className="block mt-2">
              Financially Up can assist individuals, sole traders, companies, trusts and other business clients with ATO tax agent representation within the scope of our engagement. We can review the issue, identify the records or lodgments that need attention, communicate with the ATO where authorized, and help keep the matter moving. Complex litigation, formal legal representation and matters outside registered tax-agent scope may require a lawyer or another specialist.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.9 • Statutory Tax Agent Representation"
        highlights={[
          "Registered Tax Agent #26234055",
          "Client-to-Agent Linking Portal Support",
          "Direct Registered-Agent Communication Channels",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What do ATO representation services include? */}
      <WhatAtoRepresentationIncludes />

      {/* 2. When might you want a tax agent to deal with the ATO? */}
      <WhenToSeekTaxAgentRepresentation />

      {/* 3. How does authority to represent you work? */}
      <HowAuthorityToRepresentWorks />

      {/* 4. What can an ATO representative accountant do for you? */}
      <WhatRepresentativeAccountantCanDo />

      {/* 5. ATO representation during reviews, audits and disputes */}
      <RepresentationDuringReviewsAuditsDisputes />

      {/* 6. What information should you have ready? */}
      <WhatInformationToHaveReadyRepresentation />

      {/* 7. Why choose Financially Up for ATO tax agent representation? */}
      <WhyChooseFinanciallyUpRepresentation />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="ATO Representation FAQs"
        description="Understanding registered agent communication authorities, multi-accountant arrangements, service scope, and realistic outcome boundaries."
        items={representationFaqs}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Discuss Your ATO Matter"
        title="Need an Accountant to Deal with the ATO?"
        subtitle="An initial discussion can clarify the issue, authority required and practical next steps. Book an appointment to discuss your current correspondence and service scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 10. Sibling Service Ribbon */}
      <RelatedAtoRepresentationRibbon />
    </main>
  );
}
