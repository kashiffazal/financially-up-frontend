"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Tabs,
  Table,
  Tag,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Typography,
  Select,
  Breadcrumb,
  Dropdown,
  message,
  Spin,
  Tooltip,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  IdcardOutlined,
  CheckCircleOutlined,
  UnorderedListOutlined,
  QuestionCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  PauseCircleOutlined,
  FormOutlined,
  SearchOutlined,
  HomeOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  DownOutlined,
  SwapOutlined,
  LinkOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  getRecords,
  updateRecord,
  deleteRecord,
} from "@/services/smsfRegistrations.service";
import ExportButtons from "@/components/admin/ExportButtons";

const { Title, Text } = Typography;

// ============================
// Constants - Status list used across tabs, dropdowns, and tags
// ============================
const STATUS_LIST = [
  {
    key: "New Query",
    label: "New Query",
    color: "processing",
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "Pending",
    label: "Pending",
    color: "warning",
    icon: <ClockCircleOutlined />,
  },
  {
    key: "Approved",
    label: "Approved",
    color: "success",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "Disapproved",
    label: "Disapproved",
    color: "error",
    icon: <CloseCircleOutlined />,
  },
  {
    key: "On Hold",
    label: "On Hold",
    color: "purple",
    icon: <PauseCircleOutlined />,
  },
  { key: "Delete", label: "Delete", color: "error", icon: <DeleteOutlined /> },
  { key: "Draft", label: "Draft", color: "default", icon: <FormOutlined /> },
];

/**
 * Helper to get the Tag color for a given status string
 * @param {string} status - The status value
 * @returns {string} Ant Design Tag color
 */
const getStatusColor = (status) => {
  const found = STATUS_LIST.find((s) => s.key === status);
  return found ? found.color : "default";
};

// Export column definitions - defines which fields to include in CSV/Excel exports
const EXPORT_COLUMNS = [
  { header: "ID", key: "id" },
  { header: "SMSF Name", key: "NameOfSMSF" },
  { header: "Founder", key: "Founder" },
  { header: "Client Name", key: "NameClient" },
  { header: "Phone", key: "mobileNumber" },
  { header: "Status", key: "status" },
  { header: "Created At", key: "createdAt" },
];

export default function SmsfRegistrationsPage() {
  // ============================
  // State Management
  // ============================
  const [data, setData] = useState([]); // Table data from API
  const [loading, setLoading] = useState(false); // Loading spinner state
  const [activeTab, setActiveTab] = useState("All"); // Active status tab
  const [searchText, setSearchText] = useState(""); // Search input value
  const [filterBy, setFilterBy] = useState("SMSF Name"); // Selected filter column

  // Pagination state (server-side pagination)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Modal states for the approval popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();

  // ============================
  // Data Fetching
  // ============================

  /**
   * Fetch engagements from the API with current filters and pagination.
   * Called on mount, tab change, pagination change, and after mutations.
   */
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getRecords({
        page: pagination.current,
        limit: pagination.pageSize,
        status: activeTab,
        search: searchText || undefined,
      });

      // Map API records to include a 'key' prop for Ant Design Table
      const records = result.records.map((record) => ({
        ...record,
        key: record.id,
      }));

      setData(records);
      setPagination((prev) => ({
        ...prev,
        total: result.pagination.total,
      }));
    } catch (error) {
      message.error("Failed to fetch engagements. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }, [activeTab, pagination.current, pagination.pageSize, searchText]);

  // Fetch data on mount and when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ============================
  // Event Handlers
  // ============================

  /** Handle status tab change - reset to page 1 when switching tabs */
  const handleTabChange = (key) => {
    setActiveTab(key);
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  /** Handle Ant Design Table pagination change */
  const handleTableChange = (paginationConfig) => {
    setPagination((prev) => ({
      ...prev,
      current: paginationConfig.current,
      pageSize: paginationConfig.pageSize,
    }));
  };

  /** Handle search - reset page to 1 when searching */
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  /** Open the approval modal for a specific record */
  const showApproveModal = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  };

  /**
   * Submit approval - update status to "Approved" and save approvalNotes via API.
   * The notes are saved in the approvalNotes column in the DB.
   */
  const handleApproveSubmit = async (values) => {
    try {
      await updateRecord(currentRecord.id, {
        status: "Approved",
        approvalNotes: values.notes || null,
      });
      message.success(
        `${currentRecord.FirstName} ${currentRecord.LastName} approved successfully`,
      );
      setIsModalOpen(false);
      form.resetFields();
      fetchData(); // Refresh table data
    } catch (error) {
      message.error("Failed to approve engagement");
    }
  };

  /** Cancel the approval modal */
  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  /**
   * Handle status change - show confirmation modal before updating.
   * For "Approved" status, redirect to the approval modal instead.
   * @param {object} record - The engagement record
   * @param {string} newStatus - The target status to change to
   */
  const handleStatusChange = (record, newStatus) => {
    // If changing to "Approved", use the approval modal flow
    if (newStatus === "Approved") {
      showApproveModal(record);
      return;
    }

    // For all other statuses, show a confirmation dialog
    Modal.confirm({
      title: "Change Status",
      icon: <ExclamationCircleOutlined style={{ color: "#008043" }} />,
      content: (
        <div>
          <p>
            Are you sure you want to change the status of{" "}
            <strong>{record.NameOfSMSF || record.NameClient}</strong> from{" "}
            <Tag color={getStatusColor(record.status)}>{record.status}</Tag> to{" "}
            <Tag color={getStatusColor(newStatus)}>{newStatus}</Tag>?
          </p>
        </div>
      ),
      okText: "Yes, Change Status",
      cancelText: "Cancel",
      okButtonProps: {
        style: {
          backgroundColor: "#008043",
          borderColor: "#008043",
          borderRadius: 8,
        },
      },
      cancelButtonProps: { style: { borderRadius: 8 } },
      onOk: async () => {
        try {
          await updateRecord(record.id, { status: newStatus });
          message.success(`Status changed to "${newStatus}" successfully`);
          fetchData(); // Refresh table data
        } catch (error) {
          message.error("Failed to change status");
        }
      },
    });
  };

  const handleDelete = async (record) => {
    Modal.confirm({
      title: `Delete ${record.NameOfSMSF || record.NameClient}?`,
      icon: <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />,
      content: "This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      okButtonProps: { style: { borderRadius: 8 } },
      cancelButtonProps: { style: { borderRadius: 8 } },
      onOk: async () => {
        try {
          await deleteRecord(record.id);
          message.success("Engagement deleted successfully");
          fetchData(); // Refresh table data
        } catch (error) {
          message.error("Failed to delete engagement");
        }
      },
    });
  };

  /**
   * Fetch ALL records for the current tab for export.
   * Passed to ExportButtons component as a data provider.
   */
  const fetchExportData = async () => {
    const result = await getRecords({
      page: 1,
      limit: 10000, // Fetch all records for export
      status: activeTab,
      search: searchText || undefined,
    });
    return result.records;
  };

  // ============================
  // Table Column Definitions
  // ============================
  const columns = [
    {
      title: "SMSF Name",
      dataIndex: "NameOfSMSF",
      key: "NameOfSMSF",
      render: (val) => val || "-",
      sorter: (a, b) => (a.NameOfSMSF || "").localeCompare(b.NameOfSMSF || ""),
    },
    {
      title: "Client Name",
      dataIndex: "NameClient",
      key: "NameClient",
      render: (val) => val || "-",
      sorter: (a, b) => (a.NameClient || "").localeCompare(b.NameClient || ""),
    },
    {
      title: "Founder",
      dataIndex: "Founder",
      key: "Founder",
      render: (val) => val || "-",
      sorter: (a, b) => (a.Founder || "").localeCompare(b.Founder || ""),
    },
    {
      title: "Phone",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
      render: (val) => val || "-",
      sorter: (a, b) =>
        (a.mobileNumber || "").localeCompare(b.mobileNumber || ""),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      width: 110,
      render: (_, record) => {
        // Build the "Change Status" submenu items (exclude current status)
        const statusSubmenu = STATUS_LIST.filter((s) => s.key !== record.status) // Don't show current status
          .map((s) => ({
            key: `status-${s.key}`,
            icon: s.icon,
            label: s.label,
            onClick: () => handleStatusChange(record, s.key),
          }));

        const items = [
          // View PDF - only show if pdfUrl exists
          ...(record.pdfUrl
            ? [
                {
                  key: "viewPdf",
                  icon: <FilePdfOutlined style={{ color: "#f5222d" }} />,
                  label: "View PDF",
                  onClick: () => window.open(record.pdfUrl, "_blank"),
                },
              ]
            : []),
          {
            key: "view",
            icon: <EyeOutlined />,
            label: "View",
          },
          {
            key: "edit",
            icon: <EditOutlined />,
            label: "Edit",
          },
          {
            type: "divider",
          },
          // Change Status submenu
          {
            key: "changeStatus",
            icon: <SwapOutlined />,
            label: "Change Status",
            children: statusSubmenu,
          },
          {
            type: "divider",
          },
          {
            key: "delete",
            icon: <DeleteOutlined />,
            label: "Delete",
            danger: true,
            onClick: () => handleDelete(record),
          },
        ];

        return (
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Button size="small">
              Actions <DownOutlined />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  // ============================
  // Tab Definitions
  // ============================
  const tabItems = [
    { key: "All", label: "All", icon: <UnorderedListOutlined /> },
    ...STATUS_LIST.map((s) => ({
      key: s.key,
      label: s.label,
      icon: s.icon,
    })),
  ];

  // ============================
  // Render
  // ============================
  return (
    <div className="min-h-screen">
      {/* bg-slate-50 dark:bg-zinc-900  */}
      {/* Page Header: Title + Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
        <div>
          <Title
            level={2}
            className="!mb-1 !text-slate-800 dark:!text-slate-100 flex items-center gap-2"
          >
            <SafetyCertificateOutlined className="text-slate-500" /> SMSF
            Registrations
          </Title>
          <Text className="text-slate-500 dark:text-slate-400">
            Manage Self Managed Super Fund applications.
          </Text>
        </div>
        <Breadcrumb
          items={[
            { href: "/admin/dashboard", title: <HomeOutlined /> },
            { title: "SMSF Registrations" },
          ]}
        />
      </div>

      {/* Main Content Card */}
      <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm overflow-hidden">
        {/* Status Tabs */}
        <Tabs
          activeKey={activeTab}
          items={tabItems}
          onChange={handleTabChange}
        />

        {/* Sub-header: Tab title + Filters + Export */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2 mb-4">
          <div className="w-full md:w-1/3">
            <Title
              level={4}
              className="!mb-1 !text-slate-800 dark:!text-slate-100"
            >
              {activeTab === "All" ? "Regular" : activeTab} SMSF Registrations
            </Title>
            <Text className="text-slate-500 dark:text-slate-400 text-sm">
              List of {activeTab === "All" ? "all" : activeTab.toLowerCase()}{" "}
              smsf registrations.
            </Text>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-4 w-full md:w-2/3">
            <div className="flex flex-col">
              <Text className="text-xs text-slate-500 mb-1 font-medium">
                Filter by
              </Text>
              <Select
                value={filterBy}
                onChange={setFilterBy}
                style={{ width: 140 }}
                options={[
                  { value: "SMSF Name", label: "SMSF Name" },
                  { value: "Client Name", label: "Client Name" },
                  { value: "Founder", label: "Founder" },
                  { value: "Phone", label: "Phone" },
                ]}
              />
            </div>
            <div className="flex flex-col">
              <Text className="text-xs text-slate-500 mb-1 font-medium">
                Filter
              </Text>
              <Input
                placeholder="Filter data..."
                prefix={<SearchOutlined className="text-slate-400" />}
                value={searchText}
                onChange={handleSearch}
                style={{ width: 220 }}
                allowClear
              />
            </div>
            <div className="flex flex-col">
              <Text className="text-xs text-transparent mb-1 font-medium select-none">
                Export
              </Text>
              <ExportButtons
                fetchData={fetchExportData}
                columns={EXPORT_COLUMNS}
                filenamePrefix={`smsf-registrations-${activeTab === "All" ? "All" : activeTab.replace(/\s+/g, "-")}`}
              />
            </div>
          </div>
        </div>

        {/* Data Table with server-side pagination */}
        <Spin spinning={loading}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: pagination.total,
              showSizeChanger: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }}
            onChange={handleTableChange}
            className="mt-4 [&_.ant-table]:text-[13px] [&_.ant-table-cell]:!py-2"
            size="small"
            bordered
            scroll={{ x: 1000 }}
          />
        </Spin>
      </div>

      {/* Approval Modal Middleware - shown when approving a record */}
      <Modal
        title={`Approve Query: ${currentRecord?.FirstName} ${currentRecord?.LastName}`}
        open={isModalOpen}
        onCancel={handleModalCancel}
        onOk={() => form.submit()}
        okText="Approve"
        cancelText="Cancel"
      >
        <div className="mb-4 text-slate-500">
          This is a temporary middleware popup for approvals. A real form will
          be placed here in the future.
        </div>
        <Form form={form} layout="vertical" onFinish={handleApproveSubmit}>
          <Form.Item name="notes" label="Approval Notes (Optional)">
            <Input.TextArea
              rows={4}
              placeholder="Enter any notes regarding this approval..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
