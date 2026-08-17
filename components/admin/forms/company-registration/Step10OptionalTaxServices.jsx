"use client";

import React from "react";
import { Tag, Form } from "antd";
import { DollarOutlined, BankOutlined, FileTextOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step10OptionalTaxServices({ form }) {
  const gstRequired = Form.useWatch("gstRegistrationRequired", form);
  const busNameRequired = Form.useWatch("businessNameRegistrationRequired", form);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 10 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Tax & Bank Setup
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Optional ATO Tax Registrations & Corporate Services
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Select optional ABN, TFN, GST, PAYG Withholding, business bank accounts, and Xero/MYOB accounting software setup.
        </p>
      </div>

      {/* Tax Registrations */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <DollarOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            ATO Tax Registrations
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="select"
            name="abnTfnRequired"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Company ABN / TFN Application</span>}
            options={["Yes, apply for Company ABN and TFN (Recommended)", "No, will arrange separately", "Unsure - advice required"]}
            emptyFirstVal="- Select Option -"
            reqMsg="ABN/TFN selection is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="gstRegistrationRequired"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">GST Registration (BAS)</span>}
            options={["Yes, register for GST", "No GST registration at this stage", "Unsure - advice required"]}
            emptyFirstVal="- Select GST -"
            reqMsg="GST selection is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="paygWithholdingRequired"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">PAYG Withholding (Employees)</span>}
            options={["Yes, register for PAYGW for staff/directors", "No employees at this stage", "Unsure"]}
            emptyFirstVal="- Select PAYGW -"
            reqMsg="PAYGW selection is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        {(gstRequired === "Yes, register for GST" || gstRequired === "Unsure - advice required") && (
          <AntInput
            type="select"
            name="expectedTurnover"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Expected Annual Turnover</span>}
            options={["Under $75,000 (Voluntary)", "$75,000 - $149,999", "$150,000 - $499,999", "$500,000 - $1,999,999", "$2,000,000+"]}
            emptyFirstVal="- Select Projected Turnover -"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        )}
      </div>

      {/* Post-Registration & Banking Services */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <BankOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Bank Account & Accounting Software Setup
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="select"
            name="businessNameRegistrationRequired"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">ASIC Business Name Registration</span>}
            options={["Yes, register separate business trading name", "No (Trading as company name)", "Unsure"]}
            emptyFirstVal="- Select Option -"
            reqMsg="Business name preference is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="bankAccountAssistance"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Business Bank Account Assistance</span>}
            options={["Yes, assist with Macquarie / CBA / NAB business account", "No, will arrange directly"]}
            emptyFirstVal="- Select Bank Assistance -"
            reqMsg="Bank assistance preference is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="accountingSoftware"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Accounting Software Setup</span>}
            options={["Xero (Recommended)", "MYOB Business", "QuickBooks Online", "Not required"]}
            emptyFirstVal="- Select Software -"
            reqMsg="Software preference is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        {busNameRequired === "Yes, register separate business trading name" && (
          <AntInput
            type="text"
            name="postRegBusinessName"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Desired Trading Name to Register</span>}
            placeholder="e.g. Apex Digital Consulting"
            reqMsg="Desired trading name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        )}
      </div>
    </div>
  );
}
