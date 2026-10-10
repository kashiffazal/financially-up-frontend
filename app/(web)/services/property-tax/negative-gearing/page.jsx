import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

import WhatDoesNegativeGearingMean from "./components/WhatDoesNegativeGearingMean";
import WhoNeedsNegativeGearingAccountant from "./components/WhoNeedsNegativeGearingAccountant";
import RentalLossesDeductibleExpenses from "./components/RentalLossesDeductibleExpenses";
import InterestBorrowingPurposeTracing from "./components/InterestBorrowingPurposeTracing";
import RepairsVsCapitalWorksGearing from "./components/RepairsVsCapitalWorksGearing";
import OwnershipAndTaxReportingGearing from "./components/OwnershipAndTaxReportingGearing";
import NegativeGearingRuleChanges2027 from "./components/NegativeGearingRuleChanges2027";
import HowFinanciallyUpHelpsGearing from "./components/HowFinanciallyUpHelpsGearing";
import RelatedPropertyNegativeGearingRibbon from "./components/RelatedPropertyNegativeGearingRibbon";

export const metadata = {
  title: "Negative Gearing Accountant Australia | Financially Up",
  description:
    "Negative gearing accountant support for property investors. Review rental losses, interest, deductions, records and tax reporting with Financially Up.",
  alternates: {
    canonical: "/services/property-tax/negative-gearing",
  },
  openGraph: {
    title: "Negative Gearing Accountant Australia | Financially Up",
    description:
      "Negative gearing accountant support for property investors. Review rental losses, interest, deductions, records and tax reporting with Financially Up.",
    url: "/services/property-tax/negative-gearing",
    type: "website",
  },
};

export default function NegativeGearingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Property Tax", href: "/services/property-tax" },
    { label: "Negative Gearing" },
  ];

  const negativeGearingFaqs = [
    {
      key: "1",
      title: "Can a rental loss reduce my salary or other income?",
      content:
        "Under the rules applying before 1 July 2027, a deductible net rental loss may generally reduce other assessable income, including salary. From 1 July 2027, legislated restrictions apply to established residential properties acquired after 7:30 pm AEST on 12 May 2026. The acquisition date, property type and applicable income year must be checked.",
    },
    {
      key: "2",
      title: "Is the full mortgage repayment deductible on a negatively geared property?",
      content:
        "No. Loan principal repayments are not deductible as a rental expense. Interest may be deductible to the extent the borrowing was used for an income-producing purpose and the relevant requirements are met.",
    },
    {
      key: "3",
      title: "Can I claim a rental loss if the property was vacant?",
      content:
        "Potentially, if the property was genuinely available for rent and the relevant deduction rules are satisfied. Deductions can be affected if the property was kept for private use, not genuinely marketed for rent or unavailable because of private circumstances.",
    },
    {
      key: "4",
      title: "Does negative gearing guarantee a tax refund?",
      content:
        "No. Negative gearing describes a rental tax loss. Whether that loss reduces tax payable or contributes to a refund depends on your other income, deductions, tax already paid and individual circumstances.",
    },
    {
      key: "5",
      title: "Is negative gearing tax advice the same as investment advice?",
      content:
        "No. Tax advice can explain the tax consequences of rental income, expenses and financing. Advice about whether to buy, sell or hold a particular investment or financial product may require an appropriately authorized financial adviser.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Negative Gearing Accounting Services",
        provider: {
          "@type": "AccountingService",
          name: "Financially Up",
          url: "https://financiallyup.com.au",
        },
        description:
          "Professional negative gearing accounting for Australian property investors. Accurately assess rental tax losses, deductible interest, capital works, and statutory compliance.",
        areaServed: "Australia",
        serviceType: "Property Tax & Negative Gearing Accounting",
      },
      {
        "@type": "FAQPage",
        mainEntity: negativeGearingFaqs.map((f) => ({
          "@type": "Question",
          name: f.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.content,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <SubServiceHero
        title="Negative Gearing Accountant for Property Investors"
        subtitle="Review Rental Losses, Deductible Expenses, Loan Tracing & Tax Reporting"
        description="A negative gearing accountant helps property investors work out whether a rental property has produced a deductible tax loss and how that result should be reported. Negative gearing is not a separate tax concession. It describes a situation where deductible rental expenses exceed rental income, creating a net rental loss that may be available to offset other assessable income, depending on the facts. Financially Up can help review rental income, interest and other property expenses, ownership, private use and the records supporting the tax treatment. The aim is to report the property correctly rather than assume every cash shortfall is automatically deductible."
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.6 • Property Tax Practice"
        highlights={[
          "Net Rental Losses vs Cash Shortfalls",
          "Interest Tracing & Borrowing Purpose Audits",
          "1 July 2027 Legislative Reform Readiness",
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

      {/* Main Subpage Sections */}
      <WhatDoesNegativeGearingMean />
      <WhoNeedsNegativeGearingAccountant />
      <RentalLossesDeductibleExpenses />
      <InterestBorrowingPurposeTracing />
      <RepairsVsCapitalWorksGearing />
      <OwnershipAndTaxReportingGearing />
      <NegativeGearingRuleChanges2027 />
      <HowFinanciallyUpHelpsGearing />

      {/* Verbatim FAQs */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Clear answers on negative gearing tax calculations, deduction eligibility, and legislative reforms."
        items={negativeGearingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* Cross-linking Ribbon */}
      <RelatedPropertyNegativeGearingRibbon />

      {/* Pre-Footer CTA Banner */}
      <CallToActionBanner
        tag="Discuss Your Rental Property"
        title="Discuss Your Property Transaction"
        subtitle="If you want help checking a rental loss, interest deductions or the tax treatment of property expenses, book an appointment with Financially Up. We can review the records, explain the reporting position and identify whether separate tax planning or specialist advice is required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />
    </main>
  );
}
