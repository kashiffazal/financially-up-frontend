"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileDoneOutlined,
  StopOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * FinalAuditReturnAndAtoClosure Component
 * =======================================
 * Implements verbatim SEO content from Page 9 of 9th Pillar SMSF.docx:
 * - Final SMSF annual return and ATO closure
 * - Automatic ABN cancellation by ATO, closing bank account last, no reactivation rule
 */
export default function FinalAuditReturnAndAtoClosure() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Final Lodgement & ATO De-registration
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Final SMSF annual return and ATO closure
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The trustees must lodge any outstanding annual returns and then lodge the final SMSF annual return with the relevant wind-up information completed. Once the final return is processed, the ATO will cancel the SMSF&apos;s ABN and close the fund&apos;s records. Trustees should not separately cancel the ABN. The fund bank account should be closed last, after final liabilities are paid, refunds are received, rollovers are completed and the ATO confirms the fund has been wound up.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Once an SMSF is wound up, it cannot simply be reactivated later. If members later want another SMSF, a new fund would need to be established and the relevant establishment requirements considered again.
          </p>
        </div>

        {/* 2 Critical Process Safeguards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 w-full">
          {/* Card 1: Bank Account Closed Last */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <BankOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Fund Bank Account Must Be Closed Last
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Never close the SMSF bank account prematurely:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Receive any remaining tax refunds or dividend imputation credits from the ATO</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Pay all final invoices (statutory audit, accounting fees, supervisory levy)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Close only once the ATO provides written confirmation of fund de-registration</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              Do not manually cancel the ABN via the Australian Business Register.
            </div>
          </div>

          {/* Card 2: Permanence & Cannot Be Reactivated */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/40 flex items-center justify-center mb-6">
                <StopOutlined className="text-2xl text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Winding Up is Irrevocable & Permanent
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Once an SMSF is wound up, it cannot simply be reactivated later:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>The fund&apos;s ABN and TFN are permanently retired in ATO superannuation registries</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>Trustees cannot re-open the closed fund for future contributions or assets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>If members later want an SMSF, a new fund must be formally established from scratch</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-rose-700 dark:text-rose-400 font-medium">
              Consider long-term retirement objectives before executing closure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
