"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  FileDoneOutlined,
  CalculatorOutlined,
  HomeOutlined,
  CommentOutlined,
  FileTextOutlined,
  HistoryOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsCgt Component
 * =================================
 * Section 12 & 13: How Financially Up Can Help & What Records Should You Keep for CGT?
 * Features 100% complete, verbatim content from Page 6 of the client document.
 */
export default function HowFinanciallyUpHelpsCgt() {
  const company = useCompany();

  const services = [
    {
      title: "Tax-Return Preparation",
      desc: "Preparing and lodging relevant tax-return information where authorized, including reporting capital gains and capital losses within the agreed scope.",
      icon: <FileDoneOutlined className="text-emerald-500" />,
    },
    {
      title: "CGT Calculation or Review",
      desc: "Reviewing relevant documents and cost-base information to help calculate or assess a capital gain or capital loss.",
      icon: <CalculatorOutlined className="text-blue-500" />,
    },
    {
      title: "Property CGT Assistance",
      desc: "Considering ownership, property use, improvements and potential main-residence issues relevant to a disposal.",
      icon: <HomeOutlined className="text-amber-500" />,
    },
    {
      title: "Pre-Sale CGT Advice",
      desc: "Discussing potential CGT considerations before an asset is sold, where appropriate and separately agreed.",
      icon: <CommentOutlined className="text-purple-500" />,
    },
    {
      title: "Written Tax Advice",
      desc: "Formal or written advice may require a separate scope and an appropriate service arrangement.",
      icon: <FileTextOutlined className="text-indigo-500" />,
    },
  ];

  const records = [
    "Purchase and sale contracts and settlement statements",
    "Receipts, invoices and records of legal, agent, brokerage and transaction costs",
    "Evidence of capital improvements and other relevant capital expenditure",
    "Ownership interests, ownership changes and property-use history",
    "Valuation reports or other market-value evidence where an applicable CGT rule requires it",
    "Share-trading, managed-fund and investment-platform reports",
    "Prior tax returns, carried-forward capital loss records and relevant ATO correspondence",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Professional Practice &amp; Records
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} provides capital
            gains tax assistance to Australian individuals. The appropriate
            service depends on the transaction, records, complexity and the type
            of assistance required.
          </p>
        </div>

        {/* 5 Service Scopes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-xl mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500 font-medium">
                Scope confirmed prior to engagement
              </div>
            </div>
          ))}

          {/* Scope Clarification Card */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/20 rounded-3xl p-6 sm:p-7 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xs uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-300 block mb-2">
                Scope Confirmation
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Detailed Advice Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Detailed pre-sale advice and written tax advice are not
                automatically included in standard tax-return preparation. The
                required work can be confirmed after the circumstances and
                records have been reviewed.
              </p>
            </div>
            <Link href="/book-an-appointment" className="mt-4">
              <Button
                type="primary"
                className="brand-btn-primary font-bold text-xs h-9 px-4 w-full"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Book Initial Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Records to Keep Deep Dive */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Substantiation Standard
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              What Records Should You Keep for CGT?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-2 leading-relaxed">
              Keep records that explain how you acquired, held, improved and
              disposed of a CGT asset and that support each amount used in the
              calculation. Depending on the asset, relevant records may include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {records.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium"
              >
                <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed flex items-start gap-3">
            <HistoryOutlined className="text-lg text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold block mb-1">
                Statutory Retention Period:
              </span>
              CGT records generally need to be kept for at least five years
              after the relevant CGT event. If a net capital loss is carried
              forward, records supporting that loss generally need to be kept
              for at least five years after the income year in which the loss is
              applied. Records may therefore need to be retained throughout a
              long ownership period and beyond the eventual disposal.
            </div>
          </div>
        </div>

        {/* Dynamic Company Details */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
          <span>Need phone assistance?</span>
          <a
            href={`tel:${company.phone?.replace(/\s/g, "")}`}
            className="font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
          >
            <PhoneOutlined /> {company.phone}
          </a>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">
            •
          </span>
          <span>
            Registered Tax Agent #{company?.taxAgentNumber || "26242127"}
          </span>
        </div>
      </div>
    </section>
  );
}
