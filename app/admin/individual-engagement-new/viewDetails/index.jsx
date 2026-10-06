"use client";

import React from "react";
import { Modal, Tag, Button, Tabs, Dropdown, Space, Tooltip } from "antd";
import {
  FilePdfOutlined,
  FileImageOutlined,
  FileTextOutlined,
  EditOutlined,
  DownOutlined,
  CopyOutlined,
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  ProfileOutlined,
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  BankOutlined,
  DollarOutlined,
  ShopOutlined,
  SafetyCertificateOutlined,
  IdcardOutlined,
  FolderOpenOutlined,
  SignatureOutlined,
  AuditOutlined,
  ExportOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { getFileUrl, antdMsg } from "@/services";
import styles from "./ViewDetails.module.css";

/**
 * ============================================================================
 * Individual Engagement View Details Modal (`viewDetails/index.jsx`)
 * ============================================================================
 *
 * Read-only view of a full individual client engagement:
 * - Header: client identity, copyable reference, status / risk / submitted date.
 * - Quick facts: email, mobile, residency, services at a glance.
 * - Tabs: Overview · Tax Profile · Documents · Tax Agent Review.
 * - Footer: Close · PDF split-button (all official PDFs) · Review & Decision.
 * Empty fields and empty sections are hidden; only the masked TFN is shown.
 */

// ----------------------------------------------------------------------------
// VALUE HELPERS
// ----------------------------------------------------------------------------
const isEmpty = (v) =>
  v === null || v === undefined || v === "" || v === false || (Array.isArray(v) && v.length === 0);

const parseJson = (val) => {
  if (!val) return null;
  if (typeof val === "object") return val;
  if (typeof val !== "string" || !/^[[{]/.test(val.trim())) return null;
  try {
    return JSON.parse(val);
  } catch {
    return null;
  }
};

const formatDate = (val, withTime = false) => {
  if (!val) return null;
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return String(val);
  return withTime
    ? d.toLocaleString("en-AU", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })
    : d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
};

const yesNo = (val) => {
  if (val === null || val === undefined || val === "") return null;
  if (val === true || val === 1 || val === "1") return "Yes";
  if (val === false || val === 0 || val === "0") return "No";
  return String(val);
};

const toList = (val) => {
  const parsed = Array.isArray(val) ? val : parseJson(val);
  if (!Array.isArray(parsed)) return [];
  return parsed
    .filter((v) => !isEmpty(v))
    .map((v) => (typeof v === "object" ? Object.values(v).filter(Boolean).join(" ") : String(v)));
};

const tagList = (val) => {
  const items = toList(val);
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((v, i) => (
        <Tag key={i} className="!m-0 !rounded-md !border-slate-200 !bg-slate-50 dark:!border-zinc-700 dark:!bg-zinc-800">
          {v}
        </Tag>
      ))}
    </div>
  );
};

const textValue = (val) => {
  const parsed = parseJson(val);
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    return Object.values(parsed).filter((v) => !isEmpty(v)).join(", ") || null;
  }
  return isEmpty(val) ? null : String(val);
};

const maskAccount = (val) => {
  if (isEmpty(val)) return null;
  const s = String(val).replace(/\s/g, "");
  return s.length > 3 ? `${"•".repeat(s.length - 3)}${s.slice(-3)}` : s;
};

const STATUS_COLORS = {
  Accepted: "success",
  "Conditional Accept": "processing",
  "Request Information": "purple",
  "Enhanced Monitoring": "cyan",
  Escalate: "volcano",
  Declined: "error",
};
const statusColor = (status) => STATUS_COLORS[status] || "warning";

const riskColor = (risk) => {
  const r = String(risk || "").toLowerCase();
  if (r.includes("high")) return "error";
  if (r.includes("medium")) return "warning";
  return "success";
};

const initialsOf = (name) =>
  String(name || "")
    .split(/\s+/)
    .filter((p) => /^[a-z]/i.test(p))
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("") || "IE";

const fileIcon = (path) => {
  const p = String(path || "").toLowerCase();
  if (p.endsWith(".pdf")) return <FilePdfOutlined className="text-red-500" />;
  if (/\.(png|jpe?g|gif|webp|heic)$/.test(p)) return <FileImageOutlined className="text-sky-500" />;
  return <FileTextOutlined className="text-slate-500" />;
};

// ----------------------------------------------------------------------------
// PRESENTATIONAL BUILDING BLOCKS
// ----------------------------------------------------------------------------

/** Titled card with a responsive label/value grid. Hidden when nothing to show. */
function Section({ icon, title, fields = [], children }) {
  const visible = fields.filter(([, value]) => !isEmpty(value));
  if (!visible.length && !children) return null;

  return (
    <section className={`${styles.section} overflow-hidden`}>
      <header className={`${styles.sectionHeader} flex items-center gap-2 px-4 py-2.5`}>
        <span className="text-brand-primary dark:text-emerald-400">{icon}</span>
        <h4 className="m-0 text-[13px] font-semibold text-slate-800 dark:text-zinc-100">{title}</h4>
      </header>
      {visible.length > 0 && (
        <dl className="m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 p-4">
          {visible.map(([label, value, full]) => (
            <div key={label} className={`min-w-0 ${full ? "sm:col-span-2 lg:col-span-3" : ""}`}>
              <dt className={styles.fieldLabel}>{label}</dt>
              <dd className="m-0 mt-1 text-[13px] leading-relaxed text-slate-800 dark:text-zinc-100 break-words">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {children && <div className="p-4 pt-3">{children}</div>}
    </section>
  );
}

/** Quick-glance fact card under the header. */
function Fact({ icon, label, value, href }) {
  if (isEmpty(value)) return null;
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary-soft text-brand-primary dark:bg-emerald-950/50 dark:text-emerald-400">
        {icon}
      </span>
      <span className="min-w-0">
        <span className={`${styles.fieldLabel} block`}>{label}</span>
        <span className="block truncate text-[13px] font-medium text-slate-800 dark:text-zinc-100">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className={`${styles.fact} flex items-center gap-3 px-3 py-2.5 min-w-0 hover:!border-brand-primary/40`}>
      {content}
    </a>
  ) : (
    <div className={`${styles.fact} flex items-center gap-3 px-3 py-2.5 min-w-0`}>{content}</div>
  );
}

/** Clickable file tile (opens in a new tab). */
function FileTile({ icon, title, subtitle, url }) {
  return (
    <a
      href={getFileUrl(url)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.tile} flex items-center gap-3 px-3 py-3 min-w-0`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-zinc-800 text-lg">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-slate-800 dark:text-zinc-100">{title}</span>
        {subtitle && <span className="block truncate text-[11px] text-slate-500 dark:text-zinc-400">{subtitle}</span>}
      </span>
      <ExportOutlined className={`${styles.tileAction} text-brand-primary dark:text-emerald-400`} />
    </a>
  );
}

function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center">
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-zinc-800 text-xl text-slate-400 dark:text-zinc-500">
        {icon}
      </span>
      <p className="m-0 text-[14px] font-semibold text-slate-800 dark:text-zinc-100">{title}</p>
      {description && <p className="m-0 mt-1 max-w-sm text-[12px] text-slate-500 dark:text-zinc-400">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

const tabLabel = (icon, text, count, pending = false) => (
  <span className="flex items-center gap-1.5 text-[13px] font-medium">
    {icon}
    {text}
    {typeof count === "number" && (
      <span className="rounded-pill bg-slate-100 dark:bg-zinc-800 px-1.5 font-mono text-[10px] text-slate-500 dark:text-zinc-400">
        {count}
      </span>
    )}
    {pending && (
      <span className="rounded-pill bg-amber-50 px-1.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
        Pending
      </span>
    )}
  </span>
);

// ============================================================================
// MODAL
// ============================================================================
export default function IndividualEngagementViewDetails({ visible, data, onClose, onReview }) {
  if (!data) return null;

  const client = data.client || {};
  const identity = data.identity || {};
  const review = data.adminReview || null;
  const reference = data.referenceNumber || `IE-${data.id}`;
  const clientName =
    client.fullName || [client.firstName, client.lastName].filter(Boolean).join(" ") || "Individual Engagement";
  const services = (data.services || []).map((s) => s.serviceName).filter(Boolean);

  // Official generated PDFs
  const pdfs = [
    { key: "client", label: "Client Engagement", description: "Client-signed engagement & application", url: data.clientPdfPath },
    { key: "admin", label: "Admin Review Package", description: "Tax agent review & compliance checks", url: data.adminPdfPath },
    { key: "acceptance", label: "Acceptance Certificate", description: "Engagement acceptance confirmation", url: data.acceptancePdfPath },
    { key: "audit", label: "Compliance Audit Report", description: "Full activity & audit trail", url: data.auditPdfPath },
  ].filter((p) => p.url);

  // Uploaded documents + identity files, de-duplicated by path
  const documents = [
    ...(Array.isArray(data.documents) ? data.documents : []),
    identity.primaryIdPath && { documentCategory: "Primary ID", fileName: identity.primaryIdType || "Primary photo ID", filePath: identity.primaryIdPath },
    identity.primaryIdBackPath && { documentCategory: "Primary ID (back)", fileName: identity.primaryIdType || "Primary photo ID", filePath: identity.primaryIdBackPath },
    identity.supportingIdPath && { documentCategory: "Supporting ID", fileName: identity.supportingIdType || "Supporting ID", filePath: identity.supportingIdPath },
    identity.supportingIdBackPath && { documentCategory: "Supporting ID (back)", fileName: identity.supportingIdType || "Supporting ID", filePath: identity.supportingIdBackPath },
    identity.selfiePath && { documentCategory: "Selfie", fileName: "Biometric selfie photo", filePath: identity.selfiePath },
  ].filter((doc, idx, all) => doc?.filePath && all.findIndex((d) => d?.filePath === doc.filePath) === idx);

  const copyReference = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      antdMsg.success("Reference copied");
    } catch {
      antdMsg.error("Could not copy the reference");
    }
  };

  const openPdf = (url) => window.open(getFileUrl(url), "_blank", "noopener,noreferrer");

  // --------------------------------------------------------------------------
  // TAB CONTENT
  // --------------------------------------------------------------------------
  const overviewTab = (
    <div className="space-y-4">
      <Section
        icon={<UserOutlined />}
        title="Client Details"
        fields={[
          ["Full Name", clientName],
          ["Date of Birth", formatDate(client.dateOfBirth)],
          ["Occupation", client.occupation],
          ["Employment Status", client.employmentStatus],
          ["TFN", client.maskedTfn && <span className="font-mono">{client.maskedTfn}</span>],
          ["TFN Status", data.tfnStatus],
          ["TFN Explanation", data.tfnExplanation, true],
          ["Country of Birth", client.birthCountry],
          ["City of Birth", client.birthCity],
          ["Previous Names", data.hasPreviousName === "Yes" ? data.previousNames || "Yes" : null],
          ["About the Client", client.about, true],
        ]}
      />
      <Section
        icon={<TeamOutlined />}
        title="Residency & Family"
        fields={[
          ["Tax Residency", data.taxResidency],
          ["Australian Citizen", yesNo(data.isAustralianCitizen)],
          ["Citizenship Country", data.citizenshipCountry],
          ["Visa Status", data.visaStatus],
          ["Visa Subclass", data.visaSubclass],
          ["Visa Expiry", formatDate(data.visaExpiry)],
          ["Arrival Date", formatDate(data.arrivalDate)],
          ["Foreign Country", data.foreignCountry],
          ["Foreign Income Info", data.foreignInfo, true],
          ["Has Spouse", data.hasSpouse],
          ["Spouse Name", data.spouseName],
          ["Spouse DOB", formatDate(data.spouseDob)],
          ["Spouse Income", data.spouseIncome],
          ["Prepare Spouse Return", data.hasSpouse === "Yes" ? data.prepareSpouseReturn : null],
          ["Dependants", data.hasDependants === "Yes" ? `Yes (${data.dependantCount || 0})` : data.hasDependants],
        ]}
      />
      <Section
        icon={<HomeOutlined />}
        title="Addresses"
        fields={[
          ["Residential Address", textValue(data.address), true],
          ["Postal Address", textValue(data.postalAddress), true],
        ]}
      />
      <Section
        icon={<BankOutlined />}
        title="Representative & Banking"
        fields={[
          ["Lodging On Own Behalf", data.isSelf],
          ["Representative", data.repName],
          ["Relationship", data.relationship],
          ["Authority", data.authorityDesc, true],
          ["Refund Bank Account", data.needBank === "Yes" ? "Required" : data.needBank],
          ["Account Name", data.accountName],
          ["BSB", data.bsb && <span className="font-mono">{data.bsb}</span>],
          ["Account Number", data.accountNumber && <span className="font-mono">{maskAccount(data.accountNumber)}</span>],
        ]}
      />
    </div>
  );

  const taxTab = (
    <div className="space-y-4">
      <Section
        icon={<DollarOutlined />}
        title="Income & Tax Profile"
        fields={[
          ["Services Requested", tagList(services), true],
          ["Income Activities", tagList(data.incomeActivities), true],
          ["BAS Scope", data.basScope],
          ["Records Complete", data.recordsComplete],
          ["Records Maintained By", data.recordsMaintainedBy],
          ["Previous Accountant", data.hadPreviousAccountant],
          ["Previous Firm", data.previousFirm],
          ["Reason for Change", data.reasonForChange],
          ["Authorise Previous Advisor", data.authorisePreviousAdvisor],
          ["ATO Issues", data.atoIssues],
          ["Notice Date", formatDate(data.noticeDate)],
          ["Due Date", formatDate(data.dueDate)],
          ["ATO Explanation", data.atoExplanation, true],
        ]}
      />
      <Section
        icon={<ShopOutlined />}
        title="Sole Trader / BAS / GST"
        fields={[
          ["Existing ABN", data.existingAbn && <span className="font-mono">{data.existingAbn}</span>],
          ["ABN Status", data.abnStatus],
          ["Business Activity", data.businessActivity],
          ["Business Start Date", formatDate(data.businessStartDate)],
          ["Business Location", data.businessLocation],
          ["Expected Turnover", data.expectedTurnover],
          ["BAS Period", data.basPeriod],
          ["Reporting Frequency", data.reportingFrequency],
          ["GST Status", data.gstStatus],
          ["GST ABN", data.gstAbn && <span className="font-mono">{data.gstAbn}</span>],
          ["GST Effective Date", formatDate(data.gstEffectiveDate)],
          ["GST Turnover", data.gstTurnover],
          ["Accounting Method", data.accountingMethod],
          ["Overdue BAS", data.existingAbn ? data.overdueBas : null],
          ["Has Payroll", data.existingAbn ? data.hasPayroll : null],
        ]}
      />
    </div>
  );

  const signatures = data.signatures || [];
  const documentsTab = (
    <div className="space-y-4">
      {pdfs.length > 0 && (
        <Section icon={<FilePdfOutlined />} title="Official PDFs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pdfs.map((pdf) => (
              <FileTile
                key={pdf.key}
                icon={<FilePdfOutlined className="text-red-500" />}
                title={pdf.label}
                subtitle={pdf.description}
                url={pdf.url}
              />
            ))}
          </div>
        </Section>
      )}

      <Section
        icon={<IdcardOutlined />}
        title="Identity Verification"
        fields={[
          ["Verification Method", identity.identityMethod],
          [
            "DVS Status",
            identity.dvsStatus && (
              <Tag color={identity.dvsStatus === "Verified" ? "success" : "warning"} className="!m-0">
                {identity.dvsStatus}
              </Tag>
            ),
          ],
          ["Primary ID Type", identity.primaryIdType],
          ["Supporting ID Type", identity.supportingIdType],
          ["Biometric Consent", identity.selfiePath ? yesNo(identity.biometricConsent) : null],
          ["No Photo ID Reason", identity.noPhotoIdReason, true],
        ]}
      />

      {documents.length > 0 && (
        <Section icon={<FolderOpenOutlined />} title={`Uploaded Documents (${documents.length})`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {documents.map((doc) => (
              <FileTile
                key={doc.filePath}
                icon={fileIcon(doc.filePath)}
                title={doc.documentCategory || "Document"}
                subtitle={doc.fileName}
                url={doc.filePath}
              />
            ))}
          </div>
        </Section>
      )}

      {signatures.length > 0 && (
        <Section icon={<SignatureOutlined />} title="Signatures">
          <ul className="m-0 p-0 list-none divide-y divide-slate-100 dark:divide-zinc-800">
            {signatures.map((sig) => (
              <li key={sig.id} className="flex flex-wrap items-center justify-between gap-2 py-2 first:pt-0 last:pb-0">
                <span className="flex items-center gap-2 text-[13px]">
                  <Tag className="!m-0" color={sig.signerType === "TaxAgent" ? "blue" : "green"}>
                    {sig.signerType === "TaxAgent" ? "Tax Agent" : "Client"}
                  </Tag>
                  <span className="font-medium text-slate-800 dark:text-zinc-100">{sig.signerFullName || "—"}</span>
                  {sig.signatureMethod && (
                    <span className="text-slate-400 dark:text-zinc-500 capitalize">· {sig.signatureMethod}</span>
                  )}
                </span>
                <span className="text-[12px] text-slate-500 dark:text-zinc-400">{formatDate(sig.createdAt, true)}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {!pdfs.length && !documents.length && !signatures.length && !identity.identityMethod && (
        <EmptyState icon={<FolderOpenOutlined />} title="No documents yet" description="Nothing has been uploaded or generated for this engagement." />
      )}
    </div>
  );

  const reviewTab = review ? (
    <div className="space-y-4">
      <Section
        icon={<AuditOutlined />}
        title="Decision"
        fields={[
          ["Decision", review.decision && <Tag color={statusColor(review.decision)} className="!m-0 font-semibold">{review.decision}</Tag>],
          ["Reviewer", [review.reviewerName, review.userRole && `(${review.userRole})`].filter(Boolean).join(" ")],
          ["Reviewed", formatDate(review.createdAt, true)],
          ["Risk Level", review.riskLevel && <Tag color={riskColor(review.riskLevel)} className="!m-0">{review.riskLevel}</Tag>],
          ["Risk Rationale", review.riskRationale, true],
          ["Checklist", tagList(review.checklistItems), true],
          ["Review Notes", review.reviewNotes, true],
        ]}
      />
      <Section
        icon={<SafetyCertificateOutlined />}
        title="AML / CTF & Sanctions Checks"
        fields={[
          ["Designated Service", review.amlDesignatedServiceInvolved],
          ["Beneficial Ownership Verified", review.amlBeneficialOwnershipVerified],
          ["Source of Funds Recorded", review.amlSourceOfFundsRecorded],
          ["Escalation Required", review.amlEscalationRequired],
          ["Overseas Activity", review.sanctionsOverseasActivityCheck],
          ["High-Risk Jurisdiction", review.sanctionsHighRiskJurisdictionCheck],
          ["Sanctions Name Match", review.sanctionsNameMatchCheck],
        ]}
      />
    </div>
  ) : (
    <EmptyState
      icon={<ClockCircleOutlined />}
      title="Awaiting tax agent review"
      description="No decision has been recorded for this engagement yet."
      action={
        typeof onReview === "function" && (
          <Button type="primary" icon={<EditOutlined />} onClick={() => onReview(data)} className="!bg-brand-primary">
            Start Review &amp; Decision
          </Button>
        )
      }
    />
  );

  // --------------------------------------------------------------------------
  // FOOTER: Close · PDF split-button · Review & Decision (primary)
  // --------------------------------------------------------------------------
  const [mainPdf, ...otherPdfs] = pdfs;
  const footer = (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <span className="hidden sm:flex items-center gap-1.5 text-[12px] text-slate-400 dark:text-zinc-500">
        <ClockCircleOutlined />
        Last updated {formatDate(data.updatedAt || data.createdAt, true)}
      </span>
      <div className="flex flex-wrap items-center gap-2 ml-auto">
        <Button onClick={onClose}>Close</Button>

        {mainPdf && (
          <Space.Compact>
            <Button icon={<FilePdfOutlined className="text-red-500" />} onClick={() => openPdf(mainPdf.url)}>
              {mainPdf.label} PDF
            </Button>
            {otherPdfs.length > 0 && (
              <Dropdown
                trigger={["click"]}
                placement="topRight"
                menu={{
                  items: otherPdfs.map((pdf) => ({
                    key: pdf.key,
                    icon: <FilePdfOutlined className="text-red-500" />,
                    label: pdf.label,
                    onClick: () => openPdf(pdf.url),
                  })),
                }}
              >
                <Tooltip title={`${otherPdfs.length} more PDF${otherPdfs.length === 1 ? "" : "s"}`}>
                  <Button icon={<DownOutlined className="text-[10px]" />} aria-label="More PDFs" />
                </Tooltip>
              </Dropdown>
            )}
          </Space.Compact>
        )}

        {typeof onReview === "function" && (
          <Button type="primary" icon={<EditOutlined />} onClick={() => onReview(data)} className="!bg-brand-primary">
            Review &amp; Decision
          </Button>
        )}
      </div>
    </div>
  );

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      centered
      width={1000}
      footer={footer}
      destroyOnHidden
      rootClassName={styles.modal}
      title={
        <div className="flex items-start gap-4 pr-8">
          <span className={`${styles.avatar} flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white`}>
            {initialsOf(clientName)}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="m-0 truncate text-[18px] font-bold leading-tight text-slate-900 dark:text-zinc-50">{clientName}</h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-normal">
              <button
                type="button"
                onClick={copyReference}
                title="Copy reference"
                className="group flex items-center gap-1.5 rounded-md bg-white/80 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:text-zinc-300 hover:border-brand-primary/40 cursor-pointer"
              >
                {reference}
                <CopyOutlined className="text-slate-400 group-hover:text-brand-primary" />
              </button>
              <Tag color={statusColor(data.status)} className="!m-0 font-semibold">
                {data.status || "Pending Review"}
              </Tag>
              {data.riskLevel && (
                <Tag color={riskColor(data.riskLevel)} className="!m-0">
                  {data.riskLevel} risk
                </Tag>
              )}
              <span className="flex items-center gap-1 text-slate-500 dark:text-zinc-400">
                <CalendarOutlined /> Submitted {formatDate(data.submittedAt || data.createdAt, true)}
              </span>
            </div>
          </div>
        </div>
      }
    >
      <div className={`${styles.body} modal-flush`}>
        {/* Quick facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-6 pt-5">
          <Fact icon={<MailOutlined />} label="Email" value={client.email} href={client.email && `mailto:${client.email}`} />
          <Fact
            icon={<PhoneOutlined />}
            label="Mobile"
            value={client.mobile}
            href={client.mobile && `tel:${String(client.mobile).replace(/\s/g, "")}`}
          />
          <Fact icon={<GlobalOutlined />} label="Tax Residency" value={data.taxResidency} />
          <Fact
            icon={<ProfileOutlined />}
            label={`Services (${services.length})`}
            value={services.length ? services.join(", ") : null}
          />
        </div>

        {data.riskNotes && (
          <div className="mx-6 mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-300">
            <SafetyCertificateOutlined className="mt-0.5" />
            <span>
              <strong>Risk notes:</strong> {data.riskNotes}
            </span>
          </div>
        )}

        <Tabs
          className="mt-3"
          defaultActiveKey="overview"
          tabBarStyle={{ padding: "0 24px" }}
          items={[
            { key: "overview", label: tabLabel(<UserOutlined />, "Overview"), children: <div className="px-6 pb-6">{overviewTab}</div> },
            { key: "tax", label: tabLabel(<DollarOutlined />, "Tax Profile"), children: <div className="px-6 pb-6">{taxTab}</div> },
            {
              key: "documents",
              label: tabLabel(<FolderOpenOutlined />, "Documents", pdfs.length + documents.length),
              children: <div className="px-6 pb-6">{documentsTab}</div>,
            },
            {
              key: "review",
              label: tabLabel(<AuditOutlined />, "Tax Agent Review", undefined, !review),
              children: <div className="px-6 pb-6">{reviewTab}</div>,
            },
          ]}
        />
      </div>
    </Modal>
  );
}
