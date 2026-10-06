"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  BankOutlined,
  HomeOutlined,
  BuildOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeededProperty Component
 * =======================================
 * Section: "Property records that make tax reporting easier"
 * Incorporates the exact H2 and verbatim paragraphs from lines 43–45 of
 * '10th Pillar Property Tax.docx', organized into structured interactive checklists
 * for rental property investors and property developers.
 *
 * Background: Lite Brand Gradient with Dark Mode compatibility.
 */
export default function WhatInformationNeededProperty() {
  /**
   * Exact record items cited in Document for Rental & General Property:
   * "purchase and sale contracts, settlement statements, loan documents, refinancing records,
   *  rental statements, invoices, depreciation or quantity-surveyor reports, council and land-tax notices,
   *  insurance records, renovation invoices and legal or conveyancing costs."
   */
  const rentalRecords = [
    {
      label: "Purchase & Sale Contracts",
      desc: "Signed contract of sale, special conditions, and transfer documents establishing acquisition date and cost.",
    },
    {
      label: "Settlement Statements",
      desc: "Conveyancing solicitor settlement sheets showing council/water adjustments, stamp duty, and final payments.",
    },
    {
      label: "Loan & Refinancing Documents",
      desc: "12 months of mortgage statements, loan redraw histories, split accounts, and borrowing cost establishment sheets.",
    },
    {
      label: "Rental Statements & Leases",
      desc: "Annual real estate agent financial year summaries, tenant agreements, bond reconciliations, and gross rent receipts.",
    },
    {
      label: "Depreciation or Quantity-Surveyor Reports",
      desc: "Specialist tax depreciation schedules for Division 40 plant & equipment and Division 43 capital works write-offs.",
    },
    {
      label: "Council & Land-Tax Notices",
      desc: "Municipal council rates, state land tax assessments, and water service charges incurred during the financial year.",
    },
    {
      label: "Insurance Records",
      desc: "Landlord insurance policies, building protection premiums, and insurance payouts for property damages.",
    },
    {
      label: "Renovation Invoices & Receipts",
      desc: "Detailed contractor invoices, materials receipts, and scope-of-work sheets distinguishing repairs from improvements.",
    },
    {
      label: "Legal & Conveyancing Costs",
      desc: "Legal disbursements, title registry search fees, and conveyancer outlays incurred during purchase, holding, or sale.",
    },
  ];

  /**
   * Exact record items cited in Document for Development Projects:
   * "For development projects, project budgets, contractor invoices, GST records,
   *  funding documents and settlement records can be equally important.
   *  The records required depend on the transaction and entity involved."
   */
  const developmentRecords = [
    {
      label: "Project Budgets & Feasibility Models",
      desc: "Initial development feasibility calculations, estimated cash flows, and cost allocation projections per lot.",
    },
    {
      label: "Contractor Invoices & Progress Claims",
      desc: "Builder tax invoices, subcontract agreements, engineering fees, architecture drawings, and survey bills.",
    },
    {
      label: "GST Records & Activity Statements",
      desc: "Tax invoices supporting input tax credits, BAS lodgement reconciliations, and margin scheme calculation sheets.",
    },
    {
      label: "Funding & Facility Documents",
      desc: "Development mezzanine and primary bank facility agreements, interest capitalisation schedules, and facility fees.",
    },
    {
      label: "Settlement Records & Purchaser Withholding",
      desc: "Off-the-plan contract settlements, supplier GST withholding notices (Form 1 & 2), and title registration releases.",
    },
    {
      label: "Entity & Ownership Records",
      desc: "Company constitutions, trust deeds, partnership agreements, and inter-entity loan documentation.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Lead Paragraphs */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Documentation Checklist
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Property records that make tax reporting easier
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Good records reduce uncertainty when expenses, ownership and cost base items need to be classified years later. Depending on the property, useful records can include purchase and sale contracts, settlement statements, loan documents, refinancing records, rental statements, invoices, depreciation or quantity-surveyor reports, council and land-tax notices, insurance records, renovation invoices and legal or conveyancing costs.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            For development projects, project budgets, contractor invoices, GST records, funding documents and settlement records can be equally important. The records required depend on the transaction and entity involved.
          </p>
        </div>

        {/* Dual Categorized Record Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Rental & Investment Property Records */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <HomeOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase font-mono">
                      Category A
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                      Rental & Investment Property Records
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  9 Key Items
                </span>
              </div>

              <div className="space-y-3.5 mb-6">
                {rentalRecords.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-zinc-950/50 border border-slate-200/60 dark:border-zinc-800/60 flex items-start gap-3 hover:border-teal-500/40 transition-colors"
                  >
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-sm" />
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {item.label}
                      </strong>
                      <span className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-teal-600 text-xs shrink-0" />
              <span>Protects deductions and establishes statutory 5-element CGT cost bases.</span>
            </div>
          </div>

          {/* Card 2: Property Development & Project Records */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <BuildOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-mono">
                      Category B
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                      Development & Commercial Project Records
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  6 Project Items
                </span>
              </div>

              <div className="space-y-3.5 mb-6">
                {developmentRecords.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-zinc-950/50 border border-slate-200/60 dark:border-zinc-800/60 flex items-start gap-3 hover:border-emerald-500/40 transition-colors"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {item.label}
                      </strong>
                      <span className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-emerald-600 text-xs shrink-0" />
              <span>Supports GST input credits, margin scheme claims, and profit allocations.</span>
            </div>
          </div>
        </div>

        {/* Record Retention Compliance Callout */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Statutory Record Retention Period
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              The ATO requires property records relevant to CGT calculations to be retained for at least five years after the relevant CGT event, and longer while needed to establish the cost base of land or buildings not yet sold.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Review Your Records
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
