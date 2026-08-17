"use client";

import React from "react";
import { Tag, Form } from "antd";
import {
  BankOutlined,
  ShopOutlined,
  CalendarOutlined,
  GlobalOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step2CompanyDetails({ form }) {
  const isNameReserved = Form.useWatch("isNameReserved", form);
  const companyType = Form.useWatch("companyType", form);
  const companyPurpose = Form.useWatch("companyPurpose", form);
  const tradingNameChoice = Form.useWatch("tradingNameChoice", form);
  const isPartOfGroup = Form.useWatch("isPartOfGroup", form);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 2 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            ASIC Company Details
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Proposed Company Details for ASIC Registration
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Configure company name preferences, corporate type, jurisdiction state, and governance rules.
        </p>
      </div>

      {/* Name Preferences */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <ShopOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Proposed Company Name Preferences
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="text"
            name="companyName1"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">First Preference (Primary Name) *</span>}
            placeholder="e.g. Apex Innovation Enterprises"
            reqMsg="First preference company name is required"
            preIconAnt={<BankOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="companyName2"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Second Preference</span>}
            placeholder="e.g. Apex Global Solutions"
            noRequired={true}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="companyName3"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Third Preference</span>}
            placeholder="e.g. Apex Digital Holdings"
            noRequired={true}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <AntInput
            type="radio"
            name="useAcnAsName"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Use ACN as company name if all names are unavailable?</span>}
            reqMsg="Please answer ACN fallback preference"
            radioOptions={[
              { value: "Yes", label: "Yes, proceed with ACN (e.g. ACN 123 456 789 Pty Ltd)" },
              { value: "No", label: "No, contact me for alternate names" },
            ]}
            containerClassName="!mb-0"
          />

          <AntInput
            type="radio"
            name="isNameReserved"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Has the proposed name been pre-reserved with ASIC?</span>}
            reqMsg="Please select reservation status"
            radioOptions={[
              { value: "No", label: "No (Standard name search & registration)" },
              { value: "Yes", label: "Yes (Name already reserved on Form 410)" },
            ]}
            containerClassName="!mb-0"
          />
        </div>

        {isNameReserved === "Yes" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200/60 dark:border-zinc-800">
            <AntInput
              type="text"
              name="reservationNumber"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">ASIC Reservation Number</span>}
              placeholder="e.g. RES123456"
              reqMsg="Reservation number is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="datepicker"
              name="reservationDate"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reservation Date</span>}
              format="DD/MM/YYYY"
              reqMsg="Reservation date is required"
              size="large"
              className="w-full rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="text"
              name="reservationApplicant"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reservation Applicant Name</span>}
              placeholder="Applicant on Form 410"
              reqMsg="Applicant name is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />
          </div>
        )}
      </div>

      {/* Structure & Purpose */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block mb-1">
          Corporate Structure & Business Classification
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="select"
            name="companyType"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Company Type</span>}
            options={[
              "Proprietary company limited by shares (Pty Ltd)",
              "Public company limited by shares",
              "Company limited by guarantee",
              "Unlimited company",
              "No liability company",
              "Special purpose company",
            ]}
            emptyFirstVal="- Select Company Type -"
            reqMsg="Company type is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="jurisdictionState"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">State / Territory of Registration</span>}
            options={AUSTRALIAN_STATES}
            emptyFirstVal="- Select State -"
            reqMsg="Jurisdiction state is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        {companyType === "Special purpose company" && (
          <AntInput
            type="text"
            name="specialPurposeDetail"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Special Purpose Specification</span>}
            placeholder="e.g. Sole purpose SMSF Trustee, Home unit company"
            reqMsg="Special purpose detail is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="select"
            name="companyPurpose"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Purpose of Company</span>}
            options={[
              "Trading business",
              "Investment company",
              "Trustee company",
              "SMSF corporate trustee",
              "Holding company",
              "Property development/holding",
              "Professional services",
              "Other",
            ]}
            emptyFirstVal="- Select Purpose -"
            reqMsg="Company purpose is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="mainBusinessActivity"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Main Business Activity / Description</span>}
            placeholder="e.g. IT Software Consulting & Development"
            reqMsg="Main business activity is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        {companyPurpose === "Other" && (
          <AntInput
            type="text"
            name="otherCompanyPurpose"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Specify Other Purpose</span>}
            placeholder="Describe company purpose"
            reqMsg="Please specify purpose"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="select"
            name="tradingNameChoice"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Expected Trading / Business Name</span>}
            options={[
              "Same as company name",
              "Different business name required",
            ]}
            emptyFirstVal="- Select Trading Name -"
            reqMsg="Please select trading name preference"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="commencementDate"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Expected Commencement Date</span>}
            format="DD/MM/YYYY"
            reqMsg="Commencement date is required"
            preIconAnt={<CalendarOutlined className="text-slate-400" />}
            size="large"
            className="w-full rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        {tradingNameChoice === "Different business name required" && (
          <AntInput
            type="text"
            name="proposedBusinessName"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Proposed Trading Name to Register</span>}
            placeholder="e.g. Apex Digital Marketing"
            reqMsg="Proposed trading name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        )}
      </div>

      {/* Group Structure & Governance */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block mb-1">
          Corporate Group & Governance Document
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="radio"
            name="isPartOfGroup"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Will the company be part of a corporate group?</span>}
            reqMsg="Please select group status"
            radioOptions={[
              { value: "No", label: "No (Standalone entity)" },
              { value: "Yes", label: "Yes (Subsidiary / Holding company structure)" },
            ]}
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="governanceDocument"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Governance Document</span>}
            options={[
              "Use replaceable rules where permitted",
              "Adopt company constitution (Recommended)",
              "Unsure - advice required",
            ]}
            emptyFirstVal="- Select Governance -"
            reqMsg="Governance choice is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        {isPartOfGroup === "Yes" && (
          <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AntInput
                type="text"
                name="ultimateHoldingName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Ultimate Holding Company Name</span>}
                placeholder="e.g. Apex Global Corp"
                reqMsg="Ultimate holding company name is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name="ultimateHoldingAcn"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">ACN / ARBN / Foreign Reg No</span>}
                placeholder="e.g. 123456789"
                reqMsg="Registration number is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name="ultimateHoldingCountry"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Country of Incorporation</span>}
                placeholder="e.g. Australia, Singapore"
                reqMsg="Country is required"
                preIconAnt={<GlobalOutlined className="text-slate-400" />}
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            <AntFileUpload
              name="groupStructureChart"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Group Ownership Structure Chart (PDF, PNG, JPG)</span>}
              heading="Click or drag structure chart"
              para="Ownership hierarchy diagram showing holding percentages"
              maxCount={1}
              noRequired={true}
              icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
            />
          </div>
        )}
      </div>
    </div>
  );
}
