"use client";

import React, { useState } from "react";
import { Form } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";
import AdminSignatureCanvas from "./AdminSignatureCanvas";

const DECISION_OPTIONS = [
  { value: "Accept", label: "Accept — Generate Engagement Acceptance Notice" },
  { value: "Conditional Accept", label: "Conditional Accept — Accept subject to specific terms" },
  { value: "Request Information", label: "Request Information — Contact client for missing documents" },
  { value: "Enhanced Monitoring", label: "Enhanced Monitoring — Ongoing compliance monitoring" },
  { value: "Escalate", label: "Escalate — Escalate case to Compliance Officer" },
  { value: "Decline", label: "Decline — Decline engagement" },
];

export default function Section7DecisionSignature() {
  const [sigMode, setSigMode] = useState("draw");
  const [typedSig, setTypedSig] = useState("");

  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <h4 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 text-brand-primary dark:text-emerald-400">
        <CheckCircleOutlined className="text-brand-primary" /> Section 7: Available Staff Engagement Decision
      </h4>

      <AntInput
        type="radio"
        name="decision"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Final Engagement Decision</span>}
        radioOptions={DECISION_OPTIONS}
        vertical={true}
        reqMsg="Please select an engagement decision."
      />

      <AntInput
        name="staffMemberName"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Staff Member Full Legal Name</span>}
        placeholder="Enter staff member full name"
        size="large"
        className="rounded-xl font-semibold"
        reqMsg="Please enter staff member name."
      />

      {/* Staff Signature Mode Choice */}
      <AntInput
        type="radio"
        name="staffSignatureType"
        value="draw"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Staff Signature Method</span>}
        radioOptions={[
          { value: "draw", label: "Draw Signature (Canvas)" },
          { value: "type", label: "Type Digital Signature" },
          { value: "upload", label: "Upload Stamp / Signature File" },
        ]}
        onChange={(val) => setSigMode(val)}
        noRequired={true}
      />

      {/* 1. Draw Signature */}
      {sigMode === "draw" && (
        <div className="space-y-2">
          <label className="font-bold text-slate-800 dark:text-zinc-200 text-sm block">
            Staff Signature Canvas
          </label>
          <Form.Item
            name="staffDrawnSignature"
            rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error("Please draw staff signature."))) }]}
            className="mb-0"
          >
            <AdminSignatureCanvas />
          </Form.Item>
        </div>
      )}

      {/* 2. Type Signature */}
      {sigMode === "type" && (
        <div className="space-y-2">
          <AntInput
            name="staffTypedSignature"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Type Staff Signature Name</span>}
            placeholder="Type staff signature name"
            size="large"
            className="rounded-xl"
            onChange={(val) => setTypedSig(val)}
            reqMsg="Type signature."
          />

          {typedSig && (
            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-brand-primary-soft dark:bg-zinc-950 text-center">
              <div className="text-2xl font-serif italic text-brand-primary dark:text-emerald-400 font-extrabold py-1">
                {typedSig}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                Countersigned by Staff Member | IP & Audit Logged
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Upload Signature */}
      {sigMode === "upload" && (
        <AntFileUpload
          name="staffUploadedSignature"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Staff Signature Stamp</span>}
          heading="Upload Staff Signature File"
          para="Supports PNG, JPG, JPEG"
          reqMsg="Upload signature file."
          maxCount={1}
        />
      )}

      {/* Section 8: Audit Trail Notes */}
      <AntInput
        type="textarea"
        name="reviewNotes"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Section 8: Internal Review Notes & Audit Log Details</span>}
        placeholder="Record staff member notes, review findings, or specific instructions..."
        rows={3}
        className="rounded-xl"
        noRequired={true}
      />
    </div>
  );
}
