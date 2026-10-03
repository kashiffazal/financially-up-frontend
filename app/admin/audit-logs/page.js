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
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import { HTTP, antdMsg } from "@/services";

const { Option } = Select;
const { RangePicker } = DatePicker;

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
        return logs.filter((l) => ["users", "roles"].includes(l.module));
      case "Forms":
        return logs.filter((l) =>
          [
            "company",
            "gst",
            "trust",
            "smsf",
            "individual",
            "medicare",
          ].includes(l.module),
        );
      case "Failures":
        return logs.filter((l) => l.status === "FAILURE");
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
      Users: logs.filter((l) => ["users", "roles"].includes(l.module)).length,
      Forms: logs.filter((l) =>
        ["company", "gst", "trust", "smsf", "individual", "medicare"].includes(
          l.module,
        ),
      ).length,
      Failures: logs.filter((l) => l.status === "FAILURE").length,
    };
  }, [logs]);

  // --------------------------------------------------------------------------
  // ACTION COLORING HELPER
  // --------------------------------------------------------------------------
  const getActionTag = (action) => {
    if (!action) return <Tag>UNKNOWN</Tag>;

    const act = action.toUpperCase();
    if (act.includes("CREATE") || act.includes("INSERT")) {
      return (
        <Tag
          color="green"
          className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill"
        >
          {action}
        </Tag>
      );
    }
    if (
      act.includes("UPDATE") ||
      act.includes("EDIT") ||
      act.includes("MODIFY")
    ) {
      return (
        <Tag
          color="gold"
          className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill"
        >
          {action}
        </Tag>
      );
    }
    if (
      act.includes("DELETE") ||
      act.includes("REVOKE") ||
      act.includes("SUSPEND") ||
      act.includes("FAIL")
    ) {
      return (
        <Tag
          color="red"
          className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill"
        >
          {action}
        </Tag>
      );
    }
    if (
      act.includes("LOGIN") ||
      act.includes("AUTH") ||
      act.includes("SESSION")
    ) {
      return (
        <Tag
          color="blue"
          className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill"
        >
          {action}
        </Tag>
      );
    }
    return (
      <Tag
        color="purple"
        className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill"
      >
        {action}
      </Tag>
    );
  };

  // --------------------------------------------------------------------------
  // TABLE COLUMNS CONFIGURATION
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "Timestamp",
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
        title: "Actor",
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
              <span className="text-xs italic">System / Anonymous</span>
            </div>
          ),
      },
      {
        title: "Action Event",
        dataIndex: "action",
        key: "action",
        width: 160,
        render: (action) => getActionTag(action),
      },
      {
        title: "Module",
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
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: (desc, record) => (
          <div className="min-w-0">
            <span className="text-xs text-slate-700 dark:text-zinc-300 font-medium block">
              {desc || "No description provided"}
            </span>
            {record.resourceType && (
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                Target: {record.resourceType}{" "}
                {record.resourceId ? `(#${record.resourceId})` : ""}
              </span>
            )}
          </div>
        ),
      },
      {
        title: "IP Address",
        dataIndex: "ipAddress",
        key: "ipAddress",
        width: 130,
        render: (ip) => (
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono flex items-center gap-1.5">
            <GlobalOutlined className="text-slate-400 text-[11px]" />
            {ip || "—"}
          </span>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 110,
        align: "center",
        render: (status) =>
          status === "SUCCESS" ? (
            <Tag
              color="success"
              icon={<CheckCircleOutlined />}
              className="text-[11px] font-semibold px-2 py-0.5 rounded-pill"
            >
              SUCCESS
            </Tag>
          ) : (
            <Tag
              color="error"
              icon={<CloseCircleOutlined />}
              className="text-[11px] font-semibold px-2 py-0.5 rounded-pill"
            >
              FAILURE
            </Tag>
          ),
      },
      {
        title: "Inspect",
        key: "inspect",
        width: 110,
        align: "right",
        render: (_, record) => (
          <Button
            size="small"
            icon={<EyeOutlined />}
            onClick={() => handleOpenDetail(record.id)}
            className="text-xs rounded-lg hover:border-emerald-500 hover:text-emerald-600"
          >
            Inspect
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
      { label: "Description", value: "description" },
      { label: "Action", value: "action" },
      { label: "Module", value: "module" },
      { label: "IP Address", value: "ipAddress" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Timestamp", key: "createdAt" },
      { header: "Action", key: "action" },
      { header: "Module", key: "module" },
      { header: "Status", key: "status" },
      { header: "Description", key: "description" },
      { header: "IP Address", key: "ipAddress" },
      { header: "Resource Type", key: "resourceType" },
      { header: "Resource ID", key: "resourceId" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // TAB ITEMS CONFIGURATION
  // --------------------------------------------------------------------------
  const tabItems = [
    {
      key: "All",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <AppstoreOutlined />
          <span>All Events</span>
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
          <span>Auth & Sessions</span>
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
          <span>User Admin</span>
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
          <span>Form Applications</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold">
            {tabCounts.Forms}
          </span>
        </span>
      ),
    },
    {
      key: "Failures",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <CloseCircleOutlined className="text-rose-500" />
          <span>Security Failures</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 font-semibold">
            {tabCounts.Failures}
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
        title="Security & Audit Logs"
        description="Immutable compliance audit trail tracking all authentication events, administrative operations, and critical data state mutations."
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
            size="large"
            onClick={fetchLogs}
            loading={loading}
            className="rounded-pill font-semibold border-slate-200 dark:border-zinc-700 hover:border-emerald-500 flex items-center gap-2 shadow-xs"
          >
            Refresh Log Feed
          </Button>
        }
      />

      {/* 2. Top 4-Card Statistics Metric Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Captured Logs */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Captured Events
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mt-1">
              {logs.length}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Audit log records on file
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0">
            <HistoryOutlined />
          </div>
        </div>

        {/* Card 2: Auth & Sessions */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Auth & Sessions
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
              {tabCounts.Auth}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Login, logout & token events
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
            <LockOutlined />
          </div>
        </div>

        {/* Card 3: Form Applications */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Form Lodgements
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
              {tabCounts.Forms}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Client submissions & updates
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl shrink-0">
            <DatabaseOutlined />
          </div>
        </div>

        {/* Card 4: Security Failures */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Security Failures
            </div>
            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mt-1">
              {tabCounts.Failures}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Access denials & errors
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
          {/* Module Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-1.5 block">
              Filter By Module
            </label>
            <Select
              placeholder="All Modules"
              value={filters.module || undefined}
              onChange={(val) =>
                setFilters((prev) => ({ ...prev, module: val || "" }))
              }
              allowClear
              className="w-full rounded-lg"
            >
              <Option value="auth">Auth & Sessions</Option>
              <Option value="users">User Management</Option>
              <Option value="roles">Roles & Matrix</Option>
              <Option value="company">Company Registrations</Option>
              <Option value="gst">GST Registrations</Option>
              <Option value="trust">Trust Registrations</Option>
              <Option value="smsf">SMSF Registrations</Option>
              <Option value="individual">Individual Engagements</Option>
              <Option value="medicare">Medicare Applications</Option>
            </Select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-1.5 block">
              Execution Status
            </label>
            <Select
              placeholder="All Statuses"
              value={filters.status || undefined}
              onChange={(val) =>
                setFilters((prev) => ({ ...prev, status: val || "" }))
              }
              allowClear
              className="w-full rounded-lg"
            >
              <Option value="SUCCESS">Success Only</Option>
              <Option value="FAILURE">Failures Only</Option>
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
            {/* 1. Structured Event Descriptions */}
            <Descriptions bordered size="small" column={{ xs: 1, sm: 2 }}>
              <Descriptions.Item label="Action Event">
                {getActionTag(selectedLog.action)}
              </Descriptions.Item>

              <Descriptions.Item label="Module">
                <span className="font-semibold text-xs uppercase tracking-wider">
                  {selectedLog.module}
                </span>
              </Descriptions.Item>

              <Descriptions.Item label="Execution Status">
                {selectedLog.status === "SUCCESS" ? (
                  <Tag color="success" icon={<CheckCircleOutlined />}>
                    SUCCESS
                  </Tag>
                ) : (
                  <Tag color="error" icon={<CloseCircleOutlined />}>
                    FAILURE
                  </Tag>
                )}
              </Descriptions.Item>

              <Descriptions.Item label="Event Timestamp">
                <span className="font-mono text-xs text-slate-700 dark:text-zinc-300">
                  {new Date(selectedLog.createdAt).toLocaleString("en-AU")}
                </span>
              </Descriptions.Item>

              <Descriptions.Item label="Actor User" span={2}>
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
                    System / Background Task
                  </span>
                )}
              </Descriptions.Item>

              {selectedLog.target && (
                <Descriptions.Item label="Target User" span={2}>
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

              <Descriptions.Item label="Target Resource">
                <span className="font-medium text-slate-800 dark:text-zinc-200">
                  {selectedLog.resourceType || "N/A"}
                </span>
                {selectedLog.resourceId && (
                  <span className="text-[11px] font-mono text-slate-400 ml-1">
                    (ID: {selectedLog.resourceId})
                  </span>
                )}
              </Descriptions.Item>

              <Descriptions.Item label="Client IP">
                <span className="font-mono text-xs text-slate-700 dark:text-zinc-300">
                  {selectedLog.ipAddress || "—"}
                </span>
              </Descriptions.Item>

              <Descriptions.Item label="Description" span={2}>
                <span className="text-slate-700 dark:text-zinc-300 font-medium">
                  {selectedLog.description}
                </span>
              </Descriptions.Item>

              {selectedLog.errorMessage && (
                <Descriptions.Item label="Error Message" span={2}>
                  <span className="text-rose-600 dark:text-rose-400 font-mono text-xs">
                    {selectedLog.errorMessage}
                  </span>
                </Descriptions.Item>
              )}

              <Descriptions.Item label="User Agent" span={2}>
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
                    State Mutation Snapshot
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
                        State Prior to Mutation (Before)
                      </span>
                      {selectedLog.beforeData && (
                        <Tooltip title="Copy Before JSON">
                          <Button
                            size="small"
                            type="text"
                            icon={<CopyOutlined />}
                            onClick={() =>
                              handleCopyPayload(
                                selectedLog.beforeData,
                                "Before State",
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
                        No previous state (New creation event)
                      </div>
                    )}
                  </div>

                  {/* After State Payload */}
                  <div className="border border-emerald-200 dark:border-emerald-900/60 rounded-2xl p-3.5 bg-emerald-50/30 dark:bg-emerald-950/20">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60 dark:border-emerald-900/40 mb-2">
                      <span className="font-bold text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        State After Mutation (After)
                      </span>
                      {selectedLog.afterData && (
                        <Tooltip title="Copy After JSON">
                          <Button
                            size="small"
                            type="text"
                            icon={<CopyOutlined />}
                            onClick={() =>
                              handleCopyPayload(
                                selectedLog.afterData,
                                "After State",
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
                        No subsequent state (Permanent deletion event)
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-zinc-800/40 border border-slate-200 dark:border-zinc-800 text-slate-400 dark:text-zinc-500 text-xs text-center">
                  No state mutation diff was captured for this read/session
                  event.
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
