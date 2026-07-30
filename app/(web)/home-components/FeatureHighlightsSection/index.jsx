'use client';

import React from 'react';
import { Tag } from 'antd';
import {
  EnvironmentOutlined,
  FileTextOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import styles from './FeatureHighlightsSection.module.css';

export default function FeatureHighlightsSection() {
  const highlights = [
    {
      category: 'LOCAL SERVICE',
      title: 'Australian Owned & Operated',
      description:
        'Registered tax agents based in Australia, providing trusted expertise across all states.',
      icon: <EnvironmentOutlined />,
    },
    {
      category: 'HASSLE-FREE',
      title: '100% Online & No Paperwork',
      description:
        'Submit documents securely from anywhere using your phone, tablet, or desktop.',
      icon: <FileTextOutlined />,
    },
    {
      category: 'REPUTABLE',
      title: 'No Hidden Fees or Charges',
      description:
        'Fixed upfront pricing so you always know exactly what you pay before we start.',
      icon: <SafetyOutlined />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50/25 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-14">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
          >
            Why Financially Up
          </Tag>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Empower Your Finances with Precision
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-normal">
            Designed for busy Australians seeking fast, accurate, and completely transparent tax services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-white dark:bg-zinc-900/90 rounded-[22px] p-7 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between ${styles.highlightCard}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-xl text-brand-primary dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-primary dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-900/50">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-50 mb-2.5 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-zinc-300">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
