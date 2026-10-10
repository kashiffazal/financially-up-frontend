"use client";

import React from "react";
import {
  CalendarOutlined,
  SafetyCertificateOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  NumberOutlined,
} from "@ant-design/icons";

/**
 * PartYearResidencyAndForeignTax Component
 * ========================================
 * Section 3: What happens in a part-year residency year & Does paying foreign tax remove the Australian obligation
 * Exact verbatim content from Client Document (Page 4).
 */
export default function PartYearResidencyAndForeignTax() {
  const stepsOrder = [
    { num: "01", title: "Establish Residency", desc: "Formally determine the exact date Australian residency commenced." },
    { num: "02", title: "Classify the Income", desc: "Separate Australian vs offshore revenue and examine statutory exemptions." },
    { num: "03", title: "Convert & Reconcile", desc: "Translate amounts using approved ATO conversion rates into Australian Dollars." },
    { num: "04", title: "Assess Relief & FITO", desc: "Calculate qualifying foreign income tax offsets to mitigate double taxation." },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Card 1: What happens in a part-year residency year */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <CalendarOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                What Happens in a Part-Year Residency Year
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                An individual who becomes an Australian resident for tax purposes part way through an income year may have a part-year tax-free threshold. The ATO works out the threshold from the residency date and number of resident months reported in the return. It should not be assumed that the full-year threshold applies simply because you are a resident when you lodge.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The Australian income year runs from 1 July to 30 June. Your arrival, employment commencement and foreign tax records may cross that period differently from another country's tax year. We separate income by the relevant Australian period, identify any amounts that need translation into Australian dollars, and retain the working papers used for the conversion.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Australian Tax Year: 1 July – 30 June calendar cycle.
            </div>
          </div>

          {/* Card 2: Does paying foreign tax remove the Australian obligation */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <SafetyCertificateOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Does Paying Foreign Tax Remove the Australian Obligation?
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                No automatic exemption follows from paying tax overseas. Whether Australia taxes an amount depends first on your Australian status, the kind and timing of the income, domestic law and any relevant tax treaty. Where the same income is included in an Australian assessment and qualifying foreign income tax has been paid, a foreign income tax offset may be available. The allowable offset is not necessarily the full foreign tax paid.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A new resident tax accountant in Australia can put the work in the right order: establish residency, classify the income, convert and reconcile the records, then assess any exemption or offset. Starting with a foreign tax figure without connecting it to the related income can produce an incomplete return.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Eliminates double taxation through structured statutory reconciliation.
            </div>
          </div>
        </div>

        {/* 4 Steps in Order */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            The Right Professional Sequence for New Migrant Returns:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsOrder.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <span className="text-2xl font-black text-teal-600 dark:text-teal-400 block mb-2">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
