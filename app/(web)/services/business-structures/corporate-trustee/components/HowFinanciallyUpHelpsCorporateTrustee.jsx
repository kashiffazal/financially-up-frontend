"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsCorporateTrustee Component
 * Covers 'Corporate trustee services Australia: what Financially Up can help with'
 * and 'Information we may need' from Page 7 of 6th Pillar Business Structures.docx.
 */
export default function HowFinanciallyUpHelpsCorporateTrustee() {
  const serviceScope = [
    "Confirming the intended accounting and tax setup before registrations are completed.",
    "Assisting with registration of a new proprietary company where required.",
    "Helping coordinate ABN, TFN and relevant tax registrations for the trust where applicable.",
    "Setting up accounting records so the trustee capacity and trust transactions are clearly identified.",
    "Reviewing how the proposed structure interacts with existing business or investment entities.",
    "Working with your legal adviser where the trust deed or other legal documentation needs to be prepared or reviewed.",
    "Identifying ongoing accounting and tax-return requirements after setup.",
  ];

  const informationNeeded = [
    "Proposed or existing trust deed and any formal amendments",
    "Proposed company name and registered office details",
    "Details of proposed directors and shareholders",
    "Director IDs where required for the relevant appointments",
    "Existing ABN, TFN and tax-registration details if the trust already operates",
    "Details of the business, investments or assets the trust is expected to hold",
    "Current accounting records where an existing trustee arrangement is being changed",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: What Financially Up can help with */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What Financially Up can help with
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can support the accounting and tax side of establishing a corporate trustee arrangement, with scope agreed to your circumstances.
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

              <div className="pt-2">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Where the trust will lodge annual trust tax returns, our{" "}
                  <Link
                    href="/services/business-tax/trust-tax-returns"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Trust Tax Returns service
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  covers the separate annual preparation and lodgement work. Corporate trustee setup is the establishment and structure work; it is not a substitute for ongoing trust accounting and tax compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Information we may need */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Information we may need
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The information required depends on whether the trust already exists and whether the trustee company is new. Common items include:
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-2.5">
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

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Full coordination between company incorporation and trust register entries.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
