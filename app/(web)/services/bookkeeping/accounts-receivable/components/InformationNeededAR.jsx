"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  TeamOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  BankOutlined,
  CreditCardOutlined,
  FolderOpenOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededAR Component
 * ==============================
 * Section 6: Information We May Need From You
 * Features 100% complete, verbatim content from Page 7 of client docx.
 */
export default function InformationNeededAR() {
  const documentChecklist = [
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Customer Details & Contacts",
      desc: "Complete debtor company names, billing contact persons, email addresses, and agreed payment terms.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Approved Billing Information",
      desc: "Sign-offs on project milestones, hours completed, price schedules, or approved dispatch quantities.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Contracts or Purchase Orders",
      desc: "Client purchase orders, service agreements, or retainer terms where required for matching.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Sales Invoices & Credit Notes",
      desc: "Issued tax invoices, milestone progress claims, and authorized client credit adjustments.",
    },
    {
      icon: <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Bank-Feed Access & Remittance Advice",
      desc: "Electronic banking feeds and customer remittance emails to identify multi-invoice bundle payments.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Details of Disputed Accounts",
      desc: "Clear notes on disputed work, partial withholdings, or payment arrangement schedules under review.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Checklist &amp; Inputs
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Information we may need from you
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact information depends on your systems and service scope, but may include customer details, approved billing information, contracts or purchase orders where relevant, sales invoices, bank-feed access, remittance advice, credit notes and details of disputed accounts.
          </p>
        </div>

        {/* 6 Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4 hover:border-emerald-400/60 transition-all duration-300"
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

        {/* Verbatim No-Guessing Guidance Box */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              We do not recommend guessing missing invoice or payment information. Where records are incomplete, we can help identify what needs to be clarified before entries are finalized.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="font-bold shrink-0"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
