import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatFinancialBoardPackIncludes from "./components/WhatFinancialBoardPackIncludes";
import WhyCommentaryMatters from "./components/WhyCommentaryMatters";
import HowWeDevelopBoardReportingProcess from "./components/HowWeDevelopBoardReportingProcess";
import QuestionsABoardPackAnswers from "./components/QuestionsABoardPackAnswers";
import ScopeBoundariesAndRelatedServicesBoard from "./components/ScopeBoundariesAndRelatedServicesBoard";
import WhatToBringAndPracticalCycle from "./components/WhatToBringAndPracticalCycle";
import RelatedServiceRibbonBoard from "./components/RelatedServiceRibbonBoard";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 5)
 */
export const metadata = {
  title: "Board Reporting Services for Directors | Financially Up",
  description:
    "Give directors clearer financial information. Financially Up prepares tailored board packs with results, cash flow, variances and decision-focused commentary.",
  keywords: [
    "board reporting services",
    "board pack preparation",
    "director financial reporting",
    "advisory board reports australia",
    "management commentary for directors",
    "governance financial packs",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/board-reporting/",
  },
  openGraph: {
    title: "Board Reporting Services for Directors | Financially Up",
    description:
      "Give directors clearer financial information. Financially Up prepares tailored board packs with results, cash flow, variances and decision-focused commentary.",
    url: "https://financiallyup.com.au/services/virtual-cfo/board-reporting/",
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
  { label: "Board Reporting" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document
 */
const boardReportingFaqs = [
  {
    key: "1",
    label: "Is a board pack the same as an audited financial report?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A board pack is usually internal management information prepared for oversight and decisions. Statutory financial reporting and audit requirements are separate and depend on the entity.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a smaller company benefit from board reporting?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Even a small board may benefit from a concise, consistent view of profit, cash, commitments and key decisions. The pack should suit its needs and resources.
      </p>
    ),
  },
  {
    key: "3",
    label: "Who is responsible for approving the board pack?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The organization should agree who prepares, reviews and distributes it. Directors remain responsible for their own decisions and oversight.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can reports include forecasts and scenarios?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, where the underlying inputs are available and the purpose is clear. Forecasts should be labelled and their significant assumptions explained.
      </p>
    ),
  },
];

/**
 * BoardReportingPage Component
 * ============================
 * Route: /services/virtual-cfo/board-reporting
 * Subpage 5 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BoardReportingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: boardReportingFaqs.map((faq) => ({
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
        title="Board Reporting Services for Better Informed Decisions"
        subtitle="Authoritative Board Packs, Executive Summaries & Clear Strategic Commentary"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Board reporting services organize financial results, cash information, forecasts and commentary so directors can discuss the business's position and decisions. A useful board pack draws attention to material changes, the reasons management understands and the questions that remain open. It should make the figures easier to challenge and use, not bury directors in pages of unexplained data.
            </span>
            <span className="block mt-2">
              Financially Up supports companies and organizations that need a consistent financial reporting rhythm for directors or an advisory board. We agree what decisions the pack must support and what reliable information can be produced.
            </span>
            <span className="block mt-2">
              Book an Appointment to discuss your current reporting process and the board's information needs.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.5 • Governance & Board Support"
        highlights={[
          "Executive Summaries & Contextual Commentary",
          "ASIC-Compliant Financial Governance Support",
          "Australia-Wide Online & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "Rigorous", label: "Governance Packs" },
          { value: "Contextual", label: "Variance Analysis" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "10+ Years", label: "Advisory Experience" },
        ]}
      />

      {/* 1. What should a financial board pack include? */}
      <WhatFinancialBoardPackIncludes />

      {/* 2. Why does the commentary matter? & ASIC Guidance */}
      <WhyCommentaryMatters />

      {/* 3. How we develop a board reporting process */}
      <HowWeDevelopBoardReportingProcess />

      {/* 4. Questions a board pack can help answer */}
      <QuestionsABoardPackAnswers />

      {/* 5. What Financially Up can and cannot cover & Related Services */}
      <ScopeBoundariesAndRelatedServicesBoard />

      {/* 6. What to bring to the first discussion & Practical cycle */}
      <WhatToBringAndPracticalCycle />

      {/* 7. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about board packs, statutory audit distinctions, small business governance, and forecasts."
        image="/images/services/faq.webp"
        imageAlt="Board Reporting Services Frequently Asked Questions"
        items={boardReportingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Give Directors Information They Can Use"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss your board's questions, current records and a practical scope for board reporting services."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 9. Related Service Ribbon */}
      <RelatedServiceRibbonBoard />
    </main>
  );
}
