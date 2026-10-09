"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  BankOutlined,
  FileProtectOutlined,
  AuditOutlined,
  TeamOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsTrustNeedsToProvide Component
 * =====================================
 * Section: Records We May Need
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Itemizes the records required for trust accounting and tax return preparation.
 */
export default function RecordsTrustNeedsToProvide() {
  const recordCategories = [
    {
      category: "Bookkeeping & Bank Accounts",
      icon: (
        <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      items: [
        "Bookkeeping reports (Trial Balance, P&L, Balance Sheet)",
        "Bank statements for all trust accounts and end-of-year reconciliations",
        "Closing bank confirmations and electronic cash transaction feeds",
      ],
    },
    {
      category: "Investments & Property Assets",
      icon: (
        <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      items: [
        "Investment portfolios, dividend statements & annual tax statements",
        "Property rental schedules, agent summary reports & outgoings",
        "Asset purchase or disposal records (contracts, settlement sheets, CGT cost bases)",
      ],
    },
    {
      category: "Trust Deed & Governance",
      icon: (
        <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      items: [
        "Original trust deed and any subsequent deeds of variation or amendment",
        "Trustee distribution minutes and written resolutions executed by 30 June",
        "Family trust elections (FTE) or interposed entity elections (IEE) on record",
      ],
    },
    {
      category: "Beneficiaries & Loans / UPEs",
      icon: (
        <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      items: [
        "Beneficiary details (full names, TFNs, addresses, relationship to family group)",
        "Prior-year financial statements and trust tax returns",
        "Details of loans or unpaid beneficiary entitlements (UPEs) and movement schedules",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records We May Need
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful records can include bookkeeping reports, bank statements and
            reconciliations, investment and property statements, the trust deed
            and relevant amendments, prior-year financial statements and tax
            returns, beneficiary details, distribution resolutions, asset
            purchase or disposal records, and details of loans or unpaid
            beneficiary entitlements.
          </p>
        </div>

        {/* 4-Card Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {recordCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Connected Business & Company Tax Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/70 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ApartmentOutlined className="text-teal-600 dark:text-teal-400" />
              Operating a Business or Corporate Trustee Structure?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where the trust also runs a business, our Business Tax &amp;
              Accounting service can cover the broader accounting and tax work.
              If the business is operated through a company as well, the company
              generally has its own separate obligations; see our Company Tax
              Returns service.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax">
              <Button
                type="default"
                className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
              >
                Business Tax &amp; Accounting
              </Button>
            </Link>
            <Link href="/services/business-tax/company-tax-returns">
              <Button
                type="primary"
                className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Company Tax Returns
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
