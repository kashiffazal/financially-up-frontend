"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  StopOutlined,
  ShopOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/**
 * SmsfPropertyRulesAndRestrictions Component
 * ==========================================
 * Implements verbatim SEO content from Page 4 of 9th Pillar SMSF.docx:
 * - SMSF property rules trustees need to consider
 * - Sole purpose test, arm's length dealing, residential vs business real property,
 *   and 10 August 2026 LRBA rule changes.
 */
export default function SmsfPropertyRulesAndRestrictions() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Regulatory Rules & Restrictions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            SMSF property rules trustees need to consider
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF must be maintained for the sole purpose of providing retirement benefits, or death benefits where applicable. Investments must be consistent with the fund&apos;s investment strategy, recorded in the correct ownership name, made on a commercial arm&apos;s-length basis and comply with restrictions on related-party acquisitions, related-party use and in-house assets.
          </p>
        </div>

        {/* 2 Column Comparison: Residential vs Business Real Property */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Residential Property Rules Card */}
          <div className="bg-rose-50/40 dark:bg-rose-950/20 rounded-3xl p-7 sm:p-8 border border-rose-200/80 dark:border-rose-900/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 flex items-center justify-center mb-6">
                <StopOutlined className="text-2xl text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Residential Property Restrictions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                Residential property held by an SMSF generally cannot be acquired from a related party and must not provide a current-day benefit to a member or related party, such as private occupation or a related-party residential tenancy.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Strict prohibition against acquiring residential property from members or relatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Zero personal or holiday home usage permitted for members or associates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Must be let to independent third-party tenants on strictly commercial arm&apos;s-length terms</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200/80 dark:border-rose-900/40 text-xs text-rose-700 dark:text-rose-300 font-medium">
              Contraventions risk significant ATO compliance notices and disqualification.
            </div>
          </div>

          {/* Business Real Property Rules Card */}
          <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-3xl p-7 sm:p-8 border border-emerald-200/80 dark:border-emerald-900/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mb-6">
                <ShopOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Business Real Property (Commercial Exception)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                Business real property can be treated differently where the statutory conditions are met. Qualifying business real property may, for example, be acquired from a related party at market value or leased to a related business on arm&apos;s-length terms. The property and proposed transaction should be reviewed before contracts are entered into.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Eligible to be leased back to a member&apos;s operating business at verified market rent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Permitted acquisition from related parties subject to independent market valuation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Formal commercial lease agreement and documented prompt rental payments required</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/80 dark:border-emerald-900/40 text-xs text-emerald-700 dark:text-emerald-300 font-medium">
              Must be used wholly and exclusively for business purposes.
            </div>
          </div>
        </div>

        {/* 10 August 2026 LRBA Rule Change Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center shrink-0">
              <CalendarOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Borrowing & 10 August 2026 Legislative Changes
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Borrowing adds a separate layer of regulation. From 10 August 2026, a new LRBA used to acquire real property generally can only finance business real property, subject to transitional treatment for certain earlier arrangements and binding contracts.
              </p>
            </div>
          </div>
          <Link href="/services/smsf/lrba" className="shrink-0">
            <Button type="primary" className="bg-purple-600 hover:bg-purple-500 border-none font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
              Read More About SMSF LRBA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
