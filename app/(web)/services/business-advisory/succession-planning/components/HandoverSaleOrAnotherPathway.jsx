"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  TeamOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
  ShopOutlined,
  ArrowRightOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

/**
 * HandoverSaleOrAnotherPathway Component
 * =======================================
 * Section 3: Handover, sale or another pathway?
 * Source: 12th Pillar Business Advisory.docx (Lines 520-522)
 *
 * Implements 100% complete, verbatim SEO text detailing 4 successor pathways,
 * gradual handovers vs outright sales, and integrated valuation and transaction links.
 */
export default function HandoverSaleOrAnotherPathway() {
  const pathways = [
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Family Handover",
      desc: "Intergenerational succession focusing on mentorship, leadership readiness, and fair equity division.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Co-Owner Buyout",
      desc: "Existing partners acquiring equity via partnership agreement clauses or buy-sell insurance mechanisms.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Management Buyout (MBO)",
      desc: "Key employees or managers stepping up into equity ownership backed by earn-outs or vendor finance.",
    },
    {
      icon: <ShopOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "External Third-Party Sale",
      desc: "Marketing the business to trade buyers, competitors, or private investors for maximum market value.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Transition Models
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Handover, Sale or Another Pathway?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A successor may be a family member, co-owner, employee or external
            buyer. Each pathway raises different questions about price, timing,
            control, continuity and funding. A business succession planning
            consultant can help you compare the commercial implications, but the
            right option depends on your objectives and the available people and
            resources.
          </p>
        </div>

        {/* 4 Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pathways.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Gradual Transition vs Sale Narrative & Connected Service Cards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Gradual Transition Arrangements vs Outright Sale
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            A gradual transition may allow responsibilities to move over time,
            provided ownership and decision-making arrangements are clear. A sale
            can involve preparing information for buyer due diligence and
            negotiating what assets and liabilities transfer. Our business
            valuation services can address the financial basis for a proposed
            value; our buying and selling a business advice addresses transaction
            planning in more detail.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/business-advisory/business-valuations">
              <Button
                type="default"
                icon={<LineChartOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Valuation Services
              </Button>
            </Link>

            <Link href="/services/business-advisory/buying-selling-business">
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Buying &amp; Selling a Business Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
