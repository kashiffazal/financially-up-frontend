"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  IdcardOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * ExecutorsAndEstateBeneficiaries Component
 * =========================================
 * Section 3 & 4: Executors and Legal Personal Representatives & Estate Income and Beneficiaries.
 * Features 100% complete, verbatim content from Page 13 of the client document.
 */
export default function ExecutorsAndEstateBeneficiaries() {
  const representativeTasks = [
    "notify the ATO of the death;",
    "provide evidence of death;",
    "establish authority to act;",
    "obtain relevant tax information;",
    "arrange any outstanding or final returns;",
    "register the estate for a TFN where required; and",
    "confirm that tax obligations are complete before final distribution.",
  ];

  const taxOutcomeFactors = [
    "the terms of the will;",
    "whether estate administration is complete;",
    "whether debts and liabilities have been determined;",
    "the beneficiary's entitlement; and",
    "the type of income or gain involved.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 3: Executors and Legal Personal Representatives */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Authority &amp; Representation
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Executors and Legal Personal Representatives
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The executor, administrator or other recognized legal personal representative is generally responsible for managing the deceased person&apos;s tax affairs and the estate&apos;s tax obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 7 Representative Steps */}
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <IdcardOutlined className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Legal Authority Protocols
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Family Members Are Not Automatically Authorized
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  A family member is not automatically authorized to access the deceased person&apos;s ATO information. The appropriate representative may need to:
                </p>

                <div className="space-y-2.5">
                  {representativeTasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Authority Verification Callout */}
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <SafetyCertificateOutlined className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Establishing ATO Authority
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Prerequisite for Tax Agent Representation
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Professional Practice Rule:
                    </span>
                    Financially Up may need to confirm the representative&apos;s authority before accessing ATO information or preparing returns.
                  </div>
                  <p>
                    Under Tax Practitioners Board (TPB) and ATO data security protocols, an executor or administrator must present probate documents, letters of administration, or certified proof of representation before we can link the deceased file or lodge returns.
                  </p>
                  <p>
                    This protects the estate from premature distributions and guarantees that all outstanding income tax and capital gains liabilities are fully settled prior to finalizing beneficiary shares.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
                Ethical representation ensuring executors fulfill their fiduciary tax duties.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Estate Income and Beneficiaries */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="max-w-3xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Distribution &amp; Entitlement Dynamics
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Estate Income and Beneficiaries
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Estate income may be assessed to the legal personal representative or to a beneficiary, depending on the administration stage and whether a beneficiary is presently entitled to the income.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-semibold">
              Receiving an inheritance is not automatically assessable income. However, a beneficiary may need to report a share of the estate&apos;s net income where the relevant tax rules apply.
            </p>
          </div>

          <div className="mb-8">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-4">
              The tax outcome can depend on:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {taxOutcomeFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium"
                >
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-zinc-700/50 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 text-center font-medium">
            Detailed beneficiary or estate-distribution advice may require separate review and scope.
          </div>
        </div>
      </div>
    </section>
  );
}
