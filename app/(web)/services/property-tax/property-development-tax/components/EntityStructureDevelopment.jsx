"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  BranchesOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * EntityStructureDevelopment Component
 * ====================================
 * Section: Entity structure and development projects.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function EntityStructureDevelopment() {
  const structureTypes = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Special-Purpose Company",
      description: "Caps legal liability to the project entity, taxes corporate profits at 25% or 30%, but does not pass through tax losses or capital gains discounts.",
      tag: "Asset Protection",
    },
    {
      icon: <BranchesOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Unit Trust / Discretionary Trust",
      description: "Allows streaming of net project profits to unitholders or family beneficiaries, but losses cannot be distributed and land tax surcharges may apply.",
      tag: "Profit Streaming",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Development Joint Venture (JV)",
      description: "Landowner partners with a builder/developer where each party accounts for their own revenue, expenditure, and GST separately.",
      tag: "Developer & Landowner",
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
            Structuring &amp; Ownership
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Entity Structure and Development Projects
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Tax, Risk &amp; Financing Consequences</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Developments are often undertaken through companies, trusts, partnerships or special-purpose entities. The entity affects accounting, income tax, GST, distributions, financing and ongoing compliance. It can also affect legal risk and commercial arrangements, which may require separate legal advice.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <SafetyCertificateOutlined />
                <span>Pre-Contract Advice Scope</span>
              </div>
              {/* Verbatim text from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Financially Up can explain tax and accounting implications within scope. If the project requires broader Business Structure Advice or legal structuring, that work should be dealt with before contracts and ownership arrangements are finalized.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link href="/services/business-structures">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Business Structure Advice <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Structure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {structureTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color="cyan" className="text-[11px] font-semibold uppercase">
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
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
