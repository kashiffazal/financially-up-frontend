"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * AccurateRecordsBeforeBas Component
 * Covers 'Accurate records come before accurate BAS figures'
 * with links to Bookkeeping and GST Registration from Page 2 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function AccurateRecordsBeforeBas() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Tag
            color="cyan"
            className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs"
          >
            <SafetyCertificateOutlined className="mr-1.5" />
            Underlying Integrity
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Accurate records come before accurate BAS figures
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            A BAS is only as reliable as the records behind it. Bank
            reconciliations, sales records, supplier bills, tax invoices and
            payroll information may all affect the final figures. If the
            accounting file has duplicate transactions, unreconciled bank items
            or incorrect GST coding, the BAS may need additional review before
            it is ready to lodge.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where the records themselves need ongoing attention, Financially
            Up&apos;s Bookkeeping services can be scoped separately. If you are
            not yet registered for GST and need help assessing or completing
            registration, see our GST Registration service.
          </p>
        </div>

        {/* Two Supporting Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Bookkeeping Services */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileProtectOutlined className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Need Ongoing or Catch-Up Bookkeeping?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If day-to-day transactions need processing or bank accounts
                remain unreconciled, our structured bookkeeping services ensure
                your books are clean and ready.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 dark:border-zinc-700 mt-6">
              <Link href="/services/bookkeeping">
                <Button
                  type="primary"
                  className="font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Explore Bookkeeping Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: GST Registration */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <ThunderboltOutlined className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Not Yet Registered for GST?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If you are approaching the $75,000 turnover threshold or
                considering voluntary GST registration, review your setup before
                lodging.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 dark:border-zinc-700 mt-6">
              <Link href="/services/bas-payroll/gst-registration">
                <Button
                  type="primary"
                  className="font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Explore GST Registration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
