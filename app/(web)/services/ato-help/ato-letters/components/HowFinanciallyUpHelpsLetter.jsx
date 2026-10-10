"use client";

import React from "react";
import {
  FileTextOutlined,
  CalendarOutlined,
  ReconciliationOutlined,
  SendOutlined,
  CommentOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsLetter Component
 * =====================================
 * Section 7: Concrete assistance provided by Financially Up when handling ATO letters:
 * 6 core procedural steps plus guidance on document preparation.
 */
export default function HowFinanciallyUpHelpsLetter() {
  const servicePoints = [
    {
      title: "Notice & Entity Verification",
      desc: "read the complete notice and identify the relevant entity and tax account",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Action & Deadline Confirmation",
      desc: "confirm the requested action, due date and supporting records",
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Lodgement & Account Cross-Check",
      desc: "compare the correspondence with lodged returns, BAS and account transactions",
      icon: <ReconciliationOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Structured Response Preparation",
      desc: "prepare or coordinate a clear response within the agreed scope",
      icon: <SendOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Authorized ATO Communication",
      desc: "communicate with the ATO where properly authorized",
      icon: <CommentOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Reply Translation & Next Steps",
      desc: "explain the ATO’s reply and identify the next procedural step",
      icon: <CompassOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Professional Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How Financially Up helps
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Bring every page of the letter, attachments, earlier related notices, the relevant return or BAS and records connected to the issue. If several entities or periods are mentioned, keep the documents grouped but provide them together so the sequence can be understood.
          </p>
        </div>

        {/* 6 Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePoints.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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
