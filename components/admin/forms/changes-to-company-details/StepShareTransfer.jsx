"use client";

import React from "react";
import { Tag } from "antd";
import { UserOutlined, CalendarOutlined, SwapOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function StepShareTransfer({ stepNumber, totalSteps }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step {stepNumber} of {totalSteps}
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Share Transfer & Allocation
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Company Share Transfer & Allocation Details
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Specify transferor (seller), transferee (buyer), share class, number of shares, and consideration.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="transferorName"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Transferor (Existing Shareholder) Full Name</span>}
            placeholder="e.g. John Alexander Smith"
            reqMsg="Transferor name is required"
            preIconAnt={<UserOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="transfereeName"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Transferee (New Shareholder) Full Name</span>}
            placeholder="e.g. Mary Jane Watson"
            reqMsg="Transferee name is required"
            preIconAnt={<UserOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <AntInput
            type="select"
            name="shareClass"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Share Class</span>}
            options={["Ordinary (ORD)", "Class A", "Class B", "Preference Shares"]}
            emptyFirstVal="- Select Class -"
            reqMsg="Share class is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="numberOfShares"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Number of Shares</span>}
            placeholder="e.g. 50"
            reqMsg="Number of shares is required"
            preIconAnt={<SwapOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="datepicker"
            name="dateOfTransfer"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Date of Share Transfer</span>}
            format="DD/MM/YYYY"
            reqMsg="Transfer date is required"
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
