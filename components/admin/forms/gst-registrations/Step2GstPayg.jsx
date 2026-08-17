"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  CalendarOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step2GstPayg() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 2 of 2
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            GST & PAYG Configuration
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Turnover & Accounting Method
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Select your projected turnover, accounting method, and reporting
          frequency.
        </p>
      </div>

      {/* Grid: GST Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="select"
          name="estimateTurnover"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Projected Annual Turnover
            </span>
          }
          options={[
            "Under $75,000 (Voluntary Registration)",
            "$75,000 - $99,000",
            "$100,000 - $149,000",
            "$150,000 - $499,000",
            "$500,000 - $1,999,999",
            "$2,000,000+",
          ]}
          emptyFirstVal="- Select Projected Turnover -"
          reqMsg="Please select estimated annual turnover"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="datepicker"
          name="effectiveDate"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              GST Registration Effective Date
            </span>
          }
          format="DD/MM/YYYY"
          reqMsg="Effective date is required"
          preIconAnt={<CalendarOutlined className="text-slate-400" />}
          size="large"
          className="w-full rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="select"
          name="gstTiming"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Accounting Method for GST
            </span>
          }
          options={[
            "Cash Basis (When cash is received/paid - Recommended for Small Business)",
            "Accruals / Non-Cash Basis (When invoices are issued/received)",
          ]}
          emptyFirstVal="- Select Accounting Method -"
          reqMsg="Accounting method is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="select"
          name="reportingFrequency"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              GST / BAS Reporting Frequency
            </span>
          }
          options={[
            "Quarterly (Recommended for most businesses)",
            "Monthly (Mandatory if turnover > $20M)",
            "Annually (Voluntary if turnover < $75k)",
          ]}
          emptyFirstVal="- Select Reporting Frequency -"
          reqMsg="Reporting frequency is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      {/* Additional Options Callout */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <FileProtectOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Importing & PAYG Withholding
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AntInput
            type="radio"
            name="importGoods"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Do you import goods or services into Australia?
              </span>
            }
            reqMsg="Please answer import question"
            radioOptions={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            containerClassName="!mb-0"
          />

          <AntInput
            type="radio"
            name="hasEmployees"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Do you also require PAYG Withholding for employees?
              </span>
            }
            reqMsg="Please select PAYG preference"
            radioOptions={[
              { value: "Yes", label: "Yes, register for PAYGW" },
              { value: "No", label: "No employees at this stage" },
            ]}
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
