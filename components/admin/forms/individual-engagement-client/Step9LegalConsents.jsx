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
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import {
  TERMS_AND_CONDITIONS_INFO,
  PRIVACY_POLICY_INFO,
} from "./legalDocumentsText";
import { FULL_PRIVACY_COLLECTION_NOTICE_TEXT } from "./PrivacyCollectionNoticeTrigger";

export default function Step9LegalConsents({ form }) {
  const identityMethod = Form.useWatch("identityMethod", form);

  // Modal visibility states for 5 legal documents
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyNoticeModalOpen, setPrivacyNoticeModalOpen] = useState(false);
  const [privacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [tpbModalOpen, setTpbModalOpen] = useState(false);

  // Tracking timestamps and opened status
  const [termsOpened, setTermsOpened] = useState(false);
  const [privacyNoticeOpened, setPrivacyNoticeOpened] = useState(false);
  const [privacyPolicyOpened, setPrivacyPolicyOpened] = useState(false);
  const [tpbOpened, setTpbOpened] = useState(false);

  // Sync timestamps to form values
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
      privacyNoticeDocumentType: FULL_PRIVACY_COLLECTION_NOTICE_TEXT.documentType,
      privacyNoticeVersion: FULL_PRIVACY_COLLECTION_NOTICE_TEXT.version,
      privacyNoticeOpenedAt: form.getFieldValue("privacyNoticeOpenedAt") || nowIso,
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
      tpbDocumentType: "TPB_STATEMENT",
      tpbVersion: "2.1",
      tpbOpenedAt: form.getFieldValue("tpbOpenedAt") || nowIso,
    });
  };

  const handleTermsCheckboxChange = (e) => {
    if (e.target.checked) {
      form.setFieldsValue({
        termsAcceptedAt: new Date().toISOString(),
      });
    }
  };

  const handlePrivacyCheckboxChange = (e) => {
    if (e.target.checked) {
      form.setFieldsValue({
        privacyAcceptedAt: new Date().toISOString(),
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
          Under Tax Agent Services Act 2009 and Privacy Act 1988, please open, review, and accept the required legal documents before signing.
        </p>
      </div>

      {/* Main Top Action Bar: Legal Documents List */}
      <div className="p-6 rounded-3xl bg-slate-50/90 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-3">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
            <FileProtectOutlined className="text-brand-primary text-base" />
            <span>Legal Documents Repository (Open & Read Each Document)</span>
          </h3>
          <Tag color="blue" className="font-semibold text-xs rounded-md">
            5 Statutory Documents
          </Tag>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Button
            type="default"
            icon={<FilePdfOutlined className="text-emerald-600" />}
            onClick={() => setTermsModalOpen(true)}
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
            View TPB Client Information Statement
          </Button>
        </div>
      </div>

      {/* Mandatory Consents Section */}
      <div className="p-6 rounded-3xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 space-y-6">

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
                Effective {TERMS_AND_CONDITIONS_INFO.effectiveDate} | Client-facing TASA 2009 Terms
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
              message={<span className="text-xs font-bold">Action Required: Please click 'Read Terms & Conditions' to inspect the document before consenting.</span>}
              className="rounded-xl py-2 px-3 !m-0"
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
                  new Error("You must agree to the Engagement Schedule and Terms & Conditions to proceed.")
                );
              }
              if (!termsOpened && !form.getFieldValue("termsOpenedAt")) {
                return Promise.reject(
                  new Error("Please click 'Read Terms & Conditions' to inspect the document before consenting.")
                );
              }
              return Promise.resolve();
            }}
            containerClassName="mb-0 pt-1"
          />
        </div>

        {/* ======================================================== */}
        {/* PRIVACY & TPB DOCUMENTS CARDS BLOCK */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-5">
          <h4 className="text-xs font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wider m-0">
            Privacy & TPB Statutory Documents
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Privacy Collection Notice Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100 text-xs flex items-center justify-between">
                  <span>Privacy Collection Notice</span>
                  <Tag color="blue" className="text-[10px] font-bold">v2.1</Tag>
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
                  <Tag color="blue" className="text-[10px] font-bold">v2.1</Tag>
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
                  <Tag color="amber" className="text-[10px] font-bold">TASA 2009</Tag>
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

          {(!privacyNoticeOpened && !privacyPolicyOpened && !tpbOpened) && (
            <Alert
              type="info"
              showIcon
              icon={<InfoCircleOutlined />}
              message={<span className="text-xs font-bold">Action Required: Click 'Read Privacy Policy' or 'Read TPB Statement' to inspect the documents before consenting.</span>}
              className="rounded-xl py-2 px-3 !m-0"
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
                  new Error("Acknowledgement of the Privacy Collection Notice, Privacy Policy and TPB Statement is mandatory.")
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
                  new Error("Please click to open and inspect the Privacy Policy or TPB Statement before consenting.")
                );
              }
              return Promise.resolve();
            }}
            containerClassName="mb-0 pt-2"
          />
        </div>

        {/* ======================================================== */}
        {/* CONSENT 3: ATO AUTHORITY */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs">
          <AntInput
            type="checkbox"
            name="consentAtoAuthority"
            text="CONSENT 3: I authorize Financially Up Pty Ltd (Tax Agent #25800000) to act on my behalf with the ATO within the accepted scope of work."
            className="text-sm font-bold text-slate-900 dark:text-zinc-100"
            validator={(_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(new Error("ATO Authority confirmation is mandatory."))
            }
            containerClassName="mb-0"
          />
        </div>

        {/* ======================================================== */}
        {/* CONSENT 4: CLOUD PROCESSING */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs">
          <AntInput
            type="radio"
            name="consentCloudOverseas"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200 text-sm">
                CONSENT 4: Do you consent to cloud infrastructure & secure processing?
              </span>
            }
            radioOptions={[
              { value: "Yes", label: "Yes, I consent to secure cloud infrastructure" },
              { value: "No", label: "No, domestic onshore processing only" },
            ]}
            reqMsg="Please select your preference for processing infrastructure."
            containerClassName="mb-0"
          />
        </div>

        {/* ======================================================== */}
        {/* CONSENT 5: BIOMETRIC VERIFICATION (CONDITIONAL) */}
        {/* ======================================================== */}
        {identityMethod === "Electronic Verification" && (
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs">
            <AntInput
              type="checkbox"
              name="consentBiometric"
              text="CONSENT 5: I consent to biometric identity verification and facial image matching against government DVS databases."
              className="text-sm font-bold text-slate-900 dark:text-zinc-100"
              validator={(_, v) =>
                v
                  ? Promise.resolve()
                  : Promise.reject(new Error("Biometric consent is mandatory for electronic verification."))
              }
              containerClassName="mb-0"
            />
          </div>
        )}

        {/* ======================================================== */}
        {/* CONSENT 6: AUDIO / VIDEO RECORDING (OPTIONAL) */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs">
          <AntInput
            type="checkbox"
            name="consentRecording"
            text="CONSENT 6 (Optional): I consent to the audio/video recording of consultation interviews for accuracy and audit records."
            className="text-sm font-semibold text-slate-700 dark:text-zinc-300"
            noRequired={true}
            containerClassName="mb-0"
          />
        </div>
      </div>

      {/* Statutory Declarations Box */}
      <div className="p-6 rounded-3xl bg-brand-primary-soft/30 dark:bg-emerald-950/30 border border-brand-primary/20 dark:border-emerald-900/50 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
          <SafetyCertificateOutlined className="text-brand-primary text-base" />
          <span>Statutory Client Declarations</span>
        </h4>
        <ul className="text-xs text-slate-700 dark:text-zinc-300 space-y-2 list-disc pl-5 leading-relaxed m-0">
          <li>I confirm that all information and income records supplied in this form are true, correct, and complete.</li>
          <li>I have disclosed all worldwide income, investment deductions, and tax matters.</li>
          <li>I understand that Financially Up's review does not guarantee taxation audit immunity by the ATO.</li>
          <li>I acknowledge that my engagement remains <strong>Pending Review</strong> until accepted in writing by Financially Up staff.</li>
        </ul>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: TERMS & CONDITIONS FULL DOCUMENT VIEWER */}
      {/* ======================================================== */}
      <Modal
        open={termsModalOpen}
        onCancel={() => setTermsModalOpen(false)}
        width={900}
        style={{ top: 20 }}
        footer={[
          <div key="terms-footer" className="flex items-center justify-between w-full px-2">
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
              <Tag color="green" className="font-extrabold text-xs px-3 py-1 rounded-md">
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
              Client-facing legal agreement governing all taxation and advisory services
            </p>
          </div>

          <div className="space-y-4 text-xs leading-relaxed">
            {TERMS_AND_CONDITIONS_INFO.clauses.map((clause) => (
              <div key={clause.id} className="p-4 rounded-xl bg-slate-50/60 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 space-y-1.5">
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
        style={{ top: 20 }}
        footer={[
          <div key="pn-footer" className="flex items-center justify-between w-full px-2">
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
            <Tag color="blue" className="font-extrabold text-xs px-3 py-1 rounded-md">
              VERSION 2.1
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

          <div className="space-y-4 text-xs leading-relaxed">
            <p className="text-slate-700 dark:text-zinc-300 italic m-0 font-medium">
              {FULL_PRIVACY_COLLECTION_NOTICE_TEXT.overview}
            </p>
            {FULL_PRIVACY_COLLECTION_NOTICE_TEXT.sections.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50/60 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-xs m-0 text-brand-primary dark:text-emerald-400">
                  {sec.title}
                </h4>
                <div className="text-slate-700 dark:text-zinc-300">{sec.text}</div>
              </div>
            ))}
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
        style={{ top: 20 }}
        footer={[
          <div key="pp-footer" className="flex items-center justify-between w-full px-2">
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
              <Tag color="blue" className="font-extrabold text-xs px-3 py-1 rounded-md">
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
              Framework governing personal data collection, TFN rules, security, and disclosures
            </p>
          </div>

          <div className="space-y-4 text-xs leading-relaxed">
            {PRIVACY_POLICY_INFO.sections.map((sec) => (
              <div key={sec.id} className="p-4 rounded-xl bg-slate-50/60 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 space-y-1.5">
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
        style={{ top: 30 }}
        footer={[
          <div key="tpb-footer" className="flex items-center justify-between w-full px-2">
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
            <Tag color="amber" className="font-extrabold text-xs px-3 py-1 rounded-md">
              TASA 2009
            </Tag>
          </div>

          <div className="bg-amber-50/80 dark:bg-amber-950/40 p-5 rounded-2xl border border-amber-200 dark:border-amber-900 space-y-3">
            <h3 className="text-base font-extrabold text-amber-900 dark:text-amber-200 m-0 flex items-center gap-2">
              <SafetyCertificateOutlined className="text-amber-600" />
              <span>TPB Client Information Statement</span>
            </h3>
            <p className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed m-0 font-serif italic">
              "{PRIVACY_POLICY_INFO.tpbStatement}"
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider m-0">
              Tax Agent Registration Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-zinc-300">
              <div><strong>Registered Entity:</strong> Financially Up Pty Ltd</div>
              <div><strong>Tax Agent Number (TAN):</strong> #25800000</div>
              <div><strong>Public Register:</strong> www.tpb.gov.au/public-register</div>
              <div><strong>Complaints Line:</strong> 1300 362 829</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
