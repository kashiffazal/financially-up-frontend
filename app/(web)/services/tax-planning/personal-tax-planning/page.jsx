import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatPersonalTaxPlanningInvolves from "./components/WhatPersonalTaxPlanningInvolves";
import WhoBenefitsFromPersonalPlanning from "./components/WhoBenefitsFromPersonalPlanning";
import PlanningBeforeYearEnd from "./components/PlanningBeforeYearEnd";
import EmploymentAndMultipleIncomeSources from "./components/EmploymentAndMultipleIncomeSources";
import InvestmentAndRentalPropertyConsiderations from "./components/InvestmentAndRentalPropertyConsiderations";
import CapitalGainsAndMajorTransactions from "./components/CapitalGainsAndMajorTransactions";
import SuperannuationTaxConsiderations from "./components/SuperannuationTaxConsiderations";
import DeductionsAndRecordKeeping from "./components/DeductionsAndRecordKeeping";
import HowFinanciallyUpHelpsPersonal from "./components/HowFinanciallyUpHelpsPersonal";
import RelatedPersonalTaxRibbon from "./components/RelatedPersonalTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Personal Tax Planning Australia | Financially Up",
  description:
    "Personal tax planning for Australians with salary, investments, property or changing income. Understand tax implications before key financial decisions.",
  keywords: [
    "personal tax planning",
    "personal tax planning services",
    "personal tax advisor Australia",
    "individual tax planning",
    "tax planning for individuals",
    "investment tax planning",
    "pre 30 june personal tax review",
    "capital gains tax planning individual",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/personal-tax-planning/",
  },
  openGraph: {
    title: "Personal Tax Planning Australia | Financially Up",
    description:
      "Personal tax planning for Australians with salary, investments, property or changing income. Understand tax implications before key financial decisions.",
    url: "https://financiallyup.com.au/services/tax-planning/personal-tax-planning/",
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
  { label: "Personal Tax Planning" },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const personalTaxPlanningFaqs = [
  {
    key: "1",
    label: "What is personal tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is a forward-looking review of expected income, deductions and transactions so you can understand tax consequences before decisions are finalised where possible.
      </p>
    ),
  },
  {
    key: "2",
    label: "How is personal tax planning different from a tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A tax return records completed events for an income year. Individual tax planning considers future or current-year decisions, timing and documentation before the relevant events are complete.
      </p>
    ),
  },
  {
    key: "3",
    label: "When should I speak with a personal tax adviser?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Consider advice before a major asset sale, property transaction, significant income change, large bonus, super contribution or other event that may materially affect your tax position.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I plan around a capital gain before selling an asset?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can review the likely tax treatment, cost base, capital losses and relevant concessions before the transaction. The available outcome depends on the asset, ownership, timing and your circumstances.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can personal tax planning guarantee tax savings?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Tax planning can identify legitimate considerations, but the final tax outcome depends on the facts and tax law. Financially Up does not guarantee a particular tax saving, refund or result.
      </p>
    ),
  },
  {
    key: "6",
    label: "What should I bring to a planning appointment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Bring details of your expected income, investments, property, planned transactions, prior tax information and any relevant supporting documents. The exact records required will depend on the planning issue.
      </p>
    ),
  },
];

/**
 * PersonalTaxPlanningPage Component
 * =================================
 * Route: /services/tax-planning/personal-tax-planning
 * Pillar 3.2: Personal Tax Planning (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PersonalTaxPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: personalTaxPlanningFaqs.map((faq) => ({
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
        title="Personal Tax Planning for Individuals"
        subtitle="Proactive Personal Tax Advice, Strategic Timing & Multi-Income Structuring"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Personal tax planning helps individuals understand the tax implications of income, investments and major financial decisions before the relevant events have passed. Financially Up provides personal tax planning for Australians with employment income, investments, rental property, capital gains or other circumstances that benefit from forward-looking tax advice.
            </span>
            <span className="block mt-2">
              The key distinction is timing. Tax return preparation reports what has already happened. Personal tax planning services consider what may happen next, what records or elections may be required, and how current tax rules apply before a transaction or financial year is complete.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.2 • Personal Advisory Practice"
        highlights={[
          "Forward-Looking Personal Tax Modeling",
          "Registered Tax Agent #26234055",
          "Virtual Consultations Australia-Wide",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Personal Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What Does a Personal Planning Review Involve? */}
      <WhatPersonalTaxPlanningInvolves />

      {/* 2. Who May Benefit From Planning? */}
      <WhoBenefitsFromPersonalPlanning />

      {/* 3. Planning Before the End of the Financial Year */}
      <PlanningBeforeYearEnd />

      {/* 4. Employment Income and Multiple Income Sources */}
      <EmploymentAndMultipleIncomeSources />

      {/* 5. Investment and Rental Property Considerations */}
      <InvestmentAndRentalPropertyConsiderations />

      {/* 6. Capital Gains and Major Transactions */}
      <CapitalGainsAndMajorTransactions />

      {/* 7. Superannuation-Related Tax Considerations */}
      <SuperannuationTaxConsiderations />

      {/* 8. Deductions and Record Keeping */}
      <DeductionsAndRecordKeeping />

      {/* 9. How Financially Up Can Help & Why Choose Us */}
      <HowFinanciallyUpHelpsPersonal />

      {/* 10. Frequently Asked Questions (Verbatim 6 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about personal tax planning, pre-30 June timing, investment considerations, and advice scope with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Personal Tax Planning Frequently Asked Questions"
        items={personalTaxPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Proactive Planning"
        title="Book an Appointment"
        subtitle="Discuss your expected income, investments, property or upcoming transactions with Financially Up. We can identify the relevant tax questions, the records needed and whether tax-return preparation, specialist tax advice or another professional service should be scoped separately."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 12. Related Service Ribbon */}
      <RelatedPersonalTaxRibbon />
    </main>
  );
}
