"use client";

import React from "react";
import { Form, Alert, Tag } from "antd";
import { BankOutlined, AuditOutlined, FormOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const FREQUENCY_OPTIONS = [
  { value: "Quarterly", label: "Quarterly (Most Common)" },
  { value: "Monthly", label: "Monthly" },
  { value: "Annual", label: "Annual GST Return" },
];

const BAS_SCOPE_OPTIONS = [
  { value: "Prepare", label: "Prepare & Lodge BAS" },
  { value: "Review GST", label: "Review GST Reconciliations" },
  { value: "Reconcile", label: "Reconcile Accounts" },
  { value: "Correct Records", label: "Bookkeeping & Cleanup" },
  { value: "Lodge Only", label: "Client Prepares, Financially Up Lodges" },
];

export default function Step5BasGstSoleTrader({ form, formData }) {
  const watchedServices = Form.useWatch("services", form);
  const services =
    watchedServices ||
    formData?.services ||
    form.getFieldValue("services") ||
    [];

  const isBasSelected =
    services.includes("Sole Trader BAS") ||
    services.includes("Sole Trader BAS Lodgement");
  const isAbnSelected =
    services.includes("ABN Application") ||
    services.includes("ABN Registration");
  const isGstSelected = services.includes("GST Registration");

  // If none of these services selected in Step 1, show friendly skip message
  if (!isBasSelected && !isAbnSelected && !isGstSelected) {
    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Tag
              color="green"
              className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
            >
              Step 5 of 10
            </Tag>
            <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
              Sole Trader BAS, ABN & GST
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Sole Trader / Business Registration
          </h2>
        </div>

        <Alert
          type="info"
          showIcon
          title="Step 5 Not Required for Your Selected Services"
          description="Based on your selections in Step 1, you did not request Sole Trader BAS, ABN Application, or GST Registration. You can safely click 'Next Step' to continue."
          className="rounded-2xl border-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 text-slate-800 dark:text-zinc-200 p-6"
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 5 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Sole Trader BAS, ABN & GST
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Sole Trader & Business Compliance
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Provide your Sole Trader ABN, GST registration parameters, and
          Business Activity Statement details.
        </p>
      </div>

      {/* BAS SECTION (Visible when Sole Trader BAS selected - BAS-001 to BAS-010) */}
      {isBasSelected && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <AuditOutlined className="text-brand-primary" /> Sole Trader BAS
            Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AntInput
              name="existingAbn"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  11-Digit Sole Trader ABN
                </span>
              }
              placeholder="11 222 333 444"
              size="large"
              className="rounded-xl font-mono"
              rules={[
                { required: true, message: "Please enter your 11-digit ABN." },
                {
                  pattern: /^\d{2}\s?\d{3}\s?\d{3}\s?\d{3}$/,
                  message: "Please enter a valid 11-digit ABN.",
                },
              ]}
            />

            <AntInput
              type="radio"
              name="abnStatus"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  ABN Registration Status
                </span>
              }
              radioOptions={[
                { value: "Existing", label: "Existing ABN" },
                { value: "No ABN", label: "No ABN" },
                {
                  value: "Application Requested",
                  label: "Application Requested",
                },
                { value: "Unsure", label: "Unsure" },
              ]}
              reqMsg="Please select ABN status."
            />

            <AntInput
              type="select"
              name="reportingFrequency"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  BAS Reporting Frequency
                </span>
              }
              options={FREQUENCY_OPTIONS}
              placeholder="Select Frequency"
              size="large"
              className="rounded-xl"
              reqMsg="Please select frequency."
            />

            <AntInput
              type="select"
              name="recordsMaintainedBy"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Records Maintained By
                </span>
              }
              options={["Client", "Bookkeeper", "Accountant"]}
              placeholder="Select Record Keeper"
              size="large"
              className="rounded-xl"
              reqMsg="Please select record maintainer."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <AntInput
              type="radio"
              name="gstStatus"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  GST Status
                </span>
              }
              radioOptions={[
                { value: "Registered", label: "Registered" },
                { value: "Not Registered", label: "Not Registered" },
              ]}
              reqMsg="Select GST status."
            />

            <AntInput
              type="radio"
              name="overdueBas"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Overdue BAS?
                </span>
              }
              radioOptions={[
                { value: "No", label: "No" },
                { value: "Yes", label: "Yes" },
              ]}
              reqMsg="Select option."
            />

            <AntInput
              type="radio"
              name="recordsComplete"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Records Complete?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              reqMsg="Select option."
            />

            <AntInput
              type="radio"
              name="hasPayroll"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  PAYG / Payroll?
                </span>
              }
              radioOptions={[
                { value: "No", label: "No" },
                { value: "Yes", label: "Yes" },
              ]}
              reqMsg="Select option."
            />
          </div>

          <AntInput
            type="checkbox"
            name="basScope"
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Required BAS Work Scope
              </span>
            }
            group={BAS_SCOPE_OPTIONS}
            gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-2"
            noRequired={true}
          />
        </div>
      )}

      {/* ABN APPLICATION SECTION (Visible when ABN Application selected - ABN-001 to ABN-008) */}
      {isAbnSelected && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <FormOutlined className="text-brand-primary" /> ABN Application
            Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AntInput
              type="datepicker"
              name="businessStartDate"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Proposed Business Start Date
                </span>
              }
              format="DD/MM/YYYY"
              size="large"
              className="w-full rounded-xl"
              reqMsg="Select start date."
            />

            <AntInput
              name="businessActivity"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Main Business Activity
                </span>
              }
              placeholder="e.g. IT Consulting, Rideshare, Plumbing"
              size="large"
              className="rounded-xl"
              reqMsg="Enter business activity."
            />

            <AntInput
              name="businessLocation"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Main Business Operating Address / Location
                </span>
              }
              placeholder="e.g. Suburb, State or Registered Address"
              size="large"
              className="rounded-xl"
              reqMsg="Enter business location."
            />

            <AntInput
              type="inputNumber"
              name="expectedTurnover"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Estimated Annual Business Turnover ($)
                </span>
              }
              placeholder="Estimated turnover"
              numPreFix="$"
              comma={true}
              size="large"
              className="w-full rounded-xl"
              reqMsg="Enter estimated turnover."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <AntInput
              type="radio"
              name="profitExpectation"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Expectation of Profit?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              reqMsg="Select option."
            />

            <AntInput
              type="radio"
              name="hasEmployees"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Employees Expected?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              reqMsg="Select option."
            />

            <AntInput
              type="radio"
              name="registerGST"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Register GST with ABN?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              reqMsg="Select option."
            />

            <AntInput
              type="radio"
              name="registerPAYG"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Register PAYG Withholding?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              reqMsg="Select option."
            />
          </div>
        </div>
      )}

      {/* GST REGISTRATION SECTION (Visible when GST Registration selected - GST-001 to GST-010) */}
      {isGstSelected && (
        <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <BankOutlined className="text-brand-primary" /> GST Registration
            Setup
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AntInput
              name="gstAbn"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Existing Sole Trader ABN for GST
                </span>
              }
              placeholder="11 222 333 444"
              size="large"
              className="rounded-xl font-mono"
              reqMsg="Please enter ABN."
              containerClassName="!mb-2"
            />

            <AntInput
              type="datepicker"
              name="gstEffectiveDate"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  GST Registration Effective Date
                </span>
              }
              format="DD/MM/YYYY"
              size="large"
              className="w-full rounded-xl"
              reqMsg="Select effective date."
              containerClassName="!mb-2"
            />

            <AntInput
              type="inputNumber"
              name="gstTurnover"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Expected Annual GST Turnover ($)
                </span>
              }
              placeholder="Expected turnover"
              numPreFix="$"
              comma={true}
              size="large"
              className="w-full rounded-xl"
              reqMsg="Enter GST turnover."
              containerClassName="!mb-2"
            />

            <AntInput
              type="radio"
              name="accountingMethod"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  GST Accounting Basis
                </span>
              }
              radioOptions={[
                { value: "Cash", label: "Cash Basis (Most Small Businesses)" },
                { value: "Non-Cash", label: "Accruals / Non-Cash Basis" },
                { value: "Advise Me", label: "Advise Me" },
              ]}
              reqMsg="Select accounting basis."
              containerClassName="!mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <AntInput
              type="radio"
              name="fuelTaxCredits"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Fuel Tax Credits?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              noRequired={true}
              containerClassName="!mb-0"
            />

            <AntInput
              type="radio"
              name="imports"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Imports Business?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              noRequired={true}
              containerClassName="!mb-0"
            />

            <AntInput
              type="radio"
              name="exports"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Exports Business?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              noRequired={true}
              containerClassName="!mb-0"
            />

            <AntInput
              type="radio"
              name="digitalSales"
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Digital Sales / Offshore?
                </span>
              }
              radioOptions={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              noRequired={true}
              containerClassName="!mb-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
