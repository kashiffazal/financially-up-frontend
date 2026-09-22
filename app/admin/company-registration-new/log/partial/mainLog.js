"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Tag, Button, Dropdown, Modal, Popconfirm, App } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  MoreOutlined,
  SwapOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import CompanyRegistrationViewDetails from "../../viewDetails";
import CompanyRegistrationAdminForm from "@/components/admin/forms/company-registration-admin";
import { HTTP, antdMsg, getFileUrl } from "@/services";

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
 *    - "Delete Record": Popconfirm confirmation to remove application.
 * 4. Handles Bulk Actions (e.g. Bulk Approve, Bulk Hold, Bulk Lodge with ASIC, Bulk Delete).
 * 5. Provides one-click Excel & PDF export via `ExportButtons`.
 */
export default function CompanyRegistrationMainLog({
  data = [],
  statusName = "All",
  statusList = [],
  changeStatus,
  fetchData,
  loading = false,
}) {
  // Context-aware Ant Design dynamic instances (Modal, Message, Notification)
  const { modal } = App.useApp();

  // --------------------------------------------------------------------------
  // 1. LOCAL COMPONENT STATE (MODALS & LOADERS)
  // --------------------------------------------------------------------------

  // Controls View Details modal visibility & active record
  const [viewDetailsRecord, setViewDetailsRecord] = useState(null);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);

  // Controls Admin Compliance Review modal visibility & active record
  const [reviewRecord, setReviewRecord] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Tracks individual row status loaders during async updates
  const [statusLoader, setStatusLoader] = useState({});

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

  // --------------------------------------------------------------------------
  // 3. ROW ACTIONS: STATUS CHANGE CONFIRMATION MODAL
  // --------------------------------------------------------------------------

  /**
   * confirmStatusChange()
   * Opens an Ant Design confirmation modal before applying a status change.
   * Uses context-aware `modal.confirm` from Ant Design's `<App>` provider.
   * On confirmation, performs PUT /new-company-registrations/:id/status
   * and invokes the parent's `changeStatus` callback for real-time synchronization.
   */
  const confirmStatusChange = useCallback(
    (record, targetStatus) => {
      modal.confirm({
        title: "Update Company Registration Status",
        icon: <ExclamationCircleOutlined className="text-brand-primary" />,
        content: (
          <div className="py-2 space-y-2">
            <div>
              Are you sure you want to update the status of{" "}
              <strong>{record.companyName1 || record.referenceNumber}</strong>?
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">From:</span>
              <Tag color={getStatusTagColor(record.status)}>
                {record.status}
              </Tag>
              <span className="text-slate-500">To:</span>
              <Tag
                color={getStatusTagColor(
                  targetStatus.key || targetStatus.label,
                )}
              >
                {targetStatus.label || targetStatus.key}
              </Tag>
            </div>
          </div>
        ),
        okText: "Yes, Update Status",
        cancelText: "Cancel",
        okButtonProps: {
          className: "!bg-brand-primary hover:!bg-brand-primary/90",
        },
        onOk: async () => {
          const recordId = record.id || record._id || record.key;
          setStatusLoader((prev) => ({ ...prev, [recordId]: true }));
          try {
            const newStatusKey = targetStatus.key || targetStatus.label;
            await HTTP("PUT", `/new-company-registrations/${recordId}/status`, {
              status: newStatusKey,
            });

            antdMsg.success(
              `Status updated to '${newStatusKey}' successfully.`,
            );

            // Notify parent component to update state in real-time
            if (typeof changeStatus === "function") {
              changeStatus(record, targetStatus, record.status);
            } else if (typeof fetchData === "function") {
              fetchData();
            }
          } catch (err) {
            antdMsg.error(`Failed to update status: ${err.message || "Error"}`);
          } finally {
            setStatusLoader((prev) => ({ ...prev, [recordId]: false }));
          }
        },
      });
    },
    [changeStatus, fetchData, getStatusTagColor, modal],
  );

  // --------------------------------------------------------------------------
  // 4. ROW ACTIONS: SINGLE RECORD DELETION
  // --------------------------------------------------------------------------
  const handleDeleteRecord = useCallback(
    async (record) => {
      const recordId = record.id || record._id || record.key;
      try {
        await HTTP("DELETE", `/new-company-registrations/${recordId}`);
        antdMsg.success("Company registration record deleted successfully.");
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
  // 5. BULK ACTION HANDLER (MULTI-ROW SELECTION)
  // --------------------------------------------------------------------------
  const handleBulkAction = useCallback(
    async (selectedRowsInfo, actionValue) => {
      const { selectedRowKeys } = selectedRowsInfo;
      if (!selectedRowKeys || selectedRowKeys.length === 0) return;

      try {
        if (actionValue === "DELETE") {
          // Bulk delete operation
          await Promise.all(
            selectedRowKeys.map((id) =>
              HTTP("DELETE", `/new-company-registrations/${id}`),
            ),
          );
          antdMsg.success(
            `Successfully deleted ${selectedRowKeys.length} records.`,
          );
        } else {
          // Bulk status transition operation
          await Promise.all(
            selectedRowKeys.map((id) =>
              HTTP("PUT", `/new-company-registrations/${id}/status`, {
                status: actionValue,
              }),
            ),
          );
          antdMsg.success(
            `Updated ${selectedRowKeys.length} records to '${actionValue}'.`,
          );
        }

        if (typeof fetchData === "function") {
          fetchData();
        }
      } catch (err) {
        antdMsg.error(`Bulk action failed: ${err.message || "Error"}`);
      }
    },
    [fetchData],
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
        render: (status) => (
          <Tag
            color={getStatusTagColor(status)}
            className="font-semibold text-[11.5px] py-0.5 px-2.5 rounded-pill"
          >
            {status || "Submitted"}
          </Tag>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 110,
        render: (_, record) => {
          const pdfUrl = getFileUrl(record.pdf_path || record.pdfPath);

          // Change Status Submenu Items
          const statusChangeItems = statusList
            .filter((s) => s.key !== record.status && s.label !== record.status)
            .map((s) => ({
              key: `status_${s.key || s.label}`,
              label: (
                <div
                  className="flex items-center gap-2 py-0.5"
                  onClick={() => confirmStatusChange(record, s)}
                >
                  <Tag color={s.color || "default"} className="!mr-0 text-xs">
                    {s.label || s.key}
                  </Tag>
                </div>
              ),
            }));

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
            pdfUrl && pdfUrl !== "#"
              ? {
                  key: "view_pdf",
                  icon: <FilePdfOutlined className="text-emerald-600" />,
                  label: (
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit"
                    >
                      View Official PDF
                    </a>
                  ),
                }
              : null,
            { type: "divider" },
            {
              key: "change_status",
              icon: <SwapOutlined className="text-amber-500" />,
              label: "Change Status to...",
              children: statusChangeItems,
            },
            { type: "divider" },
            {
              key: "delete",
              danger: true,
              icon: <DeleteOutlined />,
              label: (
                <Popconfirm
                  title="Delete Company Registration"
                  description="Are you sure you want to delete this company registration?"
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
            <Dropdown
              menu={{ items: menuItems }}
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
  }, [confirmStatusChange, getStatusTagColor, handleDeleteRecord, statusList]);

  // --------------------------------------------------------------------------
  // 7. BULK ACTIONS LIST
  // --------------------------------------------------------------------------
  const bulkActionOptions = useMemo(() => {
    return [
      {
        label: "Mark as Approved",
        value: "Approved",
        bulkActionMsg:
          "Are you sure you want to mark all selected records as Approved?",
      },
      {
        label: "Mark as Under Review",
        value: "Under Review",
        bulkActionMsg: "Move selected records to Under Review?",
      },
      {
        label: "Mark as On Hold",
        value: "On Hold",
        bulkActionMsg: "Place selected records on administrative hold?",
      },
      {
        label: "Mark as Lodged with ASIC",
        value: "Lodged with ASIC",
        bulkActionMsg: "Update selected records as Lodged with ASIC?",
      },
      {
        label: "Delete Selected",
        value: "DELETE",
        bulkActionMsg:
          "WARNING: Are you sure you want to delete all selected records permanently?",
      },
    ];
  }, []);

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

      {/* View Details Modal */}
      <CompanyRegistrationViewDetails
        visible={isViewDetailsOpen}
        data={viewDetailsRecord}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setViewDetailsRecord(null);
        }}
      />

      {/* Admin Compliance Review & Decision Modal */}
      <Modal
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
            onFinish={() => {
              setIsReviewModalOpen(false);
              setReviewRecord(null);
              if (typeof fetchData === "function") {
                fetchData();
              }
            }}
          />
        )}
      </Modal>
    </div>
  );
}
