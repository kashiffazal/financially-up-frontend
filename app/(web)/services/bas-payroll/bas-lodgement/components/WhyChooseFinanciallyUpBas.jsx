"use client";

import React from "react";
import { Tag } from "antd";
import {
  TrophyOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpBas Component
 * Covers 'Why choose Financially Up?'
 * from Page 2 of 5th Pillar BAS, GST & Payroll.docx.
 * Dynamically utilizes useCompany hook for corporate variables.
 */
export default function WhyChooseFinanciallyUpBas() {
  const company = useCompany();

  const credentials = [
    {
      title: "Registered Tax Agent & 10+ Years Experience",
      description: "Our firm operates as a registered tax agent with extensive experience supporting Australian business owners.",
    },
    {
      title: "CPA & IPA Certified Team",
      description: "Qualified accountants ensuring your activity statements meet strict compliance, accuracy, and ATO reporting standards.",
    },
    {
      title: "Australia-Wide Delivery",
      description: "Convenient online cloud accounting appointments across Australia, with in-person meetings available where preferred.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="gold" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <TrophyOutlined className="mr-1.5" />
              Trusted Tax Agent
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of experience. The professional accounting and tax team includes CPA and IPA members. Services are available Australia-wide, with online meetings and in-person appointments where preferred.
            </p>

            <div className="pt-4 space-y-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleOutlined />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Your BAS Agent
              </h3>
              
              <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-300">
                <div className="flex items-start gap-3">
                  <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-lg shrink-0 mt-0.5" />
                  <span>ABN: <strong className="text-slate-900 dark:text-white">{company.abn || "84 659 717 263"}</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <EnvironmentOutlined className="text-brand-primary dark:text-emerald-400 text-lg shrink-0 mt-0.5" />
                  <span>{company.address || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneOutlined className="text-brand-primary dark:text-emerald-400 text-lg shrink-0 mt-0.5" />
                  <a
                    href={`tel:${company.phone?.replace(/\s/g, "") || "1300328316"}`}
                    className="hover:text-brand-primary dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    {company.phone || "1300 328 316"}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MailOutlined className="text-brand-primary dark:text-emerald-400 text-lg shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${company.email || "info@financiallyup.com.au"}`}
                    className="hover:text-brand-primary dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    {company.email || "info@financiallyup.com.au"}
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-zinc-700 flex flex-wrap gap-2">
                <Tag color="blue">CPA Member</Tag>
                <Tag color="cyan">IPA Member</Tag>
                <Tag color="green">Registered Tax Agent</Tag>
                <Tag color="purple">Australia Wide</Tag>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
