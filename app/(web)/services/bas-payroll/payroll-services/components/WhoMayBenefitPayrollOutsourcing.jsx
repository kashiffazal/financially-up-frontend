"use client";

import React from "react";
import { Tag } from "antd";
import {
  UserSwitchOutlined,
  UsergroupAddOutlined,
  BranchesOutlined,
  FileProtectOutlined,
  SyncOutlined,
} from "@ant-design/icons";

/**
 * WhoMayBenefitPayrollOutsourcing Component
 * Covers 'Who May Benefit From Payroll Outsourcing?'
 * from Page 4 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhoMayBenefitPayrollOutsourcing() {
  const beneficiaryProfiles = [
    {
      icon: <UserSwitchOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Eliminating Key-Person Risk",
      description: "Businesses employing staff that cannot afford to have payroll disrupted whenever an internal bookkeeper or office manager is on leave or departs.",
    },
    {
      icon: <BranchesOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "Growing & Scaling Teams",
      description: "Enterprises where expanding employee counts, varied pay conditions, or shift structures have made internal manual calculations error-prone.",
    },
    {
      icon: <FileProtectOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Time-Poor Business Owners",
      description: "Owners who currently process payroll themselves on weekends or evenings but want a structured, reliable routine that frees up strategic time.",
    },
    {
      icon: <SyncOutlined className="text-2xl text-indigo-600 dark:text-indigo-400" />,
      title: "Unified Bookkeeping & Tax Alignment",
      description: "Companies seeking seamless data flow between weekly payroll runs, general ledger reconciliations, and quarterly activity statement reporting.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <UsergroupAddOutlined className="mr-1.5" />
            Target Organizations
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Who May Benefit From Payroll Outsourcing?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            Payroll outsourcing can suit businesses that employ staff but do not want payroll administration to depend on one internal person or an inconsistent manual process. It can be particularly useful when employee numbers, pay conditions or reporting requirements have become more difficult to manage.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Small business payroll services may also help owners who currently process payroll themselves but want a more structured workflow, better records and clearer coordination between payroll, bookkeeping and tax reporting.
          </p>
        </div>

        {/* 4 Beneficiary Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficiaryProfiles.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
