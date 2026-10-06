"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  SyncOutlined,
  PhoneOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpAto Component
 * ==================================
 * Section 10: Why choose Financially Up?
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Highlights registered tax agent credentials, 10+ years experience, CPA/IPA team,
 * Australia-wide delivery, and our practical problem-solving focus.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhyChooseFinanciallyUpAto() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Officially registered with the Tax Practitioners Board (TPB #26234055), authorized to represent taxpayers and manage formal ATO correspondence.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Professionals",
      description:
        "Our team includes qualified members of CPA Australia and the Institute of Public Accountants (IPA), ensuring rigorous tax technical accuracy.",
    },
    {
      icon: <IdcardOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Experience",
      description:
        "More than a decade of hands-on expertise across Australian taxation, accounting, bookkeeping, and business advisory services.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Delivery",
      description:
        "Supporting individuals, businesses, and trustees nationwide through secure online digital appointments as well as in-person consultations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 mb-4">
            <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide uppercase">
              Registered Credentials
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up?
          </h2>

          {/* Exact Verbatim Paragraph from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up"} is a registered tax agent with more than 10
            years of experience across taxation, accounting, bookkeeping and business advisory work.
            Our team includes CPA and IPA professionals, and we assist clients Australia-wide through
            online appointments as well as in-person appointments. Our focus is practical: understand
            the issue, organise the records, complete the required tax work and communicate clearly
            with the ATO within the agreed scope.
          </p>
        </div>

        {/* 4 Firm Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-5 hover:border-teal-500/50 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-2xs">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centralized Dynamic Company Verification Callout */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <SyncOutlined className="text-xl" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                Direct Tax Agent Communication & ATO Resolution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 font-normal mt-1">
                {company?.legalName || "Financially Up Pty Ltd"} • ABN: {company?.abn || "84 659 717 263"} • Head Office: {company?.address || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${company?.phone?.replace(/\s/g, "") || "1300328316"}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-semibold shadow-2xs hover:shadow-xs transition-all"
            >
              <PhoneOutlined />
              <span>{company?.phone || "1300 328 316"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
