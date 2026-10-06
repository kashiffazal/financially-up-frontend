"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * BusinessAdvisoryServicesGrid Component
 * ======================================
 * Section 2: Our Business Advisory Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 9 primary service offerings of Pillar 12 (Business Advisory)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function BusinessAdvisoryServicesGrid() {
  /**
   * The 9 Pillar 12 Sub-Services from the official client scope document:
   * 1. Cash Flow Management
   * 2. Budgeting & Forecasting
   * 3. Business Growth
   * 4. Business Valuations
   * 5. Buying and Selling a Business
   * 6. KPI Reporting
   * 7. Profitability
   * 8. Benchmarking
   * 9. Succession Planning
   */
  const services = [
    {
      id: "cash-flow-management",
      icon: "line-chart",
      tag: "Pillar 12.1",
      title: "Cash Flow Management",
      description:
        "Rolling cash flow forecasting to estimate money moving into and out of your business, see potential shortfalls, and manage payment pressure.",
      href: "/services/business-advisory/cash-flow-management",
      actionText: "Cash flow advisory",
    },
    {
      id: "budgeting-forecasting",
      icon: "calculator",
      tag: "Pillar 12.2",
      title: "Budgeting & Forecasting",
      description:
        "Converting business goals into financial targets for revenue, costs, profit and cash, with rolling forecasts as conditions change.",
      href: "/services/business-advisory/budgeting-forecasting",
      actionText: "Budgeting advisory",
    },
    {
      id: "business-growth",
      icon: "rise",
      tag: "Pillar 12.3",
      title: "Business Growth",
      description:
        "Reviewing margins, cash flow and capacity before scaling, building a practical growth plan grounded in your actual business numbers.",
      href: "/services/business-advisory/business-growth",
      actionText: "Growth advisory",
    },
    {
      id: "business-valuations",
      icon: "safety",
      tag: "Pillar 12.4",
      title: "Business Valuations",
      description:
        "Understanding what a business may be worth by reviewing financial performance, net assets, valuation assumptions and transaction context.",
      href: "/services/business-advisory/business-valuations",
      actionText: "Valuation services",
    },
    {
      id: "buying-selling-business",
      icon: "shop",
      tag: "Pillar 12.5",
      title: "Buying and Selling a Business",
      description:
        "Accounting and tax support for buyers and sellers, reviewing financial records, transaction structure, and tax implications before committing.",
      href: "/services/business-advisory/buying-selling-business",
      actionText: "M&A advisory",
    },
    {
      id: "kpi-reporting",
      icon: "fund",
      tag: "Pillar 12.6",
      title: "KPI Reporting",
      description:
        "Turning business figures into useful decisions with relevant KPIs, clear executive reporting, and structured review rhythms.",
      href: "/services/business-advisory/kpi-reporting",
      actionText: "KPI reporting",
    },
    {
      id: "profitability",
      icon: "dollar",
      tag: "Pillar 12.7",
      title: "Profitability",
      description:
        "Consulting grounded in your numbers to understand where profit is made and lost, reviewing gross margins, pricing, and cost structures.",
      href: "/services/business-advisory/profitability",
      actionText: "Profitability review",
    },
    {
      id: "benchmarking",
      icon: "compass",
      tag: "Pillar 12.8",
      title: "Benchmarking",
      description:
        "Comparing business performance against earlier periods, plans, and suitable external benchmarks to uncover questions worth investigating.",
      href: "/services/business-advisory/benchmarking",
      actionText: "Benchmarking review",
    },
    {
      id: "succession-planning",
      icon: "team",
      tag: "Pillar 12.9",
      title: "Succession Planning",
      description:
        "Preparing for a business handover or exit by reviewing financial readiness, transition pathways, and tax considerations with specialists.",
      href: "/services/business-advisory/succession-planning",
      actionText: "Succession planning",
    },
  ];

  return (
    <ServicesGrid
      sectionId="advisory-services-overview"
      tag="Service Portfolio"
      title="Our Business Advisory Services"
      subtitle="Comprehensive commercial advisory capabilities covering cash flow, budgeting, growth, valuations, KPI reporting, and succession."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      containerClassName="max-w-7xl"
    />
  );
}
