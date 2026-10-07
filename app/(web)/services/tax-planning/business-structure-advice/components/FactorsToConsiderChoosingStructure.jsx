"use client";

import React from "react";
import {
  UsergroupAddOutlined,
  FundProjectionScreenOutlined,
  UserSwitchOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  AuditOutlined,
  FileDoneOutlined,
  CompassOutlined,
  WalletOutlined,
} from "@ant-design/icons";

/**
 * FactorsToConsiderChoosingStructure Component
 * ============================================
 * Section 3: 9 key evaluation criteria analyzed together when choosing
 * or changing an Australian business structure.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function FactorsToConsiderChoosingStructure() {
  const factors = [
    {
      number: "01",
      icon: <UsergroupAddOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Ownership & Control",
      text: "Who will own, control and work in the business",
      description: "Directorship, shareholding, partnership splits and who makes commercial and operational decisions daily.",
    },
    {
      number: "02",
      icon: <FundProjectionScreenOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Profits & Distributions",
      text: "Expected profit levels and how profits may be used or distributed",
      description: "Whether profits will be reinvested in working capital, distributed to family beneficiaries, or drawn as dividends.",
    },
    {
      number: "03",
      icon: <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Future Partners & Investors",
      text: "Whether new partners, shareholders or investors may join",
      description: "Ease of issuing equity, introducing key employees into ownership, or welcoming venture and angel capital.",
    },
    {
      number: "04",
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Assets & Commercial Risk",
      text: "Business assets, liabilities and commercial risk",
      description: "Protecting valuable plant, equipment, IP or family wealth against commercial lawsuits, suppliers and trade debts.",
    },
    {
      number: "05",
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Employees & Contractors",
      text: "Employee and contractor arrangements",
      description: "Workcover, superannuation guarantee, payroll tax thresholds, and contractor vs employee legal distinctions.",
    },
    {
      number: "06",
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Administration & Compliance Costs",
      text: "Administrative cost and ongoing reporting obligations",
      description: "Accounting fees, ASIC annual reviews, multiple entity tax returns, and corporate secretarial maintenance.",
    },
    {
      number: "07",
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Tax Registrations",
      text: "GST, PAYG withholding and other registrations where relevant",
      description: "ABN, TFN, GST threshold turnover, PAYG instalment entry, and fringe benefits tax considerations.",
    },
    {
      number: "08",
      icon: <CompassOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Succession & Exit Strategy",
      text: "Succession, sale or future restructure plans",
      description: "Small business CGT concessions eligibility, asset sales vs share sales, and passing wealth to the next generation.",
    },
    {
      number: "09",
      icon: <WalletOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Separation of Funds",
      text: "How personal and business money will be kept separate",
      description: "Avoiding Division 7A shareholder loan traps, separate bank accounts, and maintaining clean financial records.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Comprehensive Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Factors to Consider When Choosing a Structure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Business structure tax advice commonly considers several issues together rather than in isolation.
          </p>
        </div>

        {/* 9 Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md hover:border-brand-primary/30 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                {/* Verbatim Item Bullet Text */}
                <p className="text-sm font-semibold text-brand-primary dark:text-emerald-400 mb-2">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
