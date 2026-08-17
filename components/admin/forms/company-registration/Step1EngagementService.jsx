"use client";

import React from "react";
import { Tag, Form } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";
import PrivacyCollectionNoticeTrigger from "./PrivacyCollectionNoticeTrigger";
import TermsOfEngagementTrigger from "./TermsOfEngagementTrigger";

export default function Step1EngagementService({ form }) {
  const relationship = Form.useWatch("contactRelationship", form);
  const isUrgent = Form.useWatch("isUrgent", form);
  const previousRefusal = Form.useWatch("previousRefusal", form);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Engagement & Service
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Client Engagement & Designated Service
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide contact details for the person completing this registration and confirm requested corporate services.
        </p>

        {/* Before Step 1 Legal Acknowledgements */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 mt-4 space-y-4">
          {/* Terms of Engagement */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
                Terms of Engagement
              </span>
              <TermsOfEngagementTrigger />
            </div>
            <AntInput
              type="checkbox"
              name="termsOfEngagementAccepted"
              group={[
                {
                  value: "accepted",
                  label: "I have read and agree to the Financially Up Company Registration Terms of Engagement. *",
                },
              ]}
              reqMsg="You must agree to the Terms of Engagement"
              containerClassName="!mb-0"
            />
          </div>

          <div className="border-t border-emerald-200/50 dark:border-emerald-900/50 pt-3 space-y-2">
            {/* Before you begin: Privacy Collection Notice */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
                Before you begin
              </span>
              <PrivacyCollectionNoticeTrigger />
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
              Financially Up collects and handles personal information for the purposes described in its Privacy Collection Notice.
            </p>
            <AntInput
              type="checkbox"
              name="privacyNoticeAccepted"
              group={[
                {
                  value: "accepted",
                  label: "I acknowledge that I have read the Privacy Collection Notice. *",
                },
              ]}
              reqMsg="You must acknowledge the Privacy Collection Notice"
              containerClassName="!mb-0"
            />
          </div>
        </div>
      </div>

      {/* 1.1 Contact Person Completing This Form */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <UserOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            1.1 Contact Person Completing This Form
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="text"
            name="contactName"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Full Legal Name *</span>}
            placeholder="e.g. Jonathan Alexander Smith"
            reqMsg="Contact full legal name is required"
            preIconAnt={<UserOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="email"
            name="contactEmail"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Contact Email Address *</span>}
            placeholder="e.g. j.smith@example.com.au"
            reqMsg="Valid email is required"
            preIconAnt={<MailOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="contactMobile"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Mobile Phone *</span>}
            placeholder="e.g. 0412 345 678"
            reqMsg="Mobile phone number is required"
            preIconAnt={<PhoneOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="select"
            name="contactRelationship"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Relationship to Proposed Company *</span>}
            options={[
              "Founder",
              "Proposed director",
              "Proposed shareholder",
              "Adviser/agent",
              "Existing entity owner",
              "Other",
            ]}
            emptyFirstVal="- Select Relationship -"
            reqMsg="Please select your relationship"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          {relationship === "Other" && (
            <AntInput
              type="text"
              name="otherRelationshipDetail"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Specify Other Relationship *</span>}
              placeholder="e.g. Legal representative, Family member"
              reqMsg="Please specify relationship"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />
          )}
        </div>

        {/* Authority to instruct if acting for another */}
        {(relationship === "Adviser/agent" || relationship === "Other") && (
          <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-800 space-y-3">
            <AntInput
              type="textarea"
              name="authorityDescription"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Authority to Instruct Financially Up *</span>}
              placeholder="Describe your legal capacity and authorisation from the company founders/directors to lodge this registration."
              reqMsg="Please describe your authority to instruct"
              rows={2}
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntFileUpload
              name="authorityEvidence"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Evidence of Authority (Letter of Authorisation / POA)</span>}
              heading="Click or drag authority document"
              para="Signed Authorisation Letter or Power of Attorney (PDF, PNG, JPG)"
              maxCount={1}
              noRequired={true}
              icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
            />
          </div>
        )}
      </div>

      {/* 1.2 Requested Service */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <FileProtectOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            1.2 Requested Service & Instructions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="primaryService"
            placeholder="Register a new Australian company (Form 201)"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Primary Requested Service</span>}
            readOnly={true}
            size="large"
            className="rounded-xl bg-slate-100 dark:bg-zinc-800 font-bold text-slate-800 dark:text-zinc-100"
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="dateServiceRequested"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Date Service Requested *</span>}
            format="DD/MM/YYYY"
            reqMsg="Date requested is required"
            preIconAnt={<CalendarOutlined className="text-slate-400" />}
            size="large"
            className="w-full rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <AntInput
          type="checkbox"
          name="additionalServices"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Additional Requested Services</span>}
          group={[
            { value: "Financially Up registered office address", label: "Financially Up Registered Office Address Service" },
            { value: "Financially Up principal place of business address", label: "Financially Up Principal Place of Business Address Service" },
            { value: "Arrange director / secretary / trustee / nominee shareholder", label: "Arrange Director / Secretary / Trustee / Nominee Role-Holder" },
            { value: "Other related service", label: "Other Corporate Secretarial Service" },
          ]}
          containerClassName="!mb-0"
        />

        {/* Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <AntInput
            type="radio"
            name="isUrgent"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Is this an urgent registration request?</span>}
            reqMsg="Please select urgency"
            radioOptions={[
              { value: "No", label: "No (Standard 1-2 business days)" },
              { value: "Yes", label: "Yes (Urgent / Same-day priority)" },
            ]}
            containerClassName="!mb-0"
          />

          {isUrgent === "Yes" && (
            <AntInput
              type="text"
              name="urgencyExplanation"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Explain Reason for Urgency & Deadline *</span>}
              placeholder="e.g. Commercial contract execution deadline on Friday"
              reqMsg="Please explain urgency"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />
          )}
        </div>

        {/* Previous refusal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <AntInput
            type="radio"
            name="previousRefusal"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Has any other accountant/lawyer/agent refused or stopped this work?</span>}
            reqMsg="Please answer previous refusal question"
            radioOptions={[
              { value: "No", label: "No" },
              { value: "Yes", label: "Yes" },
            ]}
            containerClassName="!mb-0"
          />

          {previousRefusal === "Yes" && (
            <AntInput
              type="text"
              name="previousRefusalDetails"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Details of Previous Refusal / Cessation *</span>}
              placeholder="Provide context and reasons"
              reqMsg="Please provide details"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />
          )}
        </div>
      </div>
    </div>
  );
}
