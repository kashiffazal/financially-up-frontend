"use client";

import React from "react";
import { Form, Alert, Tooltip, Tag } from "antd";
import {
  InfoCircleOutlined,
  FileTextOutlined,
  BankOutlined,
  UserOutlined,
  SafetyOutlined,
  HomeOutlined,
  GoldOutlined,
  GlobalOutlined,
  AuditOutlined,
  FormOutlined,
  DollarOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import styles from "./individualEngagement.module.css";

// Service Options Metadata as defined in Part 2 Specification (SRV-001)
const SERVICE_OPTIONS = [
  {
    value: "Individual Tax Return",
    label: "Individual Tax Return",
    description: "Standard income tax return filing for Australian residents",
    icon: <UserOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Prior-Year Return",
    label: "Prior-Year Return",
    description: "Overdue or unfiled tax returns for past financial years",
    icon: (
      <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />
    ),
  },
  {
    value: "Amendment",
    label: "Tax Return Amendment",
    description: "Correct or update previously lodged tax returns with ATO",
    icon: <FormOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Rental Property",
    label: "Rental Property Tax",
    description:
      "Income, interest, depreciation, and deductions for investment properties",
    icon: <HomeOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Capital Gains",
    label: "Capital Gains Tax (CGT)",
    description:
      "Calculations for property sales, shares, investments, or assets",
    icon: <DollarOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Cryptocurrency",
    label: "Cryptocurrency Tax",
    description: "Crypto trading, staking, mining, and capital gain reporting",
    icon: <GoldOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Foreign Income / Residency",
    label: "Foreign Income & Residency",
    description:
      "Overseas employment, residency status, and foreign tax credits",
    icon: <GlobalOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Tax Planning",
    label: "Tax Planning & Strategy",
    description: "Pre-EOFY tax minimization and legal tax structuring advice",
    icon: <SafetyOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "ATO Matter",
    label: "ATO Audit / Dispute",
    description:
      "Representation for ATO reviews, audits, penalties, or payment plans",
    icon: <AuditOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Sole Trader BAS",
    label: "Sole Trader BAS Lodgement",
    description:
      "Quarterly or annual Business Activity Statements for sole traders",
    icon: (
      <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />
    ),
  },
  {
    value: "ABN Application",
    label: "ABN Registration",
    description: "Australian Business Number application and ATO setup",
    icon: <FormOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "GST Registration",
    label: "GST Registration",
    description: "Goods and Services Tax registration and reporting advice",
    icon: <BankOutlined className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    value: "Other",
    label: "Other Special Service",
    description: "Custom accounting or taxation advisory request",
    icon: (
      <PlusCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
    ),
  },
];

const ENTITY_OPTIONS = [
  {
    value: "No",
    title: "No, Individual Only",
    desc: "This request is strictly for personal tax affairs",
  },
  {
    value: "Yes",
    title: "Yes, Relates to Entity",
    desc: "Company, Trust, Partnership or SMSF involved",
  },
  {
    value: "Unsure",
    title: "Unsure / Need Advice",
    desc: "Our accountants will review your structure",
  },
];

export default function Step1ServiceSelection({
  form,
  formData,
  onValuesChange,
}) {
  // Watch values for conditional alert display
  const entityService = Form.useWatch("entityService", form);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header Banner */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Service Selection
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          What services do you require?
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Please select the taxation, advisory, or compliance services you need
          help with today.
        </p>
      </div>

      {/* SRV-001: Services Selection using AntInput helper */}
      <AntInput
        type="checkbox"
        name="services"
        designVariant="card"
        group={SERVICE_OPTIONS}
        validator={(_, value) => {
          if (value && value.length > 0) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("Please select at least one service."),
          );
        }}
        cardClassName={styles.serviceOptionCard}
        containerClassName="mb-8"
      />

      {/* SRV-002: Entity Related Work Question using AntInput helper */}
      <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
              Does the service relate to a company, trust, partnership or
              another entity?
            </h3>
            <Tooltip title="Individual engagements cover personal taxation. Entity engagements (Company/Trust/Partnership) require separate legal agreements under ATO regulations.">
              <InfoCircleOutlined className="text-slate-400 hover:text-brand-primary cursor-pointer text-sm" />
            </Tooltip>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Let us know if you also operate a business entity that requires tax
            lodgement or compliance.
          </p>
        </div>

        <AntInput
          type="radio"
          name="entityService"
          designVariant="card"
          radioOptions={ENTITY_OPTIONS}
          reqMsg="Please select an option."
          cardClassName={styles.radioOptionCard}
          containerClassName="!mb-2"
        />

        {/* SRV-002 Conditional Business Logic Alert */}
        {entityService === "Yes" && (
          <Alert
            type="info"
            showIcon
            title="Linked Entity Engagement Notice"
            description="Notice: Entity services (Company, Trust, Partnership) require a separate Entity Engagement. You can proceed with your Individual Engagement form now, and our team will automatically set up the linked Entity Engagement for you."
            className="rounded-xl border-emerald-200 dark:border-emerald-900 bg-emerald-50/80 dark:bg-emerald-950/60 text-slate-800 dark:text-zinc-200 !mt-4"
          />
        )}
      </div>
    </div>
  );
}
