"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRightOutlined,
  CalculatorOutlined,
  BankOutlined,
  FileProtectOutlined,
  BookOutlined,
  FileTextOutlined,
  CrownOutlined,
  ShopOutlined,
  HomeOutlined,
  LineChartOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  GiftOutlined,
  EditOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  ToolOutlined,
  CalendarOutlined,
  RiseOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import styles from "./ServicesGrid.module.css";

/**
 * Universal Icon Resolver
 * Allows passing either direct React elements or string keys from Server Components.
 */
const renderIcon = (icon, defaultClasses = "text-brand-primary text-xl") => {
  if (!icon) return null;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "calculator":
        return <CalculatorOutlined className={defaultClasses} />;
      case "bank":
        return <BankOutlined className={defaultClasses} />;
      case "file-protect":
      case "protect":
        return <FileProtectOutlined className={defaultClasses} />;
      case "book":
        return <BookOutlined className={defaultClasses} />;
      case "file-text":
      case "file":
        return <FileTextOutlined className={defaultClasses} />;
      case "crown":
        return <CrownOutlined className={defaultClasses} />;
      case "shop":
        return <ShopOutlined className={defaultClasses} />;
      case "home":
        return <HomeOutlined className={defaultClasses} />;
      case "line-chart":
      case "chart":
        return <LineChartOutlined className={defaultClasses} />;
      case "dollar":
        return <DollarOutlined className={defaultClasses} />;
      case "thunderbolt":
      case "crypto":
        return <ThunderboltOutlined className={defaultClasses} />;
      case "global":
      case "foreign":
        return <GlobalOutlined className={defaultClasses} />;
      case "gift":
      case "shares":
        return <GiftOutlined className={defaultClasses} />;
      case "edit":
      case "amendment":
        return <EditOutlined className={defaultClasses} />;
      case "clock":
      case "overdue":
        return <ClockCircleOutlined className={defaultClasses} />;
      case "safety":
      case "deceased":
        return <SafetyCertificateOutlined className={defaultClasses} />;
      case "user":
      case "team":
      case "profile":
        return <UserOutlined className={defaultClasses} />;
      case "medicine-box":
      case "medical":
      case "doctor":
        return <MedicineBoxOutlined className={defaultClasses} />;
      case "tool":
      case "contractor":
        return <ToolOutlined className={defaultClasses} />;
      case "calendar":
      case "appointment":
        return <CalendarOutlined className={defaultClasses} />;
      case "rise":
      case "growth":
        return <RiseOutlined className={defaultClasses} />;
      case "phone":
      case "contact":
        return <PhoneOutlined className={defaultClasses} />;
      default:
        return <FileTextOutlined className={defaultClasses} />;
    }
  }
  return icon;
};

/**
 * ServicesGrid Component
 * =====================
 * Mutual, reusable service cards grid for Home Page and Pillar Service Pages.
 *
 * Adopts the clean, interactive card design from the home page with:
 * - Entire card as a clickable Next.js <Link>
 * - Brand primary soft icon badge with hover zoom
 * - Smooth -8px lift with brand glow shadow
 * - Interactive 'Learn more ->' with sliding arrow on hover
 * - Configurable columns: 4 (Home Quick Services, Target Profiles) or 3 (Complete Practice Scope)
 * - Safe string-to-icon mapping for React Server Components
 * - Featured CTA Card variant when svc.isCta is true
 *
 * @param {Object} props
 * @param {string} [props.sectionId] - HTML id for anchor navigation (e.g. "services-overview")
 * @param {string} [props.tag] - Optional section badge tag (e.g. "Complete Practice Scope")
 * @param {string} [props.title] - Optional section H2 headline (e.g. "Our individual tax services")
 * @param {string} [props.subtitle] - Optional section descriptive paragraph
 * @param {Array<Object>} props.services - Array of service items { id, title, description, href, icon, tag, isCta, actionText }
 * @param {Array<Object>} [props.items] - Alias for props.services
 * @param {number} [props.columns=3] - Number of columns on desktop (3 or 4)
 * @param {string} [props.actionText="Learn more"] - Link action label
 * @param {string} [props.containerClassName="max-w-7xl"] - Outer container width
 * @param {string} [props.className] - Additional section classes
 */
export default function ServicesGrid({
  sectionId = "services-overview",
  tag,
  title,
  subtitle,
  services,
  items,
  columns = 3,
  actionText = "Learn more",
  containerClassName = "max-w-7xl",
  className = "py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300",
}) {
  const serviceList = services || items || [];
  const hasHeader = Boolean(tag || title || subtitle);

  const gridColsClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={sectionId} className={className}>
      <div className={`${containerClassName} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Optional Section Header */}
        {hasHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            {tag && (
              <Tag color="green" className="brand-section-tag">
                {tag}
              </Tag>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Unified Service Cards Grid */}
        <div className={`grid ${gridColsClass} gap-6`}>
          {serviceList.map((svc, idx) => {
            const cardKey = svc.id || svc.href || idx;
            const isCtaCard = Boolean(svc.isCta);

            if (isCtaCard) {
              return (
                <Link
                  key={cardKey}
                  href={svc.href}
                  className={`group bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-hover)] to-[var(--brand-primary-active)] dark:from-[var(--brand-primary-active)] dark:via-zinc-900 dark:to-zinc-950 text-white rounded-xl p-6 sm:p-7 border border-[var(--brand-border-hover)]/40 dark:border-[var(--brand-border-hover)]/30 flex flex-col justify-between shadow-lg shadow-[var(--brand-primary)]/20 ${styles.ctaCard}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white/15 dark:bg-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                        {renderIcon(svc.icon, "text-white text-xl")}
                      </div>
                      {svc.tag && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 dark:bg-white/10 text-white font-mono border border-white/20">
                          {svc.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 tracking-tight leading-snug">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/90 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                      {svc.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-bold text-white pt-3 border-t border-white/20 dark:border-zinc-800/80">
                    <span>
                      {svc.actionText || actionText || "Book an Appointment"}
                    </span>
                    <ArrowRightOutlined className="text-xs group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={cardKey}
                href={svc.href}
                className={`group bg-white dark:bg-zinc-900 rounded-xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between ${styles.servicesCard}`}
              >
                <div>
                  {/* Top Row: Icon Container and Optional Micro-Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                      {renderIcon(svc.icon)}
                    </div>
                    {svc.tag && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 font-mono border border-slate-200/60 dark:border-zinc-700/60">
                        {svc.tag}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-zinc-50 mb-2 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                    {svc.description}
                  </p>
                </div>

                {/* Card Action Link: Learn more -> */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-primary dark:text-emerald-400 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
                  <span>{svc.actionText || actionText}</span>
                  <ArrowRightOutlined className="text-xs group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
