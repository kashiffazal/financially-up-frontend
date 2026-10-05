"use client";

import React from "react";
import {
  BankOutlined,
  FileTextOutlined,
  AuditOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  CheckOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 7: What Information May Be Needed?
 * Detailed checklist of documentation, bank statements, and software access
 * needed for smooth bookkeeping onboarding and ongoing reconciliation.
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeeded() {
  const documents = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank & Credit-Card Statements",
      description:
        "Full statements for all business operating accounts, credit cards, PayPal, Stripe, and merchant facilities for the period being reconciled.",
      tag: "Statements",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Supplier Invoices & Receipts",
      description:
        "Bills, tax invoices, purchase orders, and expense receipts (digital PDFs or photos) substantiating business operational expenditure.",
      tag: "Invoices",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Sales Invoices & POS Reports",
      description:
        "Customer invoices issued, point-of-sale (POS) terminal summaries, e-commerce reports (Shopify, WooCommerce), and daily takings.",
      tag: "Revenue",
    },
    {
      icon: <UserOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Payroll & Super Records",
      description:
        "Wages summaries, timesheets, PAYG withholding details, and superannuation contribution payment records where payroll is included.",
      tag: "Payroll",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Prior BAS & Tax Documents",
      description:
        "Previously lodged Business Activity Statements and recent tax returns to confirm opening balances, GST status, and prior lodgment history.",
      tag: "Prior BAS",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Accounting Software Access",
      description:
        "Standard or advisor access to your existing Xero, MYOB, or QuickBooks file, or prior spreadsheet records if migrating from DIY.",
      tag: "Software Access",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <FolderOpenOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Preparation Guide
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            The exact information depends on your business setup and the work required. If records are incomplete or months behind, our first step is to establish what is available rather than guess missing figures.
          </p>
        </div>

        {/* 6 Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {doc.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {doc.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Notice Box */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <CheckOutlined className="text-lg" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Behind on Your Financial Records?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Don&apos;t worry if you don&apos;t have every receipt filed neatly right now. Book an appointment and our qualified bookkeepers will guide you step-by-step through retrieving bank feeds and bringing your accounts up to date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
