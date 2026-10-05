"use client";

import React from "react";
import {
  FileSearchOutlined,
  PercentageOutlined,
  BarChartOutlined,
  HistoryOutlined,
  BulbOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import CapabilitiesGrid from "@/components/website/CapabilitiesGrid";

/**
 * WhenAccountantHelps Component
 * =============================
 * Section 2: When an individual tax accountant may help.
 *
 * Utilizes the mutual reusable CapabilitiesGrid component from `@/components/website/CapabilitiesGrid`
 * in a balanced 3-column layout (5 capability boxes + 1 Important Note box as the 6th card).
 *
 * Adheres strictly to standard section typography, responsive max-w-7xl width, and brand CSS variables.
 */
export default function WhenAccountantHelps() {
  const capabilities = [
    {
      step: "01",
      theme: "emerald",
      title: "Income & Information Scope",
      description: "identify the income and information relevant to your return",
      icon: <FileSearchOutlined className="text-xl" />,
    },
    {
      step: "02",
      theme: "teal",
      title: "Deductions & Offsets",
      description: "review deductions and offsets that may apply to your circumstances",
      icon: <PercentageOutlined className="text-xl" />,
    },
    {
      step: "03",
      theme: "blue",
      title: "Complex Asset Reporting",
      description:
        "report investments, rental property, capital gains, foreign income and crypto asset transactions",
      icon: <BarChartOutlined className="text-xl" />,
    },
    {
      step: "04",
      theme: "amber",
      title: "Amendments & Outstanding Years",
      description: "address missing information, prior-year returns or amendments",
      icon: <HistoryOutlined className="text-xl" />,
    },
    {
      step: "05",
      theme: "purple",
      title: "Pre-Transaction Assessment",
      description:
        "understand the tax implications of a proposed transaction before it occurs",
      icon: <BulbOutlined className="text-xl" />,
    },
  ];

  const importantNotice = {
    badge: "Important Note",
    title: "Australian Tax Law Context",
    description:
      "The treatment of any item depends on the facts, supporting records and Australian tax law. We will explain the information required and any areas that need further advice.",
    icon: <InfoCircleOutlined className="text-xl text-white" />,
    footnote: "Australian Tax Law Compliance",
  };

  return (
    <CapabilitiesGrid
      sectionId="when-an-accountant-helps"
      tag="Tax Guidance & Preparation"
      title="When an individual tax accountant may help"
      subtitle="You can prepare and lodge your own tax return through the ATO. Professional assistance may be useful when your return is no longer straightforward, you are unsure how a transaction should be treated, you need to correct an earlier return or you want tax or financial advice before making a significant financial decision."
      transitionTag="We can help you:"
      items={capabilities}
      importantNotice={importantNotice}
      columns={3}
      containerClassName="max-w-7xl"
      className="py-16 md:py-24 bg-slate-50/60 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300"
    />
  );
}

