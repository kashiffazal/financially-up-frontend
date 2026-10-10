import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhoNeedsInvestmentPropertyTax from "./components/WhoNeedsInvestmentPropertyTax";
import WhatIsIncludedInvestmentTax from "./components/WhatIsIncludedInvestmentTax";
import RentalDeductionsConditions from "./components/RentalDeductionsConditions";
import RepairsVsCapitalImprovements from "./components/RepairsVsCapitalImprovements";
import InterestDeductionsTracing from "./components/InterestDeductionsTracing";
import CapitalWorksDepreciation from "./components/CapitalWorksDepreciation";
import PropertyDisposalCgtContext from "./components/PropertyDisposalCgtContext";
import DocumentsToProvideRental from "./components/DocumentsToProvideRental";
import VacanciesPrivateUseCoOwnership from "./components/VacanciesPrivateUseCoOwnership";
import RentalTaxReturnProcess from "./components/RentalTaxReturnProcess";
import WhyChooseFinanciallyUpRental from "./components/WhyChooseFinanciallyUpRental";
import RelatedPropertyTaxRibbon from "./components/RelatedPropertyTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of 10th Pillar Property Tax.docx)
 */
export const metadata = {
  title: "Investment Property Tax Australia | Financially Up",
  description:
    "Investment property tax support for rental income, deductions, interest, repairs, depreciation and tax return reporting for property investors across Australia.",
  keywords: [
    "investment property tax",
    "rental property tax return",
    "rental property deductions Australia",
    "investment property accountant",
    "negative gearing rental tax",
    "property depreciation schedule tax",
    "landlord tax return Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/property-tax/investment-property-tax/",
  },
  openGraph: {
    title: "Investment Property Tax Australia | Financially Up",
    description:
      "Investment property tax support for rental income, deductions, interest, repairs, depreciation and tax return reporting for property investors across Australia.",
    url: "https://financiallyup.com.au/services/property-tax/investment-property-tax/",
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
  { label: "Property Tax", href: "/services/property-tax" },
  { label: "Investment Property Tax" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const investmentPropertyFaqs = [
  {
    key: "1",
    label: "What rental property income do I need to declare?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, gross rent and other rental-related amounts need to be considered, including amounts received through an agent. The correct treatment depends on the nature of each receipt and your ownership interest.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I claim repairs made immediately after buying a rental property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. Work that remedies defects, damage or deterioration that existed when the property was acquired may be an initial repair and capital in nature rather than immediately deductible.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I claim all interest on an investment property loan?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Only the portion that relates to an income-producing use of the borrowed funds is generally relevant to a deduction. Redraws, mixed-purpose borrowing and private use can require apportionment.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I need to keep property records after the annual tax return is lodged?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Some records can remain relevant well beyond the annual return, particularly documents needed to establish the property cost base or explain capital works and ownership history when the property is later sold.
      </p>
    ),
  },
];

/**
 * InvestmentPropertyTaxPage Component
 * ===================================
 * Route: /services/property-tax/investment-property-tax
 * Pillar 10.1: Investment Property Tax (Page 2 of 10th Pillar Property Tax.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function InvestmentPropertyTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: investmentPropertyFaqs.map((faq) => ({
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
        title="Investment Property Tax"
        subtitle="Rental Income, Deductions, Interest, Depreciation & Annual Tax Reporting for Australian Property Investors"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Investment property tax is the annual tax treatment of rental income, property expenses and related records, together with the tax consequences that arise when the property is refinanced, improved or eventually sold. The main challenge is not simply collecting receipts; it is classifying each amount correctly and matching deductions to the property, ownership and period of income-producing use.
            </span>
            <span className="block mt-2">
              Financially Up assists property investors with rental property tax return preparation and related accounting. We can review rental statements, interest, repairs, capital works, depreciating assets and ownership details, and identify issues that need separate CGT or tax-planning work.
            </span>
          </span>
        }
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.1 • Property Tax Practice"
        highlights={[
          "Rental Income & Expense Classification",
          "Interest Tracing & Borrowing Apportionment",
          "Capital Works & Depreciation Integration",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. Who Needs Investment Property Tax Support */}
      <WhoNeedsInvestmentPropertyTax />

      {/* 2. What Is Included in Investment Property Tax */}
      <WhatIsIncludedInvestmentTax />

      {/* 3. When Can Rental Property Expenses Be Deductible */}
      <RentalDeductionsConditions />

      {/* 4. Repairs, Improvements and Initial Repairs */}
      <RepairsVsCapitalImprovements />

      {/* 5. Interest Deductions Depend on How Borrowed Money Is Used */}
      <InterestDeductionsTracing />

      {/* 6. Capital Works, Depreciating Assets and Records */}
      <CapitalWorksDepreciation />

      {/* 7. What Happens When the Investment Property Is Sold */}
      <PropertyDisposalCgtContext />

      {/* 8. What Documents Should You Provide */}
      <DocumentsToProvideRental />

      {/* 9. Vacancies, Private Use and Co-Ownership */}
      <VacanciesPrivateUseCoOwnership />

      {/* 10. How the Rental Property Tax-Return Process Works */}
      <RentalTaxReturnProcess />

      {/* 11. How Financially Up Can Help */}
      <WhyChooseFinanciallyUpRental />

      {/* 12. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about rental property tax return preparation, deductible expenses, interest tracing, and record keeping with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Investment Property Tax Frequently Asked Questions"
        items={investmentPropertyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 13. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an appointment with Financially Up to discuss your property circumstances, records and the appropriate accounting or tax service scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />

      {/* 14. Related Service Ribbon */}
      <RelatedPropertyTaxRibbon />
    </main>
  );
}
