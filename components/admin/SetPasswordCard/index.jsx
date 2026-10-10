"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form, Button, Result, Spin } from "antd";
import { LockOutlined, KeyOutlined } from "@ant-design/icons";
import { HTTP } from "@/services";
import { AntInput } from "@/services/antdFields";
import { useTheme } from "@/app/ThemeProvider";
import { PASSWORD_HINT, passwordRules } from "@/lib/passwordPolicy";
import styles from "./SetPasswordCard.module.css";

/**
 * Public page opened from the "Set your password" / "Reset your password"
 * emails (/admin/set-password?token=...). Checks the one-time link, lets the
 * person choose a password, then sends them to the login page.
 *
 * @param {string} token - from the URL
 */
export default function SetPasswordCard({ token }) {
  const { isDark } = useTheme();
  const [form] = Form.useForm();
  const [state, setState] = useState({ status: "checking", info: null, message: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    const check = async () => {
      const res = token ? await HTTP("GET", `/auth/password-token/${encodeURIComponent(token)}`, {}, false, true) : null;
      if (!active) return;
      setState(
        res?.success
          ? { status: "ready", info: res.data, message: "" }
          : {
              status: "invalid",
              info: null,
              message: res?.message || "This link is invalid or has expired. Use Forgot password on the login page to get a new one.",
            }
      );
    };
    check();
    return () => {
      active = false;
    };
  }, [token]);

  const handleFinish = async (values) => {
    setSaving(true);
    const res = await HTTP("POST", "/auth/set-password", { token, password: values.password }, false, false);
    setSaving(false);
    if (res?.success) setState({ status: "done", info: state.info, message: res.message });
  };

  const isSetup = state.info?.purpose === "setup";

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Image
          src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
          alt="Financially Up"
          width={170}
          height={40}
          className={styles.logo}
          priority
        />

        {state.status === "checking" && (
          <div className={styles.center}>
            <Spin />
            <p className={styles.text}>Checking your link…</p>
          </div>
        )}

        {state.status === "invalid" && (
          <Result
            status="warning"
            title="This link can't be used"
            subTitle={state.message}
            extra={
              <Link href="/admin/login">
                <Button type="primary" className="bg-brand-primary!">
                  Go to sign in
                </Button>
              </Link>
            }
          />
        )}

        {state.status === "done" && (
          <Result
            status="success"
            title="Password saved"
            subTitle="You can now sign in with your email and new password."
            extra={
              <Link href="/admin/login">
                <Button type="primary" className="bg-brand-primary!">
                  Sign in
                </Button>
              </Link>
            }
          />
        )}

        {state.status === "ready" && (
          <>
            <div className={styles.icon}>
              <KeyOutlined />
            </div>
            <h1 className={styles.title}>{isSetup ? "Set your password" : "Choose a new password"}</h1>
            <p className={styles.text}>
              {isSetup ? `Welcome${state.info?.firstName ? `, ${state.info.firstName}` : ""}! ` : ""}
              This will be the password for <strong>{state.info?.email}</strong>.
            </p>

            <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
              <AntInput
                type="password"
                name="password"
                label="New password"
                placeholder="At least 10 characters"
                preIconAnt={<LockOutlined className="text-slate-400" />}
                rules={passwordRules("Please choose a password")}
                extra={PASSWORD_HINT}
                autoComplete="new-password"
              />
              <AntInput
                type="password"
                name="confirmPassword"
                label="Confirm password"
                placeholder="Type it again"
                preIconAnt={<LockOutlined className="text-slate-400" />}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator: (_, value) =>
                      !value || value === getFieldValue("password")
                        ? Promise.resolve()
                        : Promise.reject(new Error("The passwords don't match")),
                  }),
                ]}
                autoComplete="new-password"
              />
              <Button type="primary" htmlType="submit" size="large" block loading={saving} className="bg-brand-primary!">
                Save password
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}
