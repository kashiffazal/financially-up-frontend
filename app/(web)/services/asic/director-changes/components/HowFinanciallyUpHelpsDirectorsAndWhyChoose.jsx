"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  FileTextOutlined,
  IdcardOutlined,
  CalendarOutlined,
  TeamOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsDirectorsAndWhyChoose Component
 * ===================================================
 * Section 4 of Change Director ASIC (/services/asic/director-changes/):
 * 1. "How Financially Up can help"
 * 2. "What to have ready"
 * 3. "Why choose Financially Up?"
 *
 * Implements 100% complete, verbatim content from Page 6 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, records checklist, credentials, and dynamic company phone.
 */
export default function HowFinanciallyUpHelpsDirectorsAndWhyChoose() {
  const company = useCompany();

  const readyPills = [
    { icon: <FileTextOutlined />, label: "Company name and ACN" },
    { icon: <CalendarOutlined />, label: "Current ASIC company details" },
    { icon: <IdcardOutlined />, label: "Director identifying information" },
    { icon: <SafetyCertificateOutlined />, label: "Written consent for appointment" },
    { icon: <FileTextOutlined />, label: "Resignation or cessation documents" },
    { icon: <TeamOutlined />, label: "Relevant board minutes or resolutions" },
    { icon: <CalendarOutlined />, label: "Effective date of change" },
    { icon: <SwapOutlined />, label: "Details of connected shareholder/address changes" },
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
        {/* Subsection 1: How Financially Up can help */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Service Scope & Compliance
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can assist with a routine director change by reviewing the company details and effective date, checking what supporting information is available, identifying related company updates, assisting with the ASIC notification and keeping the change aligned with the company&apos;s accounting and compliance records. Where a change is late, disputed or legally complex, we can identify that additional specialist advice may be required rather than treating the matter as routine.
            </p>
          </div>

          {/* Subsection 2: What to have ready */}
          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              What to have ready
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
              Useful records include the company name and ACN, current ASIC company details, the director&apos;s identifying information, written consent for an appointment, resignation or cessation documents, relevant minutes or resolutions, the effective date, and details of any connected shareholder or address changes. If the proposed director does not yet have a director ID, that should be dealt with before appointment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {readyPills.map((p, i) => (
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
        <div className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Accurate Corporate Administration
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up is a registered tax agent with more than 10 years of experience supporting companies with accounting, taxation, bookkeeping and business administration. Our team includes CPA and IPA professionals, and we provide Australia-wide support through online and in-person appointments. For director changes, the focus is accurate company administration, clear records and timely ASIC updates.
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
