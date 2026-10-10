"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  FileProtectOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * GstWithholdingAtSettlement Component
 * ====================================
 * Section: How does GST withholding at settlement work?
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function GstWithholdingAtSettlement() {
  const withholdingSteps = [
    {
      step: "01",
      title: "Supplier Written Notification",
      desc: "Vendor serves formal written notice before settlement stating whether withholding is required, supplier ABN, and withholding amount.",
    },
    {
      step: "02",
      title: "Purchaser Lodges Form 1",
      desc: "Purchaser submits ATO Form 1 (GST property settlement notification) to generate a Payment Reference Number (PRN).",
    },
    {
      step: "03",
      title: "Withholding at Settlement",
      desc: "Purchaser withholds 1/11th of contract price (or 7% under margin scheme), remits to the ATO, and provides receipt to vendor.",
    },
    {
      step: "04",
      title: "Vendor BAS Reconciliation",
      desc: "Supplier reports the full sale and gross GST on their Business Activity Statement and receives credit for the amount withheld.",
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
            Settlement Mechanics
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Does GST Withholding at Settlement Work?
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <BankOutlined />
              <span>Direct Remittance to the ATO</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Purchasers of certain new residential premises and potential residential land must withhold an amount from the contract price and pay it directly to the ATO. The purchaser pays the remaining balance to the supplier. The withholding amount depends on the transaction and whether the margin scheme applies; it is not necessarily the supplier's final GST liability.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <FileProtectOutlined />
              <span>Supplier Notification &amp; BAS Reconciliation</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Suppliers of residential premises or potential residential land must generally notify the purchaser in writing whether withholding is required and, when it is, provide the prescribed information. The supplier still reports the taxable sale in its activity statement and receives credit for the amount withheld.
            </p>
          </div>
        </div>

        {/* 4 Process Workflow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {withholdingSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-800 shadow-2xs hover:border-emerald-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-black text-emerald-600/40 dark:text-emerald-400/40 block mb-2">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
