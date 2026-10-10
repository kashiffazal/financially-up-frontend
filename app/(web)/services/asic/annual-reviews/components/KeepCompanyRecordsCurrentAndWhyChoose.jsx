"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  BookOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * KeepCompanyRecordsCurrentAndWhyChoose Component
 * ==============================================
 * Section 3 of ASIC Annual Review Service (/services/asic/annual-reviews/):
 * 1. "Keep the company’s own records current"
 * 2. "Why choose Financially Up"
 *
 * Implements 100% complete, verbatim content from Page 9 of '7th Pillar ASIC.docx'.
 * Gradient section background, corporate register connection, credentials, and dynamic company phone.
 */
export default function KeepCompanyRecordsCurrentAndWhyChoose() {
  const company = useCompany();

  const credentials = [
    { value: "10+ Years", label: "Corporate Experience" },
    { value: "CPA & IPA", label: "Qualified Specialists" },
    { value: "TPB Registered", label: "Registered Tax Agent" },
    { value: "Australia-Wide", label: "Online & In-Person" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Keep the company’s own records current */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Statutory Record-Keeping
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Keep the company&apos;s own records current
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-800/40 flex items-center justify-center">
                <BookOutlined className="text-purple-600 dark:text-purple-400 text-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                Beyond the ASIC Public Record
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The ASIC annual statement is not the company&apos;s complete corporate record. Companies are required to maintain their own records, including company resolutions and a register of members. Our{" "}
              <Link href="/services/asic/corporate-registers" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Corporate Registers service
              </Link>{" "}
              can assist with maintaining those records where ongoing support is required.
            </p>
          </div>
        </div>

        {/* Subsection 2: Why choose Financially Up */}
        <div className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Accounting & Tax Context
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up provides company compliance support with the benefit of accounting and tax context. We are a registered tax agent with more than 10 years of experience, and our professional team includes CPA and IPA members. We assist clients Australia-wide through online appointments, with in-person appointments also available.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 mb-8">
              {credentials.map((c, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">
                    {c.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/book-an-appointment" className="w-full sm:w-auto">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full sm:w-auto rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-none h-11"
                >
                  Book an Appointment
                </Button>
              </Link>

              {company?.phone && (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    className="w-full sm:w-auto rounded-xl font-bold bg-transparent border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-white h-11"
                  >
                    Call {company.phone}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
