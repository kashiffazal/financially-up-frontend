"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  FileProtectOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HighIncomeProcessSteps Component
 * =================================
 * Section 5: How the Process Works.
 * Features 100% complete, verbatim content from Page 3 of the client document.
 * Dynamically resolves company phone via useCompany().
 */
export default function HighIncomeProcessSteps() {
  const company = useCompany();
  const phoneDisplay = company?.phone || "1300 328 316";

  const steps = [
    {
      number: "01",
      title: "1. Book an appointment",
      description: `Book online through the Financially Up website or arrange a time by phone (${phoneDisplay}). Online meetings and in-person appointments are available.`,
      icon: <CalendarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: "02",
      title: "2. Discuss your circumstances",
      description:
        "We discuss your income, remuneration, investments, employment arrangements and concerns to determine whether you need return preparation, separate planning support or both.",
      icon: <CommentOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
    },
    {
      number: "03",
      title: "3. Confirm the scope and documents",
      description:
        "We explain the service scope and information needed. Separate planning scope and fees are confirmed before that work proceeds.",
      icon: <FileProtectOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    },
    {
      number: "04",
      title: "4. Review and prepare",
      description:
        "Financially Up reviews the information provided, prepares your individual tax return and raises any questions before finalization.",
      icon: <AuditOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
    },
    {
      number: "05",
      title: "5. Confirm and lodge",
      description:
        "You have an opportunity to review the return, understand the outcome and ask questions before lodgement.",
      icon: <CheckCircleOutlined className="text-2xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Step-By-Step Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the Process Works
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structured, collaborative approach ensuring accurate reporting, proactive advisory clarity, and transparent communication from initial consultation to ATO lodgement.
          </p>
        </div>

        {/* 5 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-emerald-600/30 dark:text-emerald-400/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined className="text-[11px]" />
                <span>Phase {step.number}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Australia-wide delivery strip */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-emerald-800/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-2xl shrink-0">
              <GlobalOutlined />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Australia-Wide Professional Service
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal">
                Financially Up works with clients Australia-wide. Meetings can be held online through an Outlook Calendar online meeting, or in person by arrangement.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            {company?.phone && (
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  className="w-full sm:w-auto font-bold rounded-xl text-white border-white/20 hover:border-white h-11 bg-white/10 hover:bg-white/20"
                >
                  Call {company.phone}
                </Button>
              </a>
            )}
            <Link href="/book-an-appointment" className="w-full sm:w-auto">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full sm:w-auto font-bold rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 hover:text-emerald-900 border-none h-11 px-6"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
