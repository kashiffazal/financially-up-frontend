"use client";

import React from "react";
import { Drawer, Tag, Button, Alert } from "antd";
import {
  ArrowRightOutlined,
  FilePdfOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  ClockCircleOutlined,
  MessageOutlined,
  SendOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { getFileUrl } from "@/services";
import { statusTagColor } from "@/components/admin/GlobalSearch/searchConfig";
import styles from "./NotificationCenter.module.css";
import { notificationVisual, TYPE_LABELS, formatDateTime, relativeTime } from "./notificationConfig";

const SOURCE_LABELS = { contact_page: "Contact page", contact_modal: "Contact Us popup" };

function InfoRow({ icon, label, children }) {
  if (!children) return null;
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="mt-0.5 text-slate-400 dark:text-zinc-500">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className={`${styles.label} block`}>{label}</span>
        <span className="block break-words text-[13px] text-slate-800 dark:text-zinc-100">{children}</span>
      </span>
    </div>
  );
}

function Card({ title, children, accent }) {
  return (
    <section className={`${styles.card} overflow-hidden`}>
      {accent && <div className="h-1" style={{ backgroundColor: accent }} />}
      {title && (
        <h4 className="m-0 px-4 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
          {title}
        </h4>
      )}
      <div className="px-4 pb-3 pt-1">{children}</div>
    </section>
  );
}

/**
 * Right-hand drawer with the full story behind one notification:
 * what happened, who did it, and the application / enquiry it points at.
 */
export default function NotificationDetails({ open, loading, error, detail, now, onClose, onNavigate, onRetry, onRemove }) {
  const notification = detail?.notification;
  const target = detail?.target;
  const visual = notification ? notificationVisual(notification) : null;
  const meta = notification?.meta || {};

  const renderBody = () => {
    if (loading) {
      return (
        <div className="space-y-4 animate-pulse">
          <div className="h-20 rounded-2xl bg-slate-100 dark:bg-zinc-800" />
          <div className="h-36 rounded-2xl bg-slate-100 dark:bg-zinc-800" />
          <div className="h-28 rounded-2xl bg-slate-100 dark:bg-zinc-800" />
        </div>
      );
    }
    if (error || !notification) {
      return (
        <Alert
          type="error"
          showIcon
          title="Couldn't load this notification"
          description="It may have been removed, or you may no longer have access to it."
          action={
            onRetry && (
              <Button size="small" onClick={onRetry}>
                Retry
              </Button>
            )
          }
        />
      );
    }

    return (
      <div className="space-y-4">
        {/* Headline */}
        <div className="flex items-start gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg"
            style={{ backgroundColor: `${visual.color}1a`, color: visual.color }}
          >
            {visual.icon}
          </span>
          <div className="min-w-0">
            <Tag className="!m-0 !mb-1.5 !text-[10px]" color="green">
              {TYPE_LABELS[notification.type] || "Notification"}
            </Tag>
            <h3 className="m-0 text-[16px] font-bold leading-snug text-slate-900 dark:text-zinc-50">{notification.title}</h3>
            <p className="m-0 mt-1 flex items-center gap-1.5 text-[12px] text-slate-500 dark:text-zinc-400">
              <ClockCircleOutlined />
              {formatDateTime(notification.createdAt)} · {relativeTime(notification.createdAt, now)}
            </p>
          </div>
        </div>

        {/* What happened */}
        {notification.type === "status_change" && (
          <Card title="What changed">
            <div className="flex flex-wrap items-center gap-2 py-2">
              <Tag color={statusTagColor(meta.fromStatus)} className="!m-0">
                {meta.fromStatus || "—"}
              </Tag>
              <ArrowRightOutlined className="text-[11px] text-slate-400" />
              <Tag color={statusTagColor(meta.toStatus)} className="!m-0 font-semibold">
                {meta.toStatus}
              </Tag>
            </div>
            <InfoRow icon={<UserOutlined />} label="Changed by">
              {notification.actorName || "A staff member"}
            </InfoRow>
            <InfoRow icon={<MessageOutlined />} label="Notes">
              {meta.notes}
            </InfoRow>
          </Card>
        )}

        {notification.type === "submission" && (
          <Card title="New submission">
            <p className="m-0 py-1.5 text-[13px] text-slate-700 dark:text-zinc-300">{notification.message}</p>
            <InfoRow icon={<UserOutlined />} label="Client">
              {meta.clientName}
            </InfoRow>
          </Card>
        )}

        {/* Application the notification points at */}
        {target?.kind === "application" &&
          (target.exists ? (
            <Card title="Application" accent={target.color}>
              <div className="flex items-start justify-between gap-3 py-2">
                <div className="min-w-0">
                  <p className="m-0 truncate text-[15px] font-semibold text-slate-900 dark:text-zinc-50">{target.title}</p>
                  <p className="m-0 mt-0.5 text-[12px] text-slate-500 dark:text-zinc-400">
                    {target.moduleName}
                    {target.subtitle ? ` · ${target.subtitle}` : ""}
                  </p>
                </div>
                {target.status && (
                  <Tag color={statusTagColor(target.status)} className="!m-0 shrink-0">
                    {target.status}
                  </Tag>
                )}
              </div>
              <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
                {target.reference}
              </span>
              <div className="mt-2 border-t border-slate-100 dark:border-zinc-800">
                <InfoRow icon={<MailOutlined />} label="Email">
                  {target.email && <a href={`mailto:${target.email}`}>{target.email}</a>}
                </InfoRow>
                <InfoRow icon={<PhoneOutlined />} label="Phone">
                  {target.phone && <a href={`tel:${String(target.phone).replace(/\s/g, "")}`}>{target.phone}</a>}
                </InfoRow>
                <InfoRow icon={<ClockCircleOutlined />} label="Submitted">
                  {target.submittedAt && formatDateTime(target.submittedAt)}
                </InfoRow>
              </div>
            </Card>
          ) : (
            <Alert type="warning" showIcon title="This application no longer exists" description="It was deleted after this notification was sent." />
          ))}

        {/* Website enquiry */}
        {target?.kind === "enquiry" &&
          (target.exists ? (
            <Card title="Enquiry" accent={visual.color}>
              <div className="flex items-start justify-between gap-3 py-2">
                <div className="min-w-0">
                  <p className="m-0 truncate text-[15px] font-semibold text-slate-900 dark:text-zinc-50">
                    {[target.enquiry.firstName, target.enquiry.lastName].filter(Boolean).join(" ")}
                  </p>
                  <span className="mt-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {target.enquiry.referenceNumber}
                  </span>
                </div>
                <Tag color={target.enquiry.status === "New" ? "processing" : target.enquiry.status === "Closed" ? "default" : "success"} className="!m-0 shrink-0">
                  {target.enquiry.status}
                </Tag>
              </div>

              {target.enquiry.message && (
                <blockquote className={`${styles.quote} m-0 my-2 whitespace-pre-line text-[13px] leading-relaxed text-slate-700 dark:text-zinc-200`}>
                  {target.enquiry.message}
                </blockquote>
              )}

              <div className="border-t border-slate-100 dark:border-zinc-800">
                <InfoRow icon={<CustomerServiceOutlined />} label="Service">
                  {target.enquiry.service}
                </InfoRow>
                <InfoRow icon={<MailOutlined />} label="Email">
                  <a href={`mailto:${target.enquiry.email}`}>{target.enquiry.email}</a>
                </InfoRow>
                <InfoRow icon={<PhoneOutlined />} label="Phone">
                  {target.enquiry.phone && (
                    <a href={`tel:${String(target.enquiry.phone).replace(/\s/g, "")}`}>{target.enquiry.phone}</a>
                  )}
                </InfoRow>
                <InfoRow icon={<SendOutlined />} label="Prefers">
                  {target.enquiry.preferredContact}
                </InfoRow>
                <InfoRow icon={<GlobalOutlined />} label="Sent from">
                  {SOURCE_LABELS[target.enquiry.source] || target.enquiry.source}
                </InfoRow>
              </div>
            </Card>
          ) : (
            <Alert type="warning" showIcon title="This enquiry no longer exists" description="It was deleted after this notification was sent." />
          ))}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // Footer actions
  // --------------------------------------------------------------------------
  let footer = null;
  if (!loading && target?.exists) {
    if (target.kind === "application") {
      footer = (
        <div className="flex flex-wrap items-center justify-end gap-2">
          {target.pdfUrl && (
            <Button icon={<FilePdfOutlined className="text-red-500" />} href={getFileUrl(target.pdfUrl)} target="_blank" rel="noopener noreferrer">
              View PDF
            </Button>
          )}
          <Button type="primary" className="!bg-brand-primary" icon={<ArrowRightOutlined />} onClick={() => onNavigate(target.url)}>
            Open application
          </Button>
        </div>
      );
    } else if (target.kind === "enquiry") {
      const e = target.enquiry;
      footer = (
        <div className="flex flex-wrap items-center justify-end gap-2">
          {e.phone && (
            <Button icon={<PhoneOutlined />} href={`tel:${String(e.phone).replace(/\s/g, "")}`}>
              Call
            </Button>
          )}
          <Button
            icon={<MailOutlined />}
            href={`mailto:${e.email}?subject=${encodeURIComponent(`Re: your enquiry ${e.referenceNumber}`)}`}
          >
            Reply by email
          </Button>
          <Button type="primary" className="!bg-brand-primary" icon={<ArrowRightOutlined />} onClick={() => onNavigate(target.url)}>
            Open in Enquiries
          </Button>
        </div>
      );
    }
  }

  return (
    <Drawer
      open={open}
      onClose={onClose}
      size={460}
      title={<span className="text-[15px] font-semibold">Notification details</span>}
      extra={
        !loading &&
        notification &&
        onRemove && (
          <Button size="small" type="text" danger icon={<DeleteOutlined />} onClick={() => onRemove(notification)}>
            Remove
          </Button>
        )
      }
      footer={footer}
      destroyOnHidden
      rootClassName={styles.drawer}
    >
      {renderBody()}
    </Drawer>
  );
}
