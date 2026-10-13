"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Tag, Button, Dropdown, App } from "antd";
import {
  EyeOutlined,
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
import { useTrashActions, trashModuleOf, TRASH_KEY } from "./trash";

/**
 * ============================================================================
 * Generic Form Main Log Component
 * ============================================================================
 * Standardized data table view matching Company Registration (New) & Individual Engagement (New):
 * 1. Renders `DataTable` with universal search & column-specific dropdown filter.
 * 2. Record size selector (10, 20, 50, 100).
 * 3. Bottom-left bulk actions (Bulk Status Change) with Popconfirm.
 * 4. Header with CSV/Excel & PDF export buttons.
 * 5. Actions dropdown: View Details, Change Status (with confirmation modal), View PDF.
 *    (No delete: records are kept for compliance record-keeping.)
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
  freshIds = [],
}) {
  const { modal } = App.useApp();

  // Trash: "Move to Trash" everywhere; in the Trash tab only View Details + Restore
  const inTrashTab = statusName === TRASH_KEY;
  const trash = useTrashActions({
    moduleKey: trashModuleOf(endpoint),
    onChanged: () =>
      typeof fetchData === "function" && fetchData({ silent: true }),
  });
  // Trash has its own actions, never the "Change Status to..." list
  const changeableStatuses = useMemo(
    () => (statusList || []).filter((st) => st.key !== TRASH_KEY),
    [statusList],
  );

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
        (record.name && record.email
          ? `${record.name} (${record.email})`
          : record.name) ||
        record.legalName ||
        record.LegalName ||
        record.companyName1 ||
        record.FullName ||
        record.email ||
        (record.id ? `record #${record.id}` : "") ||
        "this record";

      modal.confirm({
        title: "Update Status",
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
                  statusList,
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
            const targetUrl =
              typeof statusUpdateEndpoint === "function"
                ? statusUpdateEndpoint(recordId, newStatusKey)
                : statusUpdateEndpoint || `${endpoint}/${recordId}`;

            const res = await HTTP("PUT", targetUrl, {
              status: newStatusKey,
            });
            if (!res?.success) return; // the API's error message is already shown

            antdMsg.success(
              `Status updated to "${newStatusKey}" successfully.`,
            );

            // Use the server's updated record when it sends one (e.g. dates it set,
            // "changed by"), so View Details shows current values without a refresh
            const serverRow =
              res.data &&
              typeof res.data === "object" &&
              !Array.isArray(res.data) &&
              res.data.id === record.id
                ? res.data
                : null;

            // Real-time optimistic update across tab buckets
            if (typeof changeStatus === "function") {
              changeStatus(
                serverRow ? { ...record, ...serverRow } : record,
                targetStatus,
                record.status,
              );
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
    [
      endpoint,
      statusUpdateEndpoint,
      changeStatus,
      fetchData,
      modal,
      statusList,
    ],
  );

  // Records are never deleted (kept for compliance record-keeping), so there is
  // no delete action here and the API refuses DELETE requests.

  // --------------------------------------------------------------------------
  // ACTION COLUMN GENERATOR HELPER
  // --------------------------------------------------------------------------
  const renderActionDropdown = useCallback(
    (record) => {
      const recordId = record.id || record._id || record.key;
      const isUpdating = Boolean(statusLoader[recordId]);

      // Status change submenu (exclude current status)
      const statusSubmenu = changeableStatuses
        .filter((st) => st.key !== record.status && st.label !== record.status)
        .map((st) => ({
          key: `status-${st.key}`,
          icon: st.icon,
          label: (
            <span className="flex items-center justify-between gap-3">
              <span>{st.label}</span>
              <Tag
                color={getStatusColor(st.key, statusList)}
                className="mr-0 text-[10px]"
              >
                {st.key}
              </Tag>
            </span>
          ),
          onClick: () => confirmStatusChange(record, st),
        }));

      const pdfUrl =
        record.pdfUrl ||
        record.pdf_path ||
        record.pdfPath ||
        record.clientPdfPath;
      const resolvedPdfUrl = pdfUrl ? getFileUrl(pdfUrl) : null;

      // Resolve custom extra actions if provided
      const resolvedExtraActions =
        typeof extraActions === "function"
          ? extraActions(record)
          : Array.isArray(extraActions)
            ? extraActions
            : [];

      const viewDetailsItem = {
        key: "view-details",
        icon: <EyeOutlined className="text-blue-500" />,
        label: "View Details",
        onClick: () => {
          setViewDetailsRecord(record);
          setIsViewDetailsOpen(true);
        },
      };
      const trashItem = trash.menuItem(record);

      // In Trash: look at it or restore it, nothing else
      const menuItems =
        record.status === TRASH_KEY && trashItem
          ? [viewDetailsItem, { type: "divider" }, trashItem]
          : [
              viewDetailsItem,
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
              ...(trashItem ? [{ type: "divider" }, trashItem] : []),
            ];

      return (
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          placement="bottomRight"
        >
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
    [
      confirmStatusChange,
      extraActions,
      statusList,
      changeableStatuses,
      statusLoader,
      trash,
    ],
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
      return customColumns({
        renderActionDropdown,
        getStatusColor,
        confirmStatusChange,
      });
    }

    if (Array.isArray(customColumns)) {
      // Append action column if not already present
      const hasAction = customColumns.some(
        (col) => col.key === "actions" || col.key === "action",
      );
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
  // One "Mark as …" action per status of THIS log (e.g. Subscribed / Unsubscribed
  // for the newsletter, New / Contacted / Closed / Spam for enquiries), so bulk
  // changes always use statuses the server accepts.
  const bulkActionOptions = useMemo(
    () =>
      inTrashTab
        ? trash.bulkOptions(true)
        : [
            ...changeableStatuses.map((st) => ({
              label: `Mark as ${st.label}`,
              value: st.key,
              bulkActionMsg: `Change all selected records to "${st.label}"?`,
              bulkActionBottomBtnLabel: `Set ${st.label}`,
            })),
            ...trash.bulkOptions(false),
          ],
    [changeableStatuses, inTrashTab, trash],
  );

  const handleBulkAction = useCallback(
    async (selectedInfo, actionValue) => {
      const selectedIds = selectedInfo?.selectedRowKeys || [];
      if (!selectedIds.length) {
        antdMsg.warning("No records selected.");
        return;
      }
      // Move to Trash / Restore
      if (await trash.handleBulk(actionValue, selectedIds)) return;

      try {
        const target = (statusList || []).find((st) => st.key === actionValue);
        if (target) {
          // hideErrorMsg: one summary message instead of a toast per record
          const results = await Promise.all(
            selectedIds.map((id) =>
              HTTP(
                "PUT",
                `${endpoint}/${id}`,
                { status: target.key },
                false,
                true,
              ).catch(() => null),
            ),
          );
          const done = results.filter((r) => r?.success).length;
          const failed = selectedIds.length - done;
          if (done)
            antdMsg.success(
              `${done} record${done === 1 ? "" : "s"} set to "${target.label}".`,
            );
          if (failed)
            antdMsg.error(
              `${failed} record${failed === 1 ? "" : "s"} couldn't be updated.`,
            );
        }

        if (typeof fetchData === "function") {
          fetchData();
        }
      } catch (err) {
        antdMsg.error("Bulk action failed partially or completely.");
      }
    },
    [endpoint, fetchData, statusList, trash],
  );

  // --------------------------------------------------------------------------
  // RENDER COMPONENT
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
          if (autoOpenRecord && typeof onAutoOpenHandled === "function")
            onAutoOpenHandled();
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
