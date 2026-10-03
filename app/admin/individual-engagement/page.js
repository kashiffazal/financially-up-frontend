"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * ============================================================================
 * Individual Engagement (Legacy Database) Admin Page (`app/admin/individual-engagement/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function LegacyIndividualEngagementAdminPage() {
  // --------------------------------------------------------------------------
  // TABLE COLUMNS CONFIGURATION
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "Reference / ID",
        key: "referenceNumber",
        width: 140,
        render: (_, record) => (
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
            {record.referenceNumber || record.refNumber || `ENG-${record.id}`}
          </span>
        ),
      },
      {
        title: "Client Name",
        key: "clientName",
        sorter: (a, b) => (a.FullName || a.fullName || a.name || "").localeCompare(b.FullName || b.fullName || b.name || ""),
        render: (_, record) => {
          const name =
            record.FullName ||
            record.fullName ||
            record.name ||
            `${record.firstName || ""} ${record.lastName || ""}`.trim() ||
            "N/A";
          const service = record.serviceType || record.services || "Individual Tax & Engagement";

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {name}
              </div>
              <div className="text-xs text-brand-primary font-medium">
                {service}
              </div>
            </div>
          );
        },
      },
      {
        title: "Contact Details",
        key: "contact",
        render: (_, record) => {
          const email = record.email || record.Email;
          const phone = record.phone || record.Phone || record.mobile;

          return (
            <div className="space-y-0.5 text-xs">
              {email && (
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-300">
                  <MailOutlined className="text-slate-400" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:underline text-slate-600 dark:text-zinc-300"
                  >
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-400">
                  <PhoneOutlined className="text-slate-400" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:underline text-slate-500 dark:text-zinc-400"
                  >
                    {phone}
                  </a>
                </div>
              )}
            </div>
          );
        },
      },
      {
        title: "Submitted Date",
        dataIndex: "createdAt",
        key: "createdAt",
        sorter: (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0),
        render: (val) => {
          if (!val) return "-";
          const dateObj = new Date(val);
          return (
            <div className="text-xs">
              <div className="font-medium text-slate-700 dark:text-zinc-300">
                {dateObj.toLocaleDateString("en-AU")}
              </div>
              <div className="text-[10px] text-slate-400">
                {dateObj.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          );
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        align: "center",
        render: (status) => (
          <Tag
            color={getStatusColor(status, STANDARD_FORM_STATUS_LIST)}
            className="rounded-pill px-2.5 py-0.5 font-medium text-xs border-0"
          >
            {status || "New Query"}
          </Tag>
        ),
      },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // CUSTOM FILTERS & EXPORT COLUMNS
  // --------------------------------------------------------------------------
  const customFilterCols = useMemo(() => {
    return [
      { label: "Client Name", value: "FullName" },
      { label: "Email Address", value: "email" },
      { label: "Phone Number", value: "phone" },
      { label: "Service Type", value: "serviceType" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Client Name", key: "FullName" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "phone" },
      { header: "Service Type", key: "serviceType" },
      { header: "Status", key: "status" },
      { header: "Submitted Date", key: "createdAt" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // STRUCTURED VIEW DETAILS MODAL CONTENT
  // --------------------------------------------------------------------------
  const renderViewDetails = (data, layout) => {
    return (
      <div className="space-y-4">
        {/* Section 1: Overview */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Engagement Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `ENG-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(data.status)} className="rounded-pill">
              {data.status || "New Query"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Submission Date">
            {data.createdAt ? new Date(data.createdAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Services Selected">
            {data.serviceType || data.services || "Individual Tax Preparation"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 2: Client Profile */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Client Profile</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Full Name" span={2}>
            <strong>{data.FullName || data.fullName || data.name || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="Date of Birth">
            {data.dob || data.dateOfBirth || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.email}`} className="text-brand-primary underline">
              {data.email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.phone || "-"}</Descriptions.Item>
          <Descriptions.Item label="Residential Address" span={3}>
            {data.address || "Refer to application attachments"}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER MAIN PAGE
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-6 pb-12">
      {/* 1. Standardized Admin Page Title & Share Header */}
      <PageTitle
        icon={<UserOutlined />}
        title="Individual Engagements (Classic)"
        description="Legacy database records for individual client engagements, tax returns, and advisor authorities."
        formPath="/resources/engagement-forms/individual-engagement-form"
        formTitle="Individual Engagement Form"
        shareDefaultMessage="Dear client, please complete your Individual Client Engagement application using the secure link below."
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
            title: <span className="text-slate-500">Engagements</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Individual Engagement (Classic)
              </span>
            ),
          },
        ]}
      />

      {/* 2. Individual Status Log Module */}
      <FormLogModule
        endpoint="/individual-engagement"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Individual_Engagements_Classic"
        filterPlaceholder="Search individual engagements..."
        viewDetailsTitle={(d) => `${d.FullName || d.name || "Individual"} - Engagement Details`}
        viewDetailsIcon={<UserOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
