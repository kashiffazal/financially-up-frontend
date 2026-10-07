"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * ChecklistBeforeBusinessNameRegistration Component
 * Covers 'What should be checked before ASIC business name registration?'
 * from Page 4 of 6th Pillar Business Structures.docx.
 */
export default function ChecklistBeforeBusinessNameRegistration() {
  const checkItems = [
    "Confirm the business structure that will operate under the name.",
    "Check whether the entity already has an ABN or has applied for one.",
    "Check the proposed name against ASIC’s business names register and consider trade mark availability separately.",
    "Confirm the correct business name holder and contact details.",
    "Consider whether the name will be used with other brands or business names linked to the same ABN.",
    "Review whether other registrations, such as GST, may be required based on the business circumstances.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Pre-Filing Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What should be checked before ASIC business name registration?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Before you register a business name, it is useful to confirm the legal entity that will operate the business. The holder might be an individual, partnership, company or trust trustee. The structure affects the registrations, tax obligations, ownership and ongoing administration that follow.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {checkItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-4 hover:border-emerald-400/60 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-base" />
              </div>
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Contextual Link */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Still deciding on the underlying business structure?
            </h4>
            <p className="text-sm text-slate-600 dark:text-zinc-300">
              Our business structure advice page can help you compare practical structure considerations before the name is registered to the wrong holder.
            </p>
          </div>

          <Link
            href="/services/business-structures/business-structure-advice"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold shadow-xs shrink-0 transition-all"
          >
            Business Structure Advice
            <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}
