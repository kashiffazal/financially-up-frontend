"use client";

import React from "react";
import { Tag, Form } from "antd";
import {
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  UploadOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";
import AddressServiceTermsTrigger from "./AddressServiceTermsTrigger";

const AUSTRALIAN_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function Step3AddressesService({ form }) {
  const companyOccupies = Form.useWatch("companyOccupiesRegisteredOffice", form);
  const samePrincipalAddress = Form.useWatch("samePrincipalAddress", form);
  const provideRegisteredAddress = Form.useWatch("provideRegisteredOfficeAddress", form);
  const providePrincipalAddress = Form.useWatch("providePrincipalPlaceAddress", form);

  const isAddressServiceRequested =
    provideRegisteredAddress === "Yes" || providePrincipalAddress === "Yes";

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 3 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Addresses & Office Services
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Company Addresses & Address Service Terms
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Physical registered office address, principal place of business, and optional Financially Up address facility (Schedule C).
        </p>

        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
          <AddressServiceTermsTrigger />
        </div>
      </div>

      {/* Registered Office */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              <EnvironmentOutlined className="text-brand-primary text-sm" /> Registered Office Address (Physical Street Address - No PO Box) *
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="text"
            name="regOfficeHouseNumber"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Unit / House / Level Number *</span>}
            placeholder="e.g. Level 4, Suite 10"
            reqMsg="House/unit number is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="regOfficeStreet"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Street Name *</span>}
            placeholder="e.g. 100 Walker Street"
            reqMsg="Street name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <AntInput
            type="text"
            name="regOfficeSuburb"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Suburb / City *</span>}
            placeholder="e.g. North Sydney"
            reqMsg="Suburb is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="regOfficePostcode"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Postcode *</span>}
            placeholder="e.g. 2060"
            maxLength={4}
            pattern={/^\d{4}$/}
            patternMsg="Must be 4 numeric digits"
            reqMsg="Postcode is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="regOfficeState"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">State *</span>}
            options={AUSTRALIAN_STATES}
            emptyFirstVal="- Select State -"
            reqMsg="State is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-800">
          <AntInput
            type="radio"
            name="companyOccupiesRegisteredOffice"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Does the proposed company occupy this registered office?</span>}
            reqMsg="Occupancy question is required"
            radioOptions={[
              { value: "Yes", label: "Yes, company will occupy premises" },
              { value: "No", label: "No, premises occupied by third party / accountant" },
            ]}
            containerClassName="!mb-0"
          />
        </div>

        {companyOccupies === "No" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/60 dark:border-zinc-800">
            <AntInput
              type="text"
              name="occupierName"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Occupier Legal Name *</span>}
              placeholder="e.g. Financially Up Pty Ltd or Landlord Name"
              reqMsg="Occupier name is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntFileUpload
              name="occupierConsent"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Written Occupier Consent Letter</span>}
              heading="Click or drag occupier consent"
              para="Signed consent letter to use premises as registered office"
              maxCount={1}
              noRequired={true}
              icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
            />
          </div>
        )}
      </div>

      {/* Principal Place of Business */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              Principal Place of Business (PPOB)
            </h3>
          </div>
        </div>

        <AntInput
          type="radio"
          name="samePrincipalAddress"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Is Principal Place of Business the same as Registered Office?</span>}
          reqMsg="PPOB preference is required"
          radioOptions={[
            { value: "Yes", label: "Yes (Same as Registered Office)" },
            { value: "No", label: "No (Separate physical operating address)" },
          ]}
          containerClassName="!mb-0"
        />

        {samePrincipalAddress === "No" && (
          <div className="pt-3 mt-2 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AntInput
                type="text"
                name="ppobHouseNumber"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">PPOB House / Unit / Level *</span>}
                placeholder="e.g. Unit 5"
                reqMsg="House number is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name="ppobStreet"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">PPOB Street Name *</span>}
                placeholder="e.g. 50 Miller Street"
                reqMsg="Street name is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <AntInput
                type="text"
                name="ppobSuburb"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Suburb *</span>}
                placeholder="e.g. Sydney"
                reqMsg="Suburb is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name="ppobPostcode"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Postcode *</span>}
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
                name="ppobState"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">State *</span>}
                options={AUSTRALIAN_STATES}
                emptyFirstVal="- Select State -"
                reqMsg="State is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Financially Up Address Service Questions (Schedule C) */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
             <SafetyCertificateOutlined className="text-brand-primary text-sm" /> Financially Up Address Facility Request (Schedule C)
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="radio"
            name="provideRegisteredOfficeAddress"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Will Financially Up provide the Registered Office address?</span>}
            reqMsg="Please select address service preference"
            radioOptions={[
              { value: "No", label: "No (Using own address)" },
              { value: "Yes", label: "Yes (Use Financially Up Registered Office)" },
            ]}
            containerClassName="!mb-0"
          />

          <AntInput
            type="radio"
            name="providePrincipalPlaceAddress"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Will Financially Up provide the Principal Place of Business?</span>}
            reqMsg="Please select PPOB preference"
            radioOptions={[
              { value: "No", label: "No (Own operating premises)" },
              { value: "Yes", label: "Yes (Use Financially Up PPOB)" },
            ]}
            containerClassName="!mb-0"
          />
        </div>

        {isAddressServiceRequested && (
          <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-800 space-y-4">
            <AntInput
              type="textarea"
              name="addressServiceCommercialReason"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Commercial Justification for Address Service *</span>}
              placeholder="Explain why the company is utilizing Financially Up address facilities rather than commercial physical lease."
              reqMsg="Commercial reason is required"
              rows={2}
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            {/* Schedule C - 18.1 Authorised Recipients */}
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block">
                Schedule C: Nominated Authorised Recipient for ASIC / ATO Mail
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <AntInput
                  type="text"
                  name="authorisedRecipientName"
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Recipient Full Name *</span>}
                  placeholder="e.g. Jonathan Alexander Smith"
                  reqMsg="Recipient name is required"
                  preIconAnt={<UserOutlined className="text-slate-400" />}
                  size="large"
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />

                <AntInput
                  type="email"
                  name="authorisedRecipientEmail"
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Recipient Email *</span>}
                  placeholder="e.g. mail@example.com"
                  reqMsg="Recipient email is required"
                  preIconAnt={<MailOutlined className="text-slate-400" />}
                  size="large"
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />

                <AntInput
                  type="text"
                  name="authorisedRecipientPhone"
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Recipient Phone *</span>}
                  placeholder="e.g. 0412 345 678"
                  reqMsg="Recipient phone is required"
                  preIconAnt={<PhoneOutlined className="text-slate-400" />}
                  size="large"
                  className="rounded-xl"
                  containerClassName="!mb-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
