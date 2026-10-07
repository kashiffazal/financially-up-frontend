"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  IdcardOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * AbnConnectionAndTradeMarkDistinction Component
 * Covers 'ABN and business name registration are connected, but not the same'
 * and 'Does registering a business name protect the brand?'
 * from Page 4 of 6th Pillar Business Structures.docx.
 */
export default function AbnConnectionAndTradeMarkDistinction() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: ABN and business name registration are connected, but not the same */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <IdcardOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                ABN and business name registration are connected, but not the same
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Unless an exemption applies, ASIC requires a business name applicant to have an ABN or to have applied for one and hold the relevant ABN reference number. An ABN identifies the business or organization for dealings with government and the wider community. The business name is the name under which that entity trades.
              </p>

              <div className="pt-2 space-y-2.5">
                <p className="text-sm text-slate-600 dark:text-zinc-300">
                  If you have not yet applied for an ABN, Financially Up can assist through our{" "}
                  <Link
                    href="/services/business-structures/abn-registration"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    ABN registration service
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                  .
                </p>

                <p className="text-sm text-slate-600 dark:text-zinc-300">
                  Where the entity is a company that has not yet been formed,{" "}
                  <Link
                    href="/services/business-structures/company-registration"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    company registration
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  may need to occur before the final business-name setup is completed.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              <span>Coordinated sequence ensuring the underlying entity is confirmed first.</span>
            </div>
          </div>

          {/* Card 2: Does registering a business name protect the brand? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <FileProtectOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Does registering a business name protect the brand?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Registering a business name allows the registered holder to carry on business under that name, subject to the applicable rules. It does not give ownership of the name, an exclusive right to use it or protection against third-party trade mark claims. A separate trade mark search and registration process may be relevant if brand protection is important.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can explain the accounting and registration side of the setup. Trade mark or other legal intellectual-property advice may require an appropriately qualified legal or IP adviser.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <WarningOutlined className="text-sm shrink-0" />
              <span>A business name registration does not grant proprietary trademark rights.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
