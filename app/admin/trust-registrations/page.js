"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  ApartmentOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * ============================================================================
 * Trust Registrations Admin Page (`app/admin/trust-registrations/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function TrustRegistrationsAdminPage() {
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
            {record.referenceNumber || record.refNumber || `TRU-${record.id}`}
          </span>
        ),
      },
      {
        title: "Trust Name & Type",
        key: "trustName",
        sorter: (a, b) => (a.nameOfTrust || "").localeCompare(b.nameOfTrust || ""),
        render: (_, record) => {
          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {record.nameOfTrust || "Unnamed Trust"}
              </div>
              <div className="text-xs text-brand-primary font-medium">
                {record.TypeOfTrust || "Discretionary Trust"}
              </div>
            </div>
          );
        },
      },
      {
        title: "Trustee Name",
        key: "trusteeName",
        sorter: (a, b) => {
          const nameA = `${a.fname || ""} ${a.lname || ""}`;
          const nameB = `${b.fname || ""} ${b.lname || ""}`;
          return nameA.localeCompare(nameB);
        },
        render: (_, record) => {
          const fullName =
            `${record.fname || ""} ${record.mname || ""} ${record.lname || ""}`.replace(/\s+/g, " ").trim() ||
            record.trusteeName ||
            "-";

          return (
            <div className="font-medium text-slate-800 dark:text-zinc-200 text-xs">
              {fullName}
            </div>
          );
        },
      },
      {
        title: "Jurisdiction / State",
        dataIndex: "state",
        key: "state",
        render: (val) => (
          <span className="font-medium text-xs text-slate-700 dark:text-zinc-300">
            {val || "Australia"}
          </span>
        ),
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
      { label: "Trust Name", value: "nameOfTrust" },
      { label: "Trust Type", value: "TypeOfTrust" },
      { label: "Trustee Name", value: "fname" },
      { label: "State", value: "state" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Trust Name", key: "nameOfTrust" },
      { header: "Trust Type", key: "TypeOfTrust" },
      { header: "Trustee First Name", key: "fname" },
      { header: "Trustee Middle Name", key: "mname" },
      { header: "Trustee Last Name", key: "lname" },
      { header: "State", key: "state" },
      { header: "Status", key: "status" },
      { header: "Submitted Date", key: "createdAt" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // STRUCTURED VIEW DETAILS MODAL CONTENT
  // --------------------------------------------------------------------------
  const renderViewDetails = (data, layout) => {
    const trusteeFullName =
      `${data.fname || ""} ${data.mname || ""} ${data.lname || ""}`.replace(/\s+/g, " ").trim() ||
      data.trusteeName ||
      "N/A";

    return (
      <div className="space-y-4">
        {/* Section 1: Overview */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Trust Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `TRU-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(data.status)} className="rounded-pill">
              {data.status || "New Query"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Submission Date">
            {data.createdAt ? new Date(data.createdAt).toLocaleString("en-AU") : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="State of Establishment">
            {data.state || "Australia"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 2: Trust Structure */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Trust Structure &amp; Purpose</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Name of Trust" span={2}>
            <strong>{data.nameOfTrust || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="Type of Trust">
            <span className="font-semibold text-brand-primary">{data.TypeOfTrust || "Discretionary Trust"}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Settlor Name">
            {data.settlorName || "Independent Professional Settlor"}
          </Descriptions.Item>
          <Descriptions.Item label="Settlement Sum">
            {data.settlementSum ? `$${data.settlementSum}` : "$10.00"}
          </Descriptions.Item>
          <Descriptions.Item label="Appointor / Principal">
            {data.appointorName || trusteeFullName}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Trustee & Beneficiary Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Trustee &amp; Beneficiaries</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Trustee Full Name" span={2}>{trusteeFullName}</Descriptions.Item>
          <Descriptions.Item label="Trustee Type">
            {data.trusteeType || "Individual Trustee"}
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
          <Descriptions.Item label="Phone Number">{data.phone || "-"}</Descriptions.Item>
          <Descriptions.Item label="Primary Beneficiaries">
            {data.beneficiaries || "Family Members & Related Entities"}
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
        icon={<ApartmentOutlined />}
        title="Trust Registrations"
        description="Manage Discretionary, Unit, and Hybrid trust establishment applications and deed records."
        formPath="/resources/registration-forms/trust-registrations"
        formTitle="Trust Registration Form"
        shareDefaultMessage="Dear client, please complete your Australian Trust Registration application using the secure link below."
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
                Trust Registrations
              </span>
            ),
          },
        ]}
      />

      {/* 2. Trust Status Log Module */}
      <FormLogModule
        endpoint="/trust-registrations"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Trust_Registrations"
        filterPlaceholder="Search trust registrations..."
        viewDetailsTitle={(d) => `${d.nameOfTrust || "Trust"} - Registration Details`}
        viewDetailsIcon={<ApartmentOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
