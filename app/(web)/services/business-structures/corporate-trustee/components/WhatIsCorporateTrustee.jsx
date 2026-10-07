"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  CheckCircleOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsCorporateTrustee Component
 * Covers 'What is a corporate trustee?'
 * from Page 7 of 6th Pillar Business Structures.docx.
 */
export default function WhatIsCorporateTrustee() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <ApartmentOutlined className="mr-1.5" />
              Trustee Governance
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is a corporate trustee?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A corporate trustee is a company appointed to act as trustee of a trust. The trustee is responsible for administering the trust in accordance with the trust deed and relevant law. A trustee can be an individual or a company, so a corporate trustee is one possible trustee arrangement rather than a separate type of trust.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              This distinction matters when people search for a corporate trustee for family trust arrangements. A discretionary trust is often described in everyday language as a family trust, but the company acting as trustee remains a separate legal entity. A family trust election is also a separate tax concept and is not created merely because a trust uses a corporate trustee.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <BankOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Company as Trustee
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Using a Pty Ltd company as trustee provides continuity of ownership, insulates individual family members from personal trustee liability, and simplifies long-term succession without requiring asset transfers upon individual death.
              </p>
              <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-700 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Distinct roles between the trustee company and the trust itself.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
