"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileDoneOutlined,
  HistoryOutlined,
  StopOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatAtoConsidersLateLodgment Component
 * =====================================
 * Section 4: What does the ATO consider for late lodgment?
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Explains ATO decision criteria: lodgement history, events outside control,
 * causal proof, and cross-links to Overdue Tax Returns catch-up.
 */
export default function WhatAtoConsidersLateLodgment() {
  const criteria = [
    {
      icon: <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Cause & Duration of the Delay",
      desc: "Whether the delay was brief or prolonged, and what specific factors directly triggered the interruption.",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Events Outside Your Control",
      desc: "Severe illness, natural disasters, serious accidents, sudden bereavement, or catastrophic IT failure.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Steps Taken to Rectify & Comply",
      desc: "Evidence of proactive efforts to seek assistance, reconstruct data, and bring filings up to date promptly once the issue ended.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Historical Lodgment Track Record",
      desc: "Whether you have an otherwise compliant track record with the ATO or a history of repeated unprompted defaults.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="amber" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            ATO Decision Criteria
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does the ATO consider for late lodgment?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO can remit all or part of a failure-to-lodge penalty based on individual circumstances. It generally expects outstanding documents to be lodged before you request remission. Relevant facts can include the cause and duration of the delay, whether the event was outside your control, the steps taken to comply and your lodgment history.
          </p>
        </div>

        {/* 4 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircleOutlined /> Assessment Factor
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Causation Rationale Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-8">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Why Disruption Alone Does Not Guarantee Remission:
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
            An illness, disruption or other difficult event does not guarantee approval. The request should explain how that event affected the specific obligation and period, supported where possible by records. It should also state when the problem was resolved and what action was taken afterward.
          </p>
        </div>

        {/* Cross-Link Card to Overdue Returns */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Still Have Unlodged Returns or Activity Statements?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              If returns are still outstanding, our overdue tax returns service deals with preparing and lodging those returns before a penalty remission request is considered.
            </p>
          </div>
          <Link
            href="/services/ato-help/overdue-tax-returns"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Catch Up Overdue Returns <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
