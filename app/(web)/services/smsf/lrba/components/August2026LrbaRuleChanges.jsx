"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  StopOutlined,
  ShopOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * August2026LrbaRuleChanges Component
 * ====================================
 * Implements verbatim SEO content from Page 5 of 9th Pillar SMSF.docx:
 * - What changed for real-property LRBAs from 10 August 2026?
 * - Business real property requirement & grandfathering/transitional treatment.
 */
export default function August2026LrbaRuleChanges() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Legislative Update
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What changed for real-property LRBAs from 10 August 2026?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For an LRBA entered into on or after 10 August 2026 to acquire real property, the property generally must be business real property when the LRBA is entered into and must remain business real property for the life of the arrangement. This restriction applies whether the lender is a bank, non-bank lender or related party.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Business real property generally means land and buildings used wholly and exclusively in one or more businesses, subject to the statutory definition. Other residential property may still be acquired by an SMSF if the investment rules are met, but it cannot be financed under a new LRBA caught by the change.
          </p>
        </div>

        {/* 2-Column Rules Breakdown: New Rules vs Grandfathering */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: New Borrowings from 10 August 2026 */}
          <div className="bg-rose-50/40 dark:bg-rose-950/20 rounded-3xl p-7 sm:p-8 border border-rose-200/80 dark:border-rose-900/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 flex items-center justify-center mb-6">
                <StopOutlined className="text-2xl text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Post-10 August 2026: Business Real Property Only
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                New real property borrowing arrangements entered into on or after 10 August 2026 face strict statutory boundaries:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-600 text-sm mt-0.5 shrink-0" />
                  <span>The acquired property must be business real property at inception and remain so throughout the loan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-600 text-sm mt-0.5 shrink-0" />
                  <span>Applies equally to institutional banks, third-party lenders, and private related-party loans</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-600 text-sm mt-0.5 shrink-0" />
                  <span>Residential property can still be acquired by an SMSF outright, but not financed under a new LRBA</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200/80 dark:border-rose-900/40 text-xs text-rose-700 dark:text-rose-300 font-medium">
              Requires careful statutory classification prior to contract exchange.
            </div>
          </div>

          {/* Card 2: Grandfathering & Transitional Treatment */}
          <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-3xl p-7 sm:p-8 border border-emerald-200/80 dark:border-emerald-900/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mb-6">
                <CalendarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Pre-Existing Arrangements & Refinancing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                The change does not apply in the same way to an LRBA entered into before 10 August 2026, refinancing of that arrangement, or a binding acquisition contract exchanged before that date. Later variations still need review.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 text-sm mt-0.5 shrink-0" />
                  <span>Existing residential property LRBAs entered into prior to 10 August 2026 remain permitted</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 text-sm mt-0.5 shrink-0" />
                  <span>Refinancing of an eligible pre-10 August 2026 arrangement can continue under transitional protections</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 text-sm mt-0.5 shrink-0" />
                  <span>Binding contracts exchanged before the cutoff date are protected under transitional rules</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/80 dark:border-emerald-900/40 text-xs text-emerald-700 dark:text-emerald-300 font-medium">
              Timing and execution dates must be verified against original loan agreements.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
