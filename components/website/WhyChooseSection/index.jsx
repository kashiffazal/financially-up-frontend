"use client";

import React from "react";
import Link from "next/link";
import { Button, Tag } from "antd";
import {
  ArrowRightOutlined,
  BankOutlined,
  DollarOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  SolutionOutlined,
  SafetyCertificateOutlined,
  CalculatorOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  CalendarOutlined,
  UploadOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import styles from "./WhyChooseSection.module.css";

/**
 * Universal Icon Resolver for WhyChoose Section
 * Supports both string icon identifiers and direct React elements.
 */
const renderWhyChooseIcon = (icon) => {
  const iconClasses = "text-2xl text-brand-primary dark:text-emerald-400";
  if (!icon) return <BankOutlined className={iconClasses} />;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "bank":
        return <BankOutlined className={iconClasses} />;
      case "dollar":
      case "price":
        return <DollarOutlined className={iconClasses} />;
      case "dollar-circle":
      case "fees":
        return <DollarCircleOutlined className={iconClasses} />;
      case "calendar":
      case "appointment":
        return <CalendarOutlined className={iconClasses} />;
      case "upload":
      case "records":
        return <UploadOutlined className={iconClasses} />;
      case "file-done":
      case "review":
        return <FileDoneOutlined className={iconClasses} />;
      case "line-chart":
      case "chart":
        return <LineChartOutlined className={iconClasses} />;
      case "solution":
      case "compliance":
      case "audit":
        return <SolutionOutlined className={iconClasses} />;
      case "safety":
      case "shield":
      case "protect":
      case "approve":
        return <SafetyCertificateOutlined className={iconClasses} />;
      case "file-protect":
        return <FileProtectOutlined className={iconClasses} />;
      case "file-text":
      case "file":
        return <FileTextOutlined className={iconClasses} />;
      case "calculator":
        return <CalculatorOutlined className={iconClasses} />;
      case "clock":
      case "history":
        return <ClockCircleOutlined className={iconClasses} />;
      default:
        return <BankOutlined className={iconClasses} />;
    }
  }
  return icon;
};

/**
 * WhyChooseSection Component
 * ==========================
 * Mutual, reusable advantage & process grid component for Service Pages.
 * Patterned after `ServicesGrid` and `FeatureHighlightsSection`.
 *
 * @param {Object} props
 * @param {string} [props.sectionId] - HTML id for anchor navigation
 * @param {string} [props.tag="The Financially Up Advantage"] - Header badge tag
 * @param {string} props.title - H2 headline
 * @param {string} [props.subtitle] - Paragraph description
 * @param {Array<Object>} [props.items] - Advantage cards { step, badge, category, title, desc, description, icon }
 * @param {Array<Object>} [props.points] - Alias for props.items
 * @param {number} [props.columns=4] - Grid columns (3, 4, or 5)
 * @param {string} [props.ctaText="Book an Appointment"] - Primary CTA button label (set null to hide)
 * @param {string} [props.ctaHref="/book-an-appointment"] - Primary CTA target link
 * @param {string} [props.className] - Outer section styling classes
 * @param {string} [props.containerClassName="max-w-7xl"] - Inner container width
 */
export default function WhyChooseSection({
  sectionId,
  tag = "The Financially Up Advantage",
  title,
  subtitle,
  items,
  points,
  columns = 4,
  ctaText = "Book an Appointment",
  ctaHref = "/book-an-appointment",
  className = "bg-brand-primary-soft/30 dark:bg-zinc-900/30 pt-12 pb-12 md:pt-20 md:pb-20 border-t border-b border-slate-100 dark:border-zinc-800 transition-colors duration-300",
  containerClassName = "max-w-7xl",
}) {
  const cardList = items || points || [];
  const hasHeader = Boolean(tag || title || subtitle);

  const gridColsClass =
    columns === 5
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      : columns === 3
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <section id={sectionId} className={className}>
      <div className={`${containerClassName} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Optional Section Header */}
        {hasHeader && (
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-12 sm:mb-14">
            {tag && (
              <Tag color="green" className="brand-section-tag">
                {tag}
              </Tag>
            )}

            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Feature Grid with Step Badges */}
        <div className={`grid ${gridColsClass} gap-6 sm:gap-7 mb-12 sm:mb-14`}>
          {cardList.map((item, idx) => {
            const stepNumber = item.step || String(idx + 1).padStart(2, "0");
            const badgeText = item.badge || item.category || item.tag;
            const description = item.desc || item.description;
            const isCtaCard = Boolean(item.isCta);

            if (isCtaCard) {
              const ctaContent = (
                <>
                  <div className="space-y-4">
                    {/* Icon & CTA Pill Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-white/15 dark:bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {renderWhyChooseIcon(item.icon)}
                      </div>
                      {badgeText && (
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full border border-white/20">
                          {badgeText}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug m-0">
                      {item.title}
                    </h3>

                    {/* Description */}
                    {description && (
                      <p className="text-xs text-white/90 dark:text-zinc-300 leading-relaxed font-normal m-0">
                        {description}
                      </p>
                    )}
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-4 mt-6 border-t border-white/20 flex items-center justify-between font-bold text-xs sm:text-sm text-white">
                    <span>{item.actionText || "Book an Appointment"}</span>
                    <ArrowRightOutlined className="text-xs group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </>
              );

              const ctaClasses = `group bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-hover)] to-[var(--brand-primary-active)] dark:from-[var(--brand-primary-active)] dark:via-zinc-900 dark:to-zinc-950 text-white rounded-lg p-7 border border-[var(--brand-border-hover)]/40 dark:border-[var(--brand-border-hover)]/30 flex flex-col justify-between shadow-lg shadow-[var(--brand-primary)]/20 ${styles.ctaCard}`;

              if (item.href) {
                return (
                  <Link
                    key={item.id || idx}
                    href={item.href}
                    className={`${ctaClasses} block no-underline`}
                  >
                    {ctaContent}
                  </Link>
                );
              }

              return (
                <div key={item.id || idx} className={ctaClasses}>
                  {ctaContent}
                </div>
              );
            }

            return (
              <div
                key={item.id || idx}
                className={`group relative bg-white dark:bg-zinc-900 p-7 rounded-lg border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between overflow-hidden ${styles.whyChooseCard}`}
              >
                {/* Top Soft Color Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary via-emerald-400 to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Icon & Big Faded Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-brand-primary-soft dark:bg-emerald-950/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {renderWhyChooseIcon(item.icon)}
                    </div>
                    <span className="text-2xl font-black text-slate-200 dark:text-zinc-800 group-hover:text-brand-primary/30 dark:group-hover:text-emerald-400/30 transition-colors select-none font-mono">
                      {stepNumber}
                    </span>
                  </div>

                  {/* Badge & Title */}
                  <div>
                    {badgeText && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
                        {badgeText}
                      </span>
                    )}
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-snug m-0">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  {description && (
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Centered CTA Button */}
        {ctaText && ctaHref && (
          <div className="text-center">
            <Link href={ctaHref}>
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-12 px-8 rounded-lg font-bold text-base bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
