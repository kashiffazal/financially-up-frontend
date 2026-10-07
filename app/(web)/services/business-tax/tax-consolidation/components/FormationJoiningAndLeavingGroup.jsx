"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FormOutlined,
  ImportOutlined,
  ExportOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * FormationJoiningAndLeavingGroup Component
 * =========================================
 * Sections: "Formation requires more than an election" & "Joining and leaving the group"
 * Verbatim text from Page 13 of client docx.
 * Covers:
 * - Joining tax costs, transferring eligible losses, tax attributes & long-term records
 * - Irrevocability & long-term implications for M&A, financing, and structure
 * - Joining entity tax-cost setting & loss analysis
 * - Exit tax-cost setting & warning that commercial price != consolidation tax values.
 */
export default function FormationJoiningAndLeavingGroup() {
  const lifecycleStages = [
    {
      icon: <FormOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Formation: Beyond the ATO Election",
      desc: "Choosing to consolidate can involve more than lodging a notification. The group may need to determine joining tax costs, transfer eligible losses, identify relevant tax attributes and establish records that support future calculations.",
    },
    {
      icon: <ImportOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Joining the Group: Entry ACA Setting",
      desc: "A joining entity may require asset tax-cost setting and analysis of transferred losses, recalculating the tax base of underlying business assets according to consolidation entry formulas.",
    },
    {
      icon: <ExportOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Leaving the Group: Exit Tax-Cost Setting",
      desc: "When an entity leaves, exit tax-cost setting and the treatment of relevant assets and liabilities can affect the tax outcome, determining the head company's capital gain or loss on disposing of member shares.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Consolidation Lifecycle
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Formation requires more than an election
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Because the choice is irrevocable, tax consolidation advice should consider both immediate compliance and the longer-term effect on acquisitions, disposals, financing and group structure. Detailed transaction modelling is separately scoped where required.
          </p>
        </div>

        {/* 3 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {lifecycleStages.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Critical Box: Commercial Price vs Tax Values */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Commercial Price Does Not Equal Consolidation Tax Value
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Changes in group membership can trigger specific consolidation calculations. A joining entity may require asset tax-cost setting and analysis of transferred losses. When an entity leaves, exit tax-cost setting and the treatment of relevant assets and liabilities can affect the tax outcome. The commercial sale price or accounting values should not be assumed to equal the tax values produced by the consolidation rules.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Model Joining/Leaving Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
