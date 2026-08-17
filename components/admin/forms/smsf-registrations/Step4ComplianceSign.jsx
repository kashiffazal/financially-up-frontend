"use client";

import React from "react";
import { Tag } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step4ComplianceSign() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 4 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Compliance & Declaration
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Compliance Strategy & Trustee Declaration
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Electronic Service Address (ESA), bank account assistance, and trustee
          statutory consent.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="radio"
          name="esaSetup"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Require an Electronic Service Address (ESA) for SuperStream?
            </span>
          }
          reqMsg="Please select ESA preference"
          radioOptions={[
            { value: "Yes", label: "Yes, provide compliant ESA setup" },
            { value: "No", label: "No, we have existing ESA" },
          ]}
          containerClassName="!mb-2"
        />

        <AntInput
          type="radio"
          name="bankAccountSetup"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Require Australian Bank Account setup assistance?
            </span>
          }
          reqMsg="Please select bank assistance preference"
          radioOptions={[
            {
              value: "Yes",
              label: "Yes, assist with Macquarie / CBA SMSF account",
            },
            { value: "No", label: "No, will arrange directly" },
          ]}
          containerClassName="!mb-2"
        />
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <SafetyCertificateOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Trustee Statutory Consent & Registration Authorisation
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
          I confirm that all members will act as trustees (or directors of the
          corporate trustee) and understand SIS Act superannuation compliance
          obligations. I authorise Financially Up to establish the SMSF trust
          deed, apply for fund ABN/TFN, and register the fund with the ATO.
        </p>

        <AntInput
          type="radio"
          name="trusteeConsent"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Do you agree to the SMSF trustee statutory declaration?
            </span>
          }
          reqMsg="You must agree to the statutory declaration"
          radioOptions={[
            {
              value: "Yes",
              label: "I Agree & Authorise Financially Up to register the SMSF",
            },
          ]}
          containerClassName="!mb-0"
        />
      </div>
    </div>
  );
}
