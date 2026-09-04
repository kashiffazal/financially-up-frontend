"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Tabs } from "antd";
import {
  ClockCircleOutlined,
  EyeOutlined,
  PauseCircleOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  RocketOutlined,
  CloseCircleOutlined,
  FormOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import CompanyRegistrationMainLog from "./partial/mainLog";
import { HTTP, antdMsg, LogDeleteRow, LogResetList } from "@/services";

/**
 * ============================================================================
 * Master Status List Configuration
 * ============================================================================
 * Defines all available lifecycle statuses for company registrations,
 * complete with their unique key, display label, theme color, and Ant Design icon.
 */
export const COMPANY_REG_STATUS_LIST = [
  {
    key: "Submitted",
    label: "Submitted",
    color: "warning",
    icon: <ClockCircleOutlined />,
  },
  {
    key: "Under Review",
    label: "Under Review",
    color: "processing",
    icon: <EyeOutlined />,
  },
  {
    key: "Pending Documents",
    label: "Pending Docs",
    color: "purple",
    icon: <PauseCircleOutlined />,
  },
  {
    key: "Approved",
    label: "Approved",
    color: "success",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "Approved With Conditions",
    label: "Approved w/ Cond.",
    color: "orange",
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "On Hold",
    label: "On Hold",
    color: "gold",
    icon: <PauseCircleOutlined />,
  },
  {
    key: "Lodged with ASIC",
    label: "Lodged w/ ASIC",
    color: "cyan",
    icon: <RocketOutlined />,
  },
  {
    key: "Declined",
    label: "Declined",
    color: "error",
    icon: <CloseCircleOutlined />,
  },
  {
    key: "Draft",
    label: "Draft",
    color: "default",
    icon: <FormOutlined />,
  },
];

/**
 * ============================================================================
 * Company Registration Status Logs Container (`log/index.js`)
 * ============================================================================
 *
 * Architecture Role:
 * 1. Fetches all company registration records from the backend API.
 * 2. Groups records into separate arrays by their `status` (e.g. statusMap['Submitted'], statusMap['Approved']).
 * 3. Maintains an "All" bucket containing all records.
 * 4. Renders horizontal Ant Design status tabs with dynamic, live-count badges.
 * 5. Provides instant real-time status synchronization without requiring full-page reloads.
 */
export default function CompanyRegistrationLogModule() {
  // --------------------------------------------------------------------------
  // 1. STATE DEFINITIONS
  // --------------------------------------------------------------------------

  // Loading spinner state during initial API fetch
  const [loading, setLoading] = useState(false);

  // Currently active status tab key (default: "All")
  const [activeStatusKey, setActiveStatusKey] = useState("All");

  // Dictionary object storing arrays of records keyed by status name
  // e.g. { All: [...], Submitted: [...], "Under Review": [...], Approved: [...] }
  const [listDataByStatus, setListDataByStatus] = useState({ All: [] });

  // --------------------------------------------------------------------------
  // 2. DATA FETCHING & GROUPING LOGIC
  // --------------------------------------------------------------------------

  /**
   * fetchRecords()
   * Loads all company registration applications from the REST API
   * and buckets each record into its corresponding status array.
   */
  const fetchRecords = useCallback(async () => {
    setLoading(true);
    try {
      const res = await HTTP("GET", "/new-company-registrations", {
        limit: 500,
      });

      // Normalize array from response payload
      const records = res?.data?.records || res?.records || res?.data || [];
      const normalizedRecords = Array.isArray(records)
        ? records.map((r) => ({ ...r, key: r.id || r._id }))
        : [];

      // Step A: Initialize empty array buckets for all defined statuses
      const statusMap = {
        All: normalizedRecords,
      };

      COMPANY_REG_STATUS_LIST.forEach((st) => {
        statusMap[st.key] = [];
      });

      // Step B: Push records into their respective status buckets
      normalizedRecords.forEach((item) => {
        const itemStatus = item.status || "Submitted";
        if (!statusMap[itemStatus]) {
          statusMap[itemStatus] = [];
        }
        statusMap[itemStatus].push(item);
      });

      // Step C: Update state
      setListDataByStatus(statusMap);
    } catch (err) {
      antdMsg.error("Failed to load company registration logs.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch records on initial component mount
  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  // --------------------------------------------------------------------------
  // 3. REAL-TIME STATUS UPDATE HANDLER (NO FULL PAGE RELOAD)
  // --------------------------------------------------------------------------

  /**
   * handleUpdateListOnChangeStatus()
   * When an admin changes the status of a record:
   * 1. Removes the record from its previous status tab bucket using `LogDeleteRow`.
   * 2. Adds the updated record to the new status tab bucket using `LogResetList`.
   * 3. Updates the "All" tab bucket in place.
   * This provides an instantaneous UI update and keeps tab count badges 100% accurate!
   */
  const handleUpdateListOnChangeStatus = useCallback(
    (row, targetStatus, oldStatus) => {
      const targetStatusKey =
        targetStatus.key || targetStatus.label || targetStatus;
      const updatedRow = { ...row, status: targetStatusKey };

      setListDataByStatus((prev) => {
        const updatedMap = { ...prev };

        // Step 1: Remove from old status bucket
        if (oldStatus && updatedMap[oldStatus]) {
          updatedMap[oldStatus] = LogDeleteRow(
            updatedRow,
            updatedMap[oldStatus],
          );
        }

        // Step 2: Prepend to new status bucket
        if (updatedMap[targetStatusKey]) {
          updatedMap[targetStatusKey] = LogResetList(
            updatedRow,
            updatedMap[targetStatusKey],
          );
        } else {
          updatedMap[targetStatusKey] = [updatedRow];
        }

        // Step 3: Update within "All" master bucket
        if (updatedMap.All) {
          updatedMap.All = LogResetList(updatedRow, updatedMap.All);
        }

        return updatedMap;
      });
    },
    [],
  );

  // --------------------------------------------------------------------------
  // 4. GENERATE TABS WITH DYNAMIC LIVE-COUNT BADGES
  // --------------------------------------------------------------------------
  const tabItems = useMemo(() => {
    // 1. "All" master tab
    const allTab = {
      key: "All",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <AppstoreOutlined />
          <span>All</span>
          <span className="text-xs px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
            {listDataByStatus.All?.length || 0}
          </span>
        </span>
      ),
      children: (
        <CompanyRegistrationMainLog
          data={listDataByStatus.All || []}
          statusName="All"
          statusList={COMPANY_REG_STATUS_LIST}
          changeStatus={handleUpdateListOnChangeStatus}
          fetchData={fetchRecords}
          loading={loading}
        />
      ),
    };

    // 2. Status-specific tabs
    const statusTabs = COMPANY_REG_STATUS_LIST.map((st) => {
      const count = listDataByStatus[st.key]?.length || 0;
      return {
        key: st.key,
        label: (
          <span className="flex items-center gap-1.5 font-medium">
            {st.icon}
            <span>{st.label}</span>
            {/* Live Count Badge */}
            <span
              className={`text-xs px-1.5 py-0.2 rounded-full font-mono ${
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
          <CompanyRegistrationMainLog
            data={listDataByStatus[st.key] || []}
            statusName={st.label}
            statusList={COMPANY_REG_STATUS_LIST}
            changeStatus={handleUpdateListOnChangeStatus}
            fetchData={fetchRecords}
            loading={loading}
          />
        ),
      };
    });

    return [allTab, ...statusTabs];
  }, [listDataByStatus, handleUpdateListOnChangeStatus, fetchRecords, loading]);

  // --------------------------------------------------------------------------
  // 5. RENDER TABS
  // --------------------------------------------------------------------------
  return (
    <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-sm">
      <Tabs
        activeKey={activeStatusKey}
        onChange={setActiveStatusKey}
        items={tabItems}
        type="card"
        className="company-registration-status-tabs"
      />
    </div>
  );
}
