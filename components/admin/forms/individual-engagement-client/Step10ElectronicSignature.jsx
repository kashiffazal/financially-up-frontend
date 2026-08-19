"use client";

import React, { useState } from "react";
import { Alert, Tag, Form } from "antd";
import { LockOutlined, UploadOutlined } from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";
import SignatureCanvas from "@/components/mutual/SignatureCanvas";

export default function Step10ElectronicSignature({ form }) {
  const [sigMode, setSigMode] = useState("draw");
  const [typedSig, setTypedSig] = useState("");
  const fullName = form.getFieldValue("fullName") || "";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 10 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Electronic Signature
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Sign & Submit Engagement Form
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Sign electronically to finalize your onboarding application for
          internal accountant review.
        </p>
      </div>

      {/* Signer Legal Name Confirmation */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        <AntInput
          name="signerFullName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Confirm Signer Full Legal Name
            </span>
          }
          placeholder="Signer full legal name"
          size="large"
          className="rounded-xl font-semibold"
          reqMsg="Please enter your full legal name for signature."
          containerClassName="!mb-6"
        />

        {/* 3 Signature Options (Draw Signature First) */}
        <AntInput
          type="radio"
          name="signatureType"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Electronic Signature Method
            </span>
          }
          radioOptions={[
            { value: "draw", label: "Draw Signature (Canvas to draw)" },
            { value: "type", label: "Type Signature" },
            { value: "upload", label: "Upload Signature" },
          ]}
          onChange={(val) => setSigMode(val)}
          reqMsg="Please select a signature method."
          containerClassName="!mb-4"
        />

        {/* 1. Draw Signature (Interactive High-DPI Smooth Canvas) */}
        {sigMode === "draw" && (
          <div className="space-y-3">
            <SignatureCanvas
              name="signatureDrawnData"
              label="Draw Your Signature Below"
              reqMsg="Please draw your signature."
              height={186}
              penColor="#059669"
              placeholder="Draw your signature smoothly using finger, stylus, or mouse..."
              storageKey="clientSignature"
            />
          </div>
        )}

        {/* 2. Type Signature */}
        {sigMode === "type" && (
          <div className="space-y-3">
            <AntInput
              name="signatureText"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Type Your Full Name as Signature
                </span>
              }
              placeholder="Type your name here"
              size="large"
              className="rounded-xl"
              onChange={(val) => setTypedSig(val)}
              reqMsg="Type your signature."
            />

            {typedSig && (
              <div className="p-6 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-zinc-950 text-center shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Electronic Signature Preview
                </div>
                <div className="text-3xl font-serif italic text-brand-primary dark:text-emerald-400 font-extrabold tracking-wide py-2">
                  {typedSig}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  Signed electronically via Financially Up Secure Portal | IP
                  Logged
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. Upload Signature */}
        {sigMode === "upload" && (
          <AntFileUpload
            name="signatureUploadedFile"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Upload Signature Image
              </span>
            }
            icon={<UploadOutlined className="text-brand-primary text-xl" />}
            heading="Click or drag signature image to upload"
            para="Supports PNG, JPG, JPEG (Max 1 file)"
            reqMsg="Please upload your signature image."
            maxCount={1}
            containerClassName="mb-0"
          />
        )}

        {/* Linked Document Versions Box */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2 text-xs">
          <span className="font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wider block">
            Documents Linked to Electronic Execution:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-slate-600 dark:text-zinc-400 font-mono text-[11px]">
            <div>• Engagement Schedule (v2.5)</div>
            <div>• Terms & Conditions (v2.1)</div>
            <div>• Privacy Collection Notice (v2.1)</div>
            <div>• Privacy Policy (v2.1)</div>
            <div>• TPB Statement (v2.1)</div>
            <div>• Technology Notice (v2.1)</div>
          </div>
        </div>

        {/* Binding Signature Confirmation */}
        <AntInput
          type="checkbox"
          name="confirmSignatureBinding"
          text="I confirm under Electronic Transactions Act 1999 that this electronic signature represents my legally binding execution of this client engagement package and accepted documents listed above."
          className="text-xs font-bold text-slate-900 dark:text-zinc-100"
          validator={(_, v) =>
            v
              ? Promise.resolve()
              : Promise.reject(
                  new Error("Binding signature confirmation is required."),
                )
          }
          containerClassName="!mb-0 pt-2"
        />
      </div>

      {/* Submission Status Notice */}
      <Alert
        type="warning"
        showIcon
        icon={<LockOutlined />}
        title="Engagement Status After Submission: Pending Review"
        description="Upon clicking 'Submit Engagement Application', your application will be securely sent to Financially Up. Your engagement remains in 'Pending Review' status until reviewed and formally accepted by our accounting staff."
        className="rounded-2xl p-4 border-amber-200 bg-amber-50 dark:bg-amber-950/40 text-slate-800 dark:text-zinc-200"
      />
    </div>
  );
}
