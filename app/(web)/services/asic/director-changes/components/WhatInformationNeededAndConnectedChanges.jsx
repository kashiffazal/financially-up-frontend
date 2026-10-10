"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserAddOutlined,
  UserDeleteOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  IdcardOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededAndConnectedChanges Component
 * ==================================================
 * Section 3 of Change Director ASIC (/services/asic/director-changes/):
 * 1. "What information is needed for an ASIC director update?"
 * 2. "Director changes often connect with other company changes"
 *
 * Implements 100% complete, verbatim content from Page 6 of '7th Pillar ASIC.docx'.
 * Gradient section background, split appointment vs cessation documentation, and connected corporate changes.
 */
export default function WhatInformationNeededAndConnectedChanges() {
  const appointmentInfo = [
    "Full legal name of the proposed director",
    "Date and place of birth (town/city & country)",
    "Usual residential address (and contact details)",
    "Exact date of appointment",
    "Signed written consent to act as director",
    "Director identification number (Director ID)",
  ];

  const cessationInfo = [
    "Full name of the retiring or resigning director",
    "Actual date they ceased holding office",
    "Signed resignation notice or letter",
    "Board minutes or member resolutions (if removed)",
    "Confirmation of ongoing minimum director requirements",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: What information is needed for an ASIC director update? */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Required Documentation
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What information is needed for an ASIC director update?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal max-w-3xl mx-auto">
              Different details are required depending on whether your company is appointing a new officeholder or recording a cessation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card: New Appointment */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    <UserAddOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                    For a new appointment
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-5">
                  For a new appointment, ASIC requires identifying and appointment information such as the director&apos;s name, date and place of birth, residential address and appointment date. The company should also hold written consent, and the proposed director should already have a director ID.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  {appointmentInfo.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Cessation / Resignation */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center">
                    <UserDeleteOutlined className="text-blue-600 dark:text-blue-400 text-lg" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                    For a cessation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-5">
                  For a cessation, the key information includes the director and the actual date they resigned, retired or otherwise ceased office. Company minutes, resolutions, resignation notices and other records may also be relevant depending on how the change occurred.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  {cessationInfo.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection 2: Director changes often connect with other company changes */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <SwapOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white m-0">
              Director changes often connect with other company changes
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            A director appointment or resignation can happen alongside a change in shareholders, registered office, principal place of business or company control. Those are related but separate corporate updates. Our{" "}
            <Link href="/services/asic/company-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              company changes service
            </Link>{" "}
            covers broader ASIC company-detail changes, while this page focuses specifically on director appointments and cessations.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0 pt-3 border-t border-slate-100 dark:border-zinc-800">
            If a new company is being established rather than an existing company changing directors, our{" "}
            <Link href="/services/business-structures/company-registration" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              company registration service
            </Link>{" "}
            deals with the incorporation process and initial officeholder setup.
          </p>
        </div>
      </div>
    </section>
  );
}
