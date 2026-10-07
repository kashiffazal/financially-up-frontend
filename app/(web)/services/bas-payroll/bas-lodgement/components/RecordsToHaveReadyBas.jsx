"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  FileTextOutlined,
  BankOutlined,
  DollarOutlined,
  AuditOutlined,
  TeamOutlined,
  TableOutlined,
  MailOutlined,
} from "@ant-design/icons";

/**
 * RecordsToHaveReadyBas Component
 * Covers 'What records should you have ready?' and the ATO 5-year retention rule
 * from Page 2 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function RecordsToHaveReadyBas() {
  const records = [
    {
      title: "Accounting software or transaction listings for the BAS period",
      icon: <TableOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Bank and credit-card statements where reconciliation is required",
      icon: <BankOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Sales invoices and income records",
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Supplier invoices and receipts, including valid tax invoices where required for GST credits",
      icon: <FileTextOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "Payroll and PAYG withholding reports where relevant",
      icon: <TeamOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      title: "Details of asset purchases, unusual transactions or prior-period adjustments that may affect the BAS",
      icon: <AuditOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
    {
      title: "ATO correspondence or previously lodged BAS information if corrections are being considered",
      icon: <MailOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <Tag color="geekblue" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <FolderOpenOutlined className="mr-1.5" />
            Checklist &amp; Compliance
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What records should you have ready?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To prepare an accurate activity statement that satisfies ATO scrutiny and ensures you claim all eligible input tax credits, have the following records available for the reporting period:
          </p>
        </div>

        {/* 7 Records List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {records.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-4 hover:border-emerald-400/60 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug pt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ATO Record Retention Note */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-4">
          <InfoCircleOutlined className="text-xl sm:text-2xl text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
          <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <span className="font-bold">ATO Statutory Record-Keeping Requirement:</span> Businesses are generally required to keep records that explain their transactions and tax obligations. Many business and GST records must be kept for at least five years, although longer or different retention periods can apply to some records.
          </div>
        </div>

      </div>
    </section>
  );
}
