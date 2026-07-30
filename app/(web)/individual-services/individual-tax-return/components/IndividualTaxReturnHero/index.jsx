'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Tag } from 'antd';
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function IndividualTaxReturnOverview() {
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
              ATO Registered Tax Agents
            </Tag>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Expert Assistance for Individual Tax Returns
            </h2>

            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              At Financially Up, our experienced team of tax professionals is dedicated to providing expert assistance with your individual tax returns. We ensure accurate and efficient compliance with the guidelines set forth by the Australian Taxation Office (ATO).
            </p>

            <ul className="space-y-2.5 pt-2">
              {[
                'Fast 48-hour turnarounds on online lodgements',
                'Maximized work-related & self-education deductions',
                'Fee-from-refund option available with zero upfront costs',
                'Registered CPA tax agent review for 100% peace of mind',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-zinc-200">
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-base shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

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

          {/* Right Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 p-3">
              <Image
                src="/images/services/service1.webp"
                alt="Expert Assistance for Individual Tax Returns"
                width={550}
                height={420}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
