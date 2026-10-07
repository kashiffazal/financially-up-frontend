"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
} from "@ant-design/icons";

/**
 * WhenNeedBusinessName Component
 * Covers 'When do you need to register a business name?'
 * from Page 4 of 6th Pillar Business Structures.docx.
 */
export default function WhenNeedBusinessName() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <ShopOutlined className="mr-1.5" />
              ASIC Business Names
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              When do you need to register a business name?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              You generally need to register a business name if you carry on business under a name other than the legal name of the person or entity operating the business. A sole trader using only their own first name and surname may not need a separate business name. A partnership using all partners’ personal names, or a company trading under its registered company name, may also not need a separate registration. If you add other words or trade under a different brand, registration may be required.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Business names are registered nationally through ASIC. Registration is different from forming a company, obtaining an ABN or registering a trade mark. These are separate legal and administrative steps, even though they often occur around the same time when a new business is being established.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <BankOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  National ASIC Registry
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                All Australian business names are managed nationally under the Commonwealth Business Names Registration Act 2011, ensuring consistent registration across all states and territories.
              </p>
              <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-700 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Legally required before trading under commercial brand names.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
