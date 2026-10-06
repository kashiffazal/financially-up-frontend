"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  AppstoreOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUpAsic Component
 * =====================================
 * Section: "Why choose Financially Up for ASIC company compliance services?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUpAsic() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "10+ Years of Professional Experience",
      description:
        "Our team has more than a decade of dedicated experience managing corporate secretarial records, annual company reviews, and ASIC lodgements.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Professionals",
      description:
        "Accredited accounting and corporate compliance professionals combining regulatory rigour with commercial awareness.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Registered Tax Agent Status",
      description:
        `${company?.legalName || "Financially Up"} is a registered tax agent, connecting company registers with broader tax, payroll, and financial records.`,
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Support (Online & In-Person)",
      description:
        "Supporting company directors across all Australian states and territories with flexible online video consultations and in-person appointments.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <SafetyCertificateOutlined className="mr-1" /> Credibility & Experience
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why choose Financially Up for ASIC company compliance services?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up combines corporate administration with accounting and tax context. Our team has more than 10 years of experience and includes CPA and IPA professionals, and Financially Up is a registered tax agent. We support clients Australia-wide, with online and in-person appointment options.
          </p>
        </div>

        {/* 4 Firm Strengths Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
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

        {/* Document Paragraph 2 - Verbatim Feature Highlight */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
            <AppstoreOutlined />
            <span>Our Professional Role</span>
          </div>
          {/* Document Paragraph 2 - Verbatim */}
          <p className="text-base sm:text-lg text-slate-800 dark:text-zinc-200 font-medium leading-relaxed m-0">
            Our role is to help make the compliance process clearer, keep routine filings organised and identify when a company event may need separate tax, accounting or legal attention.
          </p>
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="ASIC Registered Agent Consultation"
          tagIcon="safety"
          title="Appoint an ASIC Registered Agent for Your Company"
          description="Never miss an annual review, late fee, or statutory update again. Book an appointment with Financially Up to review your current ASIC standing and transfer ongoing company administration to our qualified registered agent team."
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
