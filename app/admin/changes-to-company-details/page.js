"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  FormOutlined,
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
 * Changes To Company Details Admin Page (`app/admin/changes-to-company-details/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function ChangesToCompanyDetailsAdminPage() {
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
            {record.referenceNumber || record.refNumber || `CHG-${record.id}`}
          </span>
        ),
      },
      {
        title: "Company Details",
        key: "companyName",
        sorter: (a, b) => (a.CompanyName || a.companyName || "").localeCompare(b.CompanyName || b.companyName || ""),
        render: (_, record) => {
          const compName = record.CompanyName || record.companyName || "N/A";
          const acn = record.ACNorABN || record.acn || record.abn;

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {compName}
              </div>
              {acn && (
                <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-zinc-500 font-mono">
                  <BankOutlined className="text-[11px]" /> ACN/ABN: {acn}
                </div>
              )}
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
      { label: "ACN / ABN", value: "ACNorABN" },
      { label: "Contact Name", value: "fname" },
      { label: "Email Address", value: "email" },
      { label: "Phone Number", value: "phone" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Company Name", key: "CompanyName" },
      { header: "ACN / ABN", key: "ACNorABN" },
      { header: "First Name", key: "fname" },
      { header: "Middle Name", key: "mname" },
      { header: "Last Name", key: "lname" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "phone" },
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
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Application Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `CHG-${data.id}`}</span>
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

        {/* Section 2: Company Profile */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Company Identification</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Company Name" span={2}>
            <strong>{data.CompanyName || data.companyName || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="ACN / ABN">
            <span className="font-mono font-bold text-brand-primary">
              {data.ACNorABN || data.acn || data.abn || "N/A"}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="State of Registration">
            {data.state || data.State || "Australia"}
          </Descriptions.Item>
          <Descriptions.Item label="Nature of Changes" span={2}>
            {data.changesType || data.typeOfChanges || "General Company Details Amendment"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Contact Details */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Authorised Contact Person</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Full Name">{contactFullName}</Descriptions.Item>
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.email}`} className="text-brand-primary underline">
              {data.email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.phone || "-"}</Descriptions.Item>
        </Descriptions>

        {/* Section 4: Specific Changes & Notes */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Amendment Details &amp; Notes</span>}
          column={1}
        >
          <Descriptions.Item label="Address Changes">
            {data.addressChanges || data.registeredAddress || "No address change requested"}
          </Descriptions.Item>
          <Descriptions.Item label="Officeholder Changes">
            {data.officeholderChanges || data.directors || "No director / secretary change requested"}
          </Descriptions.Item>
          <Descriptions.Item label="Share Capital Changes">
            {data.shareChanges || "No share structure change requested"}
          </Descriptions.Item>
          {data.notes && (
            <Descriptions.Item label="Additional Instructions / Notes">
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
        icon={<FormOutlined />}
        title="Changes To Company Details"
        description="Review and process ASIC Form 484 changes, officeholder updates, and registered address amendments."
        formPath="/resources/registration-forms/changes-to-company-details"
        formTitle="Company Changes Form"
        shareDefaultMessage="Dear client, please complete your Changes to Company Details application using the secure link below."
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
            title: <span className="text-slate-500">Company Secretarial</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Changes To Company Details
              </span>
            ),
          },
        ]}
      />

      {/* 2. Changes Status Log Module */}
      <FormLogModule
        endpoint="/changes-to-company-details"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Company_Changes"
        filterPlaceholder="Search company changes..."
        viewDetailsTitle={(d) => `${d.CompanyName || "Company"} - Change Application`}
        viewDetailsIcon={<FormOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
