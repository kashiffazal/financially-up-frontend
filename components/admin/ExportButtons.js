"use client";

/**
 * ExportButtons Component
 * ========================
 * Reusable, robust export component for CSV and Excel downloads.
 * Supports:
 * - Direct static array or async data fetching via `data`, `dataProvider`, or `fetchData`
 * - Column configurations via { header, key } or Ant Design { title, dataIndex }
 * - Dot-notation nested key resolution (e.g. "actor.name", "metadata.ip")
 * - Dynamic column generation if no explicit columns provided
 * - Native Excel HTML table generation and UTF-8 BOM CSV generation
 * - Context-safe notifications via `@/services` antdMsg
 */

import React, { useState } from "react";
import { Button, Space } from "antd";
import { FileExcelOutlined, DownloadOutlined } from "@ant-design/icons";
import { antdMsg } from "@/services";

/**
 * Resolve nested value from record using dot notation.
 * e.g. "actor.name" -> record.actor?.name
 */
const resolveNestedValue = (record, key) => {
  if (!record || key === undefined || key === null) return "";
  if (typeof key === "function") {
    try {
      return key(record);
    } catch {
      return "";
    }
  }

  const keys = String(key).split(".");
  let current = record;
  for (const k of keys) {
    if (current === null || current === undefined) return "";
    current = current[k];
  }

  if (current === null || current === undefined) return "";
  if (typeof current === "object") {
    try {
      return JSON.stringify(current);
    } catch {
      return String(current);
    }
  }
  return String(current);
};

/**
 * Convert records array to CSV string and trigger browser download.
 * Adds UTF-8 BOM for Microsoft Excel compatibility.
 */
const exportToCSV = (records, columns, filename) => {
  // Build CSV header row
  const headers = columns
    .map((col) => {
      let h = String(col.header || col.title || col.key || "");
      if (h.includes(",") || h.includes('"') || h.includes("\n")) {
        h = `"${h.replace(/"/g, '""')}"`;
      }
      return h;
    })
    .join(",");

  // Build CSV data rows
  const rows = records.map((record) =>
    columns
      .map((col) => {
        let value = resolveNestedValue(record, col.key || col.dataIndex);
        // Escape double quotes and enclose in quotes if needed
        if (
          value.includes(",") ||
          value.includes('"') ||
          value.includes("\n") ||
          value.includes("\r")
        ) {
          value = `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      })
      .join(","),
  );

  const csvContent = [headers, ...rows].join("\r\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Convert records array to Excel-compatible HTML workbook and trigger download.
 */
const exportToExcel = (records, columns, filename) => {
  const headerRow = columns
    .map((col) => {
      const h = String(col.header || col.title || col.key || "");
      return `<th style="background-color: #0b2545; color: #ffffff; font-weight: bold; padding: 8px; border: 1px solid #d9d9d9;">${h
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</th>`;
    })
    .join("");

  const dataRows = records
    .map((record, index) => {
      const bg = index % 2 === 0 ? "#ffffff" : "#f8fafc";
      const cells = columns
        .map((col) => {
          const value = resolveNestedValue(record, col.key || col.dataIndex);
          return `<td style="background-color: ${bg}; padding: 6px 8px; border: 1px solid #e2e8f0; vertical-align: top;">${value
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8">
      <!--[if gte mso 9]>
      <xml>
        <x:ExcelWorkbook>
          <x:ExcelWorksheets>
            <x:ExcelWorksheet>
              <x:Name>ExportData</x:Name>
              <x:WorksheetOptions>
                <x:DisplayGridlines/>
              </x:WorksheetOptions>
            </x:ExcelWorksheet>
          </x:ExcelWorksheets>
        </x:ExcelWorkbook>
      </xml>
      <![endif]-->
      <style>
        table { border-collapse: collapse; width: 100%; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 13px; }
      </style>
    </head>
    <body>
      <table border="1">${headerRow ? `<thead><tr>${headerRow}</tr></thead>` : ""}<tbody>${dataRows}</tbody></table>
    </body>
    </html>`;

  const blob = new Blob([html], {
    type: "application/vnd.ms-excel;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.xls`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function ExportButtons({
  data,
  dataProvider,
  fetchData,
  columns,
  filename,
  filenamePrefix = "export",
  className = "",
}) {
  const [loading, setLoading] = useState(false);

  /**
   * Handle export - retrieves dataset from data/dataProvider/fetchData,
   * normalizes columns, and triggers file generation.
   */
  const handleExport = async (format) => {
    setLoading(true);
    try {
      let records = [];

      // Determine dataset from available props
      if (Array.isArray(data)) {
        records = data;
      } else if (typeof data === "function") {
        records = await data();
      } else if (typeof dataProvider === "function") {
        records = await dataProvider();
      } else if (typeof fetchData === "function") {
        records = await fetchData();
      }

      if (!records || !Array.isArray(records) || records.length === 0) {
        antdMsg.warning("No records available to export");
        return;
      }

      // Normalize export columns
      let exportCols = [];
      if (columns && Array.isArray(columns) && columns.length > 0) {
        exportCols = columns.map((col) => ({
          header: col.header || col.title || col.label || col.key || col.dataIndex,
          key: col.key || col.dataIndex,
        }));
      } else {
        // Auto-generate columns from keys of first record
        exportCols = Object.keys(records[0] || {}).map((k) => ({
          header: k,
          key: k,
        }));
      }

      // Compute clean download filename
      const dateStr = new Date().toISOString().split("T")[0];
      const baseFilename =
        filename || `${filenamePrefix}-${dateStr}`;
      const cleanFilename = baseFilename.replace(/[^\w\d-_]/g, "_");

      if (format === "csv") {
        exportToCSV(records, exportCols, cleanFilename);
        antdMsg.success(`Exported ${records.length} records to CSV`);
      } else {
        exportToExcel(records, exportCols, cleanFilename);
        antdMsg.success(`Exported ${records.length} records to Excel`);
      }
    } catch (error) {
      console.error("[ExportButtons] Export failed:", error);
      antdMsg.error("Failed to export data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space size="small" className={className}>
      <Button
        icon={<FileExcelOutlined className="text-emerald-600 dark:text-emerald-400" />}
        onClick={() => handleExport("csv")}
        loading={loading}
        className="!h-9 !px-3.5 !rounded-lg border-slate-200 dark:border-zinc-700 hover:!border-brand-primary font-medium text-xs sm:text-sm text-slate-700 dark:text-zinc-200 shadow-sm transition-all"
      >
        CSV
      </Button>
      <Button
        icon={<DownloadOutlined className="text-brand-primary dark:text-emerald-400" />}
        onClick={() => handleExport("excel")}
        loading={loading}
        className="!h-9 !px-3.5 !rounded-lg border-slate-200 dark:border-zinc-700 hover:!border-brand-primary font-medium text-xs sm:text-sm text-slate-700 dark:text-zinc-200 shadow-sm transition-all"
      >
        Excel
      </Button>
    </Space>
  );
}
