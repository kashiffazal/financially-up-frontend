"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  AlertOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * DoesChangingTrusteeTriggerTax Component
 * =======================================
 * Section: Does changing trustee trigger tax?
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Explains statutory CGT relief for mere trustee changes, exceptions when beneficial
 * interests or assets alter, and state stamp duty / land title rules.
 */
export default function DoesChangingTrusteeTriggerTax() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax & CGT Treatment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Does changing trustee trigger tax?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A change of trustee does not, by itself, necessarily create a new trust or trigger CGT. Under the CGT rules,
            a change in legal ownership is not treated as a disposal where it occurs merely because of a change of
            trustee. The result can differ if beneficial interests, trust terms, assets or other restructuring steps
            also change, so the legal documents and the full transaction should be reviewed.
          </p>
        </div>

        {/* 2 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Statutory CGT Exemption */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center mb-5">
                <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                No Disposal Under CGT Rules
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Under Australian tax law, changing legal ownership purely to vest trust assets in an incoming trustee is
                not treated as a capital gains tax disposal event. The continuing trust retains its existing asset cost
                bases and acquisition dates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700 text-xs font-semibold text-teal-600 dark:text-teal-400">
              Preservation of Cost Base & Integrity
            </div>
          </div>

          {/* Card 2: Duty & Beneficial Interest Traps */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center mb-5">
                <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                State Duty & Beneficial Changes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If the change is accompanied by amendments to beneficial interests, asset transfers outside the
                continuing trust, changes in control or other restructuring steps, the tax analysis can be different.
                State or territory duty and land-title requirements may also apply to property held by the trust.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700 text-xs font-semibold text-amber-700 dark:text-amber-400">
              Never Rely on the Label &quot;Change of Trustee&quot; Alone
            </div>
          </div>
        </div>

        {/* Verbatim Summary Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircleOutlined className="text-lg text-teal-600 dark:text-teal-400" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            These are reasons to review the transaction before executing the change rather than relying on the label
            &quot;change of trustee&quot; alone.
          </p>
        </div>
      </div>
    </section>
  );
}
