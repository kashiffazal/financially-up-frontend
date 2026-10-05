"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * BusinessStructuresGrid Component
 * =================================
 * Section 2: Our Business Structure Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 7 primary service offerings of Pillar 6 (Business Structures)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function BusinessStructuresGrid() {
  /**
   * The 7 Pillar 6 Services from official client scope document
   */
  const services = [
    {
      id: "company-registration",
      icon: "bank",
      tag: "Pillar 6.1",
      title: "Company Registration Australia",
      description:
        "Proprietary limited (Pty Ltd) company setup, ASIC registration, director ID coordination, share structure allocations, and post-incorporation tax setup.",
      href: "/services/business-structures/company-registration",
      actionText: "Company registration",
    },
    {
      id: "abn-registration",
      icon: "file-text",
      tag: "Pillar 6.2",
      title: "ABN Registration Services",
      description:
        "ABN registration support for businesses and eligible entities. Confirm commercial enterprise entitlement, prepare associate details, and coordinate tax setups.",
      href: "/services/business-structures/abn-registration",
      actionText: "ABN registration",
    },
    {
      id: "business-name-registration",
      icon: "shop",
      tag: "Pillar 6.3",
      title: "Business Name Registration",
      description:
        "ASIC business name registration for trading names. Check name availability, link names to your entity's ABN, and ensure trading compliance before launch.",
      href: "/services/business-structures/business-name-registration",
      actionText: "Business names",
    },
    {
      id: "business-structure-advice",
      icon: "protect",
      tag: "Pillar 6.4",
      title: "Business Structure Advice",
      description:
        "Independent accountant-led structure advice comparing sole trader, partnership, company, and trust models based on risk, tax, control, and growth plans.",
      href: "/services/business-structures/business-structure-advice",
      actionText: "Structure advice",
    },
    {
      id: "partnership-registration",
      icon: "team",
      tag: "Pillar 6.5",
      title: "Partnership Setup Australia",
      description:
        "Partnership setup covering ABN, TFN, profit-sharing frameworks, commercial tax registrations, bank accounts, and foundational accounting records.",
      href: "/services/business-structures/partnership-registration",
      actionText: "Partnership setup",
    },
    {
      id: "corporate-trustee",
      icon: "safety",
      tag: "Pillar 6.6",
      title: "Corporate Trustee Setup",
      description:
        "Establish a dedicated Pty Ltd company to act as trustee for discretionary family or unit trusts, ensuring clean legal governance and asset separation.",
      href: "/services/business-structures/corporate-trustee",
      actionText: "Corporate trustee",
    },
    {
      id: "business-restructure",
      icon: "rise",
      tag: "Pillar 6.7",
      title: "Business Restructuring Services",
      description:
        "Transition between structures as you scale. Sole trader to company roll-overs, CGT small business concessions, asset transfers, and closing old entities.",
      href: "/services/business-structures/business-restructure",
      actionText: "Restructuring advice",
    },
  ];

  return (
    <ServicesGrid
      sectionId="business-structures-overview"
      tag="Practice Scope"
      title="Our Business Structure Services"
      subtitle="From ASIC company incorporations and ABN registrations to complex trust setups and commercial restructures, explore our tailored business entity services."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
