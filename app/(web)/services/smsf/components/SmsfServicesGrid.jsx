"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * SmsfServicesGrid Component
 * ==========================
 * Section 3: Our SMSF Accounting Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 8 primary service pillars of SMSF practice as documented in
 * 9th Pillar SMSF.docx (Sub-pages 2 through 9).
 *
 * Background: Clean White.
 */
export default function SmsfServicesGrid() {
  /**
   * The 8 SMSF Sub-Services corresponding to Sections 2-9 of 9th Pillar SMSF.docx:
   * 2. SMSF Accounting
   * 3. SMSF Establishment
   * 4. SMSF Property
   * 5. SMSF LRBA
   * 6. SMSF Administration
   * 7. SMSF Audit Coordination
   * 8. SMSF Compliance
   * 9. SMSF Wind Up
   */
  const services = [
    {
      id: "smsf-accounting",
      icon: "calculator",
      tag: "Sub-Service 1",
      title: "SMSF Accounting & Annual Accounts",
      description:
        "Annual accounts, financial statements, tax reporting, and audit preparation for established self-managed super funds.",
      href: "/services/smsf/accounting",
      actionText: "SMSF accounting",
    },
    {
      id: "smsf-establishment",
      icon: "bank",
      tag: "Sub-Service 2",
      title: "SMSF Setup & Establishment",
      description:
        "Trustee structure selection, deed coordination, ABN/TFN registration, electronic service address, and establishment steps.",
      href: "/services/smsf/establishment",
      actionText: "Setup new fund",
    },
    {
      id: "smsf-property",
      icon: "home",
      tag: "Sub-Service 3",
      title: "SMSF Property Accounting",
      description:
        "Accounting, rental reconciliations, tax reporting, 30 June market valuations, and compliance for fund property assets.",
      href: "/services/smsf/property",
      actionText: "Property accounting",
    },
    {
      id: "smsf-lrba",
      icon: "safety",
      tag: "Sub-Service 4",
      title: "SMSF LRBA Accounting",
      description:
        "Limited recourse borrowing arrangement accounting, bare trust structures, loan schedules, and borrowing compliance.",
      href: "/services/smsf/lrba",
      actionText: "LRBA borrowing",
    },
    {
      id: "smsf-administration",
      icon: "file-text",
      tag: "Sub-Service 5",
      title: "SMSF Trustee Administration",
      description:
        "Ongoing trustee support, records management, member reporting, contributions, pension phase drawdowns, and compliance.",
      href: "/services/smsf/administration",
      actionText: "Fund administration",
    },
    {
      id: "smsf-audit-coordination",
      icon: "audit",
      tag: "Sub-Service 6",
      title: "SMSF Audit Coordination",
      description:
        "Compiling audit-ready workpaper files, liaising with independent approved SMSF auditors, and lodgement readiness.",
      href: "/services/smsf/audit-coordination",
      actionText: "Audit coordination",
    },
    {
      id: "smsf-compliance",
      icon: "file-protect",
      tag: "Sub-Service 7",
      title: "SMSF Compliance Support",
      description:
        "Superannuation operating standards, trustee obligations, rectification of discrepancies, and regulatory requirements.",
      href: "/services/smsf/compliance",
      actionText: "Compliance support",
    },
    {
      id: "smsf-wind-up",
      icon: "clock",
      tag: "Sub-Service 8",
      title: "SMSF Wind Up & Closure",
      description:
        "Final accounts, member benefits rollovers, final audit coordination, final annual return lodgement, and ATO closure.",
      href: "/services/smsf/wind-up",
      actionText: "Wind up fund",
    },
  ];

  return (
    <ServicesGrid
      sectionId="smsf-services-overview"
      tag="Service Portfolio"
      title="Our SMSF Accounting Services"
      subtitle="Financially Up assists Australian trustees across all stages of a self-managed super fund—from establishment and annual accounting to property, audit, compliance, and wind-up."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
