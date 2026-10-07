import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatDoesCleanupInvolve from "./components/WhatDoesCleanupInvolve";
import CommonSignsBooksNeedCleanup from "./components/CommonSignsBooksNeedCleanup";
import WhatWeReviewAndCorrect from "./components/WhatWeReviewAndCorrect";
import WhyAccurateSourceRecordsMatter from "./components/WhyAccurateSourceRecordsMatter";
import InformationNeededCleanup from "./components/InformationNeededCleanup";
import HowCleanupProcessWorks from "./components/HowCleanupProcessWorks";
import WhyChooseFinanciallyUpCleanup from "./components/WhyChooseFinanciallyUpCleanup";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of Bookkeeping)
 */
export const metadata = {
  title: "Bookkeeping Cleanup Services Australia | Financially Up",
  description:
    "Clean up inaccurate or messy books with Financially Up. We review reconciliations, coding and historical records to improve bookkeeping reliability.",
  keywords: [
    "bookkeeping cleanup services",
    "messy books cleanup",
    "Xero bookkeeping cleanup",
    "fix messy bookkeeping",
    "clean up accounting file",
    "bookkeeping correction services Australia",
    "historical bookkeeping cleanup",
    "suspense account cleanup",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/bookkeeping-clean-up/",
  },
  openGraph: {
    title: "Bookkeeping Cleanup Services Australia | Financially Up",
    description:
      "Clean up inaccurate or messy books with Financially Up. We review reconciliations, coding and historical records to improve bookkeeping reliability.",
    url: "https://financiallyup.com.au/services/bookkeeping/bookkeeping-clean-up/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Bookkeeping service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Bookkeeping Clean-Up" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const bookkeepingCleanupFaqs = [
  {
    key: "1",
    label: "What is bookkeeping cleanup?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Bookkeeping cleanup is a review and correction process for accounting records that contain reconciliation problems, coding errors, duplicates, unexplained balances or other bookkeeping issues.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can you clean up old bookkeeping records?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Historical bookkeeping cleanup can cover prior periods where suitable source records are available. If those periods have already been lodged for tax purposes, any tax impact or amendment should be reviewed separately.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do you provide Xero bookkeeping cleanup?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, Financially Up can review Xero bookkeeping issues within the agreed scope, including reconciliations, coding and historical transaction problems.
      </p>
    ),
  },
  {
    key: "4",
    label: "Will clean-up work automatically fix my BAS or tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Clean-up improves the bookkeeping records. BAS preparation, tax-return preparation, amendments and tax advice are separate services where required.
      </p>
    ),
  },
  {
    key: "5",
    label: "How do I know whether I need catch-up or clean-up bookkeeping?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Catch-up bookkeeping is usually for missing or overdue periods. Clean-up is usually for records that exist but are inaccurate or inconsistent. Some files need both.
      </p>
    ),
  },
];

/**
 * BookkeepingCleanupPage Component
 * ================================
 * Route: /services/bookkeeping/bookkeeping-clean-up
 * Pillar 4.4: Bookkeeping Cleanup Services (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BookkeepingCleanupPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bookkeepingCleanupFaqs.map((faq) => ({
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
        title="Bookkeeping Cleanup Services"
        subtitle="Diagnostic Ledger Review, Error Correction & Reconciliation Diagnostics"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Bookkeeping can be technically up to date and still be unreliable. Duplicated transactions, unreconciled bank accounts, old suspense balances, inconsistent coding and incorrect opening figures can all make reports difficult to trust. Financially Up provides bookkeeping cleanup services to review and correct bookkeeping records so the file is more accurate, organized and usable.
            </span>
            <span className="block mt-2">
              Bookkeeping clean up is different from simply catching up missing months. It focuses on the quality of records already in the accounting system. For some businesses, the issue is limited to a few accounts. For others, a historical bookkeeping cleanup may be needed before year-end accounts, BAS work, tax returns or management reporting can be prepared efficiently.
            </span>
          </span>
        }
        parentService={{
          label: "Bookkeeping Hub",
          href: "/services/bookkeeping",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 4.4 • Ledger Quality & Remediation"
        highlights={[
          "Evidence-Based Ledger Adjustments",
          "Eliminating Suspense & Clearing Balances",
          "Xero & Cloud Accounting Specialists",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Bookkeeping Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Does Bookkeeping Cleanup Involve? */}
      <WhatDoesCleanupInvolve />

      {/* 2. Common Signs Your Books Need Cleaning Up */}
      <CommonSignsBooksNeedCleanup />

      {/* 3. What We May Review and Correct */}
      <WhatWeReviewAndCorrect />

      {/* 4. Why Accurate Source Records Matter */}
      <WhyAccurateSourceRecordsMatter />

      {/* 5. What Information May Be Needed? */}
      <InformationNeededCleanup />

      {/* 6. How Our Bookkeeping Clean-Up Process Works */}
      <HowCleanupProcessWorks />

      {/* 7. Why Choose Financially Up */}
      <WhyChooseFinanciallyUpCleanup />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about messy ledger repairs, suspense account clean-ups, prior period corrections and accounting review with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Bookkeeping Cleanup Frequently Asked Questions"
        items={bookkeepingCleanupFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your accounting file is difficult to reconcile or the reports do not look reliable, Book an Appointment with Financially Up. We can discuss the known issues, affected periods, available source records and the appropriate scope for bookkeeping cleanup services."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Bookkeeping Services"
        secondaryButtonHref="/services/bookkeeping"
      />

      {/* 10. Related Bookkeeping Services Ribbon */}
      <RelatedBookkeepingRibbon currentSlug="bookkeeping-clean-up" />
    </main>
  );
}
