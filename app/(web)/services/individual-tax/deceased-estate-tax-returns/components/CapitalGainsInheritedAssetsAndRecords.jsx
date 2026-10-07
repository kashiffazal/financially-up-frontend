"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  StockOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * CapitalGainsInheritedAssetsAndRecords Component
 * ===============================================
 * Section 5 & 6: Capital Gains and Inherited Assets & Records You May Need.
 * Features 100% complete, verbatim content from Page 13 of the client document.
 */
export default function CapitalGainsInheritedAssetsAndRecords() {
  const cgtFactors = [
    "when the deceased acquired the asset;",
    "the deceased person's cost base;",
    "whether a dwelling was the deceased person's main residence;",
    "whether the property produced income;",
    "when ownership passed; and",
    "when the estate or beneficiary disposed of the asset.",
  ];

  const recordsList = [
    "the will and death certificate;",
    "probate or letters of administration;",
    "previous tax returns and notices of assessment;",
    "income statements and pension information;",
    "bank, dividend and managed-fund statements;",
    "rental property income and expense records;",
    "property purchase and valuation records;",
    "investment acquisition and disposal documents;",
    "estate bank statements and accounts;",
    "beneficiary distribution records; and",
    "ATO notices or correspondence.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 5: Capital Gains and Inherited Assets */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              CGT &amp; Inherited Property
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Capital Gains and Inherited Assets
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Death itself does not generally trigger CGT merely because an asset passes to a legal personal representative or beneficiary. CGT may arise if the estate or beneficiary later disposes of the asset.
            </p>
          </div>

          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
            <div className="max-w-3xl mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Cost Base Rules for Inherited Property &amp; Investments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Inherited property, shares and other investments can have specific cost-base rules. The treatment may depend on:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
              {cgtFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium"
                >
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
              <p className="m-0 leading-relaxed">
                For broader CGT information, see our{" "}
                <Link
                  href="/services/individual-tax/capital-gains-tax"
                  className="text-brand-primary dark:text-emerald-400 font-semibold hover:underline"
                >
                  Capital Gains Tax service
                </Link>
                . If the estate continues to earn rental income, our{" "}
                <Link
                  href="/services/individual-tax/investment-property-tax-accountant"
                  className="text-brand-primary dark:text-emerald-400 font-semibold hover:underline"
                >
                  Investment Property Tax service
                </Link>{" "}
                may also be relevant.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <Link href="/services/individual-tax/capital-gains-tax">
                  <Button type="link" className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline text-xs">
                    Capital Gains Tax <ArrowRightOutlined className="text-xs" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Records You May Need */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Documentation Checklist
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Records You May Need
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Assembling accurate documentation is critical for preparing both the deceased person&apos;s final individual return and any required trust returns for the estate.
            </p>
          </div>

          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-4">
              Relevant records may include:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
              {recordsList.map((record, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium"
                >
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                  <span>{record}</span>
                </div>
              ))}
            </div>

            {/* Statutory Retention Note */}
            <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/50 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
              <span className="font-bold block mb-1">
                Reasonable Basis &amp; 5-Year Retention Requirement:
              </span>
              Missing records do not necessarily prevent an initial review, but figures should not be estimated without a reasonable basis. Records for inherited assets may need to be retained until at least five years after a later disposal or other relevant CGT event.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
