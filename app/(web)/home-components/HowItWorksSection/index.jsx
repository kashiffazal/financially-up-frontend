'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import styles from './HowItWorksSection.module.css';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 'STEP 01',
      title: 'Book a Consultation',
      description: 'Schedule a complimentary consultation with a Financially Up tax expert.',
    },
    {
      number: 'STEP 02',
      title: 'Meet Us Online',
      description: 'Attend a scheduled Zoom meeting with your consultant from the comfort of your space.',
    },
    {
      number: 'STEP 03',
      title: 'Lodge & Save',
      description: 'We prepare, review and lodge - you enjoy accuracy, savings and peace of mind.',
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight mb-2">
            Navigating Your Wealth to New Heights
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400">
            Three simple steps to a smarter tax return.
          </p>
        </div>

        {/* 3 Step Cards with Overlapping Step Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative bg-white dark:bg-zinc-900 rounded-[20px] p-7 sm:p-8 pt-9 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between ${styles.stepCard}`}
            >
              {/* Overlapping Floating Step Badge */}
              <div className="absolute -top-3.5 left-6 bg-brand-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm z-10">
                {step.number}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-50 mb-2.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.description}
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
              className="h-11 px-8 rounded-xl font-bold text-sm bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
            >
              Let's Get Started
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
