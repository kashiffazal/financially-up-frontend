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
 * Titles and descriptions are drawn directly from Pages 2–9 of the client document:
 * '4th Pillar Bookkeeping.docx'.
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
      actionText: "Xero Bookkeeping",
    },
    {
      id: "monthly-bookkeeping",
      icon: "calendar",
      tag: "Pillar 4.2",
      title: "Monthly Bookkeeping Services",
      description:
        "Monthly bookkeeping services for Australian businesses. Keep accounts reconciled, records organised and bookkeeping ready for ongoing reporting and compliance.",
      href: "/services/bookkeeping/monthly-bookkeeping",
      actionText: "Monthly Bookkeeping",
    },
    {
      id: "catch-up-bookkeeping",
      icon: "history",
      tag: "Pillar 4.3",
      title: "Catch Up Bookkeeping Services",
      description:
        "Behind on your books? Financially Up provides catch up bookkeeping to reconcile records, clear backlogs and restore reliable business accounts.",
      href: "/services/bookkeeping/catch-up-bookkeeping",
      actionText: "Catch Up Services",
    },
    {
      id: "bookkeeping-clean-up",
      icon: "safety",
      tag: "Pillar 4.4",
      title: "Bookkeeping Cleanup Services",
      description:
        "Clean up inaccurate or messy books with Financially Up. We review reconciliations, coding and historical records to improve bookkeeping reliability.",
      href: "/services/bookkeeping/bookkeeping-clean-up",
      actionText: "Bookkeeping Cleanup",
    },
    {
      id: "accounts-payable",
      icon: "wallet",
      tag: "Pillar 4.5",
      title: "Accounts Payable Services",
      description:
        "Outsource accounts payable support with Financially Up. Improve bill processing, supplier records, reconciliations and payment-workflow visibility.",
      href: "/services/bookkeeping/accounts-payable",
      actionText: "Accounts Payable",
    },
    {
      id: "accounts-receivable",
      icon: "dollar",
      tag: "Pillar 4.6",
      title: "Accounts Receivable Services",
      description:
        "Outsource accounts receivable with invoicing, debtor tracking and payment follow-up support for Australian businesses. Book an appointment.",
      href: "/services/bookkeeping/accounts-receivable",
      actionText: "Accounts Receivable",
    },
    {
      id: "bank-reconciliation",
      icon: "calculator",
      tag: "Pillar 4.7",
      title: "Bank Reconciliation Services",
      description:
        "Keep business accounts accurate with bank reconciliation services that match bank activity to your bookkeeping records and identify discrepancies.",
      href: "/services/bookkeeping/bank-reconciliation",
      actionText: "Bank Reconciliation",
    },
    {
      id: "management-reporting",
      icon: "file-text",
      tag: "Pillar 4.8",
      title: "Management Reporting Services",
      description:
        "Management reporting services that turn current bookkeeping data into practical profit, balance sheet and cash-flow information for business owners.",
      href: "/services/bookkeeping/reporting",
      actionText: "Management Reporting",
    },
  ];

  return (
    <ServicesGrid
      sectionId="bookkeeping-services-overview"
      tag="Commercial Bookkeeping Scope"
      title="Our Bookkeeping Services"
      subtitle="From day-to-day transaction recording and monthly reconciliations to accounts payable and catch-up clean-ups, explore our comprehensive bookkeeping services designed for Australian businesses."
      services={bookkeepingServices}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
