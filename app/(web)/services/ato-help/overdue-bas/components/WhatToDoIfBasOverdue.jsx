"use client";

import React from "react";
import {
  FileTextOutlined,
  StopOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatToDoIfBasOverdue Component
 * ==============================
 * Section 1: Immediate practical steps when activity statements are overdue:
 * confirming periods, avoiding guesswork/estimates, nil lodgment obligations,
 * and separating lodgment from payment inability.
 */
export default function WhatToDoIfBasOverdue() {
  const actionPoints = [
    {
      title: "Confirm Exact Overdue Periods",
      description:
        "The practical first step is to confirm the overdue periods and avoid guessing the figures. A BAS can include GST, PAYG withholding, PAYG instalments and other obligations depending on the business.",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Base Returns on Reconstructed Records",
      description:
        "If the bookkeeping is incomplete, the BAS should generally be prepared from corrected records rather than lodged with unsupported estimates simply to clear the overdue status.",
      icon: <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Nil BAS Still Mandatory",
      description:
        "The ATO expects activity statements to be lodged on time even when there is nothing to report. A nil BAS may still need to be lodged where the business has an active obligation but zero reportable amounts.",
      icon: <StopOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Cash-Flow Does Not Excuse Non-Lodgement",
      description:
        "Cash-flow difficulty is not, by itself, a reason to leave activity statements unlodged. Lodging accurately locks in the correct figures so payment plans can be arranged.",
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Pillar 11.10 • BAS Catch-Up Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What should you do if your BAS is overdue?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              The practical first step is to confirm the overdue periods and avoid guessing the figures. A BAS can include GST, PAYG withholding, PAYG instalments and other obligations depending on the business. If the bookkeeping is incomplete, the BAS should generally be prepared from corrected records rather than lodged with unsupported estimates simply to clear the overdue status.
            </p>
            <p>
              The ATO expects activity statements to be lodged on time even when there is nothing to report or the business is having difficulty paying. A nil BAS may still need to be lodged where the business has a lodgment obligation but no reportable amounts for the period. This means a cash-flow problem is not, by itself, a reason to leave the BAS unlodged.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actionPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
