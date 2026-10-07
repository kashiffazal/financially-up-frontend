"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  KeyOutlined,
  CalendarOutlined,
  TeamOutlined,
  SwapOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatWeNeedAndHowWeHelp Component
 * ================================
 * Section 4 of ASIC Registered Agent Service (/services/asic/registered-agent/):
 * 1. "What we may need to get started"
 * 2. "How Financially Up can help"
 *
 * Implements 100% complete, verbatim content from Page 2 of '7th Pillar ASIC.docx'.
 * Clean White alternating section background with interactive checklist pills,
 * credential badges, and dynamic phone action via useCompany().
 */
export default function WhatWeNeedAndHowWeHelp() {
  const company = useCompany();

  const onboardingChecklist = [
    {
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Company ACN & Name",
      desc: "Australian Company Number and official registered company name.",
    },
    {
      icon: <KeyOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "ASIC Corporate Key",
      desc: "The 8-digit security key issued by ASIC for company record access.",
    },
    {
      icon: <CalendarOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Current ASIC Annual Statement",
      desc: "Latest annual statement showing current recorded officeholders and shareholdings.",
    },
    {
      icon: <TeamOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Current Officeholder & Address Details",
      desc: "Up-to-date names, residential addresses, and registered office / business addresses.",
    },
    {
      icon: <SwapOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Existing Agent Handover Details",
      desc: "Details of any currently appointed registered agent for a clean transition via Form 362.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Pending or Unlodged Changes",
      desc: "Confirmation of any recent director, address, or share changes not yet lodged with ASIC.",
    },
  ];

  const credentials = [
    { value: "10+ Years", label: "Corporate Experience" },
    { value: "CPA & IPA", label: "Professional Members" },
    { value: "TPB Registered", label: "Registered Tax Agent" },
    { value: "Australia-Wide", label: "Online & In-Person" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: What we may need to get started */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Onboarding Checklist
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What we may need to get started
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              To establish or take over registered agent administration, we may need the company’s ACN, current ASIC annual statement, corporate key or relevant access details, current officeholder and address information, and confirmation of any outstanding or recently completed changes. If another agent is currently appointed, the changeover also needs to be handled correctly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {onboardingChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
            <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed m-0 font-normal">
              <strong>Record Reconciliation Note:</strong> Where the ASIC record does not match the company’s internal records, we may first need to identify and correct the differences before ongoing administration can operate cleanly.
            </p>
          </div>
        </div>

        {/* Subsection 2: How Financially Up can help */}
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Integrated Corporate Support
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              How Financially Up can help
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-4">
              Financially Up can manage the practical registered-agent workflow and help keep ASIC administration connected with broader company accounting. If a company is newly being established, our company registration service covers the setup stage. Once the company exists, registered-agent support can form part of its ongoing administration.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-emerald-200 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up has more than 10 years of experience, a professional team including CPA and IPA members, and registered tax agent status. We provide Australia-wide support with online and in-person appointment options.
            </p>

            {/* Credential Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 mb-8">
              {credentials.map((c, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">
                    {c.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/book-an-appointment" className="w-full sm:w-auto">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full sm:w-auto rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-none h-11"
                >
                  Book an Appointment
                </Button>
              </Link>

              {company?.phone && (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    className="w-full sm:w-auto rounded-xl font-bold bg-transparent border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-white h-11"
                  >
                    Call {company.phone}
                  </Button>
                </a>
              )}

              <Link
                href="/services/business-structures/company-registration"
                className="text-xs text-emerald-300 hover:text-white hover:underline sm:ml-auto"
              >
                Need to register a new company first? Explore Company Registration →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
