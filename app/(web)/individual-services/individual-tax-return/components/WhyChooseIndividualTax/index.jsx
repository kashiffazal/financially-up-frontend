'use client';

import React from 'react';
import Link from 'next/link';
import { Tag, Button } from 'antd';
import {
  BookOutlined,
  UserOutlined,
  RiseOutlined,
  SafetyOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

export default function WhyChooseIndividualTax() {
  const points = [
    {
      step: '01',
      tag: 'ATO Knowledge',
      title: 'Extensive Knowledge & ATO Compliance',
      desc: "Our team possesses extensive knowledge of ATO tax regulations and stays updated with the latest changes. We provide accurate and up-to-date advice to maximize your tax benefits and minimize errors or audits.",
      icon: <BookOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
    },
    {
      step: '02',
      tag: 'Personalized Strategy',
      title: 'Personalized Approach for Your Financial Situation',
      desc: "We take the time to thoroughly assess your circumstances, ensuring that your individual tax return is tailored to your specific needs. We analyze all income sources and deductions for optimal results.",
      icon: <UserOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
    },
    {
      step: '03',
      tag: 'Maximum Refund',
      title: 'Maximizing Deductions for Optimal Results',
      desc: 'We specialize in identifying work-related expenses, vehicle costs, self-education, home office running expenses, and charitable donations to ensure you receive your maximum legally entitled refund.',
      icon: <RiseOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
    },
    {
      step: '04',
      tag: 'Complex Lodgements',
      title: 'Handling Complexities with Ease',
      desc: 'Whether dealing with capital gains, foreign income, shares, or multiple income streams, our registered CPA tax agents navigate complex tax schedules smoothly while safeguarding ATO compliance.',
      icon: <SafetyOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-brand-bg-lighter/60 via-slate-50/50 to-white dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-zinc-950 py-16 sm:py-24 border-t border-slate-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 shadow-sm"
          >
            Why Choose Financially Up
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Why Choose Financially Up for Your Individual Tax Returns?
          </h2>

          <p className="text-sm text-slate-500 dark:text-zinc-400">
            Dedicated CPA tax professionals committed to getting you the highest refund with total peace of mind.
          </p>
        </div>

        {/* 4 Executive Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-zinc-900 p-7 rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-primary hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
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
                    {item.tag}
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

        {/* Center CTA Button */}
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
