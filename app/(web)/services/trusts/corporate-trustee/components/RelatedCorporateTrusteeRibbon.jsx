"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  UserOutlined,
  ApartmentOutlined,
  FileTextOutlined,
  BankOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RelatedCorporateTrusteeRibbon Component
 * ========================================
 * Section: Related Services Ribbon for Corporate Trustee Page.
 * Links to complementary trust structures and ASIC corporate registry services.
 */
export default function RelatedCorporateTrusteeRibbon() {
  const links = [
    {
      title: "Family Trust Accounting",
      desc: "Discretionary trust accounts, 30 June distribution resolutions, and beneficiary tax alignment.",
      href: "/services/trusts/family-trust",
      icon: <UserOutlined className="text-emerald-600 dark:text-emerald-400" />,
      badge: "Pillar 8.1",
      badgeColor: "green",
    },
    {
      title: "Unit Trust Accounting",
      desc: "Fixed unit interests, unit registers, syndicate capital, and joint venture compliance.",
      href: "/services/trusts/unit-trust",
      icon: <ApartmentOutlined className="text-teal-600 dark:text-teal-400" />,
      badge: "Pillar 8.2",
      badgeColor: "cyan",
    },
    {
      title: "Trust Tax Returns",
      desc: "Section 95 net taxable income calculations, statement of distributions, and ATO lodgement.",
      href: "/services/trusts/trust-tax-returns",
      icon: <FileTextOutlined className="text-purple-600 dark:text-purple-400" />,
      badge: "Pillar 8.5",
      badgeColor: "purple",
    },
    {
      title: "ASIC Registered Agent",
      desc: "Annual review statement lodgement, solvency resolutions, registered office, and ASIC notices.",
      href: "/services/asic/registered-agent",
      icon: <BankOutlined className="text-blue-600 dark:text-blue-400" />,
      badge: "ASIC Services",
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
              Complementary Trust & Corporate Services
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            Connect your corporate trustee accounting with specialized advisory practices.
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
