"use client";

import React from "react";
import {
  QuestionCircleOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PauseCircleOutlined,
  FormOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * ============================================================================
 * Standard Form Lifecycle Statuses
 * ============================================================================
 * Standard status list shared across Australian registration & engagement forms:
 * - Medicare Applications
 * - GST Registrations
 * - Changes To Company Details
 * - Trust Registrations
 * - SMSF Registrations
 * - Business Name Registrations
 * - Apply TFN / ABNs
 * - Entity Engagements
 */
export const STANDARD_FORM_STATUS_LIST = [
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
  {
    key: "Draft",
    label: "Draft",
    color: "default",
    icon: <FormOutlined />,
  },
];

/**
 * Resolves Ant Design Tag color for any given status string
 * @param {string} status
 * @param {Array} statusList
 * @returns {string}
 */
export function getStatusColor(status, statusList = STANDARD_FORM_STATUS_LIST) {
  if (!status) return "default";
  const found = statusList.find((s) => s.key === status || s.label === status);
  if (found) return found.color;

  const lower = status.toLowerCase();
  if (lower.includes("approv") || lower.includes("accept")) return "success";
  if (lower.includes("pend") || lower.includes("submi")) return "warning";
  if (lower.includes("review") || lower.includes("process") || lower.includes("new")) return "processing";
  if (lower.includes("declin") || lower.includes("reject") || lower.includes("disapprov")) return "error";
  if (lower.includes("hold") || lower.includes("info")) return "purple";
  if (lower.includes("escalat")) return "volcano";
  return "default";
}
