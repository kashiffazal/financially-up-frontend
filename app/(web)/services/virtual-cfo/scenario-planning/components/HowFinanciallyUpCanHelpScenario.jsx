"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  ArrowRightOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpCanHelpScenario Component
 * =========================================
 * Section 5: How Financially Up can help
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function HowFinanciallyUpCanHelpScenario() {
  const servicePillars = [
    "Review historical financial data, recent management reports and the proposed commercial decision",
    "Agree on plausible, coherent scenarios worth testing rather than arbitrary spreadsheet variations",
    "Clearly explain the mathematical calculations, sensitivities and cash breakeven points",
    "Document transparent assumptions and acknowledge known model limitations",
    "Revisit and recalibrate scenario forecasts as actual operating results diverge from baseline plans",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Advisory Scoping
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                We review the financial information and the proposed decision, agree the scenarios worth testing, explain the calculations and document key assumptions and limitations. The scope might be a focused what-if financial analysis for one decision or a recurring review when the business faces changing conditions. We can revisit scenarios when actual results diverge from the baseline.
              </p>
            </div>

            {/* Verbatim Cross-Linking Box */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              <p className="m-0">
                Our{" "}
                <Link href="/services/virtual-cfo/financial-modelling" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  financial modelling services
                </Link>{" "}
                address the construction of a model and its linked forecasts.{" "}
                <Link href="/services/virtual-cfo/board-reporting" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  Board reporting
                </Link>{" "}
                can summarize scenario results for directors considering a decision. Where the question is an expansion rather than a specific financial stress test,{" "}
                <Link href="/services/business-advisory" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  business growth advice
                </Link>{" "}
                can examine the broader resources required.
              </p>
            </div>
          </div>

          {/* Right Column: Key Delivery Items */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm space-y-3.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
                What-If Analysis Deliverables
              </h3>
              {servicePillars.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
