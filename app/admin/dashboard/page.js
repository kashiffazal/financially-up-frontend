"use client";

import React, { useState } from "react";
import { message } from "antd";
import {
  PlusOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FolderOpenOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import {
  RequestsOverTimeChart,
  RequestsByModuleChart,
} from "./DashboardCharts";

export default function Dashboard() {
  const [activeRange, setActiveRange] = useState("7D");

  // Recent requests table mock data
  const recentRequests = [
    {
      id: "REQ-2041",
      name: "Ava Thompson",
      initials: "AT",
      module: "GST Registrations",
      files: 3,
      status: "Pending",
      updated: "2 min ago",
      colorClass:
        "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/30",
    },
    {
      id: "REQ-2040",
      name: "Nguyen Pty Ltd",
      initials: "N",
      module: "Company Registration",
      files: 5,
      status: "Complete",
      updated: "26 min ago",
      colorClass:
        "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-900/30",
    },
    {
      id: "REQ-2039",
      name: "Blue Ridge Trust",
      initials: "B",
      module: "Trust Registrations",
      files: 2,
      status: "New Request",
      updated: "1 hr ago",
      colorClass:
        "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/30",
    },
    {
      id: "REQ-2038",
      name: "Sam O'Neill",
      initials: "SO",
      module: "Medicare",
      files: 1,
      status: "Draft",
      updated: "3 hr ago",
      colorClass:
        "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-900/30",
    },
    {
      id: "REQ-2037",
      name: "Everest SMSF",
      initials: "E",
      module: "SMSF Registrations",
      files: 4,
      status: "Rejected",
      updated: "5 hr ago",
      colorClass:
        "text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-900/30",
    },
    {
      id: "REQ-2036",
      name: "Kiara Patel",
      initials: "K",
      module: "Apply TFN / ABNs",
      files: 2,
      status: "Complete",
      updated: "Yesterday",
      colorClass:
        "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-900/30",
    },
  ];

  // Module performance progress bar mock data
  const modulePerformance = [
    { name: "Medicare", percentage: 40, color: "bg-rose-500" },
    { name: "GST Registrations", percentage: 53, color: "bg-amber-500" },
    { name: "Company Registration", percentage: 66, color: "bg-blue-500" },
    {
      name: "Changes To Company Details",
      percentage: 79,
      color: "bg-purple-500",
    },
    { name: "Trust Registrations", percentage: 92, color: "bg-cyan-500" },
    { name: "SMSF Registrations", percentage: 50, color: "bg-[#008043]" },
  ];

  return (
    <div className="space-y-6">
      {/* Title & Actions Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hi, Kashif 👋 Welcome back
          </h1>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Here&apos; s what&apos; s happening across your practice today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Date controls */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-1 rounded-xl flex gap-1 shadow-sm">
            {["7D", "14D", "30D", "90D"].map((range) => (
              <button
                key={range}
                onClick={() => setActiveRange(range)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeRange === range
                    ? "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-white"
                    : "text-slate-400 hover:text-slate-650 dark:text-zinc-505 dark:text-zinc-500 dark:hover:text-zinc-300"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* New Request CTA */}
          <button
            onClick={() => message.info("Create new request flow initiated")}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008043] hover:bg-[#006635] text-white text-xs font-bold rounded-xl shadow-sm shadow-[#008043]/20 transition-all cursor-pointer h-9"
          >
            <PlusOutlined className="text-xs" /> New Request
          </button>
        </div>
      </div>

      {/* STATS CARDS (5) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* Stat Card 1 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              Total Requests
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-55 bg-emerald-50 dark:bg-emerald-950/40 text-[#008043] dark:text-emerald-400 flex items-center justify-center">
              <FileTextOutlined className="text-base" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-extrabold text-slate-850 dark:text-white">
              3,482
            </span>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-[#008043] dark:text-emerald-400">
              <span>↑ 12.4%</span>
              <span className="text-slate-400 dark:text-zinc-500 font-medium">
                vs last month
              </span>
            </div>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              Pending
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ClockCircleOutlined className="text-base" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-extrabold text-slate-850 dark:text-white">
              428
            </span>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-[#008043] dark:text-emerald-400">
              <span>↑ 3.1%</span>
              <span className="text-slate-400 dark:text-zinc-500 font-medium">
                vs last month
              </span>
            </div>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              Completed
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[#008043] dark:text-emerald-400 flex items-center justify-center">
              <CheckCircleOutlined className="text-base" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-extrabold text-slate-850 dark:text-white">
              2,691
            </span>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-[#008043] dark:text-emerald-400">
              <span>↑ 8.2%</span>
              <span className="text-slate-400 dark:text-zinc-500 font-medium">
                vs last month
              </span>
            </div>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              Rejected
            </span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <CloseCircleOutlined className="text-base" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-extrabold text-slate-850 dark:text-white">
              137
            </span>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-rose-600 dark:text-rose-400">
              <span>↓ 1.6%</span>
              <span className="text-slate-400 dark:text-zinc-500 font-medium">
                vs last month
              </span>
            </div>
          </div>
        </div>

        {/* Stat Card 5 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              Drafts
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <FolderOpenOutlined className="text-base" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-extrabold text-slate-850 dark:text-white">
              226
            </span>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-[#008043] dark:text-emerald-400">
              <span>↑ 0.8%</span>
              <span className="text-slate-400 dark:text-zinc-500 font-medium">
                vs last month
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CHARTS GRID ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm lg:col-span-2">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Requests over time
            </h3>
          </div>
          <RequestsOverTimeChart />
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Requests by module
            </h3>
          </div>
          <RequestsByModuleChart />
        </div>
      </div>

      {/* PERFORMANCE & LIST ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Module Performance */}
        <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm lg:col-span-5 flex flex-col justify-between">
          <div className="mb-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Module performance
            </h3>
          </div>
          <div className="space-y-4">
            {modulePerformance.map((mod, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-700 dark:text-zinc-300">
                    {mod.name}
                  </span>
                  <span className="text-slate-500 dark:text-zinc-400">
                    {mod.percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${mod.percentage}%` }}
                    className={`h-full rounded-full ${mod.color} transition-all duration-500 ease-out`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Requests */}
        <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 shadow-sm lg:col-span-7 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Recent requests
            </h3>
            <button
              onClick={() => message.info("View all requests triggered")}
              className="text-xs font-bold text-[#008043] hover:text-[#006635] transition-colors cursor-pointer"
            >
              View all
            </button>
          </div>

          <div className="overflow-x-auto min-w-full">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-100 dark:border-zinc-800/85 text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-2 font-bold">Request</th>
                  <th className="pb-3 px-2 font-bold">Module</th>
                  <th className="pb-3 px-2 font-bold text-center">Files</th>
                  <th className="pb-3 px-2 font-bold">Status</th>
                  <th className="pb-3 pl-2 font-bold">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
                {recentRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/20 transition-colors"
                  >
                    <td className="py-3 pr-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 flex items-center justify-center font-bold font-sans">
                        {req.initials}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-[#008043] dark:group-hover:text-emerald-400 transition-colors">
                          {req.name}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                          {req.id}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-semibold text-slate-650 dark:text-zinc-400">
                      {req.module}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 font-bold">
                        <PaperClipOutlined className="text-[10px]" />
                        <span>{req.files}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${req.colorClass}`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3 pl-2 text-slate-400 dark:text-zinc-500 font-medium">
                      {req.updated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

