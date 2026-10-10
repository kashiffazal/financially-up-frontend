"use client";

import React from "react";
import { useCompany } from "@/context/SettingsContext";
import {
  AuditOutlined,
  FileSearchOutlined,
  FolderOpenOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsGearing Component
 * Covers how Financially Up assists property investors, essential records to prepare,
 * and credentials (Registered Tax Agent, CPA/IPA professionals, 10+ years experience).
 */
export default function HowFinanciallyUpHelpsGearing() {
  const company = useCompany();

  const services = [
    {
      icon: <AuditOutlined className="text-2xl text-emerald-600" />,
      title: "Comprehensive Account & Record Review",
      desc: "Detailed audit of rental income, property manager statements, and expense classifications to verify genuine tax deductibility.",
    },
    {
      icon: <FileSearchOutlined className="text-2xl text-blue-600" />,
      title: "Interest & Debt Tracing Assessment",
      desc: "Examination of loan accounts, split facilities, redraw transactions, and mixed borrowings to ensure the interest claimed reflects eligible purpose of funds.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600" />,
      title: "Ownership & Private Use Adjustments",
      desc: "Accurate apportionment for any private occupancy, holiday home use, or non-commercial rents, ensuring compliance across registered titleholders.",
    },
  ];

  const recordsList = [
    "Annual rental summaries and monthly property manager statements",
    "Mortgage and bank statements showing all interest charged across the year",
    "Council rates, water notices, and land tax assessments",
    "Building, landlord, and public liability insurance renewal notices",
    "Itemised contractor invoices for maintenance, repairs, and capital works",
    "Quantity surveyor depreciation reports (Division 40 and Division 43)",
    "Settlement statements, purchase contracts, and stamp duty documents",
    "Diary notes of any private holiday use or periods the property was vacant",
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How We Help */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Professional Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How {company?.legalName || "Financially Up"} Can Help
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Our aim is to report the property correctly rather than assume every cash shortfall is automatically deductible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 w-fit rounded-xl border border-slate-100 mb-5">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Records to Have Ready */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FolderOpenOutlined className="text-2xl text-emerald-600" />
            <h3 className="text-2xl font-bold text-slate-900">Records to Have Ready</h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            Organised property documentation ensures accurate tax reporting and preserves vital records for future Capital Gains Tax calculations when the property is sold:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recordsList.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="text-slate-700 text-sm">{rec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Financially Up */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-900">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-900/60 px-3.5 py-1 rounded-full border border-emerald-700/50">
              Trusted Tax Agent
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
              Why Choose {company?.legalName || "Financially Up"}?
            </h3>
            <p className="text-emerald-200 text-sm sm:text-base mt-3 leading-relaxed">
              {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience across taxation, accounting, bookkeeping, and business advisory work. Our team includes CPA and IPA professionals, supporting clients Australia-wide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <TeamOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">CPA & IPA Qualified</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Senior Australian property tax accountants with rigorous technical knowledge.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SafetyCertificateOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">10+ Years Experience</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Registered Tax Agent handling complex portfolios, debt restructuring & ATO compliance.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <GlobalOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">Australia-Wide Support</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Accessible via secure online video consultations and in-person appointments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
