"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsGrants Component
 * =====================================
 * Section: How Financially Up Can Help
 * Verbatim text from Page 4 of 15th Pillar R&D Tax Incentive docx.
 */
export default function HowFinanciallyUpHelpsGrants() {
  const serviceList = [
    "initial grant and project suitability review",
    "eligibility, guideline and assessment-criteria review",
    "application planning and information checklists",
    "financial information and project budget support",
    "drafting and refining application responses",
    "reviewing supporting documents for consistency",
    "pre-submission review and practical portal-readiness checks",
    "accounting support relating to grant funding where separately agreed",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Structured Assistance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our government grant application services provide structured support without implying
            that an application will be approved.
          </p>
        </div>

        {/* 8 Bullet Items in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {serviceList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5 hover:border-emerald-500/40 transition-colors"
            >
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-base" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 block mb-0.5">
                  Service Capability 0{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white capitalize">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Specialist Boundary Alert */}
        <div className="bg-slate-100/70 dark:bg-zinc-800/40 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-200/80 dark:bg-zinc-700 flex items-center justify-center shrink-0 text-slate-700 dark:text-zinc-200">
            <AlertOutlined className="text-lg" />
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
            <strong className="font-semibold text-slate-900 dark:text-white">
              Specialist Advisory Demarcation:
            </strong>{" "}
            Where legal, engineering, scientific, technical or other specialist evidence is required, the applicant may need input from an appropriately qualified adviser. Professional grant support is not a substitute for evidence the guidelines require from another specialist.
          </p>
        </div>
      </div>
    </section>
  );
}
