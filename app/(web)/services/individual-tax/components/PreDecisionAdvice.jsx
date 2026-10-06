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
      id: "investments",
      icon: "line-chart",
      tag: "Capital Gains",
      title: "Selling an Investment",
      description:
        "Model transaction timing, assess CGT discount eligibility, offset capital losses, and clarify tax consequences before selling shares, crypto, or other assets.",
      href: "/services/individual-tax/capital-gains-tax",
      actionText: "CGT advice",
    },
    {
      id: "property",
      icon: "home",
      tag: "Property & CGT",
      title: "Buying or Changing Ownership of a Property",
      description:
        "Assess main residence exemption eligibility, co-ownership structures, stamp duty considerations, and depreciation records before entering into contracts.",
      href: "/services/individual-tax/investment-property-tax-accountant",
      actionText: "Property advice",
    },
    {
      id: "side-business",
      icon: "shop",
      tag: "Structure & ABN",
      title: "Starting a Side Business",
      description:
        "Determine the appropriate business structure, review Personal Services Income (PSI) rules, and plan record keeping and GST obligations from day one.",
      href: "/services/individual-tax/sole-trader-tax-return",
      actionText: "Business advice",
    },
    {
      id: "residency",
      icon: "global",
      tag: "Residency Shifts",
      title: "Moving to or from Australia",
      description:
        "Understand Australian tax residency implications, deemed disposals of assets, foreign source income reporting, and applicable tax treaty rules.",
      href: "/services/individual-tax/foreign-income-tax-accountant",
      actionText: "Residency review",
    },
    {
      id: "employee-shares",
      icon: "gift",
      tag: "Equity & Options",
      title: "Receiving Employee Equity",
      description:
        "Understand taxing points for shares and options, available concessions, and record-keeping requirements under employee share schemes.",
      href: "/services/individual-tax/employee-share-schemes",
      actionText: "Equity guidance",
    },
    {
      id: "investments-change",
      icon: "rise",
      tag: "Investments",
      title: "Making a Significant Change to Your Investments",
      description:
        "Evaluate the tax impact of major portfolio reallocations, managed fund distributions, or restructuring your personal investments.",
      href: "/services/individual-tax/share-trading-investment-accountant",
      actionText: "Investment review",
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
          subtitle="Some tax and financial matters are easier to assess before a transaction takes place. Consider seeking advice before selling an investment, buying or changing ownership of a property, starting a side business, moving to or from Australia, receiving employee equity or making a significant change to your investments. Early advice cannot guarantee a particular tax result, but it can help you understand the available options and record-keeping requirements before you proceed."
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
          description="Early advice cannot guarantee a particular tax result, but it can help you understand the available options and record-keeping requirements before you proceed."
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
