"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Tag, Button, Dropdown, Modal } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  FilePdfOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import CompanyRegistrationViewDetails from "../../viewDetails";
import CompanyRegistrationAdminForm from "@/components/admin/forms/company-registration-admin";
import { HTTP, antdMsg, getFileUrl } from "@/services";
import {
  useTrashActions,
  TRASH_KEY,
} from "@/components/admin/FormLogModule/trash";
import {
  useRegeneratePdfs,
  PdfMissingTag,
} from "@/components/admin/RegeneratePdfs";

/**
 * ============================================================================
 * Main Company Registrations Log Component (`log/partial/mainLog.js`)
 * ============================================================================
 *
 * Architecture Role:
 * 1. Renders the reusable `DataTable` component configured specifically for Company Registrations.
 * 2. Defines table columns (Ref #, Company Name, Contact Person, Email/Phone, State, Submitted Date, Status, Actions).
 * 3. Handles Row Action Dropdowns:
 *    - "View Details": Opens structured `CompanyRegistrationViewDetails` descriptions modal.
 *    - "Review & Decision": Opens `CompanyRegistrationAdminForm` compliance assessment modal.
 *    - "View Official PDF": Direct link to the generated Australian incorporation PDF package.
 *    - "Change Status to...": Submenu with confirmation modal for status lifecycle transitions.
 * 4. Handles Bulk Actions (e.g. Bulk Approve, Bulk Hold, Bulk Lodge with ASIC). Records are never deleted.
 * 5. Provides one-click Excel & PDF export via `ExportButtons`.
 */
export default function CompanyRegistrationMainLog({
  data = [],
  statusName = "All",
  statusList = [],
  changeStatus,
  fetchData,
  loading = false,
  autoOpenRecord = null,
  onAutoOpenHandled,
  freshIds = [],
}) {
  // Context-aware Ant Design dynamic instances (Modal, Message, Notification)
  const trash = useTrashActions({
    moduleKey: "new-company",
    onChanged: () =>
      typeof fetchData === "function" && fetchData({ silent: true }),
  });
  // Regenerate PDFs (identical to the originals; same links)
  const regen = useRegeneratePdfs({
    moduleKey: "new-company",
    onDone: () =>
      typeof fetchData === "function" && fetchData({ silent: true }),
  });

  // --------------------------------------------------------------------------
  // 1. LOCAL COMPONENT STATE (MODALS & LOADERS)
  // --------------------------------------------------------------------------

  // Controls View Details modal visibility & active record
  const [viewDetailsRecord, setViewDetailsRecord] = useState(null);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);

  // Controls Admin Compliance Review modal visibility & active record
  const [reviewRecord, setReviewRecord] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isReviewSubmitting, setIsReviewSubmitting] = useState(false);

  /**
   * Review & Decision -> PUT /new-company-registrations/:id/decision
   * Saves the review + reviewer signature, sets the status from the decision,
   * builds the Admin Review (and, when approved, the Acceptance) PDF and emails
   * the client and staff. Errors are shown by HTTP().
   */
  const handleAdminDecisionSubmit = async (values) => {
    if (!reviewRecord?.id) return;
    setIsReviewSubmitting(true);
    try {
      const res = await HTTP("PUT", `/new-company-registrations/${reviewRecord.id}/decision`, values);
      if (!res?.success) return;
      antdMsg.success(res.message || "Decision saved.");
      setIsReviewModalOpen(false);
      setReviewRecord(null);
      if (typeof fetchData === "function") fetchData();
    } finally {
      setIsReviewSubmitting(false);
    }
  };


  // Open View Details for a record requested via `?open=<id>` (Global Search).
  // Adjusted during render (not in an effect) so the modal opens in the same pass.
  const [handledAutoOpen, setHandledAutoOpen] = useState(null);
  if (autoOpenRecord && autoOpenRecord !== handledAutoOpen) {
    setHandledAutoOpen(autoOpenRecord);
    setViewDetailsRecord(autoOpenRecord);
    setIsViewDetailsOpen(true);
  }

  // --------------------------------------------------------------------------
  // 2. HELPER: STATUS TAG COLORS
  // --------------------------------------------------------------------------
  const getStatusTagColor = useCallback((status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Approved With Conditions":
        return "orange";
      case "Under Review":
        return "processing";
      case "Pending Documents":
        return "purple";
      case "On Hold":
        return "gold";
      case "Lodged with ASIC":
        return "cyan";
      case "Declined":
        return "error";
      case "Draft":
        return "default";
      case "Submitted":
      default:
        return "warning";
    }
  }, []);

  // Status is only changed through the Review & Decision form (no direct status menu).

  // Records are never deleted (kept for compliance record-keeping): no delete
  // row action or bulk delete, and the API refuses DELETE requests.

  // --------------------------------------------------------------------------
  // 5. BULK ACTION HANDLER (MULTI-ROW SELECTION) - Move to Trash / Restore
  // --------------------------------------------------------------------------
  const handleBulkAction = useCallback(
    async (selectedRowsInfo, actionValue) => {
      const { selectedRowKeys } = selectedRowsInfo;
      if (!selectedRowKeys || selectedRowKeys.length === 0) return;
      // Bulk actions are Move to Trash / Restore only
      await trash.handleBulk(actionValue, selectedRowKeys);
    },
    [trash],
  );

  // --------------------------------------------------------------------------
  // 6. TABLE COLUMNS DEFINITION
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    return [
      {
        title: "Ref #",
        dataIndex: "referenceNumber",
        key: "referenceNumber",
        width: 140,
        render: (ref, row) => (
          <span className="font-mono text-xs font-semibold text-slate-700 dark:text-zinc-300">
            {ref || `#${row.id || row.key}`}
          </span>
        ),
      },
      {
        title: "Proposed Company Name",
        dataIndex: "companyName1",
        key: "companyName1",
        width: 220,
        sorter: (a, b) =>
          (a.companyName1 || "").localeCompare(b.companyName1 || ""),
        render: (name, row) => (
          <div>
            <div className="font-semibold text-[13px] leading-snug text-slate-900 dark:text-zinc-100">
              {name || (
                <span className="italic text-slate-400">Unnamed Company</span>
              )}
            </div>
            {row.companyName2 && (
              <div className="text-[11px] text-slate-400 mt-0.5">
                Alt: {row.companyName2}
              </div>
            )}
          </div>
        ),
      },
      {
        title: "Contact Person",
        dataIndex: "contactName",
        key: "contactName",
        width: 180,
        sorter: (a, b) =>
          (a.contactName || "").localeCompare(b.contactName || ""),
        render: (name, row) => (
          <div>
            <div className="font-medium text-[13px] leading-snug text-slate-800 dark:text-zinc-200">
              {name || "-"}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {row.contactRelationship || "Director"}
            </div>
          </div>
        ),
      },
      {
        title: "Email & Phone",
        dataIndex: "contactEmail",
        key: "contactEmail",
        width: 200,
        render: (email, row) => (
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
              {row.contactMobile || "-"}
            </div>
          </div>
        ),
      },
      {
        title: "State",
        dataIndex: "stateOfRegistration",
        key: "stateOfRegistration",
        width: 90,
        render: (state) => (
          <Tag color="blue" className="font-mono text-[11.5px] px-2 py-0">
            {state || "NSW"}
          </Tag>
        ),
      },
      {
        title: "Submitted",
        dataIndex: "createdAt",
        key: "createdAt",
        width: 130,
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        render: (date) => (
          <span className="text-[12px] text-slate-500 dark:text-zinc-400">
            {date ? new Date(date).toLocaleDateString("en-AU") : "-"}
          </span>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 140,
        render: (status, record) => (
          <div className="flex flex-col items-start">
            <Tag
              color={getStatusTagColor(status)}
              className="font-semibold text-[11.5px] py-0.5 px-2.5 rounded-pill"
            >
              {status || "Submitted"}
            </Tag>
            <PdfMissingTag count={record.pdfMissing} />
          </div>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 110,
        render: (_, record) => {
          const officialPdfs = [
            ...(record.acceptancePdfPath
              ? [
                  {
                    key: "pdf_acceptance",
                    icon: <FilePdfOutlined className="text-brand-primary" />,
                    label: (
                      <a
                        href={getFileUrl(record.acceptancePdfPath)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit"
                      >
                        Notice of Acceptance
                      </a>
                    ),
                  },
                ]
              : []),
            ...(record.adminPdfPath
              ? [
                  {
                    key: "pdf_admin",
                    icon: <FilePdfOutlined className="text-brand-primary" />,
                    label: (
                      <a
                        href={getFileUrl(record.adminPdfPath)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit"
                      >
                        Admin Compliance Review
                      </a>
                    ),
                  },
                ]
              : []),
            ...(record.consentPdfs || []).map((c) => ({
              key: `pdf_${c.type}_${c.personName}`,
              icon: <FilePdfOutlined className="text-emerald-600" />,
              label: (
                <a
                  href={getFileUrl(c.filePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  {c.type === "DirectorConsent"
                    ? "Director Consent"
                    : "Member Consent"}{" "}
                  - {c.personName}
                </a>
              ),
            })),
          ];

          // Action Menu Items
          const menuItems = [
            {
              key: "view_details",
              icon: <EyeOutlined className="text-brand-primary" />,
              label: "View Details",
              onClick: () => {
                setViewDetailsRecord(record);
                setIsViewDetailsOpen(true);
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
            {
              key: "client_pdf",
              icon: <FilePdfOutlined className="text-red-500" />,
              label: "Client Application PDF",
              onClick: () => {
                if (record.clientPdfPath) {
                  window.open(getFileUrl(record.clientPdfPath), "_blank");
                } else {
                  antdMsg.info(
                    "The Client Application PDF is not generated yet - use Regenerate PDFs.",
                  );
                }
              },
            },
            // Official PDFs: Admin Compliance Review + each Director / Member Consent
            officialPdfs.length > 0
              ? {
                  key: "pdf_menu",
                  icon: <FilePdfOutlined className="text-brand-primary" />,
                  label: "Official PDFs",
                  children: officialPdfs,
                }
              : null,
          ].filter(Boolean);

          // Move to Trash (or, in Trash, only View Details + Restore)
          const trashItem = trash.menuItem(record);
          const items =
            record.status === TRASH_KEY && trashItem
              ? [menuItems[0], { type: "divider" }, trashItem]
              : [
                  ...menuItems,
                  { type: "divider" },
                  regen.menuItem(record),
                  ...(trashItem ? [{ type: "divider" }, trashItem] : []),
                ];

          return (
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button size="small" icon={<MoreOutlined />}>
                Actions
              </Button>
            </Dropdown>
          );
        },
      },
    ];
  }, [getStatusTagColor, trash, regen]);

  // --------------------------------------------------------------------------
  // 7. BULK ACTIONS LIST
  // --------------------------------------------------------------------------
  const bulkActionOptions = useMemo(() => {
    if (statusName === TRASH_KEY) return trash.bulkOptions(true);
    return [...trash.bulkOptions(false)];
  }, [statusName, trash]);

  // --------------------------------------------------------------------------
  // 8. CUSTOM SEARCH FILTER COLUMNS
  // --------------------------------------------------------------------------
  const customFilterCols = useMemo(() => {
    return [
      { label: "Company Name", value: "companyName1" },
      { label: "Contact Name", value: "contactName" },
      { label: "Email Address", value: "contactEmail" },
      { label: "Reference Number", value: "referenceNumber" },
      { label: "State", value: "stateOfRegistration" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // 9. EXCEL & PDF EXPORT COLUMNS DEFINITION
  // --------------------------------------------------------------------------
  const exportColumns = useMemo(() => {
    return [
      { header: "Reference", key: "referenceNumber" },
      { header: "Company Name", key: "companyName1" },
      { header: "Contact Person", key: "contactName" },
      { header: "Contact Email", key: "contactEmail" },
      { header: "Mobile", key: "contactMobile" },
      { header: "State", key: "stateOfRegistration" },
      { header: "Status", key: "status" },
      { header: "Submitted Date", key: "createdAt" },
    ];
  }, []);

  // --------------------------------------------------------------------------
  // 10. RENDER COMPONENT
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-4">
      {/* Main Reusable DataTable Component */}
      <DataTable
        rowClassName={(record) =>
          freshIds.includes(String(record.id)) ? "live-new-row" : ""
        }
        columns={columns}
        dataSource={data}
        loading={loading}
        filter={true}
        filterPlaceholder="Search company registrations..."
        customFilter={true}
        customFilterLabel="Filter By Column"
        customFilterCol={customFilterCols}
        showSizeChanger={true}
        sizeChangerOptions={[10, 20, 50, 100]}
        bulkAction={bulkActionOptions}
        bulkActionHandler={handleBulkAction}
        scroll={{ x: 1200 }}
        extraHeader={
          <ExportButtons
            data={data}
            columns={exportColumns}
            filename={`Company_Registrations_${statusName}`}
          />
        }
      />

      {regen.modal}

      {/* View Details Modal */}
      <CompanyRegistrationViewDetails
        visible={isViewDetailsOpen}
        data={viewDetailsRecord}
        onReview={(record) => {
          // From the details modal straight into Review & Decision
          setIsViewDetailsOpen(false);
          setViewDetailsRecord(null);
          setReviewRecord(record);
          setIsReviewModalOpen(true);
        }}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setViewDetailsRecord(null);
          if (autoOpenRecord && typeof onAutoOpenHandled === "function")
            onAutoOpenHandled();
        }}
      />

      {/* Admin Compliance Review & Decision Modal */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-2">
            <EditOutlined className="text-brand-primary" />
            <span>Admin Review &amp; Compliance Decision</span>
          </div>
        }
        open={isReviewModalOpen}
        onCancel={() => {
          setIsReviewModalOpen(false);
          setReviewRecord(null);
        }}
        footer={null}
        width={850}
        destroyOnHidden
      >
        {reviewRecord && (
          <CompanyRegistrationAdminForm
            record={reviewRecord}
            onFinish={handleAdminDecisionSubmit}
            isSubmitting={isReviewSubmitting}
            onCancel={() => {
              if (isReviewSubmitting) return;
              setIsReviewModalOpen(false);
              setReviewRecord(null);
            }}
          />
        )}
      </Modal>
    </div>
  );
}
