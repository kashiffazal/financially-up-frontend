"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PlusOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FolderOpenOutlined,
  PaperClipOutlined,
  ReloadOutlined,
  BankOutlined,
  UserOutlined,
  FileProtectOutlined,
  ApartmentOutlined,
  AuditOutlined,
  ShopOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  CompassOutlined,
  SafetyOutlined,
  CheckOutlined,
  EyeOutlined,
  FilePdfOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Modal, Spin, Tooltip, Input, Badge, Popover } from "antd";
import {
  RequestsOverTimeChart,
  RequestsByModuleChart,
} from "./DashboardCharts";
import { get, getFileUrl } from "@/services";
import { useAuth } from "../../../context/AuthContext";
import { useLiveNotifications } from "@/components/admin/NotificationCenter/liveEvents";
import WelcomeDashboard from "@/components/admin/WelcomeDashboard";
import { APPLICATION_MODULE_KEYS, canViewModule } from "@/lib/adminAccess";

/**
 * ============================================================================
 * Executive Practice Operations & Client Applications Dashboard
 * ============================================================================
 *
 * Features:
 * 1. Executive Practice Header with time-aware greeting, quick status indicators, and timeframe switcher.
 * 2. Visual Client Application Lifecycle Pipeline (Drafts -> Under Review -> Officially Lodged).
 * 3. Elevated 4-Card KPI Metric Strip with glowing indicators and drill-down links.
 * 4. Ant Design Charts (AntV) Integration:
 *    - Inflow Area Trend with mini KPI toolbar (Daily Avg, Peak Day, Period Total).
 *    - Service Distribution with dual-mode switch (Volume Column Bars vs Share % Donut Ring).
 * 5. Interactive Fast-Action Client Service Launchpad (6 Flagships + Searchable Directory Modal).
 * 6. Live Incoming Submissions Table with glowing status beacons and direct application drawers.
 * 7. Non-technical practice guide with clear explanations.
 */

export default function Dashboard() {
  const router = useRouter();
  const { user, hasRole } = useAuth();
  const isAdministrator = hasRole("administrator");
  // Staff without any client-application access get their own welcome dashboard
  const hasApplicationAccess =
    isAdministrator || APPLICATION_MODULE_KEYS.some((key) => canViewModule(user?.permissions || [], key));

  // State Management
  const [activeRange, setActiveRange] = useState("7D");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState(null);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);
  const [launchpadSearch, setLaunchpadSearch] = useState("");
  const [showPlainEnglishGuide, setShowPlainEnglishGuide] = useState(false);

  // Time-of-day dynamic greeting
  const [greeting, setGreeting] = useState("Good day");
  const [currentDateString, setCurrentDateString] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Helper to format file sizes
  const formatFileSize = (bytes) => {
    if (!bytes || bytes <= 0) return "—";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    setCurrentDateString(
      new Date().toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  // Fetch Dashboard Stats from Backend API
  const fetchDashboardStats = useCallback(
    async (range = "7D", isSilent = false) => {
      if (!isSilent) setLoading(true);
      else setRefreshing(true);

      try {
        const res = await get("/dashboard/stats", { range });
        if (res && res.success) {
          setStats(res);
        }
      } catch (err) {
        console.error("[Dashboard] Failed to fetch stats:", err);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [],
  );

  // Fetch on mount or range change
  useEffect(() => {
    fetchDashboardStats(activeRange);
  }, [activeRange, fetchDashboardStats]);

  // Live updates: refresh metrics & recent submissions silently when another
  // user's submission or status change arrives (no page refresh)
  useLiveNotifications((notification) => {
    if (
      notification?.type === "submission" ||
      notification?.type === "status_change"
    ) {
      fetchDashboardStats(activeRange, true);
    }
  });

  // Handle Range Toggle
  const handleRangeChange = (range) => {
    setActiveRange(range);
  };

  // Plain-English Status Badge Helper
  const getStatusBadge = (statusStr) => {
    const s = (statusStr || "").toLowerCase();
    if (
      s.includes("approved") ||
      s.includes("accepted") ||
      s.includes("complete") ||
      s.includes("lodged")
    ) {
      return {
        label: "Completed & Registered",
        rawStatus: statusStr,
        explanation:
          "This application has been reviewed, approved, and officially registered with the government (ASIC or ATO).",
        badgeClass:
          "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800/40",
        dotClass: "bg-emerald-500",
      };
    }
    if (s.includes("decline") || s.includes("reject")) {
      return {
        label: "Declined / Needs Re-check",
        rawStatus: statusStr,
        explanation:
          "This application was declined or requires corrections from the client before resubmitting.",
        badgeClass:
          "text-rose-700 bg-rose-50 dark:text-rose-300 dark:bg-rose-950/50 border border-rose-200/60 dark:border-rose-800/40",
        dotClass: "bg-rose-500",
      };
    }
    if (s.includes("draft") || s.includes("incomplete")) {
      return {
        label: "Unfinished Draft",
        rawStatus: statusStr,
        explanation:
          "The client started filling out this form but hasn't submitted it yet.",
        badgeClass:
          "text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-950/50 border border-purple-200/60 dark:border-purple-800/40",
        dotClass: "bg-purple-500",
      };
    }
    // Default: Pending / Under Review
    return {
      label: "Needs Review",
      rawStatus: statusStr || "Submitted",
      explanation:
        "A new submission that arrived and is waiting for your team to check client identity, review files, or obtain signatures.",
      badgeClass:
        "text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-800/40",
      dotClass: "bg-amber-500 animate-pulse",
    };
  };

  // Launchpad Service Directory
  const launchpadServices = [
    {
      title: "Australian Company Registration",
      desc: "Complete 12-step ASIC registration with nominee director & terms of engagement",
      icon: <BankOutlined className="text-xl text-[var(--brand-primary)]" />,
      href: "/resources/registration-forms/company-registration",
      adminLogUrl: "/admin/company-registration-new",
      tag: "Flagship",
      turnaround: "~15 mins",
      plainHelp:
        "Register a new Pty Ltd company with the Australian government (ASIC).",
    },
    {
      title: "New Individual Engagement",
      desc: "Client AML/CTF CDD verification, digital signatures & letter of engagement",
      icon: <UserOutlined className="text-xl text-blue-500" />,
      href: "/resources/engagement-forms/individual-engagement-form",
      adminLogUrl: "/admin/individual-engagement-new",
      tag: "Flagship",
      turnaround: "~5 mins",
      plainHelp:
        "Sign up a new individual taxpayer client for accounting and tax representation.",
    },
    {
      title: "GST Registration",
      desc: "Business GST registration & Australian taxation reporting setup",
      icon: <FileProtectOutlined className="text-xl text-amber-500" />,
      href: "/resources/registration-forms/gst-registrations",
      adminLogUrl: "/admin/gst-registrations",
      tag: "ATO Service",
      turnaround: "Same day",
      plainHelp:
        "Register a business for Goods & Services Tax (GST) with the Australian Tax Office (ATO).",
    },
    {
      title: "Medicare Exemption Claims",
      desc: "Application for Medicare levy exemption certificate & ATO tax lodgement",
      icon: <SafetyCertificateOutlined className="text-xl text-rose-500" />,
      href: "/resources/medicare-forms/medicare-exemption-form",
      adminLogUrl: "/admin/medicare",
      tag: "Exemption",
      turnaround: "1–2 days",
      plainHelp:
        "Claim exemption certificates for foreign residents or temporary visa holders.",
    },
    {
      title: "Trust Registrations",
      desc: "Discretionary, Unit, Family & Hybrid Trust establishments & deeds",
      icon: <ApartmentOutlined className="text-xl text-cyan-500" />,
      href: "/resources/registration-forms/trust-registrations",
      adminLogUrl: "/admin/trust-registrations",
      tag: "Establishment",
      turnaround: "24 hours",
      plainHelp:
        "Set up and register a Family, Unit, or Discretionary Trust structure.",
    },
    {
      title: "SMSF Registration",
      desc: "Self-Managed Superannuation Fund establishment & compliance lodgements",
      icon: <AuditOutlined className="text-xl text-purple-500" />,
      href: "/resources/registration-forms/smsf-registrations",
      adminLogUrl: "/admin/smsf-registrations",
      tag: "Superannuation",
      turnaround: "24–48 hours",
      plainHelp:
        "Create a Self-Managed Superannuation Fund for private retirement investments.",
    },
    {
      title: "Business Name Registration",
      desc: "National ASIC Business Name registration & renewals",
      icon: <ShopOutlined className="text-xl text-pink-500" />,
      href: "/resources/registration-forms/business-name-registrations",
      adminLogUrl: "/admin/business-name-registrations",
      tag: "ASIC National",
      turnaround: "Fast-track",
      plainHelp:
        "Register a trading business name under an Australian Business Number (ABN).",
    },
    {
      title: "Apply TFN / ABNs",
      desc: "Direct tax file number and Australian business number applications",
      icon: <IdcardOutlined className="text-xl text-indigo-500" />,
      href: "/resources/registration-forms/apply-tfn-abns",
      adminLogUrl: "/admin/apply-tfn-abns",
      tag: "Tax Identity",
      turnaround: "Direct ATO",
      plainHelp:
        "Apply for a Tax File Number (TFN) or Australian Business Number (ABN).",
    },
    {
      title: "Changes to Company Details",
      desc: "ASIC Form 484 changes to directors, addresses, and shareholdings",
      icon: <BankOutlined className="text-xl text-teal-500" />,
      href: "/resources/registration-forms/changes-to-company-details",
      adminLogUrl: "/admin/changes-to-company-details",
      tag: "ASIC 484",
      turnaround: "Same day",
      plainHelp:
        "Update company officeholders, registered addresses, or shareholder details.",
    },
    {
      title: "Entity Engagements",
      desc: "Corporate and partnership accounting engagement letters & onboarding",
      icon: <TeamOutlined className="text-xl text-sky-500" />,
      href: "/resources/engagement-forms/entity-engagements-form",
      adminLogUrl: "/admin/entity-engagements",
      tag: "Engagement",
      turnaround: "~10 mins",
      plainHelp:
        "Onboard companies, partnerships, or trusts as new accounting clients.",
    },
  ];

  // Filter launchpad directory in modal
  const filteredServices = useMemo(() => {
    if (!launchpadSearch.trim()) return launchpadServices;
    const q = launchpadSearch.toLowerCase();
    return launchpadServices.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        (s.plainHelp && s.plainHelp.toLowerCase().includes(q)),
    );
  }, [launchpadSearch, launchpadServices]);

  const metrics = stats?.metrics || {
    totalApplications: 0,
    pendingReview: 0,
    approvedLodged: 0,
    rejectedDeclined: 0,
    draftIncomplete: 0,
    activeStaff: 1,
    activeSessions: 1,
    totalAuditLogs: 0,
  };

  // Workflow Lifecycle Pipeline percentages
  const pipelineStats = useMemo(() => {
    const total = Math.max(
      1,
      (metrics.draftIncomplete || 0) +
        (metrics.pendingReview || 0) +
        (metrics.approvedLodged || 0) +
        (metrics.rejectedDeclined || 0),
    );
    const draft = metrics.draftIncomplete || 0;
    const pending = metrics.pendingReview || 0;
    const approved = metrics.approvedLodged || 0;
    const rejected = metrics.rejectedDeclined || 0;

    const draftPct = Math.round((draft / total) * 100);
    const pendingPct = Math.round((pending / total) * 100);
    const approvedPct = Math.round((approved / total) * 100);
    const rejectedPct = Math.max(0, 100 - draftPct - pendingPct - approvedPct);

    return {
      total,
      draft,
      pending,
      approved,
      rejected,
      draftPct,
      pendingPct,
      approvedPct,
      rejectedPct,
    };
  }, [metrics]);

  if (!hasApplicationAccess) {
    return (
      <WelcomeDashboard
        user={user}
        isAdministrator={isAdministrator}
        greeting={greeting}
        dateString={currentDateString}
        modules={stats?.modules}
        loading={loading}
      />
    );
  }

  // Team & Security figures are only sent to staff with users.view / audit.view
  const showTeamCard = metrics.activeStaff !== null && metrics.activeStaff !== undefined;

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* ─── ROW 1: EXECUTIVE HEADER & TIMEFRAME CONTROLS ─── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white m-0">
              {greeting}, {user?.firstName || "Practice Admin"} 👋
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">
              Practice Management
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 m-0">
            <span className="font-medium text-slate-700 dark:text-zinc-300">
              Operations &amp; Client Application Center
            </span>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <span className="font-semibold text-slate-600 dark:text-zinc-300">
              {currentDateString}
            </span>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Synced
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Timeframe Range Selector */}
          <div className="bg-slate-100 dark:bg-zinc-800 p-1 rounded-lg flex items-center gap-1 border border-slate-200/70 dark:border-zinc-700/60 shadow-2xs">
            {["7D", "14D", "30D", "90D"].map((range) => (
              <button
                key={range}
                onClick={() => handleRangeChange(range)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  activeRange === range
                    ? "bg-white dark:bg-zinc-900 text-[var(--brand-primary)] shadow-xs"
                    : "text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Quick Refresh Button */}
          <button
            onClick={() => fetchDashboardStats(activeRange, true)}
            title="Refresh Live Practice Analytics"
            disabled={refreshing}
            className="p-2 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700 shadow-xs cursor-pointer transition-all disabled:opacity-50"
          >
            <ReloadOutlined
              className={`text-sm ${
                refreshing ? "animate-spin text-[var(--brand-primary)]" : ""
              }`}
            />
          </button>

          {/* New Application Quick Launcher CTA */}
          <button
            onClick={() => setIsLaunchpadOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-xs font-bold rounded-lg shadow-sm shadow-[var(--brand-primary)]/20 transition-all cursor-pointer h-9 active:scale-[0.98]"
          >
            <PlusOutlined className="text-xs" /> + New Application
          </button>
        </div>
      </div>

      {/* ─── ROW 2: COLLAPSIBLE PRACTICE GUIDE (UNDERSTANDING YOUR OPERATIONS) ─── */}
      <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 rounded-card p-4 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <InfoCircleOutlined className="text-[var(--brand-primary)] text-base" />
            <h2 className="text-xs md:text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              Plain-English Practice Guide: Understanding Your Operations
            </h2>
          </div>
          <button
            onClick={() => setShowPlainEnglishGuide(!showPlainEnglishGuide)}
            className="text-xs font-bold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            {showPlainEnglishGuide ? (
              <>
                Hide Guide <UpOutlined className="text-[10px]" />
              </>
            ) : (
              <>
                Show Guide <DownOutlined className="text-[10px]" />
              </>
            )}
          </button>
        </div>

        {showPlainEnglishGuide && (
          <div className="mt-3 pt-3 border-t border-emerald-200/60 dark:border-emerald-800/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-white/90 dark:bg-zinc-900/60 border border-emerald-100 dark:border-zinc-800">
              <span className="font-bold text-slate-800 dark:text-white block mb-0.5">
                📄 What is a Lodgement?
              </span>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 m-0">
                A formal legal submission sent to government bodies (ASIC or the
                ATO) to register a new company, business name, or tax return.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/90 dark:bg-zinc-900/60 border border-emerald-100 dark:border-zinc-800">
              <span className="font-bold text-amber-700 dark:text-amber-400 block mb-0.5">
                ⏳ Needs Review Status
              </span>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 m-0">
                Client submitted their information, but your team must check ID
                documents (AML/CTF) or obtain sign-offs before official
                lodgement.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/90 dark:bg-zinc-900/60 border border-emerald-100 dark:border-zinc-800">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                ✅ Completed &amp; Registered
              </span>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 m-0">
                The government body (ASIC or ATO) accepted and registered the
                entity. The ACN, ABN, or certificate is ready for the client.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/90 dark:bg-zinc-900/60 border border-emerald-100 dark:border-zinc-800">
              <span className="font-bold text-blue-700 dark:text-blue-400 block mb-0.5">
                🚀 Fast-Action Launchpad
              </span>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 m-0">
                Start any client onboarding, company formation, or GST
                registration directly on behalf of a client in just a few
                clicks.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ─── ROW 3: 4-CARD EXECUTIVE METRIC STRIP ─── */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${showTeamCard ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
        {/* Metric 1: Total Applications & Registrations */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[var(--brand-primary)]/40 transition-all group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                Total Applications
              </span>
              <Tooltip
                title="Every client registration form or engagement request received across your practice (e.g. Company setups, GST, Trusts, SMSF, Tax agreements)."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer" />
              </Tooltip>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center font-bold text-base border border-[var(--brand-primary)]/20">
              <FileTextOutlined />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {loading ? <Spin size="small" /> : metrics.totalApplications}
            </span>
            <div className="flex items-center gap-1.5 mt-1.5 text-xs">
              <span className="font-bold text-[var(--brand-primary)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]"></span>
                Active Inflow
              </span>
              <span className="text-slate-400 dark:text-zinc-500">
                across 10 client services
              </span>
            </div>
          </div>
        </div>

        {/* Metric 2: Needs Review & Verification */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-amber-400/40 transition-all group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                Needs Review
              </span>
              <Tooltip
                title="Applications that arrived and require action from your staff (checking client ID documents, verifying details, or collecting missing signatures)."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-amber-500 cursor-pointer" />
              </Tooltip>
            </div>
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-base border border-amber-200/60 dark:border-amber-800/40">
              <ClockCircleOutlined />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {loading ? <Spin size="small" /> : metrics.pendingReview}
            </span>
            <div className="flex items-center gap-1.5 mt-1.5 text-xs">
              <span className="font-bold text-amber-600 dark:text-amber-400">
                Action Required
              </span>
              <span className="text-slate-400 dark:text-zinc-500">
                waiting for team check
              </span>
            </div>
          </div>
        </div>

        {/* Metric 3: Completed & Officially Registered */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-400/40 transition-all group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                Completed
              </span>
              <Tooltip
                title="Applications your office approved, finalised, and successfully registered with Australian government bodies (ASIC or ATO)."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-emerald-500 cursor-pointer" />
              </Tooltip>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base border border-emerald-200/60 dark:border-emerald-800/40">
              <CheckCircleOutlined />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {loading ? <Spin size="small" /> : metrics.approvedLodged}
            </span>
            <div className="flex items-center gap-1.5 mt-1.5 text-xs">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                Officially Registered
              </span>
              <span className="text-slate-400 dark:text-zinc-500">
                with ASIC &amp; ATO
              </span>
            </div>
          </div>
        </div>

        {/* Metric 4: Team Members & Security Activity */}
        {showTeamCard && (
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-400/40 transition-all group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                Team &amp; Security
              </span>
              <Tooltip
                title="Active staff accounts with portal access, currently logged-in devices, and tamper-proof security audit records."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-blue-500 cursor-pointer" />
              </Tooltip>
            </div>
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base border border-blue-200/60 dark:border-blue-800/40">
              <SafetyCertificateOutlined />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {metrics.activeStaff}
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
                staff / {metrics.activeSessions} active sessions
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 text-xs">
              <Link
                href="/admin/audit-logs"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                {metrics.totalAuditLogs} Activity Logs
              </Link>
              <span className="text-slate-400 dark:text-zinc-500">
                tamper-proof
              </span>
            </div>
          </div>
        </div>
        )}
      </div>

      {/* ─── ROW 3: PRACTICE APPLICATION LIFECYCLE PIPELINE ─── */}
      <div className="bg-white dark:bg-zinc-900 p-5 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CompassOutlined className="text-[var(--brand-primary)] text-base" />
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider m-0">
              Client Application Lifecycle Pipeline
            </h2>
            <Tooltip
              title="Shows the current workflow stage of all applications in your practice. Lets managers quickly spot if files are waiting on client input or pending team review."
              placement="top"
            >
              <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer" />
            </Tooltip>
          </div>
          <span className="text-[11px] text-slate-400">
            Total Tracked Volume:{" "}
            <strong>{pipelineStats.total} applications</strong>
          </span>
        </div>

        {/* Multi-Segment Color Progress Bar */}
        <div className="w-full h-3 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden flex shadow-inner">
          <div
            style={{ width: `${pipelineStats.approvedPct}%` }}
            className="bg-emerald-500 transition-all duration-500"
            title={`Completed & Registered: ${pipelineStats.approved} (${pipelineStats.approvedPct}%)`}
          />
          <div
            style={{ width: `${pipelineStats.pendingPct}%` }}
            className="bg-amber-500 transition-all duration-500"
            title={`Awaiting Staff Review: ${pipelineStats.pending} (${pipelineStats.pendingPct}%)`}
          />
          <div
            style={{ width: `${pipelineStats.draftPct}%` }}
            className="bg-purple-500 transition-all duration-500"
            title={`Unfinished Drafts: ${pipelineStats.draft} (${pipelineStats.draftPct}%)`}
          />
          <div
            style={{ width: `${pipelineStats.rejectedPct}%` }}
            className="bg-rose-500 transition-all duration-500"
            title={`Declined / Action Required: ${pipelineStats.rejected} (${pipelineStats.rejectedPct}%)`}
          />
        </div>

        {/* Stage Legend Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <div className="min-w-0">
              <span className="text-slate-500 dark:text-zinc-400 block text-[11px]">
                Completed / Lodged
              </span>
              <strong className="text-slate-800 dark:text-zinc-200">
                {pipelineStats.approved} ({pipelineStats.approvedPct}%)
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-pulse"></span>
            <div className="min-w-0">
              <span className="text-slate-500 dark:text-zinc-400 block text-[11px]">
                Awaiting Review
              </span>
              <strong className="text-slate-800 dark:text-zinc-200">
                {pipelineStats.pending} ({pipelineStats.pendingPct}%)
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
            <div className="min-w-0">
              <span className="text-slate-500 dark:text-zinc-400 block text-[11px]">
                Client Drafts
              </span>
              <strong className="text-slate-800 dark:text-zinc-200">
                {pipelineStats.draft} ({pipelineStats.draftPct}%)
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
            <div className="min-w-0">
              <span className="text-slate-500 dark:text-zinc-400 block text-[11px]">
                Requires Re-check
              </span>
              <strong className="text-slate-800 dark:text-zinc-200">
                {pipelineStats.rejected} ({pipelineStats.rejectedPct}%)
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* ─── ROW 4: ANT DESIGN CHARTS (ANTV) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Ant Design Area Chart: Daily Submission Trends */}
        <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs lg:col-span-8 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                  Client Applications Received Over Time ({activeRange})
                </h2>
                <Tooltip
                  title="This chart plots how many client forms arrived each day. You can view the combined total or switch to see companies vs individual tax sign-ups."
                  placement="top"
                >
                  <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer" />
                </Tooltip>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 m-0">
                Daily volume of client registrations and onboarding requests
              </p>
            </div>
          </div>

          <div className="mt-3">
            <RequestsOverTimeChart
              trendData={stats?.trendData || []}
              antvAreaTrend={stats?.antvAreaTrend || []}
              antvCategoryTrend={stats?.antvCategoryTrend || []}
            />
          </div>
        </div>

        {/* Ant Design Column / Donut Chart: Service Distribution */}
        <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs lg:col-span-4 flex flex-col justify-between">
          <div className="mb-2">
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                Most Popular Services
              </h2>
              <Tooltip
                title="Ranks your practice services by how many applications clients have submitted for each. Helpful for seeing where team workload is focused."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer" />
              </Tooltip>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 m-0">
              Breakdown by service volume &amp; percentage share
            </p>
          </div>

          <div className="mt-3 flex-1">
            <RequestsByModuleChart
              moduleBreakdown={stats?.moduleBreakdown || []}
              antvDistributionData={stats?.antvDistributionData || []}
            />
          </div>
        </div>
      </div>

      {/* ─── ROW 5: FAST-ACTION FLAGSHIP SERVICE LAUNCHPAD ─── */}
      <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                Start a New Client Form or Registration
              </h2>
              <Tooltip
                title="Need to start a registration or onboarding on behalf of a client? Click any card below to open that specific form immediately."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer" />
              </Tooltip>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 m-0">
              Quick shortcuts to the most common client registration forms
            </p>
          </div>

          <button
            onClick={() => setIsLaunchpadOpen(true)}
            className="text-xs font-bold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            View all 10 client services{" "}
            <ArrowRightOutlined className="text-[10px]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {launchpadServices.slice(0, 6).map((service, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-slate-200/70 dark:border-zinc-800/80 hover:border-[var(--brand-primary)]/50 hover:bg-slate-50/70 dark:hover:bg-zinc-800/40 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-800 group-hover:bg-[var(--brand-primary-soft)] transition-colors shrink-0">
                  {service.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-zinc-100 group-hover:text-[var(--brand-primary)] transition-colors truncate m-0">
                      {service.title}
                    </h3>
                    {service.tag && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 shrink-0">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 line-clamp-2 m-0 leading-tight">
                    {service.plainHelp || service.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100 dark:border-zinc-800/80 text-[10px] text-slate-400">
                <span>⏱ {service.turnaround}</span>
                <div className="flex items-center gap-2.5">
                  {service.adminLogUrl && (
                    <Link
                      href={service.adminLogUrl}
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-zinc-300 underline font-medium"
                    >
                      Logs
                    </Link>
                  )}
                  <Link
                    href={service.href}
                    className="font-bold text-[var(--brand-primary)] hover:underline flex items-center gap-0.5"
                  >
                    Start Form <ArrowRightOutlined className="text-[8px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── ROW 6: LIVE INCOMING SUBMISSIONS QUEUE ─── */}
      <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                Recent Client Applications Feed
              </h2>
              <Tooltip
                title="Real-time list of the most recent applications received from clients. You can see who submitted it, what service they need, and what stage it is in."
                placement="top"
              >
                <QuestionCircleOutlined className="text-xs text-slate-400 hover:text-[var(--brand-primary)] cursor-pointer" />
              </Tooltip>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 m-0">
              Live incoming submissions from clients and taxpayers across all
              client services
            </p>
          </div>

          <Link
            href="/admin/company-registration-new"
            className="text-xs font-bold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
          >
            View all applications <ArrowRightOutlined className="text-[10px]" />
          </Link>
        </div>

        <div className="overflow-x-auto min-w-full">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-zinc-800/85 text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                <th className="pb-3 pr-3 font-bold">Client / Reference #</th>
                <th className="pb-3 px-3 font-bold">Service Requested</th>
                <th className="pb-3 px-2 font-bold text-center">Files</th>
                <th className="pb-3 px-3 font-bold">Workflow Status</th>
                <th className="pb-3 px-3 font-bold">Received</th>
                <th className="pb-3 pl-3 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    <Spin size="small" /> Loading incoming submissions...
                  </td>
                </tr>
              ) : (stats?.recentApplications || stats?.recentSubmissions || [])
                  .length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    No recent applications found in this timeframe.
                  </td>
                </tr>
              ) : (
                (
                  stats?.recentApplications ||
                  stats?.recentSubmissions ||
                  []
                ).map((req, idx) => {
                  const statusInfo = getStatusBadge(req.status);
                  const isEven = idx % 2 === 0;

                  return (
                    <tr
                      key={req.id || idx}
                      className={`hover:bg-slate-50/80 dark:hover:bg-zinc-800/40 transition-colors ${
                        isEven
                          ? "bg-transparent"
                          : "bg-slate-50/30 dark:bg-zinc-900/30"
                      }`}
                    >
                      {/* Client Name & Reference */}
                      <td className="py-3 pr-3">
                        <div className="font-bold text-slate-900 dark:text-zinc-100 truncate max-w-[200px]">
                          {req.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                          <span>{req.refNumber}</span>
                        </div>
                      </td>

                      {/* Service Name */}
                      <td className="py-3 px-3">
                        <span className="font-medium text-slate-700 dark:text-zinc-300">
                          {req.module}
                        </span>
                      </td>

                      {/* Files count with Interactive Popover */}
                      <td className="py-3 px-2 text-center">
                        {req.attachedFiles && req.attachedFiles.length > 0 ? (
                          <Popover
                            trigger={["click", "hover"]}
                            placement="bottom"
                            title={
                              <div className="flex items-center justify-between gap-3 pb-1 border-b border-slate-100 dark:border-zinc-800 text-xs font-bold text-slate-900 dark:text-zinc-100">
                                <span className="flex items-center gap-1.5">
                                  <PaperClipOutlined className="text-[var(--brand-primary)]" />
                                  Attached Documents ({req.attachedFiles.length}
                                  )
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono font-normal">
                                  {req.refNumber}
                                </span>
                              </div>
                            }
                            content={
                              <div className="max-w-[320px] max-h-[260px] overflow-y-auto space-y-1.5 pt-1">
                                {req.attachedFiles.map((file, fIdx) => (
                                  <a
                                    key={file.id || fIdx}
                                    href={getFileUrl(file.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg border border-slate-100 dark:border-zinc-800 hover:border-[var(--brand-primary)] hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-all flex items-center justify-between gap-2 group block text-left"
                                  >
                                    <div className="min-w-0 flex-1">
                                      <div className="text-xs font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-[var(--brand-primary)] truncate">
                                        {file.name}
                                      </div>
                                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                                        <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 font-medium">
                                          {file.category}
                                        </span>
                                        <span>•</span>
                                        <span>{formatFileSize(file.size)}</span>
                                      </div>
                                    </div>
                                    <DownloadOutlined className="text-slate-400 group-hover:text-[var(--brand-primary)] text-sm shrink-0" />
                                  </a>
                                ))}
                              </div>
                            }
                          >
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-[11px] text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/50 font-mono font-medium cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xs"
                              title="Click or hover to view attached files"
                            >
                              <PaperClipOutlined className="text-[10px]" />
                              <span>
                                {req.attachedFiles.length}{" "}
                                {req.attachedFiles.length === 1
                                  ? "file"
                                  : "files"}
                              </span>
                            </button>
                          </Popover>
                        ) : (
                          <span className="text-slate-300 dark:text-zinc-600 text-xs font-mono">
                            —
                          </span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-3 px-3">
                        <Tooltip title={statusInfo.explanation} placement="top">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-help ${statusInfo.badgeClass}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${statusInfo.dotClass}`}
                            ></span>
                            {statusInfo.label}
                          </span>
                        </Tooltip>
                      </td>

                      {/* Received Date */}
                      <td className="py-3 px-3 text-slate-500 dark:text-zinc-400 whitespace-nowrap">
                        {req.createdAt
                          ? new Date(req.createdAt).toLocaleDateString(
                              "en-AU",
                              {
                                day: "numeric",
                                month: "short",
                              },
                            )
                          : "Today"}
                      </td>

                      {/* Action CTA with Details Modal, Direct PDF, and Main Log Redirection */}
                      <td className="py-3 pl-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* View Details Button (Opens Application Details Modal) */}
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedApplication(req);
                              setIsDetailsOpen(true);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:text-[var(--brand-primary)] text-xs font-semibold rounded-md shadow-2xs transition-all cursor-pointer"
                            title="View complete application details"
                          >
                            <EyeOutlined className="text-xs text-[var(--brand-primary)]" />{" "}
                            Details
                          </button>

                          {/* Quick Direct PDF Preview Button (if generated PDF exists) */}
                          {req.pdfUrl && (
                            <a
                              href={getFileUrl(req.pdfUrl)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200/80 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-semibold rounded-md shadow-2xs transition-all"
                              title="View official generated PDF in new tab"
                            >
                              <FilePdfOutlined className="text-xs text-rose-600" />{" "}
                              PDF
                            </a>
                          )}

                          {/* Redirect to Main Log Table Button */}
                          <Link
                            href={
                              req.logUrl || "/admin/company-registration-new"
                            }
                            className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 dark:bg-zinc-800 hover:bg-slate-100 border border-slate-200/70 dark:border-zinc-700 text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200 text-xs font-medium rounded-md transition-all"
                            title="Open full administrative log table"
                          >
                            <FolderOpenOutlined className="text-xs" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── MODAL: SEARCHABLE CLIENT SERVICE DIRECTORY ─── */}
      <Modal
        title={
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base pb-1">
            <PlusOutlined className="text-[var(--brand-primary)]" />
            <span>Start a New Client Application</span>
          </div>
        }
        open={isLaunchpadOpen}
        onCancel={() => {
          setIsLaunchpadOpen(false);
          setLaunchpadSearch("");
        }}
        footer={null}
        width={720}
        centered
        className="admin-portal-modal"
      >
        <p className="text-xs text-slate-500 dark:text-zinc-400 mb-3">
          Select a client service below to start a new form on behalf of a
          client. You will be guided through every step.
        </p>

        {/* Live Search Filter */}
        <div className="mb-4">
          <Input
            prefix={<SearchOutlined className="text-slate-400" />}
            placeholder="Search all 10 client services (e.g. company, GST, trust, SMSF)..."
            value={launchpadSearch}
            onChange={(e) => setLaunchpadSearch(e.target.value)}
            allowClear
            className="rounded-lg h-9"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto pr-1">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg border border-slate-200 dark:border-zinc-800 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary-soft)]/20 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 group-hover:bg-white dark:group-hover:bg-zinc-700 transition-colors shrink-0">
                  {service.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-zinc-100 group-hover:text-[var(--brand-primary)] transition-colors truncate m-0">
                      {service.title}
                    </h3>
                    {service.tag && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 shrink-0">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 line-clamp-2 m-0 leading-tight">
                    {service.plainHelp || service.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t border-slate-100 dark:border-zinc-800 text-[10px] text-slate-400">
                <span>Turnaround: {service.turnaround}</span>
                <div className="flex items-center gap-2.5">
                  {service.adminLogUrl && (
                    <Link
                      href={service.adminLogUrl}
                      onClick={() => setIsLaunchpadOpen(false)}
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-zinc-300 underline font-medium"
                    >
                      View Logs
                    </Link>
                  )}
                  <Link
                    href={service.href}
                    onClick={() => setIsLaunchpadOpen(false)}
                    className="font-bold text-[var(--brand-primary)] flex items-center gap-0.5 hover:underline"
                  >
                    Start Form <ArrowRightOutlined className="text-[8px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* ─── APPLICATION DETAILS POPUP MODAL ─── */}
      <Modal
        open={isDetailsOpen}
        onCancel={() => setIsDetailsOpen(false)}
        afterClose={() => setSelectedApplication(null)}
        destroyOnHidden
        footer={null}
        width={720}
        centered
        className="rounded-2xl"
      >
        {selectedApplication &&
          (() => {
            const statusInfo = getStatusBadge(selectedApplication.status);
            const primaryPdf = selectedApplication.pdfUrl;

            return (
              <div className="space-y-5 pt-1">
                {/* Modal Header Bar */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-zinc-800">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center text-xl font-bold shrink-0">
                      <FileTextOutlined />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-base font-extrabold text-slate-900 dark:text-white m-0">
                          {selectedApplication.name}
                        </h2>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-semibold border border-slate-200/70 dark:border-zinc-700">
                          {selectedApplication.refNumber}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 m-0">
                        {selectedApplication.module} • Submitted{" "}
                        {selectedApplication.createdAt
                          ? new Date(
                              selectedApplication.createdAt,
                            ).toLocaleDateString("en-AU", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          : "Recently"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.badgeClass}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${statusInfo.dotClass}`}
                      ></span>
                      {statusInfo.label}
                    </span>
                  </div>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-800 text-xs">
                  <div>
                    <span className="text-slate-400 dark:text-zinc-500 block text-[11px]">
                      Contact Person
                    </span>
                    <strong className="text-slate-800 dark:text-zinc-200 font-semibold">
                      {selectedApplication.contactName ||
                        selectedApplication.name ||
                        "N/A"}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-zinc-500 block text-[11px]">
                      Email Address
                    </span>
                    <span className="text-slate-800 dark:text-zinc-200 font-medium truncate block">
                      {selectedApplication.contactEmail || "Not provided"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-zinc-500 block text-[11px]">
                      Phone / Mobile
                    </span>
                    <span className="text-slate-800 dark:text-zinc-200 font-mono font-medium">
                      {selectedApplication.contactMobile || "Not provided"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-zinc-500 block text-[11px]">
                      Service Type
                    </span>
                    <span className="text-slate-800 dark:text-zinc-200 font-medium">
                      {selectedApplication.module}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-zinc-500 block text-[11px]">
                      Specifics / Structure
                    </span>
                    <span className="text-slate-800 dark:text-zinc-200 font-medium">
                      {selectedApplication.extraInfo ||
                        "Standard Australian Practice"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-zinc-500 block text-[11px]">
                      Internal Reference
                    </span>
                    <span className="text-slate-800 dark:text-zinc-200 font-mono font-bold">
                      {selectedApplication.refNumber}
                    </span>
                  </div>
                </div>

                {/* Official Generated PDFs Section */}
                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 m-0">
                      <FilePdfOutlined className="text-rose-500 text-sm" />
                      Official Application Documents &amp; PDFs
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {selectedApplication.allPdfs?.length ||
                        (primaryPdf ? 1 : 0)}{" "}
                      generated
                    </span>
                  </div>

                  {selectedApplication.allPdfs &&
                  selectedApplication.allPdfs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedApplication.allPdfs.map((pdf, pIdx) => (
                        <a
                          key={pdf.id || pIdx}
                          href={getFileUrl(pdf.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 hover:border-rose-400 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-all flex items-center justify-between gap-2 group"
                        >
                          <div className="min-w-0 flex items-center gap-2">
                            <FilePdfOutlined className="text-rose-500 text-base shrink-0" />
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 truncate">
                                {pdf.name || "Application PDF"}
                              </div>
                              <span className="text-[10px] text-slate-400 capitalize">
                                {pdf.type || "Document"}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 shrink-0 flex items-center gap-0.5">
                            View <ArrowRightOutlined className="text-[9px]" />
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : primaryPdf ? (
                    <a
                      href={getFileUrl(primaryPdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-slate-200 dark:border-zinc-800 hover:border-rose-400 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <FilePdfOutlined className="text-rose-500 text-lg" />
                        <div>
                          <div className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-rose-600">
                            Official Lodgement Document (
                            {selectedApplication.refNumber}.pdf)
                          </div>
                          <span className="text-[10px] text-slate-400">
                            Complete application summary &amp; signed
                            disclosures
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        Open PDF <ArrowRightOutlined className="text-[9px]" />
                      </span>
                    </a>
                  ) : (
                    <div className="p-3 text-center text-xs text-slate-400 bg-slate-50 dark:bg-zinc-800 rounded-lg">
                      No generated PDF available for this lodgement yet.
                    </div>
                  )}
                </div>

                {/* Client Attached Files & Evidence */}
                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 m-0">
                      <PaperClipOutlined className="text-[var(--brand-primary)] text-sm" />
                      Client Uploaded Evidence &amp; Attachments
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {selectedApplication.attachedFiles?.length || 0} files
                    </span>
                  </div>

                  {selectedApplication.attachedFiles &&
                  selectedApplication.attachedFiles.length > 0 ? (
                    <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                      {selectedApplication.attachedFiles.map((file, fIdx) => (
                        <a
                          key={file.id || fIdx}
                          href={getFileUrl(file.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg border border-slate-100 dark:border-zinc-800 hover:border-[var(--brand-primary)] hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-all flex items-center justify-between gap-3 group"
                        >
                          <div className="min-w-0 flex items-center gap-2.5">
                            <PaperClipOutlined className="text-slate-400 group-hover:text-[var(--brand-primary)] text-sm shrink-0" />
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-[var(--brand-primary)] truncate">
                                {file.name}
                              </div>
                              <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                                <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 font-medium">
                                  {file.category}
                                </span>
                                <span>•</span>
                                <span>{formatFileSize(file.size)}</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[var(--brand-primary)] group-hover:underline shrink-0 flex items-center gap-1">
                            Download <DownloadOutlined className="text-xs" />
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 text-center text-xs text-slate-400 bg-slate-50 dark:bg-zinc-800 rounded-lg">
                      No external client documents uploaded with this
                      submission.
                    </div>
                  )}
                </div>

                {/* Modal Footer Controls */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setIsDetailsOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>

                  <div className="flex items-center gap-2">
                    <Link
                      href={
                        selectedApplication?.logUrl ||
                        "/admin/company-registration-new"
                      }
                      onClick={() => setIsDetailsOpen(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-xs font-bold rounded-lg shadow-sm shadow-[var(--brand-primary)]/20 transition-all cursor-pointer"
                    >
                      Open in Main Log Table{" "}
                      <ArrowRightOutlined className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
      </Modal>
    </div>
  );
}
