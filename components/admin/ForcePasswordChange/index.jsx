"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Form, Button, Alert } from "antd";
import { LockOutlined, LogoutOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/app/ThemeProvider";
import { PASSWORD_HINT, passwordRules } from "@/lib/passwordPolicy";
import styles from "./ForcePasswordChange.module.css";

/**
 * Shown by the admin layout instead of the portal when an administrator set this
 * user's password (user.mustChangePassword). The API also refuses every other
 * request until the password is changed (PASSWORD_CHANGE_REQUIRED).
 */
export default function ForcePasswordChange() {
  const { user, changePassword, refreshUser, logout } = useAuth();
  const { isDark } = useTheme();
  const [form] = Form.useForm();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleFinish = async (values) => {
    setSaving(true);
    setError("");
    const res = await changePassword({ currentPassword: values.currentPassword, newPassword: values.newPassword });
    if (res.success) {
      await refreshUser();
    } else {
      setError(res.error || "Couldn't change your password. Please try again.");
    }
    setSaving(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Image src={isDark ? "/images/logo-w.png" : "/images/logo.png"} alt="Financially Up" width={170} height={40} className={styles.logo} priority />
        <div className={styles.icon}>
          <SafetyCertificateOutlined />
        </div>
        <h1 className={styles.title}>Choose your own password</h1>
        <p className={styles.text}>
          Hi {user?.firstName || "there"}, your account is using a temporary password set by an administrator. Choose a new
          password to continue.
        </p>

        {error && <Alert type="error" showIcon title={error} className="mb-4" />}

        <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
          <AntInput
            type="password"
            name="currentPassword"
            label="Temporary password"
            placeholder="The password you were given"
            preIconAnt={<LockOutlined className="text-slate-400" />}
            reqMsg="Please enter the temporary password"
            autoComplete="current-password"
          />
          <AntInput
            type="password"
            name="newPassword"
            label="New password"
            placeholder="At least 10 characters"
            preIconAnt={<LockOutlined className="text-slate-400" />}
            rules={passwordRules("Please choose a new password")}
            extra={PASSWORD_HINT}
            autoComplete="new-password"
          />
          <AntInput
            type="password"
            name="confirmPassword"
            label="Confirm new password"
            placeholder="Type it again"
            preIconAnt={<LockOutlined className="text-slate-400" />}
            rules={[
              { required: true, message: "Please confirm your new password" },
              ({ getFieldValue }) => ({
                validator: (_, value) =>
                  !value || value === getFieldValue("newPassword")
                    ? Promise.resolve()
                    : Promise.reject(new Error("The passwords don't match")),
              }),
            ]}
            autoComplete="new-password"
          />
          <Button type="primary" htmlType="submit" size="large" block loading={saving} className="bg-brand-primary!">
            Save password &amp; continue
          </Button>
        </Form>

        <button type="button" className={styles.signOut} onClick={logout}>
          <LogoutOutlined /> Sign out
        </button>
      </div>
    </div>
  );
}
