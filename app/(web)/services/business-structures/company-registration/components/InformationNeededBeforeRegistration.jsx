"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  IdcardOutlined,
  HomeOutlined,
  TeamOutlined,
  ApartmentOutlined,
  BookOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededBeforeRegistration Component
 * Covers 'What information is needed before you register a company?'
 * from Page 2 of 6th Pillar Business Structures.docx.
 */
export default function InformationNeededBeforeRegistration() {
  const requirements = [
    {
      title: "Company Name or ACN",
      desc: "Proposed company name, or whether the ACN will be used as the company name",
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Registered & Operating Addresses",
      desc: "Registered office and principal place of business addresses",
      icon: <HomeOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Proposed Officeholders",
      desc: "Full details of proposed directors and any secretary",
      icon: <TeamOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Director ID Obligations",
      desc: "Director identification number requirements",
      icon: <IdcardOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "Shareholders & Share Structure",
      desc: "Shareholder details, share classes and the number of shares to be issued",
      icon: <ApartmentOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      title: "Governance Rules",
      desc: "Whether the company will use replaceable rules, a constitution, or a combination where appropriate",
      icon: <BookOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Pre-Incorporation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What information is needed before you register a company?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact information depends on the proposed company, but a typical proprietary company registration requires decisions about the company name, registered state or territory, registered office, principal place of business, officeholders, shareholders and share structure.
          </p>
        </div>

        {/* 6 Grid Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {requirements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ASIC Consent & Director ID Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <WarningOutlined className="text-xl" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Mandatory Written Consents & Director ID
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                ASIC requires a company to obtain and keep written and signed consent before a person becomes a director or secretary. Proposed directors must also apply for a director ID before appointment. The company must obtain written consent from each proposed member confirming the number and class of shares to be owned and the amount to be paid. These requirements should be addressed as part of the setup rather than treated as an afterthought.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
