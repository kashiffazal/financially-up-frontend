"use client";

import React from "react";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  AuditOutlined,
  ToolOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelps Component
 * ===============================
 * Section 6: How Financially Up Can Help.
 * Outlines the 6 practical steps of our BAS and activity-statement process.
 * Background: Clean White.
 */
export default function HowFinanciallyUpHelps() {
  const steps = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Review Bookkeeping & GST Coding",
      description:
        "Examining transaction classifications and tax codes in your accounting software to ensure GST is treated correctly across sales and expenses.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Prepare BAS Figures from Records",
      description:
        "Calculating total sales (G1), export sales, GST on sales (1A), and GST credits on capital and operating expenses (1B).",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Verify PAYG & Special Labels",
      description:
        "Reconciling gross wages (W1), PAYG withholding (W2), and income tax instalment rates (5A) to ensure integrated labels match payroll.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Identify & Clarify Discrepancies",
      description:
        "Flagging missing tax invoices, ambiguous expense descriptions, or unreconciled balances before anything is sent to the tax office.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Lodge BAS & Handle ATO Liaison",
      description:
        "Electronically lodging your approved activity statement with the ATO and assisting with correspondence or payment arrangement plans.",
    },
    {
      icon: <ToolOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Coordinate Complete Compliance",
      description:
        "Seamlessly connecting BAS reporting with your day-to-day bookkeeping, Single Touch Payroll, and annual company or trust tax returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ToolOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Proven Process
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Our registered tax agent team takes the friction out of activity statements. We check the underlying records, address discrepancies early, and ensure every label lodged with the ATO is fully substantiated.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
