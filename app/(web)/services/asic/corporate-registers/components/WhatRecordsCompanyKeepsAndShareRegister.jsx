"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  BookOutlined,
  SolutionOutlined,
  TeamOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsCompanyKeepsAndShareRegister Component
 * =================================================
 * Section 1 of Corporate Registers (/services/asic/corporate-registers/):
 * 1. "What records should a company keep?"
 * 2. "What is included in a share register?"
 *
 * Implements 100% complete, verbatim content from Page 10 of '7th Pillar ASIC.docx'.
 * Responsive statutory cards, member register elements, and cross-link to Share Changes.
 */
export default function WhatRecordsCompanyKeepsAndShareRegister() {
  const shareRegisterElements = [
    "Each member's full legal name and address",
    "The date the member was entered into the register",
    "The number and specific class of shares held (e.g. Ordinary)",
    "Amounts paid or agreed to be considered unpaid on shares",
    "Beneficial ownership status (mandatory for proprietary companies)",
    "Historical share transfer and issue dates with transaction evidence",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Internal Corporate Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should a company keep?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ASIC states that company officeholders are responsible for ensuring the company keeps required records. Depending on the company and its activities, records can include financial records, contracts, company meeting records and resolutions, the company constitution where one exists, and registers such as the register of members.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            For a company with shares, the register of members - often called the share register - is especially important. ASIC requires all companies to keep a members register containing prescribed information about members and their holdings. Changes to member details or holdings should be recorded in that register.
          </p>
        </div>

        {/* Subsection: What is included in a share register? */}
        <div className="w-full mb-16">
          <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                <SolutionOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                What is included in a share register?
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The register of members records who the members are and the shares they hold. For a company with share capital, it should include each member&apos;s name and address, the date they were entered in the register, the number and class of shares held, and the amounts paid or unpaid on those shares. Proprietary companies must also record whether shares are held beneficially. The exact entries depend on the company and its share structure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {shareRegisterElements.map((el, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                >
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>{el}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-4 border-t border-slate-100 dark:border-zinc-800 m-0">
              If your company is making a current ownership change rather than simply maintaining the register, see our{" "}
              <Link href="/services/asic/share-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Share Changes service
              </Link>
              . A share transfer or issue may require both an ASIC notification and an update to the company&apos;s internal register.
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Company records scattered or outdated?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
              If your company records are scattered, outdated or difficult to reconcile with ASIC, Financially Up can review the available material and scope the corporate register work required.
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
    </section>
  );
}
