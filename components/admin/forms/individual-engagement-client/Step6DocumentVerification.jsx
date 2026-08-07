"use client";

import React from "react";
import { Form, Tag } from "antd";
import { IdcardOutlined, UploadOutlined, CameraOutlined } from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";

const IDENTITY_METHOD_OPTIONS = [
  { value: "Upload ID", title: "Upload Photo ID & Documents", desc: "Upload Driver's License or Passport (Quickest)" },
  { value: "Electronic Verification", title: "Electronic Identity (eID) Verification", desc: "Instant online check via DVS database" },
  { value: "Live Video", title: "Live Video Verification Call", desc: "Schedule a brief video call with our team" },
  { value: "In Person", title: "In-Person Verification at Office", desc: "Bring original documents to our office" },
  { value: "No Photo ID", title: "No Photo ID Available", desc: "Alternative secondary identity evidence process" },
];

export default function Step6DocumentVerification({ form }) {
  const identityMethod = Form.useWatch("identityMethod", form);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 6 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Identity Verification</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Verify Your Identity & Upload Documents
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Tax Agent Regulations & Anti-Money Laundering laws require us to verify client identity before acting.
        </p>
      </div>

      {/* ID-001: Verification Method Selection */}
      <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
        <AntInput
          type="radio"
          name="identityMethod"
          designVariant="card"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Select Preferred Identity Verification Method</span>}
          radioOptions={IDENTITY_METHOD_OPTIONS}
          reqMsg="Please select an identity verification method."
          gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-3"
          containerClassName="mb-0"
        />
      </div>

      {/* Document Uploads (When Upload ID or Electronic selected - ID-002, ID-003, ID-005, ID-006) */}
      {(identityMethod === "Upload ID" || identityMethod === "Electronic Verification" || !identityMethod) && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <IdcardOutlined className="text-brand-primary" /> Required Photo ID & Supporting Documents
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary ID (ID-002) */}
            <AntFileUpload
              name="primaryId"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Primary Photo ID (Driver's License / Passport / Photo Card)</span>}
              icon={<UploadOutlined className="text-brand-primary text-xl" />}
              heading="Upload Primary ID (PDF / JPG / PNG)"
              reqMsg="Please upload your primary photo ID."
              maxCount={1}
            />

            {/* Supporting ID (ID-003) */}
            <AntFileUpload
              name="supportingId"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Supporting ID (Medicare Card / Utility Bill / Bank Statement)</span>}
              icon={<UploadOutlined className="text-brand-primary text-xl" />}
              heading="Upload Supporting ID (PDF / JPG / PNG)"
              reqMsg="Please upload supporting ID."
              maxCount={1}
            />
          </div>

          {/* Selfie Photo (ID-005 - Conditional for remote verification) */}
          {identityMethod === "Electronic Verification" && (
            <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
              <AntFileUpload
                name="selfie"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Selfie / Photo Identification (Holding ID)</span>}
                icon={<CameraOutlined className="text-brand-primary text-xl" />}
                heading="Upload Live Selfie Photo (JPG / PNG)"
                reqMsg="Please upload selfie photo."
                maxCount={1}
              />

              <AntInput
                type="checkbox"
                name="biometricConsent"
                text="BIOMETRIC CONSENT: I consent to automated facial matching and biometric verification against government DVS identity databases."
                className="text-xs font-bold text-slate-900 dark:text-zinc-100"
                validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Biometric consent is required for electronic verification.")))}
                containerClassName="mb-0"
              />
            </div>
          )}
        </div>
      )}

      {/* No Photo ID Path (ID-004) */}
      {identityMethod === "No Photo ID" && (
        <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-4">
          <AntInput
            type="textarea"
            name="noPhotoIdReason"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reason for No Photo ID</span>}
            placeholder="Explain why you do not possess an Australian Driver's License or Passport..."
            rows={3}
            className="rounded-xl"
            reqMsg="Please explain why no photo ID is available."
            containerClassName="mb-0"
          />
        </div>
      )}
    </div>
  );
}
