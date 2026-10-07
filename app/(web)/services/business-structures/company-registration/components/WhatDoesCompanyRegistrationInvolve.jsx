"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  BankOutlined,
  IdcardOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesCompanyRegistrationInvolve Component
 * Covers 'What does company registration involve?'
 * from Page 2 of 6th Pillar Business Structures.docx.
 */
export default function WhatDoesCompanyRegistrationInvolve() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <BankOutlined className="mr-1.5" />
              ASIC Incorporation
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What does company registration involve?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              To register a company in Australia, the company is incorporated through the Australian Government&apos;s Business Registration Service or another permitted registration process, with ASIC processing the registration. Once registered, the company receives an Australian Company Number (ACN) and appears on the companies register.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A company is legally separate from its shareholders. That distinction matters for banking, contracts, taxation and access to company funds. Directors make decisions for the company and are responsible for meeting their legal duties.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <IdcardOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Separate Legal Entity
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Incorporating creates an entity that can hold assets, incur debt, enter legal contracts, sue and be sued. This distinct identity separates corporate liabilities from personal owner assets.
              </p>
              <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-700 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Instant issuance of Australian Company Number (ACN) upon ASIC approval.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
