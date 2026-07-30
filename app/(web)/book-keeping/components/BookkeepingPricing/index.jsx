'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Tag, Segmented } from 'antd';
import {
  CloseOutlined,
  CheckOutlined,
  StarFilled,
  SafetyCertificateOutlined,
} from '@ant-design/icons';

export default function BookkeepingPricing() {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  /* Pricing Plans Matrix */
  const pricingPlans = [
    {
      name: 'Free Starter',
      revenue: 'Revenue Up to $30K / yr',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: '/ month',
      popular: false,
      features: [
        { text: 'Employees Payroll', included: false },
        { text: 'Bank Accounts Reconciliation', included: false },
        { text: 'Cloud Bookkeeping Setup', included: false },
        { text: 'Financial Reports', included: false },
        { text: 'Email Support', included: false },
        { text: 'Phone Support (20 Mins)', included: true },
        { text: 'Quarterly Consulting', included: false },
        { text: 'BAS Lodgement', included: false },
      ],
    },
    {
      name: 'Basic Growth',
      revenue: 'Revenue Up to $100K / yr',
      priceMonthly: '$99',
      priceAnnual: '$84',
      period: '/ month',
      popular: false,
      features: [
        { text: 'Employees Payroll', included: false },
        { text: 'Bank Accounts (1 Feed)', included: true },
        { text: 'Cloud Bookkeeping Setup', included: true },
        { text: 'Financial Reports (Monthly P&L)', included: true },
        { text: 'Priority Email Support', included: true },
        { text: 'Phone Support (30 Mins)', included: true },
        { text: 'Quarterly Consulting', included: false },
        { text: 'BAS Lodgement Assistance', included: false },
      ],
    },
    {
      name: 'Premium Business',
      revenue: 'Revenue Up to $250K / yr',
      priceMonthly: '$199',
      priceAnnual: '$169',
      period: '/ month',
      popular: true,
      badgeText: 'MOST POPULAR CHOICE',
      features: [
        { text: 'Employees Payroll (1-4 Staff)', included: true },
        { text: 'Bank Accounts (1-2 Feeds)', included: true },
        { text: 'Cloud Bookkeeping Services', included: true },
        { text: 'Full Finance Reporting & P&L', included: true },
        { text: 'Priority Email & Chat Support', included: true },
        { text: 'Phone Support (90 Mins)', included: true },
        { text: 'Quarterly CPA Consulting', included: true },
        { text: 'Quarterly BAS Lodgement', included: true },
      ],
    },
    {
      name: 'Elite Corporate',
      revenue: 'Revenue Up to $500K / yr',
      priceMonthly: '$349',
      priceAnnual: '$296',
      period: '/ month',
      popular: false,
      features: [
        { text: 'Employees Payroll (1-7 Staff)', included: true },
        { text: 'Bank Accounts (1-3 Feeds)', included: true },
        { text: 'Full Managed Bookkeeping', included: true },
        { text: 'Custom Financial Reports', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Unlimited Phone Support', included: true },
        { text: 'Quarterly Strategy Meetings', included: true },
        { text: 'Complete BAS & IAS Lodgement', included: true },
      ],
    },
  ];

  return (
    <section className="bg-slate-50/70 dark:bg-zinc-950 py-16 sm:py-24 border-t border-slate-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Billing Cycle Switch */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 shadow-sm"
          >
            Transparent Pricing Plans
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Choose the Right Bookkeeping Plan for Your Business
          </h2>

          <p className="text-sm text-slate-500 dark:text-zinc-400">
            Fixed monthly pricing tailored to your annual revenue and business size. No lock-in contracts or surprise add-ons.
          </p>

          {/* Monthly / Annual Toggle Selector */}
          <div className="pt-3 flex items-center justify-center gap-4">
            <Segmented
              options={['Monthly', 'Annual']}
              value={billingCycle}
              onChange={(val) => setBillingCycle(val)}
              className="bg-slate-200/80 dark:bg-zinc-800 font-bold text-xs p-1.5 rounded-2xl"
            />
            {billingCycle === 'Annual' && (
              <span className="bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800 animate-pulse">
                Save 15% Off
              </span>
            )}
          </div>
        </div>

        {/* 4 Executive Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch mb-12">
          {pricingPlans.map((plan, idx) => {
            const currentPrice = billingCycle === 'Annual' ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white dark:bg-zinc-900 border-2 border-brand-primary dark:border-emerald-400 shadow-2xl shadow-emerald-600/20 lg:-translate-y-3 z-10 pt-10'
                    : 'bg-white dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-brand-primary/50 hover:-translate-y-1'
                }`}
              >
                {/* Popular Choice Top Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap z-20">
                    <StarFilled className="text-amber-300 text-xs" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Header Details */}
                  <div className="pb-6 border-b border-slate-100 dark:border-zinc-800 text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-wider bg-brand-primary-soft dark:bg-emerald-950/60 inline-block px-3 py-0.5 rounded-full">
                      {plan.revenue}
                    </p>

                    {/* Price Display */}
                    <div className="pt-3 flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
                        {currentPrice}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-3 py-6 text-xs">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        {feat.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                            <CheckOutlined className="text-[10px] font-extrabold" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-600 flex items-center justify-center shrink-0">
                            <CloseOutlined className="text-[10px]" />
                          </div>
                        )}
                        <span
                          className={
                            feat.included
                              ? 'text-slate-800 dark:text-zinc-200 font-semibold'
                              : 'text-slate-400 dark:text-zinc-500 line-through font-normal'
                          }
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-2">
                  <Link href="/book-an-appointment">
                    <Button
                      type={plan.popular ? 'primary' : 'default'}
                      block
                      className={`h-12 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                        plan.popular
                          ? 'bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105'
                          : 'border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:border-brand-primary hover:text-brand-primary'
                      }`}
                    >
                      {plan.priceMonthly === '$0' ? 'Get Started Free' : 'Choose This Plan'}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Badge Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-slate-500 dark:text-zinc-400">
          <span className="flex items-center gap-2">
            <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-base" />
            <span>No Locked-in Contracts</span>
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-zinc-700">•</span>
          <span className="flex items-center gap-2">
            <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-base" />
            <span>100% Registered CPA &amp; BAS Agents</span>
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-zinc-700">•</span>
          <span className="flex items-center gap-2">
            <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-base" />
            <span>Seamless Xero &amp; MYOB Integration</span>
          </span>
        </div>
      </div>
    </section>
  );
}
