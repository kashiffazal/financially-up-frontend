"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUpAdvisory Component
 * ========================================
 * Section 8: Why choose Financially Up?
 *
 * Implements the EXACT content from '12th Pillar Business Advisory.docx'.
 * Dynamically references company information via `useCompany()` hook.
 *
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUpAdvisory() {
  const company = useCompany();

  // Highlight points derived faithfully from the document text
  const credentialCards = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description: "Registered tax agent status bridging technical statutory compliance with forward-looking commercial advisory.",
    },
    {
      icon: <AuditOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "Over 10 Years of Experience",
      description: "More than a decade of proven experience across accounting, taxation, bookkeeping and business advisory.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Professionals",
      description: "Qualified team of CPA and IPA members delivering rigorous, high-level financial analysis and advice.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      description: "Supporting business owners across Australia through seamless online and in-person appointment options.",
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
            Why choose Financially Up?
          </h2>

          {/* Exact document text */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory. Our team includes CPA and IPA professionals, and we support clients Australia-wide through online and in-person appointments. That combination allows advisory work to stay connected with the accounting records and compliance obligations that underpin the business.
          </p>
        </div>

        {/* 4 Credential Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {credentialCards.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xs mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner with dynamic phone */}
        <AdvisoryReassuranceBanner
          tag="Commercial Advisory Consultation"
          tagIcon="safety"
          title="Connect Accounting Records with Strategic Decisions"
          description="Book an appointment with our CPA and IPA qualified advisors to review your cash flow, profit drivers, or business planning."
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
