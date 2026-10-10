"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SlidersOutlined,
  FundViewOutlined,
  ThunderboltOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsCashFlow Component
 * =======================================
 * Section 8: How Financially Up Can Help & Why Choose Financially Up.
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text detailing our 4 practical
 * forecasting deliverables, CPA/IPA credentials, and dynamic company contacts.
 */
export default function HowFinanciallyUpHelpsCashFlow() {
  const company = useCompany();

  const processPillars = [
    {
      icon: <SlidersOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Build or Review a Forecast",
      desc: "Construct a custom rolling or monthly cash model tailored to your trading cycle and payment patterns.",
    },
    {
      icon: <ThunderboltOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Test Assumptions & Stress-Scenarios",
      desc: "Model debtor lag, revenue dips, Capex, and hiring before committing capital or binding contracts.",
    },
    {
      icon: <FundViewOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Identify Pressure Points",
      desc: "Expose upcoming liquidity crunches weeks in advance to manage cash buffers and avoid overdraft stress.",
    },
    {
      icon: <SyncOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Actual vs Expected Tracking",
      desc: "Establish a recurring review cadence comparing actual bank movements against the model to refine forecasts.",
    },
  ];

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Registered Tax Agent",
      subtitle: "10+ Years Professional Practice",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "CPA & IPA Professionals",
      subtitle: "Qualified Commercial Specialists",
    },
    {
      icon: (
        <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Australia-Wide Service",
      subtitle: "Online & In-Person Appointments",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Advisory Partnership &amp; Credentials
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
        </div>

        {/* 2 Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 Card */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <CheckCircleOutlined />
                <span>Practical Forward Cash Clarity</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Financially Up can build or review a forecast, test
                assumptions, identify pressure points and establish a process
                for comparing actual cash movements with expectations. The focus
                is practical: understand when cash should move, what obligations
                need funding and which assumptions require close monitoring.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Clear forward liquidity visibility for business owners.
            </div>
          </div>

          {/* Paragraph 2 Card */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <CheckCircleOutlined />
                <span>Professional Accounting &amp; Advisory Standing</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Financially Up is a registered tax agent with more than 10 years
                of experience. Our team includes CPA and IPA professionals, and
                we work with clients Australia-wide through online and in-person
                appointments.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Accredited tax and business advisors across Australia.
            </div>
          </div>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processPillars.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {step.icon}
              </div>
              <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                Pillar 0{idx + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Credential Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
          {credentials.map((cred, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mx-auto mb-3">
                {cred.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {cred.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium m-0">
                {cred.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Book an Appointment
            </Button>
          </Link>

          {company?.phone && (
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
              <Button
                size="large"
                icon={<PhoneOutlined />}
                className="rounded-xl font-bold px-6 h-12 bg-white dark:bg-white/10 text-slate-800 dark:text-white border-slate-200 dark:border-white/20"
              >
                Call {company.phone}
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
