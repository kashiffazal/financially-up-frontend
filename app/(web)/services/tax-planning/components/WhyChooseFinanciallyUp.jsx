"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  CalendarOutlined,
  GlobalOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUp Component
 * ================================
 * Sections 8 & 9 of Tax Planning Hub:
 * - "How Financially Up Approaches Tax Planning"
 * - "Why Choose Financially Up?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 *
 * Consumes company information dynamically via `useCompany()` hook from `@/context/SettingsContext`.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();
  const legalName = company?.legalName || "Financially Up Pty Ltd";

  const firmCredentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: "Registered tax agent operating under the regulatory standards of the Tax Practitioners Board (TPB).",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Our professional team includes CPA and IPA members with extensive taxation expertise.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Experience",
      desc: "More than a decade assisting Australian businesses and individuals with proactive planning.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Appointments",
      desc: "Online appointments via secure calendar links Australia-wide, with in-person consultations also available.",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      icon: <CompassOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      title: "Identify Decision or Concern",
      desc: "Financially Up starts by identifying the decision or tax concern that needs attention.",
    },
    {
      step: "02",
      icon: <AuditOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      title: "Review Facts & Agree Scope",
      desc: "We review the relevant facts and records, clarify which issues fall within tax planning, and agree the scope before detailed advisory work is undertaken.",
    },
    {
      step: "03",
      icon: <FileDoneOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      title: "Plain-Language Advice",
      desc: "We explain the practical tax implications in plain language so you understand the consequences before choices are locked in.",
    },
    {
      step: "04",
      icon: <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      title: "Planning vs Compliance",
      desc: "Planning informs future decisions; compliance work records and reports the outcome of transactions that have already occurred.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* ========================================================= */}
        {/* SECTION 8: How Financially Up Approaches Tax Planning     */}
        {/* ========================================================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <Tag color="cyan" className="brand-section-tag">
              <AuditOutlined className="mr-1" /> Advisory Approach
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up Approaches Tax Planning
            </h2>
            {/* Document Paragraph 1 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
              Financially Up starts by identifying the decision or tax concern
              that needs attention. We review the relevant facts and records,
              clarify which issues fall within tax planning and explain the
              practical tax implications in plain language. Where advice is
              separately scoped, the scope is agreed before detailed advisory
              work is undertaken.
            </p>
          </div>

          {/* Document Paragraph 2 - Verbatim Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block mb-2">
                Forward Planning vs Historical Compliance
              </span>
              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-800 dark:text-zinc-200 font-medium leading-relaxed m-0">
                Our tax planning support can sit alongside tax return preparation,
                accounting and bookkeeping, but those services are not
                interchangeable. Planning is intended to inform future decisions;
                compliance work records and reports the outcome of transactions
                that have already occurred.
              </p>
            </div>
          </div>

          {/* 4 Approach Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 m-0 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 9: Why Choose Financially Up?                     */}
        {/* ========================================================= */}
        <div className="pt-10 border-t border-slate-200/80 dark:border-zinc-800">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <Tag color="green" className="brand-section-tag">
              <TeamOutlined className="mr-1" /> Firm Credentials
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Choose Financially Up?
            </h2>
            {/* Document Paragraph 1 - Verbatim with Dynamic Company Name */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
              {legalName} is an Australian accounting, tax, bookkeeping and
              business advisory firm. We are a registered tax agent with more
              than 10 years of experience, and our professional team includes CPA
              and IPA members. We support clients Australia-wide through online
              appointments, with in-person appointments also available.
            </p>
          </div>

          {/* 4 Firm Credentials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {firmCredentials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4 hover:border-teal-500/50 shadow-2xs transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white m-0">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Banner */}
          <AdvisoryReassuranceBanner
            tag="Advisory Clarity"
            title="Discuss Your Tax Planning Position"
            description="Discuss your business or personal tax position, upcoming decisions and the records available. Financially Up can identify the appropriate tax planning scope and next steps."
            primaryButton={{
              text: "Book an Appointment",
              href: "/book-an-appointment",
            }}
            showPhone={true}
          />
        </div>
      </div>
    </section>
  );
}
