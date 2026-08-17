"use client";

import React from "react";
import { Tag } from "antd";
import { CalendarOutlined, BankOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step1TrustProfile() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Trust Type & Jurisdiction
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Trust Structure & Jurisdiction
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify trust type, legal trust name, establishment date, and tax
          registrations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="select"
          name="TypeOfTrust"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Type of Trust Structure
            </span>
          }
          options={[
            "Family Trust (Discretionary Trust)",
            "Unit Trust (Fixed / Multi-Unitholder)",
            "Hybrid Trust",
            "Child Maintenance Trust",
          ]}
          emptyFirstVal="- Select Trust Type -"
          reqMsg="Trust type is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="select"
          name="jurisdictionState"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              State / Territory of Jurisdiction
            </span>
          }
          options={AUSTRALIAN_STATES}
          emptyFirstVal="- Select State -"
          reqMsg="Jurisdiction state is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="TrustName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Trust Legal Name
            </span>
          }
          placeholder="e.g. The Harrison Family Trust"
          reqMsg="Trust name is required"
          preIconAnt={<BankOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="datepicker"
          name="EstablishDate"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Establishment Date of Trust
            </span>
          }
          format="DD/MM/YYYY"
          reqMsg="Establishment date is required"
          preIconAnt={<CalendarOutlined className="text-slate-400" />}
          size="large"
          className="w-full rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-2">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block mb-1">
          ATO Tax Registrations Required for Trust
        </span>

        <AntInput
          type="checkbox"
          name="taxRegistrationsRequired"
          group={[
            { value: "ABN", label: "Australian Business Number (ABN)" },
            { value: "TFN", label: "Trust Tax File Number (TFN)" },
            { value: "GST", label: "Goods & Services Tax (GST)" },
          ]}
          containerClassName="!mb-0"
        />
      </div>
    </div>
  );
}
