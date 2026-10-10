"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BookOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatFinanciallyUpMaintainsAndReconstruction Component
 * =====================================================
 * Section 3 of Corporate Registers (/services/asic/corporate-registers/):
 * 1. "What Financially Up can help maintain" (7 items)
 * 2. "Can an incomplete corporate register be reconstructed?"
 * 3. "Ongoing company register management service"
 * 4. "Why choose Financially Up"
 *
 * Implements 100% complete, verbatim content from Page 10 of '7th Pillar ASIC.docx'.
 * Gradient section background, register scope breakdown, reconstruction principles, credentials, and dynamic phone action.
 */
export default function WhatFinanciallyUpMaintainsAndReconstruction() {
  const company = useCompany();

  const maintenanceItems = [
    "Register of members and shareholding information",
    "Records of share issues and transfers supported by available documents",
    "Share certificates where applicable",
    "Director and member resolutions supplied or prepared within the agreed scope",
    "Company constitution and key corporate documents provided by the client",
    "ASIC annual statements and selected lodgement records",
    "Registered office, officeholder and other company-information records",
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
        {/* Subsection 1: What Financially Up can help maintain */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Maintenance Scope & Assembly
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Financially Up can help maintain
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The exact scope depends on the company&apos;s structure, history and available documents. A company records and registers service may include assembling a current corporate register, reviewing member and share information, updating records for properly completed changes, organizing resolutions and consents, and checking key information against ASIC records.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {maintenanceItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800"
                >
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-4 mt-6 border-t border-slate-100 dark:border-zinc-800 m-0">
              Financially Up can help with the accounting and company-administration aspects of these records. We do not replace legal advice on the validity of historical transactions, shareholder rights, disputes, constitutional interpretation or missing legal instruments. Those matters may require an appropriately qualified lawyer.
            </p>
          </div>

          {/* Subsections 2 & 3: Reconstructed & Ongoing Management side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subsection 2: Can an incomplete corporate register be reconstructed? */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Can an incomplete corporate register be reconstructed?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0 mb-3">
                  Sometimes. If records are incomplete, the first step is to gather the evidence that exists - for example ASIC extracts, annual statements, prior accountant files, share certificates, bank or subscription records, signed transfer forms, resolutions and correspondence. From there, gaps and inconsistencies can be identified.
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-100 dark:border-zinc-800 m-0">
                A reconstruction should be based on evidence rather than assumptions. If ownership is disputed or documents conflict, professional legal advice may be required before the register can be finalized.
              </p>
            </div>

            {/* Subsection 3: Ongoing company register management service */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <SyncOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                    Ongoing company register management service
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  For companies with regular changes, ongoing register maintenance can be more efficient than trying to rebuild records later. This can be coordinated with an{" "}
                  <Link href="/services/asic/registered-agent" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    ASIC Registered Agent arrangement
                  </Link>{" "}
                  so ASIC correspondence and internal record updates are dealt with in a more consistent workflow.
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-100 dark:border-zinc-800 m-0">
                Centralized statutory registry keeps board decisions, member registers, and ASIC lodgements synchronized under Australian corporate law.
              </p>
            </div>
          </div>
        </div>

        {/* Subsection 4: Why choose Financially Up */}
        <div className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Reliable Internal Records
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up supports company owners with accounting, tax and corporate administration. We are a registered tax agent with more than 10 years of experience, and our team includes CPA and IPA members. We provide Australia-wide support through online appointments, with in-person appointments also available.
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
