"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileProtectOutlined,
  ExclamationCircleOutlined,
  BookOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TrustDeedComesFirst Component
 * ==============================
 * Section: The trust deed comes first
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Explains deed primacy over attractive tax outcomes, beneficiary classes,
 * definition of trust income, and procedural compliance before resolution execution.
 */
export default function TrustDeedComesFirst() {
  const points = [
    {
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trustee Powers & Beneficiary Classes",
      desc: "The trust deed determines the trustee's powers, the available beneficiary classes, how trust income is defined and what procedural requirements must be followed.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Deed Compliance Over Tax Optics",
      desc: "A trustee cannot make a valid distribution simply because a tax outcome appears attractive. A resolution that does not comply with the deed can create tax and legal problems.",
    },
    {
      icon: <BookOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Accounting & Tax Review from Deed",
      desc: "Financially Up can work from the deed and relevant accounting records to identify tax and administration issues, supporting informed decision-making before deadlines.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Legal Primacy & Trust Terms
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The trust deed comes first
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trustee cannot make a valid distribution simply because a tax outcome appears attractive. The trust deed
            determines the trustee&apos;s powers, the available beneficiary classes, how trust income is defined and what
            procedural requirements must be followed. A resolution that does not comply with the deed can create tax and
            legal problems.
          </p>
        </div>

        {/* 3 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((item, idx) => (
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

        {/* Verbatim Legal Scope Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Deed Records & Legal Adviser Coordination
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can work from the deed and relevant accounting records to identify tax and administration
              issues, but legal interpretation or amendment of the deed may require an appropriately qualified legal
              adviser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
