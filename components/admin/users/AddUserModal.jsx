"use client";

import React, { useState } from "react";
import { Modal, Form, Button, Divider, Alert } from "antd";
import {
  UserAddOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  LockOutlined,
  ApartmentOutlined,
  CameraOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";
import UploadAndCropImage from "@/components/mutual/andt-upload-and-crop-image-component";

/**
 * ============================================================================
 * Add User Modal Component (`components/admin/users/AddUserModal.jsx`)
 * ============================================================================
 * Architecture Role:
 * Standalone, modern user creation modal strictly adhering to the design system:
 * 1. Centered in viewport (centered={true}) for vertical middle placement.
 * 2. Branded icon header with descriptive subtitle using brand tokens.
 * 3. Profile picture upload & interactive cropping with executive portrait card.
 * 4. Logical visual sections (Personal Details, Department, Credentials, Roles).
 * 5. Uses unified Form Field Helpers (`AntInput` from `@/services/antdFields`).
 * 6. Compact, balanced form layout without bloated vertical margins.
 */
export default function AddUserModal({ open, onCancel, onSuccess, roles = [] }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  // Form submission handler
  const handleFinish = async (values) => {
    setSubmitting(true);
    try {
      const payload = {
        ...values,
        avatar: avatarUrl || values.avatar || "",
      };

      const res = await HTTP("POST", "/users", payload);
      if (res && res.success) {
        antdMsg.success("New user account created successfully.");
        form.resetFields();
        setAvatarUrl("");
        if (typeof onSuccess === "function") {
          onSuccess(res.user);
        }
      } else {
        antdMsg.error(res?.message || "Failed to create user account.");
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to create user account.");
    } finally {
      setSubmitting(false);
    }
  };

  const roleOptions = roles.map((r) => ({
    label: `${r.name}${r.isSystem ? " (System)" : ""}`,
    value: r.id,
  }));

  const departmentOptions = [
    { label: "Taxation & Accounting", value: "Taxation & Accounting" },
    { label: "Corporate Advisory", value: "Corporate Advisory" },
    { label: "Audit & Assurance", value: "Audit & Assurance" },
    { label: "Compliance & ASIC", value: "Compliance & ASIC" },
    { label: "Bookkeeping & Payroll", value: "Bookkeeping & Payroll" },
    { label: "Practice Administration", value: "Practice Administration" },
  ];

  return (
    <Modal
      centered
      title={
        <div className="flex items-center gap-3 pr-6 pb-2 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 text-xl shadow-xs">
            <UserAddOutlined />
          </div>
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-zinc-50">
              Create New User Account
            </div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 font-normal">
              Set up practice staff credentials, departmental affiliation, and RBAC permissions.
            </div>
          </div>
        </div>
      }
      open={open}
      onCancel={() => {
        form.resetFields();
        setAvatarUrl("");
        if (typeof onCancel === "function") onCancel();
      }}
      footer={null}
      width={680}
      destroyOnHidden
      className="add-user-modal"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          password: "TempPassword!2026",
          status: "Active",
          department: "Taxation & Accounting",
        }}
        className="pt-3 max-h-[75vh] overflow-y-auto pr-1"
      >
        {/* Profile Picture Uploader Studio Card */}
        <div className="p-4 mb-4 rounded-card border border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/40 dark:bg-[var(--brand-primary-soft)]/10 flex flex-col sm:flex-row items-center gap-4">
          <UploadAndCropImage
            value={avatarUrl}
            onChange={(base64) => {
              setAvatarUrl(base64);
              form.setFieldValue("avatar", base64);
            }}
            width={76}
            imageType="circle"
            title="Upload User Profile Photo"
            showActionButtons={false}
          />
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
                Staff Profile Portrait
              </h4>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-pill bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">
                Optional
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 leading-relaxed">
              Click the avatar circle or camera badge to choose, zoom, and crop. Recommended: Square portrait, PNG or JPG (Max 5MB).
            </p>
            {avatarUrl && (
              <div className="mt-2 flex items-center justify-center sm:justify-start gap-2">
                <Button
                  size="small"
                  onClick={() => {
                    setAvatarUrl("");
                    form.setFieldValue("avatar", "");
                  }}
                  danger
                  icon={<DeleteOutlined />}
                  className="rounded-lg text-xs"
                >
                  Remove Portrait
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Section 1: Personal Details */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
            <IdcardOutlined className="text-brand-primary" />
            <span>1. Personal Information</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0">
            <AntInput
              name="firstName"
              label="First Name"
              placeholder="e.g. Sarah"
              reqMsg="First name is required"
              className="rounded-lg"
            />
            <AntInput
              name="lastName"
              label="Last Name"
              placeholder="e.g. Jenkins"
              reqMsg="Last name is required"
              className="rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0">
            <AntInput
              type="email"
              name="email"
              label="Official Work Email"
              placeholder="s.jenkins@financiallyup.com.au"
              reqMsg="Valid work email is required"
              emailErrorMsg="Please enter a valid email address"
              className="rounded-lg"
            />
            <AntInput
              type="phone"
              name="phone"
              label="Contact Phone / Mobile"
              placeholder="0400 000 000"
              noRequired
              className="rounded-lg"
            />
          </div>
        </div>

        <Divider className="my-2 border-slate-100 dark:border-zinc-800" />

        {/* Section 2: Department & Employment */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
            <ApartmentOutlined className="text-brand-primary" />
            <span>2. Department &amp; Employment Profile</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0">
            <AntInput
              type="select"
              name="department"
              label="Department"
              options={departmentOptions}
              placeholder="Select practice department"
              noRequired
              className="rounded-lg"
            />
            <AntInput
              name="jobTitle"
              label="Job Title / Designation"
              placeholder="e.g. Senior Tax Accountant"
              noRequired
              className="rounded-lg"
            />
          </div>
        </div>

        <Divider className="my-2 border-slate-100 dark:border-zinc-800" />

        {/* Section 3: Credentials */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
            <LockOutlined className="text-brand-primary" />
            <span>3. Initial Security Credentials</span>
          </div>

          <Alert
            title="Password Security Policy"
            description="The staff member will be sent an automated onboarding email and required to update this temporary password upon first login."
            type="info"
            showIcon
            className="mb-3 rounded-lg text-xs"
          />

          <AntInput
            type="password"
            name="password"
            label="Temporary Access Password"
            placeholder="Assign strong temporary password"
            reqMsg="Temporary password is required"
            rules={[
              { required: true, message: "Temporary password is required" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
            className="rounded-lg"
          />
        </div>

        <Divider className="my-2 border-slate-100 dark:border-zinc-800" />

        {/* Section 4: Role Assignment */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
            <SafetyCertificateOutlined className="text-brand-primary" />
            <span>4. Role &amp; Permission Assignment</span>
          </div>

          <AntInput
            type="select"
            name="roleIds"
            label="Assigned RBAC Roles"
            mode="multiple"
            options={roleOptions}
            placeholder="Select one or more organizational roles"
            noRequired
            className="rounded-lg"
          />
        </div>

        {/* Form Actions Footer */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
          <Button
            onClick={() => {
              form.resetFields();
              setAvatarUrl("");
              if (typeof onCancel === "function") onCancel();
            }}
            className="rounded-xl px-5"
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white border-none font-semibold rounded-xl px-6 shadow-sm"
          >
            Create Staff Account
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
