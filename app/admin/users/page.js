"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  Tag,
  Badge,
  Modal,
  Form,
  Button,
  Dropdown,
  Avatar,
  Drawer,
  Timeline,
  Popconfirm,
  Tabs,
} from "antd";
import {
  TeamOutlined,
  HomeOutlined,
  UserAddOutlined,
  SearchOutlined,
  MoreOutlined,
  KeyOutlined,
  SafetyCertificateOutlined,
  EditOutlined,
  StopOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  HistoryOutlined,
  MailOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../context/AuthContext";
import PermissionGuard from "../../../components/admin/PermissionGuard";
import PageTitle from "@/components/admin/PageTitle";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import AddUserModal from "@/components/admin/users/AddUserModal";
import EditUserModal from "@/components/admin/users/EditUserModal";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";
import { PASSWORD_HINT, passwordRules, generateStrongPassword } from "@/lib/passwordPolicy";

/**
 * ============================================================================
 * User Management Page (`app/admin/users/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with custom breadcrumbs and "+ Create New User" CTA.
 * 2. Card-style status tabs with live count badges (All, Active, Inactive, Suspended).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dedicated modern `AddUserModal` component.
 * 5. Modernized Edit, Roles, Password Reset, and Audit Trail Modals/Drawers.
 */
export default function UsersPage() {
  const { user: currentUser, hasPermission, refreshUser } = useAuth();

  // --------------------------------------------------------------------------
  // STATE DEFINITIONS
  // --------------------------------------------------------------------------
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("All");

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isActivityDrawerOpen, setIsActivityDrawerOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [loadingActivity, setLoadingActivity] = useState(false);

  // Forms
  const [roleForm] = Form.useForm();
  const [resetPasswordForm] = Form.useForm();
  const resetMode = Form.useWatch("mode", resetPasswordForm) || "email";
  const [resetting, setResetting] = useState(false);

  // --------------------------------------------------------------------------
  // DATA FETCHING LOGIC
  // --------------------------------------------------------------------------
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await HTTP("GET", "/users?limit=1000");
      if (res && res.success) {
        setUsers(res.users || []);
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRoles = async () => {
    try {
      const res = await HTTP("GET", "/roles");
      if (res && res.success) {
        setRoles(res.roles || []);
      }
    } catch (err) {
      console.error("Failed to load roles:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, [fetchUsers]);

  // --------------------------------------------------------------------------
  // DATA FILTERING BY ACTIVE TAB
  // --------------------------------------------------------------------------
  const filteredUsers = useMemo(() => {
    if (activeTabKey === "All") return users;
    return users.filter((u) => u.status === activeTabKey);
  }, [users, activeTabKey]);

  // Status counts for tab badges
  const statusCounts = useMemo(() => {
    const counts = { All: users.length, Active: 0, Inactive: 0, Suspended: 0 };
    users.forEach((u) => {
      if (counts[u.status] !== undefined) {
        counts[u.status] += 1;
      }
    });
    return counts;
  }, [users]);

  // --------------------------------------------------------------------------
  // ACTION HANDLERS
  // --------------------------------------------------------------------------
  const handleUpdateRoles = async (values) => {
    if (!selectedUser) return;
    try {
      const res = await HTTP("PUT", `/users/${selectedUser.id}/roles`, values);
      if (res && res.success) {
        antdMsg.success("User roles updated successfully.");
        setIsRoleModalOpen(false);
        fetchUsers();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update roles");
    }
  };

  const handleStatusChange = async (targetUser, newStatus) => {
    try {
      const res = await HTTP("PATCH", `/users/${targetUser.id}/status`, {
        status: newStatus,
      });
      if (res && res.success) {
        antdMsg.success(`User marked as ${newStatus}.`);
        fetchUsers();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update status");
    }
  };

  // Email a reset link (default) or set a temporary password the user must change
  const handleResetPassword = async (values) => {
    if (!selectedUser) return;
    setResetting(true);
    try {
      const res = await HTTP("POST", `/users/${selectedUser.id}/reset-password`, {
        mode: values.mode,
        newPassword: values.mode === "manual" ? values.newPassword : undefined,
      });
      if (res && res.success) {
        antdMsg.success(res.message || "Password reset. The user has been signed out of all devices.", 6);
        setIsResetPasswordModalOpen(false);
        resetPasswordForm.resetFields();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to reset password");
    } finally {
      setResetting(false);
    }
  };

  const handleOpenActivity = async (targetUser) => {
    setSelectedUser(targetUser);
    setIsActivityDrawerOpen(true);
    setLoadingActivity(true);
    try {
      const res = await HTTP(
        "GET",
        // This user's own history: what they did and what was done to their account
        `/users/${targetUser.id}/activity?limit=50`,
      );
      if (res && res.success) {
        setUserActivity(res.logs || []);
      }
    } catch (err) {
      antdMsg.error("Failed to load user activity audit logs");
    } finally {
      setLoadingActivity(false);
    }
  };

  // --------------------------------------------------------------------------
  // TABLE COLUMNS CONFIGURATION
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "User Profile",
        key: "userProfile",
        sorter: (a, b) => (a.fullName || "").localeCompare(b.fullName || ""),
        render: (_, record) => {
          const initials =
            `${record.firstName?.[0] || ""}${record.lastName?.[0] || ""}`.toUpperCase() ||
            "U";
          const isCurrentUser =
            currentUser?.id === record.id ||
            (currentUser?.email &&
              record.email &&
              currentUser.email.toLowerCase() === record.email.toLowerCase());
          const resolvedAvatar =
            isCurrentUser && currentUser?.avatar
              ? currentUser.avatar
              : record.avatar;
          const avatarUrl = resolvedAvatar || undefined;

          return (
            <div className="flex items-center gap-3">
              <Badge
                dot
                status={
                  record.status === "Active"
                    ? "success"
                    : record.status === "Suspended"
                      ? "error"
                      : "default"
                }
                offset={[-2, 32]}
              >
                <Avatar
                  src={avatarUrl}
                  className="bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] dark:bg-[var(--brand-primary-soft)] dark:text-[var(--brand-primary)] font-bold border border-[var(--brand-primary)]/20 shadow-xs object-cover"
                  size={40}
                >
                  {initials}
                </Avatar>
              </Badge>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-zinc-100 text-sm">
                    {record.fullName}
                  </span>
                  {isCurrentUser && (
                    <Tag
                      color="cyan"
                      className="rounded-pill text-[10px] px-1.5 py-0 border-0"
                    >
                      You
                    </Tag>
                  )}
                </div>
                <div className="text-xs text-slate-400 dark:text-zinc-500">
                  {record.jobTitle || record.department || "Practice Staff"}
                </div>
              </div>
            </div>
          );
        },
      },
      {
        title: "Contact Details",
        key: "contact",
        render: (_, record) => {
          return (
            <div className="space-y-0.5 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-300">
                <MailOutlined className="text-slate-400" />
                <a href={`mailto:${record.email}`} className="hover:underline">
                  {record.email}
                </a>
              </div>
              {record.phone && (
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-400">
                  <PhoneOutlined className="text-slate-400" />
                  <a href={`tel:${record.phone}`} className="hover:underline">
                    {record.phone}
                  </a>
                </div>
              )}
            </div>
          );
        },
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
        render: (val) => (
          <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
            {val || "-"}
          </span>
        ),
      },
      {
        title: "Assigned Roles",
        key: "roles",
        render: (_, record) => {
          if (!record.roles?.length) {
            return (
              <span className="text-slate-400 text-xs italic">
                No roles assigned
              </span>
            );
          }
          return (
            <div className="flex flex-wrap gap-1">
              {record.roles.map((r) => {
                const color =
                  r.name === "administrator"
                    ? "volcano"
                    : r.name.includes("accountant")
                      ? "green"
                      : r.name.includes("manager")
                        ? "blue"
                        : "purple";
                return (
                  <Tag
                    key={r.id}
                    color={color}
                    className="rounded-pill text-[11px] px-2 py-0 border-0 font-medium"
                  >
                    {r.name}
                  </Tag>
                );
              })}
            </div>
          );
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        align: "center",
        render: (status) => {
          const color =
            status === "Active"
              ? "success"
              : status === "Suspended"
                ? "error"
                : "default";
          return (
            <Tag
              color={color}
              className="rounded-pill px-2.5 py-0.5 font-medium text-xs border-0"
            >
              {status || "Active"}
            </Tag>
          );
        },
      },
      {
        title: "Last Login",
        dataIndex: "lastLoginAt",
        key: "lastLoginAt",
        sorter: (a, b) =>
          new Date(a.lastLoginAt || 0) - new Date(b.lastLoginAt || 0),
        render: (val) => {
          if (!val)
            return <span className="text-slate-400 text-xs italic">Never</span>;
          const dateObj = new Date(val);
          return (
            <div className="text-xs">
              <div className="font-medium text-slate-700 dark:text-zinc-300">
                {dateObj.toLocaleDateString("en-AU")}
              </div>
              <div className="text-[10px] text-slate-400">
                {dateObj.toLocaleTimeString("en-AU", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          );
        },
      },
      {
        title: "Action",
        key: "actions",
        fixed: "right",
        width: 80,
        align: "center",
        render: (_, record) => {
          // Your own account: no role, password-reset or suspend actions (prevents
          // locking yourself out — the API refuses them too). Change your password on My Profile.
          const isSelf =
            String(currentUser?.id) === String(record.id) ||
            (currentUser?.email && record.email && currentUser.email.toLowerCase() === record.email.toLowerCase());
          const allItems = [
            {
              key: "edit",
              icon: <EditOutlined className="text-blue-500" />,
              label: "Edit Profile",
              onClick: () => {
                setSelectedUser(record);
                setIsEditModalOpen(true);
              },
            },
            isSelf && {
              key: "myPassword",
              icon: <KeyOutlined className="text-amber-500" />,
              label: <Link href="/admin/profile?tab=security">Change My Password</Link>,
            },
            !isSelf && {
              key: "roles",
              icon: <SafetyCertificateOutlined className="text-purple-500" />,
              label: "Assign Roles",
              onClick: () => {
                setSelectedUser(record);
                roleForm.setFieldsValue({
                  roleIds: record.roles?.map((r) => r.id) || [],
                });
                setIsRoleModalOpen(true);
              },
            },
            !isSelf && {
              key: "resetPassword",
              icon: <KeyOutlined className="text-amber-500" />,
              label: "Reset Password",
              onClick: () => {
                setSelectedUser(record);
                resetPasswordForm.resetFields();
                setIsResetPasswordModalOpen(true);
              },
            },
            {
              key: "activity",
              icon: <HistoryOutlined className="text-emerald-500" />,
              label: "View Audit Trail",
              onClick: () => handleOpenActivity(record),
            },
            !isSelf && {
              type: "divider",
            },
            !isSelf && {
              key: "status",
              icon:
                record.status === "Active" ? (
                  <StopOutlined />
                ) : (
                  <CheckCircleOutlined />
                ),
              label:
                record.status === "Active"
                  ? "Suspend Account"
                  : "Activate Account",
              danger: record.status === "Active",
              onClick: () =>
                handleStatusChange(
                  record,
                  record.status === "Active" ? "Inactive" : "Active",
                ),
            },
          ];
          const menuItems = allItems.filter(Boolean);

          return (
            <Dropdown
              menu={{ items: menuItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                type="text"
                size="small"
                className="w-8 h-8 flex items-center justify-center rounded-pill hover:bg-slate-100 dark:hover:bg-zinc-800"
              >
                <MoreOutlined className="text-base" />
              </Button>
            </Dropdown>
          );
        },
      },
    ];
  }, [currentUser, roleForm, resetPasswordForm]);

  // --------------------------------------------------------------------------
  // CUSTOM FILTERS & EXPORT COLUMNS
  // --------------------------------------------------------------------------
  const customFilterCols = useMemo(() => {
    return [
      { label: "Full Name", value: "fullName" },
      { label: "Email Address", value: "email" },
      { label: "Department", value: "department" },
      { label: "Job Title", value: "jobTitle" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Full Name", key: "fullName" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "phone" },
      { header: "Department", key: "department" },
      { header: "Job Title", key: "jobTitle" },
      { header: "Status", key: "status" },
      { header: "Last Login", key: "lastLoginAt" },
      { header: "Created Date", key: "createdAt" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // STATUS TABS CONFIGURATION
  // --------------------------------------------------------------------------
  const tabItems = [
    {
      key: "All",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <AppstoreOutlined />
          <span>All Users</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
            {statusCounts.All}
          </span>
        </span>
      ),
    },
    {
      key: "Active",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircleOutlined />
          <span>Active</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold">
            {statusCounts.Active}
          </span>
        </span>
      ),
    },
    {
      key: "Inactive",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <StopOutlined />
          <span>Inactive</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-slate-100 dark:bg-zinc-800 text-slate-400">
            {statusCounts.Inactive}
          </span>
        </span>
      ),
    },
    {
      key: "Suspended",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <CloseCircleOutlined />
          <span>Suspended</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 font-semibold">
            {statusCounts.Suspended}
          </span>
        </span>
      ),
    },
  ];

  // --------------------------------------------------------------------------
  // RENDER MAIN COMPONENT
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-6 pb-12 animate-fade-in">
      {/* 1. Standardized Admin Page Title & Create User CTA */}
      <PageTitle
        icon={<TeamOutlined />}
        title="User Management"
        description="Manage practice staff accounts, assign granular RBAC roles, configure permissions, and monitor active sessions."
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
                User Management
              </span>
            ),
          },
        ]}
        extraActions={
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={() => setIsAddModalOpen(true)}
            className="h-9 px-4 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-xs font-semibold rounded-lg shadow-sm shadow-[var(--brand-primary)]/20 transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
          >
            Create New User
          </Button>
        }
      />

      {/* 2. Main Card Shell with Status Tabs & DataTable */}
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
          dataSource={filteredUsers}
          loading={loading}
          filter={true}
          filterPlaceholder="Search users by name, email, department..."
          customFilter={true}
          customFilterLabel="Filter By Column"
          customFilterCol={customFilterCols}
          showSizeChanger={true}
          sizeChangerOptions={[10, 20, 50, 100]}
          scroll={{ x: 1100 }}
          extraHeader={null}
        />
      </div>

      {/* MODAL: ADD USER (DEDICATED COMPONENT) */}
      <AddUserModal
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          setIsAddModalOpen(false);
          fetchUsers();
        }}
        roles={roles}
      />

      {/* MODAL: EDIT USER */}
      <EditUserModal
        open={isEditModalOpen}
        user={selectedUser}
        onCancel={() => setIsEditModalOpen(false)}
        onSuccess={(updatedUser) => {
          setIsEditModalOpen(false);
          fetchUsers();
          // Edited your own account: reload it so the header (name, photo, job title)
          // and the rest of the portal show the new details straight away
          if (String(currentUser?.id) === String(updatedUser?.id ?? selectedUser?.id)) {
            refreshUser();
          }
        }}
      />

      {/* MODAL: ASSIGN ROLES */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-2 text-base font-bold pb-2 border-b border-slate-100 dark:border-zinc-800">
            <SafetyCertificateOutlined className="text-[var(--brand-primary)]" /> Assign
            Roles: {selectedUser?.fullName}
          </div>
        }
        open={isRoleModalOpen}
        onCancel={() => setIsRoleModalOpen(false)}
        footer={null}
        width={500}
        destroyOnHidden
      >
        <Form
          form={roleForm}
          layout="vertical"
          onFinish={handleUpdateRoles}
          className="pt-4 space-y-4"
        >
          <AntInput
            type="select"
            name="roleIds"
            label="Select Assigned Roles"
            mode="multiple"
            placeholder="Select one or more roles"
            options={roles.map((r) => ({
              label: `${r.name}${r.isSystem ? " (System Role)" : ""}`,
              value: r.id,
            }))}
            noRequired
          />
          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800">
            <Button
              onClick={() => setIsRoleModalOpen(false)}
              className="rounded-pill"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white border-none rounded-pill px-5"
            >
              Update Roles
            </Button>
          </div>
        </Form>
      </Modal>

      {/* MODAL: RESET PASSWORD */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-2 text-base font-bold pb-2 border-b border-slate-100 dark:border-zinc-800">
            <KeyOutlined className="text-amber-500" /> Reset Password:{" "}
            {selectedUser?.fullName}
          </div>
        }
        open={isResetPasswordModalOpen}
        onCancel={() => setIsResetPasswordModalOpen(false)}
        footer={null}
        width={500}
        destroyOnHidden
      >
        <Form
          form={resetPasswordForm}
          layout="vertical"
          onFinish={handleResetPassword}
          initialValues={{ mode: "email" }}
          className="pt-4"
        >
          <AntInput
            type="radio"
            designVariant="card"
            name="mode"
            radioOptions={[
              {
                value: "email",
                title: "Email a reset link",
                desc: `Recommended. ${selectedUser?.email || "They"} get a one-time link (valid 48 hours) to choose a new password.`,
              },
              {
                value: "manual",
                title: "Set a temporary password",
                desc: "Share it securely. They must change it the next time they sign in.",
              },
            ]}
            gridClassName="grid grid-cols-1 gap-3 w-full"
            noRequired
          />
          {resetMode === "manual" && (
            <div className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                <AntInput
                  type="password"
                  name="newPassword"
                  label="Temporary Password"
                  placeholder="At least 10 characters"
                  rules={passwordRules("Please enter a temporary password")}
                  extra={PASSWORD_HINT}
                  autoComplete="new-password"
                />
              </div>
              <Button
                size="large"
                icon={<ThunderboltOutlined />}
                className="mt-[30px]"
                onClick={() => {
                  resetPasswordForm.setFieldValue("newPassword", generateStrongPassword());
                  resetPasswordForm.validateFields(["newPassword"]).catch(() => {});
                }}
              >
                Generate
              </Button>
            </div>
          )}
          <p className="m-0 mb-1 text-xs text-slate-500 dark:text-zinc-400">
            Either way, they&apos;re signed out of every device right away.
          </p>
          <div className="flex justify-end gap-2 pt-4 mt-3 border-t border-slate-100 dark:border-zinc-800">
            <Button
              onClick={() => setIsResetPasswordModalOpen(false)}
              className="rounded-pill"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              danger
              loading={resetting}
              className="rounded-pill px-5"
            >
              {resetMode === "manual" ? "Set Password & Sign Out" : "Send Reset Email"}
            </Button>
          </div>
        </Form>
      </Modal>

      {/* DRAWER: USER ACTIVITY LOGS */}
      <Drawer
        title={
          <div className="flex items-center gap-2.5 font-bold text-sm">
            <Avatar
              src={selectedUser?.avatar}
              size={28}
              className="bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 font-bold"
            >
              {selectedUser?.firstName?.[0] || "U"}
            </Avatar>
            <span>Audit Trail: {selectedUser?.fullName}</span>
          </div>
        }
        open={isActivityDrawerOpen}
        onClose={() => setIsActivityDrawerOpen(false)}
        size={500}
      >
        {loadingActivity ? (
          <div className="text-center py-8 text-slate-400">
            Loading audit history...
          </div>
        ) : userActivity.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs">
            No activity logged for this user.
          </div>
        ) : (
          <Timeline
            className="pt-3"
            items={userActivity.map((log) => ({
              color: log.status === "SUCCESS" ? "green" : "red",
              content: (
                <div className="text-xs">
                  <div className="font-semibold text-slate-800 dark:text-zinc-200">
                    {log.action}
                  </div>
                  <div className="text-slate-600 dark:text-zinc-400 mt-0.5">
                    {log.description}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 font-mono">
                    {new Date(log.createdAt).toLocaleString("en-AU")} • IP:{" "}
                    {log.ipAddress || "—"}
                  </div>
                </div>
              ),
            }))}
          />
        )}
      </Drawer>
    </div>
  );
}
