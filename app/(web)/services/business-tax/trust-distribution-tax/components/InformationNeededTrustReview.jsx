"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  FolderOpenOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededTrustReview Component
 * ======================================
 * Section: Information we may need
 * Verbatim checklist of 8 items from Page 11 of client docx.
 * Provides clear substantiation and record requirements for trust distribution planning.
 */
export default function InformationNeededTrustReview() {
  const records = [
    {
      title: "Current trust deed and relevant amendments",
      desc: "Original established trust deed plus all subsequent deeds of variation, amendments, or changes in trustee/appointor.",
    },
    {
      title: "Prior-year trust tax returns and financial statements",
      desc: "Historical balance sheets, tax returns, and beneficiary schedules to establish tax losses and opening loan balances.",
    },
    {
      title: "Current-year accounting records and estimated results",
      desc: "Trial balances, profit and loss statements, and bank reconciliations estimating income up to 30 June.",
    },
    {
      title: "Beneficiary details relevant to the proposed distribution",
      desc: "Names, TFNs, dates of birth, tax residency status, and estimated outside taxable income for all candidate beneficiaries.",
    },
    {
      title:
        "Details of capital gains, franked dividends and foreign income where applicable",
      desc: "Asset disposal workpapers, dividend distribution statements with franking credits, and foreign tax offset records.",
    },
    {
      title: "Existing trustee minutes or resolutions",
      desc: "Prior years' distribution minutes, family trust elections (FTEs), interposed entity elections (IEEs), and corporate trustee resolutions.",
    },
    {
      title: "Loan accounts, unpaid entitlements and related-party balances",
      desc: "Ledgers for beneficiary loan accounts, drawings, unpaid present entitlements (UPEs), and related-company transactions.",
    },
    {
      title:
        "Information about any material changes in the trust or beneficiaries",
      desc: "Details of family changes, beneficiaries reaching 18 years of age, marriages, departures from Australia, or structural changes.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Review Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Information we may need
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To review your trust distribution position and assist with complying
            annual resolutions, we may request the following records:
          </p>
        </div>

        {/* 8 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Consultation Prompt */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderOpenOutlined className="text-teal-600 dark:text-teal-400" />
              Ready to Review Your Trust Records?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Providing these documents ahead of 30 June ensures distribution
              resolutions are drafted within deed powers and aligned with
              tax-effective streaming options.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Schedule Trust Review
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
