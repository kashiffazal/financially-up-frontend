"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  SolutionOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsGst Component
 * Covers 'How Financially Up can help'
 * from Page 3 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function HowFinanciallyUpHelpsGst() {
  const services = [
    "Review whether compulsory or voluntary registration needs to be considered",
    "Assist with completing GST registration details",
    "Help identify an appropriate registration date based on the circumstances",
    "Explain the practical effect on invoicing, records and BAS reporting",
    "Coordinate bookkeeping or BAS support after registration",
    "Identify transactions that may require separately scoped GST or tax advice",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <CompassOutlined className="mr-1.5" />
            Professional Support
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How Financially Up can help
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can provide GST registration services Australia-wide for businesses that need help with registration and the compliance steps that follow. The service can include reviewing the available facts, assisting with the registration process and helping configure the accounting and BAS workflow at a practical level.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined />
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug pt-1">
                {service}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
