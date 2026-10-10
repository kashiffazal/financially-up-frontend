"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Input, Segmented, Tag, Button, Tooltip, Skeleton } from "antd";
import {
  SearchOutlined,
  KeyOutlined,
  FontSizeOutlined,
  AlignLeftOutlined,
  CodeOutlined,
  SyncOutlined,
  ThunderboltOutlined,
  FormatPainterOutlined,
  CheckOutlined,
  MinusOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import EditorCard from "../EditorCard";
import { buildBlogSchema, htmlToText } from "@/lib/blog";
import { useTheme } from "@/app/ThemeProvider";
import styles from "./SeoPanel.module.css";

// Code editor (CodeMirror) only runs in the browser
const CodeEditor = dynamic(() => import("../CodeEditor"), {
  ssr: false,
  loading: () => <Skeleton active paragraph={{ rows: 5 }} />,
});

const META_TITLE_RANGE = [50, 60];
const META_DESC_RANGE = [140, 160];

/** "45 / 60" counter colour: green inside the ideal range, amber when outside. */
const Counter = ({ length, range }) => {
  const [min, max] = range;
  const tone = length === 0 ? "text-slate-400" : length >= min && length <= max ? "text-emerald-600" : "text-amber-600";
  return (
    <span className={`font-mono text-[11px] ${tone}`}>
      {length} / {max}
    </span>
  );
};

const truncate = (text, max) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text);

/**
 * SEO & schema panel of the post editor.
 *
 * @param {object}   post      - { title, slug, excerpt, content, focusKeyword, metaTitle, metaDescription, schemaJson, featuredImage, publishedAt, authorName, tags }
 * @param {function} onChange  - (field, value)
 * @param {object}   site      - { url, name, logo }
 */
export default function SeoPanel({ post, onChange, site, canManage }) {
  const [device, setDevice] = useState("Desktop");
  const { isDark } = useTheme();

  const plainContent = useMemo(() => htmlToText(post.content), [post.content]);
  const metaTitle = post.metaTitle || "";
  const metaDescription = post.metaDescription || "";
  const previewTitle = metaTitle || post.title || "Your Article Title Goes Here";
  const previewDescription =
    metaDescription || post.excerpt || "Enter a meta description to see how your article snippet appears to visitors searching on Google.";
  const host = site.url.replace(/^https?:\/\//, "");

  // Focus keyword checks
  const keyword = (post.focusKeyword || "").trim().toLowerCase();
  const checks = [
    { key: "Title", ok: keyword && (post.title || "").toLowerCase().includes(keyword) },
    { key: "Meta Description", ok: keyword && metaDescription.toLowerCase().includes(keyword) },
    { key: "Slug", ok: keyword && (post.slug || "").includes(keyword.replace(/\s+/g, "-")) },
    { key: "Content", ok: keyword && plainContent.toLowerCase().includes(keyword) },
  ];

  // Schema validity
  const schemaText = post.schemaJson || "";
  const schemaError = useMemo(() => {
    if (!schemaText.trim()) return null;
    const inner = schemaText.trim().replace(/^<script[^>]*>/i, "").replace(/<\/script>\s*$/i, "");
    try {
      JSON.parse(inner);
      return null;
    } catch (e) {
      return e.message;
    }
  }, [schemaText]);

  // Overall SEO status
  const score = [
    Boolean(keyword),
    metaTitle.length >= META_TITLE_RANGE[0] && metaTitle.length <= META_TITLE_RANGE[1],
    metaDescription.length >= META_DESC_RANGE[0] && metaDescription.length <= META_DESC_RANGE[1],
    checks.every((c) => c.ok),
    Boolean(post.featuredImage),
  ].filter(Boolean).length;
  const seoStatus = score >= 5 ? { label: "SEO: Good", color: "success" } : score >= 3 ? { label: "SEO: Fair", color: "warning" } : { label: "SEO: Needs Info", color: "default" };

  const autoGenerate = () => onChange("schemaJson", JSON.stringify(buildBlogSchema(post, site), null, 2));
  const formatSchema = () => {
    if (schemaError || !schemaText.trim()) return;
    const inner = schemaText.trim().replace(/^<script[^>]*>/i, "").replace(/<\/script>\s*$/i, "");
    onChange("schemaJson", JSON.stringify(JSON.parse(inner), null, 2));
  };

  return (
    <EditorCard
      title={
        <span className="flex flex-col">
          <span>Search Engine Optimization (SEO) &amp; Schema</span>
          <span className="text-[11.5px] font-normal text-slate-500 dark:text-zinc-400">Google search appearance, focus keyword, and JSON-LD structured data</span>
        </span>
      }
      icon={<SearchOutlined />}
      extra={<Tag color={seoStatus.color} className="m-0! font-semibold">{seoStatus.label}</Tag>}
    >
      <div className="space-y-6">
        {/* Google preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className={styles.sectionLabel}>
              <GoogleOutlined /> Google Search Result Preview
            </span>
            <Segmented size="small" options={["Desktop", "Mobile"]} value={device} onChange={setDevice} />
          </div>
          <div className={`${styles.googleCard} ${device === "Mobile" ? styles.googleMobile : ""}`}>
            <div className="flex items-center gap-2 text-[12px] text-slate-600">
              <span className={styles.favicon}>{(site.name || "F")[0]}</span>
              <span className="flex flex-col leading-tight">
                <span className="text-slate-800">{site.name}</span>
                <span className="text-slate-500">
                  {host} › blog › {post.slug || "post-url"}
                </span>
              </span>
            </div>
            <div className={styles.googleTitle}>{truncate(previewTitle, device === "Mobile" ? 78 : 60)}</div>
            <div className={styles.googleDesc}>{truncate(previewDescription, device === "Mobile" ? 120 : 160)}</div>
          </div>
        </div>

        {/* Focus keyword */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className={styles.fieldLabel}>
              <KeyOutlined /> Focus Keyword
            </label>
            <span className="text-[11px] text-slate-400">The search phrase this article should rank for</span>
          </div>
          <Input size="large"
            value={post.focusKeyword || ""}
            onChange={(e) => onChange("focusKeyword", e.target.value)}
            placeholder="e.g. work from home tax deductions"
            maxLength={150}
            disabled={!canManage}
          />
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="font-bold uppercase tracking-wide text-slate-400">Keyword in:</span>
            {checks.map((c) => (
              <span key={c.key} className={`${styles.check} ${c.ok ? styles.checkOk : ""}`}>
                {c.ok ? <CheckOutlined /> : <MinusOutlined />} {c.key}
              </span>
            ))}
          </div>
        </div>

        {/* Meta title */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className={styles.fieldLabel}>
              <FontSizeOutlined /> Meta Title
            </label>
            <span className="flex items-center gap-3">
              {canManage && (
                <button type="button" className={styles.syncLink} onClick={() => onChange("metaTitle", (post.title || "").slice(0, 60))}>
                  <SyncOutlined /> Sync from Title
                </button>
              )}
              <Counter length={metaTitle.length} range={META_TITLE_RANGE} />
            </span>
          </div>
          <Input size="large"
            value={metaTitle}
            onChange={(e) => onChange("metaTitle", e.target.value)}
            placeholder="SEO title shown in search engine results..."
            maxLength={255}
            disabled={!canManage}
          />
          <p className={styles.hint}>Best between 50 and 60 characters so Google shows it in full.</p>
        </div>

        {/* Meta description */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className={styles.fieldLabel}>
              <AlignLeftOutlined /> Meta Description
            </label>
            <span className="flex items-center gap-3">
              {canManage && (
                <button type="button" className={styles.syncLink} onClick={() => onChange("metaDescription", (post.excerpt || "").slice(0, 160))}>
                  <SyncOutlined /> Sync from Excerpt
                </button>
              )}
              <Counter length={metaDescription.length} range={META_DESC_RANGE} />
            </span>
          </div>
          <Input.TextArea size="large"
            value={metaDescription}
            onChange={(e) => onChange("metaDescription", e.target.value)}
            placeholder="A short, persuasive summary of the article shown in search results..."
            autoSize={{ minRows: 3, maxRows: 5 }}
            maxLength={400}
            disabled={!canManage}
          />
          <p className={styles.hint}>Recommended 140–160 characters. A strong description improves click-through from Google.</p>
        </div>

        {/* Schema */}
        <div className="border-t border-slate-100 dark:border-zinc-800 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <label className={styles.fieldLabel}>
              <CodeOutlined /> Blog Schema (JSON-LD Structured Data) <Tag className="m-0! ml-1! text-[10px]!">Optional</Tag>
            </label>
            {canManage && (
              <span className="flex gap-2">
                <Button size="small" icon={<ThunderboltOutlined />} onClick={autoGenerate}>
                  Auto-Generate Schema
                </Button>
                <Tooltip title="Re-indents the JSON so it's easy to read. It doesn't change any values.">
                  <Button size="small" icon={<FormatPainterOutlined />} onClick={formatSchema} disabled={Boolean(schemaError) || !schemaText.trim()}>
                    Beautify JSON
                  </Button>
                </Tooltip>
              </span>
            )}
          </div>
          <p className="m-0 mb-2 text-[12px] text-slate-500 dark:text-zinc-400">
            Helps Google show this article as a <code>BlogPosting</code> rich result. Leave empty and the website generates it automatically, or paste custom JSON-LD.
          </p>
          <CodeEditor
            language="json"
            bordered
            value={schemaText}
            onChange={(text) => onChange("schemaJson", text)}
            isDark={isDark}
            readOnly={!canManage}
            minHeight="160px"
            maxHeight="420px"
            placeholder={'{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting",\n  "headline": "Article Title"\n}'}
          />
          <div className="mt-1 flex items-center justify-between text-[11px]">
            <span className={schemaError ? "text-red-500" : "text-slate-400"}>
              {schemaError ? `Invalid JSON: ${schemaError}` : 'Accepts raw JSON-LD or a <script type="application/ld+json"> tag'}
            </span>
            <span className="font-mono text-slate-400">{schemaText.length} chars</span>
          </div>
        </div>
      </div>
    </EditorCard>
  );
}
