'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { ArrowRightOutlined, MailOutlined } from '@ant-design/icons';
import ContactUsModal from '@/components/website/ContactUsModal';
import styles from './CallToActionBanner.module.css';

export default function CallToActionBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${styles.ctaGradientAnimated} rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden`}>

          <div className={`${styles.animateCtaCircle1} absolute -top-28 -left-28 w-80 h-80 rounded-full bg-brand-primary-hover/70 dark:bg-emerald-500/50 blur-2xl pointer-events-none`} />
          <div className={`${styles.animateCtaCircle2} absolute -bottom-36 -right-36 w-[420px] h-[420px] rounded-full bg-brand-primary-hover/70 dark:bg-emerald-500/50 blur-2xl pointer-events-none`} />
          <div className={`${styles.animateCtaCircle1} absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-white/15 blur-xl pointer-events-none`} />

          <span className="relative z-10 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-200/90 mb-4">
            Ready When You Are
          </span>

          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.15] mb-5">
            Unravel the complexities of your financial world.
          </h2>

          <p className="relative z-10 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Reach out for personalised advice and effective solutions tailored to your financial landscape — 100% online, ATO compliant.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/book-an-appointment">
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-12 px-8 rounded-xl font-bold text-base bg-white text-brand-primary hover:bg-slate-50 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Book an Appointment
              </Button>
            </Link>

            <Button
              size="large"
              icon={<MailOutlined />}
              onClick={() => setIsModalOpen(true)}
              className="h-12 px-8 rounded-xl font-bold text-base bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Button>
          </div>

        </div>
      </div>

      {/* Contact Us Modal Popup */}
      <ContactUsModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
