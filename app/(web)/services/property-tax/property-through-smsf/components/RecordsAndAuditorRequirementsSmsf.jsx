"use client";

import React from "react";
import { FolderOpenOutlined, SafetyCertificateOutlined, FileDoneOutlined } from "@ant-design/icons";

/**
 * RecordsAndAuditorRequirementsSmsf Component
 * Details the 7 mandatory documentary records required for SMSF property accounting
 * and independent annual audit compliance.
 */
export default function RecordsAndAuditorRequirementsSmsf() {
  const records = [
    {
      title: "Fund Governance",
      desc: "Current SMSF trust deed, written investment strategy with property asset class allocation, and corporate trustee constitution.",
    },
    {
      title: "Title & Holding Trust Records",
      desc: "Purchase contract, settlement adjustment sheet, certificate of title, and bare trust (holding trust) deed for LRBA arrangements.",
    },
    {
      title: "Loan & Security Documents",
      desc: "Formal LRBA loan agreements, mortgage security registration, and repayment history showing arm’s length interest rates and principal amortisation.",
    },
    {
      title: "Lease Agreements & Rent Records",
      desc: "Signed commercial or residential tenancy agreements, rental bond lodgement, and bank statements showing on-time, market-rate rent receipts.",
    },
    {
      title: "Invoices & Property Manager Ledgers",
      desc: "Itemised invoices for maintenance, body corporate fees, council rates, insurance renewals, and monthly real estate agent statements.",
    },
    {
      title: "Independent Valuations",
      desc: "Current market valuations supporting year-end balance sheet reporting and substantiating related-party transactions or commercial leases.",
    },
    {
      title: "Renovations & Alterations",
      desc: "Contractor invoices and permits for any works to verify adherence to LRBA maintenance vs improvement restrictions under the SIS Act.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Audit Documentation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Records an SMSF Property Accountant May Need
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Every SMSF is subject to a mandatory annual independent audit. Robust documentation protects your fund from auditor contravention reports (ACRs) and ATO penalties.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {records.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
                    <FileDoneOutlined />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            The fund's annual financial statements, SMSF annual return, and independent audit must reflect the property accurately. Assets must be valued annually in accordance with ATO valuation guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
