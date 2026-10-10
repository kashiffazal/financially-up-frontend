"use client";

import React from "react";
import {
  FileTextOutlined,
  CheckCircleFilled,
  TranslationOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * ForeignIncomeDocumentsList Component
 * =====================================
 * Section 6: Documents to Provide for a Foreign Income Tax Return
 * Exact verbatim checklist from Client Document (Page 2).
 */
export default function ForeignIncomeDocumentsList() {
  const documents = [
    { title: "Overseas tax returns", desc: "Full statutory returns lodged with foreign tax authorities." },
    { title: "Foreign notices of assessment", desc: "Official final tax assessments and determinations." },
    { title: "Salary or wage statements", desc: "Foreign payment summaries, P60, W-2, or payslips." },
    { title: "Bank interest statements", desc: "Year-end interest certificates from foreign bank accounts." },
    { title: "Dividend statements", desc: "Vouchers showing gross dividend and foreign withholding tax." },
    { title: "Investment reports", desc: "Managed fund distribution reports and foreign portfolio records." },
    { title: "Pension statements", desc: "Annuity and pension statements showing periodic payments." },
    { title: "Foreign rental-property records", desc: "Rental income schedules, management fees, and loan papers." },
    { title: "Capital-gains transaction records", desc: "Purchase and sale contracts for offshore property or shares." },
    { title: "Withholding-tax certificates", desc: "Formal statements of non-resident withholding tax deducted." },
    { title: "Evidence of foreign tax paid", desc: "Bank remittances, receipt vouchers, and government receipts." },
    { title: "Relevant exchange-rate information", desc: "Daily spot rates or acceptable ATO average rates." },
    { title: "Dates of arrival in or departure from Australia", desc: "Flight itineraries, visa stamps, or boarding passes." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <FileTextOutlined /> Substantiation Checklist
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Documents to Provide for a Foreign Income Tax Return
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A foreign income tax accountant may ask for documents such as:
          </p>
        </div>

        {/* Responsive Grid of Checklist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-colors"
            >
              <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Translation Alert Banner (Verbatim note) */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-4">
          <TranslationOutlined className="text-2xl text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Non-English Documentation Notice
            </h4>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If records are not available in English, additional information or translation may be needed to establish what the document represents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
