'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Tag } from 'antd';
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  FileProtectOutlined,
} from '@ant-design/icons';

export default function BasGstOverview() {
  const highlights = [
    'Extra 4-week ATO lodgement & payment extension for BAS',
    'Quarterly & monthly GST, PAYGW & PAYGI reconciliations',
    'Single Touch Payroll (STP Phase 2) year-end finalizations',
    'Registered BAS agent protection against ATO penalties & audits',
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <Tag
              color="green"
              className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
            >
              Registered BAS Agents
            </Tag>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Expert Assistance for BAS/GST lodgement
            </h2>

            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              At Financially Up, we specialize in providing expert assistance with Business Activity Statement (BAS) lodgment and Goods and Services Tax (GST) compliance for all types of entities. Our experienced team of tax professionals understands the unique obligations and complexities associated with BAS and GST. Whether you are an individual, partnership, trust, or company, we have the expertise to simplify your compliance process. Contact us today to schedule a meeting with our experienced consultation.
            </p>

            {/* 2x2 Grid Highlights Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:bg-brand-primary-soft transition-all"
                >
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-sm shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
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

          {/* Right Graphic Frame with Floating Badge */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 p-3">
              <Image
                src="/images/services/service1.webp"
                alt="Expert Assistance for BAS/GST Lodgement"
                width={550}
                height={420}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-zinc-800 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-zinc-50 z-10">
                <FileProtectOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
                <span>4-Week ATO Extension</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
