"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsFbt Component
 * Covers 'How Financially Up Can Help' with link to BAS, GST & Payroll hub
 * from Page 6 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function HowFinanciallyUpHelpsFbt() {
  const capabilities = [
    {
      title: "Comprehensive FBT Health Check",
      desc: "Identifying which employer benefits, allowances, and reimbursements require FBT attention.",
    },
    {
      title: "Valuation & Concession Optimisation",
      desc: "Applying lawful valuation rules, minor benefit exemptions, and otherwise deductible concessions.",
    },
    {
      title: "Statutory Return Preparation & Lodgement",
      desc: "Compiling workpapers and lodging official FBT returns under the tax agent extended lodgement calendar.",
    },
    {
      title: "Payroll & RFBA Coordination",
      desc: "Aligning reportable fringe benefit amounts with employee income statements via Single Touch Payroll.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs"
          >
            <SolutionOutlined className="mr-1.5" />
            Employer Compliance
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How Financially Up Can Help
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can assist employers with FBT reviews, calculations,
            return preparation and related payroll reporting where required. We
            can help identify the information needed, review the treatment of
            benefits and prepare the compliance work based on the available
            facts and current ATO rules.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex items-start gap-4 hover:border-emerald-400/60 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hub Link Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 dark:from-zinc-800/80 dark:via-zinc-900 dark:to-zinc-800/60 border border-emerald-200/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Broader Compliance Context
            </h4>
            <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              For businesses also managing recurring employer and
              activity-statement obligations, our BAS, GST &amp; Payroll
              services provide the broader compliance context.
            </p>
          </div>
          <Link href="/services/bas-payroll">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              All BAS &amp; Payroll Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
