"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  CheckCircleOutlined,
  RiseOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesStructureAdviceCover Component
 * Covers 'What does business structure advice cover?'
 * from Page 5 of 6th Pillar Business Structures.docx.
 */
export default function WhatDoesStructureAdviceCover() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <CompassOutlined className="mr-1.5" />
              Strategic Entity Choice
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What does business structure advice cover?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The purpose of business structuring advice is to match the structure to the commercial situation. In Australia, common structures include sole trader, partnership, company and trust. They differ in ownership, legal status, liability, tax treatment, administration and reporting obligations.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A business structure advisor should look beyond the headline tax rate. The useful question is how the structure works with the business you actually plan to operate, who will own it, how money will move through it, what risks need to be managed and what may happen as the business grows.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <ApartmentOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Beyond Headline Tax Rates
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A lower tax rate in isolation does not guarantee optimal cash flow or flexibility. True structural advice integrates asset protection, operational liability, administrative overhead, and capital raising potential.
              </p>
              <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-700 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Custom evaluation of commercial risk, cash flows, and growth paths.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
