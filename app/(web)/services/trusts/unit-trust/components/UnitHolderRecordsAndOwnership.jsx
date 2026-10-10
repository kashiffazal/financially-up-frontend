"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileProtectOutlined,
  SwapOutlined,
  ExclamationCircleOutlined,
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * UnitHolderRecordsAndOwnership Component
 * =======================================
 * Section: Unit-holder records and ownership changes
 * Verbatim text from Page 3 of client docx.
 * Focuses on maintaining unit registers, subscription documents, CGT events,
 * state stamp duty/landholder rules, and trust-loss consequences.
 */
export default function UnitHolderRecordsAndOwnership() {
  const recordCategories = [
    {
      title: "Subscription & Issue Documents",
      desc: "Contractual records evidencing unit applications, subscription monies paid, and allotments authorised by the trustee.",
    },
    {
      title: "Unit Transfer Instruments",
      desc: "Standard transfer forms executed between outgoing and incoming unit holders, recording sale prices and effective dates.",
    },
    {
      title: "Redemption & Cancellation Minutes",
      desc: "Trustee resolutions approving capital returns or buy-backs of units, documenting the price per unit redeemed.",
    },
    {
      title: "Class Rights & Updated Register",
      desc: "Statutory unit register detailing units held, voting privileges, income distribution rights, and capital return priorities.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Equity & Ownership Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Unit-holder records and ownership changes
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The accounting records should support who holds units, what was paid for them and what rights they carry.
            New unit issues, transfers between unit holders, redemptions and changes to unit classes can have
            accounting, tax and legal consequences. Records such as subscription documents, transfer documents,
            trustee resolutions and updated registers should be retained.
          </p>
        </div>

        {/* 4 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recordCategories.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    <FileProtectOutlined className="text-lg text-purple-600 dark:text-purple-400" />
                  </div>
                  <Tag color="purple" className="text-xs font-semibold">
                    Core Record
                  </Tag>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Serious Tax & Stamp Duty Warning */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-amber-200/90 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center shrink-0">
              <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <Tag color="gold" className="font-semibold text-xs mb-1">
                Beyond Routine Annual Accounts
              </Tag>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Tax, Duty & Landholder Consequences of Unit Transfers
              </h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A transfer or issue of units can have consequences beyond the trust’s ordinary annual accounts. Capital
            gains tax, duty or landholder rules, trust-loss rules and other provisions may be relevant depending on the
            trust, its assets and the jurisdiction. These matters should be reviewed before significant changes are
            implemented, with legal advice obtained where necessary.
          </p>
        </div>
      </div>
    </section>
  );
}
