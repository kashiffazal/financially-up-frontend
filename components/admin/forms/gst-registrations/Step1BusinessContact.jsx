"use client";

import React from "react";
import { Tag } from "antd";
import {
  IdcardOutlined,
  ShopOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step1BusinessContact() {
  return (
    <div className="space-y-3.5 animate-fadeInIn">
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
            Entity & Identification
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Business & Contact Details
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide your Australian business identifiers and primary contact
          information.
        </p>
      </div>

      {/* Grid: Business Structure & Identifiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="select"
          name="businessStructure"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Business Structure
            </span>
          }
          options={["Sole Trader", "Company (Pty Ltd)", "Trust", "Partnership"]}
          emptyFirstVal="- Select Structure -"
          reqMsg="Please select your business structure"
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="ABN"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Australian Business Number (ABN)
            </span>
          }
          placeholder="e.g. 12345678901"
          maxLength={11}
          pattern={/^(\d{11})$/}
          patternMsg="ABN must be exactly 11 numeric digits"
          reqMsg="ABN is required"
          preIconAnt={<IdcardOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="legalName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Legal Business / Entity Name
            </span>
          }
          placeholder="e.g. Smith Enterprises Pty Ltd"
          reqMsg="Legal Business Name is required"
          preIconAnt={<ShopOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="businessName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Trading Name (If different)
            </span>
          }
          placeholder="e.g. Apex Consulting"
          noRequired={true}
          preIconAnt={<ShopOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      {/* Contact Person Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <UserOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Authorised Contact Officer
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="contactName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Contact Full Name
              </span>
            }
            placeholder="e.g. Jonathan Alexander Smith"
            reqMsg="Contact name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

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
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <AntInput
            type="text"
            name="phone"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Direct Contact Phone / Mobile
              </span>
            }
            placeholder="e.g. 0412 345 678"
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
                Contact Email Address
              </span>
            }
            placeholder="e.g. accounts@business.com.au"
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
