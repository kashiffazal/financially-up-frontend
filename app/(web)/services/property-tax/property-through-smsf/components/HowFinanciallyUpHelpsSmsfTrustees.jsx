"use client";

import React from "react";
import { useCompany } from "@/context/SettingsContext";
import {
  AuditOutlined,
  FileSearchOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsSmsfTrustees Component
 * Outlines SMSF property tax support, coordination with legal/lending/audit professionals,
 * and credentials (Registered Tax Agent, CPA/IPA qualified, 10+ years experience).
 */
export default function HowFinanciallyUpHelpsSmsfTrustees() {
  const company = useCompany();

  const services = [
    {
      icon: <FileSearchOutlined className="text-2xl text-emerald-600" />,
      title: "Transaction & Contract Review",
      desc: "Pre-signing examination of draft purchase contracts, bare trust arrangements, and entity names to prevent catastrophic post-settlement title errors.",
    },
    {
      icon: <AuditOutlined className="text-2xl text-blue-600" />,
      title: "Annual Financials & Audit Support",
      desc: "Preparation of annual fund accounts, SMSF annual returns, depreciation schedules, and comprehensive audit-ready files for independent SMSF auditors.",
    },
    {
      icon: <ShareAltOutlined className="text-2xl text-purple-600" />,
      title: "Inter-Professional Coordination",
      desc: "Clear collaboration with your solicitor, LRBA lender, mortgage broker, and licensed financial adviser to ensure all regulatory pieces align seamlessly.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scope of Support */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Professional SMSF Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How {company?.legalName || "Financially Up"} Helps SMSF Trustees
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            We provide practical tax and accounting support while making clear which questions belong with your solicitor, auditor, lender, or authorized financial adviser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 w-fit rounded-xl border border-slate-100 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Financially Up */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-900">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-900/60 px-3.5 py-1 rounded-full border border-emerald-700/50">
              Registered Tax Agent
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
              Why Choose {company?.legalName || "Financially Up"}?
            </h3>
            <p className="text-emerald-200 text-sm sm:text-base mt-3 leading-relaxed">
              {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience across Australian superannuation taxation, accounting, and property compliance. Our team includes CPA and IPA professionals supporting trustees nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <TeamOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">CPA & IPA Certified</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Rigorous technical mastery of SIS Act regulations, NALI provisions, and LRBA safe-harbours.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SafetyCertificateOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">10+ Years Experience</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Proven track record in SMSF property accounting, independent audit liaison, and ATO reporting.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <GlobalOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">Australia-Wide Service</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Available through secure online consultations and in-person appointments in North Sydney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
