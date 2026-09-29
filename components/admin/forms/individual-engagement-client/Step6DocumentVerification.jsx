"use client";

import React from "react";
import { Form, Tag } from "antd";
import { IdcardOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import UploadFile from "@/components/mutual/antd-upload-file-component";
import PrivacyCollectionNoticeTrigger from "./PrivacyCollectionNoticeTrigger";

const IDENTITY_METHOD_OPTIONS = [
  {
    value: "Upload ID",
    title: "Upload Photo ID & Documents",
    desc: "Upload Driver's License or Passport (Quickest)",
  },
  {
    value: "Electronic Verification",
    title: "Electronic Identity (eID) Verification",
    desc: "Instant online check via DVS database",
  },
  {
    value: "Live Video",
    title: "Live Video Verification Call",
    desc: "Schedule a brief video call with our team",
  },
  {
    value: "In Person",
    title: "In-Person Verification at Office",
    desc: "Bring original documents to our office",
  },
  {
    value: "No Photo ID",
    title: "No Photo ID Available",
    desc: "Alternative secondary identity evidence process",
  },
];

/* Primary photo ID types. Every listed document has two sides to capture. */
const PRIMARY_ID_TYPES = [
  { value: "Australian Driver Licence", label: "Australian Driver Licence" },
  { value: "Passport", label: "Passport (Australian or Foreign)" },
  { value: "Proof of Age / Photo Card", label: "Proof of Age / Photo Card" },
  { value: "Foreign Driver Licence", label: "Foreign Driver Licence" },
];

/* Only these supporting documents carry information on the reverse */
const SUPPORTING_TYPES_WITH_BACK = ["Centrelink / Government Card"];

const SUPPORTING_ID_TYPES = [
  { value: "Medicare Card", label: "Medicare Card" },
  { value: "Bank Card / Statement", label: "Bank Card or Statement" },
  { value: "Utility Bill", label: "Utility Bill" },
  { value: "Centrelink / Government Card", label: "Centrelink or Government Card" },
];

/* Passports are captured as photo page + back page; cards as front + back */
const sideLabels = (docType) =>
  String(docType || "").toLowerCase().includes("passport")
    ? { front: "Photo Page", back: "Back / Signature Page" }
    : { front: "Front Side", back: "Back Side" };

export default function Step6DocumentVerification({ form }) {
  const identityMethod = Form.useWatch("identityMethod", form);
  const primaryIdType = Form.useWatch("primaryIdType", form);
  const supportingIdType = Form.useWatch("supportingIdType", form);
  const primarySides = sideLabels(primaryIdType);
  const supportingSides = sideLabels(supportingIdType);
  const supportingHasBack = SUPPORTING_TYPES_WITH_BACK.includes(supportingIdType);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 6 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Identity Verification
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Verify Your Identity & Upload Documents
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Tax Agent Regulations & Anti-Money Laundering laws require us to
          verify client identity before acting.
        </p>
      </div>

      {/* ID-001: Verification Method Selection */}
      <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
        <AntInput
          type="radio"
          name="identityMethod"
          designVariant="card"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Select Preferred Identity Verification Method
            </span>
          }
          radioOptions={IDENTITY_METHOD_OPTIONS}
          reqMsg="Please select an identity verification method."
          gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-3"
          containerClassName="!mb-0"
        />
      </div>

      {/* Photo ID & supporting documents: only for the Upload ID path.
          Electronic (eID) verification is satisfied by the selfie and the DVS
          biometric consent below, so it must not ask for licence/passport scans. */}
      {(identityMethod === "Upload ID" || !identityMethod) && (
        <div className="p-6 rounded-xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
              <IdcardOutlined className="text-brand-primary" /> Required Photo
              ID & Supporting Documents
            </h3>
            <PrivacyCollectionNoticeTrigger category="id" />
          </div>

          {/* Primary Photo ID: document type + both sides (ID-002) */}
          <div className="space-y-4">
            <AntInput
              type="select"
              name="primaryIdType"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Primary Photo ID Document Type *
                </span>
              }
              options={PRIMARY_ID_TYPES}
              placeholder="Select the document you are uploading"
              size="large"
              className="rounded-xl"
              reqMsg="Please select your primary photo ID type."
              containerClassName="!mb-4 max-w-md"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UploadFile
                name="primaryIdFront"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Primary Photo ID &mdash; {primarySides.front} *
                  </span>
                }
                title={`Upload ${primarySides.front}`}
                msg={`${primaryIdType || "Driver licence or passport"} - ${primarySides.front.toLowerCase()}`}
                accept=".pdf,.jpg,.jpeg,.png"
                reqMsg={`Please upload the ${primarySides.front.toLowerCase()} of your primary photo ID.`}
                height={170}
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <UploadFile
                name="primaryIdBack"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Primary Photo ID &mdash; {primarySides.back} *
                  </span>
                }
                title={`Upload ${primarySides.back}`}
                msg={`${primaryIdType || "Driver licence or passport"} - ${primarySides.back.toLowerCase()}`}
                accept=".pdf,.jpg,.jpeg,.png"
                reqMsg={`Please upload the ${primarySides.back.toLowerCase()} of your primary photo ID.`}
                height={170}
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>
          </div>

          {/* Supporting ID: document type + both sides (ID-003) */}
          <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-zinc-800">
            <AntInput
              type="select"
              name="supportingIdType"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Supporting ID Document Type *
                </span>
              }
              options={SUPPORTING_ID_TYPES}
              placeholder="Select the supporting document"
              size="large"
              className="rounded-xl"
              reqMsg="Please select your supporting ID type."
              containerClassName="!mb-4 max-w-md"
            />

            <div
              className={`grid gap-6 ${
                supportingHasBack ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              <UploadFile
                name="supportingIdFront"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Supporting ID &mdash; {supportingSides.front} *
                  </span>
                }
                title={`Upload ${supportingSides.front}`}
                msg={`${supportingIdType || "Medicare card, bill or statement"} - ${supportingSides.front.toLowerCase()}`}
                accept=".pdf,.jpg,.jpeg,.png"
                reqMsg={`Please upload the ${supportingSides.front.toLowerCase()} of your supporting ID.`}
                height={170}
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              {supportingHasBack && (
                <UploadFile
                  name="supportingIdBack"
                  label={
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Supporting ID &mdash; {supportingSides.back} (optional)
                    </span>
                  }
                  title={`Upload ${supportingSides.back}`}
                  msg="Optional - attach if the reverse carries details"
                  accept=".pdf,.jpg,.jpeg,.png"
                  noRequired={true}
                  height={170}
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />
              )}
            </div>
          </div>

        </div>
      )}

      {/* Electronic (eID) Verification: selfie + DVS biometric consent only.
          No licence or passport scans are required on this path. */}
      {identityMethod === "Electronic Verification" && (
        <div className="p-6 rounded-xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2 m-0">
              <IdcardOutlined className="text-brand-primary" /> Electronic
              Identity Verification
            </h3>
            <PrivacyCollectionNoticeTrigger category="id" />
          </div>

          <p className="text-xs text-slate-600 dark:text-zinc-400 -mt-2 mb-0">
            Your identity is checked electronically against government DVS
            records, so no document scans are needed. Please provide a live
            selfie and confirm the biometric consent below.
          </p>

          <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-3">
                <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">
                  Biometric Identity Verification Notice:
                </span>
                <PrivacyCollectionNoticeTrigger category="biometric" />
              </div>
              <UploadFile
                name="selfie"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Selfie / Photo Identification (Holding ID)
                  </span>
                }
                title="Upload Live Selfie Photo"
                msg="Selfie holding primary ID for automated verification"
                accept=".jpg,.jpeg,.png"
                reqMsg="Please upload selfie photo."
                type="1"
                height={170}
                className="rounded-xl"
              />

              <AntInput
                type="checkbox"
                name="biometricConsent"
                text="BIOMETRIC CONSENT: I consent to automated facial matching and biometric verification against government DVS identity databases."
                className="text-xs font-bold text-slate-900 dark:text-zinc-100"
                validator={(_, v) =>
                  v
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Biometric consent is required for electronic verification.",
                        ),
                      )
                }
                containerClassName="!mb-0"
              />
          </div>
        </div>
      )}

      {/* No Photo ID Path (ID-004) */}
      {identityMethod === "No Photo ID" && (
        <div className="p-6 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-4">
          <AntInput
            type="textarea"
            name="noPhotoIdReason"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Reason for No Photo ID
              </span>
            }
            placeholder="Explain why you do not possess an Australian Driver's License or Passport..."
            rows={3}
            className="rounded-xl"
            reqMsg="Please explain why no photo ID is available."
            containerClassName="!mb-0"
          />
        </div>
      )}
    </div>
  );
}
