"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Radio, Tooltip, Tag } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  IdcardOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

// Countries list for Country of Birth
const COUNTRIES = [
  "Australia", "New Zealand", "United Kingdom", "United States", "India",
  "China", "Philippines", "Vietnam", "South Africa", "Canada", "Germany",
  "Malaysia", "Singapore", "Hong Kong", "Other Country"
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

export default function Step2PersonalInformation({ form }) {
  const hasPreviousName = Form.useWatch("hasPreviousName", form);
  const tfnStatus = Form.useWatch("tfnStatus", form);

  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 2 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Personal Information</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Tell us about yourself
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide your legal identity and contact details exactly as shown on official government records.
        </p>
      </div>

      {/* Grid: Name & Basic Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-001: Full Legal Name */}
        <Form.Item
          name="fullName"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Full Legal Name</span>}
          rules={[{ required: true, message: "Please enter your full legal name." }]}
          className="mb-0"
        >
          <Input
            prefix={<UserOutlined className="text-slate-400" />}
            placeholder="e.g. John Alexander Smith"
            size="large"
            className="rounded-xl"
          />
        </Form.Item>

        {/* PI-004: Date of Birth */}
        <Form.Item
          name="dateOfBirth"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Date of Birth</span>}
          rules={[{ required: true, message: "Please select your date of birth." }]}
          className="mb-0"
        >
          <DatePicker
            format="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            size="large"
            className="w-full rounded-xl"
          />
        </Form.Item>
      </div>

      {/* PI-002 & PI-003: Previous Name Question */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <Form.Item
          name="hasPreviousName"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Have you ever been known by another name? (Maiden, alias, etc.)</span>}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="No">No</Radio>
            <Radio value="Yes">Yes</Radio>
          </Radio.Group>
        </Form.Item>

        {hasPreviousName === "Yes" && (
          <Form.Item
            name="previousNames"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Previous / Other Names</span>}
            rules={[{ required: true, message: "Please enter previous name." }]}
            className="mb-0"
          >
            <Input placeholder="Enter previous legal names or maiden name" size="large" className="rounded-xl" />
          </Form.Item>
        )}
      </div>

      {/* TFN Section (PI-005, PI-006, PI-007) */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">Tax File Number (TFN)</h3>
          <Tooltip title="Your TFN is encrypted under strict Australian Privacy Act and ATO guidelines. Providing your TFN is voluntary under law, but without it, tax return lodgement cannot proceed.">
            <InfoCircleOutlined className="text-slate-400 hover:text-brand-primary cursor-pointer text-xs" />
          </Tooltip>
        </div>

        <Form.Item
          name="tfnStatus"
          initialValue="Provided"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">TFN Provision Options</span>}
          className="mb-0"
        >
          <Radio.Group className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {[
                { value: "Provided", label: "I will provide my TFN" },
                { value: "Applied", label: "Applied for TFN (Pending)" },
                { value: "Exempt", label: "TFN Exemption Applies" },
                { value: "Later", label: "Provide later" },
              ].map((opt) => (
                <Radio key={opt.value} value={opt.value} className="text-xs">
                  {opt.label}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        </Form.Item>

        {tfnStatus === "Provided" ? (
          <Form.Item
            name="tfn"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">9-Digit Tax File Number</span>}
            rules={[
              { required: true, message: "Please enter your TFN." },
              { pattern: /^\d{3}\s?\d{3}\s?\d{3}$/, message: "Please enter a valid 9-digit Australian TFN." },
            ]}
            className="mb-0 max-w-xs"
          >
            <Input
              prefix={<IdcardOutlined className="text-slate-400" />}
              placeholder="123 456 789"
              size="large"
              maxLength={11}
              className="rounded-xl font-mono tracking-widest"
            />
          </Form.Item>
        ) : (
          <Form.Item
            name="tfnExplanation"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Explanation for TFN Status</span>}
            rules={[{ required: true, message: "Please explain your TFN status." }]}
            className="mb-0"
          >
            <TextArea placeholder="Please provide details regarding your TFN application or exemption status..." rows={2} className="rounded-xl" />
          </Form.Item>
        )}
      </div>

      {/* Birth Location & Citizenship */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-008: City / Town of Birth */}
        <Form.Item
          name="birthCity"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">City / Town of Birth (optional)</span>}
          className="mb-0"
        >
          <Input placeholder="e.g. Sydney, London, Mumbai" size="large" className="rounded-xl" />
        </Form.Item>

        {/* PI-009: Country of Birth */}
        <Form.Item
          name="birthCountry"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Country of Birth</span>}
          rules={[{ required: true, message: "Please select your country of birth." }]}
          className="mb-0"
        >
          <Select
            placeholder="Select Country"
            size="large"
            className="rounded-xl"
            showSearch
          >
            {COUNTRIES.map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      {/* Contact & Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-011: Mobile */}
        <Form.Item
          name="mobile"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Mobile Phone Number</span>}
          rules={[
            { required: true, message: "Please enter your mobile number." },
            { pattern: /^(?:\+61|0)4\d{8}$/, message: "Please enter a valid Australian mobile number (04xx xxx xxx)." },
          ]}
          className="mb-0"
        >
          <Input
            prefix={<PhoneOutlined className="text-slate-400" />}
            placeholder="0400 000 000"
            size="large"
            className="rounded-xl"
          />
        </Form.Item>

        {/* PI-012: Email */}
        <Form.Item
          name="email"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Email Address</span>}
          rules={[
            { required: true, message: "Please enter a valid email address." },
            { type: "email", message: "Please enter a valid email address." },
          ]}
          className="mb-0"
        >
          <Input
            prefix={<MailOutlined className="text-slate-400" />}
            placeholder="client@example.com.au"
            size="large"
            className="rounded-xl"
          />
        </Form.Item>
      </div>

      {/* PI-010: Residential Address */}
      <Form.Item
        name="address"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Primary Australian Residential Address</span>}
        rules={[{ required: true, message: "Please enter your residential address." }]}
        className="mb-0"
      >
        <Input
          prefix={<HomeOutlined className="text-slate-400" />}
          placeholder="123 Street Name, Suburb, State Postcode"
          size="large"
          className="rounded-xl"
        />
      </Form.Item>

      {/* Occupation & Employment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PI-013: Occupation */}
        <Form.Item
          name="occupation"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Main Occupation / Job Title</span>}
          rules={[{ required: true, message: "Please enter your occupation." }]}
          className="mb-0"
        >
          <Input
            prefix={<SolutionOutlined className="text-slate-400" />}
            placeholder="e.g. Software Engineer, Nurse, Electrician"
            size="large"
            className="rounded-xl"
          />
        </Form.Item>

        {/* PI-014: Employment Status */}
        <Form.Item
          name="employmentStatus"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Employment Status</span>}
          rules={[{ required: true, message: "Please select employment status." }]}
          className="mb-0"
        >
          <Select placeholder="Select Employment Status" size="large" className="rounded-xl">
            {EMPLOYMENT_STATUS_OPTIONS.map((opt) => (
              <Select.Option key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      {/* PI-015: About Yourself */}
      <Form.Item
        name="about"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Tell us briefly about your tax situation (Optional)</span>}
        className="mb-0"
      >
        <TextArea
          placeholder="Maximum 500 characters. e.g. Any changes in job, new rental property purchase, foreign assets, or specific advice needed."
          maxLength={500}
          showCount
          rows={3}
          className="rounded-xl"
        />
      </Form.Item>
    </div>
  );
}
