import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatHighIncomePlanningInvolves from "./components/WhatHighIncomePlanningInvolves";
import WhoBenefitsFromHighIncomePlanning from "./components/WhoBenefitsFromHighIncomePlanning";
import HighIncomeDeductionsAndRecords from "./components/HighIncomeDeductionsAndRecords";
import HighIncomeInvestmentsAndCgt from "./components/HighIncomeInvestmentsAndCgt";
import Division293AndSuperannuation from "./components/Division293AndSuperannuation";
import PreYearEndPlanningAndChanges from "./components/PreYearEndPlanningAndChanges";
import WhatToBringToPlanningAppointment from "./components/WhatToBringToPlanningAppointment";
import HowFinanciallyUpHelpsHighIncome from "./components/HowFinanciallyUpHelpsHighIncome";
import RelatedHighIncomeTaxRibbon from "./components/RelatedHighIncomeTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "High Income Tax Planning Australia | Financially Up",
  description:
    "High income tax planning for executives and professionals. Review income, investments, CGT, deductions and year-end tax considerations.",
  keywords: [
    "high income tax planning",
    "tax planning for high income earners",
    "executive tax planning Australia",
    "division 293 tax planning",
    "high earner tax advisor",
    "pre 30 june executive tax review",
    "employee share scheme tax planning",
    "cgt planning for high income earners",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/high-income-tax-planning/",
  },
  openGraph: {
    title: "High Income Tax Planning Australia | Financially Up",
    description:
      "High income tax planning for executives and professionals. Review income, investments, CGT, deductions and year-end tax considerations.",
    url: "https://financiallyup.com.au/services/tax-planning/high-income-tax-planning/",
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
  { label: "High-Income Tax Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const highIncomeTaxPlanningFaqs = [
  {
    key: "1",
    label: "What is high income tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is a proactive review of your income, investments, deductions and planned transactions before relevant decisions or year end. It helps identify tax implications and information requirements but does not guarantee a particular tax outcome.
      </p>
    ),
  },
  {
    key: "2",
    label: "When should high-income earners speak to a tax adviser?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Before major transactions, a significant change in income, an asset sale, a new investment or year end is often useful. Earlier review gives more time to understand timing and documentation requirements.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can tax planning reduce tax for high-income earners?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Tax planning may identify legitimate deductions, timing issues or concessions where the relevant rules are satisfied. Whether this changes the final tax payable depends on the individual facts and applicable law.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does tax planning include my tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Planning is forward-looking, while a tax return reports completed transactions and income for the year. Financially Up can scope tax-return preparation separately.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can you advise on investments or super products?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can address tax consequences within its tax and accounting scope. Product recommendations or regulated financial advice may require an appropriately authorized financial adviser.
      </p>
    ),
  },
];

/**
 * HighIncomeTaxPlanningPage Component
 * ===================================
 * Route: /services/tax-planning/high-income-tax-planning
 * Pillar 3.3: High-Income Tax Planning (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function HighIncomeTaxPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: highIncomeTaxPlanningFaqs.map((faq) => ({
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
        title="High-Income Tax Planning for Executives and Professionals"
        subtitle="Strategic Tax Structuring, Division 293 Modeling & Pre-30 June Timing Advice"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Higher income often comes with more moving parts: salary and bonuses, investments, employee shares, rental property, capital gains, multiple income sources or significant changes during the year. High income tax planning is a proactive review of those circumstances before key decisions or year end, so the likely tax consequences, record requirements and timing issues are understood in advance.
            </span>
            <span className="block mt-2">
              Financially Up provides tax planning support for executives, professionals, investors and other individuals with higher or more complex taxable income. The aim is not to promise a lower tax bill. It is to identify legitimate planning considerations, understand upcoming obligations and reduce avoidable surprises when the tax return is prepared.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.3 • Executive Advisory Practice"
        highlights={[
          "Executive Remuneration & ESS Review",
          "Division 293 & Concessional Super Modeling",
          "Pre-30 June Timing & CGT Event A1 Analysis",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Executive Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What does high income tax planning involve? */}
      <WhatHighIncomePlanningInvolves />

      {/* 2. Who may benefit from proactive planning? */}
      <WhoBenefitsFromHighIncomePlanning />

      {/* 3. Income, deductions and records */}
      <HighIncomeDeductionsAndRecords />

      {/* 4. Investments, property and capital gains */}
      <HighIncomeInvestmentsAndCgt />

      {/* 5. Superannuation considerations & Division 293 */}
      <Division293AndSuperannuation />

      {/* 6. Year-end planning and major changes */}
      <PreYearEndPlanningAndChanges />

      {/* 7. What to bring to a planning appointment */}
      <WhatToBringToPlanningAppointment />

      {/* 8. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsHighIncome />

      {/* 9. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about high-income tax planning, pre-30 June reviews, Division 293, and advice scope with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="High Income Tax Planning Frequently Asked Questions"
        items={highIncomeTaxPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Executive Tax Advisory"
        title="Book an Appointment"
        subtitle="Discuss your circumstances with Financially Up and clarify the relevant tax and accounting issues, what information is needed and whether further planning or specialist advice should be separately scoped."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedHighIncomeTaxRibbon />
    </main>
  );
}
