"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  FileProtectOutlined,
  SearchOutlined,
} from "@ant-design/icons";

/**
 * HowAtoBenchmarksFit Component
 * ==============================
 * Section 3: How do ATO small business benchmarks fit?
 * Source: 12th Pillar Business Advisory.docx (Lines 464-466)
 *
 * Implements 100% complete, verbatim SEO text explaining ATO small business benchmark ranges,
 * tax compliance risk indicators, commercial explanations for variances, and advisory perspective.
 */
export default function HowAtoBenchmarksFit() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Regulatory Benchmarking Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Do ATO Small Business Benchmarks Fit?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO publishes small business benchmarks for selected industries
            using information reported in tax returns and activity statements.
            These ranges can provide an external comparison where the industry,
            turnover range and ratio definition match the business. They do not
            replace a review of the business model, accounting classifications
            or current operating conditions.
          </p>
        </div>

        {/* Dual Card Layout: ATO Risk Indicators vs Advisory Diagnostic Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Tax Risk Assessment */}
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-200/70 dark:border-amber-900/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <ExclamationCircleOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                  ATO Compliance &amp; Risk Profiling
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Audit triggers &amp; income omission screening
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              The ATO also uses benchmarks with other risk indicators to
              identify businesses that may not be reporting all income. A result
              outside a published range should therefore be checked carefully
              and supported by accurate records and a commercial explanation.
            </p>
          </div>

          {/* Card 2: Advisory Diagnostic Tool */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-200/70 dark:border-emerald-900/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <SearchOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                  Advisory Investigation Prompt
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Diagnostic catalyst, not definitive judgment
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              For advisory purposes, the benchmark remains a prompt for
              investigation rather than a standalone conclusion about
              performance. We look behind the numbers to understand what
              underlying operational and pricing drivers explain the position.
            </p>
          </div>
        </div>

        {/* Registered Tax Agent Rigour Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4">
          <FileProtectOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Registered Tax Agent Verification
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
              As registered tax agents, Financially Up helps business owners
              audit their reporting against ATO industry ratio bands while
              ensuring every variance is underpinned by rigorous commercial
              evidence, reconciliations, and documented operating conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
