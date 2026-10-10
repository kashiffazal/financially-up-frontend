"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  BankOutlined,
  SwapOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * SmsfRegistrationAndBankingSetup Component
 * =========================================
 * Implements verbatim SEO content from Page 3 of 9th Pillar SMSF.docx:
 * - Register the SMSF for an ABN and TFN (60-day ATO window & ESA)
 * - Open a separate SMSF bank account
 * - Rollovers and contributions should follow establishment (preservation & legal access)
 */
export default function SmsfRegistrationAndBankingSetup() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Registrations & Accounts
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Register the SMSF for an ABN and TFN
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Once the SMSF is legally established and the trustees have been appointed, the ATO states that the fund has 60 days to register by applying for an Australian business number. The registration process also covers the fund&apos;s tax file number and its election to be regulated as an SMSF.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Registration details need to be accurate because they are used by the ATO and by other super funds when processing rollovers. The fund may also need an electronic service address for Super Stream-related data messages. Delays or inconsistent trustee information can hold up registration and later rollovers.
          </p>
        </div>

        {/* 2 Critical Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Separate SMSF Bank Account */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <BankOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Open a separate SMSF bank account
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                The fund needs a dedicated bank account, clearly identified as the SMSF account, for contributions, rollovers, investment earnings and fund expenses. It must remain separate from the personal or business assets of trustees and directors. Member entitlements are tracked through the accounting records rather than through separate bank accounts for each member.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Strict legal separation between fund monies and personal/business cash</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Dedicated transaction tracking for member contributions and rollovers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Sub-accounts for members maintained internally in ledger accounting</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Must be opened under the formal name of the trustees for the fund.
            </div>
          </div>

          {/* Card 2: Rollovers and Contributions Follow Establishment */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <SwapOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Rollovers and contributions should follow establishment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Rollovers should be approached after the fund is properly established and registered and its banking and electronic messaging details are ready. The receiving fund&apos;s details must be capable of being verified through the superannuation system.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A rollover does not give unrestricted access to super. SMSF money remains subject to preservation and condition-of-release rules, and illegal early access can have serious consequences.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400 font-medium">
              <ClockCircleOutlined />
              <span>SuperStream ESA validation required before initiating transfers</span>
            </div>
          </div>
        </div>

        {/* Warning Callout: Preservation Rules */}
        <div className="p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 flex items-start sm:items-center gap-4">
          <AlertOutlined className="text-2xl text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed m-0 font-medium">
            <span className="font-bold">Important Superannuation Safeguard:</span> Rollover money cannot be accessed for personal use, private loans, or living expenses. Withdrawing super without meeting a formal condition of release is illegal and attracts severe regulatory penalties, personal disqualification, and adverse tax rates.
          </p>
        </div>
      </div>
    </section>
  );
}
