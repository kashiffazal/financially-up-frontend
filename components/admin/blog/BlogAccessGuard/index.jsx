"use client";

import React from "react";
import Link from "next/link";
import { Result, Button } from "antd";
import { PermissionGuard } from "@/components/admin/PermissionGuard";

/**
 * Shows the blog admin screens only to users with `blog.view`
 * (changes additionally need `blog.manage`, checked inside each screen and by the API).
 */
export default function BlogAccessGuard({ children }) {
  return (
    <PermissionGuard
      permission="blog.view"
      fallback={
        <Result
          status="403"
          title="No access to the blog"
          subTitle="Ask an administrator to give your role the “View Blog Posts” permission."
          extra={
            <Link href="/admin/dashboard">
              <Button type="primary" className="bg-brand-primary!">
                Back to Dashboard
              </Button>
            </Link>
          }
        />
      }
    >
      {children}
    </PermissionGuard>
  );
}
