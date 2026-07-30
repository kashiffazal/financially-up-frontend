'use client';

import React from 'react';
import Link from 'next/link';
import {
  CalculatorOutlined,
  BankOutlined,
  FileProtectOutlined,
  BookOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import styles from './QuickServicesSection.module.css';

export default function QuickServicesSection() {
  const services = [
    {
      title: 'Individual Tax',
      description: 'Fast individual returns & investment property.',
      href: '/individual-services/individual-tax-return',
      icon: (
        <CalculatorOutlined className="text-brand-primary text-lg" />
      ),
    },
    {
      title: 'Business Tax',
      description: 'Sole trader, partnership, trust & company.',
      href: '/business-services/company-tax-return',
      icon: <BankOutlined className="text-brand-primary text-lg" />,
    },
    {
      title: 'Business Registration',
      description: 'GST, ABN, company & trust setup.',
      href: '/resources/registration-forms/company-registration',
      icon: (
        <FileProtectOutlined className="text-brand-primary text-lg" />
      ),
    },
    {
      title: 'Bookkeeping',
      description: 'Accurate books, payroll & reporting.',
      href: '/book-keeping',
      icon: <BookOutlined className="text-brand-primary text-lg" />,
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-4 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`group bg-white dark:bg-zinc-900 rounded-[20px] p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 transition-all duration-300 ease-out flex flex-col justify-between ${styles.quickServicesCard}`}
            >
              <div>
                <div className="w-11 h-11 rounded-[14px] bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>

                <h3 className="text-md font-semibold text-slate-900 dark:text-zinc-50 mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-primary dark:text-emerald-400">
                <span>Learn more</span>
                <ArrowRightOutlined className="text-xs group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
