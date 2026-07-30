'use client';

import React from 'react';
import { StarFilled, ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './GoogleReviewsSection.module.css';

export default function GoogleReviewsSection() {
  return (
    <section className="bg-white dark:bg-zinc-950 py-10 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className={`bg-gradient-to-r from-emerald-50/60 via-white to-emerald-50/40 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-900/60 rounded-3xl border border-emerald-100 dark:border-zinc-800 p-8 sm:p-10 shadow-sm ${styles.reviewsContainer}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-950 shadow-md border border-slate-100 dark:border-zinc-800 flex items-center justify-center shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-400 text-base">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                  <span className="text-sm font-extrabold text-slate-900 dark:text-zinc-50">
                    4.9 / 5.0 Rating
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-tight">
                  Trusted Google Reviews
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal">
                  Over 190+ verified Australians share their experience with Financially Up tax services.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700 dark:text-zinc-300">
                <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-950 px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-zinc-800 shadow-sm">
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400" />
                  <span>100% Verified Reviews</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-950 px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-zinc-800 shadow-sm">
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400" />
                  <span>Top Rated Tax Firm</span>
                </div>
              </div>

              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-6 rounded-xl font-bold text-sm bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                >
                  See All Reviews
                </Button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
