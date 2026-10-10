"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyOutlined,
  HomeOutlined,
  TeamOutlined,
  BankOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenScenarioAnalysisHelps Component
 * ===================================
 * Section 2: When can scenario analysis help?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhenScenarioAnalysisHelps() {
  const triggerScenarios = [
    { title: "Hiring Additional Staff", desc: "Assessing payroll break-even and billing ramp-up periods." },
    { title: "Signing a Commercial Lease", desc: "Testing sales volume required to support occupancy costs and fit-out debt." },
    { title: "Investing in Equipment", desc: "Comparing outright cash drain against equipment financing repayments." },
    { title: "Taking on Debt", desc: "Stress-testing interest rate rises and debt servicing coverage ratios." },
    { title: "Launching a New Service", desc: "Modelling startup losses and cash burn prior to sustainable profitability." },
    { title: "Dependence on a Large Customer", desc: "Quantifying downside exposure if a top 20% revenue client cancels or delays payment." },
    { title: "Known Operational Risks", desc: "Expiring supplier contracts, key raw material price inflation, or seasonal cash dips." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Decision Triggers
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When can scenario analysis help?
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              It is useful when deciding whether to hire, sign a lease, invest in equipment, take on debt, launch a service or depend on a large customer. It can also help management prepare for a known risk such as an expiring contract, a supplier price increase or seasonal cash pressure.
            </p>
            <p>
              A business scenario planning consultant can help focus on variables that could materially change the decision. If the business is considering new premises, for instance, the analysis might test sales needed to support the rent, the initial fit-out and the time it may take to reach that level. It should also show the cash required while the site is being established.
            </p>
          </div>
        </div>

        {/* Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 block mb-2">
                  Decision Scenario 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Premises Case Study Highlight */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
            <HomeOutlined className="text-xl" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Case in Point: Evaluating New Commercial Premises
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              Rather than assuming immediate revenue, our model evaluates the break-even volume required to support monthly rent, fit-out capital amortization, initial stock reserves, and the cumulative cash deficit incurred while customer footfall builds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
