"use client";

import React, { useState } from "react";
import { Form, Tag, Button, Modal } from "antd";
import {
  UploadOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  UserSwitchOutlined,
  BookOutlined,
  PrinterOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import UploadFile from "@/components/mutual/antd-upload-file-component";
import PrivacyCollectionNoticeTrigger from "./PrivacyCollectionNoticeTrigger";

const RELATIONSHIP_OPTIONS = [
  { value: "Parent / Guardian", label: "Parent / Legal Guardian" },
  { value: "Power of Attorney", label: "Power of Attorney (POA)" },
  { value: "Executor", label: "Executor of Estate" },
  { value: "Other Representative", label: "Other Authorized Person" },
];

export default function Step7AuthoritiesBank({ form, formData }) {
  const isSelf = Form.useWatch("isSelf", form);
  const needBank = Form.useWatch("needBank", form);
  const hadPreviousAccountant = Form.useWatch("hadPreviousAccountant", form);
  const watchedServices = Form.useWatch("services", form);
  const services =
    watchedServices ||
    formData?.services ||
    form.getFieldValue("services") ||
    [];

  const [authorityModalOpen, setAuthorityModalOpen] = useState(false);

  const isAbnGst =
    services.includes("ABN Application") ||
    services.includes("ABN Registration") ||
    services.includes("GST Registration") ||
    services.includes("Sole Trader BAS") ||
    services.includes("Sole Trader BAS Lodgement");

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 7 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Representative & Bank Authorities
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Statutory Authorities & Refund Bank Account
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Authorize Financially Up to represent you before the ATO/ABR and
          nominate your refund bank account.
        </p>
      </div>

      {/* Representative Section (REP-001 to REP-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="isSelf"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Are you completing this engagement form for yourself?
            </span>
          }
          radioOptions={[
            { value: "Yes", label: "Yes, I am the client" },
            {
              value: "No",
              label: "No, I am acting as a representative / guardian / POA",
            },
          ]}
          reqMsg="Select an option."
          containerClassName="!mb-0"
        />

        {isSelf === "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4 mt-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <UserSwitchOutlined className="text-brand-primary" />{" "}
              Representative Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AntInput
                name="repName"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Representative Full Name
                  </span>
                }
                placeholder="Enter representative name"
                size="large"
                className="rounded-xl"
                reqMsg="Enter representative name."
                containerClassName="!mb-2"
              />

              <AntInput
                type="select"
                name="relationship"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Legal Relationship to Client
                  </span>
                }
                options={RELATIONSHIP_OPTIONS}
                placeholder="Select Relationship"
                size="large"
                className="rounded-xl"
                reqMsg="Select relationship."
                containerClassName="!mb-2"
              />

              <UploadFile
                name="authorityDoc"
                label={
                  <span className="text-[13px] font-bold text-slate-800 dark:text-zinc-200">
                    Upload Legal Authority Document (Power of Attorney / Court
                    Order)
                  </span>
                }
                placeholder="Choose authority evidence"
                maxCount={1}
                noRequired={true}
                type="4"
                height={149}
                className="rounded-xl"
              />

              <AntInput
                type="textarea"
                name="authorityDesc"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Authority Notes / Capacity Scope
                  </span>
                }
                placeholder="Provide brief details regarding your authority to act..."
                rows={5}
                className="rounded-xl !h-[150px]"
                noRequired={true}
                containerClassName="!mb-0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bank Account Section (BANK-001 to BANK-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="needBank"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Do you wish to nominate an Australian bank account for ATO tax
              refunds?
            </span>
          }
          radioOptions={[
            {
              value: "Yes",
              label: "Yes, nominate bank account for tax refund",
            },
            { value: "No", label: "No bank refund account needed" },
          ]}
          reqMsg="Select bank option."
          containerClassName="!mb-0"
        />

        {needBank === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4 mt-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
                <BankOutlined className="text-brand-primary" /> Australian Bank
                Account Details
              </h4>
              <PrivacyCollectionNoticeTrigger category="bank" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AntInput
                name="accountName"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Account Name
                  </span>
                }
                placeholder="e.g. John Smith"
                size="large"
                className="rounded-xl"
                reqMsg="Enter account name."
                containerClassName="!mb-2"
              />

              <AntInput
                name="bsb"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    6-Digit BSB
                  </span>
                }
                placeholder="000-000"
                size="large"
                maxLength={7}
                className="rounded-xl font-mono"
                rules={[
                  { required: true, message: "Enter BSB." },
                  {
                    pattern: /^\d{3}-?\d{3}$/,
                    message: "Enter valid 6-digit BSB.",
                  },
                ]}
                containerClassName="!mb-2"
              />

              <AntInput
                name="accountNumber"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Account Number
                  </span>
                }
                placeholder="12345678"
                size="large"
                className="rounded-xl font-mono"
                reqMsg="Enter account number."
                containerClassName="!mb-2"
              />
            </div>

            <AntInput
              type="checkbox"
              name="confirmOwnership"
              text="I confirm this Australian bank account belongs to me (or my legal entity) for direct ATO refund deposit."
              className="text-xs font-semibold text-slate-700 dark:text-zinc-300"
              validator={(_, v) =>
                v
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("You must confirm bank ownership."),
                    )
              }
              containerClassName="!mb-0"
            />
          </div>
        )}
      </div>

      {/* Statutory Authorities Section */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
            <SafetyCertificateOutlined className="text-brand-primary" />{" "}
            Statutory Tax Agent Authorities
          </h4>
          <Button
            type="default"
            icon={<BookOutlined />}
            onClick={() => setAuthorityModalOpen(true)}
            className="rounded-xl font-bold text-xs"
          >
            View Authority Details
          </Button>
        </div>

        {/* ATO Authority */}
        <AntInput
          type="checkbox"
          name="atoAuthority"
          text="ATO Authority: I authorise Financially Up Pty Ltd (Registered Tax Agent #25800000) to act on my behalf with the ATO within the accepted scope of work."
          className="text-sm font-bold text-slate-900 dark:text-zinc-100"
          validator={(_, v) =>
            v
              ? Promise.resolve()
              : Promise.reject(new Error("ATO Authority is mandatory."))
          }
          containerClassName="!mb-2"
        />

        {/* ABR Authority (Conditional) */}
        {isAbnGst && (
          <AntInput
            type="checkbox"
            name="abrAuthority"
            text="ABR Authority: I authorise Financially Up Pty Ltd to access Australian Business Register (ABR) data and update ABN/GST records on my behalf."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "ABR Authority is required for ABN/GST services.",
                    ),
                  )
            }
            containerClassName="!mb-0"
          />
        )}

        {hadPreviousAccountant === "Yes" && (
          <AntInput
            type="radio"
            name="previousAuthority"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Previous Adviser Ethical Clearance Authority
              </span>
            }
            radioOptions={[
              {
                value: "Authorise",
                label:
                  "Authorise Ethical Clearance Contact with Previous Adviser",
              },
              { value: "Do Not Authorise", label: "Do Not Authorise" },
            ]}
            reqMsg="Select option for previous adviser authority."
            containerClassName="!mb-0"
          />
        )}
      </div>

      {/* Authority Details Modal */}
      <Modal
        open={authorityModalOpen}
        onCancel={() => setAuthorityModalOpen(false)}
        width={750}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="auth-footer"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setAuthorityModalOpen(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              Understood
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-6 space-y-4 text-slate-900 dark:text-zinc-100 font-sans">
          <div className="border-b-2 border-brand-primary pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-brand-primary m-0">
                FINANCIALLY UP PTY LTD
              </h2>
              <p className="text-xs text-slate-500 m-0">
                Registered Tax Agent #25800000 | Statutory Authority Framework
              </p>
            </div>
            <Tag color="green" className="font-bold text-xs">
              TASA 2009 Authority
            </Tag>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 m-0 text-brand-primary">
              1. ATO Tax Agent Authority Scope
            </h4>
            <p className="text-slate-700 dark:text-zinc-300 m-0 leading-relaxed">
              By granting ATO Authority, you authorise Financially Up to add or
              maintain your tax record on our ATO client list, access your ATO
              online portal income pre-fill data, communicate with ATO officers,
              receive ATO notices, and lodge approved income tax returns,
              Activity Statements, and schedules on your behalf.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 m-0 text-brand-primary">
              2. ABR Authority Scope (Where Applicable)
            </h4>
            <p className="text-slate-700 dark:text-zinc-300 m-0 leading-relaxed">
              By granting ABR Authority, you authorise Financially Up to access
              your Australian Business Register record, submit ABN and GST
              registration applications, update registered business details, and
              manage ABR correspondence relevant to your accepted business
              services.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
