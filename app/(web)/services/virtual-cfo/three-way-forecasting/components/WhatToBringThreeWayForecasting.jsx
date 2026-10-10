"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileDoneOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * WhatToBringThreeWayForecasting Component
 * ========================================
 * Section 6: What to bring to the first discussion
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatToBringThreeWayForecasting() {
  const prepList = [
    { title: "recent financial statements & balance sheets", desc: "Past 12 to 24 months of reconciled financial reports." },
    { title: "current management accounts", desc: "Year-to-date trading figures, profit margins, and overhead reports." },
    { title: "operational budget if available", desc: "Approved targets, spending limits, and departmental plans." },
    { title: "loan schedules & debt facilities", desc: "Interest rates, repayment timing, balloon payments, and covenants." },
    { title: "description of the commercial decision", desc: "Summary of planned site openings, new equipment, hires, or acquisitions." },
    { title: "pricing, payment terms & staffing", desc: "Customer debtor days, supplier credit terms, and recruitment plans." },
    { title: "planned purchases & cash commitments", desc: "Quotes for capital assets, lease bonds, and scheduled tax runs." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Discovery Preparation
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to bring to the first discussion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bring recent financial statements, current management accounts, a budget if available, loan schedules and a description of the decision. Information on pricing, customer payment terms, staffing, planned purchases and existing cash commitments will help establish realistic inputs. We can then agree whether a three way forecast or a more focused analysis is appropriate.
          </p>
        </div>

        {/* 7 Preparation Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                    Input 0{idx + 1}
                  </span>
                  <FileDoneOutlined className="text-slate-400 dark:text-zinc-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircleFilled className="text-xs" />
                <span>Essential Discovery Input</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
