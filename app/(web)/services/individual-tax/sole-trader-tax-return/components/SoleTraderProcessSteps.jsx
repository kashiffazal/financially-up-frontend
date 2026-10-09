"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  FolderOpenOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * SoleTraderProcessSteps Component
 * =================================
 * Section 6: Online Sole Trader Tax Return Process.
 * Features 100% complete, verbatim content from Page 4 of the client document.
 * Dynamically resolves company phone via useCompany().
 */
export default function SoleTraderProcessSteps() {
  const company = useCompany();
  const phoneDisplay = company?.phone || "1300 328 316";

  const steps = [
    {
      number: "01",
      title: "1. Book an Appointment",
      description: `Choose a suitable time online or arrange a booking by calling ${phoneDisplay}.`,
      icon: (
        <CalendarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
    },
    {
      number: "02",
      title: "2. Discuss Your Situation",
      description:
        "We discuss your activities, income, expenses, records, GST or BAS position and other income.",
      icon: (
        <CommentOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
    },
    {
      number: "03",
      title: "3. Provide Your Records",
      description:
        "We confirm the relevant documents, such as income reports, bank records, invoices, receipts, asset information and vehicle or home-based business records.",
      icon: (
        <FolderOpenOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />
      ),
    },
    {
      number: "04",
      title: "4. Review and Prepare",
      description:
        "Financially Up reviews the information, prepares your return and raises questions where clarification is required.",
      icon: (
        <AuditOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      number: "05",
      title: "5. Confirm and Lodge",
      description:
        "You can review the return, understand the outcome and ask questions before lodgement.",
      icon: (
        <CheckCircleOutlined className="text-2xl text-indigo-600 dark:text-indigo-400" />
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Simple 5-Step Process
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Online Sole Trader Tax Return Process
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up assists sole traders Australia-wide. Book online or
            arrange a time by phone, then meet online through an appointment
            arranged in Outlook Calendar or in person by arrangement.
          </p>
        </div>

        {/* 5 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-emerald-600/30 dark:text-emerald-400/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-110">
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

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircleOutlined className="text-[11px]" />
                <span>Phase {step.number}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Australia-Wide Service Reassurance Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-emerald-800/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-2xl shrink-0">
              <GlobalOutlined />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Virtual &amp; In-Person Consultations Across Australia
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal">
                Book online or arrange a time by phone. Remote digital lodgement
                with complete security, or visit in person by arrangement.
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
                iconPlacement="end"
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
