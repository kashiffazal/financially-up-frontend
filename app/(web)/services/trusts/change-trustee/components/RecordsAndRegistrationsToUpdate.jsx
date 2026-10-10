"use client";

import React from "react";
import { Tag } from "antd";
import {
  BookOutlined,
  BankOutlined,
  LineChartOutlined,
  HomeOutlined,
  AuditOutlined,
  FileProtectOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * RecordsAndRegistrationsToUpdate Component
 * =========================================
 * Section: What records and registrations may need updating?
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Covers practical updates across banks, ABR/ATO 28-day rule, land titles,
 * share registries, accounting ledgers, and corporate registers.
 */
export default function RecordsAndRegistrationsToUpdate() {
  const checklist = [
    {
      icon: <BookOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Accounting Records",
      desc: "trust accounting records and trustee name details",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Bank & Financing Accounts",
      desc: "bank and finance accounts",
    },
    {
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Share & Investment Registries",
      desc: "share registries or investment platforms",
    },
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Property Land Titles",
      desc: "property titles and related records where applicable",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "ABN, GST & PAYG Registrations",
      desc: "ABN, GST, PAYG or other registration information where the recorded trustee details need updating",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "ASIC Corporate Records",
      desc: "corporate records if the incoming or outgoing trustee is a company.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practical Implementation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records and registrations may need updating?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            After the legal appointment takes effect, the practical work can extend beyond the trust deed. Depending on
            the assets and activities of the trust, records may need to be updated with banks, investment platforms, land
            registries, insurers, suppliers, lenders, the ABR, the ATO and other relevant parties. Registered business
            details, including trustee or associate details, generally need to be updated within 28 days of the change.
          </p>
        </div>

        {/* 6 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {checklist.map((item, idx) => (
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
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal capitalize-first">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim 28-Day & Certified Document Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <ClockCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Jurisdictional Requirements & Certified Documentation
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The exact update process depends on the asset, registration and jurisdiction. Some changes may require
              evidence of the deed or certified documents. Legal or conveyancing assistance may be needed for
              property-title work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
