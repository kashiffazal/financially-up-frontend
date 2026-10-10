import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAtoTaxReview from "./components/WhatIsAtoTaxReview";
import WhatToDoWhenReviewNoticeArrives from "./components/WhatToDoWhenReviewNoticeArrives";
import WhatRecordsAtoMayRequestReview from "./components/WhatRecordsAtoMayRequestReview";
import HowShouldReviewResponseBePrepared from "./components/HowShouldReviewResponseBePrepared";
import WhatIfYouFindErrorDuringReview from "./components/WhatIfYouFindErrorDuringReview";
import WhatIfYouDisagreeWithAtoPositionReview from "./components/WhatIfYouDisagreeWithAtoPositionReview";
import HowFinanciallyUpHelpsReview from "./components/HowFinanciallyUpHelpsReview";
import WhyChooseFinanciallyUpReview from "./components/WhyChooseFinanciallyUpReview";
import RelatedAtoReviewsRibbon from "./components/RelatedAtoReviewsRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Review Help and Response | Financially Up",
  description:
    "Received notice of an ATO review? Financially Up can help identify the issues, assemble records and prepare a clear, timely response within scope.",
  keywords: [
    "ATO review help",
    "ATO review response",
    "tax review accountant",
    "ATO compliance review",
    "ATO enquiry response",
    "tax return review ATO",
    "BAS review help",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/ato-reviews/",
  },
  openGraph: {
    title: "ATO Review Help and Response | Financially Up",
    description:
      "Received notice of an ATO review? Financially Up can help identify the issues, assemble records and prepare a clear, timely response within scope.",
    url: "https://financiallyup.com.au/services/ato-help/ato-reviews/",
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
  { label: "ATO Reviews" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const reviewFaqs = [
  {
    key: "1",
    label: "Does an ATO review mean I will owe more tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A review examines information and may end without adjustment. The result depends on the facts, evidence and applicable law.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I ask for more time to respond?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can ask the case officer promptly, explaining what is outstanding and proposing a realistic date. Do not treat the extension as granted until the ATO confirms it.
      </p>
    ),
  },
  {
    key: "3",
    label: "Should I send every record I have?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Provide relevant, complete records and explanations that answer the request. Clarify an unclear or unusually broad request rather than sending unrelated material.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can my accountant respond for me?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A registered tax agent can communicate about authorized client tax matters when properly appointed. You still need to confirm the facts and supply accurate records.
      </p>
    ),
  },
];

/**
 * AtoReviewsPage Component
 * ========================
 * Route: /services/ato-help/ato-reviews
 * Pillar 11.7: ATO Review Help (Page 8 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AtoReviewsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: reviewFaqs.map((faq) => ({
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
        title="ATO Review Help"
        subtitle="Clarify Questionnaire Scope, Reconcile Source Records & Submit Structured Evidenced Responses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An ATO review means the Australian Taxation Office is examining particular information, transactions or tax risks to decide whether its concerns can be resolved or further action is needed. A review is not necessarily an audit and does not, by itself, mean that a return is wrong. The immediate tasks are to read the notice, define the scope and record the response date.
            </span>
            <span className="block mt-2">
              Financially Up provides ATO review help for individuals and businesses. We can examine the relevant lodgements and records, clarify the questions raised, prepare reconciliations and factual explanations, and communicate with the ATO within the agreed scope.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.7 • ATO Review & Examination Support"
        highlights={[
          "Registered Tax Agent #26234055",
          "Evidence Mapping & Reconciliation Schedules",
          "Direct Case Officer Communication Within Scope",
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

      {/* 1. What is an ATO tax review? */}
      <WhatIsAtoTaxReview />

      {/* 2. What should you do when the notice arrives? */}
      <WhatToDoWhenReviewNoticeArrives />

      {/* 3. What records might the ATO request? */}
      <WhatRecordsAtoMayRequestReview />

      {/* 4. How should the response be prepared? */}
      <HowShouldReviewResponseBePrepared />

      {/* 5. What if you find an error during the review? */}
      <WhatIfYouFindErrorDuringReview />

      {/* 6. What if you disagree with the ATO’s position? */}
      <WhatIfYouDisagreeWithAtoPositionReview />

      {/* 7. How Financially Up helps */}
      <HowFinanciallyUpHelpsReview />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpReview />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="ATO Review FAQs"
        description="Clarifying tax adjustments, extension requests, documentation boundaries, and tax agent representation."
        items={reviewFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Review Notice Evaluation"
        title="Received an ATO Review Notice?"
        subtitle="Bring the full notice, every attachment and the records relating to its questions. Financially Up can help you prepare a timely, supportable response."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedAtoReviewsRibbon />
    </main>
  );
}
