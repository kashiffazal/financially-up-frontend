"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  IdcardOutlined,
  FileDoneOutlined,
  BankOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CompanyAsTrusteeSetup Component
 * ===============================
 * Section: Company as trustee setup: what needs to be coordinated?
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Covers corporate registration alignment, director ID statutory requirements,
 * trust deed appointment clauses, accounting implementation, and ongoing ASIC compliance.
 */
export default function CompanyAsTrusteeSetup() {
  const setupSteps = [
    {
      icon: <IdcardOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Director ID Application",
      desc: "Each intended director must personally apply for their 15-digit Director Identification Number (Director ID) through myGovID before formal appointment.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "ASIC Company Registration",
      desc: "Establishing the Pty Ltd entity, drafting company constitution or replaceable rules, issuing subscriber shares, and setting up the statutory register.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Deed & Appointment Alignment",
      desc: "Ensuring the trust deed or deed of appointment explicitly names the new company and conforms to the appointor's legal powers of trustee substitution.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Setup Coordination
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Company as trustee setup: what needs to be coordinated?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where a new company is to be appointed as trustee, the corporate registration and trust documentation need
            to align. The company must have the appropriate directors and corporate records. A person who is a director
            or plans to become one needs a director ID and must apply personally within the required time. The trust deed
            and any appointment documentation should also support the proposed trustee arrangement.
          </p>
        </div>

        {/* 3 Step Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {setupSteps.map((item, idx) => (
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

        {/* Verbatim Scope & Legal Handoff Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
              <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Implementation Scope & Ongoing Obligations
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can assist with company registration and accounting/tax implementation within scope. The
                legal appointment of a trustee, drafting or amending the trust deed, and advice about trustee powers may
                require a lawyer. After setup, the company&apos;s ASIC obligations continue even if its only role is to
                act as trustee.
              </p>
            </div>
          </div>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Coordinate Setup <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
