"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  UserSwitchOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAnAppointorAndWhyItMatters Component
 * =========================================
 * Section: What is an appointor and why does the role matter?
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Explains the appointor power to appoint and remove trustees, practical control,
 * nomenclature differences (principal, guardian, protector), and non-standard deed rights.
 */
export default function WhatIsAnAppointorAndWhyItMatters() {
  const points = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Power Over Trustee Office",
      desc: "In many discretionary or family trusts, the appointor has the power to appoint or remove the trustee. Because that power can influence who controls the trust, an appointor is an important part of governance.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Practical Control & Succession",
      desc: "The appointor effectively holds ultimate succession authority over family trust assets, ensuring long-term continuity across generations or business transitions.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Deed-Specific Powers",
      desc: "Some deeds use different terms such as principal, guardian or protector. The exact rights are not universal, so the specific deed must be read rather than assuming standard powers.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Governance & Ultimate Control
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is an appointor and why does the role matter?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An appointor is a role created by the trust deed. In many discretionary or family trusts, the appointor has
            the power to appoint or remove the trustee. Because that power can influence who controls the trust, an
            appointor may be an important part of the trust&apos;s governance and succession arrangements.
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

        {/* Verbatim Deed Caution Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Deed Terms Dictate Specific Powers
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The exact rights of an appointor are not universal. Some deeds use different terms, such as principal,
              guardian or protector, and the powers can vary significantly. The deed therefore needs to be read rather
              than assuming the appointor has a standard set of powers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
