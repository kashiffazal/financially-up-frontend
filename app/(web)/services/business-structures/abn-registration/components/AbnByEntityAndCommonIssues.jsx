"use client";

import React from "react";
import { Tag } from "antd";
import {
  ApartmentOutlined,
  SafetyCertificateOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * AbnByEntityAndCommonIssues Component
 * Covers 'ABNs for sole traders, partnerships, companies and trusts',
 * 'How Financially Up can help with ABN registration', and 'Common ABN application issues'
 * from Page 3 of 6th Pillar Business Structures.docx.
 */
export default function AbnByEntityAndCommonIssues() {
  const entityTypes = [
    {
      title: "Sole Trader ABN",
      desc: "A sole trader uses an ABN for the individual's business activities.",
    },
    {
      title: "Partnership ABN",
      desc: "A partnership generally has its own unique ABN distinct from personal partners.",
    },
    {
      title: "Company ABN",
      desc: "A company uses the company's ABN, not the personal ABN of a director or shareholder.",
    },
    {
      title: "Trust ABN",
      desc: "A trust may have its own ABN where relevant entitlement requirements are met.",
    },
  ];

  const commonIssues = [
    "Applying under the wrong entity type or outdated registration",
    "Commencement dates that do not match demonstrable business activity",
    "Incomplete associate, director, or partner details",
    "Ineligibility where the person is performing tasks as an employee",
    "Treating the ABN as a generic number everyone receives automatically",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: ABNs by Entity */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              Entity Ownership
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              ABNs for sole traders, partnerships, companies and trusts
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The ABN belongs to the entity carrying on the enterprise. This is one reason the entity should be settled before the ABN application is submitted. If the business later changes structure, the new entity may require a different ABN and related registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entityTypes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <ApartmentOutlined className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Common Issues & How Financially Up Helps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Common issues */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                  <WarningOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Common ABN application issues
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                ABN applications can be delayed or create later problems when the wrong entity applies, dates do not match the business activity, associate information is incomplete or the applicant is not actually entitled to an ABN. Problems can also arise when a person is told to obtain an ABN even though the working relationship is really employment.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-700 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Application Risks:
                </h4>
                <ul className="space-y-2">
                  {commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 italic">
                A clean application starts with the correct entity and accurate facts. It is better to resolve uncertainty before submission than to treat the ABN as a generic business number that everyone automatically receives.
              </p>
            </div>
          </div>

          {/* How Financially Up can help */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  How Financially Up can help with ABN registration
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can help review the entity details, gather the information required for the application and assist with the ABN registration process. We can also identify related accounting and tax setup matters that may need separate attention.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where the ABN forms part of a broader business launch, we can help connect the registration to bookkeeping, GST/BAS setup and future tax compliance. Specialist tax planning may require a separate scope. Legal advice or legal documents may require an appropriately qualified legal adviser.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-700 flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300">
                <InfoCircleOutlined className="text-sm text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Ensuring seamless alignment between your ABR application, ASIC company records, and ATO integrated tax accounts.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <CheckCircleOutlined className="text-sm shrink-0" />
              <span>Full compliance review prior to submission on the Australian Business Register.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
