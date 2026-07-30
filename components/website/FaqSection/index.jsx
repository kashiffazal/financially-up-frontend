'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Collapse, Tag, Button } from 'antd';
import {
  DownOutlined,
  QuestionCircleOutlined,
  StarFilled,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import ContactUsModal from '@/components/website/ContactUsModal';
import styles from './FaqSection.module.css';

export default function FaqSection({
  badgeTag = 'What We Do',
  title = 'Our Individual Tax Return Services',
  subtitle = 'Find fast answers to common questions about our individual tax lodgements, deductions, and CPA services.',
  image = '/images/services/service1.webp',
  imageAlt = 'Individual Tax Return Services Overview',
  items,
  defaultActiveKey = '1',
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const defaultFaqs = [
    {
      key: '1',
      label: 'Comprehensive Review and Preparation',
      children: (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
          Identifying eligible deductions is crucial for minimizing your taxable income and maximizing your tax savings. Our team at Financially Up will diligently explore all potential deductions applicable to your situation. From commonly claimed deductions to often overlooked ones, we leave no stone unturned in helping you claim every deduction you're entitled to.
        </p>
      ),
    },
    {
      key: '2',
      label: 'Deduction Identification for Tax Savings',
      children: (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
          Identifying eligible deductions is crucial for minimizing your taxable income and maximizing your tax savings. Our team at Financially Up will diligently explore all potential deductions applicable to your situation. From commonly claimed deductions to often overlooked ones, we leave no stone unturned in helping you claim every deduction you're entitled to.
        </p>
      ),
    },
    {
      key: '3',
      label: 'Lodgment and Compliance Assistance',
      children: (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
          Our experienced and certified team meticulously reviews every detail of your financial information, applying the latest tax laws and industry-standard practices, to ensure maximum accuracy and compliance.
        </p>
      ),
    },
    {
      key: '4',
      label: 'Flexible Payment & Fee-From-Refund Options',
      children: (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
          Absolutely, we offer the flexibility to either pay upfront or directly from your tax refund, making the process convenient for you.
        </p>
      ),
    },
    {
      key: '5',
      label: 'Ongoing Support and Tax Planning',
      children: (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
          We strive to process tax returns swiftly, and typically, our clients receive their tax refunds within 10 working days.
        </p>
      ),
    },
    {
      key: '6',
      label: 'Take Control of Your Individual Tax Returns Today',
      children: (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
          We strive to process tax returns swiftly, and typically, our clients receive their tax refunds within 10 working days.
        </p>
      ),
    },
  ];

  const rawFaqs = items || defaultFaqs;

  /* Format accordion items with numbered badges */
  const formattedFaqs = rawFaqs.map((faq, idx) => ({
    key: faq.key || String(idx + 1),
    label: (
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-xl bg-brand-primary-soft dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
          {String(idx + 1).padStart(2, '0')}
        </span>
        <span className="text-slate-900 dark:text-zinc-50 font-bold text-sm sm:text-base">
          {faq.label}
        </span>
      </div>
    ),
    children: faq.children,
  }));

  return (
    <section className={`bg-gradient-to-b from-white via-brand-bg-lighter/50 to-white dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950 py-16 sm:py-24 transition-colors duration-300 ${styles.faqSectionWrapper}`}>
      {/* Background Ambient Glow Orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          {badgeTag && (
            <Tag
              color="green"
              className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 shadow-sm"
            >
              {badgeTag}
            </Tag>
          )}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Two-Column Redesigned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ── Left Column: Rich Interactive Feature Card (Col 5) ── */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 ${styles.imageCardFrame}`}>
              <Image
                src={image}
                alt={imageAlt}
                width={500}
                height={450}
                priority
                className="w-full h-[320px] sm:h-[380px] object-cover rounded-2xl"
              />

              {/* Floating Top Rating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-zinc-800 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-zinc-50 z-10">
                <StarFilled className="text-amber-400 text-sm" />
                <span>4.9 / 5.0 Rating</span>
              </div>

              {/* Floating Bottom ATO Compliance Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-xs font-bold text-brand-primary dark:text-emerald-400 z-10">
                <SafetyCertificateOutlined className="text-sm" />
                <span>100% ATO Compliant</span>
              </div>
            </div>

            {/* Bottom Teaser Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-primary-soft to-emerald-50 dark:from-emerald-950/70 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-900/60 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-md">
                  <CustomerServiceOutlined className="text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-zinc-100">
                    Still Have Questions?
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                    Talk directly with a CPA Tax Agent
                  </div>
                </div>
              </div>

              <Button
                type="primary"
                onClick={() => setIsContactModalOpen(true)}
                className="h-9 px-4 rounded-xl font-bold text-xs bg-brand-primary hover:bg-brand-primary-hover shadow-sm"
              >
                Ask Agent
              </Button>
            </div>
          </div>

          {/* ── Right Column: Redesigned Accordion List (Col 7) ── */}
          <div className="lg:col-span-7 space-y-4">
            {/* Header indicator */}
            <div className="flex items-center justify-between px-1 pb-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 flex items-center gap-1.5">
                <QuestionCircleOutlined className="text-brand-primary" />
                <span>{formattedFaqs.length} Frequently Asked Questions</span>
              </div>
              <span className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
                Click to expand
              </span>
            </div>

            {/* Accordion List (Open One at a Time) */}
            <div className={styles.servicesAccordion}>
              <Collapse
                accordion
                items={formattedFaqs}
                defaultActiveKey={defaultActiveKey}
                ghost={false}
                expandIconPosition="end"
                expandIcon={({ isActive }) => (
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-primary text-white rotate-180 shadow-md'
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                    }`}
                  >
                    <DownOutlined className="text-xs" />
                  </div>
                )}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Contact Us Modal Popup for Direct Enquiries */}
      <ContactUsModal open={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
