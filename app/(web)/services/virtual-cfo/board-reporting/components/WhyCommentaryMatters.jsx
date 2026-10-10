"use client";

import React from "react";
import { Tag } from "antd";
import {
  CommentOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * WhyCommentaryMatters Component
 * ==============================
 * Section 2: Why does the commentary matter?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhyCommentaryMatters() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Contextual Analysis
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why does the commentary matter?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Financial statements tell the board what has been recorded. Decision-focused commentary explains significant changes and asks what they mean. If revenue increased but gross margin fell, directors need to know whether pricing, product mix or direct costs changed. If cash fell despite profit, receivables, stock or capital expenditure may help explain why.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Margin Divergence Analysis
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Explaining whether shifts stem from discount pricing, client churn, or raw material cost creep.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Cash vs Profit Reconciliation
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Tracing where accounting earnings were absorbed by inventory builds, receivables, or debt service.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verbatim ASIC Guidance Box */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BankOutlined className="text-xl text-amber-600 dark:text-amber-400" />
                <Tag color="orange" className="font-bold tracking-wider uppercase text-[11px] m-0">
                  ASIC Governance Standards
                </Tag>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                Director Duties & Financial Oversight
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
                ASIC advises directors to stay informed about how the company is operating, review financial and business information regularly and ask questions when information is incomplete, inconsistent or unclear. Directors cannot delegate responsibility for understanding the company’s affairs merely because accountants, bookkeepers or advisers assist them. Good reporting supports that oversight; it does not transfer the directors’ responsibilities to the person preparing the pack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
