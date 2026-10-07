"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhoIsPartnershipServiceFor Component
 * =====================================
 * Section: Who Is This Service For?
 * Features 100% complete, verbatim content from Page 4 of client docx.
 * Distinguishes active business partnerships from passive joint asset co-ownership.
 */
export default function WhoIsPartnershipServiceFor() {
  const businessPartnershipTypes = [
    "Professional practices (legal, accounting, medical, architectural)",
    "Consulting and corporate advisory partnerships",
    "Trades, building, electrical, plumbing and construction contractors",
    "Retail, hospitality, cafe and joint service operations",
    "Joint businesses with employees, PAYG withholding and superannuation",
    "Partnerships with commercial business assets, plant and equipment",
  ];

  const coOwnershipScenarios = [
    "Jointly receiving residential or commercial property rental income",
    "Co-owning dividend-paying shares or exchange-traded funds (ETFs)",
    "Joint personal bank accounts earning interest income",
    "Passive family investment holdings without trading enterprise activities",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Eligibility &amp; Structure
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who Is This Service For?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            This service is for partnerships carrying on a business, including professional, consulting, trade, service and other jointly operated businesses. It may also be relevant where the partnership has employees, GST or BAS obligations, business assets, investment income or transactions that require more detailed tax treatment.
          </p>
        </div>

        {/* 2-Card Comparative Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Active Business Partnerships */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <ShopOutlined className="text-xl" />
                </div>
                <div>
                  <Tag color="green" className="font-semibold text-xs uppercase tracking-wider mb-1">
                    Partnership Tax Return Required
                  </Tag>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Carrying On a Business in Partnership
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Applies when two or more persons or entities jointly carry on a business enterprise with a view of profit.
              </p>
              <ul className="space-y-2.5">
                {businessPartnershipTypes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-zinc-700/80 mt-6">
              <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                Lodges annual Australian Partnership Tax Return &amp; partner statements.
              </span>
            </div>
          </div>

          {/* Card 2: Jointly Owned Investments / Co-Owners */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <HomeOutlined className="text-xl" />
                </div>
                <div>
                  <Tag color="blue" className="font-semibold text-xs uppercase tracking-wider mb-1">
                    Co-Ownership Reporting
                  </Tag>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Jointly Owning an Investment
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                It is important to distinguish a business partnership from people simply owning an investment jointly. Co-owners can still have joint tax reporting obligations even where they are not carrying on a business partnership.
              </p>
              <ul className="space-y-2.5">
                {coOwnershipScenarios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    <InfoCircleOutlined className="text-blue-600 dark:text-blue-400 text-xs mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-zinc-700/80 mt-6">
              <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                Reported proportionally on individual tax returns (see Rental Property services).
              </span>
            </div>
          </div>
        </div>

        {/* Critical Distinction Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/70 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <InfoCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Arrangement &amp; Activity Assessment
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For example, jointly receiving rent, bank interest or dividends does not automatically mean a partnership business exists or that a partnership return is required. Co-owners can still have joint tax reporting obligations even where they are not carrying on a business partnership. The correct treatment depends on the arrangement and the activities being carried on.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/contact">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Assess Your Structure
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
