"use client";

import React from "react";
import { Tag } from "antd";
import { SafetyCertificateOutlined, IdcardOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step1FundInfo() {
  return (
    <div className="space-y-3.5 animate-fadeInInIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Fund Profile & Founder
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          SMSF Fund Profile & Founder Information
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Enter your proposed Self-Managed Super Fund name and establishing
          party details.
        </p>
      </div>

      <AntInput
        type="text"
        name="NameOfSMSF"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Proposed SMSF Name
          </span>
        }
        placeholder="e.g. The Smith Family Superannuation Fund"
        reqMsg="Name of SMSF is required"
        preIconAnt={<SafetyCertificateOutlined className="text-slate-400" />}
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block mb-1">
          Founder / Establishing Party Details
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="select"
            name="Founder"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Is the Founder a Person or Company?
              </span>
            }
            options={["Individual Person", "Corporate Entity"]}
            emptyFirstVal="- Select Founder Type -"
            reqMsg="Founder type is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="NameOfIndividual"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Name of Individual / Company Establishing SMSF
              </span>
            }
            placeholder="e.g. Jonathan Smith or Acme Pty Ltd"
            reqMsg="Name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <AntInput
          type="text"
          name="Companyabn"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Holding / Associated Company ABN or ACN (If Applicable)
            </span>
          }
          placeholder="e.g. 12345678901"
          noRequired={true}
          preIconAnt={<IdcardOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-0 !mt-2"
        />
      </div>
    </div>
  );
}
