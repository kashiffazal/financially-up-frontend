"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  AuditOutlined,
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
 * SMSF Registrations Admin Page (`app/admin/smsf-registrations/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function SMSFRegistrationsAdminPage() {
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
            {record.referenceNumber || record.refNumber || `SMSF-${record.id}`}
          </span>
        ),
      },
      {
        title: "Fund Name & Structure",
        key: "fundName",
        sorter: (a, b) => (a.nameOfFund || "").localeCompare(b.nameOfFund || ""),
        render: (_, record) => {
          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {record.nameOfFund || "Unnamed SMSF"}
              </div>
              <div className="text-xs text-brand-primary font-medium">
                {record.structureOfFund || "Individual / Corporate Trustee"}
              </div>
            </div>
          );
        },
      },
      {
        title: "Founder / Contact",
        key: "founder",
        sorter: (a, b) => (a.Founder || "").localeCompare(b.Founder || ""),
        render: (_, record) => (
          <div className="font-medium text-slate-800 dark:text-zinc-200 text-xs">
            {record.Founder || record.founder || record.name || "-"}
          </div>
        ),
      },
      {
        title: "Phone Number",
        key: "mobileNumber",
        render: (_, record) => {
          const phone = record.mobileNumber || record.phone || record.mobile;
          if (!phone) return <span className="text-slate-400 text-xs">-</span>;

          return (
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-300 text-xs">
              <PhoneOutlined className="text-slate-400" />
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
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
      { label: "Fund Name", value: "nameOfFund" },
      { label: "Fund Structure", value: "structureOfFund" },
      { label: "Founder", value: "Founder" },
      { label: "Phone Number", value: "mobileNumber" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Fund Name", key: "nameOfFund" },
      { header: "Structure", key: "structureOfFund" },
      { header: "Founder", key: "Founder" },
      { header: "Mobile", key: "mobileNumber" },
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
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">SMSF Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `SMSF-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(data.status)} className="rounded-pill">
              {data.status || "New Query"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Submission Date">
            {data.createdAt ? new Date(data.createdAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Fund Structure">
            {data.structureOfFund || "Individual / Corporate Trustee"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 2: Fund Identification */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Fund Identification</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Fund Name" span={2}>
            <strong>{data.nameOfFund || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="Establishment State">
            {data.state || "Australia"}
          </Descriptions.Item>
          <Descriptions.Item label="Founder / Settlor">
            {data.Founder || "Independent Professional"}
          </Descriptions.Item>
          <Descriptions.Item label="Contact Mobile">
            {data.mobileNumber || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Email Address">
            {data.email ? (
              <a href={`mailto:${data.email}`} className="text-brand-primary underline">
                {data.email}
              </a>
            ) : (
              "-"
            )}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Trustees and Members */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Trustees &amp; Member Structure</span>}
          column={1}
        >
          <Descriptions.Item label="Corporate Trustee Name">
            {data.corporateTrusteeName || "N/A (Individual Trustees)"}
          </Descriptions.Item>
          <Descriptions.Item label="Members / Trustees">
            {data.members || data.trustees || "Refer to application attachments"}
          </Descriptions.Item>
          {data.notes && (
            <Descriptions.Item label="Additional Notes">
              {data.notes}
            </Descriptions.Item>
          )}
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
        icon={<AuditOutlined />}
        title="SMSF Registrations"
        description="Manage Self-Managed Super Fund setups, corporate trustee declarations, and member registrations."
        formPath="/resources/registration-forms/smsf-registrations"
        formTitle="SMSF Registration Form"
        shareDefaultMessage="Dear client, please complete your Australian Self-Managed Super Fund (SMSF) application using the secure link below."
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
            title: <span className="text-slate-500">Superannuation</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                SMSF Registrations
              </span>
            ),
          },
        ]}
      />

      {/* 2. SMSF Status Log Module */}
      <FormLogModule
        endpoint="/smsf-registrations"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="SMSF_Registrations"
        filterPlaceholder="Search SMSF registrations..."
        viewDetailsTitle={(d) => `${d.nameOfFund || "SMSF"} - Registration Details`}
        viewDetailsIcon={<AuditOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
