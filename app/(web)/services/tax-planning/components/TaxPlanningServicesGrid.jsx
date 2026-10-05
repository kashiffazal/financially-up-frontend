"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * TaxPlanningServicesGrid Component
 * =================================
 * Section 2: Our Tax Planning Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 11 primary service offerings of Pillar 3 (Tax Planning & Advisory)
 * in an authoritative 3-column layout.
 */
export default function TaxPlanningServicesGrid() {
  /**
   * The 11 Pillar 3 Services from the official client scope document
   */
  const planningServices = [
    {
      id: "business-tax-planning",
      icon: "bank",
      tag: "Pillar 3.1",
      title: "Business Tax Planning",
      description:
        "Business tax planning for Australian owners, covering income, deductions, cash flow, structures, obligations and practical year-end tax decisions.",
      href: "/services/tax-planning/business-tax-planning",
      actionText: "Business planning",
    },
    {
      id: "personal-tax-planning",
      icon: "user",
      tag: "Pillar 3.2",
      title: "Personal Tax Planning",
      description:
        "Personal tax planning for individuals, covering salary, investments, property, capital gains, superannuation and proactive tax decisions.",
      href: "/services/tax-planning/personal-tax-planning",
      actionText: "Personal planning",
    },
    {
      id: "high-income-tax-planning",
      icon: "dollar",
      tag: "Pillar 3.3",
      title: "High-Income Tax Planning",
      description:
        "Tax planning for high-income earners in Australia, covering multiple income streams, investment timing, superannuation caps, deductions and tax considerations.",
      href: "/services/tax-planning/high-income-tax-planning",
      actionText: "High-income planning",
    },
    {
      id: "property-tax-planning",
      icon: "shop",
      tag: "Pillar 3.4",
      title: "Property Tax Planning",
      description:
        "Property tax planning for Australian real estate investors and developers, covering acquisitions, ownership structures, rental deductions, CGT timing and record-keeping.",
      href: "/services/tax-planning/property-tax-planning",
      actionText: "Property planning",
    },
    {
      id: "business-structure-advice",
      icon: "solution",
      tag: "Pillar 3.5",
      title: "Business Structure Advice",
      description:
        "Business structure advice for Australian companies, trusts, partnerships and sole traders, evaluating tax consequences, risk management, and growth flexibility.",
      href: "/services/tax-planning/business-structure-advice",
      actionText: "Structure advice",
    },
    {
      id: "year-end-planning",
      icon: "calendar",
      tag: "Pillar 3.6",
      title: "Year-End Tax Planning",
      description:
        "Year-end tax planning for businesses and individuals before 30 June, reviewing income, expense timing, superannuation contributions and ATO compliance.",
      href: "/services/tax-planning/year-end-planning",
      actionText: "Year-end review",
    },
    {
      id: "cgt-planning",
      icon: "line-chart",
      tag: "Pillar 3.7",
      title: "CGT Planning & Timing",
      description:
        "Capital Gains Tax (CGT) planning for property, shares, and business asset sales, covering timing, cost base calculations, concessions and exemptions.",
      href: "/services/tax-planning/cgt-planning",
      actionText: "CGT planning",
    },
    {
      id: "division-7a-planning",
      icon: "safety",
      tag: "Pillar 3.8",
      title: "Division 7A Planning",
      description:
        "Division 7A tax planning for private companies and shareholders, managing shareholder loans, benchmark interest, minimum repayments and dividend strategies.",
      href: "/services/tax-planning/division-7a-planning",
      actionText: "Division 7A review",
    },
    {
      id: "trust-distribution-planning",
      icon: "crown",
      tag: "Pillar 3.9",
      title: "Trust Distribution Planning",
      description:
        "Trust distribution tax planning for family and discretionary trusts, reviewing 30 June trustee resolutions, beneficiary entitlements and Section 100A integrity rules.",
      href: "/services/tax-planning/trust-distribution-planning",
      actionText: "Trust distributions",
    },
    {
      id: "business-restructuring",
      icon: "global",
      tag: "Pillar 3.10",
      title: "Business Restructuring",
      description:
        "Tax advice on business restructuring, reorganisations, asset transfers, roll-overs and changing entity structures for commercial scalability and efficiency.",
      href: "/services/tax-planning/business-restructuring",
      actionText: "Restructuring advice",
    },
    {
      id: "investment-tax-advice",
      icon: "wallet",
      tag: "Pillar 3.11",
      title: "Investment Tax Advice",
      description:
        "Investment tax advice for Australian portfolios, covering share trading vs investing, franking credits, dividend timing, foreign income and capital gains.",
      href: "/services/tax-planning/investment-tax-advice",
      actionText: "Investment tax",
    },
  ];

  return (
    <ServicesGrid
      sectionId="tax-planning-services"
      tag="Strategic Advisory Scope"
      title="Our Tax Planning Services"
      subtitle="From year-end pre-30 June reviews and corporate restructuring to capital gains timing and Division 7A planning, explore our forward-looking advisory services designed to inform your decisions before they are finalised."
      services={planningServices}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
