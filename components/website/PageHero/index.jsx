'use client';

import React from 'react';
import Link from 'next/link';
import { SafetyCertificateOutlined, RightOutlined } from '@ant-design/icons';
import styles from './PageHero.module.css';

export default function PageHero({
  breadcrumbs = [],
  badgeTag = 'ATO Registered Tax Agents',
  title = 'Individual Tax Services in Australia',
  subtitle = 'Expert Assistance for ATO Compliance',
}) {
  return (
    <section className={`${styles.heroBanner} text-white py-14 sm:py-18 shadow-md`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Dynamic Breadcrumbs Navigation */}
        {breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs font-semibold text-emerald-100 mb-2">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-white font-bold' : ''}>{crumb.label}</span>
                  )}
                  {!isLast && <RightOutlined className="text-[10px] text-emerald-200" />}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Optional Badge Tag */}
        {badgeTag && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <SafetyCertificateOutlined className="text-sm text-emerald-200" />
            <span>{badgeTag}</span>
          </div>
        )}

        {/* Page Title */}
        {title && (
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
