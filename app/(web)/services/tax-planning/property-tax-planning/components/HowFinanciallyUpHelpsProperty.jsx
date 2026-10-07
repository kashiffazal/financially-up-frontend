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
 * HowFinanciallyUpHelpsProperty Component
 * =======================================
 * Sections 8 & 9: How Financially Up can help & Why choose Financially Up?
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details property advisory scope, registered tax agent status (#26234055), CPA & IPA qualifications,
 * and online/in-person appointments dynamically utilizing useCompany().
 */
export default function HowFinanciallyUpHelpsProperty() {
  const company = useCompany();

  const assurances = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: "Operating under Tax Practitioners Board registration #26234055 with extensive Australian property tax experience.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Members",
      desc: "Qualified accountants committed to rigorous professional standards, ethics, and ongoing taxation training.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "10+ Years Experience",
      desc: "Over a decade advising Australian property investors, landlords, and syndicates across all property cycles.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Australia-Wide Support",
      desc: "Virtual appointments via Microsoft Outlook Calendar, document exchange via secure portals, and in-person Sydney meetings.",
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
            Financially Up can review rental income and expense treatment, borrowing-purpose records, ownership and structure considerations from a tax perspective, likely CGT issues, year-end planning and the information needed for tax-return preparation. We can also assist with ongoing tax and accounting matters as your property portfolio changes.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Where advice involves legal ownership changes, conveyancing, lending recommendations or regulated financial advice, those matters may need to be handled by the appropriate specialist.
          </p>
        </div>

        {/* Scope Boundaries Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Included within Property Tax Planning Scope */}
          <div className="rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-950 dark:text-emerald-100">
                What Property Tax Planning Covers
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Reviewing rental income and deductible holding cost schedules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Tracing borrowing-purpose records to support loan interest deductibility.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Evaluating personal, joint, trust, and company tax outcomes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span>Pre-sale CGT modeling and year-end record preparation.</span>
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
                Work Handled by External Specialists
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed mb-4">
              Where advice involves legal ownership changes, conveyancing, lending recommendations or regulated financial advice, those matters may need to be handled by the appropriate specialist.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-zinc-400 font-normal">
              <li>• Formal legal conveyancing, title deeds, and contracts of sale</li>
              <li>• Mortgage broking and formal commercial loan product selection</li>
              <li>• Regulated investment property syndication advice under an AFSL</li>
              <li>• Quantity surveyor tax depreciation inspections and reports</li>
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
              Financially Up Pty Ltd is a registered tax agent with more than 10 years of experience. Our professional team includes CPA and IPA members, and we provide accounting, taxation, bookkeeping and business advisory services to clients Australia-wide through online and in-person appointments.
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
