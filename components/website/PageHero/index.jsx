'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SafetyCertificateOutlined, RightOutlined } from '@ant-design/icons';
import styles from './PageHero.module.css';

/**
 * PageHero Component
 * ==================
 * Global Hero Banner for service sub-pages and practice category hubs.
 * Features high-resolution Australian architectural imagery with a deep emerald
 * dark overlay, dynamic breadcrumbs, trust tags, and high-contrast typography.
 */
export default function PageHero({
  breadcrumbs = [],
  badgeTag = 'ATO Registered Tax Agents',
  title = 'Individual Tax Services in Australia',
  subtitle = 'Expert Assistance for ATO Compliance',
  bgImage = '/images/services/page-hero-bg.jpg',
}) {
  return (
    <section className="relative overflow-hidden bg-[#012413] text-white pt-12 pb-12 md:pt-20 md:pb-20 shadow-lg border-b border-emerald-900/60">
      {/* Layer 1: Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title || "Australian Accounting Services"}
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />
      </div>

      {/* Layer 2: Dark Emerald Color Overlay for Contrast & Depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-emerald-950/92 via-[#00381e]/85 to-emerald-950/92 z-[1] pointer-events-none" 
        aria-hidden="true"
      />

      {/* Subtle Ambient Light Reflections */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none z-[2]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none z-[2]" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Dynamic Breadcrumbs Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-2 text-xs font-semibold text-emerald-200/90 mb-2">
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
                  {!isLast && <RightOutlined className="text-[10px] text-emerald-300" />}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Optional Badge Tag */}
        {badgeTag && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <SafetyCertificateOutlined className="text-sm text-emerald-300" />
            <span>{badgeTag}</span>
          </div>
        )}

        {/* Page Title */}
        {title && (
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-sm text-white">
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-emerald-100/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-xs">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Micro Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />
    </section>
  );
}
