"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Table,
  Popconfirm,
  Spin,
  Pagination,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./styles.css";

/**
 * ============================================================================
 * Ant Design v6.5.0 Compatible DataTable Component
 * ============================================================================
 *
 * Overview:
 * This component is a reusable, feature-packed data table designed to handle:
 * 1. Global text search across all columns or specific columns.
 * 2. Column-specific dropdown filtering ("Filter by: Name / Email / Reference").
 * 3. Dynamic page size changing (e.g. 10, 20, 30, 40, 50, 100 records per page).
 * 4. Bottom-Left Row Selection & Bulk Actions with Popconfirm confirmation.
 * 5. Bottom-Right Pagination aligned horizontally on the same row.
 * 6. Expandable rows, custom headers, export buttons, and full dark/light theme support.
 *
 * @param {Array} columns - Ant Design column definitions (title, dataIndex, render, sorter, etc.)
 * @param {Array} dataSource - Full list of data items to display and search within.
 * @param {boolean} loading - Boolean flag to display loading spinner.
 * @param {boolean} dataLoader - Alternative alias for loading.
 * @param {string|ReactNode} label - Optional table title displayed at top left.
 * @param {string|ReactNode} desc - Optional table subtitle/description.
 * @param {boolean} filter - If true, enables the search input box (default: true).
 * @param {string} filterLabel - Text label displayed above the search box (default: "Filter").
 * @param {string} filterPlaceholder - Placeholder text inside search box (default: "Filter data...").
 * @param {Array} filterCol - Optional array of column keys to search (defaults to all columns).
 * @param {boolean} customFilter - If true, displays the "Filter by" column dropdown selector.
 * @param {string} customFilterLabel - Label above the column selector (default: "Filter by").
 * @param {Array} customFilterCol - Array of { label, value } for the column selector dropdown.
 * @param {boolean|function} showSizeChanger - If true, enables the page size dropdown selector.
 * @param {string} sizeChangeLabel - Label above the page size dropdown (default: "Record per page").
 * @param {Array} sizeChangerOptions - Array of selectable page sizes (default: [10, 20, 30, 40, 50, 100]).
 * @param {Array} bulkAction - Array of bulk action options { label, value, bulkActionMsg, bulkActionBottomBtnLabel }.
 * @param {string} bulkActionLabel - Label for bulk action section (default: "Bulk Action").
 * @param {function} bulkActionHandler - Callback executed on bulk action confirmation: (selectedInfo, actionValue) => void.
 * @param {object|function} rowSelection - Custom row selection handler or configuration.
 * @param {object|boolean} pagination - Ant Design pagination configuration or false to disable.
 * @param {object} scroll - Table scroll configuration, e.g. { x: 1100 }.
 * @param {function} expandedRowRender - Custom render function for expandable rows.
 * @param {string} className - Additional CSS class applied to the table.
 * @param {string} classNameContainer - Additional CSS class applied to the outer container.
 * @param {boolean} smallTable - If true, renders the table in compact size.
 * @param {ReactNode} extraHeader - Slot for extra header components (e.g. Export buttons).
 * @param {function} onChange - Ant Design Table onChange handler (pagination, filters, sorter).
 */
export default function DataTable({
  columns = [],
  dataSource = [],
  dataLoader = false,
  loading = false,
  label = null,
  desc = null,
  filter = true,
  filterLabel = "Filter",
  filterPlaceholder = "Filter data...",
  filterCol = null,
  customFilter = false,
  customFilterLabel = "Filter by",
  customFilterCol = [],
  showSizeChanger = true,
  sizeChangeLabel = "Record per page",
  sizeChangerOptions = [10, 20, 30, 40, 50, 100],
  bulkAction = [],
  bulkActionLabel = "Bulk Action",
  bulkActionMsg = "",
  bulkActionBottomBtnLabel = "",
  bulkActionHandler = null,
  rowSelection: customRowSelection = null,
  pagination = {},
  scroll = { x: 1100 },
  expandedRowRender = null,
  className = "",
  classNameContainer = "",
  smallTable = false,
  extraHeader = null,
  onChange = null,
}) {
  // --------------------------------------------------------------------------
  // 1. COMPONENT STATE & FORM INSTANCE
  // --------------------------------------------------------------------------
  const [form] = Form.useForm();

  // Search query text typed by user
  const [searchText, setSearchText] = useState("");

  // Active column selected in the "Filter by" dropdown (null = search across all columns)
  const [selectedCustomFilterCol, setSelectedCustomFilterCol] = useState(null);

  // Current active page size (number of rows displayed per page)
  const [pageSize, setPageSize] = useState(
    pagination?.defaultPageSize || sizeChangerOptions[0] || 10,
  );

  // Current pagination page index (1-indexed)
  const [currentPage, setCurrentPage] = useState(pagination?.currentPage || 1);

  // Tracks selected rows for bulk actions (keys, database IDs, and row objects)
  const [selectedRowData, setSelectedRowData] = useState({
    selectedRowKeys: [],
    selectedRowIds: [],
    selectedRows: [],
  });

  // Currently selected action in the bulk action dropdown
  const [selectedBulkAction, setSelectedBulkAction] = useState("");

  // Validation error message for bulk actions
  const [bulkActionError, setBulkActionError] = useState("");

  // Controls the Popconfirm popup visibility for bulk action confirmation
  const [bulkConfirmOpen, setBulkConfirmOpen] = useState(false);

  // --------------------------------------------------------------------------
  // 2. SEARCH & FILTER LOGIC
  // --------------------------------------------------------------------------

  // Determine which column keys should be checked during search:
  // - If user picked a specific column in "Filter by", search only that column.
  // - If filterCol is passed as a prop, search those columns.
  // - Otherwise, auto-detect all columns that have a string dataIndex.
  const activeSearchCols = useMemo(() => {
    if (selectedCustomFilterCol) {
      return Array.isArray(selectedCustomFilterCol)
        ? selectedCustomFilterCol
        : [selectedCustomFilterCol];
    }
    if (filterCol && filterCol.length > 0) {
      return filterCol;
    }
    return columns
      .map((col) => col.dataIndex)
      .filter((idx) => typeof idx === "string" && idx.trim().length > 0);
  }, [selectedCustomFilterCol, filterCol, columns]);

  // Compute the filtered dataset based on search text and active columns:
  // Performs case-insensitive partial match across all active column fields.
  const filteredData = useMemo(() => {
    if (!dataSource || !Array.isArray(dataSource)) return [];
    if (!searchText || searchText.trim() === "") return dataSource;

    const query = searchText.trim().toLowerCase();
    return dataSource.filter((item) => {
      return activeSearchCols.some((colKey) => {
        const val = item[colKey];
        if (val === undefined || val === null) return false;
        return String(val).toLowerCase().includes(query);
      });
    });
  }, [dataSource, searchText, activeSearchCols]);

  // Handler: User types into the search input box
  const handleSearchChange = useCallback((e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  }, []);

  // Handler: User changes the "Filter by" column dropdown
  const handleCustomFilterColChange = useCallback(
    (value) => {
      setSelectedCustomFilterCol(value || null);
      form.setFieldsValue({ filter: "" });
      setSearchText("");
      setCurrentPage(1);
    },
    [form],
  );

  // Handler: User changes the rows-per-page dropdown
  const handlePageSizeChange = useCallback(
    (value) => {
      setPageSize(value);
      setCurrentPage(1);
      if (typeof showSizeChanger === "function") {
        showSizeChanger(1, value);
      }
    },
    [showSizeChanger],
  );

  // --------------------------------------------------------------------------
  // 3. BULK ACTION HANDLERS
  // --------------------------------------------------------------------------

  // Handler: Executes the chosen bulk action after user confirms the popup
  const handleBulkSubmit = useCallback(() => {
    if (!selectedBulkAction) {
      setBulkActionError("Please select a bulk action.");
      return;
    }
    if (selectedRowData.selectedRowKeys.length === 0) {
      setBulkActionError("At least one record must be selected.");
      return;
    }

    setBulkActionError("");
    setBulkConfirmOpen(false);

    // Call the parent component's bulkActionHandler callback
    if (typeof bulkActionHandler === "function") {
      bulkActionHandler(selectedRowData, selectedBulkAction);
    }
  }, [selectedBulkAction, selectedRowData, bulkActionHandler]);

  // Find the metadata object for the currently selected bulk action
  const activeBulkOption = useMemo(() => {
    return bulkAction.find((item) => item.value === selectedBulkAction);
  }, [bulkAction, selectedBulkAction]);

  // --------------------------------------------------------------------------
  // 4. TABLE ROW SELECTION CONFIGURATION
  // --------------------------------------------------------------------------

  // Configure Ant Design rowSelection for checkboxes
  const tableRowSelection = useMemo(() => {
    if (!bulkAction || bulkAction.length === 0) {
      if (customRowSelection && typeof customRowSelection === "object") {
        return customRowSelection;
      }
      return undefined;
    }

    return {
      selectedRowKeys: selectedRowData.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        const selectedRowIds = selectedRows.map((r) => r.id || r.key);
        const data = {
          selectedRowKeys,
          selectedRowIds,
          selectedRows,
        };
        setSelectedRowData(data);
        if (typeof customRowSelection === "function") {
          customRowSelection(selectedRowKeys, selectedRowIds, selectedRows);
        }
      },
    };
  }, [bulkAction, selectedRowData, customRowSelection]);

  // Custom filter dropdown options with "-Select-" as the reset option
  const customFilterOptions = useMemo(() => {
    return [
      { label: "-Select-", value: "" },
      ...customFilterCol.map((item) => ({
        label: item.label,
        value: item.value,
      })),
    ];
  }, [customFilterCol]);

  // Bulk action options formatted for Ant Design Select
  const bulkActionSelectOptions = useMemo(() => {
    return [
      { label: "- Select Action -", value: "" },
      ...bulkAction.map((item) => ({
        label: item.label,
        value: item.value,
      })),
    ];
  }, [bulkAction]);

  // Page size options formatted for Ant Design Select (numbers only like screenshot)
  const pageSizeSelectOptions = useMemo(() => {
    return sizeChangerOptions.map((opt) => ({
      label: `${opt}`,
      value: opt,
    }));
  }, [sizeChangerOptions]);

  const isLoading = loading || dataLoader;

  // --------------------------------------------------------------------------
  // 5. RENDER UI
  // --------------------------------------------------------------------------
  return (
    <div
      className={`c_k_table_0 ${classNameContainer} w-full space-y-4 text-slate-800 dark:text-zinc-200`}
    >
      <Form form={form} layout="vertical" component={false}>
        {/* ================================================================= */}
        {/* TOP CONTROLS & TOOLBAR                                            */}
        {/* ================================================================= */}
        <div className="flex flex-col gap-4 pb-2 border-b border-slate-100 dark:border-zinc-800">
          {/* Section A: Title & Subtitle (Optional) */}
          {label && (
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 m-0">
                {label}
              </h2>
              {desc && (
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 mt-0.5">
                  {desc}
                </p>
              )}
            </div>
          )}

          {/* Section B: Filter By, Filter, Export Buttons & Record per page Placement */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            {/* Left Cluster: Filter by & Filter search input */}
            <div className="flex flex-wrap items-end gap-3 flex-1">
              {/* 1. Custom Column Filter Dropdown */}
              {customFilter && customFilterCol.length > 0 && (
                <div className="w-full sm:w-[170px]">
                  <Form.Item
                    label={
                      <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400">
                        {customFilterLabel}
                      </span>
                    }
                    name="filterBy"
                    initialValue=""
                    className="!mb-0"
                  >
                    <Select
                      options={customFilterOptions}
                      onChange={handleCustomFilterColChange}
                      className="w-full"
                      placeholder="-Select-"
                    />
                  </Form.Item>
                </div>
              )}

              {/* 2. Global / Column Search Input */}
              {filter && (
                <div className="w-full sm:w-[240px]">
                  <Form.Item
                    label={
                      <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400">
                        {filterLabel}
                      </span>
                    }
                    name="filter"
                    className="!mb-0"
                  >
                    <Input
                      prefix={<SearchOutlined className="text-slate-400" />}
                      placeholder={filterPlaceholder}
                      value={searchText}
                      onChange={handleSearchChange}
                      allowClear
                    />
                  </Form.Item>
                </div>
              )}
            </div>

            {/* Right Cluster: Export Buttons (CSV / Excel) & Record per page Dropdown */}
            <div className="flex flex-wrap items-end gap-3 justify-start sm:justify-end">
              {/* Extra Header slot (e.g. ExportButtons) */}
              {extraHeader && (
                <div className="flex items-center gap-2 pb-0.5">
                  {extraHeader}
                </div>
              )}

              {/* Record per page Dropdown */}
              {showSizeChanger && (
                <div className="w-full sm:w-[130px]">
                  <Form.Item
                    label={
                      <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400 whitespace-nowrap">
                        {sizeChangeLabel}
                      </span>
                    }
                    name="pageSize"
                    initialValue={pageSize}
                    className="!mb-0 w-full"
                  >
                    <Select
                      options={pageSizeSelectOptions}
                      value={pageSize}
                      onChange={handlePageSizeChange}
                      className="w-full"
                    />
                  </Form.Item>
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>

      {/* ================================================================= */}
      {/* MAIN ANT DESIGN TABLE (PAGINATION MANAGED BELOW)                  */}
      {/* ================================================================= */}
      <Spin spinning={isLoading} description="Loading records...">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowSelection={tableRowSelection}
          pagination={false}
          scroll={scroll}
          expandable={
            expandedRowRender
              ? {
                  expandedRowRender,
                }
              : undefined
          }
          className={`${className} dataTable rounded-card overflow-hidden`}
          onChange={onChange}
          size={smallTable ? "small" : "middle"}
          rowKey={(record) => record.id || record._id || record.key}
        />
      </Spin>

      {/* ================================================================= */}
      {/* BOTTOM BAR: BULK ACTIONS (LEFT) & PAGINATION (RIGHT)              */}
      {/* ================================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
        {/* BOTTOM LEFT: BULK ACTIONS CONTROLS */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-start min-h-[36px]">
          {bulkAction &&
            bulkAction.length > 0 &&
            (selectedRowData.selectedRowKeys.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2">
                {/* Selected Row Count Badge */}
                <span className="text-xs font-semibold text-brand-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 px-2.5 py-1 rounded-pill">
                  {selectedRowData.selectedRowKeys.length} selected
                </span>

                {/* Action Selector */}
                <Select
                  options={bulkActionSelectOptions}
                  value={selectedBulkAction}
                  onChange={(val) => {
                    setSelectedBulkAction(val);
                    setBulkActionError("");
                  }}
                  className="min-w-[160px] sm:min-w-[190px]"
                  placeholder="- Select Action -"
                />

                {/* Popconfirm Confirm / Apply Button */}
                <Popconfirm
                  title={
                    bulkActionMsg ||
                    activeBulkOption?.bulkActionMsg ||
                    `Apply '${activeBulkOption?.label || selectedBulkAction}' to ${
                      selectedRowData.selectedRowKeys.length
                    } records?`
                  }
                  open={bulkConfirmOpen}
                  onConfirm={handleBulkSubmit}
                  onCancel={() => setBulkConfirmOpen(false)}
                  okText="Yes, Apply"
                  cancelText="Cancel"
                  okButtonProps={{
                    className: "!bg-brand-primary hover:!bg-brand-primary/90",
                  }}
                >
                  <Button
                    type="primary"
                    className="!bg-brand-primary hover:!bg-brand-primary/90 font-medium"
                    onClick={() => {
                      if (!selectedBulkAction) {
                        setBulkActionError("Please select action");
                        return;
                      }
                      setBulkConfirmOpen(true);
                    }}
                  >
                    {bulkActionBottomBtnLabel ||
                      activeBulkOption?.bulkActionBottomBtnLabel ||
                      "Apply"}
                  </Button>
                </Popconfirm>

                {/* Inline Error Message */}
                {bulkActionError && (
                  <span className="text-red-500 font-medium text-xs">
                    {bulkActionError}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs text-slate-400 dark:text-zinc-500">
                Select rows to enable bulk actions
              </span>
            ))}
        </div>

        {/* BOTTOM RIGHT: PAGINATION */}
        {pagination !== false && (
          <div className="flex justify-end w-full sm:w-auto">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredData.length}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              showSizeChanger={false}
              pageSizeOptions={sizeChangerOptions.map(String)}
              onChange={(page, pSize) => {
                setCurrentPage(page);
                if (pSize !== pageSize) {
                  setPageSize(pSize);
                }
              }}
              {...(typeof pagination === "object" ? pagination : {})}
            />
          </div>
        )}
      </div>
    </div>
  );
}
