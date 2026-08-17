"use client";

import React from "react";
import { Tag } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step2ApplicantAddress() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 2 of 2
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Applicant & Residential Address
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Applicant Identity & Physical Address
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide the registered holder / applicant personal information and
          address.
        </p>
      </div>

      {/* Grid: Applicant Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="Name"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Applicant Full Legal Name
            </span>
          }
          placeholder="e.g. Jonathan Alexander Smith"
          reqMsg="Full legal name is required"
          preIconAnt={<UserOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="datepicker"
          name="DateOfBirth"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Date of Birth
            </span>
          }
          format="DD/MM/YYYY"
          disabledNextDate={true}
          reqMsg="Date of Birth is required"
          preIconAnt={<CalendarOutlined className="text-slate-400" />}
          size="large"
          className="w-full rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <AntInput
        type="text"
        name="phone"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Direct Contact Mobile / Phone
          </span>
        }
        placeholder="e.g. 0412 345 678"
        reqMsg="Direct phone number is required"
        preIconAnt={<PhoneOutlined className="text-slate-400" />}
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      {/* Address Details Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <EnvironmentOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Applicant Residential / Service Address
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="housenumber"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                House / Unit Number
              </span>
            }
            placeholder="e.g. 14A or 52"
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
      </div>
    </div>
  );
}
