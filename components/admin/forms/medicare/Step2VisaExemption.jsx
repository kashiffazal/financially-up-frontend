"use client";

import React from "react";
import { Tag } from "antd";
import { SafetyCertificateOutlined, CalendarOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step2VisaExemption() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 2 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Visa Subclass & Exemption Dates
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Visa Category & Medicare Exemption Claim Period
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify your visa status and claim dates for Category 3 (Not entitled
          to Medicare).
        </p>
      </div>

      {/* Grid: Visa Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="select"
          name="visaCategory"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Temporary Visa Subclass
            </span>
          }
          options={[
            "Student Visa (Subclass 500)",
            "Temporary Skill Shortage (Subclass 482 / 457)",
            "Working Holiday (Subclass 417 / 462)",
            "Temporary Graduate (Subclass 485)",
            "Visitor / Tourist Visa (Subclass 600)",
            "Bridging Visa (Subclass 010 / 020 / 030)",
            "Other Temporary Visa",
          ]}
          emptyFirstVal="- Select Visa Subclass -"
          reqMsg="Please select your visa category"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="radio"
          name="appliedForPermanentResidence"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Have you applied for Permanent Residency (PR)?
            </span>
          }
          reqMsg="Please indicate if you applied for PR"
          radioOptions={[
            { value: "No", label: "No, never applied for PR" },
            { value: "Yes", label: "Yes, currently lodged PR application" },
          ]}
          containerClassName="!mb-2"
        />
      </div>

      {/* Claim Period Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <SafetyCertificateOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Medicare Levy Exemption Claim Financial Year & Period
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="select"
            name="financialYear"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Financial Year
              </span>
            }
            options={[
              "2025 - 2026",
              "2024 - 2025",
              "2023 - 2024",
              "2022 - 2023",
              "2021 - 2022",
            ]}
            emptyFirstVal="- Select Tax Year -"
            reqMsg="Please select financial year"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="exemptionStartDate"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Exemption From Date
              </span>
            }
            format="DD/MM/YYYY"
            reqMsg="Start date is required"
            preIconAnt={<CalendarOutlined className="text-slate-400" />}
            size="large"
            className="w-full rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="exemptionEndDate"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Exemption To Date
              </span>
            }
            format="DD/MM/YYYY"
            reqMsg="End date is required"
            preIconAnt={<CalendarOutlined className="text-slate-400" />}
            size="large"
            className="w-full rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
