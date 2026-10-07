import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsCatchUpBookkeeping from "./components/WhatIsCatchUpBookkeeping";
import WhenNeedBacklogHelp from "./components/WhenNeedBacklogHelp";
import WhatCatchUpCanInclude from "./components/WhatCatchUpCanInclude";
import CatchUpVsTaxCompliance from "./components/CatchUpVsTaxCompliance";
import RecordsToProvideCatchUp from "./components/RecordsToProvideCatchUp";
import HowCatchUpProcessWorks from "./components/HowCatchUpProcessWorks";
import WhyFinanciallyUpCatchUp from "./components/WhyFinanciallyUpCatchUp";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of Bookkeeping)
 */
export const metadata = {
  title: "Catch Up Bookkeeping Services Australia | Financially Up",
  description:
    "Behind on your books? Financially Up provides catch up bookkeeping to reconcile records, clear backlogs and restore reliable business accounts.",
  keywords: [
    "catch up bookkeeping",
    "overdue bookkeeping Australia",
    "bookkeeping backlog",
    "reconcile old accounts",
    "catch up bookkeeper",
    "historical bookkeeping cleanup",
    "clear bookkeeping backlog",
    "overdue BAS bookkeeping",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/catch-up-bookkeeping/",
  },
  openGraph: {
    title: "Catch Up Bookkeeping Services Australia | Financially Up",
    description:
      "Behind on your books? Financially Up provides catch up bookkeeping to reconcile records, clear backlogs and restore reliable business accounts.",
    url: "https://financiallyup.com.au/services/bookkeeping/catch-up-bookkeeping/",
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
  { label: "Catch-Up Bookkeeping" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const catchUpBookkeepingFaqs = [
  {
    key: "1",
    label: "How far back can the catch-up work go?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can cover one missed period or multiple historical periods, depending on transaction volume, the accounting system and available records.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can you help if my bookkeeping is several months behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A catch up bookkeeper can work through historical periods in sequence, reconcile the records and identify information still needed from you.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is catch up bookkeeping the same as bookkeeping clean-up?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not exactly. Catch-up work focuses on missing or overdue periods. Clean-up work focuses on records that exist but contain errors, inconsistent coding, unreconciled balances or other quality issues. A file may need both.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can catch up bookkeeping help with overdue BAS or tax returns?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can help create the underlying records those obligations may rely on. BAS preparation, tax-return preparation, amendments or tax advice should be confirmed as separate work where required.
      </p>
    ),
  },
  {
    key: "5",
    label: "What if some receipts or records are missing?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Provide the information you do have. Missing items can then be identified and followed up. Amounts should not simply be guessed where supporting records are required.
      </p>
    ),
  },
];

/**
 * CatchUpBookkeepingPage Component
 * ================================
 * Route: /services/bookkeeping/catch-up-bookkeeping
 * Pillar 4.3: Catch Up Bookkeeping Services (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CatchUpBookkeepingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: catchUpBookkeepingFaqs.map((faq) => ({
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
        title="Catch Up Bookkeeping Services"
        subtitle="Overdue Books, Transaction Backlogs & Historical Ledger Reconciliation"
        description={
          <span className="space-y-3 block">
            <span className="block">
              When bookkeeping falls behind, the priority is to rebuild a reliable set of records without guessing or rushing through transactions. Financially Up provides catch up bookkeeping for businesses that need to bring overdue records up to date, reconcile accounts and create a clearer starting point for current bookkeeping, reporting and tax compliance.
            </span>
            <span className="block mt-2">
              A bookkeeping backlog can develop after rapid growth, staff changes, a software transition, competing priorities or simply not having a regular bookkeeping process. The work may involve several months or financial periods and can include bank transactions, sales, expenses, supplier bills, customer receipts, GST coding and other records relevant to the business.
            </span>
          </span>
        }
        parentService={{
          label: "Bookkeeping Hub",
          href: "/services/bookkeeping",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 4.3 • Backlog Remediation"
        highlights={[
          "Sequential Historical Reconciliations",
          "No Guesswork • Evidence-Based Coding",
          "Audit-Ready Baseline for BAS & Tax",
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

      {/* 1. What Is Catch Up Bookkeeping? */}
      <WhatIsCatchUpBookkeeping />

      {/* 2. When Might a Business Need Bookkeeping Backlog Help? */}
      <WhenNeedBacklogHelp />

      {/* 3. What Our Catch Up Bookkeeping Service Can Include */}
      <WhatCatchUpCanInclude />

      {/* 4. Catch-Up Bookkeeping and Tax Compliance Are Different Services */}
      <CatchUpVsTaxCompliance />

      {/* 5. What Records Should You Provide? */}
      <RecordsToProvideCatchUp />

      {/* 6. How the Catch-Up Process Works */}
      <HowCatchUpProcessWorks />

      {/* 7. Why Financially Up */}
      <WhyFinanciallyUpCatchUp />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about clearing overdue books, multi-month backlogs, missing receipts and tax compliance coordination with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Catch Up Bookkeeping Frequently Asked Questions"
        items={catchUpBookkeepingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your books are behind, Book an Appointment with Financially Up to discuss the outstanding periods, available records, accounting software and the work required to bring the file up to date. We can also clarify whether ongoing bookkeeping or separately scoped accounting and tax work is needed once the backlog is cleared."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Bookkeeping Services"
        secondaryButtonHref="/services/bookkeeping"
      />

      {/* 10. Related Bookkeeping Services Ribbon */}
      <RelatedBookkeepingRibbon currentSlug="catch-up-bookkeeping" />
    </main>
  );
}
