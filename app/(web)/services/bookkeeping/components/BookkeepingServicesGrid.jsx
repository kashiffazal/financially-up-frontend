"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * BookkeepingServicesGrid Component
 * =================================
 * Section 2: Our Bookkeeping Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 8 primary service offerings of Pillar 4 (Bookkeeping)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function BookkeepingServicesGrid() {
  /**
   * The 8 Pillar 4 Bookkeeping Services from the official client scope document
   */
  const bookkeepingServices = [
    {
      id: "xero-bookkeeping",
      icon: "solution",
      tag: "Pillar 4.1",
      title: "Xero Bookkeeping Services",
      description:
        "Xero bookkeeping services for Australian businesses, including reconciliations, coding, clean-up and ongoing support for accurate cloud-based records.",
      href: "/services/bookkeeping/xero-bookkeeping",
      actionText: "Xero bookkeeping",
    },
    {
      id: "monthly-bookkeeping",
      icon: "calendar",
      tag: "Pillar 4.2",
      title: "Monthly Bookkeeping Services",
      description:
        "Monthly bookkeeping services for Australian businesses. Keep accounts reconciled, records organised and bookkeeping ready for ongoing reporting and compliance.",
      href: "/services/bookkeeping/monthly-bookkeeping",
      actionText: "Monthly bookkeeping",
    },
    {
      id: "catch-up-bookkeeping",
      icon: "history",
      tag: "Pillar 4.3",
      title: "Catch-Up Bookkeeping",
      description:
        "Catch-up bookkeeping services for businesses with overdue records, unallocated transactions and accounts that have fallen behind.",
      href: "/services/bookkeeping/catch-up-bookkeeping",
      actionText: "Catch-up services",
    },
    {
      id: "bookkeeping-clean-up",
      icon: "safety",
      tag: "Pillar 4.4",
      title: "Bookkeeping Clean-Up",
      description:
        "Bookkeeping clean-up services to review, correct and reconcile messy accounting files, clearing historical errors before BAS or tax preparation.",
      href: "/services/bookkeeping/bookkeeping-clean-up",
      actionText: "Clean-up review",
    },
    {
      id: "accounts-payable",
      icon: "wallet",
      tag: "Pillar 4.5",
      title: "Accounts Payable (AP)",
      description:
        "Accounts payable services for Australian businesses, managing supplier invoices, approval workflows, payment batch preparation and bill records.",
      href: "/services/bookkeeping/accounts-payable",
      actionText: "Accounts payable",
    },
    {
      id: "accounts-receivable",
      icon: "dollar",
      tag: "Pillar 4.6",
      title: "Accounts Receivable (AR)",
      description:
        "Accounts receivable bookkeeping support, including customer invoicing, payment allocations, debtor tracking and cash-flow visibility.",
      href: "/services/bookkeeping/accounts-receivable",
      actionText: "Accounts receivable",
    },
    {
      id: "bank-reconciliation",
      icon: "calculator",
      tag: "Pillar 4.7",
      title: "Bank & Feed Reconciliation",
      description:
        "Bank and credit card reconciliation services, matching software transactions against actual bank statements to resolve discrepancies.",
      href: "/services/bookkeeping/bank-reconciliation",
      actionText: "Reconciliation",
    },
    {
      id: "bookkeeping-reporting",
      icon: "file-text",
      tag: "Pillar 4.8",
      title: "Bookkeeping Reporting",
      description:
        "Bookkeeping reporting services delivering profit and loss summaries, balance sheet reviews and management data to guide day-to-day decisions.",
      href: "/services/bookkeeping/reporting",
      actionText: "Reporting",
    },
  ];

  return (
    <ServicesGrid
      sectionId="bookkeeping-services-overview"
      tag="Commercial Bookkeeping Scope"
      title="Our Bookkeeping Services"
      subtitle="From daily transaction processing and monthly reconciliations to file clean-ups and accounts payable management, explore our comprehensive bookkeeping solutions designed to keep your business records organised and compliance-ready."
      services={bookkeepingServices}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
