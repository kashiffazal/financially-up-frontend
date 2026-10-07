"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  SendOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * ReportableFbtAndTiming Component
 * Covers 'Reportable Fringe Benefits and Payroll' (with STP link)
 * and 'FBT Timing and Lodgement' from Page 6 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function ReportableFbtAndTiming() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: Reportable Fringe Benefits and Payroll */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <SendOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Reportable Fringe Benefits and Payroll
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Some fringe benefits may create a reportable fringe benefits amount for an employee even though the employer pays the FBT. Where the reporting rules apply, the relevant amount is generally reported through payroll reporting or otherwise provided using the required ATO process.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A reportable fringe benefits amount is not necessarily the same as the actual value of the benefit or the amount of FBT paid. It is calculated under specific reporting rules and can affect income tests used for certain tax and government purposes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-700">
              <Link href="/services/bas-payroll/stp">
                <Button
                  type="primary"
                  className="font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Explore Single Touch Payroll
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: FBT Timing and Lodgement */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <CalendarOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                FBT Timing and Lodgement
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The FBT year generally runs from 1 April to 31 March. Employers that are required to lodge an FBT return need to follow the applicable ATO lodgement and payment due dates. Those dates can differ depending on how the return is lodged and whether a registered tax agent lodgement program applies, so they should be confirmed for the specific year and circumstances rather than assumed from a general rule.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 space-y-2">
                <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <ClockCircleOutlined className="text-brand-primary" />
                  Tax Agent Lodgement Extension
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                  While self-preparer deadlines typically fall around 21 May, lodging via a registered tax agent like Financially Up generally provides extended electronic lodgement dates into late June.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-700 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-brand-primary text-base shrink-0" />
              <span>Verify your business&apos;s specific lodgement deadline with our tax team.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
