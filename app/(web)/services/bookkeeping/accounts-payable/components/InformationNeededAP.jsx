"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  KeyOutlined,
  FileTextOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  BankOutlined,
  QuestionCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededAP Component
 * ==============================
 * Section 6: What Information May Be Needed?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 */
export default function InformationNeededAP() {
  const documentChecklist = [
    {
      icon: (
        <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title:
        "Access to the accounting system and agreed bill-processing tools.",
      desc: "Standard or advisor permissions in Xero, MYOB, or automated receipt capture software.",
    },
    {
      icon: (
        <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Supplier invoices, credit notes and statements.",
      desc: "Vendor tax invoices, credit memoranda, and monthly merchant statements for matching.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Existing supplier lists and coding conventions.",
      desc: "Preferred general ledger chart-of-accounts expense codes and supplier payment terms.",
    },
    {
      icon: (
        <CheckCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Details of who can approve purchases and payments.",
      desc: "Clear internal hierarchy of delegated authority limits and authorized sign-offs.",
    },
    {
      icon: (
        <FolderOpenOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Purchase-order or job information, where used by the business.",
      desc: "PO tracking, project job codes, or division tags for multi-entity reporting.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title:
        "Bank or payment information needed for reconciliation, subject to agreed access controls.",
      desc: "Read-only bank feed access or statement extracts to verify payment settlements.",
    },
    {
      icon: (
        <QuestionCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title:
        "Guidance on recurring suppliers, unusual purchases and business-specific coding.",
      desc: "Contextual instructions on contractor retainers, non-routine utility lines, and software seats.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Onboarding Requirements
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To set up a structured accounts payable routine, we gather key
            workflow tools, authority rules, and invoice channels.
          </p>
        </div>

        {/* 7 Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4 hover:border-emerald-400/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Onboarding Callout */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              We configure clear supplier payment channels and approval steps
              before processing live vendor bills.
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
              Establish AP Workflow
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
