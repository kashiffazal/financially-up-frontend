"use client";

import React from "react";
import { Tag } from "antd";
import { IdcardOutlined, FilePdfOutlined } from "@ant-design/icons";
import UploadFile from "@/components/mutual/antd-upload-file-component";

export default function Step3EvidenceUploads() {
  return (
    <div className="space-y-3.5 animate-fadeInInIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 3 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Document Evidence
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Supporting Evidence Documents Upload
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Upload your passport photo page, visa grant notice, and any
          RHCA/insurance records.
        </p>
      </div>

      {/* Uploads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UploadFile
          name="passportCopy"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Passport Photo Page (Bio Page) *
            </span>
          }
          title="Click or drag passport copy"
          msg="Certified copy of Foreign Passport Bio-data page (PDF, JPG, PNG)"
          accept=".pdf,.jpg,.jpeg,.png"
          restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={1}
          noRequired={false}
          reqMsg="Please upload passport copy"
          type="1"
          height={140}
          className="rounded-2xl"
        />

        <UploadFile
          name="evidenceoOfVisaEndorsed"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Visa Grant Notice / VEVO Entitlement *
            </span>
          }
          title="Click or drag Visa document"
          msg="Department of Home Affairs Visa Grant Notice (PDF, PNG, JPG)"
          accept=".pdf,.jpg,.jpeg,.png"
          restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={1}
          noRequired={false}
          reqMsg="Please upload visa grant document"
          type="1"
          height={140}
          className="rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UploadFile
          name="medicalInsurance"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Health Cover Policy (OSHC / OVHC)
            </span>
          }
          title="Click or drag insurance certificate"
          msg="Optional health insurance policy certificate (PDF, PNG, JPG)"
          accept=".pdf,.jpg,.jpeg,.png"
          restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={1}
          noRequired={true}
          type="1"
          height={140}
          className="rounded-2xl"
        />

        <UploadFile
          name="otherDocuments"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Other Supporting Letters (If Any)
            </span>
          }
          title="Click or drag other attachments"
          msg="Home Affairs PR decision letter or acknowledgment (Optional)"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          restrictExtension="pdf,jpg,jpeg,png,doc,docx"
          fileSize={10}
          maxCount={1}
          noRequired={true}
          type="1"
          height={140}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
