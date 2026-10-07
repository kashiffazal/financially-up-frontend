"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TaxComplianceProcessWorkflow Component
 * =======================================
 * Section: How Our Business Tax Compliance Process Works
 * Features 100% complete, verbatim content from Page 8 of client docx.
 * 7 Sequential workflow steps with catch-up vs ongoing flexibility.
 */
export default function TaxComplianceProcessWorkflow() {
  const processSteps = [
    {
      step: "01",
      title: "Confirm Entity, Registrations & Work Required",
      detail: "Confirm the entity, registrations and compliance work required.",
    },
    {
      step: "02",
      title: "Identify Periods & Lodgments",
      detail: "Identify the periods, returns or statements to be prepared.",
    },
    {
      step: "03",
      title: "Request Accounting Records & Documents",
      detail: "Request the accounting records and supporting documents relevant to each obligation.",
    },
    {
      step: "04",
      title: "Review & Reconcile Information",
      detail: "Review and reconcile the information needed for preparation.",
    },
    {
      step: "05",
      title: "Raise Queries on Incomplete Figures",
      detail: "Raise queries where figures are incomplete, unusual or require clarification.",
    },
    {
      step: "06",
      title: "Prepare Agreed Returns for Lodgment",
      detail: "Prepare the agreed returns or statements for review and lodgment.",
    },
    {
      step: "07",
      title: "Explain Results & Post-Lodgment Notices",
      detail:
        "Explain the resulting balances and routine notices, and identify whether any payment arrangement, amendment, objection, dispute or specialist advice needs a separate scope.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Systematic Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Our Business Tax Compliance Process Works
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structured seven-step framework designed to maintain accuracy, verify supporting records, and provide clear communication from start to lodgment.
          </p>
        </div>

        {/* 7-Step Workflow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Step 7 Full-Width Highlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm mb-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <span className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-base shrink-0">
            {processSteps[6].step}
          </span>
          <div className="space-y-1 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {processSteps[6].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              {processSteps[6].detail}
            </p>
          </div>
        </div>

        {/* Catch-Up vs Ongoing Engagements Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Flexible for One-Off Catch-Ups or Ongoing Engagements
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The process can be adjusted for a one-off catch-up engagement or ongoing business tax compliance services.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Start Compliance Process
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
