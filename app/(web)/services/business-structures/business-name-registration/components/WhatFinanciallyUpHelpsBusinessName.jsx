"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpHelpsBusinessName Component
 * Covers 'What our business name registration service can help with'
 * and 'Information we may need from you'
 * from Page 4 of 6th Pillar Business Structures.docx.
 */
export default function WhatFinanciallyUpHelpsBusinessName() {
  const serviceScope = [
    "Reviewing the proposed business structure and identifying the correct name holder.",
    "Checking the ABN position before lodgement.",
    "Assisting with the ASIC business name registration process.",
    "Helping distinguish the legal name, registered business name and company name.",
    "Identifying related registrations that may need to be considered during setup.",
    "Explaining the ongoing need to keep registration details current and renew the business name when required.",
  ];

  const informationNeeded = [
    "Proposed business name to be searched and registered",
    "ABN or pending ABN application reference details",
    "Principal place of business and service addresses",
    "Authorised contact phone numbers and email details",
    "Intended trading commencement date",
    "Underlying entity documentation (for partnerships, companies, or trusts)",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: What our service helps with */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What our business name registration service can help with
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A clean setup at the start can reduce later administration. It is especially important if several people are involved, the name is connected with a company or trust, or the business may change structure shortly after commencement.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-2.5">
                <ul className="space-y-2.5">
                  {serviceScope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Information we may need from you */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Information we may need from you
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The exact information depends on who will hold the business name. Commonly, we may need the proposed business name, ABN or ABN application details, business address, contact details, the intended commencement date and information about the underlying entity. If a partnership, company or trust is involved, additional entity information may also be relevant.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Document Checklist:
                </h4>
                <ul className="space-y-2.5">
                  {informationNeeded.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Timely renewals and regulatory contact updates handled smoothly.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
