"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step3MembersInfo() {
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
            Fund Members & Trustees
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Fund Members & Trustee Directors
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Configure primary fund member details and director information.
        </p>
      </div>

      <AntInput
        type="select"
        name="memberCount"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Total Number of SMSF Members
          </span>
        }
        options={[
          "1 Member (Single Member Fund)",
          "2 Members (Couple / Family)",
          "3 Members",
          "4 Members",
          "5 Members",
          "6 Members (Maximum)",
        ]}
        emptyFirstVal="- Select Member Count -"
        reqMsg="Please select number of members"
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
          Primary Member & Trustee (Member 1)
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="m1FirstName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                First Name
              </span>
            }
            placeholder="First Name"
            reqMsg="First name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="text"
            name="m1LastName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Last Name
              </span>
            }
            placeholder="Last Name"
            reqMsg="Last name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <AntInput
            type="select"
            name="m1Gender"
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
            containerClassName="!mb-0"
          />
          <AntInput
            type="datepicker"
            name="m1Dob"
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
            containerClassName="!mb-0"
          />
          <AntInput
            type="text"
            name="m1Tfn"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Tax File Number (TFN)
              </span>
            }
            placeholder="e.g. 123456789"
            maxLength={9}
            reqMsg="TFN is required for super fund registration"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="text"
            name="m1Phone"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Mobile Phone
              </span>
            }
            placeholder="e.g. 0412 345 678"
            reqMsg="Phone is required"
            preIconAnt={<PhoneOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
          <AntInput
            type="email"
            name="m1Email"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Email Address
              </span>
            }
            placeholder="e.g. member@example.com"
            reqMsg="Email is required"
            preIconAnt={<MailOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
