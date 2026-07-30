'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Tag } from 'antd';
import {
  ArrowRightOutlined,
  BankOutlined,
  DollarOutlined,
  LineChartOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

export default function WhyChooseCompany() {
  const whyChoosePoints = [
    {
      step: '01',
      title: 'Company-Specific Knowledge',
      desc: 'With years of experience in serving PTY LTD companies, we have developed company-specific tax knowledge. We stay up to date with the latest ATO regulations and guidelines to address the unique needs of your business structure.',
      icon: <BankOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      badge: 'Expert Knowledge',
    },
    {
      step: '02',
      title: 'Optimizing Tax Efficiency',
      desc: 'Maximizing tax efficiency is crucial for companies to minimize tax liabilities and maximize profitability. Our CPA team specializes in identifying strategies, deductions, and credits to ensure your company operates tax-efficiently.',
      icon: <DollarOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      badge: 'Tax Savings',
    },
    {
      step: '03',
      title: 'Comprehensive Tax Planning',
      desc: 'We go beyond simply lodging your return. We offer year-round strategic corporate tax planning to help you make informed decisions that benefit your company bottom line while proactively minimizing tax risk.',
      icon: <LineChartOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      badge: 'Strategic Advice',
    },
    {
      step: '04',
      title: 'Streamlined Compliance',
      desc: 'Maintaining accurate financial statements and fulfilling ASIC & ATO reporting obligations is vital. We prepare compliant statutory accounts, general ledgers, and company returns to eliminate audit risk.',
      icon: <SolutionOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      badge: 'Audit Protection',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-brand-bg-lighter/60 via-slate-50/50 to-white dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-zinc-950 py-16 sm:py-24 border-t border-slate-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 shadow-sm"
          >
            The Financially Up Advantage
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Why Choose Financially Up for Your Company Tax Returns?
          </h2>

          <p className="text-sm text-slate-500 dark:text-zinc-400">
            Proactive corporate taxation solutions built specifically for small to medium PTY LTD companies in Australia.
          </p>
        </div>

        {/* 4-Column Feature Grid with Step Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
          {whyChoosePoints.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-zinc-900 p-7 rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-primary hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Top Soft Color Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary via-emerald-400 to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200 dark:text-zinc-800 group-hover:text-brand-primary/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-12 px-8 rounded-xl font-bold text-base bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
