"use client";

/**
 * Roles & Permission Matrix Management
 * =====================================
 * Dynamic RBAC configuration interface allowing administrators to define custom roles,
 * assign fine-grained capabilities by module, and protect core system roles.
 */

import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Tag,
  Modal,
  Form,
  Input,
  Checkbox,
  Card,
  Popconfirm,
  Badge,
  Divider,
  Collapse,
} from "antd";
import {
  KeyOutlined,
  PlusOutlined,
  SafetyCertificateOutlined,
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../context/AuthContext";
import PermissionGuard from "../../../components/admin/PermissionGuard";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";

export default function RolesPage() {
  const { hasPermission } = useAuth();

  const [roles, setRoles] = useState([]);
  const [permissionsGrouped, setPermissionsGrouped] = useState({});
  const [allPermissions, setAllPermissions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modals
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
  const [isEditRoleModalOpen, setIsEditRoleModalOpen] = useState(false);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);

  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPermissionIds, setSelectedPermissionIds] = useState([]);

  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  // Load Roles
  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await HTTP("GET", "/roles");
      if (res && res.success) {
        setRoles(res.roles || []);
      }
    } catch (err) {
      antdMsg.error("Failed to load roles");
    } finally {
      setLoading(false);
    }
  };

  // Load Permissions Dictionary
  const fetchPermissions = async () => {
    try {
      const res = await HTTP("GET", "/permissions");
      if (res && res.success) {
        setPermissionsGrouped(res.grouped || {});
        setAllPermissions(res.permissions || []);
      }
    } catch (err) {
      console.error("Failed to load permissions:", err);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchPermissions();
  }, []);

  // Handle Create Role
  const handleCreateRole = async (values) => {
    try {
      const res = await HTTP("POST", "/roles", values);
      if (res && res.success) {
        antdMsg.success("Role created successfully.");
        setIsAddRoleModalOpen(false);
        addForm.resetFields();
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to create role");
    }
  };

  // Handle Edit Role
  const handleEditRole = async (values) => {
    if (!selectedRole) return;
    try {
      const res = await HTTP("PUT", `/roles/${selectedRole.id}`, values);
      if (res && res.success) {
        antdMsg.success("Role updated successfully.");
        setIsEditRoleModalOpen(false);
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update role");
    }
  };

  // Handle Delete Role
  const handleDeleteRole = async (roleId) => {
    try {
      const res = await HTTP("DELETE", `/roles/${roleId}`);
      if (res && res.success) {
        antdMsg.success("Role deleted successfully.");
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to delete role");
    }
  };

  // Open Permissions Matrix Modal for Role
  const handleOpenPermissions = async (role) => {
    setSelectedRole(role);
    try {
      const res = await HTTP("GET", `/roles/${role.id}`);
      if (res && res.success && res.role) {
        const assignedIds = (res.role.permissions || []).map((p) => p.id);
        setSelectedPermissionIds(assignedIds);
        setIsPermissionModalOpen(true);
      }
    } catch (err) {
      antdMsg.error("Failed to load role permissions");
    }
  };

  // Save Permissions Matrix
  const handleSavePermissions = async () => {
    if (!selectedRole) return;
    try {
      const res = await HTTP("PUT", `/roles/${selectedRole.id}/permissions`, {
        permissionIds: selectedPermissionIds,
      });
      if (res && res.success) {
        antdMsg.success(`Permissions updated for ${selectedRole.name}`);
        setIsPermissionModalOpen(false);
        fetchRoles();
      }
    } catch (err) {
      antdMsg.error(err.message || "Failed to update permissions");
    }
  };

  const columns = [
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
      render: (val, record) => (
        <div className="flex items-center gap-2">
          <KeyOutlined className="text-[#008043]" />
          <div>
            <span className="font-semibold text-slate-800 dark:text-zinc-100">{val}</span>
            <div className="text-xs text-slate-400 font-mono">{record.slug}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "isSystem",
      key: "isSystem",
      render: (isSystem) =>
        isSystem ? (
          <Tag color="geekblue" icon={<LockOutlined />} className="text-xs font-semibold">
            System Protected
          </Tag>
        ) : (
          <Tag color="cyan" className="text-xs font-semibold">
            Custom Role
          </Tag>
        ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (val) => (
        <span className="text-xs text-slate-500 dark:text-zinc-400">
          {val || "No description provided"}
        </span>
      ),
    },
    {
      title: "Users Assigned",
      dataIndex: "userCount",
      key: "userCount",
      align: "center",
      render: (val) => (
        <Badge
          count={val}
          showZero
          color="#008043"
          className="font-semibold"
        />
      ),
    },
    {
      title: "Permissions",
      dataIndex: "permissionCount",
      key: "permissionCount",
      align: "center",
      render: (val) => (
        <Tag color="blue" className="font-mono text-xs">
          {val} Granted
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      align: "right",
      render: (_, record) => (
        <div className="flex items-center justify-end gap-2">
          <Button
            size="small"
            icon={<SafetyCertificateOutlined />}
            onClick={() => handleOpenPermissions(record)}
            className="text-xs"
          >
            Configure Matrix
          </Button>

          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedRole(record);
              editForm.setFieldsValue({
                name: record.name,
                description: record.description,
                status: record.status,
              });
              setIsEditRoleModalOpen(true);
            }}
          />

          {!record.isSystem && (
            <Popconfirm
              title="Delete Role?"
              description="Are you sure you want to delete this custom role?"
              onConfirm={() => handleDeleteRole(record.id)}
              okText="Delete"
              cancelText="Cancel"
              okButtonProps={{ danger: true }}
            >
              <Button size="small" danger icon={<DeleteOutlined />} />
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
            Roles & Permission Matrix
          </h1>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Define dynamic roles and fine-tune operational access permissions across all practice modules.
          </p>
        </div>

        <PermissionGuard permission="roles.create">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={() => {
              addForm.resetFields();
              setIsAddRoleModalOpen(true);
            }}
            className="bg-[#008043] hover:bg-[#006635] text-white font-semibold rounded-xl border-none shadow-sm"
          >
            Create Custom Role
          </Button>
        </PermissionGuard>
      </div>

      {/* Roles Table */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs">
        <Table
          columns={columns}
          dataSource={roles}
          rowKey="id"
          loading={loading}
          pagination={false}
        />
      </div>

      {/* MODAL: ADD ROLE */}
      <Modal
        title="Create Custom Role"
        open={isAddRoleModalOpen}
        onCancel={() => setIsAddRoleModalOpen(false)}
        footer={null}
      >
        <Form form={addForm} layout="vertical" onFinish={handleCreateRole} className="pt-3">
          <AntInput
            name="name"
            label="Role Name"
            placeholder="e.g. Audit Senior"
            reqMsg="Role name is required"
          />

          <AntInput
            type="textarea"
            name="description"
            label="Description"
            rows={3}
            placeholder="Brief description of this role's purpose..."
            noRequired
          />

          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button onClick={() => setIsAddRoleModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none cursor-pointer"
            >
              Create Role
            </Button>
          </div>
        </Form>
      </Modal>

      {/* MODAL: EDIT ROLE */}
      <Modal
        title="Edit Role Details"
        open={isEditRoleModalOpen}
        onCancel={() => setIsEditRoleModalOpen(false)}
        footer={null}
      >
        <Form form={editForm} layout="vertical" onFinish={handleEditRole} className="pt-3">
          <AntInput name="name" label="Role Name" reqMsg="Role name is required" />

          <AntInput
            type="textarea"
            name="description"
            label="Description"
            rows={3}
            noRequired
          />

          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button onClick={() => setIsEditRoleModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#008043] hover:bg-[#006635] text-white border-none cursor-pointer"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal>

      {/* MODAL: PERMISSIONS MATRIX CONFIGURATION */}
      <Modal
        title={
          <div className="flex items-center gap-2">
            <SafetyCertificateOutlined className="text-[#008043]" />
            <span>Configure Permissions: {selectedRole?.name}</span>
          </div>
        }
        open={isPermissionModalOpen}
        onCancel={() => setIsPermissionModalOpen(false)}
        width={750}
        onOk={handleSavePermissions}
        okText="Save Permission Matrix"
        okButtonProps={{
          className: "bg-[#008043] hover:bg-[#006635] text-white border-none",
        }}
      >
        <div className="py-2 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Check the operational actions this role is authorized to perform across each module.
          </p>

          <div className="space-y-4">
            {Object.entries(permissionsGrouped).map(([moduleName, perms]) => {
              const modulePermIds = perms.map((p) => p.id);
              const allChecked = modulePermIds.every((id) => selectedPermissionIds.includes(id));
              const someChecked =
                modulePermIds.some((id) => selectedPermissionIds.includes(id)) && !allChecked;

              const toggleModule = (checked) => {
                if (checked) {
                  const toAdd = modulePermIds.filter((id) => !selectedPermissionIds.includes(id));
                  setSelectedPermissionIds((prev) => [...prev, ...toAdd]);
                } else {
                  setSelectedPermissionIds((prev) =>
                    prev.filter((id) => !modulePermIds.includes(id))
                  );
                }
              };

              return (
                <div
                  key={moduleName}
                  className="border border-slate-200 dark:border-zinc-800 rounded-xl p-4 bg-slate-50/50 dark:bg-zinc-800/30"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-zinc-700">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                      {moduleName} Module
                    </span>
                    <Checkbox
                      checked={allChecked}
                      indeterminate={someChecked}
                      onChange={(e) => toggleModule(e.target.checked)}
                      className="text-xs font-semibold"
                    >
                      Grant All in Module
                    </Checkbox>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                    {perms.map((p) => {
                      const isChecked = selectedPermissionIds.includes(p.id);
                      return (
                        <Checkbox
                          key={p.id}
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPermissionIds((prev) => [...prev, p.id]);
                            } else {
                              setSelectedPermissionIds((prev) =>
                                prev.filter((id) => id !== p.id)
                              );
                            }
                          }}
                          className="text-xs"
                        >
                          <span className="font-medium text-slate-700 dark:text-zinc-300">
                            {p.name}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono">
                            {p.slug}
                          </span>
                        </Checkbox>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}
