"use client";

import React, { useState } from "react";
import { Upload, Input, Button } from "antd";
import { PictureOutlined, UploadOutlined, DeleteOutlined, SwapOutlined } from "@ant-design/icons";
import EditorCard from "../EditorCard";
import { blogApi } from "../blogApi";
import { resolveBlogImage } from "@/lib/blog";
import styles from "./FeaturedImagePicker.module.css";

/**
 * Featured Image box: upload or URL, preview, and the badge text shown on the
 * image on the website (e.g. "TAX TIPS 2026").
 *
 * @param {string}   value     - saved path ("/uploads/blog/...", "/images/...", or https URL)
 * @param {string}   badge
 * @param {function} onChange  - (field, value) for "featuredImage" / "badge"
 */
export default function FeaturedImagePicker({ value, badge, onChange, canManage }) {
  const [uploading, setUploading] = useState(false);

  const upload = async (file) => {
    setUploading(true);
    const res = await blogApi.uploadImage(file);
    setUploading(false);
    if (res) onChange("featuredImage", res.path);
    return false; // handled manually
  };

  const uploader = (children, fullWidth = false) => (
    <Upload
      accept="image/jpeg,image/png,image/webp,image/gif"
      showUploadList={false}
      beforeUpload={upload}
      disabled={!canManage}
      className={fullWidth ? styles.fullUpload : undefined}
    >
      {children}
    </Upload>
  );

  return (
    <EditorCard title="Featured Image" icon={<PictureOutlined />}>
      <div className="space-y-3">
        {value ? (
          <div className={styles.preview}>
            {/* eslint-disable-next-line @next/next/no-img-element -- uploaded / external image preview */}
            <img src={resolveBlogImage(value)} alt="Featured" />
            {badge && <span className={styles.badge}>{badge}</span>}
            {canManage && (
              <div className={styles.actions}>
                {uploader(
                  <Button size="small" icon={<SwapOutlined />} loading={uploading}>
                    Replace
                  </Button>
                )}
                <Button size="small" danger icon={<DeleteOutlined />} onClick={() => onChange("featuredImage", "")}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        ) : (
          canManage &&
          uploader(
            <div className={styles.dropzone}>
              <UploadOutlined className="text-xl text-brand-primary" />
              <span className="font-semibold text-[13px]">{uploading ? "Uploading..." : "Upload image"}</span>
              <span className="text-[11px] text-slate-400">JPG, PNG, WEBP or GIF · up to 8MB · ideally 1200×675</span>
            </div>,
            true
          )
        )}

        <div>
          <label className={styles.label}>Or image URL / path</label>
          <Input size="large"
            value={value || ""}
            onChange={(e) => onChange("featuredImage", e.target.value)}
            placeholder="https://... or /images/..."
            disabled={!canManage}
            allowClear
          />
        </div>

        <div>
          <label className={styles.label}>Image badge (optional)</label>
          <Input size="large"
            value={badge || ""}
            onChange={(e) => onChange("badge", e.target.value.toUpperCase())}
            placeholder="e.g. TAX TIPS 2026"
            maxLength={60}
            disabled={!canManage}
          />
        </div>
      </div>
    </EditorCard>
  );
}
