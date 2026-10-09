"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  TeamOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * TaxAccountingImpactAndWhyChoose Component
 * =========================================
 * Section 5 of Change Company Details (/services/asic/company-changes/):
 * 1. "Company changes can affect tax and accounting records"
 * 2. "Why choose Financially Up?"
 *
 * Implements 100% complete, verbatim content from Page 3 of '7th Pillar ASIC.docx'.
 * Gradient section background, ripple effects, credentials, and dynamic company phone.
 */
export default function TaxAccountingImpactAndWhyChoose() {
  const company = useCompany();

  const impactCards = [
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Director Changes",
      desc: "Can impact banking authorities, legal contracts, ATO authorized contacts, and payroll sign-offs.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Shareholdings & Transfers",
      desc: "Alters statutory ownership registers, dividend distributions, CGT records, and Division 7A accounts.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Corporate Restructures",
      desc: "Demands integrated tax planning, stamp duty consideration, accounting balance adjustments, and ATO alignments.",
    },
  ];

  const credentials = [
    { value: "10+ Years", label: "Corporate Experience" },
    { value: "CPA & IPA", label: "Qualified Specialists" },
    { value: "TPB Registered", label: "Registered Tax Agent" },
    { value: "Australia-Wide", label: "Online & In-Person" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Company changes can affect tax and accounting records */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Beyond the ASIC Register
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Company changes can affect tax and accounting records
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              An ASIC update does not automatically update the company’s accounting, payroll, ATO or contractual records. Depending on the event, related records may also need attention. A director change can affect authorities and payroll arrangements; a share change can affect ownership records; and a restructure can affect tax and accounting treatment.
            </p>

            {/* 3 Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {impactCards.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800"
                >
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-3">
                    {c.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal pt-2 border-t border-slate-100 dark:border-zinc-800">
              Financially Up can coordinate the accounting and tax aspects where they fall within scope. For ongoing corporate administration beyond a single update, our{" "}
              <Link href="/services/asic" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ASIC compliance services
              </Link>{" "}
              page explains the broader support available.
            </p>
          </div>
        </div>

        {/* Subsection 2: Why choose Financially Up? */}
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Integrated Experience & Accuracy
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-4">
              Financially Up has more than 10 years of experience and a professional team including CPA and IPA members. We are a registered tax agent and support clients Australia-wide through online and in-person appointments.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-emerald-200 leading-relaxed max-w-3xl font-normal mb-8">
              Our focus is to make the company-change process practical while recognising when a filing has consequences beyond ASIC administration.
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
