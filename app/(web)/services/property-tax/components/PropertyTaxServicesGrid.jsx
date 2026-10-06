"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * PropertyTaxServicesGrid Component
 * ==================================
 * Section 2: Our Property Tax Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 10 primary service offerings of Pillar 10 (Property Tax)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function PropertyTaxServicesGrid() {
  /**
   * The 10 Pillar 10 Services from official client scope document
   */
  const services = [
    {
      id: "investment-property-tax",
      icon: "home",
      tag: "Pillar 10.1",
      title: "Investment Property Tax",
      description:
        "Annual rental property tax return schedules, rental income reconciliation, deductible expense classification, and depreciation integration.",
      href: "/services/property-tax/investment-property-tax",
      actionText: "Rental property tax",
    },
    {
      id: "property-development-tax",
      icon: "bank",
      tag: "Pillar 10.2",
      title: "Property Development Tax",
      description:
        "Tax advice for residential and commercial developers, ordinary income vs capital account assessment, holding costs, and project profit allocation.",
      href: "/services/property-tax/property-development-tax",
      actionText: "Development tax",
    },
    {
      id: "property-subdivision-tax",
      icon: "apartment",
      tag: "Pillar 10.3",
      title: "Property Subdivision Tax",
      description:
        "Subdividing backyards or broadacre land, capital gains vs profit-making undertakings, cost base apportionment across lots, and GST implications.",
      href: "/services/property-tax/property-subdivision-tax",
      actionText: "Subdivision tax",
    },
    {
      id: "property-capital-gains-tax",
      icon: "line-chart",
      tag: "Pillar 10.4",
      title: "Property Capital Gains Tax (CGT)",
      description:
        "Calculating CGT on property disposals, 5-element cost base tracking, 50% CGT discount application, and partial main residence apportionments.",
      href: "/services/property-tax/property-capital-gains-tax",
      actionText: "Property CGT",
    },
    {
      id: "gst-on-property",
      icon: "calculator",
      tag: "Pillar 10.5",
      title: "GST on Property & Margin Scheme",
      description:
        "GST enterprise registrations, input tax credits on development builds, margin scheme calculations, and residential withholding notices.",
      href: "/services/property-tax/gst-on-property",
      actionText: "GST on property",
    },
    {
      id: "negative-gearing",
      icon: "fall",
      tag: "Pillar 10.6",
      title: "Negative Gearing Tax Support",
      description:
        "Tax deductions for rental losses against salary income, borrowing cost amortisation, and PAYG withholding variation applications (ITWV).",
      href: "/services/property-tax/negative-gearing",
      actionText: "Negative gearing",
    },
    {
      id: "main-residence",
      icon: "safety",
      tag: "Pillar 10.7",
      title: "Main Residence CGT Exemption",
      description:
        "Navigating full and partial main residence exemptions, moving between homes, mixed business use, and properties exceeding two hectares.",
      href: "/services/property-tax/main-residence",
      actionText: "Main residence",
    },
    {
      id: "6-year-rule",
      icon: "clock",
      tag: "Pillar 10.8",
      title: "6-Year Absence Rule Advisory",
      description:
        "Treating a former home as your main residence while renting it out for up to 6 years, maintaining CGT-free status upon eventual sale.",
      href: "/services/property-tax/6-year-rule",
      actionText: "6-year rule",
    },
    {
      id: "ownership-structures",
      icon: "solution",
      tag: "Pillar 10.9",
      title: "Property Ownership Structures",
      description:
        "Structuring acquisitions across individual names, joint tenants, tenants in common, family discretionary trusts, companies, or SMSFs.",
      href: "/services/property-tax/ownership-structures",
      actionText: "Ownership structures",
    },
    {
      id: "property-through-smsf",
      icon: "file-protect",
      tag: "Pillar 10.10",
      title: "Property Through SMSF & LRBA",
      description:
        "Tax and superannuation rules for acquiring commercial premises or residential property via an SMSF, sole purpose tests, and bare trusts.",
      href: "/services/property-tax/property-through-smsf",
      actionText: "SMSF property",
    },
  ];

  return (
    <ServicesGrid
      sectionId="property-services-overview"
      tag="Service Portfolio"
      title="Our Property Tax Services"
      subtitle="From residential rental property returns and negative gearing to land subdivision, property development GST, and capital gains tax exemptions."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
