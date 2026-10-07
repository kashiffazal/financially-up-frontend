"use client";

/**
 * Admin Top Navigation Header
 * ===========================
 * Header toolbar containing sidebar toggle, brand logo, global search,
 * "+ New application" form launcher, theme switcher,
 * notifications badge, and authenticated user dropdown menu.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  SunOutlined,
  MoonOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../app/ThemeProvider";
import { useAuth } from "../../context/AuthContext";
import GlobalSearch from "./GlobalSearch";
import NewApplicationMenu from "./NewApplicationMenu";
import NotificationCenter from "./NotificationCenter";

export default function Header({ onOpenMobile }) {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();

  // Compute initials
  const initials = user
    ? `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase() ||
      "U"
    : "U";

  // Primary role name
  const primaryRole = user?.roles?.[0]?.name || "Staff Member";

  // User dropdown menu items
  const userMenuItems = [
    {
      key: "user-info",
      label: (
        <div className="py-1 px-1 border-b border-slate-100 dark:border-zinc-800">
          <p className="text-xs font-semibold text-slate-800 dark:text-zinc-100">
            {user?.fullName || "User"}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
            {user?.email}
          </p>
        </div>
      ),
      disabled: true,
    },
    {
      key: "profile",
      label: "My Profile & Security",
      icon: <UserOutlined />,
      onClick: () => router.push("/admin/profile"),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Sign Out",
      icon: <LogoutOutlined className="text-red-500" />,
      danger: true,
      onClick: logout,
    },
  ];

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-6 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300">
      {/* Header Left: Menu toggle (mobile only), Logo, Search and New Application */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => {
            if (typeof onOpenMobile === "function") onOpenMobile();
          }}
          className="p-2 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer md:hidden"
          aria-label="Open Navigation Menu"
        >
          <MenuUnfoldOutlined className="text-base" />
        </button>

        {/* Brand Logo (desktop) */}
        <Link
          href="/admin/dashboard"
          aria-label="Financially Up dashboard"
          className="hidden lg:flex shrink-0 items-center pr-3 mr-1 border-r border-slate-200 dark:border-zinc-800"
        >
          <Image
            src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
            alt="Financially Up"
            width={163}
            height={30}
            priority
            className="h-[30px] w-auto object-contain"
          />
        </Link>

        {/* Global Application Search (Ctrl/⌘ + K) */}
        <GlobalSearch />

        {/* Start a new client application */}
        <NewApplicationMenu />
      </div>

      {/* Header Right: Actions, Theme, and Profile */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <SunOutlined className="text-amber-500 text-base" />
          ) : (
            <MoonOutlined className="text-slate-600 text-base" />
          )}
        </button>

        {/* Staff Notifications (submissions, status changes, website enquiries) */}
        <NotificationCenter />

        {/* User Dropdown */}
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-zinc-800 cursor-pointer group">
            {user?.avatar ? (
              <Avatar src={user.avatar} size={32} className="shadow-sm" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#008043] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                {initials}
              </div>
            )}
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200 leading-none group-hover:text-[#008043] dark:group-hover:text-emerald-400 transition-colors">
                {user?.fullName || "User Account"}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium mt-0.5">
                {primaryRole}
              </span>
            </div>
            <DownOutlined className="text-[10px] text-slate-400 dark:text-zinc-500" />
          </div>
        </Dropdown>
      </div>
    </header>
  );
}
