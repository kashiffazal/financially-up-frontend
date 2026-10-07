"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  FolderOpenOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * DecisionsBeforeAbnAndInformationNeeded Component
 * Covers 'What should you decide before an ABN application?' and 'What information may be needed to apply for an ABN?'
 * from Page 3 of 6th Pillar Business Structures.docx.
 */
export default function DecisionsBeforeAbnAndInformationNeeded() {
  const applicationInfo = [
    "Correct legal name and entity type",
    "Business or enterprise start date",
    "Main business activities and locations",
    "TFN and associate information where required",
    "ACN for a registered company",
    "Contact and authorised contact details",
    "Information relevant to other tax registrations if these are being completed at the same time",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Part 1: What should you decide before an ABN application? */}
          <div className="lg:col-span-5 space-y-6">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              Entity Decision First
            </Tag>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What should you decide before an ABN application?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Before you apply for an ABN, you should know which entity will operate the business. A sole trader, partnership, company and trust have different registration and tax consequences. The Australian Business Register specifically recommends deciding the business structure before the ABN application is completed.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If you are still deciding on the entity, start with our{" "}
              <Link
                href="/services/business-structures"
                className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                Business Structures service
                <ArrowRightOutlined className="text-xs" />
              </Link>
              .
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If the intended entity is a company that has not yet been incorporated, the{" "}
              <Link
                href="/services/business-structures/company-registration"
                className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                company registration
                <ArrowRightOutlined className="text-xs" />
              </Link>{" "}
              step generally comes first because the company receives its ACN when registered.
            </p>
          </div>

          {/* Part 2: What information may be needed to apply for an ABN? */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What information may be needed to apply for an ABN?
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The exact information depends on the entity and circumstances. The Australian Business Register may require details such as tax file numbers of relevant associates, an ACN for a company, the date the ABN is required, business activity information and details of associates such as partners, directors or trustees.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Application Information Checklist:
                </h4>
                <ul className="space-y-2.5">
                  {applicationInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-3 text-xs text-slate-600 dark:text-zinc-300">
                <InfoCircleOutlined className="text-base text-blue-600 shrink-0 mt-0.5" />
                <span>
                  The start date should reflect when the entity starts, or takes genuine steps to start, the relevant business or enterprise. The ABR may review entitlement and ask for evidence that commencement activities occurred from the date stated in the application.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
