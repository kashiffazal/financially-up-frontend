"use client";

import React from "react";
import { Tag } from "antd";
import {
  SwapOutlined,
  DollarOutlined,
  ApartmentOutlined,
  HomeOutlined,
  BuildOutlined,
  ToolOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhenReviewIsUseful Component
 * =============================
 * Section: "When a property tax review is especially useful"
 * Implements the exact verbatim text and all 7 event triggers from lines 46–48
 * of '10th Pillar Property Tax.docx'.
 *
 * Background: Clean White with Dark Mode compatibility.
 */
export default function WhenReviewIsUseful() {
  /**
   * The 7 specific life and portfolio trigger events explicitly listed in the document:
   * "buying or selling a property, refinancing, changing ownership,
   *  moving a former home into the rental market, starting a development,
   *  carrying out major renovations or moving property activity into a company or trust."
   */
  const reviewTriggers = [
    {
      icon: <SwapOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Buying or Selling a Property",
      tag: "Acquisitions & Disposals",
      description:
        "Contract dates, settlement adjustments, incidental legal and conveyancing costs, and immediate cost base establishment before records become scattered.",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Refinancing & Loan Redraws",
      tag: "Interest Deductibility",
      description:
        "Tracing the purpose of borrowed funds when loans are split, topped up, or redrawn, ensuring private borrowings are cleanly separated from rental deductions.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Changing Legal Ownership",
      tag: "Title & Percentage Shifts",
      description:
        "Restructuring ownership percentages between spouses, joint tenants, or tenants in common, which triggers immediate CGT and state stamp duty events.",
    },
    {
      icon: <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Moving a Former Home into Rental",
      tag: "6-Year Absence & Valuation",
      description:
        "Establishing a market valuation on the date of first income-producing use and assessing your eligibility under the statutory 6-year absence exemption.",
    },
    {
      icon: <BuildOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Starting a Development or Subdivision",
      tag: "Capital vs Ordinary Income",
      description:
        "Determining whether the project is on capital account or treated as a profit-making undertaking, setting up GST registrations, and assessing the margin scheme.",
    },
    {
      icon: <ToolOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Carrying Out Major Renovations",
      tag: "Repairs vs Capital Works",
      description:
        "Distinguishing immediate repair deductions from Division 43 structural works and Division 40 depreciating assets under strict ATO guidelines.",
    },
    {
      icon: <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Moving Property into a Company or Trust",
      tag: "Entity Restructuring",
      description:
        "Evaluating transfer duty, CGT roll-overs, asset protection, and future distribution flexibility before transferring legal title to an entity.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Paragraphs from Document */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Portfolio Triggers
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            When a property tax review is especially useful
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A review can be particularly useful when the tax position has changed during the year rather than simply continuing as before. Examples include buying or selling a property, refinancing, changing ownership, moving a former home into the rental market, starting a development, carrying out major renovations or moving property activity into a company or trust.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            These events can affect deductions, cost-base records, GST, entity reporting and the timing of tax obligations. Reviewing the event while documents are still available is usually more practical than reconstructing the position years later.
          </p>
        </div>

        {/* 7 Review Trigger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {reviewTriggers.map((trigger, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {trigger.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700 text-slate-600 dark:text-zinc-400 font-mono">
                    {trigger.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {trigger.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {trigger.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 font-medium">
                <SafetyCertificateOutlined className="text-xs" />
                <span>Pre-Lodgement Documentation Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Timely Property Review"
          tagIcon="safety"
          title="Experienced One of These Property Events This Year?"
          description="Do not wait until tax time to reconstruct complex transactions. Reviewing your property changes while contracts, statements, and invoices are readily accessible ensures accurate reporting and maximum allowable deductions."
          primaryButton={{
            text: "Book a Property Review",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
