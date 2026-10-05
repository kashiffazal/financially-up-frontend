"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  PercentageOutlined,
  BarChartOutlined,
  HistoryOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import styles from "./CapabilitiesGrid.module.css";

/**
 * Universal Icon Resolver for Capabilities Grid
 */
const renderCapabilityIcon = (icon) => {
  const iconClasses = "text-xl";
  if (!icon) return <FileSearchOutlined className={iconClasses} />;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "search":
      case "file-search":
      case "scope":
        return <FileSearchOutlined className={iconClasses} />;
      case "percentage":
      case "deductions":
      case "offsets":
        return <PercentageOutlined className={iconClasses} />;
      case "chart":
      case "bar-chart":
      case "investments":
      case "assets":
        return <BarChartOutlined className={iconClasses} />;
      case "history":
      case "clock":
      case "amendments":
      case "overdue":
        return <HistoryOutlined className={iconClasses} />;
      case "bulb":
      case "lightbulb":
      case "advice":
      case "assessment":
        return <BulbOutlined className={iconClasses} />;
      case "info":
      case "important":
      case "note":
        return <InfoCircleOutlined className={iconClasses} />;
      default:
        return <FileSearchOutlined className={iconClasses} />;
    }
  }
  return icon;
};

/**
 * Curated Vibrant Color Themes for Capabilities
 * Differentiates this section from other sections with bespoke icon palettes,
 * colored top accent bars, and tailored hover glow physics.
 */
const THEME_PRESETS = {
  emerald: {
    cardClass: styles.themeEmerald,
    iconBox:
      "bg-gradient-to-br from-emerald-50 to-emerald-100/70 dark:from-emerald-950/80 dark:to-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-700/60 shadow-emerald-500/10",
    badge:
      "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/80",
    topGradient: "from-emerald-500 via-teal-400 to-emerald-400",
    hoverTitle: "group-hover:text-emerald-700 dark:group-hover:text-emerald-400",
  },
  teal: {
    cardClass: styles.themeTeal,
    iconBox:
      "bg-gradient-to-br from-teal-50 to-teal-100/70 dark:from-teal-950/80 dark:to-teal-900/50 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-700/60 shadow-teal-500/10",
    badge:
      "bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/80",
    topGradient: "from-teal-500 via-cyan-400 to-teal-400",
    hoverTitle: "group-hover:text-teal-700 dark:group-hover:text-teal-400",
  },
  blue: {
    cardClass: styles.themeBlue,
    iconBox:
      "bg-gradient-to-br from-blue-50 to-blue-100/70 dark:from-blue-950/80 dark:to-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-700/60 shadow-blue-500/10",
    badge:
      "bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/80",
    topGradient: "from-blue-500 via-indigo-400 to-blue-400",
    hoverTitle: "group-hover:text-blue-700 dark:group-hover:text-blue-400",
  },
  amber: {
    cardClass: styles.themeAmber,
    iconBox:
      "bg-gradient-to-br from-amber-50 to-amber-100/70 dark:from-amber-950/80 dark:to-amber-900/50 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-700/60 shadow-amber-500/10",
    badge:
      "bg-amber-50 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/80",
    topGradient: "from-amber-500 via-orange-400 to-amber-400",
    hoverTitle: "group-hover:text-amber-800 dark:group-hover:text-amber-400",
  },
  purple: {
    cardClass: styles.themePurple,
    iconBox:
      "bg-gradient-to-br from-purple-50 to-purple-100/70 dark:from-purple-950/80 dark:to-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-700/60 shadow-purple-500/10",
    badge:
      "bg-purple-50 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/80",
    topGradient: "from-purple-500 via-fuchsia-400 to-purple-400",
    hoverTitle: "group-hover:text-purple-700 dark:group-hover:text-purple-400",
  },
};

const DEFAULT_THEME_KEYS = ["emerald", "teal", "blue", "amber", "purple"];

/**
 * CapabilitiesGrid Component
 * ==========================
 * Mutual, reusable capabilities & advisory grid component for Service Pages.
 * Patterned after `ServicesGrid`, `WhyChooseSection`, and `FeatureHighlightsSection`.
 *
 * Features:
 * - Wider header subtitle width (max-w-5xl) for comfortable line lengths
 * - Thematic color palettes for each capability box (Emerald, Teal, Blue, Amber, Purple)
 * - 5th box expanded across 2 columns (md:col-span-2 lg:col-span-2) to cleanly cover the 6th slot
 * - Dedicated full-width Important Note banner positioned directly below the grid
 *
 * @param {Object} props
 * @param {string} [props.sectionId] - HTML id for anchor navigation
 * @param {string} [props.tag="Tax Guidance & Preparation"] - Header micro-tag
 * @param {string} props.title - H2 headline
 * @param {string} [props.subtitle] - Paragraph description
 * @param {string} [props.transitionTag="We Can Help You:"] - Divider label above grid
 * @param {Array<Object>} props.items - Array of 5 capability items
 * @param {Object} [props.importantNotice] - Separate full-width important note object
 * @param {string} [props.className] - Outer section styling classes
 * @param {string} [props.containerClassName="max-w-7xl"] - Inner container width
 */
export default function CapabilitiesGrid({
  sectionId,
  tag = "Tax Guidance & Preparation",
  title,
  subtitle,
  transitionTag = "We Can Help You:",
  items = [],
  importantNotice,
  className = "py-16 md:py-24 bg-slate-50/60 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300",
  containerClassName = "max-w-7xl",
}) {
  // If an important item was passed inside items, separate it out
  const capabilityCards = items.filter((item) => !item.isImportant && !item.isNotice);
  const activeNotice =
    importantNotice || items.find((item) => item.isImportant || item.isNotice);

  return (
    <section id={sectionId} className={className}>
      <div className={`${containerClassName} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* 1. Header with Wider Subtitle Container (max-w-5xl) */}
        <div className="text-center max-w-5xl mx-auto space-y-3 mb-10 sm:mb-12">
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
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2. Transition Divider */}
        {transitionTag && (
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 sm:w-16 bg-slate-200 dark:bg-zinc-800" />
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest text-center">
              {transitionTag}
            </span>
            <span className="h-px w-10 sm:w-16 bg-slate-200 dark:bg-zinc-800" />
          </div>
        )}

        {/* 3. 5-Box Grid with Distinct Themes (Row 1: 3 cards; Row 2: 1 card + 1 card spanning 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {capabilityCards.map((item, idx) => {
            const cardKey = item.id || idx;
            const stepNumber = item.step || String(idx + 1).padStart(2, "0");
            const description = item.description || item.desc;

            // Resolve theme
            const themeKey =
              item.theme || DEFAULT_THEME_KEYS[idx % DEFAULT_THEME_KEYS.length];
            const theme = THEME_PRESETS[themeKey] || THEME_PRESETS.emerald;

            // Box 05 (the 5th box) spans 2 columns to cleanly fill the 6th slot
            const isFifthBox = idx === 4 || item.colSpan === "lg:col-span-2";
            const colSpanClass = isFifthBox
              ? "md:col-span-2 lg:col-span-2"
              : "col-span-1";

            return (
              <div
                key={cardKey}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-zinc-900 dark:to-zinc-900/80 border border-slate-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between overflow-hidden ${colSpanClass} ${styles.capabilityCard} ${theme.cardClass}`}
              >
                {/* Top Accent Gradient Bar on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.topGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="space-y-4">
                  {/* Header Row: Themed Icon & Themed Step Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md ${theme.iconBox}`}
                    >
                      {renderCapabilityIcon(item.icon)}
                    </div>

                    <div className="flex items-center gap-2">
                      {isFifthBox && (
                        <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/80">
                          Strategic Planning
                        </span>
                      )}
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${theme.badge}`}
                      >
                        {stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-50 transition-colors leading-snug m-0 ${theme.hoverTitle}`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0 ${
                      isFifthBox ? "max-w-2xl" : ""
                    }`}
                  >
                    {description}
                  </p>
                </div>

                {isFifthBox && (
                  <div className="pt-4 mt-6 border-t border-purple-100 dark:border-purple-950/80 flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-400">
                    <SafetyCertificateOutlined className="text-xs shrink-0" />
                    <span>Defensible planning before commitments or contracts are signed</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 4. Full-Width Important Note Box Directly Below Grid */}
        {activeNotice && (
          <div
            className={`mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[var(--brand-primary-soft)]/70 via-white to-emerald-50/50 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900 border border-[var(--brand-border-hover)]/40 dark:border-emerald-800/60 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all ${styles.importantBanner}`}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-hover)] text-white flex items-center justify-center shrink-0 shadow-md shadow-[var(--brand-primary)]/20 text-xl">
              <InfoCircleOutlined />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] dark:text-emerald-400">
                  {activeNotice.badge || "Important Note"}
                </span>
                <span className="text-slate-300 dark:text-zinc-700">•</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                  {activeNotice.footnote || "Australian Tax Law Compliance"}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed m-0 font-normal">
                {activeNotice.description || activeNotice.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
