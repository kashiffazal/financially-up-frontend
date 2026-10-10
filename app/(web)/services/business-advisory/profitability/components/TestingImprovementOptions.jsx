"use client";

import React from "react";
import { Tag } from "antd";
import {
  ExperimentOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TestingImprovementOptions Component
 * =====================================
 * Section 5: How should improvement options be tested?
 * Source: 12th Pillar Business Advisory.docx (Lines 422-424)
 *
 * Implements 100% complete, verbatim SEO text explaining constraint testing,
 * pricing vs capacity, avoiding false cost cuts, staffing economics, and post-implementation review cycles.
 */
export default function TestingImprovementOptions() {
  const testingCriteria = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Pricing Analysis",
      desc: "Tested against direct cost, available operational capacity, customer price elasticity, and portfolio product mix.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Cost Reductions",
      desc: "Distinguishing true avoidable spending from critical resources required to preserve brand quality, delivery speed, or sales.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Staffing Decisions",
      desc: "Evaluating productive capacity thresholds alongside base wages, superannuation, on-costs, and ramp-up onboarding time.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Scientific Scenario Validation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Should Improvement Options Be Tested?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An option should be tested against the constraint it is intended to
            address. Pricing analysis may consider direct cost, available
            capacity, customer response and product mix. A cost change should
            distinguish avoidable spending from resources needed to maintain
            quality, delivery or sales. A staffing decision should consider
            productive capacity as well as wages, payroll on-costs and the time
            required to reach expected output.
          </p>
        </div>

        {/* 3 Pillar Testing Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testingCriteria.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Monitoring Framework Narrative Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <div className="flex items-start gap-4">
            <CalendarOutlined className="text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Documenting Assumptions &amp; Tracking Actual Outcomes
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
                The business also needs a review period and a small set of
                measures for checking the result. Financially Up can help document
                the assumption, expected financial effect and evidence to
                monitor, so management can compare the actual outcome with the
                model and adjust the next decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
