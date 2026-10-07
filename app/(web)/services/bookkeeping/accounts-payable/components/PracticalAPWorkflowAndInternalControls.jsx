"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  InboxOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
  ArrowRightOutlined,
  LockOutlined,
} from "@ant-design/icons";

/**
 * PracticalAPWorkflowAndInternalControls Component
 * ==================================================
 * Section 5: A Practical Accounts Payable Workflow & Internal Controls Still Matter
 * Features 100% complete, verbatim content from Page 6 of client docx.
 */
export default function PracticalAPWorkflowAndInternalControls() {
  const workflowSteps = [
    {
      number: "01",
      icon: <InboxOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Centralized Invoice Capture",
      body: "A reliable AP process starts with a consistent path for invoices. Supplier bills should reach an agreed inbox, software tool or responsible person rather than being spread across individual email accounts and paper files.",
    },
    {
      number: "02",
      icon: <CheckCircleOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "Recording, Coding & Verification",
      body: "The invoice is then recorded and coded, with supporting information attached where available. Items requiring operational approval, clarification or different tax treatment can be flagged instead of being pushed through automatically. Approved bills can then be included in a payment list or the client's usual payment workflow according to agreed responsibilities.",
    },
    {
      number: "03",
      icon: <SyncOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Reconciliation & Ledger Health",
      body: "Regular reconciliation helps identify duplicates, missing credits, supplier-statement differences and old balances. This makes the payable ledger more useful for both day-to-day management and later accounting work.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Workflow &amp; Risk Management
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Practical Accounts Payable Workflow
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A reliable AP process starts with a consistent path for invoices, disciplined review, and rigorous internal segregation of duties.
          </p>
        </div>

        {/* 3 Workflow Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Stage {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Internal Controls Block */}
        <div className="bg-slate-900 text-white dark:bg-zinc-950 rounded-2xl p-7 sm:p-9 border border-slate-800 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <LockOutlined className="text-emerald-400 text-2xl" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Internal Controls Still Matter
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <p>
              Outsourced AP services work best when responsibilities are clear. The person entering a bill does not necessarily need to be the person approving the purchase or releasing the payment. Depending on the size and risk profile of the business, approval limits, dual authorization or other controls may be appropriate.
            </p>
            <p>
              Financially Up can work within the bookkeeping process you establish, but decisions about banking authority, fraud controls, procurement policy and legal responsibilities remain matters for the business. Where specialist legal, technology or internal-control advice is needed, that should be separately obtained.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Clear segregation of duties protects business cash reserves
            </span>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="bg-emerald-500 hover:bg-emerald-400 border-none font-bold text-white"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
