"use client";

import React, { useMemo } from "react";
import { Tag, Descriptions, Dropdown, Button, Tooltip } from "antd";
import {
  TeamOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  LinkOutlined,
  FormOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "@/components/admin/FormLogModule/constants";

/**
 * ============================================================================
 * Entity Engagements Admin Page (`app/admin/entity-engagements/page.js`)
 * ============================================================================
 * Standardized to match Company Registration (New) & Individual Engagement (New):
 * 1. Standardized `<PageTitle />` with public form link, share modal, and breadcrumbs.
 * 2. Card-style status tabs with live count badges (`<FormLogModule />`).
 * 3. Modern `<DataTable />` integration with search, column filter, export, attachments dropdown, and bulk actions.
 * 4. Dual-layout structured View Details modal.
 */
export default function EntityEngagementsAdminPage() {
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
            {record.referenceNumber || record.refNumber || `ENT-${record.id}`}
          </span>
        ),
      },
      {
        title: "Legal Entity Name & Type",
        key: "legalName",
        sorter: (a, b) => (a.LegalName || a.legalName || "").localeCompare(b.LegalName || b.legalName || ""),
        render: (_, record) => {
          const name = record.LegalName || record.legalName || record.tradingName || "Unnamed Entity";
          const type = record.TypeOfEntity || record.typeOfEntity || "Corporate / Trust Entity";

          return (
            <div>
              <div className="font-semibold text-slate-900 dark:text-zinc-100">
                {name}
              </div>
              <div className="text-xs text-brand-primary font-medium">
                {type}
              </div>
            </div>
          );
        },
      },
      {
        title: "Contact Person",
        key: "contactPerson",
        sorter: (a, b) => (a.ContactPerson || "").localeCompare(b.ContactPerson || ""),
        render: (_, record) => (
          <div className="font-medium text-slate-800 dark:text-zinc-200 text-xs">
            {record.ContactPerson || record.contactName || "-"}
          </div>
        ),
      },
      {
        title: "Contact Details",
        key: "contact",
        render: (_, record) => {
          const email = record.EmailAddress || record.email;
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
        title: "Attachments",
        key: "attachments",
        width: 110,
        align: "center",
        render: (_, record) => {
          let proofFiles = [];
          if (Array.isArray(record.proofOfID)) {
            proofFiles = record.proofOfID;
          } else if (typeof record.proofOfID === "string" && record.proofOfID.trim() !== "") {
            try {
              const parsed = JSON.parse(record.proofOfID);
              proofFiles = Array.isArray(parsed) ? parsed : [parsed];
            } catch {
              proofFiles = record.proofOfID.split(",").map((u) => u.trim()).filter(Boolean);
            }
          }

          const hasTrustDeed = Boolean(record.TrustDeed && typeof record.TrustDeed === "string" && record.TrustDeed.trim() !== "");
          const hasSignature = Boolean(record.signature && typeof record.signature === "string" && record.signature.trim() !== "");

          const totalAttachments = proofFiles.length + (hasTrustDeed ? 1 : 0) + (hasSignature ? 1 : 0);
          if (totalAttachments === 0) {
            return <span className="text-slate-400 text-xs">-</span>;
          }

          const menuItems = [
            ...proofFiles.map((url, idx) => ({
              key: `proof-${idx}`,
              icon: <LinkOutlined className="text-brand-primary" />,
              label: `ID Document ${idx + 1}`,
              onClick: () => window.open(url, "_blank"),
            })),
            ...(hasTrustDeed
              ? [
                  {
                    key: "trustDeed",
                    icon: <FormOutlined className="text-purple-500" />,
                    label: "Trust Deed",
                    onClick: () => window.open(record.TrustDeed, "_blank"),
                  },
                ]
              : []),
            ...(hasSignature
              ? [
                  {
                    key: "signature",
                    icon: <FormOutlined className="text-emerald-500" />,
                    label: "Signature",
                    onClick: () => window.open(record.signature, "_blank"),
                  },
                ]
              : []),
          ];

          return (
            <Tooltip title={`${totalAttachments} Attachment(s) available`}>
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Button
                  size="small"
                  className="inline-flex items-center gap-1.5 px-2.5 rounded-pill border-emerald-200 dark:border-emerald-800 text-brand-primary hover:bg-emerald-50 text-xs"
                >
                  <IdcardOutlined />
                  <span className="font-bold">{totalAttachments}</span>
                </Button>
              </Dropdown>
            </Tooltip>
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
      { label: "Legal Name", value: "LegalName" },
      { label: "Entity Type", value: "TypeOfEntity" },
      { label: "Contact Person", value: "ContactPerson" },
      { label: "Email Address", value: "EmailAddress" },
      { label: "Phone Number", value: "PhoneNumber" },
    ];
  }, []);

  const exportColumns = useMemo(() => {
    return [
      { header: "ID", key: "id" },
      { header: "Legal Name", key: "LegalName" },
      { header: "Entity Type", key: "TypeOfEntity" },
      { header: "Contact Person", key: "ContactPerson" },
      { header: "Email", key: "EmailAddress" },
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
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Engagement Overview</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Application ID">{data.id || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Reference Number">
            <span className="font-mono">{data.referenceNumber || `ENT-${data.id}`}</span>
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

        {/* Section 2: Entity Information */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Entity Details</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Legal Entity Name" span={2}>
            <strong className="text-base text-brand-primary">{data.LegalName || data.legalName || "N/A"}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="Entity Type">
            {data.TypeOfEntity || data.typeOfEntity || "Corporate Entity"}
          </Descriptions.Item>
          <Descriptions.Item label="Trading Name">
            {data.TradingName || data.tradingName || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="ABN / ACN">
            <span className="font-mono font-bold">{data.ABN || data.abn || data.ACN || "Not Registered"}</span>
          </Descriptions.Item>
        </Descriptions>

        {/* Section 3: Authorised Contact */}
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Authorised Signatory / Contact</span>}
          column={{ xs: 1, sm: 2, md: 3 }}
        >
          <Descriptions.Item label="Contact Person">{data.ContactPerson || data.contactName || "N/A"}</Descriptions.Item>
          <Descriptions.Item label="Email Address">
            <a href={`mailto:${data.EmailAddress || data.email}`} className="text-brand-primary underline">
              {data.EmailAddress || data.email || "N/A"}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{data.PhoneNumber || data.phone || "-"}</Descriptions.Item>
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
        icon={<TeamOutlined />}
        title="Entity Engagements"
        description="Manage corporate and trust client engagement letters, statutory agreements, and fee terms."
        formPath="/resources/engagement-forms/entity-engagements-form"
        formTitle="Entity Engagement Form"
        shareDefaultMessage="Dear client, please complete your Entity Client Engagement form using the secure link below."
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
                Entity Engagements
              </span>
            ),
          },
        ]}
      />

      {/* 2. Entity Status Log Module */}
      <FormLogModule
        endpoint="/entity-engagements"
        statusList={STANDARD_FORM_STATUS_LIST}
        defaultStatus="New Query"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Entity_Engagements"
        filterPlaceholder="Search entity engagements..."
        viewDetailsTitle={(d) => `${d.LegalName || "Entity"} - Engagement Details`}
        viewDetailsIcon={<TeamOutlined />}
        renderViewDetails={renderViewDetails}
      />
    </div>
  );
}
