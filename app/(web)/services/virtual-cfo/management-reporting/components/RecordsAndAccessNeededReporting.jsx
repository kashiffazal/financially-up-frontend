"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  FolderOpenOutlined,
  FileSyncOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * RecordsAndAccessNeededReporting Component
 * =========================================
 * Section 7: What Financially Up can help with & Records and access needed
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function RecordsAndAccessNeededReporting() {
  const scopeAssistance = [
    "Review your current reporting process and identify data bottlenecks",
    "Identify useful reports and commercial KPIs tailored to your model",
    "Establish a consistent monthly format and executive pack template",
    "Prepare recurring monthly management reports with variance notes",
    "Connect reporting with bookkeeping, budgets, forecasts and broader virtual CFO support where needed",
  ];

  const requiredRecords = [
    { title: "accounting software access and current reconciliations", desc: "Inviting advisors to Xero/MYOB with bank and ledger feeds current." },
    { title: "existing management, board or lender reports", desc: "Historical templates and reports currently presented to stakeholders." },
    { title: "budget or forecast information", desc: "Approved financial models, target sheets, or working forecasts." },
    { title: "details of the KPIs management currently uses", desc: "Operational and financial scorecards already monitored internally." },
    { title: "relevant operational data that does not sit in the accounting system", desc: "CRM pipeline values, billable hours, project milestones, or inventory counts." },
    { title: "information about major one-off transactions or unusual movements", desc: "Asset purchases, settlements, severance payments, or abnormal costs." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What Financially Up can help with */}
          <div className="lg:col-span-5">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Advisory Implementation
            </Tag>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              What Financially Up can help with
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              Financially Up can review your current reporting process, identify useful reports and KPIs, establish a monthly format and prepare recurring management reports. We can also connect reporting with bookkeeping, budgets, forecasts and broader virtual CFO support where needed.
            </p>
            <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 space-y-3">
              {scopeAssistance.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Records and access needed */}
          <div className="lg:col-span-7">
            <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Setup Requirements
            </Tag>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Records and access needed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              To configure accurate monthly reporting, having the following accounts and data ready will streamline onboarding:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requiredRecords.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400">
                        Item 0{idx + 1}
                      </span>
                      <FileDoneOutlined className="text-slate-400 dark:text-zinc-500 text-sm" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white capitalize mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 m-0 leading-relaxed">
                      {item.desc}
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
