"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  UserDeleteOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

/**
 * CessationOfEmploymentAndEssStatements Component
 * ===============================================
 * Section 3 & 4: What happens if employment ends? & ESS statements and tax return reporting.
 * Features 100% complete, verbatim content from Page 10 of the client document.
 */
export default function CessationOfEmploymentAndEssStatements() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Employment Changes &amp; Reporting
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Employment Cessation and ESS Statements
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Key legislative changes regarding leaving an employer, and essential
            compliance checks for employer ESS statements and ATO pre-fill data.
          </p>
        </div>

        {/* 2-Column Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: What happens if employment ends? */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <UserDeleteOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    What Happens if Employment Ends?
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Post-1 July 2022 Legislative Rules
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40 text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">
                  <span className="font-bold block mb-1">
                    Major Rule Change (Post-1 July 2022):
                  </span>
                  For cessation of employment on or after 1 July 2022, leaving
                  an employer is no longer, by itself, a deferred taxing point
                  under the current rules.
                </div>

                <p>
                  However, leaving may cause rights to vest or lapse, remove
                  restrictions, alter forfeiture conditions or trigger a sale
                  under the plan. Those events can still affect the ESS or CGT
                  treatment.
                </p>

                <p>
                  Older interests, including some acquired before 1 July 2009,
                  may follow different rules. Review the grant date, scheme
                  terms and events occurring when employment ended.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              Cessation taxing point abolished from 1 July 2022
            </div>
          </div>

          {/* Card 2: ESS Statements & Pre-fill */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <AuditOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    ESS Statements &amp; Tax Return Reporting
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Reconciling Employer Data Against Actual Events
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Employers generally provide an ESS statement containing
                  information reported to the ATO, such as the scheme type and
                  assessable discount. The information may pre-fill in the
                  employee&apos;s tax return, but pre-fill should be checked
                  against the statement, grant records and actual events.
                </p>

                <p>
                  The employer statement may not contain everything needed for a
                  later disposal calculation. Keep the underlying plan,
                  acquisition, vesting, exercise, restriction and sale records.
                  Financially Up can assist with ESS-related return preparation
                  and identify missing information.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Grant letters &amp; plan rules audited
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Book Statement Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
