"use client";

import React from "react";
import { Select, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import EditorCard from "../EditorCard";
import styles from "./AuthorBox.module.css";

/**
 * Author box of the post editor: a staff user (defaults to the logged-in user)
 * plus the role / qualifications printed in the website's author section.
 *
 * @param {object}   post      - { authorUserId, authorName, authorRole, authorQualifications }
 * @param {Array}    authors   - [{ id, name, email, jobTitle }]
 * @param {function} onChange  - (field, value)
 */
export default function AuthorBox({ post, authors = [], onChange, disabled }) {
  const options = authors.map((a) => ({ value: a.id, label: a.name, email: a.email }));
  // Imported posts may have an author that is not a staff account
  const hasStaffAuthor = authors.some((a) => a.id === post.authorUserId);

  return (
    <EditorCard title="Author" icon={<UserOutlined />}>
      <div className="space-y-3">
        <div>
          <label className={styles.label}>Written by</label>
          <Select size="large"
            className="w-full"
            showSearch
            optionFilterProp="label"
            value={hasStaffAuthor ? post.authorUserId : undefined}
            placeholder={post.authorName || "Select a staff member"}
            onChange={(id) => {
              const author = authors.find((a) => a.id === id);
              onChange("authorUserId", id);
              onChange("authorName", author?.name || "");
              // Pre-fill the role from the staff profile when it is empty
              if (author?.jobTitle && !post.authorRole) onChange("authorRole", author.jobTitle);
            }}
            options={options}
            optionRender={(o) => (
              <span className="flex flex-col leading-tight">
                <span>{o.data.label}</span>
                <span className="text-[11px] text-slate-400">{o.data.email}</span>
              </span>
            )}
            disabled={disabled}
          />
          {!hasStaffAuthor && post.authorName && (
            <p className={styles.hint}>Currently shown as “{post.authorName}”. Pick a staff member to change it.</p>
          )}
        </div>
        <div>
          <label className={styles.label}>Role / Title</label>
          <Input size="large"
            value={post.authorRole || ""}
            onChange={(e) => onChange("authorRole", e.target.value)}
            placeholder="e.g. Senior Registered Tax Agent"
            maxLength={150}
            disabled={disabled}
          />
        </div>
        <div>
          <label className={styles.label}>Qualifications</label>
          <Input size="large"
            value={post.authorQualifications || ""}
            onChange={(e) => onChange("authorQualifications", e.target.value)}
            placeholder="e.g. CPA Australia, B.Com (Taxation)"
            maxLength={200}
            disabled={disabled}
          />
        </div>
      </div>
    </EditorCard>
  );
}
