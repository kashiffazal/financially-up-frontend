"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  BookOutlined,
  FileDoneOutlined,
  FundOutlined,
  UsergroupAddOutlined,
  DollarCircleOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededTrustPlanning Component
 * ============================================
 * Section 5: 7-point information checklist for trust distribution reviews,
 * trust deed variations, and annual return alignment.
 * Verbatim text from Page 10 of the Tax Planning document.
 */
export default function WhatInformationNeededTrustPlanning() {
  const documents = [
    {
      icon: (
        <BookOutlined className="text-xl text-brand-primary dark:text-emerald-400" />
      ),
      title: "Current Trust Deed & Variations",
      desc: "The current trust deed and any amendments or variations.",
    },
    {
      icon: (
        <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Prior Returns & Resolutions",
      desc: "Prior-year trust tax returns and distribution resolutions.",
    },
    {
      icon: (
        <FundOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Accounts & Income Estimates",
      desc: "Current-year accounts or a reliable estimate of trust income and taxable income.",
    },
    {
      icon: (
        <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Potential Beneficiaries",
      desc: "Details of potential beneficiaries and any entities connected with them.",
    },
    {
      icon: (
        <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Capital Gains & Franked Dividends",
      desc: "Information about capital gains, franked dividends and other significant income.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
      ),
      title: "Company Beneficiaries & Balances",
      desc: "Details of company beneficiaries, unpaid entitlements or related-party balances where relevant.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      title: "Family Trust Elections (FTE/IEE)",
      desc: "Any family trust election or interposed entity election information, if applicable.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Document Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
        </div>

        {/* 7 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
          {documents.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-4 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Note on Return Alignment & Link */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <InfoCircleOutlined className="text-2xl text-emerald-400 mt-1 shrink-0" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Accurate records matter because the annual trust tax return needs
              to reflect the legal and tax position created by the trustee’s
              decisions. Our Trust Tax Returns service focuses on annual return
              preparation and reporting once the relevant distribution position
              is established.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <Link href="/services/business-tax/trust-tax-returns">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPlacement="end"
              >
                Explore Trust Tax Returns Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
