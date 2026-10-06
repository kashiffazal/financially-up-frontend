"use client";

import React from "react";
import { Button } from "antd";
import {
  TeamOutlined,
  RiseOutlined,
  DollarOutlined,
  ApartmentOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  BankOutlined,
  FallOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhoNeedsVirtualCfo Component
 * =============================
 * Section 4: Who may benefit from virtual CFO services?
 *
 * Implements 100% verbatim content from '13th Pillar Virtual CFO.docx' (Section 1 - Virtual CFO).
 * Highlights the typical triggers that make a business more complex than the owner can manage
 * from bank balances or annual tax returns alone, plus the role of a virtual CFO for small business.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsVirtualCfo() {
  /**
   * The 8 typical triggers mentioned verbatim in the client document
   */
  const triggers = [
    {
      icon: <RiseOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Rapid Growth",
      description: "Scaling revenue and operations faster than internal finance systems can keep up.",
    },
    {
      icon: <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Tighter Cash Flow",
      description: "Managing working capital bottlenecks, debtor delays, and seasonal cash lulls.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Multiple Revenue Streams",
      description: "Dissecting divisional margins, subscription lines, and diverse product revenues.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Increased Staff Costs",
      description: "Evaluating wage ratios, headcount productivity, and rising payroll obligations.",
    },
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "New Locations",
      description: "Opening additional branches, sites, or commercial warehouses across states.",
    },
    {
      icon: <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Lender Reporting",
      description: "Supplying banks and debt facility providers with regular covenant compliance reports.",
    },
    {
      icon: <FallOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Changing Margins",
      description: "Investigating price pressure, supplier cost inflation, and margin compression.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Consistent Management Information",
      description: "Equipping leadership and department heads with dependable financial metrics.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <TeamOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Business Complexity & Commercial Support
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who may benefit from virtual CFO services?
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Virtual CFO services are often useful when a business has become more complex than the owner can comfortably manage from bank balances, bookkeeping reports or an annual tax return alone. Typical triggers include rapid growth, tighter cash flow, multiple revenue streams, increased staff costs, new locations, lender reporting, changing margins or a management team that needs consistent financial information.
          </p>
        </div>

        {/* 8 Typical Triggers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {triggers.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Box: Virtual CFO for Small Business (Exact Verbatim Paragraph 2) */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <CheckCircleOutlined />
                <span>Bridging the Record-to-Decision Gap</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                A Virtual CFO for Small Business
              </h3>
              {/* Exact Verbatim Paragraph 2 from Document */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                A virtual CFO for small business can also be useful where the owner already has a competent bookkeeper and tax accountant but still feels there is a gap between accurate records and meaningful commercial decision support. The service is not limited to large businesses; the important question is whether better financial management would materially help the decisions being made.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full sm:w-auto h-11 px-6 rounded-xl font-semibold shadow-xs hover:scale-[1.01] transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
