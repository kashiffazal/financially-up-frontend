"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  TeamOutlined,
  BankOutlined,
  FileDoneOutlined,
  DollarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RelatedDistributionPlanningRibbon Component
 * ============================================
 * Section: Related Services Ribbon for Trust Distribution Planning Page.
 * Links to complementary family trust, corporate trustee, trust tax returns, and Division 7A services.
 */
export default function RelatedDistributionPlanningRibbon() {
  const links = [
    {
      title: "Family Trust Accounting",
      desc: "Discretionary trust structures, annual distribution minutes, and 30 June resolution timing.",
      href: "/services/trusts/family-trust",
      icon: <TeamOutlined className="text-emerald-600 dark:text-emerald-400" />,
      badge: "Pillar 8.1",
      badgeColor: "green",
    },
    {
      title: "Corporate Trustee",
      desc: "Pty Ltd trustee establishment, ASIC annual review compliance, and perpetual asset isolation.",
      href: "/services/trusts/corporate-trustee",
      icon: <BankOutlined className="text-purple-600 dark:text-purple-400" />,
      badge: "Pillar 8.4",
      badgeColor: "purple",
    },
    {
      title: "Trust Tax Returns",
      desc: "Annual trust income tax return lodgement, capital gains streaming, and beneficiary distribution schedules.",
      href: "/services/trusts/trust-tax-returns",
      icon: <FileDoneOutlined className="text-teal-600 dark:text-teal-400" />,
      badge: "Pillar 8.5",
      badgeColor: "cyan",
    },
    {
      title: "Division 7A Compliance",
      desc: "Managing private company corporate beneficiary unpaid present entitlements (UPEs) and complying loans.",
      href: "/services/business-tax/division-7a",
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400" />,
      badge: "Pillar 2.8",
      badgeColor: "blue",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Related Services
            </Tag>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Complementary Trust Governance &amp; Tax Solutions
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            Connect your 30 June distribution resolutions with comprehensive trust accounting and corporate tax compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {links.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color={item.badgeColor} className="text-xs font-semibold">
                    {item.badge}
                  </Tag>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
                <span>Learn more</span>
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
