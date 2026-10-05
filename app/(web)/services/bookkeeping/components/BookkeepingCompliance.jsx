"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  FieldTimeOutlined,
  AuditOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * BookkeepingCompliance Component
 * ================================
 * Section 4: Small Business Bookkeeping That Supports Compliance.
 * Emphasizes ATO record-keeping substantiation, the 5-Year statutory retention rule,
 * and the clear boundary between bookkeeping records and BAS lodgement.
 * Background: Clean White.
 */
export default function BookkeepingCompliance() {
  const compliancePoints = [
    {
      icon: <FieldTimeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "ATO 5-Year Record Keeping Rule",
      description:
        "The Australian Taxation Office generally requires businesses to retain records explaining transactions and supporting tax returns for a minimum of 5 years from when they are prepared or transactions finalised.",
      tag: "Statutory Law",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "GST & BAS Audit Substantiation",
      description:
        "For GST-registered entities, your accounting file must contain valid tax invoices supporting every dollar of GST credits claimed across quarterly activity statements.",
      tag: "Invoice Evidence",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Bookkeeping vs BAS Lodgement",
      description:
        "Accurate bookkeeping prepares and reconciles the raw transactional data. Determining complex GST treatments and formal lodgement are handled under separately scoped compliance work.",
      tag: "Scope Boundary",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <FileProtectOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Regulatory Substantiation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Small Business Bookkeeping That Supports Compliance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            For Australian small businesses, bookkeeping provides the essential underlying records used for every tax and reporting obligation. Good records protect your business, streamline accountant reviews, and prevent costly ATO penalties.
          </p>
        </div>

        {/* 3 Compliance Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {compliancePoints.map((item, idx) => (
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
          tag="ATO Compliance Reassurance"
          tagIcon="safety"
          title="Coordinated Bookkeeping, BAS & Year-End Tax"
          description="Accurate bookkeeping makes the BAS and tax process fast and friction-free. Financially Up provides seamless coordination between our day-to-day bookkeeping services and our registered tax agents for quarterly BAS lodgement and annual company or trust returns."
          primaryButtonText="Discuss Your Bookkeeping Needs"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
