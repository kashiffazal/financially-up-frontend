"use client";

import React, { useState } from "react";
import { Modal, Button, Tag } from "antd";
import { InfoCircleOutlined, SafetyCertificateOutlined, PrinterOutlined, FileProtectOutlined } from "@ant-design/icons";

/**
 * Privacy Collection Notice Content per Field Category
 */
export const PRIVACY_COLLECTION_CATEGORIES = {
  tfn: {
    title: "Tax File Number (TFN) Collection Notice",
    icon: "IdcardOutlined",
    why: "Why do we collect your TFN?",
    summary: "Your TFN is collected under the Taxation Administration Act 1953 and Tax Agent Services Act 2009 for the sole purpose of verifying your identity with the Australian Taxation Office (ATO), linking your profile on the ATO Online Portal, and preparing/lodging your tax returns.",
    details: [
      "Providing your TFN is voluntary under law. However, if you choose not to provide it, we will be unable to access your ATO portal pre-fill records or electronically lodge your tax return.",
      "TFN security is strictly protected under the Privacy (Tax File Number) Rule 2015 and TASA 2009 Code of Professional Conduct.",
      "TFNs are stored in encrypted format with restricted role-based access control and are never disclosed to third parties except the ATO.",
    ],
  },
  bank: {
    title: "Bank Account Details Collection Notice",
    icon: "BankOutlined",
    why: "Why do we collect your bank details?",
    summary: "Your Australian bank account BSB and account number are collected to enable direct deposit of your ATO income tax refunds and authorized fee processing.",
    details: [
      "Bank details are transmitted to the ATO as part of your electronic tax return lodgement so the ATO can deposit refunds directly into your account.",
      "Bank information is encrypted and access-restricted to authorized processing personnel.",
      "We perform account ownership verification to prevent fraudulent misdirection of client funds.",
    ],
  },
  id: {
    title: "Identity Documents Collection Notice",
    icon: "UploadOutlined",
    why: "Why do we collect Government Identity Documents?",
    summary: "Primary and supporting government identity documents (Passport, Driver's License, Medicare Card) are collected under Tax Agent Services Act 2009 (TASA 2009) identity verification guidelines and Anti-Money Laundering laws.",
    details: [
      "Registered Tax Agents are legally required to verify client identity before establishing a tax representation relationship or lodging documents with the ATO.",
      "Raw ID document images are stored in secure, encrypted cloud storage and access-restricted.",
      "Document copies are retained only for the legally prescribed verification audit period and subsequently destroyed or access-restricted.",
    ],
  },
  visa: {
    title: "Visa & Residency Information Collection Notice",
    icon: "GlobalOutlined",
    why: "Why do we collect Visa & Residency details?",
    summary: "Visa subclass numbers, expiry dates, and first arrival dates are collected to evaluate your Australian tax residency status under the Income Tax Assessment Act 1936.",
    details: [
      "Your tax residency status determines whether you are taxed at Australian resident rates, foreign resident rates, or working holiday maker rates, as well as your Medicare levy exemption eligibility.",
      "Visa evidence is used solely to verify tax residency claims and entitlement to specific tax offsets or exemptions.",
    ],
  },
  biometric: {
    title: "Biometric Verification Collection Notice",
    icon: "CameraOutlined",
    why: "Why do we collect Biometric Facial Images?",
    summary: "If you choose Electronic Verification, live selfie photographs and facial matching templates are collected under the Privacy Act 1988 sensitive information rules.",
    details: [
      "Biometric image data is processed via automated Document Verification Service (DVS) facial matching to compare your selfie against your official government photo ID.",
      "Biometric processing occurs only with your explicit, separate consent. A non-biometric identity alternative (such as manual photo ID upload or in-office verification) is always available.",
      "Biometric templates are deleted or access-restricted immediately following verification completion.",
    ],
  },
  aml: {
    title: "AML/CTF & Financial Profile Collection Notice",
    icon: "SafetyCertificateOutlined",
    why: "Why do we collect AML/CTF & Financial Structure Info?",
    summary: "Information regarding foreign income, business structures, entity involvement, and source of funds is collected under the Anti-Money Laundering and Counter-Terrorism Financing Act (AML/CTF Act) and sanctions screening regulations.",
    details: [
      "Financially Up conducts risk-based customer due diligence and sanctions screening against the Australian Consolidated List to ensure legal compliance.",
      "AML/CTF information is kept strictly confidential and accessed only for regulatory compliance and risk assessment.",
    ],
  },
};

export const FULL_PRIVACY_COLLECTION_NOTICE_TEXT = {
  title: "Financially Up Privacy Collection Notice",
  version: "2.1",
  effectiveDate: "24 July 2026",
  documentType: "PRIVACY_COLLECTION_NOTICE",
  overview: "This Privacy Collection Notice explains how Financially Up Pty Ltd (ABN 84 659 717 263, Registered Tax Agent #25800000) collects, holds, uses, and discloses your personal information at or before the time of collection in accordance with Australian Privacy Principle 5 (APP 5), the Privacy (Tax File Number) Rule 2015, the Tax Agent Services Act 2009 (TASA 2009), and Anti-Money Laundering laws.",
  sections: [
    { title: "1. Who is collecting your information?", text: "Financially Up Pty Ltd ABN 84 659 717 263, Level 5, 100 Walker St, North Sydney NSW 2060. Contact: privacy@financiallyup.com.au | 1300 328 316." },
    { title: "2. Purposes of collection", text: "We collect personal information primarily to assess and accept your engagement, verify your identity and authority, prepare and lodge tax returns, Activity Statements, and registrations with the ATO/ABR, communicate regarding your tax affairs, and fulfill AML/CTF and professional obligations." },
    { title: "3. Consequences of not providing information", text: "If you do not provide requested information (such as TFN, ID documents, or income records), we may be unable to verify your identity, access ATO portal pre-fill records, accept your engagement, or electronically lodge your tax return." },
    { title: "4. Usual disclosures", text: "We disclose information to the Australian Taxation Office (ATO), Australian Business Register (ABR), Tax Practitioners Board (TPB), AUSTRAC (where required by law), approved software providers (e.g. Xero/MYOB/QuickBooks), secure cloud hosting, and approved identity verification providers." },
    { title: "5. Overseas access and cloud infrastructure", text: "Client information may be stored or processed using secure cloud infrastructure located in Australia and overseas locations operated by approved technology service providers under strict confidentiality and security safeguards." },
    { title: "6. Access, correction and complaints", text: "Our Privacy Policy contains information about how you can access and correct your personal information or lodge a privacy complaint. View the full Privacy Policy at www.financiallyup.com.au/privacy." },
  ]
};

export default function PrivacyCollectionNoticeTrigger({ category = "tfn", onOpen }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [showFull, setShowFull] = useState(false);

  const catData = PRIVACY_COLLECTION_CATEGORIES[category] || PRIVACY_COLLECTION_CATEGORIES.tfn;

  const handleOpen = () => {
    setModalVisible(true);
    if (onOpen) onOpen();
  };

  return (
    <>
      <span className="inline-flex items-center gap-1.5 ml-2">
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-emerald-700 dark:text-emerald-400 underline cursor-pointer bg-emerald-50/80 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200/80 dark:border-emerald-800 transition-all hover:scale-105"
        >
          <InfoCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
          <span>Why do we collect this?</span>
          <span className="font-extrabold text-[11px]">[ Privacy Collection Notice ]</span>
        </button>
      </span>

      <Modal
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setShowFull(false);
        }}
        width={750}
        style={{ top: 30 }}
        footer={[
          <div key="modal-footer" className="flex items-center justify-between w-full px-2">
            <Button
              icon={<PrinterOutlined />}
              onClick={() => window.print()}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowFull(!showFull)}
                className="rounded-xl font-semibold border-brand-primary text-brand-primary"
              >
                {showFull ? "Show Category Summary" : "View Full Collection Notice"}
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setModalVisible(false);
                  setShowFull(false);
                }}
                className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-5"
              >
                Understood
              </Button>
            </div>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-6 space-y-5 text-slate-900 dark:text-zinc-100 font-sans">
          <div className="border-b border-slate-200 dark:border-zinc-800 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SafetyCertificateOutlined className="text-brand-primary text-xl" />
              <div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-zinc-50 m-0">
                  {showFull ? FULL_PRIVACY_COLLECTION_NOTICE_TEXT.title : catData.title}
                </h2>
                <span className="text-xs text-slate-500">
                  Financially Up Pty Ltd | APP 5 Collection Notice
                </span>
              </div>
            </div>
            <Tag color="green" className="font-bold text-xs px-2.5 py-0.5 rounded-full border-none">
              Version 2.1
            </Tag>
          </div>

          {!showFull ? (
            <div className="space-y-4 text-xs leading-relaxed">
              <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 space-y-1">
                <span className="font-extrabold text-emerald-800 dark:text-emerald-300 block text-xs uppercase tracking-wider">
                  Purpose of Collection
                </span>
                <p className="text-slate-800 dark:text-zinc-200 m-0 font-medium">{catData.summary}</p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-slate-900 dark:text-zinc-100 block text-xs">
                  Legal Framework & Safeguards:
                </span>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600 dark:text-zinc-300 m-0">
                  {catData.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p className="text-slate-700 dark:text-zinc-300 italic m-0">
                {FULL_PRIVACY_COLLECTION_NOTICE_TEXT.overview}
              </p>
              {FULL_PRIVACY_COLLECTION_NOTICE_TEXT.sections.map((sec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-xs m-0 text-brand-primary dark:text-emerald-400">
                    {sec.title}
                  </h4>
                  <p className="text-slate-700 dark:text-zinc-300 m-0">{sec.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
