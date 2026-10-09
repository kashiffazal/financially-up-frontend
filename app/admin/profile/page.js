"use client";

/**
 * ============================================================================
 * Staff Profile & Account Security Management (`app/admin/profile/page.js`)
 * ============================================================================
 * Architecture Role:
 * Executive 2-column staff management dashboard:
 * 1. Standardized `<PageTitle />` header with right-aligned breadcrumbs and CTA.
 * 2. Left Column: Modern Glassmorphic Identity Hub with interactive avatar crop,
 *    live online status, quick metrics strip, and real-time security checklist.
 * 3. Right Column: Card-style navigation tabs with sleek section cards:
 *    - Personal & Work Details (Personal, Contact, Organizational, Bio)
 *    - Security & Password (Policy guidance, Current/New password fields)
 *    - Active Authorized Sessions (Device details, IP address, Session revoke)
 *    - Staff Capabilities & Permissions Matrix (Live search, categorized cards)
 * 4. Strict adherence to `@/services/antdFields` and Ant Design standards.
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
  Tooltip,
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
  SafetyOutlined,
  InfoCircleOutlined,
  CheckOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
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
  const syncFormData = useCallback(() => {
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

  useEffect(() => {
    syncFormData();
  }, [syncFormData]);

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
      antdMsg.success("Staff profile updated successfully.");
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleAvatarChange = async (croppedBase64) => {
    try {
      profileForm.setFieldValue("avatar", croppedBase64);
      await updateProfile({ avatar: croppedBase64 });
      antdMsg.success("Profile avatar updated successfully.");
    } catch (err) {
      antdMsg.error("Failed to update profile photo.");
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
        antdMsg.success("Security credentials updated. Other active sessions revoked.");
        loadSessions();
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
      title: "Device / Client Platform",
      dataIndex: "deviceName",
      key: "deviceName",
      render: (val, record) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-500 dark:text-zinc-400 text-base shrink-0 shadow-2xs">
            <LaptopOutlined />
          </div>
          <div>
            <div className="font-bold text-xs text-slate-800 dark:text-zinc-100 flex items-center gap-1.5">
              <span>{val || "Web Browser Session"}</span>
              {record.isCurrent && (
                <Tag color="success" className="text-[10px] font-semibold px-2 py-0.2 rounded-md m-0">
                  Current Session
                </Tag>
              )}
            </div>
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
              <GlobalOutlined className="text-[10px]" />
              <span>{record.ipAddress || "Unknown IP"}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Last Activity Recorded",
      dataIndex: "lastActivityAt",
      key: "lastActivityAt",
      render: (val) => (
        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-zinc-400 font-mono">
          <FieldTimeOutlined className="text-slate-400 text-[11px]" />
          <span>{val ? new Date(val).toLocaleString("en-AU") : "Active Now"}</span>
        </div>
      ),
    },
    {
      title: "Security Status",
      dataIndex: "isRevoked",
      key: "isRevoked",
      align: "center",
      render: (isRevoked) =>
        isRevoked ? (
          <Tag color="default" className="text-[10px] font-semibold rounded-md">
            REVOKED
          </Tag>
        ) : (
          <Tag color="success" icon={<CheckCircleOutlined />} className="text-[10px] font-semibold rounded-md">
            AUTHORIZED
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
            title="Terminate Active Session?"
            description="Immediately sign out this device from the practice portal?"
            onConfirm={() => handleRevokeSession(record.id)}
            okText="Terminate Session"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button size="small" danger icon={<DeleteOutlined />} className="rounded-lg text-xs">
              Revoke
            </Button>
          </Popconfirm>
        ) : (
          <span className="text-xs text-slate-400 italic">Current Device</span>
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
            {/* Card Section 1: Personal Information */}
            <div className="bg-slate-50/60 dark:bg-zinc-800/30 border border-slate-200/70 dark:border-zinc-800 rounded-xl p-4 sm:p-5 mb-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 dark:border-zinc-800">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">
                  <UserOutlined />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 m-0">
                    Personal Identity Details
                  </h4>
                  <p className="text-[11px] text-slate-400 m-0">Legal identity for staff credentials and internal auditing.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AntInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  reqMsg="First name is required"
                  className="rounded-lg"
                  preIconAnt={<UserOutlined className="text-slate-400" />}
                />
                <AntInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                  reqMsg="Last name is required"
                  className="rounded-lg"
                  preIconAnt={<UserOutlined className="text-slate-400" />}
                />
              </div>
            </div>

            {/* Card Section 2: Contact Channels */}
            <div className="bg-slate-50/60 dark:bg-zinc-800/30 border border-slate-200/70 dark:border-zinc-800 rounded-xl p-4 sm:p-5 mb-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 dark:border-zinc-800">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shrink-0 font-bold">
                  <MailOutlined />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 m-0">
                    Contact Channels & Communications
                  </h4>
                  <p className="text-[11px] text-slate-400 m-0">Official email address and telephone contact for client assignments.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AntInput
                  type="email"
                  name="email"
                  label="Primary Staff Email"
                  disabled
                  preIconAnt={<MailOutlined className="text-slate-400" />}
                  className="rounded-lg bg-slate-100/70 dark:bg-zinc-800/60 text-slate-600 font-mono"
                  noRequired
                />
                <AntInput
                  type="phone"
                  name="phone"
                  label="Contact Phone Number"
                  preIconAnt={<PhoneOutlined className="text-slate-400" />}
                  placeholder="+61 400 000 000"
                  noRequired
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card Section 3: Organizational Role */}
            <div className="bg-slate-50/60 dark:bg-zinc-800/30 border border-slate-200/70 dark:border-zinc-800 rounded-xl p-4 sm:p-5 mb-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 dark:border-zinc-800">
                <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs shrink-0 font-bold">
                  <BankOutlined />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 m-0">
                    Practice Organization & Designation
                  </h4>
                  <p className="text-[11px] text-slate-400 m-0">Assigned practice branch and professional role designation.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AntInput
                  type="text"
                  name="department"
                  label="Practice Department"
                  preIconAnt={<BankOutlined className="text-slate-400" />}
                  placeholder="e.g. Taxation & Advisory"
                  noRequired
                  className="rounded-lg"
                />
                <AntInput
                  type="text"
                  name="jobTitle"
                  label="Designation / Job Title"
                  preIconAnt={<IdcardOutlined className="text-slate-400" />}
                  placeholder="e.g. Practice Administrator"
                  noRequired
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card Section 4: Professional Scope & Bio */}
            <div className="bg-slate-50/60 dark:bg-zinc-800/30 border border-slate-200/70 dark:border-zinc-800 rounded-xl p-4 sm:p-5 mb-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 dark:border-zinc-800">
                <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shrink-0 font-bold">
                  <FileTextOutlined />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 m-0">
                    Operational Scope & Professional Bio
                  </h4>
                  <p className="text-[11px] text-slate-400 m-0">Professional background, certifications, and portfolio specializations.</p>
                </div>
              </div>

              <AntInput
                type="textarea"
                name="bio"
                label="Scope Notes & Bio"
                rows={3}
                placeholder="Brief summary of certifications, portfolio responsibilities, or practice notes..."
                noRequired
                className="rounded-lg"
              />
            </div>

            {/* Form Submit Strip */}
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Keep your details updated for accurate audit trail attribution.
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <Button
                  onClick={syncFormData}
                  disabled={loadingProfile}
                  className="rounded-lg h-10 px-4 text-xs font-semibold"
                >
                  Discard Changes
                </Button>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loadingProfile}
                  className="h-10 px-7 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold rounded-lg border-none shadow-sm flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                >
                  <CheckCircleOutlined />
                  <span>Save Profile Changes</span>
                </Button>
              </div>
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
        <div className="pt-2 max-w-xl space-y-5">
          <div className="p-3.5 rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 flex items-start gap-3">
            <InfoCircleOutlined className="text-blue-600 dark:text-blue-400 text-base mt-0.5 shrink-0" />
            <div className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              <strong className="text-slate-800 dark:text-zinc-100">Practice Password Policy: </strong>
              Passwords must be at least 6 characters in length. Updating your password will automatically terminate all other active login sessions on other devices for security.
            </div>
          </div>

          <Form
            form={passwordForm}
            layout="vertical"
            onFinish={handlePasswordSubmit}
            requiredMark={false}
          >
            <div className="space-y-4">
              <AntInput
                type="password"
                name="currentPassword"
                label="Current Account Password"
                preIconAnt={<KeyOutlined className="text-slate-400" />}
                placeholder="Enter current password"
                reqMsg="Please enter your current password"
                className="rounded-lg"
              />

              <AntInput
                type="password"
                name="newPassword"
                label="New Account Password"
                preIconAnt={<LockOutlined className="text-slate-400" />}
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
                preIconAnt={<LockOutlined className="text-slate-400" />}
                placeholder="Re-enter new password to verify"
                reqMsg="Please confirm your new password"
                className="rounded-lg"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-end">
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingPassword}
                className="h-10 px-7 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold rounded-lg border-none shadow-sm flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <LockOutlined />
                <span>Update Security Password</span>
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
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono font-semibold">
            {sessions.length}
          </span>
        </span>
      ),
      children: (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/20">
            <div className="flex items-center gap-2.5">
              <SafetyOutlined className="text-emerald-600 text-base" />
              <div className="text-xs text-slate-600 dark:text-zinc-300">
                <strong>Real-Time Session Monitoring: </strong>
                All active devices logged into your account are tracked with IP and last activity timestamp.
              </div>
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

          <DataTable
            columns={sessionColumns}
            dataSource={sessions}
            loading={loadingSessions}
            scroll={{ x: 600 }}
            pagination={false}
          />
        </div>
      ),
    },
    {
      key: "permissions",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <SafetyCertificateOutlined />
          <span>My Permissions</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-purple-100/70 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-mono font-semibold">
            {userPermissions.length}
          </span>
        </span>
      ),
      children: (
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-zinc-800">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 m-0">
                Assigned RBAC Practice Capabilities
              </h3>
              <p className="text-xs text-slate-400 m-0 mt-0.5">
                Dynamic capabilities resolved from your active practice roles.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md text-xs font-semibold self-start sm:self-auto border border-purple-200/60 dark:border-purple-800/60">
              {userPermissions.length} Active Capabilities
            </div>
          </div>

          <Input
            prefix={<SearchOutlined className="text-slate-400 mr-2" />}
            placeholder="Search permissions by keyword or capability slug..."
            value={permissionSearchText}
            onChange={(e) => setPermissionSearchText(e.target.value)}
            allowClear
            className="rounded-lg py-1.5 max-w-sm text-xs"
          />

          {filteredPermissions.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs italic bg-slate-50/50 dark:bg-zinc-800/20 rounded-xl border border-dashed border-slate-200 dark:border-zinc-800">
              {permissionSearchText
                ? `No capabilities match "${permissionSearchText}"`
                : "No granular capabilities assigned."}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1 max-h-96 overflow-y-auto pr-1">
              {filteredPermissions.map((perm) => (
                <div
                  key={perm}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-800/40 shadow-2xs hover:border-emerald-300 transition-colors"
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

  return (
    <div className="w-full space-y-6 pb-16 animate-fade-in">
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
            onClick={() => {
              loadSessions();
              syncFormData();
            }}
            loading={loadingSessions}
            className="h-9 px-4 py-2 border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 text-xs font-semibold rounded-lg hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] shadow-xs transition-all flex items-center gap-1.5 active:scale-[0.98]"
          >
            Refresh Status
          </Button>
        }
      />

      {/* 2. Executive 2-Column Profile Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* =================================================================== */}
        {/* LEFT COLUMN: STAFF IDENTITY & SECURITY HEALTH (lg:col-span-4)       */}
        {/* =================================================================== */}
        <div className="lg:col-span-4 space-y-5">
          {/* Identity Card */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-6 shadow-sm text-center relative overflow-hidden">
            {/* Top decorative gradient using brand variables */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[var(--brand-primary)] via-[#00a858] to-teal-700 opacity-90"></div>

            {/* Interactive Avatar with Upload & Crop */}
            <div className="relative z-10 pt-7 mb-3 flex flex-col items-center">
              <div className="p-1 rounded-full bg-white dark:bg-zinc-900 shadow-lg relative">
                <UploadAndCropImage
                  value={user?.avatar}
                  onChange={handleAvatarChange}
                  width={96}
                  imageType="circle"
                  title="Update Staff Avatar"
                  showActionButtons={false}
                />
                {/* Live Online Presence Indicator */}
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 shadow-sm" title="Session Active"></span>
              </div>

              {/* Staff Full Name */}
              <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-50 mt-3 mb-0.5">
                {user?.fullName || `${user?.firstName || "Staff"} ${user?.lastName || "Member"}`}
              </h2>

              {/* Status Badge */}
              <Tag color="success" className="font-semibold text-[11px] rounded-md px-2.5 py-0.2 mt-1">
                {user?.status || "Active"} Account
              </Tag>

              {/* Email & Designation */}
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-2 space-y-0.5">
                <div className="font-mono text-slate-600 dark:text-zinc-300 font-medium">{user?.email}</div>
                <div className="font-semibold text-slate-700 dark:text-zinc-200">
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
                    className="font-semibold text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20"
                  >
                    {r.name}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800 mt-4">
              <div className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-2.5 text-center border border-slate-200/50 dark:border-zinc-800/80">
                <div className="text-[10px] uppercase font-bold text-slate-400">Sessions</div>
                <div className="text-base font-bold text-slate-800 dark:text-zinc-100 mt-0.5">{sessions.length}</div>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-2.5 text-center border border-slate-200/50 dark:border-zinc-800/80">
                <div className="text-[10px] uppercase font-bold text-slate-400">Rights</div>
                <div className="text-base font-bold text-purple-600 dark:text-purple-400 mt-0.5">{userPermissions.length}</div>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-2.5 text-center border border-slate-200/50 dark:border-zinc-800/80">
                <div className="text-[10px] uppercase font-bold text-slate-400">Security</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center justify-center gap-1">
                  <CheckCircleOutlined /> Strong
                </div>
              </div>
            </div>
          </div>

          {/* Account Details & Security Summary */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-300 pb-2 border-b border-slate-100 dark:border-zinc-800">
              <SafetyOutlined className="text-[var(--brand-primary)] text-sm" />
              <span>Account Security Status</span>
            </div>

            <div className="text-xs space-y-2.5 text-slate-600 dark:text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Multi-Factor Auth:</span>
                <Tag color="blue" className="text-[10px] rounded-md m-0 font-medium">Session Verified</Tag>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Password Policy:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircleOutlined /> Compliant
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Active Devices:</span>
                <span className="font-mono font-semibold">{sessions.length} Authorized</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                block
                icon={<LockOutlined />}
                onClick={() => setActiveTabKey("security")}
                className="rounded-lg text-xs font-semibold h-9 hover:border-[var(--brand-border-hover)]"
              >
                Change Security Password
              </Button>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: WORK AREA & CARD-STYLE TABS (lg:col-span-8)           */}
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
