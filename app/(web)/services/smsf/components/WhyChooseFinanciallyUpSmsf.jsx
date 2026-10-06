"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUpSmsf Component
 * ====================================
 * Section 9: Why choose Financially Up?
 *
 * Implements 100% exact copy from "Why choose Financially Up?" in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim copy detailing TPB registration, 10+ years experience, CPA/IPA membership,
 *   and Australia-wide appointment availability.
 * - Dynamic company context consumption via `useCompany()` hook from `@/context/SettingsContext`.
 * - 4 credential cards visualizing the firm's core superannuation strengths.
 *
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUpSmsf() {
  const company = useCompany();

  // 4 Core Firm Strengths derived directly from verbatim document copy
  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Registered tax agent with full authority to prepare SMSF annual accounts, manage tax reporting, and liaise with the ATO.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      description:
        "Our team includes qualified CPA and IPA members adhering to rigorous professional and ethical superannuation accounting standards.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "10+ Years Experience",
      description:
        "More than 10 years of experience across accounting, taxation, bookkeeping and business advisory work for Australian trustees.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      description:
        "We support clients Australia-wide through flexible online appointments as well as dedicated in-person consultations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim Title & Copy */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why choose Financially Up?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory work. Our team includes CPA and IPA members, and we support clients Australia-wide through online appointments as well as in-person appointments. For SMSFs, our focus is clear records, accurate annual reporting and a practical handover of information for the independent audit.
          </p>
        </div>

        {/* 4 Firm Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-5 hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-2xs">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Consultation Banner */}
        <AdvisoryReassuranceBanner
          tag="SMSF Consultation & Review"
          tagIcon="safety"
          title="Discuss Your SMSF Records with Qualified Accountants"
          description="Whether you have an established fund needing annual accounts or are preparing to establish an SMSF, book an appointment with Financially Up."
          primaryButton={{
            text: "Book an Appointment",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
