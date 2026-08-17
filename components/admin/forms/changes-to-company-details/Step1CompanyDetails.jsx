"use client";

import React from "react";
import { Tag, Checkbox } from "antd";
import {
  BankOutlined,
  IdcardOutlined,
  EnvironmentOutlined,
  UserOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const CHANGE_OPTIONS = [
  {
    key: "Change of Address",
    title: "Change of Address",
    description:
      "Update Registered Office or Principal Place of Business Address with ASIC",
    icon: <EnvironmentOutlined className="text-xl" />,
  },
  {
    key: "Appoint / Remove Officeholder",
    title: "Appoint / Remove Officeholder",
    description:
      "Appoint new Company Directors, Secretaries or notify ASIC of resignations",
    icon: <UserOutlined className="text-xl" />,
  },
  {
    key: "Share Transfer",
    title: "Share Transfer & Allocation",
    description: "Transfer company shares between existing or new shareholders",
    icon: <SwapOutlined className="text-xl" />,
  },
];

export default function Step1CompanyDetails({
  form,
  selectedChanges,
  setSelectedChanges,
}) {
  const handleToggleChange = (changeKey) => {
    let updated;
    if (selectedChanges.includes(changeKey)) {
      updated = selectedChanges.filter((item) => item !== changeKey);
    } else {
      updated = [...selectedChanges, changeKey];
    }
    setSelectedChanges(updated);
    form.setFieldsValue({ changeType: updated });
  };

  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Company Identifiers & Select Changes
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Company Identification & Selected ASIC Changes
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Enter company legal details and choose the changes to lodge with ASIC
          (Form 484).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="CompanyName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Company Legal Name
            </span>
          }
          placeholder="e.g. Acme Holdings Pty Ltd"
          reqMsg="Company name is required"
          preIconAnt={<BankOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="ACN"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Australian Company Number (ACN)
            </span>
          }
          placeholder="e.g. 123456789"
          maxLength={9}
          pattern={/^(\d{9})$/}
          patternMsg="ACN must be exactly 9 digits"
          reqMsg="ACN is required"
          preIconAnt={<IdcardOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="space-y-3 pt-2">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block">
          Select ASIC Changes to Lodge (Multi-Select)
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CHANGE_OPTIONS.map((opt) => {
            const isChecked = selectedChanges.includes(opt.key);
            return (
              <div
                key={opt.key}
                onClick={() => handleToggleChange(opt.key)}
                className={`group relative p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                  isChecked
                    ? "bg-brand-primary-soft/40 dark:bg-emerald-950/40 border-brand-primary shadow-sm scale-[1.01]"
                    : "bg-slate-50/60 dark:bg-zinc-800/50 border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-primary/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isChecked
                        ? "bg-brand-primary text-white"
                        : "bg-slate-200/80 dark:bg-zinc-700 text-slate-600 dark:text-zinc-300 group-hover:text-brand-primary"
                    }`}
                  >
                    {opt.icon}
                  </div>
                  <Checkbox
                    checked={isChecked}
                    onChange={() => {}}
                    className="pointer-events-none"
                  />
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-zinc-100 leading-snug">
                    {opt.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-1">
                    {opt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
