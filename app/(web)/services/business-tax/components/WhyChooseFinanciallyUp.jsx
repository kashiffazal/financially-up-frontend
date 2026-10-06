"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUp Component
 * ================================
 * Section 7: Why Choose Financially Up (Business Tax Practice).
 *
 * Demonstrates firm credentials, CPA/IPA qualification, registered tax agent status,
 * 10+ years of Australian business tax experience, and flexible consultation options.
 *
 * All text is 100% VERBATIM from the professional SEO specialist document:
 * '2nd pillar Business Tax Final Pages.docx'.
 */
export default function WhyChooseFinanciallyUp() {
  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Financially Up is an officially registered tax agent with the Tax Practitioners Board (TPB).",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      description:
        "Our team includes qualified members of CPA Australia and the Institute of Public Accountants (IPA).",
    },
    {
      icon: <HistoryOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years Experience",
      description:
        "The business has more than 10 years of experience supporting clients with accounting and tax matters.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Services",
      description:
        "Comprehensive accounting, taxation, bookkeeping and business advisory services to clients Australia-wide.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950 border-t border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why Choose Financially Up
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up provides accounting, taxation, bookkeeping and
            business advisory services to clients Australia-wide. The team
            includes CPA and IPA members, Financially Up is a registered tax
            agent, and the business has more than 10 years of experience
            supporting clients with accounting and tax matters.
          </p>
        </div>

        {/* 4 Credential Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center mb-4 shadow-2xs">
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

        {/* Verbatim Paragraph 2 via AdvisoryReassuranceBanner */}
        <AdvisoryReassuranceBanner
          tag="Flexible Consultations"
          tagIcon="safety"
          title="Clear Advice & Consultations"
          primaryButton={{
            text: "Book an Appointment",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        >
          <p className="m-0 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
            Appointments can be arranged online or by phone, with online
            meetings available for clients across Australia and in-person
            appointments available where preferred. Our focus is to explain what
            needs to be done, what information is required and which matters
            should be dealt with now versus separately as advice or planning.
          </p>
        </AdvisoryReassuranceBanner>
      </div>
    </section>
  );
}
