"use client";

import React from "react";
import Link from "next/link";
import { Tag, Alert, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  FileDoneOutlined,
  DollarOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/**
 * DeregistrationTaxObligationsAndProcess Component
 * ===============================================
 * Section 3 of Company Deregistration (/services/asic/company-deregistration/):
 * 1. "Company deregistration and final tax obligations"
 * 2. "How does the ASIC deregistration process work?"
 * 3. "What if the company does not qualify for voluntary deregistration?"
 *
 * Implements 100% complete, verbatim content from Page 5 of '7th Pillar ASIC.docx'.
 * Responsive gradient cards, 2-month publication timeline, and 2-week annual fee threshold.
 */
export default function DeregistrationTaxObligationsAndProcess() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Company deregistration and final tax obligations */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Tax Position & ATO Alignment
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Company deregistration and final tax obligations
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The company&apos;s tax position needs separate attention from the ASIC application. Depending on its history, the company may still need final income tax, BAS or other lodgements, and tax registrations may need to be cancelled at the appropriate time. If the company has loans to or from shareholders or directors, retained profits, asset disposals or other tax-sensitive transactions, those matters should be reviewed rather than treated as automatically resolved by deregistration.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can assist with the accounting and tax work within scope. Our{" "}
              <Link href="/services/business-tax" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                business tax compliance service
              </Link>{" "}
              deals with ongoing and final business tax obligations, while the company deregistration service focuses on the closure process and related ASIC administration.
            </p>
          </div>
        </div>

        {/* Subsection 2: How does the ASIC deregistration process work? */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Procedural Timelines & Milestones
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How does the ASIC deregistration process work?
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Where the criteria are satisfied, an application for voluntary deregistration is lodged with ASIC using the applicable process. ASIC charges an application fee. If the application is approved, ASIC publishes notice of the proposed deregistration. ASIC states that a company may then be deregistered two months after publication of that notice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  2-Month Notice Period
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed m-0">
                  ASIC publishes notice of proposed deregistration. Final deregistration occurs two months later.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                <CalendarOutlined className="text-teal-600 dark:text-teal-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  2 Weeks Before Review Fee
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed m-0">
                  Apply at least two weeks before the next annual review fee is due to avoid that statutory fee becoming payable.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-100 dark:border-zinc-800 m-0">
              Timing can matter around the annual review. ASIC recommends applying at least two weeks before the next annual review fee is due if the company wants to avoid that fee becoming payable.
            </p>
          </div>
        </div>

        {/* Subsection 3: What if the company does not qualify for voluntary deregistration? */}
        <div className="w-full">
          <Alert
            type="warning"
            showIcon
            icon={<ExclamationCircleOutlined className="text-lg text-amber-600 dark:text-amber-400" />}
            className="rounded-3xl border border-amber-200/80 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/30 p-6 sm:p-8"
            title={
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white block mb-2">
                What if the company does not qualify for voluntary deregistration?
              </span>
            }
            description={
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                <p className="m-0">
                  If the criteria are not met, another pathway may be required. A solvent company may need to be wound up through a formal process. If the company is insolvent or there is uncertainty about its ability to pay debts as and when they fall due, directors should obtain appropriate insolvency and legal advice promptly.
                </p>
                <p className="m-0 text-slate-600 dark:text-zinc-400">
                  Financially Up can assist with accounting information and tax matters, but formal liquidation and legal advice are separately scoped specialist services.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
