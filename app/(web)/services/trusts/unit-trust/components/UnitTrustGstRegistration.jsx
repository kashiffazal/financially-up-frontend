"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  ShopOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * UnitTrustGstRegistration Component
 * ==================================
 * Section: Does a unit trust need to register for GST?
 * Verbatim text from Page 3 of client docx.
 * Clarifies enterprise test criteria, threshold tests ($75,000 turnover),
 * and distinction between trading enterprises vs passive investment holding.
 */
export default function UnitTrustGstRegistration() {
  const criteria = [
    {
      icon: <ShopOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Commercial Trading Enterprises",
      desc: "Unit trusts operating commercial businesses, property development projects, or continuous leasing services generally qualify as carrying on an enterprise and must register if turnover meets the $75,000 threshold.",
      tag: "ABN & GST Required",
      color: "cyan",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Passive Investment Holding",
      desc: "Unit trusts solely holding passive equities, managed funds, or residential property may have a different status where inputs are input-taxed and GST registration is neither required nor beneficial.",
      tag: "Case-by-Case Review",
      color: "blue",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Indirect Tax Evaluation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Does a unit trust need to register for GST?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            GST registration depends on the trust’s activities and whether the relevant registration requirements are
            met. A unit trust that carries on an enterprise may need an ABN and, where required, GST registration. A
            trust that merely holds certain investments may have a different position. The activities and turnover
            should be reviewed rather than assuming all unit trusts have the same GST obligations.
          </p>
        </div>

        {/* 2-Column Comparison Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color={item.color} className="font-semibold text-xs">
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
