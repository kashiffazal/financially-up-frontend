"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhyRegisterMaintenanceMattersAndCommonProblems Component
 * =======================================================
 * Section 2 of Corporate Registers (/services/asic/corporate-registers/):
 * 1. "Why company register maintenance matters"
 * 2. "Common problems with company records and registers" (7 issues)
 *
 * Implements 100% complete, verbatim content from Page 10 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, director responsibility notice, 7-point problem list, and cross-service links.
 */
export default function WhyRegisterMaintenanceMattersAndCommonProblems() {
  const commonProblems = [
    "The ASIC shareholder details and internal share register do not match",
    "Older share issues or transfers are not clearly documented",
    "Share certificates or member details are missing or outdated",
    "Board or member resolutions are stored in different locations",
    "The company has changed accountants and no complete corporate register was handed over",
    "Address or officeholder changes were updated with ASIC but not reflected in internal records",
    "The company constitution, consents or historical documents are difficult to locate",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Why company register maintenance matters */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Due Diligence & Audit Readiness
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why company register maintenance matters
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Good corporate records provide a reliable history of the company. They can help directors understand ownership and decisions, support future transactions, make annual reviews easier and reduce confusion when the company changes advisers. They may also be important when a shareholder, auditor, lawyer, lender or regulator needs evidence of particular corporate information.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              ASIC makes clear that directors remain responsible for company records even where another person, such as an accountant, physically holds them. Outsourcing company register management therefore supports administration but does not transfer the officeholders&apos; legal responsibilities.
            </p>
          </div>
        </div>

        {/* Subsection 2: Common problems with company records and registers */}
        <div className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Common Corporate Deficiencies
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Common problems with company records and registers
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {commonProblems.map((prob, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800"
                >
                  <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium">
                    {prob}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-200/70 dark:border-zinc-800 m-0">
              Where the issue is a current ASIC update rather than internal record maintenance, our{" "}
              <Link href="/services/asic/company-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Company Changes service
              </Link>{" "}
              may be the more appropriate starting point. For yearly compliance around the ASIC statement, fee and solvency process, see{" "}
              <Link href="/services/asic/annual-reviews" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ASIC Annual Reviews
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
