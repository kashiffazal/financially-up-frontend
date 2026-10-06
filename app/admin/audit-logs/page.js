"use client";

/**
 * ============================================================================
 * Security & Audit Logs Page (`app/admin/audit-logs/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with custom breadcrumbs and quick refresh CTA.
 * 2. 4-Card Statistics Metric Strip (Total Logs, Auth Events, Data Mutations, Security Failures).
 * 3. Card-style category tabs with dynamic live-count badges (All, Auth & Sessions, User Admin, Form Applications, Failures).
 * 4. Rich filter bar with Date RangePicker, Module Selector, Status filter, and instant Search.
 * 5. Reusable `<DataTable />` integration with column filtering and CSV/PDF `<ExportButtons />`.
 * 6. Dual-Layout Inspector Modal with Horizontal (Side-by-Side) / Vertical (Stacked) JSON mutation diff viewer.
 */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Tag,
  Badge,
  Modal,
  Button,
  Select,
  DatePicker,
  Avatar,
  Descriptions,
  Segmented,
  Tooltip,
  Alert,
  Tabs,
  Space,
} from "antd";
import {
  HistoryOutlined,
  HomeOutlined,
  SearchOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  UserOutlined,
  ReloadOutlined,
  LaptopOutlined,
  SecurityScanOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  LockOutlined,
  DatabaseOutlined,
  CopyOutlined,
  CalendarOutlined,
  GlobalOutlined,
  SwapOutlined,
  BarsOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  UserAddOutlined,
  EditOutlined,
  StopOutlined,
  KeyOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import { HTTP, antdMsg } from "@/services";

const { Option } = Select;
const { RangePicker } = DatePicker;

/**
 * ============================================================================
 * PLAIN-ENGLISH AUDIT LOG DICTIONARIES (FOR NON-TECHNICAL USERS)
 * ============================================================================
 * Translates raw database event codes into human-friendly explanations so
 * practice managers, accountants, and non-technical staff understand what happened.
 */
const ACTION_EXPLANATIONS = {
  LOGIN: {
    label: "Staff Sign-In",
    color: "blue",
    icon: <LockOutlined />,
    plainSummary: "A staff member entered their credentials and signed into the practice portal.",
  },
  LOGIN_SUCCESS: {
    label: "Staff Sign-In",
    color: "success",
    icon: <CheckCircleOutlined />,
    plainSummary: "A staff member entered valid credentials and successfully signed into the portal.",
  },
  LOGIN_FAILED: {
    label: "Blocked Sign-In Attempt",
    color: "error",
    icon: <CloseCircleOutlined />,
    plainSummary: "A sign-in attempt was rejected due to an incorrect password, inactive account, or unauthorized access.",
  },
  LOGOUT: {
    label: "Staff Sign-Out",
    color: "blue",
    icon: <UserOutlined />,
    plainSummary: "A staff member safely concluded their active work session and signed out.",
  },
  TOKEN_REFRESH: {
    label: "Session Kept Active",
    color: "default",
    icon: <ReloadOutlined />,
    plainSummary: "The active session was securely refreshed to maintain continuous access without logging out.",
  },
  UPDATE: {
    label: "Practice Record Updated",
    color: "gold",
    icon: <EditOutlined />,
    plainSummary: "An authorized user modified configuration settings, profile information, or record details.",
  },
  CREATE: {
    label: "New Record Created",
    color: "green",
    icon: <UserAddOutlined />,
    plainSummary: "A new record, user profile, or service entry was registered in the system.",
  },
  DELETE: {
    label: "Record Removed",
    color: "red",
    icon: <StopOutlined />,
    plainSummary: "An authorized user removed or archived a record.",
  },
  USER_CREATE: {
    label: "Team Member Added",
    color: "green",
    icon: <UserAddOutlined />,
    plainSummary: "A new practice staff member account was created by an administrator.",
  },
  USER_UPDATE: {
    label: "Staff Details Updated",
    color: "gold",
    icon: <EditOutlined />,
    plainSummary: "A staff member's profile information, department, or contact details were edited.",
  },
  USER_STATUS: {
    label: "Account Status Changed",
    color: "orange",
    icon: <StopOutlined />,
    plainSummary: "A staff account was activated, suspended, or deactivated.",
  },
  PASSWORD_RESET: {
    label: "Password Reset",
    color: "warning",
    icon: <KeyOutlined />,
    plainSummary: "An account password was updated or reset.",
  },
  ROLE_ASSIGN: {
    label: "Permissions Assigned",
    color: "purple",
    icon: <SafetyCertificateOutlined />,
    plainSummary: "Practice capabilities and access permissions were assigned to a team member.",
  },
  ROLE_CREATE: {
    label: "New Staff Role Created",
    color: "purple",
    icon: <SafetyCertificateOutlined />,
    plainSummary: "A new custom role profile was created in the practice permission matrix.",
  },
  ROLE_UPDATE: {
    label: "Role Permissions Modified",
    color: "gold",
    icon: <SafetyCertificateOutlined />,
    plainSummary: "Granular capabilities and service access levels for a role were modified.",
  },
  FORM_SUBMIT: {
    label: "Client Application Submitted",
    color: "cyan",
    icon: <DatabaseOutlined />,
    plainSummary: "A client registration or engagement form was officially submitted.",
  },
  FORM_UPDATE: {
    label: "Form Record Updated",
    color: "cyan",
    icon: <EditOutlined />,
    plainSummary: "Client registration details or lodgement data was modified.",
  },
  SETTINGS_UPDATE: {
    label: "Practice Settings Changed",
    color: "blue",
    icon: <SettingOutlined />,
    plainSummary: "Practice-wide details (e.g. Tax Agent Number, contact info, or branding) were updated.",
  },
};

const TAB_EXPLANATIONS = {
  All: {
    title: "Master Practice Activity Feed",
    subtitle: "A complete chronological timeline recording every action, staff sign-in, practice configuration update, and client form lodgement.",
    badge: "Complete Activity History",
    color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300",
    icon: <HistoryOutlined className="text-emerald-600 text-xl" />,
  },
  Auth: {
    title: "Staff Logins & Sign-Ins",
    subtitle: "Tracks when staff members sign in, end sessions, or stay active. Verifies who is logged into the practice portal and confirms access security.",
    badge: "Staff Sign-Ins & Sessions",
    color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300",
    icon: <LockOutlined className="text-blue-600 text-xl" />,
  },
  Users: {
    title: "Team Accounts & Practice Settings",
    subtitle: "Records administrative actions: creating team accounts, updating practice settings (like Tax Agent Number), assigning roles, and changing passwords.",
    badge: "Team Accounts & Settings",
    color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300",
    icon: <UserOutlined className="text-purple-600 text-xl" />,
  },
  Forms: {
    title: "Client Forms & Lodgements",
    subtitle: "Monitors activity across all client tax and registration services (Company, GST, Trust, SMSF, Medicare). Shows when clients submit new forms or when staff edit lodgement details.",
    badge: "Client Form Lodgements",
    color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300",
    icon: <DatabaseOutlined className="text-amber-600 text-xl" />,
  },
  Failures: {
    title: "Security Warnings & Blocked Logins",
    subtitle: "Highlights rejected sign-in attempts, incorrect passwords, and security access warnings. Helps practice managers identify compromised passwords or assist locked-out staff.",
    badge: "Security Alerts & Warnings",
    color: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300",
    icon: <SecurityScanOutlined className="text-rose-600 text-xl" />,
  },
};

export default function AuditLogsPage() {
  // --------------------------------------------------------------------------
  // STATE DEFINITIONS
  // --------------------------------------------------------------------------
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("All");

  // Advanced Filters
  const [filters, setFilters] = useState({
    module: "",
    status: "",
    startDate: null,
    endDate: null,
  });

  // Inspector Modal State
  const [selectedLog, setSelectedLog] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [diffLayout, setDiffLayout] = useState("horizontal"); // "horizontal" | "vertical"

  // --------------------------------------------------------------------------
  // DATA FETCHING LOGIC
  // --------------------------------------------------------------------------
  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: "1",
        limit: "1000", // Retrieve comprehensive dataset for rich client-side search & filtering
      });

      if (filters.module) queryParams.append("module", filters.module);
      if (filters.status) queryParams.append("status", filters.status);
      if (filters.startDate) queryParams.append("startDate", filters.startDate);
      if (filters.endDate) queryParams.append("endDate", filters.endDate);

      const res = await HTTP("GET", `/audit-logs?${queryParams.toString()}`);
      if (res && res.success) {
        setLogs(res.logs || []);
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to load audit logs");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // --------------------------------------------------------------------------
  // INSPECTOR MODAL FETCHER
  // --------------------------------------------------------------------------
  const handleOpenDetail = async (logId) => {
    setIsDetailModalOpen(true);
    setLoadingDetail(true);
    try {
      const res = await HTTP("GET", `/audit-logs/${logId}`);
      if (res && res.success) {
        setSelectedLog(res.log);
      }
    } catch (err) {
      antdMsg.error("Failed to load audit record details");
    } finally {
      setLoadingDetail(false);
    }
  };

  // Copy JSON mutation payload to clipboard
  const handleCopyPayload = (data, label) => {
    if (!data) return;
    try {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      antdMsg.success(`${label} copied to clipboard!`);
    } catch (err) {
      antdMsg.error("Failed to copy to clipboard");
    }
  };

  // --------------------------------------------------------------------------
  // CATEGORY TABS & FILTERING
  // --------------------------------------------------------------------------
  const filteredLogs = useMemo(() => {
    switch (activeTabKey) {
      case "Auth":
        return logs.filter((l) => l.module === "auth");
      case "Users":
        return logs.filter((l) =>
          ["users", "roles", "settings", "system"].includes(l.module),
        );
      case "Forms":
        return logs.filter((l) =>
          [
            "company",
            "gst",
            "trust",
            "smsf",
            "individual",
            "medicare",
            "forms",
            "applications",
            "lodgements",
          ].includes(l.module),
        );
      case "Failures":
        return logs.filter(
          (l) => l.status === "FAILURE" || l.status === "ERROR",
        );
      case "All":
      default:
        return logs;
    }
  }, [logs, activeTabKey]);

  // Live count badges for category tabs
  const tabCounts = useMemo(() => {
    return {
      All: logs.length,
      Auth: logs.filter((l) => l.module === "auth").length,
      Users: logs.filter((l) =>
        ["users", "roles", "settings", "system"].includes(l.module),
      ).length,
      Forms: logs.filter((l) =>
        [
          "company",
          "gst",
          "trust",
          "smsf",
          "individual",
          "medicare",
          "forms",
          "applications",
          "lodgements",
        ].includes(l.module),
      ).length,
      Failures: logs.filter(
        (l) => l.status === "FAILURE" || l.status === "ERROR",
      ).length,
    };
  }, [logs]);

  // --------------------------------------------------------------------------
  // ACTION COLORING & PLAIN-ENGLISH HELPER
  // --------------------------------------------------------------------------
  const getActionTag = (action) => {
    if (!action) return <Tag className="rounded-lg">UNKNOWN</Tag>;

    const actKey = action.toUpperCase();
    const info = ACTION_EXPLANATIONS[actKey];

    if (info) {
      return (
        <Tooltip
          title={
            <div className="space-y-1 py-0.5">
              <div className="font-semibold text-xs flex items-center gap-1.5">
                {info.icon}
                <span>{info.label}</span>
              </div>
              <div className="text-[11px] text-slate-200">
                {info.plainSummary}
              </div>
              <div className="text-[10px] text-slate-400 font-mono pt-0.5 border-t border-slate-700">
                System Code: {action}
              </div>
            </div>
          }
        >
          <Tag
            color={info.color}
            icon={info.icon}
            className="text-xs font-semibold px-2.5 py-0.5 rounded-lg inline-flex items-center gap-1 shadow-2xs cursor-help"
          >
            {info.label}
          </Tag>
        </Tooltip>
      );
    }

    // Dynamic heuristic fallback for unmapped actions
    let color = "purple";
    let friendlyLabel = action.replace(/_/g, " ");
    if (actKey.includes("CREATE") || actKey.includes("INSERT")) color = "green";
    else if (actKey.includes("UPDATE") || actKey.includes("EDIT")) color = "gold";
    else if (actKey.includes("DELETE") || actKey.includes("FAIL")) color = "red";
    else if (actKey.includes("LOGIN") || actKey.includes("AUTH")) color = "blue";

    return (
      <Tooltip title={`System Event: ${action}`}>
        <Tag
          color={color}
          className="text-xs font-semibold px-2 py-0.5 rounded-lg cursor-help capitalize"
        >
          {friendlyLabel}
        </Tag>
      </Tooltip>
    );
  };

  // --------------------------------------------------------------------------
  // TABLE COLUMNS CONFIGURATION
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // TABLE COLUMNS CONFIGURATION (PLAIN-ENGLISH PRACTICE LABELS)
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "Date & Time",
        dataIndex: "createdAt",
        key: "createdAt",
        width: 175,
        render: (val) => {
          const d = new Date(val);
          return (
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200 font-mono">
                {d.toLocaleDateString("en-AU", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {d.toLocaleTimeString("en-AU", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
            </div>
          );
        },
      },
      {
        title: "Performed By (Staff)",
        dataIndex: "actor",
        key: "actor",
        width: 220,
        render: (actor) =>
          actor ? (
            <div className="flex items-center gap-2.5">
              {actor.avatar ? (
                <Avatar
                  src={actor.avatar}
                  size={30}
                  className="border border-slate-200 dark:border-zinc-700"
                />
              ) : (
                <Avatar
                  size={30}
                  icon={<UserOutlined />}
                  className="bg-emerald-600 text-white font-bold"
                />
              )}
              <div className="min-w-0">
                <div className="font-semibold text-xs text-slate-800 dark:text-zinc-100 truncate">
                  {actor.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate font-mono">
                  {actor.email}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-400">
              <Avatar
                size={24}
                className="bg-slate-200 dark:bg-zinc-800 text-slate-500 text-[10px]"
              >
                SYS
              </Avatar>
              <span className="text-xs italic">System Automation</span>
            </div>
          ),
      },
      {
        title: "Activity Type",
        dataIndex: "action",
        key: "action",
        width: 190,
        render: (action) => getActionTag(action),
      },
      {
        title: "Practice Area",
        dataIndex: "module",
        key: "module",
        width: 140,
        render: (mod) => (
          <Tag className="text-[10px] uppercase font-bold tracking-wider rounded-md border-slate-200 dark:border-zinc-700 px-2 py-0.5 bg-slate-50 dark:bg-zinc-800">
            {mod || "GENERAL"}
          </Tag>
        ),
      },
      {
        title: "Activity Summary & Meaning",
        dataIndex: "description",
        key: "description",
        render: (desc, record) => {
          const info = ACTION_EXPLANATIONS[record.action?.toUpperCase()];
          return (
            <div className="min-w-0 space-y-1">
              <span className="text-xs text-slate-800 dark:text-zinc-200 font-medium block">
                {desc || "No description provided"}
              </span>
              {/* Plain-English explanation for non-technical users */}
              {info && (
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 flex items-start gap-1.5 bg-slate-50 dark:bg-zinc-800/40 p-1.5 rounded-md border border-slate-200/50 dark:border-zinc-800">
                  <InfoCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    <strong className="text-slate-700 dark:text-zinc-300">Plain Meaning: </strong>
                    {info.plainSummary}
                  </span>
                </div>
              )}
              {record.resourceType && (
                <span className="text-[10px] text-slate-400 font-mono block">
                  Affected Record: {record.resourceType}{" "}
                  {record.resourceId ? `(#${record.resourceId})` : ""}
                </span>
              )}
            </div>
          );
        },
      },
      {
        title: "Network Location (IP)",
        dataIndex: "ipAddress",
        key: "ipAddress",
        width: 140,
        render: (ip) => (
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono flex items-center gap-1.5">
            <GlobalOutlined className="text-slate-400 text-[11px]" />
            {ip || "—"}
          </span>
        ),
      },
      {
        title: "Result",
        dataIndex: "status",
        key: "status",
        width: 130,
        align: "center",
        render: (status) =>
          status === "SUCCESS" ? (
            <Tag
              color="success"
              icon={<CheckCircleOutlined />}
              className="text-[11px] font-semibold px-2 py-0.5 rounded-lg"
            >
              SUCCESSFUL
            </Tag>
          ) : (
            <Tag
              color="error"
              icon={<CloseCircleOutlined />}
              className="text-[11px] font-semibold px-2 py-0.5 rounded-lg"
            >
              FAILED / WARNING
            </Tag>
          ),
      },
      {
        title: "View Details",
        key: "inspect",
        width: 115,
        align: "right",
        render: (_, record) => (
          <Button
            size="small"
            icon={<EyeOutlined />}
            onClick={() => handleOpenDetail(record.id)}
            className="text-xs rounded-lg hover:border-emerald-500 hover:text-emerald-600 font-medium"
          >
            View Details
          </Button>
        ),
      },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // FILTER COLUMNS & EXPORT CONFIG
  // --------------------------------------------------------------------------
  const customFilterCols = useMemo(() => {
    return [
      { label: "Activity Summary", value: "description" },
      { label: "Activity Type", value: "action" },
      { label: "Practice Area", value: "module" },
      { label: "Network Location (IP)", value: "ipAddress" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "Log ID", key: "id" },
      {
        header: "Date & Time",
        key: (r) => new Date(r.createdAt).toLocaleString("en-AU"),
      },
      {
        header: "Performed By (Staff)",
        key: (r) =>
          r.actor
            ? `${r.actor.firstName || ""} ${r.actor.lastName || ""} (${
                r.actor.email || ""
              })`.trim()
            : "System Automation",
      },
      { header: "Activity Type", key: "action" },
      { header: "Practice Area", key: "module" },
      { header: "Result", key: "status" },
      { header: "Activity Summary", key: "description" },
      { header: "Network Location (IP)", key: "ipAddress" },
      { header: "Affected Record Type", key: "resourceType" },
      { header: "Affected Record ID", key: "resourceId" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // TAB ITEMS CONFIGURATION (PLAIN-ENGLISH PRACTICE SECTIONS)
  // --------------------------------------------------------------------------
  const tabItems = [
    {
      key: "All",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <AppstoreOutlined />
          <span>All Activity</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
            {tabCounts.All}
          </span>
        </span>
      ),
    },
    {
      key: "Auth",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <LockOutlined className="text-blue-500" />
          <span>Staff Logins & Sign-Ins</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 font-semibold">
            {tabCounts.Auth}
          </span>
        </span>
      ),
    },
    {
      key: "Users",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <UserOutlined className="text-purple-500" />
          <span>Team Accounts & Settings</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400 font-semibold">
            {tabCounts.Users}
          </span>
        </span>
      ),
    },
    {
      key: "Forms",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <FileTextOutlined className="text-emerald-500" />
          <span>Client Forms & Lodgements</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold">
            {tabCounts.Forms}
          </span>
        </span>
      ),
    },
  ];

  // --------------------------------------------------------------------------
  // RENDER COMPONENT
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-6 pb-12 animate-fade-in">
      {/* 1. Standardized Admin Page Title & Quick Actions */}
      <PageTitle
        icon={<HistoryOutlined />}
        title="Practice Activity & Audit Logs"
        description="Clear, tamper-proof activity trail tracking staff sign-ins, practice configuration updates, and client form lodgements."
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="!text-[12px]" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          {
            title: (
              <span className="text-slate-500">Security & Compliance</span>
            ),
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Audit Logs
              </span>
            ),
          },
        ]}
        extraActions={
          <Button
            icon={<ReloadOutlined />}
            onClick={fetchLogs}
            loading={loading}
            className="h-9 px-4 py-2 border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 text-xs font-semibold rounded-lg hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] shadow-xs transition-all flex items-center gap-1.5 active:scale-[0.98]"
          >
            Refresh Log Feed
          </Button>
        }
      />

      {/* 2. Top 4-Card Statistics Metric Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Activity Records */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Total Activity Records
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mt-1">
              {logs.length}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              All logged practice events on file
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0">
            <HistoryOutlined />
          </div>
        </div>

        {/* Card 2: Staff Sign-Ins */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Staff Sign-Ins
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
              {tabCounts.Auth}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Login, logout & active sessions
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
            <LockOutlined />
          </div>
        </div>

        {/* Card 3: Client Forms & Lodgements */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Client Forms & Lodgements
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
              {tabCounts.Forms}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Client submissions & filings
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl shrink-0">
            <DatabaseOutlined />
          </div>
        </div>

        {/* Card 4: Security Warnings (Clickable to Filter) */}
        <div
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              status: prev.status === "FAILURE" ? "" : "FAILURE",
            }))
          }
          className={`border rounded-card p-5 shadow-xs flex items-center justify-between cursor-pointer transition-all ${
            filters.status === "FAILURE"
              ? "bg-rose-50 dark:bg-rose-950/40 border-rose-500 ring-2 ring-rose-500/20 shadow-md"
              : "bg-white dark:bg-zinc-900 border-slate-200/80 dark:border-zinc-800 hover:border-rose-400"
          }`}
          title="Click to toggle filtering by Security Warnings"
        >
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Security Warnings
              </span>
              {filters.status === "FAILURE" && (
                <Tag
                  color="error"
                  className="text-[10px] py-0 px-1.5 font-semibold rounded-md m-0"
                >
                  Active Filter
                </Tag>
              )}
            </div>
            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mt-1">
              {tabCounts.Failures}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {filters.status === "FAILURE"
                ? "Click to view all records"
                : "Click to filter blocked logins"}
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl shrink-0">
            <SecurityScanOutlined />
          </div>
        </div>
      </div>

      {/* 3. Multi-Criteria Query Filter Strip */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Practice Area Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-1.5 block">
              Filter By Practice Area
            </label>
            <Select
              placeholder="All Practice Areas"
              value={filters.module || undefined}
              onChange={(val) =>
                setFilters((prev) => ({ ...prev, module: val || "" }))
              }
              allowClear
              className="w-full rounded-lg"
            >
              <Option value="auth">Staff Logins & Sign-Ins</Option>
              <Option value="users">Team Accounts</Option>
              <Option value="roles">Staff Roles & Permissions</Option>
              <Option value="settings">Practice Settings</Option>
              <Option value="company">Company Registrations</Option>
              <Option value="gst">GST Registrations</Option>
              <Option value="trust">Trust Registrations</Option>
              <Option value="smsf">SMSF Registrations</Option>
              <Option value="individual">Individual Tax Engagements</Option>
              <Option value="medicare">Medicare Applications</Option>
            </Select>
          </div>

          {/* Activity Result Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-1.5 block">
              Activity Result
            </label>
            <Select
              placeholder="All Results"
              value={filters.status || undefined}
              onChange={(val) =>
                setFilters((prev) => ({ ...prev, status: val || "" }))
              }
              allowClear
              className="w-full rounded-lg"
            >
              <Option value="SUCCESS">Successful Only</Option>
              <Option value="FAILURE">Warnings & Failures Only</Option>
            </Select>
          </div>

          {/* Date Range Picker */}
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-1.5 block">
              Date Range
            </label>
            <RangePicker
              className="w-full rounded-lg"
              onChange={(dates, dateStrings) => {
                setFilters((prev) => ({
                  ...prev,
                  startDate: dateStrings[0] || null,
                  endDate: dateStrings[1] || null,
                }));
              }}
            />
          </div>
        </div>
      </div>

      {/* 4. Main Card Shell with Category Tabs & DataTable */}
      <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
        {/* Card-Style Category Tabs */}
        <Tabs
          activeKey={activeTabKey}
          onChange={setActiveTabKey}
          items={tabItems}
          type="card"
          className="user-status-tabs"
        />

        {/* Dynamic Category Plain-English Explanation Banner (For Non-Technical Users) */}
        {TAB_EXPLANATIONS[activeTabKey] && (
          <div className="p-3.5 rounded-xl border border-slate-200/90 dark:border-zinc-800 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg shrink-0 shadow-2xs">
                {TAB_EXPLANATIONS[activeTabKey].icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-100 m-0">
                    {TAB_EXPLANATIONS[activeTabKey].title}
                  </h4>
                  <Tag className="text-[10px] font-semibold border-none bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-md">
                    {TAB_EXPLANATIONS[activeTabKey].badge}
                  </Tag>
                </div>
                <p className="text-[12px] text-slate-500 dark:text-zinc-400 m-0 mt-0.5 leading-normal">
                  <strong className="text-slate-700 dark:text-zinc-300 font-semibold">What is this? </strong>
                  {TAB_EXPLANATIONS[activeTabKey].subtitle}
                </p>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap shrink-0 self-end sm:self-center bg-white dark:bg-zinc-800 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-zinc-700/60">
              Showing {filteredLogs.length} events
            </div>
          </div>
        )}

        {/* Data Table */}
        <DataTable
          columns={columns}
          dataSource={filteredLogs}
          loading={loading}
          filter={true}
          filterPlaceholder="Search logs by description, action, module, IP..."
          customFilter={true}
          customFilterLabel="Filter By Column"
          customFilterCol={customFilterCols}
          showSizeChanger={true}
          sizeChangerOptions={[10, 20, 50, 100]}
          scroll={{ x: 1200 }}
          extraHeader={
            <ExportButtons
              data={filteredLogs}
              columns={exportColumns}
              filename={`Audit_Logs_${activeTabKey}`}
            />
          }
        />
      </div>

      {/* ====================================================================== */}
      {/* MODAL: DUAL-LAYOUT AUDIT RECORD INSPECTOR                               */}
      {/* ====================================================================== */}
      <Modal
        centered
        title={
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800 pr-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center text-lg border border-[var(--brand-primary)]/20 shadow-xs">
                <HistoryOutlined />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                  <span>Audit Record Inspection</span>
                  {selectedLog && getActionTag(selectedLog.action)}
                </h3>
                <p className="text-xs text-slate-400 dark:text-zinc-500 font-normal">
                  Detailed metadata, actor context, and JSON mutation diff.
                </p>
              </div>
            </div>

            {/* Layout Toggle: Horizontal vs Vertical */}
            {(selectedLog?.beforeData || selectedLog?.afterData) && (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs text-slate-400">Diff Layout:</span>
                <Segmented
                  value={diffLayout}
                  onChange={setDiffLayout}
                  options={[
                    {
                      label: "Side-by-Side",
                      value: "horizontal",
                      icon: <SwapOutlined />,
                    },
                    {
                      label: "Stacked",
                      value: "vertical",
                      icon: <BarsOutlined />,
                    },
                  ]}
                  size="small"
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        }
        open={isDetailModalOpen}
        onCancel={() => setIsDetailModalOpen(false)}
        footer={[
          <div
            key="footer-actions"
            className="flex items-center justify-between pt-2"
          >
            <div className="text-[11px] text-slate-400 font-mono">
              Log ID: {selectedLog?.id}{" "}
              {selectedLog?.uuid ? `• UUID: ${selectedLog.uuid}` : ""}
            </div>
            <Button
              onClick={() => setIsDetailModalOpen(false)}
              className="rounded-lg px-6"
            >
              Close Record
            </Button>
          </div>,
        ]}
        width={840}
        destroyOnHidden
      >
        {loadingDetail || !selectedLog ? (
          <div className="py-12 text-center text-slate-400 space-y-2">
            <ReloadOutlined spin className="text-2xl text-emerald-600" />
            <p className="text-xs">Loading comprehensive audit details...</p>
          </div>
        ) : (
          <div className="space-y-5 pt-3 max-h-[66vh] overflow-y-auto pr-1">
            {/* Non-Technical Plain English Summary Card */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/80 rounded-xl p-4 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <InfoCircleOutlined className="text-emerald-600 text-sm" />
                <span>Plain-English Event Explanation (For Non-Technical Staff)</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-zinc-200 leading-relaxed m-0 font-normal">
                {ACTION_EXPLANATIONS[selectedLog.action?.toUpperCase()]?.plainSummary || "A recorded practice activity took place in the portal."}
                {" "}
                {selectedLog.status === "SUCCESS"
                  ? `The operation completed safely with full authorization.`
                  : `Notice: This operation failed or was blocked by security policies.`}
              </p>
              {selectedLog.description && (
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 pt-1.5 border-t border-emerald-200/50 dark:border-emerald-900/50 flex items-center gap-1.5">
                  <span className="font-semibold text-slate-600 dark:text-zinc-300">Recorded Detail:</span>
                  <span>{selectedLog.description}</span>
                </div>
              )}
            </div>

            {/* 1. Structured Event Descriptions (With Responsive Spans to Avoid AntD Warnings) */}
            <Descriptions bordered size="small" column={{ xs: 1, sm: 2 }}>
              <Descriptions.Item label="Activity Type">
                {getActionTag(selectedLog.action)}
              </Descriptions.Item>

              <Descriptions.Item label="Practice Area">
                <span className="font-semibold text-xs uppercase tracking-wider">
                  {selectedLog.module}
                </span>
              </Descriptions.Item>

              <Descriptions.Item label="Activity Result">
                {selectedLog.status === "SUCCESS" ? (
                  <Tag color="success" icon={<CheckCircleOutlined />}>
                    SUCCESSFUL
                  </Tag>
                ) : (
                  <Tag color="error" icon={<CloseCircleOutlined />}>
                    FAILED / WARNING
                  </Tag>
                )}
              </Descriptions.Item>

              <Descriptions.Item label="Date & Time">
                <span className="font-mono text-xs text-slate-700 dark:text-zinc-300">
                  {new Date(selectedLog.createdAt).toLocaleString("en-AU")}
                </span>
              </Descriptions.Item>

              <Descriptions.Item label="Performed By (Staff)" span={{ xs: 1, sm: 2 }}>
                {selectedLog.actor ? (
                  <div className="flex items-center gap-2">
                    <Avatar
                      size={20}
                      src={selectedLog.actor.avatar}
                      icon={<UserOutlined />}
                      className="bg-[var(--brand-primary)]"
                    />
                    <span className="font-semibold text-slate-800 dark:text-zinc-100">
                      {selectedLog.actor.firstName} {selectedLog.actor.lastName}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ({selectedLog.actor.email})
                    </span>
                    {selectedLog.actor.jobTitle && (
                      <Tag className="text-[10px]">
                        {selectedLog.actor.jobTitle}
                      </Tag>
                    )}
                  </div>
                ) : (
                  <span className="italic text-slate-400">
                    System Automation / Background Task
                  </span>
                )}
              </Descriptions.Item>

              {selectedLog.target && (
                <Descriptions.Item label="Affected Staff Member" span={{ xs: 1, sm: 2 }}>
                  <div className="flex items-center gap-2">
                    <Avatar
                      size={20}
                      src={selectedLog.target.avatar}
                      icon={<UserOutlined />}
                      className="bg-blue-600"
                    />
                    <span className="font-semibold text-slate-800 dark:text-zinc-100">
                      {selectedLog.target.firstName}{" "}
                      {selectedLog.target.lastName}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ({selectedLog.target.email})
                    </span>
                  </div>
                </Descriptions.Item>
              )}

              <Descriptions.Item label="Affected Record">
                <span className="font-medium text-slate-800 dark:text-zinc-200">
                  {selectedLog.resourceType || "N/A"}
                </span>
                {selectedLog.resourceId && (
                  <span className="text-[11px] font-mono text-slate-400 ml-1">
                    (ID: {selectedLog.resourceId})
                  </span>
                )}
              </Descriptions.Item>

              <Descriptions.Item label="Network Location (IP)">
                <span className="font-mono text-xs text-slate-700 dark:text-zinc-300">
                  {selectedLog.ipAddress || "—"}
                </span>
              </Descriptions.Item>

              <Descriptions.Item label="Activity Description" span={{ xs: 1, sm: 2 }}>
                <span className="text-slate-700 dark:text-zinc-300 font-medium">
                  {selectedLog.description}
                </span>
              </Descriptions.Item>

              {selectedLog.errorMessage && (
                <Descriptions.Item label="Warning / Error Note" span={{ xs: 1, sm: 2 }}>
                  <span className="text-rose-600 dark:text-rose-400 font-mono text-xs">
                    {selectedLog.errorMessage}
                  </span>
                </Descriptions.Item>
              )}

              <Descriptions.Item label="Browser & Device Info" span={{ xs: 1, sm: 2 }}>
                <span className="text-[10px] text-slate-500 font-mono break-all leading-tight">
                  {selectedLog.userAgent || "—"}
                </span>
              </Descriptions.Item>
            </Descriptions>

            {/* 2. Before / After State Mutation Diff Viewer */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DatabaseOutlined className="text-emerald-600" />
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                    Record Changes (Before & After)
                  </span>
                </div>
                {/* Mobile segmented toggle */}
                {(selectedLog.beforeData || selectedLog.afterData) && (
                  <div className="sm:hidden">
                    <Segmented
                      value={diffLayout}
                      onChange={setDiffLayout}
                      options={[
                        { label: "Side", value: "horizontal" },
                        { label: "Stacked", value: "vertical" },
                      ]}
                      size="small"
                    />
                  </div>
                )}
              </div>

              {selectedLog.beforeData || selectedLog.afterData ? (
                <div
                  className={
                    diffLayout === "horizontal"
                      ? "grid grid-cols-1 md:grid-cols-2 gap-3"
                      : "space-y-3"
                  }
                >
                  {/* Before State Payload */}
                  <div className="border border-rose-200 dark:border-rose-900/60 rounded-2xl p-3.5 bg-rose-50/30 dark:bg-rose-950/20">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-200/60 dark:border-rose-900/40 mb-2">
                      <span className="font-bold text-xs text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        Original Values (Before Change)
                      </span>
                      {selectedLog.beforeData && (
                        <Tooltip title="Copy Original JSON">
                          <Button
                            size="small"
                            type="text"
                            icon={<CopyOutlined />}
                            onClick={() =>
                              handleCopyPayload(
                                selectedLog.beforeData,
                                "Original Values",
                              )
                            }
                            className="text-rose-600 hover:text-rose-700"
                          />
                        </Tooltip>
                      )}
                    </div>
                    {selectedLog.beforeData ? (
                      <pre className="text-[11px] font-mono text-slate-800 dark:text-zinc-200 overflow-x-auto whitespace-pre-wrap max-h-56 p-2 rounded-lg bg-white/80 dark:bg-zinc-900/80 border border-rose-100 dark:border-rose-900/30">
                        {JSON.stringify(selectedLog.beforeData, null, 2)}
                      </pre>
                    ) : (
                      <div className="text-center py-6 text-slate-400 text-xs italic">
                        No previous values (New record created)
                      </div>
                    )}
                  </div>

                  {/* After State Payload */}
                  <div className="border border-emerald-200 dark:border-emerald-900/60 rounded-2xl p-3.5 bg-emerald-50/30 dark:bg-emerald-950/20">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60 dark:border-emerald-900/40 mb-2">
                      <span className="font-bold text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Updated Values (After Change)
                      </span>
                      {selectedLog.afterData && (
                        <Tooltip title="Copy Updated JSON">
                          <Button
                            size="small"
                            type="text"
                            icon={<CopyOutlined />}
                            onClick={() =>
                              handleCopyPayload(
                                selectedLog.afterData,
                                "Updated Values",
                              )
                            }
                            className="text-emerald-600 hover:text-emerald-700"
                          />
                        </Tooltip>
                      )}
                    </div>
                    {selectedLog.afterData ? (
                      <pre className="text-[11px] font-mono text-slate-800 dark:text-zinc-200 overflow-x-auto whitespace-pre-wrap max-h-56 p-2 rounded-lg bg-white/80 dark:bg-zinc-900/80 border border-emerald-100 dark:border-emerald-900/30">
                        {JSON.stringify(selectedLog.afterData, null, 2)}
                      </pre>
                    ) : (
                      <div className="text-center py-6 text-slate-400 text-xs italic">
                        No subsequent values (Record was removed)
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-zinc-800/40 border border-slate-200 dark:border-zinc-800 text-slate-400 dark:text-zinc-500 text-xs text-center">
                  No database record fields were altered during this sign-in or view event.
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
