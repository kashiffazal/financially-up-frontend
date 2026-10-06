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
 * WhyChooseFinanciallyUpRd Component
 * =================================
 * Section: Why Choose Financially Up (R&D Tax Incentive Practice)
 *
 * Demonstrates firm credentials, CPA/IPA accreditation, registered tax agent status,
 * and 10+ years of Australian taxation and accounting experience.
 * Consumes dynamic company contact information via `useCompany()`.
 *
 * Theme: Clean White
 */
export default function WhyChooseFinanciallyUpRd() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "As a registered tax agent, Financially Up can review the tax and accounting aspects of an R&D tax incentive claim and assist with a company tax return within an agreed engagement.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Team",
      description:
        "Our professional accounting team includes accredited members of CPA Australia and the Institute of Public Accountants (IPA), maintaining high technical and ethical standards.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "More Than 10 Years of Experience",
      description:
        "Over a decade of hands-on experience across Australian business taxation, company tax returns, expenditure reconciliations and innovation claim support.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Service",
      description:
        "We offer flexible online consultations and in-person appointments across Australia, discussing the specific work needed without making false guarantees.",
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
            {company?.legalName || "Financially Up Pty Ltd"} has more than 10 years of experience and a team including CPA and IPA members. We discuss the specific work needed without guaranteeing eligibility, registration, an offset amount or ATO acceptance.
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
          tag="R&D Tax Incentive Consultation"
          tagIcon="safety"
          title="Discuss Your Project Before the Deadline"
          description="Book an Appointment with Financially Up to review the project, records and registration timing and agree the appropriate scope for R&D tax incentive assistance."
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
