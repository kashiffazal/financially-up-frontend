"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  IdcardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step1EntityProfile() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 3
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Entity Structure & Identifiers
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Entity Structure & Corporate Identification
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify your entity type, legal name, tax identifiers, and trading
          activities.
        </p>
      </div>

      {/* Grid: Structure & Legal Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="select"
          name="TypeOfEntity"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Entity Type
            </span>
          }
          options={["Company", "Trust", "Partnership", "SMSF", "Other"]}
          emptyFirstVal="- Select Entity Type -"
          reqMsg="Please select your entity type"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="LegalName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Full Legal Entity Name
            </span>
          }
          placeholder="e.g. Apex Holdings Pty Ltd or The Smith Family Trust"
          reqMsg="Legal Entity Name is required"
          preIconAnt={<BankOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      {/* Tax Identifiers Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block mb-1">
          Tax & Registration Identifiers
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="text"
            name="ABN"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Entity ABN (11 Digits)
              </span>
            }
            placeholder="e.g. 12345678901"
            maxLength={11}
            pattern={/^(\d{11})$/}
            patternMsg="ABN must be 11 numeric digits"
            noRequired={true}
            preIconAnt={<IdcardOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="ACN"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                ACN (9 Digits - If Company)
              </span>
            }
            placeholder="e.g. 123456789"
            maxLength={9}
            pattern={/^(\d{9})$/}
            patternMsg="ACN must be 9 digits"
            noRequired={true}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="TFN"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Entity TFN (If Available)
              </span>
            }
            placeholder="e.g. 123456789"
            maxLength={9}
            noRequired={true}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="Industry"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Industry / Business Sector
            </span>
          }
          placeholder="e.g. Professional Services, Information Technology"
          reqMsg="Industry sector is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="mainBusinessActivity"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Principal Business Activities
            </span>
          }
          placeholder="e.g. Commercial software engineering and cloud consulting"
          reqMsg="Business activity description is required"
          preIconAnt={<FileTextOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>
    </div>
  );
}
