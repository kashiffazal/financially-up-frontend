"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileDoneOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatHappensAfterIncorporation Component
 * Covers 'What happens after company incorporation?' and 'Company registration and tax compliance are separate services'
 * from Page 2 of 6th Pillar Business Structures.docx.
 */
export default function WhatHappensAfterIncorporation() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Post-Incorporation Pathway
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Next Steps After Receiving Your ACN
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Receiving your Certificate of Registration from ASIC creates the entity, but launching operations requires tax activations, accounting systems, and compliance frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: What happens after company incorporation? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <FileDoneOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                What happens after company incorporation?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                After company incorporation, the business may need additional registrations before or as it starts operating. A company registered with ASIC is entitled to an ABN, but the ABN is a separate identifier and application process. Financially Up can assist with ABN registration and review whether other registrations, such as GST or PAYG withholding, are relevant to the company&apos;s activities.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The company will also need appropriate accounting records and a clear process for recording payments to directors, shareholders and employees. Company funds belong to the company. Withdrawals or payments to owners need to be recorded according to their actual nature rather than treated as informal personal drawings.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-structures/abn-registration"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  View ABN Registration Service
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <ExclamationCircleOutlined className="text-sm shrink-0" />
              <span>Company money is strictly separate from personal shareholder funds.</span>
            </div>
          </div>

          {/* Card 2: Company registration and tax compliance are separate services */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <DollarOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Company registration and tax compliance are separate services
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Company registration establishes the legal entity. It does not complete the company&apos;s ongoing tax obligations. A company generally has separate accounting and tax reporting responsibilities after it begins operating. Financially Up can assist with the registration stage and, where separately scoped, ongoing bookkeeping, tax compliance and company tax return preparation.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Likewise, company registration does not automatically include tax planning, shareholder agreements, legal documents or specialist structuring advice. Those matters should be addressed separately where relevant.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-tax/company-tax-returns"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Learn about Company Tax Returns
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Clear boundaries between setup, annual reporting, and legal documents.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
