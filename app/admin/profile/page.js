"use client";

/**
 * ============================================================================
 * Staff Profile & Account Security Management (`app/admin/profile/page.js`)
 * ============================================================================
 * Architecture Role:
 * Executive 2-column dashboard layout eliminating excessive whitespace:
 * 1. Standardized `<PageTitle />` header with custom breadcrumbs.
 * 2. Left Column: Staff Identity Card with interactive avatar upload & crop
 *    using the modernized `UploadAndCropImage` component, role tags, and quick stats.
 * 3. Right Column: Card-style navigation tabs with tight, compact Ant Design
 *    form fieldsets (Personal Details, Security & Password, Sessions, Permissions).
 * 4. Strict adherence to `@/services/antdFields` and Ant Design `<Alert title="..." />`.
 */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Form,
  Button,
  Tag,
  Badge,
  Popconfirm,
  Tabs,
  Alert,
  Input,
  Divider,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  LaptopOutlined,
  MailOutlined,
  PhoneOutlined,
  BankOutlined,
  IdcardOutlined,
  KeyOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  ReloadOutlined,
  SearchOutlined,
  GlobalOutlined,
  DeleteOutlined,
  CompassOutlined,
  SafetyOutlined,
  CalendarOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import DataTable from "@/components/mutual/andt-data-table-component";
import UploadAndCropImage from "@/components/mutual/andt-upload-and-crop-image-component";
import { useAuth } from "../../../context/AuthContext";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";

export default function ProfilePage() {
  const { user, updateProfile, changePassword } = useAuth();

  // --------------------------------------------------------------------------
  // STATE DEFINITIONS
  // --------------------------------------------------------------------------
  const [profileForm] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("profile");
  const [permissionSearchText, setPermissionSearchText] = useState("");

  // --------------------------------------------------------------------------
  // SYNC PROFILE FORM WITH AUTH USER
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (user) {
      profileForm.setFieldsValue({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        department: user.department || "",
        jobTitle: user.jobTitle || "",
        bio: user.bio || "",
        avatar: user.avatar || "",
      });
    }
  }, [user, profileForm]);

  // --------------------------------------------------------------------------
  // LOAD ACTIVE SESSIONS
  // --------------------------------------------------------------------------
  const loadSessions = useCallback(async () => {
    setLoadingSessions(true);
    try {
      const res = await HTTP("GET", "/auth/sessions", {}, false, true);
      if (res && res.success) {
        setSessions(res.sessions || []);
      }
    } catch (err) {
      console.error("Failed to load sessions:", err);
    } finally {
      setLoadingSessions(false);
    }
  }, []);

  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  // --------------------------------------------------------------------------
  // ACTION HANDLERS
  // --------------------------------------------------------------------------
  const handleProfileSubmit = async (values) => {
    setLoadingProfile(true);
    try {
      await updateProfile(values);
    } finally {
      setLoadingProfile(false);
    }
  };

  // Instant avatar update via crop component
  const handleAvatarChange = async (croppedBase64) => {
    try {
      profileForm.setFieldValue("avatar", croppedBase64);
      await updateProfile({ avatar: croppedBase64 });
    } catch (err) {
      antdMsg.error("Failed to update profile photo");
    }
  };

  const handlePasswordSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      antdMsg.error("New passwords do not match.");
      return;
    }
    setLoadingPassword(true);
    try {
      const res = await changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      if (res.success) {
        passwordForm.resetFields();
        loadSessions(); // Reload sessions as others are invalidated
      }
    } finally {
      setLoadingPassword(false);
    }
  };

  const handleRevokeSession = async (sessionId) => {
    try {
      const res = await HTTP("DELETE", `/auth/sessions/${sessionId}`);
      if (res && res.success) {
        antdMsg.success("Session terminated successfully.");
        loadSessions();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to revoke session.");
    }
  };

  // --------------------------------------------------------------------------
  // PERMISSIONS FILTERING
  // --------------------------------------------------------------------------
  const userPermissions = useMemo(() => {
    return user?.permissions || [];
  }, [user]);

  const filteredPermissions = useMemo(() => {
    if (!permissionSearchText.trim()) return userPermissions;
    const term = permissionSearchText.toLowerCase();
    return userPermissions.filter((perm) =>
      perm.toLowerCase().includes(term)
    );
  }, [userPermissions, permissionSearchText]);

  // --------------------------------------------------------------------------
  // SESSIONS TABLE COLUMNS
  // --------------------------------------------------------------------------
  const sessionColumns = [
    {
      title: "Device / Client",
      dataIndex: "deviceName",
      key: "deviceName",
      render: (val, record) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-500 dark:text-zinc-400 text-sm shrink-0">
            <LaptopOutlined />
          </div>
          <div>
            <div className="font-semibold text-xs text-slate-800 dark:text-zinc-100 flex items-center gap-1.5">
              <span>{val || "Web Browser"}</span>
              {record.isCurrent && (
                <Tag color="success" className="text-[10px] font-semibold px-1.5 py-0.2 rounded-pill">
                  Current
                </Tag>
              )}
            </div>
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <GlobalOutlined className="text-[10px]" />
              <span>{record.ipAddress || "Unknown IP"}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Last Activity",
      dataIndex: "lastActivityAt",
      key: "lastActivityAt",
      render: (val) => (
        <span className="text-xs text-slate-600 dark:text-zinc-400 font-mono">
          {val ? new Date(val).toLocaleString("en-AU") : "Active Now"}
        </span>
      ),
    },
    {
      title: "State",
      dataIndex: "isRevoked",
      key: "isRevoked",
      align: "center",
      render: (isRevoked) =>
        isRevoked ? (
          <Tag color="default" className="text-[10px] font-semibold rounded-pill">
            REVOKED
          </Tag>
        ) : (
          <Tag color="success" icon={<CheckCircleOutlined />} className="text-[10px] font-semibold rounded-pill">
            ACTIVE
          </Tag>
        ),
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (_, record) =>
        !record.isRevoked && !record.isCurrent ? (
          <Popconfirm
            title="Terminate Session?"
            description="Sign out this device immediately?"
            onConfirm={() => handleRevokeSession(record.id)}
            okText="Terminate"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button size="small" danger icon={<DeleteOutlined />} className="rounded-lg text-xs">
              Revoke
            </Button>
          </Popconfirm>
        ) : (
          <span className="text-xs text-slate-400 italic">—</span>
        ),
    },
  ];

  // --------------------------------------------------------------------------
  // TAB ITEMS CONFIGURATION
  // --------------------------------------------------------------------------
  const tabItems = [
    {
      key: "profile",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <UserOutlined />
          <span>Personal & Work Details</span>
        </span>
      ),
      children: (
        <div className="pt-2">
          <Form
            form={profileForm}
            layout="vertical"
            onFinish={handleProfileSubmit}
            requiredMark={false}
          >
            {/* Subsection 1: Personal Details */}
            <div className="mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Personal Information
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
                <AntInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  reqMsg="First name is required"
                  className="rounded-lg"
                />
                <AntInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                  reqMsg="Last name is required"
                  className="rounded-lg"
                />
              </div>
            </div>

            <Divider className="my-2 border-slate-100 dark:border-zinc-800" />

            {/* Subsection 2: Contact Info */}
            <div className="mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Contact & Credentials
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
                <AntInput
                  type="email"
                  name="email"
                  label="Primary Staff Email"
                  disabled
                  preIconAnt={<MailOutlined className="text-slate-400 mr-1" />}
                  className="rounded-lg bg-slate-50 dark:bg-zinc-800/60 text-slate-500 font-mono"
                  noRequired
                />
                <AntInput
                  name="phone"
                  label="Contact Phone"
                  preIconAnt={<PhoneOutlined className="text-slate-400 mr-1" />}
                  placeholder="+61 400 000 000"
                  noRequired
                  className="rounded-lg"
                />
              </div>
            </div>

            <Divider className="my-2 border-slate-100 dark:border-zinc-800" />

            {/* Subsection 3: Organizational Role */}
            <div className="mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Organizational Position
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
                <AntInput
                  name="department"
                  label="Practice Department"
                  preIconAnt={<BankOutlined className="text-slate-400 mr-1" />}
                  placeholder="e.g. Taxation & Advisory"
                  noRequired
                  className="rounded-lg"
                />
                <AntInput
                  name="jobTitle"
                  label="Designation / Job Title"
                  preIconAnt={<IdcardOutlined className="text-slate-400 mr-1" />}
                  placeholder="e.g. Practice Administrator"
                  noRequired
                  className="rounded-lg"
                />
              </div>
            </div>

            <Divider className="my-2 border-slate-100 dark:border-zinc-800" />

            {/* Subsection 4: Bio */}
            <div className="mb-4">
              <AntInput
                type="textarea"
                name="bio"
                label="Operational Scope & Professional Bio"
                rows={3}
                placeholder="Brief notes regarding client portfolio, certifications, or location..."
                noRequired
                className="rounded-lg"
              />
            </div>

            {/* Form Submit Strip */}
            <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-end">
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingProfile}
                size="large"
                className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold rounded-pill px-8 border-none shadow-sm flex items-center gap-2"
              >
                <CheckCircleOutlined />
                <span>Save Profile Changes</span>
              </Button>
            </div>
          </Form>
        </div>
      ),
    },
    {
      key: "security",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <LockOutlined />
          <span>Security & Password</span>
        </span>
      ),
      children: (
        <div className="pt-2 max-w-lg">
          {/* Security Policy Alert */}
          <Alert
            title="Account Security Policy"
            description="Use a strong password with at least 6 characters. Updating your password will automatically terminate all other active sessions for your protection."
            type="info"
            showIcon
            className="rounded-xl border border-blue-100 dark:border-blue-900/40 mb-4 text-xs"
          />

          <Form
            form={passwordForm}
            layout="vertical"
            onFinish={handlePasswordSubmit}
            requiredMark={false}
          >
            <AntInput
              type="password"
              name="currentPassword"
              label="Current Password"
              preIconAnt={<LockOutlined className="text-slate-400 mr-1" />}
              placeholder="Enter your current password"
              reqMsg="Please enter your current password"
              className="rounded-lg"
            />

            <AntInput
              type="password"
              name="newPassword"
              label="New Password"
              preIconAnt={<KeyOutlined className="text-slate-400 mr-1" />}
              placeholder="Enter new password (minimum 6 characters)"
              reqMsg="Please enter your new password"
              rules={[
                { required: true, message: "Please enter your new password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
              className="rounded-lg"
            />

            <AntInput
              type="password"
              name="confirmPassword"
              label="Confirm New Password"
              preIconAnt={<KeyOutlined className="text-slate-400 mr-1" />}
              placeholder="Re-enter new password to verify"
              reqMsg="Please confirm your new password"
              className="rounded-lg"
            />

            <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-end">
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingPassword}
                size="large"
                className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold rounded-pill px-8 border-none shadow-sm flex items-center gap-2"
              >
                <LockOutlined />
                <span>Update Password</span>
              </Button>
            </div>
          </Form>
        </div>
      ),
    },
    {
      key: "sessions",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <LaptopOutlined />
          <span>Active Sessions</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
            {sessions.length}
          </span>
        </span>
      ),
      children: (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-zinc-800">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-200">
                Active Authenticated Sessions
              </h3>
              <p className="text-xs text-slate-400 dark:text-zinc-500 m-0">
                Manage all web browser clients and devices currently signed into your account.
              </p>
            </div>
            <Button
              size="small"
              icon={<ReloadOutlined />}
              onClick={loadSessions}
              loading={loadingSessions}
              className="rounded-lg text-xs"
            >
              Refresh Sessions
            </Button>
          </div>

          <div className="border border-slate-200/80 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs">
            <DataTable
              columns={sessionColumns}
              dataSource={sessions}
              loading={loadingSessions}
              pagination={false}
              scroll={{ x: 650 }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "permissions",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <SafetyCertificateOutlined />
          <span>My Permissions</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill font-mono bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400 font-semibold">
            {userPermissions.length}
          </span>
        </span>
      ),
      children: (
        <div className="space-y-3 pt-2">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-zinc-800">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-200">
                Granted Capabilities
              </h3>
              <p className="text-xs text-slate-400 dark:text-zinc-500 m-0">
                Dynamic capabilities resolved from active role assignments.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-pill text-xs font-semibold self-start sm:self-auto border border-purple-200/60 dark:border-purple-800/60">
              {userPermissions.length} Active Permissions
            </div>
          </div>

          {/* Quick Search */}
          <Input
            prefix={<SearchOutlined className="text-slate-400 mr-2" />}
            placeholder="Search permissions by capability slug..."
            value={permissionSearchText}
            onChange={(e) => setPermissionSearchText(e.target.value)}
            allowClear
            className="rounded-xl py-1.5 max-w-sm text-xs"
          />

          {/* Permissions Grid */}
          {filteredPermissions.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs italic">
              {permissionSearchText
                ? `No permissions match "${permissionSearchText}"`
                : "No granular permissions assigned."}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 max-h-96 overflow-y-auto pr-1">
              {filteredPermissions.map((perm) => (
                <div
                  key={perm}
                  className="flex items-center gap-2 p-2 rounded-lg border border-slate-200/70 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 shadow-xs"
                >
                  <CheckCircleOutlined className="text-[var(--brand-primary)] text-xs shrink-0" />
                  <span className="font-mono text-xs font-semibold text-slate-700 dark:text-zinc-300 truncate">
                    {perm}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
  ];

  // --------------------------------------------------------------------------
  // RENDER COMPONENT (BALANCED 2-COLUMN DASHBOARD)
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-6 pb-12 animate-fade-in">
      {/* 1. Standardized Admin Page Title */}
      <PageTitle
        icon={<UserOutlined />}
        title="Staff Profile & Security"
        description="Manage personal identity details, update security credentials, review assigned role capabilities, and control active sessions."
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
              <span className="font-semibold text-[var(--brand-primary)]">
                Staff Profile
              </span>
            ),
          },
        ]}
        extraActions={
          <Button
            icon={<ReloadOutlined />}
            size="large"
            onClick={loadSessions}
            loading={loadingSessions}
            className="rounded-pill font-semibold border-slate-200 dark:border-zinc-700 hover:border-[var(--brand-border-hover)] flex items-center gap-2 shadow-xs"
          >
            Refresh Status
          </Button>
        }
      />

      {/* 2. Balanced 2-Column Profile Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* =================================================================== */}
        {/* LEFT COLUMN: STAFF IDENTITY & SECURITY HEALTH (lg:col-span-4)        */}
        {/* =================================================================== */}
        <div className="lg:col-span-4 space-y-5">
          {/* Identity Card */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-6 shadow-sm text-center relative overflow-hidden">
            {/* Top decorative gradient using brand variables */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-[var(--brand-primary)] via-[#00a858] to-[var(--brand-primary-hover)] opacity-90"></div>

            {/* Interactive Avatar with Upload & Crop */}
            <div className="relative z-10 pt-5 mb-3 flex flex-col items-center">
              <div className="p-1 rounded-full bg-white dark:bg-zinc-900 shadow-md">
                <UploadAndCropImage
                  value={user?.avatar}
                  onChange={handleAvatarChange}
                  width={92}
                  imageType="circle"
                  title="Update Staff Avatar"
                  showActionButtons={false}
                />
              </div>

              {/* Staff Full Name */}
              <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-50 mt-2 mb-0.5">
                {user?.fullName || `${user?.firstName || "Staff"} ${user?.lastName || "Member"}`}
              </h2>

              {/* Status Badge */}
              <Tag color="success" className="font-semibold text-[11px] rounded-pill px-2.5 py-0.2 mt-1">
                {user?.status || "Active"} Account
              </Tag>

              {/* Email & Designation */}
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-2 space-y-0.5">
                <div className="font-mono">{user?.email}</div>
                <div className="font-medium text-slate-700 dark:text-zinc-300">
                  {user?.jobTitle || "Practice Administrator"}
                </div>
                {user?.department && (
                  <div className="text-[11px] text-slate-400">
                    Dept: {user.department}
                  </div>
                )}
              </div>

              {/* Assigned Role Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {(user?.roles || []).map((r) => (
                  <Tag
                    key={r.id}
                    icon={<SafetyCertificateOutlined className="text-[var(--brand-primary)]" />}
                    className="font-semibold text-[11px] px-2 py-0.5 rounded-pill bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20"
                  >
                    {r.name}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800 mt-4">
              <div className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-2 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">Sessions</div>
                <div className="text-sm font-bold text-slate-800 dark:text-zinc-100">{sessions.length}</div>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-2 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">Perms</div>
                <div className="text-sm font-bold text-purple-600 dark:text-purple-400">{userPermissions.length}</div>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-2 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">Security</div>
                <div className="text-sm font-bold text-[var(--brand-primary)]">Normal</div>
              </div>
            </div>
          </div>

          {/* Account Details & Security Summary */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 pb-2 border-b border-slate-100 dark:border-zinc-800">
              <SafetyOutlined className="text-[var(--brand-primary)] text-sm" />
              <span>Account Security Status</span>
            </div>

            <div className="text-xs space-y-2 text-slate-600 dark:text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Multi-Factor Auth:</span>
                <Tag color="blue" className="text-[10px] rounded-pill">Session Active</Tag>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Password Policy:</span>
                <span className="font-semibold text-[var(--brand-primary)] flex items-center gap-1">
                  <CheckCircleOutlined /> Compliant
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Active Devices:</span>
                <span className="font-mono font-semibold">{sessions.length} authorized</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                block
                icon={<LockOutlined />}
                onClick={() => setActiveTabKey("security")}
                className="rounded-xl text-xs font-medium hover:border-[var(--brand-border-hover)]"
              >
                Change Security Password
              </Button>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: WORK AREA & CARD-STYLE TABS (lg:col-span-8)            */}
        {/* =================================================================== */}
        <div className="lg:col-span-8">
          <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm">
            <Tabs
              activeKey={activeTabKey}
              onChange={setActiveTabKey}
              items={tabItems}
              type="card"
              className="user-status-tabs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
