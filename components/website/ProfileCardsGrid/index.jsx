"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  ShopOutlined,
  BankOutlined,
  ApartmentOutlined,
  UserOutlined,
  RiseOutlined,
  SolutionOutlined,
  CrownOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  MedicineBoxOutlined,
  ToolOutlined,
  LineChartOutlined,
  HomeOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * Universal Icon Resolver for ProfileCardsGrid
 */
const renderProfileIcon = (icon, defaultClasses = "text-xl text-brand-primary dark:text-emerald-400") => {
  if (!icon) return <UserOutlined className={defaultClasses} />;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "shop":
        return <ShopOutlined className={defaultClasses} />;
      case "bank":
        return <BankOutlined className={defaultClasses} />;
      case "apartment":
      case "trust":
        return <ApartmentOutlined className={defaultClasses} />;
      case "user":
      case "team":
        return <UserOutlined className={defaultClasses} />;
      case "rise":
      case "growth":
        return <RiseOutlined className={defaultClasses} />;
      case "solution":
      case "planning":
        return <SolutionOutlined className={defaultClasses} />;
      case "crown":
      case "executive":
        return <CrownOutlined className={defaultClasses} />;
      case "clock":
      case "overdue":
        return <ClockCircleOutlined className={defaultClasses} />;
      case "safety":
      case "estate":
        return <SafetyCertificateOutlined className={defaultClasses} />;
      case "medicine-box":
      case "doctor":
        return <MedicineBoxOutlined className={defaultClasses} />;
      case "tool":
      case "contractor":
        return <ToolOutlined className={defaultClasses} />;
      case "line-chart":
      case "crypto":
        return <LineChartOutlined className={defaultClasses} />;
      case "home":
      case "property":
        return <HomeOutlined className={defaultClasses} />;
      case "file-protect":
        return <FileProtectOutlined className={defaultClasses} />;
      default:
        return <UserOutlined className={defaultClasses} />;
    }
  }
  return icon;
};

/**
 * ProfileCardsGrid Component
 * ==========================
 * Reusable component for Target Client / Audience Profile boxes across Service Pages.
 *
 * Features:
 * - Brand section tag, standardized H2 title, and descriptive subtitle.
 * - Responsive 3 or 4 column grid with interactive cards.
 * - Icon container with hover scale + category micro-tag.
 * - Hover elevation (-translate-y-1), brand border highlight, and sliding arrow link.
 * - Optional bottom banner slot for attached routing or reassurance banners.
 *
 * @param {Object} props
 * @param {string} [props.sectionId="who-we-help"] - HTML section ID
 * @param {string} [props.tag] - Green section badge text
 * @param {string} props.title - H2 headline text
 * @param {string} [props.subtitle] - Descriptive introductory paragraph
 * @param {Array<Object>} props.profiles - Array of profile card items
 * @param {Array<Object>} [props.items] - Alias for profiles
 * @param {number} [props.columns=3] - Number of columns on desktop (3 or 4)
 * @param {string} [props.actionText="Learn more"] - Card link action text
 * @param {React.ReactNode} [props.bottomBanner] - Optional bottom banner (e.g. EntityRoutingBanner)
 * @param {React.ReactNode} [props.children] - Additional slot content
 * @param {string} [props.containerClassName="max-w-7xl"] - Container width
 * @param {string} [props.className] - Additional section classes
 */
export default function ProfileCardsGrid({
  sectionId = "who-we-help",
  tag,
  title,
  subtitle,
  profiles,
  items,
  columns = 3,
  actionText = "Learn more",
  bottomBanner,
  children,
  containerClassName = "max-w-7xl",
  className = "py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors",
}) {
  const profileList = profiles || items || [];
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
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            {tag && (
              <Tag color="green" className="brand-section-tag">
                {tag}
              </Tag>
            )}

            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Profile Cards Grid */}
        <div className={`grid ${gridColsClass} gap-6 mb-12`}>
          {profileList.map((profile, idx) => {
            const cardKey = profile.id || profile.href || idx;
            const linkText = profile.actionText || actionText;

            return (
              <div
                key={cardKey}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  {/* Top Row: Icon Container and Optional Micro-Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {renderProfileIcon(profile.icon)}
                    </div>
                    {profile.tag && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                        {profile.tag}
                      </span>
                    )}
                  </div>

                  {/* Profile Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                    {profile.title}
                  </h3>

                  {/* Profile Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-5">
                    {profile.description || profile.text}
                  </p>
                </div>

                {/* Card Action Link */}
                {profile.href && (
                  <Link
                    href={profile.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary dark:text-emerald-400 pt-3 border-t border-slate-200/60 dark:border-zinc-800 transition-colors"
                  >
                    <span>{linkText}</span>
                    <ArrowRightOutlined className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Optional Attached Bottom Banner or Children Slot */}
        {bottomBanner && <div className="mt-8">{bottomBanner}</div>}
        {children}
      </div>
    </section>
  );
}
