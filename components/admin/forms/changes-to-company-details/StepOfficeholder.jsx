"use client";

import React from "react";
import { Tag } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function StepOfficeholder({ stepNumber, totalSteps }) {
  return (
    <div className="space-y-3.5 animate-fadeInIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step {stepNumber} of {totalSteps}
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Director / Officeholder Changes
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Appoint or Remove Company Officeholder
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify action, officeholder role, personal identity details, and
          effective change date.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="radio"
            name="appointmentRemoval"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Action Type
              </span>
            }
            reqMsg="Please select action"
            radioOptions={[
              { value: "Appoint", label: "Appoint New Officeholder" },
              { value: "Remove", label: "Cease / Remove Officeholder" },
            ]}
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="officeHolder"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Role / Officeholder Type
              </span>
            }
            options={[
              "Director",
              "Secretary",
              "Both Director & Secretary",
              "Public Officer",
            ]}
            emptyFirstVal="- Select Role -"
            reqMsg="Officeholder role is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="text"
            name="firstName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Given Names (First Name)
              </span>
            }
            placeholder="First Name"
            reqMsg="Given names are required"
            preIconAnt={<UserOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="lastName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Family Name (Surname)
              </span>
            }
            placeholder="Last Name"
            reqMsg="Family name is required"
            preIconAnt={<UserOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
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
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="dateOfChange"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Effective Date of Change
              </span>
            }
            format="DD/MM/YYYY"
            reqMsg="Effective date is required"
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
