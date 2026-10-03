"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  FileProtectOutlined,
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
 * GST Registrations Admin Page (`app/admin/gst-registrations/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function GSTRegistrationsAdminPage() {
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
            {record.referenceNumber || record.refNumber || `GST-${record.id}`}
          </span>
        ),
      },
      {
        title: "Applicant / Business",
        key: "businessName",
        sorter: (a, b) => {
          const nameA = a.businessName || `${a.FirstName || ""} ${a.LastName || ""}`;
          const nameB = b.businessName || `${b.FirstName || ""} ${b.LastName || ""}`;
          return nameA.localeCompare(nameB);
        },
        render: (_, record) => {
          const primaryName =
            record.businessName ||
            record.entityName ||
            `${record.FirstName || record.firstName || ""} ${record.LastName || record.lastName || ""}`.trim() ||
            "N/A";
          const subTitle = record.businessStructure || record.structure || "GST Application";

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {primaryName}
              </div>
              <div className="text-xs text-slate-400 dark:text-zinc-500">
                {subTitle}
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
        title: "ABN & Structure",
        key: "abnStructure",
        render: (_, record) => {
          const abn = record.abn || record.ABN;
          const structure = record.businessStructure || record.structure;

          return (
            <div className="text-xs space-y-0.5">
              {abn ? (
                <div className="flex items-center gap-1.5">
                  <BankOutlined className="text-brand-primary" />
                  <span className="font-mono font-medium text-slate-800 dark:text-zinc-200">
                    {abn}
                  </span>
                </div>
              ) : (
                <span className="text-slate-400 italic">No ABN provided</span>
              )}
              {structure && (
                <div className="text-[11px] text-slate-500">
                  {structure}
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
      { label: "Business / Entity Name", value: "businessName" },
      { label: "Applicant Name", value: "FirstName" },
      { label: "Email Address", value: "email" },
      { label: "Phone Number", value: "phone" },
      { label: "ABN", value: "abn" },
      { label: "Business Structure", value: "businessStructure" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Business Name", key: "businessName" },
      { header: "First Name", key: "FirstName" },
      { header: "Last Name", key: "LastName" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "phone" },
      { header: "ABN", key: "abn" },
      { header: "Business Structure", key: "businessStructure" },
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
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Registration Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `GST-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(data.status)} className="rounded-pill">
              {data.status || "New Query"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Submission Date">
            {data.createdAt ? new Date(data.createdAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Last Updated">
            {data.updatedAt ? new Date(data.updatedAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 2: Business & Entity Profile */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Business &amp; Tax Structure</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Business Name" span={2}>
            <strong>{data.businessName || data.entityName || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="Business Structure">
            {data.businessStructure || data.structure || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="ABN">
            <span className="font-mono font-bold text-brand-primary">{data.abn || data.ABN || "Not Registered"}</span>
          </Descriptions.Item>
          <Descriptions.Item label="GST Required From">
            {data.gstDate || data.startDate || "Immediate"}
          </Descriptions.Item>
          <Descriptions.Item label="Accounting Method">
            {data.accountingMethod || "Cash"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Applicant Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Applicant / Authorised Contact</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="First Name">{data.FirstName || data.firstName || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{data.LastName || data.lastName || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Position / Role">{data.position || data.role || "Director / Owner"}</Descriptions.Item>
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.email || data.Email}`} className="text-brand-primary underline">
              {data.email || data.Email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.phone || data.Phone || "-"}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">{data.dob || data.DateOfBirth || "-"}</Descriptions.Item>
        </Descriptions>

        {/* Section 4: Address Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Business Address</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Street Address" span={3}>
            {data.streetAddress || data.address || data.StreetAddress || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Suburb">{data.suburb || data.Suburb || "-"}</Descriptions.Item>
          <Descriptions.Item label="State">{data.state || data.State || "-"}</Descriptions.Item>
          <Descriptions.Item label="Postcode">{data.postcode || data.Postcode || "-"}</Descriptions.Item>
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
        icon={<FileProtectOutlined />}
        title="GST Registrations"
        description="Manage Australian Goods and Services Tax (GST) applications and business entity registrations."
        formPath="/resources/registration-forms/gst-registrations"
        formTitle="GST Registration Form"
        shareDefaultMessage="Dear client, please complete your Australian GST Registration application using the secure link below."
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
                GST Registrations
              </span>
            ),
          },
        ]}
      />

      {/* 2. GST Status Log Module */}
      <FormLogModule
        endpoint="/gst-registrations"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="GST_Registrations"
        filterPlaceholder="Search GST registrations..."
        viewDetailsTitle={(d) => `${d.businessName || d.FirstName || "GST"} - Registration Details`}
        viewDetailsIcon={<FileProtectOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
