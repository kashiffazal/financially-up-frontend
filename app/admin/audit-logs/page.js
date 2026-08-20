"use client";

/**
 * Security Audit Log Explorer
 * ===========================
 * Comprehensive, immutable audit trail viewer for security compliance, administrative
 * inspections, state mutation tracking, and forensic analysis.
 */

import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  Input,
  Select,
  DatePicker,
  Tag,
  Button,
  Modal,
  Badge,
  Card,
  Avatar,
  Descriptions,
} from "antd";
import {
  HistoryOutlined,
  SearchOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  LaptopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { HTTP, antdMsg } from "@/services";

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function AuditLogsPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0 });
  const [filters, setFilters] = useState({
    search: "",
    module: "",
    status: "",
    startDate: null,
    endDate: null,
  });

  const [selectedLog, setSelectedLog] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Fetch Logs
  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        search: filters.search,
        module: filters.module,
        status: filters.status,
      });

      if (filters.startDate) queryParams.append("startDate", filters.startDate);
      if (filters.endDate) queryParams.append("endDate", filters.endDate);

      const res = await HTTP("GET", `/audit-logs?${queryParams.toString()}`);
      if (res && res.success) {
        setLogs(res.logs || []);
        setPagination((prev) => ({
          ...prev,
          total: res.pagination?.total || 0,
        }));
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to load audit logs");
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, filters]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // Open Log Detail
  const handleOpenDetail = async (logId) => {
    setIsDetailModalOpen(true);
    setLoadingDetail(true);
    try {
      const res = await HTTP("GET", `/audit-logs/${logId}`);
      if (res && res.success) {
        setSelectedLog(res.log);
      }
    } catch (err) {
      antdMsg.error("Failed to load audit log details");
    } finally {
      setLoadingDetail(false);
    }
  };

  // Helper for Action tag coloring
  const getActionColor = (action) => {
    if (!action) return "default";
    if (action.includes("CREATE")) return "green";
    if (action.includes("UPDATE") || action.includes("EDIT")) return "gold";
    if (action.includes("DELETE") || action.includes("REVOKE") || action.includes("SUSPEND"))
      return "red";
    if (action.includes("LOGIN") || action.includes("AUTH")) return "blue";
    return "purple";
  };

  const columns = [
    {
      title: "Timestamp",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 170,
      render: (val) => (
        <span className="text-xs text-slate-600 dark:text-zinc-400 font-mono">
          {new Date(val).toLocaleString()}
        </span>
      ),
    },
    {
      title: "Actor",
      dataIndex: "actor",
      key: "actor",
      render: (actor) =>
        actor ? (
          <div className="flex items-center gap-2">
            {actor.avatar ? (
              <Avatar src={actor.avatar} size={24} />
            ) : (
              <Avatar size={24} icon={<UserOutlined />} className="bg-[#008043]" />
            )}
            <div>
              <div className="font-semibold text-xs text-slate-800 dark:text-zinc-200">
                {actor.name}
              </div>
              <div className="text-[10px] text-slate-400">{actor.email}</div>
            </div>
          </div>
        ) : (
          <span className="text-xs text-slate-400 italic">System / Anonymous</span>
        ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (action) => (
        <Tag color={getActionColor(action)} className="text-xs font-mono font-semibold">
          {action}
        </Tag>
      ),
    },
    {
      title: "Module",
      dataIndex: "module",
      key: "module",
      render: (mod) => (
        <Tag className="text-[11px] uppercase tracking-wider font-semibold">
          {mod}
        </Tag>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (desc) => (
        <span className="text-xs text-slate-700 dark:text-zinc-300 font-medium">
          {desc}
        </span>
      ),
    },
    {
      title: "IP Address",
      dataIndex: "ipAddress",
      key: "ipAddress",
      render: (ip) => (
        <span className="text-xs text-slate-400 font-mono">
          {ip || "—"}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) =>
        status === "SUCCESS" ? (
          <Tag color="success" icon={<CheckCircleOutlined />} className="text-[11px]">
            SUCCESS
          </Tag>
        ) : (
          <Tag color="error" icon={<CloseCircleOutlined />} className="text-[11px]">
            FAILURE
          </Tag>
        ),
    },
    {
      title: "Details",
      key: "actions",
      align: "right",
      render: (_, record) => (
        <Button
          size="small"
          icon={<EyeOutlined />}
          onClick={() => handleOpenDetail(record.id)}
          className="text-xs"
        >
          Inspect
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Security & Audit Logs
        </h1>
        <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
          Immutable practice event trail tracking all authentication, administrative actions, and data mutations.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <Input
            prefix={<SearchOutlined className="text-slate-400 mr-1" />}
            placeholder="Search action, description, IP..."
            value={filters.search}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
            allowClear
            className="rounded-lg"
          />

          <Select
            placeholder="Filter by Module"
            value={filters.module || undefined}
            onChange={(val) => setFilters((prev) => ({ ...prev, module: val || "" }))}
            allowClear
            className="rounded-lg"
          >
            <Option value="auth">Auth & Sessions</Option>
            <Option value="users">User Management</Option>
            <Option value="roles">Roles & Matrix</Option>
            <Option value="medicare">Medicare</Option>
            <Option value="gst">GST Registrations</Option>
            <Option value="company">Company Registrations</Option>
            <Option value="trust">Trust Registrations</Option>
            <Option value="smsf">SMSF Registrations</Option>
            <Option value="individual">Individual Engagements</Option>
          </Select>

          <Select
            placeholder="Filter by Status"
            value={filters.status || undefined}
            onChange={(val) => setFilters((prev) => ({ ...prev, status: val || "" }))}
            allowClear
            className="rounded-lg"
          >
            <Option value="SUCCESS">Success Only</Option>
            <Option value="FAILURE">Failures Only</Option>
          </Select>

          <RangePicker
            className="rounded-lg"
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

      {/* Logs Table */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs">
        <Table
          columns={columns}
          dataSource={logs}
          rowKey="id"
          loading={loading}
          pagination={{
            current: pagination.page,
            pageSize: pagination.limit,
            total: pagination.total,
            showSizeChanger: true,
            onChange: (p, l) => setPagination({ page: p, limit: l, total: pagination.total }),
          }}
          className="overflow-x-auto"
        />
      </div>

      {/* MODAL: DETAIL INSPECTION */}
      <Modal
        title={
          <div className="flex items-center gap-2 text-base font-bold">
            <HistoryOutlined className="text-[#008043]" />
            <span>Audit Record Details</span>
          </div>
        }
        open={isDetailModalOpen}
        onCancel={() => setIsDetailModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsDetailModalOpen(false)}>
            Close
          </Button>,
        ]}
        width={700}
      >
        {loadingDetail || !selectedLog ? (
          <div className="py-8 text-center text-slate-400">Loading audit log details...</div>
        ) : (
          <div className="space-y-4 pt-3 text-xs">
            <Descriptions bordered size="small" column={2}>
              <Descriptions.Item label="Action">
                <Tag color={getActionColor(selectedLog.action)} className="font-mono">
                  {selectedLog.action}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Module">
                <span className="font-semibold uppercase">{selectedLog.module}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                {selectedLog.status === "SUCCESS" ? (
                  <Tag color="success">SUCCESS</Tag>
                ) : (
                  <Tag color="error">FAILURE</Tag>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Timestamp">
                {new Date(selectedLog.createdAt).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="Actor User" span={2}>
                {selectedLog.actor
                  ? `${selectedLog.actor.firstName} ${selectedLog.actor.lastName} (${selectedLog.actor.email})`
                  : "System / Anonymous"}
              </Descriptions.Item>
              <Descriptions.Item label="IP Address">
                <span className="font-mono">{selectedLog.ipAddress || "—"}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Resource Target">
                {selectedLog.resourceType} (ID: {selectedLog.resourceId || "N/A"})
              </Descriptions.Item>
              <Descriptions.Item label="User Agent" span={2}>
                <span className="text-[11px] text-slate-500 font-mono break-all">
                  {selectedLog.userAgent || "—"}
                </span>
              </Descriptions.Item>
            </Descriptions>

            {/* Before / After Data State Diffs */}
            {(selectedLog.beforeData || selectedLog.afterData) && (
              <div className="space-y-2 pt-2">
                <div className="font-bold text-slate-800 dark:text-zinc-200">
                  Data Mutation Snapshot:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedLog.beforeData && (
                    <div className="border border-slate-200 dark:border-zinc-800 rounded-xl p-3 bg-red-50/20 dark:bg-red-950/20">
                      <div className="font-semibold text-red-600 dark:text-red-400 mb-1">
                        State Before:
                      </div>
                      <pre className="text-[11px] font-mono text-slate-700 dark:text-zinc-300 overflow-x-auto whitespace-pre-wrap max-h-40">
                        {JSON.stringify(selectedLog.beforeData, null, 2)}
                      </pre>
                    </div>
                  )}

                  {selectedLog.afterData && (
                    <div className="border border-slate-200 dark:border-zinc-800 rounded-xl p-3 bg-emerald-50/20 dark:bg-emerald-950/20">
                      <div className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                        State After:
                      </div>
                      <pre className="text-[11px] font-mono text-slate-700 dark:text-zinc-300 overflow-x-auto whitespace-pre-wrap max-h-40">
                        {JSON.stringify(selectedLog.afterData, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
