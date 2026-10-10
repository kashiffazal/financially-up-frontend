"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * HowWeBuildAndUseModels Component
 * ================================
 * Section 4: How Financially Up builds and uses the model
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function HowWeBuildAndUseModels() {
  const steps = [
    { title: "Clarify Purpose & Intended Users", desc: "Identify whether the forecast is for internal management, a board meeting, or a debt finance submission." },
    { title: "Review Available Data & Historicals", desc: "Examine past financial statements, current management packs, and confirmed sales contracts." },
    { title: "Agree Assumptions That Need Testing", desc: "Define pricing, gross margins, payroll hires, working capital turns, and growth hurdles." },
    { title: "Build the Agreed Financial Model", desc: "Construct transparent, formula-driven spreadsheets with traceable inputs and separated outputs." },
    { title: "Walk Through Calculations & Stress-Test", desc: "Review the math, explain key sensitivities, and discuss what outputs imply for your decision." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Advisory Process
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up builds and uses the model
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                As your financial modelling consultant, we clarify the purpose and intended users, review available data and agree the assumptions that need testing. We build the agreed model, walk through its calculations and discuss what the output means for the decision. If information is incomplete, we identify that limitation and decide whether to refine the input before relying on the forecast.
              </p>
              <p>
                The model may be used internally to weigh options or support a discussion with a lender or investor. External users may request a particular format, supporting evidence or independent work beyond the initial scope. We agree any additional requirements before describing a model as suitable for a third party; funding decisions remain with the lender or investor.
              </p>
            </div>

            {/* Verbatim Cross-Linking Links */}
            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              <p className="m-0">
                When you want to compare alternative outcomes, our{" "}
                <Link href="/services/virtual-cfo/scenario-planning" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  financial scenario planning
                </Link>{" "}
                focuses on the choice between assumptions and responses. Our{" "}
                <Link href="/services/virtual-cfo/board-reporting" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  board reporting service
                </Link>{" "}
                can present key results to directors. If your immediate question is whether an expansion is operationally and financially sensible,{" "}
                <Link href="/services/business-advisory" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  business growth consulting
                </Link>{" "}
                considers the wider plan.
              </p>
            </div>
          </div>

          {/* Right Column: Process Steps Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
                Five-Stage Model Construction Rhythm
              </h3>
              {steps.map((st, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white m-0">
                      {st.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 m-0 mt-0.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
