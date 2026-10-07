"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  IdcardOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PartnershipAdviceAndRegistrations Component
 * Covers 'Partnership structure advice before you register' and 'ABN, TFN and other registrations'
 * from Page 6 of 6th Pillar Business Structures.docx.
 */
export default function PartnershipAdviceAndRegistrations() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Partnership structure advice before you register */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <SafetyCertificateOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Partnership structure advice before you register
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Before you register a partnership in Australia, confirm that partnership is actually the right structure. Partnerships can be relatively straightforward to establish, but partners generally share responsibility for business decisions and, in a general partnership, can have personal exposure to partnership debts and obligations.
              </p>

              <div className="pt-2 space-y-2.5">
                <p className="text-sm text-slate-600 dark:text-zinc-300">
                  Our{" "}
                  <Link
                    href="/services/business-structures/business-structure-advice"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    business structure advice service
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  can help compare a partnership with a sole trader, company or trust arrangement before registrations are put in place.
                </p>

                <p className="text-sm text-slate-600 dark:text-zinc-300">
                  If a company structure is chosen instead, our{" "}
                  <Link
                    href="/services/business-structures/company-registration"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    company registration service
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  covers the company setup stage.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <WarningOutlined className="text-sm shrink-0" />
              <span>Partners in general partnerships share joint liability for partnership debts.</span>
            </div>
          </div>

          {/* Card 2: ABN, TFN and other registrations */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <IdcardOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                ABN, TFN and other registrations
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A partnership usually requires its own ABN and TFN. The ABN identifies the partnership for business and tax registrations; it is not the personal ABN of an individual partner. Depending on the circumstances, the partnership may also need registrations for GST, PAYG withholding or other taxes and obligations.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                When an existing business changes into a partnership, or partners enter or leave, the ABN position can depend on the circumstances. A change should be reviewed before assuming an existing ABN can simply continue unchanged.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Separate entity identification for all partner dealings with the ATO.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
