"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  RocketOutlined,
  SwapOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * ApplyingBeforeTradingAndGstDistinction Component
 * Covers 'Can you apply for an ABN before trading starts?' and 'ABN registration is not the same as GST registration'
 * from Page 3 of 6th Pillar Business Structures.docx.
 */
export default function ApplyingBeforeTradingAndGstDistinction() {
  const commencementActivities = [
    "Obtaining business licences or professional insurances",
    "Setting up a commercial website and digital channels",
    "Purchasing trade stock, machinery, or work equipment",
    "Leasing commercial or retail premises",
    "Issuing commercial quotes or bidding for contracts",
    "Applying for commercial finance or buying an established business",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Can you apply for an ABN before trading starts? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <RocketOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Can you apply for an ABN before trading starts?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Potentially, yes. An enterprise does not always need to be already earning income, but there should be genuine commencement activity.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Examples Recognised by the ABR:
                </h4>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-600 dark:text-zinc-300">
                  {commencementActivities.map((act, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 shrink-0 text-xs" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 italic">
                Simply wanting an ABN does not create entitlement. If there is uncertainty about whether the activity has moved beyond a hobby, employment or preliminary idea, it is worth reviewing the facts before applying.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <WarningOutlined className="text-sm shrink-0" />
              <span>Genuine preparatory actions must be demonstrable if reviewed by the ABR.</span>
            </div>
          </div>

          {/* Card 2: ABN registration is not the same as GST registration */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <SwapOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                ABN registration is not the same as GST registration
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                An ABN identifies the business or entity, while GST is a separate tax registration. Depending on turnover and activities, a business may be required or choose to register for GST. Financially Up can help identify whether a separate GST review is needed after the ABN has been established.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The same distinction applies to PAYG withholding, fringe benefits tax and other registrations. An ABN application can be part of the broader setup process, but it should not be treated as proof that every tax registration is complete.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/bas-payroll/gst-registration"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Explore GST Registration Services
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-purple-600 dark:text-purple-400" />
              <span>Full coordination across ABN, GST, and PAYG withholding roles.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
