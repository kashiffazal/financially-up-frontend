"use client";

/**
 * Risk Level Explainer
 * ====================
 * Explains, in plain language, how an engagement's automated risk level was
 * calculated and which of the client's answers contributed to it.
 *
 * The rules mirror calculateAutomatedRiskLevel() in
 * financially-up-backend/controllers/newIndividualEngagement.controller.js.
 * Keep the two in step if the scoring ever changes.
 */

import React from "react";
import { Modal, Tag, Table } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import styles from "./RiskLevelExplainer.module.css";

/* Each rule: when it applies, how many points it adds, and why it matters */
export const RISK_RULES = [
  {
    key: "atoIssues",
    points: 3,
    title: "ATO debts, disputes or audits",
    reason: "An existing dispute with the ATO is the strongest single indicator of compliance risk.",
    applies: (r) => r.atoIssues === "Yes",
    answer: (r) => r.atoIssues || "No",
  },
  {
    key: "overdueBas",
    points: 2,
    title: "Overdue BAS lodgements",
    reason: "Late business activity statements suggest incomplete or unreliable records.",
    applies: (r) => r.overdueBas === "Yes",
    answer: (r) => r.overdueBas || "No",
  },
  {
    key: "identityMethod",
    points: 2,
    title: "No photo ID provided",
    reason: "Identity that cannot be verified with photo ID requires extra checks under AML/CTF rules.",
    applies: (r) => (r.identity?.identityMethod || r.identityMethod) === "No Photo ID",
    answer: (r) => r.identity?.identityMethod || r.identityMethod || "Not recorded",
  },
  {
    key: "isSelf",
    points: 2,
    title: "Submitted by a representative",
    reason: "Someone acting for the client adds a layer between us and the taxpayer.",
    applies: (r) => r.isSelf === "No",
    answer: (r) => (r.isSelf === "No" ? "No — submitted by a representative" : "Yes — submitted by the client"),
  },
  {
    key: "expectedTurnover",
    points: 2,
    title: "Expected turnover above $500,000",
    reason: "Larger businesses carry greater financial exposure and reporting obligations.",
    applies: (r) => parseFloat(r.expectedTurnover) > 500000,
    answer: (r) =>
      r.expectedTurnover
        ? `$${Number(r.expectedTurnover).toLocaleString("en-AU", { minimumFractionDigits: 2 })}`
        : "Not provided",
  },
  {
    key: "foreign",
    points: 1,
    title: "Foreign income, assets or connections",
    reason: "Cross-border affairs bring extra reporting and sanctions considerations.",
    applies: (r) => Boolean(r.foreignCountry || r.foreignInfo),
    answer: (r) => r.foreignCountry || r.foreignInfo || "None disclosed",
  },
];

/* Total score -> level. Mirrors the backend thresholds. */
export const RISK_BANDS = [
  { level: "Low", range: "0 – 1 points", color: "green", meaning: "Standard onboarding. No extra checks required." },
  { level: "Medium", range: "2 – 3 points", color: "gold", meaning: "Proceed, but document the checks you performed." },
  { level: "High", range: "4 – 5 points", color: "orange", meaning: "Senior review required before accepting the client." },
  { level: "Unacceptable", range: "6 points or more", color: "red", meaning: "Do not accept without escalation and sign-off." },
];

export const calculateRiskBreakdown = (record = {}) => {
  const triggered = RISK_RULES.filter((rule) => rule.applies(record));
  const score = triggered.reduce((total, rule) => total + rule.points, 0);
  const level = score >= 6 ? "Unacceptable" : score >= 4 ? "High" : score >= 2 ? "Medium" : "Low";
  return { triggered, score, level };
};

const levelColor = (level) => RISK_BANDS.find((b) => b.level === level)?.color || "green";

export default function RiskLevelExplainer({ open, record, onClose }) {
  if (!record) return null;

  const { triggered, score, level } = calculateRiskBreakdown(record);
  const storedLevel = record.riskLevel || level;
  const triggeredKeys = new Set(triggered.map((r) => r.key));

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={onClose}
      okText="Close"
      cancelButtonProps={{ style: { display: "none" } }}
      width={760}
      centered
      title={
        <span className="flex items-center gap-2 font-extrabold">
          <SafetyCertificateOutlined className="text-brand-primary" />
          How this risk level was calculated
        </span>
      }
    >
      <div className="space-y-5 pt-2">
        {/* Outcome */}
        <div className={styles.summary}>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 block">
              Client
            </span>
            <span className="font-bold text-slate-900 dark:text-zinc-100">
              {record.client?.fullName || "This client"} · {record.referenceNumber}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 block">
              Total score
            </span>
            <span className="font-extrabold text-lg text-slate-900 dark:text-zinc-100">
              {score} point{score === 1 ? "" : "s"}
            </span>
          </div>
          <Tag color={levelColor(storedLevel)} className="font-extrabold px-3 py-1 rounded-pill text-sm">
            {storedLevel}
          </Tag>
        </div>

        <p className="text-sm text-slate-600 dark:text-zinc-300 m-0">
          Each answer below adds points. The points are added up and the total decides
          the risk level. Nothing here is a judgement about the client — it decides how
          much checking we must do before accepting the engagement.
        </p>

        {/* What this client triggered */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-sm mb-2">
            This client&apos;s answers
          </h4>
          <Table
            size="small"
            pagination={false}
            rowKey="key"
            dataSource={RISK_RULES}
            className={styles.table}
            columns={[
              {
                title: "Factor",
                dataIndex: "title",
                render: (title, rule) => (
                  <span className={triggeredKeys.has(rule.key) ? "font-bold text-slate-900 dark:text-zinc-100" : "text-slate-500 dark:text-zinc-400"}>
                    {title}
                  </span>
                ),
              },
              {
                title: "Client's answer",
                key: "answer",
                render: (_, rule) => (
                  <span className="text-xs text-slate-600 dark:text-zinc-300">{rule.answer(record)}</span>
                ),
              },
              {
                title: "Points",
                key: "points",
                width: 90,
                align: "center",
                render: (_, rule) =>
                  triggeredKeys.has(rule.key) ? (
                    <Tag color="red" className="font-bold rounded-pill">+{rule.points}</Tag>
                  ) : (
                    <span className="text-slate-400">0</span>
                  ),
              },
            ]}
          />
        </div>

        {/* Bands */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-sm mb-2">
            What the total means
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {RISK_BANDS.map((band) => (
              <div
                key={band.level}
                className={`${styles.band} ${band.level === storedLevel ? styles.bandActive : ""}`}
              >
                <div className="flex items-center gap-2">
                  <Tag color={band.color} className="font-bold rounded-pill m-0">
                    {band.level}
                  </Tag>
                  <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                    {band.range}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 m-0 mt-1">{band.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
          The level is calculated automatically when the form is submitted. A reviewing
          tax agent can override it during the Phase 2 review, and the override is what
          appears on the record.
        </p>
      </div>
    </Modal>
  );
}
