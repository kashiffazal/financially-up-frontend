"use client";

/**
 * ============================================================================
 * Blog Categories / Tags manager (`components/admin/blog/TaxonomyManager`)
 * ============================================================================
 * WordPress-style screen: "Add New" form on the left (becomes "Edit" when a row
 * is selected), existing terms on the right with slug, post count and actions.
 *
 * @param {"category"|"tag"} type
 */

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Form, Button, Table, Popconfirm, Tooltip, Empty } from "antd";
import {
  FolderOutlined,
  FolderOpenOutlined,
  TagsOutlined,
  EditOutlined,
  DeleteOutlined,
  HomeOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import { antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";
import { useAuth } from "@/context/AuthContext";
import { slugify } from "@/lib/blog";
import { blogApi } from "../blogApi";
import styles from "./TaxonomyManager.module.css";

const CONFIG = {
  category: {
    title: "Categories",
    singular: "Category",
    icon: <FolderOutlined />,
    description: "Organise articles into parent categories and sub-categories. Categories appear as filters on the website blog.",
    list: blogApi.listCategories,
    create: blogApi.createCategory,
    update: blogApi.updateCategory,
    remove: blogApi.deleteCategory,
    deleteHint: "Posts keep their other categories, and any sub-categories move up one level.",
  },
  tag: {
    title: "Tags",
    singular: "Tag",
    icon: <TagsOutlined />,
    description: "Keywords that describe an article. Popular tags are listed on the website blog.",
    list: blogApi.listTags,
    create: blogApi.createTag,
    update: blogApi.updateTag,
    remove: blogApi.deleteTag,
    deleteHint: "The tag is removed from every post that uses it.",
  },
};

// "None" option of the Parent Category select (antd hides options whose value is null)
const NO_PARENT = 0;

export default function TaxonomyManager({ type = "category" }) {
  const cfg = CONFIG[type];
  const isCategory = type === "category";
  const { hasPermission } = useAuth();
  const canManage = hasPermission("blog.manage");
  const [form] = Form.useForm();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // row being edited
  const [saving, setSaving] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const reload = useCallback(() => setReloadKey((k) => k + 1), []);

  useEffect(() => {
    let active = true;
    cfg.list().then((res) => {
      if (!active) return;
      setRows(res?.data || []);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [cfg, reloadKey]);

  const startEdit = (row) => {
    setEditing(row);
    setSlugTouched(true);
    form.setFieldsValue({ name: row.name, slug: row.slug, description: row.description || "", parentId: row.parentId || NO_PARENT });
  };

  const resetForm = () => {
    setEditing(null);
    setSlugTouched(false);
    form.resetFields();
  };

  const submit = async (values) => {
    setSaving(true);
    const payload = { ...values, parentId: values.parentId || null };
    const res = editing ? await cfg.update(editing.id, payload) : await cfg.create(payload);
    setSaving(false);
    if (!res?.success) return;
    antdMsg.success(res.message || `${cfg.singular} saved.`);
    resetForm();
    reload();
  };

  const remove = async (row) => {
    const res = await cfg.remove(row.id);
    if (!res?.success) return;
    antdMsg.success(res.message || `${cfg.singular} deleted.`);
    if (editing?.id === row.id) resetForm();
    reload();
  };

  // Parent options: everything except the category itself and its own sub-categories
  const parentOptions = (() => {
    if (!isCategory) return [];
    const excluded = new Set();
    if (editing) {
      excluded.add(editing.id);
      let changed = true;
      while (changed) {
        changed = false;
        rows.forEach((r) => {
          if (r.parentId && excluded.has(r.parentId) && !excluded.has(r.id)) {
            excluded.add(r.id);
            changed = true;
          }
        });
      }
    }
    return [
      { value: NO_PARENT, label: "None (top-level category)" },
      ...rows.filter((r) => !excluded.has(r.id)).map((r) => ({ value: r.id, label: `${"— ".repeat(r.depth || 0)}${r.name}` })),
    ];
  })();

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_, row) => (
        <div style={{ paddingLeft: (row.depth || 0) * 26 }} className="flex items-start gap-2">
          {isCategory ? (
            row.depth ? (
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="text-slate-300">—</span>
                <FolderOpenOutlined />
              </span>
            ) : (
              <FolderOutlined className="mt-1 text-brand-primary dark:text-emerald-400" />
            )
          ) : (
            <span className="font-bold text-brand-primary dark:text-emerald-400">#</span>
          )}
          <div className="min-w-0">
            <div className={row.depth ? "text-[13px] font-medium" : "font-semibold text-slate-900 dark:text-zinc-100"}>{row.name}</div>
            {row.description && <div className="truncate max-w-md text-[12px] text-slate-500 dark:text-zinc-400">{row.description}</div>}
          </div>
        </div>
      ),
    },
    { title: "Slug", dataIndex: "slug", key: "slug", width: 220, render: (v) => <span className="font-mono text-[12px] text-slate-500">{v}</span> },
    {
      title: "Posts",
      key: "count",
      width: 80,
      align: "center",
      render: (_, row) =>
        row.count ? (
          isCategory ? (
            <Link href={`/admin/blog?category=${row.id}`} className={styles.count}>
              {row.count}
            </Link>
          ) : (
            <span className={styles.count}>{row.count}</span>
          )
        ) : (
          <span className={`${styles.count} ${styles.countZero}`}>0</span>
        ),
    },
    canManage && {
      title: "Actions",
      key: "actions",
      width: 100,
      align: "center",
      render: (_, row) => (
        <span className="flex items-center justify-center gap-1">
          <Tooltip title="Edit">
            <Button type="text" size="small" icon={<EditOutlined />} onClick={() => startEdit(row)} />
          </Tooltip>
          <Popconfirm
            title={`Delete "${row.name}"?`}
            description={cfg.deleteHint}
            okText="Delete"
            okButtonProps={{ danger: true }}
            onConfirm={() => remove(row)}
          >
            <Tooltip title="Delete">
              <Button type="text" size="small" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </span>
      ),
    },
  ].filter(Boolean);

  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={cfg.icon}
        title={cfg.title}
        description={cfg.description}
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="text-[12px]!" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          { title: <Link href="/admin/blog">Blog Posts</Link> },
          { title: <span className="font-semibold text-brand-primary dark:text-emerald-400">{cfg.title}</span> },
        ]}
        extraActions={
          <Link href="/admin/blog">
            <Button icon={<ArrowLeftOutlined />}>All Posts</Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {canManage && (
          <div className="lg:col-span-4">
            <div className={styles.panel}>
              <h3 className="m-0 text-[16px] font-bold text-slate-900 dark:text-zinc-100">
                {editing ? `Edit ${cfg.singular}` : `Add New ${cfg.singular}`}
              </h3>
              <p className="m-0 mt-1 mb-4 pb-4 border-b border-slate-100 dark:border-zinc-800 text-[12.5px] text-slate-500 dark:text-zinc-400">
                {editing ? `Editing "${editing.name}".` : isCategory ? "Create a top-level category or a sub-category." : "Create a new tag."}
              </p>
              <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                className={styles.form}
                initialValues={{ parentId: NO_PARENT }}
                onFinish={submit}
                onValuesChange={(changed) => {
                  if ("slug" in changed) setSlugTouched(Boolean(changed.slug));
                  if ("name" in changed && !slugTouched) form.setFieldValue("slug", slugify(changed.name));
                }}
              >
                <AntInput
                  name="name"
                  label="Name"
                  placeholder={isCategory ? "e.g. Tax Planning" : "e.g. ATO Compliance"}
                  reqMsg={`Please enter a ${cfg.singular.toLowerCase()} name.`}
                  extra="How it appears on the website."
                  maxLength={120}
                />
                <AntInput
                  name="slug"
                  label="Slug"
                  placeholder={isCategory ? "e.g. tax-planning" : "e.g. ato-compliance"}
                  className="font-mono"
                  extra="The URL-friendly version. Generated from the name if left empty."
                  maxLength={160}
                  noRequired
                />
                {isCategory && (
                  <AntInput
                    type="select"
                    name="parentId"
                    label="Parent Category"
                    options={parentOptions}
                    extra="Choose a parent to make this a sub-category."
                    noRequired
                  />
                )}
                <AntInput
                  type="textarea"
                  name="description"
                  label="Description"
                  placeholder="Short explanation of this topic..."
                  minRows={3}
                  maxRows={6}
                  maxLength={2000}
                  noRequired
                />
                <div className="flex gap-2">
                  {editing && (
                    <Button onClick={resetForm} className="flex-1">
                      Cancel
                    </Button>
                  )}
                  <Button type="primary" htmlType="submit" icon={editing ? <EditOutlined /> : <PlusOutlined />} loading={saving} className="flex-1 bg-brand-primary!">
                    {editing ? `Update ${cfg.singular}` : `Add New ${cfg.singular}`}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}

        <div className={canManage ? "lg:col-span-8" : "lg:col-span-12"}>
          <div className={`${styles.panel} p-0!`}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-zinc-800">
              <h3 className="m-0 text-[15px] font-bold text-slate-900 dark:text-zinc-100">Existing {cfg.title}</h3>
              <span className="text-[12.5px] text-slate-500">
                {rows.length} {rows.length === 1 ? cfg.singular : cfg.title}
              </span>
            </div>
            <Table
              rowKey="id"
              columns={columns}
              dataSource={rows}
              loading={loading}
              pagination={rows.length > 50 ? { pageSize: 50, showSizeChanger: false } : false}
              rowClassName={(row) => (editing?.id === row.id ? styles.editingRow : row.depth ? styles.childRow : "")}
              locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={`No ${cfg.title.toLowerCase()} yet`} /> }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
