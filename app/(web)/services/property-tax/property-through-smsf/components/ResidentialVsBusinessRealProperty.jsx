"use client";

import React from "react";
import { Alert } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined, ShopOutlined, HomeOutlined } from "@ant-design/icons";

/**
 * ResidentialVsBusinessRealProperty Component
 * Contrasts the strict ban on related-party residential use against
 * the Business Real Property (BRP) statutory exceptions under super law.
 */
export default function ResidentialVsBusinessRealProperty() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Property Classifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Residential Property vs. Business Real Property
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Australian superannuation law treats residential property and commercial business real property under completely different statutory frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Residential Property Restrictions */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-xl font-bold">
                  <HomeOutlined />
                </span>
                <h3 className="text-xl font-bold text-slate-900">Residential Property Strict Ban</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Residential property held by an SMSF <strong>cannot be lived in, rented to, or used as a holiday home by any fund member or related party</strong> (including parents, children, spouses, or business associates).
              </p>
              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 mb-4">
                <p className="text-rose-900 text-sm font-semibold">
                  Myth Buster: Paying Market Rent Does NOT Make It Permissible!
                </p>
                <p className="text-rose-800 text-xs mt-1 leading-relaxed">
                  Even if the member pays above-market commercial rent and signs a standard lease agreement, any private or family residential occupation remains an illegal breach of Section 66 of the SIS Act.
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Furthermore, an SMSF cannot acquire an existing residential property from a fund member or related party under any circumstances.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-rose-700 uppercase tracking-wider">
              Must Be Leased to Unrelated Third Parties Only
            </div>
          </div>

          {/* Business Real Property Exceptions */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
                  <ShopOutlined />
                </span>
                <h3 className="text-xl font-bold text-slate-900">Business Real Property (BRP) Exemption</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Business Real Property (such as medical suites, commercial offices, warehouses, factories, and commercial farmland) enjoys specific statutory exemptions where the property is used wholly and exclusively for business operations.
              </p>
              <ul className="space-y-3 text-slate-700 text-sm mb-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span><strong>Acquisition from Members:</strong> An SMSF can legally purchase business real property from a member or related party at verified market value.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span><strong>Leasing to Member's Business:</strong> The SMSF can lease the business premises back to the member’s operating business, provided the lease is strictly at arm’s length market rental rates.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Statutory Business-Use Test Must Be Satisfied
            </div>
          </div>
        </div>

        <Alert
          type="info"
          showIcon
          title="The Label 'Commercial Property' Is Not Enough"
          description={
            <div className="text-slate-700 text-sm leading-relaxed mt-1">
              Mixed-use premises (e.g. ground-floor retail shop with an upstairs residential apartment) or live-work units require detailed analysis against the statutory business-use test before contracts are executed. Financially Up assists trustees in evaluating title and zoning records.
            </div>
          }
          className="border border-blue-200 bg-blue-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
