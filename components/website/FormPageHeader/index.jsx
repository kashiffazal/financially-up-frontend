"use client";

import React from "react";
import Link from "next/link";
import {
  SafetyCertificateOutlined,
  RightOutlined,
  LockOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import styles from "./FormPageHeader.module.css";

/**
 * FormPageHeader Component
 * Universal Executive Hero Header for onboarding and application forms across Financially Up.
 * Reusable across Individual Engagement, Entity Engagement, and Registration forms.
 *
 * @param {Object} props
 * @param {string} props.title - Main page heading title
 * @param {string} props.subtitle - Page descriptive subtitle
 * @param {string} [props.badgeTag="ATO Registered Tax Agents"] - Top pill badge text
 * @param {Array<{label: string, href?: string}>} [props.breadcrumbs=[]] - Breadcrumbs list
 * @param {number|string} [props.stepsCount=10] - Number of form steps
 * @param {string} [props.estimatedTime="8-10 mins"] - Estimated time to complete
 */
export default function FormPageHeader({
  title = "Individual Client Engagement Form",
  subtitle = "Complete your ATO Tax Agent engagement onboarding securely online in guided steps.",
  badgeTag = "ATO Registered Tax Agent",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Engagement Forms", href: "/resources/engagement-forms" },
    { label: "Individual Engagement" },
  ],
  cardTag = "100% Secure & Confidential",
  cardTitle = "Fast 10-Step Online Lodgement",
  cardSubtitle = "ATO Registered Tax Agent Portal",
}) {
  return (
    <header className={`${styles.headerBanner} text-white py-7 sm:py-9 shadow-md border-b border-emerald-800/40`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
        {/* Dynamic Breadcrumbs Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs font-medium text-emerald-200/90">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-white font-bold" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <RightOutlined className="text-[9px] text-emerald-300/70" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Header Title + Right Side Glassmorphism Security Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pt-1">
          {/* Left Title & Subtitle */}
          <div className="space-y-1.5 max-w-2xl">
            {badgeTag && (
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider">
                <SafetyCertificateOutlined className="text-emerald-300 text-xs" />
                <span>{badgeTag}</span>
              </div>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xs sm:text-sm text-emerald-100/90 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Side Glassmorphism Security & Live Status Card */}
          <div className="shrink-0 pt-2 md:pt-0">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-3.5 text-white hover:bg-white/15 transition-all">
              <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-xl text-emerald-200 shrink-0 shadow-inner">
                <LockOutlined />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-200">
                    {cardTag}
                  </span>
                </div>
                <div className="text-xs font-extrabold text-white">
                  {cardTitle}
                </div>
                <div className="text-[10px] text-emerald-100/80">
                  {cardSubtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
