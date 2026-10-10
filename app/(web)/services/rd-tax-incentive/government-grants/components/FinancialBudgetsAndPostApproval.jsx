"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  ProjectOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FileSyncOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * FinancialBudgetsAndPostApproval Component
 * =========================================
 * Section 1: Financial Information and Project Budgets
 * Section 2: What Happens If a Grant Is Approved?
 * Verbatim text from Page 4 of 15th Pillar R&D Tax Incentive docx.
 */
export default function FinancialBudgetsAndPostApproval() {
  const complianceSteps = [
    {
      title: "Funding Agreements & Milestones",
      desc: "Executing legal agreements, scheduling milestones, and securing written variations prior to any scope or budget shifts.",
    },
    {
      title: "Contemporaneous Evidence Trails",
      desc: "Retaining signed agreements, invoices, payments, payroll records, and dedicated project cost codes in the accounts.",
    },
    {
      title: "Stage Payments & Acquittals",
      desc: "Preparing transparent progress reporting, milestone verification, and formal financial acquittal submissions.",
    },
    {
      title: "Tax & GST Characterisation",
      desc: "Reviewing income tax and GST consequences based on the program deed and recipient circumstances.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Financial Information and Project Budgets */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Financial Modelling &amp; R&amp;D Interactions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Information and Project Budgets
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Budgeting Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <DollarOutlined className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Capacity &amp; Cost Categorisation
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                The business may need to demonstrate its capacity to deliver the project, contribute
                its share of costs or manage approved funding. A useful budget separates eligible and
                ineligible costs, identifies funding sources and explains the figures. It should match
                the activities and timetable.
              </p>
            </div>
          </div>

          {/* R&D Interaction Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <ProjectOutlined className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Accounting Records &amp; R&amp;D Tax Rules
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Financially Up can assist with relevant accounting information within the agreed
                engagement. This may include reviewing existing financial records, organizing project
                costs and checking that budget figures align with the supporting information. Where a
                project also involves qualifying R&amp;D, R&amp;D Tax Incentive application support should be
                considered separately because grant funding and the R&amp;D tax rules can interact.
              </p>
            </div>
            <Link href="/services/rd-tax-incentive/application-support">
              <Button
                type="link"
                className="p-0 text-emerald-600 dark:text-emerald-400 font-semibold inline-flex items-center gap-1.5 h-auto text-xs"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPlacement="end"
              >
                Explore R&amp;D Tax Incentive Application Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Section 2: What Happens If a Grant Is Approved? */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="blue"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Funded-Project Compliance Cycle
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Happens If a Grant Is Approved?
          </h2>
        </div>

        {/* 3 Detailed Verbatim Narrative Blocks */}
        <div className="space-y-6 mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              1. The Compliance Cycle &amp; Scope Variations
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Approval is usually the beginning of a funded-project compliance cycle. Depending on the
              program, the recipient may need to sign a funding agreement, meet milestones, maintain
              evidence of eligible expenditure, submit progress reports, request payment in stages,
              provide acquittals or demonstrate project outcomes. Variations may require written
              approval before the business changes the scope, budget or timetable.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <FileSyncOutlined className="text-teal-600 dark:text-teal-400" />
              2. Maintaining the Ongoing Evidence Trail
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Create the evidence trail as the project progresses. Keep the agreement, approved
              budget, invoices, payment records, payroll support, contracts, milestone evidence and
              reports together. Cost codes or a separate project ledger can make reporting and
              acquittal easier and reduce the risk of claiming an unsupported or ineligible cost.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <AuditOutlined className="text-blue-600 dark:text-blue-400" />
              3. Accounting, GST &amp; Income Tax Consequences
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Grant receipts can also have accounting, GST and income-tax consequences. The treatment
              depends on the nature of the payment, the recipient’s circumstances and whether
              anything is supplied in return. It should be reviewed rather than assuming that every
              grant is taxable, GST-free or treated in the same period.
            </p>
          </div>
        </div>

        {/* 4 Summary Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-100/70 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/60 dark:border-zinc-700/60"
            >
              <span className="text-xs font-black text-slate-400 dark:text-zinc-500 font-mono block mb-2">
                0{idx + 1}
              </span>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {step.title}
              </h5>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
