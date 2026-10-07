"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  TeamOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * KeyConsiderationsCorporateTrustee Component
 * Covers 'Key considerations before you establish a corporate trustee in Australia'
 * from Page 7 of 6th Pillar Business Structures.docx.
 */
export default function KeyConsiderationsCorporateTrustee() {
  const considerations = [
    {
      num: "1",
      title: "The trust deed and trustee powers",
      desc: "The trust deed is a core legal document. It sets out how the trust operates, who can benefit, how the trustee can exercise powers and how changes to the trustee may be handled. Financially Up can consider the accounting and tax implications of the proposed structure, but legal drafting or interpretation may require a lawyer.",
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      num: "2",
      title: "Directors, shareholders and control",
      desc: "The directors control the company’s decisions as trustee, while shareholders own the company. Those roles should be considered carefully because changes in directors or share ownership can affect practical control of the corporate trustee. Company officeholders also have ongoing obligations under the Corporations Act, in addition to responsibilities arising from the trustee role.",
      icon: <TeamOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      num: "3",
      title: "Administration and ongoing costs",
      desc: "A corporate trustee adds company administration. The company must keep its details and records current and deal with ASIC annual review requirements. The trust also has its own accounting, tax and record-keeping needs. The additional administration should be weighed against the reasons for using a corporate trustee.",
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Governance & Oversight
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Key considerations before you establish a corporate trustee in Australia
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Carefully evaluating legal deed mechanisms, voting rights, and ASIC regulatory compliance ensures the structure fulfills its commercial and asset-protection objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {considerations.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {item.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
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
