"use client";

import React from "react";
import { Form, Checkbox, Radio, Alert, Tag } from "antd";
import { SafetyCertificateOutlined, FileProtectOutlined, FormOutlined } from "@ant-design/icons";

export default function Step9LegalConsents({ form }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 9 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Legal Agreements & Consents</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Legal Consents & ATO Declarations
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Under Tax Agent Services Act 2009 and Privacy Act 1988, please accept the required statutory consents.
        </p>
      </div>

      {/* Required Consents Box */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <FileProtectOutlined className="text-brand-primary" /> Mandatory Client Consents
        </h4>

        {/* CONSENT-001 */}
        <Form.Item
          name="consentScheduleTerms"
          valuePropName="checked"
          rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Consent to Engagement Schedule & Terms is mandatory."))) }]}
          className="mb-2"
        >
          <Checkbox className="text-sm font-bold text-slate-900 dark:text-zinc-100">
            CONSENT 1: I have opened, read, and agree to the Engagement Schedule, Scope of Work, and Terms & Conditions.
          </Checkbox>
        </Form.Item>

        {/* CONSENT-002 */}
        <Form.Item
          name="consentPrivacy"
          valuePropName="checked"
          rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Privacy Policy acknowledgement is mandatory."))) }]}
          className="mb-2"
        >
          <Checkbox className="text-sm font-bold text-slate-900 dark:text-zinc-100">
            CONSENT 2: I acknowledge the Privacy Collection Notice, Privacy Policy, and TPB Client Information Statement regarding TFN security and personal data handling.
          </Checkbox>
        </Form.Item>

        {/* CONSENT-003 */}
        <Form.Item
          name="consentAtoAuthority"
          valuePropName="checked"
          rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("ATO Authority confirmation is mandatory."))) }]}
          className="mb-2"
        >
          <Checkbox className="text-sm font-bold text-slate-900 dark:text-zinc-100">
            CONSENT 3: I authorize Financially Up Pty Ltd (Tax Agent #25800000) to act on my behalf with the ATO within the accepted scope of work.
          </Checkbox>
        </Form.Item>

        {/* CONSENT-004 */}
        <Form.Item
          name="consentCloudOverseas"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">CONSENT 4: Do you consent to cloud infrastructure & secure outsourced processing?</span>}
          rules={[{ required: true, message: "Please select an option for cloud/overseas processing." }]}
          className="mb-0 pt-2"
        >
          <Radio.Group>
            <Radio value="Yes">Yes, I consent</Radio>
            <Radio value="No">No, domestic onshore processing only</Radio>
          </Radio.Group>
        </Form.Item>
      </div>

      {/* Client Declarations Summary Box */}
      <div className="p-6 rounded-2xl bg-brand-primary-soft/30 dark:bg-emerald-950/30 border border-brand-primary/20 dark:border-emerald-900/50 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <SafetyCertificateOutlined className="text-brand-primary" /> Statutory Client Declarations
        </h4>
        <ul className="text-xs text-slate-700 dark:text-zinc-300 space-y-2 list-disc pl-5 leading-relaxed">
          <li>I confirm that all information and income records supplied in this form are true, correct, and complete.</li>
          <li>I have disclosed all worldwide income, investment deductions, and tax matters.</li>
          <li>I understand that Financially Up's review does not guarantee taxation audit immunity by the ATO.</li>
          <li>I acknowledge that my engagement remains <strong>Pending Review</strong> until accepted in writing by Financially Up staff.</li>
        </ul>
      </div>
    </div>
  );
}
