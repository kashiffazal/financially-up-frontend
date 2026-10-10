"use client";

import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { Button, Spin, Tag } from "antd";
import {
  ReadOutlined,
  EditOutlined,
  PlusOutlined,
  MessageOutlined,
  NotificationOutlined,
  TeamOutlined,
  KeyOutlined,
  HistoryOutlined,
  SettingOutlined,
  ArrowRightOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { canAccessAdminPath } from "@/lib/adminAccess";
import styles from "./WelcomeDashboard.module.css";

/**
 * Dashboard for staff without access to client applications (e.g. a Blog
 * Editor): a greeting plus cards only for the areas they can use. Numbers come
 * from GET /api/dashboard/stats (`modules`), which only includes those areas.
 *
 * @param {object}  user
 * @param {boolean} isAdministrator
 * @param {string}  greeting     - "Good morning" ...
 * @param {string}  dateString
 * @param {object}  modules      - { blog?, enquiries?, newsletter? }
 * @param {boolean} loading
 */

const SHORTCUTS = [
  { href: "/admin/users", label: "Users", desc: "Staff accounts", icon: <TeamOutlined /> },
  { href: "/admin/roles", label: "Roles", desc: "Roles & permissions", icon: <KeyOutlined /> },
  { href: "/admin/audit-logs", label: "Audit Logs", desc: "Activity history", icon: <HistoryOutlined /> },
  { href: "/admin/settings", label: "Settings", desc: "Company details", icon: <SettingOutlined /> },
];

const POST_STATUS = {
  published: { label: "Published", color: "success" },
  draft: { label: "Draft", color: "default" },
};

const Stat = ({ value, label, tone = "" }) => (
  <div className={styles.stat}>
    <span className={`${styles.statValue} ${tone}`}>{value ?? 0}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

export default function WelcomeDashboard({ user, isAdministrator, greeting, dateString, modules = {}, loading }) {
  const permissions = user?.permissions || [];
  const can = (href) => canAccessAdminPath(user, isAdministrator, href);
  const canBlog = can("/admin/blog");
  const canWriteBlog = permissions.includes("blog.manage") || isAdministrator;
  const shortcuts = SHORTCUTS.filter((s) => can(s.href));
  const hasAnything = canBlog || can("/admin/enquiries") || can("/admin/newsletter") || shortcuts.length > 0;

  return (
    <div className="space-y-6 pb-12">
      <div className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>
            {greeting}, {user?.firstName || "there"} 👋
          </h1>
          <p className={styles.heroText}>
            {dateString}
            {dateString && <span className={styles.dot}>•</span>}
            Here&apos;s your workspace — only the areas your role gives you access to.
          </p>
        </div>
        {canBlog && canWriteBlog && (
          <Link href="/admin/blog/new">
            <Button type="primary" icon={<PlusOutlined />} className="bg-brand-primary!">
              Add New Post
            </Button>
          </Link>
        )}
      </div>

      {!hasAnything ? (
        <div className={`${styles.card} ${styles.empty}`}>
          <LockOutlined className={styles.emptyIcon} />
          <h3 className={styles.cardTitle}>No areas assigned yet</h3>
          <p className={styles.muted}>Ask an administrator to give your role access to the parts of the portal you need.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {canBlog && (
            <section className={`${styles.card} ${styles.wide}`}>
              <div className={styles.cardHead}>
                <span className={`${styles.cardIcon} ${styles.teal}`}>
                  <ReadOutlined />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Website Blog</h3>
                  <p className={styles.muted}>Articles on the website blog</p>
                </div>
              </div>

              {loading && !modules.blog ? (
                <Spin />
              ) : (
                <>
                  <div className={styles.stats}>
                    <Stat value={modules.blog?.published} label="Published" tone={styles.green} />
                    <Stat value={modules.blog?.scheduled} label="Scheduled" tone={styles.blue} />
                    <Stat value={modules.blog?.drafts} label="Drafts" tone={styles.amber} />
                    <Stat value={modules.blog?.trash} label="In Trash" />
                  </div>

                  {modules.blog?.recent?.length > 0 && (
                    <div className={styles.list}>
                      <span className={styles.listLabel}>Recently updated</span>
                      {modules.blog.recent.map((post) => {
                        const scheduled = post.status === "published" && post.publishedAt && dayjs(post.publishedAt).isAfter(dayjs());
                        const meta = scheduled ? { label: "Scheduled", color: "processing" } : POST_STATUS[post.status] || POST_STATUS.draft;
                        return (
                          <Link key={post.id} href={`/admin/blog/${post.id}`} className={styles.listRow}>
                            <EditOutlined className={styles.listIcon} />
                            <span className={styles.listTitle}>{post.title}</span>
                            <Tag color={meta.color} className="m-0!">
                              {meta.label}
                            </Tag>
                            <span className={styles.listDate}>{dayjs(post.updatedAt).format("D MMM YYYY")}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              <div className={styles.actions}>
                <Link href="/admin/blog">
                  <Button icon={<ArrowRightOutlined />}>All Posts</Button>
                </Link>
                <Link href="/admin/blog/categories">
                  <Button>Categories</Button>
                </Link>
                <Link href="/admin/blog/tags">
                  <Button>Tags</Button>
                </Link>
              </div>
            </section>
          )}

          {can("/admin/enquiries") && (
            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={`${styles.cardIcon} ${styles.sky}`}>
                  <MessageOutlined />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Website Enquiries</h3>
                  <p className={styles.muted}>Contact form messages</p>
                </div>
              </div>
              <div className={styles.stats}>
                <Stat value={modules.enquiries?.new} label="New" tone={styles.blue} />
                <Stat value={modules.enquiries?.total} label="Total" />
              </div>
              <div className={styles.actions}>
                <Link href="/admin/enquiries">
                  <Button icon={<ArrowRightOutlined />}>Open Enquiries</Button>
                </Link>
              </div>
            </section>
          )}

          {can("/admin/newsletter") && (
            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={`${styles.cardIcon} ${styles.violet}`}>
                  <NotificationOutlined />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Newsletter</h3>
                  <p className={styles.muted}>Blog newsletter subscribers</p>
                </div>
              </div>
              <div className={styles.stats}>
                <Stat value={modules.newsletter?.subscribed} label="Subscribed" tone={styles.green} />
                <Stat value={modules.newsletter?.total} label="Total" />
              </div>
              <div className={styles.actions}>
                <Link href="/admin/newsletter">
                  <Button icon={<ArrowRightOutlined />}>Open Newsletter</Button>
                </Link>
              </div>
            </section>
          )}

          {shortcuts.map((s) => (
            <Link key={s.href} href={s.href} className={`${styles.card} ${styles.shortcut}`}>
              <span className={styles.cardIcon}>{s.icon}</span>
              <div>
                <h3 className={styles.cardTitle}>{s.label}</h3>
                <p className={styles.muted}>{s.desc}</p>
              </div>
              <ArrowRightOutlined className={styles.shortcutArrow} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
