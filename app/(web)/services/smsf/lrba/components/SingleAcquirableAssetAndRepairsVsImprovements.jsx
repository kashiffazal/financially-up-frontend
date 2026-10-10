"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  ToolOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

/**
 * SingleAcquirableAssetAndRepairsVsImprovements Component
 * ======================================================
 * Implements verbatim SEO content from Page 5 of 9th Pillar SMSF.docx:
 * - Single acquirable asset, repairs and improvements (Section 67A SISA)
 * - Borrowed money cannot improve the asset; repairs vs capital improvements
 */
export default function SingleAcquirableAssetAndRepairsVsImprovements() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Section 67A SIS Act Provisions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Single acquirable asset, repairs and improvements
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For arrangements governed by section 67A of the Superannuation Industry (Supervision) Act 1993, borrowed money may be applied to acquire a permitted single acquirable asset or a permitted collection of identical assets. It may also fund certain acquisition expenses and the maintenance or repair of the asset. Borrowed money cannot be used to improve the asset.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The distinction between repair, maintenance and improvement is fact-dependent. Major renovations, redevelopment, subdivision, replacement of the asset or changes to property use can raise issues beyond bookkeeping. Trustees should obtain appropriate advice before committing borrowed funds or changing the asset.
          </p>
        </div>

        {/* 2 Cards: What Borrowed Funds CAN vs CANNOT Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Permitted Use of Borrowed Funds */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <ToolOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Permitted Applications of Borrowed Money
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Under S67A SISA, borrowed proceeds may strictly be applied towards:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Acquisition of a single acquirable asset under a single legal title</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Certain upfront acquisition expenses (conveyancing, stamp duty, loan setup fees)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                  <span>Routine repair and maintenance to restore the asset to its original operating state</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              Must restore, not fundamentally alter or enhance, the acquirable asset.
            </div>
          </div>

          {/* Card 2: Prohibited Improvements & Redefinitions */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/40 flex items-center justify-center mb-6">
                <StopOutlined className="text-2xl text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Prohibited Uses & Capital Improvements
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Borrowed money cannot be used to improve the asset. Activities raising immediate compliance risks include:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <StopOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>Subdivision of real estate resulting in multiple separate titles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <StopOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>Substantial redevelopment or construction creating a different asset</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <StopOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>Funding renovations or improvements with borrowed loan proceeds</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-rose-600 dark:text-rose-400 font-medium">
              Alterations transforming the asset violate single acquirable asset rules.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
