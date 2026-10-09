"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  BankOutlined,
  DollarOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatFinanciallyUpHelpsAndWhyChoose Component
 * ===========================================
 * Section 4 of Company Deregistration (/services/asic/company-deregistration/):
 * 1. "What Financially Up can help with"
 * 2. "Information and records to prepare"
 * 3. "Why choose Financially Up?"
 *
 * Implements 100% complete, verbatim content from Page 5 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, pre-deregistration records checklist, credentials, and dynamic phone action.
 */
export default function WhatFinanciallyUpHelpsAndWhyChoose() {
  const company = useCompany();

  const recordPills = [
    { icon: <FileTextOutlined />, label: "Company ACN and ASIC details" },
    { icon: <BankOutlined />, label: "Financial or bookkeeping records" },
    { icon: <DollarOutlined />, label: "Bank and loan balances" },
    { icon: <DollarOutlined />, label: "Assets and liabilities schedule" },
    { icon: <FileTextOutlined />, label: "Outstanding tax lodgements" },
    { icon: <TeamOutlined />, label: "Employee obligations records" },
    { icon: <SafetyCertificateOutlined />, label: "Confirmation of no legal disputes" },
    { icon: <CheckCircleOutlined />, label: "Shareholder unanimous agreement" },
  ];

  const credentials = [
    { value: "10+ Years", label: "Corporate Experience" },
    { value: "CPA & IPA", label: "Qualified Specialists" },
    { value: "TPB Registered", label: "Registered Tax Agent" },
    { value: "Australia-Wide", label: "Online & In-Person" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: What Financially Up can help with */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Closure Scope & Compliance
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Financially Up can help with
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can review the company&apos;s accounting records and ASIC status, identify outstanding bookkeeping or tax work, help assess whether the published voluntary deregistration criteria appear to be met, assist with final compliance tasks within scope, and support the ASIC deregistration application once the company is ready. If the company is not ready to close, we can identify the unresolved items so they can be addressed in the right order.
            </p>
          </div>

          {/* Subsection 2: Information and records to prepare */}
          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Information and records to prepare
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
              Useful records include the company ACN and ASIC details, financial or bookkeeping records, bank and loan balances, assets and liabilities, outstanding tax lodgements, employee obligations, any legal disputes and confirmation of shareholder agreement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {recordPills.map((p, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm shrink-0">
                    {p.icon}
                  </span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 3: Why choose Financially Up? */}
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Integrated Closure Support
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up is a registered tax agent with more than 10 years of experience. Our team includes CPA and IPA professionals and supports clients Australia-wide through online and in-person appointments. For company closure matters, we combine the ASIC administration with the accounting and tax review needed to understand whether the company is actually ready to be deregistered.
            </p>

            {/* Metrics */}
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

            {/* Actions */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
