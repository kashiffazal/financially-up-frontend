"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  HistoryOutlined,
  FileDoneOutlined,
  DollarOutlined,
  IdcardOutlined,
  BankOutlined,
  HomeOutlined,
  StockOutlined,
  MailOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsDeceasedEstates Component
 * =============================================
 * Section 7: How Financially Up Can Help with Deceased Estate Tax Returns.
 * Features 100% complete, verbatim content from Page 13 of the client document.
 */
export default function HowFinanciallyUpHelpsDeceasedEstates() {
  const company = useCompany();

  const services = [
    {
      title: "reviewing the deceased person's lodgment history;",
      icon: <HistoryOutlined className="text-emerald-500 text-lg" />,
      desc: "Checking historical ATO portal records to determine if any pre-death returns remain unlodged.",
    },
    {
      title: "preparing outstanding and final individual tax returns;",
      icon: <FileDoneOutlined className="text-blue-500 text-lg" />,
      desc: "Lodging the final return covering 1 July to the date of death using the deceased person's TFN.",
    },
    {
      title: "reviewing income derived before and after death;",
      icon: <DollarOutlined className="text-amber-500 text-lg" />,
      desc: "Distinguishing earnings derived prior to passing from ongoing revenue generated during estate administration.",
    },
    {
      title: "applying for an estate TFN where required;",
      icon: <IdcardOutlined className="text-purple-500 text-lg" />,
      desc: "Securing a dedicated Trust Tax File Number from the ATO for the deceased estate.",
    },
    {
      title: "preparing deceased-estate trust tax returns;",
      icon: <BankOutlined className="text-teal-500 text-lg" />,
      desc: "Preparing annual trust returns for estate earnings, bank interest, and distributions during probate.",
    },
    {
      title: "reviewing rental and investment income;",
      icon: <HomeOutlined className="text-rose-500 text-lg" />,
      desc: "Calculating ongoing tenancy earnings, deductible property expenses, dividends, and interest.",
    },
    {
      title: "identifying relevant CGT records;",
      icon: <StockOutlined className="text-indigo-500 text-lg" />,
      desc: "Establishing accurate acquisition dates, market value cost bases, and main residence exemptions.",
    },
    {
      title: "reviewing ATO correspondence; and",
      icon: <MailOutlined className="text-cyan-500 text-lg" />,
      desc: "Handling official ATO notices, statements of account, and clearance confirmations for executors.",
    },
    {
      title: "identifying matters requiring separately scoped tax advice.",
      icon: <AuditOutlined className="text-amber-600 text-lg" />,
      desc: "Pinpointing complex multi-jurisdictional issues, testamentary trusts, or non-resident beneficiary rules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Practice Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} can assist with:
          </p>
        </div>

        {/* 9 Capabilities Cards Grid */}
        <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Practice Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our Deceased Estate Tax Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-700 mb-3.5">
                    {item.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Scope Disclaimer Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
            <p className="m-0 max-w-2xl leading-relaxed">
              Legal interpretation of wills, probate applications, estate administration, asset valuations and beneficiary disputes are outside routine tax-return preparation and may require assistance from another suitably qualified adviser.
            </p>
            <Link
              href="/services/individual-tax"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Individual Tax Hub <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Empathy & Professional Support Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-r from-emerald-500/10 via-brand-primary/5 to-transparent dark:from-emerald-950/40 dark:via-zinc-800/40 dark:to-transparent border border-emerald-200 dark:border-emerald-800/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-3">
              <SafetyCertificateOutlined /> Compassionate &amp; Rigorous Advice
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Managing Tax Responsibilities for an Estate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-1 leading-relaxed">
              Managing tax matters after a death can involve different returns, representatives and record requirements. We provide calm, structured guidance so executors and families can fulfill their tax obligations with clarity and confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                className="brand-btn-primary font-bold shadow-md"
              >
                Book an Appointment
              </Button>
            </Link>
            {company?.phone && (
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  className="font-semibold text-slate-700 dark:text-zinc-200 border-slate-300 dark:border-zinc-700 hover:border-emerald-500"
                >
                  {company.phone}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
