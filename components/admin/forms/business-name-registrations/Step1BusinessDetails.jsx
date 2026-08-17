"use client";

import React from "react";
import { Tag } from "antd";
import {
  ShopOutlined,
  IdcardOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step1BusinessDetails() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 2
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Proposed Business & ABN
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Business Name & Entity Identification
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Enter your desired Australian business name and holding ABN details.
        </p>
      </div>

      {/* Grid: Proposed Name & ABN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="businessProposeName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Proposed Business Name
            </span>
          }
          placeholder="e.g. Apex Digital Marketing"
          reqMsg="Proposed Business Name is required"
          preIconAnt={<ShopOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="ABN"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Holding ABN (11 Digits - If Available)
            </span>
          }
          placeholder="e.g. 12345678901"
          noRequired={true}
          maxLength={11}
          pattern={/^(\d{11})$/}
          patternMsg="ABN must be exactly 11 numeric digits"
          preIconAnt={<IdcardOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <AntInput
        type="text"
        name="BusinessRegAddress"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Principal Business Registration Address
          </span>
        }
        placeholder="e.g. Level 4, 100 Miller Street, North Sydney NSW 2060"
        reqMsg="Business registration address is required"
        preIconAnt={<EnvironmentOutlined className="text-slate-400" />}
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      {/* Contact Details Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <PhoneOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Business Contact Details
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="PhoneNumber"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Business Contact Phone Number
              </span>
            }
            placeholder="e.g. 02 9876 5432 or 0412 345 678"
            reqMsg="Phone number is required"
            preIconAnt={<PhoneOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="email"
            name="email"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Business Email Address
              </span>
            }
            placeholder="e.g. contact@business.com.au"
            reqMsg="Email address is required"
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
