"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Form,
  Button,
  Modal,
  Popconfirm,
  Tag,
  Tooltip,
  Alert,
  Spin,
  Empty,
  Collapse,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SendOutlined,
  StarOutlined,
  StarFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  MailOutlined,
  TeamOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";
import { useAuth } from "@/context/AuthContext";
import styles from "./EmailSettings.module.css";
import { useBrandText } from "@/context/SettingsContext";

/**
 * Settings > Email
 *   1. Sending accounts (SMTP): add / edit / delete, send a test, make default.
 *      A new default is only accepted after a test email is delivered through it.
 *   2. Recipients: who receives form emails (default list + optional list per form).
 * Passwords are encrypted on the server and never shown again.
 */

const API = "/email-settings";

// Server details for common providers (the admin only adds the mailbox and password)
const PRESETS = {
  microsoft365: {
    label: "Microsoft 365 / Outlook",
    host: "smtp.office365.com",
    port: 587,
    security: "starttls",
  },
  google: {
    label: "Google Workspace / Gmail",
    host: "smtp.gmail.com",
    port: 465,
    security: "ssl",
  },
  hostinger: {
    label: "Hostinger",
    host: "smtp.hostinger.com",
    port: 465,
    security: "ssl",
  },
  siteground: { label: "SiteGround", host: "", port: 465, security: "ssl" },
  custom: { label: "Other / custom", host: "", port: 465, security: "ssl" },
};
const SECURITY_OPTIONS = [
  { value: "ssl", label: "SSL / TLS (usually port 465)" },
  { value: "starttls", label: "STARTTLS (usually port 587)" },
  { value: "none", label: "None (not recommended)" },
];
const SECURITY_LABEL = {
  ssl: "SSL",
  starttls: "STARTTLS",
  none: "No encryption",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const emailListRule = {
  validator: (_, value) => {
    const bad = (value || []).filter((v) => !EMAIL_RE.test(String(v).trim()));
    return bad.length
      ? Promise.reject(new Error(`Not a valid email: ${bad[0]}`))
      : Promise.resolve();
  },
};

/** Last address this admin sent a test to (remembered in this browser). */
const testAddressKey = (userId) => `fu_email_test_to_${userId || "me"}`;
const readTestAddress = (userId) => {
  try {
    return localStorage.getItem(testAddressKey(userId)) || "";
  } catch {
    return "";
  }
};
const saveTestAddress = (userId, value) => {
  try {
    localStorage.setItem(testAddressKey(userId), value);
  } catch {
    // private window: nothing to remember
  }
};

/** Dialog header in the admin style: icon box, title, subtitle. */
const DialogHeader = ({ icon, title, subtitle }) => (
  <div className={styles.dialogHeader}>
    <span className={styles.dialogIcon}>{icon}</span>
    <div className="min-w-0">
      <div className={styles.dialogTitle}>{title}</div>
      {subtitle && <div className={styles.dialogSubtitle}>{subtitle}</div>}
    </div>
  </div>
);

/** Compact full-width note inside a form. */
const Note = ({ children }) => (
  <Alert type="info" showIcon className={styles.note} title={children} />
);

export default function EmailSettings() {
  const brand = useBrandText();
  const { user, hasPermission, hasRole } = useAuth();
  const canManage =
    hasRole("administrator") || hasPermission("settings.update");

  const [accounts, setAccounts] = useState([]);
  const [fallback, setFallback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // {} = new, account = edit
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(null); // { account, makeDefault }
  const [testResult, setTestResult] = useState(null); // { ok, message, detail }
  const [sending, setSending] = useState(false);
  const [routing, setRouting] = useState(null);
  const [areas, setAreas] = useState([]);
  const [savingRecipients, setSavingRecipients] = useState(false);

  const [accountForm] = Form.useForm();
  const [testForm] = Form.useForm();
  const [recipientsForm] = Form.useForm();

  const loadAccounts = useCallback(async () => {
    const res = await HTTP("GET", `${API}/accounts`);
    if (res?.success) {
      setAccounts(res.data || []);
      setFallback(res.fallback || null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    let active = true;
    Promise.all([
      HTTP("GET", `${API}/accounts`),
      HTTP("GET", `${API}/recipients`),
    ]).then(([acc, rec]) => {
      if (!active) return;
      if (acc?.success) {
        setAccounts(acc.data || []);
        setFallback(acc.fallback || null);
      }
      if (rec?.success) {
        setRouting(rec.data.routing);
        setAreas(rec.data.areas || []);
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  // Fill the recipients form once loaded
  useEffect(() => {
    if (!routing) return;
    const overrides = {};
    areas.forEach((a) => {
      const own = routing.overrides?.[a.key] || {};
      overrides[a.key] = {
        to: own.to || [],
        cc: own.cc || [],
        bcc: own.bcc || [],
      };
    });
    recipientsForm.setFieldsValue({
      defaultTo: routing.default.to,
      defaultCc: routing.default.cc,
      defaultBcc: routing.default.bcc || [],
      overrides,
    });
  }, [routing, areas, recipientsForm]);

  // --------------------------------------------------------------------------
  // Accounts
  // --------------------------------------------------------------------------
  const openAccount = (account) => {
    setEditing(account || {});
    accountForm.resetFields();
    accountForm.setFieldsValue(
      account?.id
        ? { ...account, password: "" }
        : {
            preset: "microsoft365",
            ...PRESETS.microsoft365,
            name: "",
            username: "",
            fromName: brand("Financially Up"),
            fromEmail: "",
          },
    );
  };

  const applyPreset = (key) => {
    const preset = PRESETS[key];
    if (preset)
      accountForm.setFieldsValue({
        host: preset.host,
        port: preset.port,
        security: preset.security,
      });
  };

  const saveAccount = async (values) => {
    setSaving(true);
    const { preset, ...payload } = values;
    const res = editing?.id
      ? await HTTP("PUT", `${API}/accounts/${editing.id}`, payload)
      : await HTTP("POST", `${API}/accounts`, payload);
    setSaving(false);
    if (!res?.success) return;
    antdMsg.success(res.message || "Saved.");
    setEditing(null);
    loadAccounts();
  };

  const removeAccount = async (account) => {
    const res = await HTTP("DELETE", `${API}/accounts/${account.id}`);
    if (res?.success) {
      antdMsg.success(res.message || "Deleted.");
      loadAccounts();
    }
  };

  const openTest = (account, makeDefault) => {
    setTestResult(null);
    setTesting({ account, makeDefault });
    testForm.setFieldsValue({
      to: readTestAddress(user?.id) || user?.email || "",
    });
  };

  const runTest = async ({ to }) => {
    if (!testing) return;
    saveTestAddress(user?.id, to);
    setSending(true);
    setTestResult(null);
    // "?.": the React Compiler reads these while the dialog is closed (testing = null)
    const path = `${API}/accounts/${testing?.account?.id}/${testing?.makeDefault ? "make-default" : "test"}`;
    // hideErrorMsg: the result is shown in the dialog instead of a toast
    const res = await HTTP("POST", path, { to }, false, true);
    setSending(false);
    // Show the result straight away from the server's reply, then refresh the list
    const updated = res?.data;
    if (updated?.id) {
      setAccounts((list) =>
        list.map((a) =>
          a.id === updated.id
            ? updated
            : updated.isDefault
              ? { ...a, isDefault: false }
              : a,
        ),
      );
      if (updated.isDefault) setFallback(null);
    }
    loadAccounts();
    if (res?.success) {
      antdMsg.success(res.message);
      setTesting(null);
    } else {
      setTestResult({
        ok: false,
        message: res?.message || "The email couldn't be sent.",
        detail: res?.detail,
      });
    }
  };

  // --------------------------------------------------------------------------
  // Recipients
  // --------------------------------------------------------------------------
  const saveRecipients = async (values) => {
    setSavingRecipients(true);
    const res = await HTTP("PUT", `${API}/recipients`, {
      default: {
        to: values.defaultTo || [],
        cc: values.defaultCc || [],
        bcc: values.defaultBcc || [],
      },
      overrides: values.overrides || {},
    });
    setSavingRecipients(false);
    if (res?.success) {
      antdMsg.success(res.message || "Recipients saved.");
      setRouting(res.data.routing);
    }
  };

  if (loading) {
    return (
      <div className={styles.center}>
        <Spin />
      </div>
    );
  }

  const ownListCount = Object.keys(routing?.overrides || {}).length;

  return (
    <div className={styles.wrap}>
      {/* ------------------------------------------------------------------ */}
      {/* 1. Sending accounts                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <h3 className={styles.sectionTitle}>
              <CloudServerOutlined /> Sending accounts
            </h3>
            <p className={styles.muted}>
              The <strong>default</strong> account sends every email: form
              alerts, client receipts, enquiries and password emails.
            </p>
          </div>
          {canManage && (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => openAccount(null)}
              className="bg-brand-primary!"
            >
              Add email account
            </Button>
          )}
        </div>

        {fallback && (
          <Alert
            type="warning"
            showIcon
            className="mb-3"
            title="No default account yet"
            description={`Emails are currently sent with the server settings (${fallback.username} via ${fallback.host}). Add an account and make it the default to manage email here.`}
          />
        )}

        {accounts.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No email accounts yet"
          />
        ) : (
          <ul className={styles.list}>
            {accounts.map((a) => (
              <li
                key={a.id}
                className={`${styles.row} ${a.isDefault ? styles.rowDefault : ""}`}
              >
                <div className={styles.rowMain}>
                  <div className={styles.rowTitle}>
                    {a.isDefault ? (
                      <StarFilled className={styles.star} />
                    ) : (
                      <MailOutlined className={styles.mailIcon} />
                    )}
                    <span>{a.name}</span>
                    {a.isDefault && (
                      <Tag color="green" className="m-0!">
                        Default
                      </Tag>
                    )}
                  </div>
                  <div className={styles.rowMeta}>
                    From{" "}
                    <strong>
                      {a.fromName
                        ? `${a.fromName} <${a.fromEmail}>`
                        : a.fromEmail}
                    </strong>{" "}
                    · {a.host}:{a.port} ·{" "}
                    {SECURITY_LABEL[a.security] || a.security}
                  </div>
                  <div className={styles.rowStatus}>
                    {a.lastTestOk === true && (
                      <span className={styles.ok}>
                        <CheckCircleFilled /> Working - last test{" "}
                        {dayjs(a.lastTestAt).format("D MMM YYYY, h:mm A")}
                      </span>
                    )}
                    {a.lastTestOk === false && (
                      <span className={styles.bad}>
                        <CloseCircleFilled /> Last test failed:{" "}
                        {a.lastTestMessage}
                      </span>
                    )}
                    {a.lastTestOk == null && (
                      <span className={styles.muted}>Not tested yet</span>
                    )}
                  </div>
                </div>
                {canManage && (
                  <div className={styles.rowActions}>
                    <Button
                      size="small"
                      icon={<SendOutlined />}
                      onClick={() => openTest(a, false)}
                    >
                      Send test
                    </Button>
                    {!a.isDefault && (
                      <Button
                        size="small"
                        icon={<StarOutlined />}
                        onClick={() => openTest(a, true)}
                      >
                        Make default
                      </Button>
                    )}
                    <Tooltip title="Edit">
                      <Button
                        size="small"
                        icon={<EditOutlined />}
                        onClick={() => openAccount(a)}
                      />
                    </Tooltip>
                    {a.isDefault ? (
                      <Tooltip title="Make another account the default before deleting this one">
                        <Button
                          size="small"
                          danger
                          icon={<DeleteOutlined />}
                          disabled
                        />
                      </Tooltip>
                    ) : (
                      <Popconfirm
                        title={`Delete "${a.name}"?`}
                        okText="Delete"
                        okButtonProps={{ danger: true }}
                        onConfirm={() => removeAccount(a)}
                      >
                        <Tooltip title="Delete">
                          <Button
                            size="small"
                            danger
                            icon={<DeleteOutlined />}
                          />
                        </Tooltip>
                      </Popconfirm>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Recipients                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <TeamOutlined /> Who receives form emails
        </h3>
        <p className={styles.muted}>
          New applications and website enquiries are emailed to these addresses.
          Type an address and press Enter to add it.
        </p>

        <Form
          form={recipientsForm}
          layout="vertical"
          requiredMark={false}
          onFinish={saveRecipients}
          disabled={!canManage}
        >
          <div className={styles.grid3}>
            <AntInput
              type="select"
              mode="tags"
              name="defaultTo"
              label="Send to"
              placeholder={brand("e.g. forms@financiallyup.com.au")}
              rules={[
                { required: true, message: "Add at least one address" },
                emailListRule,
              ]}
              filter={false}
            />
            <AntInput
              type="select"
              mode="tags"
              name="defaultCc"
              label="CC (optional)"
              placeholder="Copy to…"
              rules={[emailListRule]}
              filter={false}
            />
            <AntInput
              type="select"
              mode="tags"
              name="defaultBcc"
              label="BCC (optional)"
              placeholder="Hidden copy to…"
              rules={[emailListRule]}
              filter={false}
              extra="Receives a copy without the other recipients seeing it."
            />
          </div>

          <Collapse
            className={styles.collapse}
            items={[
              {
                key: "own",
                label: (
                  <span>
                    Form-specific recipients{" "}
                    <span className={styles.muted}>
                      - optional
                      {ownListCount
                        ? ` · ${ownListCount} form${ownListCount === 1 ? "" : "s"} with their own list`
                        : ""}
                    </span>
                  </span>
                ),
                children: (
                  <div className={styles.areaList}>
                    <p className={styles.muted}>
                      Leave a form empty to use the list above (e.g. Medicare →
                      {brand("m.e@financiallyup.com.au")}).
                    </p>
                    {areas.map((area) => (
                      <div key={area.key} className={styles.areaRow}>
                        <span className={styles.areaName}>{area.label}</span>
                        <AntInput
                          type="select"
                          mode="tags"
                          name={["overrides", area.key, "to"]}
                          placeholder="Uses the list above"
                          rules={[emailListRule]}
                          filter={false}
                          noRequired
                          containerClassName={styles.areaField}
                        />
                        <AntInput
                          type="select"
                          mode="tags"
                          name={["overrides", area.key, "cc"]}
                          placeholder="CC (optional)"
                          rules={[emailListRule]}
                          filter={false}
                          noRequired
                          containerClassName={styles.areaField}
                        />
                        <AntInput
                          type="select"
                          mode="tags"
                          name={["overrides", area.key, "bcc"]}
                          placeholder="BCC (optional)"
                          rules={[emailListRule]}
                          filter={false}
                          noRequired
                          containerClassName={styles.areaField}
                        />
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />

          {canManage && (
            <div className={styles.footerPlain}>
              <Button
                type="primary"
                htmlType="submit"
                loading={savingRecipients}
                className="bg-brand-primary!"
              >
                Save recipients
              </Button>
            </div>
          )}
        </Form>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Add / edit account                                                  */}
      {/* ------------------------------------------------------------------ */}
      <Modal
        open={Boolean(editing)}
        title={
          <DialogHeader
            icon={editing?.id ? <EditOutlined /> : <MailOutlined />}
            title={editing?.id ? `Edit "${editing.name}"` : "Add email account"}
            subtitle="The mailbox the portal signs in to when it sends email."
          />
        }
        onCancel={() => !saving && setEditing(null)}
        footer={null}
        width={640}
        destroyOnHidden
        centered
      >
        {editing && (
          <Form
            form={accountForm}
            layout="vertical"
            requiredMark={false}
            onFinish={saveAccount}
            className={styles.accountForm}
          >
            {!editing.id && (
              <AntInput
                type="select"
                name="preset"
                label="Email provider"
                options={Object.entries(PRESETS).map(([value, p]) => ({
                  value,
                  label: p.label,
                }))}
                onChange={applyPreset}
                filter={false}
                extra="Fills in the server details. You can still change them below."
                noRequired
              />
            )}
            <AntInput
              name="name"
              label="Account name"
              placeholder="e.g. Client Microsoft 365"
              reqMsg="Give this account a name"
            />
            <div className={styles.grid2}>
              <AntInput
                name="fromName"
                label="From name"
                placeholder={brand("Financially Up")}
                noRequired
              />
              <AntInput
                type="email"
                name="fromEmail"
                label="From email"
                placeholder={brand("noreply@financiallyup.com.au")}
                reqMsg="Enter the From email"
              />
            </div>
            <div className={styles.grid3}>
              <AntInput
                name="host"
                label="SMTP server"
                placeholder="smtp.office365.com"
                reqMsg="Enter the SMTP server"
                containerClassName={styles.span2}
              />
              <AntInput
                type="number"
                name="port"
                label="Port"
                min={1}
                max={65535}
                step={1}
                reqMsg="Enter the port"
              />
            </div>
            <AntInput
              type="select"
              name="security"
              label="Security"
              options={SECURITY_OPTIONS}
              filter={false}
              reqMsg="Choose the security"
            />
            <div className={styles.grid2}>
              <AntInput
                name="username"
                label="Username"
                placeholder="Usually the mailbox email"
                reqMsg="Enter the username"
                autoComplete="off"
              />
              <AntInput
                type="password"
                name="password"
                label="Password"
                placeholder={
                  editing.id ? "•••••••• (saved)" : "Mailbox or app password"
                }
                rules={
                  editing.id
                    ? []
                    : [{ required: true, message: "Enter the password" }]
                }
                autoComplete="new-password"
              />
            </div>
            <Note>
              {editing.id
                ? "The password is saved securely and never shown. Leave it empty to keep it, or type a new one to replace it."
                : "The password is stored encrypted and never shown again after saving."}
            </Note>
            <AntInput
              type="email"
              name="replyTo"
              label="Reply-To (optional)"
              placeholder="Where replies should go"
              noRequired
            />
            <Note>
              Reply-To is only used when an email has no reply address of its
              own. Staff alerts already reply to the client; client emails reply
              to your staff inbox.
            </Note>
            {editing.isDefault && (
              <Alert
                type="info"
                showIcon
                className="mb-3"
                title="This is the default account"
                description="If you change the server, port, security, username or password, the connection is checked before saving, so email never stops."
              />
            )}
            <div className={styles.footer}>
              <Button onClick={() => setEditing(null)} disabled={saving}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={saving}
                className="bg-brand-primary!"
              >
                {editing.id ? "Save changes" : "Add account"}
              </Button>
            </div>
          </Form>
        )}
      </Modal>

      {/* ------------------------------------------------------------------ */}
      {/* Send test / make default                                            */}
      {/* ------------------------------------------------------------------ */}
      <Modal
        open={Boolean(testing)}
        title={
          testing ? (
            <DialogHeader
              icon={testing.makeDefault ? <StarOutlined /> : <SendOutlined />}
              title={
                testing.makeDefault
                  ? `Make "${testing.account.name}" the default`
                  : `Send a test from "${testing.account.name}"`
              }
              subtitle={
                testing.makeDefault
                  ? "A test email must be delivered first."
                  : "Checks that this account can send email."
              }
            />
          ) : (
            ""
          )
        }
        onCancel={() => !sending && setTesting(null)}
        footer={null}
        destroyOnHidden
        centered
      >
        {testing && (
          <Form
            form={testForm}
            layout="vertical"
            requiredMark={false}
            onFinish={runTest}
            className="pt-1"
          >
            <p className={styles.muted}>
              {testing.makeDefault
                ? "We'll send a test email through this account first. If it's delivered, it becomes the default for all portal emails."
                : "We'll send a test email through this account to check it works."}
            </p>
            <AntInput
              type="email"
              name="to"
              label="Send the test to"
              placeholder="you@example.com"
              reqMsg="Enter an email address"
            />
            {testResult && !testResult.ok && (
              <Alert
                type="error"
                showIcon
                className="mb-3"
                title={testing.makeDefault ? "Not made default" : "Test failed"}
                description={
                  <div>
                    <div>{testResult.message}</div>
                    {testResult.detail && (
                      <details className={styles.details}>
                        <summary>Technical details</summary>
                        <code>{testResult.detail}</code>
                      </details>
                    )}
                  </div>
                }
              />
            )}
            <div className={styles.footer}>
              <Button onClick={() => setTesting(null)} disabled={sending}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={sending}
                icon={<SendOutlined />}
                className="bg-brand-primary!"
              >
                {testing.makeDefault
                  ? "Send test & make default"
                  : "Send test email"}
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
}
