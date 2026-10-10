"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
  MailOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import PermissionGuard from "@/components/admin/PermissionGuard";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor } from "@/components/admin/FormLogModule/constants";
import NewsletterExport from "@/components/admin/NewsletterExport";

/**
 * ============================================================================
 * Newsletter Subscribers Admin Page (`app/admin/newsletter/page.js`)
 * ============================================================================
 * Emails collected by the website blog's newsletter forms.
 * - Export card: Excel / CSV for all time, a month, a year or a date range
 * - <FormLogModule />: status tabs, search, live updates and Unsubscribe /
 *   Re-subscribe (records are never deleted)
 */

const SUBSCRIBER_STATUS_LIST = [
  { key: "Subscribed", label: "Subscribed", color: "success", icon: <CheckCircleOutlined /> },
  { key: "Unsubscribed", label: "Unsubscribed", color: "default", icon: <StopOutlined /> },
];

const SOURCE_LABELS = { blog_listing: "Blog page", blog_article: "Blog article" };

const formatDate = (value) => (value ? new Date(value).toLocaleDateString("en-AU") : "—");
const formatDateTime = (value) => (value ? new Date(value).toLocaleString("en-AU") : "—");

// Export: dates as readable text so Excel / CSV show them the way the table does
const EXPORT_COLUMNS = [
  { header: "Email", key: "email" },
  { header: "Status", key: "status" },
  { header: "Subscribed On", key: (r) => formatDateTime(r.subscribedAt) },
  { header: "Unsubscribed On", key: (r) => (r.unsubscribedAt ? formatDateTime(r.unsubscribedAt) : "") },
  { header: "Signed Up From", key: (r) => SOURCE_LABELS[r.source] || "Website" },
  { header: "Page", key: "sourcePage" },
  { header: "Last Changed By", key: "updatedByName" },
];

export default function NewsletterAdminPage() {
  const columns = useMemo(
    () => [
      {
        title: "Email",
        key: "email",
        dataIndex: "email",
        sorter: (a, b) => a.email.localeCompare(b.email),
        render: (email) => (
          <a href={`mailto:${email}`} className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-zinc-100 hover:text-brand-primary">
            <MailOutlined className="text-slate-400" /> {email}
          </a>
        ),
      },
      {
        title: "Signed Up From",
        key: "source",
        dataIndex: "source",
        render: (source, r) => (
          <div>
            <div className="text-xs text-slate-700 dark:text-zinc-300">{SOURCE_LABELS[source] || "Website"}</div>
            {r.sourcePage && <div className="max-w-xs truncate font-mono text-[11px] text-slate-400">{r.sourcePage}</div>}
          </div>
        ),
      },
      {
        title: "Subscribed On",
        key: "subscribedAt",
        dataIndex: "subscribedAt",
        width: 140,
        sorter: (a, b) => new Date(a.subscribedAt) - new Date(b.subscribedAt),
        render: (date) => <span className="text-[12px] text-slate-500 dark:text-zinc-400">{formatDate(date)}</span>,
      },
      {
        title: "Unsubscribed On",
        key: "unsubscribedAt",
        dataIndex: "unsubscribedAt",
        width: 150,
        render: (date) => <span className="text-[12px] text-slate-500 dark:text-zinc-400">{formatDate(date)}</span>,
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        width: 130,
        render: (status) => (
          <Tag color={getStatusColor(status, SUBSCRIBER_STATUS_LIST)} className="font-semibold text-[11.5px] rounded-pill">
            {status}
          </Tag>
        ),
      },
    ],
    []
  );

  const customFilterCols = useMemo(
    () => [
      { label: "Email", value: "email" },
      { label: "Page", value: "sourcePage" },
    ],
    []
  );

  const renderViewDetails = (data, layout) => (
    <Descriptions
      bordered
      size="small"
      layout={layout}
      title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Subscriber</span>}
      column={{ xs: 1, sm: 2, md: 2 }}
    >
      <Descriptions.Item label="Email">
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </Descriptions.Item>
      <Descriptions.Item label="Status">
        <Tag color={getStatusColor(data.status, SUBSCRIBER_STATUS_LIST)} className="rounded-pill">
          {data.status}
        </Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Subscribed On">{formatDateTime(data.subscribedAt)}</Descriptions.Item>
      <Descriptions.Item label="Unsubscribed On">{formatDateTime(data.unsubscribedAt)}</Descriptions.Item>
      <Descriptions.Item label="Signed Up From">{SOURCE_LABELS[data.source] || "Website"}</Descriptions.Item>
      <Descriptions.Item label="Page">{data.sourcePage || "—"}</Descriptions.Item>
      <Descriptions.Item label="Last Changed By">{data.updatedByName || "—"}</Descriptions.Item>
      <Descriptions.Item label="Last Updated">{formatDateTime(data.updatedAt)}</Descriptions.Item>
    </Descriptions>
  );

  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={<NotificationOutlined />}
        title="Newsletter Subscribers"
        description="People who joined the newsletter from the website blog. Export the list, or unsubscribe and re-subscribe people."
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
            title: <span className="font-semibold text-brand-primary dark:text-emerald-400">Newsletter Subscribers</span>,
          },
        ]}
      />

      <PermissionGuard permission="newsletter.view">
        <NewsletterExport columns={EXPORT_COLUMNS} />
      </PermissionGuard>

      <FormLogModule
        endpoint="/newsletter-subscribers"
        statusList={SUBSCRIBER_STATUS_LIST}
        defaultStatus="Subscribed"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={EXPORT_COLUMNS}
        filenamePrefix="Newsletter_Subscribers"
        filterPlaceholder="Search by email..."
        viewDetailsTitle={(d) => d.email}
        viewDetailsIcon={<NotificationOutlined />}
        renderViewDetails={renderViewDetails}
        queryLimit={50000}
      />
    </div>
  );
}
