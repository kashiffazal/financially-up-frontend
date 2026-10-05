"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  MailOutlined,
  FileSearchOutlined,
  FormOutlined,
  FileDoneOutlined,
  IdcardOutlined,
  SyncOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsAsic Component
 * ===================================
 * Section 6: How Financially Up Helps (ASIC Compliance).
 *
 * 6 practical, hands-on steps demonstrating how our registered agent team
 * keeps corporate administration organized, timely, and compliant.
 *
 * Background: Clean White.
 */
export default function HowFinanciallyUpHelpsAsic() {
  const steps = [
    {
      icon: <MailOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "1. Centralise ASIC Correspondence",
      description:
        "Receive all official ASIC notices, invoice fee alerts, and annual statements via our secure registered agent portal, preventing missed paper mail.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "2. Verify Registered Information",
      description:
        "Cross-check your company's registered office, trading address, director lists, and shareholdings against underlying internal records and bank accounts.",
    },
    {
      icon: <FormOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "3. Prepare & Lodge Form 484 Promptly",
      description:
        "Draft and electronically lodge corporate change notifications within the mandatory 28-day statutory window, avoiding late lodgement penalties.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "4. Document Annual Solvency Resolutions",
      description:
        "Provide formal director solvency resolution minutes within 2 months of your annual review date in compliance with Corporations Act Section 347A.",
    },
    {
      icon: <IdcardOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "5. Verify Director IDs & Consents",
      description:
        "Ensure all incoming company directors hold an active 15-digit Director ID from ABRS and execute signed written consents prior to appointment.",
    },
    {
      icon: <SyncOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "6. Coordinate Corporate Changes with Tax",
      description:
        "Align share allotments, director changes, or business restructuring with company tax returns, dividend statements, and bookkeeping records.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Practical Workflow
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            How Financially Up Helps With ASIC Compliance
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Our role is to relieve directors of administrative friction, keep routine corporate filings organized, and ensure corporate decisions are accurately documented under the Corporations Act.
          </p>
        </div>

        {/* 6 Practical Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center mb-5">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
