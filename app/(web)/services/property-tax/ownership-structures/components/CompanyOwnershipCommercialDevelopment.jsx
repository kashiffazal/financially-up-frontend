"use client";

import React from "react";
import { BankOutlined, CloseCircleFilled, CheckCircleFilled, WarningOutlined } from "@ant-design/icons";

/**
 * CompanyOwnershipCommercialDevelopment Component
 * Explains when corporate ownership is appropriate (commercial & development projects)
 * and highlights key traps: loss of 50% CGT discount and Division 7A shareholder loans.
 */
export default function CompanyOwnershipCommercialDevelopment() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Corporate Entities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            When Might a Company Be Considered?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A corporate entity can be ideal for property development or active commercial projects where profits will be retained, but is often unsuitable for passive long-term capital growth.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 border border-emerald-400/30">
                <BankOutlined />
                <span>Corporate Structure Dynamics</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Corporate Tax Rates vs. CGT Discount Forfeiture
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Companies benefit from a flat corporate tax rate (25% for base rate entities, 30% for general companies), making them effective vehicles for property trading, construction, or active property development where profits are retained for reinvestment into future projects.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                However, a company-versus-trust analysis must look past headline tax rates. Withdrawing profits to shareholders triggers top-up personal tax via unfranked dividends or requires compliant Division 7A loan agreements.
              </p>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircleFilled className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Ideal for Active Trading & Development</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Development profits taxed at the 25% corporate tax rate instead of individual marginal tax rates up to 47%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CloseCircleFilled className="text-rose-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">NO General 50% CGT Discount</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Companies are legally barred from claiming the 50% capital gains tax discount. Every dollar of long-term capital gain is taxed in full.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <WarningOutlined className="text-amber-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Division 7A Compliance Burden</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Loans, advances, or private property use by shareholders or associates require formal loan agreements and minimum benchmark interest repayments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
