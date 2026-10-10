"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarCircleOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * UnitTrustDistributionsAndReturn Component
 * =========================================
 * Section: Distributions and the unit trust tax return
 * Verbatim text from Page 3 of client docx.
 * Explains how unit trust allocations, Section 95 tax returns, and statements of distribution
 * must align seamlessly across statutory and accounting ledgers.
 */
export default function UnitTrustDistributionsAndReturn() {
  const reportingComponents = [
    {
      title: "Business & Investment Earnings",
      desc: "Gross trading profits, interest, commercial rents, and investment receipts classified according to ordinary vs statutory income rules.",
    },
    {
      title: "Allowable Deductions",
      desc: "Operating expenditure, interest on borrowings, management fees, and depreciation allowances calculated under tax law.",
    },
    {
      title: "Capital Gains Discounts",
      desc: "Net capital gains, CGT discount calculations, and proper attribution across eligible Australian resident unit holders.",
    },
    {
      title: "Franked Distributions & Credits",
      desc: "Dividend income received from corporate equities, allocating franking credits proportionately to unit entitlements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Return Reconciliation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Distributions and the unit trust tax return
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Unit trust distributions need to be reflected consistently across the trust accounts, tax return and
            information provided to unit holders. The trust deed determines how income and capital can be allocated,
            while tax law determines how the resulting amounts are assessed.
          </p>
        </div>

        {/* 4 Reporting Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reportingComponents.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-4">
                  <FileDoneOutlined className="text-lg text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Explanatory Box: Not Just Cash Paid */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
              <SlidersOutlined className="text-xl text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <Tag color="cyan" className="font-semibold text-xs mb-1">
                Accounting Precision
              </Tag>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Distribution Reporting Goes Beyond Cash Movements
              </h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The tax return may need to report business or investment income, deductions, capital gains, franked
            distributions and beneficiary or unit-holder information. The treatment can vary according to the trust’s
            structure and the nature of each amount, so distribution reporting should not be reduced to a simple
            cash-paid calculation.
          </p>
        </div>
      </div>
    </section>
  );
}
