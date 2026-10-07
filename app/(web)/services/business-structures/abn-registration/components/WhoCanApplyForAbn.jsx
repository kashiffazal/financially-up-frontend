"use client";

import React from "react";
import { Tag } from "antd";
import {
  IdcardOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
} from "@ant-design/icons";

/**
 * WhoCanApplyForAbn Component
 * Covers 'Who can apply for an ABN?'
 * from Page 3 of 6th Pillar Business Structures.docx.
 */
export default function WhoCanApplyForAbn() {
  const businessFactors = [
    "Commercial purpose and activity",
    "Intention to make a commercial profit",
    "Repetition and regular continuity of transactions",
    "Systematic organization and operational record keeping",
    "Activity carried on in a recognizable, business-like way",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <IdcardOutlined className="mr-1.5" />
              ABR Entitlement
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Who can apply for an ABN?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The Australian Business Register states that an entity may be entitled to an ABN where it is carrying on or starting an enterprise in Australia, making supplies connected with Australia&apos;s indirect tax zone, or is a Corporations Act company. The rules can also apply to other entities such as trusts, partnerships and organisations depending on their activities.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              There is no single test for whether an activity is a business. Factors can include commercial purpose, an intention to make a profit, repetition, organisation and whether the activity is carried on in a business-like way.
            </p>

            {/* Employment exclusion note */}
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-start gap-3 text-sm text-rose-900 dark:text-rose-200">
              <CloseCircleOutlined className="text-lg text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <span>
                <strong>Crucial Exclusion:</strong> A person who is only performing work as an employee is not entitled to an ABN for that employment activity.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <ShopOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Indicators of Carrying on an Enterprise
                </h3>
              </div>
              <ul className="space-y-3">
                {businessFactors.map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
