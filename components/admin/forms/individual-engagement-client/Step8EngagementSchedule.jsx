"use client";

import React, { useState } from "react";
import { Table, Tag, Button, Alert, Modal } from "antd";
import { FilePdfOutlined, CheckCircleFilled, EyeOutlined, LockOutlined } from "@ant-design/icons";

export default function Step8EngagementSchedule({ form, formData, onScheduleViewed }) {
  const [hasOpenedSchedule, setHasOpenedSchedule] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const fullName = form.getFieldValue("fullName") || "Individual Client";
  const services = form.getFieldValue("services") || formData.services || [];

  const handleOpenScheduleModal = () => {
    setHasOpenedSchedule(true);
    setModalVisible(true);
    if (onScheduleViewed) onScheduleViewed();
  };

  // Fee matrix calculation per specification
  const feeRows = services.map((srv, idx) => {
    let fee = "$180.00 (ex. GST)";
    if (srv.includes("Rental Property")) fee = "+ $120.00 / property";
    if (srv.includes("Capital Gains")) fee = "+ $150.00 / CGT event";
    if (srv.includes("Cryptocurrency")) fee = "+ $150.00 / crypto report";
    if (srv.includes("BAS")) fee = "$220.00 / quarter";
    if (srv.includes("ABN")) fee = "$150.00 (Fixed)";
    if (srv.includes("GST")) fee = "$150.00 (Fixed)";

    return {
      key: idx,
      service: srv,
      deliverable: `${srv} Lodgement & Advice`,
      scope: "Preparation, verification, ATO compliance check, electronic lodgement",
      fee: fee,
    };
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="green" className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none">
            Step 8 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">Engagement Schedule</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Review Scope of Work & Engagement Schedule
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Review the read-only Engagement Schedule automatically generated for {fullName}.
        </p>
      </div>

      {/* Mandatory Schedule Review Notice */}
      <Alert
        type={hasOpenedSchedule ? "success" : "info"}
        showIcon
        icon={hasOpenedSchedule ? <CheckCircleFilled /> : <EyeOutlined />}
        title={hasOpenedSchedule ? "Engagement Schedule Reviewed" : "Action Required: Open & Review Engagement Schedule"}
        description={
          hasOpenedSchedule
            ? "Thank you for reviewing your Engagement Schedule. You may now proceed to Step 9."
            : "Under Tax Agent Professional Rules, you must click 'View Full Engagement Schedule' below to review your exact scope of work before signing."
        }
        className="rounded-2xl p-4"
      />

      {/* View Full Schedule Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-brand-primary-soft/40 dark:bg-emerald-950/40 border border-brand-primary/30 dark:border-emerald-800/50">
        <div>
          <div className="text-base font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <FilePdfOutlined className="text-brand-primary text-lg" /> Engagement Schedule v2.1 (Read-Only)
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
            Client: {fullName} | Reference: ENG-{Math.floor(100000 + Math.random() * 900000)} | Date: {new Date().toLocaleDateString("en-AU")}
          </p>
        </div>

        <Button
          type="primary"
          icon={<EyeOutlined />}
          size="large"
          onClick={handleOpenScheduleModal}
          className="bg-brand-primary hover:bg-brand-primary-hover font-bold rounded-xl px-6 h-11 shadow-md shadow-emerald-600/20"
        >
          View Full Engagement Schedule
        </Button>
      </div>

      {/* Scope Summary Table */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <LockOutlined className="text-slate-400" /> Summary of Selected Services & Fee Schedule
        </h4>
        <Table
          dataSource={feeRows}
          pagination={false}
          columns={[
            { title: "Selected Service", dataIndex: "service", key: "service", render: (text) => <span className="font-bold">{text}</span> },
            { title: "Deliverable", dataIndex: "deliverable", key: "deliverable" },
            { title: "Inclusions", dataIndex: "scope", key: "scope" },
            { title: "Estimated Fee (ex. GST)", dataIndex: "fee", key: "fee", render: (text) => <Tag color="green" className="font-extrabold">{text}</Tag> },
          ]}
          className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-zinc-800"
        />
      </div>

      {/* Full Schedule Modal */}
      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setModalVisible(false)} className="bg-brand-primary rounded-xl font-bold">
            I Have Reviewed the Schedule
          </Button>,
        ]}
        width={750}
        title={null}
        closeIcon={null}
      >
        <div className="p-6 space-y-6 text-slate-900 dark:text-zinc-100 font-sans">
          <div className="border-b border-slate-200 dark:border-zinc-800 pb-4 text-center">
            <h2 className="text-xl font-black text-brand-primary uppercase tracking-wide">Financially Up Pty Ltd</h2>
            <p className="text-xs text-slate-500">Registered Tax Agent #25800000 | 100% Online Accounting Services</p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mt-3">Individual Client Engagement Schedule</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl font-mono">
            <div><strong>Client Name:</strong> {fullName}</div>
            <div><strong>Date:</strong> {new Date().toLocaleDateString("en-AU")}</div>
            <div><strong>Engagement Term:</strong> Ongoing until terminated in writing</div>
            <div><strong>Status:</strong> Pending Final Signature</div>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-sm text-slate-900 dark:text-zinc-100">1. Scope of Works Included</h4>
            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
              Financially Up will prepare and lodge tax returns, Activity Statements, and related schedules based strictly on client-provided records. Included services: {services.join(", ")}.
            </p>

            <h4 className="font-bold text-sm text-slate-900 dark:text-zinc-100 mt-4">2. Excluded Works & Client Responsibilities</h4>
            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
              Unless explicitly added in writing, services exclude statutory ATO audits, legal advice, or financial planning. Client remains legally responsible for accuracy of all supplied records.
            </p>

            <h4 className="font-bold text-sm text-slate-900 dark:text-zinc-100 mt-4">3. Fee Payment Terms</h4>
            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
              Fees are payable upon completion prior to electronic ATO lodgement, or via authorized ATO tax refund fee deduction.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
