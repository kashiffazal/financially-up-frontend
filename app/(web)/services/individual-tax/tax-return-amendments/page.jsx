import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsATaxReturnAmendment from "./components/WhatIsATaxReturnAmendment";
import WhenToAmendAndBeforeRequesting from "./components/WhenToAmendAndBeforeRequesting";
import AmendmentOutcomesAndPreviousYears from "./components/AmendmentOutcomesAndPreviousYears";
import CommonIssuesAndSixStepProcess from "./components/CommonIssuesAndSixStepProcess";
import HowFinanciallyUpHelpsAmendments from "./components/HowFinanciallyUpHelpsAmendments";
import AmendmentsRelatedServiceRibbon from "./components/AmendmentsRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 12)
 */
export const metadata = {
  title: "Tax Return Amendment Accountant | Financially Up",
  description:
    "Need to correct a lodged return? Financially Up reviews errors and omissions and assists with tax return amendments for Australian individuals.",
  keywords: [
    "tax return amendment",
    "amend tax return Australia",
    "correct lodged tax return",
    "ATO amendment time limit",
    "amended notice of assessment",
    "missed deduction amendment",
    "omitted income tax amendment",
    "shortfall interest charge",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/tax-return-amendments/",
  },
  openGraph: {
    title: "Tax Return Amendment Accountant | Financially Up",
    description:
      "Need to correct a lodged return? Financially Up reviews errors and omissions and assists with tax return amendments for Australian individuals.",
    url: "https://financiallyup.com.au/services/individual-tax/tax-return-amendments/",
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
  { label: "Individual Tax", href: "/services/individual-tax" },
  { label: "Tax Return Amendments" },
];

/**
 * 6 Tailored Quick Specifications for Tax Return Amendments
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const amendmentQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Individuals & sole traders needing to correct an already-lodged and processed return",
  },
  {
    icon: "file",
    label: "Core Prerequisite",
    value: "Original Notice of Assessment issued and processed by the Australian Taxation Office",
  },
  {
    icon: "clock",
    label: "Time Limits",
    value: "Generally 2 years from assessment (4 years for eligible business taxpayers from 2024-25)",
  },
  {
    icon: "calculator",
    label: "Impact Analysis",
    value: "Complete recalculation of taxable income, Medicare levy, offsets & HECS/HELP",
  },
  {
    icon: "desktop",
    label: "Delivery Format",
    value: "100% online video meetings (Outlook Calendar) or in-person by arrangement",
  },
  {
    icon: "safety",
    label: "Lodgement Channel",
    value: "Direct electronic ATO Tax Agent Portal transmission by TPB Agent #26242127",
  },
];

/**
 * 8 Exact Frequently Asked Questions from Client Document (Page 12)
 */
const amendmentFaqs = [
  {
    key: "1",
    label: "What is a tax return amendment",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is a request to correct information in a tax return that has already been lodged and processed, subject to the applicable ATO rules and time limits.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need to wait for my notice of assessment",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, the original return should first be processed. The notice of assessment also helps establish when the amendment period begins.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I add a missed deduction after lodging",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A missed eligible deduction may be added where the ordinary deduction and record-keeping requirements are satisfied and the amendment is made within the applicable time limit.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if I forgot to declare income",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Omitted income may need to be corrected. The amendment could result in additional tax, interest or a penalty depending on the circumstances. These outcomes are not automatic in every case.
      </p>
    ),
  },
  {
    key: "5",
    label: "How far back can I amend a tax return",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Most individuals generally have two years from the day after the ATO gives the notice of assessment. Different periods can apply to sole traders and other taxpayers, particularly for 2024-25 and later income years.
      </p>
    ),
  },
  {
    key: "6",
    label: "Will amending my tax return result in a penalty",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Penalty treatment depends on the error, whether it caused a tax shortfall, the taxpayer&apos;s conduct and when and how the correction was disclosed. Interest can apply separately.
      </p>
    ),
  },
  {
    key: "7",
    label: "When should I lodge an objection instead",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An objection may be appropriate where you disagree with an ATO assessment or decision rather than correcting information you originally provided. It may also need to be considered where the amendment period has expired.
      </p>
    ),
  },
  {
    key: "8",
    label: "Can an accountant amend my tax return",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A registered tax agent can review the lodged return, identify the required corrections and prepare or lodge an amendment on your behalf. Complex matters may require separately scoped tax advice.
      </p>
    ),
  },
];

/**
 * Page Component: Tax Return Amendment Services for Individuals (Pillar 1.11)
 */
export default function TaxReturnAmendmentsPage() {
  // JSON-LD Structured Data for FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a tax return amendment",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a request to correct information in a tax return that has already been lodged and processed, subject to the applicable ATO rules and time limits.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to wait for my notice of assessment",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally, the original return should first be processed. The notice of assessment also helps establish when the amendment period begins.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add a missed deduction after lodging",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A missed eligible deduction may be added where the ordinary deduction and record-keeping requirements are satisfied and the amendment is made within the applicable time limit.",
        },
      },
      {
        "@type": "Question",
        name: "What if I forgot to declare income",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Omitted income may need to be corrected. The amendment could result in additional tax, interest or a penalty depending on the circumstances. These outcomes are not automatic in every case.",
        },
      },
      {
        "@type": "Question",
        name: "How far back can I amend a tax return",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most individuals generally have two years from the day after the ATO gives the notice of assessment. Different periods can apply to sole traders and other taxpayers, particularly for 2024-25 and later income years.",
        },
      },
      {
        "@type": "Question",
        name: "Will amending my tax return result in a penalty",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not automatically. Penalty treatment depends on the error, whether it caused a tax shortfall, the taxpayer's conduct and when and how the correction was disclosed. Interest can apply separately.",
        },
      },
      {
        "@type": "Question",
        name: "When should I lodge an objection instead",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An objection may be appropriate where you disagree with an ATO assessment or decision rather than correcting information you originally provided. It may also need to be considered where the amendment period has expired.",
        },
      },
      {
        "@type": "Question",
        name: "Can an accountant amend my tax return",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A registered tax agent can review the lodged return, identify the required corrections and prepare or lodge an amendment on your behalf. Complex matters may require separately scoped tax advice.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <SubServiceHero
        badge="Tax Return Amendments"
        title="Tax Return Amendment Services for Individuals"
        subtitle="Already lodged your tax return and later found a mistake, missing income or a deduction that was not handled correctly? A tax return amendment is used to correct information in a return that has already been lodged and processed by the Australian Taxation Office (ATO)."
        bodyText={
          <span>
            Financially Up Pty Ltd helps Australian individuals review lodged returns, identify possible errors or omissions and prepare amendment requests where appropriate. This service is for correcting a return that has already been lodged. If an earlier return has not been lodged at all, our prior-year and overdue tax returns service may be more relevant.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              Book an Appointment to discuss the affected income year, what has changed or been discovered, the available records and any ATO correspondence. An amendment outcome, refund or tax saving cannot be confirmed before the circumstances and supporting information are reviewed.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.11 • Tax Return Amendment Practice"
        highlights={[
          "Notice of Assessment Reconciliation",
          "Statutory 2-Year & 4-Year Time Limit Audits",
          "Voluntary Disclosure Penalty Mitigation",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={amendmentQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Amendment Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. What Is a Tax Return Amendment */}
      <WhatIsATaxReturnAmendment />

      {/* 2 & 3. When Should You Amend a Tax Return & Before Requesting an Amendment */}
      <WhenToAmendAndBeforeRequesting />

      {/* 4 & 5. What Happens After an Amendment & Can You Amend Previous Years */}
      <AmendmentOutcomesAndPreviousYears />

      {/* 6 & 8. Common Tax Return Amendment Issues & How the Amendment Process Works */}
      <CommonIssuesAndSixStepProcess />

      {/* 7. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsAmendments />

      {/* 9. Frequently Asked Questions (Verbatim 8 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about amending lodged tax returns, time limits, penalties, missed deductions and objections with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Tax Return Amendment Services Frequently Asked Questions"
        items={amendmentFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Need to amend a tax return? Book an appointment with Financially Up to discuss the lodged return, what needs to be corrected, the available records and any ATO correspondence. We can help determine whether an amendment appears appropriate, what information is required and whether any related tax advice should be scoped separately."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 11. Related Service Ribbon */}
      <AmendmentsRelatedServiceRibbon />
    </main>
  );
}
