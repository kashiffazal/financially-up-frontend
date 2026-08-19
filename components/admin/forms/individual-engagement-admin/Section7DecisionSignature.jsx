"use client";

import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import SignatureCanvas from "@/components/mutual/SignatureCanvas";

const DECISION_OPTIONS = [
  { value: "Accept", label: "Accept - Generate Engagement Acceptance Notice" },
  {
    value: "Conditional Accept",
    label: "Conditional Accept - Accept subject to specific terms",
  },
  {
    value: "Request Information",
    label: "Request Information - Contact client for missing documents",
  },
  {
    value: "Enhanced Monitoring",
    label: "Enhanced Monitoring - Ongoing compliance monitoring",
  },
  {
    value: "Escalate",
    label: "Escalate - Escalate case to Compliance Officer",
  },
  { value: "Decline", label: "Decline - Decline engagement" },
];

export default function Section7DecisionSignature() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <h4 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 text-brand-primary dark:text-emerald-400">
        <CheckCircleOutlined className="text-brand-primary" /> Section 7:
        Available Staff Engagement Decision
      </h4>

      <AntInput
        type="radio"
        name="decision"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Final Engagement Decision *
          </span>
        }
        radioOptions={DECISION_OPTIONS}
        vertical={true}
        reqMsg="Please select an engagement decision."
      />

      <AntInput
        name="staffMemberName"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Staff Member Full Legal Name *
          </span>
        }
        placeholder="Enter staff member full name"
        size="large"
        className="rounded-xl font-semibold"
        reqMsg="Please enter staff member name."
      />

      {/* Staff Signature Canvas */}
      <div className="space-y-2">
        <SignatureCanvas
          name="staffDrawnSignature"
          label="Staff Digital Signature *"
          reqMsg="Please draw staff signature."
          height={150}
          penColor="#008043"
          placeholder="Draw staff signature smoothly using mouse, stylus, or finger..."
          storageKey="adminStaffSignature"
        />
      </div>

      {/* Section 8: Audit Trail Notes */}
      <AntInput
        type="textarea"
        name="reviewNotes"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Section 8: Internal Review Notes & Audit Log Details
          </span>
        }
        placeholder="Record staff member notes, review findings, or specific instructions..."
        rows={3}
        className="rounded-xl"
        noRequired={true}
      />
    </div>
  );
}
