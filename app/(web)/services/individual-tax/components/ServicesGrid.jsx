"use client";

import React from "react";
import FeatureHighlightsSection from "@/components/website/FeatureHighlightsSection";

/**
 * IndividualTaxServicesGrid
 * =========================
 * Section 3: Our Individual Tax Services (The 12 Sub-Services Cards).
 *
 * Utilizes the mutual reusable FeatureHighlightsSection component from
 * `@/components/website/FeatureHighlightsSection` with the signature interactive card design.
 */
export default function IndividualTaxServicesGrid() {
  const services = [
    {
      id: "individual-tax-returns",
      title: "Individual tax returns",
      description:
        "Preparation and lodgement of individual income tax returns, including salary and wages, eligible work-related expenses, interest, dividends and other relevant income.",
      href: "/services/individual-tax/individual-tax-returns",
      icon: "file-text",
      tag: "Pillar 1.1",
    },
    {
      id: "high-income-professionals",
      title: "Tax for high-income professionals",
      description:
        "Tax return and advisory support for professionals and executives with multiple income sources, investments, employee share schemes or other complex reporting matters.",
      href: "/services/individual-tax/high-income-professionals",
      icon: "crown",
      tag: "Pillar 1.2",
    },
    {
      id: "sole-trader-tax",
      title: "Sole trader tax",
      description:
        "Support with business income and expenses reported in an individual return, together with relevant GST and record-keeping considerations.",
      href: "/services/individual-tax/sole-trader-tax-return",
      icon: "shop",
      tag: "Pillar 1.3",
    },
    {
      id: "investment-property-tax",
      title: "Investment property tax",
      description:
        "Assistance with rental income, deductible expenses, depreciation considerations and records relevant to a future disposal.",
      href: "/services/individual-tax/investment-property-tax-accountant",
      icon: "home",
      tag: "Pillar 1.4",
    },
    {
      id: "capital-gains-tax",
      title: "Capital gains tax",
      description:
        "Advice and reporting support when you sell or otherwise dispose of property, shares, crypto assets or other assets that may have capital gains tax consequences.",
      href: "/services/individual-tax/capital-gains-tax",
      icon: "line-chart",
      tag: "Pillar 1.5",
    },
    {
      id: "shares-and-investment-income",
      title: "Shares and investment income",
      description:
        "Reporting of dividends, franking credits, interest, managed fund distributions, exchange-traded funds and relevant investment disposals.",
      href: "/services/individual-tax/share-trading-investment-accountant",
      icon: "dollar",
      tag: "Pillar 1.6",
    },
    {
      id: "crypto-asset-tax",
      title: "Crypto asset tax",
      description:
        "Review and reporting of crypto asset transactions based on the nature of your activity and the records available.",
      href: "/services/individual-tax/cryptocurrency-tax",
      icon: "thunderbolt",
      tag: "Pillar 1.7",
    },
    {
      id: "foreign-income",
      title: "Foreign income",
      description:
        "Assistance with Australian tax residency considerations, overseas income and potential foreign income tax offsets where applicable.",
      href: "/services/individual-tax/foreign-income-tax-accountant",
      icon: "global",
      tag: "Pillar 1.8",
    },
    {
      id: "employee-share-schemes",
      title: "Employee share schemes",
      description:
        "Support with the Australian tax treatment and reporting of employee shares, options and other equity interests.",
      href: "/services/individual-tax/employee-share-schemes",
      icon: "gift",
      tag: "Pillar 1.9",
    },
    {
      id: "tax-return-amendments",
      title: "Tax return amendments",
      description:
        "Review of an already-lodged return and preparation of an amendment where information was missing or incorrect.",
      href: "/services/individual-tax/tax-return-amendments",
      icon: "edit",
      tag: "Pillar 1.10",
    },
    {
      id: "prior-year-tax-returns",
      title: "Prior-year and overdue tax returns",
      description:
        "Practical support to prepare outstanding returns, identify missing records and bring your lodgements up to date.",
      href: "/services/individual-tax/prior-year-overdue-tax-returns",
      icon: "clock",
      tag: "Pillar 1.11",
    },
    {
      id: "deceased-estate-tax-returns",
      title: "Deceased estate tax returns",
      description:
        "Tax return assistance for executors and legal personal representatives, including date-of-death individual tax returns and deceased estate trust tax returns. The work required will depend on the estate and its administration.",
      href: "/services/individual-tax/deceased-estate-tax-returns",
      icon: "safety",
      tag: "Pillar 1.12",
    },
  ];

  return (
    <FeatureHighlightsSection
      sectionId="services-overview"
      tag="Complete Practice Scope"
      title="Our individual tax services"
      subtitle="Whether your circumstances involve standard salary lodgements, multi-entity investments, foreign assets, or overdue years, we provide tailored, ATO-compliant solutions."
      items={services}
      columns={3}
      actionText="Learn more"
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
    />
  );
}
