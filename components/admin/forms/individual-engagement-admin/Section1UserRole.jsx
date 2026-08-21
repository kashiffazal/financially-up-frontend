"use client";

import React from "react";
import { Tag } from "antd";
import { UserOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { GetUserData } from "@/services";

export default function Section1UserRole() {
  const currentUser = GetUserData();
  const userName =
    currentUser?.name ||
    currentUser?.fullName ||
    `${currentUser?.firstName || ""} ${currentUser?.lastName || ""}`.trim() ||
    "Authenticated Reviewer";
  const userEmail = currentUser?.email || "";
  const roleName =
    currentUser?.roles?.[0]?.name || currentUser?.role || "Administrator";

  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-5 sm:p-6 space-y-3 hover:border-brand-primary/40 transition-all">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center text-lg font-bold">
            <UserOutlined />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Reviewing Staff Member
            </div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              {userName}{" "}
              {userEmail && (
                <span className="text-xs text-slate-400 font-normal">
                  ({userEmail})
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tag
            color="green"
            className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border-0 bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
          >
            <SafetyCertificateOutlined /> {roleName}
          </Tag>
        </div>
      </div>
    </div>
  );
}
