"use client";

import React from "react";
import Link from "next/link";
import {
  AuditOutlined,
  ArrowRightOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * RepresentationDuringReviewsAuditsDisputes Component
 * ====================================================
 * Section 5: Role of representation across the compliance lifecycle:
 * review organization, audit coordination, and formal legal dispute boundaries.
 */
export default function RepresentationDuringReviewsAuditsDisputes() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Reviews, Audits & Disputes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            ATO representation during reviews, audits and disputes
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              If the ATO is reviewing or auditing an issue, representation can help keep requests, deadlines, records and responses organized. Financially Up can assist with accounting and tax information, review the factual background, prepare supporting schedules within scope and communicate with the ATO as authorized. Our ATO audit service covers audit-specific support in more detail.
            </p>
            <p>
              A formal objection, tribunal or court proceeding is different from routine ATO representation. We can identify when specialist tax advice or legal representation may be appropriate, but we do not present routine tax-agent representation as a substitute for legal advice in contested legal proceedings.
            </p>
          </div>
        </div>

        {/* 2 Comparative Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                  <AuditOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    Tax Agent Scope
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Reviews & Audits Assistance
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Keeping requests, deadlines, and source records structured. Reviewing factual backgrounds, assembling audit schedules, and communicating with case officers as an authorized tax agent.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
              <Link
                href="/services/ato-help/ato-audit"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1.5"
              >
                <span>Explore ATO Audit Support Service</span>
                <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                  <FileProtectOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                    Specialist Boundaries
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Formal Objections & Litigation
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                A formal objection, AAT/tribunal, or Federal Court proceeding requires distinct legal framing. We identify when specialist tax counsel or legal representation is required, maintaining honest professional boundaries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              <FileProtectOutlined /> Specialist Referral Coordination
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
