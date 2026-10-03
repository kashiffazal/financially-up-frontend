"use client";

import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "antd";
import {
  EditOutlined,
  IdcardOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";
import UploadAndCropImage from "@/components/mutual/andt-upload-and-crop-image-component";

/**
 * ============================================================================
 * Edit User Modal Component (`components/admin/users/EditUserModal.jsx`)
 * ============================================================================
 * Architecture Role:
 * Standalone, modern user edit modal strictly adhering to the design system:
 * 1. Centered in viewport (centered={true}) for vertical middle placement.
 * 2. Branded icon header with descriptive subtitle using brand tokens.
 * 3. Profile picture upload & interactive cropping with executive portrait card.
 * 4. Uses unified Form Field Helpers (`AntInput` from `@/services/antdFields`).
 * 5. Compact, balanced form layout without bloated vertical margins.
 */
export default function EditUserModal({ open, onCancel, onSuccess, user }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  // Sync form values whenever the selected user changes or modal opens
  useEffect(() => {
    if (open && user) {
      setAvatarUrl(user.avatar || "");
      form.setFieldsValue({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        department: user.department || "",
        jobTitle: user.jobTitle || "",
        status: user.status || "Active",
        avatar: user.avatar || "",
      });
    }
  }, [open, user, form]);

  // Form submission handler
  const handleFinish = async (values) => {
    if (!user?.id) return;
    setSubmitting(true);
    try {
      const payload = {
        ...values,
        avatar: avatarUrl || "",
      };

      const res = await HTTP("PUT", `/users/${user.id}`, payload);
      if (res && res.success) {
        antdMsg.success("User profile updated successfully.");
        if (typeof onSuccess === "function") {
          onSuccess(res.user || { ...user, ...payload });
        }
      } else {
        antdMsg.error(res?.message || "Failed to update user profile.");
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update user profile.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      centered
      title={
        <div className="flex items-center gap-3 pr-6 pb-2 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 text-xl shadow-xs">
            <EditOutlined />
          </div>
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-zinc-50">
              Edit User Profile
            </div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 font-normal">
              {user?.fullName || `${user?.firstName || ""} ${user?.lastName || ""}`.trim()} • {user?.email}
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
      width={600}
      destroyOnHidden
      className="edit-user-modal"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
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
            title="Update User Profile Photo"
            showActionButtons={false}
          />
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
                Staff Profile Portrait
              </h4>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-pill bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">
                {avatarUrl ? "Photo Uploaded" : "Default Initials"}
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

        {/* Section: Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0">
          <AntInput
            name="firstName"
            label="First Name"
            placeholder="First name"
            reqMsg="First name is required"
            className="rounded-lg"
          />
          <AntInput
            name="lastName"
            label="Last Name"
            placeholder="Last name"
            reqMsg="Last name is required"
            className="rounded-lg"
          />
        </div>

        {/* Section: Contact & Department */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0">
          <AntInput
            name="phone"
            label="Phone"
            placeholder="e.g. +61 400 000 000"
            noRequired
            className="rounded-lg"
          />
          <AntInput
            name="department"
            label="Department"
            placeholder="e.g. Taxation & Advisory"
            noRequired
            className="rounded-lg"
          />
        </div>

        <AntInput
          name="jobTitle"
          label="Job Title"
          placeholder="e.g. Practice Administrator"
          noRequired
          className="rounded-lg"
        />

        <AntInput
          type="select"
          name="status"
          label="Account Status"
          placeholder="Select status"
          options={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
            { label: "Suspended", value: "Suspended" },
          ]}
        />

        {/* Actions Footer */}
        <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800">
          <Button
            onClick={() => {
              if (typeof onCancel === "function") onCancel();
            }}
            className="rounded-pill"
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white border-none rounded-pill px-5"
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
