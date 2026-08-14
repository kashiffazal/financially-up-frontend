"use client";

import React, { useEffect } from "react";
import { Form, Button, Card, Badge } from "antd";
import { AuditOutlined, CheckCircleOutlined } from "@ant-design/icons";

import Section1UserRole from "./Section1UserRole";
import Section3InternalChecklist from "./Section3InternalChecklist";
import Section4RiskAssessment from "./Section4RiskAssessment";
import Section5AmlReview from "./Section5AmlReview";
import Section6SanctionsReview from "./Section6SanctionsReview";
import Section7DecisionSignature from "./Section7DecisionSignature";

export default function IndividualEngagementAdminForm({ record, onFinish, onCancel, form: externalForm, isSubmitting }) {
  const [internalForm] = Form.useForm();
  const form = externalForm || internalForm;

  const clientName = `${record?.FirstName || ""} ${record?.LastName || ""}`.trim() || record?.fullName || record?.client?.fullName || "Individual Client";

  useEffect(() => {
    if (record) {
      const statusToDecision = {
        "Accepted": "Accept",
        "Conditional Accept": "Conditional Accept",
        "Request Information": "Request Information",
        "Enhanced Monitoring": "Enhanced Monitoring",
        "Escalate": "Escalate",
        "Declined": "Decline",
      };

      const adminReview = record.adminReview || null;
      const taxAgentSig = Array.isArray(record?.signatures)
        ? record?.signatures.find((s) => s.signerType === "TaxAgent")
        : null;

      if (adminReview) {
        // Populate from saved DB admin review record
        let checklist = adminReview.checklistItems;
        if (typeof checklist === "string") {
          try { checklist = JSON.parse(checklist); } catch (e) { checklist = []; }
        }

        form.setFieldsValue({
          userRole: adminReview.userRole || undefined,
          admChecklist: Array.isArray(checklist) ? checklist : [],
          riskLevel: adminReview.riskLevel || undefined,
          riskRationale: adminReview.riskRationale || "",
          decision: adminReview.decision || undefined,
          amlDesignatedServiceInvolved: adminReview.amlDesignatedServiceInvolved || undefined,
          amlBeneficialOwnershipVerified: adminReview.amlBeneficialOwnershipVerified || undefined,
          amlSourceOfFundsRecorded: adminReview.amlSourceOfFundsRecorded || undefined,
          amlEscalationRequired: adminReview.amlEscalationRequired || undefined,
          sanctionsOverseasActivityCheck: adminReview.sanctionsOverseasActivityCheck || undefined,
          sanctionsHighRiskJurisdictionCheck: adminReview.sanctionsHighRiskJurisdictionCheck || undefined,
          sanctionsNameMatchCheck: adminReview.sanctionsNameMatchCheck || undefined,
          staffMemberName: adminReview.reviewerName || taxAgentSig?.signerFullName || "",
          staffSignatureType: adminReview.signatureMethod || "draw",
          staffDrawnSignature: adminReview.signatureDrawnData || null,
          staffTypedSignature: adminReview.signatureTypedName || "",
          reviewNotes: adminReview.reviewNotes || "",
        });
      } else {
        // Brand-new unreviewed request: 100% clean initial state with no pre-selections
        form.resetFields();
        form.setFieldsValue({
          userRole: undefined,
          admChecklist: [],
          riskLevel: undefined,
          riskRationale: "",
          decision: undefined,
          amlDesignatedServiceInvolved: undefined,
          amlBeneficialOwnershipVerified: undefined,
          amlSourceOfFundsRecorded: undefined,
          amlEscalationRequired: undefined,
          sanctionsOverseasActivityCheck: undefined,
          sanctionsHighRiskJurisdictionCheck: undefined,
          sanctionsNameMatchCheck: undefined,
          staffMemberName: "",
          staffSignatureType: "draw",
          staffDrawnSignature: null,
          staffTypedSignature: "",
          reviewNotes: "",
        });
      }
    }
  }, [record, form]);

  const handleSubmit = (values) => {
    if (onFinish) {
      onFinish(values);
    }
  };

  return (
    <Card className="shadow-lg border border-slate-200/80 dark:border-zinc-800 rounded-3xl overflow-hidden dark:bg-zinc-950 p-2 sm:p-4">
      {/* 10-Step Matching Header Progress Box */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 space-y-3 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-primary text-white font-black text-base flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
              <AuditOutlined />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                Tax Agent Phase 2 Compliance Portal
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
                Internal Review & Decision: {clientName}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-brand-primary-soft text-brand-primary border border-brand-primary/20 dark:bg-emerald-950/80 dark:text-emerald-400 font-extrabold text-xs px-3 py-1 rounded-full font-mono">
              REF: {record?.referenceNumber || `ENG-${record?.id || "NEW"}`}
            </span>
            <Badge status="processing" text={<span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold font-mono">PENDING REVIEW</span>} />
          </div>
        </div>
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-6">
        <div className="space-y-6 pt-2">
          {/* Section 1: User Role Selection */}
          <Section1UserRole />

          {/* Section 3: Internal Review Checklist */}
          <Section3InternalChecklist />

          {/* Section 4: Risk Assessment */}
          <Section4RiskAssessment />

          {/* Section 5: AML / CTF Review */}
          <Section5AmlReview />

          {/* Section 6: Sanctions Review */}
          <Section6SanctionsReview />

          {/* Section 7: Decision, Staff Signature & Audit Notes */}
          <Section7DecisionSignature />

          {/* Form Footer Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200/80 dark:border-zinc-800">
            <Button
              onClick={onCancel}
              disabled={isSubmitting}
              className="h-11 px-6 rounded-2xl font-bold border-slate-300 hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              icon={<CheckCircleOutlined />}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold h-11 px-8 rounded-2xl shadow-md shadow-emerald-600/20 border-none flex items-center gap-2 transition-all"
            >
              {isSubmitting ? "Executing Decision..." : "Save & Execute Decision"}
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
