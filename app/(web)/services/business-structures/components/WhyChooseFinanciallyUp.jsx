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
 * Section 8: Why choose Financially Up?
 *
 * Implements verbatim copy from Paragraphs 47 to 49 of '6th Pillar Business Structures.docx':
 * - Verbatim Heading 2: "Why choose Financially Up?" (Para 47)
 * - Verbatim Paragraph 48 & Paragraph 49
 * - Consumes dynamic company contact information via `useCompany()`.
 *
 * Background: Clean White with alternating palette.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();
  const legalName = company?.legalName || "Financially Up Pty Ltd";

  const credentialBadges = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Officially registered with the Tax Practitioners Board. Authorised to manage business entity registrations, ABNs, and continuing ATO compliance.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      description:
        "Our professional accounting team includes qualified members of CPA Australia and the Institute of Public Accountants (IPA).",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Experience",
      description:
        "More than a decade of proven expertise delivering taxation, accounting, bookkeeping, and business advisory services across Australia.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Online & In-Person Appointments",
      description:
        "Flexible appointment options available nationwide, including virtual video conferences and in-person meetings at our offices.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Verbatim Heading 2 (Para 47) & Paragraph 48 */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why choose Financially Up?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {legalName} provides accounting, tax, bookkeeping and business advisory support to clients across Australia. We are a registered tax agent with more than 10 years of experience, and our team includes CPA and IPA members. Online and in-person appointments are available.
          </p>
        </div>

        {/* 4 Credential Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {credentialBadges.map((item, idx) => (
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

        {/* Scope Clarity Card: Verbatim Paragraph 49 */}
        <div className="rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 mb-12 text-center max-w-4xl mx-auto shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Clear Separation of Professional Scope
          </h4>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            Our role is to make the accounting and tax implications understandable, help with the relevant setup and registrations, and clearly separate routine registration work from tax planning, legal advice and other specialist work that may need a different scope.
          </p>
        </div>

        {/* Advisory Clarity Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Strategic Advisory Consultation"
          tagIcon="safety"
          title="Discuss Your Structure With a Qualified Tax Agent"
          description="Whether you are starting a new business, incorporating a company, establishing a trust, or reviewing whether your current setup still fits your growth, book an appointment with Financially Up."
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
