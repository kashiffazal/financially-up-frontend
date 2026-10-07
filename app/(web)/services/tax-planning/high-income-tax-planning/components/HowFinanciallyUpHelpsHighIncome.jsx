"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  GlobalOutlined,
  AuditOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsHighIncome Component
 * =========================================
 * Sections 8 & 9: How Financially Up can help & Why choose Financially Up?
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details executive advisory scope, registered tax agent status (#26234055), CPA & IPA qualifications,
 * and online/in-person appointments dynamically utilizing useCompany().
 */
export default function HowFinanciallyUpHelpsHighIncome() {
  const company = useCompany();

  const assurances = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: "Operating under Tax Practitioners Board registration #26234055 with rigorous Australian tax compliance standards.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Members",
      desc: "Qualified practitioners adhering to strict ethical codes, continuous professional development, and technical precision.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "10+ Years Experience",
      desc: "Over a decade advising Australian executives, high-net-worth investors, and senior professionals.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Australia-Wide Support",
      desc: "Virtual appointments via Microsoft Outlook Calendar, document exchange via secure portals, and in-person consultations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Assurance &amp; Delivery
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can review your current-year tax position, identify information needed for planning, discuss likely tax implications of proposed transactions and prepare separate tax calculations where appropriate. We can also assist with the later individual tax return once the year is complete.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Depending on the agreed scope, the review may identify estimated tax-related cash requirements, missing records, decisions to consider before implementation and work that should be scoped separately.
          </p>
        </div>

        {/* Scope Boundaries Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Included within High-Income Tax Planning Scope */}
          <div className="rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-950 dark:text-emerald-100">
                What Our Planning Review Covers
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Current-year tax position modeling across salary, bonuses, and investments.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Estimated tax-related cash requirements and bracket shortfall projections.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Separate tax calculations for CGT, foreign income, or employee shares.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Seamless integration with later individual tax return preparation.</span>
              </li>
            </ul>
          </div>

          {/* Separately Scoped Services */}
          <div className="rounded-2xl bg-slate-50 dark:bg-zinc-950/50 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-200/80 dark:bg-zinc-800 flex items-center justify-center">
                <CloseCircleOutlined className="text-slate-500 dark:text-zinc-400 text-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Matters Scoped Separately
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed mb-4">
              Where your situation involves legal structuring, regulated financial advice, valuation work or other specialist matters, that work may need to be separately scoped or referred to an appropriately qualified adviser.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-zinc-400 font-normal">
              <li>• Formal legal deeds, trusts, company constitutions, and shareholder agreements</li>
              <li>• Regulated investment product advice (recommending specific equities, bonds, or funds)</li>
              <li>• Formal valuation reports for illiquid assets or private unlisted company shares</li>
              <li>• Complex multi-jurisdictional international legal counsel</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Financially Up Sub-Section */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Credentials
            </Tag>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Choose {company?.legalName || "Financially Up"}?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
              Financially Up Pty Ltd is an Australian accounting, taxation, bookkeeping and business advisory firm and a registered tax agent. The team includes CPA and IPA members and has more than 10 years of experience. We support clients Australia-wide, with online and in-person appointment options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assurances.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 text-center hover:border-emerald-400/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
