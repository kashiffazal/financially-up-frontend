import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsPenaltyRemission from "./components/WhatIsPenaltyRemission";
import WhichPenaltiesNeedReview from "./components/WhichPenaltiesNeedReview";
import RemissionVsPaymentPlanVsObjection from "./components/RemissionVsPaymentPlanVsObjection";
import WhatAtoConsidersLateLodgment from "./components/WhatAtoConsidersLateLodgment";
import PreparingSupportedRequest from "./components/PreparingSupportedRequest";
import WhatHappensAfterRemissionRequest from "./components/WhatHappensAfterRemissionRequest";
import HowFinanciallyUpHelpsRemission from "./components/HowFinanciallyUpHelpsRemission";
import WhyChooseFinanciallyUpRemission from "./components/WhyChooseFinanciallyUpRemission";
import RelatedPenaltyRemissionRibbon from "./components/RelatedPenaltyRemissionRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Penalty Remission Help | Financially Up",
  description:
    "Received an ATO penalty? Financially Up can review the notice, your circumstances and supporting evidence before helping you prepare a remission request.",
  keywords: [
    "ATO penalty remission",
    "ATO penalty remission help",
    "failure to lodge penalty remission",
    "remit ATO penalty",
    "waive tax penalty Australia",
    "GIC remission request",
    "FTL penalty accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/penalty-remission/",
  },
  openGraph: {
    title: "ATO Penalty Remission Help | Financially Up",
    description:
      "Received an ATO penalty? Financially Up can review the notice, your circumstances and supporting evidence before helping you prepare a remission request.",
    url: "https://financiallyup.com.au/services/ato-help/penalty-remission/",
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
  { label: "Penalty Remission" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const penaltyRemissionFaqs = [
  {
    key: "1",
    label: "Can the ATO waive a failure-to-lodge penalty?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The ATO may remit all or part of an imposed penalty based on the circumstances. You should generally lodge the outstanding document before seeking remission. The decision is not guaranteed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is financial hardship enough for penalty remission?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financial difficulty may be relevant to an overall ATO discussion, but a remission request needs to address the particular penalty and its circumstances. We review the notice before advising on the right pathway.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can interest also be removed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Interest remission is a separate question with different considerations. Identify whether your account shows a penalty, general interest charge or shortfall interest charge before requesting relief.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if the ATO declines my request?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Read the decision and any review rights it provides. Depending on the issue, additional information or a formal review process may be appropriate.
      </p>
    ),
  },
];

/**
 * PenaltyRemissionPage Component
 * ==============================
 * Route: /services/ato-help/penalty-remission
 * Pillar 11.4: Penalty Remission (Page 5 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PenaltyRemissionPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: penaltyRemissionFaqs.map((faq) => ({
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
        title="ATO Penalty Remission Help"
        subtitle="Factual Chronology, Legal Review & Evidence-Backed Submissions to Request Penalty Relief"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An ATO penalty notice should be reviewed through the correct process. Where the penalty has been validly imposed, you may be able to request remission, but difficulty paying the amount is not enough by itself. The ATO considers the type of penalty, what caused the non-compliance, the action taken to correct it and the evidence supporting the explanation.
            </span>
            <span className="block mt-2">
              Financially Up helps clients review an imposed penalty and prepare a clear, factual request where remission may be appropriate. The ATO decides whether to remit all or part of a penalty. Book an Appointment and bring the notice and relevant correspondence.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.4 • Penalty Relief Practice"
        highlights={[
          "Registered Tax Agent #26234055",
          "FTL & Administrative Penalty Reviews",
          "Factual Chronology & Evidentiary Submissions",
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

      {/* 1. What is ATO penalty remission? */}
      <WhatIsPenaltyRemission />

      {/* 2. Which penalties may need review? */}
      <WhichPenaltiesNeedReview />

      {/* 3. Remission is different from a payment arrangement */}
      <RemissionVsPaymentPlanVsObjection />

      {/* 4. What does the ATO consider for late lodgment? */}
      <WhatAtoConsidersLateLodgment />

      {/* 5. Preparing a supported request */}
      <PreparingSupportedRequest />

      {/* 6. What happens after the request? */}
      <WhatHappensAfterRemissionRequest />

      {/* 7. How Financially Up can help */}
      <HowFinanciallyUpHelpsRemission />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpRemission />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="Frequently Asked Questions"
        description="Common questions about ATO failure-to-lodge penalty remission, financial hardship, interest charge distinctions, and review pathways."
        items={penaltyRemissionFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Review Your Notice"
        title="Review Your ATO Notice"
        subtitle="Bring the penalty notice, dates and evidence of the circumstances that affected compliance. Financially Up can help you assess the request and present the facts clearly."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedPenaltyRemissionRibbon />
    </main>
  );
}
