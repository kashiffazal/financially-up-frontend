"use client";

import React from "react";
import { CheckCircleOutlined, UserOutlined } from "@ant-design/icons";
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

/**
 * @param {string|null} savedSignature - Staff signature image saved with a previous
 *   decision; shown as "Signature on file" (with "Want to Edit?") when reopening
 * @param {string} staffName / staffEmail - Logged-in user who signs the decision
 */
export default function Section7DecisionSignature({ savedSignature = null, staffName = "", staffEmail = "" }) {
  return (
    <div className="rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
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

      {/* Signing staff member: always the logged-in user (read-only) */}
      <div>
        <div className="font-bold text-slate-800 dark:text-zinc-200 text-sm mb-1.5">Staff Member Full Legal Name</div>
        <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800/60 px-3.5 py-2.5">
          <UserOutlined className="text-brand-primary dark:text-emerald-400" />
          <span className="font-semibold text-slate-900 dark:text-zinc-100">{staffName}</span>
          {staffEmail && <span className="text-xs text-slate-400 dark:text-zinc-500">({staffEmail})</span>}
          <span className="ml-auto text-[11px] text-slate-400 dark:text-zinc-500">Signed as the logged-in user</span>
        </div>
      </div>

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
          initialImage={savedSignature}
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
