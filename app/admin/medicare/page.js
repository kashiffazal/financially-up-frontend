"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  SafetyCertificateOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * ============================================================================
 * Medicare Applications Admin Page (`app/admin/medicare/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function MedicareAdminPage() {
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
            {record.referenceNumber || record.refNumber || `MED-${record.id}`}
          </span>
        ),
      },
      {
        title: "Applicant Name",
        key: "applicantName",
        sorter: (a, b) => {
          const nameA = `${a.FirstName || a.firstName || ""} ${a.LastName || a.lastName || ""}`;
          const nameB = `${b.FirstName || b.firstName || ""} ${b.LastName || b.lastName || ""}`;
          return nameA.localeCompare(nameB);
        },
        render: (_, record) => {
          const fullName =
            `${record.FirstName || record.firstName || ""} ${record.LastName || record.lastName || ""}`.trim() ||
            record.name ||
            "N/A";
          const location = [record.Suburb || record.suburb, record.State || record.state]
            .filter(Boolean)
            .join(", ");

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {fullName}
              </div>
              {location && (
                <div className="text-xs text-slate-400 dark:text-zinc-500">
                  {location}
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
          const email = record.Email || record.email;
          const phone = record.Phone || record.phone || record.mobile;

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
        title: "Medicare Card #",
        key: "medicareCard",
        render: (_, record) => {
          const cardNo = record.MedicareCardNumber || record.medicareNumber || record.medicareCardNumber;
          const refNo = record.MedicareReferenceNumber || record.referenceNo;

          if (!cardNo) return <span className="text-slate-400 text-xs">-</span>;

          return (
            <div className="flex items-center gap-1.5">
              <IdcardOutlined className="text-brand-primary" />
              <span className="font-mono text-xs font-medium text-slate-800 dark:text-zinc-200">
                {cardNo}
              </span>
              {refNo && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500">
                  Ref: {refNo}
                </span>
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
      { label: "Applicant Name", value: "FirstName" },
      { label: "Email Address", value: "Email" },
      { label: "Phone Number", value: "Phone" },
      { label: "Medicare Card #", value: "MedicareCardNumber" },
      { label: "State", value: "State" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "First Name", key: "FirstName" },
      { header: "Last Name", key: "LastName" },
      { header: "Email", key: "Email" },
      { header: "Phone", key: "Phone" },
      { header: "Medicare Card #", key: "MedicareCardNumber" },
      { header: "Ref #", key: "MedicareReferenceNumber" },
      { header: "Address", key: "StreetAddress" },
      { header: "Suburb", key: "Suburb" },
      { header: "State", key: "State" },
      { header: "Postcode", key: "Postcode" },
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
            <span className="font-mono">{data.referenceNumber || `MED-${data.id}`}</span>
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

        {/* Section 2: Personal Information */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Applicant Personal Details</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="First Name">{data.FirstName || data.firstName || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Middle Name">{data.MiddleName || data.middleName || "-"}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{data.LastName || data.lastName || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.Email || data.email}`} className="text-brand-primary underline">
              {data.Email || data.email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.Phone || data.phone || "-"}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">{data.DateOfBirth || data.dob || "-"}</Descriptions.Item>
        </Descriptions>

        {/* Section 3: Medicare Card Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Medicare Card Details</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Medicare Card #">
            <span className="font-mono font-bold text-brand-primary">
              {data.MedicareCardNumber || data.medicareNumber || "N/A"}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Individual Ref #">
            {data.MedicareReferenceNumber || data.referenceNo || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Card Expiry Date">
            {data.MedicareExpiryDate || data.expiryDate || "-"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 4: Residential Address */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Residential Address</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Street Address" span={3}>
            {data.StreetAddress || data.streetAddress || data.address || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Suburb">{data.Suburb || data.suburb || "-"}</Descriptions.Item>
          <Descriptions.Item label="State">{data.State || data.state || "-"}</Descriptions.Item>
          <Descriptions.Item label="Postcode">{data.Postcode || data.postcode || "-"}</Descriptions.Item>
        </Descriptions>

        {/* Section 5: Exemption & Reason */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Exemption & Additional Notes</span>}
          column={1}
        >
          <Descriptions.Item label="Reason for Exemption">
            {data.ReasonForExemption || data.reason || data.exemptionReason || "None specified"}
          </Descriptions.Item>
          {data.notes && (
            <Descriptions.Item label="Admin / Client Notes">
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
        icon={<SafetyCertificateOutlined />}
        title="Medicare Applications"
        description="Manage Australian Medicare levy exemption applications, entitlement queries, and client records."
        formPath="/resources/medicare-forms/medicare-exemption-form"
        formTitle="Medicare Exemption Form"
        shareDefaultMessage="Dear client, please complete your Australian Medicare Exemption application using the secure link below."
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
            title: <span className="text-slate-500">Applications</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Medicare Applications
              </span>
            ),
          },
        ]}
      />

      {/* 2. Medicare Status Log Module */}
      <FormLogModule
        endpoint="/medicare"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Medicare_Applications"
        filterPlaceholder="Search medicare applications..."
        viewDetailsTitle={(d) => `${d.FirstName || ""} ${d.LastName || ""} - Medicare Application`}
        viewDetailsIcon={<SafetyCertificateOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
