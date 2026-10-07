"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PayrollTaxRulesAndWages Component
 * Covers 'Payroll tax registration', 'What counts as wages for payroll tax?',
 * and 'Contractors and payroll tax' from Page 9 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PayrollTaxRulesAndWages() {
  const wageComponents = [
    "Salaries and base wages",
    "Commissions and bonuses",
    "Allowances (subject to state limits)",
    "Superannuation contributions",
    "Fringe benefits (grossed-up value)",
    "Eligible contractor payments",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Registration & Taxable Wage Base
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Navigating Registration Rules and Wage Definitions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Payroll tax compliance requires looking beyond simple gross payroll. State thresholds consider your total Australian wages, broader wage components, and contractor engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* Card 1: Payroll tax registration */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <SafetyCertificateOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Payroll tax registration
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A payroll tax registration service starts by identifying the state or territory where the business has relevant wages and checking that jurisdiction’s current threshold and registration rules. Registration is generally required when the applicable wage threshold is exceeded, but thresholds and timing requirements differ by jurisdiction.
              </p>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The assessment should use total Australian wages where required by the jurisdiction, not just the wages paid in one state. This is one reason businesses operating across borders can miss a registration obligation even when the wage bill in a single state appears modest.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-purple-700 dark:text-purple-400 font-medium">
              <CheckCircleOutlined className="text-sm shrink-0" />
              <span>Multi-state wages aggregate across all Australian jurisdictions.</span>
            </div>
          </div>

          {/* Card 2: What counts as wages for payroll tax? */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <DollarOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                What counts as wages for payroll tax?
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Payroll tax is broader than ordinary base salary. Depending on the jurisdiction and circumstances, taxable wages can include items such as salaries, wages, commissions, bonuses, allowances, superannuation contributions, fringe benefits and some contractor payments. Exemptions can apply to particular categories, but they are fact-dependent and should be checked against the relevant revenue office rules.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60 space-y-2">
                <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Typical Taxable Categories:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 dark:text-zinc-300">
                  {wageComponents.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-zinc-300 italic">
                For that reason, payroll tax compliance services should be based on a wage-category review rather than a single payroll total copied from software.
              </p>
            </div>
          </div>

          {/* Card 3: Contractors and payroll tax */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <TeamOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contractors and payroll tax
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Contractor payments can create payroll tax issues even where the worker is not treated as an employee for ordinary payroll purposes. States and territories have specific contractor provisions and exemptions. Whether a contractor payment is taxable depends on the facts and the applicable jurisdictional legislation.
              </p>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can help identify contractor payments that warrant closer payroll tax review. Where the arrangement raises employment law or legal classification questions, separate legal advice may also be appropriate.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <WarningOutlined className="text-sm shrink-0" />
              <span>Contractors may be subject to relevant state deeming provisions.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
