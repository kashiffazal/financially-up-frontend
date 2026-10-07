"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  UserAddOutlined,
  RiseOutlined,
  ApartmentOutlined,
  BranchesOutlined,
  WarningOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatArePaygServices Component
 * Covers 'What are PAYG withholding services?' and 'Who may need a PAYG withholding registration service?'
 * from Page 8 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatArePaygServices() {
  const registrationScenarios = [
    {
      title: "New Employers",
      desc: "New employers setting up payroll for the first time.",
      icon: <UserAddOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      title: "Contractor Transitions",
      desc: "Growing businesses moving from contractors-only arrangements to employees.",
      icon: <RiseOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      title: "Director Remuneration",
      desc: "Companies starting to pay directors or other office holders.",
      icon: <ApartmentOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      title: "Acquisitions & Restructures",
      desc: "Businesses taking over payroll after an acquisition or restructure.",
      icon: <BranchesOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />,
    },
    {
      title: "Retrospective Corrections",
      desc: "Employers that discover they should have registered earlier and need to correct their position.",
      icon: <WarningOutlined className="text-amber-600 dark:text-amber-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What are PAYG withholding services? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="green" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <FileTextOutlined className="mr-1.5" />
              Employer Compliance
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What are PAYG withholding services?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              PAYG withholding services cover the registration, calculation support, reconciliation and reporting processes associated with amounts a payer is required to withhold and pay to the ATO. The exact obligations depend on the type of payments being made and the business circumstances.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For employers, PAYG withholding commonly applies to salary and wages and may also apply to other payments under specific rules. A business must generally register for PAYG withholding before the first payment from which it is required to withhold, and the withheld amounts must be reported and paid to the ATO through the relevant activity statement cycle.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <SafetyCertificateOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Mandatory Registration
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                You must register with the Australian Taxation Office prior to initiating payments from which tax must be withheld. Proactive registration avoids processing blocks on your Single Touch Payroll and activity statement filings.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Who may need a PAYG withholding registration service? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Who may need a PAYG withholding registration service?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A business may need to register when it begins making payments from which tax is required to be withheld. This commonly arises when a business hires employees, appoints directors who receive remuneration, or makes other payments covered by PAYG withholding rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {registrationScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 italic">
            A PAYG registration accountant can help review the starting date, registration details and reporting cycle before payroll reporting becomes routine.
          </p>
        </div>

      </div>
    </section>
  );
}
