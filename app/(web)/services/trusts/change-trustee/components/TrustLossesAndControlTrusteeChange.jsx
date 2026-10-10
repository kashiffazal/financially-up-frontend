"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  InfoCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * TrustLossesAndControlTrusteeChange Component
 * ============================================
 * Section: Trust losses and control should not be overlooked
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Explains control test considerations for trust losses, Family Trust Election exceptions,
 * and income injection test risks when changing trustees.
 */
export default function TrustLossesAndControlTrusteeChange() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Integrity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust losses and control should not be overlooked
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For an ordinary non-fixed trust, a trustee change may be relevant when considering whether control has
            changed for trust loss purposes. A trustee change does not automatically fail a control test, and a trust
            with a valid family trust election is generally excepted from the ownership and control tests, although the
            income injection test can still apply in some circumstances. The wider facts, election status and tax history
            should be reviewed where losses or debt deductions are relevant.
          </p>
        </div>

        {/* 2 Core Loss & Control Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center mb-4">
                <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Control Test Continuity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Non-fixed trusts carrying forward prior-year tax losses or bad debt deductions must satisfy statutory
                control tests. Replacing the trustee requires checking whether power to direct distributions or
                appointments has shifted.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-teal-600 dark:text-teal-400 font-semibold">
              Ordinary Non-Fixed Trust Analysis
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-4">
                <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Family Trust Election (FTE) Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Trusts with an FTE lodged are generally excepted trusts for ownership/control tests. However, the income
                injection test can still disallow deductions if new arrangements channel income into the loss trust.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-blue-600 dark:text-blue-400 font-semibold">
              Income Injection Test Compliance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
