"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  StopOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ScopeBoundariesAndRelatedServicesBoard Component
 * ================================================
 * Section 5: What Financially Up can and cannot cover & Related services
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function ScopeBoundariesAndRelatedServicesBoard() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Scope & Legal Boundaries */}
          <div className="lg:col-span-7">
            <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Engagement Limits
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Financially Up can and cannot cover
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Our financial board reporting services focus on management information and financial explanation within an agreed engagement. We can work with management to prepare recurring reports and discuss the meaning of material variances. We do not imply that a board pack itself satisfies statutory reporting, audit or legal obligations. Requirements for financial reports and lodgement vary by entity and circumstances; any such work should be scoped separately.
              </p>
            </div>

            {/* Verbatim Cross-Linking Box */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              <p className="m-0">
                If directors need a connected projection behind a major decision, our{" "}
                <Link href="/services/virtual-cfo/financial-modelling" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  financial modelling services
                </Link>{" "}
                address that analysis.{" "}
                <Link href="/services/virtual-cfo/scenario-planning" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  Financial scenario planning
                </Link>{" "}
                can compare the effects of alternative assumptions for the board. Where directors want ongoing operational measures, our{" "}
                <Link href="/services/virtual-cfo/dashboards" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  KPI reporting services
                </Link>{" "}
                focus on the measures and reporting cadence.
              </p>
            </div>
          </div>

          {/* Right Column: Comparative Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40">
              <div className="flex items-center gap-2 mb-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <CheckCircleOutlined />
                <span>What We Cover</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 m-0 pl-4 list-disc">
                <li>Internal management board packs</li>
                <li>Variance analysis & executive commentary</li>
                <li>Rolling cash flow & covenant tracking</li>
                <li>Pre-meeting management reviews</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
              <div className="flex items-center gap-2 mb-2 text-slate-800 dark:text-zinc-200 font-bold text-sm">
                <StopOutlined className="text-rose-500" />
                <span>Separate Statutory Engagements</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 pl-4 list-disc">
                <li>Formal statutory financial audit & assurance</li>
                <li>Legal compliance advice & company secretarial</li>
                <li>Regulated AFSL financial product advice</li>
                <li>ASIC statutory annual reporting lodgements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
