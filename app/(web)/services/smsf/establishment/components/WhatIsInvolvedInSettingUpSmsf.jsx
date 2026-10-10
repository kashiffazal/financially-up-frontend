"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  UserOutlined,
  IdcardOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatIsInvolvedInSettingUpSmsf Component
 * =======================================
 * Implements verbatim SEO content from Page 3 of 9th Pillar SMSF.docx:
 * - What is involved in setting up an SMSF?
 * - Choose individual trustees or a corporate trustee
 */
export default function WhatIsInvolvedInSettingUpSmsf() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Establishment Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is involved in setting up an SMSF?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF is a superannuation fund that is managed by its members as trustees, or as directors of a corporate trustee. The members take responsibility for the fund&apos;s decisions and compliance obligations. Establishment therefore involves more than creating a bank account or completing an online registration.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO setup process includes choosing the trustee structure, appointing eligible trustees, establishing the trust and deed, registering the SMSF, opening a unique fund bank account and preparing to receive contributions and rollovers.
          </p>
        </div>

        {/* Sub-Section: Individual vs Corporate Trustee */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Choose individual trustees or a corporate trustee
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            One of the first setup decisions is whether the SMSF will have individual trustees or a company acting as corporate trustee. The choice affects administration, ownership records, succession arrangements, ASIC obligations and establishment costs. It should be considered before the fund is registered and assets are acquired.
          </p>
        </div>

        {/* Comparison Cards: Individual vs Corporate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Individual Trustees Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <UserOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Individual Trustees Structure
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Fund members act personally as trustees of the super fund. Generally suitable for funds seeking lower initial legal setup costs.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>No ASIC company incorporation or annual company review fee</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>All asset titles must explicitly reflect the names of all individual trustees as trustees for the fund</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Changes in membership require administrative updates on all fund bank and asset registries</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Each member must personally sign the ATO trustee declaration.
            </div>
          </div>

          {/* Corporate Trustee Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <BankOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Corporate Trustee (Special Purpose Company)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                A registered Australian proprietary company acts as the trustee, with fund members acting as company directors.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Where a corporate trustee is used, the directors generally correspond with the fund members under the SMSF rules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Single-member SMSF funds can operate smoothly with a sole director/shareholder company</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Simplified succession planning; changes in directors do not alter underlying legal title to assets</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Company establishment and annual ASIC review fee apply.
            </div>
          </div>
        </div>

        {/* Director ID & Legal Boundary Notice */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center shrink-0">
            <IdcardOutlined className="text-xl text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Mandatory Director ID Requirement:</span> Each proposed director must personally apply for a director ID before the fund is registered. Financially Up can explain the accounting and registration implications, but legal advice may be required for company or trust-deed matters outside our scope.
          </div>
        </div>
      </div>
    </section>
  );
}
