"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  DeleteOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step6BeneficialOwnership({ beneficialOwners = [], setBeneficialOwners }) {
  const handleAddOwner = () => {
    const newOwner = {
      id: Date.now(),
      fullName: "",
      dob: null,
      address: "",
      ownershipPercentage: "100%",
      holdingType: "Direct",
      howControlIsHeld: "Shareholder & Director Voting Rights",
      idVerificationProvided: "Yes",
    };
    setBeneficialOwners([...beneficialOwners, newOwner]);
  };

  const handleRemoveOwner = (idx) => {
    if (beneficialOwners.length <= 1) return;
    const updated = beneficialOwners.filter((_, i) => i !== idx);
    setBeneficialOwners(updated);
  };

  const handleUpdateField = (idx, field, value) => {
    const updated = [...beneficialOwners];
    updated[idx][field] = value;
    setBeneficialOwners(updated);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 6 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Beneficial Ownership & Control
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Ultimate Beneficial Ownership & Control Disclosure
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Disclose every natural person who ultimately owns 25% or more of the proposed company, directly or indirectly, or otherwise exercises ultimate control.
        </p>
      </div>

      {/* Repeatable Beneficial Owners */}
      <div className="space-y-5">
        {beneficialOwners.map((owner, idx) => (
          <div
            key={owner.id || idx}
            className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-brand-primary text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  {idx + 1}
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-zinc-100">
                  Beneficial Owner #{idx + 1}: {owner.fullName || "New Person"} ({owner.ownershipPercentage || "25%+"})
                </span>
              </div>

              {beneficialOwners.length > 1 && (
                <Button
                  danger
                  type="text"
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveOwner(idx)}
                  className="font-semibold"
                >
                  Remove
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AntInput
                type="text"
                name={`owner_${idx}_fullName`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Full Legal Name *</span>}
                placeholder="First Middle Last"
                value={owner.fullName}
                onChange={(e) => handleUpdateField(idx, "fullName", e.target.value)}
                reqMsg="Full legal name is required"
                preIconAnt={<UserOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="datepicker"
                name={`owner_${idx}_dob`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Date of Birth *</span>}
                format="DD/MM/YYYY"
                disabledNextDate={true}
                reqMsg="Date of birth is required"
                preIconAnt={<CalendarOutlined className="text-slate-400" />}
                size="large"
                className="w-full rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`owner_${idx}_ownershipPercentage`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Ownership / Control Percentage (%)</span>}
                placeholder="e.g. 50% or 100%"
                value={owner.ownershipPercentage}
                onChange={(e) => handleUpdateField(idx, "ownershipPercentage", e.target.value)}
                reqMsg="Ownership percentage is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <AntInput
                type="text"
                name={`owner_${idx}_address`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Residential Address</span>}
                placeholder="e.g. 100 Miller St, Sydney NSW"
                value={owner.address}
                onChange={(e) => handleUpdateField(idx, "address", e.target.value)}
                reqMsg="Residential address is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="select"
                name={`owner_${idx}_holdingType`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Holding Type</span>}
                options={["Direct (Direct shares)", "Indirect (Via Holding Company / Trust)", "Practical Control / Senior Manager"]}
                emptyFirstVal="- Select Holding Type -"
                value={owner.holdingType}
                onChange={(val) => handleUpdateField(idx, "holdingType", val)}
                reqMsg="Holding type is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name={`owner_${idx}_howControlIsHeld`}
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">How Control is Exercised</span>}
                placeholder="e.g. Majority voting shares, Sole director"
                value={owner.howControlIsHeld}
                onChange={(e) => handleUpdateField(idx, "howControlIsHeld", e.target.value)}
                reqMsg="Control method description is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>
          </div>
        ))}

        <Button
          type="dashed"
          onClick={handleAddOwner}
          icon={<PlusOutlined />}
          className="w-full h-12 rounded-2xl font-bold border-2 border-brand-primary/40 text-brand-primary hover:border-brand-primary"
        >
          Add Another Beneficial Owner (25%+ Ownership)
        </Button>
      </div>

      {/* 6 Mandatory Control Questions */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              <SafetyCertificateOutlined className="text-brand-primary text-sm" /> Control & Indirect Arrangement Questions
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <AntInput
            type="radio"
            name="controlQ1"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">1. Is there any shareholder agreement, side agreement, loan agreement or informal arrangement that changes who controls the company?</span>}
            reqMsg="Please answer Question 1"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="controlQ2"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">2. Can any person appoint/remove directors, veto decisions or control voting, even if they own less than 25%?</span>}
            reqMsg="Please answer Question 2"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="controlQ3"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">3. Is any person funding the company but not listed as a shareholder or director?</span>}
            reqMsg="Please answer Question 3"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="controlQ4"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">4. Is any person acting under instructions from another person?</span>}
            reqMsg="Please answer Question 4"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="controlQ5"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">5. Is any ownership held through a trust, foreign company, family member, nominee or associate?</span>}
            reqMsg="Please answer Question 5"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="controlQ6"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">6. Is any beneficial owner, controller, director, nominator or instructing person located outside Australia?</span>}
            reqMsg="Please answer Question 6"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
