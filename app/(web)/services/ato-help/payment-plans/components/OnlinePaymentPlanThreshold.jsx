"use client";

import React from "react";
import { Tag } from "antd";
import {
  LaptopOutlined,
  BankOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * OnlinePaymentPlanThreshold Component
 * =====================================
 * Section 3: Can you use the ATO online payment-plan service?
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Details the $200,000 threshold as at September 2026, Online services for agents,
 * cardholder direct-debit rules, and manual negotiations for larger debts.
 */
export default function OnlinePaymentPlanThreshold() {
  const portalRules = [
    {
      icon: <LaptopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Self-Service & Agent Portal",
      title: "The $200,000 Online Threshold",
      lead: "As at September 2026, the ATO states that eligible taxpayers with debt of $200,000 or less may be able to set up an online payment plan.",
      desc: "Registered tax agents can also use Online services for agents for eligible client debts of $200,000 or less where no plan already exists.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Debts Exceeding $200,000",
      title: "Larger & Non-Standard Accounts",
      lead: "Larger, more complex or ineligible accounts generally require direct discussion with the ATO.",
      desc: "These require structured financial modelling, assets/liabilities declarations, and formal case officer negotiations.",
    },
    {
      icon: <CreditCardOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Payment Channels",
      title: "Cardholder Direct Debit Rules",
      lead: "Only the cardholder can establish a direct-debit plan using their debit or credit card; other agent-assisted options may still be available.",
      desc: "While agents can structure the payment amounts, the taxpayer must provide authorization for card payments directly.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Digital Portal Capabilities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Can you use the ATO online payment-plan service?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            As at September 2026, the ATO states that eligible taxpayers with debt of $200,000 or less may be able to set up an online payment plan. Registered tax agents can also use Online services for agents for eligible client debts of $200,000 or less where no plan already exists. Larger, more complex or ineligible accounts generally require direct discussion with the ATO.
          </p>
        </div>

        {/* 3 Portal Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {portalRules.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Practical Portal Rule
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Disclaimer Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200/60 dark:border-blue-800/60">
              <InfoCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                Threshold Does Not Guarantee Automatic Approval:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                The online threshold is not an approval guarantee. Existing arrangements, account type, previous defaults and payment method can affect the available route. Only the cardholder can establish a direct-debit plan using their debit or credit card; other agent-assisted options may still be available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
