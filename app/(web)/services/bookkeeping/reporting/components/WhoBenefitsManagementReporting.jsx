"use client";

import React from "react";
import { Tag } from "antd";
import {
  TeamOutlined,
  LineChartOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  AimOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsManagementReporting Component
 * Covers 'Who may benefit from regular business financial reporting?'
 * from Page 9 of 4th Pillar Bookkeeping.docx.
 */
export default function WhoBenefitsManagementReporting() {
  const beneficiaryProfiles = [
    {
      icon: <LineChartOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Growing Businesses Seeking Cash Visibility",
      description: "Growing businesses that need more visibility over profitability and cash to manage working capital and scale sustainably.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "Recurring Monthly or Quarterly Information",
      description: "Owners who want recurring monthly or quarterly management information rather than waiting until annual tax return time.",
    },
    {
      icon: <AppstoreOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Multiple Revenue Streams & Cost Categories",
      description: "Businesses with several revenue streams or complex cost categories requiring granular tracking by project or division.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-indigo-600 dark:text-indigo-400" />,
      title: "Director & Management Governance",
      description: "Companies that need clearer internal financial information for directors, board members, or executive managers.",
    },
    {
      icon: <AimOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Budgeting & Variance Analysis",
      description: "Businesses preparing annual budgets or comparing actual month-by-month results against pre-set financial targets.",
    },
    {
      icon: <BankOutlined className="text-2xl text-violet-600 dark:text-violet-400" />,
      title: "Stakeholder, Advisor & Lender Reporting",
      description: "Owners working with commercial lenders, external advisers, or prospective investors who require organized financial packs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tag color="green" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <TeamOutlined className="mr-1.5" />
            Strategic Alignment
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Who may benefit from regular business financial reporting?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            Regular reporting can be useful once a business has outgrown relying on the bank balance alone to judge performance. It can also help owners who need a clearer view of margins, overheads, customer balances, liabilities or trends across several months.
          </p>
        </div>

        {/* 6 Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficiaryProfiles.map((profile, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-6">
                  {profile.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {profile.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
