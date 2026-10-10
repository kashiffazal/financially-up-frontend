import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import HowToCatchUpOverdueReturns from "./components/HowToCatchUpOverdueReturns";
import MultipleYearsUnlodged from "./components/MultipleYearsUnlodged";
import ConsequencesOfUnlodgedReturns from "./components/ConsequencesOfUnlodgedReturns";
import CanIStillReceiveRefund from "./components/CanIStillReceiveRefund";
import WhatHappensAfterLodged from "./components/WhatHappensAfterLodged";
import RecordsToChecklistOverdue from "./components/RecordsToChecklistOverdue";
import HowFinanciallyUpHelpsOverdue from "./components/HowFinanciallyUpHelpsOverdue";
import WhyChooseFinanciallyUpOverdue from "./components/WhyChooseFinanciallyUpOverdue";
import RelatedOverdueReturnsRibbon from "./components/RelatedOverdueReturnsRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "Overdue Tax Return Accountant | Financially Up",
  description:
    "Have one or more overdue tax returns? Financially Up can help check your obligations, organize missing records and prepare the returns you need to lodge.",
  keywords: [
    "overdue tax return accountant",
    "overdue tax returns Australia",
    "catch up tax returns",
    "late tax return",
    "unlodged tax returns",
    "back taxes accountant",
    "multiple years overdue tax",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/overdue-tax-returns/",
  },
  openGraph: {
    title: "Overdue Tax Return Accountant | Financially Up",
    description:
      "Have one or more overdue tax returns? Financially Up can help check your obligations, organize missing records and prepare the returns you need to lodge.",
    url: "https://financiallyup.com.au/services/ato-help/overdue-tax-returns/",
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
  { label: "Overdue Tax Returns" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const overdueTaxFaqs = [
  {
    key: "1",
    label: "Will I automatically receive a late-lodgment penalty?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A penalty may apply depending on the obligation and circumstances. If the ATO imposes one, remission may be requested on relevant grounds; approval is not automatic.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can you prepare returns for several past years?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can help identify the years requiring lodgment and prepare the required returns using the information and tax rules relevant to each year.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if my records are missing?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Bring the records you have. We can identify gaps and help you work out where supporting information may be obtained. The return still needs to be based on supportable figures.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is an overdue return the same as an amendment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. An overdue return has not yet been lodged. An amendment changes a return or assessment for a year already lodged or assessed.
      </p>
    ),
  },
];

/**
 * OverdueTaxReturnsPage Component
 * ===============================
 * Route: /services/ato-help/overdue-tax-returns
 * Pillar 11.3: Overdue Tax Returns (Page 4 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function OverdueTaxReturnsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: overdueTaxFaqs.map((faq) => ({
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
        title="Overdue Tax Return Accountant"
        subtitle="Bring Multi-Year Back Returns Up to Date, Reconstruct Missing Records & Restore ATO Compliance"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Overdue tax returns can become harder to deal with as records go missing and ATO correspondence builds up. The first step is to identify which years actually require a return and what information is needed for each one. A late return does not automatically mean you owe tax or have a penalty, but it is important to establish your position.
            </span>
            <span className="block mt-2">
              Financially Up provides a tax return catch up service for individuals and business owners with one or several unlodged years. We can review the outstanding obligations, prepare the returns within our engagement and help you understand notices, assessments and amounts owing. Book an Appointment to start with the years you need to resolve.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.3 • Lodgement Catch-Up Practice"
        highlights={[
          "Registered Tax Agent #26234055",
          "Multi-Year Catch-Up Specialists",
          "Reconstruct Missing Income & Bank Records",
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

      {/* 1. How do you catch up on overdue tax returns? */}
      <HowToCatchUpOverdueReturns />

      {/* 2. What if several years have not been lodged? */}
      <MultipleYearsUnlodged />

      {/* 3. What happens if I leave returns unlodged? */}
      <ConsequencesOfUnlodgedReturns />

      {/* 4. Can I still receive a refund for an old year? */}
      <CanIStillReceiveRefund />

      {/* 5. What happens after overdue returns are lodged? */}
      <WhatHappensAfterLodged />

      {/* 6. What records should I bring? */}
      <RecordsToChecklistOverdue />

      {/* 7. How Financially Up helps */}
      <HowFinanciallyUpHelpsOverdue />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpOverdue />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="Frequently Asked Questions"
        description="Common questions about multi-year overdue returns, late-lodgement penalties, missing records, and the distinction between back-returns and amendments."
        items={overdueTaxFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Resolve Unlodged Years"
        title="Start with the Outstanding Years"
        subtitle="Bring any ATO correspondence and a list of the years you are concerned about. Financially Up can help establish the next steps and prepare the returns within the agreed scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedOverdueReturnsRibbon />
    </main>
  );
}
