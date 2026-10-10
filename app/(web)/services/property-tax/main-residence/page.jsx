import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

import WhenIsHomeFullyExempt from "./components/WhenIsHomeFullyExempt";
import WhenExemptionBecomesPartial from "./components/WhenExemptionBecomesPartial";
import HomeFirstUsedToProduceIncomeRule from "./components/HomeFirstUsedToProduceIncomeRule";
import BuyingBeforeSellingAndPartialUse from "./components/BuyingBeforeSellingAndPartialUse";
import RentedBeforeMovingInAndResidency from "./components/RentedBeforeMovingInAndResidency";
import WhatFinanciallyUpReviewsMainResidence from "./components/WhatFinanciallyUpReviewsMainResidence";
import RelatedMainResidenceRibbon from "./components/RelatedMainResidenceRibbon";

export const metadata = {
  title: "Main Residence Exemption Accountant | Financially Up",
  description:
    "Main residence exemption accountant support for home sales, former homes and partial CGT exemptions. Review occupancy, rental use and records before sale.",
  alternates: {
    canonical: "/services/property-tax/main-residence",
  },
  openGraph: {
    title: "Main Residence Exemption Accountant | Financially Up",
    description:
      "Main residence exemption accountant support for home sales, former homes and partial CGT exemptions. Review occupancy, rental use and records before sale.",
    url: "/services/property-tax/main-residence",
    type: "website",
  },
};

export default function MainResidencePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Property Tax", href: "/services/property-tax" },
    { label: "Main Residence" },
  ];

  const mainResidenceFaqs = [
    {
      key: "1",
      title: "Do I pay CGT when I sell my main residence?",
      content:
        "A full exemption may apply where the property qualifies as your main residence for the whole relevant ownership period and the other conditions are met. Rental use, business use, land area, periods before occupation or other circumstances can create a partial taxable gain.",
    },
    {
      key: "2",
      title: "What if I rented the property before I moved into it?",
      content:
        "The period before the property became your main residence is generally not covered by the main residence exemption. A partial exemption may therefore apply when you later sell.",
    },
    {
      key: "3",
      title: "Do I need a valuation when my home becomes a rental property?",
      content:
        "A market valuation can be required where the home-first-used-to-produce-income rule applies. Because that rule has specific conditions, the change-of-use facts should be reviewed rather than assuming a valuation is always or never required.",
    },
    {
      key: "4",
      title: "Can I have two main residences for CGT purposes?",
      content:
        "Generally only one property can be treated as your main residence for a period, although limited overlap rules can apply when moving between homes and other specific rules may affect the outcome.",
    },
    {
      key: "5",
      title: "Is a principal residence the same as a main residence for CGT?",
      content:
        "For federal CGT purposes, the ATO generally uses the term main residence. State and territory taxes may use terms such as principal place of residence under different rules, so the concepts should not be assumed to be identical.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Main Residence CGT Exemption Accounting Services",
        provider: {
          "@type": "AccountingService",
          name: "Financially Up",
          url: "https://financiallyup.com.au",
        },
        description:
          "Expert main residence exemption accounting for Australian homeowners and property investors. Navigate full and partial CGT exemptions, Section 118-192 valuations, and change of use rules.",
        areaServed: "Australia",
        serviceType: "Property Capital Gains Tax Exemption Advice",
      },
      {
        "@type": "FAQPage",
        mainEntity: mainResidenceFaqs.map((f) => ({
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
        title="Main Residence Exemption Accountant"
        subtitle="Review Occupancy, Rental Use, Section 118-192 Valuations & Partial CGT"
        description="A main residence exemption accountant helps determine whether the sale of a home is fully or partly exempt from capital gains tax and what records are needed to support the position. A home can be fully exempt in straightforward cases, but rental use, business use, delayed occupancy, multiple homes, absences and changes of use can create a partial CGT outcome. Financially Up can review the ownership and occupancy timeline, income-producing use, sale contract date and relevant property records so the CGT treatment is based on the actual facts. This page focuses on the main residence exemption and partial exemption issues, rather than general rental-property deductions."
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.7 • Property Tax Practice"
        highlights={[
          "Full vs Partial Exemption Timeline Reconstruction",
          "Section 118-192 Market Value Reset Valuations",
          "Foreign Resident CGT Exemption Compliance",
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
      <WhenIsHomeFullyExempt />
      <WhenExemptionBecomesPartial />
      <HomeFirstUsedToProduceIncomeRule />
      <BuyingBeforeSellingAndPartialUse />
      <RentedBeforeMovingInAndResidency />
      <WhatFinanciallyUpReviewsMainResidence />

      {/* Verbatim FAQs */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Clear answers on main residence CGT exemptions, timeline rules, and ATO compliance."
        items={mainResidenceFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* Cross-linking Ribbon */}
      <RelatedMainResidenceRibbon />

      {/* Pre-Footer CTA Banner */}
      <CallToActionBanner
        tag="Selling Your Home?"
        title="Discuss Your Property Transaction"
        subtitle="If you are selling a home, a former home or a property that has changed between private and rental use, book an appointment with Financially Up. We can review the timeline and records, identify whether the exemption is full or partial and prepare the CGT reporting within scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />
    </main>
  );
}
