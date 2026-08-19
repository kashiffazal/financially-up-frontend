"use client";

import React from "react";
import { Tag } from "antd";
import {
  IdcardOutlined,
  SafetyCertificateOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import UploadFile from "@/components/mutual/antd-upload-file-component";

export default function Step3DocumentsSign() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 3 of 3
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Verification & Legal Consent
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Verification Documents & Engagement Terms
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Upload corporate documents and confirm statutory engagement terms.
        </p>
      </div>

      {/* Uploads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UploadFile
          name="proofOfID"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Director / Signatory Primary Photo ID *
            </span>
          }
          title="Click or drag ID to upload"
          msg="Driver Licence or Passport (PDF, JPG, PNG)"
          accept=".pdf,.jpg,.jpeg,.png"
          restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={1}
          noRequired={false}
          reqMsg="Please upload primary photo ID"
          type="1"
          height={140}
          className="rounded-2xl"
        />

        <UploadFile
          name="TrustDeed"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Company Constitution or Trust Deed (If Applicable)
            </span>
          }
          title="Click or drag Deed to upload"
          msg="PDF Document (Max 10MB)"
          accept=".pdf,.jpg,.jpeg,.png"
          restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={1}
          noRequired={true}
          type="1"
          height={140}
          className="rounded-2xl"
        />
      </div>

      {/* Consent Callout Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <SafetyCertificateOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Tax Agent Engagement Authority & Consent
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
          I confirm that I am authorised to act on behalf of the entity. I
          appoint Financially Up as our registered Tax Agent to access ATO
          portal records, prepare and lodge tax returns, BAS, and corporate
          compliance filings under the Tax Agent Services Act 2009.
        </p>

        <AntInput
          type="radio"
          name="termsConsent"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Do you agree to the terms of engagement and statutory tax
              authority?
            </span>
          }
          reqMsg="You must accept the terms to proceed"
          radioOptions={[
            {
              value: "Yes",
              label:
                "I Agree & Authorise Financially Up as our Registered Tax Agent",
            },
          ]}
          containerClassName="!mb-0"
        />
      </div>
    </div>
  );
}
