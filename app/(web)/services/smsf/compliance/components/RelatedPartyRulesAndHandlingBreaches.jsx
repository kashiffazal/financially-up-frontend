"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  WarningOutlined,
  ArrowRightOutlined,
  StopOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * RelatedPartyRulesAndHandlingBreaches Component
 * ==============================================
 * Implements verbatim SEO content from Page 8 of 9th Pillar SMSF.docx:
 * - Related-party and arm’s-length issues (cross-links to property & LRBA)
 * - What if a compliance issue has already occurred? (rectification, ATO disclosure)
 */
export default function RelatedPartyRulesAndHandlingBreaches() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Arm&apos;s-Length & Rectification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Related-party and arm’s-length issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF rules restrict transactions involving members, relatives and other related parties. Limited exceptions can apply, depending on the asset and arrangement. Transactions must be on arm&apos;s-length terms or, where the parties are not dealing at arm&apos;s length, the terms must not be more favorable to the other party than arm&apos;s-length terms. Related-party acquisitions, leases, loans and in-house assets can create compliance risk if not handled correctly.
          </p>
        </div>

        {/* 2 Feature Cards: Related Party Rules & Breach Response */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Related-Party Rules & In-House Assets */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/40 flex items-center justify-center mb-6">
                <StopOutlined className="text-2xl text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Related-Party Dealings & In-House Asset Limits
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Transactions involving members or associates must satisfy rigorous statutory exceptions:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>Residential acquisitions from related parties are strictly prohibited</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>Loans to members or associates are expressly banned under super law</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-rose-500 text-sm mt-0.5 shrink-0" />
                  <span>In-house assets (loans to related trusts/entities) must remain under 5% of total fund value</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-3 text-xs">
                <Link href="/services/smsf/property">
                  <Button type="link" size="small" className="text-rose-600 dark:text-rose-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                    SMSF Property
                  </Button>
                </Link>
                <span className="text-slate-300 dark:text-zinc-700">•</span>
                <Link href="/services/smsf/lrba">
                  <Button type="link" size="small" className="text-rose-600 dark:text-rose-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                    SMSF LRBA
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: What if a compliance issue has already occurred? */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center mb-6">
                <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                What if a compliance issue has already occurred?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                The right response depends on the facts. A late document, incorrect transaction, related-party issue or breach of an investment restriction should not be hidden or casually reversed without understanding the consequences. Some matters may be correctable through documentation or transaction steps, while others may require disclosure, auditor reporting, legal advice or direct engagement with the ATO.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can help review the accounting and tax position, reconstruct records where possible and coordinate the compliance work within scope. Where the issue requires legal advice, regulated financial product advice or specialist superannuation law input, we will distinguish that from our accounting and tax work.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-amber-700 dark:text-amber-400 font-medium">
              Transparent, measured rectification protects fund compliance status.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
