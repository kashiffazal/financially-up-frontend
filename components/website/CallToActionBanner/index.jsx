"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined, MailOutlined } from "@ant-design/icons";
import ContactUsModal from "@/components/website/ContactUsModal";
import styles from "./CallToActionBanner.module.css";

/**
 * CallToActionBanner Component
 * ===========================
 * Centralized, eye-catching pre-footer banner featuring an animated emerald gradient,
 * floating decorative orbs, responsive typography, and direct modal integration.
 *
 * Supports optional customizable props while retaining original site-wide defaults.
 *
 * @param {Object} props
 * @param {string} [props.tag] - Small uppercase badge text above the headline
 * @param {string} [props.title] - Main banner headline
 * @param {string} [props.subtitle] - Supporting descriptive copy
 * @param {string} [props.primaryButtonText] - Label for primary action button
 * @param {string} [props.primaryButtonHref] - Link target for primary button
 * @param {string} [props.secondaryButtonText] - Label for secondary action button
 * @param {Function} [props.onSecondaryClick] - Optional callback override for secondary button
 */
export default function CallToActionBanner({
  tag = "Ready When You Are",
  title = "Unravel the complexities of your financial world.",
  subtitle = "Reach out for personalised advice and effective solutions tailored to your financial landscape - 100% online, ATO compliant.",
  primaryButtonText = "Book an Appointment",
  primaryButtonHref = "/book-an-appointment",
  secondaryButtonText = "Contact Us",
  onSecondaryClick,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="bg-white dark:bg-zinc-950 pt-12 pb-12 md:pt-20 md:pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`${styles.ctaGradientAnimated} rounded-lg p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden`}
        >
          {/* Decorative Animated Glowing Ambient Circles */}
          <div
            className={`${styles.animateCtaCircle1} absolute -top-28 -left-28 w-80 h-80 rounded-full bg-brand-primary-hover/70 dark:bg-emerald-500/50 blur-2xl pointer-events-none`}
          />
          <div
            className={`${styles.animateCtaCircle2} absolute -bottom-36 -right-36 w-[420px] h-[420px] rounded-full bg-brand-primary-hover/70 dark:bg-emerald-500/50 blur-2xl pointer-events-none`}
          />
          <div
            className={`${styles.animateCtaCircle1} absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-white/15 blur-xl pointer-events-none`}
          />

          {/* Uppercase Tag Badge */}
          {tag && (
            <span className="relative z-10 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-200/90 mb-4">
              {tag}
            </span>
          )}

          {/* Main Headline */}
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.15] mb-5">
            {title}
          </h2>

          {/* Subtitle Copy */}
          {subtitle && (
            <p className="relative z-10 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              {subtitle}
            </p>
          )}

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link href={primaryButtonHref}>
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-12 px-8 rounded-lg font-bold text-base bg-white text-brand-primary hover:bg-slate-50 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                {primaryButtonText}
              </Button>
            </Link>

            <Button
              size="large"
              icon={<MailOutlined />}
              onClick={handleSecondaryClick}
              className="h-12 px-8 rounded-lg font-bold text-base bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-200"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Us Modal Popup */}
      <ContactUsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
