"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  CloudUploadOutlined,
  TeamOutlined,
  LaptopOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * OnlineAndOutsourced Component
 * =============================
 * Section 5: Online and outsourced bookkeeping services.
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 * Background: Lite Brand Gradient.
 */
export default function OnlineAndOutsourced() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <CloudUploadOutlined className="mr-1" /> Flexible Delivery
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Online and outsourced bookkeeping services
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Online bookkeeping can suit businesses that want records maintained
            without relying on paper files or regular office visits. Documents can
            be shared electronically, transactions reviewed in cloud accounting
            software and questions resolved as part of an agreed workflow.
          </p>
        </div>

        {/* 2 Main Columns: Online Cloud Workflow vs Outsourced Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Column 1: Online Bookkeeping Advantage */}
          <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <LaptopOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Paperless & Remote
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Electronic & Cloud-Based Management
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Electronic document sharing and live cloud accounting access
                enable our team to keep your files reconciled without the friction
                of physical paperwork or office drop-offs.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Secure electronic receipt, invoice and document sharing</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Real-time transaction review inside modern cloud accounting systems</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Queries and exceptions resolved systematically within agreed workflows</span>
                </div>
              </div>
            </div>

            <Link href="/book-an-appointment" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Discuss Online Bookkeeping
              </Button>
            </Link>
          </div>

          {/* Column 2: Outsourced Bookkeeping Scope & Xero Pathway (Verbatim Paragraph 2) */}
          <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  <TeamOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Tailored Operations
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Tailored Outsourced Bookkeeping
              </h3>
              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Outsourced bookkeeping services can also reduce the need to
                manage the bookkeeping function internally. The service can be
                structured around the volume and complexity of your business
                rather than assuming every business needs the same frequency or
                tasks. For businesses using Xero, our Xero bookkeeping services
                page explains the software-specific bookkeeping support
                available.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span>Eliminate internal hiring, management, and training overheads</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span>Scope structured specifically around your transaction volume and complexity</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span>Dedicated workflows and software-specific bookkeeping support for Xero</span>
                </div>
              </div>
            </div>

            <Link href="/services/bookkeeping/xero-bookkeeping" className="w-full block">
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-12 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all flex items-center justify-center"
              >
                View Xero Bookkeeping Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
