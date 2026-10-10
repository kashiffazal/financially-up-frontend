"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * RemissionVsPaymentPlanVsObjection Component
 * ===========================================
 * Section 3: Remission is different from a payment arrangement
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Compares the three distinct ATO mechanisms: Remission, Payment Arrangement,
 * and Formal Objection, ensuring the taxpayer adopts the correct procedural pathway.
 */
export default function RemissionVsPaymentPlanVsObjection() {
  const pathways = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Discretionary Relief",
      title: "1. Penalty Remission",
      lead: "Penalty remission asks the ATO to reduce or remove a penalty.",
      action:
        "Applied when a penalty is legally valid, but fair and equitable circumstances justify waiving it.",
      href: "#remission-process",
    },
    {
      icon: <DollarCircleOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Instalment Scheduling",
      title: "2. Payment Arrangement",
      lead: "A payment arrangement deals with how an amount will be paid.",
      action:
        "Structures affordable monthly or weekly instalments for valid debts you cannot immediately pay in full.",
      href: "/services/ato-help/payment-plans",
    },
    {
      icon: <AuditOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      tag: "Formal Dispute",
      title: "3. Formal Objection (Part IVC)",
      lead: "An objection disputes an assessment or reviewable decision.",
      action:
        "Challanges the statutory or factual correctness of an ATO decision or assessment under tax law.",
      href: "/services/ato-help/ato-audit",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Procedural Clarity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Remission is different from a payment arrangement
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Penalty remission asks the ATO to reduce or remove a penalty. A payment arrangement deals with how an amount will be paid, while an objection disputes an assessment or reviewable decision. One matter can involve more than one pathway, so the notice and account should be reviewed before anything is submitted.
          </p>
        </div>

        {/* 3 Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {pathways.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.action}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircleOutlined /> Distinct Pathway
                </span>
                {item.href.startsWith("/") && (
                  <Link href={item.href} className="hover:underline flex items-center gap-1">
                    Explore <ArrowRightOutlined />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
