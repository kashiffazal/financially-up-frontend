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
 * HowFinanciallyUpHelpsPersonal Component
 * =======================================
 * Sections 9 & 10: How Financially Up Can Help & Why Choose Financially Up?
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Outlines personal planning boundaries, TPB registration #26234055, CPA & IPA qualifications,
 * and virtual/in-person consultation modes dynamically utilizing useCompany().
 */
export default function HowFinanciallyUpHelpsPersonal() {
  const company = useCompany();

  const assurances = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: "Licensed under Tax Practitioners Board registration #26234055 ensuring compliant personal tax advisory.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Members",
      desc: "Qualified practitioners adhering to stringent professional standards, ethics, and ongoing taxation training.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "10+ Years Experience",
      desc: "A decade of expertise assisting Australian professionals, investors, and families navigate complex tax rules.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Australia-Wide Support",
      desc: "Remote consultations via Microsoft Outlook Calendar and secure client portals, plus Sydney office meetings.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
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
            Financially Up can review your expected personal tax position, explain the tax implications of upcoming transactions, assess the information available and identify issues that should be addressed before year end or before a major financial event.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Where appropriate, personal tax planning can sit alongside individual tax-return preparation. More specialised tax advice can be separately scoped. Legal advice, investment recommendations and other regulated financial advice are outside ordinary tax planning unless provided through an appropriately authorised professional.
          </p>
        </div>

        {/* Scope Boundaries Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Included within Personal Tax Planning Scope */}
          <div className="rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-950 dark:text-emerald-100">
                What Personal Tax Planning Covers
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Forward-looking review of salary, bonuses, dividends, and rental returns.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Capital gains timing analysis, cost-base elements, and 50% discount eligibility.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Personal concessional super contribution rules and Notice of Intent checks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Integration with annual individual tax return preparation where scoped.</span>
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
              Legal advice, investment recommendations and other regulated financial advice are outside ordinary tax planning unless provided through an appropriately authorised professional.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-zinc-400 font-normal">
              <li>• Formal legal contracts, estate planning, wills, and conveyancing</li>
              <li>• Regulated financial product recommendations (specific shares, funds, or super products)</li>
              <li>• Formal property valuation certificates from certified practicing valuers</li>
              <li>• Complex international residency determinations requiring formal legal counsel</li>
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
              Financially Up is a registered tax agent with more than 10 years of experience. Our professional team includes CPA and IPA members. We support clients Australia-wide through online appointments, with in-person appointments also available.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assurances.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 text-center hover:border-emerald-400/60 transition-colors"
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
