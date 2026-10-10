"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  WarningOutlined,
  StopOutlined,
  ClockCircleOutlined,
  FileExclamationOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ConsequencesOfUnlodgedReturns Component
 * =======================================
 * Section 3: What happens if I leave returns unlodged?
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Explains failure-to-lodge (FTL) penalties, General Interest Charges,
 * default assessments (Section 167), and links to the penalty remission process.
 */
export default function ConsequencesOfUnlodgedReturns() {
  const consequences = [
    {
      icon: <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Failure-to-Lodge (FTL) Penalties",
      desc: "Depending on the circumstances, late lodgment can result in a failure-to-lodge penalty, and interest may arise on amounts owed.",
      detail:
        "The ATO applies FTL penalty units based on the size of the entity and how late the return is, compounding every 28 days up to statutory maximums.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Compounding General Interest Charges (GIC)",
      desc: "Where tax is payable, statutory interest accrues from the original due date of the return, compounding daily until the debt is cleared.",
      detail:
        "From 1 July 2025, GIC is strictly non-deductible, making timely lodgement and resolution much more financially urgent.",
    },
    {
      icon: <FileExclamationOutlined className="text-xl text-red-600 dark:text-red-400" />,
      title: "ATO Default Assessments (Section 167)",
      desc: "The ATO can also issue a default assessment where a lodgment obligation remains outstanding. None of these outcomes should be assumed in every case.",
      detail:
        "The ATO estimates your income using third-party data without allowing legitimate deductions, producing an artificially inflated tax debt.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="red" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            ATO Enforcement & Risks
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens if I leave returns unlodged?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO may issue reminders or take further action for outstanding returns. Depending on the circumstances, late lodgment can result in a failure-to-lodge penalty, and interest may arise on amounts owed. The ATO can also issue a default assessment where a lodgment obligation remains outstanding. None of these outcomes should be assumed in every case.
          </p>
        </div>

        {/* 3 Consequences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {consequences.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-red-400/60 dark:hover:border-red-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium mb-2 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs text-red-600 dark:text-red-400 font-semibold flex items-center gap-1.5">
                <StopOutlined /> Avoidable Statutory Cost
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card to Penalty Remission */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              Have You Received a Demand or Imposed Penalty?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              If you have received a notice, bring it to your appointment. We can explain what it says, identify any response date and help address the underlying lodgment obligation. Lodging an overdue return is distinct from seeking remission of an imposed penalty; our ATO penalty remission page explains that separate process.
            </p>
          </div>
          <Link
            href="/services/ato-help/penalty-remission"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Explore Penalty Remission <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
