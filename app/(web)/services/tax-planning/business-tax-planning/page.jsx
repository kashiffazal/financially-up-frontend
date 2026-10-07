import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatBusinessTaxPlanningInvolves from "./components/WhatBusinessTaxPlanningInvolves";
import WhoBenefitsFromPlanningReview from "./components/WhoBenefitsFromPlanningReview";
import PlanningThroughoutTheYear from "./components/PlanningThroughoutTheYear";
import BusinessIncomeDeductionsRecords from "./components/BusinessIncomeDeductionsRecords";
import EntityStructureOwnerTransactions from "./components/EntityStructureOwnerTransactions";
import AssetPurchasesAndYearEndPlanning from "./components/AssetPurchasesAndYearEndPlanning";
import WhatInformationToPrepare from "./components/WhatInformationToPrepare";
import HowFinanciallyUpHelps from "./components/HowFinanciallyUpHelps";
import RelatedTaxPlanningRibbon from "./components/RelatedTaxPlanningRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Business Tax Planning Australia | Financially Up",
  description:
    "Business tax planning for Australian owners, covering income, deductions, cash flow, structures, obligations and practical year-end tax decisions.",
  keywords: [
    "business tax planning",
    "small business tax advisor",
    "business tax planning services",
    "company tax planning Australia",
    "trust tax planning",
    "pre 30 june business tax review",
    "business tax strategy Australia",
    "Division 7A tax planning",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/business-tax-planning/",
  },
  openGraph: {
    title: "Business Tax Planning Australia | Financially Up",
    description:
      "Business tax planning for Australian owners, covering income, deductions, cash flow, structures, obligations and practical year-end tax decisions.",
    url: "https://financiallyup.com.au/services/tax-planning/business-tax-planning/",
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
  { label: "Business Tax Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const businessTaxPlanningFaqs = [
  {
    key: "1",
    label: "What is business tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Business tax planning is a forward-looking review of expected business income, deductions, obligations and planned transactions so tax consequences can be considered before decisions are finalised.
      </p>
    ),
  },
  {
    key: "2",
    label: "When should a small business tax advisor review my position?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A review can be useful during the year and before major decisions. Many businesses also schedule a pre-year-end review so there is time to address records, expected liabilities and transactions before 30 June.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does business tax planning include BAS and GST lodgment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. GST and BAS may be considered because they affect the tax and cash-flow position, but preparation or lodgment work is a separate compliance service unless included in the agreed scope.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can business tax planning reduce tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may identify legitimate options or timing considerations, but no tax saving can be guaranteed. The outcome depends on the business’s actual income, deductions, structure, transactions and applicable tax law.
      </p>
    ),
  },
  {
    key: "5",
    label: "Should I get advice before buying or selling a business asset?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Often, yes. The tax consequences can depend on the asset, entity, timing and transaction terms. Seeking advice before signing or completing a major transaction may provide more useful planning options.
      </p>
    ),
  },
];

/**
 * BusinessTaxPlanningPage Component
 * =================================
 * Route: /services/tax-planning/business-tax-planning
 * Pillar 3.1: Business Tax Planning (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessTaxPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessTaxPlanningFaqs.map((faq) => ({
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
        title="Business Tax Planning for Australian Business Owners"
        subtitle="Proactive Tax Planning, Cash Flow Clarity & Year-End Structuring for Australian Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Business tax planning helps owners understand the tax consequences of business decisions before they are finalised. Financially Up provides business tax planning for companies, trusts, partnerships and sole traders that want a clearer view of expected tax obligations, cash-flow requirements and legitimate planning opportunities.
            </span>
            <span className="block mt-2">
              The service is forward-looking. Rather than waiting until the business tax return is prepared, planning reviews the current year, expected results and upcoming decisions so that tax consequences can be considered in time. The appropriate strategy depends on your entity structure, business activity, ownership, timing and other facts.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.1 • Business Advisory Practice"
        highlights={[
          "Forward-Looking Tax Modeling",
          "Registered Tax Agent #26234055",
          "Virtual Consultations Australia-Wide",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Business Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What Does the Service Involve? */}
      <WhatBusinessTaxPlanningInvolves />

      {/* 2. Who May Benefit From a Planning Review? */}
      <WhoBenefitsFromPlanningReview />

      {/* 3. Planning Throughout the Financial Year */}
      <PlanningThroughoutTheYear />

      {/* 4. Business Income, Deductions and Records */}
      <BusinessIncomeDeductionsRecords />

      {/* 5. Entity Structure and Owner Transactions */}
      <EntityStructureOwnerTransactions />

      {/* 6. Asset Purchases, Major Business Decisions & Year-End Planning */}
      <AssetPurchasesAndYearEndPlanning />

      {/* 7. What Information Should You Prepare? */}
      <WhatInformationToPrepare />

      {/* 8. How Financially Up Can Help & Why Choose Us */}
      <HowFinanciallyUpHelps />

      {/* 9. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about business tax planning, pre-30 June reviews, BAS integration, and strategic timing with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Business Tax Planning Frequently Asked Questions"
        items={businessTaxPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Strategic Planning"
        title="Book an Appointment"
        subtitle="Bring your current business figures, tax records and details of upcoming decisions. We can discuss the planning scope, likely tax issues and practical next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedTaxPlanningRibbon />
    </main>
  );
}
