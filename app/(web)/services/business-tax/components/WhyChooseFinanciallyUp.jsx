"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  CalendarOutlined,
  GlobalOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUp Component
 * ================================
 * Section 7: Why Choose Financially Up (Business Tax Practice).
 *
 * Demonstrates firm credentials, CPA/IPA accreditation, registered tax agent status,
 * 10+ years of Australian business tax experience, and flexible consultation channels.
 * Consumes dynamic company contact information via `useCompany()`.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent & Regulated Practice",
      description:
        "Financially Up is officially registered with the Tax Practitioners Board (TPB), ensuring every business return adheres strictly to Australian taxation standards and professional ethical codes.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Accounting Team",
      description:
        "Our team includes members of CPA Australia and the Institute of Public Accountants (IPA), combining deep technical knowledge with commercial acumen across business structures.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Commercial Tax Experience",
      description:
        "Over a decade supporting Australian companies, trusts, partnerships, and sole traders through business cycles, regulatory updates, ATO audits, and strategic expansions.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Flexible Online & In-Person Appointments",
      description:
        "We support businesses Australia-wide with seamless online video consultations and screen-sharing, alongside in-person meetings at our offices for clients who prefer face-to-face discussions.",
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
            Why Choose Financially Up
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up provides comprehensive accounting, taxation,
            bookkeeping and business advisory services to clients
            Australia-wide with transparent guidance and proven expertise.
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
          tag="Advisory Clarity"
          tagIcon="safety"
          title="Clear Advice Before Work Begins"
          description="Our core focus is explaining what needs to be done, what information is required, and which matters should be handled as routine compliance versus proactive strategic planning."
          primaryButton={{
            text: "Book a Consultation",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
