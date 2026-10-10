"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Checkbox, Form, Button, Empty } from "antd";
import { FolderOutlined, PlusOutlined } from "@ant-design/icons";
import EditorCard from "../EditorCard";
import { blogApi } from "../blogApi";
import { AntInput } from "@/services/antdFields";
import styles from "./CategoryChecklist.module.css";

/**
 * Categories box of the post editor: WordPress-style checklist (sub-categories
 * indented) with inline "+ Add New Category".
 *
 * @param {Array}    categories   - flat list in tree order: [{ id, name, depth, parentId }]
 * @param {number[]} selectedIds
 * @param {function} onChange     - (ids)
 * @param {function} onCreated    - (category) after an inline add (parent reloads the list)
 */
export default function CategoryChecklist({ categories = [], selectedIds = [], onChange, onCreated, canManage }) {
  const [form] = Form.useForm();
  const [adding, setAdding] = useState(false);
  const [saving, setSaving] = useState(false);

  const toggle = (id, checked) => onChange(checked ? [...new Set([...selectedIds, id])] : selectedIds.filter((x) => x !== id));

  const addCategory = async ({ name, parentId }) => {
    setSaving(true);
    // parentId 0 = "None" (antd hides options whose value is null)
    const res = await blogApi.createCategory({ name: name.trim(), parentId: parentId || null });
    setSaving(false);
    if (!res?.success) return;
    onCreated?.(res.data);
    onChange([...new Set([...selectedIds, res.data.id])]);
    form.resetFields();
    setAdding(false);
  };

  return (
    <EditorCard
      title="Categories"
      icon={<FolderOutlined />}
      extra={
        canManage && (
          <Link href="/admin/blog/categories" className="text-[12px] font-semibold">
            Manage
          </Link>
        )
      }
    >
      <div className={styles.list}>
        {categories.length === 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No categories yet" className="my-2!" />
        ) : (
          categories.map((c) => (
            <label key={c.id} className={styles.row} style={{ paddingLeft: c.depth * 22 }}>
              <Checkbox checked={selectedIds.includes(c.id)} onChange={(e) => toggle(c.id, e.target.checked)} disabled={!canManage} />
              <span className={c.depth ? "text-[12.5px] text-slate-600 dark:text-zinc-300" : "text-[13px] text-slate-800 dark:text-zinc-100"}>
                {c.name}
              </span>
            </label>
          ))
        )}
      </div>

      {canManage &&
        (adding ? (
          <Form
            form={form}
            onFinish={addCategory}
            requiredMark={false}
            initialValues={{ parentId: 0 }}
            className={`mt-3 border-t border-slate-100 dark:border-zinc-800 pt-3 ${styles.addForm}`}
          >
            <AntInput name="name" placeholder="New category name" reqMsg="Please enter a category name." maxLength={120} />
            <AntInput
              type="select"
              name="parentId"
              placeholder="Parent category (optional)"
              options={[
                { value: 0, label: "None (top-level category)" },
                ...categories.map((c) => ({ value: c.id, label: `${"— ".repeat(c.depth)}${c.name}` })),
              ]}
              noRequired
            />
            <div className="flex justify-end gap-2 pt-1">
              <Button size="small" onClick={() => setAdding(false)}>
                Cancel
              </Button>
              <Button size="small" type="primary" htmlType="submit" className="bg-brand-primary!" loading={saving}>
                Add Category
              </Button>
            </div>
          </Form>
        ) : (
          <button type="button" className={styles.addLink} onClick={() => setAdding(true)}>
            <PlusOutlined /> Add New Category
          </button>
        ))}
    </EditorCard>
  );
}
