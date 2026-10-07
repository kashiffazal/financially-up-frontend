"use client";

import React from "react";
import { Tag } from "antd";
import {
  TeamOutlined,
  CheckCircleOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * WhatIsPartnershipRegistration Component
 * Covers 'What is involved in partnership registration in Australia?'
 * from Page 6 of 6th Pillar Business Structures.docx.
 */
export default function WhatIsPartnershipRegistration() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <TeamOutlined className="mr-1.5" />
              Partnership Foundations
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is involved in partnership registration in Australia?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              An ordinary business partnership is not generally registered with ASIC as a company. Instead, the partnership is established through the relationship between the partners and the relevant state or territory partnership law, while separate registrations are completed for tax and business purposes. Limited partnerships and incorporated limited partnerships can have additional state or territory registration requirements.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For a typical partnership business setup, the partnership generally needs its own ABN and tax file number. It may also need GST registration, PAYG withholding registration or other registrations depending on its activities, turnover and whether it employs staff. If it trades under a name other than the partners’ legal names, the business name will usually need to be registered.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <FileTextOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  State Law & Dedicated Tax IDs
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Unlike incorporated entities, standard partnerships operate under state Partnership Acts. They require their own distinct tax identity (ABN and TFN) to lodge collective annual returns with the ATO.
              </p>
              <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-700 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Distinct ABN, TFN, GST, and business name registrations aligned.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
