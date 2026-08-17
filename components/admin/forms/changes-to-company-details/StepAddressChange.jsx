"use client";

import React from "react";
import { Tag } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function StepAddressChange({ stepNumber, totalSteps }) {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step {stepNumber} of {totalSteps}
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Address Updates
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Change of Registered Office / Principal Address
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide the updated address details and date of effect for ASIC
          records.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <EnvironmentOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            New Registered Address
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="housenumber"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Unit / House Number
              </span>
            }
            placeholder="e.g. Level 5 or 200"
            reqMsg="House number is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="text"
            name="street"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Street Name
              </span>
            }
            placeholder="e.g. George Street"
            reqMsg="Street is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <AntInput
            type="text"
            name="suburb"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Suburb
              </span>
            }
            placeholder="e.g. Sydney"
            reqMsg="Suburb is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="text"
            name="postcode"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Postcode
              </span>
            }
            placeholder="e.g. 2000"
            maxLength={4}
            pattern={/^\d{4}$/}
            patternMsg="Must be 4 digits"
            reqMsg="Postcode is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="select"
            name="state"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                State
              </span>
            }
            options={AUSTRALIAN_STATES}
            emptyFirstVal="- Select State -"
            reqMsg="State is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <AntInput
            type="datepicker"
            name="DateOfChangeAddress"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Effective Date of Address Change
              </span>
            }
            format="DD/MM/YYYY"
            reqMsg="Date of change is required"
            preIconAnt={<CalendarOutlined className="text-slate-400" />}
            size="large"
            className="w-full rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="radio"
            name="DoesCompanyOccupy"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Does the company occupy this address?
              </span>
            }
            reqMsg="Occupancy question is required"
            radioOptions={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
