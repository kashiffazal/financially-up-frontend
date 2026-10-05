"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * BasPayrollServicesGrid Component
 * ================================
 * Section 2: Our BAS, GST & Payroll Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 10 primary service offerings of Pillar 5 (BAS, GST & Payroll)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function BasPayrollServicesGrid() {
  /**
   * The 10 Pillar 5 Services from official client scope document
   */
  const services = [
    {
      id: "bas-lodgement",
      icon: "file-text",
      tag: "Pillar 5.1",
      title: "BAS Lodgement Services",
      description:
        "Professional BAS lodgement service for Australian businesses. Activity statement preparation, GST reconciliation, credit verification and ATO lodgement.",
      href: "/services/bas-payroll/bas-lodgement",
      actionText: "BAS lodgement",
    },
    {
      id: "gst-registration",
      icon: "safety",
      tag: "Pillar 5.2",
      title: "GST Registration Services",
      description:
        "GST registration service for Australian businesses. Assess the $75k threshold, voluntary setup, entity registrations and ongoing BAS obligations.",
      href: "/services/bas-payroll/gst-registration",
      actionText: "GST registration",
    },
    {
      id: "payroll-services",
      icon: "team",
      tag: "Pillar 5.3",
      title: "Payroll Services",
      description:
        "Comprehensive Australian payroll services, including wage processing, leave entitlements, pay slips, STP reporting and superannuation clearing.",
      href: "/services/bas-payroll/payroll-services",
      actionText: "Payroll services",
    },
    {
      id: "stp",
      icon: "solution",
      tag: "Pillar 5.4",
      title: "Single Touch Payroll (STP)",
      description:
        "STP Phase 2 compliance and reporting for Australian employers. Real-time wage data submission, tax withholding and annual finalisation declarations.",
      href: "/services/bas-payroll/stp",
      actionText: "STP reporting",
    },
    {
      id: "fringe-benefits-tax",
      icon: "calculator",
      tag: "Pillar 5.5",
      title: "Fringe Benefits Tax (FBT)",
      description:
        "FBT return preparation and salary packaging reviews. Assess car benefits, meal entertainment, employee contributions and lodgement.",
      href: "/services/bas-payroll/fringe-benefits-tax",
      actionText: "FBT advice",
    },
    {
      id: "ias",
      icon: "history",
      tag: "Pillar 5.6",
      title: "IAS Lodgement Services",
      description:
        "Instalment Activity Statement (IAS) preparation and lodgement for employers and businesses with monthly PAYG withholding or quarterly PAYGI.",
      href: "/services/bas-payroll/ias",
      actionText: "IAS lodgement",
    },
    {
      id: "payg",
      icon: "dollar",
      tag: "Pillar 5.7",
      title: "PAYG Withholding & Instalments",
      description:
        "PAYG withholding and income tax instalment reviews. Calculate instalment rates, variation requests and align cash flow with ATO schedules.",
      href: "/services/bas-payroll/payg",
      actionText: "PAYG support",
    },
    {
      id: "payroll-tax",
      icon: "bank",
      tag: "Pillar 5.8",
      title: "State Payroll Tax Advisory",
      description:
        "State and territory payroll tax threshold assessments, monthly returns, group employer aggregation rules and annual reconciliation support.",
      href: "/services/bas-payroll/payroll-tax",
      actionText: "Payroll tax",
    },
    {
      id: "employer-compliance",
      icon: "file-protect",
      tag: "Pillar 5.9",
      title: "Employer Compliance Support",
      description:
        "Ensure full compliance with Australian Fair Work modern awards, superannuation guarantee, contractor vs employee tests and record keeping.",
      href: "/services/bas-payroll/employer-compliance",
      actionText: "Employer compliance",
    },
    {
      id: "super-processing",
      icon: "wallet",
      tag: "Pillar 5.10",
      title: "Superannuation Guarantee",
      description:
        "Superannuation clearing house processing, quarterly Super Guarantee (SG) deadlines, contribution calculations and avoiding late SG charge penalties.",
      href: "/services/bas-payroll/super-processing",
      actionText: "Super processing",
    },
  ];

  return (
    <ServicesGrid
      sectionId="bas-payroll-services-overview"
      tag="Compliance Scope"
      title="Our BAS, GST & Payroll Services"
      subtitle="From activity statement preparation and GST registrations to STP Phase 2 payroll and superannuation clearing, explore our integrated compliance services."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
