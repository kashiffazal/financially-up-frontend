"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarCircleOutlined,
  AuditOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * DifferentRoutesIncomeTaxBas Component
 * =====================================
 * Section 4: Income tax, BAS and audit disclosures can follow different routes
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Details technical differences in rectifying Income Tax, GST, PAYGW,
 * and Superannuation liabilities.
 */
export default function DifferentRoutesIncomeTaxBas() {
  const routes = [
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Income Tax Corrections",
      lead: "An income tax error may be corrected through an amendment or approved disclosure process.",
      desc: "For individual, trust, or company tax returns, formal amendment requests or approved disclosure schedules are submitted through tax agent portal interfaces.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "GST & Activity Statement Corrections",
      lead: "A GST mistake may be corrected on a later BAS only where the ATO's conditions are met; otherwise the earlier activity statement generally needs revision.",
      desc: "If correction threshold limits (de minimis amounts or time limits) are exceeded, earlier quarterly activity statements must be formally revised.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "PAYGW & Superannuation Obligations",
      lead: "PAYG withholding, superannuation and other obligations can have their own forms and consequences.",
      desc: "Superannuation errors require lodging formal Super Guarantee Charge (SGC) statements and trigger non-deductible statutory interest penalties.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Tax Type Specifications
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Income tax, BAS and audit disclosures can follow different routes
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An income tax error may be corrected through an amendment or approved disclosure process. A GST mistake may be corrected on a later BAS only where the ATO's conditions are met; otherwise the earlier activity statement generally needs revision. PAYG withholding, superannuation and other obligations can have their own forms and consequences.
          </p>
        </div>

        {/* 3 Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {routes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Specific Tax Treatment
              </div>
            </div>
          ))}
        </div>

        {/* Audit Warning Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 border border-amber-200/60 dark:border-amber-800/60">
              <ExclamationCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                Crucial Warning if an Audit Has Already Commenced:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                If the ATO has already notified you of a review or audit, tell the officer or your adviser before lodging a general amendment. The relevant disclosure may need to be made to the officer conducting the examination or through the approved form for taxpayers under review or audit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
