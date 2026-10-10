"use client";

import React from "react";
import { Tag } from "antd";
import {
  ExperimentOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * ForecastingAndScenarioAnalysis Component
 * ========================================
 * Section 4: Forecasting and scenario analysis
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function ForecastingAndScenarioAnalysis() {
  const decisionExamples = [
    { title: "Hiring Additional Staff", desc: "Evaluating payroll expansion against project revenue timelines." },
    { title: "Changing Pricing Models", desc: "Assessing volume sensitivity and gross profit impact." },
    { title: "Opening Another Location", desc: "Modelling lease obligations, fit-out capex, and breakeven horizons." },
    { title: "Investing in Equipment", desc: "Comparing cash purchases with asset finance and depreciation." },
    { title: "Slower Trading Periods", desc: "Establishing seasonal cash buffers and contingency plans." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Forward Modelling
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Forecasting and scenario analysis
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                An external CFO can help management test the financial effect of proposed decisions before the business commits. Examples may include hiring additional staff, changing pricing, opening another location, investing in equipment or preparing for a slower trading period. The model should make assumptions visible so management can see what is driving the result.
              </p>
              <p>
                Forecasting is not a prediction guarantee. It is a structured way to test assumptions, identify funding or cash timing issues and compare alternative scenarios. Where a decision involves lending, investment products or legal arrangements, the relevant lender, authorised financial adviser or legal adviser may also need to be involved.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Decision Testing Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <ExperimentOutlined className="text-base text-purple-600 dark:text-purple-400" />
                Strategic Decisions We Model
              </h3>
              <div className="space-y-3">
                {decisionExamples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-700/50 flex items-start gap-3"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white m-0">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40 text-xs text-purple-900 dark:text-purple-300 leading-relaxed flex items-start gap-2.5">
              <InfoCircleOutlined className="text-sm shrink-0 mt-0.5" />
              <span>
                Transparent models allow directors to isolate variables, stress-test working capital, and validate debt-serviceability before signing contracts.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
