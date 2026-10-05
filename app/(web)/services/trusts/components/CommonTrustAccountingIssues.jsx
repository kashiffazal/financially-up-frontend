"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  WarningOutlined,
  DollarOutlined,
  ApartmentOutlined,
  CalendarOutlined,
  FileSearchOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * CommonTrustAccountingIssues Component
 * =====================================
 * Section 6: Common Trust Accounting Issues We Help Identify.
 *
 * 6 diagnostic cards highlighting critical trust accounting pitfalls:
 * Division 7A UPEs, Section 100A reimbursement agreements, late resolutions,
 * beneficiary account confusion, and capital asset cost base records.
 *
 * Background: Clean White.
 */
export default function CommonTrustAccountingIssues() {
  const commonIssues = [
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Division 7A Unpaid Entitlements (UPEs)",
      description:
        "When a trust distributes income to a corporate beneficiary ('bucket company') without transferring physical cash, the unpaid balance can trigger deemed unfranked dividends unless formalized under a complying 7-year loan agreement.",
      tag: "Division 7A",
    },
    {
      icon: <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Section 100A Integrity Scrutiny",
      description:
        "ATO scrutiny applies where trust income is allocated to low-tax-bracket adult beneficiaries, but the economic benefit is retained or enjoyed by other family members under non-commercial reimbursement arrangements.",
      tag: "ATO Scrutiny",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Late or Defective 30 June Resolutions",
      description:
        "Resolutions drafted after 30 June are invalid under trust law. Without timely present entitlement, the trustee faces default taxation at the top 47% marginal rate under Section 99A.",
      tag: "Resolution Timing",
    },
    {
      icon: <SyncOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Beneficiary Loan Account Confusion",
      description:
        "Mixing personal family living expenses with trust funds results in messy loan accounts and conflicting balance sheet liabilities between related entities.",
      tag: "Loan Accounts",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Missing Capital Gains Cost-Base Records",
      description:
        "Inadequate records of property acquisition costs, stamp duty, legal outlays, and capital renovations lead to overpaying capital gains tax upon asset disposals.",
      tag: "CGT Records",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Mismatched Beneficiary Tax Returns",
      description:
        "Discrepancies between what the trust tax return reports on distribution statements and what individual beneficiaries declare trigger immediate ATO data-matching audit flags.",
      tag: "Data Matching",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Audit & Diagnostic Review
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Common Trust Accounting Issues We Help Identify
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Trust accounting requires active management throughout the financial year. Financially Up identifies and rectifies compliance vulnerabilities before tax returns and activity statements are lodged.
          </p>
        </div>

        {/* 6 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {commonIssues.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Diagnostic Advisory Strip */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0 mt-1">
                <WarningOutlined className="text-amber-700 dark:text-amber-400 text-lg" />
              </div>
              <div className="space-y-1 max-w-3xl">
                <h4 className="text-base font-bold text-amber-950 dark:text-amber-200 m-0">
                  Are Your Trust Accounts and Division 7A Loans Fully Compliant?
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed m-0">
                  Unreconciled trust accounts, missing loan agreements, and outdated distribution minutes can trigger significant tax assessments. Book a trust compliance health check to ensure your family trust accounts and corporate beneficiaries satisfy current ATO guidelines.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
                >
                  Book Trust Health Check
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
