"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  BankOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * ============================================================================
 * Company Registration (Legacy Database) Admin Page (`app/admin/company-registration/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function LegacyCompanyRegistrationAdminPage() {
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
            {record.referenceNumber || record.refNumber || `COMP-${record.id}`}
          </span>
        ),
      },
      {
        title: "Company Name",
        key: "companyName",
        sorter: (a, b) => (a.CompanyName || a.companyName || "").localeCompare(b.CompanyName || b.companyName || ""),
        render: (_, record) => {
          const compName = record.CompanyName || record.companyName || "N/A";
          const state = record.State || record.state || "Australia";

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {compName}
              </div>
              <div className="text-xs text-slate-400 dark:text-zinc-500">
                State: {state}
              </div>
            </div>
          );
        },
      },
      {
        title: "Contact Person",
        key: "contactPerson",
        sorter: (a, b) => {
          const nameA = `${a.fname || ""} ${a.lname || ""}`;
          const nameB = `${b.fname || ""} ${b.lname || ""}`;
          return nameA.localeCompare(nameB);
        },
        render: (_, record) => {
          const fullName =
            `${record.fname || ""} ${record.mname || ""} ${record.lname || ""}`.replace(/\s+/g, " ").trim() ||
            record.contactName ||
            "-";

          return (
            <div className="font-medium text-slate-800 dark:text-zinc-200 text-xs">
              {fullName}
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
      { label: "Company Name", value: "CompanyName" },
      { label: "Contact Name", value: "fname" },
      { label: "Email Address", value: "email" },
      { label: "Phone Number", value: "phone" },
      { label: "State", value: "State" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Company Name", key: "CompanyName" },
      { header: "First Name", key: "fname" },
      { header: "Last Name", key: "lname" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "phone" },
      { header: "State", key: "State" },
      { header: "Status", key: "status" },
      { header: "Submitted Date", key: "createdAt" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // STRUCTURED VIEW DETAILS MODAL CONTENT
  // --------------------------------------------------------------------------
  const renderViewDetails = (data, layout) => {
    const contactFullName =
      `${data.fname || ""} ${data.mname || ""} ${data.lname || ""}`.replace(/\s+/g, " ").trim() ||
      data.contactName ||
      "N/A";

    return (
      <div className="space-y-4">
        {/* Section 1: Overview */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Registration Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `COMP-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(data.status)} className="rounded-pill">
              {data.status || "New Query"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Submission Date">
            {data.createdAt ? new Date(data.createdAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 2: Company Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Company Details</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Company Name" span={2}>
            <strong>{data.CompanyName || data.companyName || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="State">
            {data.State || data.state || "Australia"}
          </Descriptions.Item>
          <Descriptions.Item label="Contact Person">{contactFullName}</Descriptions.Item>
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.email}`} className="text-brand-primary underline">
              {data.email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.phone || "-"}</Descriptions.Item>
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
        icon={<BankOutlined />}
        title="Company Registrations (Classic)"
        description="Legacy database records for Australian Proprietary Limited company applications and lodgements."
        formPath="/resources/registration-forms/company-registration"
        formTitle="Company Registration Form"
        shareDefaultMessage="Dear client, please complete your Australian Company Registration application using the secure link below."
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
                Company Registration (Classic)
              </span>
            ),
          },
        ]}
      />

      {/* 2. Company Status Log Module */}
      <FormLogModule
        endpoint="/company-registrations"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Company_Registrations_Classic"
        filterPlaceholder="Search company registrations..."
        viewDetailsTitle={(d) => `${d.CompanyName || "Company"} - Registration Details`}
        viewDetailsIcon={<BankOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
