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
 * Section 9: Why choose Financially Up?
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 * Consumes dynamic company variables via `useCompany()` from `@/context/SettingsContext`.
 * Background: Lite Brand Gradient.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();

  /**
   * Credential badges supporting the verbatim practice statement
   */
  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Registered with the Tax Practitioners Board (TPB #26234055), ensuring professional bookkeeping standards and regulatory compliance.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "10+ Years of Experience",
      description:
        "More than a decade of proven experience providing bookkeeping, taxation, and business accounting across Australia.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      description:
        "Our professional accounting team includes members of CPA Australia and the Institute of Public Accountants (IPA).",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Appointments",
      description:
        "Supporting clients Australia-wide through online appointments, with in-person appointments available where preferred.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up?
          </h2>

          {/* Document Full Paragraph - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up Pty Ltd"} is an Australian
            accounting, taxation, bookkeeping and business advisory firm. We are
            a registered tax agent with more than 10 years of experience, and our
            team includes CPA and IPA members. We support clients Australia-wide
            through online appointments, with in-person appointments available
            where preferred.
          </p>
        </div>

        {/* 4 Firm Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-5 hover:border-teal-500/40 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
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

        {/* Advisory Clarity Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Bookkeeping Consultation"
          tagIcon="safety"
          title="Review Your Bookkeeping Setup"
          description="Schedule a consultation with our qualified bookkeeping team to review your current accounting file, software integrations, and transaction volume. We will agree on a transparent, practical scope for ongoing support."
          primaryButtonText="Book an Appointment"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
