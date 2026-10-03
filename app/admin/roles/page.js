"use client";

/**
 * ============================================================================
 * Roles & Permission Matrix Management Page (`app/admin/roles/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with custom breadcrumbs and "+ Create Custom Role" CTA.
 * 2. 4-Card Statistics Metric Strip (Total Roles, System Protected, Custom Roles, Active Capabilities).
 * 3. Card-style category tabs with dynamic live-count badges (All Roles, System Protected, Custom Roles).
 * 4. Rich `<DataTable />` integration with search, column filter, page size selector, and CSV/PDF `<ExportButtons />`.
 * 5. Modernized Add & Edit Role modals with Ant Design Form Field Helpers (`AntInput`).
 * 6. High-density Permission Matrix Inspector Modal with module multi-select, quick search filter, and real-time counter.
 */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Tag,
  Badge,
  Modal,
  Form,
  Button,
  Dropdown,
  Popconfirm,
  Tabs,
  Checkbox,
  Alert,
  Tooltip,
  Input,
} from "antd";
import {
  KeyOutlined,
  HomeOutlined,
  PlusOutlined,
  SafetyCertificateOutlined,
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
  CheckCircleOutlined,
  SearchOutlined,
  SafetyOutlined,
  UsergroupAddOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../context/AuthContext";
import PermissionGuard from "../../../components/admin/PermissionGuard";
import PageTitle from "@/components/admin/PageTitle";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";

export default function RolesPage() {
  const { hasPermission } = useAuth();

  // --------------------------------------------------------------------------
  // STATE DEFINITIONS
  // --------------------------------------------------------------------------
  const [roles, setRoles] = useState([]);
  const [permissionsGrouped, setPermissionsGrouped] = useState({});
  const [allPermissions, setAllPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("All");

  // Modals state
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
  const [isEditRoleModalOpen, setIsEditRoleModalOpen] = useState(false);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const [savingPermissions, setSavingPermissions] = useState(false);

  // Selected state
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPermissionIds, setSelectedPermissionIds] = useState([]);
  const [permissionSearchText, setPermissionSearchText] = useState("");

  // Forms
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  // --------------------------------------------------------------------------
  // DATA FETCHING LOGIC
  // --------------------------------------------------------------------------
  const fetchRoles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await HTTP("GET", "/roles");
      if (res && res.success) {
        setRoles(res.roles || []);
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to load roles");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPermissions = async () => {
    try {
      const res = await HTTP("GET", "/permissions");
      if (res && res.success) {
        setPermissionsGrouped(res.grouped || {});
        setAllPermissions(res.permissions || []);
      }
    } catch (err) {
      console.error("Failed to load permissions:", err);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchPermissions();
  }, [fetchRoles]);

  // --------------------------------------------------------------------------
  // COMPUTED STATS METRICS
  // --------------------------------------------------------------------------
  const stats = useMemo(() => {
    const totalRoles = roles.length;
    const systemRoles = roles.filter((r) => r.isSystem).length;
    const customRoles = roles.filter((r) => !r.isSystem).length;
    const totalPerms = allPermissions.length;
    return {
      totalRoles,
      systemRoles,
      customRoles,
      totalPerms,
    };
  }, [roles, allPermissions]);

  // --------------------------------------------------------------------------
  // TAB FILTERING & STATUS COUNTS
  // --------------------------------------------------------------------------
  const filteredRoles = useMemo(() => {
    if (activeTabKey === "System") return roles.filter((r) => r.isSystem);
    if (activeTabKey === "Custom") return roles.filter((r) => !r.isSystem);
    return roles;
  }, [roles, activeTabKey]);

  const tabCounts = useMemo(() => {
    return {
      All: roles.length,
      System: roles.filter((r) => r.isSystem).length,
      Custom: roles.filter((r) => !r.isSystem).length,
    };
  }, [roles]);

  // --------------------------------------------------------------------------
  // ACTION HANDLERS
  // --------------------------------------------------------------------------
  const handleCreateRole = async (values) => {
    try {
      const res = await HTTP("POST", "/roles", values);
      if (res && res.success) {
        antdMsg.success("Custom role created successfully.");
        setIsAddRoleModalOpen(false);
        addForm.resetFields();
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to create role");
    }
  };

  const handleEditRole = async (values) => {
    if (!selectedRole) return;
    try {
      const res = await HTTP("PUT", `/roles/${selectedRole.id}`, values);
      if (res && res.success) {
        antdMsg.success("Role details updated successfully.");
        setIsEditRoleModalOpen(false);
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update role");
    }
  };

  const handleDeleteRole = async (roleId) => {
    try {
      const res = await HTTP("DELETE", `/roles/${roleId}`);
      if (res && res.success) {
        antdMsg.success("Custom role deleted successfully.");
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to delete role");
    }
  };

  // Open Permissions Matrix Modal for a specific Role
  const handleOpenPermissions = async (role) => {
    setSelectedRole(role);
    setPermissionSearchText("");
    try {
      const res = await HTTP("GET", `/roles/${role.id}`);
      if (res && res.success && res.role) {
        const assignedIds = (res.role.permissions || []).map((p) => p.id);
        setSelectedPermissionIds(assignedIds);
        setIsPermissionModalOpen(true);
      }
    } catch (err) {
      antdMsg.error("Failed to load role permissions");
    }
  };

  // Save Permissions Matrix
  const handleSavePermissions = async () => {
    if (!selectedRole) return;
    setSavingPermissions(true);
    try {
      const res = await HTTP("PUT", `/roles/${selectedRole.id}/permissions`, {
        permissionIds: selectedPermissionIds,
      });
      if (res && res.success) {
        antdMsg.success(`Permissions updated for role: ${selectedRole.name}`);
        setIsPermissionModalOpen(false);
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update permissions");
    } finally {
      setSavingPermissions(false);
    }
  };

  // --------------------------------------------------------------------------
  // TABLE COLUMNS CONFIGURATION
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "Role Name",
        dataIndex: "name",
        key: "name",
        width: 260,
        render: (val, record) => (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/60 shadow-xs shrink-0">
              <KeyOutlined className="text-base" />
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-800 dark:text-zinc-100">
                {val}
              </div>
              <div className="text-[11px] text-slate-400 dark:text-zinc-500 font-mono tracking-tight">
                {record.slug}
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Classification",
        dataIndex: "isSystem",
        key: "isSystem",
        width: 170,
        render: (isSystem) =>
          isSystem ? (
            <Tag
              color="geekblue"
              icon={<LockOutlined />}
              className="text-xs font-semibold px-2.5 py-0.5 rounded-pill border-geekblue-200"
            >
              System Protected
            </Tag>
          ) : (
            <Tag
              color="cyan"
              icon={<SafetyOutlined />}
              className="text-xs font-semibold px-2.5 py-0.5 rounded-pill border-cyan-200"
            >
              Custom Role
            </Tag>
          ),
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: (val) => (
          <span className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2">
            {val || (
              <span className="italic text-slate-300 dark:text-zinc-600">
                No operational scope description provided
              </span>
            )}
          </span>
        ),
      },
      {
        title: "Assigned Users",
        dataIndex: "userCount",
        key: "userCount",
        width: 140,
        align: "center",
        render: (val) => (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold text-xs">
            <UsergroupAddOutlined className="text-slate-400" />
            <span>{val ?? 0}</span>
          </div>
        ),
      },
      {
        title: "Active Capabilities",
        dataIndex: "permissionCount",
        key: "permissionCount",
        width: 180,
        align: "center",
        render: (val) => (
          <Tag
            color="emerald"
            className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
          >
            {val ?? 0} Capabilities
          </Tag>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        width: 220,
        align: "right",
        render: (_, record) => (
          <div className="flex items-center justify-end gap-2">
            <Button
              size="small"
              icon={<SafetyCertificateOutlined className="text-emerald-600" />}
              onClick={() => handleOpenPermissions(record)}
              className="text-xs font-medium rounded-lg hover:border-emerald-500 hover:text-emerald-600"
            >
              Configure Matrix
            </Button>

            <Tooltip title="Edit Role Details">
              <Button
                size="small"
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedRole(record);
                  editForm.setFieldsValue({
                    name: record.name,
                    description: record.description,
                  });
                  setIsEditRoleModalOpen(true);
                }}
                className="rounded-lg"
              />
            </Tooltip>

            {!record.isSystem && (
              <Popconfirm
                title="Delete Custom Role?"
                description="Are you sure you want to permanently remove this role? Users assigned to this role will lose its permissions."
                onConfirm={() => handleDeleteRole(record.id)}
                okText="Delete"
                cancelText="Cancel"
                okButtonProps={{ danger: true }}
              >
                <Tooltip title="Delete Custom Role">
                  <Button
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
                    className="rounded-lg"
                  />
                </Tooltip>
              </Popconfirm>
            )}
          </div>
        ),
      },
    ];
  }, [editForm]);

  // --------------------------------------------------------------------------
  // SEARCH & EXPORT COLUMNS CONFIG
  // --------------------------------------------------------------------------
  const customFilterCols = useMemo(() => {
    return [
      { label: "Role Name", value: "name" },
      { label: "Slug", value: "slug" },
      { label: "Description", value: "description" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Role Name", key: "name" },
      { header: "Slug", key: "slug" },
      { header: "Type", key: "isSystem" },
      { header: "Assigned Users", key: "userCount" },
      { header: "Permissions Count", key: "permissionCount" },
      { header: "Description", key: "description" },
      { header: "Created Date", key: "createdAt" },
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
          <span>All Roles</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
            {tabCounts.All}
          </span>
        </span>
      ),
    },
    {
      key: "System",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <LockOutlined className="text-blue-500" />
          <span>System Protected</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 font-semibold">
            {tabCounts.System}
          </span>
        </span>
      ),
    },
    {
      key: "Custom",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <SafetyOutlined className="text-emerald-500" />
          <span>Custom Roles</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold">
            {tabCounts.Custom}
          </span>
        </span>
      ),
    },
  ];

  // --------------------------------------------------------------------------
  // PERMISSIONS MATRIX FILTERING HELPER
  // --------------------------------------------------------------------------
  const filteredGroupedPermissions = useMemo(() => {
    if (!permissionSearchText.trim()) return permissionsGrouped;
    const term = permissionSearchText.toLowerCase();
    const result = {};

    Object.entries(permissionsGrouped).forEach(([modName, perms]) => {
      const matching = perms.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.slug.toLowerCase().includes(term) ||
          modName.toLowerCase().includes(term),
      );
      if (matching.length > 0) {
        result[modName] = matching;
      }
    });

    return result;
  }, [permissionsGrouped, permissionSearchText]);

  // --------------------------------------------------------------------------
  // RENDER COMPONENT
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-6 pb-12 animate-fade-in">
      {/* 1. Standardized Admin Page Title & Create Custom Role CTA */}
      <PageTitle
        icon={<KeyOutlined />}
        title="Roles & Permission Matrix"
        description="Configure role-based access controls (RBAC), assign fine-grained operational privileges, and protect core system administration roles."
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
            title: <span className="text-slate-500">Administration</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Roles & Permissions
              </span>
            ),
          },
        ]}
        extraActions={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              addForm.resetFields();
              setIsAddRoleModalOpen(true);
            }}
            className="h-9 px-4 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-xs font-semibold rounded-lg shadow-sm shadow-[var(--brand-primary)]/20 transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
          >
            Create Custom Role
          </Button>
        }
      />

      {/* 2. Top 4-Card Statistics Metric Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Roles */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Total Defined Roles
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mt-1">
              {stats.totalRoles}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Available practice role profiles
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0">
            <KeyOutlined />
          </div>
        </div>

        {/* Card 2: System Roles */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              System Protected
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
              {stats.systemRoles}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Immutable core practice roles
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
            <LockOutlined />
          </div>
        </div>

        {/* Card 3: Custom Roles */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Custom Defined
            </div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
              {stats.customRoles}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Tailored organizational roles
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0">
            <SafetyOutlined />
          </div>
        </div>

        {/* Card 4: Total Permissions */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Active Capabilities
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
              {stats.totalPerms}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Granular module permissions
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl shrink-0">
            <SafetyCertificateOutlined />
          </div>
        </div>
      </div>

      {/* 3. Main Card Shell with Status Tabs & DataTable */}
      <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
        {/* Card-Style Status Tabs */}
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
          dataSource={filteredRoles}
          loading={loading}
          filter={true}
          filterPlaceholder="Search roles by name, slug, description..."
          customFilter={true}
          customFilterLabel="Filter By Column"
          customFilterCol={customFilterCols}
          showSizeChanger={true}
          sizeChangerOptions={[10, 20, 50]}
          scroll={{ x: 1000 }}
          extraHeader={null}
        />
      </div>

      {/* ====================================================================== */}
      {/* MODAL: CREATE CUSTOM ROLE                                               */}
      {/* ====================================================================== */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center text-lg border border-[var(--brand-primary)]/20 shadow-xs">
              <KeyOutlined />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-zinc-100">
                Create Custom Role
              </h3>
              <p className="text-xs text-slate-400 dark:text-zinc-500 font-normal">
                Define a new operational staff role with customized security
                permissions.
              </p>
            </div>
          </div>
        }
        open={isAddRoleModalOpen}
        onCancel={() => setIsAddRoleModalOpen(false)}
        footer={null}
        width={540}
        destroyOnHidden
      >
        <Form
          form={addForm}
          layout="vertical"
          onFinish={handleCreateRole}
          className="pt-4 space-y-3"
        >
          <AntInput
            name="name"
            label="Role Name"
            placeholder="e.g. Senior Tax Auditor"
            reqMsg="Role name is required"
          />

          <AntInput
            type="textarea"
            name="description"
            label="Role Description"
            rows={3}
            placeholder="Specify this role's purpose, departments, and level of access..."
            noRequired
          />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-zinc-800 mt-6">
            <Button
              onClick={() => setIsAddRoleModalOpen(false)}
              className="rounded-lg px-5"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none font-semibold rounded-lg px-6"
            >
              Create Role
            </Button>
          </div>
        </Form>
      </Modal>

      {/* ====================================================================== */}
      {/* MODAL: EDIT ROLE DETAILS                                                */}
      {/* ====================================================================== */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg border border-blue-100 dark:border-blue-900/60 shadow-xs">
              <EditOutlined />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-zinc-100">
                Edit Role Details
              </h3>
              <p className="text-xs text-slate-400 dark:text-zinc-500 font-normal">
                Update display title and scope description for{" "}
                {selectedRole?.name}.
              </p>
            </div>
          </div>
        }
        open={isEditRoleModalOpen}
        onCancel={() => setIsEditRoleModalOpen(false)}
        footer={null}
        width={540}
        destroyOnHidden
      >
        <Form
          form={editForm}
          layout="vertical"
          onFinish={handleEditRole}
          className="pt-4 space-y-3"
        >
          <AntInput
            name="name"
            label="Role Name"
            placeholder="e.g. Senior Tax Auditor"
            reqMsg="Role name is required"
          />

          <AntInput
            type="textarea"
            name="description"
            label="Role Description"
            rows={3}
            placeholder="Specify this role's purpose, departments, and level of access..."
            noRequired
          />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-zinc-800 mt-6">
            <Button
              onClick={() => setIsEditRoleModalOpen(false)}
              className="rounded-lg px-5"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none font-semibold rounded-lg px-6"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal>

      {/* ====================================================================== */}
      {/* MODAL: CONFIGURE PERMISSIONS MATRIX                                     */}
      {/* ====================================================================== */}
      <Modal
        centered
        title={
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800 pr-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center text-lg border border-[var(--brand-primary)]/20 shadow-xs">
                <SafetyCertificateOutlined />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                  <span>Permissions Matrix: {selectedRole?.name}</span>
                  {selectedRole?.isSystem && (
                    <Tag color="geekblue" className="text-[10px] font-mono">
                      System
                    </Tag>
                  )}
                </h3>
                <p className="text-xs text-slate-400 dark:text-zinc-500 font-normal">
                  Toggle fine-grained operational privileges authorized for this
                  role.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
              <CheckCircleOutlined />
              <span className="text-xs font-semibold">
                {selectedPermissionIds.length} of {allPermissions.length}{" "}
                Granted
              </span>
            </div>
          </div>
        }
        open={isPermissionModalOpen}
        onCancel={() => setIsPermissionModalOpen(false)}
        width={820}
        footer={[
          <div key="actions" className="flex items-center justify-between pt-2">
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-800 dark:text-zinc-200">
                {selectedPermissionIds.length}
              </span>{" "}
              active capabilities assigned
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setIsPermissionModalOpen(false)}
                className="rounded-lg px-5"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                loading={savingPermissions}
                onClick={handleSavePermissions}
                className="bg-[#008043] hover:bg-[#006635] text-white border-none font-semibold rounded-lg px-6"
              >
                Save Permission Matrix
              </Button>
            </div>
          </div>,
        ]}
      >
        <div className="py-3 space-y-4 max-h-[62vh] overflow-y-auto pr-1">
          {/* Policy Information Alert */}
          <Alert
            title="Role Permission Policy"
            description="Changes saved here take effect immediately across all active user sessions assigned to this role."
            type="info"
            showIcon
            className="rounded-lg border border-blue-100 dark:border-blue-900/40"
          />

          {/* Quick Filter Search */}
          <Input
            prefix={<SearchOutlined className="text-slate-400 mr-2" />}
            placeholder="Search permissions by capability name, slug, or module..."
            value={permissionSearchText}
            onChange={(e) => setPermissionSearchText(e.target.value)}
            allowClear
            className="rounded-lg py-2"
          />

          {/* Grouped Modules */}
          <div className="space-y-4 pt-1">
            {Object.keys(filteredGroupedPermissions).length === 0 ? (
              <div className="text-center py-8 text-slate-400 dark:text-zinc-500 text-xs">
                No permissions matching "{permissionSearchText}".
              </div>
            ) : (
              Object.entries(filteredGroupedPermissions).map(
                ([moduleName, perms]) => {
                  const modulePermIds = perms.map((p) => p.id);
                  const allChecked = modulePermIds.every((id) =>
                    selectedPermissionIds.includes(id),
                  );
                  const someChecked =
                    modulePermIds.some((id) =>
                      selectedPermissionIds.includes(id),
                    ) && !allChecked;

                  const grantedCount = modulePermIds.filter((id) =>
                    selectedPermissionIds.includes(id),
                  ).length;

                  const toggleModule = (checked) => {
                    if (checked) {
                      const toAdd = modulePermIds.filter(
                        (id) => !selectedPermissionIds.includes(id),
                      );
                      setSelectedPermissionIds((prev) => [...prev, ...toAdd]);
                    } else {
                      setSelectedPermissionIds((prev) =>
                        prev.filter((id) => !modulePermIds.includes(id)),
                      );
                    }
                  };

                  return (
                    <div
                      key={moduleName}
                      className="border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-4 bg-slate-50/60 dark:bg-zinc-800/30 transition-all"
                    >
                      {/* Module Header Strip */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 dark:border-zinc-700/80">
                        <div className="flex items-center gap-2">
                          <ApartmentOutlined className="text-slate-400" />
                          <span className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                            {moduleName} Module
                          </span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-pill bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-400">
                            {grantedCount}/{modulePermIds.length} Granted
                          </span>
                        </div>
                        <Checkbox
                          checked={allChecked}
                          indeterminate={someChecked}
                          onChange={(e) => toggleModule(e.target.checked)}
                          className="text-xs font-semibold"
                        >
                          Grant All in Module
                        </Checkbox>
                      </div>

                      {/* Permissions Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                        {perms.map((p) => {
                          const isChecked = selectedPermissionIds.includes(
                            p.id,
                          );
                          return (
                            <div
                              key={p.id}
                              onClick={() => {
                                if (isChecked) {
                                  setSelectedPermissionIds((prev) =>
                                    prev.filter((id) => id !== p.id),
                                  );
                                } else {
                                  setSelectedPermissionIds((prev) => [
                                    ...prev,
                                    p.id,
                                  ]);
                                }
                              }}
                              className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                                isChecked
                                  ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60"
                                  : "bg-white dark:bg-zinc-900/60 border-slate-200/70 dark:border-zinc-800 hover:border-slate-300"
                              }`}
                            >
                              <Checkbox
                                checked={isChecked}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  if (e.target.checked) {
                                    setSelectedPermissionIds((prev) => [
                                      ...prev,
                                      p.id,
                                    ]);
                                  } else {
                                    setSelectedPermissionIds((prev) =>
                                      prev.filter((id) => id !== p.id),
                                    );
                                  }
                                }}
                                className="mt-0.5"
                              />
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold text-xs text-slate-800 dark:text-zinc-200 block truncate">
                                  {p.name}
                                </span>
                                <span className="text-[10px] text-slate-400 dark:text-zinc-500 block font-mono truncate">
                                  {p.slug}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                },
              )
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
