"use client";

import React, { useState } from "react";
import { Modal, Descriptions, Tag, Button, Space } from "antd";
import {
  BankOutlined,
  FilePdfOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { getFileUrl } from "@/services";

/**
 * ============================================================================
 * Company Registration View Details Modal (`viewDetails.js`)
 * ============================================================================
 *
 * Architecture Role:
 * A clean, structured Ant Design Descriptions viewer displaying complete
 * company registration details:
 * 1. Overview (Status, Reference #, Submission Date).
 * 2. Proposed Company Names (1st, 2nd, 3rd choices, type, state, reserved name).
 * 3. Registered Office & Principal Business Addresses.
 * 4. Contact Person details (Name, email, phone, relationship, address).
 * 5. Directors & Officeholders (Name, DOB, DIN Director ID, Address, roles).
 * 6. Shareholders & Share Capital (Name, share class, quantity, amount paid).
 * 7. Layout switch toggle: Horizontal vs. Vertical view layout.
 */
export default function CompanyRegistrationViewDetails({
  visible,
  data,
  onClose,
}) {
  // --------------------------------------------------------------------------
  // STATE: Layout View (Horizontal vs. Vertical Descriptions)
  // --------------------------------------------------------------------------
  const [layout, setLayout] = useState("horizontal");

  if (!data) return null;

  // --------------------------------------------------------------------------
  // PARSER HELPERS FOR NESTED JSON ATTRIBUTES
  // --------------------------------------------------------------------------
  const parseJson = (val) => {
    if (!val) return null;
    if (typeof val === "object") return val;
    try {
      return JSON.parse(val);
    } catch {
      return null;
    }
  };

  const directors = Array.isArray(data.directors)
    ? data.directors
    : parseJson(data.directors) || [];

  const shareholders = Array.isArray(data.shareholders)
    ? data.shareholders
    : parseJson(data.shareholders) || [];

  const pdfUrl = getFileUrl(data.pdf_path || data.pdfPath);

  // --------------------------------------------------------------------------
  // RENDER MODAL
  // --------------------------------------------------------------------------
  return (
    <Modal
      title={
        <div className="flex items-center justify-between pr-8">
          <div className="flex items-center gap-2.5">
            <BankOutlined className="text-brand-primary text-xl" />
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-zinc-50">
                {data.companyName1 || "Company Details"}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Ref: {data.referenceNumber || data.id}
              </div>
            </div>
          </div>

          {/* Layout Toggle Buttons (Horizontal vs Vertical View) */}
          <div className="flex items-center gap-2">
            <Button
              size="small"
              type={layout === "horizontal" ? "primary" : "default"}
              icon={<BarsOutlined />}
              onClick={() => setLayout("horizontal")}
              title="Horizontal View"
            />
            <Button
              size="small"
              type={layout === "vertical" ? "primary" : "default"}
              icon={<AppstoreOutlined />}
              onClick={() => setLayout("vertical")}
              title="Vertical View"
            />
          </div>
        </div>
      }
      open={visible}
      onCancel={onClose}
      width={900}
      footer={[
        pdfUrl && pdfUrl !== "#" && (
          <Button
            key="pdf"
            type="primary"
            icon={<FilePdfOutlined />}
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-brand-primary"
          >
            View Official PDF
          </Button>
        ),
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
      destroyOnHidden
    >
      <div className="max-h-[70vh] overflow-y-auto space-y-6 pr-2 py-2">
        {/* ================================================================= */}
        {/* 1. Status & Submission Overview                                   */}
        {/* ================================================================= */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            Status &amp; Submission
          </h4>
          <Descriptions
            bordered
            size="small"
            layout={layout}
            column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Current Status">
              <Tag color="green" className="font-semibold">
                {data.status || "Submitted"}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Reference Number">
              <span className="font-mono font-semibold">
                {data.referenceNumber || "-"}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Submitted At">
              {data.createdAt
                ? new Date(data.createdAt).toLocaleString("en-AU")
                : "-"}
            </Descriptions.Item>
          </Descriptions>
        </div>

        {/* ================================================================= */}
        {/* 2. Proposed Company Names                                         */}
        {/* ================================================================= */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            Proposed Company Names
          </h4>
          <Descriptions
            bordered
            size="small"
            layout={layout}
            column={{ xxl: 3, xl: 3, lg: 3, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="1st Choice Name">
              <span className="font-semibold text-brand-primary">
                {data.companyName1 || "-"}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="2nd Choice Name">
              {data.companyName2 || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="3rd Choice Name">
              {data.companyName3 || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Company Type">
              {data.companyType || "Proprietary Limited (Pty Ltd)"}
            </Descriptions.Item>
            <Descriptions.Item label="State of Registration">
              {data.stateOfRegistration || "NSW"}
            </Descriptions.Item>
            <Descriptions.Item label="Has Reserved Name?">
              {data.hasReservedName ? "Yes" : "No"}
            </Descriptions.Item>
          </Descriptions>
        </div>

        {/* ================================================================= */}
        {/* 3. Registered & Principal Addresses                               */}
        {/* ================================================================= */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            Registered &amp; Principal Addresses
          </h4>
          <Descriptions
            bordered
            size="small"
            layout={layout}
            column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Registered Office Address">
              {data.registeredOfficeAddress ||
                data.regAddress ||
                "Same as contact address"}
            </Descriptions.Item>
            <Descriptions.Item label="Principal Place of Business">
              {data.principalBusinessAddress ||
                data.principalAddress ||
                "Same as registered office"}
            </Descriptions.Item>
          </Descriptions>
        </div>

        {/* ================================================================= */}
        {/* 4. Contact Person Details                                         */}
        {/* ================================================================= */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            Contact Person
          </h4>
          <Descriptions
            bordered
            size="small"
            layout={layout}
            column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Full Name">
              {data.contactName || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Email Address">
              {data.contactEmail ? (
                <a
                  href={`mailto:${data.contactEmail}`}
                  className="text-brand-primary"
                >
                  {data.contactEmail}
                </a>
              ) : (
                "-"
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Mobile Number">
              {data.contactMobile || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Relationship to Company">
              {data.contactRelationship || "Director / Applicant"}
            </Descriptions.Item>
            <Descriptions.Item label="Contact Address">
              {data.contactAddress || "-"}
            </Descriptions.Item>
          </Descriptions>
        </div>

        {/* ================================================================= */}
        {/* 5. Directors & Officeholders                                       */}
        {/* ================================================================= */}
        {directors && directors.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
              Directors &amp; Officeholders ({directors.length})
            </h4>
            <div className="space-y-3">
              {directors.map((director, idx) => (
                <Descriptions
                  key={idx}
                  bordered
                  size="small"
                  layout={layout}
                  column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
                  title={
                    <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
                      Director #{idx + 1}: {director.firstName || ""}{" "}
                      {director.lastName || director.name || ""}
                    </span>
                  }
                >
                  <Descriptions.Item label="Full Name">
                    {director.firstName} {director.lastName || director.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="DOB / Birthplace">
                    {director.dob || "-"} ({director.birthCity || "Australia"})
                  </Descriptions.Item>
                  <Descriptions.Item label="DIN (Director ID)">
                    <span className="font-mono">
                      {director.directorId || director.din || "Pending"}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="Residential Address" span={2}>
                    {director.residentialAddress || director.address || "-"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Appointed Roles">
                    <Space size={4}>
                      <Tag color="blue">Director</Tag>
                      {director.isSecretary && (
                        <Tag color="cyan">Secretary</Tag>
                      )}
                    </Space>
                  </Descriptions.Item>
                </Descriptions>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 6. Shareholders & Share Capital                                   */}
        {/* ================================================================= */}
        {shareholders && shareholders.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
              Shareholders &amp; Share Capital ({shareholders.length})
            </h4>
            <div className="space-y-3">
              {shareholders.map((sh, idx) => (
                <Descriptions
                  key={idx}
                  bordered
                  size="small"
                  layout={layout}
                  column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
                  title={
                    <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
                      Shareholder #{idx + 1}:{" "}
                      {sh.name || `${sh.firstName || ""} ${sh.lastName || ""}`}
                    </span>
                  }
                >
                  <Descriptions.Item label="Shareholder Name">
                    {sh.name || `${sh.firstName || ""} ${sh.lastName || ""}`}
                  </Descriptions.Item>
                  <Descriptions.Item label="Share Class &amp; Quantity">
                    {sh.shareClass || "Ordinary"} -{" "}
                    {sh.numberOfShares || sh.shares || 100} Shares
                  </Descriptions.Item>
                  <Descriptions.Item label="Amount Paid / Share">
                    ${sh.amountPaidPerShare || sh.pricePerShare || "1.00"} AUD
                  </Descriptions.Item>
                  <Descriptions.Item label="Address" span={3}>
                    {sh.address || "-"}
                  </Descriptions.Item>
                </Descriptions>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
