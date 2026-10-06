"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  ReconciliationOutlined,
  CalculatorOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * CompanyTaxProcessSteps Component
 * =================================
 * Section: How the Process Works
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * 5 Sequential steps with connected timeline styling and dynamic company phone.
 */
export default function CompanyTaxProcessSteps() {
  const company = useCompany();
  const phoneDisplay = company?.phone || "1300 328 316";

  const steps = [
    {
      num: "1",
      title: "Review the company structure, records and prior-year position.",
      detail:
        "We assess your corporate structure, shareholdings, prior-year tax returns, loss schedules, and current bookkeeping setup.",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      num: "2",
      title: "Complete or review year-end accounts and key reconciliations.",
      detail:
        "We verify your profit and loss and balance sheet, reconciling bank accounts, payroll reports, GST statements, and clearing accounts.",
      icon: <ReconciliationOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      num: "3",
      title: "Work through tax adjustments, losses and other relevant company tax items.",
      detail:
        "We calculate tax depreciation, non-deductible expense add-backs, carry-forward loss tests, and review director or shareholder loan balances.",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "4",
      title: "Prepare the company tax return and explain the outcome.",
      detail:
        "We draft the statutory company tax return and explain your net tax liability, franking account balances, and upcoming obligations clearly.",
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      num: "5",
      title: "Lodge the return once the information has been reviewed and approved.",
      detail:
        "You review and approve the finalized return, and we securely lodge it directly with the Australian Taxation Office via the tax agent portal.",
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Engagement Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the Process Works
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structured, 5-step process designed to ensure your company accounts are fully reconciled, compliant, and clearly understood before lodgement.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-sm font-extrabold text-brand-primary dark:text-emerald-400">
                    0{step.num}
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-800/80 text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                Stage {step.num} of 5
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Helper Card */}
        <div className="p-6 bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary dark:text-emerald-400 flex items-center justify-center shrink-0">
              <PhoneOutlined className="text-lg" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Have questions about your company’s year-end process?
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Call our team directly on <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline">{phoneDisplay}</a> or schedule an online appointment.
              </p>
            </div>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 h-10 px-5"
            >
              Start Your Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
