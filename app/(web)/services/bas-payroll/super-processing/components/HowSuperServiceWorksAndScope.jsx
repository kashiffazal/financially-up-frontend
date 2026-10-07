"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  FileDoneOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * HowSuperServiceWorksAndScope Component
 * Covers 'How our super processing service works' from Page 11 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function HowSuperServiceWorksAndScope() {
  const steps = [
    {
      num: "01",
      title: "Current Process Review",
      desc: "We first confirm how payroll is processed, what super payment system the business uses and where the current pain points are.",
      icon: <SearchOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      num: "02",
      title: "Agreed Service Scope",
      desc: "We then agree the service scope, which may be recurring superannuation administration, contribution reconciliation, support with exceptions, or a combination of these.",
      icon: <FileDoneOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      num: "03",
      title: "Payroll Cycle Integration",
      desc: "For ongoing clients, the process can be aligned with the normal payroll cycle so that super contribution information is reviewed and processed promptly.",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Workflow Structure
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How our super processing service works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Whether you need help transitioning away from the retired ATO clearing house or ongoing Payday Super execution, our workflow is customized to your operational structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Employer Compliance */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Need a broader review of your employer obligations?
            </h4>
            <p className="text-sm text-slate-600 dark:text-zinc-300">
              Where wider employer compliance issues are identified, our Employer Compliance service can provide a broader review of payroll records, STP, PAYG, super and related controls.
            </p>
          </div>

          <Link
            href="/services/bas-payroll/employer-compliance"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm font-semibold text-brand-primary dark:text-emerald-400 hover:border-emerald-500 transition-colors shadow-xs shrink-0"
          >
            Employer Compliance
            <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}
