'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Tag } from 'antd';
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  UserOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import styles from './IndividualServicesList.module.css';

export default function IndividualServicesList() {
  const services = [
    {
      id: 'individual-tax-return',
      number: '01',
      tag: 'CORE INDIVIDUAL SERVICE',
      badgeText: 'Fast 48h Lodgement',
      badgeIcon: <ThunderboltOutlined className="text-amber-400 text-sm" />,
      icon: <UserOutlined className="text-brand-primary text-xl" />,
      title: 'Individual Tax Return',
      description:
        'At Financially Up, our experienced team of tax professionals is dedicated to providing expert assistance with your individual tax returns. We ensure accurate and efficient compliance with the guidelines set forth by the Australian Taxation Office (ATO).',
      highlights: [
        'Salary, wages & Centrelink lodgements',
        'Work-from-home, vehicle & tool deductions',
        'Direct ATO pre-fill data integration',
        'Senior CPA tax agent review & sign-off',
      ],
      image: '/images/services/service1.webp',
      imageAlt: 'Individual Tax Return Specialist - Financially Up',
      href: '/individual-services/individual-tax-return',
      ctaText: 'Read More',
      reverseLayout: false,
    },
    {
      id: 'investment-properties',
      number: '02',
      tag: 'FOR PROPERTY INVESTORS',
      badgeText: '100% ATO Compliant',
      badgeIcon: <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />,
      icon: <HomeOutlined className="text-brand-primary text-xl" />,
      title: 'Individual Tax Return + Investment Property',
      description:
        'At Financially Up, our team of tax professionals specializes in individual tax returns involving investment properties. We understand the unique tax considerations and deductions applicable to rental property owners.',
      highlights: [
        'Residential & commercial rental income schedules',
        'Mortgage interest & council rates deductions',
        'Depreciation schedule (Division 40 & 43) claims',
        'Capital Gains Tax (CGT) advice on sales',
      ],
      image: '/images/services/service2.webp',
      imageAlt: 'Investment Property Tax Return Specialist - Financially Up',
      href: '/individual-services/individual-tax-return-with-investment-properties',
      ctaText: 'Read More',
      reverseLayout: true,
    },
  ];

  return (
    <section className={`bg-gradient-to-b from-white via-brand-bg-lighter/40 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 py-16 sm:py-24 transition-colors duration-300 ${styles.sectionWrapper}`}>
      {/* Background Ambient Orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 shadow-sm"
          >
            Explore Our Services
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Comprehensive Individual Tax Lodgement Solutions
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-normal">
            Whether you have simple salary income or complex investment property portfolios, our registered CPA accountants maximize your tax deductions safely.
          </p>
        </div>

        {/* Services Cards */}
        {services.map((service, idx) => (
          <div
            key={service.id}
            className={`group bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-zinc-800 shadow-sm ${styles.serviceCard}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  service.reverseLayout ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className={`relative ${styles.serviceImageWrapper} shadow-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-2.5`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={580}
                    height={440}
                    priority={idx === 0}
                    className="w-full h-[320px] sm:h-[380px] object-cover rounded-2xl"
                  />

                  {/* Number Badge Top-Left */}
                  <div className="absolute top-6 left-6 bg-brand-primary text-white font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-md tracking-wider">
                    {service.number}
                  </div>

                  {/* Floating Trust Badge Bottom-Right */}
                  <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-zinc-800 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-zinc-50 z-10">
                    {service.badgeIcon}
                    <span>{service.badgeText}</span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  service.reverseLayout ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <Tag
                    color="green"
                    className="font-bold text-[11px] uppercase px-3 py-0.5 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 tracking-wider"
                  >
                    {service.tag}
                  </Tag>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Highlights List in 2x2 Grid Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {service.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className={`p-3 rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-zinc-200 ${styles.bulletChip}`}
                    >
                      <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-sm shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-3">
                  <Link href={service.href}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      iconPlacement="end"
                      className="h-12 px-8 rounded-xl font-bold text-sm bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                    >
                      {service.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
