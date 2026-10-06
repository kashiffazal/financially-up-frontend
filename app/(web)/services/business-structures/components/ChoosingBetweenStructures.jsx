"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
  UserOutlined,
  TeamOutlined,
  FileDoneOutlined,
  PropertySafetyOutlined,
  SettingOutlined,
  UserAddOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * ChoosingBetweenStructures Component
 * ===================================
 * Section 4: How do you choose between structures?
 *
 * Implements verbatim copy from Paragraphs 28 to 37 of '6th Pillar Business Structures.docx':
 * - Verbatim Heading 2: "How do you choose between structures?" (Para 28)
 * - Verbatim Lead Narrative: Paragraph 29
 * - Verbatim 7 Evaluation Questions: Paragraphs 30 to 36
 * - Verbatim Advisory Guidance: Paragraph 37 (via AdvisoryReassuranceBanner)
 *
 * Background: Clean White with alternating palette.
 */
export default function ChoosingBetweenStructures() {
  /**
   * The 7 verbatim questions from Paragraphs 30 to 36 of client document
   */
  const evaluationQuestions = [
    {
      number: "01",
      question: "Who will own and control the business?",
      icon: <UserOutlined className="text-teal-600 dark:text-teal-400" />,
      tag: "Ownership & Control",
      detail:
        "Determining which individuals or legal entities hold voting power, executive authority, and commercial decision-making rights.",
    },
    {
      number: "02",
      question: "Will there be one owner or multiple owners?",
      icon: <TeamOutlined className="text-blue-600 dark:text-blue-400" />,
      tag: "Equity Distribution",
      detail:
        "Single-operator structures carry distinct administrative and legal simplicity compared to multi-party equity partnerships or shareholdings.",
    },
    {
      number: "03",
      question: "Will the business employ staff or take on significant contracts?",
      icon: <FileDoneOutlined className="text-emerald-600 dark:text-emerald-400" />,
      tag: "Commercial Risk",
      detail:
        "Hiring employees and entering high-value supply or client contracts increases commercial exposure and limited liability considerations.",
    },
    {
      number: "04",
      question: "Will the business hold valuable assets or intellectual property?",
      icon: <PropertySafetyOutlined className="text-purple-600 dark:text-purple-400" />,
      tag: "Asset Protection",
      detail:
        "Protecting core intellectual property, plant, vehicles, or business premises from operating trade liabilities.",
    },
    {
      number: "05",
      question: "How important are flexibility, simplicity and ongoing administration?",
      icon: <SettingOutlined className="text-amber-600 dark:text-amber-400" />,
      tag: "Administration",
      detail:
        "Weighing initial setup ease against ongoing corporate compliance, annual ASIC review fees, and separate tax return obligations.",
    },
    {
      number: "06",
      question: "Could new investors, partners or family members become involved later?",
      icon: <UserAddOutlined className="text-cyan-600 dark:text-cyan-400" />,
      tag: "Future Scaling",
      detail:
        "Accommodating future capital injections, equity partners, key employee shares, or family beneficiaries without complex restructures.",
    },
    {
      number: "07",
      question: "Are there tax, legal or commercial consequences if the structure changes later?",
      icon: <SwapOutlined className="text-rose-600 dark:text-rose-400" />,
      tag: "Restructure Impact",
      detail:
        "Assessing potential capital gains tax (CGT), stamp duty, asset-transfer costs, and contract reassignment hurdles before starting.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Verbatim Heading 2 (Para 28) & Paragraph 29 */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Decision Framework
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            How do you choose between structures?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            There is no single structure that is automatically best for every business. A useful review usually considers who owns the business, how profits may be used or distributed, expected growth, financing, administration, tax consequences, liability exposure and future changes in ownership.
          </p>
        </div>

        {/* 7 Verbatim Evaluation Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {evaluationQuestions.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                      {item.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.question}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200/60 dark:border-zinc-800 flex items-center gap-1.5 text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
                <CheckCircleOutlined className="text-xs" />
                <span>Reviewed during structure scoping</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner: Verbatim Paragraph 37 */}
        <AdvisoryReassuranceBanner
          tag="Strategic Structuring Review"
          tagIcon="compass"
          title="Tax Considerations Should Not Be Viewed in Isolation"
          description="Tax can be important, but it should not be considered in isolation. A lower tax rate in one circumstance does not automatically make a structure more suitable overall. Commercial objectives, legal responsibilities and the cost of ongoing compliance also matter."
          primaryButton={{
            text: "Book Structure Advice",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
