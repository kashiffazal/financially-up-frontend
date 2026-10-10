"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  FileTextOutlined,
  SolutionOutlined,
  TeamOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatFinanciallyUpHelpsSharesAndRecords Component
 * ===============================================
 * Section 3 of Share Changes (/services/asic/share-changes/):
 * 1. "What Financially Up can help with" (6 scope points)
 * 2. "Information we may ask you to provide"
 * 3. "Why choose Financially Up"
 *
 * Implements 100% complete, verbatim content from Page 7 of '7th Pillar ASIC.docx'.
 * Responsive scope checklist, documentation readiness cards, credentials, and dynamic company phone.
 */
export default function WhatFinanciallyUpHelpsSharesAndRecords() {
  const company = useCompany();

  const scopePoints = [
    "Reviewing existing shareholder and share-structure information",
    "Helping distinguish a transfer from a new share issue",
    "Preparing ASIC updates for applicable shareholder or share-structure changes",
    "Updating or reconstructing the company share register from available evidence",
    "Checking that dates, classes, numbers of shares and beneficial status are recorded consistently",
    "Identifying when separate tax, valuation or legal input should be considered",
  ];

  const infoList = [
    { icon: <FileTextOutlined />, label: "Current ASIC company extract or annual statement" },
    { icon: <SolutionOutlined />, label: "Existing statutory share register" },
    { icon: <FileTextOutlined />, label: "Historical share certificates" },
    { icon: <SwapOutlined />, label: "Prior share issue or transfer documents" },
    { icon: <TeamOutlined />, label: "Board or member resolutions" },
    { icon: <SolutionOutlined />, label: "Company constitution & shareholders agreement" },
    { icon: <TeamOutlined />, label: "Incoming and outgoing shareholder details" },
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
        {/* Subsection 1: What Financially Up can help with */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Service Scope & Register Integrity
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Financially Up can help with
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Our share change support can be scoped around the transaction and the condition of the existing company records. Depending on the matter, assistance may include reviewing current ASIC details, checking the company&apos;s register of members, identifying the type of share change, preparing or lodging relevant ASIC updates, and bringing shareholder information into line with the completed transaction.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scopePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-4 mt-6 border-t border-slate-100 dark:border-zinc-800 m-0">
              Where an ownership change is happening alongside a director appointment or cessation, our{" "}
              <Link href="/services/asic/director-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Director Changes service
              </Link>{" "}
              may also be relevant. The corporate and shareholder changes should be documented as separate events even when they occur as part of the same transaction.
            </p>
          </div>

          {/* Subsection 2: Information we may ask you to provide */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Information we may ask you to provide
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
              Useful records can include the current ASIC company extract or annual statement, existing share register, share certificates, prior share issue or transfer documents, board or member resolutions, company constitution, shareholder agreements and details of the incoming and outgoing shareholders. If the records are incomplete, we can first identify what can be established from the material available.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {infoList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm shrink-0">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 3: Why choose Financially Up */}
        <div className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Integrated Equity & Compliance Practice
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up combines ASIC administration with accounting and tax context. We are a registered tax agent with more than 10 years of experience, and our professional team includes CPA and IPA members. We support clients Australia-wide through online appointments, with in-person appointments also available.
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
