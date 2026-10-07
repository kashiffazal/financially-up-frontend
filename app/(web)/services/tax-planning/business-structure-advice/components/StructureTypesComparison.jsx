"use client";

import React from "react";
import {
  UserOutlined,
  TeamOutlined,
  BankOutlined,
  ApartmentOutlined,
  InfoCircleOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Alert } from "antd";

/**
 * StructureTypesComparison Component
 * ==================================
 * Section 2: Detailed comparative breakdown of Sole Trader, Partnership,
 * Company, and Trust structures in Australia.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function StructureTypesComparison() {
  const structures = [
    {
      title: "Sole Trader",
      tag: "Direct Personal Trading",
      icon: <UserOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      accentColor: "border-blue-200 dark:border-blue-800/60 bg-blue-50/50 dark:bg-blue-950/20",
      description:
        "A sole trader operates the business personally and reports business income in the individual tax return.",
      keyPoints: [
        "Business income reported directly in individual tax return",
        "Owner assumes personal legal and financial responsibility",
        "Simpler administrative and initial registration requirements",
        "Profits taxed at individual marginal tax rates",
      ],
    },
    {
      title: "Partnership",
      tag: "Joint Commercial Undertaking",
      icon: <TeamOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      accentColor: "border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20",
      description:
        "A partnership carries on business with two or more partners and generally lodges a partnership return, with partners returning their shares of income or loss.",
      keyPoints: [
        "Carries on commercial business with two or more partners",
        "Lodges an annual partnership tax return to calculate net income",
        "Partners return and pay tax on their respective shares of income/loss",
        "Formal partnership agreement recommended for clarity",
      ],
    },
    {
      title: "Company",
      tag: "Distinct Legal Entity",
      icon: <BankOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      accentColor: "border-brand-primary/20 dark:border-emerald-800/60 bg-brand-primary/5 dark:bg-emerald-950/20",
      description:
        "A company is a separate legal entity with its own tax and reporting obligations.",
      keyPoints: [
        "Separate legal entity distinct from directors and shareholders",
        "Subject to Australian corporate tax rates (e.g. 25% base rate)",
        "Own reporting, ASIC annual review, and Division 7A rules",
        "Requires constitutional documents and governance registers",
      ],
    },
    {
      title: "Trust",
      tag: "Fiduciary Structure",
      icon: <ApartmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      accentColor: "border-purple-200 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/20",
      description:
        "A trust is administered by a trustee under the trust arrangement and has separate tax-return and distribution considerations.",
      keyPoints: [
        "Administered by individual or corporate trustee under a trust deed",
        "Lodges a trust tax return with distinct income streaming rules",
        "Annual trustee resolutions determine distribution of net income",
        "Beneficiaries assessed on their share of trust income",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Structure Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Sole Trader, Partnership, Company or Trust?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Each structure works differently. Understanding their fundamental characteristics ensures your business model is built on an appropriate foundation.
          </p>
        </div>

        {/* 4 Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {structures.map((s, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 sm:p-8 border shadow-sm transition-all duration-300 hover:shadow-md bg-white dark:bg-zinc-900 ${s.accentColor}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {s.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {s.title}
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {s.description}
              </p>
              <div className="border-t border-slate-200/60 dark:border-zinc-800 pt-4 space-y-2.5">
                {s.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <CheckCircleFilled className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Boundaries Notice */}
        <div className="max-w-4xl mx-auto">
          <Alert
            title="Important Legal & Governance Boundaries"
            description="These are high-level differences only. Company or trust advice should also consider establishment documents, governance and legal consequences, which may require a lawyer in addition to tax advice."
            type="info"
            showIcon
            icon={<InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />}
            className="rounded-2xl p-5 border border-brand-primary/20 bg-brand-primary/5 dark:bg-zinc-900 dark:border-emerald-500/30 text-slate-700 dark:text-zinc-300"
          />
        </div>
      </div>
    </section>
  );
}
