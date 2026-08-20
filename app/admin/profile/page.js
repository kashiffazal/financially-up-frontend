"use client";

/**
 * User Profile & Account Security Management
 * ==========================================
 * Allows authenticated staff to manage their profile details, change passwords,
 * view assigned dynamic roles and granular permissions, and manage active sessions.
 */

import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Avatar,
  Tag,
  Divider,
  Table,
  Badge,
  Popconfirm,
  Tabs,
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
} from "@ant-design/icons";
import { useAuth } from "../../../context/AuthContext";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";

export default function ProfilePage() {
  const { user, updateProfile, changePassword } = useAuth();
  const [profileForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  // Sync profile form when user object updates
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

  // Load active sessions
  const loadSessions = async () => {
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
  };

  useEffect(() => {
    loadSessions();
  }, []);

  // Handle Profile Update
  const handleProfileSubmit = async (values) => {
    setLoadingProfile(true);
    try {
      await updateProfile(values);
    } finally {
      setLoadingProfile(false);
    }
  };

  // Handle Password Change
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
        loadSessions(); // Reload sessions as others are revoked
      }
    } finally {
      setLoadingPassword(false);
    }
  };

  // Revoke specific session
  const handleRevokeSession = async (sessionId) => {
    try {
      const res = await HTTP("DELETE", `/auth/sessions/${sessionId}`);
      if (res && res.success) {
        antdMsg.success("Session revoked successfully.");
        loadSessions();
      }
    } catch (err) {
      antdMsg.error("Failed to revoke session.");
    }
  };

  const sessionColumns = [
    {
      title: "Device / Client",
      dataIndex: "deviceName",
      key: "deviceName",
      render: (val, record) => (
        <div className="flex items-center gap-2.5">
          <LaptopOutlined className="text-slate-400 text-base" />
          <div>
            <div className="font-semibold text-slate-800 dark:text-zinc-200 text-xs">
              {val || "Web Browser"}
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              {record.ipAddress || "Unknown IP"}
            </div>
          </div>
          {record.isCurrent && (
            <Tag color="success" className="text-[10px] ml-1">
              Current Session
            </Tag>
          )}
        </div>
      ),
    },
    {
      title: "Last Activity",
      dataIndex: "lastActivityAt",
      key: "lastActivityAt",
      render: (val) => (
        <span className="text-xs text-slate-600 dark:text-zinc-400">
          {val ? new Date(val).toLocaleString() : "Recently"}
        </span>
      ),
    },
    {
      title: "Expires At",
      dataIndex: "expiresAt",
      key: "expiresAt",
      render: (val) => (
        <span className="text-xs text-slate-500 dark:text-zinc-400">
          {val ? new Date(val).toLocaleDateString() : "N/A"}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "isRevoked",
      key: "isRevoked",
      render: (isRevoked) =>
        isRevoked ? (
          <Badge status="default" text="Revoked" />
        ) : (
          <Badge status="processing" color="#008043" text="Active" />
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) =>
        !record.isRevoked && !record.isCurrent ? (
          <Popconfirm
            title="Revoke session?"
            description="This will immediately sign out that device."
            onConfirm={() => handleRevokeSession(record.id)}
            okText="Revoke"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button type="link" danger size="small">
              Revoke
            </Button>
          </Popconfirm>
        ) : (
          <span className="text-xs text-slate-400">-</span>
        ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
      {/* Profile Overview Header Card */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {user?.avatar ? (
              <Avatar src={user.avatar} size={72} className="border-2 border-emerald-500 shadow-md" />
            ) : (
              <div className="w-18 h-18 rounded-2xl bg-gradient-to-tr from-[#008043] to-emerald-400 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </div>
            )}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
                  {user?.fullName || "My Profile"}
                </h1>
                <Badge
                  status="success"
                  text={
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      {user?.status || "Active"}
                    </span>
                  }
                />
              </div>
              <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1 flex items-center gap-2">
                <MailOutlined /> {user?.email}
                {user?.jobTitle && <span>• {user.jobTitle}</span>}
                {user?.department && <span>({user.department})</span>}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {(user?.roles || []).map((r) => (
                  <Tag
                    key={r.id}
                    color="green"
                    icon={<SafetyCertificateOutlined />}
                    className="font-medium px-2.5 py-0.5 rounded-full text-xs"
                  >
                    {r.name}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-6 shadow-xs">
        <Tabs
          defaultActiveKey="profile"
          items={[
            {
              key: "profile",
              label: (
                <span className="flex items-center gap-2 text-sm font-medium">
                  <UserOutlined /> Personal Details
                </span>
              ),
              children: (
                <Form
                  form={profileForm}
                  layout="vertical"
                  onFinish={handleProfileSubmit}
                  requiredMark={false}
                  className="max-w-2xl pt-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AntInput
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      size="large"
                      className="rounded-lg"
                      reqMsg="First name is required"
                    />
                    <AntInput
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name"
                      size="large"
                      className="rounded-lg"
                      reqMsg="Last name is required"
                    />
                  </div>

                  <AntInput
                    type="email"
                    name="email"
                    label="Email Address"
                    size="large"
                    disabled
                    preIconAnt={<MailOutlined className="text-slate-400 mr-1" />}
                    className="rounded-lg bg-slate-50 dark:bg-zinc-800 text-slate-500"
                    noRequired
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AntInput
                      name="phone"
                      label="Phone Number"
                      size="large"
                      preIconAnt={<PhoneOutlined className="text-slate-400 mr-1" />}
                      className="rounded-lg"
                      placeholder="+61 400 000 000"
                      noRequired
                    />
                    <AntInput
                      name="department"
                      label="Department"
                      size="large"
                      preIconAnt={<BankOutlined className="text-slate-400 mr-1" />}
                      className="rounded-lg"
                      placeholder="Accounting / Tax / Audit"
                      noRequired
                    />
                  </div>

                  <AntInput
                    name="jobTitle"
                    label="Job Title"
                    size="large"
                    preIconAnt={<IdcardOutlined className="text-slate-400 mr-1" />}
                    className="rounded-lg"
                    placeholder="Senior Accountant / Practice Manager"
                    noRequired
                  />

                  <AntInput
                    type="textarea"
                    name="bio"
                    label="Bio / Notes"
                    rows={3}
                    className="rounded-lg"
                    placeholder="Brief notes about your role and responsibilities..."
                    noRequired
                  />

                  <AntInput
                    name="avatar"
                    label="Avatar Image URL"
                    size="large"
                    className="rounded-lg"
                    placeholder="https://example.com/avatar.jpg"
                    noRequired
                  />

                  <Form.Item className="pt-2">
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loadingProfile}
                      size="large"
                      className="bg-[#008043] hover:bg-[#006635] text-white font-semibold rounded-lg px-8 border-none cursor-pointer"
                    >
                      Save Profile Changes
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
            {
              key: "security",
              label: (
                <span className="flex items-center gap-2 text-sm font-medium">
                  <LockOutlined /> Security & Password
                </span>
              ),
              children: (
                <Form
                  form={passwordForm}
                  layout="vertical"
                  onFinish={handlePasswordSubmit}
                  requiredMark={false}
                  className="max-w-md pt-2"
                >
                  <AntInput
                    type="password"
                    name="currentPassword"
                    label="Current Password"
                    size="large"
                    preIconAnt={<LockOutlined className="text-slate-400 mr-1" />}
                    className="rounded-lg"
                    placeholder="Current password"
                    reqMsg="Please enter your current password"
                  />

                  <AntInput
                    type="password"
                    name="newPassword"
                    label="New Password"
                    size="large"
                    preIconAnt={<KeyOutlined className="text-slate-400 mr-1" />}
                    className="rounded-lg"
                    placeholder="New password (min 6 characters)"
                    reqMsg="Please enter your new password"
                    rules={[
                      { required: true, message: "Please enter your new password" },
                      { min: 6, message: "Password must be at least 6 characters" },
                    ]}
                  />

                  <AntInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm New Password"
                    size="large"
                    preIconAnt={<KeyOutlined className="text-slate-400 mr-1" />}
                    className="rounded-lg"
                    placeholder="Re-enter new password"
                    reqMsg="Please confirm your new password"
                  />

                  <Form.Item className="pt-2">
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loadingPassword}
                      size="large"
                      className="bg-[#008043] hover:bg-[#006635] text-white font-semibold rounded-lg px-8 border-none cursor-pointer"
                    >
                      Update Password
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
            {
              key: "sessions",
              label: (
                <span className="flex items-center gap-2 text-sm font-medium">
                  <LaptopOutlined /> Active Sessions
                </span>
              ),
              children: (
                <div className="space-y-4 pt-2">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    These devices and browsers currently have active session tokens for your
                    account. Revoking a session will immediately log out that device.
                  </p>
                  <Table
                    columns={sessionColumns}
                    dataSource={sessions}
                    rowKey="id"
                    loading={loadingSessions}
                    pagination={false}
                    className="border border-slate-100 dark:border-zinc-800 rounded-xl overflow-hidden"
                  />
                </div>
              ),
            },
            {
              key: "permissions",
              label: (
                <span className="flex items-center gap-2 text-sm font-medium">
                  <SafetyCertificateOutlined /> My Permissions
                </span>
              ),
              children: (
                <div className="space-y-4 pt-2">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    Your account possesses the following granular access permissions, resolved dynamically from your active roles:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(user?.permissions || []).map((perm) => (
                      <Tag
                        key={perm}
                        color="blue"
                        className="font-mono text-xs px-2.5 py-1 rounded-md"
                      >
                        {perm}
                      </Tag>
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
