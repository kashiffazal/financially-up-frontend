"use client";

import React from "react";
import { Form, Checkbox, Radio, Input, DatePicker, Upload, Button, Alert, Tag } from "antd";
import { UploadOutlined, InfoCircleOutlined, WarningOutlined, DollarOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const INCOME_SOURCES = [
  { value: "Salary/Wages", label: "Salary / Wages (PAYG Income Statement)" },
  { value: "Government Payments", label: "Government Allowances / Pensions (Centrelink)" },
  { value: "Interest", label: "Bank Interest Income" },
  { value: "Dividends/Funds", label: "Share Dividends / Managed Fund Distributions" },
  { value: "Rental Property", label: "Rental Property Income & Expenses" },
  { value: "Capital Gains", label: "Capital Gains (Property, Shares, Asset Sales)" },
  { value: "Cryptocurrency", label: "Cryptocurrency Trading / Staking / Mining" },
  { value: "Foreign Income/Assets", label: "Foreign Employment / Foreign Pension / Overseas Assets" },
  { value: "Super/Pension", label: "Superannuation Lump Sum / Income Stream" },
  { value: "Employee Shares", label: "Employee Share Schemes (ESS)" },
  { value: "Sole Trader/Contractor Income", label: "Sole Trader / Contractor / Subcontractor Income" },
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
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 4 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Income & Tax Profile</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Income Sources & Tax History
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Select all income streams and tax matters that applied to you during the financial year.
        </p>
      </div>

      {/* INC-001: Income Checklist */}
      <Form.Item
        name="incomeActivities"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Which income sources apply to your tax return?</span>}
        rules={[
          {
            required: true,
            validator: (_, v) => (v && v.length > 0 ? Promise.resolve() : Promise.reject(new Error("Please select at least one income source."))),
          },
        ]}
      >
        <Checkbox.Group className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {INCOME_SOURCES.map((inc) => (
              <label key={inc.value} className="p-3 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 block cursor-pointer">
                <Checkbox value={inc.value} className="font-bold text-slate-900 dark:text-zinc-100">
                  {inc.label}
                </Checkbox>
              </label>
            ))}
          </div>
        </Checkbox.Group>
      </Form.Item>

      {/* Previous Accountant (INC-002 to INC-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <Form.Item
          name="hadPreviousAccountant"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Did you use a previous tax agent or accounting firm?</span>}
          rules={[{ required: true, message: "Please select an option." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="No">No, first time using an accountant or self-lodged</Radio>
            <Radio value="Yes">Yes, previously engaged a tax agent / accountant</Radio>
          </Radio.Group>
        </Form.Item>

        {hadPreviousAccountant === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="previousFirm"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Previous Accounting Firm Name</span>}
                rules={[{ required: true, message: "Please enter the previous firm." }]}
              >
                <Input placeholder="Enter accounting firm name" size="large" className="rounded-xl" />
              </Form.Item>

              <Form.Item
                name="authorisePreviousAdvisor"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Authorise Ethical Clearance Contact?</span>}
              >
                <Radio.Group>
                  <Radio value="Authorise">Authorise contact</Radio>
                  <Radio value="Do Not Authorise">Do not authorise</Radio>
                </Radio.Group>
              </Form.Item>
            </div>

            <Form.Item
              name="reasonForChange"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reason for Changing Tax Accountants</span>}
              rules={[{ required: true, message: "Please provide a reason." }]}
              className="mb-0"
            >
              <TextArea placeholder="Briefly describe your reason for changing accountants..." rows={2} className="rounded-xl" />
            </Form.Item>
          </div>
        )}
      </div>

      {/* ATO Debt & Audit Matters (INC-006 to INC-010) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <Form.Item
          name="atoIssues"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Do you have any existing ATO debts, audits, disputes, or overdue lodgements?</span>}
          rules={[{ required: true, message: "Please select an option." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="No">No ATO issues or debt</Radio>
            <Radio value="Yes">Yes, ATO debt / audit / review</Radio>
            <Radio value="Unsure">Unsure / Need ATO status check</Radio>
          </Radio.Group>
        </Form.Item>

        {atoIssues && atoIssues !== "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <Alert
              type="warning"
              showIcon
              icon={<WarningOutlined />}
              message="Priority ATO Review Workflow"
              description="Notice: Our registered tax agents will conduct an immediate Tax Agent Portal lookup to review your ATO status and payment arrangement options."
              className="rounded-xl border-amber-200 bg-amber-50 dark:bg-amber-950/40 text-slate-800 dark:text-zinc-200"
            />

            <Form.Item
              name="atoExplanation"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Describe the ATO Matter or Debt</span>}
              rules={[{ required: true, message: "Please provide details." }]}
            >
              <TextArea placeholder="Provide details regarding the ATO debt amount, audit notice, or correspondence..." rows={3} className="rounded-xl" />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="noticeDate"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">ATO Notice Date</span>}
              >
                <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" size="large" className="w-full rounded-xl" />
              </Form.Item>

              <Form.Item
                name="dueDate"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">ATO Due Date</span>}
              >
                <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" size="large" className="w-full rounded-xl" />
              </Form.Item>
            </div>

            <Form.Item
              name="atoDocuments"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload ATO Letters / Notices</span>}
            >
              <Upload beforeUpload={() => false} maxCount={3}>
                <Button icon={<UploadOutlined className="text-brand-primary" />} className="rounded-xl">
                  Attach ATO Notice (PDF/JPG/PNG)
                </Button>
              </Upload>
            </Form.Item>
          </div>
        )}
      </div>
    </div>
  );
}
