"use client";

import React from "react";
import { ClockCircleOutlined, CheckCircleFilled, ExclamationCircleFilled, BankOutlined } from "@ant-design/icons";

/**
 * LrbaBorrowingRulesAugust2026 Component
 * Explains the August 2026 LRBA borrowing reforms limiting new SMSF borrowings to
 * Business Real Property, grandfathering provisions, and unencumbered cash purchases.
 */
export default function LrbaBorrowingRulesAugust2026() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-800 text-sm font-semibold tracking-wider uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            Legislative Update
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            What Changed for SMSF Property Borrowing in August 2026?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Superannuation law strictly prohibits fund borrowing, with limited exceptions under Limited Recourse Borrowing Arrangements (LRBAs). Major statutory amendments took effect on 10 August 2026.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 border border-amber-400/30">
                <ClockCircleOutlined />
                <span>Effective 10 August 2026</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-tight">
                LRBA Borrowing Restricted to Business Real Property
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                For an LRBA entered into on or after <strong className="text-white font-semibold">10 August 2026</strong> to finance real property acquired after that date, the property <strong>must be business real property</strong>.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                This reform materially ends new financed residential property acquisitions by SMSFs. Trustees cannot assume an older example of an SMSF borrowing to buy a residential investment unit remains available today.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircleFilled className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Grandfathered Pre-10 August 2026 Contracts</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Does not apply where the SMSF exchanged a binding contract to acquire the real property before 10 August 2026. Existing pre-August 2026 LRBAs and refinancing retain transitional protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircleFilled className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Unencumbered Cash Residential Purchases</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      An SMSF may still acquire residential property <em>outright with 100% fund cash</em> (without borrowing), provided it adheres to arm's length third-party tenant rules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <BankOutlined className="text-amber-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Business Real Property LRBAs Permitted</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      SMSF borrowing remains lawful to purchase eligible commercial premises, medical suites, factories, and commercial farms using compliant bare trust / holding trust structures.
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
