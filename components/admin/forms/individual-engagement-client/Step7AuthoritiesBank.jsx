"use client";

import React from "react";
import { Form, Tag } from "antd";
import { UploadOutlined, BankOutlined, SafetyCertificateOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";

const RELATIONSHIP_OPTIONS = [
  { value: "Parent / Guardian", label: "Parent / Legal Guardian" },
  { value: "Power of Attorney", label: "Power of Attorney (POA)" },
  { value: "Executor", label: "Executor of Estate" },
  { value: "Other Representative", label: "Other Authorized Person" },
];

export default function Step7AuthoritiesBank({ form }) {
  const isSelf = Form.useWatch("isSelf", form);
  const needBank = Form.useWatch("needBank", form);
  const hadPreviousAccountant = Form.useWatch("hadPreviousAccountant", form);
  const services = Form.useWatch("services", form) || [];

  const isAbnGst = services.includes("ABN Application") || services.includes("GST Registration") || services.includes("Sole Trader BAS");

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 7 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Representative & Bank Authorities</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Authorities & Tax Refund Bank Account
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Authorize Financially Up to represent you with the ATO and nominate your refund bank account.
        </p>
      </div>

      {/* Representative Section (REP-001 to REP-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="isSelf"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Are you completing this engagement form for yourself?</span>}
          radioOptions={[
            { value: "Yes", label: "Yes, I am the client" },
            { value: "No", label: "No, I am acting as a representative / guardian / POA" },
          ]}
          reqMsg="Select an option."
          containerClassName="mb-0"
        />

        {isSelf === "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <UserSwitchOutlined className="text-brand-primary" /> Representative Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AntInput
                name="repName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Representative Full Name</span>}
                placeholder="Enter representative name"
                size="large"
                className="rounded-xl"
                reqMsg="Enter representative name."
              />

              <AntInput
                type="select"
                name="relationship"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Legal Relationship to Client</span>}
                options={RELATIONSHIP_OPTIONS}
                placeholder="Select Relationship"
                size="large"
                className="rounded-xl"
                reqMsg="Select relationship."
              />
            </div>

            <AntFileUpload
              name="authorityDoc"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Legal Authority Document (Power of Attorney / Court Order)</span>}
              icon={<UploadOutlined className="text-brand-primary text-xl" />}
              heading="Upload Authority Evidence (PDF / JPG / PNG)"
              reqMsg="Upload authority document."
              maxCount={1}
            />

            <AntInput
              type="textarea"
              name="authorityDesc"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Representative Authority Description</span>}
              placeholder="Describe the scope of your authority or guardianship..."
              rows={2}
              className="rounded-xl"
              noRequired={true}
              containerClassName="mb-0"
            />
          </div>
        )}
      </div>

      {/* Bank Account Section (BANK-001 to BANK-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="needBank"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Do you wish to nominate an Australian bank account for ATO tax refunds?</span>}
          radioOptions={[
            { value: "Yes", label: "Yes, nominate bank account for tax refund" },
            { value: "No", label: "No bank refund account needed" },
          ]}
          reqMsg="Select bank option."
          containerClassName="mb-0"
        />

        {needBank === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <BankOutlined className="text-brand-primary" /> Australian Bank Account Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AntInput
                name="accountName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Account Name</span>}
                placeholder="e.g. John Smith"
                size="large"
                className="rounded-xl"
                reqMsg="Enter account name."
              />

              <AntInput
                name="bsb"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">6-Digit BSB</span>}
                placeholder="000-000"
                size="large"
                maxLength={7}
                className="rounded-xl font-mono"
                rules={[
                  { required: true, message: "Enter BSB." },
                  { pattern: /^\d{3}-?\d{3}$/, message: "Enter valid 6-digit BSB." },
                ]}
              />

              <AntInput
                name="accountNumber"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Account Number</span>}
                placeholder="12345678"
                size="large"
                className="rounded-xl font-mono"
                reqMsg="Enter account number."
              />
            </div>

            <AntInput
              type="checkbox"
              name="confirmOwnership"
              text="I confirm this Australian bank account belongs to me (or my legal entity) for direct ATO refund deposit."
              className="text-xs font-semibold text-slate-700 dark:text-zinc-300"
              validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("You must confirm bank ownership.")))}
              containerClassName="mb-0"
            />
          </div>
        )}
      </div>

      {/* Statutory Authorities (AUTH-001, AUTH-002, AUTH-003) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <SafetyCertificateOutlined className="text-brand-primary" /> Statutory Tax Agent Authorities
        </h4>

        <AntInput
          type="checkbox"
          name="atoAuthority"
          text="ATO Tax Agent Authority: I authorize Financially Up Pty Ltd (Registered Tax Agent) to add me to their ATO Client List and act on my behalf for Australian taxation affairs."
          className="text-sm font-bold text-slate-900 dark:text-zinc-100"
          validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("ATO Authority is mandatory."))) }
          containerClassName="mb-2"
        />

        {isAbnGst && (
          <AntInput
            type="checkbox"
            name="abrAuthority"
            text="ABR Authority: I authorize Financially Up Pty Ltd to access Australian Business Register (ABR) data and update ABN/GST records on my behalf."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) => (v ? Promise.resolve() : Promise.reject(new Error("ABR Authority is required for ABN/GST services."))) }
            containerClassName="mb-2"
          />
        )}

        {hadPreviousAccountant === "Yes" && (
          <AntInput
            type="radio"
            name="previousAuthority"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">AUTH-003: Previous Adviser Ethical Clearance Authority</span>}
            radioOptions={[
              { value: "Authorise", label: "Authorise Ethical Clearance Contact with Previous Adviser" },
              { value: "Do Not Authorise", label: "Do Not Authorise" },
            ]}
            reqMsg="Select option for previous adviser authority."
            containerClassName="mb-0"
          />
        )}
      </div>
    </div>
  );
}
