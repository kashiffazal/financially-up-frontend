"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

/**
 * IasVsBasDifference Component
 * Covers 'IAS vs BAS: what is the difference?'
 * from Page 7 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function IasVsBasDifference() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <Tag color="purple" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <SwapOutlined className="mr-1.5" />
            Comparison
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            IAS vs BAS: what is the difference?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A BAS is used to report GST and can also include PAYG withholding, PAYG instalments and other obligations. An IAS is generally used when GST is not being reported on that particular statement. The ATO determines the statement type based on the taxpayer’s registrations and reporting cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: IAS Scope */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <FileTextOutlined className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Instalment Activity Statement (IAS)
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 mt-1 shrink-0" />
                <span>Does not generally include GST reporting labels.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 mt-1 shrink-0" />
                <span>Focuses on PAYG instalments and/or PAYG withholding.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 mt-1 shrink-0" />
                <span>Used for non-GST registered entities, investors, or monthly withholding between quarterly BAS cycles.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: BAS Scope */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <AppstoreOutlined className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Business Activity Statement (BAS)
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                <span>Includes comprehensive GST reporting (sales G1 and purchases 1B).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                <span>Combines GST, PAYG withholding, PAYG instalments, and FBT instalments.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                <span>Lodged quarterly or monthly by GST-registered Australian enterprises.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Helpful links banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Need assistance with GST or Business Activity Statements?
            </h4>
            <p className="text-sm text-slate-600 dark:text-zinc-300">
              If your statement includes GST, explore our dedicated services below:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/services/bas-payroll/bas-lodgement"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm font-semibold text-brand-primary dark:text-emerald-400 hover:border-emerald-500 transition-colors shadow-xs"
            >
              BAS Lodgement Service
              <ArrowRightOutlined className="text-xs" />
            </Link>

            <Link
              href="/services/bas-payroll/gst-registration"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:border-teal-500 transition-colors shadow-xs"
            >
              GST Registration
              <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
