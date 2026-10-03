"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Tabs } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import GenericMainLog from "./GenericMainLog";
import { HTTP, antdMsg, LogDeleteRow, LogResetList } from "@/services";
import { STANDARD_FORM_STATUS_LIST } from "./constants";

/**
 * ============================================================================
 * Generic Form Log Module Container (`components/admin/FormLogModule/index.jsx`)
 * ============================================================================
 *
 * Architecture Role:
 * 1. Automatically loads records from the specified backend REST `endpoint`.
 * 2. Normalizes records and buckets them by `status` into `statusMap`.
 * 3. Renders horizontal Ant Design card-style tabs with live-count badges matching
 *    Company Registration (New) and Individual Engagement (New).
 * 4. Provides instant real-time status synchronization without full-page reloads.
 * 5. Passes all module-specific table columns, filters, exports, and View Details views
 *    to `GenericMainLog`.
 */
export default function FormLogModule({
  endpoint,
  statusList = STANDARD_FORM_STATUS_LIST,
  defaultStatus = "New Query",
  columns,
  customFilterCols = [],
  exportColumns = [],
  filenamePrefix = "Form_Records",
  filterPlaceholder = "Search records...",
  viewDetailsTitle,
  viewDetailsIcon,
  renderViewDetails,
  extraActions,
  extraModals,
  normalizeRecord,
  queryLimit = 1000,
  statusUpdateEndpoint,
  deleteEndpoint,
}) {
  // --------------------------------------------------------------------------
  // STATE DEFINITIONS
  // --------------------------------------------------------------------------
  const [loading, setLoading] = useState(false);
  const [activeStatusKey, setActiveStatusKey] = useState("All");
  const [listDataByStatus, setListDataByStatus] = useState({ All: [] });

  // --------------------------------------------------------------------------
  // DATA FETCHING & BUCKETING LOGIC
  // --------------------------------------------------------------------------
  const fetchRecords = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true);
    try {
      const res = await HTTP("GET", endpoint, {
        limit: queryLimit,
      });

      // Normalize array from response payload
      const rawRecords = res?.data?.records || res?.records || res?.data || [];
      const recordsArray = Array.isArray(rawRecords) ? rawRecords : [];

      const normalizedRecords = recordsArray.map((r, index) => {
        const base = typeof normalizeRecord === "function" ? normalizeRecord(r) : r;
        return {
          ...base,
          key: base.id || base._id || base.key || `rec-${index}`,
        };
      });

      // Initialize empty array buckets for All and all defined statuses
      const statusMap = {
        All: normalizedRecords,
      };

      statusList.forEach((st) => {
        statusMap[st.key] = [];
      });

      // Push records into corresponding status buckets
      normalizedRecords.forEach((item) => {
        const itemStatus = item.status || defaultStatus;
        if (!statusMap[itemStatus]) {
          statusMap[itemStatus] = [];
        }
        statusMap[itemStatus].push(item);
      });

      setListDataByStatus(statusMap);
    } catch (err) {
      antdMsg.error(err?.message || `Failed to load ${filenamePrefix} records.`);
    } finally {
      setLoading(false);
    }
  }, [endpoint, queryLimit, normalizeRecord, statusList, defaultStatus, filenamePrefix]);

  // Fetch on mount or endpoint change
  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  // --------------------------------------------------------------------------
  // REAL-TIME STATUS UPDATE HANDLER (NO FULL PAGE RELOAD)
  // --------------------------------------------------------------------------
  const handleUpdateListOnChangeStatus = useCallback(
    (row, targetStatus, oldStatus) => {
      const targetStatusKey = targetStatus.key || targetStatus.label || targetStatus;
      const updatedRow = { ...row, status: targetStatusKey };

      setListDataByStatus((prev) => {
        const updatedMap = { ...prev };

        // 1. Remove from old status bucket
        if (oldStatus && updatedMap[oldStatus]) {
          updatedMap[oldStatus] = LogDeleteRow(updatedRow, updatedMap[oldStatus]);
        }

        // 2. Prepend to new status bucket
        if (updatedMap[targetStatusKey]) {
          updatedMap[targetStatusKey] = LogResetList(
            updatedRow,
            updatedMap[targetStatusKey]
          );
        } else {
          updatedMap[targetStatusKey] = [updatedRow];
        }

        // 3. Update within "All" master bucket
        if (updatedMap.All) {
          updatedMap.All = LogResetList(updatedRow, updatedMap.All);
        }

        return updatedMap;
      });
    },
    []
  );

  // --------------------------------------------------------------------------
  // GENERATE TABS WITH DYNAMIC LIVE-COUNT BADGES
  // --------------------------------------------------------------------------
  const tabItems = useMemo(() => {
    // 1. "All" master tab
    const allTab = {
      key: "All",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <AppstoreOutlined />
          <span>All</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
            {listDataByStatus.All?.length || 0}
          </span>
        </span>
      ),
      children: (
        <GenericMainLog
          data={listDataByStatus.All || []}
          statusName="All"
          statusList={statusList}
          changeStatus={handleUpdateListOnChangeStatus}
          fetchData={fetchRecords}
          loading={loading}
          endpoint={endpoint}
          statusUpdateEndpoint={statusUpdateEndpoint}
          deleteEndpoint={deleteEndpoint}
          columns={columns}
          customFilterCols={customFilterCols}
          exportColumns={exportColumns}
          filenamePrefix={filenamePrefix}
          filterPlaceholder={filterPlaceholder}
          viewDetailsTitle={viewDetailsTitle}
          viewDetailsIcon={viewDetailsIcon}
          renderViewDetails={renderViewDetails}
          extraActions={extraActions}
          extraModals={extraModals}
        />
      ),
    };

    // 2. Status-specific tabs
    const statusTabs = statusList.map((st) => {
      const count = listDataByStatus[st.key]?.length || 0;
      return {
        key: st.key,
        label: (
          <span className="flex items-center gap-1.5 font-medium">
            {st.icon}
            <span>{st.label}</span>
            {/* Live Count Badge */}
            <span
              className={`text-xs px-1.5 py-0.2 rounded-pill font-mono ${
                count > 0
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-400"
              }`}
            >
              {count}
            </span>
          </span>
        ),
        children: (
          <GenericMainLog
            data={listDataByStatus[st.key] || []}
            statusName={st.label}
            statusList={statusList}
            changeStatus={handleUpdateListOnChangeStatus}
            fetchData={fetchRecords}
            loading={loading}
            endpoint={endpoint}
            statusUpdateEndpoint={statusUpdateEndpoint}
            deleteEndpoint={deleteEndpoint}
            columns={columns}
            customFilterCols={customFilterCols}
            exportColumns={exportColumns}
            filenamePrefix={filenamePrefix}
            filterPlaceholder={filterPlaceholder}
            viewDetailsTitle={viewDetailsTitle}
            viewDetailsIcon={viewDetailsIcon}
            renderViewDetails={renderViewDetails}
            extraActions={extraActions}
            extraModals={extraModals}
          />
        ),
      };
    });

    return [allTab, ...statusTabs];
  }, [
    listDataByStatus,
    statusList,
    handleUpdateListOnChangeStatus,
    fetchRecords,
    loading,
    endpoint,
    statusUpdateEndpoint,
    deleteEndpoint,
    columns,
    customFilterCols,
    exportColumns,
    filenamePrefix,
    filterPlaceholder,
    viewDetailsTitle,
    viewDetailsIcon,
    renderViewDetails,
    extraActions,
    extraModals,
  ]);

  // --------------------------------------------------------------------------
  // RENDER TABS
  // --------------------------------------------------------------------------
  return (
    <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm">
      <Tabs
        activeKey={activeStatusKey}
        onChange={setActiveStatusKey}
        items={tabItems}
        type="card"
        className="form-registration-status-tabs"
      />
    </div>
  );
}
