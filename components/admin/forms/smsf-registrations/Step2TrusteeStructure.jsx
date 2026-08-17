"use client";

import React from "react";
import { Tag } from "antd";
import { BankOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step2TrusteeStructure() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 2 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Trustee Structure & Address
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Trustee Structure & Registered Principal Address
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Configure Corporate Special Purpose Trustee or Individual Trustees.
        </p>
      </div>

      <AntInput
        type="select"
        name="trusteeStructureType"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Trustee Structure Model</span>}
        options={["Corporate Trustee (Recommended for Asset Protection)", "Individual Trustees"]}
        emptyFirstVal="- Select Structure -"
        reqMsg="Trustee structure model is required"
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="trusteeCompanyName"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Corporate Trustee Company Name (or Proposed)</span>}
          placeholder="e.g. Smith Super Pty Ltd"
          reqMsg="Trustee company name is required"
          preIconAnt={<BankOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="trusteeCompanyAcn"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Trustee ACN (If Already Incorporated)</span>}
          placeholder="e.g. 123456789"
          noRequired={true}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <EnvironmentOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            SMSF Registered Principal Address
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="housenumber"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">House / Unit Number</span>}
            placeholder="e.g. 12 or Suite 3"
            reqMsg="House number is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="text"
            name="street"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Street Name</span>}
            placeholder="e.g. Flinders Lane"
            reqMsg="Street is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <AntInput
            type="text"
            name="suburb"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Suburb</span>}
            placeholder="e.g. Melbourne"
            reqMsg="Suburb is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="text"
            name="postcode"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Postcode</span>}
            placeholder="e.g. 3000"
            maxLength={4}
            pattern={/^\d{4}$/}
            patternMsg="Must be 4 digits"
            reqMsg="Postcode is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="select"
            name="state"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">State</span>}
            options={AUSTRALIAN_STATES}
            emptyFirstVal="- Select State -"
            reqMsg="State is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
