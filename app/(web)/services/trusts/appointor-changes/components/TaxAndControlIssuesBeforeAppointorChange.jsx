"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * TaxAndControlIssuesBeforeAppointorChange Component
 * ==================================================
 * Section: Tax and control issues to review before an appointor change
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Covers trust loss control tests, Family Trust Election (FTE) & IEE status,
 * income injection test, CGT variation guidance, and entity consequences.
 */
export default function TaxAndControlIssuesBeforeAppointorChange() {
  const issues = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Loss Rules & Control Tests",
      desc: "For an ordinary non-fixed trust, a change in the appointor or guardian may be relevant when considering whether control has changed for trust loss purposes. Wider control arrangements must be verified.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Family Trust Elections (FTE) & IEE",
      desc: "Trusts with a valid FTE are generally excepted from ownership and control tests, although income injection tests can apply. Election status affects family-group distribution boundaries.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "CGT & Trust Variation Guidance",
      desc: "Changing an appointor does not automatically trigger a CGT event. However, if part of a wider deed amendment that materially alters trust relationships, broader tax impacts must be evaluated.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Integrity & Control
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tax and control issues to review before an appointor change
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An appointor change is not simply an administrative contact update. For an ordinary non-fixed trust, a
            change in the appointor or guardian may be relevant when considering whether control has changed for trust
            loss purposes. A trust with a valid family trust election is generally excepted from the ownership and
            control tests, although the income injection test can still apply in some circumstances. The trust type,
            election status and wider control arrangements should be checked where losses or debt deductions are
            relevant.
          </p>
        </div>

        {/* 3 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {issues.map((item, idx) => (
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

        {/* Verbatim In-Depth Explanatory Box */}
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0 mt-0.5">
              <InfoCircleOutlined className="text-lg text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Tax History & Multi-Entity Context
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The trust&apos;s broader tax history should also be checked, including whether a family trust election
                or interposed entity election is in force, whether there are accumulated tax losses, and whether
                trustees, corporate trustee ownership, beneficiaries or deed terms are changing at the same time.
                Election status can affect which trust loss rules apply and can create separate family-group and
                distribution consequences. A change may therefore be unremarkable in one trust but material in
                another.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Changing an appointor does not automatically mean a CGT event occurs. However, if the appointor change is
              part of a wider deed amendment or restructure that materially changes trust relationships or ownership,
              the broader tax consequences should be reviewed. ATO guidance on trust variations confirms that the
              effect of an amendment, not just its label, is important.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
