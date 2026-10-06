"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * BusinessServicesGrid Component
 * ==============================
 * Section 2: Our Business Tax Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 12 primary service offerings of Pillar 2 (Business Tax & Accounting)
 * in an authoritative 3-column layout.
 */
export default function BusinessServicesGrid() {
  /**
   * The 12 Pillar 2 Services from the official client scope document
   */
  const businessServices = [
    {
      id: "company-tax-returns",
      icon: "bank",
      tag: "Pillar 2.1",
      title: "Company Tax Returns",
      description:
        "Company tax return preparation, year-end accounts, tax adjustments, loss reviews and compliance support for Pty Ltd companies Australia-wide.",
      href: "/services/business-tax/company-tax-returns",
      actionText: "Company tax return",
    },
    {
      id: "trust-tax-returns",
      icon: "file-protect",
      tag: "Pillar 2.2",
      title: "Trust Tax Returns",
      description:
        "Trust tax return preparation for discretionary and family trusts, including accounts, distribution resolutions and beneficiary reporting support.",
      href: "/services/business-tax/trust-tax-returns",
      actionText: "Trust tax return",
    },
    {
      id: "partnership-tax-returns",
      icon: "user",
      tag: "Pillar 2.3",
      title: "Partnership Tax Returns",
      description:
        "Partnership tax return and accounting support, including income, deductions, partner profit shares and lodgment for Australian businesses.",
      href: "/services/business-tax/partnership-tax-returns",
      actionText: "Partnership return",
    },
    {
      id: "sole-trader-tax",
      icon: "shop",
      tag: "Pillar 2.4",
      title: "Sole Trader Tax & Accounting",
      description:
        "Sole trader tax return and accounting support. Get help with business income, expenses, GST, BAS, records and year-end individual schedules.",
      href: "/services/business-tax/sole-trader-tax",
      actionText: "Sole trader tax",
    },
    {
      id: "business-financial-statements",
      icon: "file-text",
      tag: "Pillar 2.5",
      title: "Business Financial Statements",
      description:
        "Financial statement preparation for Australian businesses, including profit and loss, balance sheet and reporting support for tax and management needs.",
      href: "/services/business-tax/business-financial-statements",
      actionText: "Financial statements",
    },
    {
      id: "year-end-accounting",
      icon: "calculator",
      tag: "Pillar 2.6",
      title: "Year-End Accounting Services",
      description:
        "Year end accounting for Australian businesses. Get help with reconciliations, annual accounts, adjustments, financial statements and tax-ready records.",
      href: "/services/business-tax/year-end-accounting",
      actionText: "Year-end accounts",
    },
    {
      id: "business-tax-compliance",
      icon: "safety",
      tag: "Pillar 2.7",
      title: "Business Tax Compliance",
      description:
        "Tax compliance services for Australian businesses, including returns, BAS/GST, PAYG and record reviews. Practical support to keep obligations organized.",
      href: "/services/business-tax/business-tax-compliance",
      actionText: "Tax compliance",
    },
    {
      id: "division-7a",
      icon: "solution",
      tag: "Pillar 2.8",
      title: "Division 7A Loan Advisory",
      description:
        "Division 7A accountant support for private companies, shareholders and associates. Review loans, payments, deemed dividends and complying agreements.",
      href: "/services/business-tax/division-7a",
      actionText: "Division 7A advice",
    },
    {
      id: "shareholder-director-loans",
      icon: "dollar",
      tag: "Pillar 2.9",
      title: "Shareholder & Director Loans",
      description:
        "Get help with shareholder and director loan tax, Division 7A risks, benchmark interest rates, minimum repayments and ATO compliance.",
      href: "/services/business-tax/shareholder-director-loans",
      actionText: "Director loan review",
    },
    {
      id: "trust-distribution-tax",
      icon: "crown",
      tag: "Pillar 2.10",
      title: "Trust Distribution Tax",
      description:
        "Trust distribution tax support for trustees and beneficiaries. Guidance on 30 June resolutions, beneficiary entitlements and Section 100A integrity rules.",
      href: "/services/business-tax/trust-distribution-tax",
      actionText: "Distribution tax",
    },
    {
      id: "small-business-cgt",
      icon: "line-chart",
      tag: "Pillar 2.11",
      title: "Small Business CGT Concessions",
      description:
        "Small business CGT advice for business asset sales. Assess eligibility for the 15-year exemption, 50% active asset reduction, retirement and rollover relief.",
      href: "/services/business-tax/small-business-cgt",
      actionText: "Small business CGT",
    },
    {
      id: "tax-consolidation",
      icon: "global",
      tag: "Pillar 2.12",
      title: "Tax Consolidation Services",
      description:
        "Tax consolidation services for eligible corporate groups. Support with group formation, allocable cost amounts (ACA), joining entities and single taxpayer reporting.",
      href: "/services/business-tax/tax-consolidation",
      actionText: "Tax consolidation",
    },
  ];

  return (
    <ServicesGrid
      sectionId="business-services-overview"
      tag="Complete Practice Scope"
      title="Our Business Tax Services"
      subtitle="From annual Pty Ltd company tax returns and discretionary trusts to financial statement preparation and Division 7A director loans, explore our comprehensive commercial accounting solutions."
      services={businessServices}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
