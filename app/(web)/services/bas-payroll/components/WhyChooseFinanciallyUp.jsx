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
 * WhyChooseFinanciallyUp Component
 * ================================
 * Section 8 of BAS, GST & Payroll Hub:
 * "Why choose Financially Up?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Consumes dynamic company variables via `useCompany()` hook from `@/context/SettingsContext`.
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();

  /**
   * The 4 core firm credentials matching the verbatim document statement
   */
  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Registered Australian tax agent firm providing authorized, accurate activity statement preparation, lodgement and ATO liaison.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      description:
        "Our professional accounting team includes accredited CPA Australia and Institute of Public Accountants (IPA) members.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Experience",
      description:
        "Bringing more than 10 years of hands-on experience across Australian business accounting, tax work, and compliance reporting.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Support",
      description:
        "Comprehensive support is available Australia-wide, featuring convenient online video consultations and in-person appointments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why choose Financially Up?
          </h2>

          {/* Document Section 7 Paragraph - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up Pty Ltd"} is an Australian
            accounting, taxation, bookkeeping and business advisory firm and a
            registered tax agent. The team includes CPA and IPA members and
            brings more than 10 years of experience across business accounting
            and tax work. Support is available Australia-wide, with online and
            in-person appointments.
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
              <div className="space-y-2">
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

        {/* Advisory Clarity Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Activity Statement Consultation"
          tagIcon="safety"
          title="Discuss Your BAS & Payroll Requirements"
          description="Book an appointment to discuss your BAS cycle, GST registrations, payroll-related reporting, bookkeeping records and any outstanding activity statements. We can help establish what information is needed and the appropriate scope of work."
          primaryButtonText="Book an Appointment"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
