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
 * 2. Column-specific dropdown filtering ("Filter By: Name / Email / Reference").
 * 3. Dynamic page size changing (e.g. 10, 20, 50, 100 rows per page).
 * 4. Row selection with bulk action dropdown and confirmation popup.
 * 5. Expandable rows, custom headers, export buttons, and full dark/light theme support.
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
 * @param {boolean} customFilter - If true, displays the "Filter By" column dropdown selector.
 * @param {string} customFilterLabel - Label above the column selector (default: "Filter By").
 * @param {Array} customFilterCol - Array of { label, value } for the column selector dropdown.
 * @param {boolean|function} showSizeChanger - If true, enables the page size dropdown selector.
 * @param {string} sizeChangeLabel - Label above the page size dropdown (default: "Records per page").
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
  customFilterLabel = "Filter By",
  customFilterCol = [],
  showSizeChanger = true,
  sizeChangeLabel = "Records per page",
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
  
  // Active column selected in the "Filter By" dropdown (null = search across all columns)
  const [selectedCustomFilterCol, setSelectedCustomFilterCol] = useState(null);
  
  // Current active page size (number of rows displayed per page)
  const [pageSize, setPageSize] = useState(
    pagination?.defaultPageSize || sizeChangerOptions[0] || 10
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
  // - If user picked a specific column in "Filter By", search only that column.
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

  // Handler: User changes the "Filter By" column dropdown
  const handleCustomFilterColChange = useCallback(
    (value) => {
      setSelectedCustomFilterCol(value || null);
      form.setFieldsValue({ filter: "" });
      setSearchText("");
      setCurrentPage(1);
    },
    [form]
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
    [showSizeChanger]
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
  // 4. TABLE ROW SELECTION & PAGINATION CONFIGURATION
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

  // Configure Ant Design Table pagination
  const tablePagination = useMemo(() => {
    if (pagination === false) return false;

    return {
      current: currentPage,
      pageSize: pageSize,
      total: filteredData.length,
      showTotal: (total, range) =>
        `${range[0]}-${range[1]} of ${total} items`,
      showSizeChanger: false, // Managed via custom top toolbar dropdown
      pageSizeOptions: sizeChangerOptions.map(String),
      onChange: (page, pSize) => {
        setCurrentPage(page);
        if (pSize !== pageSize) {
          setPageSize(pSize);
        }
      },
      ...pagination,
    };
  }, [pagination, currentPage, pageSize, filteredData.length, sizeChangerOptions]);

  // Custom filter dropdown options with "- All Fields -" as the reset option
  const customFilterOptions = useMemo(() => {
    return [
      { label: "- All Fields -", value: "" },
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

  // Page size options formatted for Ant Design Select
  const pageSizeSelectOptions = useMemo(() => {
    return sizeChangerOptions.map((opt) => ({
      label: `${opt} / page`,
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
          
          {/* Section A: Title, Subtitle & Extra Header Actions (Export buttons) */}
          <div className="flex flex-wrap items-center justify-between gap-3">
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

            {/* Extra Header slot (e.g. ExportButtons) */}
            {extraHeader && (
              <div className="flex items-center gap-2">{extraHeader}</div>
            )}
          </div>

          {/* Section B: Search Filter, Column Selector, Page Sizer & Bulk Actions Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-end">
            
            {/* 1. Custom Column Filter Dropdown */}
            {customFilter && customFilterCol.length > 0 && (
              <div className="md:col-span-3">
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
                    placeholder="- All Fields -"
                  />
                </Form.Item>
              </div>
            )}

            {/* 2. Global / Column Search Input */}
            {filter && (
              <div
                className={
                  customFilter && customFilterCol.length > 0
                    ? "md:col-span-4"
                    : "md:col-span-5"
                }
              >
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

            {/* 3. Page Size Selector Dropdown */}
            {showSizeChanger && (
              <div className="md:col-span-2">
                <Form.Item
                  label={
                    <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400">
                      {sizeChangeLabel}
                    </span>
                  }
                  name="pageSize"
                  initialValue={pageSize}
                  className="!mb-0"
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

            {/* 4. Bulk Action Bar (Active when 1 or more rows selected) */}
            {bulkAction && bulkAction.length > 0 && (
              <div className="md:col-span-3 flex items-end gap-2">
                {selectedRowData.selectedRowKeys.length > 0 ? (
                  <div className="flex flex-col w-full gap-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-brand-primary dark:text-emerald-400">
                        {selectedRowData.selectedRowKeys.length} selected
                      </span>
                      {bulkActionError && (
                        <span className="text-red-500 font-medium text-[11px]">
                          {bulkActionError}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Select
                        options={bulkActionSelectOptions}
                        value={selectedBulkAction}
                        onChange={(val) => {
                          setSelectedBulkAction(val);
                          setBulkActionError("");
                        }}
                        className="flex-1"
                        placeholder="Choose Action"
                      />

                      {/* Popconfirm for safety before running bulk actions */}
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
                          className:
                            "!bg-brand-primary hover:!bg-brand-primary/90",
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
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 dark:text-zinc-500 pb-2">
                    Select rows to enable bulk actions
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Form>

      {/* ================================================================= */}
      {/* MAIN ANT DESIGN TABLE                                             */}
      {/* ================================================================= */}
      <Spin spinning={isLoading} description="Loading records...">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowSelection={tableRowSelection}
          pagination={tablePagination}
          scroll={scroll}
          expandable={
            expandedRowRender
              ? {
                  expandedRowRender,
                }
              : undefined
          }
          className={`${className} dataTable rounded-xl overflow-hidden`}
          onChange={onChange}
          size={smallTable ? "small" : "middle"}
          rowKey={(record) => record.id || record._id || record.key}
        />
      </Spin>
    </div>
  );
}
