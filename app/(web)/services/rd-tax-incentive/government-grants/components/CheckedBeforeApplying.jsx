"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  IdcardOutlined,
  CalendarOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CheckedBeforeApplying Component
 * ===============================
 * Section: What Should Be Checked Before Applying?
 * Verbatim text from Page 4 of 15th Pillar R&D Tax Incentive docx.
 */
export default function CheckedBeforeApplying() {
  const checkpoints = [
    {
      icon: <IdcardOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Entity & Legal Check",
      title: "Applicant eligibility",
      description:
        "A grant may restrict applicants by entity type, Australian Business Number status, location, industry, turnover, trading history, GST registration or other conditions. These rules differ between programs and should not be assumed from another grant or an earlier funding round.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "Scope & Deadlines",
      title: "Project eligibility and timing",
      description:
        "The proposed project usually needs to align with the program objectives. Guidelines may identify eligible and ineligible activities, minimum or maximum expenditure, co-contribution requirements, project start and completion dates, and restrictions on costs incurred or work started before approval. That timing matters: signing a contract, placing an order or beginning work too early can affect eligibility under some programs. Check the current rules before committing expenditure.",
    },
    {
      icon: <AuditOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Financial Substantiation",
      title: "Evidence and financial information",
      description:
        "Applications can require financial statements, management accounts, cash-flow information, project budgets, quotations, business plans, market evidence, contracts, licences or letters of support. The exact evidence depends on the program. Financial figures should reconcile across the form, budget and attachments, and claims about capability or outcomes should be supportable.",
      advisoryNote:
        "If accounting records need attention before an application, our business advisory services can be scoped separately from grant writing.",
      advisoryLink: {
        href: "/services/business-advisory",
        label: "Explore Business Advisory Services",
      },
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Pre-Submission Due Diligence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Should Be Checked Before Applying?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Careful review across applicant criteria, project timing, and financial substantiation
            prevents disqualification before drafting begins.
          </p>
        </div>

        {/* 3 Checkpoint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {checkpoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-200 dark:border-zinc-700">
                    {item.icon}
                  </div>
                  <Tag
                    color={idx === 1 ? "warning" : idx === 2 ? "blue" : "green"}
                    className="m-0 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5 border-none"
                  >
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>
              </div>

              {item.advisoryNote && (
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mb-3 italic">
                    {item.advisoryNote}
                  </p>
                  <Link href={item.advisoryLink.href}>
                    <Button
                      type="link"
                      className="p-0 text-emerald-600 dark:text-emerald-400 font-semibold inline-flex items-center gap-1.5 h-auto text-xs"
                      icon={<ArrowRightOutlined className="text-xs" />}
                      iconPlacement="end"
                    >
                      {item.advisoryLink.label}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timing Warning Banner */}
        <div className="bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl p-6 border border-amber-200/80 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-300">
            <AlertOutlined className="text-xl" />
          </div>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-normal">
            <strong className="font-semibold text-amber-950 dark:text-amber-100">
              Crucial Expenditure Rule:
            </strong>{" "}
            Signing a contract, placing an order or beginning work too early can affect eligibility under some programs. Check the current guidelines before committing expenditure.
          </p>
        </div>
      </div>
    </section>
  );
}
