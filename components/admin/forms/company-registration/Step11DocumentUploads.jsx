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
import { AntFileUpload, AntInput } from "@/services/antdFields";

export default function Step11DocumentUploads() {
  return (
    <div className="space-y-6 animate-fadeIn">
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
          Upload certified proof of identity documents, signed director/member consents, and registry extracts.
        </p>
      </div>

      {/* Uploads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntFileUpload
          name="allOfficerIds"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">1. Primary Photo IDs for all Directors & Instructing Persons *</span>}
          heading="Click or drag photo IDs"
          para="Passports, Australian Driver Licences (PDF, PNG, JPG)"
          maxCount={5}
          noRequired={false}
          reqMsg="Please upload primary photo IDs"
          icon={<IdcardOutlined className="text-3xl text-brand-primary mb-2" />}
        />

        <AntFileUpload
          name="signedDirectorConsents"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">2. Signed Director / Secretary Consents to Act</span>}
          heading="Click or drag Consent to Act"
          para="Signed Form 201 Consent or electronic signature"
          maxCount={3}
          noRequired={true}
          icon={<FileProtectOutlined className="text-3xl text-brand-primary mb-2" />}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntFileUpload
          name="signedMemberConsents"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">3. Signed Member / Shareholder Consents</span>}
          heading="Click or drag Member Consents"
          para="Consent to proposed shareholding"
          maxCount={3}
          noRequired={true}
          icon={<FileProtectOutlined className="text-3xl text-brand-primary mb-2" />}
        />

        <AntFileUpload
          name="directorIdNotices"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">4. Director ID Confirmation Notices / ABRS Confirmation</span>}
          heading="Click or drag Director ID proof"
          para="ABRS confirmation letter or email notice"
          maxCount={3}
          noRequired={true}
          icon={<SafetyCertificateOutlined className="text-3xl text-brand-primary mb-2" />}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntFileUpload
          name="corporateExtracts"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">5. ASIC Extract for Corporate Shareholders / Holding Entity</span>}
          heading="Click or drag ASIC extract"
          para="Current company search extract (PDF)"
          maxCount={2}
          noRequired={true}
          icon={<FilePdfOutlined className="text-3xl text-brand-primary mb-2" />}
        />

        <AntFileUpload
          name="otherLegalAgreements"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">6. Shareholder Agreements, Nominee Deeds, Side Letters</span>}
          heading="Click or drag other agreements"
          para="Optional legal instruments or trust deeds (PDF)"
          maxCount={5}
          noRequired={true}
          icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
        />
      </div>
    </div>
  );
}
