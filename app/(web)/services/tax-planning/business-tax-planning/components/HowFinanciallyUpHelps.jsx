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
 * HowFinanciallyUpHelps Component
 * ===============================
 * Sections 9 & 10: How Financially Up Can Help & Why Choose Financially Up?
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details scope boundaries, registered tax agent status (#26234055), CPA & IPA qualifications,
 * and nationwide online consultation capabilities via useCompany() hook.
 */
export default function HowFinanciallyUpHelps() {
  const company = useCompany();

  const assurances = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: "Operating under Tax Practitioners Board registration #26234055 with extensive Australian corporate tax experience.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Members",
      desc: "Qualified practitioners adhering to strict ethical, professional, and ongoing educational standards.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "10+ Years Experience",
      desc: "Proven track record advising Australian companies, trusts, partnerships, and entrepreneurial ventures.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Australia-Wide Support",
      desc: "High-definition virtual online meetings via Outlook Calendar, with in-person Sydney appointments also available.",
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
            Financially Up can review the business’s tax position, explain the tax implications of planned decisions and identify matters that need attention before year end or another key transaction. We can also coordinate tax planning with accounting and tax-return preparation where those services are within the agreed scope.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Depending on the agreed scope, the discussion may identify estimated tax-related cash requirements, records that need attention, decisions that should be reviewed before implementation and compliance or specialist work that should be scoped separately.
          </p>
        </div>

        {/* Scope Boundaries Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Included within Tax Planning Scope */}
          <div className="rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-950 dark:text-emerald-100">
                What Tax Planning Reviews Cover
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Forward-looking review of expected trading profit and tax position.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Estimated tax-related cash outflows and timing considerations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Identifying records and decisions requiring pre-year-end action.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Coordination with annual tax-return preparation where scoped.</span>
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
                Work Scoped Separately When Required
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed mb-4">
              Tax planning does not automatically include bookkeeping clean-up, BAS preparation, legal advice, valuations or personal financial advice. If additional work is required, it can be identified and separately scoped.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-zinc-400 font-normal">
              <li>• Historic bookkeeping catch-up and ledger remediation</li>
              <li>• Regular Business Activity Statement (BAS) submissions</li>
              <li>• Formal legal agreements, contracts, and company constitutions</li>
              <li>• Independent commercial valuations and licensed financial product advice</li>
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
              Financially Up is a registered tax agent with more than 10 years of experience. Our professional team includes CPA and IPA members, and we support business owners Australia-wide through online appointments, with in-person appointments also available.
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
