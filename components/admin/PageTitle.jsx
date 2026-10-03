"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Breadcrumb, Button, Tooltip } from "antd";
import {
  ShareAltOutlined,
  CopyOutlined,
  ExportOutlined,
  LinkOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import ShareFormModal from "./ShareFormModal";
import { antdMsg } from "@/services";

/**
 * ============================================================================
 * Universal Admin PageTitle Component (`PageTitle.jsx`)
 * ============================================================================
 *
 * Architecture Role:
 * Standardized, responsive header bar for all admin portal modules.
 *
 * Features:
 * 1. Left Section:
 *    - Large icon badge (`w-16 h-16 rounded-xl bg-emerald-50 text-[26px]`).
 *    - Main page heading (`h1 text-2xl sm:text-3xl font-bold`).
 *    - Subtitle description paragraph.
 * 2. Right Section:
 *    - Dedicated Public Form Link Pill with one-click copy and open in new tab.
 *    - "Share Form" primary button with built-in `ShareFormModal`.
 *    - Right-aligned Ant Design `Breadcrumb` component.
 *    - Flexible `extraActions` slot for custom buttons.
 *
 * @param {ReactNode} icon - Main page icon element (e.g. <BankOutlined />).
 * @param {string} title - Primary page heading text.
 * @param {string} description - Subtitle / description text.
 * @param {Array} breadcrumbs - Ant Design Breadcrumb items array.
 * @param {string} formPath - Optional relative path to the public form (e.g. "/resources/registration-forms/company-registration").
 * @param {string} formTitle - Optional display title of the form being shared.
 * @param {string} shareDefaultMessage - Optional pre-filled invitation message.
 * @param {ReactNode} extraActions - Optional additional buttons or controls.
 */
export default function PageTitle({
  icon = null,
  title = "Dashboard",
  description = "",
  breadcrumbs = [],
  formPath = null,
  formTitle = "Registration Form",
  shareDefaultMessage = "",
  extraActions = null,
  rightExtra = null,
}) {
  // --------------------------------------------------------------------------
  // STATE: SHARE MODAL & COPY FEEDBACK
  // --------------------------------------------------------------------------
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute full URL for copying based on current origin
  const fullFormUrl = useMemo(() => {
    if (!formPath) return "";
    if (typeof window !== "undefined") {
      const cleanPath = formPath.startsWith("/") ? formPath : `/${formPath}`;
      return `${window.location.origin}${cleanPath}`;
    }
    return `https://financiallyup.com.au${formPath}`;
  }, [formPath]);

  // Handler: Copy full URL to clipboard
  const handleCopyLink = useCallback(() => {
    if (!fullFormUrl) return;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(fullFormUrl);
      setCopied(true);
      antdMsg.success(`Public ${formTitle} link copied to clipboard!`);
      setTimeout(() => setCopied(false), 2500);
    }
  }, [fullFormUrl, formTitle]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      {/* ===================================================================== */}
      {/* LEFT: ICON BADGE, TITLE & DESCRIPTION                                 */}
      {/* ===================================================================== */}
      <div className="flex items-center gap-4 pt-1">
        {icon && (
          <div className="w-16 h-16 rounded-card bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 flex items-center justify-center text-brand-primary dark:text-emerald-400 text-[26px] shadow-sm flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="!space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 m-0">
            {title}
          </h1>
          {description && (
            <p className="text-slate-500 dark:text-zinc-400 m-0 text-sm">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* RIGHT: BREADCRUMBS, DEDICATED FORM LINK, SHARE BUTTON & ACTIONS       */}
      {/* ===================================================================== */}
      <div className="flex flex-col sm:items-end justify-center gap-2 flex-shrink-0">
        {/* 1. Right-Aligned Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex justify-start sm:justify-end w-full">
            <Breadcrumb
              classNames={{ root: "!text-[12px]" }}
              items={breadcrumbs}
            />
          </div>
        )}

        {/* 2. Action Buttons, Form Link & Share Container (Aligned with Title) */}
        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-2.5">
          {/* Dedicated Public Form Link Pill (when formPath is provided) */}
          {formPath && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 text-xs shadow-xs">
              <LinkOutlined className="text-brand-primary dark:text-emerald-400" />
              <span className="text-slate-500 dark:text-zinc-400 font-medium hidden sm:inline">
                Form Link:
              </span>
              <span className="font-mono font-semibold text-slate-700 dark:text-zinc-300 truncate max-w-[200px] sm:max-w-[280px]">
                {formPath}
              </span>

              {/* Copy Link Button */}
              <Tooltip title={copied ? "Copied!" : "Copy Full Form URL"}>
                <Button
                  size="small"
                  type="text"
                  icon={
                    copied ? (
                      <CheckOutlined className="text-emerald-600" />
                    ) : (
                      <CopyOutlined />
                    )
                  }
                  onClick={handleCopyLink}
                  className="hover:!text-brand-primary"
                />
              </Tooltip>

              {/* Open Form in New Tab */}
              <Tooltip title="Open Form in New Tab">
                <Button
                  size="small"
                  type="text"
                  icon={<ExportOutlined />}
                  href={formPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:!text-brand-primary"
                />
              </Tooltip>
            </div>
          )}

          {/* Share Form Primary Button (when formPath is provided) */}
          {formPath && (
            <Button
              type="primary"
              icon={<ShareAltOutlined />}
              onClick={() => setIsShareModalOpen(true)}
              className="!bg-brand-primary hover:!bg-brand-primary/90 font-semibold rounded-lg shadow-xs"
            >
              Share Form
            </Button>
          )}

          {/* Extra Actions Slot (Custom buttons) */}
          {(extraActions || rightExtra) && (
            <div className="flex items-center justify-start sm:justify-end gap-2">
              {extraActions || rightExtra}
            </div>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* INTEGRATED SHARE FORM MODAL                                           */}
      {/* ===================================================================== */}
      {formPath && (
        <ShareFormModal
          open={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          formTitle={formTitle}
          formPath={formPath}
          defaultMessage={shareDefaultMessage}
        />
      )}
    </div>
  );
}
