"use client";

import React from "react";
import { Tag } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step3BeneficiariesUnits() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 3 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Beneficiaries & Units
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Primary Beneficiaries / Unitholders Details
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify designated beneficiaries (Family Trust) or Unitholders & unit
          allocations (Unit Trust).
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
          Primary Beneficiary 1 / Unitholder
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="b1Name"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Beneficiary / Unitholder Full Legal Name
              </span>
            }
            placeholder="e.g. David Alexander Harrison"
            reqMsg="Beneficiary name is required"
            preIconAnt={<UserOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="b1Dob"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Date of Birth
              </span>
            }
            format="DD/MM/YYYY"
            disabledNextDate={true}
            reqMsg="Date of birth is required"
            preIconAnt={<CalendarOutlined className="text-slate-400" />}
            size="large"
            className="w-full rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="text"
            name="b1Address"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Residential Address
              </span>
            }
            placeholder="e.g. 15 Ocean Drive, Surfers Paradise QLD 4217"
            reqMsg="Residential address is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="b1UnitsOrShare"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Units Held / Entitlement Percentage (%)
              </span>
            }
            placeholder="e.g. 50% or 50 Units"
            reqMsg="Units / percentage is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300 block mb-1">
          Primary Beneficiary 2 / Secondary Unitholder (Optional)
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="b2Name"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Beneficiary Full Legal Name
              </span>
            }
            placeholder="e.g. Sarah Jane Harrison"
            noRequired={true}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="b2UnitsOrShare"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Units Held / Entitlement Percentage (%)
              </span>
            }
            placeholder="e.g. 50% or 50 Units"
            noRequired={true}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
