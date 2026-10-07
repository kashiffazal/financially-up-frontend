"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  FileTextOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

/**
 * TaxAndComplianceImplications Component
 * =====================================
 * Section 4: Reporting differences, private company money rules (Division 7A),
 * trustee resolution obligations, and ongoing compliance integration.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function TaxAndComplianceImplications() {
  const serviceCards = [
    {
      title: "Company Tax Returns",
      href: "/services/business-tax/company-tax-returns",
      icon: <FileTextOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      description:
        "Comprehensive annual corporate tax reporting, dividend franking accounts, and corporate compliance schedules.",
    },
    {
      title: "Trust Tax Returns",
      href: "/services/business-tax/trust-tax-returns",
      icon: <ApartmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      description:
        "Discretionary and unit trust return preparation, beneficiary distributions, and section 100A compliance.",
    },
    {
      title: "Business Tax Compliance",
      href: "/services/business-tax/business-tax-compliance",
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      description:
        "Holistic ongoing Australian compliance covering BAS, GST reconciliations, PAYG withholding, and lodgment management.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Reporting &amp; Governance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Tax and Compliance Implications
          </h2>
        </div>

        {/* Verbatim Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center mb-5 border border-amber-200/60 dark:border-amber-800/40">
                <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Distinct Entity Obligations
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                Different structures can have different tax-return, registration and record-keeping requirements. Companies have their own income and assets, and there can be tax consequences when company money or assets are used privately. Trusts can have specific distribution and trustee obligations. Partnerships and sole traders also have distinct reporting rules.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 dark:bg-emerald-950/40 flex items-center justify-center mb-5 border border-brand-primary/20 dark:border-emerald-800/40">
                <ScheduleOutlined className="text-xl text-brand-primary dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Beyond the Annual Tax Bill
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                The structure chosen can therefore affect more than the annual tax bill. It can influence bookkeeping, business activity statements, payroll obligations, year-end accounts and the records required to support transactions between the business and its owners.
              </p>
            </div>
          </div>
        </div>

        {/* Verbatim Note & Service Cross-Links */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-12">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Ongoing Lodgment &amp; Compliance Integration
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Where the chosen structure is a company or trust, the ongoing return requirements are covered in our Company Tax Returns and Trust Tax Returns services. Broader ongoing obligations are covered under Business Tax Compliance.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/10 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-zinc-700 flex flex-col justify-between hover:bg-white/15 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <Link href={service.href}>
                  <Button
                    type="link"
                    className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPosition="end"
                  >
                    View Service
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
