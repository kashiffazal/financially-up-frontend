"use client";

/**
 * ============================================================================
 * Modern Compact Rail Navigation (`components/admin/Sidebar.js`)
 * ============================================================================
 * Architecture & UX:
 * 1. Compact vertical rail navigation with flat, zero border-radius menu items.
 * 2. Full-height edge-to-edge left dock (74px width, border-r).
 * 3. Selected menu item has ZERO border-radius (`rounded-none`), solid brand fill.
 * 4. Flyout Popovers for multi-form modules (Company, Engagements, Tax & Reg) with
 *    isolated popover triggers (no tooltip collision).
 * 5. Full hierarchical mobile drawer navigation with expandable accordion categories.
 */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip, Popover, Drawer } from "antd";
import {
  DashboardOutlined,
  BankOutlined,
  UserOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  AuditOutlined,
  ShopOutlined,
  IdcardOutlined,
  TeamOutlined,
  KeyOutlined,
  HistoryOutlined,
  SettingOutlined,
  FormOutlined,
  SunOutlined,
  MoonOutlined,
  RightOutlined,
  DownOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { useTheme } from "../../app/ThemeProvider";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ mobileOpen = false, setMobileOpen = () => {} }) {
  const { isDark, toggleTheme } = useTheme();
  const { hasPermission, hasRole } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Desktop active popover state
  const [activePopover, setActivePopover] = useState(null);

  // Mobile expandable accordion state: pre-expand the active section by default
  const [expandedMobileGroups, setExpandedMobileGroups] = useState({
    company: true,
    engagements: true,
    registrations: true,
  });

  const toggleMobileGroup = (groupKey) => {
    setExpandedMobileGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const isSuperAdmin = hasRole("administrator");

  // Navigation Items Hierarchy
  const railNavItems = [
    {
      key: "dashboard",
      label: "Home",
      fullTitle: "Admin Dashboard",
      icon: <DashboardOutlined />,
      href: "/admin/dashboard",
    },
    {
      key: "company",
      label: "Company",
      fullTitle: "Company Registrations & Details",
      icon: <BankOutlined />,
      href: "/admin/company-registration-new",
      permission: "company.registration.view",
      subItems: [
        {
          key: "company-new",
          label: "Company Registration (New)",
          href: "/admin/company-registration-new",
          icon: <BankOutlined />,
          tag: "Flagship",
          tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
        },
        {
          key: "company-legacy",
          label: "Company Registration (Legacy)",
          href: "/admin/company-registration",
          icon: <BankOutlined />,
        },
        {
          key: "company-changes",
          label: "Changes to Company Details",
          href: "/admin/changes-to-company-details",
          icon: <FormOutlined />,
        },
      ],
    },
    {
      key: "engagements",
      label: "Engage",
      fullTitle: "Client Engagements & Onboarding",
      icon: <UserOutlined />,
      href: "/admin/individual-engagement-new",
      permission: "individual.engagement.view",
      subItems: [
        {
          key: "indiv-new",
          label: "Individual Engagement (New)",
          href: "/admin/individual-engagement-new",
          icon: <UserOutlined />,
          tag: "Flagship",
          tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
        },
        {
          key: "indiv-legacy",
          label: "Individual Engagement (Legacy)",
          href: "/admin/individual-engagement",
          icon: <UserOutlined />,
        },
        {
          key: "entity-eng",
          label: "Entity Engagements",
          href: "/admin/entity-engagements",
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      key: "registrations",
      label: "Tax & Reg",
      fullTitle: "Tax, Business & Compliance Registrations",
      icon: <FileProtectOutlined />,
      href: "/admin/gst-registrations",
      permission: "gst.registration.view",
      subItems: [
        {
          key: "gst",
          label: "GST Registrations",
          href: "/admin/gst-registrations",
          icon: <FileProtectOutlined />,
        },
        {
          key: "medicare",
          label: "Medicare Claims",
          href: "/admin/medicare",
          icon: <SafetyCertificateOutlined />,
        },
        {
          key: "trust",
          label: "Trust Registrations",
          href: "/admin/trust-registrations",
          icon: <ApartmentOutlined />,
        },
        {
          key: "smsf",
          label: "SMSF Registrations",
          href: "/admin/smsf-registrations",
          icon: <AuditOutlined />,
        },
        {
          key: "business",
          label: "Business Name Registrations",
          href: "/admin/business-name-registrations",
          icon: <ShopOutlined />,
        },
        {
          key: "tfn",
          label: "Apply TFN / ABNs",
          href: "/admin/apply-tfn-abns",
          icon: <IdcardOutlined />,
        },
      ],
    },
    {
      key: "users",
      label: "Users",
      fullTitle: "Staff & User Management",
      icon: <TeamOutlined />,
      href: "/admin/users",
      permission: "users.view",
    },
    {
      key: "roles",
      label: "Roles",
      fullTitle: "Roles & Permissions Matrix",
      icon: <KeyOutlined />,
      href: "/admin/roles",
      permission: "roles.view",
    },
    {
      key: "audit",
      label: "Audit Logs",
      fullTitle: "Security & Compliance Logs",
      icon: <HistoryOutlined />,
      href: "/admin/audit-logs",
      permission: "audit.view",
    },
    {
      key: "settings",
      label: "Settings",
      fullTitle: "System & Portal Settings",
      icon: <SettingOutlined />,
      href: "/admin/settings",
      permission: "settings.view",
    },
  ];

  // Filter items by RBAC permissions
  const visibleItems = railNavItems.filter((item) => {
    if (!item.permission || isSuperAdmin) return true;
    return hasPermission(item.permission);
  });

  // Determine if a rail item or any of its sub-items is currently active
  const checkIsItemActive = (item) => {
    if (pathname === item.href || pathname?.startsWith(`${item.href}/`)) {
      return true;
    }
    if (item.subItems) {
      return item.subItems.some(
        (sub) => pathname === sub.href || pathname?.startsWith(`${sub.href}/`)
      );
    }
    return false;
  };

  // Render desktop vertical rail item (strictly zero border radius on selected state)
  const renderDesktopRailItem = (item) => {
    const isActive = checkIsItemActive(item);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    // Popover submenu content for multi-form groups
    const popoverContent = hasSubItems ? (
      <div className="w-64 p-1.5 space-y-1">
        <div className="px-3 py-2 border-b border-slate-100 dark:border-zinc-800">
          <div className="text-xs font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-1.5">
            <span className="text-[var(--brand-primary)]">{item.icon}</span>
            <span>{item.fullTitle}</span>
          </div>
          <div className="text-[11px] text-slate-400 dark:text-zinc-500 mt-0.5">
            Select application module
          </div>
        </div>

        <div className="pt-1.5 space-y-0.5">
          {item.subItems.map((sub) => {
            const isSubActive =
              pathname === sub.href || pathname?.startsWith(`${sub.href}/`);
            return (
              <Link
                key={sub.key}
                href={sub.href}
                onClick={() => setActivePopover(null)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 group cursor-pointer ${
                  isSubActive
                    ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold shadow-xs dark:bg-emerald-950/40"
                    : "text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-[var(--brand-primary)]"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span
                    className={`text-sm ${
                      isSubActive
                        ? "text-[var(--brand-primary)]"
                        : "text-slate-400 dark:text-zinc-500 group-hover:text-[var(--brand-primary)]"
                    }`}
                  >
                    {sub.icon}
                  </span>
                  <span className="truncate">{sub.label}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {sub.tag && (
                    <span
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                        sub.tagColor || "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      {sub.tag}
                    </span>
                  )}
                  {isSubActive ? (
                    <CheckCircleFilled className="text-[var(--brand-primary)] text-xs" />
                  ) : (
                    <RightOutlined className="text-[10px] text-slate-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    ) : null;

    // Item Button component: Zero border-radius on selected menu (flat edge-to-edge block)
    const buttonNode = (
      <div
        onClick={() => {
          if (!hasSubItems) {
            router.push(item.href);
          }
        }}
        className={`relative flex flex-col items-center justify-center w-full py-3 transition-all duration-150 cursor-pointer select-none group rounded-none ${
          isActive
            ? "bg-[var(--brand-primary)] text-white font-bold rounded-none shadow-none"
            : "text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800/80 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-primary)] rounded-none"
        }`}
      >
        {/* Top Icon */}
        <span
          className={`text-xl leading-none mb-1 transition-transform duration-150 ${
            isActive
              ? "text-white scale-105"
              : "text-slate-500 dark:text-zinc-400 group-hover:text-[var(--brand-primary)] group-hover:scale-105"
          }`}
        >
          {item.icon}
        </span>

        {/* Short Label Underneath */}
        <span
          className={`text-[10px] leading-tight text-center truncate max-w-[66px] px-1 ${
            isActive
              ? "text-white font-bold"
              : "text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-zinc-100 font-medium"
          }`}
        >
          {item.label}
        </span>

        {/* Subtle sub-items indicator dot */}
        {hasSubItems && (
          <span
            className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full ${
              isActive
                ? "bg-white/80"
                : "bg-slate-300 dark:bg-zinc-600 group-hover:bg-[var(--brand-primary)]"
            }`}
          />
        )}
      </div>
    );

    // If item has sub-items: Wrap ONLY with Popover (DO NOT wrap with Tooltip to prevent black tooltip collision)
    if (hasSubItems) {
      return (
        <Popover
          key={item.key}
          content={popoverContent}
          trigger={["hover", "click"]}
          placement="rightTop"
          open={activePopover === item.key ? true : undefined}
          onOpenChange={(visible) => setActivePopover(visible ? item.key : null)}
          overlayClassName="admin-rail-popover"
        >
          {buttonNode}
        </Popover>
      );
    }

    // Single route item: Wrap with Tooltip
    return (
      <Tooltip
        key={item.key}
        title={item.fullTitle}
        placement="right"
        mouseEnterDelay={0.4}
      >
        <Link href={item.href} className="no-underline w-full">
          {buttonNode}
        </Link>
      </Tooltip>
    );
  };

  return (
    <>
      {/* =================================================================== */}
      {/* 1. DESKTOP FULL-HEIGHT COMPACT RAIL (Zero Dock Radius)               */}
      {/* =================================================================== */}
      <aside
        className="hidden md:flex fixed inset-y-0 left-0 w-[74px] z-30 flex-col items-center justify-between py-2 bg-white dark:bg-zinc-900 border-r border-slate-200/90 dark:border-zinc-800 rounded-none select-none transition-all duration-200"
        aria-label="Admin Rail Navigation"
      >
        {/* Top: Brand Logo Mark */}
        <div className="w-full flex flex-col items-center pt-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center justify-center w-11 h-11 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all p-1 group rounded-lg"
            title="Financially Up Admin Portal"
          >
            <Image
              src="/images/icon.ico"
              alt="Financially Up Mark"
              width={28}
              height={28}
              priority
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
          <div className="w-full h-px bg-slate-100 dark:bg-zinc-800 mt-2.5 mb-1" />
        </div>

        {/* Center: Vertical Stack of Flat Zero-Radius Items */}
        <nav className="flex-1 w-full flex flex-col items-center overflow-y-auto no-scrollbar py-0">
          {visibleItems.map((item) => renderDesktopRailItem(item))}
        </nav>

        {/* Bottom Utility Dock: Theme Switcher */}
        <div className="w-full flex flex-col items-center pb-2">
          <div className="w-full h-px bg-slate-100 dark:bg-zinc-800 mb-2" />
          <Tooltip
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            placement="right"
          >
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer rounded-lg"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <SunOutlined className="text-amber-500 text-base" />
              ) : (
                <MoonOutlined className="text-slate-600 text-base" />
              )}
            </button>
          </Tooltip>
        </div>
      </aside>

      {/* =================================================================== */}
      {/* 2. MOBILE RESPONSIVE DRAWER NAVIGATION (Full Hierarchical Links)    */}
      {/* =================================================================== */}
      <Drawer
        placement="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        styles={{ wrapper: { width: 300 }, body: { padding: "14px 12px" } }}
        className="md:hidden"
        title={
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/icon.ico"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="font-bold text-sm text-slate-900 dark:text-zinc-100">
              Financially Up
            </span>
          </div>
        }
      >
        <div className="space-y-3 pb-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
            Navigation Menu
          </div>

          <div className="space-y-1.5">
            {visibleItems.map((item) => {
              const isActive = checkIsItemActive(item);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isExpanded = !!expandedMobileGroups[item.key];

              // Single Route Item
              if (!hasSubItems) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold dark:bg-emerald-950/40"
                        : "text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base text-[var(--brand-primary)]">{item.icon}</span>
                      <span>{item.fullTitle}</span>
                    </div>
                    {isActive && <CheckCircleFilled className="text-[var(--brand-primary)] text-xs" />}
                  </Link>
                );
              }

              // Multi-Form Expandable Group
              return (
                <div
                  key={item.key}
                  className="rounded-xl overflow-hidden border border-slate-200/70 dark:border-zinc-800"
                >
                  {/* Accordion Group Header */}
                  <div
                    onClick={() => toggleMobileGroup(item.key)}
                    className={`flex items-center justify-between px-3 py-2.5 cursor-pointer text-xs font-semibold select-none transition-colors ${
                      isActive
                        ? "bg-[var(--brand-primary-soft)]/60 text-[var(--brand-primary)] dark:bg-emerald-950/30"
                        : "bg-slate-50 dark:bg-zinc-800/40 text-slate-800 dark:text-zinc-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base text-[var(--brand-primary)]">{item.icon}</span>
                      <span>{item.fullTitle}</span>
                    </div>
                    <DownOutlined
                      className={`text-[10px] text-slate-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Expandable Sub-items List */}
                  {isExpanded && (
                    <div className="py-1 px-1 bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800 space-y-0.5">
                      {item.subItems.map((sub) => {
                        const isSubActive =
                          pathname === sub.href || pathname?.startsWith(`${sub.href}/`);
                        return (
                          <Link
                            key={sub.key}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                              isSubActive
                                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold dark:bg-emerald-950/40"
                                : "text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900"
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="text-xs text-slate-400">{sub.icon}</span>
                              <span className="truncate">{sub.label}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {sub.tag && (
                                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                                  {sub.tag}
                                </span>
                              )}
                              {isSubActive && (
                                <CheckCircleFilled className="text-[var(--brand-primary)] text-xs" />
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );
}
