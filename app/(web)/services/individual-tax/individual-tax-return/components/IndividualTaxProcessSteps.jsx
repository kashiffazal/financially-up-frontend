"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  CloudUploadOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * IndividualTaxProcessSteps Component
 * ===================================
 * Section 4: How the Individual Tax Return Process Works.
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Dynamically resolves company phone via useCompany().
 * Always utilizes Ant Design Button components for interactive actions.
 */
export default function IndividualTaxProcessSteps() {
  const company = useCompany();
  const phoneDisplay = company?.phone || "1300 328 316";

  const processSteps = [
    {
      step: "1",
      title: "Book an Appointment",
      description: `Book online through the Financially Up website or arrange an appointment by calling ${phoneDisplay}. Online meetings are conducted using an Outlook Calendar online meeting link. In-person appointments are also available by arrangement.`,
      icon: (
        <CalendarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
    },
    {
      step: "2",
      title: "Discuss Your Circumstances",
      description:
        "We discuss your income sources, investments, deductions and any changes or issues affecting the return. This helps identify the work required and whether a specialist tax matter needs separate consideration.",
      icon: (
        <CommentOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
    },
    {
      step: "3",
      title: "Provide Your Documents",
      description:
        "Financially Up will advise which records are needed and how to provide them. If information is incomplete or unclear, we will let you know what else is required before the return can be finalized.",
      icon: (
        <CloudUploadOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />
      ),
    },
    {
      step: "4",
      title: "Review the Prepared Return",
      description:
        "Your return is prepared based on the information and records provided. We explain the key details, raise any outstanding questions and give you an opportunity to review the return.",
      icon: (
        <FileDoneOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      step: "5",
      title: "Approve Lodgement",
      description:
        "Once the return is complete, you approve it before lodgement with the ATO. Any additional tax advice or broader financial advice is provided only within the services Financially Up is legally authorized to provide and may require a separate scope.",
      icon: (
        <CheckCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Clear Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the Individual Tax Return Process Works
          </h2>
        </div>

        {/* 5 Sequential Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-brand-primary dark:text-emerald-400 tracking-tight">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Step {idx + 1} of 5
              </div>
            </div>
          ))}

          {/* Box 6: Additional Action Card */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 sm:p-7 border border-emerald-800 shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-200 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-700/60">
                  Ready to Start?
                </span>
                <div className="w-12 h-12 rounded-xl bg-emerald-800/50 border border-emerald-700/50 flex items-center justify-center shadow-2xs">
                  <ArrowRightOutlined className="text-emerald-300 text-lg" />
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                Arrange Your Tax Return Appointment
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                Book online or speak with our registered CPA tax team. We will
                review your income, identify all eligible deductions, and
                prepare your return with full transparency.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <Link href="/book-an-appointment" className="flex-1">
                <Button
                  type="primary"
                  size="middle"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 border-none shadow-md h-10"
                >
                  Book Appointment
                </Button>
              </Link>

              {company?.phone && (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex-1"
                >
                  <Button
                    size="middle"
                    icon={<PhoneOutlined />}
                    className="w-full rounded-xl font-bold bg-white/10 hover:bg-white/15 text-white border-white/20 h-10"
                  >
                    Call Now
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
