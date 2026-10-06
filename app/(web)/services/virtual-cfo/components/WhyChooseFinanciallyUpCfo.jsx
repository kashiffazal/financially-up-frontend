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
 * WhyChooseFinanciallyUpCfo Component
 * ===================================
 * Section 9: Why choose Financially Up?
 *
 * Implements 100% verbatim content from '13th Pillar Virtual CFO.docx' (Section 1 - Virtual CFO).
 * Highlights registered tax agent standing, 10+ years of experience across accounting, taxation,
 * bookkeeping and advisory, CPA/IPA professionals, and Australia-wide support.
 * Consumes dynamic company contact information via `useCompany()`.
 *
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUpCfo() {
  const company = useCompany();

  /**
   * 4 Credential Pillars directly supporting the document narrative
   */
  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Statutory accounting rigor and registered tax agent oversight ensure that your financial models, balance sheets, and tax provisions stand up to scrutiny.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "10+ Years Multi-Disciplinary Experience",
      description:
        "Over a decade of hands-on expertise spanning commercial accounting, business taxation, bookkeeping, and strategic advisory for Australian enterprises.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Professionals",
      description:
        "Our team includes qualified members of CPA Australia and the Institute of Public Accountants (IPA), combining analytical discipline with executive reporting skills.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      description:
        "Accessible online and in-person appointments for businesses across Sydney, Melbourne, Brisbane, Perth, Adelaide, and regional Australia.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why choose Financially Up?
          </h2>

          {/* Exact Verbatim Paragraph from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory work. Our team includes CPA and IPA professionals, and we support clients Australia-wide through online and in-person appointments. The focus of our virtual CFO work is practical financial visibility: reliable numbers, useful analysis and a clear reporting rhythm that supports management decisions.
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
          tag="Virtual CFO Discovery Discussion"
          tagIcon="safety"
          title="Gain Practical Financial Visibility for Your Business"
          description="Speak with our experienced CPA and IPA team to establish a dependable reporting rhythm, forecast your cash runway, and support key management decisions."
          primaryButton={{
            text: "Book a Virtual CFO Appointment",
            href: "/book-an-appointment",
          }}
          secondaryButton={{
            text: company?.phone ? `Call ${company.phone}` : "Call 1300 328 316",
            href: company?.phone ? `tel:${company.phone.replace(/\s/g, "")}` : "tel:1300328316",
          }}
        />
      </div>
    </section>
  );
}
