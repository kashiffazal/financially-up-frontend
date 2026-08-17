"use client";

import React from "react";
import { Tag } from "antd";
import { CalendarOutlined, FileTextOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step3EntityDetails({ selectedCategories = [] }) {
  const isTfnOnly =
    selectedCategories.length === 1 &&
    selectedCategories.includes("Apply Tax File Number (TFN)");

  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 3 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Trading & Activity
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Business & Trading Activity Details
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          {isTfnOnly
            ? "Specify your tax residency status and reason for TFN application."
            : "Specify entity name, main business activity, and trading commencement date."}
        </p>
      </div>

      {selectedCategories.includes("Apply Tax File Number (TFN)") && (
        <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
            TFN Residency & Purpose
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AntInput
              type="select"
              name="residencyStatus"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Australian Tax Residency Status
                </span>
              }
              options={[
                "Australian Resident for Tax Purposes",
                "Foreign Resident / Working Holiday Maker",
                "Temporary Visa Holder (Subclass 482 / 500 / 417 / 462)",
              ]}
              emptyFirstVal="- Select Tax Residency -"
              reqMsg="Residency status is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="select"
              name="tfnReason"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Reason for TFN Application
                </span>
              }
              options={[
                "Starting Employment in Australia",
                "Starting Business / Contracting",
                "Claiming Government Benefits / Superannuation",
                "Opening Australian Bank Account",
              ]}
              emptyFirstVal="- Select Reason -"
              reqMsg="Reason for TFN application is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />
          </div>
        </div>
      )}

      {!isTfnOnly && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AntInput
              type="text"
              name="tradingName"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Trading / Entity Name
                </span>
              }
              placeholder="e.g. Apex Consulting Services"
              reqMsg="Trading / Entity name is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-2"
            />

            <AntInput
              type="datepicker"
              name="commenceDate"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Commencement / Start Date
                </span>
              }
              format="DD/MM/YYYY"
              reqMsg="Business start date is required"
              preIconAnt={<CalendarOutlined className="text-slate-400" />}
              size="large"
              className="w-full rounded-xl"
              containerClassName="!mb-2"
            />
          </div>

          <AntInput
            type="text"
            name="mainBusinessActivity"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Main Business Activity / Services
              </span>
            }
            placeholder="e.g. IT Software Consulting, Construction Carpentry, Uber Driver"
            reqMsg="Main business activity description is required"
            preIconAnt={<FileTextOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-2"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AntInput
              type="select"
              name="industryCategory"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Industry Category
                </span>
              }
              options={[
                "Information Technology & Media",
                "Construction & Trades",
                "Transport, Postal & Warehousing",
                "Professional, Scientific & Technical Services",
                "Retail Trade & E-Commerce",
                "Healthcare & Social Assistance",
                "Accommodation & Food Services",
                "Other Commercial Services",
              ]}
              emptyFirstVal="- Select Industry Category -"
              reqMsg="Industry category is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-2"
            />

            <AntInput
              type="radio"
              name="hasGstRegistration"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Register for GST ($75k+ turnover)?
                </span>
              }
              reqMsg="Please select GST preference"
              radioOptions={[
                { value: "Yes", label: "Yes, register for GST" },
                { value: "No", label: "No GST at this stage" },
              ]}
              containerClassName="!mb-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}
