"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * SmsfServicesGrid Component
 * ==========================
 * Section 2: Our SMSF Accounting Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 8 primary service offerings of Pillar 9 (SMSF)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function SmsfServicesGrid() {
  /**
   * The 8 Pillar 9 Services from official client scope document
   */
  const services = [
    {
      id: "smsf-accounting",
      icon: "calculator",
      tag: "Pillar 9.1",
      title: "Annual SMSF Accounting",
      description:
        "Comprehensive annual financial statements, balance sheets, operating statements, and member equity balances compiled from bank and broker feeds.",
      href: "/services/smsf/accounting",
      actionText: "SMSF accounting",
    },
    {
      id: "smsf-establishment",
      icon: "bank",
      tag: "Pillar 9.2",
      title: "SMSF Setup & Establishment",
      description:
        "Fund trust deed drafting, corporate trustee incorporation, ABN & TFN registrations, bank account setup, and superannuation rollover management.",
      href: "/services/smsf/establishment",
      actionText: "Setup SMSF",
    },
    {
      id: "smsf-property",
      icon: "home",
      tag: "Pillar 9.3",
      title: "SMSF Property Accounting",
      description:
        "Accounting for residential and commercial real estate investments, rental income, tenant expense recoveries, and annual market valuation records.",
      href: "/services/smsf/property",
      actionText: "Property accounting",
    },
    {
      id: "smsf-lrba",
      icon: "safety",
      tag: "Pillar 9.4",
      title: "LRBA & Bare Trust Accounting",
      description:
        "Specialised accounting for geared property investments, bare trust holding structures, single acquirable asset rules, and commercial loan schedules.",
      href: "/services/smsf/lrba",
      actionText: "LRBA borrowing",
    },
    {
      id: "smsf-administration",
      icon: "file-text",
      tag: "Pillar 9.5",
      title: "SMSF Trustee Administration",
      description:
        "Ongoing trustee support, contribution cap monitoring, transfer balance cap reporting (TBAR), pension phase drawdowns, and meeting minutes.",
      href: "/services/smsf/administration",
      actionText: "Fund administration",
    },
    {
      id: "smsf-audit-coordination",
      icon: "audit",
      tag: "Pillar 9.6",
      title: "Independent Audit Coordination",
      description:
        "Workpaper preparation and liaison with independent ASIC-registered approved SMSF auditors to ensure compliance with the SIS Act and ATO rules.",
      href: "/services/smsf/audit-coordination",
      actionText: "Audit coordination",
    },
    {
      id: "smsf-compliance",
      icon: "file-protect",
      tag: "Pillar 9.7",
      title: "SMSF Regulatory Compliance",
      description:
        "Guidance on the sole purpose test, investment strategy reviews, in-house asset limits, arm's length transactions, and contravention rectification.",
      href: "/services/smsf/compliance",
      actionText: "Compliance advisory",
    },
    {
      id: "smsf-wind-up",
      icon: "clock",
      tag: "Pillar 9.8",
      title: "SMSF Wind-Up Services",
      description:
        "Orderly fund closure, final asset liquidation or distribution, member balance rollovers to APRA funds, final audit, and ATO deregistration.",
      href: "/services/smsf/wind-up",
      actionText: "Wind-up fund",
    },
  ];

  return (
    <ServicesGrid
      sectionId="smsf-services-overview"
      tag="Service Portfolio"
      title="Our SMSF Accounting Services"
      subtitle="From annual financial accounts and tax returns to property borrowing, pension administration, audit coordination, and fund wind-up."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
