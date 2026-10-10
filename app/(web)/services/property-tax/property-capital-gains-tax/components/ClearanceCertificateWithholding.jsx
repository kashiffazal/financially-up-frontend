"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  AlertOutlined,
  FileProtectOutlined,
  PercentageOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ClearanceCertificateWithholding Component
 * =========================================
 * Section: Do Australian resident sellers need a clearance certificate?
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function ClearanceCertificateWithholding() {
  const clearanceHighlights = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Mandatory from 1 January 2025",
      description: "Applies to ALL Australian real property transactions with no statutory threshold exemption unless a specific exception applies.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "15% Mandatory Withholding",
      description: "Without a clearance certificate presented prior to settlement, purchasers MUST withhold 15% of the purchase price directly to the ATO.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Collection Mechanism, Not Tax",
      description: "Withholding is a non-final collection mechanism. Any excess withheld is credited upon lodging the relevant Australian income tax return.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Foreign Vendor Variations",
      description: "Non-resident sellers can apply for an ATO Variation Notice if the anticipated capital gain is minimal or if they face a capital loss.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="red"
            className="mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Crucial 2025+ Statutory Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Do Australian Resident Sellers Need a Clearance Certificate?
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Mandatory Clearance Certificate from 1 Jan 2025</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Yes. For contracts signed from 1 January 2025, foreign resident capital gains withholding applies to all Australian real-property sales unless an exception applies. Each Australian resident vendor should obtain a valid ATO clearance certificate and give it to the purchaser at or before settlement.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-4">
              <AlertOutlined />
              <span>15% Withholding &amp; Variation Applications</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Without a valid clearance certificate, the purchaser is generally required to withhold 15% of the sale proceeds, or market value for a non-arm's-length transaction, and pay it to the ATO. Withholding is a collection mechanism, not the final CGT calculation. Foreign resident vendors may instead seek a variation where appropriate and claim credit for amounts withheld through their tax return.
            </p>
          </div>
        </div>

        {/* 4 Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clearanceHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-800 hover:border-emerald-400/50 transition-all shadow-2xs"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
