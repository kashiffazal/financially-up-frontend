"use client";

import React from "react";
import { Tag } from "antd";
import {
  TeamOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsBankReconciliation Component
 * Covers 'Who may need outsourced bank reconciliation?'
 * from Page 8 of 4th Pillar Bookkeeping.docx.
 */
export default function WhoNeedsBankReconciliation() {
  const situations = [
    {
      icon: <ClockCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Time-Constrained Business Owners",
      description: "Business owners who have active, current transactions but lack the continuous time needed to keep all accounts reconciled every week or month.",
    },
    {
      icon: <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Backlogged or Unexplained Balances",
      description: "Businesses whose books have fallen behind schedule or contain unexplained differences between bank feeds, statements, and the general ledger balance.",
    },
    {
      icon: <AppstoreOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Multiple Accounts & Gateways",
      description: "Enterprises operating across multiple trading accounts, credit card facilities, POS terminals, and digital payment gateways such as Stripe, PayPal, or Square.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tag color="green" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <TeamOutlined className="mr-1.5" />
            Target Scenarios
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Who may need outsourced bank reconciliation?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            Outsourced bank reconciliation can suit business owners who have current transactions but do not have time to keep accounts reconciled, as well as businesses whose books have fallen behind or contain unexplained differences.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            It can be particularly helpful where a business has several bank accounts, credit cards, payment gateways or merchant facilities. The more sources of cash activity a business uses, the more important it becomes to have a repeatable reconciliation process.
          </p>
        </div>

        {/* 3 Key Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
