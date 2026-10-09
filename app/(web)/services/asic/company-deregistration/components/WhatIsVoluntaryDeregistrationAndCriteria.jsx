"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  SafetyCertificateOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  TeamOutlined,
  AuditOutlined,
  StopOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsVoluntaryDeregistrationAndCriteria Component
 * ==================================================
 * Section 1 of Company Deregistration (/services/asic/company-deregistration/):
 * 1. "What is voluntary company deregistration?"
 * 2. "Who may use a company deregistration service?"
 *
 * Implements 100% complete, verbatim content from Page 5 of '7th Pillar ASIC.docx'.
 * Explains legal dissolution, the 6 statutory ASIC criteria, and solvent/insolvent distinctions.
 */
export default function WhatIsVoluntaryDeregistrationAndCriteria() {
  const asicCriteria = [
    {
      icon: <TeamOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "All members agree",
      desc: "Every shareholder unanimously consents to the company deregistration.",
    },
    {
      icon: <StopOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Not conducting business",
      desc: "The company has genuinely ceased or never commenced commercial trading.",
    },
    {
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Assets worth less than $1,000",
      desc: "Total company property, cash, and assets have a value under $1,000.",
    },
    {
      icon: <CheckCircleOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "No outstanding liabilities",
      desc: "Zero remaining debts to creditors, banks, ATO, employees, or suppliers.",
    },
    {
      icon: <AuditOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "No legal proceedings",
      desc: "Not a party to any ongoing legal actions, litigation, or court claims.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "All ASIC fees paid",
      desc: "All statutory review fees, late fees, and penalties are paid in full.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Company Closure & Legal Dissolution
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is voluntary company deregistration?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Voluntary deregistration is an ASIC process available to a company that meets specific conditions. If ASIC deregisters the company, the company no longer exists as a legal entity. That has important consequences for property, contracts, records and any later need to deal with the entity.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            ASIC currently states that voluntary deregistration requires all members to agree, the company not to be conducting business, assets worth less than $1,000, no outstanding liabilities, no involvement in legal proceedings, and all ASIC fees and penalties to have been paid. These conditions should be checked against the company&apos;s actual position before an application is made.
          </p>
        </div>

        {/* 6 ASIC Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {asicCriteria.map((c, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-lg mb-3">
                {c.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                {c.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Subsection 2: Who may use a company deregistration service? */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Eligibility & Alternative Pathways
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Who may use a company deregistration service?
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              A company deregistration service is generally relevant to directors and shareholders of a company that has genuinely finished operating. Common situations include a company that never commenced, has ceased or sold its operations, or is inactive and no longer required.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The process is not suitable for every company. If a company has material assets, unpaid creditors, employee entitlements, ongoing legal disputes or solvency concerns, voluntary deregistration may not be available. A solvent company that cannot meet the voluntary deregistration criteria may need a members&apos; voluntary winding up, while an insolvent company requires prompt specialist insolvency advice.
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                Considering closing an Australian company?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
                If you are considering closing a company, an initial discussion can help establish whether voluntary deregistration appears available, what accounting and tax matters remain, and whether another closure process or specialist advice is required.
              </p>
            </div>
            <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full sm:w-auto rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 border-none h-11"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
