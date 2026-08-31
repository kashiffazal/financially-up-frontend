"use client";

import React from "react";
import { Tag } from "antd";
import {
  IdcardOutlined,
  FileProtectOutlined,
  FilePdfOutlined,
  SafetyCertificateOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import UploadFile from "@/components/mutual/antd-upload-file-component";

export default function Step11DocumentUploads() {
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 11 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Document Attachments
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Supporting Documents & Consent Attachments
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Upload certified proof of identity documents, signed director/member
          consents, and registry extracts.
        </p>
      </div>

      {/* Uploads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UploadFile
          name="allOfficerIds"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              1. Primary Photo IDs for all Directors & Instructing Persons *
            </span>
          }
          title="Click or drag photo IDs"
          msg="Passports, Australian Driver Licences"
          // accept=".pdf,.jpg,.jpeg,.png"
          // restrictExtension="pdf,jpg,jpeg,png"
          fileSize={10}
          maxCount={5}
          multiple={true}
          // noRequired={false}
          reqMsg="Please upload primary photo IDs"
          type="4"
          height={100}
          className="rounded-2xl"
        />

        <UploadFile
          name="signedDirectorConsents"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              2. Signed Director / Secretary Consents to Act
            </span>
          }
          title="Click or drag Consent to Act"
          msg="Signed Form 201 Consent or electronic signature"
          maxCount={3}
          multiple={true}
          noRequired={true}
          type="4"
          height={100}
          className="rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UploadFile
          name="signedMemberConsents"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              3. Signed Member / Shareholder Consents
            </span>
          }
          title="Click or drag Member Consents"
          msg="Consent to proposed shareholding"
          maxCount={3}
          multiple={true}
          noRequired={true}
          type="4"
          height={100}
          className="rounded-2xl"
        />

        <UploadFile
          name="directorIdNotices"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              4. Director ID Confirmation Notices / ABRS Confirmation
            </span>
          }
          title="Click or drag Director ID proof"
          msg="ABRS confirmation letter or email notice"
          maxCount={3}
          multiple={true}
          noRequired={true}
          type="4"
          height={100}
          className="rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UploadFile
          name="corporateExtracts"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              5. ASIC Extract for Corporate Shareholders / Holding Entity
            </span>
          }
          title="Click or drag ASIC extract"
          msg="Current company search extract (PDF)"
          maxCount={2}
          multiple={true}
          noRequired={true}
          type="4"
          height={100}
          className="rounded-2xl"
        />

        <UploadFile
          name="otherLegalAgreements"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              6. Shareholder Agreements, Nominee Deeds, Side Letters
            </span>
          }
          title="Click or drag other agreements"
          msg="Optional legal instruments or trust deeds (PDF)"
          maxCount={5}
          multiple={true}
          noRequired={true}
          type="4"
          height={100}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
