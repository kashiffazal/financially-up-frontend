"use client";

/**
 * User Management Dashboard
 * =========================
 * Full user lifecycle administration with RBAC permission enforcement, role assignment,
 * status controls, password overrides, and detailed activity tracking.
 */

import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  Button,
  Input,
  Select,
  Tag,
  Badge,
  Modal,
  Form,
  Space,
  Dropdown,
  Avatar,
  Drawer,
  Timeline,
  Popconfirm,
} from "antd";
import {
  UserAddOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  KeyOutlined,
  SafetyCertificateOutlined,
  EditOutlined,
  StopOutlined,
  CheckCircleOutlined,
  HistoryOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../context/AuthContext";
import PermissionGuard from "../../../components/admin/PermissionGuard";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";

const { Option } = Select;

export default function UsersPage() {
  const { user: currentUser, hasPermission } = useAuth();

  // State
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });
  const [filters, setFilters] = useState({ search: "", status: "", roleId: "" });

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isActivityDrawerOpen, setIsActivityDrawerOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [loadingActivity, setLoadingActivity] = useState(false);

  // Forms
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const [roleForm] = Form.useForm();
  const [resetPasswordForm] = Form.useForm();

  // Fetch Users
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        search: filters.search,
        status: filters.status,
        roleId: filters.roleId,
      });

      const res = await HTTP("GET", `/users?${queryParams.toString()}`);
      if (res && res.success) {
        setUsers(res.users || []);
        setPagination((prev) => ({
          ...prev,
          total: res.pagination?.total || 0,
        }));
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, filters]);

  // Fetch Roles Dictionary
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
  }, [fetchUsers]);

  useEffect(() => {
    fetchRoles();
  }, []);

  // Handle Add User
  const handleAddUser = async (values) => {
    try {
      const res = await HTTP("POST", "/users", values);
      if (res && res.success) {
        antdMsg.success("User created successfully.");
        setIsAddModalOpen(false);
        addForm.resetFields();
        fetchUsers();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to create user");
    }
  };

  // Handle Edit User
  const handleEditUser = async (values) => {
    if (!selectedUser) return;
    try {
      const res = await HTTP("PUT", `/users/${selectedUser.id}`, values);
      if (res && res.success) {
        antdMsg.success("User updated successfully.");
        setIsEditModalOpen(false);
        fetchUsers();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update user");
    }
  };

  // Handle Update Roles
  const handleUpdateRoles = async (values) => {
    if (!selectedUser) return;
    try {
      const res = await HTTP("PUT", `/users/${selectedUser.id}/roles`, values);
      if (res && res.success) {
        antdMsg.success("Roles updated successfully.");
        setIsRoleModalOpen(false);
        fetchUsers();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update roles");
    }
  };

  // Handle Reset Password
  const handleResetPassword = async (values) => {
    if (!selectedUser) return;
    try {
      const res = await HTTP("POST", `/users/${selectedUser.id}/reset-password`, values);
      if (res && res.success) {
        antdMsg.success("Password reset successfully.");
        setIsResetPasswordModalOpen(false);
        resetPasswordForm.resetFields();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to reset password");
    }
  };

  // Handle Status Toggle
  const handleStatusChange = async (targetUser, newStatus) => {
    try {
      const res = await HTTP("PATCH", `/users/${targetUser.id}/status`, { status: newStatus });
      if (res && res.success) {
        antdMsg.success(`User marked as ${newStatus}`);
        fetchUsers();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update status");
    }
  };

  // Load User Activity
  const handleViewActivity = async (targetUser) => {
    setSelectedUser(targetUser);
    setIsActivityDrawerOpen(true);
    setLoadingActivity(true);
    try {
      const res = await HTTP("GET", `/users/${targetUser.id}/activity?limit=30`);
      if (res && res.success) {
        setUserActivity(res.logs || []);
      }
    } catch (err) {
      antdMsg.error("Failed to load user activity trail");
    } finally {
      setLoadingActivity(false);
    }
  };

  const columns = [
    {
      title: "User",
      key: "user",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          {record.avatar ? (
            <Avatar src={record.avatar} size={40} />
          ) : (
            <div className="w-10 h-10 rounded-full bg-emerald-600/10 text-[#008043] dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
              {record.firstName?.charAt(0)}
              {record.lastName?.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-semibold text-slate-900 dark:text-zinc-100 text-sm">
              {record.fullName}
            </div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1">
              <MailOutlined className="text-[10px]" /> {record.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Assigned Roles",
      dataIndex: "roles",
      key: "roles",
      render: (userRoles) => (
        <div className="flex flex-wrap gap-1.5">
          {userRoles && userRoles.length > 0 ? (
            userRoles.map((r) => (
              <Tag
                key={r.id}
                color={r.isSystem ? "geekblue" : "cyan"}
                className="text-xs font-medium rounded-full"
              >
                {r.name}
              </Tag>
            ))
          ) : (
            <span className="text-xs text-slate-400 italic">No roles</span>
          )}
        </div>
      ),
    },
    {
      title: "Department / Title",
      key: "dept",
      render: (_, record) => (
        <div className="text-xs">
          <div className="font-medium text-slate-700 dark:text-zinc-300">
            {record.jobTitle || "—"}
          </div>
          <div className="text-slate-400">{record.department || "General"}</div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "success";
        if (status === "Inactive") color = "default";
        if (status === "Suspended") color = "error";
        return (
          <Tag color={color} className="text-xs font-semibold uppercase tracking-wider">
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Last Active",
      dataIndex: "lastLoginAt",
      key: "lastLoginAt",
      render: (val) => (
        <span className="text-xs text-slate-500 dark:text-zinc-400">
          {val ? new Date(val).toLocaleString() : "Never"}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      align: "right",
      render: (_, record) => {
        const menuItems = [
          {
            key: "edit",
            label: "Edit Profile",
            icon: <EditOutlined />,
            onClick: () => {
              setSelectedUser(record);
              editForm.setFieldsValue({
                firstName: record.firstName,
                lastName: record.lastName,
                phone: record.phone,
                department: record.department,
                jobTitle: record.jobTitle,
                avatar: record.avatar,
                status: record.status,
              });
              setIsEditModalOpen(true);
            },
          },
          {
            key: "roles",
            label: "Assign Roles",
            icon: <SafetyCertificateOutlined />,
            onClick: () => {
              setSelectedUser(record);
              roleForm.setFieldsValue({
                roleIds: (record.roles || []).map((r) => r.id),
              });
              setIsRoleModalOpen(true);
            },
          },
          {
            key: "reset-password",
            label: "Reset Password",
            icon: <KeyOutlined />,
            onClick: () => {
              setSelectedUser(record);
              resetPasswordForm.resetFields();
              setIsResetPasswordModalOpen(true);
            },
          },
          {
            key: "activity",
            label: "View Audit Trail",
            icon: <HistoryOutlined />,
            onClick: () => handleViewActivity(record),
          },
          {
            type: "divider",
          },
          {
            key: "toggle-status",
            label: record.status === "Active" ? "Deactivate User" : "Activate User",
            icon: record.status === "Active" ? <StopOutlined /> : <CheckCircleOutlined />,
            danger: record.status === "Active",
            onClick: () =>
              handleStatusChange(record, record.status === "Active" ? "Inactive" : "Active"),
          },
        ];

        return (
          <Dropdown menu={{ items: menuItems }} trigger={["click"]} placement="bottomRight">
            <Button type="text" shape="circle" icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
      {/* Header with Title and Create User CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
            User Management
          </h1>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Manage practice staff, assign roles, configure permissions, and monitor activity.
          </p>
        </div>

        <PermissionGuard permission="users.create">
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            size="large"
            onClick={() => {
              addForm.resetFields();
              setIsAddModalOpen(true);
            }}
            className="bg-[#008043] hover:bg-[#006635] text-white font-semibold rounded-xl border-none shadow-sm"
          >
            Create New User
          </Button>
        </PermissionGuard>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Input
            prefix={<SearchOutlined className="text-slate-400 mr-1" />}
            placeholder="Search by name, email, department..."
            value={filters.search}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
            allowClear
            className="rounded-lg"
          />

          <Select
            placeholder="Filter by Status"
            value={filters.status || undefined}
            onChange={(val) => setFilters((prev) => ({ ...prev, status: val || "" }))}
            allowClear
            className="rounded-lg"
          >
            <Option value="Active">Active Accounts</Option>
            <Option value="Inactive">Inactive Accounts</Option>
            <Option value="Suspended">Suspended Accounts</Option>
          </Select>

          <Select
            placeholder="Filter by Role"
            value={filters.roleId || undefined}
            onChange={(val) => setFilters((prev) => ({ ...prev, roleId: val || "" }))}
            allowClear
            className="rounded-lg"
          >
            {roles.map((r) => (
              <Option key={r.id} value={r.id}>
                {r.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      {/* Users Data Table */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs">
        <Table
          columns={columns}
          dataSource={users}
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

      {/* MODAL: ADD USER */}
      <Modal
        title={
          <div className="flex items-center gap-2 text-lg font-bold">
            <UserAddOutlined className="text-[#008043]" /> Add New User
          </div>
        }
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={null}
        width={600}
      >
        <Form form={addForm} layout="vertical" onFinish={handleAddUser} className="pt-3">
          <div className="grid grid-cols-2 gap-3">
            <AntInput
              name="firstName"
              label="First Name"
              placeholder="First Name"
              reqMsg="First name is required"
            />
            <AntInput
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              reqMsg="Last name is required"
            />
          </div>

          <AntInput
            type="email"
            name="email"
            label="Email Address"
            placeholder="user@financiallyup.com.au"
            reqMsg="Email is required"
            emailErrorMsg="Valid email is required"
          />

          <AntInput
            type="password"
            name="password"
            label="Initial Password"
            placeholder="Initial Password"
            value="123456"
            reqMsg="Password is required"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "Minimum 6 characters" },
            ]}
          />

          <div className="grid grid-cols-2 gap-3">
            <AntInput
              name="department"
              label="Department"
              placeholder="Tax / Advisory / Audit"
              noRequired
            />
            <AntInput
              name="jobTitle"
              label="Job Title"
              placeholder="Senior Accountant"
              noRequired
            />
          </div>

          <AntInput
            type="select"
            name="roleIds"
            label="Assign Initial Roles"
            mode="multiple"
            placeholder="Select roles to assign"
            options={roles.map((r) => ({ label: r.name, value: r.id }))}
            noRequired
          />

          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none cursor-pointer"
            >
              Create Account
            </Button>
          </div>
        </Form>
      </Modal>

      {/* MODAL: EDIT USER */}
      <Modal
        title="Edit User Profile"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
        width={560}
      >
        <Form form={editForm} layout="vertical" onFinish={handleEditUser} className="pt-3">
          <div className="grid grid-cols-2 gap-3">
            <AntInput name="firstName" label="First Name" reqMsg="First name is required" />
            <AntInput name="lastName" label="Last Name" reqMsg="Last name is required" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <AntInput name="phone" label="Phone" noRequired />
            <AntInput name="department" label="Department" noRequired />
          </div>
          <AntInput name="jobTitle" label="Job Title" noRequired />
          <AntInput
            type="select"
            name="status"
            label="Account Status"
            options={[
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" },
              { label: "Suspended", value: "Suspended" },
            ]}
          />
          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none cursor-pointer"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal>

      {/* MODAL: ASSIGN ROLES */}
      <Modal
        title={`Assign Roles: ${selectedUser?.fullName}`}
        open={isRoleModalOpen}
        onCancel={() => setIsRoleModalOpen(false)}
        footer={null}
      >
        <Form form={roleForm} layout="vertical" onFinish={handleUpdateRoles} className="pt-3">
          <AntInput
            type="select"
            name="roleIds"
            label="Select Roles"
            mode="multiple"
            placeholder="Select roles"
            options={roles.map((r) => ({
              label: `${r.name}${r.isSystem ? " (System Role)" : ""}`,
              value: r.id,
            }))}
            noRequired
          />
          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button onClick={() => setIsRoleModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none cursor-pointer"
            >
              Update Roles
            </Button>
          </div>
        </Form>
      </Modal>

      {/* MODAL: RESET PASSWORD */}
      <Modal
        title={`Reset Password for ${selectedUser?.fullName}`}
        open={isResetPasswordModalOpen}
        onCancel={() => setIsResetPasswordModalOpen(false)}
        footer={null}
      >
        <Form
          form={resetPasswordForm}
          layout="vertical"
          onFinish={handleResetPassword}
          className="pt-3"
        >
          <AntInput
            type="password"
            name="newPassword"
            label="New Password"
            placeholder="Enter new password"
            reqMsg="New password is required"
            rules={[
              { required: true, message: "New password is required" },
              { min: 6, message: "Minimum 6 characters" },
            ]}
          />
          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button onClick={() => setIsResetPasswordModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              danger
              className="cursor-pointer"
            >
              Reset & Revoke Sessions
            </Button>
          </div>
        </Form>
      </Modal>

      {/* DRAWER: USER ACTIVITY LOGS */}
      <Drawer
        title={`Audit Trail: ${selectedUser?.fullName}`}
        open={isActivityDrawerOpen}
        onClose={() => setIsActivityDrawerOpen(false)}
        size={500}
      >
        {loadingActivity ? (
          <div className="text-center py-8 text-slate-400">Loading audit history...</div>
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
                    {new Date(log.createdAt).toLocaleString()} • IP: {log.ipAddress || "—"}
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
