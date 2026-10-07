"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  UserOutlined,
  DollarOutlined,
  AuditOutlined,
  TeamOutlined,
  BankOutlined,
  RiseOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * KeyFactorsChoosingStructure Component
 * Covers 'Key factors when choosing a business structure'
 * from Page 5 of 6th Pillar Business Structures.docx.
 */
export default function KeyFactorsChoosingStructure() {
  const factors = [
    {
      title: "Commercial Risk & Activities",
      desc: "The nature of the business activities and expected level of commercial risk.",
      icon: <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Ownership & Control",
      desc: "Who will own, control and work in the business.",
      icon: <UserOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Profit & Loss Distribution",
      desc: "How profits and losses are expected to be shared or retained.",
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Tax Treatment of Entity & Owners",
      desc: "The tax treatment of the entity and the owners.",
      icon: <AuditOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "Compliance & Administration",
      desc: "Administration, bookkeeping, accounting and annual compliance requirements.",
      icon: <FileProtectOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      title: "Team & Investor Influx",
      desc: "Whether employees, investors or additional business partners may be introduced.",
      icon: <TeamOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
    {
      title: "Asset Holding & Finance",
      desc: "How assets and finance will be held or accessed.",
      icon: <BankOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
    },
    {
      title: "Future Growth & Succession",
      desc: "Future growth, succession, sale or restructuring plans.",
      icon: <RiseOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Legal & Asset Protection",
      desc: "Whether separate legal or asset-protection advice is required.",
      icon: <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Evaluation Matrix
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Key factors when choosing a business structure
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Selecting the ideal structure requires balancing commercial risk, operational realities, ownership dynamics, and future exit objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
