import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAtoAuditSupport from "./components/WhatIsAtoAuditSupport";
import WhatToDoWhenAuditStarts from "./components/WhatToDoWhenAuditStarts";
import WhatRecordsRelevantAudit from "./components/WhatRecordsRelevantAudit";
import HowAccountantHelpsAudit from "./components/HowAccountantHelpsAudit";
import AuditRepresentationAuthority from "./components/AuditRepresentationAuthority";
import DisagreeingWithAtoPosition from "./components/DisagreeingWithAtoPosition";
import CommonAuditProblems from "./components/CommonAuditProblems";
import StructuredAuditProcess from "./components/StructuredAuditProcess";
import WhyChooseFinanciallyUpAudit from "./components/WhyChooseFinanciallyUpAudit";
import RelatedAtoAuditRibbon from "./components/RelatedAtoAuditRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Audit Support Australia | Financially Up",
  description:
    "ATO audit support for individuals and businesses. Organize records, respond to information requests and manage ATO communication with a tax agent.",
  keywords: [
    "ATO audit support",
    "ATO audit support Australia",
    "tax audit accountant",
    "ATO tax review",
    "ATO information request response",
    "small business independent review ATO",
    "Part IVC objection",
    "tax agent representation",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/ato-audit/",
  },
  openGraph: {
    title: "ATO Audit Support Australia | Financially Up",
    description:
      "ATO audit support for individuals and businesses. Organize records, respond to information requests and manage ATO communication with a tax agent.",
    url: "https://financiallyup.com.au/services/ato-help/ato-audit/",
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
  { label: "ATO Audit Support" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const atoAuditFaqs = [
  {
    key: "1",
    label: "Do I have to respond to an ATO audit request?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Take every request seriously. The precise obligation and timeframe depend on the document, including whether it is an informal request or a formal notice. Seek advice promptly if the scope or authority is unclear.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can my accountant deal with the ATO during the audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, a registered tax agent can communicate about authorised client tax matters when properly appointed. You still need to provide accurate records, facts and instructions.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does an ATO audit always mean extra tax is payable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The outcome depends on the facts, evidence and law. It may result in no change, adjustments, penalties or interest, or further dispute steps.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I object if I disagree with the outcome?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A formal objection may be available for an assessment or another reviewable tax decision. Rights and time limits depend on the decision, so review the notice and obtain advice promptly.
      </p>
    ),
  },
];

/**
 * AtoAuditSupportPage Component
 * =============================
 * Route: /services/ato-help/ato-audit
 * Pillar 11.2: ATO Audit Support (Page 3 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AtoAuditSupportPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: atoAuditFaqs.map((faq) => ({
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
        title="ATO Audit Support"
        subtitle="Organized Record Preparation, Technical Substantiation & Tax Agent Representation"
        description={
          <span className="space-y-3 block">
            <span className="block">
              ATO audit support helps individuals and businesses respond to an ATO audit or review in an organized, evidence-based way. The key tasks are to understand the enquiry, preserve relevant records, check the tax position and provide complete responses that are consistent with the underlying documents.
            </span>
            <span className="block mt-2">
              Financially Up can assist as your tax agent with audit correspondence, record preparation, accounting analysis and ATO communication within the agreed scope. An audit can involve significant technical or legal issues, so specialist tax or legal advice may also be required depending on what the ATO is examining.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.2 • Audit Defence Practice"
        highlights={[
          "Registered Tax Agent #26234055",
          "Evidence Indexing & Substantiation Schedules",
          "Independent Review & Objection Support",
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

      {/* 1. What is ATO audit support? */}
      <WhatIsAtoAuditSupport />

      {/* 2. What should you do when an ATO audit starts? */}
      <WhatToDoWhenAuditStarts />

      {/* 3. What records may be relevant? */}
      <WhatRecordsRelevantAudit />

      {/* 4. How can an accountant help during an audit? */}
      <HowAccountantHelpsAudit />

      {/* 5. ATO audit representation and authority to act */}
      <AuditRepresentationAuthority />

      {/* 6. What happens if you disagree with the ATO position? */}
      <DisagreeingWithAtoPosition />

      {/* 7. Common problems that make an audit harder */}
      <CommonAuditProblems />

      {/* 8. A structured audit-response process */}
      <StructuredAuditProcess />

      {/* 9. Why choose Financially Up for ATO Audit Support */}
      <WhyChooseFinanciallyUpAudit />

      {/* 10. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="Frequently Asked Questions"
        description="Common questions about ATO audit timeframes, taxpayer obligations, tax agent representation, and formal Part IVC dispute avenues."
        items={atoAuditFaqs}
      />

      {/* 11. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Received an ATO Notice?"
        title="Received an ATO Audit or Review Notice?"
        subtitle="If you have received an ATO audit or review notice, we can help you understand the scope, organise the records and manage the tax response."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 12. Sibling Service Ribbon */}
      <RelatedAtoAuditRibbon />
    </main>
  );
}
