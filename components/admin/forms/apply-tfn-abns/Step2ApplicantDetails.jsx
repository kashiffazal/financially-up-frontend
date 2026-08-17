"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step2ApplicantDetails() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 2 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Primary Applicant
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Primary Applicant & Identity Information
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Personal details and residential address of the primary applicant.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="firstName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              First Name
            </span>
          }
          placeholder="First Name"
          reqMsg="First name is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
        <AntInput
          type="text"
          name="lastName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Last Name
            </span>
          }
          placeholder="Last Name"
          reqMsg="Last name is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AntInput
          type="select"
          name="gender"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Gender
            </span>
          }
          options={["Male", "Female", "Other"]}
          emptyFirstVal="- Select Gender -"
          reqMsg="Gender is required"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
        <AntInput
          type="datepicker"
          name="dob"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Date of Birth
            </span>
          }
          format="DD/MM/YYYY"
          disabledNextDate={true}
          reqMsg="Date of birth is required"
          preIconAnt={<CalendarOutlined className="text-slate-400" />}
          size="large"
          className="w-full rounded-xl"
          containerClassName="!mb-2"
        />
        <AntInput
          type="text"
          name="phoneNumber"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Phone Number
            </span>
          }
          placeholder="e.g. 0412 345 678"
          reqMsg="Phone number is required"
          preIconAnt={<PhoneOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <AntInput
        type="email"
        name="email"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Email Address
          </span>
        }
        placeholder="e.g. applicant@example.com.au"
        reqMsg="Email is required"
        preIconAnt={<MailOutlined className="text-slate-400" />}
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <EnvironmentOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Residential Address in Australia
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
            placeholder="e.g. 18 or Suite 2"
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
            placeholder="e.g. Victoria Avenue"
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
            placeholder="e.g. Chatswood"
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
            placeholder="e.g. 2067"
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
