"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  SettingOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * StpSetupAndBasCoordination Component
 * Covers 'STP Setup for New or Changing Payroll Systems' and
 * 'STP, PAYG Withholding and Activity Statements' with link to BAS Lodgement
 * from Page 5 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function StpSetupAndBasCoordination() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: STP Setup for New or Changing Payroll Systems */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <SettingOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                STP Setup for New or Changing Payroll Systems
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                STP setup services may be required when a business hires its first employees, changes payroll software, moves payroll from an internal process to an outsourced provider, or discovers that existing payroll data is inconsistent.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A careful setup should consider employee details, payroll categories, PAYG withholding information, super-related fields, opening balances and year-to-date amounts where relevant. Incorrect opening information can flow through future STP reports, so migration and setup should be reviewed rather than assumed to be correct.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-700 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-brand-primary text-base shrink-0" />
              <span>Includes transition reviews for Xero, MYOB, Employment Hero &amp; QuickBooks migrations.</span>
            </div>
          </div>

          {/* Card 2: STP, PAYG Withholding and Activity Statements */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FileDoneOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                STP, PAYG Withholding and Activity Statements
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                STP reporting and activity statements are related but separate obligations. STP communicates employee payroll information to the ATO, while PAYG withholding amounts may also need to be reported and paid through the business activity statement or other applicable reporting process.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For assistance with preparing and lodging activity statements, see our BAS Lodgement service page.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-700">
              <Link href="/services/bas-payroll/bas-lodgement">
                <Button
                  type="primary"
                  className="font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Explore BAS Lodgement Services
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
