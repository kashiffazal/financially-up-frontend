"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  PercentageOutlined,
  StopOutlined,
  ArrowRightOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * PrivateUseAndAvailability Component
 * ====================================
 * Section 3: Private Use, Below-Market Rent and Rental Availability.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function PrivateUseAndAvailability() {
  const situations = [
    {
      icon: <UserOutlined className="text-xl text-rose-500" />,
      badge: "Apportionment Required",
      title: "Private Use",
      text: "If you, your family or another related party use the property privately for part of the year, deductions may need to be apportioned for the private-use period. Apportionment may also be required when only part of a property is rented.",
      bgBorder: "border-rose-200/80 dark:border-rose-900/40",
      accentBg: "bg-rose-50/60 dark:bg-rose-950/20",
    },
    {
      icon: <PercentageOutlined className="text-xl text-amber-500" />,
      badge: "Deduction Limits Apply",
      title: "Below-Market Rent",
      text: "If the property is rented to family, friends or another party for less than a normal commercial rate, the usual deduction treatment may not apply. Deductions may be limited depending on the arrangement, rent received and relevant tax rules.",
      bgBorder: "border-amber-200/80 dark:border-amber-900/40",
      accentBg: "bg-amber-50/60 dark:bg-amber-950/20",
    },
    {
      icon: <StopOutlined className="text-xl text-indigo-500" />,
      badge: "ATO Scrutiny Factor",
      title: "Not Genuinely Available for Rent",
      text: "Intending to rent a property or listing it occasionally does not necessarily establish that it was genuinely available for rent. Relevant factors can include how the property was advertised, the rent requested, conditions imposed on tenants, periods reserved for private use and whether there were unreasonable restrictions that made renting unlikely.",
      bgBorder: "border-indigo-200/80 dark:border-indigo-900/40",
      accentBg: "bg-indigo-50/60 dark:bg-indigo-950/20",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            ATO Scrutiny Areas
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Private Use, Below-Market Rent and Rental Availability
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            These situations can have different tax consequences and should be considered separately under Australian taxation guidelines.
          </p>
        </div>

        {/* 3 Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 border ${item.bgBorder} ${item.accentBg} shadow-xs hover:shadow-lg transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <Tag className="m-0 font-semibold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300">
                    {item.badge}
                  </Tag>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
                <AlertOutlined />
                <span>Requires documentation &amp; calendar records</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            Unsure if your holiday home, dual-key property or granny flat qualifies for full deductions?{" "}
            <Link
              href="/book-an-appointment"
              className="font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              Discuss your circumstances with an accountant <ArrowRightOutlined className="text-xs" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
