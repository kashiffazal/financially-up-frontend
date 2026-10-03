"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions } from "antd";
import {
  IdcardOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * Form type variant suffixes - maps each form type to its field suffix.
 */
const FORM_VARIANTS = [
  { suffix: "", label: "TFN" },
  { suffix: "_Sole", label: "Sole Trader ABN" },
  { suffix: "_CompanyABN", label: "Company ABN" },
  { suffix: "_TrustABN", label: "Trust ABN" },
  { suffix: "_PartnershipABN", label: "Partnership ABN" },
];

/**
 * Resolves the correct field variant for a record.
 */
function resolveFormVariant(record) {
  if (!record) return { formTypeLabel: "TFN", firstName: "", lastName: "", phoneNumber: "", email: "" };
  for (const variant of FORM_VARIANTS) {
    const firstNameKey = `firstName${variant.suffix}`;
    if (record[firstNameKey]) {
      return {
        formTypeLabel: variant.label,
        firstName: record[`firstName${variant.suffix}`] || "",
        lastName: record[`lastName${variant.suffix}`] || "",
        phoneNumber: record[`phoneNumber${variant.suffix}`] || "",
        email: record[`email${variant.suffix}`] || "",
        proofOfID: record[`proofOfID${variant.suffix}`] || null,
      };
    }
  }
  return {
    formTypeLabel: record.formType || "TFN",
    firstName: record.firstName || record.FirstName || "",
    lastName: record.lastName || record.LastName || "",
    phoneNumber: record.phoneNumber || record.phone || "",
    email: record.email || record.Email || "",
    proofOfID: record.proofOfID || null,
  };
}

/**
 * Color-code form type tags
 */
const FORM_TYPE_COLORS = {
  TFN: "blue",
  "Sole Trader ABN": "green",
  "Company ABN": "purple",
  "Trust ABN": "orange",
  "Partnership ABN": "cyan",
};

/**
 * ============================================================================
 * Apply TFN / ABNs Admin Page (`app/admin/apply-tfn-abns/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function ApplyTfnAbnsAdminPage() {
  // --------------------------------------------------------------------------
  // RECORD NORMALIZER
  // --------------------------------------------------------------------------
  const normalizeRecord = (record) => {
    const resolved = resolveFormVariant(record);
    return {
      ...record,
      _formType: resolved.formTypeLabel,
      _fullName: `${resolved.firstName} ${resolved.lastName}`.trim(),
      _phone: resolved.phoneNumber,
      _email: resolved.email,
    };
  };

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
            {record.referenceNumber || record.refNumber || `TFN-${record.id}`}
          </span>
        ),
      },
      {
        title: "Form Type",
        key: "formType",
        width: 160,
        sorter: (a, b) => (a._formType || "").localeCompare(b._formType || ""),
        render: (_, record) => {
          const type = record._formType || resolveFormVariant(record).formTypeLabel;
          return (
            <Tag color={FORM_TYPE_COLORS[type] || "default"} className="rounded-pill font-medium text-xs px-2.5">
              {type}
            </Tag>
          );
        },
      },
      {
        title: "Applicant Name",
        key: "fullName",
        sorter: (a, b) => (a._fullName || "").localeCompare(b._fullName || ""),
        render: (_, record) => {
          const resolved = resolveFormVariant(record);
          const fullName = `${resolved.firstName} ${resolved.lastName}`.trim() || "N/A";

          return (
            <div className="font-semibold text-slate-900 dark:text-zinc-100 text-xs">
              {fullName}
            </div>
          );
        },
      },
      {
        title: "Contact Details",
        key: "contact",
        render: (_, record) => {
          const resolved = resolveFormVariant(record);
          const email = resolved.email;
          const phone = resolved.phoneNumber;

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
      { label: "Form Type", value: "_formType" },
      { label: "Full Name", value: "_fullName" },
      { label: "Email Address", value: "_email" },
      { label: "Phone Number", value: "_phone" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Form Type", key: "_formType" },
      { header: "Full Name", key: "_fullName" },
      { header: "Email", key: "_email" },
      { header: "Phone", key: "_phone" },
      { header: "Status", key: "status" },
      { header: "Submitted Date", key: "createdAt" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // STRUCTURED VIEW DETAILS MODAL CONTENT
  // --------------------------------------------------------------------------
  const renderViewDetails = (data, layout) => {
    const resolved = resolveFormVariant(data);

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
            <span className="font-mono">{data.referenceNumber || `TFN-${data.id}`}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Application Type">
            <Tag color={FORM_TYPE_COLORS[resolved.formTypeLabel] || "default"} className="rounded-pill">
              {resolved.formTypeLabel}
            </Tag>
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

        {/* Section 2: Applicant Information */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Applicant Details</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="First Name">{resolved.firstName || "-"}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{resolved.lastName || "-"}</Descriptions.Item>
          <Descriptions.Item label="Email Address">
            {resolved.email ? (
              <a href={`mailto:${resolved.email}`} className="text-brand-primary underline">
                {resolved.email}
              </a>
            ) : (
              "-"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{resolved.phoneNumber || "-"}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">
            {data.dateOfBirth || data.dob || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Citizenship Status">
            {data.citizenship || "Australian Citizen"}
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Identity & Verification */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Identity &amp; Address</span>}
          column={1}
        >
          <Descriptions.Item label="Residential Address">
            {data.address || data.streetAddress || "Refer to application attachments"}
          </Descriptions.Item>
          <Descriptions.Item label="Passport / Driver Licence">
            {data.passportNumber || data.licenceNumber || "Provided via secure upload"}
          </Descriptions.Item>
          {data.notes && (
            <Descriptions.Item label="Notes">
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
        icon={<IdcardOutlined />}
        title="Apply TFN / ABN Registrations"
        description="Process Tax File Number and Australian Business Number applications across all legal entity variants."
        formPath="/resources/registration-forms/apply-tfn-abns"
        formTitle="TFN / ABN Application Form"
        shareDefaultMessage="Dear client, please complete your TFN or ABN application using the secure link below."
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
            title: <span className="text-slate-500">ATO Lodgements</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Apply TFN / ABNs
              </span>
            ),
          },
        ]}
      />

      {/* 2. TFN / ABN Status Log Module */}
      <FormLogModule
        endpoint="/apply-tfn-abns"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        normalizeRecord={normalizeRecord}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="TFN_ABN_Applications"
        filterPlaceholder="Search TFN & ABN applications..."
        viewDetailsTitle={(d) => `${d._formType || "TFN/ABN"} - ${d._fullName || "Applicant"}`}
        viewDetailsIcon={<IdcardOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
