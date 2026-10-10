"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Form, Button } from "antd";
import { SendOutlined, MailOutlined, CheckCircleFilled } from "@ant-design/icons";
import { antdMsg, HTTP } from "@/services";
import { AntInput } from "@/services/antdFields";
import styles from "./NewsletterSignup.module.css";

/**
 * Newsletter sign-up form used in the blog sidebars ("Weekly Dispatch").
 * Saves the email to the newsletter list (POST /newsletter-subscribers);
 * staff see subscribers at /admin/newsletter.
 *
 * @param {"blog_listing"|"blog_article"} source - Where the form is shown
 * @param {string} [placeholder]
 * @param {string} [buttonLabel]
 */
export default function NewsletterSignup({ source, placeholder = "Enter your email address", buttonLabel = "SUBSCRIBE NOW" }) {
  const pathname = usePathname();
  const [form] = Form.useForm();
  const [saving, setSaving] = useState(false);
  const [doneMessage, setDoneMessage] = useState("");
  // When the form became interactive — very fast submissions are treated as bots
  const openedAtRef = useRef(null);
  useEffect(() => {
    openedAtRef.current = Date.now();
  }, []);

  /** Errors are shown by HTTP(). */
  const handleFinish = async (values) => {
    setSaving(true);
    try {
      const res = await HTTP("POST", "/newsletter-subscribers", {
        email: values.email,
        fu_newsletter_trap: values.fu_newsletter_trap || "",
        source,
        sourcePage: pathname,
        formElapsedMs: openedAtRef.current ? Date.now() - openedAtRef.current : undefined,
      });
      if (res?.success) {
        setDoneMessage(res.alreadySubscribed ? "You're already subscribed — thank you!" : "Subscribed! Check your inbox soon.");
        antdMsg.success(res.message || "Thank you for subscribing to our Weekly Dispatch!");
        form.resetFields();
      }
    } finally {
      setSaving(false);
    }
  };

  if (doneMessage) {
    return (
      <div className={styles.done}>
        <CheckCircleFilled className="text-sm" />
        <span>{doneMessage}</span>
      </div>
    );
  }

  return (
    <Form form={form} onFinish={handleFinish} requiredMark={false} className={`pt-1 ${styles.form}`}>
      {/* Anti-spam honeypot: display:none so browsers and password managers never autofill it; bots reading the HTML still do */}
      <div aria-hidden="true" hidden style={{ display: "none" }}>
        <Form.Item name="fu_newsletter_trap" noStyle>
          <input type="text" tabIndex={-1} autoComplete="off" data-lpignore="true" data-1p-ignore="true" />
        </Form.Item>
      </div>

      <AntInput
        type="email"
        name="email"
        size="large"
        placeholder={placeholder}
        preIconAnt={<MailOutlined className="text-slate-400" />}
        reqMsg="Please enter your email address."
        emailErrorMsg="Please enter a valid email address."
        maxLength={190}
        autoComplete="email"
      />

      <Button htmlType="submit" type="primary" size="large" block loading={saving} icon={<SendOutlined />} className={styles.button}>
        {buttonLabel}
      </Button>
    </Form>
  );
}
