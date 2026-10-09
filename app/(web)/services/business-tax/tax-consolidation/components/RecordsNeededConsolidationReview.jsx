"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsNeededConsolidationReview Component
 * ==========================================
 * Section: Records and information we may need
 * Verbatim checklist of 9 records from Page 13 of client docx.
 * Concludes with verbatim indefinite retention rule:
 * "Formation, tax-cost-setting, loss and membership records should be retained
 * for as long as they remain relevant to later tax calculations, rather than
 * being treated as single-year working papers."
 */
export default function RecordsNeededConsolidationReview() {
  const records = [
    {
      title: "Current group structure and ownership chart",
      desc: "Detailed legal ownership hierarchy showing 100% direct and indirect shareholdings across all Australian and offshore entities.",
    },
    {
      title: "Company, trust and partnership details for proposed members",
      desc: "Constituent deeds, certificates of incorporation, ACNs, ABNs, and tax residency confirmations for every group entity.",
    },
    {
      title: "Acquisition and disposal documents",
      desc: "Share purchase agreements (SPAs), asset transfer contracts, and legal completion statements for all historical corporate transactions.",
    },
    {
      title:
        "Tax returns, financial statements and tax-effect accounting records",
      desc: "Lodged tax returns, audited balance sheets, and deferred tax asset/liability schedules for each joining entity up to formation date.",
    },
    {
      title: "Tax-loss schedules and continuity information",
      desc: "Detailed tax loss schedules, COT testing logs, and available fraction determinations for transferred revenue and capital losses.",
    },
    {
      title: "Fixed-asset and tax-depreciation registers",
      desc: "Comprehensive fixed asset schedules distinguishing between adjustable values, original cost, and tax written down values.",
    },
    {
      title: "Asset valuations or transaction models where relevant",
      desc: "Independent market valuation reports of resetting assets, goodwill, and intangible property required for Allocable Cost Amount allocations.",
    },
    {
      title: "Prior consolidation formation, joining or leaving calculations",
      desc: "Historical entry ACA workpapers, step 1 to step 8 schedules, and asset reset cost spreadsheets prepared by prior advisers.",
    },
    {
      title: "ATO notifications and correspondence",
      desc: "Approved ATO consolidation formation notices (Notification of formation of a consolidated group), joining forms, and leaving notifications.",
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
            Substantiation & Documentation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records and information we may need
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To evaluate group eligibility, model entry tax cost setting, and
            manage head company tax compliance, we review the following
            documentation:
          </p>
        </div>

        {/* 9 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mb-3">
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-sm" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Indefinite Retention Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-slate-50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-teal-500/20 dark:border-teal-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ClockCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Indefinite Statutory Record Retention Rule
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Formation, tax-cost-setting, loss and membership records should be
              retained for as long as they remain relevant to later tax
              calculations, rather than being treated as single-year working
              papers.
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
                Review Group Records
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
