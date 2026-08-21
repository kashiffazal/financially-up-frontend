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
  CloseOutlined,
  PauseCircleOutlined,
  FormOutlined,
  SearchOutlined,
  HomeOutlined,
  UserOutlined,
  BankOutlined,
  DownOutlined,
  SwapOutlined,
  LinkOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { HTTP, API_BASE_URL, antdMsg } from "@/services";
import ExportButtons from "@/components/admin/ExportButtons";
import CompanyRegistrationAdminForm from "@/components/admin/forms/company-registration-admin";

const { Title, Text } = Typography;

// ============================
// Status list for Tabs, Tags & Filtering
// ============================
const STATUS_LIST = [
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

const getStatusColor = (status) => {
  const found = STATUS_LIST.find((s) => s.key === status);
  return found ? found.color : "default";
};

const EXPORT_COLUMNS = [
  { header: "Reference", key: "referenceNumber" },
  { header: "Proposed Company Name", key: "companyName1" },
  { header: "Alternative Name 2", key: "companyName2" },
  { header: "Alternative Name 3", key: "companyName3" },
  { header: "Company Type", key: "companyType" },
  { header: "State", key: "stateOfRegistration" },
  { header: "Contact Person", key: "contactName" },
  { header: "Contact Email", key: "contactEmail" },
  { header: "Contact Mobile", key: "contactMobile" },
  { header: "Relationship", key: "contactRelationship" },
  { header: "Status", key: "status" },
  { header: "Submitted At", key: "createdAt" },
];

function getFileUrl(relPath) {
  if (!relPath) return "#";
  if (relPath.startsWith("http://") || relPath.startsWith("https://")) return relPath;
  const cleanPath = relPath.startsWith("/") ? relPath : `/${relPath}`;
  const baseUrl = API_BASE_URL.replace(/\/api\/?$/, "");
  return `${baseUrl}${cleanPath}`;
}

export default function NewCompanyRegistrationAdminPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [filterBy, setFilterBy] = useState("CompanyName");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await HTTP("GET", "/new-company-registrations", {
        status: activeTab !== "All" ? activeTab : undefined,
        search: searchText || undefined,
        limit: 100,
      });

      let records = res?.data?.records || res?.records || res?.data || [];

      if (activeTab !== "All") {
        records = records.filter((r) => r.status === activeTab);
      }

      if (searchText) {
        const lowerSearch = searchText.toLowerCase();
        records = records.filter((r) => {
          if (filterBy === "CompanyName") {
            return (
              r.companyName1?.toLowerCase().includes(lowerSearch) ||
              r.companyName2?.toLowerCase().includes(lowerSearch) ||
              r.companyName3?.toLowerCase().includes(lowerSearch)
            );
          }
          if (filterBy === "ContactName") {
            return r.contactName?.toLowerCase().includes(lowerSearch);
          }
          if (filterBy === "Email") {
            return r.contactEmail?.toLowerCase().includes(lowerSearch);
          }
          if (filterBy === "Reference") {
            return r.referenceNumber?.toLowerCase().includes(lowerSearch);
          }
          return true;
        });
      }

      setData(records.map((r) => ({ ...r, key: r.id })));
    } catch (err) {
      antdMsg.error("Failed to load new company registration records.");
    } finally {
      setLoading(false);
    }
  }, [activeTab, searchText, filterBy]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const showReviewModal = async (record) => {
    try {
      const res = await HTTP("GET", `/new-company-registrations/${record.id}`);
      if (res && res.data) {
        setCurrentRecord(res.data);
      } else {
        setCurrentRecord(res || record);
      }
    } catch (err) {
      console.warn("Failed to fetch fresh record, using row data:", err);
      setCurrentRecord(record);
    }
    setIsModalOpen(true);
  };

  const handleAdminDecision = async (values) => {
    setIsSubmitting(true);
    try {
      await HTTP("PUT", `/new-company-registrations/${currentRecord.id}/decision`, values);
      antdMsg.success("Company registration decision saved successfully.");
      setIsModalOpen(false);
      form.resetFields();
      fetchData();
    } catch (err) {
      antdMsg.error(`Failed to submit decision: ${err.message || "Error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = (record, newStatus) => {
    Modal.confirm({
      title: "Update Registration Status",
      icon: <ExclamationCircleOutlined style={{ color: "#008043" }} />,
      content: (
        <div className="py-2">
          Are you sure you want to update the status of{" "}
          <strong>{record.companyName1 || record.referenceNumber}</strong> from{" "}
          <Tag color={getStatusColor(record.status)}>{record.status}</Tag> to{" "}
          <Tag color={getStatusColor(newStatus)}>{newStatus}</Tag>?
        </div>
      ),
      okText: "Yes, Update Status",
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
          await HTTP("PUT", `/new-company-registrations/${record.id}/decision`, {
            reviewStatus: newStatus,
          });
          antdMsg.success(`Status updated to "${newStatus}" successfully.`);
          fetchData();
        } catch (error) {
          antdMsg.error("Failed to update registration status.");
        }
      },
    });
  };

  const fetchExportData = async () => {
    const res = await HTTP("GET", "/new-company-registrations", { limit: 10000 });
    let records = res?.data?.records || res?.records || res?.data || [];
    if (activeTab !== "All") {
      records = records.filter((r) => r.status === activeTab);
    }
    return records;
  };

  const columns = [
    {
      title: "Reference",
      dataIndex: "referenceNumber",
      key: "ref",
      fixed: "left",
      width: 170,
      sorter: (a, b) => (a.referenceNumber || "").localeCompare(b.referenceNumber || ""),
      render: (ref) => (
        <Text strong className="font-mono text-[#008043]">
          {ref}
        </Text>
      ),
    },
    {
      title: "Proposed Company Name",
      key: "companyName",
      width: 220,
      sorter: (a, b) => (a.companyName1 || "").localeCompare(b.companyName1 || ""),
      render: (_, record) => {
        const altNames = [record.companyName2, record.companyName3].filter(Boolean);
        return (
          <div>
            <div className="font-bold text-slate-900 dark:text-zinc-100">
              {record.companyName1 || (record.useAcnAsName ? "ACN Used As Name" : "N/A")}
            </div>
            {altNames.length > 0 && (
              <Tooltip title={`Alternative Preferences: ${altNames.join(" | ")}`}>
                <div className="text-[11px] text-slate-400 truncate cursor-help">
                  Alt: {altNames.join(", ")}
                </div>
              </Tooltip>
            )}
          </div>
        );
      },
    },
    {
      title: "Contact Person",
      key: "contact",
      width: 180,
      sorter: (a, b) => (a.contactName || "").localeCompare(b.contactName || ""),
      render: (_, record) => (
        <div>
          <div className="font-semibold text-slate-900 dark:text-zinc-100">
            {record.contactName || "-"}
          </div>
          <div className="text-[11px] text-slate-400">
            {record.contactRelationship || "Applicant"}
          </div>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "contactEmail",
      key: "email",
      width: 190,
      render: (email) => (
        <span className="text-slate-600 dark:text-zinc-300">{email || "-"}</span>
      ),
    },
    {
      title: "Mobile",
      dataIndex: "contactMobile",
      key: "mobile",
      width: 130,
      render: (mobile) => (
        <span className="text-slate-600 dark:text-zinc-300">{mobile || "-"}</span>
      ),
    },
    {
      title: "Type / State",
      key: "typeState",
      width: 160,
      render: (_, record) => (
        <div className="text-xs">
          <span className="font-semibold">{record.companyType || "Pty Ltd"}</span>
          <span className="text-slate-400 ml-1">({record.stateOfRegistration || "NSW"})</span>
        </div>
      ),
    },
    {
      title: "Structure",
      key: "structure",
      width: 140,
      render: (_, record) => {
        const offCount = Array.isArray(record.officeholders) ? record.officeholders.length : 0;
        const shCount = Array.isArray(record.shareholders) ? record.shareholders.length : 0;
        return (
          <Space size={4}>
            <Tag color="blue" className="text-[11px] font-semibold">
              {offCount} Dir
            </Tag>
            <Tag color="purple" className="text-[11px] font-semibold">
              {shCount} Sh
            </Tag>
          </Space>
        );
      },
    },
    {
      title: "Attachments",
      key: "attachments",
      width: 120,
      render: (_, record) => {
        const rawDocs = Array.isArray(record.documents) ? record.documents : [];
        const pdfItems = [];

        if (record.clientPdfPath) {
          pdfItems.push({
            label: "Client Application PDF",
            url: record.clientPdfPath,
          });
        }
        if (record.adminPdfPath) {
          pdfItems.push({
            label: "Admin Review Package PDF",
            url: record.adminPdfPath,
          });
        }

        const totalAttachments = rawDocs.length + pdfItems.length;

        if (totalAttachments === 0) {
          return <Text type="secondary">-</Text>;
        }

        const menuItems = [
          ...pdfItems.map((pdf, idx) => ({
            key: `pdf-${idx}`,
            icon: <FilePdfOutlined style={{ color: "#ff4d4f" }} />,
            label: pdf.label,
            onClick: () => window.open(getFileUrl(pdf.url), "_blank"),
          })),
          ...rawDocs.map((doc, idx) => ({
            key: `doc-${idx}`,
            icon: <LinkOutlined />,
            label: `${doc.documentCategory || doc.documentType || "Document"}: ${doc.fileName || "File"}`,
            onClick: () => window.open(getFileUrl(doc.filePath), "_blank"),
          })),
        ];

        return (
          <Tooltip title={`${totalAttachments} Attachment(s)`}>
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <Button
                type="text"
                size="small"
                icon={<IdcardOutlined style={{ color: "#008043", fontSize: "16px" }} />}
              >
                <span className="text-xs text-[#008043] font-bold">{totalAttachments}</span>
              </Button>
            </Dropdown>
          </Tooltip>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 140,
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: "Submitted At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
      render: (date) => (date ? new Date(date).toLocaleDateString("en-AU") : "-"),
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 110,
      render: (_, record) => {
        const items = [
          {
            key: "review",
            icon: <EyeOutlined />,
            label: "Review & Decision",
            onClick: () => showReviewModal(record),
          },
          ...(record.clientPdfPath
            ? [
                {
                  key: "clientPdf",
                  icon: <FilePdfOutlined style={{ color: "#ff4d4f" }} />,
                  label: "Client Application PDF",
                  onClick: () => window.open(getFileUrl(record.clientPdfPath), "_blank"),
                },
              ]
            : []),
          {
            type: "divider",
          },
          {
            key: "status-submenu",
            icon: <SwapOutlined />,
            label: "Change Status",
            children: STATUS_LIST.map((s) => ({
              key: `status-${s.key}`,
              label: (
                <Space orientation="horizontal" size={6}>
                  <Tag color={s.color} style={{ margin: 0 }}>
                    {s.label}
                  </Tag>
                </Space>
              ),
              disabled: s.key === record.status,
              onClick: () => handleStatusChange(record, s.key),
            })),
          },
        ];

        return (
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button
              size="small"
              className="bg-brand-primary-soft hover:bg-brand-primary/20 text-[#008043] border border-[#008043]/30 font-bold rounded-lg text-xs"
            >
              Actions <DownOutlined className="text-[10px]" />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  const tabItems = [
    {
      key: "All",
      label: (
        <span className="flex items-center gap-1.5 font-bold">
          <UnorderedListOutlined /> All
        </span>
      ),
    },
    ...STATUS_LIST.map((s) => ({
      key: s.key,
      label: (
        <span className="flex items-center gap-1.5 font-bold">
          {s.icon} {s.label}
        </span>
      ),
    })),
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1600px] mx-auto">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          {
            href: "/admin/dashboard",
            title: (
              <span className="flex items-center gap-1 text-slate-500 hover:text-brand-primary">
                <HomeOutlined /> Dashboard
              </span>
            ),
          },
          { title: "Company Registration (New)" },
        ]}
        className="text-xs"
      />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-sm">
        <div className="flex orientation-row items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white font-black text-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <BankOutlined />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-zinc-100 tracking-tight">
              Company Registration (New)
            </h1>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Manage, review, and execute ASIC decisions for 12-Step Company Registration applications.
            </p>
          </div>
        </div>
      </div>

      {/* Main Data Container */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-sm p-4 sm:p-6 space-y-4">
        {/* Status Filtering Tabs */}
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          items={tabItems}
          className="border-b border-slate-200/80 dark:border-zinc-800 [&_.ant-tabs-nav]:mb-4"
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            <Select
              value={filterBy}
              onChange={setFilterBy}
              className="w-40 h-9"
              options={[
                { value: "CompanyName", label: "Company Name" },
                { value: "ContactName", label: "Contact Name" },
                { value: "Email", label: "Email Address" },
                { value: "Reference", label: "Reference Ref" },
              ]}
            />
            <Input
              prefix={<SearchOutlined className="text-slate-400" />}
              placeholder={`Search by ${filterBy}...`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-64 h-9 rounded-xl"
              allowClear
            />
          </div>

          <div className="flex items-center gap-2">
            <ExportButtons
              fetchData={fetchExportData}
              columns={EXPORT_COLUMNS}
              filenamePrefix={`company-registration-new-${activeTab.toLowerCase().replace(/\s+/g, "-")}`}
            />
          </div>
        </div>

        {/* Data Table */}
        <Spin spinning={loading}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1400 }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} records`,
            }}
            className="rounded-2xl overflow-hidden [&_.ant-table-thead_th]:!bg-slate-50/80 dark:[&_.ant-table-thead_th]:!bg-zinc-800/60 font-medium text-xs"
          />
        </Spin>
      </div>

      {/* Compliance Decision & Review Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => !isSubmitting && setIsModalOpen(false)}
        footer={null}
        width={1000}
        centered
        destroyOnClose
        styles={{
          body: {
            maxHeight: "85vh",
            overflowY: "auto",
            padding: "0px",
          },
        }}
        closeIcon={
          isSubmitting ? null : (
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white flex items-center justify-center transition-all shadow-sm hover:scale-105">
              <CloseOutlined className="text-sm font-black" />
            </div>
          )
        }
      >
        <CompanyRegistrationAdminForm
          record={currentRecord}
          form={form}
          onFinish={handleAdminDecision}
          onCancel={() => !isSubmitting && setIsModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </div>
  );
}
