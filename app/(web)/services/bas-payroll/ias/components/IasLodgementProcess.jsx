"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  FolderOpenOutlined,
  SyncOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  RiseOutlined,
} from "@ant-design/icons";

/**
 * IasLodgementProcess Component
 * Covers 'Our IAS lodgement process'
 * from Page 7 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function IasLodgementProcess() {
  const steps = [
    {
      num: "01",
      title: "Confirm Reporting Period & Obligations",
      desc: "Confirm the reporting period and obligations shown on the IAS.",
      icon: <FileSearchOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      num: "02",
      title: "Collect Supporting Records",
      desc: "Collect the records needed for the relevant labels.",
      icon: <FolderOpenOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      num: "03",
      title: "Reconcile Figures & Identify Gaps",
      desc: "Reconcile the figures and identify missing or unusual items.",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      num: "04",
      title: "Prepare IAS & Discuss Issues",
      desc: "Prepare the IAS and discuss material issues that need clarification.",
      icon: <AuditOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />,
    },
    {
      num: "05",
      title: "Lodge With ATO Authorization",
      desc: "Lodge the statement once the information is complete and authorized.",
      icon: <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      num: "06",
      title: "Identify Follow-Up Work",
      desc: "Where requested, identify any follow-up bookkeeping, payroll or tax work that should be addressed.",
      icon: <RiseOutlined className="text-amber-600 dark:text-amber-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Step-by-Step Delivery
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Our IAS lodgement process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We follow a structured, compliant process that ensures every Instalment Activity Statement is fully reconciled with your accounting and payroll records before submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center">
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

      </div>
    </section>
  );
}
