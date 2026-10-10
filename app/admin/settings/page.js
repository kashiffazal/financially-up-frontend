"use client";

/**
 * ============================================================================
 * Global Settings Management (`app/admin/settings/page.js`)
 * ============================================================================
 * Central administrative hub for practice-wide variables consumed across the
 * public website, client registration portals, official correspondence, and
 * ATO-compliant PDF generation services.
 *
 * Modern Architecture:
 * 1. Top 4-card Practice Profile Overview Strip.
 * 2. Card-style categorized tabs:
 *    - Tab 1: Company Identity & Tax Registration
 *    - Tab 2: Contact Information & Client Inquiries
 *    - Tab 3: Digital Channels & Application URLs
 *    - Tab 4: Live Official Brand & Document Preview
 * 3. Unified Ant Design Form Field Helpers (`@/services/antdFields`).
 * 4. Automatic SettingsContext refresh so updates propagate instantly.
 */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Form, Button, Spin, Alert, Tag, Tabs, Tooltip, Divider } from "antd";
import {
  SettingOutlined,
  HomeOutlined,
  SaveOutlined,
  BankOutlined,
  MailOutlined,
  GlobalOutlined,
  ReloadOutlined,
  PhoneOutlined,
  CompassOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  LaptopOutlined,
  AppstoreOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  LockOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import PageTitle from "@/components/admin/PageTitle";
import { PermissionGuard } from "@/components/admin/PermissionGuard";
import { AntInput } from "@/services/antdFields";
import { HTTP, antdMsg } from "@/services";
import { useSettings } from "@/context/SettingsContext";
import { parseDepartments } from "@/lib/departments";
import DepartmentsManager from "@/components/admin/DepartmentsManager";

/* Field icons mapping for contextual guidance */
const FIELD_ICONS = {
  "company.name": <BankOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "company.legalName": <IdcardOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "company.abn": <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400" />,
  "company.taxAgentNumber": <FileTextOutlined className="text-purple-600 dark:text-purple-400" />,
  "company.phone": <PhoneOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "company.email": <MailOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "company.address": <CompassOutlined className="text-amber-600 dark:text-amber-400" />,
  "company.tagline": <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "company.logoUrl": <GlobalOutlined className="text-blue-600 dark:text-blue-400" />,
  "email.info": <MailOutlined className="text-blue-600 dark:text-blue-400" />,
  "email.admin": <MailOutlined className="text-purple-600 dark:text-purple-400" />,
  "email.privacy": <LockOutlined className="text-amber-600 dark:text-amber-400" />,
  "email.support": <MailOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "url.website": <GlobalOutlined className="text-emerald-600 dark:text-emerald-400" />,
  "url.api": <LaptopOutlined className="text-purple-600 dark:text-purple-400" />,
  "url.adminPortal": <AppstoreOutlined className="text-blue-600 dark:text-blue-400" />,
};

/* Ant Design field type mapper */
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
  const [activeTabKey, setActiveTabKey] = useState("company");
  // Live count for the Departments tab badge (the list saves on its own)
  const [departmentCount, setDepartmentCount] = useState(null);

  // Watch form values for the live brand preview tab
  const formValues = Form.useWatch([], form) || {};

  // --------------------------------------------------------------------------
  // LOAD SETTINGS FROM API
  // --------------------------------------------------------------------------
  const loadSettings = useCallback(async () => {
    try {
      const res = await HTTP("GET", "/settings/manage", {}, false, true);
      if (res && res.success && Array.isArray(res.data)) {
        setRows(res.data);
        form.setFieldsValue(
          res.data.reduce((values, row) => {
            // "list" settings (e.g. Departments) are stored as JSON arrays
            if (row.inputType !== "list") values[row.key] = row.value || "";
            return values;
          }, {})
        );
      }
    } catch (err) {
      console.error("Failed to load settings:", err);
    } finally {
      setLoading(false);
    }
  }, [form]);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  const handleReload = () => {
    setLoading(true);
    loadSettings();
  };

  // --------------------------------------------------------------------------
  // SUBMIT SETTINGS
  // --------------------------------------------------------------------------
  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      // Departments are saved by their own tab, never by this button
      delete values["staff.departments"];
      setSaving(true);
      const res = await HTTP("PUT", "/settings/manage", { settings: values });
      if (res && res.success) {
        antdMsg.success(res.message || "Global practice settings saved successfully.");
        await refreshSettings();
        await loadSettings();
      }
    } catch (error) {
      if (error?.errorFields?.length) {
        antdMsg.error("Please correct the highlighted validation errors.");
      }
    } finally {
      setSaving(false);
    }
  };

  // --------------------------------------------------------------------------
  // QUICK METRIC CALCULATIONS
  // --------------------------------------------------------------------------
  const quickStats = useMemo(() => {
    const getValue = (key, fallback) => {
      const found = rows.find((r) => r.key === key);
      return found?.value || fallback;
    };
    return {
      legalName: getValue("company.legalName", "Financially Up Pty Ltd"),
      abn: getValue("company.abn", "84 659 717 263"),
      taxAgent: getValue("company.taxAgentNumber", "25800000"),
      phone: getValue("company.phone", "1300 328 316"),
      email: getValue("company.email", "info@financiallyup.com.au"),
      address: getValue("company.address", "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"),
      website: getValue("url.website", "https://financiallyup.com.au"),
    };
  }, [rows]);

  // Group rows by category
  const companyRows = useMemo(() => rows.filter((r) => r.group === "company"), [rows]);
  const emailRows = useMemo(() => rows.filter((r) => r.group === "email"), [rows]);
  const urlRows = useMemo(() => rows.filter((r) => r.group === "url"), [rows]);
  const staffRows = useMemo(() => rows.filter((r) => r.group === "staff"), [rows]);

  // --------------------------------------------------------------------------
  // TAB ITEMS CONFIGURATION
  // --------------------------------------------------------------------------
  const tabItems = [
    {
      key: "company",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <BankOutlined />
          <span>Company Identity & Tax</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono font-semibold">
            {companyRows.length}
          </span>
        </span>
      ),
      children: (
        <div className="pt-2 space-y-4">
          <div className="p-3.5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 flex items-start gap-3">
            <InfoCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-base mt-0.5" />
            <div className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              <strong className="text-slate-800 dark:text-zinc-100">Practice Identity & Legal Registration: </strong>
              These details are published across the official website, client registration portals, and printed on every generated PDF engagement and tax lodgement document.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {companyRows.map((row) => (
              <AntInput
                key={row.key}
                type={INPUT_TYPES[row.inputType] || "text"}
                name={row.key}
                label={
                  <span className="font-semibold text-xs text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
                    {FIELD_ICONS[row.key] || <SettingOutlined />}
                    <span>{row.label}</span>
                  </span>
                }
                preIconAnt={row.inputType !== "textarea" ? FIELD_ICONS[row.key] : null}
                help={row.helpText || undefined}
                reqMsg={`${row.label} is required`}
                className="rounded-lg"
                containerClassName={
                  row.inputType === "textarea" ? "!mb-0 md:col-span-2" : "!mb-0"
                }
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "email",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <MailOutlined />
          <span>Contact Channels</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-blue-100/70 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-mono font-semibold">
            {emailRows.length}
          </span>
        </span>
      ),
      children: (
        <div className="pt-2 space-y-4">
          <div className="p-3.5 rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 flex items-start gap-3">
            <InfoCircleOutlined className="text-blue-600 dark:text-blue-400 text-base mt-0.5" />
            <div className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              <strong className="text-slate-800 dark:text-zinc-100">Official Correspondence Channels: </strong>
              Addresses used for automated notification dispatches, client engagement receipts, and official regulatory privacy correspondence.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emailRows.map((row) => (
              <AntInput
                key={row.key}
                type="email"
                name={row.key}
                label={
                  <span className="font-semibold text-xs text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
                    {FIELD_ICONS[row.key] || <MailOutlined />}
                    <span>{row.label}</span>
                  </span>
                }
                preIconAnt={FIELD_ICONS[row.key] || <MailOutlined />}
                help={row.helpText || undefined}
                reqMsg={`${row.label} is required`}
                className="rounded-lg font-mono text-xs"
                containerClassName="!mb-0"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "url",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <GlobalOutlined />
          <span>System Endpoints</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-purple-100/70 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-mono font-semibold">
            {urlRows.length}
          </span>
        </span>
      ),
      children: (
        <div className="pt-2 space-y-4">
          <div className="p-3.5 rounded-xl border border-purple-200/80 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 flex items-start gap-3">
            <InfoCircleOutlined className="text-purple-600 dark:text-purple-400 text-base mt-0.5" />
            <div className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              <strong className="text-slate-800 dark:text-zinc-100">Public & Internal Architecture Endpoints: </strong>
              Base URLs used to construct client email invitation links, embed document preview hyperlinks, and route API endpoints.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {urlRows.map((row) => (
              <AntInput
                key={row.key}
                type="url"
                name={row.key}
                label={
                  <span className="font-semibold text-xs text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
                    {FIELD_ICONS[row.key] || <GlobalOutlined />}
                    <span>{row.label}</span>
                  </span>
                }
                preIconAnt={FIELD_ICONS[row.key] || <GlobalOutlined />}
                help={row.helpText || undefined}
                reqMsg={`${row.label} is required`}
                className="rounded-lg font-mono text-xs"
                containerClassName="!mb-0"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "preview",
      label: (
        <span className="flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-400">
          <EyeOutlined />
          <span>Live Brand & Document Preview</span>
        </span>
      ),
      children: (
        <div className="pt-2 space-y-6">
          <div className="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <CheckCircleOutlined className="text-emerald-600 text-lg" />
              <div className="text-xs text-slate-700 dark:text-zinc-200">
                <strong>Real-Time Integration Preview: </strong>
                See how changes in the form dynamically reflect in client correspondence and generated PDF documents.
              </div>
            </div>
            <Tag color="success" className="font-semibold text-[11px] rounded-md m-0">
              Live Preview
            </Tag>
          </div>

          {/* Scenario 1: Official Website Footer Bar */}
          <div className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs bg-slate-900 text-slate-100">
            <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <GlobalOutlined /> Public Website Footer Integration
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">Live Component</span>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div>
                <h4 className="font-bold text-white text-sm mb-1">
                  {formValues["company.legalName"] || "Financially Up Pty Ltd"}
                </h4>
                <p className="text-slate-400 text-[11px] mb-2">
                  {formValues["company.tagline"] || "Accounting | Taxation | Advisory"}
                </p>
                <div className="text-[11px] text-slate-400 font-mono space-y-0.5">
                  <div>ABN: {formValues["company.abn"] || "84 659 717 263"}</div>
                  <div>Tax Agent: {formValues["company.taxAgentNumber"] || "25800000"}</div>
                </div>
              </div>
              <div className="space-y-1 text-slate-300">
                <div className="font-bold text-slate-200 uppercase text-[10px] tracking-wider mb-1">Head Office</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {formValues["company.address"] || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}
                </p>
              </div>
              <div className="space-y-1 text-slate-300">
                <div className="font-bold text-slate-200 uppercase text-[10px] tracking-wider mb-1">Client Inquiries</div>
                <div className="text-[11px] flex items-center gap-1.5 text-slate-300">
                  <PhoneOutlined className="text-emerald-400" />
                  <span>{formValues["company.phone"] || "1300 328 316"}</span>
                </div>
                <div className="text-[11px] flex items-center gap-1.5 text-slate-300 font-mono">
                  <MailOutlined className="text-emerald-400" />
                  <span>{formValues["company.email"] || "info@financiallyup.com.au"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 2: Official PDF Document Header & Letterhead */}
          <div className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs bg-white dark:bg-zinc-900">
            <div className="px-4 py-2 bg-slate-50 dark:bg-zinc-800/80 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileTextOutlined /> Generated Registration PDF Document Header
              </span>
              <span className="text-[10px] text-purple-600 dark:text-purple-400 font-mono">ATO Letterhead Mockup</span>
            </div>
            <div className="p-6 bg-slate-50/50 dark:bg-zinc-950/40 border border-dashed border-slate-300 dark:border-zinc-700 m-4 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-zinc-50 m-0">
                    {formValues["company.legalName"] || "Financially Up Pty Ltd"}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    Registered Tax Agent No: <strong className="text-purple-600 dark:text-purple-400">{formValues["company.taxAgentNumber"] || "25800000"}</strong>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500 font-mono space-y-0.5">
                  <div>ABN: {formValues["company.abn"] || "84 659 717 263"}</div>
                  <div>Phone: {formValues["company.phone"] || "1300 328 316"}</div>
                  <div>Email: {formValues["company.email"] || "info@financiallyup.com.au"}</div>
                </div>
              </div>
              <div className="pt-3 text-[11px] text-slate-400 text-center italic">
                * Official company letterhead format rendered on client registration receipts, engagement letters, and trust declarations.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "departments",
      label: (
        <span className="flex items-center gap-1.5 font-medium">
          <ApartmentOutlined />
          <span>Departments</span>
          <span className="text-xs px-1.5 py-0.2 rounded-pill bg-violet-100/70 text-violet-800 dark:bg-violet-950 dark:text-violet-300 font-mono font-semibold">
            {departmentCount ?? parseDepartments(staffRows[0]?.value).length}
          </span>
        </span>
      ),
      children: (
        <div className="pt-2 space-y-4">
          <div className="p-3.5 rounded-xl border border-violet-200/80 dark:border-violet-900/60 bg-violet-50/50 dark:bg-violet-950/20 flex items-start gap-3">
            <InfoCircleOutlined className="text-violet-600 dark:text-violet-400 text-base mt-0.5" />
            <div className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              <strong className="text-slate-800 dark:text-zinc-100">Staff Departments: </strong>
              The choices in the Department dropdown when adding or editing a staff member and on each person&apos;s profile.
              Renaming a department updates everyone in it; removing one asks where to move its staff.
            </div>
          </div>
          <DepartmentsManager onCountChange={setDepartmentCount} />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full space-y-6 pb-16 animate-fade-in">
      {/* 1. Standardized Admin Page Title */}
      <PageTitle
        icon={<SettingOutlined />}
        title="Global Settings"
        description="Central practice variables shared across the public website, client portals, registration forms, and ATO-compliant PDF documents."
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
            className="h-9 px-4 py-2 border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 text-xs font-semibold rounded-lg hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] shadow-xs transition-all flex items-center gap-1.5 active:scale-[0.98]"
          >
            Reload
          </Button>
        }
      />

      {/* 2. Top 4-Card Practice Profile Overview Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Registered Practice */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Registered Practice
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-zinc-100 mt-1 truncate max-w-[170px]">
              {quickStats.legalName}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              ABN: {quickStats.abn}
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0">
            <BankOutlined />
          </div>
        </div>

        {/* Card 2: Contact Hotline */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Contact Hotline
            </div>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
              {quickStats.phone}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Toll-Free Client Enquiries
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
            <PhoneOutlined />
          </div>
        </div>

        {/* Card 3: Primary Email */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Primary Inquiries
            </div>
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-1 truncate max-w-[170px] font-mono">
              {quickStats.email}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Central Practice Inbox
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl shrink-0">
            <MailOutlined />
          </div>
        </div>

        {/* Card 4: Head Office */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Principal Office
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-zinc-200 mt-1 line-clamp-1">
              Level 5, 100 Walker St
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              North Sydney NSW 2060
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl shrink-0">
            <CompassOutlined />
          </div>
        </div>
      </div>

      {/* 3. Main Settings Shell with Card Tabs */}
      <PermissionGuard
        permission="settings.view"
        fallback={
          <Alert
            type="error"
            showIcon
            title="Access Denied"
            description="You do not have permission to view or manage global settings."
            className="rounded-lg"
          />
        }
      >
        {loading ? (
          <div className="bg-white dark:bg-zinc-900 p-12 rounded-card border border-slate-200/80 dark:border-zinc-800 flex flex-col items-center justify-center space-y-3">
            <Spin size="large" />
            <span className="text-xs text-slate-500 font-medium">Loading practice configurations...</span>
          </div>
        ) : (
          <Form form={form} layout="vertical" requiredMark={false}>
            <div className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-card border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-6">
              {/* Card-Style Status Tabs */}
              <Tabs
                activeKey={activeTabKey}
                onChange={setActiveTabKey}
                items={tabItems}
                type="card"
                className="user-status-tabs"
              />

              {/* Sticky / Dedicated Action Bar */}
              <PermissionGuard permission="settings.update">
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <CheckCircleOutlined className="text-emerald-600" />
                    <span>Saved updates propagate instantly to the website, client forms, and PDF documents.</span>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <Button
                      onClick={handleReload}
                      disabled={loading || saving}
                      className="rounded-lg h-10 px-4 text-xs font-semibold"
                    >
                      Discard Unsaved
                    </Button>

                    <Button
                      type="primary"
                      icon={<SaveOutlined />}
                      loading={saving}
                      onClick={handleSave}
                      className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold rounded-lg h-10 px-7 border-none shadow-sm flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                    >
                      Save Global Settings
                    </Button>
                  </div>
                </div>
              </PermissionGuard>
            </div>
          </Form>
        )}
      </PermissionGuard>
    </div>
  );
}
