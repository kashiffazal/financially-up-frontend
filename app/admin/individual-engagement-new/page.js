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
  CloseOutlined,
  PauseCircleOutlined,
  FormOutlined,
  SearchOutlined,
  HomeOutlined,
  UserOutlined,
  DownOutlined,
  SwapOutlined,
  LinkOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  getNewIndividualEngagements,
  submitNewIndividualAdminDecision,
} from "@/services/newIndividualEngagement.service";
import ExportButtons from "@/components/admin/ExportButtons";
import IndividualEngagementAdminForm from "@/components/admin/forms/individual-engagement-admin";
import { API_BASE_URL } from "@/services/apiConfig";

const { Title, Text } = Typography;

// ============================
// Status list for Tabs, Tags & Status Changes
// ============================
const STATUS_LIST = [
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
    key: "Declined",
    label: "Declined",
    color: "error",
    icon: <CloseCircleOutlined />,
  },
];

const getStatusColor = (status) => {
  const found = STATUS_LIST.find((s) => s.key === status);
  return found ? found.color : "default";
};

const getRiskColor = (risk) => {
  if (risk === "High" || risk === "Unacceptable") return "error";
  if (risk === "Medium") return "warning";
  return "success";
};

const EXPORT_COLUMNS = [
  { header: "Reference", key: "referenceNumber" },
  { header: "Client Name", key: "client.fullName" },
  { header: "Email", key: "client.email" },
  { header: "Mobile", key: "client.mobile" },
  { header: "Occupation", key: "client.occupation" },
  { header: "Tax Residency", key: "taxResidency" },
  { header: "Status", key: "status" },
  { header: "Risk Level", key: "riskLevel" },
  { header: "Submitted At", key: "submittedAt" },
];

function getFileUrl(relPath) {
  if (!relPath) return "#";
  if (relPath.startsWith("http://") || relPath.startsWith("https://"))
    return relPath;
  const cleanPath = relPath.startsWith("/") ? relPath : `/${relPath}`;
  const baseUrl = API_BASE_URL.replace(/\/api\/?$/, "");
  return `${baseUrl}${cleanPath}`;
}

export default function NewIndividualEngagementAdminPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [filterBy, setFilterBy] = useState("Name");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getNewIndividualEngagements();
      let records = res.data || [];

      if (activeTab !== "All") {
        records = records.filter((r) => r.status === activeTab);
      }

      if (searchText) {
        const query = searchText.toLowerCase();
        records = records.filter((r) => {
          if (filterBy === "Reference")
            return r.referenceNumber?.toLowerCase().includes(query);
          if (filterBy === "Name")
            return r.client?.fullName?.toLowerCase().includes(query);
          if (filterBy === "Email")
            return r.client?.email?.toLowerCase().includes(query);
          if (filterBy === "Phone")
            return r.client?.mobile?.toLowerCase().includes(query);
          if (filterBy === "Occupation")
            return r.client?.occupation?.toLowerCase().includes(query);
          if (filterBy === "Tax Residency")
            return r.taxResidency?.toLowerCase().includes(query);
          if (filterBy === "Status")
            return r.status?.toLowerCase().includes(query);
          if (filterBy === "Risk Level")
            return r.riskLevel?.toLowerCase().includes(query);
          return (
            r.referenceNumber?.toLowerCase().includes(query) ||
            r.client?.fullName?.toLowerCase().includes(query) ||
            r.client?.email?.toLowerCase().includes(query) ||
            r.client?.mobile?.toLowerCase().includes(query) ||
            r.client?.occupation?.toLowerCase().includes(query) ||
            r.taxResidency?.toLowerCase().includes(query) ||
            r.status?.toLowerCase().includes(query) ||
            r.riskLevel?.toLowerCase().includes(query)
          );
        });
      }

      setData(records.map((r) => ({ ...r, key: r.id })));
    } catch (err) {
      message.error("Failed to load new engagement records.");
    } finally {
      setLoading(false);
    }
  }, [activeTab, searchText, filterBy]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const showReviewModal = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  };

  const handleAdminDecision = async (values) => {
    setIsSubmitting(true);
    try {
      await submitNewIndividualAdminDecision(currentRecord.id, values);
      message.success("Tax Agent decision submitted successfully.");
      setIsModalOpen(false);
      form.resetFields();
      fetchData();
    } catch (err) {
      message.error(
        `Failed to submit Tax Agent decision: ${err.message || "Error"}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchExportData = async () => {
    const res = await getNewIndividualEngagements();
    let records = res.data || [];

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
      sorter: (a, b) =>
        (a.referenceNumber || "").localeCompare(b.referenceNumber || ""),
      render: (ref) => (
        <Text strong className="font-mono text-[#008043]">
          {ref}
        </Text>
      ),
    },
    {
      title: "Name",
      key: "name",
      width: 180,
      sorter: (a, b) =>
        (a.client?.fullName || "").localeCompare(b.client?.fullName || ""),
      render: (_, record) => (
        <Text strong>{record.client?.fullName || "N/A"}</Text>
      ),
    },
    {
      title: "Email",
      key: "email",
      width: 220,
      sorter: (a, b) =>
        (a.client?.email || "").localeCompare(b.client?.email || ""),
      render: (_, record) => record.client?.email || "-",
    },
    {
      title: "Phone",
      key: "mobile",
      width: 140,
      sorter: (a, b) =>
        (a.client?.mobile || "").localeCompare(b.client?.mobile || ""),
      render: (_, record) => record.client?.mobile || "-",
    },
    {
      title: "Occupation",
      key: "occupation",
      width: 160,
      render: (_, record) => record.client?.occupation || "-",
    },
    {
      title: "Tax Residency",
      dataIndex: "taxResidency",
      key: "taxResidency",
      width: 160,
      render: (residency) => residency || "Australian Resident",
    },
    {
      title: "Attachments",
      key: "attachments",
      width: 120,
      render: (_, record) => {
        const rawDocs = Array.isArray(record.documents) ? record.documents : [];
        const docList = [...rawDocs];
        if (record.identity?.primaryIdPath) {
          docList.push({
            documentCategory: "Primary ID",
            fileName: "Primary Photo ID Document",
            filePath: record.identity.primaryIdPath,
          });
        }
        if (record.identity?.supportingIdPath) {
          docList.push({
            documentCategory: "Supporting ID",
            fileName: "Supporting Identity Document",
            filePath: record.identity.supportingIdPath,
          });
        }
        const sigList = Array.isArray(record.signatures)
          ? record.signatures
          : [];
        const pdfItems = [];

        if (record.clientPdfPath)
          pdfItems.push({
            label: "Client Engagement PDF",
            url: record.clientPdfPath,
          });
        if (record.adminPdfPath)
          pdfItems.push({
            label: "Admin Review Package PDF",
            url: record.adminPdfPath,
          });
        if (record.acceptancePdfPath)
          pdfItems.push({
            label: "Engagement Acceptance PDF",
            url: record.acceptancePdfPath,
          });
        if (record.auditPdfPath)
          pdfItems.push({
            label: "Compliance Audit Report PDF",
            url: record.auditPdfPath,
          });

        const totalAttachments =
          docList.length +
          sigList.filter((s) => s.signatureFilePath).length +
          pdfItems.length;

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
          ...docList.map((doc, idx) => ({
            key: `doc-${idx}`,
            icon: <LinkOutlined />,
            label: `${doc.documentCategory || "Document"}: ${doc.fileName}`,
            onClick: () => window.open(getFileUrl(doc.filePath), "_blank"),
          })),
          ...sigList
            .filter((s) => s.signatureFilePath)
            .map((sig, idx) => ({
              key: `sig-${idx}`,
              icon: <FormOutlined />,
              label: `${sig.signerType || "Client"} Signature Image`,
              onClick: () =>
                window.open(getFileUrl(sig.signatureFilePath), "_blank"),
            })),
        ];

        return (
          <Tooltip title={`${totalAttachments} Attachment(s)`}>
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <Button
                type="text"
                size="small"
                icon={
                  <IdcardOutlined
                    style={{ color: "#008043", fontSize: "16px" }}
                  />
                }
              >
                <span className="text-xs text-[#008043] font-bold">
                  {totalAttachments}
                </span>
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
      title: "Risk Level",
      dataIndex: "riskLevel",
      key: "risk",
      width: 120,
      render: (risk) => <Tag color={getRiskColor(risk)}>{risk || "Low"}</Tag>,
    },
    {
      title: "Submitted At",
      dataIndex: "submittedAt",
      key: "submittedAt",
      width: 130,
      render: (date) =>
        date ? new Date(date).toLocaleDateString("en-AU") : "-",
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
                  label: "Client Engagement PDF",
                  onClick: () =>
                    window.open(getFileUrl(record.clientPdfPath), "_blank"),
                },
              ]
            : []),
          ...(record.adminPdfPath
            ? [
                {
                  key: "adminPdf",
                  icon: <FilePdfOutlined style={{ color: "#008043" }} />,
                  label: "Admin Review PDF",
                  onClick: () =>
                    window.open(getFileUrl(record.adminPdfPath), "_blank"),
                },
              ]
            : []),
          ...(record.acceptancePdfPath
            ? [
                {
                  key: "acceptancePdf",
                  icon: <FilePdfOutlined style={{ color: "#008043" }} />,
                  label: "Engagement Acceptance PDF",
                  onClick: () =>
                    window.open(getFileUrl(record.acceptancePdfPath), "_blank"),
                },
              ]
            : []),
          ...(record.auditPdfPath
            ? [
                {
                  key: "auditPdf",
                  icon: <FilePdfOutlined style={{ color: "#008043" }} />,
                  label: "Compliance Audit Report PDF",
                  onClick: () =>
                    window.open(getFileUrl(record.auditPdfPath), "_blank"),
                },
              ]
            : []),
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

  const tabItems = [
    { key: "All", label: "All Submissions", icon: <UnorderedListOutlined /> },
    ...STATUS_LIST.map((s) => ({ key: s.key, label: s.label, icon: s.icon })),
  ];

  return (
    <div className="min-h-screen">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
        <div>
          <Title
            level={2}
            className="!mb-1 !text-slate-800 dark:!text-slate-100 flex items-center gap-2"
          >
            <UserOutlined className="text-[#008043]" /> New Individual
            Engagement
          </Title>
          <Text className="text-slate-500 dark:text-slate-400">
            List of all new individual client engagement submissions.
          </Text>
        </div>
        <Breadcrumb
          items={[
            { href: "/admin/dashboard", title: <HomeOutlined /> },
            { title: "Individual Engagement (New)" },
          ]}
        />
      </div>

      {/* Main Table Container */}
      <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
        {/* Status Tabs */}
        <Tabs activeKey={activeTab} items={tabItems} onChange={setActiveTab} />

        {/* Sub-header: Tab title + Filters + Export */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2 mb-4">
          <div className="w-full md:w-1/3">
            <Title
              level={4}
              className="!mb-1 !text-slate-800 dark:!text-slate-100"
            >
              {activeTab === "All" ? "Regular" : activeTab} Individual
              Engagements
            </Title>
            <Text className="text-slate-500 dark:text-slate-400 text-sm">
              List of {activeTab === "All" ? "all" : activeTab.toLowerCase()}{" "}
              individual engagements.
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
                  { value: "Name", label: "Name" },
                  { value: "Email", label: "Email" },
                  { value: "Phone", label: "Phone" },
                  { value: "Occupation", label: "Occupation" },
                  { value: "Tax Residency", label: "Tax Residency" },
                  { value: "Status", label: "Status" },
                  { value: "Risk Level", label: "Risk Level" },
                  { value: "Reference", label: "Reference" },
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
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 220 }}
                allowClear
              />
            </div>
            <div className="flex flex-col">
              <Text className="text-xs text-transparent mb-1 font-medium select-none">
                Export
              </Text>
              <ExportButtons
                columns={EXPORT_COLUMNS}
                dataProvider={fetchExportData}
                filename={`New_Individual_Engagements_${activeTab}`}
              />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <Spin spinning={loading}>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            bordered
            scroll={{ x: 1500 }}
          />
        </Spin>
      </div>

      {/* Part 12 Review & Decision Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => !isSubmitting && setIsModalOpen(false)}
        footer={null}
        width={980}
        destroyOnHidden={true}
        mask={{ closable: !isSubmitting }}
        keyboard={!isSubmitting}
        closable={!isSubmitting}
        styles={{
          container: {
            top: -50,
            padding: "0px",
          },
          close: {
            top: "-15px",
            right: "-15px",
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
        <IndividualEngagementAdminForm
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
