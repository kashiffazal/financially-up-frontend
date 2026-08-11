"use client";

import React, { useState } from "react";
import { Form, Tag, Button, Modal, Alert } from "antd";
import {
  SafetyCertificateOutlined,
  FileProtectOutlined,
  BookOutlined,
  CheckCircleFilled,
  PrinterOutlined,
  InfoCircleOutlined,
  FilePdfOutlined,
  BankOutlined,
  GlobalOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import {
  TERMS_AND_CONDITIONS_INFO,
  PRIVACY_POLICY_INFO,
  EXACT_PRIVACY_COLLECTION_NOTICE_TEXT,
  TECHNOLOGY_AND_OVERSEAS_NOTICE_INFO,
  TPB_STATEMENT_INFO,
  ATO_AUDIT_DECLARATION_INFO,
} from "./legalDocumentsText";

export default function Step9LegalConsents({ form }) {
  const identityMethod = Form.useWatch("identityMethod", form);
  const techBlendedTeam = Form.useWatch("techBlendedTeam", form);

  // Modal visibility states for 6 legal documents
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyNoticeModalOpen, setPrivacyNoticeModalOpen] = useState(false);
  const [privacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [tpbModalOpen, setTpbModalOpen] = useState(false);
  const [techModalOpen, setTechModalOpen] = useState(false);

  // Tracking opened status for audit timestamps
  const [termsOpened, setTermsOpened] = useState(false);
  const [privacyNoticeOpened, setPrivacyNoticeOpened] = useState(false);
  const [privacyPolicyOpened, setPrivacyPolicyOpened] = useState(false);
  const [tpbOpened, setTpbOpened] = useState(false);
  const [techOpened, setTechOpened] = useState(false);

  const handleOpenTermsModal = () => {
    setTermsOpened(true);
    setTermsModalOpen(true);
    const nowIso = new Date().toISOString();
    form.setFieldsValue({
      termsDocumentType: TERMS_AND_CONDITIONS_INFO.documentType,
      termsVersion: TERMS_AND_CONDITIONS_INFO.version,
      termsOpenedAt: form.getFieldValue("termsOpenedAt") || nowIso,
    });
  };

  const handleOpenPrivacyNoticeModal = () => {
    setPrivacyNoticeOpened(true);
    setPrivacyNoticeModalOpen(true);
    const nowIso = new Date().toISOString();
    form.setFieldsValue({
      privacyNoticeDocumentType:
        EXACT_PRIVACY_COLLECTION_NOTICE_TEXT.documentType,
      privacyNoticeVersion: EXACT_PRIVACY_COLLECTION_NOTICE_TEXT.version,
      privacyNoticeOpenedAt:
        form.getFieldValue("privacyNoticeOpenedAt") || nowIso,
    });
  };

  const handleOpenPrivacyPolicyModal = () => {
    setPrivacyPolicyOpened(true);
    setPrivacyPolicyModalOpen(true);
    const nowIso = new Date().toISOString();
    form.setFieldsValue({
      privacyDocumentType: PRIVACY_POLICY_INFO.documentType,
      privacyVersion: PRIVACY_POLICY_INFO.version,
      privacyOpenedAt: form.getFieldValue("privacyOpenedAt") || nowIso,
    });
  };

  const handleOpenTpbModal = () => {
    setTpbOpened(true);
    setTpbModalOpen(true);
    const nowIso = new Date().toISOString();
    form.setFieldsValue({
      tpbDocumentType: TPB_STATEMENT_INFO.documentType,
      tpbVersion: TPB_STATEMENT_INFO.version,
      tpbOpenedAt: form.getFieldValue("tpbOpenedAt") || nowIso,
    });
  };

  const handleOpenTechModal = () => {
    setTechOpened(true);
    setTechModalOpen(true);
    const nowIso = new Date().toISOString();
    form.setFieldsValue({
      techDocumentType: TECHNOLOGY_AND_OVERSEAS_NOTICE_INFO.documentType,
      techVersion: TECHNOLOGY_AND_OVERSEAS_NOTICE_INFO.version,
      techOpenedAt: form.getFieldValue("techOpenedAt") || nowIso,
    });
  };

  const handleTermsCheckboxChange = (e) => {
    if (e.target.checked) {
      form.setFieldsValue({ termsAcceptedAt: new Date().toISOString() });
    }
  };

  const handlePrivacyCheckboxChange = (e) => {
    if (e.target.checked) {
      form.setFieldsValue({ privacyAcceptedAt: new Date().toISOString() });
    }
  };

  const handleAuditCheckboxChange = (e) => {
    if (e.target.checked) {
      form.setFieldsValue({ auditAcceptedAt: new Date().toISOString() });
    }
  };

  const handleTechRadioChange = (e) => {
    const val = e.target.value;
    if (val === "No") {
      form.setFieldsValue({
        overseasAccessBlocked: true,
        feasibilityReviewRequired: true,
      });
    } else {
      form.setFieldsValue({
        overseasAccessBlocked: false,
        feasibilityReviewRequired: false,
      });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 9 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Legal Agreements & Consents
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Legal Documents & Statutory Consents
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Under Tax Agent Services Act 2009 and Privacy Act 1988, please open,
          review, and accept the required legal documents before signing.
        </p>
      </div>

      {/* Main Top Action Bar: Legal Documents List */}
      <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-3">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
            <FileProtectOutlined className="text-brand-primary text-base" />
            <span>Legal Documents Repository (Open & Read Each Document)</span>
          </h3>
          <Tag color="blue" className="font-semibold text-xs rounded-md">
            Statutory Documents
          </Tag>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Button
            type="default"
            icon={<FilePdfOutlined className="text-emerald-600" />}
            onClick={handleOpenTermsModal}
            className="rounded-xl font-semibold border-slate-300 dark:border-zinc-700 hover:border-brand-primary text-xs"
          >
            View Terms & Conditions
          </Button>

          <Button
            type="default"
            icon={<SafetyCertificateOutlined className="text-blue-600" />}
            onClick={handleOpenPrivacyNoticeModal}
            className="rounded-xl font-semibold border-slate-300 dark:border-zinc-700 hover:border-brand-primary text-xs"
          >
            View Privacy Collection Notice
          </Button>

          <Button
            type="default"
            icon={<BookOutlined className="text-indigo-600" />}
            onClick={handleOpenPrivacyPolicyModal}
            className="rounded-xl font-semibold border-slate-300 dark:border-zinc-700 hover:border-brand-primary text-xs"
          >
            View Privacy Policy
          </Button>

          <Button
            type="default"
            icon={<SafetyCertificateOutlined className="text-amber-600" />}
            onClick={handleOpenTpbModal}
            className="rounded-xl font-semibold border-slate-300 dark:border-zinc-700 hover:border-brand-primary text-xs"
          >
            View TPB Statement
          </Button>

          <Button
            type="default"
            icon={<GlobalOutlined className="text-teal-600" />}
            onClick={handleOpenTechModal}
            className="rounded-xl font-semibold border-slate-300 dark:border-zinc-700 hover:border-brand-primary text-xs"
          >
            View Technology Notice
          </Button>
        </div>
      </div>

      {/* Statutory Declarations Box */}
      <div className="p-6 rounded-2xl bg-brand-primary-soft/30 dark:bg-emerald-950/30 border border-brand-primary/20 dark:border-emerald-900/50 space-y-4">
        {/* ======================================================== */}
        {/* DOCUMENT CARD 1: TERMS & CONDITIONS */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-zinc-800 pb-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 dark:text-zinc-100 text-sm">
                  {TERMS_AND_CONDITIONS_INFO.title}
                </span>
                <Tag color="green" className="font-extrabold text-[10px]">
                  Version {TERMS_AND_CONDITIONS_INFO.version}
                </Tag>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                Effective {TERMS_AND_CONDITIONS_INFO.effectiveDate} |
                Client-facing TASA 2009 Terms
              </p>
            </div>

            <Button
              type="primary"
              icon={<BookOutlined />}
              onClick={handleOpenTermsModal}
              className="bg-brand-primary hover:bg-brand-primary-hover font-bold rounded-xl h-10 px-5 shadow-sm shrink-0"
            >
              Read Terms & Conditions
            </Button>
          </div>

          {!termsOpened && (
            <Alert
              type="info"
              showIcon
              icon={<InfoCircleOutlined />}
              title={
                <span className="text-xs font-bold">
                  Action Required: Please click 'Read Terms & Conditions' to
                  inspect the document before consenting.
                </span>
              }
              className="rounded-xl py-2 px-3 !mb-4"
            />
          )}

          {/* CONSENT 1 CHECKBOX (NOT PRE-SELECTED) */}
          <AntInput
            type="checkbox"
            name="consentScheduleTerms"
            text="I have opened, read and agree to the Engagement Schedule and Financially Up Terms and Conditions."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            onChange={handleTermsCheckboxChange}
            validator={(_, v) => {
              if (!v) {
                return Promise.reject(
                  new Error(
                    "You must agree to the Engagement Schedule and Terms & Conditions to proceed.",
                  ),
                );
              }
              if (!termsOpened && !form.getFieldValue("termsOpenedAt")) {
                return Promise.reject(
                  new Error(
                    "Please click 'Read Terms & Conditions' to inspect the document before consenting.",
                  ),
                );
              }
              return Promise.resolve();
            }}
            containerClassName="!mb-0 pt-1"
          />
        </div>

        {/* ======================================================== */}
        {/* TECHNOLOGY & BLENDED TEAM CONTROL (YES / NO CONTROL) */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-zinc-800 pb-3">
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-sm m-0 flex items-center gap-2">
                <GlobalOutlined className="text-brand-primary" />
                <span>
                  Technology, Outsourcing & Blended Team Authorization
                </span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 !mt-1">
                Statutory notice regarding professional software, cloud hosting
                & supervised teams
              </p>
            </div>
            <Button
              type="default"
              icon={<BookOutlined />}
              onClick={handleOpenTechModal}
              className="rounded-xl font-semibold border-slate-300 text-xs shrink-0"
            >
              View Technology Notice
            </Button>
          </div>

          <AntInput
            type="radio"
            name="techBlendedTeam"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs leading-relaxed block">
                I authorise Financially Up to use approved third-party software,
                professional service providers and appropriately authorised and
                supervised onshore and offshore personnel to perform
                administrative, data-processing, bookkeeping and tax preparation
                support activities as described in the Technology Notice.
              </span>
            }
            radioOptions={[
              {
                value: "Yes",
                label:
                  "Yes, I authorise approved third-party software & blended team processing",
              },
              {
                value: "No",
                label:
                  "No, domestic onshore processing only (Triggers internal feasibility review)",
              },
            ]}
            onChange={handleTechRadioChange}
            reqMsg="Please select your technology & blended team authorization preference."
            containerClassName="!mb-0"
          />

          {techBlendedTeam === "No" && (
            <Alert
              type="warning"
              showIcon
              icon={<WarningOutlined />}
              title={
                <span className="text-xs font-bold">
                  Onshore Only Restriction Selected
                </span>
              }
              description={
                <span className="text-xs">
                  You have selected domestic onshore processing only. The system
                  will restrict overseas data access and flag an internal
                  feasibility review for your engagement.
                </span>
              }
              className="rounded-xl py-2 px-3 border-amber-300 bg-amber-50/80 text-amber-900 !mt-4"
            />
          )}
        </div>

        {/* ======================================================== */}
        {/* PRIVACY & TPB DOCUMENTS CARDS BLOCK */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-5">
          <h4 className="text-xs font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
            Privacy & TPB Statutory Documents
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Privacy Collection Notice Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100 text-xs flex items-center justify-between">
                  <span>Privacy Collection Notice</span>
                  <Tag color="blue" className="text-[10px] font-bold">
                    v2.1
                  </Tag>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 mb-0">
                  APP 5 Collection Notice & Data Purposes
                </p>
              </div>
              <Button
                type="default"
                icon={<SafetyCertificateOutlined />}
                onClick={handleOpenPrivacyNoticeModal}
                className="w-full rounded-xl font-semibold border-slate-300 dark:border-zinc-700 text-xs"
              >
                Read Collection Notice
              </Button>
            </div>

            {/* Privacy Policy Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100 text-xs flex items-center justify-between">
                  <span>Privacy Policy</span>
                  <Tag color="blue" className="text-[10px] font-bold">
                    v2.1
                  </Tag>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 mb-0">
                  Effective 24 July 2026 | APP Compliance
                </p>
              </div>
              <Button
                type="primary"
                icon={<BookOutlined />}
                onClick={handleOpenPrivacyPolicyModal}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold text-xs"
              >
                Read Privacy Policy
              </Button>
            </div>

            {/* TPB Client Information Statement Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100 text-xs flex items-center justify-between">
                  <span>TPB Statement</span>
                  <Tag color="amber" className="text-[10px] font-bold">
                    TASA 2009
                  </Tag>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 mb-0">
                  Tax Practitioners Board Client Rights
                </p>
              </div>
              <Button
                type="default"
                icon={<SafetyCertificateOutlined />}
                onClick={handleOpenTpbModal}
                className="w-full rounded-xl font-semibold border-slate-300 dark:border-zinc-700 text-xs"
              >
                Read TPB Statement
              </Button>
            </div>
          </div>

          {!privacyNoticeOpened && !privacyPolicyOpened && !tpbOpened && (
            <Alert
              type="info"
              showIcon
              icon={<InfoCircleOutlined />}
              message={
                <span className="text-xs font-bold">
                  Action Required: Click to open and inspect the Privacy
                  Collection Notice, Privacy Policy, or TPB Statement before
                  consenting.
                </span>
              }
              className="rounded-xl py-2 px-3 !mb-4"
            />
          )}

          {/* COMBINED PRIVACY / TPB CHECKBOX (NOT PRE-SELECTED) */}
          <AntInput
            type="checkbox"
            name="consentPrivacy"
            text="I acknowledge the Privacy Collection Notice, Privacy Policy and TPB Client Information Statement and confirm I had an opportunity to save them."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            onChange={handlePrivacyCheckboxChange}
            validator={(_, v) => {
              if (!v) {
                return Promise.reject(
                  new Error(
                    "Acknowledgement of the Privacy Collection Notice, Privacy Policy and TPB Statement is mandatory.",
                  ),
                );
              }
              if (
                !privacyNoticeOpened &&
                !privacyPolicyOpened &&
                !tpbOpened &&
                !form.getFieldValue("privacyOpenedAt") &&
                !form.getFieldValue("privacyNoticeOpenedAt")
              ) {
                return Promise.reject(
                  new Error(
                    "Please click to open and inspect the Privacy Policy or TPB Statement before consenting.",
                  ),
                );
              }
              return Promise.resolve();
            }}
            containerClassName="!mb-0 pt-2"
          />
        </div>

        {/* ======================================================== */}
        {/* ATO AUDIT & SUBSTANTIATION DECLARATION */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-3">
          <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-sm m-0 flex items-center gap-2 mb-4">
            <SafetyCertificateOutlined className="text-brand-primary" />
            <span>ATO Audit & Substantiation Declaration</span>
          </h4>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed italic mb-2">
            "{ATO_AUDIT_DECLARATION_INFO.fullText}"
          </div>

          <AntInput
            type="checkbox"
            name="consentAtoAuditDeclaration"
            text="I understand that the taxation system generally operates on self-assessment and I accept full responsibility for retaining and producing records to substantiate my claims as set out in the ATO Audit & Substantiation Declaration."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            onChange={handleAuditCheckboxChange}
            validator={(_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "Acceptance of the ATO Audit & Substantiation Declaration is mandatory.",
                    ),
                  )
            }
            containerClassName="!mb-0 pt-1"
          />
        </div>

        {/* ======================================================== */}
        {/* STATUTORY CLIENT DECLARATIONS */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
          <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-sm m-0 flex items-center gap-2 mb-4">
            <FileProtectOutlined className="text-brand-primary" />
            <span>Client Statutory Declarations</span>
          </h4>

          <AntInput
            type="checkbox"
            name="declarationTrueAndCorrect"
            text="I confirm that all information, answers and documents supplied in this form are true, complete and accurate to the best of my knowledge."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "Declaration of truthful information is mandatory.",
                    ),
                  )
            }
            containerClassName="!mb-0"
          />

          <AntInput
            type="checkbox"
            name="declarationWorldwideIncome"
            text="I have disclosed all worldwide income, foreign assets, investments, capital gains, rental properties and relevant tax matters."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "Declaration of worldwide income disclosure is mandatory.",
                    ),
                  )
            }
            containerClassName="!mb-0"
          />

          <AntInput
            type="checkbox"
            name="declarationPendingReview"
            text="I understand that Financially Up does not guarantee taxation audit immunity by the ATO and that my engagement remains Pending Review until accepted in writing by Financially Up."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "Acknowledgment of Pending Review status is mandatory.",
                    ),
                  )
            }
            containerClassName="!mb-0"
          />
        </div>

        {/* ======================================================== */}
        {/* CONDITIONAL BIOMETRIC CONSENT */}
        {/* ======================================================== */}
        {identityMethod === "Biometric Verification" && (
          <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80 shadow-xs space-y-2">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-xs m-0 uppercase tracking-wider mt-4">
              Conditional Biometric Verification Consent
            </h4>
            <AntInput
              type="checkbox"
              name="consentBiometric"
              text="I consent to the described facial matching and biometric verification process against government DVS identity databases and understand the non-biometric alternative."
              className="text-sm font-bold text-slate-900 dark:text-zinc-100"
              validator={(_, v) =>
                v
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Biometric verification consent is mandatory when selecting Biometric identity method.",
                      ),
                    )
              }
              containerClassName="!mb-0"
            />
          </div>
        )}

        {/* ======================================================== */}
        {/* OPTIONAL AUDIO / VIDEO RECORDING CONSENT */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs">
          <AntInput
            type="checkbox"
            name="consentRecording"
            text="Optional Recording Consent: I consent to the audio/video recording of consultation interviews for accuracy, quality and audit records."
            className="text-xs font-semibold text-slate-700 dark:text-zinc-300"
            noRequired={true}
            containerClassName="!mb-0"
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: TERMS & CONDITIONS FULL DOCUMENT VIEWER */}
      {/* ======================================================== */}
      <Modal
        open={termsModalOpen}
        onCancel={() => setTermsModalOpen(false)}
        width={900}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="terms-footer"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setTermsModalOpen(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              I Have Read & Understood These Terms
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-8 space-y-6 text-slate-900 dark:text-zinc-100 font-sans max-h-[70vh] overflow-y-auto pr-3">
          <div className="border-b-2 border-brand-primary pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-primary tracking-tight m-0">
                FINANCIALLY UP PTY LTD
              </h1>
              <p className="text-xs text-slate-500 m-0">
                ABN 84 659 717 263 | Registered Tax Agent #25800000
              </p>
            </div>
            <div className="text-right">
              <Tag
                color="green"
                className="font-extrabold text-xs px-3 py-1 rounded-md"
              >
                VERSION {TERMS_AND_CONDITIONS_INFO.version}
              </Tag>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                Effective: {TERMS_AND_CONDITIONS_INFO.effectiveDate}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wide m-0">
              CLIENT ENGAGEMENT TERMS & CONDITIONS
            </h2>
            <p className="text-xs text-slate-500 m-0 mt-1">
              Client-facing legal agreement governing all taxation and advisory
              services
            </p>
          </div>

          <div className="space-y-4 text-xs leading-relaxed">
            {TERMS_AND_CONDITIONS_INFO.clauses.map((clause) => (
              <div
                key={clause.id}
                className="p-4 rounded-xl bg-slate-50/60 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 space-y-1.5"
              >
                <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-xs m-0 text-brand-primary dark:text-emerald-400">
                  {clause.title}
                </h4>
                <div className="whitespace-pre-line text-slate-700 dark:text-zinc-300">
                  {clause.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* ======================================================== */}
      {/* MODAL 2: PRIVACY COLLECTION NOTICE FULL VIEWER */}
      {/* ======================================================== */}
      <Modal
        open={privacyNoticeModalOpen}
        onCancel={() => setPrivacyNoticeModalOpen(false)}
        width={850}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="pn-footer"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setPrivacyNoticeModalOpen(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              I Have Read Collection Notice
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-8 space-y-6 text-slate-900 dark:text-zinc-100 font-sans max-h-[70vh] overflow-y-auto pr-3">
          <div className="border-b-2 border-brand-primary pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-primary tracking-tight m-0">
                FINANCIALLY UP PTY LTD
              </h1>
              <p className="text-xs text-slate-500 m-0">
                Privacy Collection Notice (APP 5 Compliance)
              </p>
            </div>
            <Tag
              color="blue"
              className="font-extrabold text-xs px-3 py-1 rounded-md"
            >
              VERSION {EXACT_PRIVACY_COLLECTION_NOTICE_TEXT.version}
            </Tag>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wide m-0">
              PRIVACY COLLECTION NOTICE
            </h2>
            <p className="text-xs text-slate-500 m-0 mt-1">
              Notice provided at or before time of personal data collection
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
            {EXACT_PRIVACY_COLLECTION_NOTICE_TEXT.fullText}
          </div>
        </div>
      </Modal>

      {/* ======================================================== */}
      {/* MODAL 3: PRIVACY POLICY FULL VIEWER */}
      {/* ======================================================== */}
      <Modal
        open={privacyPolicyModalOpen}
        onCancel={() => setPrivacyPolicyModalOpen(false)}
        width={900}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="pp-footer"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setPrivacyPolicyModalOpen(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              I Have Read Privacy Policy
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-8 space-y-6 text-slate-900 dark:text-zinc-100 font-sans max-h-[70vh] overflow-y-auto pr-3">
          <div className="border-b-2 border-brand-primary pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-primary tracking-tight m-0">
                FINANCIALLY UP PTY LTD
              </h1>
              <p className="text-xs text-slate-500 m-0">
                Australian Privacy Principles Privacy Policy
              </p>
            </div>
            <div className="text-right">
              <Tag
                color="blue"
                className="font-extrabold text-xs px-3 py-1 rounded-md"
              >
                VERSION {PRIVACY_POLICY_INFO.version}
              </Tag>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                Effective: {PRIVACY_POLICY_INFO.effectiveDate}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wide m-0">
              PRIVACY POLICY
            </h2>
            <p className="text-xs text-slate-500 m-0 mt-1">
              Framework governing personal data collection, TFN rules, security,
              and disclosures
            </p>
          </div>

          <div className="space-y-4 text-xs leading-relaxed">
            {PRIVACY_POLICY_INFO.sections.map((sec) => (
              <div
                key={sec.id}
                className="p-4 rounded-xl bg-slate-50/60 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 space-y-1.5"
              >
                <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-xs m-0 text-brand-primary dark:text-emerald-400">
                  {sec.title}
                </h4>
                <div className="whitespace-pre-line text-slate-700 dark:text-zinc-300">
                  {sec.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* ======================================================== */}
      {/* MODAL 4: TPB CLIENT INFORMATION STATEMENT VIEWER */}
      {/* ======================================================== */}
      <Modal
        open={tpbModalOpen}
        onCancel={() => setTpbModalOpen(false)}
        width={800}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="tpb-footer"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setTpbModalOpen(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              I Have Read TPB Statement
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-8 space-y-6 text-slate-900 dark:text-zinc-100 font-sans">
          <div className="border-b-2 border-brand-primary pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-primary tracking-tight m-0">
                TAX PRACTITIONERS BOARD (TPB)
              </h1>
              <p className="text-xs text-slate-500 m-0">
                Registered Tax Agent Public Register & Rights Statement
              </p>
            </div>
            <Tag
              color="amber"
              className="font-extrabold text-xs px-3 py-1 rounded-md"
            >
              TASA 2009
            </Tag>
          </div>

          <div className="bg-amber-50/80 dark:bg-amber-950/40 p-5 rounded-2xl border border-amber-200 dark:border-amber-900 space-y-3">
            <h3 className="text-base font-extrabold text-amber-900 dark:text-amber-200 m-0 flex items-center gap-2">
              <SafetyCertificateOutlined className="text-amber-600" />
              <span>TPB Client Information Statement</span>
            </h3>
            <p className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed m-0 font-serif italic">
              "{TPB_STATEMENT_INFO.fullText}"
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider m-0">
              Tax Agent Registration Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-zinc-300">
              <div>
                <strong>Registered Entity:</strong> Financially Up Pty Ltd
              </div>
              <div>
                <strong>Tax Agent Number (TAN):</strong> #25800000
              </div>
              <div>
                <strong>Public Register:</strong> www.tpb.gov.au/public-register
              </div>
              <div>
                <strong>Complaints Line:</strong> 1300 362 829
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* ======================================================== */}
      {/* MODAL 5: TECHNOLOGY & OVERSEAS PROCESSING NOTICE VIEWER */}
      {/* ======================================================== */}
      <Modal
        open={techModalOpen}
        onCancel={() => setTechModalOpen(false)}
        width={850}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="tech-footer"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setTechModalOpen(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              I Have Read Technology Notice
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-8 space-y-6 text-slate-900 dark:text-zinc-100 font-sans max-h-[70vh] overflow-y-auto pr-3">
          <div className="border-b-2 border-brand-primary pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-primary tracking-tight m-0">
                FINANCIALLY UP PTY LTD
              </h1>
              <p className="text-xs text-slate-500 m-0">
                Technology, Outsourcing and Overseas Processing Notice
              </p>
            </div>
            <Tag
              color="teal"
              className="font-extrabold text-xs px-3 py-1 rounded-md"
            >
              VERSION {TECHNOLOGY_AND_OVERSEAS_NOTICE_INFO.version}
            </Tag>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wide m-0">
              TECHNOLOGY & BLENDED TEAM NOTICE
            </h2>
            <p className="text-xs text-slate-500 m-0 mt-1">
              Information regarding software infrastructure, cloud hosting and
              supervised personnel
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
            {TECHNOLOGY_AND_OVERSEAS_NOTICE_INFO.fullText}
          </div>
        </div>
      </Modal>
    </div>
  );
}
