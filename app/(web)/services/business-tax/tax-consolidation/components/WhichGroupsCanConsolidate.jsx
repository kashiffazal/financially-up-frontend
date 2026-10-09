"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  BranchesOutlined,
  ExclamationCircleOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhichGroupsCanConsolidate Component
 * ===================================
 * Section: Which groups can consolidate?
 * Verbatim text from Page 13 of client docx.
 * Covers:
 * - Resident head company and wholly owned resident entities
 * - Eligibility for companies, trusts, partnerships and MEC groups
 * - The "all-in" rule: all eligible subsidiaries join
 * - Irrevocable choice, statutory written decision, and ATO approved notifications.
 */
export default function WhichGroupsCanConsolidate() {
  const eligibilityCriteria = [
    {
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Australian-Resident Head Company",
      desc: "A typical consolidated group requires an Australian-resident head company that is not itself a wholly owned subsidiary of another Australian-resident company.",
    },
    {
      icon: (
        <BranchesOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "100% Wholly Owned Subsidiary Members",
      desc: "At least one eligible Australian-resident entity that is wholly owned, directly or indirectly, by the head company. The detailed eligibility rules also deal with companies, trusts, partnerships and multiple-entry consolidated groups.",
    },
    {
      icon: (
        <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "The 'All-In' Subsidiary Rule",
      desc: "If an eligible head company chooses to consolidate, all eligible resident wholly owned subsidiaries generally join the group. You cannot selectively leave specific subsidiaries out.",
    },
    {
      icon: (
        <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Written Choice & ATO Form Timelines",
      desc: "The head company must make the choice in writing within the statutory timeframe and notify the ATO using the approved form by the applicable due date. The exact dates should be confirmed for the formation year rather than assumed from a later return.",
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
            Eligibility Requirements
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Which groups can consolidate?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A typical consolidated group requires an Australian-resident head
            company and at least one eligible Australian-resident entity that is
            wholly owned, directly or indirectly, by the head company. The
            detailed eligibility rules also deal with companies, trusts,
            partnerships and multiple-entry consolidated groups.
          </p>
        </div>

        {/* 4 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {eligibilityCriteria.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Irrevocable Warning Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Optional Choice, But Irrevocable Once Made
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If an eligible head company chooses to consolidate, all eligible
              resident wholly owned subsidiaries generally join the group. The
              choice is optional, but a valid choice is irrevocable. The head
              company must make the choice in writing within the statutory
              timeframe and notify the ATO using the approved form by the
              applicable due date. The exact dates should be confirmed for the
              formation year rather than assumed from a later return.
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
                Review Formation Feasibility
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
