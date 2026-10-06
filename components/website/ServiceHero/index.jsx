"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  PhoneOutlined,
  RightOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  WalletOutlined,
  HomeOutlined,
  ShopOutlined,
  HistoryOutlined,
  CalendarOutlined,
  BankOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  DollarOutlined,
  LineChartOutlined,
  UserOutlined,
  SolutionOutlined,
  ApartmentOutlined,
  CrownOutlined,
  RiseOutlined,
  BranchesOutlined,
  FileProtectOutlined,
  AuditOutlined,
  FundOutlined,
  CompassOutlined,
  ExperimentOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import styles from "./ServiceHero.module.css";

/**
 * Universal Icon Resolver
 * Enables Next.js Server Components to pass string keys without importing @ant-design/icons directly.
 */
const renderIcon = (icon, defaultClasses = "") => {
  if (!icon) return null;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "bank":
        return <BankOutlined className={defaultClasses} />;
      case "calculator":
        return <CalculatorOutlined className={defaultClasses} />;
      case "wallet":
        return <WalletOutlined className={defaultClasses} />;
      case "home":
        return <HomeOutlined className={defaultClasses} />;
      case "shop":
        return <ShopOutlined className={defaultClasses} />;
      case "file-text":
      case "file":
        return <FileTextOutlined className={defaultClasses} />;
      case "file-protect":
        return <FileProtectOutlined className={defaultClasses} />;
      case "dollar":
        return <DollarOutlined className={defaultClasses} />;
      case "line-chart":
      case "chart":
        return <LineChartOutlined className={defaultClasses} />;
      case "history":
        return <HistoryOutlined className={defaultClasses} />;
      case "calendar":
        return <CalendarOutlined className={defaultClasses} />;
      case "safety":
      case "shield":
      case "compliant":
        return <SafetyCertificateOutlined className={defaultClasses} />;
      case "global":
      case "australia":
        return <GlobalOutlined className={defaultClasses} />;
      case "team":
        return <TeamOutlined className={defaultClasses} />;
      case "user":
      case "users":
        return <UserOutlined className={defaultClasses} />;
      case "solution":
      case "planning":
        return <SolutionOutlined className={defaultClasses} />;
      case "apartment":
      case "trust":
        return <ApartmentOutlined className={defaultClasses} />;
      case "crown":
      case "executive":
        return <CrownOutlined className={defaultClasses} />;
      case "rise":
      case "growth":
        return <RiseOutlined className={defaultClasses} />;
      case "branches":
        return <BranchesOutlined className={defaultClasses} />;
      case "audit":
        return <AuditOutlined className={defaultClasses} />;
      case "arrow-right":
        return <ArrowRightOutlined className={defaultClasses} />;
      case "fund":
      case "dashboard":
      case "dashboards":
        return <FundOutlined className={defaultClasses} />;
      case "compass":
      case "navigation":
        return <CompassOutlined className={defaultClasses} />;
      case "experiment":
      case "rnd":
      case "science":
        return <ExperimentOutlined className={defaultClasses} />;
      case "file-done":
      case "filing":
        return <FileDoneOutlined className={defaultClasses} />;
      default:
        return null;
    }
  }
  return icon;
};

/**
 * ServiceHero Theme Presets for Practice Scope Badges & Micro-Tags
 */
const THEME_CLASSES = {
  emerald: {
    icon: "bg-emerald-100 dark:bg-emerald-500/15 border-emerald-200 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-300 group-hover:bg-emerald-200/70 dark:group-hover:bg-emerald-500/25",
    hoverText: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    tag: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20",
  },
  teal: {
    icon: "bg-teal-100 dark:bg-teal-500/15 border-teal-200 dark:border-teal-500/25 text-teal-700 dark:text-teal-300 group-hover:bg-teal-200/70 dark:group-hover:bg-teal-500/25",
    hoverText: "group-hover:text-teal-700 dark:group-hover:text-teal-300",
    tag: "bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-emerald-500/20",
  },
  cyan: {
    icon: "bg-cyan-100 dark:bg-cyan-500/15 border-cyan-200 dark:border-cyan-500/25 text-cyan-700 dark:text-cyan-300 group-hover:bg-cyan-200/70 dark:group-hover:bg-cyan-500/25",
    hoverText: "group-hover:text-cyan-700 dark:group-hover:text-cyan-300",
    tag: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20",
  },
  amber: {
    icon: "bg-amber-100 dark:bg-amber-500/15 border-amber-200 dark:border-amber-500/25 text-amber-800 dark:text-amber-300 group-hover:bg-amber-200/70 dark:group-hover:bg-amber-500/25",
    hoverText: "group-hover:text-amber-800 dark:group-hover:text-amber-300",
    tag: "bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/20",
  },
  purple: {
    icon: "bg-purple-100 dark:bg-purple-500/15 border-purple-200 dark:border-purple-500/25 text-purple-700 dark:text-purple-300 group-hover:bg-purple-200/70 dark:group-hover:bg-purple-500/25",
    hoverText: "group-hover:text-purple-700 dark:group-hover:text-purple-300",
    tag: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20",
  },
};

/**
 * ServiceHero Component
 * ====================
 * Mutual flagship Hero banner for all Service Hub pages (/services/*).
 *
 * Features:
 * 1. Australian corporate architectural imagery with a calibrated luminous emerald overlay.
 * 2. CTA pre-footer inspired floating luminous ambient orbs via CSS keyframes.
 * 3. 7/5 column ratio with pixel-perfect vertical centering and equal column height.
 * 4. Dual Light & Dark theme support with high-contrast borders and glowing dark glassmorphism.
 * 5. Dynamic global company settings integration (Phone, Legal Name).
 *
 * @param {Object} props
 * @param {Array<{label: string, href?: string}>} [props.breadcrumbs] - Dynamic breadcrumb navigation items
 * @param {{icon?: React.ReactNode, text: string}} [props.statusBadge] - Top trust pill in left column
 * @param {string} props.title - Primary H1 title text
 * @param {string} [props.titleHighlight] - Highlighted emerald keyword in H1
 * @param {React.ReactNode} props.description - Primary lead paragraph copy
 * @param {React.ReactNode} [props.subDescription] - Secondary supporting paragraph copy
 * @param {React.ReactNode} [props.scopeNotice] - Advisory scope notice callout
 * @param {{text: string, href: string, icon?: React.ReactNode}} [props.primaryButton] - Primary action button
 * @param {{text: string, href: string}} [props.secondaryButton] - Secondary outlined button
 * @param {string} [props.phone] - Custom phone override; defaults to company.phone
 * @param {string} [props.supportingText] - Micro-copy directly below action buttons
 * @param {string} [props.scopeTag] - Top tag on the right practice scope panel
 * @param {string} props.scopeTitle - Heading on the right practice scope panel
 * @param {string} [props.scopeStatus] - Live status tag on top-right of panel
 * @param {Array<Object>} props.scopeItems - 5 practice scope items
 * @param {Array<{icon: React.ReactNode, label: string}>} [props.verificationBadges] - Bottom credential badges
 * @param {string} [props.backgroundImage] - Architectural backdrop image source
 * @param {string} [props.backgroundAlt] - Accessible image description
 */
export default function ServiceHero({
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services-overview" },
  ],
  statusBadge = {
    icon: <SafetyCertificateOutlined className="text-emerald-300 text-sm" />,
    text: "ATO Registered Tax Agents • Australia-Wide",
  },
  title,
  titleHighlight,
  description,
  subDescription,
  scopeNotice,
  primaryButton = {
    text: "Book an Appointment",
    href: "/book-an-appointment",
    icon: <ArrowRightOutlined />,
  },
  secondaryButton = {
    text: "Start My Tax Return",
    href: "/resources/engagement-forms/individual-engagement-form",
  },
  phone,
  supportingText = "Join countless Australians who experience a stress-free tax lodgement with us.",
  scopeTag = "Practice Scope Overview",
  scopeTitle = "Practice Overview",
  scopeStatus = "2024–25 Open",
  scopeItems = [],
  verificationBadges = [
    { icon: <GlobalOutlined className="text-brand-primary dark:text-emerald-400" />, label: "Australia-Wide" },
    { icon: <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400" />, label: "100% ATO Compliant" },
    { icon: <TeamOutlined className="text-brand-primary dark:text-emerald-400" />, label: "Dedicated CPA Team" },
  ],
  backgroundImage = "/images/services/page-hero-bg.jpg",
  backgroundAlt = "Australian Corporate Accounting & Tax Advisory",
}) {
  const company = useCompany();
  const phoneDisplay = phone || company?.phone || "1300 328 316";
  const phoneHref = `tel:${phoneDisplay.replace(/\s+/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-[#012213] text-white pt-10 pb-16 md:pt-14 md:pb-22 border-b border-emerald-900/60 shadow-xl transition-colors duration-300">
      {/* Layer 1: Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />
      </div>

      {/* Layer 2: Animated Shifting Luminous Emerald Overlay */}
      <div
        className={`absolute inset-0 ${styles.heroGradientAnimated} z-[1] pointer-events-none`}
        aria-hidden="true"
      />

      {/* Layer 2.2: Soft Luminous Light Sweep Sheen */}
      <div className={`${styles.lightSweep} z-[2]`} aria-hidden="true" />

      {/* Layer 2.5: Animated Glowing Ambient Orbs (CTA Pre-Footer Inspired Motion) */}
      <div
        className={`${styles.animateOrb1} absolute top-2 left-1/4 -translate-x-1/2 w-[540px] h-[540px] bg-emerald-400/22 rounded-full blur-3xl pointer-events-none z-[2]`}
        aria-hidden="true"
      />
      <div
        className={`${styles.animateOrb2} absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-3xl pointer-events-none z-[2]`}
        aria-hidden="true"
      />
      <div
        className={`${styles.animatePulseOrb} absolute -bottom-16 left-1/3 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-2xl pointer-events-none z-[2]`}
        aria-hidden="true"
      />

      {/* Subtle Dot-Matrix Texture for Depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] [background-image:radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] z-[2]"
        aria-hidden="true"
      />

      {/* Main Content Container (Layer 3: Top) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Breadcrumbs Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-2 text-xs font-semibold text-emerald-200/90 mb-6"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-white font-bold" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <RightOutlined className="text-[10px] text-emerald-300" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Two-Column Service Hero Grid with 7/5 Ratio & Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ── Left Column: Authority Copy & Ant Design Action Buttons (Col 7) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Trust Pill Status Badge */}
              {statusBadge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-xs text-xs font-bold text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  {renderIcon(statusBadge.icon)}
                  <span>{statusBadge.text}</span>
                </div>
              )}

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.18] text-white drop-shadow-sm">
                {title}{" "}
                {titleHighlight && (
                  <span className="text-emerald-400 font-extrabold">
                    {titleHighlight}
                  </span>
                )}
              </h1>

              {/* Lead Copy */}
              {description && (
                <div className="text-base sm:text-lg text-emerald-50/95 leading-relaxed font-normal">
                  {description}
                </div>
              )}

              {/* Sub-lead Copy */}
              {subDescription && (
                <div className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
                  {subDescription}
                </div>
              )}

              {/* Scope Advisory Notice Callout */}
              {scopeNotice && (
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-emerald-50/90 flex items-start gap-3 shadow-xs">
                  <InfoCircleOutlined className="text-emerald-300 text-base mt-0.5 shrink-0" />
                  <div className="m-0 leading-relaxed">{scopeNotice}</div>
                </div>
              )}
            </div>

            {/* Bottom Actions Area Anchored to Baseline */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                {primaryButton && (
                  <Link href={primaryButton.href}>
                    <Button
                      type="primary"
                      size="large"
                      icon={renderIcon(primaryButton.icon || "arrow-right")}
                      iconPlacement="end"
                      className="h-11 px-7 rounded-lg font-bold text-sm sm:text-base bg-brand-primary hover:bg-brand-primary-hover shadow-xl shadow-black/30 hover:scale-[1.03] transition-all"
                    >
                      {primaryButton.text}
                    </Button>
                  </Link>
                )}

                {secondaryButton && (
                  <Link href={secondaryButton.href}>
                    <Button
                      size="large"
                      className="h-11 px-7 rounded-lg font-bold text-sm sm:text-base border border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-brand-primary hover:border-white transition-all"
                    >
                      {secondaryButton.text}
                    </Button>
                  </Link>
                )}

                {phoneDisplay && (
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald-200 hover:text-white px-3 py-2 transition-colors font-medium ml-1"
                  >
                    <PhoneOutlined className="text-emerald-400" />
                    <span>
                      Or call{" "}
                      <strong className="text-white">{phoneDisplay}</strong>
                    </span>
                  </a>
                )}
              </div>

              {/* Supporting Subtext under Buttons */}
              {supportingText && (
                <p className="text-xs font-medium text-emerald-200/80 pt-0.5 m-0">
                  {supportingText}
                </p>
              )}
            </div>
          </div>

          {/* ── Right Column: Dual Light & Dark Executive Practice Scope Panel (Col 5) ── */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full rounded-2xl overflow-hidden bg-white/95 dark:bg-slate-950/85 backdrop-blur-xl border border-emerald-100 dark:border-emerald-500/30 p-6 sm:p-7 shadow-2xl shadow-emerald-950/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex flex-col justify-between transition-all duration-300">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300" />

              {/* Interior Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Panel Header with High-Contrast Light Mode Border */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-200 dark:border-emerald-500/20 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-wider block">
                    {scopeTag}
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5 m-0">
                    {scopeTitle}
                  </h2>
                </div>
                {scopeStatus && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 shrink-0 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    {scopeStatus}
                  </span>
                )}
              </div>

              {/* 5 Core Scope Items with Vertical Middle Alignment & Scaled Typography/Icons */}
              <ul className="relative z-10 flex-1 flex flex-col justify-between divide-y divide-slate-200 dark:divide-emerald-500/15 my-2 text-xs sm:text-sm">
                {scopeItems.map((item, idx) => {
                  const theme = THEME_CLASSES[item.theme] || THEME_CLASSES.emerald;
                  return (
                    <li
                      key={idx}
                      className="group flex-1 flex items-center justify-between gap-3 py-3.5 sm:py-4 first:pt-2 last:pb-2 px-3 -mx-3 rounded-xl hover:bg-slate-50/80 dark:hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 text-lg shadow-xs group-hover:scale-105 transition-all ${theme.icon}`}
                        >
                          {renderIcon(item.icon)}
                        </div>
                        <div className="min-w-0">
                          <strong
                            className={`block text-slate-900 dark:text-white font-bold text-[15px] sm:text-base ${theme.hoverText} transition-colors leading-snug`}
                          >
                            {item.title}
                          </strong>
                          <span className="text-slate-500 dark:text-emerald-100/75 text-xs sm:text-[13px] block leading-relaxed mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      {item.tag && (
                        <span
                          className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold shrink-0 ml-2 border ${theme.tag}`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Bottom Verification Badges (Non-wrapping single row) */}
              {verificationBadges && verificationBadges.length > 0 && (
                <div className="relative z-10 pt-3.5 border-t border-slate-200 dark:border-emerald-500/20 flex items-center justify-between gap-1 text-[11px] sm:text-xs text-slate-600 dark:text-emerald-200/90 font-medium overflow-hidden">
                  {verificationBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0 tracking-tight"
                    >
                      {renderIcon(badge.icon, "text-brand-primary dark:text-emerald-400 text-xs sm:text-sm shrink-0")}
                      <span>{badge.label}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glowing Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />
    </section>
  );
}
