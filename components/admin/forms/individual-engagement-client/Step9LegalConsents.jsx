"use client";

import React from "react";
import { Form, Tag } from "antd";
import { SafetyCertificateOutlined, FileProtectOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step9LegalConsents({ form }) {
  const identityMethod = Form.useWatch("identityMethod", form);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 9 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Legal Agreements & Consents</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Legal Consents & ATO Declarations
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Under Tax Agent Services Act 2009 and Privacy Act 1988, please accept the required statutory consents.
        </p>
      </div>

      {/* Required Consents Box */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <FileProtectOutlined className="text-brand-primary" /> Mandatory Client Consents
        </h4>

        {/* CONSENT-001 */}
        <AntInput
          type="checkbox"
          name="consentScheduleTerms"
          text="CONSENT 1: I have opened, read, and agree to the Engagement Schedule, Scope of Work, and Terms & Conditions."
          className="text-sm font-bold text-slate-900 dark:text-zinc-100"
          validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Consent to Engagement Schedule & Terms is mandatory.")))}
          containerClassName="mb-2"
        />

        {/* CONSENT-002 */}
        <AntInput
          type="checkbox"
          name="consentPrivacy"
          text="CONSENT 2: I acknowledge the Privacy Collection Notice, Privacy Policy, and TPB Client Information Statement regarding TFN security and personal data handling."
          className="text-sm font-bold text-slate-900 dark:text-zinc-100"
          validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Privacy Policy acknowledgement is mandatory.")))}
          containerClassName="mb-2"
        />

        {/* CONSENT-003 */}
        <AntInput
          type="checkbox"
          name="consentAtoAuthority"
          text="CONSENT 3: I authorize Financially Up Pty Ltd (Tax Agent #25800000) to act on my behalf with the ATO within the accepted scope of work."
          className="text-sm font-bold text-slate-900 dark:text-zinc-100"
          validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("ATO Authority confirmation is mandatory.")))}
          containerClassName="mb-2"
        />

        {/* CONSENT-004 */}
        <AntInput
          type="radio"
          name="consentCloudOverseas"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">CONSENT 4: Do you consent to cloud infrastructure & secure outsourced processing?</span>}
          radioOptions={[
            { value: "Yes", label: "Yes, I consent" },
            { value: "No", label: "No, domestic onshore processing only" },
          ]}
          reqMsg="Please select an option for cloud/overseas processing."
          containerClassName="mb-2"
        />

        {/* CONSENT-005 (Biometric Verification - Conditional) */}
        {identityMethod === "Electronic Verification" && (
          <AntInput
            type="checkbox"
            name="consentBiometric"
            text="CONSENT 5: I consent to biometric identity verification and facial image matching against government DVS databases."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Biometric consent is mandatory for electronic verification.")))}
            containerClassName="mb-2"
          />
        )}

        {/* CONSENT-006 (Audio / Video Recording - Optional) */}
        <AntInput
          type="checkbox"
          name="consentRecording"
          text="CONSENT 6 (Optional): I consent to the audio/video recording of consultation interviews for accuracy and audit records."
          className="text-sm font-semibold text-slate-700 dark:text-zinc-300"
          noRequired={true}
          containerClassName="mb-0"
        />
      </div>

      {/* Client Declarations Summary Box */}
      <div className="p-6 rounded-2xl bg-brand-primary-soft/30 dark:bg-emerald-950/30 border border-brand-primary/20 dark:border-emerald-900/50 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <SafetyCertificateOutlined className="text-brand-primary" /> Statutory Client Declarations
        </h4>
        <ul className="text-xs text-slate-700 dark:text-zinc-300 space-y-2 list-disc pl-5 leading-relaxed">
          <li>I confirm that all information and income records supplied in this form are true, correct, and complete.</li>
          <li>I have disclosed all worldwide income, investment deductions, and tax matters.</li>
          <li>I understand that Financially Up's review does not guarantee taxation audit immunity by the ATO.</li>
          <li>I acknowledge that my engagement remains <strong>Pending Review</strong> until accepted in writing by Financially Up staff.</li>
        </ul>
      </div>
    </div>
  );
}
