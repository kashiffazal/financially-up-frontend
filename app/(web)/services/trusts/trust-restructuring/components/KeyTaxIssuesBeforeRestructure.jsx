"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarCircleOutlined,
  AuditOutlined,
  FileProtectOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * KeyTaxIssuesBeforeRestructure Component
 * =======================================
 * Section: Key tax issues before a trust restructure
 * Verbatim text from Page 7 of client docx (8th Pillar Trust Services.docx).
 * Covers non-cash tax consequences, trust loss rules, Family Trust Elections (FTE),
 * income injection test, asset movements, and duty specialist requirements.
 */
export default function KeyTaxIssuesBeforeRestructure() {
  const taxAspects = [
    {
      icon: <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Comprehensive Tax Impact Assessment",
      desc: "Reviewing capital gains tax (CGT), revenue consequences, GST, cost bases, and beneficiary tax positions even where no cash changes hands.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Trust Loss Rules & Control Tests",
      desc: "For non-fixed trusts, changes to trustees, appointers, guardians, or beneficiaries affect control tests. Trusts with an FTE require review of income injection test risks.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Asset Movements & Stamp Duty Scope",
      desc: "Moving assets or altering beneficial interests triggers transaction taxes and state duty. We address tax and accounting while coordinating with legal specialists.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Due Diligence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key tax issues before a trust restructure
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trust restructure can create tax consequences even where there is no immediate cash payment. Depending on
            the change, the review may need to consider capital gains tax, revenue consequences, GST, trust loss rules,
            family trust election issues, cost bases, asset ownership and the tax position of beneficiaries or related
            entities.
          </p>
        </div>

        {/* 3 Tax Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {taxAspects.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Explanatory Boxes */}
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0 mt-0.5">
              <InfoCircleOutlined className="text-lg text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Control Tests, Trust Losses & Family Trust Elections (FTE)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For an ordinary non-fixed trust, changes to trustees, appointers or guardians, corporate trustee
                ownership, beneficiaries, deed terms or unit holdings may be relevant when considering whether control
                has changed for the trust loss rules. A trust with a valid family trust election is generally an
                excepted trust for the ownership and control tests, although the income injection test can still apply
                in some circumstances. The trust type, election status and tax history should therefore be checked
                rather than assuming every change has the same effect.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-sm">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If the restructure involves moving assets between entities or creating materially different beneficial
              interests, transaction taxes and state or territory duties may also need specialist review. Financially Up
              can address tax and accounting matters within scope, while legal documents and duty advice may require an
              appropriately qualified legal adviser or other specialist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
