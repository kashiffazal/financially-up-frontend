"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Result } from "antd";
import { ArrowLeftOutlined, DashboardOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./AccessDenied.module.css";

/**
 * Shown by the admin layout instead of a page the signed-in user has no
 * permission for (e.g. a URL typed directly). The data behind the page is also
 * blocked by the API, so nothing is loaded.
 */
export default function AccessDenied() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <Result
        icon={
          <span className={styles.icon}>
            <LockOutlined />
          </span>
        }
        title="Access denied"
        subTitle="You don't have permission to view this page. If you need access, ask an administrator to update your role."
        extra={[
          <Button key="back" icon={<ArrowLeftOutlined />} onClick={() => router.back()}>
            Go back
          </Button>,
          <Link key="dashboard" href="/admin/dashboard">
            <Button type="primary" icon={<DashboardOutlined />} className="bg-brand-primary!">
              Go to Dashboard
            </Button>
          </Link>,
        ]}
      />
    </div>
  );
}
