// "use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "antd";
import {
  DashboardOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  BankOutlined,
  FormOutlined,
  ApartmentOutlined,
  AuditOutlined,
  ShopOutlined,
  IdcardOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../app/ThemeProvider";

export default function Sidebar({ collapsed }) {
  const { isDark } = useTheme();
  // Sidebar navigation items
  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <DashboardOutlined />,
      href: "/admin/dashboard",
      active: true,
    },
    { type: "header", label: "MODULES" },
    {
      key: "medicare",
      label: "Medicare",
      icon: <SafetyCertificateOutlined />,
      href: "/admin/medicare",
    },
    {
      key: "gst",
      label: "GST Registrations",
      icon: <FileProtectOutlined />,
      href: "/admin/gst-registrations",
    },
    {
      key: "company",
      label: "Company Registration",
      icon: <BankOutlined />,
      href: "/admin/company-registration",
    },
    {
      key: "changes",
      label: "Changes To Company Details",
      icon: <FormOutlined />,
      href: "/admin/changes-to-company-details",
    },
    {
      key: "trust",
      label: "Trust Registrations",
      icon: <ApartmentOutlined />,
      href: "/admin/trust-registrations",
    },
    {
      key: "smsf",
      label: "SMSF Registrations",
      icon: <AuditOutlined />,
      href: "/admin/smsf-registrations",
    },
    {
      key: "business",
      label: "Business Name Registr...",
      icon: <ShopOutlined />,
      href: "/admin/business-name-registrations",
    },
    {
      key: "tfn",
      label: "Apply TFN / ABNs",
      icon: <IdcardOutlined />,
      href: "/admin/apply-tfn-abns",
    },
    {
      key: "individual",
      label: "Individual Engagement",
      icon: <UserOutlined />,
      href: "/admin/individual-engagement",
    },
    {
      key: "entity",
      label: "Entity Engagements",
      icon: <TeamOutlined />,
      href: "/admin/entity-engagements",
    },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 flex flex-col h-full bg-white dark:bg-zinc-900 border-r border-slate-200/80 dark:border-zinc-800 transition-all duration-300 ease-in-out ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Sidebar Header: Logo Area */}
      <div className="flex items-center h-16 px-5 border-b border-slate-100 dark:border-zinc-800/60">
        {collapsed ? (
          <Image
            src="/images/icon.ico"
            alt="Financially Up Icon"
            width={30}
            height={30}
            priority
            className="object-contain h-10 w-[20px] mx-auto"
          />
        ) : (
          <Image
            src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
            alt="Financially Up Logo"
            width={140}
            height={38}
            priority
            className="object-contain h-8 w-auto animate-fade-in"
          />
        )}
      </div>

      {/* Navigation menu list */}
      <nav className="flex-1 py-4 overflow-y-auto px-3 space-y-1">
        {menuItems.map((item, idx) => {
          if (item.type === "header") {
            return (
              <div
                key={idx}
                className={`text-[10px] font-bold tracking-wider text-slate-400 dark:text-zinc-500 px-3 pt-4 pb-2 transition-all duration-200 ${
                  collapsed ? "text-center" : ""
                }`}
              >
                {collapsed ? "MOD..." : item.label}
              </div>
            );
          }

          const itemClass = item.active
            ? "bg-emerald-50 text-[#008043] dark:bg-emerald-950/20 dark:text-emerald-400 font-semibold"
            : "text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:text-slate-900 dark:hover:text-white";

          return (
            <Tooltip
              key={item.key}
              title={collapsed ? item.label : ""}
              placement="right"
              mouseEnterDelay={0.4}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${itemClass}`}
              >
                <span
                  className={`text-lg flex-shrink-0 ${item.active ? "text-[#008043] dark:text-emerald-400" : "text-slate-400 dark:text-zinc-500"}`}
                >
                  {item.icon}
                </span>
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            </Tooltip>
          );
        })}
      </nav>
    </aside>
  );
}
