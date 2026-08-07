"use client";

import React from "react";
import { Form, Alert, Tag } from "antd";
import {
  GlobalOutlined,
  TeamOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";

const VISA_STATUS_OPTIONS = [
  "Permanent Resident (PR)",
  "Temporary Skill Shortage (Subclass 482 / 457)",
  "Working Holiday (Subclass 417 / 462)",
  "Student Visa (Subclass 500)",
  "Partner / Spouse Visa (Subclass 820 / 309)",
  "Visitor / Tourist Visa",
  "Other Temporary Visa",
];

const RESIDENCY_OPTIONS = [
  {
    value: "Australian Resident",
    title: "Australian Resident for Tax Purposes",
    desc: "Lived in Australia continuously or met 183-day test",
  },
  {
    value: "Foreign Resident",
    title: "Foreign Resident for Tax Purposes",
    desc: "Non-resident for tax purposes; taxed on AU-sourced income only",
  },
  {
    value: "Became Resident",
    title: "Became Resident During Year",
    desc: "Moved to Australia permanently during the financial year",
  },
  {
    value: "Ceased Residence",
    title: "Ceased Australian Residence",
    desc: "Departed Australia permanently during the financial year",
  },
  {
    value: "Unsure",
    title: "Unsure / Need Residency Determination",
    desc: "Our tax accountants will evaluate your tax residency status",
  },
];

export default function Step3ResidencyFamily({ form }) {
  const isAustralianCitizen = Form.useWatch("isAustralianCitizen", form);
  const taxResidency = Form.useWatch("taxResidency", form);
  const hasSpouse = Form.useWatch("hasSpouse", form);
  const hasDependants = Form.useWatch("hasDependants", form);

  const residencyChanged =
    taxResidency === "Became Resident" ||
    taxResidency === "Ceased Residence" ||
    taxResidency === "Unsure";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 3 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Residency & Family
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Tax Residency & Family Profile
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Your tax residency status determines tax rates, tax offsets, and
          Medicare levy liabilities.
        </p>
      </div>

      {/* Citizenship & Residency Section */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
        {/* RES-001: Australian Citizen */}
        <AntInput
          type="radio"
          name="isAustralianCitizen"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Are you an Australian citizen?
            </span>
          }
          radioOptions={[
            { value: "Yes", label: "Yes, Australian Citizen" },
            { value: "No", label: "No, Foreign Citizen / Permanent Resident" },
          ]}
          reqMsg="Please select your citizenship status."
          containerClassName="mb-0"
        />

        {/* Conditional Visa Questions when Citizen = No (RES-003 to RES-008) */}
        {isAustralianCitizen === "No" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <GlobalOutlined className="text-brand-primary" /> Citizenship &
              Visa Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AntInput
                name="citizenshipCountry"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Country of Citizenship
                  </span>
                }
                placeholder="e.g. United Kingdom, New Zealand, India"
                size="large"
                className="rounded-xl"
                reqMsg="Please select your country of citizenship."
              />

              <AntInput
                type="select"
                name="visaStatus"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Visa Status
                  </span>
                }
                options={VISA_STATUS_OPTIONS}
                placeholder="Select Visa Type"
                size="large"
                className="rounded-xl"
                reqMsg="Please select your visa status."
              />

              <AntInput
                name="visaSubclass"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Visa Subclass Number
                  </span>
                }
                placeholder="e.g. 500, 482, 820"
                size="large"
                className="rounded-xl"
                reqMsg="Please enter visa subclass."
              />

              <AntInput
                type="datepicker"
                name="visaExpiry"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Visa Expiry Date
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                reqMsg="Please select visa expiry date."
              />

              <AntInput
                type="datepicker"
                name="arrivalDate"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    First Arrival Date in Australia
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                reqMsg="Please select arrival date."
              />

              <AntFileUpload
                name="visaEvidence"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Upload Visa Grant Letter / Evidence
                  </span>
                }
                icon={<UploadOutlined className="text-brand-primary text-xl" />}
                heading="Upload Visa Evidence (PDF/JPG/PNG)"
                reqMsg="Please upload visa evidence."
                maxCount={1}
              />
            </div>
          </div>
        )}

        {/* RES-002: Australian Tax Residency */}
        <AntInput
          type="radio"
          name="taxResidency"
          designVariant="card"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Australian Tax Residency Status (for the tax year)
            </span>
          }
          radioOptions={RESIDENCY_OPTIONS}
          reqMsg="Please select your tax residency."
          gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-3"
          containerClassName="mb-0"
        />

        {/* Residency Change Details (RES-009 to RES-012) */}
        {residencyChanged && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <Alert
              type="warning"
              showIcon
              title="Residency Status Review Required"
              description="Notice: Changes in tax residency during the financial year affect your tax-free threshold and CGT asset rules. Our accountants will conduct a detailed residency review."
              className="rounded-xl border-amber-200 bg-amber-50 dark:bg-amber-950/40 text-slate-800 dark:text-zinc-200 !mb-4"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AntInput
                type="datepicker"
                name="residentArrival"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Date Became Australian Resident
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                noRequired={true}
              />

              <AntInput
                type="datepicker"
                name="residentDeparture"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Date Ceased Australian Residency
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                noRequired={true}
              />
            </div>

            <AntInput
              name="foreignCountry"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Foreign Country of Residence
                </span>
              }
              placeholder="Country during non-residency period"
              size="large"
              className="rounded-xl"
              noRequired={true}
            />

            <AntInput
              type="textarea"
              name="foreignInfo"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Describe Overseas Income & Foreign Assets
                </span>
              }
              placeholder="Provide details regarding foreign salary, offshore bank accounts, or overseas property..."
              rows={3}
              className="rounded-xl"
              noRequired={true}
            />
          </div>
        )}
      </div>

      {/* Spouse Information (FAM-001 to FAM-005) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="hasSpouse"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Did you have a spouse / de facto partner during the financial
              year?
            </span>
          }
          radioOptions={[
            { value: "No", label: "No" },
            { value: "Yes", label: "Yes" },
          ]}
          reqMsg="Please select an option."
          containerClassName="!mb-0"
        />

        {hasSpouse === "Yes" && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <TeamOutlined className="text-brand-primary" /> Spouse Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AntInput
                name="spouseName"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Spouse Full Name
                  </span>
                }
                placeholder="Spouse full legal name"
                size="large"
                className="rounded-xl"
                reqMsg="Please enter spouse name."
              />

              <AntInput
                type="datepicker"
                name="spouseDob"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Spouse Date of Birth
                  </span>
                }
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                size="large"
                className="w-full rounded-xl"
                reqMsg="Please select DOB."
              />

              <AntInput
                type="inputNumber"
                name="spouseIncome"
                label={
                  <span className="font-bold text-slate-800 dark:text-zinc-200">
                    Spouse Taxable Income ($)
                  </span>
                }
                placeholder="Estimated taxable income"
                numPreFix="$"
                comma={true}
                size="large"
                className="w-full rounded-xl"
                noRequired={true}
              />
            </div>

            <AntInput
              type="radio"
              name="prepareSpouseReturn"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Would you like Financially Up to prepare your spouse's tax
                  return as well?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes, prepare spouse tax return" },
                { value: "No", label: "No, spouse lodges separately" },
              ]}
              noRequired={true}
              containerClassName="mb-0"
            />
          </div>
        )}
      </div>

      {/* Dependant Children (FAM-006 & FAM-007) */}
      <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <AntInput
          type="radio"
          name="hasDependants"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Did you have any dependent children during the financial year?
            </span>
          }
          radioOptions={[
            { value: "No", label: "No" },
            { value: "Yes", label: "Yes" },
          ]}
          reqMsg="Please select an option."
          containerClassName="!mb-0"
        />

        {hasDependants === "Yes" && (
          <AntInput
            type="number"
            name="dependantCount"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Number of Dependent Children
              </span>
            }
            placeholder="Count"
            min={1}
            max={15}
            step={1}
            size="large"
            className="w-full rounded-xl"
            reqMsg="Enter number of dependants."
            containerClassName="mb-0 max-w-xs"
          />
        )}
      </div>
    </div>
  );
}
