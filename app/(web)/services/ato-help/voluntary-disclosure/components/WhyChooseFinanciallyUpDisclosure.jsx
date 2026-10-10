"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  IdcardOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpDisclosure Component
 * ==========================================
 * Section 8: Why choose Financially Up?
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Implements registered tax agent credentials (TPB #26234055), CPA & IPA members,
 * 10+ years experience, and Australia-wide online & in-person delivery.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function WhyChooseFinanciallyUpDisclosure() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description: `Officially registered with the Tax Practitioners Board (TPB #${company?.tpb || "26234055"}), authorized to prepare and submit official voluntary disclosures to the ATO.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Team",
      description:
        "Our team consists of qualified CPA and IPA professionals who ensure calculations and statutory disclosure schedules meet ATO technical requirements.",
    },
    {
      icon: <IdcardOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Experience",
      description:
        "More than a decade of proven experience assisting Australian individuals and businesses in correcting past tax errors and mitigating administrative penalties.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Appointments",
      description: `Supporting clients across Australia through secure online meetings, with head office appointments at ${company?.address || "Level 5, 100 Walker St, North Sydney NSW 2060"}.`,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 mb-4">
            <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide uppercase">
              Registered Tax Practice
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose {company?.legalName || company?.name || "Financially Up"}?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of experience. Our CPA and IPA professionals support clients Australia-wide through online and in-person appointments. We focus on accurate reconstruction, the correct disclosure pathway and clear communication of the tax, interest and penalty implications.
          </p>
        </div>

        {/* 4 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-200/60 dark:border-zinc-700 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Accurate Reconstruction
              </div>
            </div>
          ))}
        </div>

        {/* Direct Contact Ribbon */}
        <div className="rounded-2xl p-6 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <PhoneOutlined className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                Unsure How to Report a Prior Tax Mistake?
              </p>
              <p className="text-sm sm:text-base font-bold text-white">
                Call {company?.phone || "1300 328 316"} for a Confidential Voluntary Disclosure Review
              </p>
            </div>
          </div>
          <a
            href={`tel:${(company?.phone || "1300 328 316").replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shrink-0"
          >
            Call {company?.phone || "1300 328 316"}
          </a>
        </div>
      </div>
    </section>
  );
}
