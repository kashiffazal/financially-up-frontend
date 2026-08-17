"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  DeleteOutlined,
  DollarOutlined,
  BankOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";
import MemberConsentModalTrigger from "./MemberConsentModalTrigger";

export default function Step5ShareStructure({ shareholders = [], setShareholders }) {
  const handleAddShareholder = () => {
    const newMember = {
      id: Date.now(),
      fullName: "",
      memberType: "Individual",
      address: "",
      shareClass: "Ordinary (ORD)",
      numberOfShares: "100",
      amountPaidPerShare: "$1.00",
      amountUnpaidPerShare: "$0.00",
      isBeneficiallyHeld: "Yes",
      heldForWhom: "",
      isTrusteeOrNominee: "No",
      trusteeDetails: "",
      isCorporateEntity: "No",
      corporateOwnershipChain: "",
      memberConsentAccepted: ["accepted"],
    };
    setShareholders([...shareholders, newMember]);
  };

  const handleRemoveShareholder = (idx) => {
    if (shareholders.length <= 1) return;
    const updated = shareholders.filter((_, i) => i !== idx);
    setShareholders(updated);
  };

  const handleUpdateField = (idx, field, value) => {
    const updated = [...shareholders];
    updated[idx][field] = value;
    setShareholders(updated);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 5 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Share Structure & Members
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Share Capital Structure & Founding Members
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify share classes, issue quantities, paid/unpaid amounts, and shareholder legal ownership details.
        </p>

        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
          <MemberConsentModalTrigger />
        </div>
      </div>

      {/* Repeatable Shareholders List */}
      <div className="space-y-5">
        {shareholders.map((member, idx) => (
          <div
            key={member.id || idx}
            className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-brand-primary text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  {idx + 1}
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-zinc-100">
                  Shareholder #{idx + 1}: {member.fullName || "New Shareholder"} ({member.numberOfShares || 0} Shares)
                </span>
              </div>

              {shareholders.length > 1 && (
                <Button
                  danger
                  type="text"
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveShareholder(idx)}
                  className="font-semibold"
                >
                  Remove
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AntInput
                type="text"
                name={`member_${idx}_fullName`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Shareholder Legal Name / Entity Name *</span>}
                placeholder="e.g. John Alexander Smith or Acme Holdings Pty Ltd"
                value={member.fullName}
                onChange={(e) => handleUpdateField(idx, "fullName", e.target.value)}
                reqMsg="Shareholder name is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="select"
                name={`member_${idx}_memberType`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Member Type *</span>}
                options={["Individual", "Corporate Entity", "Trust / Super Fund"]}
                emptyFirstVal="- Select Member Type -"
                value={member.memberType}
                onChange={(val) => handleUpdateField(idx, "memberType", val)}
                reqMsg="Member type is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`member_${idx}_address`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Residential / Registered Address *</span>}
                placeholder="e.g. 100 Walker St, North Sydney NSW"
                value={member.address}
                onChange={(e) => handleUpdateField(idx, "address", e.target.value)}
                reqMsg="Address is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Share Class & Quantities */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-1">
              <AntInput
                type="select"
                name={`member_${idx}_shareClass`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Share Class *</span>}
                options={["Ordinary (ORD)", "Class A", "Class B", "Preference Shares"]}
                emptyFirstVal="- Select Share Class -"
                value={member.shareClass}
                onChange={(val) => handleUpdateField(idx, "shareClass", val)}
                reqMsg="Share class is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`member_${idx}_numberOfShares`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Number of Shares *</span>}
                placeholder="e.g. 100"
                value={member.numberOfShares}
                onChange={(e) => handleUpdateField(idx, "numberOfShares", e.target.value)}
                reqMsg="Number of shares is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`member_${idx}_amountPaidPerShare`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Amount Paid per Share</span>}
                placeholder="e.g. $1.00"
                value={member.amountPaidPerShare}
                onChange={(e) => handleUpdateField(idx, "amountPaidPerShare", e.target.value)}
                preIconAnt={<DollarOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`member_${idx}_amountUnpaidPerShare`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Amount Unpaid per Share</span>}
                placeholder="e.g. $0.00"
                value={member.amountUnpaidPerShare}
                onChange={(e) => handleUpdateField(idx, "amountUnpaidPerShare", e.target.value)}
                preIconAnt={<DollarOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            {/* Per-Member / Shareholder Consent */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block">
                Member / Shareholder Subscription Consent
              </span>
              <AntInput
                type="checkbox"
                name={`member_${idx}_consentAccepted`}
                group={[
                  {
                    value: "accepted",
                    label: "I/we consent to become a member of the proposed company and agree to be bound by the terms of the Company Constitution and subscribe for the shares specified. *",
                  },
                ]}
                value={member.memberConsentAccepted || ["accepted"]}
                onChange={(val) => handleUpdateField(idx, "memberConsentAccepted", val)}
                reqMsg="Member must consent to shareholding"
                containerClassName="!mb-0"
              />
            </div>

            {/* Beneficial Holding & Nominee Questions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/60 dark:border-zinc-800">
              <AntInput
                type="radio"
                name={`member_${idx}_isBeneficiallyHeld`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Are these shares beneficially held by this shareholder?</span>}
                value={member.isBeneficiallyHeld}
                onChange={(val) => handleUpdateField(idx, "isBeneficiallyHeld", val)}
                radioOptions={[
                  { value: "Yes", label: "Yes (Beneficially held for themselves)" },
                  { value: "No", label: "No (Held on trust / for another person)" },
                ]}
                containerClassName="!mb-0"
              />

              {member.isBeneficiallyHeld === "No" && (
                <AntInput
                  type="text"
                  name={`member_${idx}_heldForWhom`}
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Held for Whom? (Beneficial Owner Name) *</span>}
                  placeholder="e.g. The Smith Family Trust or David Smith"
                  value={member.heldForWhom}
                  onChange={(e) => handleUpdateField(idx, "heldForWhom", e.target.value)}
                  reqMsg="Beneficial owner name is required"
                  size="large"
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />
              )}
            </div>

            {/* Corporate Shareholder Extra details */}
            {member.memberType === "Corporate Entity" && (
              <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-800 space-y-3">
                <AntInput
                  type="textarea"
                  name={`member_${idx}_corporateOwnershipChain`}
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Corporate Shareholder Ownership Chain (ACN, Directors, Ultimate Owners)</span>}
                  placeholder="Specify ACN, Directors, and Ultimate Natural Person Shareholders of this holding entity."
                  value={member.corporateOwnershipChain}
                  onChange={(e) => handleUpdateField(idx, "corporateOwnershipChain", e.target.value)}
                  rows={2}
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />

                <AntFileUpload
                  name={`member_${idx}_corporateExtract`}
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload ASIC Company Extract / Registry Certificate</span>}
                  heading="Click or drag ASIC extract"
                  para="Current company search extract (PDF)"
                  maxCount={1}
                  noRequired={true}
                  icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
                />
              </div>
            )}
          </div>
        ))}

        <Button
          type="dashed"
          onClick={handleAddShareholder}
          icon={<PlusOutlined />}
          className="w-full h-12 rounded-2xl font-bold border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary"
        >
          Add Another Shareholder / Member
        </Button>
      </div>
    </div>
  );
}
