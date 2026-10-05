"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { BankOutlined, ArrowRightOutlined } from "@ant-design/icons";

/**
 * Universal Icon Resolver for EntityRoutingBanner
 */
const renderIcon = (icon) => {
  if (!icon) return <BankOutlined className="text-sm" />;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "string") {
    switch (icon.toLowerCase()) {
      case "bank":
        return <BankOutlined className="text-sm" />;
      default:
        return <BankOutlined className="text-sm" />;
    }
  }
  return icon;
};

/**
 * EntityRoutingBanner Component
 * =============================
 * Reusable CTA Banner Type 1: Compact Cross-Service & Entity Routing Notice.
 *
 * Features:
 * - Brand primary emerald-to-slate gradient with high-contrast text.
 * - Icon micro-tag on top.
 * - Concise, clear explanation copy.
 * - Responsive flex layout (stacked on mobile, inline on desktop).
 * - Highly customizable buttons array or custom action slot.
 *
 * @param {Object} props
 * @param {string} [props.tag="Corporate & Entity Practice Routing"] - Micro-tag headline
 * @param {React.ReactNode|string} [props.icon] - Icon displayed next to tag
 * @param {React.ReactNode|string} props.description - Explanatory message text
 * @param {Array<Object>} [props.buttons] - Array of button configs: [{ label, href, type: 'primary'|'secondary', icon }]
 * @param {React.ReactNode} [props.actions] - Optional custom actions slot (overrides buttons)
 * @param {string} [props.className] - Additional wrapper classes
 */
export default function EntityRoutingBanner({
  tag = "Corporate & Entity Practice Routing",
  icon = <BankOutlined />,
  description,
  children,
  buttons = [
    { label: "Business Tax", href: "/services/business-tax", type: "primary" },
    { label: "Trust Services", href: "/services/business-tax/trust-tax-returns", type: "secondary" },
  ],
  actions,
  className = "",
}) {
  const content = description || children;

  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-emerald-900/90 via-slate-900 to-zinc-900 p-6 md:p-8 text-white shadow-xl border border-emerald-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${className}`}
    >
      {/* Left: Tag + Description */}
      <div className="space-y-2 max-w-2xl">
        {tag && (
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            {renderIcon(icon)}
            <span>{tag}</span>
          </div>
        )}

        {typeof content === "string" ? (
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed m-0 font-normal">
            {content}
          </p>
        ) : (
          content
        )}
      </div>

      {/* Right: Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 shrink-0">
        {actions
          ? actions
          : buttons.map((btn, idx) => {
              const isPrimary = btn.type === "primary" || idx === 0;

              if (isPrimary) {
                return (
                  <Link key={idx} href={btn.href}>
                    <Button
                      size="middle"
                      icon={btn.icon || <ArrowRightOutlined />}
                      iconPlacement="end"
                      className="h-10 px-5 rounded-lg font-bold text-xs bg-white text-slate-900 hover:bg-slate-100 border-none shadow-sm hover:scale-105 transition-all"
                    >
                      {btn.label}
                    </Button>
                  </Link>
                );
              }

              return (
                <Link key={idx} href={btn.href}>
                  <Button
                    size="middle"
                    className="h-10 px-5 rounded-lg font-semibold text-xs bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white hover:scale-105 transition-all"
                  >
                    {btn.label}
                  </Button>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
