"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * WhenUseBasServices Component
 * Covers 'When might you use BAS preparation services?' and 'What does a BAS commonly report?'
 * from Page 2 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhenUseBasServices() {
  const triggers = [
    {
      title: "Increasing Transaction Volumes",
      description: "When business sales and purchase volume grow beyond manageable DIY bookkeeping capacity.",
    },
    {
      title: "New GST Registrations",
      description: "When crossing the compulsory $75,000 threshold and requiring structured quarterly or monthly GST accounting.",
    },
    {
      title: "Payroll & Employer Obligations",
      description: "When hiring team members and managing PAYG withholding reporting alongside Single Touch Payroll.",
    },
    {
      title: "Professional Pre-Lodgement Review",
      description: "When owners want qualified accountants to verify GST codes and figures before submitting to the ATO.",
    },
    {
      title: "Multiple Overdue Periods",
      description: "When backlogged or unlodged activity statements need sequential reconciliation and catch-up lodgement.",
    },
    {
      title: "Bookkeeping File Adjustments",
      description: "When accounting files contain ledger imbalances or coding errors that must be resolved prior to reporting.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: When might you use BAS preparation services? */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tag color="blue" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <RiseOutlined className="mr-1.5" />
            Triggers &amp; Readiness
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            When might you use BAS preparation services?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Businesses often seek BAS preparation services when transaction volumes increase, when they register for GST, when payroll creates additional reporting obligations, or when owners want an accountant to review the figures before lodgement. Support can also be useful when several periods are outstanding or when the bookkeeping needs correction before an activity statement can be completed.
          </p>
        </div>

        {/* 6 Trigger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {triggers.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: What does a BAS commonly report? */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <AuditOutlined />
              Obligations Breakdown
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              What does a BAS commonly report?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The exact labels vary. For a GST-registered business, a BAS commonly includes sales and GST amounts. Depending on the business&apos;s registrations and circumstances, an activity statement may also include PAYG withholding, PAYG instalments and other tax obligations.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The reporting frequency may be monthly, quarterly or annual. Rather than relying on a generic calendar, businesses should check the activity statement issued by the ATO or their ATO account for the actual due date that applies.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 space-y-3 text-sm text-slate-600 dark:text-zinc-300">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarOutlined className="text-brand-primary" />
              Reporting Frequencies
            </div>
            <ul className="space-y-2 text-xs">
              <li>• <strong>Quarterly:</strong> Most standard small businesses</li>
              <li>• <strong>Monthly:</strong> Medium-to-large entities or monthly PAYG</li>
              <li>• <strong>Annually:</strong> Eligible voluntary GST registrants</li>
            </ul>
            <div className="pt-2 text-xs text-slate-500 dark:text-zinc-400 italic">
              Always verify your unique lodgement due dates with your registered tax agent.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
