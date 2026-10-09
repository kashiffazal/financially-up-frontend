"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  ShopOutlined,
  MailOutlined,
  CalendarOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsBusinessNameRenewal Component
 * ===================================
 * Section 1 of Business Name Renewal (/services/asic/business-name-renewal/):
 * 1. "What is a business name renewal?"
 * 2. "Who may need a business name renewal service?"
 *
 * Implements 100% complete, verbatim content from Page 4 of '7th Pillar ASIC.docx'.
 * Responsive feature cards, renewal period options (1 or 3 years), and 30-day notice alerts.
 */
export default function WhatIsBusinessNameRenewal() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Registration Lifecycle & Continuity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is a business name renewal?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business name is registered for a set period. ASIC currently allows a business name registration to be renewed for either one year or three years. If you want to continue using the registered name, the renewal needs to be dealt with rather than simply assuming the name remains active indefinitely.
          </p>
        </div>

        {/* 2-Column Focus: 30-Day Notice & Who Needs Renewal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: 30-Day Renewal Notice Mechanism */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                <MailOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                ASIC 30-Day Notice Mechanism
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                ASIC generally sends a renewal notice 30 days before the registration is due to expire, usually by email. The notice provides the details needed to complete the renewal.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If you have changed email, address or other registration information, it is important to make sure ASIC has current details so official notices are less likely to be missed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 dark:border-zinc-800 mt-6">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/60 dark:border-zinc-800 text-center">
                <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 block">1 Year</span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">Short-term renewal</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/60 dark:border-zinc-800 text-center">
                <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 block">3 Years</span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">Long-term certainty</span>
              </div>
            </div>
          </div>

          {/* Card 2: Who May Need a Business Name Renewal Service? */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-5">
                <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                Who may need a business name renewal service?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Business name renewal support can be useful for sole traders, partnerships, trusts and companies when ASIC correspondence has changed hands, a renewal notice is missing, several names are held, or registration details need review.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The renewal itself is an ASIC registration matter, not a tax return or bookkeeping service. If a wider change is happening - for example, a change of entity, sale of the business or restructure - the correct step may be more than simply renewing the existing name. In those circumstances, the ownership and registration position should be reviewed first.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                Registering a new name instead?
              </span>
              <Link href="/services/business-structures/business-name-registration">
                <Button
                  type="link"
                  className="p-0 font-bold text-teal-600 dark:text-teal-400 hover:underline text-xs"
                  icon={<ArrowRightOutlined className="text-[10px]" />}
                  iconPosition="end"
                >
                  New Registration Service
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Is your business name approaching expiry?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
              If your business name is due for renewal or you are unsure whether the registration details are current, an initial discussion can identify what needs to be checked and the appropriate service scope.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="w-full sm:w-auto rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 border-none h-11"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
