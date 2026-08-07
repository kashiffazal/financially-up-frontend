"use client";

import React, { useState, useRef, useEffect } from "react";
import { Form, Tag, Divider, Alert, Button, Card, Tabs, Badge } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  BankOutlined,
  DollarOutlined,
  AuditOutlined,
  EditOutlined,
  ClearOutlined,
  LockOutlined,
  FileTextOutlined,
  WarningOutlined,
  AlertOutlined,
  ShieldOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import SignatureCanvas from "react-signature-canvas";
import { AntInput, AntFileUpload } from "@/services/antdFields";

// High-DPI Canvas for Staff / Tax Agent Signature
function AdminSignatureCanvas({ value, onChange }) {
  const sigCanvasRef = useRef(null);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (value && sigCanvasRef.current && sigCanvasRef.current.isEmpty()) {
      try {
        sigCanvasRef.current.fromDataURL(value);
        setHasDrawn(true);
      } catch (e) {
        console.error("Error loading signature:", e);
      }
    }
  }, [value]);

  const handleEnd = () => {
    if (sigCanvasRef.current && !sigCanvasRef.current.isEmpty()) {
      setHasDrawn(true);
      if (onChange) {
        onChange(sigCanvasRef.current.getCanvas().toDataURL("image/png"));
      }
    }
  };

  const handleClear = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
      setHasDrawn(false);
      if (onChange) onChange(null);
    }
  };

  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden shadow-inner"
        style={{ touchAction: "none" }}
      >
        <SignatureCanvas
          ref={sigCanvasRef}
          penColor="#059669"
          minWidth={1.8}
          maxWidth={4.2}
          velocityFilterWeight={0.7}
          onBegin={() => setHasDrawn(true)}
          onEnd={handleEnd}
          canvasProps={{
            className: "w-full h-36 cursor-crosshair block",
            style: { touchAction: "none", width: "100%", height: "144px" },
          }}
        />
        {!hasDrawn && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-slate-400 select-none">
            <EditOutlined className="text-xl mb-1 text-slate-400" />
            <span className="text-xs text-slate-500 font-semibold px-4 text-center">
              Draw staff signature smoothly using mouse or stylus
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
          {hasDrawn ? "✓ Staff signature captured" : "Draw inside box above"}
        </span>
        {hasDrawn && (
          <Button
            type="text"
            size="small"
            icon={<ClearOutlined />}
            onClick={handleClear}
            className="text-xs text-red-500 hover:text-red-600 font-bold"
          >
            Clear Signature
          </Button>
        )}
      </div>
    </div>
  );
}

// User Roles per Specification
const USER_ROLE_OPTIONS = [
  { value: "Accountant", label: "Accountant (Review & Decision)" },
  { value: "Compliance Officer", label: "Compliance Officer (AML/CTF & Sanctions Review)" },
  { value: "Administrator", label: "System Administrator" },
];

// Risk Assessment Levels per Section 4
const RISK_LEVEL_OPTIONS = [
  { value: "Low", label: "Low Risk — Verified identity & standard tax return (Normal review)" },
  { value: "Medium", label: "Medium Risk — Foreign income, crypto, or overdue lodgements (Senior review)" },
  { value: "High", label: "High Risk — Identity concerns or major inconsistencies (Enhanced review)" },
  { value: "Unacceptable", label: "Unacceptable Risk — False identity or fraudulent documents (Decline)" },
];

// Available Decisions per Section 7
const DECISION_OPTIONS = [
  { value: "Accept", label: "Accept — Generate Engagement Acceptance Notice" },
  { value: "Conditional Accept", label: "Conditional Accept — Accept subject to specific terms" },
  { value: "Request Information", label: "Request Information — Contact client for missing documents" },
  { value: "Enhanced Monitoring", label: "Enhanced Monitoring — Ongoing compliance monitoring" },
  { value: "Escalate", label: "Escalate — Escalate case to Compliance Officer" },
  { value: "Decline", label: "Decline — Decline engagement" },
];

// ADM Checklist Options per Section 3
const ADM_CHECKLIST_ITEMS = [
  { value: "ADM-001", label: "ADM-001: Mandatory fields complete" },
  { value: "ADM-002", label: "ADM-002: Identity verified" },
  { value: "ADM-003", label: "ADM-003: Representative authority verified" },
  { value: "ADM-004", label: "ADM-004: Engagement Schedule complete" },
  { value: "ADM-005", label: "ADM-005: Conflict check completed" },
  { value: "ADM-006", label: "ADM-006: Previous adviser reviewed" },
  { value: "ADM-007", label: "ADM-007: Risk assessment completed" },
  { value: "ADM-008", label: "ADM-008: TPB disclosure current" },
  { value: "ADM-009", label: "ADM-009: AML/CTF review (if applicable)" },
  { value: "ADM-010", label: "ADM-010: Sanctions review (if applicable)" },
];

export default function IndividualEngagementAdminForm({ record, onFinish, onCancel, form: externalForm }) {
  const [internalForm] = Form.useForm();
  const form = externalForm || internalForm;
  const [sigMode, setSigMode] = useState("draw");
  const [typedSig, setTypedSig] = useState("");

  const clientName = `${record?.FirstName || ""} ${record?.LastName || ""}`.trim() || record?.fullName || "Individual Client";

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        userRole: "Accountant",
        admChecklist: ["ADM-001", "ADM-002", "ADM-004", "ADM-007", "ADM-008"],
        riskLevel: record?.riskLevel || "Low",
        amlDesignatedServiceInvolved: "No",
        amlBeneficialOwnershipVerified: "Yes",
        amlSourceOfFundsRecorded: "N/A",
        amlEscalationRequired: "No",
        sanctionsOverseasActivityCheck: "Pass",
        sanctionsHighRiskJurisdictionCheck: "Pass",
        sanctionsNameMatchCheck: "Clear - No Match",
        decision: record?.status === "Approved" ? "Accept" : "Accept",
        staffMemberName: "Financially Up Tax Agent",
        reviewNotes: record?.approvalNotes || "",
      });
    }
  }, [record, form]);

  const handleSubmit = (values) => {
    if (onFinish) {
      onFinish(values);
    }
  };

  return (
    <div className="space-y-6 text-slate-900 dark:text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
              Part 12 Admin Portal Specification
            </Tag>
            <span className="text-xs text-slate-300">Ref: ENG-{record?.id || "NEW"}</span>
          </div>
          <h3 className="text-xl font-black text-white mt-1">
            Internal Review & Decision: {clientName}
          </h3>
        </div>
        <Badge status="processing" text={<span className="text-emerald-400 text-xs font-bold font-mono">PENDING REVIEW</span>} />
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-6">
        <Tabs
          defaultActiveKey="review"
          items={[
            {
              key: "review",
              label: (
                <span className="font-bold flex items-center gap-1.5">
                  <AuditOutlined className="text-brand-primary" /> Part 12 Internal Review & Decision
                </span>
              ),
              children: (
                <div className="space-y-6 pt-2">
                  {/* User Role Selection */}
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
                    <AntInput
                      type="select"
                      name="userRole"
                      label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reviewing Staff User Role</span>}
                      options={USER_ROLE_OPTIONS}
                      size="large"
                      className="rounded-xl"
                      reqMsg="Please select your user role."
                    />
                  </div>

                  {/* Section 3: Internal Review Checklist (ADM-001 to ADM-010) */}
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                      <FileProtectOutlined className="text-brand-primary" /> Section 3: Internal Review Checklist (ADM-001 to ADM-010)
                    </h4>

                    <AntInput
                      type="checkbox"
                      name="admChecklist"
                      label={<span className="font-bold text-slate-800 dark:text-zinc-200">Confirm Mandatory Compliance & Operational Verification Checks</span>}
                      group={ADM_CHECKLIST_ITEMS}
                      gridClassName="grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full"
                      noRequired={true}
                    />
                  </div>

                  {/* Section 4: Risk Assessment */}
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                      <WarningOutlined className="text-amber-500" /> Section 4: Engagement Risk Assessment Level
                    </h4>

                    <AntInput
                      type="radio"
                      name="riskLevel"
                      label={<span className="font-bold text-slate-800 dark:text-zinc-200">Risk Assessment Classification</span>}
                      radioOptions={RISK_LEVEL_OPTIONS}
                      vertical={true}
                      reqMsg="Please select risk level."
                    />

                    <AntInput
                      type="textarea"
                      name="riskNotes"
                      label={<span className="font-bold text-slate-800 dark:text-zinc-200">Risk Evaluation Notes / Rationale</span>}
                      placeholder="Enter details regarding foreign income, crypto, or identity verification observations..."
                      rows={2}
                      className="rounded-xl"
                      noRequired={true}
                    />
                  </div>

                  {/* Section 5: AML / CTF Review */}
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                      <ShieldOutlined className="text-brand-primary" /> Section 5: Anti-Money Laundering (AML / CTF) Review
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AntInput
                        type="radio"
                        name="amlDesignatedServiceInvolved"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Is a Designated Service Involved?</span>}
                        radioOptions={[
                          { value: "Yes", label: "Yes" },
                          { value: "No", label: "No" },
                        ]}
                        reqMsg="Select option."
                      />

                      <AntInput
                        type="radio"
                        name="amlBeneficialOwnershipVerified"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Beneficial Ownership Verified?</span>}
                        radioOptions={[
                          { value: "Yes", label: "Verified" },
                          { value: "No", label: "Unverified" },
                          { value: "N/A", label: "N/A" },
                        ]}
                        reqMsg="Select option."
                      />

                      <AntInput
                        type="radio"
                        name="amlSourceOfFundsRecorded"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Source of Funds / Wealth Recorded?</span>}
                        radioOptions={[
                          { value: "Yes", label: "Recorded" },
                          { value: "No", label: "Not Recorded" },
                          { value: "N/A", label: "N/A" },
                        ]}
                        reqMsg="Select option."
                      />

                      <AntInput
                        type="radio"
                        name="amlEscalationRequired"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Escalate to Compliance Officer?</span>}
                        radioOptions={[
                          { value: "Yes", label: "Yes, Escalate" },
                          { value: "No", label: "No" },
                        ]}
                        reqMsg="Select option."
                      />
                    </div>
                  </div>

                  {/* Section 6: Sanctions Review */}
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                      <GlobalOutlined className="text-brand-primary" /> Section 6: Sanctions Screening Review
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <AntInput
                        type="radio"
                        name="sanctionsOverseasActivityCheck"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Overseas Activity Check</span>}
                        radioOptions={[
                          { value: "Pass", label: "Pass" },
                          { value: "Flagged", label: "Flagged" },
                        ]}
                        reqMsg="Select status."
                      />

                      <AntInput
                        type="radio"
                        name="sanctionsHighRiskJurisdictionCheck"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">High-Risk Jurisdiction Check</span>}
                        radioOptions={[
                          { value: "Pass", label: "Pass" },
                          { value: "Flagged", label: "Flagged" },
                        ]}
                        reqMsg="Select status."
                      />

                      <AntInput
                        type="radio"
                        name="sanctionsNameMatchCheck"
                        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Sanctions List Name Match</span>}
                        radioOptions={[
                          { value: "Clear - No Match", label: "Clear - No Match" },
                          { value: "Potential Match - Escalate", label: "Potential Match" },
                        ]}
                        reqMsg="Select status."
                      />
                    </div>
                  </div>

                  {/* Section 7: Available Decisions */}
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
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
                          <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-zinc-950 text-center">
                            <div className="text-2xl font-serif italic text-brand-primary dark:text-emerald-400 font-extrabold py-1">
                              {typedSig}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
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

                  {/* Form Footer Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-zinc-800">
                    <Button onClick={onCancel} className="rounded-xl font-bold px-5">
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<CheckCircleOutlined />}
                      className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 shadow-md shadow-emerald-600/20"
                    >
                      Save & Execute Decision
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              key: "clientDetails",
              label: (
                <span className="font-bold flex items-center gap-1.5">
                  <FileTextOutlined /> Full Submitted Client Data (Read-Only)
                </span>
              ),
              children: (
                <div className="space-y-4 pt-2">
                  <Alert
                    type="info"
                    showIcon
                    title="Full Client Submission Snapshot"
                    description="This is the raw data submitted by the client during Phase 1."
                    className="rounded-xl"
                  />
                  <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto max-h-96">
                    {JSON.stringify(record, null, 2)}
                  </pre>
                </div>
              ),
            },
          ]}
        />
      </Form>
    </div>
  );
}
