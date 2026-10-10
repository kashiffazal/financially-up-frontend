"use client";

import React from "react";
import { Tag } from "antd";
import {
  RiseOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesTrustRestructuringInvolve Component
 * ===========================================
 * Section: What does trust restructuring involve?
 * Verbatim text from Page 7 of client docx (8th Pillar Trust Services.docx).
 * Explains narrow vs broad restructuring, legal and economic effect over labels,
 * and ATO guidance on trust variations and CGT events.
 */
export default function WhatDoesTrustRestructuringInvolve() {
  const aspects = [
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Scope of Restructuring",
      desc: "Trust restructuring means changing an existing trust arrangement rather than simply completing its annual tax return. The work may be narrow — such as replacing a trustee — or broader, such as changing control, ownership interests or the way a family group holds assets.",
    },
    {
      icon: <RiseOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Legal & Economic Effect",
      desc: "For tax purposes, the important question is not the label placed on the change but its legal and economic effect. A valid amendment made under an existing power does not automatically create a new trust, but changes can have different tax consequences.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Deed Power Verification",
      desc: "Outcomes depend on the trust deed, the scope of the amending power, and the effect on trust relationships. Legal advice may be required to confirm that a proposed deed amendment is valid.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Core Concept
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does trust restructuring involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust restructuring means changing an existing trust arrangement rather than simply completing its annual
            tax return. The work may be narrow — such as replacing a trustee — or broader, such as changing control,
            ownership interests or the way a family group holds assets.
          </p>
        </div>

        {/* 3 Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {aspects.map((item, idx) => (
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

        {/* Verbatim ATO Guidance Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Substance and Legal Reality Drive Tax Treatment
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For tax purposes, the important question is not the label placed on the change but its legal and economic
              effect. The ATO has published guidance on trust variations and CGT events. A valid amendment made under
              an existing power does not automatically create a new trust, but some changes can have different
              consequences depending on the deed, the scope of the power and the effect on trust relationships. Legal
              advice may be required to confirm that a proposed deed amendment is valid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
