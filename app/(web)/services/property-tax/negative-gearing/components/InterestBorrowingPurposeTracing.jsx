"use client";

import React from "react";
import { ArrowRightOutlined, InfoCircleOutlined, SwapOutlined, BankOutlined, FileTextOutlined } from "@ant-design/icons";

/**
 * InterestBorrowingPurposeTracing Component
 * Explains how loan interest deductibility is governed by use of borrowed funds,
 * not the security asset, and addresses refinancing, redraws, and mixed-purpose debts.
 */
export default function InterestBorrowingPurposeTracing() {
  const tracingPoints = [
    {
      icon: <BankOutlined className="text-2xl text-emerald-600" />,
      title: "Security Asset vs. Purpose of Borrowing",
      desc: "A loan secured against a rental property does not automatically make all interest deductible. If any portion of borrowed funds was applied towards private purposes (e.g. buying a family car or paying private school fees), that portion of interest is non-deductible.",
    },
    {
      icon: <SwapOutlined className="text-2xl text-blue-600" />,
      title: "Refinancing, Redraws & Loan Splits",
      desc: "Drawing down from an existing mortgage redraw facility mixes borrowed funds. When an investor withdraws funds for private living from an existing investment loan, the loan becomes mixed, requiring continuous mathematical apportionment of each interest charge.",
    },
    {
      icon: <FileTextOutlined className="text-2xl text-purple-600" />,
      title: "Separate Clean Loan Accounts",
      desc: "Keeping separate loan accounts and distinct sub-accounts for property acquisitions, deposits, and improvements prevents contamination, drastically simplifies tax compliance, and protects your full interest deductions under ATO audit.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Debt Structuring
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Interest Deductions and the Purpose of the Borrowing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The ATO applies the strict "use test": it is the actual use of borrowed money that dictates tax deductibility, not which asset is mortgaged as collateral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracingPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-50 w-fit rounded-xl border border-slate-100 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm uppercase tracking-wider mb-2">
                <InfoCircleOutlined />
                <span>Changed Borrowing Purpose?</span>
              </div>
              <p className="text-emerald-100 text-base max-w-2xl leading-relaxed">
                If the purpose of a borrowing changes or funds have been redrawn, your tax treatment should be professionally reviewed rather than assuming the original full deduction continues indefinitely.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors shrink-0 shadow"
            >
              Review Loan Structure
              <ArrowRightOutlined />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
