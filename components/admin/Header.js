"use client";

/**
 * Admin Top Navigation Header
 * ===========================
 * Header toolbar containing sidebar toggle, global search, theme switcher,
 * notifications badge, and authenticated user dropdown menu.
 */

import React from "react";
import { useRouter } from "next/navigation";
import { Dropdown, Input, Badge, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  SunOutlined,
  MoonOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../app/ThemeProvider";
import { useAuth } from "../../context/AuthContext";
import { antdMsg } from "@/services";

export default function Header({ collapsed, setCollapsed }) {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();

  // Compute initials
  const initials = user
    ? `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase() || "U"
    : "U";

  // Primary role name
  const primaryRole = user?.roles?.[0]?.name || "Staff Member";

  // User dropdown menu items
  const userMenuItems = [
    {
      key: "user-info",
      label: (
        <div className="py-1 px-1 border-b border-slate-100 dark:border-zinc-800">
          <p className="text-xs font-semibold text-slate-800 dark:text-zinc-100">{user?.fullName || "User"}</p>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">{user?.email}</p>
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
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300">
      {/* Header Left: Menu toggle and Search */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          {collapsed ? (
            <MenuUnfoldOutlined className="text-base" />
          ) : (
            <MenuFoldOutlined className="text-base" />
          )}
        </button>

        {/* Global Search Bar */}
        <div className="relative w-full max-w-xs md:max-w-md hidden sm:block">
          <Input
            prefix={<SearchOutlined className="text-slate-400 mr-1.5" />}
            placeholder="Search modules, requests, clients..."
            className="h-9 border-slate-200 dark:border-zinc-800 dark:bg-zinc-800/40 rounded-full text-xs font-medium dark:text-zinc-200"
            suffix={
              <span className="hidden md:inline-block bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-sans">
                ⌘K
              </span>
            }
          />
        </div>
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

        {/* Help Button */}
        <button
          onClick={() => antdMsg.info("Financially Up Documentation & Knowledge Base")}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
          aria-label="Help & Documentation"
        >
          <QuestionCircleOutlined className="text-base" />
        </button>

        {/* Notification Bell with Badge */}
        <button
          onClick={() => antdMsg.info("You have 4 new notifications")}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 relative transition-all cursor-pointer"
          aria-label="Notifications"
        >
          <Badge count={4} size="small" color="#008043" offset={[-2, 2]}>
            <BellOutlined className="text-base text-slate-600 dark:text-zinc-400" />
          </Badge>
        </button>

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
