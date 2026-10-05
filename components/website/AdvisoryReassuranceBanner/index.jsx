"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  CompassOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * Universal Icon Resolver for AdvisoryReassuranceBanner
 */
const renderTagIcon = (icon) => {
  if (!icon) return <CompassOutlined className="text-sm" />;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "clock":
      case "time":
        return <ClockCircleOutlined className="text-sm" />;
      case "safety":
      case "shield":
        return <SafetyCertificateOutlined className="text-sm" />;
      case "check":
        return <CheckCircleOutlined className="text-sm" />;
      case "compass":
      default:
        return <CompassOutlined className="text-sm" />;
    }
  }
  return icon;
};

/**
 * AdvisoryReassuranceBanner Component
 * ===================================
 * Reusable CTA Banner Type 2: Strategic Advisory & Planning Reassurance Banner.
 *
 * Features:
 * - Signature Financially Up brand emerald-to-slate gradient with ambient lighting.
 * - Upper trust/planning micro-tag with icon.
 * - High-contrast H3 headline and comprehensive explanatory copy.
 * - Integrated actions: Brand primary button (`bg-brand-primary`) + dynamic phone button via `useCompany()`.
 *
 * @param {Object} props
 * @param {string} [props.tag] - Upper micro-tag label
 * @param {React.ReactNode|string} [props.tagIcon] - Icon for the micro-tag
 * @param {string} props.title - Bold H3 headline text
 * @param {React.ReactNode|string} props.description - Explanatory message text
 * @param {{text: string, href: string, icon?: React.ReactNode}} [props.primaryButton] - Primary action button
 * @param {{text: string, href: string}} [props.secondaryButton] - Optional secondary button
 * @param {boolean} [props.showPhone=true] - Whether to render dynamic phone button
 * @param {React.ReactNode} [props.actions] - Optional custom action buttons slot
 * @param {string} [props.className] - Additional wrapper classes
 */
export default function AdvisoryReassuranceBanner({
  tag,
  tagIcon,
  title,
  description,
  children,
  primaryButton = {
    text: "Book Pre-Decision Advice",
    href: "/book-an-appointment",
  },
  secondaryButton,
  showPhone = true,
  actions,
  className = "",
}) {
  const company = useCompany();
  const content = description || children;
  const hasActions = Boolean(actions || primaryButton || secondaryButton || (showPhone && company.phone));

  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-emerald-900 via-slate-900 to-zinc-900 p-7 sm:p-9 text-white shadow-xl border border-emerald-500/20 relative overflow-hidden ${className}`}
    >
      {/* Subtle Luminous Ambient Light Reflections */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left: Tag + Headline + Copy */}
        <div className="space-y-3 max-w-3xl">
          {tag && (
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              {renderTagIcon(tagIcon)}
              <span>{tag}</span>
            </div>
          )}

          {title && (
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight m-0">
              {title}
            </h3>
          )}

          {typeof content === "string" ? (
            <p className="text-xs sm:text-sm text-slate-200/95 leading-relaxed m-0 font-normal">
              {content}
            </p>
          ) : (
            content
          )}
        </div>

        {/* Right: Actions (Top and Bottom Stacked) */}
        {hasActions && (
          <div className="grid grid-cols-1 gap-3.5 w-full sm:w-72 shrink-0 self-center">
            {actions ? (
              actions
            ) : (
              <>
                {primaryButton && (
                  <Link href={primaryButton.href} className="w-full block">
                    <Button
                      block
                      type="primary"
                      size="large"
                      icon={primaryButton.icon || <ArrowRightOutlined />}
                      iconPlacement="end"
                      className="w-full h-12 px-6 rounded-lg font-bold text-sm bg-brand-primary hover:bg-brand-primary-hover border-none shadow-md shadow-emerald-950/40 hover:scale-[1.02] transition-all flex items-center justify-center"
                    >
                      {primaryButton.text}
                    </Button>
                  </Link>
                )}

                {secondaryButton && (
                  <Link href={secondaryButton.href} className="w-full block">
                    <Button
                      block
                      size="large"
                      className="w-full h-12 px-6 rounded-lg font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white hover:scale-[1.02] transition-all flex items-center justify-center"
                    >
                      {secondaryButton.text}
                    </Button>
                  </Link>
                )}

                {showPhone && company.phone && (
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="w-full block"
                  >
                    <Button
                      block
                      size="large"
                      icon={<PhoneOutlined className="text-emerald-300" />}
                      className="w-full h-12 px-6 rounded-lg font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white hover:scale-[1.02] transition-all flex items-center justify-center"
                    >
                      {company.phone}
                    </Button>
                  </a>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
