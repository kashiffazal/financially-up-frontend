"use client";

import React, { useRef, useState } from "react";
import { Form, Input, Radio, Button, Checkbox, Alert, Tag } from "antd";
import { EditOutlined, CheckCircleFilled, ClearOutlined, LockOutlined } from "@ant-design/icons";

export default function Step10ElectronicSignature({ form }) {
  const [sigMode, setSigMode] = useState("type");
  const [typedSig, setTypedSig] = useState("");
  const fullName = form.getFieldValue("fullName") || "";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 10 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Electronic Signature</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Sign & Submit Engagement Form
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Sign electronically to finalize your onboarding application for internal accountant review.
        </p>
      </div>

      {/* Signer Legal Name Confirmation */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        <Form.Item
          name="signerFullName"
          initialValue={fullName}
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Confirm Signer Full Legal Name</span>}
          rules={[{ required: true, message: "Please enter your full legal name for signature." }]}
        >
          <Input size="large" className="rounded-xl font-semibold" placeholder="Signer full legal name" />
        </Form.Item>

        {/* Signature Mode Choice */}
        <Form.Item
          name="signatureType"
          initialValue="type"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Electronic Signature Method</span>}
        >
          <Radio.Group onChange={(e) => setSigMode(e.target.value)}>
            <Radio value="type">Type Signature</Radio>
            <Radio value="draw">Draw Signature</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Signature Input Container */}
        {sigMode === "type" ? (
          <Form.Item
            name="signatureText"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Type Your Full Name as Signature</span>}
            rules={[{ required: true, message: "Type your signature." }]}
          >
            <div className="space-y-3">
              <Input
                size="large"
                placeholder="Type your name here"
                onChange={(e) => setTypedSig(e.target.value)}
                className="rounded-xl"
              />

              {typedSig && (
                <div className="p-6 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-zinc-950 text-center shadow-inner">
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Electronic Signature Preview</div>
                  <div className="text-3xl font-serif italic text-brand-primary dark:text-emerald-400 font-extrabold tracking-wide py-2">
                    {typedSig}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    Signed electronically via Financially Up Secure Portal | IP Logged
                  </div>
                </div>
              )}
            </div>
          </Form.Item>
        ) : (
          <div className="space-y-3">
            <label className="font-bold text-slate-800 dark:text-zinc-200 text-sm block">
              Draw Your Signature Below
            </label>
            <div className="h-40 rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 flex flex-col items-center justify-center cursor-crosshair">
              <EditOutlined className="text-2xl text-slate-400 mb-2" />
              <span className="text-xs text-slate-500">Click and drag inside this box to draw your signature</span>
            </div>
          </div>
        )}

        {/* Binding Signature Confirmation */}
        <Form.Item
          name="confirmSignatureBinding"
          valuePropName="checked"
          rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Binding signature confirmation is required."))) }]}
          className="mb-0 pt-2"
        >
          <Checkbox className="text-xs font-bold text-slate-900 dark:text-zinc-100">
            I confirm under Electronic Transactions Act 1999 that this electronic signature represents my legally binding execution of this client engagement package.
          </Checkbox>
        </Form.Item>
      </div>

      {/* Submission Status Notice */}
      <Alert
        type="warning"
        showIcon
        icon={<LockOutlined />}
        message="Engagement Status After Submission: Pending Review"
        description="Upon clicking 'Submit Engagement Application', your application will be securely sent to Financially Up. Your engagement remains in 'Pending Review' status until reviewed and formally accepted by our accounting staff."
        className="rounded-2xl p-4 border-amber-200 bg-amber-50 dark:bg-amber-950/40 text-slate-800 dark:text-zinc-200"
      />
    </div>
  );
}
