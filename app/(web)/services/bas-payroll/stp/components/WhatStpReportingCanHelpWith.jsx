"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  SendOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

/**
 * WhatStpReportingCanHelpWith Component
 * Covers 'What Can STP Reporting Services Help With?'
 * with link to Payroll Services from Page 5 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatStpReportingCanHelpWith() {
  const capabilities = [
    {
      title: "Reviewing whether payroll software is set up for STP reporting.",
      detail:
        "Configuring BMS identifiers, ATO digital software certificates, and payroll clearing accounts.",
    },
    {
      title: "Checking employee payroll information before reporting begins.",
      detail:
        "Verifying TFN declarations, residency status, super USI fund codes, and contact details to avoid ATO rejection.",
    },
    {
      title:
        "Coordinating pay-event reporting with regular payroll processing.",
      detail:
        "Automating or managing the transmission of pay event payloads each pay run without operational delays.",
    },
    {
      title:
        "Reviewing rejected or incorrect STP submissions and identifying corrections.",
      detail:
        "Diagnosing error codes, mismatched employee identifiers, or failed transmissions and preparing update events.",
    },
    {
      title: "Assisting with year-end finalization declarations.",
      detail:
        "Reconciling annual payroll ledgers, W1/W2 activity statements, and signing off on 14 July final declarations.",
    },
    {
      title:
        "Helping update previously reported payroll information where appropriate.",
      detail:
        "Submitting replacement pay events or update events when prior pay calculations or leave payouts are adjusted.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs"
          >
            <SendOutlined className="mr-1.5" />
            Support Capabilities
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What Can STP Reporting Services Help With?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            STP reporting services are useful when a business wants payroll
            reporting to be part of a controlled, repeatable process rather than
            handled as a separate last-minute compliance task.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircleOutlined className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card to Payroll Services */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 dark:from-zinc-800/80 dark:via-zinc-900 dark:to-zinc-800/60 border border-emerald-200/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
              <ThunderboltOutlined />
              Need Routine Pay Run Management?
            </div>
            <p className="text-base text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
              If you also need the underlying pay runs processed, explore our
              comprehensive Payroll Services page for end-to-end administration.
            </p>
          </div>
          <Link href="/services/bas-payroll/payroll-services">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Explore Payroll Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
