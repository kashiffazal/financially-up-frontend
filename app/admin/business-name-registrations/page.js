"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  ShopOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  BankOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * ============================================================================
 * Business Name Registrations Admin Page (`app/admin/business-name-registrations/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function BusinessNameRegistrationsAdminPage() {
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
            {record.referenceNumber || record.refNumber || `BN-${record.id}`}
          </span>
        ),
      },
      {
        title: "Proposed Business Name",
        key: "businessName",
        sorter: (a, b) => (a.ProposedBusinessName || a.proposedBusinessName || "").localeCompare(b.ProposedBusinessName || b.proposedBusinessName || ""),
        render: (_, record) => {
          const bName = record.ProposedBusinessName || record.proposedBusinessName || "N/A";
          const period = record.period || record.registrationPeriod || "1 Year";

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {bName}
              </div>
              <div className="text-xs text-slate-400 dark:text-zinc-500">
                Duration: {period}
              </div>
            </div>
          );
        },
      },
      {
        title: "Owner / Entity",
        key: "ownerName",
        sorter: (a, b) => (a.Name || "").localeCompare(b.Name || ""),
        render: (_, record) => {
          const owner = record.Name || record.ownerName || record.applicantName || "-";
          const abn = record.ABN || record.abn;

          return (
            <div>
              <div className="font-medium text-slate-800 dark:text-zinc-200 text-xs">
                {owner}
              </div>
              {abn && (
                <div className="flex items-center gap-1 font-mono text-[11px] text-brand-primary">
                  <BankOutlined className="text-[10px]" /> ABN: {abn}
                </div>
              )}
            </div>
          );
        },
      },
      {
        title: "Contact Details",
        key: "contact",
        render: (_, record) => {
          const email = record.email || record.Email;
          const phone = record.PhoneNumber || record.phone || record.mobile;

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
      { label: "Proposed Business Name", value: "ProposedBusinessName" },
      { label: "Owner Name", value: "Name" },
      { label: "ABN", value: "ABN" },
      { label: "Email Address", value: "email" },
      { label: "Phone Number", value: "PhoneNumber" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Proposed Business Name", key: "ProposedBusinessName" },
      { header: "Owner Name", key: "Name" },
      { header: "ABN", key: "ABN" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "PhoneNumber" },
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
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Application Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `BN-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(data.status)} className="rounded-pill">
              {data.status || "New Query"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Submission Date">
            {data.createdAt ? new Date(data.createdAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Registration Period">
            {data.period || data.registrationPeriod || "1 Year"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 2: Business Name Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Business Name Details</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Proposed Name" span={2}>
            <strong className="text-base text-brand-primary">{data.ProposedBusinessName || data.proposedBusinessName || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="State / Territory">
            {data.state || "National (Australia-wide)"}
          </Descriptions.Item>
          <Descriptions.Item label="ABN / ACN of Holder">
            <span className="font-mono font-bold">{data.ABN || data.abn || "None provided"}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Owner / Entity Name" span={2}>
            {data.Name || data.ownerName || "N/A"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Contact & Address */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Contact &amp; Principal Place of Business</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.email}`} className="text-brand-primary underline">
              {data.email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.PhoneNumber || data.phone || "-"}</Descriptions.Item>
          <Descriptions.Item label="Principal Address" span={3}>
            {data.address || data.streetAddress || "Refer to application attachments"}
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
        icon={<ShopOutlined />}
        title="Business Name Registrations"
        description="Review ASIC business name reservation applications, ownership details, and renewal terms."
        formPath="/resources/registration-forms/business-name-registrations"
        formTitle="Business Name Form"
        shareDefaultMessage="Dear client, please complete your Australian Business Name Registration application using the secure link below."
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
            title: <span className="text-slate-500">Registrations</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Business Name Registrations
              </span>
            ),
          },
        ]}
      />

      {/* 2. Business Name Status Log Module */}
      <FormLogModule
        endpoint="/business-name-registrations"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Business_Names"
        filterPlaceholder="Search business names..."
        viewDetailsTitle={(d) => `${d.ProposedBusinessName || "Business Name"} - Registration Details`}
        viewDetailsIcon={<ShopOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
