import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatYearEndTaxPlanningInvolves from "./components/WhatYearEndTaxPlanningInvolves";
import WhoBenefitsFromEofyPlanning from "./components/WhoBenefitsFromEofyPlanning";
import WhatShouldBeReviewedBeforeJune30 from "./components/WhatShouldBeReviewedBeforeJune30";
import YearEndPlanningForBusinessesAndIndividuals from "./components/YearEndPlanningForBusinessesAndIndividuals";
import WhatInformationToBringYearEnd from "./components/WhatInformationToBringYearEnd";
import HowFinanciallyUpHelpsYearEnd from "./components/HowFinanciallyUpHelpsYearEnd";
import RelatedYearEndPlanningRibbon from "./components/RelatedYearEndPlanningRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Year End Tax Planning Australia | Financially Up",
  description:
    "Plan ahead before 30 June with practical year end tax planning for individuals and businesses. Review timing, records and tax considerations.",
  keywords: [
    "year end tax planning",
    "EOFY tax planning Australia",
    "pre-30 June tax planning",
    "business tax planning EOFY",
    "superannuation notice of intent 30 June",
    "capital gains tax timing year end",
    "tax planning accountant Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/year-end-planning/",
  },
  openGraph: {
    title: "Year End Tax Planning Australia | Financially Up",
    description:
      "Plan ahead before 30 June with practical year end tax planning for individuals and businesses. Review timing, records and tax considerations.",
    url: "https://financiallyup.com.au/services/tax-planning/year-end-planning/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Tax Planning service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "Year-End Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const yearEndPlanningFaqs = [
  {
    key: "1",
    label: "What is year end tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is a proactive review of your expected tax position before the financial year closes, so relevant timing, records, transactions and tax obligations can be considered before important dates or events have passed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is EOFY tax planning the same as preparing a tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Tax planning considers decisions and tax implications before year-end where appropriate. A tax return reports the income, deductions and transactions that have already occurred.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do all tax strategies have to be completed before 30 June?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Timing depends on the specific tax rule, transaction and taxpayer circumstances. Some actions must occur before year-end to affect that year, while other matters are dealt with during later reporting or lodgement.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can year end tax planning guarantee a lower tax bill?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Planning can help you understand legitimate options and likely obligations, but the outcome depends on your circumstances and the tax law.
      </p>
    ),
  },
  {
    key: "5",
    label: "When should I book a year-end planning review?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is generally more useful to review your position before major transactions or before 30 June, allowing enough time to gather information and consider any actions that may be relevant.
      </p>
    ),
  },
];

/**
 * YearEndPlanningPage Component
 * =============================
 * Route: /services/tax-planning/year-end-planning
 * Pillar 3.6: Year-End Planning (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function YearEndPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: yearEndPlanningFaqs.map((faq) => ({
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
        title="Year End Tax Planning Australia"
        subtitle="Proactive Pre-30 June Review for Australian Individuals and Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Year end tax planning is a proactive review of your tax position before the financial year closes. It can help individuals and business owners understand expected taxable income, identify information that is still missing, review legitimate timing considerations and prepare for upcoming tax obligations before relevant transactions or deadlines have passed.
            </span>
            <span className="block mt-2">
              This is different from tax return preparation. A tax return reports what has already happened. Tax planning before 30 June looks forward and considers whether there are decisions, records or transactions that should be reviewed before year-end, subject to the tax rules and your circumstances.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.6 • EOFY Advisory Practice"
        highlights={[
          "Pre-30 June Timing & Cash Flow Review",
          "Superannuation Notice of Intent & Caps",
          "Asset Purchases & Depreciation Timing",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Planning Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What does year end tax planning involve? */}
      <WhatYearEndTaxPlanningInvolves />

      {/* 2. Who may benefit from EOFY tax planning? */}
      <WhoBenefitsFromEofyPlanning />

      {/* 3. What should be reviewed before 30 June? */}
      <WhatShouldBeReviewedBeforeJune30 />

      {/* 4. Year-end planning for businesses and individuals */}
      <YearEndPlanningForBusinessesAndIndividuals />

      {/* 5. What information should you bring? */}
      <WhatInformationToBringYearEnd />

      {/* 6. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsYearEnd />

      {/* 7. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about pre-30 June tax reviews, timing of strategies, superannuation deadlines, and planning benefits with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Year End Tax Planning Frequently Asked Questions"
        items={yearEndPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="EOFY Tax Planning"
        title="Book an Appointment"
        subtitle="Discuss your expected year-end position, planned transactions, records and tax obligations with Financially Up before the financial year closes."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 9. Related Service Ribbon */}
      <RelatedYearEndPlanningRibbon />
    </main>
  );
}
