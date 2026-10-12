"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Form, Button, Modal, Popconfirm, Spin, Empty, Tooltip } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  TeamOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { HTTP, antdMsg } from "@/services";
import { AntInput } from "@/services/antdFields";
import { useAuth } from "@/context/AuthContext";
import { useSettings } from "@/context/SettingsContext";
import styles from "./DepartmentsManager.module.css";

/**
 * Settings > Departments: the list used by the Department dropdown on
 * Add / Edit User and each person's profile (GET/POST/PUT/DELETE /departments).
 * Every change is saved straight away:
 *   - Add            new name (duplicates refused)
 *   - Rename         also updates every staff member in that department
 *   - Remove         staff in it are first moved to another department (or none)
 *
 * @param {(count:number)=>void} [onCountChange] - lets the tab label show the total
 */
const NO_DEPARTMENT = "__none__";

export default function DepartmentsManager({ onCountChange }) {
  const { hasPermission, hasRole } = useAuth();
  const { refreshSettings } = useSettings();
  const canManage =
    hasRole("administrator") || hasPermission("settings.update");

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState(null); // name being renamed
  const [removing, setRemoving] = useState(null); // { name, staffCount } in the move dialog
  const [addForm] = Form.useForm();
  const [renameForm] = Form.useForm();
  const [moveForm] = Form.useForm();

  const applyList = useCallback(
    (list) => {
      setItems(list);
      onCountChange?.(list.length);
    },
    [onCountChange],
  );

  useEffect(() => {
    let active = true;
    HTTP("GET", "/departments").then((res) => {
      if (!active) return;
      if (res?.success) applyList(res.data || []);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [applyList]);

  /** Run a change, show its message, refresh the list and the dropdowns elsewhere. */
  const run = async (method, payload) => {
    setBusy(true);
    const res = await HTTP(method, "/departments", payload);
    setBusy(false);
    if (!res?.success) return false;
    applyList(res.data || []);
    antdMsg.success(res.message || "Saved.");
    refreshSettings?.();
    return true;
  };

  /** Enter in a field saves that form (and never submits the Settings form around it). */
  const submitOnEnter = (formInstance) => (e) => {
    if (e.key !== "Enter" || e.nativeEvent?.isComposing) return;
    e.preventDefault();
    formInstance.submit();
  };

  const add = async ({ name }) => {
    if (await run("POST", { name })) addForm.resetFields();
  };

  const startRename = (name) => {
    setEditing(name);
    renameForm.setFieldsValue({ name });
  };
  const rename = async ({ name }) => {
    if (name.trim() === editing) return setEditing(null);
    if (await run("PUT", { from: editing, to: name })) setEditing(null);
  };

  // "removing?." - the React Compiler reads this while the dialog is closed (removing = null)
  const confirmRemove = async ({ moveTo }) => {
    if (!removing) return;
    const ok = await run("DELETE", {
      name: removing?.name,
      moveTo: moveTo === NO_DEPARTMENT ? "" : moveTo,
    });
    if (ok) {
      setRemoving(null);
      moveForm.resetFields();
    }
  };

  const otherOptions = removing
    ? [
        ...items
          .filter((d) => d.name !== removing?.name)
          .map((d) => ({ label: d.name, value: d.name })),
        { label: "No department", value: NO_DEPARTMENT },
      ]
    : [];

  return (
    <div className={styles.wrap}>
      {canManage && (
        <div className={styles.addBox}>
          {/* No <form> of its own: this tab sits inside the Settings form, and a form
              inside a form makes the browser submit (reload) the outer one */}
          <Form
            form={addForm}
            onFinish={add}
            requiredMark={false}
            component={false}
          >
            <div className={styles.addForm} onKeyDown={submitOnEnter(addForm)}>
              <AntInput
                name="name"
                placeholder="New department name, e.g. Payroll Services"
                reqMsg="Type a department name first"
                maxLength={100}
                containerClassName={styles.addInput}
                preIconAnt={<TeamOutlined className="text-slate-400" />}
              />
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                loading={busy && !editing && !removing}
                className="bg-brand-primary!"
                onClick={() => addForm.submit()}
              >
                Add department
              </Button>
            </div>
          </Form>
          <p className={styles.hint}>
            Type a name and click Add department. Changes are saved straight
            away.
          </p>
        </div>
      )}

      {loading ? (
        <div className={styles.center}>
          <Spin />
        </div>
      ) : items.length === 0 ? (
        <Empty
          description="No departments yet"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        <ul className={styles.list}>
          {items.map((d) => (
            <li key={d.name} className={styles.row}>
              {editing === d.name ? (
                <Form
                  form={renameForm}
                  onFinish={rename}
                  requiredMark={false}
                  component={false}
                >
                  <div
                    className={styles.renameForm}
                    onKeyDown={submitOnEnter(renameForm)}
                  >
                    <AntInput
                      name="name"
                      reqMsg="Name can't be empty"
                      maxLength={100}
                      containerClassName={styles.addInput}
                    />
                    <Tooltip title="Save">
                      <Button
                        type="primary"
                        size="large"
                        icon={<CheckOutlined />}
                        loading={busy}
                        className="bg-brand-primary!"
                        onClick={() => renameForm.submit()}
                      />
                    </Tooltip>
                    <Tooltip title="Cancel">
                      <Button
                        size="large"
                        icon={<CloseOutlined />}
                        onClick={() => setEditing(null)}
                      />
                    </Tooltip>
                  </div>
                </Form>
              ) : (
                <>
                  <span className={styles.name}>{d.name}</span>
                  <span
                    className={`${styles.count} ${d.staffCount ? styles.countUsed : ""}`}
                  >
                    {d.staffCount} staff
                  </span>
                  {canManage && (
                    <span className={styles.actions}>
                      <Button
                        size="small"
                        icon={<EditOutlined />}
                        onClick={() => startRename(d.name)}
                      >
                        Rename
                      </Button>
                      {d.staffCount === 0 ? (
                        <Popconfirm
                          title={`Remove "${d.name}"?`}
                          description="Nobody is in this department."
                          okText="Remove"
                          okButtonProps={{ danger: true }}
                          onConfirm={() => run("DELETE", { name: d.name })}
                        >
                          <Button size="small" danger icon={<DeleteOutlined />}>
                            Remove
                          </Button>
                        </Popconfirm>
                      ) : (
                        <Button
                          size="small"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => setRemoving(d)}
                        >
                          Remove
                        </Button>
                      )}
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      <Modal
        open={Boolean(removing)}
        title={removing ? `Remove "${removing.name}"` : ""}
        onCancel={() => !busy && setRemoving(null)}
        footer={null}
        destroyOnHidden
        centered
      >
        {removing && (
          <Form
            form={moveForm}
            layout="vertical"
            requiredMark={false}
            onFinish={confirmRemove}
            className="pt-2"
          >
            <p className={styles.modalText}>
              <strong>{removing.staffCount}</strong> staff{" "}
              {removing.staffCount === 1 ? "is" : "are"} in this department.
              Choose where to move them before it&apos;s removed.
            </p>
            <AntInput
              type="select"
              name="moveTo"
              label="Move staff to"
              options={otherOptions}
              filter={false}
              reqMsg="Choose a department (or No department)"
            />
            <div className={styles.modalFooter}>
              <Button onClick={() => setRemoving(null)} disabled={busy}>
                Cancel
              </Button>
              <Button type="primary" danger htmlType="submit" loading={busy}>
                Move staff &amp; remove
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
}
