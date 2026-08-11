"use client";

import React from "react";
import { Form, Alert, Tag } from "antd";
import { WarningOutlined, UploadOutlined } from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";

const INCOME_SOURCES = [
  { value: "Salary/Wages", label: "Salary / Wages (PAYG Income Statement)" },
  {
    value: "Government Payments",
    label: "Government Allowances / Pensions (Centrelink)",
  },
  { value: "Interest", label: "Bank Interest Income" },
  {
    value: "Dividends/Funds",
    label: "Share Dividends / Managed Fund Distributions",
  },
  { value: "Rental Property", label: "Rental Property Income & Expenses" },
  {
    value: "Capital Gains",
    label: "Capital Gains (Property, Shares, Asset Sales)",
  },
  {
    value: "Cryptocurrency",
    label: "Cryptocurrency Trading / Staking / Mining",
  },
  {
    value: "Foreign Income/Assets",
    label: "Foreign Employment / Foreign Pension / Overseas Assets",
  },
  { value: "Super/Pension", label: "Superannuation Lump Sum / Income Stream" },
  { value: "Employee Shares", label: "Employee Share Schemes (ESS)" },
  {
    value: "Sole Trader/Contractor Income",
    label: "Sole Trader / Contractor / Subcontractor Income",
  },
  { value: "Other", label: "Other Income or Deductions" },
];

export default function Step4IncomeProfile({ form }) {
  const hadPreviousAccountant = Form.useWatch("hadPreviousAccountant", form);
  const atoIssues = Form.useWatch("atoIssues", form);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 4 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Income & Tax Profile
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Income Sources & Tax History
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Select all income streams and tax matters that applied to you during
          the financial year.
        </p>
      </div>

      {/* INC-001: Income Checklist */}
      <AntInput
        type="checkbox"
        name="incomeActivities"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Which income sources apply to your tax return?
          </span>
        }
        group={INCOME_SOURCES}
        validator={(_, v) =>
          v && v.length > 0
            ? Promise.resolve()
            : Promise.reject(
                new Error("Please select at least one income source."),
              )
        }
        designVariant="card"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
      />

      {/* Previous Accountant (INC-002 to INC-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="hadPreviousAccountant"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Did you use a previous tax agent or accounting firm?
            </span>
          }
          radioOptions={[
            {
              value: "No",
              label: "No, first time using an accountant or self-lodged",
            },
            {
              value: "Yes",
              label: "Yes, previously engaged a tax agent / accountant",
            },
          ]}
          vertical={true}
          reqMsg="Please select an option."
          containerClassName="!mb-0"
        />

        {hadPreviousAccountant === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AntInput
                name="previousFirm"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Previous Accounting Firm Name
                  </span>
                }
                placeholder="Enter accounting firm name"
                size="large"
                className="rounded-xl"
                reqMsg="Please enter the previous firm."
                containerClassName="!mb-2"
              />

              <AntInput
                type="radio"
                name="authorisePreviousAdvisor"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Authorise Ethical Clearance Contact?
                  </span>
                }
                radioOptions={[
                  { value: "Authorise", label: "Authorise contact" },
                  { value: "Do Not Authorise", label: "Do not authorise" },
                ]}
                noRequired={true}
                containerClassName="!mb-2"
              />
            </div>

            <AntInput
              type="textarea"
              name="reasonForChange"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Reason for Changing Tax Accountants
                </span>
              }
              placeholder="Briefly describe your reason for changing accountants..."
              rows={2}
              className="rounded-xl"
              reqMsg="Please provide a reason."
              containerClassName="!mb-0"
            />
          </div>
        )}
      </div>

      {/* ATO Debt & Audit Matters (INC-006 to INC-010) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="atoIssues"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Do you have any existing ATO debts, audits, disputes, or overdue
              lodgements?
            </span>
          }
          radioOptions={[
            { value: "No", label: "No ATO issues or debt" },
            { value: "Yes", label: "Yes, ATO debt / audit / review" },
            { value: "Unsure", label: "Unsure / Need ATO status check" },
          ]}
          reqMsg="Please select an option."
          containerClassName="!mb-0"
        />

        {atoIssues && atoIssues !== "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4 mt-2">
            <Alert
              type="warning"
              showIcon
              icon={<WarningOutlined />}
              title="Priority ATO Review Workflow"
              description="Notice: Our registered tax agents will conduct an immediate Tax Agent Portal lookup to review your ATO status and payment arrangement options."
              className="rounded-xl border-amber-200 bg-amber-50 dark:bg-amber-950/40 text-slate-800 dark:text-zinc-200 !mb-4"
            />

            <AntInput
              type="textarea"
              name="atoExplanation"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Describe the ATO Matter or Debt
                </span>
              }
              placeholder="Provide details regarding the ATO debt amount, audit notice, or correspondence..."
              rows={3}
              className="rounded-xl"
              reqMsg="Please provide details."
              containerClassName="!mb-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <AntInput
                type="datepicker"
                name="noticeDate"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    ATO Notice Date
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                noRequired={true}
                containerClassName="!mb-2"
              />

              <AntInput
                type="datepicker"
                name="dueDate"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    ATO Due Date
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                noRequired={true}
                containerClassName="!mb-2"
              />
            </div>

            <AntFileUpload
              name="atoDocuments"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Upload ATO Letters / Notices
                </span>
              }
              icon={<UploadOutlined className="text-brand-primary text-xl" />}
              heading="Attach ATO Notice (PDF/JPG/PNG)"
              maxCount={3}
              noRequired={true}
              containerClassName="!mb-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}
