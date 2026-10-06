"use client";

/**
 * ============================================================================
 * New Application Menu (`components/admin/NewApplicationMenu`)
 * ============================================================================
 * Header "+ New" button. Opens a panel listing every client form, grouped like
 * the sidebar and filtered by the same RBAC permissions. For each form staff can:
 *   - Click the row        → open the public form in a new tab (fill it in for the client)
 *   - Copy link (icon)     → copy the public form URL
 *   - Send to client (icon)→ open the existing ShareFormModal (email invitation)
 */

import React, { useMemo, useState } from "react";
import { Popover, Tooltip } from "antd";
import { PlusOutlined, LinkOutlined, SendOutlined, ExportOutlined } from "@ant-design/icons";
import { useAuth } from "@/context/AuthContext";
import { antdMsg } from "@/services";
import ShareFormModal from "@/components/admin/ShareFormModal";
import { MODULE_META } from "@/components/admin/GlobalSearch/searchConfig";
import styles from "./NewApplicationMenu.module.css";

const FORM_GROUPS = [
  {
    key: "company",
    label: "Company & ASIC",
    permission: "company.registration.view",
    forms: [
      {
        key: "new-company",
        title: "Company Registration",
        description: "Register a new Pty Ltd company with ASIC",
        color: "#008043",
        path: "/resources/registration-forms/company-registration",
        message: "Dear client, please complete your Australian Company Registration application using the secure link below.",
      },
      {
        key: "changes-company",
        title: "Changes to Company Details",
        description: "Officeholder, address or share changes",
        color: "#14b8a6",
        path: "/resources/registration-forms/changes-to-company-details",
        message: "Dear client, please complete your Changes to Company Details application using the secure link below.",
      },
    ],
  },
  {
    key: "engagements",
    label: "Client Engagements",
    permission: "individual.engagement.view",
    forms: [
      {
        key: "new-individual",
        title: "Individual Engagement",
        description: "Onboard an individual tax client",
        color: "#10b981",
        path: "/resources/engagement-forms/individual-engagement-form",
        message: "Dear client, please complete your Individual Client Engagement application using the secure link below.",
      },
      {
        key: "entity-engagements",
        title: "Entity Engagement",
        description: "Onboard a company, trust or partnership",
        color: "#3b82f6",
        path: "/resources/engagement-forms/entity-engagements-form",
        message: "Dear client, please complete your Entity Client Engagement form using the secure link below.",
      },
    ],
  },
  {
    key: "registrations",
    label: "Tax & Registrations",
    permission: "gst.registration.view",
    forms: [
      {
        key: "gst",
        title: "GST Registration",
        description: "Register for GST & PAYG withholding",
        color: "#f59e0b",
        path: "/resources/registration-forms/gst-registrations",
        message: "Dear client, please complete your Australian GST Registration application using the secure link below.",
      },
      {
        key: "medicare",
        title: "Medicare Exemption",
        description: "Medicare levy exemption certificate",
        color: "#ef4444",
        path: "/resources/medicare-forms/medicare-exemption-form",
        message: "Dear client, please complete your Australian Medicare Exemption application using the secure link below.",
      },
      {
        key: "trust",
        title: "Trust Registration",
        description: "Establish a family or unit trust",
        color: "#06b6d4",
        path: "/resources/registration-forms/trust-registrations",
        message: "Dear client, please complete your Australian Trust Registration application using the secure link below.",
      },
      {
        key: "smsf",
        title: "SMSF Registration",
        description: "Set up a self-managed super fund",
        color: "#8b5cf6",
        path: "/resources/registration-forms/smsf-registrations",
        message: "Dear client, please complete your Australian Self-Managed Super Fund (SMSF) application using the secure link below.",
      },
      {
        key: "business-names",
        title: "Business Name",
        description: "Register a business name with ASIC",
        color: "#ec4899",
        path: "/resources/registration-forms/business-name-registrations",
        message: "Dear client, please complete your Australian Business Name Registration application using the secure link below.",
      },
      {
        key: "apply-tfn",
        title: "TFN / ABN Application",
        description: "Apply for a TFN or ABN",
        color: "#6366f1",
        path: "/resources/registration-forms/apply-tfn-abns",
        message: "Dear client, please complete your TFN or ABN application using the secure link below.",
      },
    ],
  },
];

const publicUrl = (path) =>
  typeof window !== "undefined" ? `${window.location.origin}${path}` : `https://financiallyup.com.au${path}`;

export default function NewApplicationMenu() {
  const { hasPermission, hasRole } = useAuth();
  const [open, setOpen] = useState(false);
  const [shareForm, setShareForm] = useState(null);

  const groups = useMemo(() => {
    const isSuperAdmin = hasRole("administrator");
    return FORM_GROUPS.filter((g) => isSuperAdmin || hasPermission(g.permission));
  }, [hasPermission, hasRole]);

  if (!groups.length) return null;

  const openForm = (form) => {
    setOpen(false);
    window.open(publicUrl(form.path), "_blank", "noopener,noreferrer");
  };

  const copyLink = async (e, form) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(publicUrl(form.path));
      antdMsg.success(`${form.title} link copied`);
    } catch {
      antdMsg.error("Could not copy the link");
    }
  };

  const sendToClient = (e, form) => {
    e.stopPropagation();
    setOpen(false);
    setShareForm(form);
  };

  const panel = (
    <div className="w-[min(560px,calc(100vw-2rem))]">
      <div className="flex items-center justify-between gap-3 px-4 pt-3.5 pb-2">
        <div>
          <p className="m-0 text-[14px] font-semibold text-slate-900 dark:text-zinc-50">Start a new application</p>
          <p className="m-0 text-[12px] text-slate-500 dark:text-zinc-400">
            Open a form to fill in, or send the link to your client.
          </p>
        </div>
      </div>

      <div className={`${styles.scroll} max-h-[min(70vh,520px)] overflow-y-auto px-2 pb-2`}>
        {groups.map((group) => (
          <section key={group.key} className="pt-2">
            <h5 className="m-0 px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              {group.label}
            </h5>
            <ul className="m-0 grid list-none grid-cols-1 gap-0.5 p-0 sm:grid-cols-2">
              {group.forms.map((form) => (
                <li key={form.key}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => openForm(form)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openForm(form);
                      }
                    }}
                    className={`${styles.row} group flex cursor-pointer items-center gap-3 rounded-xl px-2.5 py-2 outline-none`}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[15px]"
                      style={{ backgroundColor: `${form.color}1a`, color: form.color }}
                    >
                      {MODULE_META[form.key]?.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-semibold text-slate-800 dark:text-zinc-100">
                        {form.title}
                      </span>
                      <span className="block truncate text-[11px] text-slate-500 dark:text-zinc-400">
                        {form.description}
                      </span>
                    </span>
                    <span className={`${styles.actions} flex shrink-0 items-center gap-0.5`}>
                      <Tooltip title="Copy link">
                        <button
                          type="button"
                          aria-label={`Copy ${form.title} link`}
                          onClick={(e) => copyLink(e, form)}
                          className={styles.iconBtn}
                        >
                          <LinkOutlined />
                        </button>
                      </Tooltip>
                      <Tooltip title="Send to client">
                        <button
                          type="button"
                          aria-label={`Send ${form.title} to client`}
                          onClick={(e) => sendToClient(e, form)}
                          className={styles.iconBtn}
                        >
                          <SendOutlined />
                        </button>
                      </Tooltip>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="flex items-center gap-1.5 border-t border-slate-100 bg-slate-50/70 px-4 py-2 text-[11px] text-slate-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500">
        <ExportOutlined /> Forms open in a new tab. Submissions appear in the matching module.
      </div>
    </div>
  );

  return (
    <>
      <Popover
        open={open}
        onOpenChange={setOpen}
        trigger="click"
        placement="bottomLeft"
        arrow={false}
        content={panel}
        rootClassName={styles.popover}
      >
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-brand-primary px-3.5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover cursor-pointer"
        >
          <PlusOutlined className="text-[12px]" />
          <span className="hidden xl:inline">New application</span>
          <span className="xl:hidden">New</span>
        </button>
      </Popover>

      {shareForm && (
        <ShareFormModal
          open={Boolean(shareForm)}
          onClose={() => setShareForm(null)}
          formTitle={`${shareForm.title} Form`}
          formPath={shareForm.path}
          defaultMessage={shareForm.message}
        />
      )}
    </>
  );
}
