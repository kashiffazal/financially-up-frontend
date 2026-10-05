"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  UsergroupAddOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  AccountBookOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * ChoosingBetweenStructures Component
 * ===================================
 * Section 4: How Do You Choose Between Structures?
 *
 * Explores the practical criteria and critical evaluation questions that determine
 * whether a Sole Trader, Partnership, Company, or Trust is optimal.
 * Reuses AdvisoryReassuranceBanner for strategic pre-establishment advice.
 *
 * Background: Clean White.
 */
export default function ChoosingBetweenStructures() {
  const decisionCriteria = [
    {
      icon: (
        <UsergroupAddOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Ownership & Control",
      description:
        "Will you operate as a solo founder, with a business partner, or will family members and passive investors be involved in profit sharing?",
      questions: [
        "Single owner vs multiple equity partners",
        "Voting control and operational management",
        "Future equity distribution and succession plans",
      ],
      tag: "Governance",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Commercial Liability & Risk",
      description:
        "Does the business take on significant trade debts, enter commercial leases, sign high-value client contracts, or hire employees?",
      questions: [
        "Personal asset exposure to trade liabilities",
        "Customer, supplier, and worker dispute risk",
        "Industry-specific insurance and statutory requirements",
      ],
      tag: "Protection",
    },
    {
      icon: (
        <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Asset Protection & IP",
      description:
        "Will your enterprise develop valuable intellectual property, purchase commercial real estate, or hold heavy plant and machinery?",
      questions: [
        "Separation of operating risks from valuable assets",
        "Holding companies vs operating trading entities",
        "Protection of the family home from business insolvency",
      ],
      tag: "Security",
    },
    {
      icon: (
        <AccountBookOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Administration & Compliance",
      description:
        "Are you prepared for the statutory bookkeeping, ASIC annual review fees, and corporate records required by more formal structures?",
      questions: [
        "Annual ASIC company review fees and solvency resolutions",
        "Separate company bank accounts and strict director duties",
        "Division 7A loan rules for personal shareholder drawings",
      ],
      tag: "Administration",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Decision Framework
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            How Do You Choose Between Structures?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            There is no single structure that is automatically best for every
            business. An effective review evaluates ownership, profit
            distribution, expected growth, financing, administration costs,
            liability exposure, and future ownership transitions.
          </p>
        </div>

        {/* 4 Decision Criteria Cards (2-Column Desktop Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14 max-w-7xl mx-auto">
          {decisionCriteria.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-800">
                <ul className="space-y-1.5">
                  {item.questions.map((q, qIdx) => (
                    <li
                      key={qIdx}
                      className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400"
                    >
                      <QuestionCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 text-[10px]" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Strategic Structuring Review"
          tagIcon="compass"
          title="Tax Is Important — But Not the Only Factor"
          description="A lower corporate headline tax rate does not automatically make a company structure more suitable overall. Personal cash withdrawals, Division 7A compliance, annual ASIC maintenance, and capital gains tax roll-overs must all be weighed together before committing."
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
