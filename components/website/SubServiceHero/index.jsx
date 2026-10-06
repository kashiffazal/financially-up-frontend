"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import {
  RightOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  DesktopOutlined,
  SendOutlined,
  TeamOutlined,
  TrophyOutlined,
  LineChartOutlined,
  BankOutlined,
  PercentageOutlined,
  AuditOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * Icon Resolver Map for Server Component Safe Key Passing
 */
const ICON_MAP = {
  team: <TeamOutlined />,
  trophy: <TrophyOutlined />,
  lineChart: <LineChartOutlined />,
  desktop: <DesktopOutlined />,
  send: <SendOutlined />,
  clock: <ClockCircleOutlined />,
  calendar: <CalendarOutlined />,
  safety: <SafetyCertificateOutlined />,
  bank: <BankOutlined />,
  percentage: <PercentageOutlined />,
  audit: <AuditOutlined />,
  file: <FileTextOutlined />,
};

const resolveIcon = (icon) => {
  if (typeof icon === "string" && ICON_MAP[icon]) {
    return ICON_MAP[icon];
  }
  return icon;
};

/**
 * SubServiceHero Component
 * ========================
 * Dedicated Hero Section specifically tailored for Sub-Service / Inner Pages.
 * Seamlessly adapts to BOTH Light and Dark themes with full background image visibility.
 *
 * Features:
 * 1. Dedicated daylight corporate architectural image with a clear, translucent lite color overlay in light mode.
 * 2. Deep luxury architectural background with glowing emerald overlay in dark mode.
 * 3. Prominent Parent Pillar navigation badge (e.g. "← Back to Individual Tax Hub").
 * 4. High-intent "Service at a Glance" interactive specification card on the right.
 * 5. Focused service highlights checklist.
 * 6. Integrated 4-point credential and assurance strip along the bottom.
 *
 * @param {Object} props
 * @param {string} props.title - Main H1 title
 * @param {string} props.subtitle - Hero subtitle
 * @param {string} props.description - Detailed service description
 * @param {Object} props.parentService - { label: string, href: string }
 * @param {Array} props.breadcrumbs - [{ label: string, href?: string }]
 * @param {string} props.subPillarTag - e.g. "Pillar 1.1 • Personal Tax Practice"
 * @param {Array} props.highlights - Quick feature pills (array of strings)
 * @param {Array} props.quickSpecs - [{ icon: ReactNode, label: string, value: string }]
 * @param {Object} props.primaryCta - { label: string, href: string }
 * @param {Array} props.metrics - [{ value: string, label: string }]
 * @param {string} props.backgroundImage - Fallback / unified background image source
 * @param {string} props.backgroundImageLight - Daylight architectural background image source
 * @param {string} props.backgroundImageDark - Evening / dark architectural background image source
 * @param {string} props.backgroundAlt - Alt text for background image
 */
export default function SubServiceHero({
  title = "Service Details",
  subtitle = "Professional Accounting & Advisory",
  description,
  parentService,
  breadcrumbs = [],
  subPillarTag = "Sub-Service",
  highlights = [
    "Extended ATO Lodgement Deadlines",
    "Registered Tax Agent #26234055",
    "100% Online or In-Person Consultations",
  ],
  quickSpecs = [],
  primaryCta = { label: "Book an Appointment", href: "/book-an-appointment" },
  metrics = [
    { value: "10+ Years", label: "Australian Tax Experience" },
    { value: "TPB #26234055", label: "Registered Tax Agent" },
    { value: "CPA & IPA", label: "Qualified Specialists" },
    { value: "Australia-Wide", label: "Virtual & In-Person Support" },
  ],
  backgroundImage,
  backgroundImageLight = "/images/services/page-hero-light-bg.jpg",
  backgroundImageDark = "/images/services/page-hero-bg.jpg",
  backgroundAlt = "Financially Up Accounting & Advisory",
}) {
  const company = useCompany();

  const lightBg = backgroundImageLight || backgroundImage || "/images/services/page-hero-light-bg.jpg";
  const darkBg = backgroundImageDark || backgroundImage || "/images/services/page-hero-bg.jpg";

  // Default Quick Specs if not supplied
  const defaultQuickSpecs = [
    {
      icon: <TeamOutlined />,
      label: "Suitable For",
      value: "Wage earners, investment property owners, CGT, crypto & standard returns",
    },
    {
      icon: <DesktopOutlined />,
      label: "Delivery Format",
      value: "100% online video meetings (Outlook Calendar) or in-person",
    },
    {
      icon: <SendOutlined />,
      label: "ATO Lodgement",
      value: "Direct electronic ATO portal lodgement by Registered Tax Agent",
    },
    {
      icon: <ClockCircleOutlined />,
      label: "Client Protection",
      value: "Draft explained and authorized by you before electronic submission",
    },
  ];

  const specs = quickSpecs.length > 0 ? quickSpecs : defaultQuickSpecs;

  return (
    <section className="relative overflow-hidden bg-[#f8fcf9] dark:bg-slate-950 text-slate-900 dark:text-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/90 dark:border-emerald-900/60 shadow-md dark:shadow-2xl transition-colors duration-300">
      {/* Layer 0A: Daylight Architectural Image (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:hidden">
        <Image
          src={lightBg}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center opacity-80"
        />
      </div>

      {/* Layer 0B: Evening Architectural Image (Dark Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block">
        <Image
          src={darkBg}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Layer 1: Translucent Lite Color Overlay (Light) & Deep Luxury 95% Overlay (Dark) */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-white/94 via-white/90 to-[#eefaf3]/92 dark:from-slate-950/96 dark:via-[#012214]/94 dark:to-slate-950/96 pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 2: Subtle Ambient Light Glow Accents */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-[2]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none z-[2]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(#008043_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* Layer 3: Main Foreground Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Row: Breadcrumbs & Parent Pillar Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-200/80 dark:border-white/10">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="flex items-center flex-wrap gap-2 text-xs font-semibold text-slate-700 dark:text-emerald-200/80"
            >
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-emerald-800 dark:hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={
                          isLast
                            ? "text-slate-950 dark:text-white font-bold"
                            : ""
                        }
                      >
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && (
                      <RightOutlined className="text-[9px] text-slate-400 dark:text-emerald-400/60" />
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          )}

          {/* Parent Service Back Link */}
          {parentService && (
            <Link
              href={parentService.href}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white px-3.5 py-1.5 rounded-lg bg-white/95 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-white/10 border border-emerald-300/80 dark:border-emerald-500/20 shadow-xs dark:shadow-none transition-all shrink-0 w-fit"
            >
              <ArrowLeftOutlined className="text-[11px]" />
              <span>Back to {parentService.label}</span>
            </Link>
          )}
        </div>

        {/* Main Hero 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-14">
          {/* Left Column: Focused Service Information */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Sub-Pillar Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/95 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-2xs dark:shadow-none mb-4">
                <SafetyCertificateOutlined className="text-emerald-700 dark:text-emerald-400" />
                <span>{subPillarTag}</span>
              </div>

              {/* Title (H1) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.15]">
                {title}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-base sm:text-lg text-emerald-900 dark:text-emerald-200/90 font-bold mt-4">
                  {subtitle}
                </p>
              )}

              {/* Description */}
              {description && (
                <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mt-4">
                  {description}
                </div>
              )}

              {/* Quick Feature Checklist Tags */}
              {highlights.length > 0 && (
                <div className="flex flex-wrap gap-2.5 pt-5">
                  {highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-emerald-100 shadow-2xs dark:shadow-none"
                    >
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs" />
                      <span>{highlight}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href={primaryCta.href}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-12 px-7 rounded-xl font-bold shadow-lg shadow-emerald-900/20 dark:shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  {primaryCta.label}
                </Button>
              </Link>

              {company?.phone && (
                <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>
                  <Button
                    size="large"
                    icon={<PhoneOutlined className="text-brand-primary dark:text-emerald-400" />}
                    className="h-12 px-6 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-900 dark:text-zinc-100 border border-slate-300 dark:border-zinc-700 shadow-sm hover:border-brand-primary hover:text-brand-primary transition-all flex items-center gap-2"
                  >
                    Call {company.phone}
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: "Service at a Glance" Specification Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full flex flex-col justify-between rounded-2xl bg-white/95 dark:bg-white/[0.04] backdrop-blur-xl border border-emerald-500/25 dark:border-emerald-500/30 p-5 sm:p-6 shadow-xl shadow-emerald-900/10 dark:shadow-2xl dark:shadow-emerald-950/60 overflow-hidden">
              {/* Subtle Card Accent Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header & Live Status */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-200/80 dark:border-white/10 shrink-0">
                <div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white m-0">
                    Service at a Glance
                  </h3>
                  <span className="text-[11px] text-slate-500 dark:text-emerald-200/70">
                    Personalized scope & lodgement
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 shadow-2xs dark:shadow-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  <span>2024–25 Open</span>
                </div>
              </div>

              {/* Middle Section: Specs & Standard Box */}
              <div className="flex-1 flex flex-col justify-center gap-2.5 py-1">
                {/* Specification Rows */}
                <div className="space-y-2.5">
                  {specs.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05]"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-100/70 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center shrink-0 text-xs mt-0.5 text-emerald-700 dark:text-emerald-400">
                        {resolveIcon(item.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider block">
                          {item.label}
                        </span>
                        <p className="text-xs text-slate-750 dark:text-slate-200 leading-snug m-0 mt-0.5 font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Professional Practice Commitment & Guarantee Box */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 dark:border-emerald-500/30 text-xs">
                  <div className="flex items-center justify-between gap-2 font-bold text-emerald-950 dark:text-emerald-200 mb-2">
                    <div className="flex items-center gap-1.5">
                      <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400" />
                      <span>{company?.taxAgentNumber ? `Registered Tax Agent #${company.taxAgentNumber}` : "Registered Tax Agent"}</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-200/60 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300">
                      Guaranteed
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-700 dark:text-zinc-300 font-normal mb-2.5">
                    <li className="flex items-center gap-1.5">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                      <span>Pre-lodgement draft walkthrough &amp; written client sign-off</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                      <span>Extended ATO tax agent lodgement deadlines available</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                      <span>Transparent upfront quoting &amp; zero lodgement without approval</span>
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-emerald-500/20 dark:border-emerald-500/20 flex items-center gap-1.5 text-[11px] text-emerald-900 dark:text-emerald-200 font-medium">
                    <CalendarOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                    <span>Online Outlook video meetings or in-person consultations</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Callout */}
              <div className="pt-3.5 mt-1 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-600 dark:text-emerald-200/80 shrink-0">
                <span>Fast online appointment</span>
                <Link
                  href="/book-an-appointment"
                  className="font-bold text-emerald-800 hover:text-emerald-950 dark:text-white dark:hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Book now</span>
                  <RightOutlined className="text-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Assurance Strip (4 Metrics) */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 dark:border-white/10">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.07] text-center shadow-2xs dark:shadow-none"
              >
                <div className="text-base sm:text-lg font-black text-slate-950 dark:text-white font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-emerald-200/70 font-semibold mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
