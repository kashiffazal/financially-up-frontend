"use client";

import React from "react";
import { Tag } from "antd";
import {
  WarningOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * CommonGstRegistrationIssues Component
 * Covers 'Common GST registration issues'
 * from Page 3 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function CommonGstRegistrationIssues() {
  const issues = [
    {
      title: "Registering late after the threshold has been met",
      detail: "Missing the 21-day statutory notice period, risking backdated assessments and potential ATO failure-to-notify penalties.",
    },
    {
      title: "Charging GST before registration is in place or without understanding the rules",
      detail: "Illegally collecting GST from customers prior to effective registration or failing to remit collected amounts.",
    },
    {
      title: "Assuming every sale is subject to GST in the same way",
      detail: "Overlooking GST-free supplies, input taxed sales (like residential property), and overseas export exemptions.",
    },
    {
      title: "Assuming every business purchase gives rise to a GST credit",
      detail: "Attempting to claim credits without valid tax invoices, on private expenses, or on purchases from unregistered suppliers.",
    },
    {
      title: "Using the wrong effective registration date",
      detail: "Selecting an arbitrary date that misaligns with actual turnover achievement, causing messy retrospective adjustments.",
    },
    {
      title: "Failing to update accounting software, invoices and BAS processes after registration",
      detail: "Neglecting to enable GST tax rates on invoice templates, which leaves customers with non-compliant paperwork.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tag color="volcano" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <WarningOutlined className="mr-1.5" />
            Common Pitfalls
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Common GST registration issues
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Navigating GST registration involves more than ticking a box. Avoid these common compliance mistakes that often lead to retrospective ATO adjustments and audit queries:
          </p>
        </div>

        {/* 6 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-rose-400/60 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <CloseCircleOutlined />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
