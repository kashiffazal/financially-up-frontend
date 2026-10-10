"use client";

/**
 * ============================================================================
 * Blog Post Editor (`components/admin/blog/PostEditor`)
 * ============================================================================
 * WordPress-style create / edit screen used by /admin/blog/new and
 * /admin/blog/[id]:
 *   Left:  title + permalink, content (Visual / HTML), excerpt, SEO & schema
 *   Right: Publish (status, date, featured), Author, Categories, Tags,
 *          Featured Image
 */

import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Segmented, Alert, Skeleton, Result } from "antd";
import {
  EditOutlined,
  EyeOutlined,
  CodeOutlined,
  SyncOutlined,
  CheckOutlined,
  CloseOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import { antdMsg } from "@/services";
import { useTheme } from "@/app/ThemeProvider";
import { useAuth } from "@/context/AuthContext";
import { useSettings } from "@/context/SettingsContext";
import { slugify, countWords, siteBaseUrl } from "@/lib/blog";
import { blogApi } from "../blogApi";
import EditorCard from "../EditorCard";
import PublishBox from "../PublishBox";
import AuthorBox from "../AuthorBox";
import CategoryChecklist from "../CategoryChecklist";
import TagPicker from "../TagPicker";
import FeaturedImagePicker from "../FeaturedImagePicker";
import SeoPanel from "../SeoPanel";
import styles from "./PostEditor.module.css";

// Code editor (CodeMirror) only runs in the browser
const CodeEditor = dynamic(() => import("../CodeEditor"), {
  ssr: false,
  loading: () => <Skeleton active paragraph={{ rows: 10 }} className="p-5" />,
});

// TinyMCE only runs in the browser
const RichTextEditor = dynamic(() => import("../RichTextEditor"), {
  ssr: false,
  loading: () => <Skeleton active paragraph={{ rows: 10 }} className="p-5" />,
});

const EMPTY_POST = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  status: "draft",
  publishedAt: null,
  featured: false,
  badge: "",
  featuredImage: "",
  authorUserId: null,
  authorName: "",
  authorRole: "",
  authorQualifications: "",
  focusKeyword: "",
  metaTitle: "",
  metaDescription: "",
  schemaJson: "",
  categoryIds: [],
  tagIds: [],
  displayStatus: "Draft",
  isImportedLayout: false,
};

/** Editor state from an API post. */
const fromApi = (p) => ({
  ...EMPTY_POST,
  ...Object.fromEntries(Object.entries(p).filter(([, v]) => v !== null && v !== undefined)),
  categoryIds: p.categoryIds || [],
  tagIds: p.tagIds || [],
});

export default function PostEditor({ postId = null }) {
  const router = useRouter();
  const { isDark } = useTheme();
  const { hasPermission, user } = useAuth();
  const { get } = useSettings();
  const canManage = hasPermission("blog.manage");
  const isEdit = Boolean(postId);

  const [post, setPost] = useState(EMPTY_POST);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loadState, setLoadState] = useState("loading"); // loading | ready | notfound
  const [saving, setSaving] = useState(null); // null | "draft" | "published"
  const [dirty, setDirty] = useState(false);
  const [mode, setMode] = useState("Visual");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [editingSlug, setEditingSlug] = useState(false);
  const [slugDraft, setSlugDraft] = useState("");
  // Content edited by the user (TinyMCE's own clean-up on load doesn't count)
  const [dirtyContent, setDirtyContent] = useState(false);
  const contentBaseline = useRef(null);

  const site = useMemo(() => {
    const url = siteBaseUrl(get("url.website"));
    const logo = get("company.logoUrl");
    return { url, name: get("company.name") || "Financially Up", logo: logo ? (logo.startsWith("http") ? logo : `${url}${logo}`) : "" };
  }, [get]);

  // ---------------------------------------------------------------------------
  // Load post (edit) + categories, tags, authors
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let active = true;
    (async () => {
      const [postRes, catRes, tagRes, authorRes] = await Promise.all([
        postId ? blogApi.getPost(postId) : Promise.resolve(null),
        blogApi.listCategories(),
        blogApi.listTags(),
        blogApi.listAuthors(),
      ]);
      if (!active) return;
      setCategories(catRes?.data || []);
      setTags(tagRes?.data || []);
      setAuthors(authorRes?.data || []);
      if (postId) {
        if (!postRes?.success) {
          setLoadState("notfound");
          return;
        }
        setPost(fromApi(postRes.data));
      }
      setLoadState("ready");
    })();
    return () => {
      active = false;
    };
  }, [postId]);

  // New post: author defaults to the logged-in user
  const [authorDefaulted, setAuthorDefaulted] = useState(false);
  if (!isEdit && !authorDefaulted && user?.id && authors.length) {
    setAuthorDefaulted(true);
    const me = authors.find((a) => a.id === user.id);
    if (me) setPost((p) => ({ ...p, authorUserId: me.id, authorName: me.name, authorRole: p.authorRole || me.jobTitle || "" }));
  }

  // Warn before leaving with unsaved changes
  useEffect(() => {
    if (!dirty) return undefined;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  // ---------------------------------------------------------------------------
  // Field changes
  // ---------------------------------------------------------------------------
  const setField = useCallback(
    (field, value) => {
      setDirty(true);
      setPost((p) => {
        const next = { ...p, [field]: value };
        // WordPress behaviour: the permalink follows the title until edited by hand
        if (field === "title" && !slugTouched) next.slug = slugify(value);
        return next;
      });
    },
    [slugTouched]
  );

  const uploadEditorImage = useCallback(async (file) => {
    const res = await blogApi.uploadImage(file);
    return res?.url || null;
  }, []);

  // ---------------------------------------------------------------------------
  // Save
  // ---------------------------------------------------------------------------
  const save = async (targetStatus) => {
    if (!post.title.trim()) {
      antdMsg.error("Please enter a title.");
      return;
    }
    setSaving(targetStatus);
    const payload = {
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      status: targetStatus,
      publishedAt: post.publishedAt,
      featured: post.featured,
      badge: post.badge,
      featuredImage: post.featuredImage,
      authorUserId: post.authorUserId,
      authorRole: post.authorRole,
      authorQualifications: post.authorQualifications,
      focusKeyword: post.focusKeyword,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      schemaJson: post.schemaJson,
      categoryIds: post.categoryIds,
      tagIds: post.tagIds,
    };
    // Imported posts keep their original layout unless the content was edited
    if (isEdit && post.isImportedLayout && !dirtyContent) delete payload.content;

    const res = isEdit ? await blogApi.updatePost(postId, payload) : await blogApi.createPost(payload);
    setSaving(null);
    if (!res?.success) return;

    setDirty(false);
    setDirtyContent(false);
    const saved = fromApi(res.data);
    const label = saved.displayStatus === "Scheduled" ? "Post scheduled." : saved.status === "draft" ? "Draft saved." : isEdit ? "Post updated." : "Post published.";
    antdMsg.success(label);
    if (!isEdit) {
      router.replace(`/admin/blog/${res.data.id}`);
    } else {
      contentBaseline.current = saved.content;
      setPost(saved);
      setSlugTouched(true);
    }
  };

  // Content changes: TinyMCE re-formats the HTML when it loads — that is stored
  // silently; only real edits mark the post as changed (imported posts keep
  // their original layout unless their content is actually edited).
  const onEditorReady = useCallback((html) => {
    contentBaseline.current = html;
    setPost((p) => ({ ...p, content: html }));
  }, []);
  const setContent = (html) => {
    if (html === post.content) return;
    if (contentBaseline.current === null || html === contentBaseline.current) {
      setPost((p) => ({ ...p, content: html }));
      return;
    }
    setDirtyContent(true);
    setField("content", html);
  };

  const trash = async () => {
    const res = await blogApi.trashPost(postId);
    if (!res?.success) return;
    setDirty(false);
    antdMsg.success("Post moved to Trash.");
    router.push("/admin/blog?status=trash");
  };

  // ---------------------------------------------------------------------------
  // Permalink
  // ---------------------------------------------------------------------------
  const startSlugEdit = () => {
    setSlugDraft(post.slug);
    setEditingSlug(true);
  };
  const confirmSlug = () => {
    const clean = slugify(slugDraft);
    if (clean) {
      setSlugTouched(true);
      setField("slug", clean);
    }
    setEditingSlug(false);
  };
  const syncSlug = () => {
    setSlugTouched(false);
    setField("slug", slugify(post.title));
  };

  const selectedTagNames = useMemo(() => post.tagIds.map((id) => tags.find((t) => t.id === id)?.name).filter(Boolean), [post.tagIds, tags]);
  const words = useMemo(() => countWords(post.content), [post.content]);
  const viewUrl = post.slug ? `${site.url}/blog/${post.slug}` : null;

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  const breadcrumbs = [
    {
      title: (
        <span className="flex items-center gap-1.5 text-slate-500">
          <HomeOutlined className="text-[12px]!" /> Dashboard
        </span>
      ),
      href: "/admin/dashboard",
    },
    { title: <Link href="/admin/blog">Blog Posts</Link> },
    { title: <span className="font-semibold text-brand-primary dark:text-emerald-400">{isEdit ? "Edit Post" : "Add New"}</span> },
  ];

  if (loadState === "notfound") {
    return (
      <Result
        status="404"
        title="Post not found"
        subTitle="It may have been deleted permanently."
        extra={
          <Link href="/admin/blog">
            <Button type="primary" className="bg-brand-primary!">
              Back to Blog Posts
            </Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={<EditOutlined />}
        title={isEdit ? "Edit Post" : "Add New Post"}
        description="Write and publish articles for the website blog, with categories, tags, featured image and SEO."
        breadcrumbs={breadcrumbs}
        extraActions={
          <Link href="/admin/blog">
            <Button icon={<ArrowLeftOutlined />}>All Posts</Button>
          </Link>
        }
      />

      {loadState === "loading" ? (
        <Skeleton active paragraph={{ rows: 12 }} />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          {/* ── Left column ── */}
          <div className="xl:col-span-8 space-y-5 min-w-0">
            {isEdit && post.isImportedLayout && (
              <Alert
                type="info"
                showIcon
                title="This article uses the original website layout (sections & key takeaways)."
                description="You can change its title, categories, tags, image and SEO freely. If you edit the article content and save, it switches to the standard editor layout with the same text."
              />
            )}

            <EditorCard>
              <label className={styles.titleLabel}>
                Article Title <span className="text-red-500">*</span>
              </label>
              <Input size="large"
                value={post.title}
                onChange={(e) => setField("title", e.target.value)}
                placeholder="Enter article headline here..."
                maxLength={255}
                disabled={!canManage}
              />
              <div className={styles.permalink}>
                <span className="text-slate-500 dark:text-zinc-400">Permalink:</span>
                <span className="text-slate-400 dark:text-zinc-500">{site.url.replace(/^https?:\/\//, "")}/blog/</span>
                {editingSlug ? (
                  <>
                    <Input size="small" className="w-64!" value={slugDraft} onChange={(e) => setSlugDraft(e.target.value)} onPressEnter={confirmSlug} autoFocus />
                    <Button size="small" type="primary" className="bg-brand-primary!" icon={<CheckOutlined />} onClick={confirmSlug}>
                      OK
                    </Button>
                    <Button size="small" icon={<CloseOutlined />} onClick={() => setEditingSlug(false)} />
                  </>
                ) : (
                  <>
                    <span className={styles.slugPill}>{post.slug || "auto-generated-from-title"}</span>
                    {canManage && (
                      <>
                        <Button size="small" onClick={startSlugEdit}>
                          Edit
                        </Button>
                        <Button size="small" icon={<SyncOutlined />} onClick={syncSlug} title="Rebuild from the title">
                          Sync
                        </Button>
                      </>
                    )}
                  </>
                )}
              </div>
            </EditorCard>

            <EditorCard
              flush
              title={
                <span className="flex items-center gap-3">
                  Article Content
                  <span className="text-[12px] font-normal text-slate-400 border-l border-slate-200 dark:border-zinc-700 pl-3">{words} words</span>
                </span>
              }
              icon={<EditOutlined />}
              extra={
                <Segmented
                  size="small"
                  value={mode}
                  onChange={setMode}
                  options={[
                    { value: "Visual", label: <span className="flex items-center gap-1.5"><EyeOutlined /> Visual</span> },
                    { value: "HTML", label: <span className="flex items-center gap-1.5"><CodeOutlined /> Code (HTML)</span> },
                  ]}
                />
              }
            >
              {mode === "Visual" ? (
                <RichTextEditor
                  value={post.content}
                  onChange={setContent}
                  onReady={onEditorReady}
                  onImageUpload={uploadEditorImage}
                  isDark={isDark}
                />
              ) : (
                <CodeEditor
                  language="html"
                  value={post.content}
                  onChange={setContent}
                  isDark={isDark}
                  readOnly={!canManage}
                  minHeight="520px"
                  maxHeight="900px"
                />
              )}
            </EditorCard>

            <EditorCard title="Excerpt / Summary">
              <p className="m-0 mb-2 text-[12px] text-slate-500 dark:text-zinc-400">
                Short summary shown on blog cards, in search results and on social media cards.
              </p>
              <Input.TextArea size="large"
                value={post.excerpt}
                onChange={(e) => setField("excerpt", e.target.value)}
                placeholder="Write a concise excerpt..."
                autoSize={{ minRows: 3, maxRows: 6 }}
                maxLength={2000}
                showCount
                disabled={!canManage}
              />
            </EditorCard>

            <SeoPanel post={{ ...post, tags: selectedTagNames }} onChange={setField} site={site} canManage={canManage} />
          </div>

          {/* ── Right column ── */}
          <div className="xl:col-span-4 space-y-5">
            <PublishBox
              post={post}
              onChange={setField}
              onSave={save}
              onTrash={isEdit ? trash : null}
              viewUrl={viewUrl}
              saving={saving}
              isEdit={isEdit}
              canManage={canManage}
            />
            <AuthorBox post={post} authors={authors} onChange={setField} disabled={!canManage} />
            <CategoryChecklist
              categories={categories}
              selectedIds={post.categoryIds}
              onChange={(ids) => setField("categoryIds", ids)}
              onCreated={async () => setCategories((await blogApi.listCategories())?.data || [])}
              canManage={canManage}
            />
            <TagPicker
              tags={tags}
              selectedIds={post.tagIds}
              onChange={(ids) => setField("tagIds", ids)}
              onCreated={(tag) => setTags((prev) => (prev.some((t) => t.id === tag.id) ? prev : [...prev, tag].sort((a, b) => a.name.localeCompare(b.name))))}
              canManage={canManage}
            />
            <FeaturedImagePicker value={post.featuredImage} badge={post.badge} onChange={setField} canManage={canManage} />
          </div>
        </div>
      )}
    </div>
  );
}
