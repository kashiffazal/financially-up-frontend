"use client";

import React from "react";
import { Form, Radio, Upload, Button, Input, Checkbox, Alert, Tag } from "antd";
import { UploadOutlined, SafetyCertificateOutlined, IdcardOutlined, CameraOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function Step6DocumentVerification({ form }) {
  const identityMethod = Form.useWatch("identityMethod", form);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 6 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Identity Verification</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Verify Your Identity & Upload Documents
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Tax Agent Regulations & Anti-Money Laundering laws require us to verify client identity before acting.
        </p>
      </div>

      {/* ID-001: Verification Method Selection */}
      <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
        <Form.Item
          name="identityMethod"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Select Preferred Identity Verification Method</span>}
          rules={[{ required: true, message: "Please select an identity verification method." }]}
          className="mb-0"
        >
          <Radio.Group className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: "Upload ID", title: "Upload Photo ID & Documents", desc: "Upload Driver's License or Passport (Quickest)" },
                { value: "Electronic Verification", title: "Electronic Identity (eID) Verification", desc: "Instant online check via DVS database" },
                { value: "Live Video", title: "Live Video Verification Call", desc: "Schedule a brief video call with our team" },
                { value: "In Person", title: "In-Person Verification at Office", desc: "Bring original documents to our office" },
                { value: "No Photo ID", title: "No Photo ID Available", desc: "Alternative secondary identity evidence process" },
              ].map((m) => {
                const isSelected = identityMethod === m.value;
                return (
                  <label
                    key={m.value}
                    className={`p-4 rounded-2xl cursor-pointer block select-none transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-primary-soft/60 dark:bg-emerald-950/60 border-brand-primary dark:border-emerald-500 shadow-md shadow-emerald-600/10 ring-2 ring-brand-primary/20"
                        : "bg-slate-50/70 dark:bg-zinc-950/60 border-slate-200/80 dark:border-zinc-800 hover:border-brand-primary/60 hover:bg-slate-100/70 dark:hover:bg-zinc-800/80"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Radio value={m.value} className="font-bold text-slate-900 dark:text-zinc-100">
                          {m.title}
                        </Radio>
                        <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 pl-6">
                          {m.desc}
                        </div>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </Radio.Group>
        </Form.Item>
      </div>

      {/* Document Uploads (When Upload ID or Electronic selected) */}
      {(identityMethod === "Upload ID" || identityMethod === "Electronic Verification" || !identityMethod) && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <IdcardOutlined className="text-brand-primary" /> Required Photo ID & Supporting Documents
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary ID */}
            <Form.Item
              name="primaryId"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Primary Photo ID (Driver's License / Passport / Proof of Age)</span>}
              rules={[{ required: true, message: "Please upload your primary photo ID." }]}
            >
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined className="text-brand-primary" />} size="large" className="rounded-xl w-full text-left">
                  Upload Primary ID (PDF / JPG / PNG)
                </Button>
              </Upload>
            </Form.Item>

            {/* Supporting ID */}
            <Form.Item
              name="supportingId"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Supporting ID (Medicare Card / Utility Bill / Bank Statement)</span>}
              rules={[{ required: true, message: "Please upload supporting ID." }]}
            >
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined className="text-brand-primary" />} size="large" className="rounded-xl w-full text-left">
                  Upload Supporting ID (PDF / JPG / PNG)
                </Button>
              </Upload>
            </Form.Item>
          </div>
        </div>
      )}

      {/* No Photo ID Path */}
      {identityMethod === "No Photo ID" && (
        <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-4">
          <Form.Item
            name="noPhotoIdReason"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reason for No Photo ID</span>}
            rules={[{ required: true, message: "Please explain why no photo ID is available." }]}
            className="mb-0"
          >
            <TextArea placeholder="Explain why you do not possess an Australian Driver's License or Passport..." rows={3} className="rounded-xl" />
          </Form.Item>
        </div>
      )}
    </div>
  );
}
