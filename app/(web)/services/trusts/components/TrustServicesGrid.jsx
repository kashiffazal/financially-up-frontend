"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * TrustServicesGrid Component
 * ===========================
 * Section 2: Our Trust Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 10 primary service offerings of Pillar 8 (Trust Services)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function TrustServicesGrid() {
  /**
   * The 10 Pillar 8 Services from official client scope document
   */
  const services = [
    {
      id: "family-trust",
      icon: "user",
      tag: "Pillar 8.1",
      title: "Family Trust Accountant",
      description:
        "Discretionary trust accounting, annual accounts, beneficiary distribution schedules, family trust elections (FTE), and complete tax compliance.",
      href: "/services/trusts/family-trust",
      actionText: "Family trusts",
    },
    {
      id: "unit-trust",
      icon: "line-chart",
      tag: "Pillar 8.2",
      title: "Unit Trust Accounting",
      description:
        "Fixed unit trust accounting for commercial joint ventures and property syndicates, unit registers, and proportional profit allocations.",
      href: "/services/trusts/unit-trust",
      actionText: "Unit trusts",
    },
    {
      id: "bare-trust",
      icon: "home",
      tag: "Pillar 8.3",
      title: "Bare Trust & SMSF Borrowing",
      description:
        "Accounting support for holding trusts and Limited Recourse Borrowing Arrangements (LRBA) used by self-managed super funds acquiring property.",
      href: "/services/trusts/bare-trust",
      actionText: "Bare trusts",
    },
    {
      id: "corporate-trustee",
      icon: "bank",
      tag: "Pillar 8.4",
      title: "Corporate Trustee Accounting",
      description:
        "Accounting coordination for proprietary companies acting as trustee, ensuring asset separation from personal estates and ASIC compliance.",
      href: "/services/trusts/corporate-trustee",
      actionText: "Corporate trustee",
    },
    {
      id: "trust-tax-returns",
      icon: "file-text",
      tag: "Pillar 8.5",
      title: "Trust Tax Returns Lodgement",
      description:
        "Annual preparation and ATO lodgement of trust tax returns, calculating Section 95 net income, capital gains discounts, and franking credits.",
      href: "/services/business-tax/trust-tax-returns",
      actionText: "Trust tax returns",
    },
    {
      id: "trust-restructuring",
      icon: "rise",
      tag: "Pillar 8.6",
      title: "Trust Restructuring Advisory",
      description:
        "Reorganising trust assets, rolling trading activities into corporate structures, assessing CGT roll-over relief, and closing legacy entities.",
      href: "/services/trusts/trust-restructuring",
      actionText: "Restructuring",
    },
    {
      id: "change-trustee",
      icon: "safety",
      tag: "Pillar 8.7",
      title: "Change of Trustee Support",
      description:
        "Accounting, asset register, bank, and ABN/TFN updates following the retirement, resignation, or appointment of an individual or corporate trustee.",
      href: "/services/trusts/change-trustee",
      actionText: "Change trustee",
    },
    {
      id: "appointor-changes",
      icon: "crown",
      tag: "Pillar 8.8",
      title: "Appointor & Governance Review",
      description:
        "Reviewing trust deed appointor provisions, succession terms, and power of appointment documentation alongside qualified legal advisers.",
      href: "/services/trusts/appointor-changes",
      actionText: "Appointor review",
    },
    {
      id: "trust-abn-tfn",
      icon: "file-protect",
      tag: "Pillar 8.9",
      title: "Trust ABN & TFN Registrations",
      description:
        "Apply for dedicated Australian Business Numbers and Tax File Numbers for newly established discretionary, unit, or bare trust structures.",
      href: "/services/trusts/trust-abn-tfn",
      actionText: "ABN & TFN setup",
    },
    {
      id: "distribution-planning",
      icon: "calculator",
      tag: "Pillar 8.10",
      title: "Trust Distribution Planning (30 June)",
      description:
        "Proactive pre-year-end distribution planning, preparing effective trustee resolutions by 30 June, and reviewing Section 100A integrity rules.",
      href: "/services/trusts/distribution-planning",
      actionText: "Distribution planning",
    },
  ];

  return (
    <ServicesGrid
      sectionId="trust-services-overview"
      tag="Practice Scope"
      title="Our Trust Accounting Services"
      subtitle="From family discretionary trusts and commercial unit trusts to SMSF bare trusts, June 30 distribution planning, and annual ATO tax returns."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
