"use client";

import React from "react";
import { Tag } from "antd";
import { BankOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step2TrusteeAppointer() {
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
            Trustee, Appointer & Office
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Trustee & Appointer / Settlor Information
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Configure Corporate vs Individual Trustee, Director info, and Settlor
          details.
        </p>
      </div>

      <AntInput
        type="select"
        name="trusteeType"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Trustee Structure Type
          </span>
        }
        options={[
          "Corporate Trustee (Recommended for Asset Protection)",
          "Individual Trustee",
        ]}
        emptyFirstVal="- Select Structure -"
        reqMsg="Trustee structure type is required"
        size="large"
        className="rounded-xl"
        containerClassName="!mb-2"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AntInput
          type="text"
          name="trusteeName"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Trustee Name (Company Name or Full Name)
            </span>
          }
          placeholder="e.g. Harrison Holdings Pty Ltd or David Harrison"
          reqMsg="Trustee name is required"
          preIconAnt={<BankOutlined className="text-slate-400" />}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />

        <AntInput
          type="text"
          name="trusteeAcnAbn"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Trustee ACN / ABN (If Company)
            </span>
          }
          placeholder="e.g. 123456789"
          noRequired={true}
          size="large"
          className="rounded-xl"
          containerClassName="!mb-2"
        />
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
          Appointer (Guardian) & Settlor Details
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="appointerName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Appointer (Ultimate Controller) Full Name
              </span>
            }
            placeholder="e.g. David Harrison"
            reqMsg="Appointer name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="settlorName"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Independent Settlor Full Name
              </span>
            }
            placeholder="e.g. Independent Accountant / Solicitor"
            reqMsg="Settlor name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <EnvironmentOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Principal Trust Place of Business / Address
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
            placeholder="e.g. 35"
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
            placeholder="e.g. Queen Street"
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
            placeholder="e.g. Brisbane"
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
            placeholder="e.g. 4000"
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
