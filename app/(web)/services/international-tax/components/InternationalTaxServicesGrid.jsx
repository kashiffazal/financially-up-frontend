"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * InternationalTaxServicesGrid Component
 * =======================================
 * Section 2: Our International Tax Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 7 primary service offerings of Pillar 14 (International Tax)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function InternationalTaxServicesGrid() {
  /**
   * The 7 Pillar 14 Services from official client scope document
   */
  const services = [
    {
      id: "foreign-income-tax",
      icon: "dollar",
      tag: "Pillar 14.1",
      title: "Foreign Income Tax Reporting",
      description:
        "Declaring overseas employment salary, consulting fees, foreign bank interest, overseas company dividends, and foreign trust distributions.",
      href: "/services/international-tax/foreign-income-tax",
      actionText: "Foreign income",
    },
    {
      id: "tax-residency",
      icon: "compass",
      tag: "Pillar 14.2",
      title: "Tax Residency Determinations",
      description:
        "Formal assessments under the 4 statutory residency tests (Resides, Domicile, 183-Day, Super) and DTA residency tie-breaker rules.",
      href: "/services/international-tax/tax-residency",
      actionText: "Residency advice",
    },
    {
      id: "new-migrants-tax",
      icon: "global",
      tag: "Pillar 14.3",
      title: "New Migrant & Temporary Resident Tax",
      description:
        "Tax advice for new arrivals and temporary visa holders, maximizing the temporary resident exemption for offshore investment income.",
      href: "/services/international-tax/new-migrants-tax",
      actionText: "New migrants",
    },
    {
      id: "foreign-rental-income",
      icon: "home",
      tag: "Pillar 14.4",
      title: "Foreign Rental Property Tax",
      description:
        "Reconciling overseas rental income, apportioning foreign mortgage interest and management fees, and converting local taxes to AUD.",
      href: "/services/international-tax/foreign-rental-income",
      actionText: "Foreign rentals",
    },
    {
      id: "foreign-tax-offset",
      icon: "calculator",
      tag: "Pillar 14.5",
      title: "Foreign Income Tax Offsets (FITO)",
      description:
        "Calculating and claiming foreign tax credits under Section 770-10 of the ITAA 1997, ensuring you do not pay double tax on foreign earnings.",
      href: "/services/international-tax/foreign-tax-offset",
      actionText: "FITO offsets",
    },
    {
      id: "capital-gains-international",
      icon: "line-chart",
      tag: "Pillar 14.6",
      title: "International Capital Gains Tax",
      description:
        "CGT on foreign shares, offshore real estate disposals, deemed acquisition on arrival, and deemed disposal CGT event I1 on departure.",
      href: "/services/international-tax/capital-gains-international",
      actionText: "Offshore CGT",
    },
    {
      id: "australians-overseas",
      icon: "team",
      tag: "Pillar 14.7",
      title: "Expat Tax Advisory",
      description:
        "Tax planning for Australian expats living in the UK, US, Singapore, or UAE, managing Australian rental properties and HECS/HELP debt repayments.",
      href: "/services/international-tax/australians-overseas",
      actionText: "Expat tax",
    },
  ];

  return (
    <ServicesGrid
      sectionId="international-services-overview"
      tag="Service Portfolio"
      title="Our International Tax Services"
      subtitle="From tax residency determinations and foreign rental reporting to foreign tax offsets (FITO), temporary resident exemptions, and expat CGT."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
