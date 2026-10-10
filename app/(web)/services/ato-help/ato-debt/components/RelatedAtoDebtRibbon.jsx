"use client";

import React from "react";
import Link from "next/link";
import {
  AuditOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  CalculatorOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RelatedAtoDebtRibbon Component
 * ===============================
 * Sibling navigation ribbon linking across related ATO Help services.
 */
export default function RelatedAtoDebtRibbon() {
  const relatedServices = [
    {
      title: "ATO Audit Support",
      desc: "Audit questionnaires, records substantiation & ATO liaison.",
      href: "/services/ato-help/ato-audit",
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Pillar 11.2",
    },
    {
      title: "Overdue Tax Returns",
      desc: "Multi-year catch up returns, missing records reconstruction.",
      href: "/services/ato-help/overdue-tax-returns",
      icon: <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Pillar 11.3",
    },
    {
      title: "Penalty & GIC Remission",
      desc: "Requesting remission of failure to lodge (FTL) and interest.",
      href: "/services/ato-help/penalty-remission",
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Pillar 11.4",
    },
    {
      title: "ATO Payment Plan Help",
      desc: "Negotiating structured monthly/weekly payment terms.",
      href: "/services/ato-help/payment-plans",
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Pillar 11.6",
    },
    {
      title: "Overdue BAS Lodgement",
      desc: "Catching up unlodged GST, PAYGW & super activity statements.",
      href: "/services/ato-help/overdue-bas",
      icon: <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Pillar 11.10",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Explore Related Services
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Related ATO Help & Compliance Practices
            </h3>
          </div>
          <Link
            href="/services/ato-help"
            className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1.5"
          >
            View All ATO Services <ArrowRightOutlined />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {relatedServices.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-zinc-400 uppercase">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>View Practice</span>
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
