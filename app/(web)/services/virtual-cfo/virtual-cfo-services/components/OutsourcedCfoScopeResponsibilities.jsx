"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  StopOutlined,
  ClusterOutlined,
} from "@ant-design/icons";

/**
 * OutsourcedCfoScopeResponsibilities Component
 * ============================================
 * Section 6: What Financially Up can help with & Responsibilities and engagement scope
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function OutsourcedCfoScopeResponsibilities() {
  const practicalScopeItems = [
    "Agreeing reporting deadlines and month-end timelines",
    "Identifying key financial and operational measures",
    "Preparing or reviewing forecasts and rolling cash models",
    "Improving report consistency across platforms",
    "Holding regular finance review meetings with owners or management",
  ];

  const boundariesList = [
    "Outsourcing the finance function does not transfer management or director responsibilities",
    "Commercial decisions and operational approval remain with business leadership",
    "Audit and assurance services are separate and require distinct statutory scoping",
    "Legal advice, lending decisions and credit approval are outside standard CFO retainers",
    "Regulated financial product advice is separate unless provided by an appropriately licensed professional",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: What Financially Up can help with */}
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Financially Up Advisory Scope
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                What Financially Up can help with
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                Financially Up can help design a practical outsourced finance function around the information the business actually uses. That may include agreeing reporting deadlines, identifying key measures, preparing or reviewing forecasts, improving report consistency and holding regular finance review meetings with owners or management.
              </p>
              <ul className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                {practicalScopeItems.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Responsibilities and engagement scope */}
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Professional Governance
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Responsibilities and engagement scope
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                The engagement should identify who maintains the records, approves assumptions, prepares reports and makes commercial decisions. Outsourcing the finance function does not transfer management or director responsibilities. Audit, assurance, legal advice, lending decisions and regulated financial product advice are separate unless provided by an appropriately qualified professional under a separate scope.
              </p>
              <ul className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                {boundariesList.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 flex items-start gap-2.5">
                    <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400 mt-1 shrink-0 text-sm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
