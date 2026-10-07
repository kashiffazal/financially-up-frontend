"use client";

import React from "react";
import {
  ApartmentOutlined,
  CompassOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatBusinessStructureAdviceInvolves Component
 * =============================================
 * Section 1: Detailed explanation of business structure advice,
 * core Australian structures, and commercial alignment principles.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function WhatBusinessStructureAdviceInvolves() {
  const corePrinciples = [
    {
      icon: <ApartmentOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Legal & Operational Identity",
      description:
        "A business structure determines who owns and operates the business and affects tax obligations, registrations, legal responsibilities and administration.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Commercial Alignment",
      description:
        "A business structure adviser can help compare these options against your commercial circumstances. The purpose is not to select a structure based on one tax rate or one perceived benefit.",
    },
    {
      icon: <FileProtectOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "Combined Impact Analysis",
      description:
        "It is to understand the combined tax, compliance, control and practical consequences before you establish or change the business.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Recognised Australian Forms",
      description:
        "Common Australian structures include sole trader, partnership, company and trust, each carrying distinct regulatory, legal and accounting frameworks.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Advisory Scope &amp; Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Does Business Structure Advice Involve?
          </h2>
        </div>

        {/* Verbatim Content Body */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed text-center sm:text-left">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            A business structure determines who owns and operates the business and affects tax obligations, registrations, legal responsibilities and administration. Common Australian structures include sole trader, partnership, company and trust.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            A business structure adviser can help compare these options against your commercial circumstances. The purpose is not to select a structure based on one tax rate or one perceived benefit; it is to understand the combined tax, compliance, control and practical consequences before you establish or change the business.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-5 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
