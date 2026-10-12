"use client";

import React from "react";
import Link from "next/link";
import { Alert } from "antd";
import { HomeOutlined, SendOutlined } from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import EmailSettings from "@/components/admin/EmailSettings";

/**
 * Settings > Email Sending (/admin/settings/email)
 * The mailbox the portal sends email from (SMTP accounts, test, default) and who
 * receives form submissions. Access: settings.view to see, settings.update to change
 * (checked by the admin layout and by the API).
 */
export default function EmailSettingsPage() {
  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={<SendOutlined />}
        title="Email Sending"
        description="The mailbox the portal sends every email from, and who receives new applications and website enquiries."
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="!text-[12px]" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          { title: <Link href="/admin/settings">Settings</Link> },
          { title: <span className="font-semibold text-brand-primary dark:text-emerald-400">Email Sending</span> },
        ]}
      />

      {/* Compact one-line note */}
      <Alert
        type="info"
        showIcon
        className="py-2! text-[12.5px]!"
        title="Each section saves on its own. A new default account is only accepted after its test email is delivered."
      />

      <EmailSettings />
    </div>
  );
}
