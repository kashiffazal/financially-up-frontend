"use client";

import React from "react";
import { Tag } from "antd";
import {
  ToolOutlined,
  BuildOutlined,
  AlertOutlined,
  FileSearchOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

/**
 * RepairsVsCapitalImprovements Component
 * =======================================
 * Section: Repairs, improvements and initial repairs.
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function RepairsVsCapitalImprovements() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            ATO Compliance Focus
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Repairs, Improvements and Initial Repairs
          </h2>
          {/* Verbatim text from official document */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Repairs that address wear and tear arising while a property is used to earn rental income may be immediately deductible. By contrast, replacing an entire asset or structure, making an improvement, or fixing defects that existed when the property was acquired can be capital in nature.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Immediately Deductible Repairs */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Immediate Deduction
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
              <ToolOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Ongoing Repairs &amp; Maintenance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
              Work that directly restores an existing asset or structure to its original condition without improving beyond its previous state.
            </p>
            <ul className="space-y-3">
              {[
                "Fixing broken window panes or leaking roof tiles damaged during tenancy",
                "Servicing an existing air conditioner or unblocking plumbing",
                "Repainting walls damaged by tenant wear and tear during occupancy",
                "Repairing existing timber fence boards or broken door handles",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  <CheckOutlined className="text-emerald-500 mt-1 shrink-0 font-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Capital Expenditure & Improvements */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-amber-300 dark:border-amber-800/60 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Capital Treatment
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800/40 flex items-center justify-center mb-6">
              <BuildOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Improvements &amp; Initial Repairs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
              Work that enhances efficiency, replaces an entire unit of property, or remedies defects present prior to acquisition.
            </p>
            <ul className="space-y-3">
              {[
                "Remedying damage, rot, or defects present when the property was purchased (Initial Repair)",
                "Full kitchen or bathroom strip-outs and modernizations (Capital Improvement)",
                "Replacing an entire roof or installing brand new structural additions",
                "Installing new appliances (Division 40 Plant & Equipment depreciation)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  <CloseOutlined className="text-amber-500 mt-1 shrink-0 font-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verbatim Paragraph 2 Banner */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <AlertOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Common ATO Audit Focus
            </span>
            {/* Verbatim copy from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              This distinction is one of the most common areas of error in investment property tax deductions. Renovation work often contains multiple components, so invoices and scope-of-work documents can be important when determining how the expenditure should be treated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
