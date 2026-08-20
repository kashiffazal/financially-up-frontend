"use client";

import React, { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { antdMsg } from "@/services";
import {
  SendOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import styles from "./ContactUsModal.module.css";

export default function ContactUsModal({ open, onClose }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      antdMsg.success(
        "Thank you! Your enquiry has been submitted. Our team will contact you shortly.",
      );
      form.resetFields();
      if (onClose) onClose();
    }, 1000);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={620}
      className={styles.modalWrapper}
      styles={{
        container: {
          padding: 0,
        },
        header: {
          borderRadius: "none",
          padding: 0,
        },
        // content: { padding: 0, borderRadius: 24, overflow: "hidden" },
        // body: { pad
      }}
      destroyOnHidden
    >
      {/* Header Banner inside Modal */}
      <div className={`${styles.modalHeader} p-6 sm:p-7 text-white`}>
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-[11px] font-bold uppercase tracking-wider mb-2 border border-white/20">
            <SafetyCertificateOutlined className="text-emerald-200" />
            <span>ATO Registered Tax Agents #25992004</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
            Contact Financially Up
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 font-normal max-w-lg leading-relaxed">
            Fill in your details below. Our CPA tax accountants will review your
            enquiry and respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-7 bg-white dark:bg-zinc-900">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
          className="space-y-3.5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Form.Item
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs">
                  First Name *
                </span>
              }
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
              className="mb-0"
            >
              <Input
                size="large"
                placeholder="John"
                className="rounded-xl text-sm"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs">
                  Last Name *
                </span>
              }
              name="lastName"
              rules={[{ required: true, message: "Last name is required" }]}
              className="mb-0"
            >
              <Input
                size="large"
                placeholder="Doe"
                className="rounded-xl text-sm"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Form.Item
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs">
                  Email Address *
                </span>
              }
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Valid email required" },
              ]}
              className="mb-0"
            >
              <Input
                size="large"
                prefix={<MailOutlined className="text-slate-400 text-xs" />}
                placeholder="john@example.com"
                className="rounded-xl text-sm"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs">
                  Phone Number
                </span>
              }
              name="phone"
              className="mb-0"
            >
              <Input
                size="large"
                prefix={<PhoneOutlined className="text-slate-400 text-xs" />}
                placeholder="0400 000 000"
                className="rounded-xl text-sm"
              />
            </Form.Item>
          </div>

          <Form.Item
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs">
                How Would You Like Us To Contact? *
              </span>
            }
            name="contactMethod"
            rules={[
              { required: true, message: "Please select a contact method" },
            ]}
            className="mb-0"
          >
            <Select
              size="large"
              placeholder="Select preferred contact method"
              className="rounded-xl text-sm"
            >
              <Select.Option value="email">Email</Select.Option>
              <Select.Option value="phone">Phone Call</Select.Option>
              <Select.Option value="whatsapp">WhatsApp / SMS</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={
              <span className="font-bold text-slate-800 dark:text-zinc-200 text-xs">
                Anything Else? (Optional)
              </span>
            }
            name="notes"
            className="mb-0"
          >
            <Input.TextArea
              rows={3}
              placeholder="Tell us about your tax, accounting, or business enquiry..."
              className="rounded-xl text-sm"
            />
          </Form.Item>

          <div className="pt-3">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={submitting}
              icon={<SendOutlined />}
              className="w-full h-12 rounded-xl font-bold text-base bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20"
            >
              Submit Enquiry
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-zinc-500 pt-1">
            <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-[10px]" />
            <span>100% Confidential &amp; ATO Compliant</span>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
