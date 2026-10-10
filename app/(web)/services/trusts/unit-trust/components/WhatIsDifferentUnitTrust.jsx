"use client";

import React from "react";
import { Tag } from "antd";
import {
  ApartmentOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsDifferentUnitTrust Component
 * ==================================
 * Section: What is different about accounting for a unit trust?
 * Verbatim text from Page 3 of client docx (8th Pillar Trust Services.docx).
 * Explains unit-based beneficial interests, the unit register, and why a unit trust
 * is not automatically a fixed trust for tax purposes.
 */
export default function WhatIsDifferentUnitTrust() {
  const distinctions = [
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Units Represent Beneficial Interests",
      desc: "Unlike a discretionary trust where trustee discretion decides annual distribution shares, a unit trust divides beneficial ownership into fixed units or distinct unit classes.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Unit Register & Ownership Documentation",
      desc: "The unit register, unit subscription agreements, transfer deeds, redemptions, and rights attached to each unit class represent essential statutory and accounting records.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Deed-Based Accounting Analysis",
      desc: "Accounting must reflect the specific terms of the trust deed and actual transactions rather than relying on generic assumptions about profit, loss, or capital allocation.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Structural Distinctions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is different about accounting for a unit trust?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Unlike a discretionary trust, a unit trust generally uses units to represent beneficial interests. That
            makes the unit register, unit issues, transfers, redemptions and the rights attached to each class of units
            important records. However, the label “unit trust” does not by itself determine every tax outcome, and a
            unit trust is not automatically a fixed trust for all tax-law purposes.
          </p>
        </div>

        {/* 3 Distinctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {distinctions.map((item, idx) => (
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

        {/* Verbatim Core Principle Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Actual Deed Terms Rule Over Generic Templates
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Accounting should therefore be based on the deed and actual transactions rather than a generic assumption
              about how profits or capital are shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
