"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  CompassOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import ServicesGrid from "@/components/website/ServicesGrid";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * PreDecisionAdvice Component
 * ============================
 * Section 6: Tax advice before important decisions.
 *
 * Utilizes the mutual reusable ServicesGrid component from `@/components/website/ServicesGrid`
 * to present the 6 critical pre-transaction scenarios in an authoritative 3-column interactive layout.
 * Employs dynamic company variables via `useCompany()` from `@/context/SettingsContext`.
 */
export default function PreDecisionAdvice() {
  const company = useCompany();

  /**
   * The 6 High-Impact Decision Triggers
   * Derived from the official client scope document.
   */
  const decisionScenarios = [
    {
      id: "property",
      icon: "home",
      tag: "Property & CGT",
      title: "Buying or Changing Ownership of a Property",
      description:
        "Assess main residence exemption eligibility, ownership structures (joint tenants vs tenants in common), stamp duty, and depreciation schedules before exchanging contracts.",
      href: "/services/individual-tax/investment-property-tax-accountant",
      actionText: "Property advice",
    },
    {
      id: "investments-crypto",
      icon: "line-chart",
      tag: "Capital Gains",
      title: "Selling Investments or Crypto Assets",
      description:
        "Model transaction timing, apply the 50% CGT discount (12+ months rule), offset carried-forward capital losses, and avoid unexpected year-end tax liabilities.",
      href: "/services/individual-tax/capital-gains-tax",
      actionText: "CGT planning",
    },
    {
      id: "side-business",
      icon: "shop",
      tag: "Structure & ABN",
      title: "Starting a Side Business or Contracting",
      description:
        "Determine the right entity structure (Sole Trader vs Company vs Trust), understand Personal Services Income (PSI) rules, and plan GST registration thresholds.",
      href: "/services/individual-tax/sole-trader-tax-return",
      actionText: "ABN structuring",
    },
    {
      id: "residency",
      icon: "global",
      tag: "Residency Shifts",
      title: "Moving to or from Australia",
      description:
        "Clarify your Australian tax residency status, assess deemed disposal of assets, review foreign source income exemptions, and apply Double Taxation Agreements.",
      href: "/services/individual-tax/foreign-income-tax-accountant",
      actionText: "Residency review",
    },
    {
      id: "employee-shares",
      icon: "gift",
      tag: "Equity & Options",
      title: "Receiving Employee Equity (ESS / ESOP)",
      description:
        "Navigate complex taxing points (grant vs vesting vs exercise), the 30-day rule, start-up tax concessions, and capital gains implications upon future share disposal.",
      href: "/services/individual-tax/employee-share-schemes",
      actionText: "ESS guidance",
    },
    {
      id: "portfolio-wealth",
      icon: "rise",
      tag: "Wealth & Advisory",
      title: "Major Portfolio Shifts & Transfers",
      description:
        "Review the tax consequences of substantial managed fund reallocations, trust distributions, family wealth transfers, or non-concessional super contribution caps.",
      href: "/services/individual-tax/share-trading-investment-accountant",
      actionText: "Portfolio review",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header and 6-Card Grid via Mutual ServicesGrid Component */}
        <ServicesGrid
          sectionId="pre-decision-advice"
          tag="Strategic Proactive Advice"
          title="Tax advice before important decisions"
          subtitle="Some tax and financial matters are vastly simpler and more effective to assess before a transaction takes place. Early advice gives you clarity on available options and ATO record-keeping requirements before commitments are signed."
          services={decisionScenarios}
          columns={3}
          className="p-0 bg-transparent dark:bg-transparent"
          containerClassName="w-full !px-0"
        />

        {/* 2. Strategic Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          className="mt-12"
          tag="Why Pre-Transaction Planning Matters"
          tagIcon="compass"
          title="Plan ahead to protect your tax position"
          description="Early advice cannot guarantee a particular tax result, but it ensures you understand the available options, structural risks, and ATO record-keeping requirements before money changes hands or contracts become binding."
          primaryButton={{
            text: "Book Pre-Decision Advice",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
