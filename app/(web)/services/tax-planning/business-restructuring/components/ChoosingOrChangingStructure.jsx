"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ApartmentOutlined,
  BankOutlined,
  CompassOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ChoosingOrChangingStructure Component
 * =====================================
 * Section 3: Entity comparison vs restructuring implementation distinction,
 * and seamless links to Business Structure Advice, Company and Trust Returns.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function ChoosingOrChangingStructure() {
  const serviceCards = [
    {
      title: "Business Structure Advice",
      href: "/services/tax-planning/business-structure-advice",
      icon: <CompassOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      desc: "Focuses on comparing sole trader, partnership, company and trust models before establishment or change.",
    },
    {
      title: "Company Tax Returns",
      href: "/services/business-tax/company-tax-returns",
      icon: <BankOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      desc: "Annual corporate tax lodgments, franking accounts, and ongoing ASIC secretarial compliance.",
    },
    {
      title: "Trust Tax Returns",
      href: "/services/business-tax/trust-tax-returns",
      icon: <ApartmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      desc: "Trust income determinations, annual beneficiary distribution schedules, and tax reporting.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Entity Comparison vs Restructuring
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Choosing or Changing a Business Structure
          </h2>
        </div>

        {/* Verbatim Paragraphs 1 & 2 */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            A restructure often starts with a question about entity choice: sole trader, partnership, company or trust. Each structure has different tax, control, compliance and legal characteristics. No structure is universally better.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Our Business Structure Advice service focuses on comparing structures before establishment or change. Business restructuring advice goes further where an existing business needs to move assets, ownership, contracts or operations from the current arrangement into a new one.
          </p>
        </div>

        {/* Verbatim Paragraph 3 & Service Cards */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Ongoing Reporting &amp; Compliance Obligations
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If a company or trust forms part of the proposed arrangement, the ongoing tax-return and compliance obligations also need to be understood. See our Company Tax Returns and Trust Tax Returns services for the annual reporting side of those structures.
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
                    {service.desc}
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
