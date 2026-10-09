"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  FileDoneOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatAreMonthlyBookkeepingServices Component
 * ============================================
 * Section 1: What Are Monthly Bookkeeping Services?
 * Features 100% complete, verbatim content from Page 3 of client docx.
 */
export default function WhatAreMonthlyBookkeepingServices() {
  const scopeHighlights = [
    {
      icon: (
        <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Bank & Credit-Card Reconciliations",
      description:
        "Monthly matching of statements against accounting software feeds, ensuring every dollar received and spent is accounted for accurately.",
    },
    {
      icon: (
        <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Transaction Coding & Review",
      description:
        "Consistent categorization of revenue and operating expenses to proper general ledger codes with appropriate Australian GST classifications.",
    },
    {
      icon: (
        <SyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Checking Outstanding Bookkeeping Items",
      description:
        "Identifying unexplained withdrawals, unmatched customer deposits, and unresolved clearing account balances promptly each month.",
    },
    {
      icon: (
        <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Organising Source Documents",
      description:
        "Systematically attaching supplier tax invoices, payment receipts, and expense proof directly to digital transactions for compliance.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Preparing File for Reporting & BAS",
      description:
        "Delivering verified monthly ledgers ready for managerial cash analysis, quarterly BAS lodgement, and smooth end-of-year tax returns.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Continuous Ledger Integrity",
      description:
        "Preventing errors from snowballing across months, giving owners trustworthy figures for ongoing commercial decision-making.",
    },
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
            Recurring Service Overview
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What are monthly bookkeeping services?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Monthly bookkeeping is a recurring service that reviews and
            maintains the accounting records for each month. Rather than
            treating bookkeeping as a once-a-year clean-up, the business follows
            a set routine for processing transactions, reconciling accounts and
            resolving questions while the information is still relatively
            current.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            The exact monthly tasks depend on the engagement. They may include
            bank and credit-card reconciliations, transaction coding and review,
            checking outstanding bookkeeping items, organising source documents
            and preparing the file for reporting, BAS or accounting work.
          </p>
        </div>

        {/* 6 Key Deliverable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {scopeHighlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Routine 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CalendarOutlined className="text-brand-primary dark:text-emerald-400 text-xl shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Want a reliable monthly rhythm instead of stressful quarterly
              backlogs? We establish a tailored closing workflow.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="font-bold shrink-0"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
