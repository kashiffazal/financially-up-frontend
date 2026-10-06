"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Tag, Button, Dropdown, Popconfirm, App } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  MoreOutlined,
  SwapOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import GenericViewDetailsModal from "./GenericViewDetailsModal";
import { HTTP, antdMsg, getFileUrl } from "@/services";
import { getStatusColor, STANDARD_FORM_STATUS_LIST } from "./constants";

/**
 * ============================================================================
 * Generic Form Main Log Component
 * ============================================================================
 * Standardized data table view matching Company Registration (New) & Individual Engagement (New):
 * 1. Renders `DataTable` with universal search & column-specific dropdown filter.
 * 2. Record size selector (10, 20, 50, 100).
 * 3. Bottom-left bulk actions (Bulk Status Change, Bulk Delete) with Popconfirm.
 * 4. Header with CSV/Excel & PDF export buttons.
 * 5. Actions dropdown: View Details, Change Status (with confirmation modal), View PDF, Delete.
 * 6. Structured View Details Modal.
 */
export default function GenericMainLog({
  data = [],
  statusName = "All",
  statusList = STANDARD_FORM_STATUS_LIST,
  changeStatus,
  fetchData,
  loading = false,
  endpoint,
  statusUpdateEndpoint,
  deleteEndpoint,
  columns: customColumns,
  customFilterCols = [],
  exportColumns = [],
  filenamePrefix = "Form_Records",
  filterPlaceholder = "Search records...",
  viewDetailsTitle,
  viewDetailsIcon,
  renderViewDetails,
  extraActions = [],
  extraModals,
  autoOpenRecord = null,
  onAutoOpenHandled,
}) {
  const { modal } = App.useApp();

  // --------------------------------------------------------------------------
  // LOCAL COMPONENT STATE (MODALS & LOADERS)
  // --------------------------------------------------------------------------
  const [viewDetailsRecord, setViewDetailsRecord] = useState(null);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [statusLoader, setStatusLoader] = useState({});

  // Open the View Details modal for a record requested via `?open=<id>` (Global Search).
  // Adjusted during render (not in an effect) so the modal opens in the same pass.
  const [handledAutoOpen, setHandledAutoOpen] = useState(null);
  if (autoOpenRecord && autoOpenRecord !== handledAutoOpen) {
    setHandledAutoOpen(autoOpenRecord);
    setViewDetailsRecord(autoOpenRecord);
    setIsViewDetailsOpen(true);
  }

  // --------------------------------------------------------------------------
  // ROW ACTIONS: STATUS CHANGE CONFIRMATION MODAL
  // --------------------------------------------------------------------------
  const confirmStatusChange = useCallback(
    (record, targetStatus) => {
      const recordTitle =
        record.referenceNumber ||
        record.reference_number ||
        record.name ||
        record.legalName ||
        record.LegalName ||
        record.companyName1 ||
        record.FullName ||
        record.id ||
        "this record";

      modal.confirm({
        title: "Update Application Status",
        icon: <ExclamationCircleOutlined className="text-brand-primary" />,
        content: (
          <div className="py-2 space-y-2">
            <div>
              Are you sure you want to update the status of{" "}
              <strong>{recordTitle}</strong>?
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">From:</span>
              <Tag color={getStatusColor(record.status, statusList)}>
                {record.status || "N/A"}
              </Tag>
              <span className="text-slate-500">To:</span>
              <Tag
                color={getStatusColor(
                  targetStatus.key || targetStatus.label,
                  statusList
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
            const targetUrl = typeof statusUpdateEndpoint === "function"
              ? statusUpdateEndpoint(recordId, newStatusKey)
              : statusUpdateEndpoint || `${endpoint}/${recordId}`;

            await HTTP("PUT", targetUrl, {
              status: newStatusKey,
            });

            antdMsg.success(`Status updated to "${newStatusKey}" successfully.`);

            // Real-time optimistic update across tab buckets
            if (typeof changeStatus === "function") {
              changeStatus(record, targetStatus, record.status);
            } else if (typeof fetchData === "function") {
              fetchData();
            }
          } catch (err) {
            antdMsg.error(err?.message || "Failed to update record status.");
          } finally {
            setStatusLoader((prev) => ({ ...prev, [recordId]: false }));
          }
        },
      });
    },
    [endpoint, statusUpdateEndpoint, changeStatus, fetchData, modal, statusList]
  );

  // --------------------------------------------------------------------------
  // ROW ACTIONS: DELETE RECORD
  // --------------------------------------------------------------------------
  const handleDeleteRecord = useCallback(
    async (record) => {
      const recordId = record.id || record._id || record.key;
      try {
        const targetUrl = typeof deleteEndpoint === "function"
          ? deleteEndpoint(recordId)
          : deleteEndpoint || `${endpoint}/${recordId}`;

        await HTTP("DELETE", targetUrl);
        antdMsg.success("Record deleted successfully.");

        if (typeof fetchData === "function") {
          fetchData();
        }
      } catch (err) {
        antdMsg.error(err?.message || "Failed to delete record.");
      }
    },
    [deleteEndpoint, endpoint, fetchData]
  );

  // --------------------------------------------------------------------------
  // ACTION COLUMN GENERATOR HELPER
  // --------------------------------------------------------------------------
  const renderActionDropdown = useCallback(
    (record) => {
      const recordId = record.id || record._id || record.key;
      const isUpdating = Boolean(statusLoader[recordId]);

      // Status change submenu (exclude current status)
      const statusSubmenu = statusList
        .filter((st) => st.key !== record.status && st.label !== record.status)
        .map((st) => ({
          key: `status-${st.key}`,
          icon: st.icon,
          label: (
            <span className="flex items-center justify-between gap-3">
              <span>{st.label}</span>
              <Tag color={getStatusColor(st.key, statusList)} className="mr-0 text-[10px]">
                {st.key}
              </Tag>
            </span>
          ),
          onClick: () => confirmStatusChange(record, st),
        }));

      const pdfUrl = record.pdfUrl || record.pdf_path || record.pdfPath || record.clientPdfPath;
      const resolvedPdfUrl = pdfUrl ? getFileUrl(pdfUrl) : null;

      // Resolve custom extra actions if provided
      const resolvedExtraActions = typeof extraActions === "function"
        ? extraActions(record)
        : Array.isArray(extraActions)
        ? extraActions
        : [];

      const menuItems = [
        {
          key: "view-details",
          icon: <EyeOutlined className="text-blue-500" />,
          label: "View Details",
          onClick: () => {
            setViewDetailsRecord(record);
            setIsViewDetailsOpen(true);
          },
        },
        ...resolvedExtraActions,
        ...(resolvedPdfUrl
          ? [
              {
                key: "view-pdf",
                icon: <FilePdfOutlined className="text-red-500" />,
                label: "View Official PDF",
                onClick: () => window.open(resolvedPdfUrl, "_blank"),
              },
            ]
          : []),
        {
          type: "divider",
        },
        {
          key: "change-status",
          icon: <SwapOutlined className="text-amber-500" />,
          label: "Change Status to...",
          disabled: isUpdating,
          children: statusSubmenu,
        },
        {
          type: "divider",
        },
        {
          key: "delete-record",
          icon: <DeleteOutlined />,
          label: (
            <Popconfirm
              title="Delete Record"
              description="Are you sure you want to permanently delete this application record?"
              onConfirm={() => handleDeleteRecord(record)}
              okText="Yes, Delete"
              cancelText="Cancel"
              okButtonProps={{ danger: true }}
            >
              <span className="text-red-600 block w-full">Delete Record</span>
            </Popconfirm>
          ),
          danger: true,
        },
      ];

      return (
        <Dropdown menu={{ items: menuItems }} trigger={["click"]} placement="bottomRight">
          <Button
            type="text"
            size="small"
            className="w-8 h-8 flex items-center justify-center rounded-pill hover:bg-slate-100 dark:hover:bg-zinc-800"
            loading={isUpdating}
          >
            <MoreOutlined className="text-base" />
          </Button>
        </Dropdown>
      );
    },
    [confirmStatusChange, extraActions, handleDeleteRecord, statusList, statusLoader]
  );

  // --------------------------------------------------------------------------
  // TABLE COLUMNS ASSEMBLY
  // --------------------------------------------------------------------------
  const columns = useMemo(() => {
    const actionColumn = {
      title: "Action",
      key: "actions",
      fixed: "right",
      width: 80,
      align: "center",
      render: (_, record) => renderActionDropdown(record),
    };

    if (typeof customColumns === "function") {
      return customColumns({ renderActionDropdown, getStatusColor, confirmStatusChange });
    }

    if (Array.isArray(customColumns)) {
      // Append action column if not already present
      const hasAction = customColumns.some((col) => col.key === "actions" || col.key === "action");
      if (!hasAction) {
        return [...customColumns, actionColumn];
      }
      return customColumns;
    }

    return [actionColumn];
  }, [customColumns, renderActionDropdown, confirmStatusChange]);

  // --------------------------------------------------------------------------
  // BULK ACTION HANDLERS
  // --------------------------------------------------------------------------
  const bulkActionOptions = useMemo(() => {
    return [
      {
        label: "Mark as Approved",
        value: "bulk-approve",
        bulkActionMsg: "Are you sure you want to approve all selected records?",
        bulkActionBottomBtnLabel: "Approve Selected",
      },
      {
        label: "Mark as On Hold",
        value: "bulk-hold",
        bulkActionMsg: "Are you sure you want to place selected records on hold?",
        bulkActionBottomBtnLabel: "Hold Selected",
      },
      {
        label: "Delete Selected",
        value: "bulk-delete",
        bulkActionMsg: "Are you sure you want to permanently delete selected records?",
        bulkActionBottomBtnLabel: "Delete Selected",
      },
    ];
  }, []);

  const handleBulkAction = useCallback(
    async (selectedInfo, actionValue) => {
      const selectedIds = selectedInfo?.selectedRowKeys || [];
      if (!selectedIds.length) {
        antdMsg.warning("No records selected.");
        return;
      }

      try {
        if (actionValue === "bulk-approve" || actionValue === "bulk-hold") {
          const targetStatus = actionValue === "bulk-approve" ? "Approved" : "On Hold";
          await Promise.all(
            selectedIds.map((id) =>
              HTTP("PUT", `${endpoint}/${id}`, { status: targetStatus })
            )
          );
          antdMsg.success(`Selected records updated to "${targetStatus}".`);
        } else if (actionValue === "bulk-delete") {
          await Promise.all(
            selectedIds.map((id) => HTTP("DELETE", `${endpoint}/${id}`))
          );
          antdMsg.success("Selected records deleted successfully.");
        }

        if (typeof fetchData === "function") {
          fetchData();
        }
      } catch (err) {
        antdMsg.error("Bulk action failed partially or completely.");
      }
    },
    [endpoint, fetchData]
  );

  // --------------------------------------------------------------------------
  // RENDER COMPONENT
  // --------------------------------------------------------------------------
  return (
    <div className="w-full space-y-4">
      {/* Main Reusable DataTable Component */}
      <DataTable
        columns={columns}
        dataSource={data}
        loading={loading}
        filter={true}
        filterPlaceholder={filterPlaceholder}
        customFilter={customFilterCols.length > 0}
        customFilterLabel="Filter By Column"
        customFilterCol={customFilterCols}
        showSizeChanger={true}
        sizeChangerOptions={[10, 20, 50, 100]}
        bulkAction={bulkActionOptions}
        bulkActionHandler={handleBulkAction}
        scroll={{ x: 1200 }}
        extraHeader={
          exportColumns.length > 0 && (
            <ExportButtons
              data={data}
              columns={exportColumns}
              filename={`${filenamePrefix}_${statusName}`}
            />
          )
        }
      />

      {/* View Details Modal */}
      <GenericViewDetailsModal
        visible={isViewDetailsOpen}
        data={viewDetailsRecord}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setViewDetailsRecord(null);
          if (autoOpenRecord && typeof onAutoOpenHandled === "function") onAutoOpenHandled();
        }}
        title={viewDetailsTitle}
        icon={viewDetailsIcon}
        statusList={statusList}
        renderContent={renderViewDetails}
      />

      {/* Optional Extra Modals (e.g. Review/Approval) */}
      {typeof extraModals === "function" ? extraModals() : extraModals}
    </div>
  );
}
