"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  SyncOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpTrusts Component
 * =====================================
 * Section 9: Why choose Financially Up for trust accounting?
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Highlights firm credentials, CPA/IPA qualifications, 10+ years experience,
 * Australia-wide delivery, and the practical value of multi-service continuity.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 *
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUpTrusts() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Registered with the Tax Practitioners Board (TPB #26234055), authorized to represent trustees before the Australian Taxation Office.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Team",
      description:
        "Our professional accounting team includes qualified members of CPA Australia and the Institute of Public Accountants (IPA).",
    },
    {
      icon: <IdcardOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Experience",
      description:
        "More than a decade of proven practice across accounting, taxation, bookkeeping, and business advisory services for Australian trusts.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Service",
      description:
        "Comprehensive support across all Australian states and territories with flexible online video consultations and in-person appointments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 mb-4">
            <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide uppercase">
              Professional Credentials
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up for trust accounting?
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more
            than 10 years of experience across accounting, taxation, bookkeeping and business
            advisory work. Our team includes CPA and IPA members, and we support clients
            Australia-wide through online appointments as well as in-person appointments.
          </p>

          {/* Exact Verbatim Paragraph 2 from Document */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            The practical benefit is continuity: the accounting records, trust tax return and related
            tax questions can be reviewed together, while more specialised planning is separately
            identified rather than assumed to be included.
          </p>
        </div>

        {/* 4 Firm Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-5 hover:border-teal-500/50 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-2xs">
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
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <SyncOutlined className="text-xl" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                Connected Advice & Complete Compliance Continuity
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 font-normal mt-1">
                {company?.legalName || "Financially Up Pty Ltd"} • ABN: {company?.abn || "84 659 717 263"} • Head Office: {company?.address || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${company?.phone?.replace(/\s/g, "") || "1300328316"}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-semibold shadow-2xs hover:shadow-xs transition-all"
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
