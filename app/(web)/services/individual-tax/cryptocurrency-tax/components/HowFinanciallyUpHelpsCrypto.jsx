"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  FileDoneOutlined,
  AuditOutlined,
  CalculatorOutlined,
  ThunderboltOutlined,
  ClusterOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsCrypto Component
 * =====================================
 * Section 6: How a cryptocurrency tax accountant can help.
 * Features 100% complete, verbatim content from Page 8 of the client document.
 */
export default function HowFinanciallyUpHelpsCrypto() {
  const company = useCompany();

  const services = [
    {
      title: "Crypto-Related Individual Tax Return Preparation",
      icon: <FileDoneOutlined className="text-emerald-500" />,
      desc: "Accurate preparation and electronic lodgement of individual income returns with complete crypto CGT schedules.",
    },
    {
      title: "Review and Reconciliation of Exchange and Wallet Records",
      icon: <AuditOutlined className="text-blue-500" />,
      desc: "Reconciling centralized exchanges, DEX swaps, on-chain wallets, and third-party software feeds.",
    },
    {
      title: "Capital Gains and Capital Loss Calculations for Crypto Disposals",
      icon: <CalculatorOutlined className="text-purple-500" />,
      desc: "Accurately applying parcel matching (FIFO/HIFO), cost bases, 12-month discounts, and loss offsets.",
    },
    {
      title: "Review of Staking Rewards, Airdrops and Other Crypto Income",
      icon: <ThunderboltOutlined className="text-amber-500" />,
      desc: "Categorising ordinary revenue tokens at point of receipt and tracking subsequent cost bases.",
    },
    {
      title: "Assistance with High-Volume or Multi-Platform Histories",
      icon: <ClusterOutlined className="text-teal-500" />,
      desc: "Organising complex multi-chain portfolios across Ethereum, Solana, Bitcoin, Polygon, and Arbitrum.",
    },
    {
      title: "Review of Prior-Year Information Where an Amendment May Need Consideration",
      icon: <HistoryOutlined className="text-rose-500" />,
      desc: "Correcting previously undeclared crypto gains or missing cost-base records through ATO amendments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How a Cryptocurrency Tax Accountant Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} provides crypto tax services to individuals Australia-wide. Depending on the agreed scope, assistance may include:
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500 font-medium">
                Scope confirmed prior to engagement
              </div>
            </div>
          ))}
        </div>

        {/* Scope Confirmation Note */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              Advisory Scoping Note:
            </span>
            Tax-return preparation and transaction review are distinct from tax advice or planning. Advice scope and fees are confirmed separately before work begins. For non-crypto items, see our{" "}
            <Link
              href="/services/individual-tax/individual-tax-return"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline"
            >
              Individual Tax Return service
            </Link>.
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary font-bold px-6 h-11 text-sm shadow-md"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Book Crypto Consultation
            </Button>
          </Link>
        </div>

        {/* Dynamic Company Details */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
          <span>Prefer telephone consultation?</span>
          <a
            href={`tel:${company.phone?.replace(/\s/g, "")}`}
            className="font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
          >
            <PhoneOutlined /> {company.phone}
          </a>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <span>Registered Tax Agent #{company?.taxAgentNumber || "26242127"}</span>
        </div>
      </div>
    </section>
  );
}
