"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Radio, InputNumber, Alert, Tag } from "antd";
import { InfoCircleOutlined, GlobalOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const VISA_STATUS_OPTIONS = [
  "Permanent Resident (PR)",
  "Temporary Skill Shortage (Subclass 482 / 457)",
  "Working Holiday (Subclass 417 / 462)",
  "Student Visa (Subclass 500)",
  "Partner / Spouse Visa (Subclass 820 / 309)",
  "Visitor / Tourist Visa",
  "Other Temporary Visa",
];

export default function Step3ResidencyFamily({ form }) {
  const isAustralianCitizen = Form.useWatch("isAustralianCitizen", form);
  const taxResidency = Form.useWatch("taxResidency", form);
  const hasSpouse = Form.useWatch("hasSpouse", form);
  const hasDependants = Form.useWatch("hasDependants", form);

  const residencyChanged = taxResidency === "Became Resident" || taxResidency === "Ceased Residence" || taxResidency === "Unsure";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 3 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Residency & Family</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Tax Residency & Family Profile
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Your tax residency status determines tax rates, tax offsets, and Medicare levy liabilities.
        </p>
      </div>

      {/* Citizenship & Residency Section */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        {/* RES-001: Australian Citizen */}
        <Form.Item
          name="isAustralianCitizen"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Are you an Australian citizen?</span>}
          rules={[{ required: true, message: "Please select your citizenship status." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="Yes">Yes, Australian Citizen</Radio>
            <Radio value="No">No, Foreign Citizen / Permanent Resident</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Conditional Visa Questions when Citizen = No */}
        {isAustralianCitizen === "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <GlobalOutlined className="text-brand-primary" /> Citizenship & Visa Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="citizenshipCountry"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Country of Citizenship</span>}
                rules={[{ required: true, message: "Please select your country of citizenship." }]}
              >
                <Input placeholder="e.g. United Kingdom, New Zealand, India" size="large" className="rounded-xl" />
              </Form.Item>

              <Form.Item
                name="visaStatus"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Visa Status</span>}
                rules={[{ required: true, message: "Please select your visa status." }]}
              >
                <Select placeholder="Select Visa Type" size="large" className="rounded-xl">
                  {VISA_STATUS_OPTIONS.map((v) => (
                    <Select.Option key={v} value={v}>{v}</Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="visaSubclass"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Visa Subclass Number</span>}
              >
                <Input placeholder="e.g. 500, 482, 820" size="large" className="rounded-xl" />
              </Form.Item>

              <Form.Item
                name="arrivalDate"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">First Arrival Date in Australia</span>}
              >
                <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" size="large" className="w-full rounded-xl" />
              </Form.Item>
            </div>
          </div>
        )}

        {/* RES-002: Australian Tax Residency */}
        <Form.Item
          name="taxResidency"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Australian Tax Residency Status (for the tax year)</span>}
          rules={[{ required: true, message: "Please select your tax residency." }]}
          className="mb-0"
        >
          <Radio.Group className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: "Australian Resident", title: "Australian Resident for Tax Purposes", desc: "Lived in Australia continuously or met 183-day test" },
                { value: "Foreign Resident", title: "Foreign Resident for Tax Purposes", desc: "Non-resident for tax purposes; taxed on AU-sourced income only" },
                { value: "Became Resident", title: "Became Resident During Year", desc: "Moved to Australia permanently during the financial year" },
                { value: "Ceased Residence", title: "Ceased Australian Residence", desc: "Departed Australia permanently during the financial year" },
                { value: "Unsure", title: "Unsure / Need Residency Determination", desc: "Our tax accountants will evaluate your tax residency status" },
              ].map((res) => {
                const isSelected = taxResidency === res.value;
                return (
                  <label
                    key={res.value}
                    className={`p-4 rounded-2xl cursor-pointer block select-none transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-primary-soft/60 dark:bg-emerald-950/60 border-brand-primary dark:border-emerald-500 shadow-md shadow-emerald-600/10 ring-2 ring-brand-primary/20"
                        : "bg-slate-50/70 dark:bg-zinc-950/60 border-slate-200/80 dark:border-zinc-800 hover:border-brand-primary/60 hover:bg-slate-100/70 dark:hover:bg-zinc-800/80"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Radio value={res.value} className="font-bold text-slate-900 dark:text-zinc-100">
                          {res.title}
                        </Radio>
                        <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 pl-6">
                          {res.desc}
                        </div>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </Radio.Group>
        </Form.Item>

        {/* Residency Change Details */}
        {residencyChanged && (
          <Alert
            type="warning"
            showIcon
            message="Residency Status Review Required"
            description="Notice: Changes in tax residency during the financial year affect your tax-free threshold and CGT asset rules. Our accountants will conduct a detailed residency review."
            className="rounded-xl border-amber-200 bg-amber-50 dark:bg-amber-950/40 text-slate-800 dark:text-zinc-200"
          />
        )}
      </div>

      {/* Spouse Information (FAM-001 to FAM-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <Form.Item
          name="hasSpouse"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Did you have a spouse / de facto partner during the financial year?</span>}
          rules={[{ required: true, message: "Please select an option." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="No">No</Radio>
            <Radio value="Yes">Yes</Radio>
          </Radio.Group>
        </Form.Item>

        {hasSpouse === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <TeamOutlined className="text-brand-primary" /> Spouse Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item
                name="spouseName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Spouse Full Name</span>}
                rules={[{ required: true, message: "Please enter spouse name." }]}
              >
                <Input placeholder="Spouse full legal name" size="large" className="rounded-xl" />
              </Form.Item>

              <Form.Item
                name="spouseDob"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Spouse Date of Birth</span>}
                rules={[{ required: true, message: "Please select DOB." }]}
              >
                <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" size="large" className="w-full rounded-xl" />
              </Form.Item>

              <Form.Item
                name="spouseIncome"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Spouse Taxable Income ($)</span>}
              >
                <InputNumber
                  formatter={(v) => `$ ${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(v) => v.replace(/\$\s?|(,*)/g, "")}
                  placeholder="Estimated taxable income"
                  size="large"
                  className="w-full rounded-xl"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="prepareSpouseReturn"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Would you like Financially Up to prepare your spouse's tax return as well?</span>}
              className="mb-0"
            >
              <Radio.Group>
                <Radio value="Yes">Yes, prepare spouse tax return</Radio>
                <Radio value="No">No, spouse lodges separately</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        )}
      </div>

      {/* Dependant Children (FAM-006 & FAM-007) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <Form.Item
          name="hasDependants"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Did you have any dependent children during the financial year?</span>}
          rules={[{ required: true, message: "Please select an option." }]}
          className="mb-0"
        >
          <Radio.Group>
            <Radio value="No">No</Radio>
            <Radio value="Yes">Yes</Radio>
          </Radio.Group>
        </Form.Item>

        {hasDependants === "Yes" && (
          <Form.Item
            name="dependantCount"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Number of Dependent Children</span>}
            rules={[{ required: true, message: "Enter number of dependants." }]}
            className="mb-0 max-w-xs"
          >
            <InputNumber min={1} max={15} size="large" className="w-full rounded-xl" placeholder="Count" />
          </Form.Item>
        )}
      </div>
    </div>
  );
}
