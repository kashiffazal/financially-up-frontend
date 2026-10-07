"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  NumberOutlined,
  ArrowRightOutlined,
  FolderOpenOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

/**
 * MissingRecordsAndCatchUpProcess Component
 * =========================================
 * Section 5 & 6: What if tax records are missing? & How the catch-up process works.
 * Features 100% complete, verbatim content from Page 11 of the client document.
 */
export default function MissingRecordsAndCatchUpProcess() {
  const recordSources = [
    "Employer income statements",
    "ATO pre-fill reports",
    "Bank and investment statements",
    "Private health insurance details",
    "Earlier tax documents",
    "Rental-property records",
    "Receipts and records obtained from payers or service providers",
  ];

  const steps = [
    {
      num: "01",
      title: "Confirm the outstanding years and review any ATO correspondence.",
      desc: "Checking your lodgment status on the ATO portal to identify exactly which financial years require action.",
    },
    {
      num: "02",
      title: "Determine whether a tax return or non-lodgment advice is required for each year.",
      desc: "Assessing income thresholds, tax offsets, and statutory triggers to submit a return or Non-Lodgment Advice (NLA).",
    },
    {
      num: "03",
      title: "Identify income, deductions and supporting records for every relevant income year.",
      desc: "Gathering documentation across wages, investments, work deductions, and allowable historical offsets.",
    },
    {
      num: "04",
      title: "Review available ATO information, subject to the necessary authority and access.",
      desc: "Extracting historical ATO pre-fill data, PAYG summaries, interest reports, and past notices.",
    },
    {
      num: "05",
      title: "Prepare each return using the available reliable records and the rules for that year.",
      desc: "Applying the specific tax brackets, thresholds, and deductions that were legally applicable in that income year.",
    },
    {
      num: "06",
      title: "Explain the expected assessment position before obtaining approval to lodge.",
      desc: "Reviewing the draft return, calculating expected refund or payable balance, and answering your questions.",
    },
    {
      num: "07",
      title: "Lodge the documents and review any assessments, refunds, balances or follow-up requirements.",
      desc: "Transmitting directly through our registered tax agent portal and monitoring official ATO processing.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 5: What If Tax Records Are Missing? */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Evidence &amp; Substantiation
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What If Tax Records Are Missing?
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Missing records do not always prevent you from starting, but the return must be based on reliable information. Relevant sources may include employer income statements, ATO pre-fill reports, bank and investment statements, private health insurance details, earlier tax documents, rental-property records, receipts and records obtained from payers or service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Reliable Sources Checklist */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <FolderOpenOutlined className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Potential Information Sources
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Rebuilding Historical Records
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {recordSources.map((source, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                      <span>{source}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Substantiation Rules & No Invention Callout */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <FileSearchOutlined className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Substantiation &amp; ATO Pre-Fill
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Reasonable Basis Required
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  <p>
                    ATO pre-fill information can assist, but it may not be complete and should be checked against your own records. Figures should not be invented.
                  </p>
                  <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/50 text-amber-950 dark:text-amber-200">
                    <span className="font-bold block mb-1">
                      Reasonable Basis Rule:
                    </span>
                    If a document genuinely cannot be replaced, any estimate must have a reasonable basis and meet the applicable ATO substantiation requirements. The available evidence and appropriate approach may differ between years.
                  </div>
                  <p>
                    Our registered tax agents access the ATO Tax Agent Portal to pull historical pre-fill records spanning previous tax years, helping identify payer summaries and financial records that may have been lost.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
                Professional integrity: We rebuild records ethically under statutory guidelines.
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: How the Catch-Up Process Works */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              7-Step Roadmap
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How the Catch-Up Process Works
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Bringing overdue tax returns up to date follows a structured, step-by-step methodology to ensure every year is accurate and compliant with the rules of that income period.
            </p>
          </div>

          {/* 7 Steps Stack */}
          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex items-start gap-4 sm:gap-6 hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 font-extrabold text-sm sm:text-base shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Records Consideration Callout */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-100/80 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">
                Complex Returns &amp; Additional Records:
              </span>
              Employment-only returns may require less information. Investments, foreign income, rental property, cryptocurrency, capital gains or self-employment can require additional records. Broader matters are covered under our{" "}
              <Link
                href="/services/individual-tax"
                className="text-brand-primary dark:text-emerald-400 font-semibold hover:underline"
              >
                Individual Tax Services
              </Link>{" "}
              and{" "}
              <Link
                href="/services/individual-tax/individual-tax-return"
                className="text-brand-primary dark:text-emerald-400 font-semibold hover:underline"
              >
                Individual Tax Return service
              </Link>
              .
            </div>
            <Link
              href="/services/individual-tax"
              className="shrink-0"
            >
              <Button
                type="primary"
                className="brand-btn-primary font-bold text-xs sm:text-sm"
              >
                Individual Tax Hub <ArrowRightOutlined className="text-xs" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
