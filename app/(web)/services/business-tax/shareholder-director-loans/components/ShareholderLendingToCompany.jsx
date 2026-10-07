"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyOutlined,
  DollarOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ShareholderLendingToCompany Component
 * =====================================
 * Section: What if the shareholder lends money to the company?
 * Verbatim text from Page 10 of client docx.
 * Explains:
 * - Genuine personal loans introduced to the company
 * - Why Division 7A does not treat shareholder-to-company loans as deemed dividends
 * - Accounting clarity: who advanced funds, balance outstanding, interest terms & repayments
 * - Tax and reporting consequences of interest paid by the company.
 */
export default function ShareholderLendingToCompany() {
  const accountingPoints = [
    {
      icon: <SafetyOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Division 7A Exemption for Inbound Loans",
      desc: "Division 7A is principally concerned with private-company benefits provided to shareholders or associates, so a genuine loan from a shareholder to the company is not treated in the same way.",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Accounting Records & Substantiation",
      desc: "Even so, the accounting records should clearly show who advanced the funds, the balance outstanding, any interest terms and repayments.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Interest Treatment & Reporting",
      desc: "Interest paid by the company can have separate tax and reporting consequences, depending on the arrangement, including company tax deductibility and assessable income for the recipient.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Inbound Capital & Credit Accounts
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if the shareholder lends money to the company?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A shareholder lending personal funds to the company is a different situation from the company lending to the shareholder. Division 7A is principally concerned with private-company benefits provided to shareholders or associates, so a genuine loan from a shareholder to the company is not treated in the same way.
          </p>
        </div>

        {/* 3 Accounting Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {accountingPoints.map((item, idx) => (
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
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Concluding Note */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Maintain Accurate Credit Account Ledgers
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Even so, the accounting records should clearly show who advanced the funds, the balance outstanding, any interest terms and repayments. Interest paid by the company can have separate tax and reporting consequences, depending on the arrangement.
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
                Reconcile Shareholder Loans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
