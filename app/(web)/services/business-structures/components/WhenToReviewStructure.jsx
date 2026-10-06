"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  RiseOutlined,
  UsergroupAddOutlined,
  BankOutlined,
  PropertySafetyOutlined,
  RocketOutlined,
  BranchesOutlined,
  WarningOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhenToReviewStructure Component
 * ===============================
 * Section 6: When should you review an existing structure?
 *
 * Implements verbatim copy from Paragraphs 41 to 43 of '6th Pillar Business Structures.docx':
 * - Verbatim Heading 2: "When should you review an existing structure?" (Para 41)
 * - Verbatim Text: Paragraph 42 & Paragraph 43
 *
 * Background: Clean White with alternating palette.
 */
export default function WhenToReviewStructure() {
  /**
   * The 6 specific review situations listed in Paragraph 42:
   * "when revenue or risk increases, a partner joins or leaves, a company is being considered,
   * business assets are being acquired, or the owners are preparing for growth, succession or a sale."
   */
  const reviewCatalysts = [
    {
      icon: <RiseOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Revenue or Risk Increases",
      tag: "Commercial Exposure",
      description:
        "As trading revenue expands or commercial liabilities grow, existing personal or direct trading arrangements may carry unacceptable personal exposure.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "A Partner Joins or Leaves",
      tag: "Ownership Changes",
      description:
        "Introducing a new co-owner, investor, or exiting an existing partner requires adjusting legal ownership, equity shares, and formal agreements.",
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "A Company Is Being Considered",
      tag: "Incorporation",
      description:
        "Evaluating the transition from sole trader or partnership operations into a proprietary limited company to access limited liability and corporate structures.",
    },
    {
      icon: <PropertySafetyOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Business Assets Are Being Acquired",
      tag: "Asset Protection",
      description:
        "Acquiring significant plant, valuable intellectual property, machinery, or commercial real estate that should be isolated from trading liabilities.",
    },
    {
      icon: <RocketOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Preparing for Growth",
      tag: "Commercial Scaling",
      description:
        "Expanding operations into new states, taking on significant commercial contracts, or hiring staff that warrant a more formalised operating entity.",
    },
    {
      icon: <BranchesOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Succession or a Sale",
      tag: "Exit Planning",
      description:
        "Positioning the business for a family transition, management buyout, or external sale, ensuring clean records and eligibility for concessions.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Verbatim Heading 2 (Para 41) & Paragraph 42 */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Lifecycle & Review
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            When should you review an existing structure?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A structure that suited a new business may become less practical as the business changes. A review may be useful when revenue or risk increases, a partner joins or leaves, a company is being considered, business assets are being acquired, or the owners are preparing for growth, succession or a sale.
          </p>
        </div>

        {/* 6 Review Catalysts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviewCatalysts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Warning Banner: Verbatim Paragraph 43 */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0 mt-1">
                <WarningOutlined className="text-amber-700 dark:text-amber-400 text-lg" />
              </div>
              <div className="space-y-1.5 max-w-3xl">
                <h4 className="text-base font-bold text-amber-950 dark:text-amber-200 m-0">
                  Separate Review Needed Before Implementing Changes
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed m-0 font-normal">
                  Changing structure can have tax, legal, GST, CGT, asset-transfer and state tax consequences. That work is different from initial setup and usually needs a separate review before anything is transferred or implemented. Financially Up can help identify the accounting and tax issues and coordinate with legal advisers where legal documentation or legal advice is required.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
                >
                  Book Structure Review
                </Button>
              </Link>
              <Link href="/services/business-structures/business-restructure">
                <Button
                  size="large"
                  className="h-11 px-5 rounded-xl font-semibold border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 hover:bg-amber-100/50 dark:hover:bg-amber-900/30"
                >
                  Restructure Advisory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
