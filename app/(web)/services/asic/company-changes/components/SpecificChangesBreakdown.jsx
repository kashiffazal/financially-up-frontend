"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserSwitchOutlined,
  HomeOutlined,
  PieChartOutlined,
  ArrowRightOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * SpecificChangesBreakdown Component
 * ==================================
 * Section 3 of Change Company Details (/services/asic/company-changes/):
 * 1. "Changing directors or company secretaries"
 * 2. "Changing addresses and contact details"
 * 3. "Share and member changes need more than a filing"
 *
 * Implements 100% complete, verbatim content from Page 3 of '7th Pillar ASIC.docx'.
 * 3 comprehensive feature cards with internal cross-links and statutory compliance badges.
 */
export default function SpecificChangesBreakdown() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Detailed Procedures by Category
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Categories of Company Detail Changes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Understand the statutory requirements, documentation, and compliance steps for officeholder changes, address updates, and share capital modifications.
          </p>
        </div>

        {/* 3 Detailed Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Changing directors or company secretaries */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                <UserSwitchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                Changing directors or company secretaries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                When a director or secretary is appointed, resigns or retires, the company generally needs to notify ASIC within 28 days. ASIC also requires a new director to apply for a director ID before appointment, and companies must obtain and keep written consent before a person becomes a director or secretary.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                The company’s constitution or rules may also govern how an appointment or cessation is made. Financially Up can assist with the ASIC administration, but legal questions about the validity of a corporate decision may require legal advice.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-2">
              <Link href="/services/asic/director-changes">
                <Button
                  type="link"
                  className="p-0 font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs"
                  icon={<ArrowRightOutlined className="text-[10px]" />}
                  iconPosition="end"
                >
                  Explore Dedicated Director Changes Service
                </Button>
              </Link>
            </div>
          </div>

          {/* 2. Changing addresses and contact details */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-5">
                <HomeOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                Changing addresses and contact details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Companies need to keep their registered office and principal place of business information current. Address changes are often straightforward, but the registered office has a specific corporate role and may not be the same place where the business actually operates.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                If the company does not occupy the registered office, the occupier must give written consent to use the address and the company must keep a record of that consent. The details supplied to ASIC should match the company’s actual arrangements.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-2">
              <Link href="/services/asic/address-changes">
                <Button
                  type="link"
                  className="p-0 font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1 text-xs"
                  icon={<ArrowRightOutlined className="text-[10px]" />}
                  iconPosition="end"
                >
                  Explore Dedicated Address Changes Service
                </Button>
              </Link>
            </div>
          </div>

          {/* 3. Share and member changes need more than a filing */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center mb-5">
                <PieChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                Share and member changes need more than a filing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                Changes involving shares or shareholders can be more significant than a simple register update. Share issues, transfers, cancellations or ownership changes may affect the company’s internal share register and can also have tax, accounting, duty, commercial or legal consequences depending on the circumstances.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                ASIC requires certain share changes to be reported within 28 days. However, an ASIC filing should not be used as a substitute for proper transaction documentation. Before lodging, the company should be clear about what transaction occurred, the date, the parties and the supporting corporate records.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal mb-6 italic">
                If the change is part of a broader restructure or ownership review, it may also be appropriate to consider our business structure advice or another separately scoped tax service before the transaction is implemented.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-2">
              <Link href="/services/asic/share-changes">
                <Button
                  type="link"
                  className="p-0 font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 text-xs"
                  icon={<ArrowRightOutlined className="text-[10px]" />}
                  iconPosition="end"
                >
                  Explore Dedicated Share Changes Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
