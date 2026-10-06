"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * AtoHelpServicesGrid Component
 * ==============================
 * Section 2: Our ATO Help & Resolution Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 10 primary service offerings of Pillar 11 (ATO Help)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function AtoHelpServicesGrid() {
  /**
   * The 10 Pillar 11 Services from official client scope document
   */
  const services = [
    {
      id: "ato-debt",
      icon: "bank",
      tag: "Pillar 11.1",
      title: "ATO Debt Help & Negotiation",
      description:
        "Stopping debt recovery enforcement, director penalty notices (DPNs), garnishee notices, and negotiating structured tax payment terms.",
      href: "/services/ato-help/ato-debt",
      actionText: "ATO debt help",
    },
    {
      id: "ato-audit",
      icon: "audit",
      tag: "Pillar 11.2",
      title: "ATO Audit Defence & Support",
      description:
        "Responding to formal audit questionnaires, substantiating income and expense deductions, and liaising directly with ATO audit teams.",
      href: "/services/ato-help/ato-audit",
      actionText: "Audit defence",
    },
    {
      id: "overdue-tax-returns",
      icon: "calendar",
      tag: "Pillar 11.3",
      title: "Overdue Tax Returns Catch-Up",
      description:
        "Bringing multiple years of overdue personal, company, and trust tax returns up to date, reconstructing missing records, and restoring compliance.",
      href: "/services/ato-help/overdue-tax-returns",
      actionText: "Catch up returns",
    },
    {
      id: "penalty-remission",
      icon: "safety",
      tag: "Pillar 11.4",
      title: "Penalty & GIC Remission",
      description:
        "Submitting formal remission submissions to cancel failure to lodge (FTL) penalties, failure to withhold penalties, and General Interest Charges (GIC).",
      href: "/services/ato-help/penalty-remission",
      actionText: "Penalty remission",
    },
    {
      id: "voluntary-disclosure",
      icon: "file-protect",
      tag: "Pillar 11.5",
      title: "Voluntary Disclosure to ATO",
      description:
        "Proactively correcting past unlodged income or calculation errors before an audit starts to secure up to an 80% reduction in administrative penalties.",
      href: "/services/ato-help/voluntary-disclosure",
      actionText: "Voluntary disclosure",
    },
    {
      id: "payment-plans",
      icon: "calculator",
      tag: "Pillar 11.6",
      title: "ATO Payment Plan Negotiation",
      description:
        "Structuring automated monthly or weekly instalment payment plans tailored to your cash flow, including interest remission applications.",
      href: "/services/ato-help/payment-plans",
      actionText: "Payment plans",
    },
    {
      id: "ato-reviews",
      icon: "search",
      tag: "Pillar 11.7",
      title: "ATO Reviews & Information Requests",
      description:
        "Handling data-matching inquiries, cryptocurrency reporting queries, and pre-audit reviews calmly before they escalate into formal audits.",
      href: "/services/ato-help/ato-reviews",
      actionText: "ATO reviews",
    },
    {
      id: "ato-letters",
      icon: "mail",
      tag: "Pillar 11.8",
      title: "Understanding ATO Letters",
      description:
        "Translating complex ATO statutory letters, warning notices, demands for payment, and statements of account into plain English action items.",
      href: "/services/ato-help/ato-letters",
      actionText: "Decode notices",
    },
    {
      id: "ato-representation",
      icon: "team",
      tag: "Pillar 11.9",
      title: "Tax Agent Representation",
      description:
        "Official representation before the ATO, managing correspondence, attending meetings, and protecting your statutory taxpayer rights.",
      href: "/services/ato-help/ato-representation",
      actionText: "Agent representation",
    },
    {
      id: "overdue-bas",
      icon: "file-done",
      tag: "Pillar 11.10",
      title: "Overdue BAS Lodgements",
      description:
        "Reconciling historical GST, PAYG withholding, and superannuation obligations to bring overdue quarterly or monthly Activity Statements up to date.",
      href: "/services/ato-help/overdue-bas",
      actionText: "Overdue BAS",
    },
  ];

  return (
    <ServicesGrid
      sectionId="ato-services-overview"
      tag="Service Portfolio"
      title="Our ATO Help & Resolution Services"
      subtitle="From resolving ATO debt and negotiating payment plans to defending audits, lodging multi-year backlog returns, and remitting penalties."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
