"use client";

import React from "react";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  FileTextOutlined,
  ApartmentOutlined,
  DollarOutlined,
  IdcardOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatAtoHelpIncludes Component
 * =============================
 * Section 2: What does ATO help include?
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Explains registered tax agent authority, portal access, client-to-agent nomination rules,
 * and highlights dedicated pathways for ATO Debt and ATO Audit matters.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatAtoHelpIncludes() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Scope & Registered Authority
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does ATO help include?
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ATO help is professional support with tax administration, lodgements, account issues,
            correspondence and interactions with the ATO. The work required depends on why the ATO has
            contacted you and whether the underlying issue is administrative, compliance-related,
            debt-related or connected with a review or audit.
          </p>
        </div>

        {/* Registered Tax Agent Authority & Nomination Box */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs p-6 sm:p-8 lg:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <IdcardOutlined className="text-2xl" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                Registered Tax Agent Appointment & ATO Communication
              </h3>
              {/* Exact Verbatim Paragraph 2 from Document */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                A registered tax agent can act for a client&apos;s tax affairs when properly
                appointed. This may allow Financially Up to access relevant tax-account information,
                lodge documents within the agreed scope and discuss the matter with the ATO. Certain
                entities with an ABN must first complete the ATO&apos;s client-to-agent nomination
                process; sole traders are excluded from that nomination requirement. In every case, the
                taxpayer remains responsible for providing complete and accurate information.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Service Pathway Cards (Debt Help & Audit Support) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: ATO Debt Help */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center">
                  <DollarOutlined className="text-amber-600 dark:text-amber-400 text-xl" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                  Focused Service
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                ATO Debt Help
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                Dedicated assistance for managing tax debt, structured payment plans, General Interest
                Charge (GIC) remission requests, and active ATO collection matters.
              </p>
            </div>
            <Link href="/services/ato-help/ato-debt">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-11 rounded-xl font-semibold shadow-xs hover:scale-[1.01] transition-all"
              >
                Explore ATO Debt Help
              </Button>
            </Link>
          </div>

          {/* Card 2: ATO Audit Support */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center">
                  <AuditOutlined className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  Focused Service
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                ATO Audit Support
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                Specialist support for ATO reviews, audit correspondence, substantiated response
                workpapers, data-matching queries, and formal tax representation.
              </p>
            </div>
            <Link href="/services/ato-help/ato-audit">
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-11 rounded-xl font-semibold border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:scale-[1.01] transition-all"
              >
                Explore ATO Audit Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
