"use client";

import React from "react";
import { Tag } from "antd";
import { IdcardOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import UploadFile from "@/components/mutual/antd-upload-file-component";

export default function Step4IdVerification() {
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
            ID Verification & Consent
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Identity Verification & Applicant Declaration
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Upload proof of identity document and confirm application declaration.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <UploadFile
          name="proofOfID"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Upload Primary Photo ID Document *
            </span>
          }
          title="Click or drag ID document to upload"
          msg="Australian Driver Licence, Passport, or ImmiCard (JPG, PNG, or PDF, max 10MB)"
          accept=".pdf,.jpg,.jpeg,.png"
          restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={1}
          noRequired={false}
          reqMsg="Please upload a valid identity verification document"
          type="1"
          height={140}
          className="rounded-2xl"
        />
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <SafetyCertificateOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Applicant Statutory Declaration
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
          I declare that the information provided in this application is true
          and correct. I authorise Financially Up as a registered Australian Tax
          & ASIC Agent to lodge this TFN/ABN application on my behalf with the
          ATO and the Australian Business Register.
        </p>

        <AntInput
          type="radio"
          name="declarationConsent"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Do you agree to the statutory declaration above?
            </span>
          }
          reqMsg="You must agree to the declaration to lodge this application"
          radioOptions={[
            {
              value: "Yes",
              label: "I Agree & Confirm all details are true and correct",
            },
          ]}
          containerClassName="!mb-0"
        />
      </div>
    </div>
  );
}
