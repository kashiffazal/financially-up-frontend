# Ant Design DataTable Component (`DataTable`)

The `DataTable` component is a high-performance, reusable table wrapper built for **Next.js 16 + React 19** and **Ant Design v6.5.0**. It provides an out-of-the-box management toolbar with real-time text search, column-specific dropdown filtering, page size selector, row selection with bulk actions, and dark/light mode theming.

---

## 1. Features

- **Global & Column Search**: Real-time filtering across all or user-selected columns.
- **Custom Column Filter**: Dropdown to filter records by specific fields (e.g. Email, Reference Number, Status).
- **Bulk Operations**: Multi-row selection with Popconfirm confirmation and custom action triggers.
- **Dynamic Page Size Changer**: Integrated selector for records per page (`10, 20, 50, 100`).
- **Responsive Layout**: Built-in horizontal scroll handling (`scroll={{ x: 1200 }}`) and expandable row support.
- **Light & Dark Mode**: Fully compatible with Ant Design v6 design tokens and Tailwind CSS dark mode.

---

## 2. Basic Usage

```jsx
import React, { useState } from "react";
import { Tag } from "antd";
import DataTable from "@/components/mutual/andt-data-table-component";

export default function MyBasicTable({ data = [] }) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <DataTable
      label="Users Directory"
      desc="List of all registered system users"
      columns={columns}
      dataSource={data}
      filter={true}
      filterPlaceholder="Search users..."
      showSizeChanger={true}
      sizeChangerOptions={[10, 20, 50, 100]}
      scroll={{ x: 800 }}
    />
  );
}
```

---

## 3. Advanced Usage (Bulk Actions + Column Selector Filter + Export)

```jsx
import React from "react";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import { antdMsg } from "@/services";

export default function AdvancedTable({ records = [], onRefresh }) {
  const columns = [
    { title: "Ref #", dataIndex: "referenceNumber", key: "referenceNumber", width: 140 },
    { title: "Company Name", dataIndex: "companyName", key: "companyName" },
    { title: "Contact", dataIndex: "contactName", key: "contactName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  // Specific columns available for the "Filter By" dropdown
  const customFilterCol = [
    { label: "Company Name", value: "companyName" },
    { label: "Contact Name", value: "contactName" },
    { label: "Email Address", value: "email" },
    { label: "Reference #", value: "referenceNumber" },
  ];

  // Bulk actions configuration
  const bulkAction = [
    {
      label: "Approve Selected",
      value: "Approved",
      bulkActionMsg: "Are you sure you want to mark all selected records as Approved?",
    },
    {
      label: "Hold Selected",
      value: "On Hold",
      bulkActionMsg: "Are you sure you want to put selected records on hold?",
    },
    {
      label: "Delete Selected",
      value: "DELETE",
      bulkActionMsg: "WARNING: This will permanently delete selected records.",
    },
  ];

  const handleBulkAction = async (selectedRowsInfo, actionValue) => {
    const { selectedRowKeys, selectedRows } = selectedRowsInfo;
    console.log("Selected IDs:", selectedRowKeys);
    console.log("Action to apply:", actionValue);

    // Call your backend API here...
    antdMsg.success(`Applied '${actionValue}' to ${selectedRowKeys.length} records.`);
    if (onRefresh) onRefresh();
  };

  return (
    <DataTable
      columns={columns}
      dataSource={records}
      label="Company Registrations Log"
      desc="Manage and filter registrations with bulk status updates"
      // Search options
      filter={true}
      filterPlaceholder="Search registrations..."
      // Column selector options
      customFilter={true}
      customFilterLabel="Filter By Field"
      customFilterCol={customFilterCol}
      // Page size options
      showSizeChanger={true}
      sizeChangeLabel="Rows per page"
      sizeChangerOptions={[10, 25, 50, 100]}
      // Bulk actions
      bulkAction={bulkAction}
      bulkActionLabel="Bulk Action"
      bulkActionHandler={handleBulkAction}
      // Extra header actions (e.g. Export buttons)
      extraHeader={
        <ExportButtons
          data={records}
          columns={[
            { header: "Ref #", key: "referenceNumber" },
            { header: "Company Name", key: "companyName" },
            { header: "Email", key: "email" },
          ]}
          filename="Company_Registrations"
        />
      }
      scroll={{ x: 1100 }}
    />
  );
}
```

---

## 4. Props Reference Table

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Array<object>` | `[]` | Ant Design Table column definitions. |
| `dataSource` | `Array<object>` | `[]` | Array of data records to display. |
| `loading` / `dataLoader` | `boolean` | `false` | Shows loading spinner over table. |
| `label` | `ReactNode` | `null` | Optional heading title displayed in the toolbar. |
| `desc` | `ReactNode` | `null` | Optional description/subtitle beneath the label. |
| `filter` | `boolean` | `true` | Enables/disables the search input filter. |
| `filterLabel` | `string` | `"Filter"` | Label above the search input. |
| `filterPlaceholder` | `string` | `"Filter data..."` | Placeholder text inside the search input. |
| `filterCol` | `Array<string>` | `null` | Array of column `dataIndex` keys to search across (defaults to all columns). |
| `customFilter` | `boolean` | `false` | Enables the "Filter By" column dropdown selector. |
| `customFilterLabel` | `string` | `"Filter By"` | Label for the column dropdown selector. |
| `customFilterCol` | `Array<{ label, value }>` | `[]` | List of column options for the custom filter dropdown. |
| `showSizeChanger` | `boolean \| function` | `true` | Shows records per page selector dropdown. |
| `sizeChangeLabel` | `string` | `"Records per page"` | Label for the page size selector. |
| `sizeChangerOptions` | `Array<number>` | `[10, 20, 30, 40, 50, 100]` | Available page size choices. |
| `bulkAction` | `Array<{ label, value, bulkActionMsg?, bulkActionBottomBtnLabel? }>` | `[]` | Bulk actions list. Automatically enables checkboxes when provided. |
| `bulkActionLabel` | `string` | `"Bulk Action"` | Header label for bulk action group. |
| `bulkActionHandler` | `(selectedInfo, actionValue) => void` | `null` | Callback executed when user confirms a bulk action. |
| `rowSelection` | `object \| function` | `null` | Custom row selection callback or Ant Design rowSelection object. |
| `pagination` | `object \| boolean` | `{}` | Ant Design pagination configuration or `false` to disable. |
| `scroll` | `object` | `{ x: 1100 }` | Ant Design Table scroll configuration (e.g. `{ x: 1200, y: 500 }`). |
| `expandedRowRender` | `(record) => ReactNode` | `null` | Callback to render custom expandable row content. |
| `extraHeader` | `ReactNode` | `null` | Top-right header slot for buttons, tags, or export components. |
| `className` | `string` | `""` | CSS classes applied directly to the Table element. |
| `classNameContainer`| `string` | `""` | CSS classes applied to the outer wrapper container. |
| `smallTable` | `boolean` | `false` | Renders the table in compact/small mode. |

---

## 5. Ant Design v6.5.0 Compliance Notes

- **`<Select>`**: Uses modern `options={[ { label, value } ]}` prop instead of `<Select.Option>`.
- **`<Popconfirm>`**: Uses `open` and `onOpenChange` instead of deprecated `visible`.
- **`<Dropdown>`**: Uses `menu={{ items }}` instead of deprecated `overlay={<Menu>}`.
- **`<Alert>`**: Always use `title` instead of deprecated `message` prop.
- **Row Keys**: Ensures every row has a unique key via `rowKey={(record) => record.id || record.key}`.