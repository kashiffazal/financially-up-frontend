"use client";

/**
 * ============================================================================
 * Blog Posts List (`components/admin/blog/PostsList`)
 * ============================================================================
 * WordPress-style "All Posts" screen, laid out like the other admin logs:
 * card status tabs with counts (All / Published / Scheduled / Drafts / Trash) and
 * the shared DataTable (search, "Filter by", rows per page, pagination), plus a
 * category filter, Excel / CSV export, one-click Featured star and row actions
 * (Edit, View, Trash / Restore, Delete permanently).
 */

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import { Tabs, Tag, Select, Button, Tooltip, Dropdown, Popconfirm } from "antd";
import {
  ReadOutlined,
  HomeOutlined,
  PlusOutlined,
  StarFilled,
  StarOutlined,
  EditOutlined,
  ExportOutlined,
  DeleteOutlined,
  RollbackOutlined,
  MoreOutlined,
  AppstoreOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import DataTable from "@/components/mutual/andt-data-table-component";
import ExportButtons from "@/components/admin/ExportButtons";
import SearchFilterBanner from "@/components/admin/SearchFilterBanner";
import { antdMsg } from "@/services";
import { useAuth } from "@/context/AuthContext";
import { useSettings } from "@/context/SettingsContext";
import { resolveBlogImage, siteBaseUrl } from "@/lib/blog";
import { blogApi, POST_STATUS_META } from "../blogApi";
import styles from "./PostsList.module.css";

const TABS = [
  { key: "all", label: "All", countKey: "all", icon: <AppstoreOutlined /> },
  { key: "published", label: "Published", countKey: "published", icon: <CheckCircleOutlined /> },
  { key: "scheduled", label: "Scheduled", countKey: "scheduled", icon: <ClockCircleOutlined /> },
  { key: "draft", label: "Drafts", countKey: "drafts", icon: <FileTextOutlined /> },
  { key: "trash", label: "Trash", countKey: "trash", icon: <DeleteOutlined /> },
];

// DataTable search + "Filter by" fields (flattened onto each row below)
const SEARCH_FIELDS = [
  { label: "Title", value: "title" },
  { label: "Slug", value: "slug" },
  { label: "Author", value: "authorName" },
  { label: "Categories", value: "categoryNames" },
  { label: "Tags", value: "tagNames" },
  { label: "Status", value: "displayStatus" },
];

const dateTime = (value) => (value ? dayjs(value).format("D MMM YYYY, h:mm A") : "");

export default function PostsList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { hasPermission } = useAuth();
  const { get } = useSettings();
  const canManage = hasPermission("blog.manage");
  const siteUrl = siteBaseUrl(get("url.website"));

  const [status, setStatus] = useState(() => (TABS.some((t) => t.key === searchParams.get("status")) ? searchParams.get("status") : "all"));
  // Global Search "View all" (?ids=1,2,3&q=term) narrows the list, like the other logs
  const idsParam = searchParams.get("ids");
  const queryParam = searchParams.get("q");
  const searchFilter = useMemo(() => {
    const ids = (idsParam || "").split(",").map(Number).filter(Boolean);
    return ids.length ? { ids, query: queryParam || "" } : null;
  }, [idsParam, queryParam]);
  const [categoryId, setCategoryId] = useState(() => Number(searchParams.get("category")) || null);
  const [posts, setPosts] = useState([]);
  const [counts, setCounts] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const reload = useCallback(() => setReloadKey((k) => k + 1), []);

  // Posts for the current tab / category (the DataTable searches them in the browser)
  useEffect(() => {
    let active = true;
    blogApi.listPosts({ status, categoryId: categoryId || undefined }).then((res) => {
      if (!active) return;
      setPosts(res?.data?.posts || []);
      setCounts(res?.data?.counts || {});
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [status, categoryId, reloadKey]);

  // Flat text fields so the DataTable search / "Filter by" can match them
  const rows = useMemo(() => {
    const list = searchFilter ? posts.filter((p) => searchFilter.ids.includes(p.id)) : posts;
    return list.map((p) => ({
      ...p,
      categoryNames: (p.categories || []).map((c) => c.name).join(", "),
      tagNames: (p.tags || []).map((t) => t.name).join(", "),
    }));
  }, [posts, searchFilter]);

  const exportColumns = useMemo(
    () => [
      { header: "Title", key: "title" },
      { header: "URL", key: (p) => `${siteUrl}/blog/${p.slug}` },
      { header: "Status", key: "displayStatus" },
      { header: "Featured", key: (p) => (p.featured ? "Yes" : "") },
      { header: "Author", key: "authorName" },
      { header: "Categories", key: "categoryNames" },
      { header: "Tags", key: "tagNames" },
      { header: "Published / Goes Live", key: (p) => (p.status === "published" ? dateTime(p.publishedAt) : "") },
      { header: "Last Updated", key: (p) => dateTime(p.updatedAt) },
    ],
    [siteUrl]
  );

  useEffect(() => {
    let active = true;
    blogApi.listCategories().then((res) => {
      if (active) setCategories(res?.data || []);
    });
    return () => {
      active = false;
    };
  }, []);

  const changeTab = (key) => {
    setStatus(key);
    setLoading(true);
    router.replace(key === "all" ? "/admin/blog" : `/admin/blog?status=${key}`, { scroll: false });
  };

  // ---------------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------------
  const run = async (promise, message) => {
    const res = await promise;
    if (res?.success) {
      antdMsg.success(res.message || message);
      reload();
    }
  };

  const toggleFeatured = (post) => run(blogApi.setFeatured(post.id, !post.featured), post.featured ? "Unfeatured." : "Featured.");

  // ---------------------------------------------------------------------------
  // Columns
  // ---------------------------------------------------------------------------
  const columns = useMemo(
    () => [
      {
        title: (
          <Tooltip title="Featured Spotlight post (only one)">
            <StarFilled className="text-amber-400" />
          </Tooltip>
        ),
        key: "featured",
        width: 56,
        align: "center",
        render: (_, post) =>
          post.status === "trash" ? null : (
            <Tooltip title={post.featured ? "Featured on the website — click to remove" : "Make this the featured post"}>
              <button
                type="button"
                className={`${styles.star} ${post.featured ? styles.starOn : ""}`}
                onClick={() => canManage && toggleFeatured(post)}
                disabled={!canManage}
                aria-label={post.featured ? "Unfeature post" : "Feature post"}
              >
                {post.featured ? <StarFilled /> : <StarOutlined />}
              </button>
            </Tooltip>
          ),
      },
      {
        title: "Title",
        key: "title",
        render: (_, post) => (
          <div className="flex items-center gap-3 min-w-0">
            {post.featuredImage ? (
              // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
              <img src={resolveBlogImage(post.featuredImage)} alt="" className={styles.thumb} />
            ) : (
              <span className={`${styles.thumb} ${styles.thumbEmpty}`}>
                <ReadOutlined />
              </span>
            )}
            <div className="min-w-0">
              {post.status === "trash" ? (
                <span className="font-semibold text-slate-500 line-through decoration-slate-300">{post.title}</span>
              ) : (
                <Link href={`/admin/blog/${post.id}`} className="font-semibold text-slate-900 dark:text-zinc-100 hover:text-brand-primary!">
                  {post.title}
                </Link>
              )}
              <div className="truncate font-mono text-[11px] text-slate-400">/blog/{post.slug}</div>
            </div>
          </div>
        ),
      },
      {
        title: "Author",
        key: "author",
        width: 150,
        render: (_, post) => <span className="text-[13px]">{post.authorName || "—"}</span>,
      },
      {
        title: "Categories",
        key: "categories",
        width: 170,
        render: (_, post) =>
          post.categories?.length ? (
            <span className="text-[12.5px] text-slate-600 dark:text-zinc-300">{post.categories.map((c) => c.name).join(", ")}</span>
          ) : (
            <span className="text-slate-400">Uncategorised</span>
          ),
      },
      {
        title: "Tags",
        key: "tags",
        width: 190,
        render: (_, post) =>
          post.tags?.length ? (
            <span className="text-[12px] text-slate-500 dark:text-zinc-400">{post.tags.map((t) => `#${t.name}`).join(", ")}</span>
          ) : (
            <span className="text-slate-400">—</span>
          ),
      },
      {
        title: "Status / Date",
        key: "date",
        width: 225,
        render: (_, post) => {
          const meta = POST_STATUS_META[post.displayStatus] || POST_STATUS_META.Draft;
          const when =
            post.displayStatus === "Trash"
              ? `Trashed ${dayjs(post.trashedAt || post.updatedAt).format("D MMM YYYY")}`
              : post.displayStatus === "Draft"
                ? `Last modified ${dayjs(post.updatedAt).format("D MMM YYYY")}`
                : `${post.displayStatus === "Scheduled" ? "Goes live" : "Published"} ${dayjs(post.publishedAt).format("D MMM YYYY, h:mm A")}`;
          return (
            <div className="flex flex-col items-start gap-1">
              <Tag color={meta.color} className="m-0!">
                {meta.label}
              </Tag>
              <span className="whitespace-nowrap text-[11.5px] text-slate-500 dark:text-zinc-400">{when}</span>
            </div>
          );
        },
      },
      {
        title: "Actions",
        key: "actions",
        width: 120,
        align: "center",
        fixed: "right",
        render: (_, post) => {
          const items =
            post.status === "trash"
              ? [
                  canManage && { key: "restore", icon: <RollbackOutlined />, label: "Restore", onClick: () => run(blogApi.restorePost(post.id), "Restored.") },
                  canManage && {
                    key: "delete",
                    danger: true,
                    icon: <DeleteOutlined />,
                    label: (
                      <Popconfirm
                        title="Delete permanently?"
                        description="This can't be undone."
                        okText="Delete permanently"
                        okButtonProps={{ danger: true }}
                        onConfirm={() => run(blogApi.deletePost(post.id), "Deleted.")}
                      >
                        <span className="block w-full">Delete Permanently</span>
                      </Popconfirm>
                    ),
                  },
                ]
              : [
                  { key: "edit", icon: <EditOutlined />, label: <Link href={`/admin/blog/${post.id}`}>Edit</Link> },
                  post.displayStatus === "Published" && {
                    key: "view",
                    icon: <ExportOutlined />,
                    label: (
                      <a href={`${siteUrl}/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        View on website
                      </a>
                    ),
                  },
                  canManage && {
                    key: "feature",
                    icon: post.featured ? <StarOutlined /> : <StarFilled className="text-amber-400" />,
                    label: post.featured ? "Remove from Featured" : "Make Featured",
                    onClick: () => toggleFeatured(post),
                  },
                  canManage && { type: "divider" },
                  canManage && { key: "trash", danger: true, icon: <DeleteOutlined />, label: "Move to Trash", onClick: () => run(blogApi.trashPost(post.id), "Moved to Trash.") },
                ];
          return (
            <Dropdown menu={{ items: items.filter(Boolean) }} trigger={["click"]} placement="bottomRight">
              <Button size="small" icon={<MoreOutlined />}>
                Actions
              </Button>
            </Dropdown>
          );
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run/toggleFeatured only call reload()
    [canManage, siteUrl]
  );

  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={<ReadOutlined />}
        title="Blog Posts"
        description="Articles shown on the website blog. Create, schedule, feature, and organise them with categories and tags."
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="text-[12px]!" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          { title: <span className="font-semibold text-brand-primary dark:text-emerald-400">Blog Posts</span> },
        ]}
        extraActions={
          canManage && (
            <Link href="/admin/blog/new">
              <Button type="primary" icon={<PlusOutlined />} className="bg-brand-primary!">
                Add New Post
              </Button>
            </Link>
          )
        }
      />

      <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm">
        <SearchFilterBanner filter={searchFilter} shownCount={rows.length} />
        <Tabs
          activeKey={status}
          onChange={changeTab}
          type="card"
          className="form-registration-status-tabs"
          items={TABS.map((t) => {
            const count = counts[t.countKey] ?? 0;
            return {
              key: t.key,
              label: (
                <span className="flex items-center gap-1.5 font-medium">
                  {t.icon}
                  <span>{t.label}</span>
                  <span
                    className={`text-xs px-1.5 py-0.2 rounded-pill font-mono ${
                      count > 0 && t.key !== "all"
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              ),
              // One table, under the active tab (it remounts per tab, so paging resets)
              children:
                t.key === status ? (
                  <DataTable
                    columns={columns}
                    dataSource={rows}
                    loading={loading}
                    filterPlaceholder="Search posts..."
                    filterCol={SEARCH_FIELDS.map((f) => f.value)}
                    customFilter
                    customFilterCol={SEARCH_FIELDS}
                    sizeChangerOptions={[10, 20, 50, 100]}
                    scroll={{ x: 1150 }}
                    extraHeader={
                      <div className="flex flex-wrap items-center gap-2">
                        <Select
                          allowClear
                          placeholder="All categories"
                          className="w-48!"
                          value={categoryId}
                          onChange={(v) => {
                            setCategoryId(v ?? null);
                            setLoading(true);
                          }}
                          options={categories.map((c) => ({ value: c.id, label: `${"— ".repeat(c.depth)}${c.name}` }))}
                        />
                        <ExportButtons data={rows} columns={exportColumns} filename={`Blog_Posts_${t.label}`} />
                      </div>
                    }
                  />
                ) : null,
            };
          })}
        />
      </div>
    </div>
  );
}
