"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  UserSwitchOutlined,
  SwapOutlined,
  RiseOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * AppointorChangeVsTrusteeChange Component
 * ========================================
 * Section: Appointor change versus trustee change
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Distinguishes the trustee officeholder role from appointor power over the trustee,
 * and links to Change Trustee and Trust Restructuring services.
 */
export default function AppointorChangeVsTrusteeChange() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Role Distinctions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Appointor change versus trustee change
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The appointor and trustee are different roles. The trustee administers the trust and legally holds trust
            assets. The appointor commonly has power over who acts as trustee. Changing the appointor does not itself
            change the trustee unless the relevant power is exercised.
          </p>
        </div>

        {/* 2 Roles Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Card 1: The Trustee */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center mb-5">
                <SwapOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                The Trustee (Day-to-Day Administration)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Holds legal title to property, enters commercial contracts, opens bank accounts, and makes annual
                distribution resolutions for beneficiaries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700">
              <Link
                href="/services/trusts/change-trustee"
                className="text-xs text-teal-600 dark:text-teal-400 font-semibold inline-flex items-center hover:underline"
              >
                Change Trustee Service <ArrowRightOutlined className="ml-1 text-xs" />
              </Link>
            </div>
          </div>

          {/* Card 2: The Appointor */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-5">
                <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                The Appointor (Ultimate Governance Power)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Holds ultimate control over who is appointed or removed as trustee. Does not administer property directly
                unless also appointed as trustee.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700">
              <Link
                href="/services/trusts/trust-restructuring"
                className="text-xs text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center hover:underline"
              >
                Trust Restructuring Hub <ArrowRightOutlined className="ml-1 text-xs" />
              </Link>
            </div>
          </div>
        </div>

        {/* Verbatim Link Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-sm">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal text-center max-w-3xl mx-auto">
            If the trustee is also changing, see our{" "}
            <Link
              href="/services/trusts/change-trustee"
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
            >
              change trustee
            </Link>{" "}
            service for the asset, registration and trustee-specific steps. If both roles are changing as part of a
            broader reorganization, our{" "}
            <Link
              href="/services/trusts/trust-restructuring"
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
            >
              trust restructuring
            </Link>{" "}
            service may be the more appropriate starting point.
          </p>
        </div>
      </div>
    </section>
  );
}
