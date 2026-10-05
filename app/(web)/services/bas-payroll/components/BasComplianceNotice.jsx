"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  BranchesOutlined,
  FieldTimeOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * BasComplianceNotice Component
 * ==============================
 * Section 4: Distinct Scope & Statutory Compliance.
 * Clarifies how GST registration, BAS reporting, and payroll processing interconnect,
 * while maintaining distinct scopes and adhering to ATO 5-Year record keeping.
 * Background: Clean White.
 */
export default function BasComplianceNotice() {
  const scopeItems = [
    {
      icon: <BranchesOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "GST Registration Status",
      description:
        "Compulsory when annual turnover meets or is projected to exceed $75,000. Determines your legal obligation to charge GST and claim input tax credits.",
      tag: "Entity Threshold",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Activity Statement Lodgement",
      description:
        "The periodic compliance reporting mechanism where GST, PAYG withholding, and PAYG instalments are officially calculated and submitted to the ATO.",
      tag: "Reporting Cycle",
    },
    {
      icon: <FieldTimeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "5-Year Record Keeping Rule",
      description:
        "ATO law requires businesses to keep records substantiating all activity statement labels for at least 5 years. Records must never be discarded after lodgement.",
      tag: "Statutory Law",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Compliance Scope
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GST, BAS & Payroll Are Related — But Distinct Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            GST registration establishes whether you must collect tax, BAS preparation is the reporting mechanism, and payroll manages wage distributions and tax withholding. Financially Up ensures each service is clearly scoped and properly integrated.
          </p>
        </div>

        {/* 3 Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {scopeItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="ATO Registered Agent Reassurance"
          tagIcon="safety"
          title="Lodgement Extensions & Pre-Lodgement Reviews"
          description="As registered tax agents, Financially Up clients often receive extended ATO lodgement and payment deadlines for quarterly activity statements. We review your books, ensure tax invoices comply with the ATO 5-Year Rule, and lodge accurately on your behalf."
          primaryButtonText="Book an Appointment"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
