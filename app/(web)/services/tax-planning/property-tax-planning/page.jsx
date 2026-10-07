import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatPropertyTaxPlanningCovers from "./components/WhatPropertyTaxPlanningCovers";
import WhoBenefitsFromPropertyTaxPlanning from "./components/WhoBenefitsFromPropertyTaxPlanning";
import RentalIncomeExpensesBorrowing from "./components/RentalIncomeExpensesBorrowing";
import OwnershipAndStructureConsiderations from "./components/OwnershipAndStructureConsiderations";
import PropertyCapitalGainsAndTiming from "./components/PropertyCapitalGainsAndTiming";
import PlanningBeforeRenovationsRefinanceSale from "./components/PlanningBeforeRenovationsRefinanceSale";
import RecordsSupportingPropertyPlanning from "./components/RecordsSupportingPropertyPlanning";
import HowFinanciallyUpHelpsProperty from "./components/HowFinanciallyUpHelpsProperty";
import RelatedPropertyTaxRibbon from "./components/RelatedPropertyTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Property Tax Planning for Investors | Financially Up",
  description:
    "Property tax planning for investors covering ownership, rental income, deductions, CGT, financing and record keeping before key decisions.",
  keywords: [
    "property tax planning",
    "property tax planning for investors",
    "investment property tax advice",
    "rental property tax planning",
    "property cgt planning Australia",
    "property ownership structure tax",
    "negative gearing tax planning",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/property-tax-planning/",
  },
  openGraph: {
    title: "Property Tax Planning for Investors | Financially Up",
    description:
      "Property tax planning for investors covering ownership, rental income, deductions, CGT, financing and record keeping before key decisions.",
    url: "https://financiallyup.com.au/services/tax-planning/property-tax-planning/",
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
  { label: "Property Tax Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const propertyTaxPlanningFaqs = [
  {
    key: "1",
    label: "What is property tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is a forward-looking review of the tax implications of property ownership, finance, rental activity, improvements and disposal. It is different from simply reporting rental income after the year has ended.
      </p>
    ),
  },
  {
    key: "2",
    label: "Should I get tax advice before buying an investment property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can be useful, particularly if ownership, finance or structure choices are still open. Tax treatment depends on the facts, and legal and lending advice may also be required.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is interest on an investment property loan always deductible?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Deductibility generally depends on how the borrowed funds are used and whether the property is used to produce assessable income. Private or mixed use can require apportionment.
      </p>
    ),
  },
  {
    key: "4",
    label: "Are renovations immediately deductible?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. Repairs, initial repairs, improvements, depreciating assets and capital works can be treated differently. The nature and timing of the expenditure need to be reviewed.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does property tax planning include a CGT calculation when I sell?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A planning review can identify likely CGT issues. A detailed calculation can be scoped separately and supported through Financially Up’s Capital Gains Tax service where required.
      </p>
    ),
  },
];

/**
 * PropertyTaxPlanningPage Component
 * =================================
 * Route: /services/tax-planning/property-tax-planning
 * Pillar 3.4: Property Tax Planning (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PropertyTaxPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: propertyTaxPlanningFaqs.map((faq) => ({
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
        title="Property Tax Planning for Australian Investors"
        subtitle="Strategic Property Ownership, Borrowing Purpose & CGT Timing for Australian Investors"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Property tax planning is the process of considering tax consequences before key property decisions are made. For investors, that can include how a property will be owned, how borrowing is used, what records should be kept, the treatment of rental income and expenses, and the potential tax impact of a future sale.
            </span>
            <span className="block mt-2">
              Financially Up helps property investors review these issues in the Australian tax context. The service is different from simply preparing a rental schedule after year end: it focuses on decisions, timing and documentation before or during the investment period where practical.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.4 • Property Advisory Practice"
        highlights={[
          "Borrowing Purpose & Interest Deductibility",
          "Ownership Structure Tax Modeling",
          "Pre-Sale CGT Event A1 & Timing Analysis",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What does property tax planning cover? */}
      <WhatPropertyTaxPlanningCovers />

      {/* 2. Who may benefit from property tax planning? */}
      <WhoBenefitsFromPropertyTaxPlanning />

      {/* 3. Rental income, expenses and borrowing */}
      <RentalIncomeExpensesBorrowing />

      {/* 4. Ownership and structure considerations */}
      <OwnershipAndStructureConsiderations />

      {/* 5. Capital gains and timing */}
      <PropertyCapitalGainsAndTiming />

      {/* 6. Planning before renovations, refinancing or a sale */}
      <PlanningBeforeRenovationsRefinanceSale />

      {/* 7. Records that support property tax planning */}
      <RecordsSupportingPropertyPlanning />

      {/* 8. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsProperty />

      {/* 9. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about property tax planning, loan interest deductibility, renovations, and CGT timing with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Property Tax Planning Frequently Asked Questions"
        items={propertyTaxPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Property Tax Advisory"
        title="Book an Appointment"
        subtitle="Discuss your circumstances with Financially Up and clarify the relevant tax and accounting issues, what information is needed and whether further planning or specialist advice should be separately scoped."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedPropertyTaxRibbon />
    </main>
  );
}
