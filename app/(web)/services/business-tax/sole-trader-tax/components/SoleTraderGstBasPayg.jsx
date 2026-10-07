"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * SoleTraderGstBasPayg Component
 * ==============================
 * Section: GST, BAS and PAYG Considerations
 * Features 100% complete, verbatim content from Page 5 of client docx.
 * Covers GST thresholds, quarterly BAS, PAYG instalments, and employer obligations.
 */
export default function SoleTraderGstBasPayg() {
  const compliancePillars = [
    {
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "GST Registration & BAS Lodgment",
      desc: "A sole trader may need to register for GST when the relevant registration requirements are met, or may choose to register in some circumstances. Once registered, GST and BAS obligations need to be managed separately from the annual income tax return.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "PAYG Instalments (PAYGI)",
      desc: "PAYG instalments may also apply depending on the taxpayer’s circumstances. Pre-paying tax across quarterly activity statements avoids unexpected year-end tax liabilities when business profits increase.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Staff, Payroll & Superannuation",
      desc: "If you employ staff, payroll, PAYG withholding and superannuation obligations may arise. Single Touch Payroll (STP) reporting and timely super guarantee payments are mandatory statutory employer requirements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Indirect Taxes &amp; Employers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GST, BAS and PAYG Considerations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A sole trader may need to register for GST when the relevant registration requirements are met, or may choose to register in some circumstances. Once registered, GST and BAS obligations need to be managed separately from the annual income tax return.
          </p>
        </div>

        {/* 3 Compliance Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {compliancePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Compliance Approach */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
              Tailored to Your Exact Business Requirements
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can help identify which accounting and tax compliance work is relevant to your business, rather than treating every sole trader as having the same obligations.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss BAS &amp; Registrations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
