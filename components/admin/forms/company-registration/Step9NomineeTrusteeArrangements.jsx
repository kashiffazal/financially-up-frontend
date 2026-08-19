"use client";

import React from "react";
import { Tag, Form } from "antd";
import {
  SafetyCertificateOutlined,
  UploadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";
import NomineeArrangementTermsTrigger from "./NomineeArrangementTermsTrigger";

export default function Step9NomineeTrusteeArrangements({ form }) {
  const isDirectorActingForOthers = Form.useWatch("isDirectorActingForOthers", form);
  const isNomineeShareholder = Form.useWatch("isNomineeShareholder", form);
  const isTrusteeInvolved = Form.useWatch("isTrusteeInvolved", form);
  const hasLegalAdvice = Form.useWatch("hasLegalAdvice", form);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 9 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Nominee & Trustee Structures
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Nominee, Arranged Role-Holder & Trustee Arrangements
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Disclose any nominee shareholders, arranged directors, bare trusts, or corporate trustee arrangements.
        </p>

        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
          <NomineeArrangementTermsTrigger />
        </div>
      </div>

      {/* Nominee & Trustee Questions */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              <SafetyCertificateOutlined className="text-brand-primary text-sm" /> Arranged Role-Holder & Trust Questions
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <AntInput
            type="radio"
            name="isDirectorActingForOthers"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">1. Is any proposed director or secretary acting on behalf of or under instructions from someone else?</span>}
            reqMsg="Please answer Question 1"
            radioOptions={[{ value: "No", label: "No (Acting independently as genuine officer)" }, { value: "Yes", label: "Yes (Nominee / instructed director)" }]}
            containerClassName="!mb-4"
          />

          {isDirectorActingForOthers === "Yes" && (
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-zinc-800/80 space-y-3">
              <AntInput
                type="text"
                name="directorNominatorName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Nominator / Instructing Person Legal Name *</span>}
                placeholder="Full name of person directing officer"
                reqMsg="Nominator name is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>
          )}

          <AntInput
            type="radio"
            name="isNomineeShareholder"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">2. Is any proposed shareholder a nominee shareholder holding shares for another beneficial owner?</span>}
            reqMsg="Please answer Question 2"
            radioOptions={[{ value: "No", label: "No (Direct beneficial owners)" }, { value: "Yes", label: "Yes (Nominee shareholder structure)" }]}
            containerClassName="!mb-4"
          />

          {isNomineeShareholder === "Yes" && (
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-zinc-800/80 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <AntInput
                    type="text"
                    name="nomineeNominator"
                    label={<span className="font-bold text-slate-800 dark:text-zinc-200">Nominator Full Legal Name *</span>}
                    placeholder="e.g. John Alexander Smith"
                    reqMsg="Nominator is required"
                    size="large"
                    className="rounded-xl"
                    containerClassName="!mb-0"
                  />

                  <AntInput
                    type="text"
                    name="nomineeBeneficialOwner"
                    label={<span className="font-bold text-slate-800 dark:text-zinc-200">Ultimate Beneficial Owner *</span>}
                    placeholder="e.g. Smith Family Trust"
                    reqMsg="Beneficial owner is required"
                    size="large"
                    className="rounded-xl"
                    containerClassName="!mb-4"
                  />
                </div>
                <AntFileUpload
                  name="nomineeAgreementUpload"
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Nominee Agreement / Declaration of Trust (PDF)</span>}
                  heading="Click or drag nominee agreement"
                  para="Signed Declaration of Trust or Nominee Agreement"
                  maxCount={1}
                  noRequired={true}
                  icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
                  containerClassName="!mb-0"
                />
              </div>


            </div>
          )}

          <AntInput
            type="radio"
            name="isTrusteeInvolved"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">3. Is a corporate trustee, bare trustee, SMSF trustee or other trust role involved?</span>}
            reqMsg="Please answer Question 3"
            radioOptions={[{ value: "No", label: "No (Standard commercial company)" }, { value: "Yes", label: "Yes (Acting as corporate trustee)" }]}
            containerClassName="!mb-4"
          />

          {isTrusteeInvolved === "Yes" && (
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-zinc-800/80 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <AntInput
                    type="text"
                    name="trustName"
                    label={<span className="font-bold text-slate-800 dark:text-zinc-200">Trust / SMSF Legal Name *</span>}
                    placeholder="e.g. The Harrison Family Trust"
                    reqMsg="Trust name is required"
                    size="large"
                    className="rounded-xl"
                    containerClassName="!mb-4"
                  />

                  <AntInput
                    type="text"
                    name="trustSettlor"
                    label={<span className="font-bold text-slate-800 dark:text-zinc-200">Trust Settlor / Founder *</span>}
                    placeholder="e.g. Independent Accountant"
                    reqMsg="Settlor is required"
                    size="large"
                    className="rounded-xl"
                    containerClassName="!mb-0"
                  />
                </div>
                <AntFileUpload
                  name="trustDeedUpload"
                  label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Trust Deed / SMSF Deed Extract (PDF)</span>}
                  heading="Click or drag Trust Deed"
                  para="Full Trust Deed or Schedule (Max 10MB)"
                  maxCount={1}
                  noRequired={true}
                  icon={<FilePdfOutlined className="text-3xl text-brand-primary mb-2" />}
                  containerClassName="!mb-0"
                />
              </div>
            </div>
          )}

          <AntInput
            type="radio"
            name="hasLegalAdvice"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">4. Has independent legal advice been obtained for this structure?</span>}
            reqMsg="Please answer legal advice question"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-0"
          />

          {hasLegalAdvice === "Yes" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 mt-3 border-t border-slate-200/60 dark:border-zinc-800">
              <AntInput
                type="text"
                name="legalAdviserName"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Adviser / Law Firm Name *</span>}
                placeholder="e.g. King & Wood Lawyers"
                reqMsg="Adviser name is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />

              <AntInput
                type="text"
                name="legalAdviceSummary"
                label={<span className="font-bold text-slate-800 dark:text-zinc-200">Summary of Advice *</span>}
                placeholder="e.g. Structure reviewed and compliant with Corporations Act"
                reqMsg="Advice summary is required"
                size="large"
                className="rounded-xl"
                containerClassName="!mb-0"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
