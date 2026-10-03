"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "../../ThemeProvider";
import { Skeleton, Tooltip, Segmented, Tag } from "antd";
import {
  QuestionCircleOutlined,
  ArrowRightOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  RiseOutlined,
  ThunderboltOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/**
 * SSR-safe dynamic imports for Ant Design Charts (@ant-design/charts / AntV)
 * Wrapped with next/dynamic with ssr: false to prevent HTML5 canvas / window SSR issues.
 */
const AntArea = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Area),
  {
    ssr: false,
    loading: () => (
      <div className="h-[280px] w-full flex flex-col justify-center items-center p-4">
        <Skeleton active paragraph={{ rows: 6 }} />
      </div>
    ),
  }
);

const AntColumn = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Column),
  {
    ssr: false,
    loading: () => (
      <div className="h-[280px] w-full flex flex-col justify-center items-center p-4">
        <Skeleton active paragraph={{ rows: 6 }} />
      </div>
    ),
  }
);

const AntPie = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Pie),
  {
    ssr: false,
    loading: () => (
      <div className="h-[280px] w-full flex flex-col justify-center items-center p-4">
        <Skeleton active paragraph={{ rows: 6 }} />
      </div>
    ),
  }
);

/**
 * RequestsOverTimeChart (Ant Design Charts / AntV)
 * ===============================================
 * Visualizes daily client submission trends using a modern Ant Design Area Chart.
 * Includes:
 * 1. Live mini KPI performance toolbar (Daily Average, Peak Day, Total Inflow).
 * 2. Multi-stop emerald gradient with smooth spline curve.
 * 3. Interactive tooltips in plain English.
 * 4. Dual view switching (Combined Total vs. Service Category Breakdown).
 */
export function RequestsOverTimeChart({
  trendData = [],
  antvAreaTrend = [],
  antvCategoryTrend = [],
}) {
  const { isDark } = useTheme();
  const [viewMode, setViewMode] = useState("total"); // "total" | "category"

  // Fallback dataset if empty
  const defaultTotalData = [
    { date: "27 Sep", applications: 14 },
    { date: "28 Sep", applications: 13 },
    { date: "29 Sep", applications: 7 },
    { date: "30 Sep", applications: 13 },
    { date: "1 Oct", applications: 12 },
    { date: "2 Oct", applications: 18 },
    { date: "3 Oct", applications: 5 },
  ];

  const defaultCategoryData = [
    { date: "27 Sep", type: "Companies (ASIC)", count: 5 },
    { date: "27 Sep", type: "Individual Engagements", count: 6 },
    { date: "27 Sep", type: "Other Tax & Trusts", count: 3 },
    { date: "28 Sep", type: "Companies (ASIC)", count: 1 },
    { date: "28 Sep", type: "Individual Engagements", count: 8 },
    { date: "28 Sep", type: "Other Tax & Trusts", count: 4 },
    { date: "29 Sep", type: "Companies (ASIC)", count: 4 },
    { date: "29 Sep", type: "Individual Engagements", count: 2 },
    { date: "29 Sep", type: "Other Tax & Trusts", count: 1 },
    { date: "30 Sep", type: "Companies (ASIC)", count: 7 },
    { date: "30 Sep", type: "Individual Engagements", count: 4 },
    { date: "30 Sep", type: "Other Tax & Trusts", count: 2 },
    { date: "1 Oct", type: "Companies (ASIC)", count: 3 },
    { date: "1 Oct", type: "Individual Engagements", count: 6 },
    { date: "1 Oct", type: "Other Tax & Trusts", count: 3 },
    { date: "2 Oct", type: "Companies (ASIC)", count: 6 },
    { date: "2 Oct", type: "Individual Engagements", count: 8 },
    { date: "2 Oct", type: "Other Tax & Trusts", count: 4 },
    { date: "3 Oct", type: "Companies (ASIC)", count: 2 },
    { date: "3 Oct", type: "Individual Engagements", count: 2 },
    { date: "3 Oct", type: "Other Tax & Trusts", count: 1 },
  ];

  const totalData = useMemo(() => {
    return antvAreaTrend && antvAreaTrend.length > 0
      ? antvAreaTrend
      : trendData && trendData.length > 0
      ? trendData.map((d) => ({ date: d.label, applications: d.total }))
      : defaultTotalData;
  }, [antvAreaTrend, trendData]);

  const categoryData = useMemo(() => {
    return antvCategoryTrend && antvCategoryTrend.length > 0
      ? antvCategoryTrend
      : defaultCategoryData;
  }, [antvCategoryTrend]);

  // Compute live KPI analytics for the selected timeframe
  const kpiStats = useMemo(() => {
    const total = totalData.reduce((acc, curr) => acc + (curr.applications || 0), 0);
    const count = totalData.length || 1;
    const avg = (total / count).toFixed(1);

    let peak = { date: "—", applications: 0 };
    totalData.forEach((item) => {
      if ((item.applications || 0) > peak.applications) {
        peak = item;
      }
    });

    return { total, avg, peak };
  }, [totalData]);

  // Ant Design Chart Config: Total Applications View
  const totalConfig = {
    theme: isDark ? "dark" : "classic",
    data: totalData,
    xField: "date",
    yField: "applications",
    shapeField: "smooth",
    height: 275,
    style: {
      fill: isDark
        ? "linear-gradient(-90deg, rgba(0, 128, 67, 0.04) 0%, rgba(0, 128, 67, 0.32) 100%)"
        : "linear-gradient(-90deg, rgba(0, 128, 67, 0.06) 0%, rgba(0, 128, 67, 0.35) 100%)",
      fillOpacity: 0.35,
      // Left, bottom, and right borders removed: stroke is applied exclusively to the line mark below
    },
    line: {
      style: {
        stroke: "#008043",
        lineWidth: 2, // Slimmer, sleeker top curve
      },
    },
    point: {
      size: 3.5, // Refined point size
      shape: "circle",
      style: {
        fill: isDark ? "#18181b" : "#ffffff",
        stroke: "#008043",
        lineWidth: 2,
      },
    },
    axis: {
      x: {
        title: false,
        labelSpacing: 6,
        labelFill: isDark ? "#cbd5e1" : "#64748b",
        labelOpacity: 1,
        labelFontSize: 11,
        labelFontWeight: 500,
        line: false,
        tick: false,
      },
      y: {
        title: false,
        labelFill: isDark ? "#cbd5e1" : "#64748b",
        labelOpacity: 1,
        labelFontSize: 11,
        gridLineDash: [3, 3],
        gridStroke: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.06)",
      },
    },
    tooltip: {
      items: [
        (d) => ({
          name: "Applications Received",
          value: d.applications,
        }),
      ],
    },
  };

  // Ant Design Chart Config: Category Breakdown View
  const categoryConfig = {
    theme: isDark ? "dark" : "classic",
    data: categoryData,
    xField: "date",
    yField: "count",
    colorField: "type",
    shapeField: "smooth",
    stack: true,
    height: 275,
    scale: {
      color: {
        range: ["#008043", "#10b981", "#3b82f6"],
      },
    },
    style: {
      fillOpacity: isDark ? 0.32 : 0.35,
    },
    line: {
      style: {
        lineWidth: 2,
      },
    },
    point: {
      size: 3.5,
      shape: "circle",
      style: {
        fill: isDark ? "#18181b" : "#ffffff",
        lineWidth: 2,
      },
    },
    axis: {
      x: {
        title: false,
        labelSpacing: 6,
        labelFill: isDark ? "#cbd5e1" : "#64748b",
        labelOpacity: 1,
        labelFontSize: 11,
        labelFontWeight: 500,
        line: false,
        tick: false,
      },
      y: {
        title: false,
        labelFill: isDark ? "#cbd5e1" : "#64748b",
        labelOpacity: 1,
        labelFontSize: 11,
        gridLineDash: [3, 3],
        gridStroke: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.06)",
      },
    },
    legend: {
      color: {
        position: "top",
        layout: { justifyContent: "flex-start" },
        itemLabelFill: isDark ? "#cbd5e1" : "#475569",
      },
    },
    tooltip: {
      items: [
        (d) => ({
          name: d.type || "Service",
          value: d.count,
        }),
      ],
    },
  };

  return (
    <div className="w-full flex flex-col justify-between">
      {/* Header controls with Plain-English Help Tooltip & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
        {/* KPI Mini Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800/40 text-xs">
            <RiseOutlined className="text-emerald-600 dark:text-emerald-400 font-bold" />
            <span className="text-slate-600 dark:text-zinc-400 font-medium">Daily Avg:</span>
            <strong className="text-emerald-700 dark:text-emerald-300 font-bold">{kpiStats.avg}</strong>
            <span className="text-[10px] text-slate-400">/day</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/40 text-xs">
            <ThunderboltOutlined className="text-blue-600 dark:text-blue-400 font-bold" />
            <span className="text-slate-600 dark:text-zinc-400 font-medium">Peak Day:</span>
            <strong className="text-blue-700 dark:text-blue-300 font-bold">{kpiStats.peak.applications}</strong>
            <span className="text-[10px] text-slate-400">({kpiStats.peak.date})</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700 text-xs">
            <CalendarOutlined className="text-slate-500 font-bold" />
            <span className="text-slate-600 dark:text-zinc-400 font-medium">Period Total:</span>
            <strong className="text-slate-800 dark:text-zinc-200 font-bold">{kpiStats.total}</strong>
          </div>
        </div>

        {/* View Switcher: Total vs Category */}
        <Segmented
          size="small"
          value={viewMode}
          onChange={(val) => setViewMode(val)}
          className="rounded-lg bg-slate-100 dark:bg-zinc-800 p-0.5 border border-slate-200/60 dark:border-zinc-700/60"
          options={[
            {
              label: "Combined Total",
              value: "total",
              icon: <LineChartOutlined />,
            },
            {
              label: "By Service Type",
              value: "category",
              icon: <BarChartOutlined />,
            },
          ]}
        />
      </div>

      {/* Ant Design Chart Canvas */}
      <div className="w-full min-h-[275px]">
        {viewMode === "total" ? (
          <AntArea key={`total-${isDark ? "dark" : "light"}`} {...totalConfig} />
        ) : (
          <AntArea key={`category-${isDark ? "dark" : "light"}`} {...categoryConfig} />
        )}
      </div>

      {/* Plain English explanation footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-zinc-800/80 text-[11px] text-slate-400 dark:text-zinc-500 flex items-center justify-between">
        <span className="flex items-center gap-1">
          💡 <strong className="text-slate-600 dark:text-zinc-300">Quick Tip:</strong> Hover over any date point to see exact submitted forms.
        </span>
        <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Ant Design Charts (AntV)
        </span>
      </div>
    </div>
  );
}

/**
 * RequestsByModuleChart (Ant Design Charts / AntV)
 * ===============================================
 * Visualizes service distribution using an Ant Design Column Chart or Donut Ring Chart.
 * Includes:
 * 1. Dual mode switcher (Volume Bar Column vs Percentage Donut Ring).
 * 2. Visual color coding per practice service.
 * 3. Direct navigation links to specific module registers.
 */
export function RequestsByModuleChart({
  moduleBreakdown = [],
  antvDistributionData = [],
}) {
  const { isDark } = useTheme();
  const [chartType, setChartType] = useState("column"); // "column" | "donut"

  const defaultDistribution = [
    { service: "Company", fullName: "Company Registrations", count: 12, route: "/admin/company-registration-new" },
    { service: "Individual", fullName: "Individual Engagements", count: 28, route: "/admin/individual-engagement-new" },
    { service: "GST", fullName: "GST Registrations", count: 6, route: "/admin/gst-registrations" },
    { service: "Medicare", fullName: "Medicare Claims", count: 4, route: "/admin/medicare" },
    { service: "Trust", fullName: "Trust Registrations", count: 3, route: "/admin/trust-registrations" },
    { service: "SMSF", fullName: "SMSF Registrations", count: 2, route: "/admin/smsf-registrations" },
  ];

  const chartData = useMemo(() => {
    return antvDistributionData && antvDistributionData.length > 0
      ? antvDistributionData.slice(0, 6)
      : moduleBreakdown && moduleBreakdown.length > 0
      ? moduleBreakdown.slice(0, 6).map((m) => ({
          service: m.shortName || m.name,
          fullName: m.name,
          count: m.count || 0,
          route: m.route,
        }))
      : defaultDistribution;
  }, [antvDistributionData, moduleBreakdown]);

  const totalCount = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + (curr.count || 0), 0);
  }, [chartData]);

  // Ant Design Column Chart Config
  const columnConfig = {
    theme: isDark ? "dark" : "classic",
    data: chartData,
    xField: "service",
    yField: "count",
    colorField: "service",
    height: 275,
    scale: {
      color: {
        range: ["#008043", "#10b981", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6"],
      },
    },
    style: {
      radiusTopLeft: 6,
      radiusTopRight: 6,
    },
    axis: {
      x: {
        title: false,
        labelSpacing: 6,
        labelFill: isDark ? "#cbd5e1" : "#64748b",
        labelOpacity: 1,
        labelFontSize: 11,
        labelFontWeight: 600,
        line: false,
        tick: false,
      },
      y: {
        title: false,
        labelFill: isDark ? "#cbd5e1" : "#64748b",
        labelOpacity: 1,
        labelFontSize: 11,
        gridLineDash: [3, 3],
        gridStroke: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.06)",
      },
    },
    label: {
      text: "count",
      textBaseline: "bottom",
      style: {
        fontSize: 11,
        fontWeight: "bold",
        fill: isDark ? "#e2e8f0" : "#334155",
        dy: -4,
      },
    },
    legend: false,
    tooltip: {
      items: [
        {
          field: "count",
          name: "Submitted Applications",
        },
      ],
    },
  };

  // Ant Design Donut / Ring Pie Chart Config
  const donutConfig = {
    theme: isDark ? "dark" : "classic",
    data: chartData,
    angleField: "count",
    colorField: "service",
    innerRadius: 0.62,
    radius: 0.9,
    height: 275,
    scale: {
      color: {
        range: ["#008043", "#10b981", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6"],
      },
    },
    legend: {
      color: {
        position: "bottom",
        layout: { justifyContent: "center" },
        itemLabelFill: isDark ? "#cbd5e1" : "#475569",
      },
    },
    label: {
      text: "count",
      style: {
        fontWeight: "bold",
        fontSize: 11,
        fill: isDark ? "#e2e8f0" : "#1e293b",
      },
    },
    tooltip: {
      items: [
        {
          field: "count",
          name: "Applications",
        },
      ],
    },
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Explainable Header with View Switcher */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="text-slate-500 dark:text-zinc-400 font-medium">
          Ranked by submission volume:
        </span>

        {/* Dual Mode Switcher: Column vs Donut */}
        <Segmented
          size="small"
          value={chartType}
          onChange={(val) => setChartType(val)}
          className="rounded-lg bg-slate-100 dark:bg-zinc-800 p-0.5 border border-slate-200/60 dark:border-zinc-700/60"
          options={[
            {
              label: "Bars",
              value: "column",
              icon: <BarChartOutlined />,
            },
            {
              label: "Share %",
              value: "donut",
              icon: <PieChartOutlined />,
            },
          ]}
        />
      </div>

      {/* Ant Design Chart Render Canvas */}
      <div className="w-full min-h-[275px]">
        {chartType === "column" ? (
          <AntColumn key={`col-${isDark ? "dark" : "light"}`} {...columnConfig} />
        ) : (
          <AntPie key={`pie-${isDark ? "dark" : "light"}`} {...donutConfig} />
        )}
      </div>

      {/* Direct links to registers footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-zinc-400 font-medium">
          Total in Top Services: <strong className="text-slate-800 dark:text-zinc-200">{totalCount}</strong>
        </span>
        <Link
          href="/admin/company-registration-new"
          className="font-bold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
        >
          Open register <ArrowRightOutlined className="text-[10px]" />
        </Link>
      </div>
    </div>
  );
}
