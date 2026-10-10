"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhichAddressesAsicRecords Component
 * ===================================
 * Section 1 of Change Company Address (/services/asic/address-changes/):
 * "Which company addresses does ASIC record?"
 *
 * Implements 100% complete, verbatim content from Page 8 of '7th Pillar ASIC.docx'.
 * Distinct cards for Registered Office, Principal Place of Business, and Contact/Agent Addresses.
 */
export default function WhichAddressesAsicRecords() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Corporate Address Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Which company addresses does ASIC record?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ASIC requires a registered company to keep certain addresses current. The two core addresses are the registered office and the principal place of business. A company may also have a contact address, and companies that use a registered agent can have the agent’s address recorded for correspondence.
          </p>
        </div>

        {/* 2 Core Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 1. Registered Office */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                Registered office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The registered office is the address where official communications and documents can be sent to the company. ASIC requires it to be a physical street address in Australia and not a post office box. It does not have to be where the business actually operates.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A company can use another person’s premises, such as an accountant’s office, as its registered office. Where the company does not occupy the premises, ASIC requires the company to have the occupier’s written consent and to keep that consent with its records.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircleOutlined /> Physical Australian Street Address Required (No PO Box)
            </div>
          </div>

          {/* 2. Principal Place of Business */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-5">
                <ShopOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
                Principal place of business
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The principal place of business is the main location where the company conducts business. ASIC also requires this to be a physical address rather than a post office box. It may be the same as the registered office, but it does not have to be.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Getting the distinction right ensures operational commercial correspondence arrives at trading premises while legal notices and ASIC statements arrive at the registered office.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 mt-6 flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400">
              <CheckCircleOutlined /> Operational Commercial Premise (Physical Address)
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Need to update your company address with ASIC?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
              If your company has moved or needs to change its registered office, Financially Up can review the current ASIC record and help determine which addresses should be updated.
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
