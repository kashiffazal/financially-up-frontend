"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ShopOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * UnderstandingValuationScope Component
 * =====================================
 * Section 5: Understanding the scope of our service.
 * Source: 12th Pillar Business Advisory.docx (Page 5: Business Valuations)
 *
 * Implements 100% complete, verbatim SEO text detailing commercial planning scope,
 * clear boundaries with independent court/expert valuations, and cross-links to
 * M&A and Business Growth services.
 */
export default function UnderstandingValuationScope() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Engagement Scope &amp; Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Understanding the Scope of Our Service
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Commercial Planning Valuation */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                <AuditOutlined />
                <span>Commercial Planning Analysis</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                As a business valuation accountant, Financially Up can analyze
                the available financial information, explain assumptions and
                produce an agreed valuation analysis for commercial planning. We
                will state its purpose, basis, information relied on and
                material limitations. The scope must be determined before any
                report is described as suitable for a third party.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Clear articulation of purpose, information relied upon, and limitations.
            </div>
          </div>

          {/* Card 2: Legal Disputes & Expert Evidence Boundaries */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
                <SafetyCertificateOutlined />
                <span>Evidentiary &amp; Court Standards</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Some situations call for an independent expert or a specialist
                report with particular legal, professional or evidentiary
                requirements. A court dispute, compulsory transfer, tax market
                valuation or regulated financial transaction may have its own
                standard. We can help identify when that expertise is needed and
                work with the appointed professional. We do not describe a
                planning estimate as a certified or independent expert
                valuation.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Transparent demarcation between internal planning and expert witness evidence.
            </div>
          </div>
        </div>

        {/* Verbatim Paragraph 3 Cross-Link Feature Banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <ShopOutlined />
                <span>Transaction &amp; Growth Pathways</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                If you are preparing a sale, our{" "}
                <Link
                  href="/services/business-advisory/buying-selling-business"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  buying and selling a business service
                </Link>{" "}
                covers due diligence, structure, tax and transition issues
                beyond price. If you are considering expansion instead, our{" "}
                <Link
                  href="/services/business-advisory/business-growth"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business growth service
                </Link>{" "}
                focuses on forecasts and capacity.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-3">
              <Link href="/services/business-advisory/buying-selling-business">
                <Button
                  className="rounded-xl font-bold px-5 h-11 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-white"
                  icon={<ShopOutlined />}
                >
                  Buying &amp; Selling
                </Button>
              </Link>
              <Link href="/services/business-advisory/business-growth">
                <Button
                  type="primary"
                  icon={<RiseOutlined />}
                  className="rounded-xl font-bold px-5 h-11 shadow-sm"
                >
                  Business Growth
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
