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
 * WhyChooseFinanciallyUpAsic Component
 * =====================================
 * Section 8: Why Choose Financially Up (ASIC Compliance Practice).
 *
 * Demonstrates firm credentials, CPA/IPA accreditation, registered tax agent status (#26234055),
 * and 10+ years of corporate secretarial and ASIC compliance experience.
 * Consumes dynamic company contact information via `useCompany()`.
 *
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUpAsic() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Authorised ASIC Registered Agent & Tax Agent",
      description:
        "Financially Up is officially registered with the Tax Practitioners Board (TPB #26234055) and operates as an ASIC registered agent with direct portal access for rapid corporate lodgements.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Corporate Professionals",
      description:
        "Our team includes accredited members of CPA Australia and the Institute of Public Accountants (IPA), combining strict corporate law compliance with tax strategy.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Australian Company Administration",
      description:
        "Over a decade managing Australian proprietary companies, corporate groups, holding structures, and corporate trustees with proactive review tracking.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Never Miss an ASIC Deadline or Solvency Minute",
      description:
        "Centralise annual statements, track the 28-day change rule, eliminate late fees, and receive structured director solvency minutes delivered on schedule.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why Choose Financially Up for ASIC Compliance?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up Pty Ltd"} provides corporate administration with complete accounting and tax context. We protect company directors from compliance blindspots and penalties.
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
          tag="ASIC Registered Agent Consultation"
          tagIcon="safety"
          title="Appoint an ASIC Registered Agent for Your Company"
          description="Never miss an annual review, late fee, or statutory update again. Book an appointment with Financially Up to review your current ASIC standing and transfer ongoing company administration to our qualified registered agent team."
          primaryButton={{
            text: "Appoint Registered Agent",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
