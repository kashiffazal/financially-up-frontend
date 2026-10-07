"use client";

import React from "react";
import { Tag } from "antd";
import {
  OrderedListOutlined,
  FolderOpenOutlined,
  CheckCircleOutlined,
  CompassOutlined,
  SafetyCertificateOutlined,
  InteractionOutlined,
  FileTextOutlined,
  ReconciliationOutlined,
  PropertySafetyOutlined,
  BankOutlined,
  SolutionOutlined,
  IdcardOutlined,
  FileProtectOutlined,
  TeamOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

/**
 * RestructureProcessAndInfoNeeded Component
 * Covers 'A practical restructure process' (3 steps) and 'What information may be needed?' (9 items)
 * from Page 8 of 6th Pillar Business Structures.docx.
 */
export default function RestructureProcessAndInfoNeeded() {
  const steps = [
    {
      num: "1",
      title: "Map the current and proposed arrangements",
      desc: "Confirm the commercial objective, the existing entities, ownership, assets, liabilities and registrations, then map what will exist after the change.",
      icon: <CompassOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      num: "2",
      title: "Review tax, accounting and legal consequences before implementation",
      desc: "Review the tax and accounting implications, GST and state-tax issues, affected contracts, financing requirements and the legal documents that may be needed. Legal advice, drafting, valuations and lending approvals may require appropriately qualified professionals under separate scopes.",
      icon: <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      num: "3",
      title: "Implement and reconcile the new structure",
      desc: "Set up the required entities and registrations within the agreed scope, coordinate the sequence of accounting and registration steps, establish accounting records and reconcile opening balances before old registrations are closed. Asset transfers, legal documents, finance changes and other specialist implementation work may require separate professional assistance.",
      icon: <InteractionOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
  ];

  const infoItems = [
    {
      label: "Current entity and ownership details",
      icon: <SolutionOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      label: "Recent financial statements, tax returns and activity statements",
      icon: <ReconciliationOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      label: "Asset registers and details of significant business assets",
      icon: <PropertySafetyOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      label: "Loan, finance and shareholder or partner balance information",
      icon: <BankOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      label: "Company, trust or partnership documents where relevant",
      icon: <FileTextOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
    {
      label: "ABN, GST, PAYG and other registration details",
      icon: <IdcardOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      label: "Key contracts, leases, licenses or permits that may be affected",
      icon: <FileProtectOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
    },
    {
      label: "Information about employees and payroll if the employing entity may change",
      icon: <TeamOutlined className="text-cyan-600 dark:text-cyan-400 text-lg" />,
    },
    {
      label: "Details of the intended ownership and operating structure after the restructure",
      icon: <ApartmentOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Part 1: A Practical Restructure Process */}
        <div className="space-y-10">
          <div className="max-w-3xl">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              <OrderedListOutlined className="mr-1.5" />
              Methodical Execution
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A practical restructure process
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal">
              A structured three-stage methodology ensures transitions occur in proper order without uncoordinated tax or registration surprises:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-brand-primary/10 dark:bg-emerald-500/20 text-brand-primary dark:text-emerald-400 font-extrabold flex items-center justify-center text-lg">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center">
                      {st.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What Information May Be Needed? */}
        <div className="space-y-10">
          <div className="max-w-3xl">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              <FolderOpenOutlined className="mr-1.5" />
              Documentation Checklist
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What information may be needed?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal">
              The exact documents depend on the restructure. To understand the starting point and proposed change, we may ask for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {infoItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-4 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-zinc-200 leading-snug pt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
