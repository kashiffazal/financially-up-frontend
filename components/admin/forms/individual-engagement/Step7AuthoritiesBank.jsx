"use client";

import React from "react";
import { Form, Radio, Input, Checkbox, Upload, Button, Select, Tag } from "antd";
import { UploadOutlined, BankOutlined, SafetyCertificateOutlined, UserSwitchOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function Step7AuthoritiesBank({ form }) {
  const isSelf = Form.useWatch("isSelf", form);
  const needBank = Form.useWatch("needBank", form);
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
        <Form.Item
          name="isSelf"
          initialValue="Yes"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Are you completing this engagement form for yourself?</span>}
          rules={[{ required: true, message: "Select an option." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="Yes">Yes, I am the client</Radio>
            <Radio value="No">No, I am acting as a representative / guardian / POA</Radio>
          </Radio.Group>
        </Form.Item>

        {isSelf === "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <UserSwitchOutlined className="text-brand-primary" /> Representative Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="repName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Representative Full Name</span>}
                rules={[{ required: true, message: "Enter representative name." }]}
              >
                <Input placeholder="Enter representative name" size="large" className="rounded-xl" />
              </Form.Item>

              <Form.Item
                name="relationship"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Legal Relationship to Client</span>}
                rules={[{ required: true, message: "Select relationship." }]}
              >
                <Select placeholder="Select Relationship" size="large" className="rounded-xl">
                  <Select.Option value="Parent / Guardian">Parent / Legal Guardian</Select.Option>
                  <Select.Option value="Power of Attorney">Power of Attorney (POA)</Select.Option>
                  <Select.Option value="Executor">Executor of Estate</Select.Option>
                  <Select.Option value="Other Representative">Other Authorized Person</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              name="authorityDoc"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Legal Authority Document (Power of Attorney / Court Order)</span>}
              rules={[{ required: true, message: "Upload authority document." }]}
              className="mb-0"
            >
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined className="text-brand-primary" />} size="large" className="rounded-xl">
                  Upload Authority Evidence (PDF / JPG / PNG)
                </Button>
              </Upload>
            </Form.Item>
          </div>
        )}
      </div>

      {/* Bank Account Section (BANK-001 to BANK-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <Form.Item
          name="needBank"
          initialValue="Yes"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Do you wish to nominate an Australian bank account for ATO tax refunds?</span>}
          rules={[{ required: true, message: "Select bank option." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="Yes">Yes, nominate bank account for tax refund</Radio>
            <Radio value="No">No bank refund account needed</Radio>
          </Radio.Group>
        </Form.Item>

        {needBank === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <BankOutlined className="text-brand-primary" /> Australian Bank Account Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item
                name="accountName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Account Name</span>}
                rules={[{ required: true, message: "Enter account name." }]}
              >
                <Input placeholder="e.g. John Smith" size="large" className="rounded-xl" />
              </Form.Item>

              <Form.Item
                name="bsb"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">6-Digit BSB</span>}
                rules={[
                  { required: true, message: "Enter BSB." },
                  { pattern: /^\d{3}-?\d{3}$/, message: "Enter valid 6-digit BSB." },
                ]}
              >
                <Input placeholder="000-000" size="large" className="rounded-xl font-mono" maxLength={7} />
              </Form.Item>

              <Form.Item
                name="accountNumber"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Account Number</span>}
                rules={[{ required: true, message: "Enter account number." }]}
              >
                <Input placeholder="12345678" size="large" className="rounded-xl font-mono" />
              </Form.Item>
            </div>

            <Form.Item
              name="confirmOwnership"
              valuePropName="checked"
              rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("You must confirm bank ownership."))) }]}
              className="mb-0"
            >
              <Checkbox className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
                I confirm this Australian bank account belongs to me (or my legal entity) for direct ATO refund deposit.
              </Checkbox>
            </Form.Item>
          </div>
        )}
      </div>

      {/* Statutory Authorities (AUTH-001 & AUTH-002) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <SafetyCertificateOutlined className="text-brand-primary" /> Statutory Tax Agent Authorities
        </h4>

        <Form.Item
          name="atoAuthority"
          valuePropName="checked"
          rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("ATO Authority is mandatory."))) }]}
          className="mb-2"
        >
          <Checkbox className="text-sm font-bold text-slate-900 dark:text-zinc-100">
            ATO Tax Agent Authority: I authorize Financially Up Pty Ltd (Registered Tax Agent) to add me to their ATO Client List and act on my behalf for Australian taxation affairs.
          </Checkbox>
        </Form.Item>

        {isAbnGst && (
          <Form.Item
            name="abrAuthority"
            valuePropName="checked"
            rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("ABR Authority is required for ABN/GST services."))) }]}
            className="mb-0"
          >
            <Checkbox className="text-sm font-bold text-slate-900 dark:text-zinc-100">
              ABR Authority: I authorize Financially Up Pty Ltd to access Australian Business Register (ABR) data and update ABN/GST records on my behalf.
            </Checkbox>
          </Form.Item>
        )}
      </div>
    </div>
  );
}
