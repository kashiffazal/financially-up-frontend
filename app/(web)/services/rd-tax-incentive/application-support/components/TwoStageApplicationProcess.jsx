"use client";

import React from "react";
import { Tag } from "antd";
import {
  DesktopOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TwoStageApplicationProcess Component
 * ====================================
 * Section: How Does the R&D Tax Incentive Application Process Work?
 * Verbatim text from Page 5 of 15th Pillar R&D Tax Incentive docx.
 */
export default function TwoStageApplicationProcess() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Dual Agency Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Does the R&amp;D Tax Incentive Application Process Work?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The Department of Industry, Science and Resources and the Australian Taxation Office (ATO)
            jointly administer the incentive. The Department manages activity registration; the ATO
            administers entity, expenditure and tax-offset matters. The process has two connected stages.
          </p>
        </div>

        {/* 2 Stages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Stage 1: Department Registration */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center border border-emerald-100 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400">
                  <DesktopOutlined className="text-2xl" />
                </div>
                <Tag color="green" className="m-0 text-xs font-semibold uppercase px-2.5 py-0.5">
                  Stage 1
                </Tag>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Register the R&amp;D activities
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The company applies to register its R&amp;D activities with the Department through the
                R&amp;D Tax Incentive customer portal. Registration relates to the R&amp;D entity,
                relevant income year and activities described in that application.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                For a standard application, the statutory deadline is 10 months after the end of the
                company’s income year in which the activities took place. For a company with a 30 June
                year end, this is ordinarily the following 30 April. Extension rules are limited and
                involve a separate request, so the statutory deadline should be treated as the planning date.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <ClockCircleOutlined className="text-amber-500" />
              <span>Strict 10-month post-income-year cut-off</span>
            </div>
          </div>

          {/* Stage 2: ATO Claim */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center border border-blue-100 dark:border-blue-800/40 text-blue-600 dark:text-blue-400">
                  <DollarOutlined className="text-2xl" />
                </div>
                <Tag color="blue" className="m-0 text-xs font-semibold uppercase px-2.5 py-0.5">
                  Stage 2
                </Tag>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Claim the R&amp;D tax offset through the ATO
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                After registration, the Department issues a registration number. The company needs
                that number when completing the R&amp;D Tax Incentive schedule associated with its
                annual company tax return. Registration should therefore be completed before the tax claim
                is lodged.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Registration does not mean the government has confirmed that every activity or expense is
                eligible. The program remains self-assessed, the registration may be examined, and the
                company is responsible for satisfying the legislation and keeping evidence that supports the
                activities and expenditure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <SafetyCertificateOutlined className="text-emerald-500" />
              <span>Requires valid AusIndustry registration number</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
