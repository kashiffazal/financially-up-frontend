"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Tag, Button, Dropdown, Popconfirm, Tooltip, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  MoreOutlined,
  IdcardOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import IndividualEngagementAdminForm from "@/components/admin/forms/individual-engagement-admin";
import { HTTP, antdMsg, getFileUrl } from "@/services";

const EXPORT_COLUMNS = [
  { header: "Reference", key: "referenceNumber" },
  { header: "Client Name", key: "client.fullName" },
  { header: "Email", key: "client.email" },
  { header: "Mobile", key: "client.mobile" },
  { header: "Occupation", key: "client.occupation" },
  { header: "Tax Residency", key: "taxResidency" },
  { header: "Status", key: "status" },
  { header: "Risk Level", key: "riskLevel" },
  { header: "Submitted At", key: "submittedAt" },
];

/**
 * ============================================================================
 * Main Individual Engagements Log Component (`log/partial/mainLog.js`)
 * ============================================================================
 *
 * Architecture Role:
 * 1. Renders the reusable `DataTable` configured for Individual Client Engagements.
 * 2. Defines table columns (Ref #, Client Name, Email & Phone, Occupation, Residency, Attachments, Status, Risk, Actions).
 * 3. Handles Row Action Dropdowns:
 *    - "Client Engagement PDF": Direct click opens generated Client PDF in a new tab.
 *    - "Review & Decision": Opens `IndividualEngagementAdminForm` compliance assessment modal.
 *    - "Official PDFs": Direct links to other generated legal PDFs (Admin review, Acceptance, Audit).
 *    - "Delete Record": Popconfirm confirmation to remove application.
 * 4. Provides one-click Excel & PDF/CSV export via `ExportButtons`.
 */
export default function IndividualEngagementMainLog({
  data = [],
  statusName = "All",
  fetchData,
  loading = false,
}) {
  // --------------------------------------------------------------------------
  // 1. LOCAL COMPONENT STATE (MODALS & LOADERS)
  // --------------------------------------------------------------------------
  const [reviewRecord, setReviewRecord] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isReviewSubmitting, setIsReviewSubmitting] = useState(false);

  // --------------------------------------------------------------------------
  // 2. STATUS & RISK COLOR HELPERS
  // --------------------------------------------------------------------------
  const getStatusTagColor = useCallback((status) => {
    switch (status) {
      case "Accepted":
        return "success";
      case "Conditional Accept":
        return "processing";
      case "Request Information":
        return "purple";
      case "Enhanced Monitoring":
        return "cyan";
      case "Escalate":
        return "volcano";
      case "Declined":
        return "error";
      case "Pending Review":
      default:
        return "warning";
    }
  }, []);

  const getRiskColor = useCallback((risk) => {
    if (risk === "High" || risk === "Unacceptable") return "error";
    if (risk === "Medium") return "warning";
    return "success";
  }, []);

  // --------------------------------------------------------------------------
  // 3. ROW ACTIONS: SINGLE RECORD DELETION
  // --------------------------------------------------------------------------
  const handleDeleteRecord = useCallback(
    async (record) => {
      const recordId = record.id || record._id || record.key;
      try {
        await HTTP("DELETE", `/new-individual-engagements/${recordId}`);
        antdMsg.success("Individual engagement deleted successfully.");
        if (typeof fetchData === "function") {
          fetchData();
        }
      } catch (err) {
        antdMsg.error(`Failed to delete record: ${err.message || "Error"}`);
      }
    },
    [fetchData],
  );

  // --------------------------------------------------------------------------
  // 4. REVIEW & DECISION SUBMISSION HANDLER
  // --------------------------------------------------------------------------
  const handleAdminDecisionSubmit = async (values) => {
    if (!reviewRecord?.id) return;
    setIsReviewSubmitting(true);
    try {
      await HTTP(
        "PUT",
        `/new-individual-engagements/${reviewRecord.id}/decision`,
        values,
      );
      antdMsg.success("Tax Agent decision submitted successfully.");
      setIsReviewModalOpen(false);
      setReviewRecord(null);
      if (typeof fetchData === "function") {
        fetchData();
      }
    } catch (err) {
      antdMsg.error(`Failed to submit decision: ${err.message || "Error"}`);
    } finally {
      setIsReviewSubmitting(false);
    }
  };

  // --------------------------------------------------------------------------
  // 6. TABLE COLUMNS DEFINITION
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "Ref #",
        dataIndex: "referenceNumber",
        key: "referenceNumber",
        width: 150,
        render: (ref, row) => (
          <span className="font-mono text-xs font-semibold text-slate-700 dark:text-zinc-300">
            {ref || `#${row.id || row.key}`}
          </span>
        ),
      },
      {
        title: "Client Name",
        key: "clientName",
        width: 200,
        sorter: (a, b) =>
          (a.client?.fullName || a.fullName || "").localeCompare(
            b.client?.fullName || b.fullName || "",
          ),
        render: (_, row) => {
          const name = row.client?.fullName || row.fullName;
          const occupation = row.client?.occupation || row.occupation;
          return (
            <div>
              <div className="font-semibold text-[13px] leading-snug text-slate-900 dark:text-zinc-100">
                {name || <span className="italic text-slate-400">Unnamed Client</span>}
              </div>
              {occupation && (
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {occupation}
                </div>
              )}
            </div>
          );
        },
      },
      {
        title: "Email & Phone",
        key: "contact",
        width: 210,
        render: (_, row) => {
          const email = row.client?.email || row.email;
          const mobile = row.client?.mobile || row.mobile || row.phone;
          return (
            <div className="text-[12px] space-y-0.5">
              <div>
                <a
                  href={`mailto:${email}`}
                  className="text-brand-primary hover:underline font-medium"
                >
                  {email || "-"}
                </a>
              </div>
              <div className="text-slate-400 font-mono text-[11.5px]">
                {mobile || "-"}
              </div>
            </div>
          );
        },
      },
      {
        title: "Tax Residency",
        dataIndex: "taxResidency",
        key: "taxResidency",
        width: 140,
        render: (residency) => (
          <span className="text-xs text-slate-700 dark:text-zinc-300">
            {residency || "Australian Resident"}
          </span>
        ),
      },
      {
        title: "Attachments",
        key: "attachments",
        width: 120,
        render: (_, record) => {
          const rawDocs = Array.isArray(record.documents) ? record.documents : [];
          const combinedDocs = [...rawDocs];
          if (record.identity?.primaryIdPath) {
            combinedDocs.push({
              documentCategory: "Primary ID",
              fileName: "Primary Photo ID Document",
              filePath: record.identity.primaryIdPath,
            });
          }
          if (record.identity?.supportingIdPath) {
            combinedDocs.push({
              documentCategory: "Supporting ID",
              fileName: "Supporting Identity Document",
              filePath: record.identity.supportingIdPath,
            });
          }
          if (record.identity?.selfiePath) {
            combinedDocs.push({
              documentCategory: "Selfie ID",
              fileName: "Biometric Selfie Photo",
              filePath: record.identity.selfiePath,
            });
          }

          // Deduplicate by filePath so documents already in record.documents aren't listed twice
          const seenPaths = new Set();
          const docList = [];
          for (const doc of combinedDocs) {
            if (doc?.filePath && !seenPaths.has(doc.filePath)) {
              seenPaths.add(doc.filePath);
              docList.push(doc);
            }
          }

          const pdfItems = [];
          if (record.clientPdfPath) {
            pdfItems.push({ label: "Client Engagement PDF", url: record.clientPdfPath });
          }
          if (record.adminPdfPath) {
            pdfItems.push({ label: "Admin Review Package PDF", url: record.adminPdfPath });
          }
          if (record.acceptancePdfPath) {
            pdfItems.push({ label: "Acceptance Certificate PDF", url: record.acceptancePdfPath });
          }
          if (record.auditPdfPath) {
            pdfItems.push({ label: "Compliance Audit Report PDF", url: record.auditPdfPath });
          }

          const totalAttachments = docList.length + pdfItems.length;
          if (totalAttachments === 0) {
            return <span className="text-slate-400 text-xs">-</span>;
          }

          const menuItems = [
            ...pdfItems.map((pdf, idx) => ({
              key: `pdf-${idx}`,
              icon: <FilePdfOutlined className="text-red-500" />,
              label: pdf.label,
              onClick: () => window.open(getFileUrl(pdf.url), "_blank"),
            })),
            ...(pdfItems.length > 0 && docList.length > 0 ? [{ type: "divider" }] : []),
            ...docList.map((doc, idx) => ({
              key: `doc-${idx}`,
              icon: <LinkOutlined className="text-brand-primary" />,
              label: `${doc.documentCategory || "Document"}: ${doc.fileName}`,
              onClick: () => window.open(getFileUrl(doc.filePath), "_blank"),
            })),
          ];

          return (
            <Tooltip title={`${totalAttachments} Attachment(s) available`}>
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Button
                  size="small"
                  className="inline-flex items-center gap-1.5 px-2.5 rounded-pill border-emerald-200 dark:border-emerald-800 text-brand-primary hover:bg-emerald-50"
                >
                  <IdcardOutlined />
                  <span className="font-bold text-xs">{totalAttachments}</span>
                </Button>
              </Dropdown>
            </Tooltip>
          );
        },
      },
      {
        title: "Risk Level",
        dataIndex: "riskLevel",
        key: "riskLevel",
        width: 110,
        render: (risk) => (
          <Tag
            color={getRiskColor(risk)}
            className="font-semibold text-[11.5px] py-0.5 px-2.5 rounded-pill"
          >
            {risk || "Low"}
          </Tag>
        ),
      },
      {
        title: "Submitted",
        dataIndex: "createdAt",
        key: "createdAt",
        width: 120,
        sorter: (a, b) => new Date(a.createdAt || a.submittedAt) - new Date(b.createdAt || b.submittedAt),
        render: (date, row) => (
          <span className="text-[12px] text-slate-500 dark:text-zinc-400">
            {date || row.submittedAt
              ? new Date(date || row.submittedAt).toLocaleDateString("en-AU")
              : "-"}
          </span>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 140,
        render: (status) => (
          <Tag
            color={getStatusTagColor(status)}
            className="font-semibold text-[11.5px] py-0.5 px-2.5 rounded-pill"
          >
            {status || "Pending Review"}
          </Tag>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 110,
        render: (_, record) => {
          // PDF Package items (Admin Review, Acceptance, Audit Report)
          const pdfSubmenu = [];
          if (record.adminPdfPath) {
            pdfSubmenu.push({
              key: "pdf_admin",
              icon: <FilePdfOutlined className="text-brand-primary" />,
              label: (
                <a href={getFileUrl(record.adminPdfPath)} target="_blank" rel="noopener noreferrer" className="text-inherit">
                  Admin Review Package
                </a>
              ),
            });
          }
          if (record.acceptancePdfPath) {
            pdfSubmenu.push({
              key: "pdf_acceptance",
              icon: <FilePdfOutlined className="text-emerald-600" />,
              label: (
                <a href={getFileUrl(record.acceptancePdfPath)} target="_blank" rel="noopener noreferrer" className="text-inherit">
                  Acceptance Certificate
                </a>
              ),
            });
          }
          if (record.auditPdfPath) {
            pdfSubmenu.push({
              key: "pdf_audit",
              icon: <FilePdfOutlined className="text-blue-500" />,
              label: (
                <a href={getFileUrl(record.auditPdfPath)} target="_blank" rel="noopener noreferrer" className="text-inherit">
                  Audit Report PDF
                </a>
              ),
            });
          }

          // Main Action Menu Items
          const menuItems = [
            {
              key: "client_pdf",
              icon: <FilePdfOutlined className="text-red-500" />,
              label: "Client Engagement PDF",
              onClick: () => {
                if (record.clientPdfPath) {
                  window.open(getFileUrl(record.clientPdfPath), "_blank");
                } else {
                  antdMsg.info("Client Engagement PDF is not yet generated for this record.");
                }
              },
            },
            {
              key: "admin_decision",
              icon: <EditOutlined className="text-blue-500" />,
              label: "Review & Decision",
              onClick: () => {
                setReviewRecord(record);
                setIsReviewModalOpen(true);
              },
            },
            ...(pdfSubmenu.length > 0
              ? [
                  {
                    key: "pdf_menu",
                    icon: <FilePdfOutlined className="text-brand-primary" />,
                    label: "Official PDFs",
                    children: pdfSubmenu,
                  },
                ]
              : []),
            { type: "divider" },
            {
              key: "delete",
              danger: true,
              icon: <DeleteOutlined />,
              label: (
                <Popconfirm
                  title="Delete Individual Engagement"
                  description="Are you sure you want to permanently delete this engagement record?"
                  onConfirm={() => handleDeleteRecord(record)}
                  okText="Yes, Delete"
                  cancelText="Cancel"
                  okButtonProps={{ danger: true }}
                >
                  <span className="w-full inline-block">Delete Record</span>
                </Popconfirm>
              ),
            },
          ].filter(Boolean);

          return (
            <Dropdown menu={{ items: menuItems }} trigger={["click"]} placement="bottomRight">
              <Button size="small" icon={<MoreOutlined />}>
                Actions
              </Button>
            </Dropdown>
          );
        },
      },
    ];
  }, [getRiskColor, getStatusTagColor, handleDeleteRecord]);

  // --------------------------------------------------------------------------
  // 7. DATA PROVIDER FOR CSV/EXCEL EXPORT
  // --------------------------------------------------------------------------
  const fetchExportData = useCallback(async () => {
    return data;
  }, [data]);

  return (
    <div className="w-full space-y-4">
      {/* Reusable Data Table */}
      <DataTable
        columns={columns}
        dataSource={data}
        loading={loading}
        filter={true}
        filterPlaceholder="Search individual engagements..."
        customFilter={true}
        customFilterLabel="Filter by Column"
        customFilterCol={[
          { value: "referenceNumber", label: "Reference #" },
          { value: "clientName", label: "Client Name" },
          { value: "email", label: "Email" },
          { value: "phone", label: "Phone" },
          { value: "occupation", label: "Occupation" },
          { value: "taxResidency", label: "Tax Residency" },
          { value: "riskLevel", label: "Risk Level" },
          { value: "status", label: "Status" },
        ]}
        showSizeChanger={true}
        sizeChangeLabel="Record per page"
        sizeChangerOptions={[10, 20, 30, 50, 100]}
        extraHeader={
          <ExportButtons
            columns={EXPORT_COLUMNS}
            dataProvider={fetchExportData}
            filename={`Individual_Engagements_${statusName}`}
          />
        }
        scroll={{ x: 1200 }}
      />

      {/* Compliance Assessment & Review Modal */}
      {isReviewModalOpen && (
        <Modal
          open={isReviewModalOpen}
          onCancel={() => !isReviewSubmitting && setIsReviewModalOpen(false)}
          footer={null}
          width={980}
          destroyOnClose
          centered
          className="admin-form-modal"
        >
          <IndividualEngagementAdminForm
            record={reviewRecord}
            onFinish={handleAdminDecisionSubmit}
            onCancel={() => !isReviewSubmitting && setIsReviewModalOpen(false)}
            isSubmitting={isReviewSubmitting}
          />
        </Modal>
      )}
    </div>
  );
}
