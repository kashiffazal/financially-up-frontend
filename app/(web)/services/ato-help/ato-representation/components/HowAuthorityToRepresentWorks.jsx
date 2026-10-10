"use client";

import React from "react";
import {
  LinkOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  AuditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowAuthorityToRepresentWorks Component
 * =======================================
 * Section 3: Legal mechanics of authority, client-to-agent linking process,
 * Online services for business nominations, individual/sole trader procedures, and account boundaries.
 */
export default function HowAuthorityToRepresentWorks() {
  const linkingHighlights = [
    {
      title: "Entities with an ABN (Companies, Trusts, Partnerships)",
      description:
        "As at September 2026, the established nomination requirement applies to entities with an ABN other than sole traders when they engage a new registered agent or change the obligations an existing agent may manage. The client completes that nomination in Online services for business; the agent cannot complete the entity nomination on the client's behalf.",
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Individuals & Sole Traders",
      description:
        "The ATO has also announced an expansion of client-to-agent linking for individuals and sole traders using an agent-initiated process. Because the applicable steps depend on the client type and rollout arrangements, Financially Up will confirm the current authorization process when the engagement is established.",
      icon: <UserOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Account-Specific & Scoped Authority",
      description:
        "Authority is limited to the relevant accounts or obligations. Aligning it with the engagement clarifies who is responsible for each step and whether further declarations or approvals are required.",
      icon: <LinkOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Governance & Authorisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How does authority to represent you work?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              A registered tax agent needs appropriate authority before acting for a client. The ATO's online services also use account and role-based authorizations, so the steps can differ depending on the client and the tax obligation involved. For businesses and other entities, the ATO's client-to-agent linking process can also apply.
            </p>
          </div>
        </div>

        {/* 3 Linking Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {linkingHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Compliance Note */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
          <InfoCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Step-by-step linking guidance:</strong>{" "}
            Financially Up provides clear walkthrough guides for Online services for business to ensure your agent nomination is lodged smoothly and accurately without disruption to your existing tax accounts.
          </p>
        </div>
      </div>
    </section>
  );
}
