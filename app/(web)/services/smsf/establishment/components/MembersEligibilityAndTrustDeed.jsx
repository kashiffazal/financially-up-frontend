"use client";

import React from "react";
import { Tag } from "antd";
import {
  TeamOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * MembersEligibilityAndTrustDeed Component
 * ========================================
 * Implements verbatim SEO content from Page 3 of 9th Pillar SMSF.docx:
 * - Members, trustees and eligibility
 * - Trust deed and legal establishment
 */
export default function MembersEligibilityAndTrustDeed() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Membership & Governing Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Members, trustees and eligibility
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF can generally have up to six members. Subject to limited exceptions, members must also be individual trustees or directors of the corporate trustee. Trustees must be eligible to act and should understand that they remain responsible for the fund even when accountants, administrators or other professionals are engaged.
          </p>
        </div>

        {/* 2-Column Content: Trustee Declaration & Trust Deed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: 21-Day Trustee Declaration */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-6">
                <TeamOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                ATO Trustee Declaration (21-Day Statutory Window)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Each new trustee or corporate-trustee director must consent in writing and sign the ATO trustee declaration within 21 days of appointment. The declaration confirms their key responsibilities and must be retained while they remain in the role or for 10 years, whichever is longer.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 text-sm mt-0.5 shrink-0" />
                  <span>Acknowledgment of the sole purpose test for retirement benefits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 text-sm mt-0.5 shrink-0" />
                  <span>Understanding of investment restrictions, lending bans, and in-house asset limits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 text-sm mt-0.5 shrink-0" />
                  <span>Retention of signed declaration for at least 10 years or duration of tenure</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-purple-700 dark:text-purple-400 font-medium">
              <CalendarOutlined />
              <span>Must be signed within 21 days of appointment</span>
            </div>
          </div>

          {/* Card 2: Trust Deed and Legal Establishment */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <FileProtectOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Trust deed and legal establishment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                An SMSF needs a trust deed that sets out the fund&apos;s rules and trustee powers within the superannuation-law framework. The fund also needs to be legally established, which includes holding assets for the benefit of members.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Trust deed preparation is a legal-document matter, so Financially Up may coordinate with an appropriate legal document provider or legal adviser rather than presenting accounting assistance as legal advice.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400 font-medium">
              <SafetyCertificateOutlined />
              <span>Coordinated with accredited legal document providers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
