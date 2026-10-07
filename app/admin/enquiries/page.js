"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Tag, Descriptions, Modal, Input } from "antd";
import {
  HomeOutlined,
  MessageOutlined,
  MailOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
  InboxOutlined,
  EditOutlined,
  StopOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import FormLogModule from "@/components/admin/FormLogModule";
import { getStatusColor } from "@/components/admin/FormLogModule/constants";
import { HTTP, antdMsg } from "@/services";

/**
 * ============================================================================
 * Website Enquiries Admin Page (`app/admin/enquiries/page.js`)
 * ============================================================================
 * Messages sent from the public website (Contact page + "Contact Us" popup).
 * Standardized like the other modules via `<FormLogModule />`:
 * status tabs (New / Contacted / Closed), search, export, bulk actions,
 * View Details, and `?open=<id>` deep links from header notifications.
 */

const ENQUIRY_STATUS_LIST = [
  { key: "New", label: "New", color: "processing", icon: <InboxOutlined /> },
  { key: "Contacted", label: "Contacted", color: "success", icon: <PhoneOutlined /> },
  { key: "Closed", label: "Closed", color: "default", icon: <CheckCircleOutlined /> },
  { key: "Spam", label: "Spam", color: "error", icon: <StopOutlined /> },
];

const EMAIL_STATUS_COLORS = { sent: "success", failed: "error", pending: "processing", skipped: "default" };

const emailStatusTag = (status, error) => {
  if (!status) return "—";
  return (
    <span className="inline-flex flex-col gap-1">
      <Tag color={EMAIL_STATUS_COLORS[status] || "default"} className="rounded-pill capitalize w-fit">
        {status}
      </Tag>
      {error && <span className="text-[11px] text-red-500 break-words">{error}</span>}
    </span>
  );
};

const SOURCE_LABELS = { contact_page: "Contact page", contact_modal: "Contact Us popup" };

const fullName = (r) => [r.firstName, r.lastName].filter(Boolean).join(" ") || "—";
const formatDateTime = (value) => (value ? new Date(value).toLocaleString("en-AU") : "—");

export default function EnquiriesAdminPage() {
  // Staff notes editor (row action) — remounting the log after save refreshes its data
  const [notesRecord, setNotesRecord] = useState(null);
  const [notesDraft, setNotesDraft] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const openNotes = useCallback((record) => {
    setNotesRecord(record);
    setNotesDraft(record.staffNotes || "");
  }, []);

  const saveNotes = async () => {
    if (!notesRecord) return;
    setSavingNotes(true);
    const res = await HTTP("PUT", `/contact-enquiries/${notesRecord.id}`, { staffNotes: notesDraft });
    setSavingNotes(false);
    if (res?.success) {
      antdMsg.success("Staff notes saved");
      setNotesRecord(null);
      setRefreshKey((k) => k + 1);
    }
  };

  // --------------------------------------------------------------------------
  // TABLE COLUMNS
  // --------------------------------------------------------------------------
  const columns = useMemo(
    () => [
      {
        title: "Reference",
        key: "referenceNumber",
        dataIndex: "referenceNumber",
        width: 150,
        render: (ref) => (
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
            {ref}
          </span>
        ),
      },
      {
        title: "Name",
        key: "name",
        dataIndex: "firstName",
        sorter: (a, b) => fullName(a).localeCompare(fullName(b)),
        render: (_, r) => (
          <div>
            <div className="font-semibold text-slate-900 dark:text-zinc-100">{fullName(r)}</div>
            <div className="text-[11px] text-slate-400">{SOURCE_LABELS[r.source] || "Website"}</div>
          </div>
        ),
      },
      {
        title: "Email & Phone",
        key: "contact",
        dataIndex: "email",
        render: (_, r) => (
          <div className="space-y-0.5 text-xs">
            <a href={`mailto:${r.email}`} className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 hover:text-brand-primary">
              <MailOutlined className="text-slate-400" /> {r.email}
            </a>
            {r.phone && (
              <a href={`tel:${String(r.phone).replace(/\s/g, "")}`} className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-400 hover:text-brand-primary">
                <PhoneOutlined className="text-slate-400" /> {r.phone}
              </a>
            )}
          </div>
        ),
      },
      {
        title: "Service",
        key: "service",
        dataIndex: "service",
        render: (service) => <span className="text-xs text-slate-600 dark:text-zinc-300">{service || "—"}</span>,
      },
      {
        title: "Message",
        key: "message",
        dataIndex: "message",
        width: 260,
        render: (message) => (
          <span className="line-clamp-2 text-xs text-slate-500 dark:text-zinc-400">{message || "—"}</span>
        ),
      },
      {
        title: "Received",
        key: "createdAt",
        dataIndex: "createdAt",
        width: 120,
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        render: (date) => (
          <span className="text-[12px] text-slate-500 dark:text-zinc-400">
            {date ? new Date(date).toLocaleDateString("en-AU") : "—"}
          </span>
        ),
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        width: 110,
        render: (status) => (
          <Tag color={getStatusColor(status, ENQUIRY_STATUS_LIST)} className="font-semibold text-[11.5px] rounded-pill">
            {status || "New"}
          </Tag>
        ),
      },
    ],
    []
  );

  const customFilterCols = useMemo(
    () => [
      { label: "Reference", value: "referenceNumber" },
      { label: "First Name", value: "firstName" },
      { label: "Last Name", value: "lastName" },
      { label: "Email", value: "email" },
      { label: "Phone", value: "phone" },
      { label: "Service", value: "service" },
      { label: "Message", value: "message" },
    ],
    []
  );

  const exportColumns = useMemo(
    () => [
      { header: "Reference", key: "referenceNumber" },
      { header: "First Name", key: "firstName" },
      { header: "Last Name", key: "lastName" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "phone" },
      { header: "Service", key: "service" },
      { header: "Preferred Contact", key: "preferredContact" },
      { header: "Message", key: "message" },
      { header: "Status", key: "status" },
      { header: "Staff Notes", key: "staffNotes" },
      { header: "Received", key: "createdAt" },
    ],
    []
  );

  const extraActions = useCallback(
    (record) => [
      {
        key: "reply-email",
        icon: <MailOutlined className="text-brand-primary" />,
        label: "Reply by Email",
        onClick: () => {
          window.location.href = `mailto:${record.email}?subject=${encodeURIComponent(`Re: your enquiry ${record.referenceNumber}`)}`;
        },
      },
      {
        key: "staff-notes",
        icon: <EditOutlined className="text-amber-500" />,
        label: record.staffNotes ? "Edit Staff Notes" : "Add Staff Notes",
        onClick: () => openNotes(record),
      },
    ],
    [openNotes]
  );

  // --------------------------------------------------------------------------
  // VIEW DETAILS CONTENT
  // --------------------------------------------------------------------------
  const renderViewDetails = (data, layout) => (
    <div className="space-y-4">
      <Descriptions
        bordered
        size="small"
        layout={layout}
        title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Enquiry</span>}
        column={{ xs: 1, sm: 2, md: 3 }}
      >
        <Descriptions.Item label="Reference">
          <span className="font-mono">{data.referenceNumber}</span>
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={getStatusColor(data.status, ENQUIRY_STATUS_LIST)} className="rounded-pill">
            {data.status}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Received">{formatDateTime(data.createdAt)}</Descriptions.Item>
        <Descriptions.Item label="Sent From">{SOURCE_LABELS[data.source] || "Website"}</Descriptions.Item>
        <Descriptions.Item label="Service">{data.service || "—"}</Descriptions.Item>
        <Descriptions.Item label="Preferred Contact">{data.preferredContact || "—"}</Descriptions.Item>
        <Descriptions.Item label="Message" span={3}>
          <div className="whitespace-pre-line leading-relaxed">{data.message || "—"}</div>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions
        bordered
        size="small"
        layout={layout}
        title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Contact Details</span>}
        column={{ xs: 1, sm: 2, md: 3 }}
      >
        <Descriptions.Item label="Name">{fullName(data)}</Descriptions.Item>
        <Descriptions.Item label="Email">
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </Descriptions.Item>
        <Descriptions.Item label="Phone">
          {data.phone ? <a href={`tel:${String(data.phone).replace(/\s/g, "")}`}>{data.phone}</a> : "—"}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions
        bordered
        size="small"
        layout={layout}
        title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Follow-up</span>}
        column={{ xs: 1, sm: 2, md: 3 }}
      >
        <Descriptions.Item label="Handled By">{data.handledByName || "—"}</Descriptions.Item>
        <Descriptions.Item label="Handled At">{formatDateTime(data.handledAt)}</Descriptions.Item>
        <Descriptions.Item label="Last Updated">{formatDateTime(data.updatedAt)}</Descriptions.Item>
        <Descriptions.Item label="Staff Notes" span={3}>
          <div className="whitespace-pre-line">{data.staffNotes || "—"}</div>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions
        bordered
        size="small"
        layout={layout}
        title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Email Delivery</span>}
        column={{ xs: 1, sm: 2, md: 3 }}
      >
        <Descriptions.Item label="Staff Alert">{emailStatusTag(data.staffEmailStatus, data.staffEmailError)}</Descriptions.Item>
        <Descriptions.Item label="Client Confirmation">
          {emailStatusTag(data.confirmationEmailStatus, data.confirmationEmailError)}
        </Descriptions.Item>
        {data.spamReason && <Descriptions.Item label="Flagged as Spam">{data.spamReason}</Descriptions.Item>}
      </Descriptions>
    </div>
  );

  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={<MessageOutlined />}
        title="Website Enquiries"
        description="Messages sent from the website Contact page and Contact Us popup. Reply, record follow-up notes and close enquiries."
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="!text-[12px]" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          {
            title: <span className="font-semibold text-brand-primary dark:text-emerald-400">Website Enquiries</span>,
          },
        ]}
      />

      <FormLogModule
        key={refreshKey}
        endpoint="/contact-enquiries"
        statusList={ENQUIRY_STATUS_LIST}
        defaultStatus="New"
        columns={columns}
        customFilterCols={customFilterCols}
        exportColumns={exportColumns}
        filenamePrefix="Website_Enquiries"
        filterPlaceholder="Search enquiries..."
        viewDetailsTitle={(d) => `${fullName(d)} - Enquiry ${d.referenceNumber}`}
        viewDetailsIcon={<MessageOutlined />}
        renderViewDetails={renderViewDetails}
        extraActions={extraActions}
      />

      <Modal
        open={Boolean(notesRecord)}
        onCancel={() => !savingNotes && setNotesRecord(null)}
        onOk={saveNotes}
        okText="Save Notes"
        confirmLoading={savingNotes}
        okButtonProps={{ className: "!bg-brand-primary" }}
        title={notesRecord ? `Staff notes · ${notesRecord.referenceNumber}` : "Staff notes"}
        destroyOnHidden
      >
        <p className="m-0 mb-2 text-xs text-slate-500 dark:text-zinc-400">
          Internal only. Record calls, emails sent, or next steps for {notesRecord ? fullName(notesRecord) : "this client"}.
        </p>
        <Input.TextArea
          rows={6}
          maxLength={5000}
          showCount
          value={notesDraft}
          onChange={(e) => setNotesDraft(e.target.value)}
          placeholder="e.g. Called 7 Oct, booked consultation for Friday 2pm."
        />
      </Modal>
    </div>
  );
}
