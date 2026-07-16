"use client";

/**
 * ExportButtons Component
 * ========================
 * Reusable export component for CSV and Excel downloads.
 * Used across all admin modules — just pass the data, columns config, and filename.
 *
 * Props:
 * @param {Function} fetchData - Async function that returns the full dataset for export (not paginated)
 * @param {Array} columns - Array of { header: "Display Name", key: "dataKey" } defining export columns
 * @param {string} filenamePrefix - Prefix for the downloaded file (e.g., "individual-engagements")
 *
 * Usage:
 *   <ExportButtons
 *     fetchData={async () => await getEngagements({ page: 1, limit: 10000, status: "All" })}
 *     columns={[
 *       { header: "First Name", key: "FirstName" },
 *       { header: "Email", key: "email" },
 *     ]}
 *     filenamePrefix="individual-engagements"
 *   />
 */

import React, { useState } from "react";
import { Button, Space, message } from "antd";
import { FileExcelOutlined, DownloadOutlined } from "@ant-design/icons";

/**
 * Convert records array to CSV string and trigger browser download.
 * Handles escaping of commas, quotes, and newlines in cell values.
 * Adds BOM character for proper UTF-8 encoding in Excel.
 *
 * @param {Array} records - Array of record objects
 * @param {Array} columns - Column definitions with { header, key }
 * @param {string} filename - Download filename (without extension)
 */
const exportToCSV = (records, columns, filename) => {
  // Build CSV header row from column definitions
  const headers = columns.map((col) => col.header).join(",");

  // Build CSV data rows — escape commas and quotes in cell values
  const rows = records.map((record) =>
    columns
      .map((col) => {
        let value = record[col.key];
        if (value === null || value === undefined) return "";
        if (typeof value === "object") {
          value = JSON.stringify(value);
        } else {
          value = String(value);
        }
        // Escape double quotes and wrap in quotes if contains special characters
        if (value.includes(",") || value.includes('"') || value.includes("\n")) {
          value = `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      })
      .join(",")
  );

  const csvContent = [headers, ...rows].join("\n");

  // Create blob with BOM for UTF-8 encoding and trigger download
  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Convert records array to Excel-compatible HTML table and trigger .xls download.
 * Uses HTML table format that Excel can open natively (no external library needed).
 *
 * @param {Array} records - Array of record objects
 * @param {Array} columns - Column definitions with { header, key }
 * @param {string} filename - Download filename (without extension)
 */
const exportToExcel = (records, columns, filename) => {
  // Build HTML table header
  const headerRow = columns
    .map((col) => `<th>${col.header}</th>`)
    .join("");

  // Build HTML table data rows — escape HTML special characters
  const dataRows = records
    .map((record) => {
      const cells = columns
        .map((col) => {
          let value = record[col.key];
          if (value === null || value === undefined) value = "";
          else if (typeof value === "object") value = JSON.stringify(value);
          else value = String(value);
          
          return `<td>${value
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  // Build full Excel-compatible HTML document
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>
    <x:ExcelWorksheet><x:Name>Sheet1</x:Name><x:WorksheetOptions>
    <x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets>
    </x:ExcelWorkbook></xml><![endif]--></head>
    <body><table border="1"><thead><tr>${headerRow}</tr></thead><tbody>${dataRows}</tbody></table></body>
    </html>`;

  const blob = new Blob([html], {
    type: "application/vnd.ms-excel;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.xls`;
  link.click();
  URL.revokeObjectURL(url);
};

export default function ExportButtons({ fetchData, columns, filenamePrefix = "export" }) {
  const [loading, setLoading] = useState(false);

  /**
   * Handle export — calls fetchData to get ALL records,
   * then exports to the requested format.
   * @param {string} format - "csv" or "excel"
   */
  const handleExport = async (format) => {
    setLoading(true);
    try {
      const records = await fetchData();

      if (!records || records.length === 0) {
        message.warning("No data to export");
        return;
      }

      // Generate columns dynamically from the first record to export ALL DB columns
      const dynamicColumns = Object.keys(records[0]).map((key) => ({
        header: key,
        key: key,
      }));

      // Generate filename with current date
      const dateStr = new Date().toISOString().split("T")[0];
      const filename = `${filenamePrefix}-${dateStr}`;

      if (format === "csv") {
        exportToCSV(records, dynamicColumns, filename);
        message.success(`Exported ${records.length} records to CSV`);
      } else {
        exportToExcel(records, dynamicColumns, filename);
        message.success(`Exported ${records.length} records to Excel`);
      }
    } catch (error) {
      message.error("Failed to export data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space>
      <Button
        icon={<FileExcelOutlined />}
        onClick={() => handleExport("csv")}
        loading={loading}
      >
        CSV
      </Button>
      <Button
        icon={<DownloadOutlined />}
        onClick={() => handleExport("excel")}
        loading={loading}
      >
        Excel
      </Button>
    </Space>
  );
}
