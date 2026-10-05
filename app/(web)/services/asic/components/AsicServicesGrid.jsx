"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * AsicServicesGrid Component
 * ===========================
 * Section 2: Our ASIC Compliance Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 9 primary service offerings of Pillar 7 (ASIC Compliance)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function AsicServicesGrid() {
  /**
   * The 9 Pillar 7 Services from official client scope document
   */
  const services = [
    {
      id: "registered-agent",
      icon: "safety",
      tag: "Pillar 7.1",
      title: "ASIC Registered Agent Service",
      description:
        "Appoint Financially Up as your ASIC registered agent for centralised corporate correspondence, agent portal lodgements, and timely annual review alerts.",
      href: "/services/asic/registered-agent",
      actionText: "Registered agent",
    },
    {
      id: "company-changes",
      icon: "file-text",
      tag: "Pillar 7.2",
      title: "Company Changes (Form 484)",
      description:
        "Lodge routine company updates for addresses, officeholders, and share structures within the statutory 28-day timeframe to avoid ASIC late fees.",
      href: "/services/asic/company-changes",
      actionText: "Company changes",
    },
    {
      id: "business-name-renewal",
      icon: "shop",
      tag: "Pillar 7.3",
      title: "Business Name Renewal",
      description:
        "Renew registered ASIC business names for 1 or 3 years, update trading contact details, and safeguard brand continuity under your ABN.",
      href: "/services/asic/business-name-renewal",
      actionText: "Renew business name",
    },
    {
      id: "company-deregistration",
      icon: "clock",
      tag: "Pillar 7.4",
      title: "Voluntary Company Deregistration",
      description:
        "Voluntary deregistration (Form 6010) for solvent companies with no liabilities, no assets over $1,000, and finalised ATO tax returns.",
      href: "/services/asic/company-deregistration",
      actionText: "Deregister company",
    },
    {
      id: "director-changes",
      icon: "user",
      tag: "Pillar 7.5",
      title: "Director Changes & Consents",
      description:
        "Appoint or resign company directors and secretaries, obtain signed written consents, and verify Director IDs prior to formal ASIC notification.",
      href: "/services/asic/director-changes",
      actionText: "Director changes",
    },
    {
      id: "share-changes",
      icon: "gift",
      tag: "Pillar 7.6",
      title: "Share Issues & Transfers",
      description:
        "Record new share allocations, transfers between members, cancellations, and update statutory member registers alongside Form 484 filings.",
      href: "/services/asic/share-changes",
      actionText: "Share changes",
    },
    {
      id: "address-changes",
      icon: "home",
      tag: "Pillar 7.7",
      title: "Registered Office & Address Updates",
      description:
        "Update registered office, principal place of business, and director residential addresses on the ASIC register within the 28-day legal window.",
      href: "/services/asic/address-changes",
      actionText: "Address updates",
    },
    {
      id: "annual-reviews",
      icon: "calendar",
      tag: "Pillar 7.8",
      title: "ASIC Annual Reviews & Solvency",
      description:
        "Verify annual company statements, manage invoice due dates, avoid late fees, and document statutory director solvency resolutions within 2 months.",
      href: "/services/asic/annual-reviews",
      actionText: "Annual reviews",
    },
    {
      id: "corporate-registers",
      icon: "book",
      tag: "Pillar 7.9",
      title: "Corporate Registers Maintenance",
      description:
        "Maintain compliant registers of members, directors, minutes of meetings, and company constitutions required under the Corporations Act.",
      href: "/services/asic/corporate-registers",
      actionText: "Corporate registers",
    },
  ];

  return (
    <ServicesGrid
      sectionId="asic-services-overview"
      tag="Compliance Scope"
      title="Our ASIC Compliance Services"
      subtitle="From registered agent representation and annual statement reviews to Form 484 changes, director updates, and voluntary deregistration."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
