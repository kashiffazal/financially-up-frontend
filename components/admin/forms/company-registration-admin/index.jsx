"use client";

import React, { useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Badge,
  Descriptions,
  Table,
  Tag,
  Divider,
  Collapse,
  Space,
  Tooltip,
} from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  TeamOutlined,
  GlobalOutlined,
  FileTextOutlined,
  DollarCircleOutlined,
  WarningOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import { antdMsg, GetUserData, API_BASE_URL } from "@/services";
import SignatureCanvas from "@/components/mutual/SignatureCanvas";

const RISK_RATING_OPTIONS = [
  { value: "Low", label: "Low Risk — Standard domestic company, verified Australian directors" },
  { value: "Medium", label: "Medium Risk — Complex shareholding, trust shareholders, or foreign income" },
  { value: "High", label: "High Risk — Non-resident officeholders, nominee structures, or high-risk sectors" },
  { value: "Prohibited", label: "Prohibited — Sanctioned entity, fraudulent identity, or illegal activity" },
];

const DECISION_OPTIONS = [
  { value: "Approved", label: "Approved — Approve application & generate legal pack" },
  { value: "Approved With Conditions", label: "Approved With Conditions — Approve subject to document provision" },
  { value: "Under Review", label: "Under Review — Senior compliance officer assessment in progress" },
  { value: "Pending Documents", label: "Pending Documents — Request missing identity or structure evidence" },
  { value: "On Hold", label: "On Hold — Administrative hold" },
  { value: "Declined", label: "Declined — Decline company registration application" },
];

function getFileUrl(relPath) {
  if (!relPath) return "#";
  if (relPath.startsWith("http://") || relPath.startsWith("https://")) return relPath;
  const cleanPath = relPath.startsWith("/") ? relPath : `/${relPath}`;
  const baseUrl = API_BASE_URL.replace(/\/api\/?$/, "");
  return `${baseUrl}${cleanPath}`;
}

export default function CompanyRegistrationAdminForm({
  record,
  onFinish,
  onCancel,
  form: externalForm,
  isSubmitting,
}) {
  const [internalForm] = Form.useForm();
  const form = externalForm || internalForm;

  const currentUser = GetUserData();
  const reviewerName =
    currentUser?.name ||
    currentUser?.fullName ||
    `${currentUser?.firstName || ""} ${currentUser?.lastName || ""}`.trim() ||
    "Financially Up Reviewer";
  const reviewerEmail = currentUser?.email || "";
  const reviewerRole =
    currentUser?.roles?.[0]?.name || currentUser?.role || "Administrator";

  const companyName =
    record?.companyName1 ||
    (record?.useAcnAsName ? "ACN Proposed Company" : "New Company Application");

  useEffect(() => {
    if (record) {
      const adminReview = record.adminReview || null;

      if (adminReview) {
        form.setFieldsValue({
          reviewerRole: adminReview.reviewerRole || reviewerRole,
          reviewerName: adminReview.reviewerName || reviewerName,
          overallRiskRating: adminReview.overallRiskRating || undefined,
          riskRationale: adminReview.riskRationale || "",
          pepSanctionsScreeningResult: adminReview.pepSanctionsScreeningResult || undefined,
          adverseMediaResult: adminReview.adverseMediaResult || undefined,
          cddVerificationNotes: adminReview.cddVerificationNotes || "",
          sourceOfFundsNotes: adminReview.sourceOfFundsNotes || "",
          reviewStatus: adminReview.reviewStatus || record.status || undefined,
          approvalConditions: adminReview.approvalConditions || "",
          decisionNotes: adminReview.decisionNotes || "",
          signatureDrawnData: adminReview.signatureDrawnData || null,
        });
      } else {
        form.resetFields();
        form.setFieldsValue({
          reviewerRole,
          reviewerName,
          overallRiskRating: undefined,
          riskRationale: "",
          pepSanctionsScreeningResult: undefined,
          adverseMediaResult: undefined,
          cddVerificationNotes: "",
          sourceOfFundsNotes: "",
          reviewStatus: undefined,
          approvalConditions: "",
          decisionNotes: "",
          signatureDrawnData: null,
        });
      }
    }
  }, [record, form, reviewerName, reviewerRole]);

  const handleSubmit = (values) => {
    const payload = {
      ...values,
      reviewerName: values.reviewerName || reviewerName,
      reviewerRole: values.reviewerRole || reviewerRole,
      signatureMethod: "draw",
    };
    if (onFinish) {
      onFinish(payload);
    }
  };

  const handleFinishFailed = (errorInfo) => {
    const firstError = errorInfo?.errorFields?.[0]?.errors?.[0];
    const totalErrors = errorInfo?.errorFields?.length || 0;
    if (firstError) {
      antdMsg.error(
        `Please complete required field: ${firstError} (${totalErrors} field${totalErrors > 1 ? "s" : ""} remaining)`
      );
    } else {
      antdMsg.error("Please complete all required review fields before saving decision.");
    }
  };

  const statusBadgeMap = {
    Approved: { status: "success", text: "APPROVED", className: "text-emerald-600 dark:text-emerald-400" },
    "Approved With Conditions": { status: "warning", text: "APPROVED W/ CONDITIONS", className: "text-amber-600 dark:text-amber-400" },
    "Under Review": { status: "processing", text: "UNDER REVIEW", className: "text-blue-600 dark:text-blue-400" },
    "Pending Documents": { status: "default", text: "PENDING DOCS", className: "text-purple-600 dark:text-purple-400" },
    "On Hold": { status: "warning", text: "ON HOLD", className: "text-amber-700 dark:text-amber-500" },
    Declined: { status: "error", text: "DECLINED", className: "text-rose-600 dark:text-rose-400" },
    "Lodged with ASIC": { status: "success", text: "LODGED W/ ASIC", className: "text-emerald-700 dark:text-emerald-300" },
    Submitted: { status: "processing", text: "SUBMITTED", className: "text-amber-600 dark:text-amber-400" },
    Draft: { status: "default", text: "DRAFT", className: "text-slate-500" },
  };

  const currentStatus = record?.status || "Submitted";
  const badgeConfig = statusBadgeMap[currentStatus] || {
    status: "processing",
    text: currentStatus.toUpperCase(),
    className: "text-slate-600 dark:text-slate-400",
  };

  const officeholders = Array.isArray(record?.officeholders) ? record.officeholders : [];
  const shareholders = Array.isArray(record?.shareholders) ? record.shareholders : [];
  const documents = Array.isArray(record?.documents) ? record.documents : [];

  return (
    <Card className="shadow-lg border border-slate-200/80 dark:border-zinc-800 rounded-3xl overflow-hidden dark:bg-zinc-950 p-2 sm:p-4">
      {/* Header Summary Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 space-y-3 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-primary text-white font-black text-base flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
              <BankOutlined />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                Corporate Compliance Review Portal
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
                Company Registration Review: {companyName}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-brand-primary-soft text-brand-primary border border-brand-primary/20 dark:bg-emerald-950/80 dark:text-emerald-400 font-extrabold text-xs px-3 py-1 rounded-full font-mono">
              REF: {record?.referenceNumber || `CREG-${record?.id || "NEW"}`}
            </span>
            <Badge
              status={badgeConfig.status}
              text={
                <span className={`${badgeConfig.className} text-xs font-extrabold font-mono`}>
                  {badgeConfig.text}
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* Reviewer Session Identity Banner */}
      <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-4 sm:p-5 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center text-base font-bold">
              <UserOutlined />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                Reviewing Compliance Officer / Accountant
              </div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-zinc-100">
                {reviewerName}{" "}
                {reviewerEmail && (
                  <span className="text-xs text-slate-400 font-normal">({reviewerEmail})</span>
                )}
              </div>
            </div>
          </div>
          <Tag
            color="green"
            className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border-0 bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
          >
            <SafetyCertificateOutlined /> {reviewerRole}
          </Tag>
        </div>
      </div>

      {/* Company Application Overview Accordion */}
      <Collapse
        defaultActiveKey={["1", "2"]}
        className="mb-6 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-zinc-800 bg-transparent"
        items={[
          {
            key: "1",
            label: (
              <span className="font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                <BankOutlined className="text-brand-primary" /> Step 1–3: Proposed Company & Address Details
              </span>
            ),
            children: (
              <Descriptions size="small" bordered column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="Primary Name Preference">
                  <span className="font-bold">{record?.companyName1 || "ACN Used as Name"}</span>
                </Descriptions.Item>
                <Descriptions.Item label="Secondary Name (Alt)">
                  {record?.companyName2 || "-"}
                </Descriptions.Item>
                <Descriptions.Item label="Third Name (Alt)">
                  {record?.companyName3 || "-"}
                </Descriptions.Item>
                <Descriptions.Item label="Company Type">
                  {record?.companyType || "Proprietary Limited"}
                </Descriptions.Item>
                <Descriptions.Item label="State of Registration">
                  {record?.stateOfRegistration || "NSW"}
                </Descriptions.Item>
                <Descriptions.Item label="Principal Activity">
                  {record?.principalBusinessActivity || "-"}
                </Descriptions.Item>
                <Descriptions.Item label="Registered Office Address" span={2}>
                  {record?.registeredOfficeAddress || "-"}
                </Descriptions.Item>
                <Descriptions.Item label="Principal Business Address">
                  {record?.principalBusinessAddress || "-"}
                </Descriptions.Item>
                <Descriptions.Item label="Contact Person">
                  {record?.contactName} ({record?.contactRelationship || "Applicant"})
                </Descriptions.Item>
                <Descriptions.Item label="Contact Email">
                  {record?.contactEmail || "-"}
                </Descriptions.Item>
                <Descriptions.Item label="Contact Mobile">
                  {record?.contactMobile || "-"}
                </Descriptions.Item>
              </Descriptions>
            ),
          },
          {
            key: "2",
            label: (
              <span className="font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                <TeamOutlined className="text-brand-primary" /> Step 4–6: Officeholders, Shareholders & Capital Structure
              </span>
            ),
            children: (
              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-500 mb-2">
                    Directors & Secretaries ({officeholders.length})
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {officeholders.map((off, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 text-xs"
                      >
                        <div className="font-bold text-slate-900 dark:text-zinc-100">
                          {off.givenNames} {off.familyName}
                        </div>
                        <div className="text-slate-500">
                          Role: <span className="font-semibold">{off.role}</span> | DOB: {off.dateOfBirth || "-"}
                        </div>
                        <div className="text-slate-500">
                          Address: {off.residentialAddress || "-"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-500 mb-2">
                    Shareholders & Members ({shareholders.length})
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {shareholders.map((sh, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 text-xs"
                      >
                        <div className="font-bold text-slate-900 dark:text-zinc-100">
                          {sh.fullName} ({sh.memberType || "Individual"})
                        </div>
                        <div className="text-slate-500">
                          Shares: <span className="font-semibold">{sh.numberOfShares} {sh.shareClass || "ORD"}</span> ($
                          {sh.amountPaidPerShare} paid)
                        </div>
                        <div className="text-slate-500">
                          Beneficially Held:{" "}
                          <span className="font-semibold">
                            {sh.isBeneficiallyHeld ? "Yes" : `No (For: ${sh.heldForWhom || "Trust/Nominee"})`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "3",
            label: (
              <span className="font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                <FileTextOutlined className="text-brand-primary" /> Step 11: Document Uploads & Supporting Files ({documents.length})
              </span>
            ),
            children: (
              <div className="flex flex-wrap gap-2">
                {documents.length === 0 ? (
                  <span className="text-xs text-slate-400">No documents uploaded.</span>
                ) : (
                  documents.map((doc, idx) => (
                    <Button
                      key={idx}
                      size="small"
                      icon={<LinkOutlined />}
                      onClick={() => window.open(getFileUrl(doc.filePath), "_blank")}
                      className="text-xs font-medium rounded-lg"
                    >
                      {doc.documentType || doc.fileName || `Document ${idx + 1}`}
                    </Button>
                  ))
                )}
              </div>
            ),
          },
        ]}
      />

      {/* Review Decision Form */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        onFinishFailed={handleFinishFailed}
        scrollToFirstError={{ behavior: "smooth", block: "center" }}
        className="space-y-6"
      >
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-5 sm:p-6 space-y-5">
          <h4 className="text-sm font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-2">
            <WarningOutlined /> Overall Compliance & Risk Evaluation
          </h4>

          <AntInput
            type="radio"
            name="overallRiskRating"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Overall Risk Rating *</span>}
            radioOptions={RISK_RATING_OPTIONS}
            vertical={true}
            reqMsg="Please select overall risk rating."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AntInput
              type="radio"
              name="pepSanctionsScreeningResult"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">PEP & Sanctions Screening Result *</span>}
              radioOptions={[
                { value: "Clear", label: "Clear — No Match" },
                { value: "Flagged", label: "Flagged — Potential PEP/Sanctions" },
                { value: "False Positive", label: "False Positive — Identity Cleared" },
              ]}
              reqMsg="Please select screening result."
            />

            <AntInput
              type="radio"
              name="adverseMediaResult"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Adverse Media Screening *</span>}
              radioOptions={[
                { value: "Clear", label: "Clear — No Adverse News" },
                { value: "Flagged", label: "Flagged — Adverse Media Found" },
              ]}
              reqMsg="Please select adverse media screening."
            />
          </div>

          <AntInput
            type="textarea"
            name="riskRationale"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Risk Assessment Rationale & Observations</span>}
            placeholder="Record notes on source of funds, complex ownership, foreign directors, or identity verification..."
            rows={2}
            className="rounded-xl"
            noRequired={true}
          />

          <Divider className="my-4" />

          <h4 className="text-sm font-extrabold text-brand-primary dark:text-emerald-400 flex items-center gap-2">
            <CheckCircleOutlined /> Final Decision & Reviewer Sign-Off
          </h4>

          <AntInput
            type="radio"
            name="reviewStatus"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Review Decision Status *</span>}
            radioOptions={DECISION_OPTIONS}
            vertical={true}
            reqMsg="Please select a review decision."
          />

          <AntInput
            type="textarea"
            name="decisionNotes"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Decision Notes & Internal Audit Log</span>}
            placeholder="Record review notes, decision rationale, or specific instructions for ASIC lodgement..."
            rows={3}
            className="rounded-xl"
            noRequired={true}
          />

          <AntInput
            type="textarea"
            name="approvalConditions"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Approval Conditions (if applicable)</span>}
            placeholder="Specify any conditions for approval (e.g. proof of residential address required before ASIC certificate dispatch)..."
            rows={2}
            className="rounded-xl"
            noRequired={true}
          />

          {/* Reviewer Signature Canvas */}
          <div className="space-y-2 pt-2">
            <SignatureCanvas
              name="signatureDrawnData"
              label="Reviewing Officer Digital Signature *"
              reqMsg="Please draw staff digital signature."
              height={150}
              penColor="#008043"
              placeholder="Draw reviewer signature smoothly using mouse, stylus, or touch..."
              storageKey="companyAdminStaffSignature"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200/80 dark:border-zinc-800">
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
            {isSubmitting ? "Saving Decision..." : "Save & Execute Decision"}
          </Button>
        </div>
      </Form>
    </Card>
  );
}
