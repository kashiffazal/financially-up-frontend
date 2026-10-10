"use client";

import React from "react";
import styles from "./EditorCard.module.css";

/**
 * Card shell used by every box of the blog post editor (Publish, Categories,
 * Tags, Featured Image, SEO...), matching the admin card style.
 *
 * @param {ReactNode} title     - Card heading
 * @param {ReactNode} [icon]    - Icon before the heading
 * @param {ReactNode} [extra]   - Right side of the header (links, badges)
 * @param {boolean} [flush]     - No body padding (e.g. the editor)
 */
export default function EditorCard({ title, icon, extra, flush = false, className = "", children }) {
  return (
    <section className={`${styles.card} ${className}`}>
      {(title || extra) && (
        <header className={styles.header}>
          <h3 className="m-0 flex items-center gap-2 text-[14px] font-bold text-slate-900 dark:text-zinc-100">
            {icon && <span className="text-brand-primary dark:text-emerald-400">{icon}</span>}
            {title}
          </h3>
          {extra && <div className="flex items-center gap-2">{extra}</div>}
        </header>
      )}
      <div className={flush ? "" : styles.body}>{children}</div>
    </section>
  );
}
