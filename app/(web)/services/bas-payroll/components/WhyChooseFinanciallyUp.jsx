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
 * Section 8: Why Choose Financially Up (BAS & Payroll Practice).
 *
 * Demonstrates firm credentials, CPA/IPA accreditation, registered tax agent status (#26234055),
 * 10+ years of Australian BAS, GST, and payroll experience.
 * Consumes dynamic company contact information via `useCompany()`.
 * Background: Clean White.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent & Authorised Lodgement",
      description:
        "Financially Up is officially registered with the Tax Practitioners Board (TPB #26234055). We are legally authorised to prepare and lodge all activity statements, GST matters, and payroll tax returns.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Tax Professionals",
      description:
        "Our team includes accredited members of CPA Australia and the Institute of Public Accountants (IPA), ensuring rigorous attention to Australian tax rulings and compliance accuracy.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Australian Small Business Tax",
      description:
        "Over a decade helping Australian sole traders, companies, and trusts navigate GST rules, Single Touch Payroll, employee awards, and ATO lodgements.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Extended ATO Deadlines & Online Ease",
      description:
        "Access registered tax agent lodgement extensions for quarterly BAS, supported by 100% online screen-sharing consultations and in-person appointments at North Sydney.",
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
            Why Choose Financially Up?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up Pty Ltd"} is an Australian accounting, taxation, bookkeeping and business advisory firm. We ensure your activity statements and employee obligations are compliant, accurate, and lodged on time.
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
          description="Book an appointment with our qualified tax agents to review your BAS cycle, GST registrations, Single Touch Payroll, and any outstanding activity statements. We'll establish what records are needed and confirm next steps."
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
