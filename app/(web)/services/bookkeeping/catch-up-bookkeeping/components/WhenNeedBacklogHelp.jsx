"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  FolderOpenOutlined,
  SwapOutlined,
  LineChartOutlined,
  FileDoneOutlined,
  DesktopOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenNeedBacklogHelp Component
 * =============================
 * Section 2: When Might a Business Need Bookkeeping Backlog Help?
 * Features 100% complete, verbatim content from Page 4 of client docx.
 */
export default function WhenNeedBacklogHelp() {
  const triggerScenarios = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Several weeks or months of bank and credit-card transactions have not been reconciled.",
      desc: "Electronic bank lines have accumulated without ledger verification, creating uncertainty around true cash position.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Supplier bills, receipts or customer payments are sitting outside the accounting system.",
      desc: "Physical receipts or inbox attachments remain unentered, leading to incomplete accounts payable and debtor figures.",
    },
    {
      icon: <SwapOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "The business has changed bookkeepers, accountants or accounting software.",
      desc: "Handover gaps, disrupted software migrations, or staff departures have left transactions unattended across months.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Management reports cannot be relied on because recent transactions are missing.",
      desc: "Profit and loss figures are incomplete, preventing confident cash budgeting or commercial decision-making.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "A BAS, tax return, finance application or year-end process requires more complete records.",
      desc: "Approaching statutory ATO lodgement deadlines or bank finance applications demand fully balanced, verified accounts.",
    },
    {
      icon: <DesktopOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "The owner has been maintaining records manually and now needs a structured accounting file.",
      desc: "Transitioning out of makeshift spreadsheets into professional cloud accounting software like Xero or MYOB.",
    },
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "The business has a bookkeeping backlog after a busy trading period, staffing change or growth phase.",
      desc: "Operational demand outpaced administrative time during seasonal spikes or rapid corporate expansion.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Backlog Triggers &amp; Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Might a Business Need Bookkeeping Backlog Help?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Businesses usually seek backlog support when the books have stopped keeping pace with day-to-day activity.
          </p>
        </div>

        {/* 7 Trigger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center mb-5 shadow-xs">
                  {item.icon}
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal pl-6">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-6">
                <span>Trigger 0{idx + 1}</span>
              </div>
            </div>
          ))}

          {/* 8th Card: Consultation Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 rounded-2xl p-6 sm:p-7 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                <span>Immediate Support</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">
                Clear Your Backlog
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 dark:text-emerald-200 leading-relaxed font-normal">
                Don&apos;t let overdue books become an ATO crisis. We systematically organize your historical records period by period.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="w-full bg-white text-emerald-800 hover:bg-emerald-50 border-none font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Verbatim No-Guesswork Callout */}
        <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex items-start gap-3 sm:gap-4">
          <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-medium">
            <strong>Evidence-Based Remediation:</strong> An overdue bookkeeping service should focus first on establishing what is missing and what can be supported by evidence. Financially Up does not encourage estimates where records should be available; gaps are identified so the client can provide further documentation or decide how they should be handled.
          </p>
        </div>
      </div>
    </section>
  );
}
