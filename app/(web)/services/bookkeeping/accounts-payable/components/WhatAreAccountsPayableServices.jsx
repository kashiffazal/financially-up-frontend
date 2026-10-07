"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  CalendarOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatAreAccountsPayableServices Component
 * =========================================
 * Section 1: What Are Accounts Payable Services?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 */
export default function WhatAreAccountsPayableServices() {
  const scopeHighlights = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Supplier Bill Ingestion & Entry",
      description:
        "Receiving, scanning, and entering incoming vendor invoices directly into your accounting platform with digital attachments.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "General Ledger & GST Coding",
      description:
        "Classifying line items to appropriate cost accounts and applying correct Australian GST input tax credits.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Due Date & Cash Flow Tracking",
      description:
        "Monitoring credit terms, payment deadlines, and early settlement opportunities to maintain strong supplier relationships.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Separation of Processing & Approval",
      description:
        "We handle the heavy lifting of administrative processing, while ultimate payment approval and banking authority remain 100% with you.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Definition &amp; Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Are Accounts Payable Services?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Accounts payable services support the bookkeeping process for supplier bills and amounts owed by the business. Depending on the agreed scope, this can include receiving or entering bills, coding transactions, maintaining supplier records, matching supporting documents, monitoring due dates and reconciling payable balances.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Accounts payable outsourcing does not have to mean giving up financial control. A well-designed outsourced AP process separates routine processing from approval authority. Financially Up can support the bookkeeping workflow, while payment approval and banking authority remain subject to the controls agreed with the client.
          </p>
        </div>

        {/* 4 Scope Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {scopeHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
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

        {/* Financial Control Reassurance Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-xl shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Maintain full executive oversight: we organize bills and compile payment schedules, while you retain absolute authority over bank payments.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Discuss Your AP Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
