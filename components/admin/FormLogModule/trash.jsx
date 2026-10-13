"use client";

import React, { useCallback } from "react";
import { App, Tag } from "antd";
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";
import { HTTP, antdMsg } from "@/services";
import { ENDPOINT_MODULE_KEYS } from "@/components/admin/NotificationCenter/liveEvents";

/**
 * Trash (application logs + newsletter, not enquiries)
 * ====================================================
 * "Move to Trash" hides a record (e.g. a test submission) from the "All" tab,
 * the dashboard and Global Search; "Restore" puts it back to the status it had
 * before. Nothing is deleted and no email / PDF is triggered
 * (API: POST /trash/:moduleKey and /trash/:moduleKey/restore).
 */

export const TRASH_KEY = "Trash";

export const TRASH_STATUS = {
  key: TRASH_KEY,
  label: "Trash",
  color: "error",
  icon: <DeleteOutlined />,
};

// Logs that don't use Trash (enquiries already have "Spam")
const WITHOUT_TRASH = new Set(["enquiries"]);

/** Module key for a log's endpoint when it supports Trash, else null. */
export const trashModuleOf = (endpoint) => {
  const key = ENDPOINT_MODULE_KEYS[endpoint];
  return key && !WITHOUT_TRASH.has(key) ? key : null;
};

/**
 * { All, <status>: [...], Trash: [...] } - "All" and the status tabs leave
 * trashed records out; they are only in the Trash tab.
 */
export const bucketByStatus = (
  records,
  statusList,
  defaultStatus,
  withTrash,
) => {
  const map = {
    All: withTrash ? records.filter((r) => r.status !== TRASH_KEY) : records,
  };
  statusList.forEach((st) => {
    map[st.key] = [];
  });
  if (withTrash) map[TRASH_KEY] = [];
  records.forEach((item) => {
    const status = item.status || defaultStatus;
    (map[status] = map[status] || []).push(item);
  });
  return map;
};

/** Short name of a record for confirmations ("NENG-2026-4590 (Erich McKenzie)"). */
export const recordTitleOf = (record = {}) => {
  const ref = record.referenceNumber || record.reference_number;
  const person =
    record.client?.fullName ||
    record.name ||
    record.fullName ||
    record.FullName ||
    record.legalName ||
    record.LegalName ||
    record.companyName ||
    record.companyName1 ||
    record.proposedCompanyName ||
    null;
  if (ref && person) return `${ref} (${person})`;
  if (ref) return ref;
  if (person && record.email) return `${person} (${record.email})`;
  return (
    person ||
    record.email ||
    (record.id ? `record #${record.id}` : "this record")
  );
};

const BULK_TRASH = "__move_to_trash__";
const BULK_RESTORE = "__restore_from_trash__";

/**
 * Row action, bulk actions and confirmations for Trash.
 * @param {string|null} moduleKey - from trashModuleOf(endpoint); null = Trash off
 * @param {() => void} onChanged  - reload the log after a change
 */
export function useTrashActions({ moduleKey, onChanged }) {
  const { modal } = App.useApp();

  const run = useCallback(
    async (action, ids) => {
      const res = await HTTP(
        "POST",
        `/trash/${moduleKey}${action === "restore" ? "/restore" : ""}`,
        { ids },
      );
      if (res?.success) {
        antdMsg.success(res.message);
        if (typeof onChanged === "function") onChanged();
      }
      return res;
    },
    [moduleKey, onChanged],
  );

  const confirm = useCallback(
    (action, records) => {
      const many = records.length > 1;
      const name = many
        ? `${records.length} records`
        : recordTitleOf(records[0]);
      const toTrash = action === "trash";
      modal.confirm({
        title: toTrash ? "Move to Trash" : "Restore from Trash",
        icon: toTrash ? (
          <DeleteOutlined className="text-red-500" />
        ) : (
          <UndoOutlined className="text-brand-primary" />
        ),
        content: (
          <div className="py-2 space-y-2 text-sm">
            <div>
              {toTrash ? "Move " : "Restore "}
              <strong>{name}</strong>
              {toTrash ? " to Trash?" : " to the status it had before?"}
            </div>
            <div className="text-xs text-slate-500 dark:text-zinc-400">
              {toTrash ? (
                <>
                  It leaves the other tabs, the dashboard and search, and
                  nothing is sent to the client. It stays in the{" "}
                  <Tag color="error" className="mx-0 text-[10px]">
                    Trash
                  </Tag>{" "}
                  tab and can be restored at any time.
                </>
              ) : (
                "Nothing is sent to the client."
              )}
            </div>
          </div>
        ),
        okText: toTrash ? "Move to Trash" : "Restore",
        okButtonProps: toTrash
          ? { danger: true }
          : { className: "bg-brand-primary!" },
        cancelText: "Cancel",
        onOk: () =>
          run(
            action,
            records.map((r) => r.id || r._id || r.key),
          ),
      });
    },
    [modal, run],
  );

  /** Item for a row's Actions menu (null when Trash is off). */
  const menuItem = useCallback(
    (record) => {
      if (!moduleKey) return null;
      return record.status === TRASH_KEY
        ? {
            key: "restore-from-trash",
            icon: <UndoOutlined className="text-brand-primary" />,
            label: "Restore",
            onClick: () => confirm("restore", [record]),
          }
        : {
            key: "move-to-trash",
            icon: <DeleteOutlined />,
            label: "Move to Trash",
            danger: true,
            onClick: () => confirm("trash", [record]),
          };
    },
    [moduleKey, confirm],
  );

  /** Bulk options: in the Trash tab only "Restore", elsewhere "Move to Trash". */
  const bulkOptions = useCallback(
    (inTrashTab) => {
      if (!moduleKey) return [];
      return inTrashTab
        ? [
            {
              label: "Restore",
              value: BULK_RESTORE,
              bulkActionMsg:
                "Restore all selected records to the status they had before?",
              bulkActionBottomBtnLabel: "Restore",
            },
          ]
        : [
            {
              label: "Move to Trash",
              value: BULK_TRASH,
              bulkActionMsg:
                "Move all selected records to Trash? Nothing is sent to the clients.",
              bulkActionBottomBtnLabel: "Move to Trash",
            },
          ];
    },
    [moduleKey],
  );

  /** Runs a Trash bulk action; returns false when the value is not one of them. */
  const handleBulk = useCallback(
    async (value, ids) => {
      if (value !== BULK_TRASH && value !== BULK_RESTORE) return false;
      await run(value === BULK_TRASH ? "trash" : "restore", ids);
      return true;
    },
    [run],
  );

  return { enabled: Boolean(moduleKey), menuItem, bulkOptions, handleBulk };
}
