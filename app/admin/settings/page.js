"use client";

/**
 * Global Settings Page
 * ====================
 * Edits the application-wide variables (company identity, contact emails and
 * application URLs) consumed by the public website, the client forms, the
 * generated PDFs and the PHP mPDF service.
 *
 * Values are stored in the `settings` table and read through SettingsContext,
 * so a saved change propagates everywhere without a code deployment.
 */

import React, { useState, useEffect, useCallback } from "react";
import { Card, Form, Button, Spin, Alert, Tag } from "antd";
import {
  SettingOutlined,
  HomeOutlined,
  SaveOutlined,
  BankOutlined,
  MailOutlined,
  GlobalOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import { PermissionGuard } from "@/components/admin/PermissionGuard";
import { AntInput } from "@/services/antdFields";
import { HTTP, antdMsg } from "@/services";
import { useSettings } from "@/context/SettingsContext";

/* Admin form sections, keyed by the `group` column on each setting row */
const GROUPS = [
  {
    key: "company",
    title: "Company Identity",
    description:
      "Shown on the website, client forms and every generated PDF. Update the Tax Agent Registration Number here once the registered number is issued.",
    icon: <BankOutlined />,
  },
  {
    key: "email",
    title: "Contact Emails",
    description:
      "Addresses published to clients and used in outgoing correspondence.",
    icon: <MailOutlined />,
  },
  {
    key: "url",
    title: "Application URLs",
    description:
      "Base addresses used to build links, including attachment links inside PDFs.",
    icon: <GlobalOutlined />,
  },
];

/* Ant Design field type for each stored inputType */
const INPUT_TYPES = {
  textarea: "textarea",
  email: "text",
  url: "text",
  text: "text",
};

export default function GlobalSettingsPage() {
  const [form] = Form.useForm();
  const { refreshSettings } = useSettings();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadSettings = useCallback(async () => {
    const res = await HTTP("GET", "/settings/manage", {}, false, true);
    if (res && res.success && Array.isArray(res.data)) {
      setRows(res.data);
      form.setFieldsValue(
        res.data.reduce((values, row) => {
          values[row.key] = row.value || "";
          return values;
        }, {}),
      );
    }
    setLoading(false);
  }, [form]);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  /* Manual reload button: show the spinner again before re-fetching */
  const handleReload = () => {
    setLoading(true);
    loadSettings();
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      setSaving(true);
      const res = await HTTP("PUT", "/settings/manage", { settings: values });
      if (res && res.success) {
        antdMsg.success(res.message || "Global settings saved.");
        // Refresh the in-app store so headers, footers and forms update immediately
        await refreshSettings();
        await loadSettings();
      }
    } catch (error) {
      if (error?.errorFields?.length) {
        antdMsg.error("Please correct the highlighted fields.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      <PageTitle
        icon={<SettingOutlined />}
        title="Global Settings"
        description="Central company variables shared across the website, admin portal, client forms and PDF documents."
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="!text-[12px]" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          { title: <span className="text-slate-500">Administration</span> },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Global Settings
              </span>
            ),
          },
        ]}
        extraActions={
          <Button
            icon={<ReloadOutlined />}
            onClick={handleReload}
            disabled={loading || saving}
            className="rounded-lg font-semibold"
          >
            Reload
          </Button>
        }
      />

      <PermissionGuard
        permission="settings.view"
        fallback={
          <Alert
            type="error"
            showIcon
            title="Access Denied"
            description="You do not have permission to view global settings."
            className="rounded-lg"
          />
        }
      >
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Spin size="large" tip="Loading global settings..." />
          </div>
        ) : (
          <Form form={form} layout="vertical" requiredMark={false}>
            <div className="space-y-6">
              {GROUPS.map((group) => {
                const groupRows = rows.filter((row) => row.group === group.key);
                if (groupRows.length === 0) return null;

                return (
                  <Card
                    key={group.key}
                    className="rounded-lg border border-slate-200/80 dark:border-zinc-800 shadow-xs dark:bg-zinc-950"
                    title={
                      <div className="flex items-center gap-2 py-1">
                        <span className="text-brand-primary dark:text-emerald-400">
                          {group.icon}
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-zinc-100">
                          {group.title}
                        </span>
                        <Tag
                          color="green"
                          className="font-semibold text-[10px] rounded-full border-none"
                        >
                          {groupRows.length} variables
                        </Tag>
                      </div>
                    }
                  >
                    <p className="text-xs text-slate-500 dark:text-zinc-400 -mt-1 mb-4">
                      {group.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {groupRows.map((row) => (
                        <AntInput
                          key={row.key}
                          type={INPUT_TYPES[row.inputType] || "text"}
                          name={row.key}
                          label={
                            <span className="font-bold text-slate-800 dark:text-zinc-200">
                              {row.label}
                            </span>
                          }
                          help={row.helpText || undefined}
                          reqMsg={`${row.label} is required`}
                          size="large"
                          className="rounded-lg"
                          containerClassName={
                            row.inputType === "textarea"
                              ? "!mb-0 md:col-span-2"
                              : "!mb-0"
                          }
                        />
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            <PermissionGuard permission="settings.update">
              <div className="flex items-center justify-end gap-3 pt-6">
                <Button
                  type="primary"
                  size="large"
                  icon={<SaveOutlined />}
                  loading={saving}
                  onClick={handleSave}
                  className="bg-brand-primary hover:bg-brand-primary-hover rounded-lg font-extrabold px-8 h-12 shadow-lg shadow-emerald-600/25"
                >
                  Save Global Settings
                </Button>
              </div>
            </PermissionGuard>
          </Form>
        )}
      </PermissionGuard>
    </div>
  );
}
