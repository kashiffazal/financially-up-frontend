"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  SyncOutlined,
} from "@ant-design/icons";

/**
 * WhatHappensAfterRegistration Component
 * Covers 'What happens after GST registration?' and 'GST registration and business structure changes'
 * with links to BAS Lodgement & Bookkeeping from Page 3 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatHappensAfterRegistration() {
  const obligations = [
    "Include 10% GST in the price of all taxable goods and services sold",
    "Issue compliant tax invoices displaying your ABN and GST breakdown where required",
    "Maintain complete source records supporting GST treatment for 5+ years",
    "Report GST collected and GST credits through recurring business activity statements",
    "Claim GST input tax credits on eligible business operational purchases",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: What happens after GST registration? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag
              color="blue"
              className="brand-section-tag font-bold tracking-wider uppercase text-xs"
            >
              <FileTextOutlined className="mr-1.5" />
              Operational Obligations
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What happens after GST registration?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Once registered, a business generally needs to include GST in the
              price of taxable sales, issue appropriate tax invoices where
              required, keep records supporting GST treatment and report GST
              through activity statements. The business may also be able to
              claim GST credits on eligible business purchases, subject to the
              GST rules and documentation requirements.
            </p>

            <div className="space-y-3 pt-2">
              {obligations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleOutlined className="text-xs" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal pt-2">
              Ongoing reporting after registration is handled through the
              business activity statement. See our BAS Lodgement service for
              assistance preparing and lodging activity statements. If
              transaction coding and reconciliations need ongoing attention, our
              Bookkeeping services may also be relevant.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Link Card 1: BAS Lodgement */}
            <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  BAS Lodgement Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Prepare, reconcile, and lodge your quarterly or monthly
                  activity statements smoothly with registered tax agent
                  support.
                </p>
              </div>
              <Link href="/services/bas-payroll/bas-lodgement">
                <Button
                  type="primary"
                  size="middle"
                  className="font-bold w-full"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Explore BAS Lodgement
                </Button>
              </Link>
            </div>

            {/* Link Card 2: Bookkeeping */}
            <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Routine Bookkeeping Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Accurate GST coding begins with reconciled bank feeds and
                  properly classified bills in Xero, MYOB, or QuickBooks.
                </p>
              </div>
              <Link href="/services/bookkeeping">
                <Button
                  type="default"
                  size="middle"
                  className="font-bold w-full"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Explore Bookkeeping
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Part 2: GST registration and business structure changes */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <ApartmentOutlined />
              Entity Restructures
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              GST registration and business structure changes
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A change from one legal entity to another can affect
              registrations. For example, moving from a sole trader to a company
              creates a different entity for tax purposes. The GST position
              should therefore be reviewed as part of the wider restructure
              rather than assuming the old registration simply continues
              unchanged.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where a structure change has broader tax or legal consequences,
              registration work should be coordinated with separately scoped
              accounting, tax or legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
