"use client";

import React from "react";
import { Tag } from "antd";
import {
  LineChartOutlined,
  BuildOutlined,
  SafetyCertificateOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * CapitalWorksDepreciation Component
 * ==================================
 * Section: Capital works, depreciating assets and records.
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function CapitalWorksDepreciation() {
  const depreciationStreams = [
    {
      badge: "Division 43",
      title: "Capital Works Deductions",
      rate: "2.5% to 4.0% per annum",
      description:
        "Deductions claimed over 25 or 40 years for the structural construction costs of a building, extensions, structural alterations, and permanent improvements.",
      details: [
        "Residential properties commenced after 15 September 1987",
        "Structural renovations (retaining walls, driveways, new rooms)",
        "Reduces the CGT cost base when the property is sold",
      ],
    },
    {
      badge: "Division 40",
      title: "Depreciating Assets (Plant & Equipment)",
      rate: "Effective life decline-in-value",
      description:
        "Mechanical and removable items with an effective life (e.g. ovens, dishwashers, air conditioners, carpets, blinds, hot water systems).",
      details: [
        "Diminishing value or prime cost depreciation methods",
        "Restrictions apply to second-hand assets acquired from 9 May 2017",
        "Low-value pooling eligible for assets under statutory limits",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Asset Write-Offs &amp; Depreciation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Capital Works, Depreciating Assets and Records
          </h2>
          {/* Verbatim text from official document */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Some construction expenditure may be deductible over time as capital works. Certain depreciating assets can also be dealt with under decline-in-value rules, although restrictions can apply to second-hand assets in residential rental properties. These rules differ from immediate rental deductions.
          </p>
        </div>

        {/* 2 Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {depreciationStreams.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Tag color="cyan" className="text-xs font-bold uppercase tracking-wider">
                  {item.badge}
                </Tag>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.rate}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                {item.description}
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-zinc-800">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Banner */}
        <div className="bg-slate-50/90 dark:bg-zinc-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <InfoCircleOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
              Quantity Surveyor Schedule Application
            </span>
            {/* Verbatim copy from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              A depreciation or quantity-surveyor report can be useful in appropriate circumstances, but it should be applied together with the actual tax rules and property history rather than treated as a substitute for reviewing the records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
