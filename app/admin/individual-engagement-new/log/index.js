"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Tabs } from "antd";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  PauseCircleOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import IndividualEngagementMainLog from "./partial/mainLog";
import OpenRecordFromUrl from "@/components/admin/OpenRecordFromUrl";
import SearchFilterBanner, { filterStatusMapByIds } from "@/components/admin/SearchFilterBanner";
import { HTTP, antdMsg } from "@/services";

/**
 * ============================================================================
 * Master Status List Configuration
 * ============================================================================
 * Defines all available lifecycle statuses for individual client engagements,
 * complete with their unique key, display label, theme color, and Ant Design icon.
 */
export const INDIVIDUAL_ENG_STATUS_LIST = [
  {
    key: "Pending Review",
    label: "Pending Review",
    color: "warning",
    icon: <ClockCircleOutlined />,
  },
  {
    key: "Accepted",
    label: "Accepted",
    color: "success",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "Conditional Accept",
    label: "Conditional Accept",
    color: "processing",
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "Request Information",
    label: "Request Info",
    color: "purple",
    icon: <PauseCircleOutlined />,
  },
  {
    key: "Enhanced Monitoring",
    label: "Enhanced Monitoring",
    color: "cyan",
    icon: <EyeOutlined />,
  },
  {
    key: "Escalate",
    label: "Escalated",
    color: "volcano",
    icon: <ExclamationCircleOutlined />,
  },
  {
    key: "Declined",
    label: "Declined",
    color: "error",
    icon: <CloseCircleOutlined />,
  },
];

/**
 * ============================================================================
 * Individual Engagement Status Logs Container (`log/index.js`)
 * ============================================================================
 *
 * Architecture Role:
 * 1. Fetches all individual engagement records from the backend REST API.
 * 2. Groups records into separate arrays by their `status`.
 * 3. Maintains an "All" bucket containing all records.
 * 4. Renders horizontal Ant Design status tabs with dynamic, live-count badges.
 */
export default function IndividualEngagementLogModule() {
  // --------------------------------------------------------------------------
  // 1. STATE DEFINITIONS
  // --------------------------------------------------------------------------
  const [loading, setLoading] = useState(false);
  const [activeStatusKey, setActiveStatusKey] = useState("All");
  const [listDataByStatus, setListDataByStatus] = useState({ All: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  // Record requested via `?open=<id>` (Global Search) — opened by the "All" tab log
  const [autoOpenRecord, setAutoOpenRecord] = useState(null);
  // Global Search "View all" filter (?ids=…&q=…) — narrows every status tab
  const [searchFilter, setSearchFilter] = useState(null);
  const visibleByStatus = useMemo(
    () => filterStatusMapByIds(listDataByStatus, searchFilter?.ids),
    [listDataByStatus, searchFilter]
  );

  // --------------------------------------------------------------------------
  // 2. DATA FETCHING & GROUPING LOGIC
  // --------------------------------------------------------------------------
  const fetchRecords = useCallback(async () => {
    setLoading(true);
    try {
      const res = await HTTP("GET", "/new-individual-engagements");

      // Normalize array from response payload
      const records = res?.data?.records || res?.records || res?.data || [];
      const normalizedRecords = Array.isArray(records)
        ? records.map((r) => ({ ...r, key: r.id || r._id }))
        : [];

      // Step A: Initialize empty array buckets for all defined statuses
      const statusMap = {
        All: normalizedRecords,
      };

      INDIVIDUAL_ENG_STATUS_LIST.forEach((st) => {
        statusMap[st.key] = [];
      });

      // Step B: Push records into their respective status buckets
      normalizedRecords.forEach((item) => {
        const itemStatus = item.status || "Pending Review";
        if (!statusMap[itemStatus]) {
          statusMap[itemStatus] = [];
        }
        statusMap[itemStatus].push(item);
      });

      // Step C: Update state
      setListDataByStatus(statusMap);
    } catch (err) {
      antdMsg.error("Failed to load individual engagement records.");
    } finally {
      setLoading(false);
      setHasLoaded(true);
    }
  }, []);

  // Fetch records on initial component mount
  useEffect(() => {
    let active = true;
    const load = async () => {
      if (active) {
        await fetchRecords();
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [fetchRecords]);

  // --------------------------------------------------------------------------
  // DEEP LINK (?open=<id>) — OPEN A RECORD FROM GLOBAL SEARCH
  // --------------------------------------------------------------------------
  // The list endpoint returns every engagement, so no fetch-by-id fallback is needed.
  const handleOpenFromUrl = useCallback((record) => {
    setActiveStatusKey("All");
    // Fresh object so re-opening the same record from search still triggers the modal
    setAutoOpenRecord({ ...record });
  }, []);

  const handleAutoOpenHandled = useCallback(() => setAutoOpenRecord(null), []);

  const handleSearchFilter = useCallback((filter) => {
    setSearchFilter(filter);
    if (filter) setActiveStatusKey("All");
  }, []);

  // --------------------------------------------------------------------------
  // 3. GENERATE TABS WITH DYNAMIC LIVE-COUNT BADGES
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
            {visibleByStatus.All?.length || 0}
          </span>
        </span>
      ),
      children: (
        <IndividualEngagementMainLog
          data={visibleByStatus.All || []}
          statusName="All"
          fetchData={fetchRecords}
          loading={loading}
          autoOpenRecord={autoOpenRecord}
          onAutoOpenHandled={handleAutoOpenHandled}
        />
      ),
    };

    // 2. Status-specific tabs
    const statusTabs = INDIVIDUAL_ENG_STATUS_LIST.map((st) => {
      const count = visibleByStatus[st.key]?.length || 0;
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
          <IndividualEngagementMainLog
            data={visibleByStatus[st.key] || []}
            statusName={st.label}
            fetchData={fetchRecords}
            loading={loading}
          />
        ),
      };
    });

    return [allTab, ...statusTabs];
  }, [visibleByStatus, fetchRecords, loading, autoOpenRecord, handleAutoOpenHandled]);

  // --------------------------------------------------------------------------
  // 4. RENDER TABS
  // --------------------------------------------------------------------------
  return (
    <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm">
      <OpenRecordFromUrl
        records={listDataByStatus.All}
        ready={hasLoaded && !loading}
        onOpen={handleOpenFromUrl}
        onFilter={handleSearchFilter}
      />
      <SearchFilterBanner filter={searchFilter} shownCount={visibleByStatus.All?.length || 0} />
      <Tabs
        activeKey={activeStatusKey}
        onChange={setActiveStatusKey}
        items={tabItems}
        type="card"
        className="individual-engagement-status-tabs"
      />
    </div>
  );
}
