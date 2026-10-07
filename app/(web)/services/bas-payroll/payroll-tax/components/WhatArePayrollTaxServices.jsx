"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  RiseOutlined,
  GlobalOutlined,
  ApartmentOutlined,
  UsergroupAddOutlined,
  HistoryOutlined,
  CalendarOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatArePayrollTaxServices Component
 * Covers 'What do payroll tax services include?' and 'Who may need payroll tax advice?'
 * from Page 9 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatArePayrollTaxServices() {
  const taxpayerScenarios = [
    {
      title: "Approaching State Thresholds",
      desc: "Growing employers approaching a state or territory payroll tax threshold.",
      icon: <RiseOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      title: "Multi-Jurisdiction Operations",
      desc: "Businesses with employees or taxable wages across multiple jurisdictions.",
      icon: <GlobalOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      title: "Grouped Related Entities",
      desc: "Groups of related businesses that may be affected by payroll tax grouping rules.",
      icon: <ApartmentOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      title: "Contractor Workforce Use",
      desc: "Employers using contractors where particular payments may fall within payroll tax provisions.",
      icon: <UsergroupAddOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />,
    },
    {
      title: "Overdue Registrations & Returns",
      desc: "Businesses that need help with overdue registrations or historical returns.",
      icon: <HistoryOutlined className="text-amber-600 dark:text-amber-400 text-xl" />,
    },
    {
      title: "Annual Reconciliations",
      desc: "Employers preparing for an annual reconciliation or reviewing year-end payroll tax data.",
      icon: <CalendarOutlined className="text-purple-600 dark:text-purple-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What do payroll tax services include? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="purple" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <BankOutlined className="mr-1.5" />
              State & Territory Taxes
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What do payroll tax services include?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Payroll tax services involve reviewing whether a business has a payroll tax obligation in one or more states or territories, determining which payments form part of taxable wages under the relevant rules, preparing periodic or annual returns, and reconciling the reported amounts back to payroll and accounting records.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Because payroll tax is administered separately by each state and territory, a payroll tax accountant needs to consider where wages are connected, the business’s total Australian wages, grouping rules, exemptions and the reporting rules of the relevant revenue office.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400">
                <AuditOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  State-Specific Rules
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Unlike federal taxes managed by the ATO, payroll tax is levied by State Revenue Offices (e.g. Revenue NSW, SRO Victoria, QRO). Each state sets unique tax thresholds, rates, nexus provisions, and grouping requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Who may need payroll tax advice? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Who may need payroll tax advice?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Payroll tax becomes more important as an employer’s total wage bill grows. A business may also need a review when it hires employees in another state, acquires another entity, changes group structure, increases contractor use or starts paying larger amounts of bonuses, allowances or fringe benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxpayerScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-purple-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
