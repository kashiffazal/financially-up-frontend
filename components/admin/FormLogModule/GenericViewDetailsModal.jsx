"use client";

import React, { useState } from "react";
import { Modal, Tag, Button } from "antd";
import {
  FilePdfOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { getFileUrl } from "@/services";
import { getStatusColor } from "./constants";
import SubmittedAnswers from "./SubmittedAnswers";

/**
 * ============================================================================
 * Generic View Details Modal
 * ============================================================================
 * Standardized viewer displaying complete submitted form details:
 * 1. Title bar with module icon, record identifier, and monospace Reference #.
 * 2. Layout toggle buttons: Horizontal vs. Vertical Ant Design Descriptions view.
 * 3. Quick-action PDF preview button (if record has PDF attached).
 * 4. Status Tag badge.
 * 5. Calls custom `renderContent(record, layout)` for module-specific fields.
 * 6. "All Submitted Answers" + uploaded files from `record.submissionData` (website forms).
 */
export default function GenericViewDetailsModal({
  visible,
  data,
  onClose,
  title,
  icon,
  statusList,
  renderContent,
}) {
  const [layout, setLayout] = useState("horizontal");

  if (!data) return null;

  const refNumber =
    data.referenceNumber ||
    data.reference_number ||
    data.refNumber ||
    data.id ||
    data._id ||
    "N/A";

  const pdfPath =
    data.pdfUrl || data.pdf_path || data.pdfPath || data.clientPdfPath;
  const resolvedPdfUrl = pdfPath ? getFileUrl(pdfPath) : null;

  return (
    <Modal
      centered
      title={
        <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
          <div className="flex items-center gap-2.5">
            {icon && (
              <span className="text-brand-primary text-xl flex items-center justify-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40">
                {icon}
              </span>
            )}
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-zinc-50">
                {typeof title === "function"
                  ? title(data)
                  : title || "Application Details"}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Ref: {refNumber}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Status Badge */}
            {data.status && (
              <Tag
                color={getStatusColor(data.status, statusList)}
                className="rounded-pill font-medium text-xs px-2.5 py-0.5"
              >
                {data.status}
              </Tag>
            )}

            {/* View Official PDF Button */}
            {resolvedPdfUrl && (
              <Button
                size="small"
                danger
                icon={<FilePdfOutlined />}
                onClick={() => window.open(resolvedPdfUrl, "_blank")}
                className="rounded-pill text-xs flex items-center"
              >
                View PDF
              </Button>
            )}

            {/* Layout Toggle Buttons (Horizontal vs Vertical View) */}
            <div className="flex items-center border border-slate-200 dark:border-zinc-800 rounded-lg p-0.5 bg-slate-50 dark:bg-zinc-800">
              <Button
                size="small"
                type={layout === "horizontal" ? "primary" : "text"}
                icon={<BarsOutlined />}
                onClick={() => setLayout("horizontal")}
                title="Horizontal View"
                className="!text-xs"
              />
              <Button
                size="small"
                type={layout === "vertical" ? "primary" : "text"}
                icon={<AppstoreOutlined />}
                onClick={() => setLayout("vertical")}
                title="Vertical View"
                className="!text-xs"
              />
            </div>
          </div>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose} className="rounded-pill">
          Close
        </Button>,
      ]}
      width={900}
      destroyOnHidden
      className="view-details-modal"
    >
      <div className="py-4 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
        {typeof renderContent === "function" ? (
          renderContent(data, layout)
        ) : (
          <div className="text-slate-500 text-sm">
            No custom details renderer provided.
          </div>
        )}
        <SubmittedAnswers
          submissionData={data.submissionData}
          layout={layout}
        />
      </div>
    </Modal>
  );
}
