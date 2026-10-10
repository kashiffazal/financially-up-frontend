"use client";

import React from "react";
import { Tag } from "antd";
import {
  BarChartOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * BudgetVsActualVarianceAnalysis Component
 * ========================================
 * Section 4: Budget versus actual and variance analysis
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function BudgetVsActualVarianceAnalysis() {
  const rootCauseQuestions = [
    {
      category: "Revenue Variances",
      questions: [
        "Was revenue lower because of lower volume?",
        "Did delays in delivery create a timing lag?",
        "Were discounts offered, affecting realised pricing?",
      ],
      tag: "Top-Line Drivers",
      color: "blue",
    },
    {
      category: "Cost & Margin Movements",
      questions: [
        "Did direct costs rise due to expansion and headcount growth?",
        "Has supplier price inflation eroded gross margins?",
        "Were variances driven by operational inefficiency or a one-off item?",
      ],
      tag: "Expenditure Drivers",
      color: "purple",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Variance Anatomy
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Budget versus actual and variance analysis
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              A budget creates a financial expectation for a period. Comparing actual results with budget helps identify where the business performed differently from plan. The useful part is not the variance itself but the explanation: was revenue lower because of volume, timing or pricing? Did costs rise because of growth, inflation, inefficiency or a one-off item?
            </p>
            <p>
              Financially Up can help structure budget-versus-actual reporting so material movements are visible and management can focus on the reasons behind them. Where no useful budget exists, a forecast or baseline may need to be developed before variance reporting becomes meaningful.
            </p>
          </div>
        </div>

        {/* Root Cause Analysis Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rootCauseQuestions.map((box, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <Tag color={box.color} className="font-semibold text-xs m-0">
                  {box.tag}
                </Tag>
                <SlidersOutlined className="text-slate-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {box.category}
              </h3>
              <ul className="space-y-3">
                {box.questions.map((q, qIdx) => (
                  <li key={qIdx} className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 flex items-start gap-2.5">
                    <QuestionCircleOutlined className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 text-sm" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
