"use client";

import React from "react";
import { Form, Tooltip, Tag } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import PrivacyCollectionNoticeTrigger from "./PrivacyCollectionNoticeTrigger";

// Countries list for Country of Birth
const COUNTRIES = [
  "Australia",
  "New Zealand",
  "United Kingdom",
  "United States",
  "India",
  "China",
  "Philippines",
  "Vietnam",
  "South Africa",
  "Canada",
  "Germany",
  "Malaysia",
  "Singapore",
  "Hong Kong",
  "Other Country",
];

const EMPLOYMENT_STATUS_OPTIONS = [
  { value: "Full-Time", label: "Full-Time Employed" },
  { value: "Part-Time", label: "Part-Time Employed" },
  { value: "Casual", label: "Casual / Seasonal" },
  { value: "Self-Employed", label: "Self-Employed / Sole Trader" },
  { value: "Retired", label: "Retired / Superannuant" },
  { value: "Unemployed", label: "Unemployed" },
  { value: "Student", label: "Student" },
];

const TFN_OPTIONS = [
  { value: "Provided", label: "I will provide my TFN" },
  { value: "Applied", label: "Applied for TFN (Pending)" },
  { value: "Exempt", label: "TFN Exemption Applies" },
  { value: "Later", label: "Provide later" },
];

export default function Step2PersonalInformation({ form }) {
  const hasPreviousName = Form.useWatch("hasPreviousName", form);
  const tfnStatus = Form.useWatch("tfnStatus", form);

  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 2 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Personal Information
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Tell us about yourself
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide your legal identity and contact details exactly as shown on
          official government records.
        </p>
      </div>

      {/* Grid: Name & Basic Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-001: Full Legal Name */}
        <AntInput
          name="fullName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Full Legal Name
            </span>
          }
          placeholder="e.g. John Alexander Smith"
          preIconAnt={<UserOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          reqMsg="Please enter your full legal name."
          containerClassName="!mb-2"
        />

        {/* PI-004: Date of Birth */}
        <AntInput
          type="datepicker"
          name="dateOfBirth"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Date of Birth
            </span>
          }
          placeholder="DD/MM/YYYY"
          format="DD/MM/YYYY"
          size="large"
          className="w-full rounded-xl"
          reqMsg="Please select your date of birth."
          containerClassName="!mb-2"
        />
      </div>

      {/* PI-002 & PI-003: Previous Name Question */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <AntInput
          type="radio"
          name="hasPreviousName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Have you ever been known by another name? (Maiden, alias, etc.)
            </span>
          }
          radioOptions={[
            { value: "No", label: "No" },
            { value: "Yes", label: "Yes" },
          ]}
          noRequired={true}
          containerClassName="!mb-0"
        />

        {hasPreviousName === "Yes" && (
          <AntInput
            name="previousNames"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Previous / Other Names
              </span>
            }
            placeholder="Enter previous legal names or maiden name"
            size="large"
            className="rounded-xl"
            reqMsg="Please enter previous name."
            containerClassName="!mb-2 !mt-2"
          />
        )}
      </div>

      {/* TFN Section (PI-005, PI-006, PI-007) */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              Tax File Number (TFN)
            </h3>
            <Tooltip title="Your TFN is encrypted under strict Australian Privacy Act and ATO guidelines. Providing your TFN is voluntary under law, but without it, tax return lodgement cannot proceed.">
              <InfoCircleOutlined className="text-slate-400 hover:text-brand-primary cursor-pointer text-xs" />
            </Tooltip>
          </div>
          <PrivacyCollectionNoticeTrigger category="tfn" />
        </div>

        <AntInput
          type="radio"
          name="tfnStatus"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              TFN Provision Options
            </span>
          }
          radioOptions={TFN_OPTIONS}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
          noRequired={true}
          containerClassName="!mb-2"
        />

        {tfnStatus === "Provided" ? (
          <AntInput
            name="tfn"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                9-Digit Tax File Number
              </span>
            }
            placeholder="123 456 789"
            preIconAnt={<IdcardOutlined className="text-slate-400" />}
            size="large"
            maxLength={11}
            className="rounded-xl font-mono tracking-widest"
            rules={[
              { required: true, message: "Please enter your TFN." },
              {
                pattern: /^\d{3}\s?\d{3}\s?\d{3}$/,
                message: "Please enter a valid 9-digit Australian TFN.",
              },
            ]}
            containerClassName="!mb-0 max-w-xs"
          />
        ) : (
          <AntInput
            type="textarea"
            name="tfnExplanation"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Explanation for TFN Status
              </span>
            }
            placeholder="Please provide details regarding your TFN application or exemption status..."
            rows={2}
            className="rounded-xl"
            reqMsg="Please explain your TFN status."
            containerClassName="!mb-0"
          />
        )}
      </div>

      {/* Birth Location & Citizenship */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-008: City / Town of Birth */}
        <AntInput
          name="birthCity"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              City / Town of Birth (optional)
            </span>
          }
          placeholder="e.g. Sydney, London, Mumbai"
          size="large"
          className="rounded-xl"
          noRequired={true}
          containerClassName="!mb-2"
        />

        {/* PI-009: Country of Birth */}
        <AntInput
          type="select"
          name="birthCountry"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Country of Birth
            </span>
          }
          options={COUNTRIES}
          placeholder="Select Country"
          size="large"
          className="rounded-xl"
          filter={true}
          reqMsg="Please select your country of birth."
          containerClassName="!mb-2"
        />
      </div>

      {/* Contact & Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-011: Mobile */}
        <AntInput
          name="mobile"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Mobile Phone Number
            </span>
          }
          placeholder="0400 000 000"
          preIconAnt={<PhoneOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          rules={[
            { required: true, message: "Please enter your mobile number." },
            {
              pattern: /^(?:\+61|0)4\d{8}$/,
              message:
                "Please enter a valid Australian mobile number (04xx xxx xxx).",
            },
          ]}
          containerClassName="!mb-2"
        />

        {/* PI-012: Email */}
        <AntInput
          type="email"
          name="email"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Email Address
            </span>
          }
          placeholder="client@example.com.au"
          preIconAnt={<MailOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          reqMsg="Please enter a valid email address."
          containerClassName="!mb-2"
        />
      </div>

      {/* PI-010: Residential Address */}
      <AntInput
        name="address"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Primary Australian Residential Address
          </span>
        }
        placeholder="123 Street Name, Suburb, State Postcode"
        preIconAnt={<HomeOutlined className="text-slate-400" />}
        size="large"
        className="rounded-xl"
        reqMsg="Please enter your residential address."
        containerClassName="!mb-4"
      />

      {/* Occupation & Employment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-013: Occupation */}
        <AntInput
          name="occupation"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Main Occupation / Job Title
            </span>
          }
          placeholder="e.g. Software Engineer, Nurse, Electrician"
          preIconAnt={<SolutionOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          reqMsg="Please enter your occupation."
          containerClassName="!mb-2"
        />

        {/* PI-014: Employment Status */}
        <AntInput
          type="select"
          name="employmentStatus"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Employment Status
            </span>
          }
          options={EMPLOYMENT_STATUS_OPTIONS}
          placeholder="Select Employment Status"
          size="large"
          className="rounded-xl"
          reqMsg="Please select employment status."
          containerClassName="!mb-2"
        />
      </div>

      {/* PI-015: About Yourself */}
      <AntInput
        type="textarea"
        name="about"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Tell us briefly about your tax situation (Optional)
          </span>
        }
        placeholder="Maximum 500 characters. e.g. Any changes in job, new rental property purchase, foreign assets, or specific advice needed."
        maxLength={500}
        showCount={true}
        rows={3}
        className="rounded-xl"
        noRequired={true}
        containerClassName="!mb-2"
      />
    </div>
  );
}
