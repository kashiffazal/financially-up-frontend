"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  EnvironmentOutlined,
  FileTextOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
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
  CalculatorOutlined,
  BankOutlined,
  FileProtectOutlined,
  BookOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import styles from "./FeatureHighlightsSection.module.css";

/**
 * Universal Icon Resolver for Feature Highlights & Services
 * Supports string keys and direct React elements.
 */
const renderHighlightIcon = (icon) => {
  if (!icon) return <CheckCircleOutlined />;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "environment":
      case "location":
      case "australia":
        return <EnvironmentOutlined />;
      case "file-text":
      case "file":
      case "online":
        return <FileTextOutlined />;
      case "crown":
        return <CrownOutlined />;
      case "shop":
        return <ShopOutlined />;
      case "home":
        return <HomeOutlined />;
      case "line-chart":
      case "chart":
        return <LineChartOutlined />;
      case "dollar":
        return <DollarOutlined />;
      case "thunderbolt":
      case "crypto":
        return <ThunderboltOutlined />;
      case "global":
        return <GlobalOutlined />;
      case "gift":
        return <GiftOutlined />;
      case "edit":
        return <EditOutlined />;
      case "clock":
      case "history":
        return <ClockCircleOutlined />;
      case "calculator":
        return <CalculatorOutlined />;
      case "bank":
        return <BankOutlined />;
      case "file-protect":
      case "protect":
        return <FileProtectOutlined />;
      case "book":
        return <BookOutlined />;
      case "safety":
      case "shield":
      case "price":
        return <SafetyOutlined />;
      case "safety-certificate":
        return <SafetyCertificateOutlined />;
      case "check":
      default:
        return <CheckCircleOutlined />;
    }
  }
  return icon;
};

/**
 * FeatureHighlightsSection Component
 * ==================================
 * Mutual, reusable trust & feature highlights / services cards section.
 * Patterned after `ServicesGrid` so callers explicitly supply all values.
 *
 * @param {Object} props
 * @param {string} [props.sectionId] - HTML id for section
 * @param {string} [props.tag] - Section badge tag
 * @param {string} [props.title] - Section H2 headline
 * @param {string} [props.subtitle] - Section descriptive paragraph
 * @param {Array<Object>} [props.items] - Array of cards { id, category, tag, title, description, icon, href, actionText, footerBadgeText }
 * @param {Array<Object>} [props.services] - Alias for props.items
 * @param {Array<Object>} [props.highlights] - Alias for props.items
 * @param {number} [props.columns=3] - Number of grid columns (3 or 4)
 * @param {string} [props.actionText] - Default action link text when item.href is present
 * @param {string} [props.footerBadgeText] - Default label next to checkmark footer (if desired)
 * @param {string} [props.className] - Outer section classes
 * @param {string} [props.containerClassName="max-w-7xl"] - Inner container width
 */
export default function FeatureHighlightsSection({
  sectionId,
  tag,
  title,
  subtitle,
  items,
  services,
  highlights,
  columns = 3,
  actionText,
  footerBadgeText,
  className = "bg-gradient-to-b from-white via-emerald-50/25 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 pt-12 pb-12 md:pt-20 md:pb-20 transition-colors duration-300",
  containerClassName = "max-w-7xl",
}) {
  const highlightList = items || services || highlights || [];
  const hasHeader = Boolean(tag || title || subtitle);

  const gridColsClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <section id={sectionId} className={className}>
      <div className={`${containerClassName} mx-auto px-4 sm:px-8`}>
        {/* Optional Header Area */}
        {hasHeader && (
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-14">
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
              <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-normal">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Feature / Service Cards Grid */}
        <div className={`grid ${gridColsClass} gap-6 sm:gap-8`}>
          {highlightList.map((item, idx) => {
            const badge = item.category || item.tag;
            const cardFooterBadge = item.footerBadgeText || footerBadgeText;
            const cardActionText = item.actionText || actionText;
            const isLink = Boolean(item.href);

            const cardContent = (
              <>
                <div>
                  {/* Top Row: Icon Container and Category / Tag Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-xl text-brand-primary dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      {renderHighlightIcon(item.icon)}
                    </div>

                    {badge && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-primary dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-900/50">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-50 mb-2.5 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Verified Badge OR Action Link */}
                {cardFooterBadge ? (
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
                    <span>{cardFooterBadge}</span>
                  </div>
                ) : (isLink || cardActionText) ? (
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-brand-primary dark:text-emerald-400">
                    <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                      {cardActionText || "Learn more"}
                      <ArrowRightOutlined className="text-[10px]" />
                    </span>
                  </div>
                ) : null}
              </>
            );

            const cardClasses = `group relative bg-white dark:bg-zinc-900/90 rounded-lg p-7 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between ${styles.highlightCard}`;

            if (isLink) {
              return (
                <Link
                  key={item.id || idx}
                  href={item.href}
                  className={`${cardClasses} block no-underline`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={item.id || idx}
                className={cardClasses}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
