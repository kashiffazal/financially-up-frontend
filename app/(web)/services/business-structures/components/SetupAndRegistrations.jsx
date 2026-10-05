"use client";

import React from "react";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  BankOutlined,
  IdcardOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * SetupAndRegistrations Component
 * ===============================
 * Section 5: Business Setup & Post-Registration Requirements.
 *
 * Explains the two distinct phases of entity establishment:
 * Phase 1: Entity Formation & Governance (ASIC, Deeds, Director IDs)
 * Phase 2: Commercial & Tax Registrations (ABN, TFN, Business Names, GST)
 *
 * Highlights the essential distinctions between Company Name, Business Name, ACN, and ABN.
 * Background: Lite Brand Gradient.
 */
export default function SetupAndRegistrations() {
  const phase1Steps = [
    {
      title: "ASIC Incorporation & Governance",
      desc: "Lodge incorporation via ASIC to establish the proprietary company, issue the Certificate of Registration, and allocate the 9-digit Australian Company Number (ACN).",
    },
    {
      title: "Director Identification Numbers (Director IDs)",
      desc: "All proposed directors must individually obtain their 15-digit Director ID from Australian Business Registry Services (ABRS) prior to official corporate appointment.",
    },
    {
      title: "Consents, Constitutions & Registers",
      desc: "Obtain written director and member consents, establish the company constitution or replaceable rules, and set up statutory share registers.",
    },
  ];

  const phase2Steps = [
    {
      title: "ABN Application & Entity TFN",
      desc: "Apply for the entity's 11-digit Australian Business Number (ABN) and dedicated Tax File Number (TFN) with the Australian Business Register.",
    },
    {
      title: "ASIC Business Name Registration",
      desc: "Register a distinct trading or brand name with ASIC if trading under a name other than your exact company or personal legal name.",
    },
    {
      title: "GST, PAYG Withholding & Bank Feeds",
      desc: "Register for GST (compulsory at $75k turnover), set up PAYG withholding for staff, and open dedicated entity bank accounts to maintain clean records.",
    },
  ];

  const identifierComparisons = [
    {
      label: "Company Name",
      description: "The legal name registered with ASIC that officially identifies the corporate body (e.g., 'ABC Trading Pty Ltd').",
      badge: "ASIC Register",
    },
    {
      label: "ACN (9 digits)",
      description: "The unique Australian Company Number issued by ASIC upon successful incorporation.",
      badge: "Corporate ID",
    },
    {
      label: "ABN (11 digits)",
      description: "The public business identifier used in dealings with the ATO, government, and commercial customers.",
      badge: "Tax Register",
    },
    {
      label: "Business Name",
      description: "A registered trading name required whenever trading under a brand name other than the entity's legal name.",
      badge: "Trading Brand",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <IdcardOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Implementation Roadmap
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business Setup & Post-Registration Requirements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Once a structure is selected, the next step is making sure the entity, corporate records, and tax registrations are set up consistently. Financially Up coordinates each phase to prevent costly mismatches between entity registers.
          </p>
        </div>

        {/* 2-Phase Sequence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Phase 1: Entity Establishment */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <BankOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Stage 1
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Entity Formation & Governance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Legal Base
                </span>
              </div>

              <div className="space-y-4">
                {phase1Steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Coordinated with ASIC & ABRS
              </span>
              <Link
                href="/services/business-structures/company-registration"
                className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Company Registration</span>
                <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>

          {/* Phase 2: Business & Tax Registrations */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <FileTextOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Stage 2
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Commercial & Tax Registrations
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Tax Setup
                </span>
              </div>

              <div className="space-y-4">
                {phase2Steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Coordinated with ATO & ABR
              </span>
              <Link
                href="/services/business-structures/abn-registration"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>ABN Registration</span>
                <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Identifier Distinction Callout Banner */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 lg:p-9 shadow-sm">
          <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
            <InfoCircleOutlined />
            <span>Essential Distinction</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Company Name, Business Name, ACN and ABN Are Different
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 max-w-3xl leading-relaxed">
            Many new business owners mistakenly assume registering a company covers every trading name, or that an ABN and ACN are interchangeable. In Australia, each serves a specific legal and administrative purpose:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {identifierComparisons.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800/80"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
            <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
              Need assistance making sure your registrations match before you sign commercial leases or contracts?
            </p>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="h-10 px-5 rounded-lg font-semibold shadow-md shadow-brand-primary/20"
              >
                Book Setup Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
