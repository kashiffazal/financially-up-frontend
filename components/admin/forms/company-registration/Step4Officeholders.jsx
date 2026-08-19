"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  DeleteOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  IdcardOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import UploadFile from "@/components/mutual/antd-upload-file-component";
import SignatureCanvas from "@/components/mutual/SignatureCanvas";
import DirectorConsentModalTrigger from "./DirectorConsentModalTrigger";
import PrivacyCollectionNoticeTrigger from "./PrivacyCollectionNoticeTrigger";

const COUNTRIES = [
  "Australia",
  "New Zealand",
  "United Kingdom",
  "United States",
  "India",
  "China",
  "Singapore",
  "Hong Kong",
  "Canada",
  "Germany",
  "Other Country",
];

export default function Step4Officeholders({
  officeholders = [],
  setOfficeholders,
}) {
  const handleAddOfficeholder = () => {
    const newOfficer = {
      id: Date.now(),
      roles: ["Proposed director"],
      fullName: "",
      formerNames: "",
      dob: null,
      birthCity: "",
      birthState: "",
      birthCountry: "Australia",
      residentialAddress: "",
      email: "",
      mobile: "",
      occupation: "Director / Business Manager",
      citizenship: "Australia",
      taxResidence: "Australia",
      isAustralianResidentDirector: "Yes",
      directorIdStatus: "Director ID held",
      directorIdNumber: "",
      idDocType: "Passport",
      idDocNumber: "",
      pepStatus: "Not a PEP",
      sanctionsDeclaration: "I am not subject to targeted financial sanctions",
      sourceOfWealth: "Accumulated professional business savings",
      officerConsentAccepted: ["accepted"],
      officerSignature: "",
      officerSignatureDate: null,
    };
    setOfficeholders([...officeholders, newOfficer]);
  };

  const handleRemoveOfficeholder = (idx) => {
    if (officeholders.length <= 1) return;
    const updated = officeholders.filter((_, i) => i !== idx);
    setOfficeholders(updated);
  };

  const handleUpdateField = (idx, field, value) => {
    const updated = [...officeholders];
    updated[idx][field] = value;
    setOfficeholders(updated);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 4 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Company Officeholders
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Proposed Directors & Company Secretaries
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Add all proposed directors and secretaries. Australian proprietary
          companies must have at least one Australian resident director.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
          <DirectorConsentModalTrigger />
          <span className="text-slate-300 dark:text-zinc-700">•</span>
          <PrivacyCollectionNoticeTrigger />
        </div>
      </div>

      {/* Repeatable Officeholders List */}
      <div className="space-y-4">
        {officeholders.map((officer, idx) => (
          <div
            key={officer.id || idx}
            className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-brand-primary text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  {idx + 1}
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-zinc-100">
                  Officeholder #{idx + 1}: {officer.fullName || "New Officer"}
                </span>
              </div>

              {officeholders.length > 1 && (
                <Button
                  danger
                  type="text"
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveOfficeholder(idx)}
                  className="font-semibold"
                >
                  Remove
                </Button>
              )}
            </div>

            {/* Basic Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AntInput
                type="text"
                name={`officer_${idx}_fullName`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Full Legal Name *
                  </span>
                }
                placeholder="First Middle Last"
                value={officer.fullName}
                onChange={(e) =>
                  handleUpdateField(idx, "fullName", e.target.value)
                }
                reqMsg="Full legal name is required"
                preIconAnt={<UserOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`officer_${idx}_formerNames`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Former Names / Maiden / Aliases
                  </span>
                }
                placeholder="Leave blank if none"
                value={officer.formerNames}
                onChange={(e) =>
                  handleUpdateField(idx, "formerNames", e.target.value)
                }
                noRequired={true}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="datepicker"
                name={`officer_${idx}_dob`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Date of Birth *
                  </span>
                }
                format="DD/MM/YYYY"
                disabledNextDate={true}
                reqMsg="Date of birth is required"
                preIconAnt={<CalendarOutlined className="text-slate-400" />}
                size="large"
                className="w-full rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Birthplace */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <AntInput
                type="text"
                name={`officer_${idx}_birthCity`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Birth City / Suburb *
                  </span>
                }
                placeholder="e.g. Sydney"
                value={officer.birthCity}
                onChange={(e) =>
                  handleUpdateField(idx, "birthCity", e.target.value)
                }
                reqMsg="Birth city is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`officer_${idx}_birthState`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Birth State / Province *
                  </span>
                }
                placeholder="e.g. NSW"
                value={officer.birthState}
                onChange={(e) =>
                  handleUpdateField(idx, "birthState", e.target.value)
                }
                reqMsg="Birth state is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="select"
                name={`officer_${idx}_birthCountry`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Birth Country *
                  </span>
                }
                options={COUNTRIES}
                value={officer.birthCountry}
                onChange={(val) => handleUpdateField(idx, "birthCountry", val)}
                emptyFirstVal="- Select Country -"
                reqMsg="Birth country is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Address & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <AntInput
                type="text"
                name={`officer_${idx}_residentialAddress`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Residential Address *
                  </span>
                }
                placeholder="e.g. 15 Ocean St, Manly NSW 2095"
                value={officer.residentialAddress}
                onChange={(e) =>
                  handleUpdateField(idx, "residentialAddress", e.target.value)
                }
                reqMsg="Residential address is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="email"
                name={`officer_${idx}_email`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Direct Email *
                  </span>
                }
                placeholder="director@example.com"
                value={officer.email}
                onChange={(e) =>
                  handleUpdateField(idx, "email", e.target.value)
                }
                reqMsg="Email is required"
                preIconAnt={<MailOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`officer_${idx}_mobile`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Mobile Phone *
                  </span>
                }
                placeholder="e.g. 0412 345 678"
                value={officer.mobile}
                onChange={(e) =>
                  handleUpdateField(idx, "mobile", e.target.value)
                }
                reqMsg="Mobile is required"
                preIconAnt={<PhoneOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Director ID & Identity Document */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200/60 dark:border-zinc-800">
              <AntInput
                type="select"
                name={`officer_${idx}_directorIdStatus`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Director ID Status *
                  </span>
                }
                options={[
                  "Director ID held",
                  "Applied",
                  "Not yet applied",
                  "N/A",
                ]}
                emptyFirstVal="- Select Director ID Status -"
                value={officer.directorIdStatus}
                onChange={(val) =>
                  handleUpdateField(idx, "directorIdStatus", val)
                }
                reqMsg="Director ID status is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="select"
                name={`officer_${idx}_idDocType`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Primary ID Document *
                  </span>
                }
                options={[
                  "Passport",
                  "Driver licence",
                  "Medicare card",
                  "Birth certificate",
                  "Visa/ImmiCard",
                  "Other",
                ]}
                emptyFirstVal="- Select Primary ID Document -"
                value={officer.idDocType}
                onChange={(val) => handleUpdateField(idx, "idDocType", val)}
                reqMsg="ID document type is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`officer_${idx}_idDocNumber`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    ID Document Number *
                  </span>
                }
                placeholder="e.g. PA1234567"
                value={officer.idDocNumber}
                onChange={(e) =>
                  handleUpdateField(idx, "idDocNumber", e.target.value)
                }
                reqMsg="ID number is required"
                preIconAnt={<IdcardOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Upload & PEP / Sanctions Declarations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 mb-6">
              <UploadFile
                name={`officer_${idx}_idAttachment`}
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Upload Photo ID Copy (Passport / Driver Licence) *
                  </span>
                }
                title="Click or drag photo ID copy"
                msg="Passport or Australian Driver Licence"
                reqMsg="Please upload ID document copy"
                type="4"
                height={126}
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <div>
                <AntInput
                  type="select"
                  name={`officer_${idx}_pepStatus`}
                  label={
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      PEP Status (Politically Exposed Person) *
                    </span>
                  }
                  options={[
                    "Not a PEP",
                    "Domestic PEP",
                    "Foreign PEP",
                    "International organisation PEP",
                    "Unsure",
                  ]}
                  emptyFirstVal="- Select PEP Status -"
                  value={officer.pepStatus}
                  onChange={(val) => handleUpdateField(idx, "pepStatus", val)}
                  reqMsg="PEP status is required"
                  size="large"
                  className="rounded-xl"
                  containerClassName="!mb-4"
                />

                <AntInput
                  type="select"
                  name={`officer_${idx}_sanctionsDeclaration`}
                  label={
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Targeted Financial Sanctions Check *
                    </span>
                  }
                  options={[
                    "I am not subject to targeted financial sanctions",
                    "Unsure",
                  ]}
                  emptyFirstVal="- Select Sanctions Declaration -"
                  value={officer.sanctionsDeclaration}
                  onChange={(val) =>
                    handleUpdateField(idx, "sanctionsDeclaration", val)
                  }
                  reqMsg="Sanctions confirmation is required"
                  size="large"
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />
              </div>
            </div>

            {/* Per-Person Officeholder Statutory Consent & Execution */}
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2 mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
                        Officeholder Consent & Signature
                      </h3>
                    </div>
                  </div>

                  <AntInput
                    type="checkbox"
                    name={`officer_${idx}_consentAccepted`}
                    group={[
                      {
                        value: "accepted",
                        label: `I consent to act as ${officer.roles ? officer.roles.join(" / ") : "Director"} of the proposed company. *`,
                      },
                    ]}
                    value={officer.officerConsentAccepted || ["accepted"]}
                    onChange={(val) =>
                      handleUpdateField(idx, "officerConsentAccepted", val)
                    }
                    reqMsg="Officeholder must consent to act"
                    containerClassName="!mb-4"
                  />
                  <AntInput
                    type="datepicker"
                    name={`officer_${idx}_signatureDate`}
                    label={
                      <span className="font-bold text-slate-800 dark:text-zinc-200">
                        Consent Date *
                      </span>
                    }
                    format="DD/MM/YYYY"
                    reqMsg="Consent date is required"
                    preIconAnt={<CalendarOutlined className="text-slate-400" />}
                    size="large"
                    className="w-full rounded-xl"
                    containerClassName="!mb-0"
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <SignatureCanvas
                    name={`officer_${idx}_signature`}
                    label="Digital Signature *"
                    reqMsg="Officeholder signature is required"
                    value={officer.officerSignature}
                    onChange={(dataUrl) =>
                      handleUpdateField(idx, "officerSignature", dataUrl)
                    }
                    height={130}
                    penColor="#0f172a"
                    placeholder="Draw signature smoothly using mouse, stylus, or finger..."
                    storageKey={`officer_${officer.id || idx}_signature`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          type="dashed"
          onClick={handleAddOfficeholder}
          icon={<PlusOutlined />}
          className="w-full h-12 rounded-2xl font-bold border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary"
        >
          Add Another Director / Secretary
        </Button>
      </div>
    </div>
  );
}
