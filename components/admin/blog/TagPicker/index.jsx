"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "antd";
import { TagsOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import EditorCard from "../EditorCard";
import { blogApi } from "../blogApi";
import styles from "./TagPicker.module.css";

/**
 * Tags box of the post editor: selected tags, "Create New Tag" input, and all
 * existing tags as clickable chips (click to add / remove).
 *
 * @param {Array}    tags         - [{ id, name }]
 * @param {number[]} selectedIds
 * @param {function} onChange     - (ids)
 * @param {function} onCreated    - (tag) after a new tag is created
 */
export default function TagPicker({ tags = [], selectedIds = [], onChange, onCreated, canManage }) {
  const [newTag, setNewTag] = useState("");
  const [saving, setSaving] = useState(false);

  const selected = selectedIds.map((id) => tags.find((t) => t.id === id)).filter(Boolean);
  const toggle = (id) => onChange(selectedIds.includes(id) ? selectedIds.filter((x) => x !== id) : [...selectedIds, id]);

  const addTag = async () => {
    const name = newTag.replace(/^#+/, "").trim();
    if (!name) return;
    // Already exists locally? just select it
    const existing = tags.find((t) => t.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      if (!selectedIds.includes(existing.id)) onChange([...selectedIds, existing.id]);
      setNewTag("");
      return;
    }
    setSaving(true);
    const res = await blogApi.createTag({ name });
    setSaving(false);
    if (!res?.success) return;
    onCreated?.(res.data);
    onChange([...new Set([...selectedIds, res.data.id])]);
    setNewTag("");
  };

  return (
    <EditorCard
      title="Tags"
      icon={<TagsOutlined />}
      extra={
        canManage && (
          <Link href="/admin/blog/tags" className="text-[12px] font-semibold">
            Manage All
          </Link>
        )
      }
    >
      <div className="space-y-4">
        <div>
          <div className={styles.label}>Selected Tags ({selected.length})</div>
          <div className={styles.selectedBox}>
            {selected.length === 0 ? (
              <span className="text-[12px] italic text-slate-400">No tags yet. Click a tag below or create a new one.</span>
            ) : (
              selected.map((t) => (
                <span key={t.id} className={styles.selectedChip}>
                  #{t.name}
                  {canManage && (
                    <button type="button" aria-label={`Remove ${t.name}`} onClick={() => toggle(t.id)}>
                      <CloseOutlined />
                    </button>
                  )}
                </span>
              ))
            )}
          </div>
        </div>

        {canManage && (
          <div>
            <div className={styles.label}>Create New Tag</div>
            <div className="flex gap-2">
              <Input size="large"
                prefix={<span className="text-slate-400">#</span>}
                placeholder="Type a new tag name..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onPressEnter={addTag}
                maxLength={120}
              />
              <Button type="primary" size="large" icon={<PlusOutlined />} className="bg-brand-primary!" loading={saving} onClick={addTag}>
                Add
              </Button>
            </div>
            <p className="m-0 mt-1 text-[11px] text-slate-400">Press Enter or click Add.</p>
          </div>
        )}

        {tags.length > 0 && (
          <div className="border-t border-slate-100 dark:border-zinc-800 pt-3">
            <div className="flex items-center justify-between">
              <span className={styles.label}>All Tags</span>
              <span className="text-[11px] text-slate-400">Click to add / remove</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((t) => {
                const on = selectedIds.includes(t.id);
                return (
                  <button
                    key={t.id}
                    type="button"
                    disabled={!canManage}
                    onClick={() => toggle(t.id)}
                    className={`${styles.chip} ${on ? styles.chipOn : ""}`}
                  >
                    {on ? "✓" : "+"} #{t.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </EditorCard>
  );
}
