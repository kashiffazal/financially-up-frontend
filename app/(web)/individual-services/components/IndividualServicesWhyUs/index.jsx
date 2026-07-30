'use client';

import React from 'react';
import Link from 'next/link';
import { Tag, Button } from 'antd';
import {
  AuditOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import styles from './IndividualServicesWhyUs.module.css';

export default function IndividualServicesWhyUs() {
  const benefits = [
    {
      title: 'Registered ATO Tax Agents',
      desc: 'All returns are handled by registered tax agents with deep knowledge of Australian tax law and ATO compliance guidelines.',
      icon: <SafetyCertificateOutlined className="text-brand-primary text-xl" />,
    },
    {
      title: 'Maximum Refund Guarantee',
      desc: 'Our accountants rigorously analyze every work expense, property cost, and deduction opportunity to maximize your tax refund.',
      icon: <AuditOutlined className="text-brand-primary text-xl" />,
    },
    {
      title: 'Fast 48-Hour Processing',
      desc: 'Enjoy rapid 48-hour turnarounds from initial form submission to final ATO electronic lodgement.',
      icon: <ThunderboltOutlined className="text-brand-primary text-xl" />,
    },
  ];

  return (
    <section className="bg-brand-bg-lighter dark:bg-zinc-900/40 py-16 sm:py-24 border-t border-slate-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
          >
            Why Choose Financially Up
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Stress-Free Tax Lodgements for Australians
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-normal">
            Whether you earn salary &amp; wages or manage rental properties, we simplify your ATO compliance.
          </p>
        </div>

        {/* 3 Non-Boxed Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((item, idx) => (
            <div key={idx} className={styles.statRow}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-50">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
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
