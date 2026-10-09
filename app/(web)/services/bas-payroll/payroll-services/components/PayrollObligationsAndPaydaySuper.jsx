"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  SendOutlined,
  FileDoneOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

/**
 * PayrollObligationsAndPaydaySuper Component
 * Covers 'Payroll Processing and Employer Obligations' including
 * Fair Work 1-day pay slips, 7-year records, and Payday Super 1 July 2026 rules
 * from Page 4 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PayrollObligationsAndPaydaySuper() {
  const obligations = [
    {
      icon: (
        <SendOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "STP Pay-Event Lodgement",
      desc: "STP pay events generally need to be reported on or before payday, subject to applicable concessions.",
    },
    {
      icon: (
        <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Fair Work Pay Slip Delivery",
      desc: "Under Fair Work requirements, employees must generally receive a pay slip within one working day of being paid.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Seven-Year Record Retention",
      desc: "Prescribed employee time, wage, overtime, leave, and superannuation records must generally be kept for seven years.",
    },
    {
      icon: (
        <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Payday Super (From 1 July 2026)",
      desc: "Requires super guarantee contributions to be received by the employee's super fund within seven business days of payday, subject to applicable exceptions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag
            color="volcano"
            className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs"
          >
            <SafetyCertificateOutlined className="mr-1.5" />
            Statutory Framework
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Payroll Processing and Employer Obligations
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian employers may have obligations relating to PAYG
            withholding, Single Touch Payroll, superannuation, employee records
            and pay slips. The requirements that apply depend on the worker,
            payment type and employer circumstances.
          </p>
        </div>

        {/* 4 Statutory Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {obligations.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card for Single Touch Payroll */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 dark:from-zinc-800/80 dark:via-zinc-900 dark:to-zinc-800/60 border border-emerald-200/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
              <ThunderboltOutlined />
              Dedicated STP Phase 2 Guidance
            </div>
            <p className="text-base text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
              For dedicated assistance with payroll reporting and electronic ATO
              lodgements, explore our specialized Single Touch Payroll services
              page.
            </p>
          </div>
          <Link href="/services/bas-payroll/stp">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Explore STP Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
