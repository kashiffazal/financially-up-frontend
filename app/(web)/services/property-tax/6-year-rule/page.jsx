import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

import HowSixYearRuleWorks from "./components/HowSixYearRuleWorks";
import HomeFirstRuleAndPreOccupancyRental from "./components/HomeFirstRuleAndPreOccupancyRental";
import OverlappingResidencesAndStrategicChoice from "./components/OverlappingResidencesAndStrategicChoice";
import ExceedingSixYearsAndRestartingClock from "./components/ExceedingSixYearsAndRestartingClock";
import ValuationRoleAndSaleWithinSixYears from "./components/ValuationRoleAndSaleWithinSixYears";
import WhatFinanciallyUpReviewsSixYearRule from "./components/WhatFinanciallyUpReviewsSixYearRule";
import RelatedSixYearRuleRibbon from "./components/RelatedSixYearRuleRibbon";

export const metadata = {
  title: "6 Year Rule Accountant | CGT on Former Home | Financially Up",
  description:
    "6 year rule accountant support for former homes rented after moving out. Review eligibility, overlapping residences, valuations and CGT before selling.",
  alternates: {
    canonical: "/services/property-tax/6-year-rule",
  },
  openGraph: {
    title: "6 Year Rule Accountant | CGT on Former Home | Financially Up",
    description:
      "6 year rule accountant support for former homes rented after moving out. Review eligibility, overlapping residences, valuations and CGT before selling.",
    url: "/services/property-tax/6-year-rule",
    type: "website",
  },
};

export default function SixYearRulePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Property Tax", href: "/services/property-tax" },
    { label: "6-Year Rule" },
  ];

  const sixYearRuleFaqs = [
    {
      key: "1",
      title: "Does the 6 year rule mean I can rent my former home for six years with no CGT?",
      content:
        "It may allow you to continue treating a former main residence as your main residence for up to six years while it produces income, but the outcome depends on the conditions and any choice involving another property. It should not be assumed automatically.",
    },
    {
      key: "2",
      title: "Can the property be rented before I ever lived in it?",
      content:
        "A rental period before the property became your main residence is generally not covered by the six-year absence rule. The rule applies to a former home after it has genuinely been your main residence.",
    },
    {
      key: "3",
      title: "Can I buy another home and still use the six-year rule on the old one?",
      content:
        "You can own another property, but if you choose to continue treating the former home as your main residence, you generally cannot also claim the main residence exemption for the new home for the same period, except where limited overlap rules apply.",
    },
    {
      key: "4",
      title: "Does moving back in restart the six-year rule?",
      content:
        "Potentially. If you genuinely re-establish the property as your main residence and later move out again, a new absence period may qualify. The occupation needs to be genuine and supported by the facts.",
    },
    {
      key: "5",
      title: "What if I rent the former home for more than six years?",
      content:
        "A partial exemption may apply. The period after the available six-year income-producing absence can become taxable, and the correct calculation may also involve special main-residence and market-value rules.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "6-Year Absence Rule CGT Accounting Services",
        provider: {
          "@type": "AccountingService",
          name: "Financially Up",
          url: "https://financiallyup.com.au",
        },
        description:
          "Specialised Section 118-145 six-year rule capital gains tax advice. Retain your main residence exemption on former homes rented out across Australia.",
        areaServed: "Australia",
        serviceType: "Property CGT Absence Concession Advice",
      },
      {
        "@type": "FAQPage",
        mainEntity: sixYearRuleFaqs.map((f) => ({
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
        title="6 Year Rule Accountant for Former Homes"
        subtitle="Main Residence Absence Concession, Overlapping Residences & CGT Exemptions"
        description="A 6 year rule accountant helps determine whether a former home can continue to be treated as your main residence for capital gains tax after you move out and rent it. Under the CGT absence rule, a former home can generally continue to be treated as your main residence for up to six years while it is used to produce income, provided the relevant conditions are met. The rule is optional and interacts with other main-residence choices. Financially Up can review the dates you lived in the property, rental periods, other homes, change-of-use valuations and sale timing so the exemption is applied to the facts rather than assumed."
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.8 • Property Tax Practice"
        highlights={[
          "Section 118-145 Absence Exemption Rules",
          "Dual-Home Election & Strategic CGT Modelling",
          "Contract Exchange Timing & Valuation Tracking",
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
      <HowSixYearRuleWorks />
      <HomeFirstRuleAndPreOccupancyRental />
      <OverlappingResidencesAndStrategicChoice />
      <ExceedingSixYearsAndRestartingClock />
      <ValuationRoleAndSaleWithinSixYears />
      <WhatFinanciallyUpReviewsSixYearRule />

      {/* Verbatim FAQs */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Clear answers on 6-year rule mechanics, overlapping homes, and ATO compliance."
        items={sixYearRuleFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* Cross-linking Ribbon */}
      <RelatedSixYearRuleRibbon />

      {/* Pre-Footer CTA Banner */}
      <CallToActionBanner
        tag="Planning to Sell Your Former Home?"
        title="Discuss Your Property Transaction"
        subtitle="If you moved out of a home, rented it and are considering a sale, book an appointment with Financially Up. We can review the six-year rule, overlapping main-residence choices, relevant valuations and the CGT calculation before the return is prepared."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />
    </main>
  );
}
