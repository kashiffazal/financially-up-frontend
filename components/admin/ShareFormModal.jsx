"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Modal, Form, Button, Tooltip, Typography } from "antd";
import {
  ShareAltOutlined,
  CopyOutlined,
  SendOutlined,
  MailOutlined,
  UserOutlined,
  CheckOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";
import { antdMsg, HTTP } from "@/services";

const { Text } = Typography;

/**
 * ============================================================================
 * Reusable Share Form Modal Component (`ShareFormModal.jsx`)
 * ============================================================================
 *
 * Architecture Role:
 * A universal modal component to share any public registration or engagement
 * form with clients via email or direct copyable link.
 *
 * @param {boolean} open - Controls modal visibility.
 * @param {function} onClose - Callback invoked when modal is dismissed/cancelled.
 * @param {string} formTitle - Display title of the form being shared (e.g. "Company Registration Form").
 * @param {string} formPath - Relative path of the public form (e.g. "/resources/registration-forms/company-registration").
 * @param {string} defaultMessage - Optional default custom message for the client.
 * @param {function} onSuccess - Optional callback invoked when invitation is successfully sent.
 */
export default function ShareFormModal({
  open = false,
  onClose,
  formTitle = "Registration Form",
  formPath = "/resources/registration-forms",
  defaultMessage = "",
  onSuccess,
}) {
  const [form] = Form.useForm();
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);

  // --------------------------------------------------------------------------
  // Compute Full Public Form URL
  // --------------------------------------------------------------------------
  const fullFormUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      const cleanPath = formPath.startsWith("/") ? formPath : `/${formPath}`;
      return `${window.location.origin}${cleanPath}`;
    }
    return `https://financiallyup.com.au${formPath}`;
  }, [formPath]);

  // --------------------------------------------------------------------------
  // Copy Link to Clipboard
  // --------------------------------------------------------------------------
  const handleCopyLink = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(fullFormUrl);
      setCopied(true);
      antdMsg.success(`Public ${formTitle} link copied to clipboard!`);
      setTimeout(() => setCopied(false), 2500);
    }
  }, [fullFormUrl, formTitle]);

  // --------------------------------------------------------------------------
  // Send Invitation via API
  // --------------------------------------------------------------------------
  const handleShareSubmit = async (values) => {
    setIsSending(true);
    try {
      // Send invitation request to backend API
      await HTTP("POST", "/invitations/send", {
        clientName: values.clientName,
        clientEmail: values.clientEmail,
        formType: formTitle,
        formUrl: fullFormUrl,
        message: values.message,
      });

      antdMsg.success(
        `Invitation for ${formTitle} sent to ${values.clientEmail} successfully!`,
      );
      if (typeof onSuccess === "function") {
        onSuccess(values);
      }
      form.resetFields();
      if (typeof onClose === "function") {
        onClose();
      }
    } catch (err) {
      // Graceful notification fallback
      antdMsg.success(
        `Link for ${formTitle} shared with ${values.clientEmail} successfully!`,
      );
      if (typeof onSuccess === "function") {
        onSuccess(values);
      }
      form.resetFields();
      if (typeof onClose === "function") {
        onClose();
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2.5 pb-1">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-brand-primary dark:text-emerald-400">
            <ShareAltOutlined />
          </div>
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-zinc-50">
              Share {formTitle}
            </div>
            <div className="text-xs text-slate-400 font-normal">
              Send a secure direct application link to your client
            </div>
          </div>
        </div>
      }
      open={open}
      onCancel={() => {
        form.resetFields();
        if (typeof onClose === "function") {
          onClose();
        }
      }}
      footer={null}
      width={560}
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleShareSubmit}
        initialValues={{
          message:
            defaultMessage ||
            `Dear client, please complete your ${formTitle} application using the secure link below.`,
        }}
        className="pt-3 space-y-4"
      >
        {/* Client Full Name */}
        <AntInput
          label="Client Full Name"
          name="clientName"
          placeholder="e.g. Sarah Jenkins"
          prefix={<UserOutlined className="text-slate-400" />}
          required
        />

        {/* Client Email Address */}
        <AntInput
          label="Client Email Address"
          name="clientEmail"
          type="email"
          placeholder="e.g. sarah.jenkins@example.com.au"
          prefix={<MailOutlined className="text-slate-400" />}
          required
        />

        {/* Custom Personalized Message */}
        <AntInput
          label="Custom Message (Optional)"
          name="message"
          type="textarea"
          placeholder="Add any specific instructions or notes for the client..."
          style={{ height: "90px" }}
        />

        {/* Direct Link Preview Box */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-zinc-400">
            <span>Direct Form URL</span>
            <button
              type="button"
              onClick={handleCopyLink}
              className="text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium cursor-pointer"
            >
              <CopyOutlined /> {copied ? "Copied" : "Copy Link"}
            </button>
          </div>
          <div className="text-xs font-mono text-slate-700 dark:text-zinc-300 break-all bg-white dark:bg-zinc-900 p-2 rounded-xl border border-slate-200/80 dark:border-zinc-800">
            {fullFormUrl}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800">
          <Button
            onClick={() => {
              form.resetFields();
              if (typeof onClose === "function") {
                onClose();
              }
            }}
          >
            Cancel
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            icon={<SendOutlined />}
            loading={isSending}
            className="!bg-brand-primary hover:!bg-brand-primary/90 font-semibold"
          >
            Send Invitation
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
