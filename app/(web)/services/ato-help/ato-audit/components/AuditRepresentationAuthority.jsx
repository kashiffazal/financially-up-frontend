"use client";

import React from "react";
import { Tag } from "antd";
import {
  IdcardOutlined,
  SafetyCertificateOutlined,
  UserSwitchOutlined,
  LaptopOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * AuditRepresentationAuthority Component
 * ======================================
 * Section 5: ATO audit representation and authority to act
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Outlines the agent nomination process via Online services for business,
 * the exemption for sole traders, and the taxpayer's ongoing legal obligations.
 */
export default function AuditRepresentationAuthority() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Authority & Agency Law
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ATO audit representation and authority to act
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A registered tax agent can deal with authorised client tax matters. The exact access depends on the client type, obligations and appointment.
          </p>
        </div>

        {/* 2-Column Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Column 1: Client-to-Agent Nomination Process */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <LaptopOutlined className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                    Digital Security Rules
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Agent Nomination Process
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Certain entities with an ABN must nominate a new registered agent, or change an existing agent’s authorisations, through Online services for business before the agent can act digitally; sole traders are excluded from that nomination requirement.
                </p>
                <p>
                  A temporary appointment may also be used for a registered tax professional or specialist adviser in a defined matter.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400">
              <SafetyCertificateOutlined />
              <span>We guide company and trust clients through this quick portal nomination step.</span>
            </div>
          </div>

          {/* Column 2: Taxpayer's Ongoing Responsibility */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <UserSwitchOutlined className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                    Collaborative Partnership
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    The Taxpayer’s Role
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Representation does not remove the taxpayer’s role. You may need to explain facts, locate records, confirm instructions and approve the response.
                </p>
                <p>
                  Information given to the ATO should be accurate and consistent, regardless of whether it comes directly from you or through an adviser.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircleOutlined />
              <span>You retain full visibility and final approval over every submission.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
