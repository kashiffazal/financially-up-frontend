"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SwapOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * MemberBenefitsSuperStreamAndFinalAccounts Component
 * ===================================================
 * Implements verbatim SEO content from Page 9 of 9th Pillar SMSF.docx:
 * - Member benefits must be dealt with correctly (SuperStream & 28-day rollover rule)
 * - Final accounting and SMSF audit (cross-link to audit coordination)
 */
export default function MemberBenefitsSuperStreamAndFinalAccounts() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Benefits & Final Accounts
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Member benefits must be dealt with correctly
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Before the fund is wound up, member benefits need to be paid or rolled over in accordance with superannuation law and the trust deed. The correct treatment depends on each member&apos;s circumstances. A member may not simply withdraw preserved super because the SMSF is closing, and liabilities and money owing to the fund need to be dealt with before the final rollover is completed.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where a member is rolling benefits to another complying super fund, the rollover generally needs to be processed using the applicable Super Stream requirements. Current ATO guidance recommends rolling over most benefits before the final annual return and completing any remaining rollover within 28 days after that return is lodged. Financially Up can assist with the accounting and administrative information needed for closure, while advice about which super fund or financial product a member should use requires an appropriately authorized adviser.
          </p>
        </div>

        {/* 2 Feature Cards: SuperStream Protocols & Final Audit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: SuperStream & Member Rollovers */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <SwapOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                SuperStream Rollovers & 28-Day Post-Lodgement Window
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                ATO guidance outlines clear timing protocols for finalizing member balances:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Roll over the vast majority of member balances before lodging the final return</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Retain sufficient cash reserves to cover final tax debts or audit/accounting invoices</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Execute remaining residual balance rollovers within 28 days after return lodgement</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-blue-700 dark:text-blue-400 font-medium">
              Preservation rules remain active; early release bans strictly apply.
            </div>
          </div>

          {/* Card 2: Final Accounting & Mandatory Final Audit */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-6">
                <AuditOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Final accounting and SMSF audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                The fund needs final accounts that reflect the disposal or transfer of assets, expenses, member transactions and final balances. Any outstanding annual audits from earlier years should also be completed. The final income year itself must be audited by an approved SMSF auditor before the final SMSF annual return is lodged.
              </p>
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 flex items-center justify-between">
                <div>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">Need final audit coordination?</span>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">Full audit workpaper file assembly</span>
                </div>
                <Link href="/services/smsf/audit-coordination">
                  <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                    Audit Coordination
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-purple-700 dark:text-purple-400 font-medium">
              Every wound-up fund requires a completed final independent audit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
