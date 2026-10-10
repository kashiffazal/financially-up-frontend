"use client";

import React from "react";
import dayjs from "dayjs";
import { Select, DatePicker, Checkbox, Button, Popconfirm, Tag } from "antd";
import { StarFilled, DeleteOutlined, ExportOutlined, SendOutlined, SaveOutlined } from "@ant-design/icons";
import EditorCard from "../EditorCard";
import styles from "./PublishBox.module.css";

/**
 * Publish settings box of the post editor (right column).
 *
 * @param {object}   post         - { status, publishedAt, featured, displayStatus }
 * @param {function} onChange     - (field, value)
 * @param {function} onSave       - (targetStatus: "draft" | "published")
 * @param {function} [onTrash]    - Move to Trash (edit mode only)
 * @param {string}   [viewUrl]    - Website URL of the post when it is live
 * @param {boolean}  saving
 * @param {boolean}  isEdit
 * @param {boolean}  canManage    - User has blog.manage
 */
export default function PublishBox({ post, onChange, onSave, onTrash, viewUrl, saving, isEdit, canManage }) {
  const publishedAt = post.publishedAt ? dayjs(post.publishedAt) : null;
  const isFuture = publishedAt && publishedAt.isAfter(dayjs());
  const isLive = post.displayStatus === "Published";

  // Primary button wording follows WordPress
  let primaryLabel = "Publish";
  if (isFuture) primaryLabel = "Schedule";
  else if (isEdit && post.status === "published") primaryLabel = "Update";

  const statusLine = (() => {
    if (post.status === "draft") return <Tag className="m-0!">Draft</Tag>;
    if (isFuture) return <Tag color="processing" className="m-0!">Scheduled for {publishedAt.format("D MMM YYYY, h:mm A")}</Tag>;
    if (post.status === "published") return <Tag color="success" className="m-0!">Published</Tag>;
    return null;
  })();

  return (
    <EditorCard title="Publish" extra={statusLine}>
      <div className="space-y-4">
        <div>
          <label className={styles.label}>Status</label>
          <Select size="large"
            className="w-full"
            value={post.status === "published" ? "published" : "draft"}
            onChange={(v) => onChange("status", v)}
            disabled={!canManage}
            options={[
              { value: "draft", label: "Draft" },
              { value: "published", label: isFuture ? "Scheduled (publish at date)" : "Published" },
            ]}
          />
        </div>

        <div>
          <label className={styles.label}>Publish Date</label>
          <DatePicker size="large"
            className="w-full"
            showTime={{ use12Hours: true, format: "h:mm A" }}
            format="DD/MM/YYYY h:mm A"
            value={publishedAt}
            placeholder="Immediately"
            onChange={(d) => onChange("publishedAt", d ? d.toISOString() : null)}
            disabled={!canManage}
          />
          <p className={styles.hint}>
            {isFuture ? "A future date schedules the post: it goes live on the website automatically." : "Leave empty to publish immediately."}
          </p>
        </div>

        <label className={`${styles.feature} ${post.featured ? styles.featureOn : ""}`}>
          <Checkbox checked={Boolean(post.featured)} onChange={(e) => onChange("featured", e.target.checked)} disabled={!canManage} />
          <span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-zinc-100">
              <StarFilled className="text-amber-500" /> Feature this post (Spotlight)
            </span>
            <span className="block text-[11.5px] text-slate-500 dark:text-zinc-400 mt-0.5">
              Shown in the Featured Spotlight at the top of the website blog. Only one post can be featured.
            </span>
          </span>
        </label>

        {canManage && (
          <div className="flex items-center justify-between gap-2 pt-1">
            <Button icon={<SaveOutlined />} loading={saving === "draft"} disabled={Boolean(saving)} onClick={() => onSave("draft")}>
              Save Draft
            </Button>
            <Button
              type="primary"
              icon={<SendOutlined />}
              className="bg-brand-primary!"
              loading={saving === "published"}
              disabled={Boolean(saving)}
              onClick={() => onSave("published")}
            >
              {primaryLabel}
            </Button>
          </div>
        )}

        {(isEdit || viewUrl) && (
          <div className="flex items-center justify-between gap-2 border-t border-slate-100 dark:border-zinc-800 pt-3 text-[12.5px]">
            {isEdit && canManage && onTrash ? (
              <Popconfirm
                title="Move this post to Trash?"
                description="It disappears from the website. You can restore it from the Trash tab."
                okText="Move to Trash"
                okButtonProps={{ danger: true }}
                onConfirm={onTrash}
              >
                <button type="button" className="flex items-center gap-1 text-red-500 hover:text-red-600 cursor-pointer">
                  <DeleteOutlined /> Move to Trash
                </button>
              </Popconfirm>
            ) : (
              <span />
            )}
            {isLive && viewUrl && (
              <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold">
                View post <ExportOutlined />
              </a>
            )}
          </div>
        )}
      </div>
    </EditorCard>
  );
}
