"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  FileProtectOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  TranslationOutlined,
} from "@ant-design/icons";

/**
 * AudCurrencyConversionsAndRecords Component
 * ==========================================
 * Section 5 & 6: Converting foreign amounts into Australian dollars & Records to keep.
 * Features 100% complete, verbatim content from Page 9 of the client document.
 */
export default function AudCurrencyConversionsAndRecords() {
  const records = [
    "Foreign payslips, employment statements and pension documents",
    "Dividend, interest and investment statements",
    "Rental statements, invoices and property expenses",
    "Foreign tax assessments, withholding certificates and payment evidence",
    "Bank statements and remittance records",
    "Exchange-rate sources and conversion calculations",
    "Acquisition and disposal records for foreign assets",
    "Residency, travel and immigration information where relevant",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            FX Translation &amp; Substantiation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Converting Foreign Amounts and Records to Keep
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax compliance requires foreign currency translation using approved exchange rate standards, backed by robust cross-border documentation.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Converting Amounts */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <TranslationOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Converting into Australian Dollars
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    ATO Foreign Exchange Translation Rules
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Foreign income, deductible expenses and foreign tax paid must generally be translated into Australian dollars. The appropriate rate and translation time depend on the amount and the applicable rules.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    ATO-Approved Rates:
                  </span>
                  <p>
                    An ATO-published rate or another supportable rate may be used where permitted. An average rate may be acceptable for recurring amounts if it provides a reasonable approximation and does not distort the result; it should not be used automatically.
                  </p>
                </div>
                <p>
                  Keep the foreign amount, transaction date, rate, source and Australian-dollar calculation.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              RBA and ATO official exchange rate tables applied
            </div>
          </div>

          {/* Right Column: Records Checklist */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileProtectOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Records to Keep
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Statutory Documentation Checklist
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Useful records may include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {records.map((rec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <HistoryOutlined />
                  <span>Statutory Record Retention Period:</span>
                </div>
                Tax records generally need to be kept for at least five years after lodging the relevant return. Records establishing an asset&apos;s cost base may need to be retained until at least five years after disposal. If documents are incomplete or not in English, additional information or translation may be required.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Foreign language translation assistance available
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Verify Your Records
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
