"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * RdTaxServicesGrid Component
 * ============================
 * Section: Our R&D Tax Incentive Services
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 4 sub-services from Pillar 15 (R&D Tax Incentive) in an
 * authoritative 2-column layout with Clean White background.
 */
export default function RdTaxServicesGrid() {
  const services = [
    {
      id: "rnd-tax-claim-preparation",
      icon: "calculator",
      tag: "Pillar 15.1",
      title: "R&D Tax Claim Preparation",
      description:
        "Prepare an R&D tax claim using traceable project costs and records. Reconcile expenditure, registration details and the company tax return.",
      href: "/services/rd-tax-incentive/rnd-tax-claim-preparation",
      actionText: "Claim preparation",
    },
    {
      id: "eligibility-assessment",
      icon: "experiment",
      tag: "Pillar 15.2",
      title: "R&D Tax Incentive Eligibility Assessment",
      description:
        "Check whether your company and R&D activities qualify. Review the entity, experiments, supporting work, records and proposed expenditure.",
      href: "/services/rd-tax-incentive/eligibility-assessment",
      actionText: "Eligibility review",
    },
    {
      id: "government-grants",
      icon: "dollar",
      tag: "Pillar 15.3",
      title: "Government Grants Support",
      description:
        "Government grant support for Australian businesses. Assess eligibility, organize evidence and prepare a clear, compliant application with Financially Up.",
      href: "/services/rd-tax-incentive/government-grants",
      actionText: "Grant support",
    },
    {
      id: "application-support",
      icon: "file-done",
      tag: "Pillar 15.4",
      title: "R&D Tax Incentive Application Support",
      description:
        "R&D Tax Incentive application support for registration, records and claim preparation. Organize activity evidence, costs and deadlines.",
      href: "/services/rd-tax-incentive/application-support",
      actionText: "Application support",
    },
  ];

  return (
    <ServicesGrid
      sectionId="rd-services-overview"
      tag="Service Portfolio"
      title="Our R&D Tax Incentive Services"
      subtitle="From upfront eligibility assessments and customer portal registrations to financial expenditure reconciliations and government grant coordination."
      services={services}
      columns={2}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-6xl"
    />
  );
}
