"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import SignatureCanvas from "@/components/mutual/SignatureCanvas";

export default function Step12DeclarationSignatures({ form }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 12 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Legal Declarations & Execution
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Client Declaration, Consent & Authorisation
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Please review and accept each of the six statutory declarations below
          and provide your digital signature to authorize lodgement.
        </p>
      </div>

      {/* 6 Mandatory Statutory Declarations — Unified Emerald Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-4">
        {/* Declaration 1: Accuracy of Information */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
              Declaration 1: Accuracy of Information
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            I/we confirm that the information in this form is true, complete and not misleading.
          </p>
          <AntInput
            type="checkbox"
            name="declaration1"
            text="I confirm that the information in this form is true, complete and not misleading. *"
            reqMsg="You must accept Declaration 1"
            containerClassName="!mb-0"
          />
        </div>

        {/* Declaration 2: AML/CTF, CDD and Verification Authority */}
        <div className="border-t border-emerald-200/50 dark:border-emerald-900/50 pt-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
              Declaration 2: AML/CTF, CDD and Verification Authority
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            I/we authorise Financially Up to use this information to assess AML/CTF risk, complete CDD, verify identity information, conduct PEP/sanctions/adverse media screening, and prepare/lodge company registration documentation.
          </p>
          <AntInput
            type="checkbox"
            name="declaration2"
            text="I authorise Financially Up to assess AML/CTF risk, complete CDD, and prepare/lodge company registration documentation. *"
            reqMsg="You must accept Declaration 2"
            containerClassName="!mb-0"
          />
        </div>

        {/* Declaration 3: Director, Secretary and Member Consent */}
        <div className="border-t border-emerald-200/50 dark:border-emerald-900/50 pt-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
              Declaration 3: Director, Secretary and Member Consent
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            I/we confirm that all proposed directors, secretaries and members have consented or will sign consents before lodgement.
          </p>
          <AntInput
            type="checkbox"
            name="declaration3"
            text="I confirm that all proposed directors, secretaries and members have consented or will sign consents before lodgement. *"
            reqMsg="You must accept Declaration 3"
            containerClassName="!mb-0"
          />
        </div>

        {/* Declaration 4: Beneficial Ownership Disclosure */}
        <div className="border-t border-emerald-200/50 dark:border-emerald-900/50 pt-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
              Declaration 4: Beneficial Ownership Disclosure
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            I/we confirm that all beneficial owners/controllers have been disclosed, including any person who controls the company through indirect ownership, agreements, nominees, funding or practical influence.
          </p>
          <AntInput
            type="checkbox"
            name="declaration4"
            text="I confirm that all beneficial owners and ultimate controllers have been disclosed. *"
            reqMsg="You must accept Declaration 4"
            containerClassName="!mb-0"
          />
        </div>

        {/* Declaration 5: Further Information / Decline / AUSTRAC */}
        <div className="border-t border-emerald-200/50 dark:border-emerald-900/50 pt-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
              Declaration 5: Further Information / Decline / AUSTRAC
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            I/we understand Financially Up may request further information, decline, suspend or exit the matter, or make reports to AUSTRAC if required by law.
          </p>
          <AntInput
            type="checkbox"
            name="declaration5"
            text="I understand Financially Up may request further information, decline/suspend the matter, or report to AUSTRAC if required by law. *"
            reqMsg="You must accept Declaration 5"
            containerClassName="!mb-0"
          />
        </div>

        {/* Declaration 6: Legal Advice Limitation */}
        <div className="border-t border-emerald-200/50 dark:border-emerald-900/50 pt-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
              Declaration 6: Legal Advice Limitation
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            I/we understand Financially Up cannot provide legal advice unless separately agreed and may recommend independent legal advice for constitutions, shareholder agreements, nominee arrangements, trusts or complex structures.
          </p>
          <AntInput
            type="checkbox"
            name="declaration6"
            text="I understand Financially Up cannot provide legal advice and may recommend independent legal advice for complex structures. *"
            reqMsg="You must accept Declaration 6"
            containerClassName="!mb-0"
          />
        </div>
      </div>

      {/* Authorised Signatories */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block">
          Authorised Client Execution Signatures
        </span>

        {/* ─── Signatory 1 (Col 1: Fields | Col 2: Signature Canvas | Col 3: Legal Notice) ─── */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-3 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 font-extrabold text-xs flex items-center justify-center shadow-sm">
                1
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                Primary Authorised Signatory (Signatory 1) *
              </span>
            </div>
            <Tag
              color="green"
              className="text-[10px] font-bold uppercase rounded-md border-none px-2 py-0.5"
            >
              Mandatory
            </Tag>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {/* Column 1: All Three Input Fields */}
            <div className="space-y-3.5 flex flex-col justify-between h-full">
              <AntInput
                type="text"
                name="signatory1Name"
                label={
                  <span className="font-bold text-xs text-slate-800 dark:text-zinc-200">
                    Signatory 1 Full Legal Name *
                  </span>
                }
                placeholder="e.g. Jonathan Alexander Smith"
                reqMsg="Signatory 1 name is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="select"
                name="signatory1Capacity"
                label={
                  <span className="font-bold text-xs text-slate-800 dark:text-zinc-200">
                    Legal Capacity *
                  </span>
                }
                options={[
                  "Individual client",
                  "Director/officeholder",
                  "Trustee",
                  "Partner",
                  "Authorised agent",
                  "Other",
                ]}
                emptyFirstVal="- Select Capacity -"
                reqMsg="Signatory 1 capacity is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="datepicker"
                name="signatory1Date"
                label={
                  <span className="font-bold text-xs text-slate-800 dark:text-zinc-200">
                    Signature Date *
                  </span>
                }
                format="DD/MM/YYYY"
                reqMsg="Signature date is required"
                preIconAnt={<CalendarOutlined className="text-slate-400" />}
                size="large"
                className="w-full rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Column 2: Signature Canvas (Self-contained with internal Form.Item) */}
            <div className="flex flex-col justify-between h-full">
              <SignatureCanvas
                name="signatory1Signature"
                label="Draw Digital Signature (Signatory 1) *"
                reqMsg="Signatory 1 signature is required."
                height={192}
                penColor="#0f172a"
                placeholder="Draw Signatory 1 signature smoothly using mouse, stylus, or finger..."
                storageKey="signatory1Sig"
              />
            </div>

            {/* Column 3: Legal Information Text */}
            <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800/80 flex flex-col justify-between h-full space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-zinc-100">
                  <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
                  <span>Electronic Execution Notice</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                  By providing your digital signature, you confirm that you have
                  read, understood, and consented to the statutory declarations
                  and terms of incorporation under the{" "}
                  <em>Corporations Act 2001</em> (Cth).
                </p>
                <ul className="text-[11px] text-slate-500 dark:text-zinc-400 space-y-1.5 pl-4 list-disc leading-relaxed">
                  <li>Legally binding digital execution under Section 110A.</li>
                  <li>Identifies you as an authorised corporate applicant.</li>
                  <li>Draw clearly using a stylus, finger, or mouse.</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200/50 dark:border-zinc-800/60 flex items-center justify-between text-[10px] text-slate-400 dark:text-zinc-500 font-mono">
                <span>🔒 256-bit Encrypted</span>
                <span>IP & Audit Logged</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Signatory 2 (Col 1: Fields | Col 2: Signature Canvas | Col 3: Legal Notice) ─── */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-3 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-extrabold text-xs flex items-center justify-center shadow-sm">
                2
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Secondary Authorised Signatory (Signatory 2 — Optional / Joint
                Director)
              </span>
            </div>
            <Tag
              color="default"
              className="text-[10px] font-bold uppercase rounded-md border-none px-2 py-0.5"
            >
              Optional
            </Tag>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            {/* Column 1: All Three Input Fields */}
            <div className="space-y-3.5 flex flex-col justify-between h-full">
              <AntInput
                type="text"
                name="signatory2Name"
                label={
                  <span className="font-bold text-xs text-slate-800 dark:text-zinc-200">
                    Signatory 2 Full Legal Name
                  </span>
                }
                placeholder="e.g. Mary Jane Watson"
                noRequired={true}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="select"
                name="signatory2Capacity"
                label={
                  <span className="font-bold text-xs text-slate-800 dark:text-zinc-200">
                    Legal Capacity
                  </span>
                }
                options={[
                  "Individual client",
                  "Director/officeholder",
                  "Trustee",
                  "Partner",
                  "Authorised agent",
                  "Other",
                ]}
                emptyFirstVal="- Select Capacity -"
                noRequired={true}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="datepicker"
                name="signatory2Date"
                label={
                  <span className="font-bold text-xs text-slate-800 dark:text-zinc-200">
                    Signature Date
                  </span>
                }
                format="DD/MM/YYYY"
                noRequired={true}
                preIconAnt={<CalendarOutlined className="text-slate-400" />}
                size="large"
                className="w-full rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Column 2: Signature Canvas (Self-contained with internal Form.Item) */}
            <div className="flex flex-col justify-between h-full">
              <SignatureCanvas
                name="signatory2Signature"
                label="Draw Digital Signature (Signatory 2)"
                noRequired={true}
                height={192}
                penColor="#0f172a"
                placeholder="Draw Signatory 2 signature (optional)..."
                storageKey="signatory2Sig"
              />
            </div>

            {/* Column 3: Legal Information Text */}
            <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800/80 flex flex-col justify-between h-full space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-zinc-100">
                  <SafetyCertificateOutlined className="text-slate-500 dark:text-zinc-400 text-sm" />
                  <span>Joint / Secondary Director Execution</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Required if company constitution mandates dual signatory
                  execution (e.g. two directors, or a director and company
                  secretary under Section 127).
                </p>
                <ul className="text-[11px] text-slate-500 dark:text-zinc-400 space-y-1.5 pl-4 list-disc leading-relaxed">
                  <li>Optional if sole director structure applies.</li>
                  <li>
                    Provides joint execution verification on ASIC Form 201.
                  </li>
                  <li>Draw digital signature on canvas to execute.</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200/50 dark:border-zinc-800/60 flex items-center justify-between text-[10px] text-slate-400 dark:text-zinc-500 font-mono">
                <span>🔒 Joint Execution</span>
                <span>IP & Audit Logged</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
