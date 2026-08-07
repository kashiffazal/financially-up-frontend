"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Radio, InputNumber, Checkbox, Alert, Tag } from "antd";
import { BankOutlined, AuditOutlined, FormOutlined, InfoCircleOutlined } from "@ant-design/icons";

export default function Step5BasGstSoleTrader({ form }) {
  const services = Form.useWatch("services", form) || [];

  const isBasSelected = services.includes("Sole Trader BAS");
  const isAbnSelected = services.includes("ABN Application");
  const isGstSelected = services.includes("GST Registration");

  // If none of these services selected in Step 1, show friendly skip message
  if (!isBasSelected && !isAbnSelected && !isGstSelected) {
    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
              Step 5 of 10
            </Tag>
            <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Sole Trader BAS, ABN & GST</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Sole Trader / Business Registration
          </h2>
        </div>

        <Alert
          type="info"
          showIcon
          message="Step 5 Not Required for Your Selected Services"
          description="Based on your selections in Step 1, you did not request Sole Trader BAS, ABN Application, or GST Registration. You can safely click 'Next Step' to continue."
          className="rounded-2xl border-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 text-slate-800 dark:text-zinc-200 p-6"
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 5 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Sole Trader BAS, ABN & GST</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Sole Trader & Business Compliance
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide your Sole Trader ABN, GST registration parameters, and Business Activity Statement details.
        </p>
      </div>

      {/* BAS SECTION (Visible when Sole Trader BAS selected) */}
      {isBasSelected && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <AuditOutlined className="text-brand-primary" /> Sole Trader BAS Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="existingAbn"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">11-Digit Sole Trader ABN</span>}
              rules={[
                { required: true, message: "Please enter your 11-digit ABN." },
                { pattern: /^\d{2}\s?\d{3}\s?\d{3}\s?\d{3}$/, message: "Please enter a valid 11-digit ABN." },
              ]}
            >
              <Input placeholder="11 222 333 444" size="large" className="rounded-xl font-mono" />
            </Form.Item>

            <Form.Item
              name="reportingFrequency"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">BAS Reporting Frequency</span>}
              rules={[{ required: true, message: "Please select frequency." }]}
            >
              <Select placeholder="Select Frequency" size="large" className="rounded-xl">
                <Select.Option value="Quarterly">Quarterly (Most Common)</Select.Option>
                <Select.Option value="Monthly">Monthly</Select.Option>
                <Select.Option value="Annual">Annual GST Return</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item
              name="gstStatus"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">GST Registration Status</span>}
              rules={[{ required: true, message: "Please select status." }]}
            >
              <Radio.Group>
                <Radio value="Registered">Registered</Radio>
                <Radio value="Not Registered">Not Registered</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="overdueBas"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Do you have overdue BAS?</span>}
              rules={[{ required: true, message: "Select option." }]}
            >
              <Radio.Group>
                <Radio value="No">No</Radio>
                <Radio value="Yes">Yes</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="hasPayroll"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">PAYG Withholding / Employees?</span>}
            >
              <Radio.Group>
                <Radio value="No">No</Radio>
                <Radio value="Yes">Yes</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <Form.Item
            name="basScope"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Required BAS Work Scope</span>}
          >
            <Checkbox.Group className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Checkbox value="Prepare & Lodge">Prepare & Lodge Quarterly BAS</Checkbox>
                <Checkbox value="Review GST">Review GST Reconciliations</Checkbox>
                <Checkbox value="Correct Records">Bookkeeping & Record Cleanup</Checkbox>
                <Checkbox value="Lodge Only">Client Prepares, Financially Up Lodges</Checkbox>
              </div>
            </Checkbox.Group>
          </Form.Item>
        </div>
      )}

      {/* ABN APPLICATION SECTION (Visible when ABN Application selected) */}
      {isAbnSelected && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <FormOutlined className="text-brand-primary" /> ABN Application Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="businessStartDate"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Proposed Business Start Date</span>}
              rules={[{ required: true, message: "Select start date." }]}
            >
              <DatePicker format="DD/MM/YYYY" size="large" className="w-full rounded-xl" />
            </Form.Item>

            <Form.Item
              name="businessActivity"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Main Business Activity</span>}
              rules={[{ required: true, message: "Enter business activity." }]}
            >
              <Input placeholder="e.g. IT Consulting, Rideshare, Plumbing" size="large" className="rounded-xl" />
            </Form.Item>

            <Form.Item
              name="expectedTurnover"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Estimated Annual Business Turnover ($)</span>}
              rules={[{ required: true, message: "Enter estimated turnover." }]}
            >
              <InputNumber
                formatter={(v) => `$ ${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(v) => v.replace(/\$\s?|(,*)/g, "")}
                size="large"
                className="w-full rounded-xl"
                placeholder="Estimated turnover"
              />
            </Form.Item>

            <Form.Item
              name="registerGST"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Register for GST with ABN?</span>}
            >
              <Radio.Group>
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
      )}

      {/* GST REGISTRATION SECTION (Visible when GST Registration selected) */}
      {isGstSelected && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <BankOutlined className="text-brand-primary" /> GST Registration Setup
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="accountingMethod"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">GST Accounting Basis</span>}
              rules={[{ required: true, message: "Select accounting basis." }]}
            >
              <Radio.Group>
                <Radio value="Cash">Cash Basis (Most Small Businesses)</Radio>
                <Radio value="Non-Cash">Accruals / Non-Cash Basis</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="gstRegistrationType"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Registration Requirement</span>}
            >
              <Radio.Group>
                <Radio value="Compulsory">Compulsory (Turnover ≥ $75k)</Radio>
                <Radio value="Voluntary">Voluntary (Turnover &lt; $75k)</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
      )}
    </div>
  );
}
