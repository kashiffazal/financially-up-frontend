"use client";

import React, { useEffect, useState } from "react";
import { Modal, Tag, Button, Tabs, Spin } from "antd";
import {
  BankOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  EnvironmentOutlined,
  ApartmentOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  FilePdfOutlined,
  AuditOutlined,
  ClockCircleOutlined,
  ProfileOutlined,
  IdcardOutlined,
  DollarOutlined,
  SolutionOutlined,
  CheckSquareOutlined,
  SignatureOutlined,
} from "@ant-design/icons";
import { HTTP, getFileUrl } from "@/services";
import {
  styles,
  isEmpty,
  parseJson,
  formatDate,
  yesNo,
  tagList,
  riskColor,
  fileIcon,
  Section,
  Fact,
  FileTile,
  EmptyState,
  tabLabel,
  DetailsHeader,
  PdfSplitButton,
} from "@/components/admin/ViewDetailsKit";

/**
 * ============================================================================
 * Company Registration View Details Modal (`viewDetails.js`)
 * ============================================================================
 * Same design as the Individual Engagement modal (components/admin/ViewDetailsKit):
 * - Header: company name, copyable reference, status / urgency, submitted date.
 * - Quick facts: contact, email, mobile, state.
 * - Tabs: Overview · Addresses · People & Shares · Compliance · Documents & PDFs · Review.
 * - Footer: Close · PDF split-button (all official PDFs) · Review & Decision.
 * The full record (people, documents, consents, PDFs) is loaded when it opens.
 */

const STATUS_COLORS = {
  Submitted: "warning",
  "Under Review": "processing",
  "Pending Documents": "purple",
  Approved: "success",
  "Approved With Conditions": "cyan",
  "On Hold": "orange",
  "Lodged with ASIC": "geekblue",
  Declined: "error",
  Trash: "error",
};
const statusColor = (status) => STATUS_COLORS[status] || "default";

// Wording the client answered (same as the Client Application PDF)
const CONTROL_QUESTIONS = {
  controlQ1:
    "Is there any shareholder agreement, side agreement, loan agreement or informal arrangement that changes who controls the company?",
  controlQ2:
    "Can any person appoint/remove directors, veto decisions or control voting, even if they own less than 25%?",
  controlQ3:
    "Is any person funding the company but not listed as a shareholder or director?",
  controlQ4: "Is any person acting under instructions from another person?",
  controlQ5:
    "Is any ownership held through a trust, foreign company, family member, nominee or associate?",
  controlQ6:
    "Is any beneficial owner, controller, director, nominator or instructing person located outside Australia?",
};
const CDD_QUESTIONS = [
  "Commercial Rationale: What is the commercial purpose for creating this company now?",
  "Counterparties: Describe expected customers, suppliers, assets, and countries connected.",
  "Products & Services: What specific products or services will the company provide?",
  "Will the company receive or send international cross-border payments?",
  "Will the company deal with cash, high-value goods, crypto/virtual assets, remittance, gambling, loans, or import/export?",
  "Will any director, shareholder, or controller be a Politically Exposed Person (PEP) or close associate?",
  "Is any director, shareholder, or controller subject to sanctions, adverse media, or bankruptcy restrictions?",
  "Will the company use third-party funds, loans, gifts, or offshore funding?",
  "Has the client been asked or instructed to create this company by another person?",
  "Is the structure intended to conceal ownership, hold assets for others, or separate legal from beneficial ownership?",
];
const DECLARATIONS = [
  "The information in this form is true, complete and not misleading.",
  "Authorises the firm to assess AML/CTF risk, complete CDD, and prepare/lodge company registration documentation.",
  "All proposed directors, secretaries and members have consented or will sign consents before lodgement.",
  "All beneficial owners and ultimate controllers have been disclosed.",
  "The firm may request further information, decline/suspend the matter, or report to AUSTRAC if required by law.",
  "The firm cannot provide legal advice and may recommend independent legal advice for complex structures.",
];

const joinAddress = (...parts) =>
  parts.filter((p) => !isEmpty(p)).join(", ") || null;
const money = (v) =>
  isEmpty(v)
    ? null
    : `$${Number(v).toLocaleString("en-AU", { minimumFractionDigits: 2 })}`;
const answerWithDetail = (answer, detail) =>
  isEmpty(answer) ? null : (
    <span>
      <strong>{yesNo(answer)}</strong>
      {!isEmpty(detail) && (
        <span className="text-slate-600 dark:text-zinc-300"> - {detail}</span>
      )}
    </span>
  );

export default function CompanyRegistrationViewDetails({
  visible,
  data,
  onClose,
  onReview,
}) {
  // Full record (people, documents, consents, PDFs) - the list row is shown meanwhile
  const [full, setFull] = useState(null);
  const [loadingFull, setLoadingFull] = useState(false);
  const id = visible ? data?.id : null;

  useEffect(() => {
    if (!id) return undefined;
    let active = true;
    Promise.resolve().then(() => active && setLoadingFull(true));
    HTTP(
      "GET",
      `/new-company-registrations/${id}`,
      undefined,
      false,
      true,
    ).then((res) => {
      if (!active) return;
      setFull(res?.success ? res.data : null);
      setLoadingFull(false);
    });
    return () => {
      active = false;
    };
  }, [id]);

  if (!data) return null;
  const reg = full && full.id === data.id ? { ...data, ...full } : data;

  const officeholders = reg.officeholders || [];
  const shareholders = reg.shareholders || [];
  const owners = reg.beneficialOwners || [];
  const review = reg.adminReview || null;
  const reference = reg.referenceNumber || `CREG-${reg.id}`;
  const companyName = reg.companyName1 || "Company Registration";
  const controlAnswers = parseJson(reg.controlAnswers) || {};

  // Official PDFs: client application, acceptance, admin review, latest consent per person
  const consentPdfs = [];
  const seen = new Set();
  [...(reg.pdfs || [])].reverse().forEach((pdf) => {
    if (!["DirectorConsent", "MemberConsent"].includes(pdf.type)) return;
    const key = `${pdf.type}|${pdf.personName}`;
    if (seen.has(key)) return;
    seen.add(key);
    consentPdfs.unshift({
      key,
      label: `${pdf.type === "DirectorConsent" ? "Director" : "Member"} Consent - ${pdf.personName}`,
      description:
        pdf.type === "DirectorConsent"
          ? "Consent to act as director / secretary"
          : "Consent to become a member",
      url: pdf.filePath,
    });
  });
  (reg.consentPdfs || []).forEach((pdf) => {
    const key = `${pdf.type}|${pdf.personName}`;
    if (seen.has(key)) return;
    seen.add(key);
    consentPdfs.push({
      key,
      label: `${pdf.type === "DirectorConsent" ? "Director" : "Member"} Consent - ${pdf.personName}`,
      url: pdf.filePath,
    });
  });
  const pdfs = [
    {
      key: "client",
      label: "Client Application",
      description: "Client-signed company application",
      url: reg.clientPdfPath,
    },
    {
      key: "acceptance",
      label: "Notice of Acceptance",
      description: "Signed by the client and the reviewer",
      url: reg.acceptancePdfPath,
    },
    {
      key: "admin",
      label: "Admin Compliance Review",
      description: "Reviewer assessment & checks",
      url: reg.adminPdfPath,
    },
    ...consentPdfs,
  ].filter((p) => p.url);

  // Uploaded files: documents + officeholder IDs + corporate member extracts (de-duplicated)
  const files = [
    ...(reg.documents || []).map((d) => ({
      title: d.documentType || "Document",
      subtitle: d.fileName,
      url: d.filePath,
    })),
    ...officeholders.flatMap((oh) => [
      oh.idDocFilePath && {
        title: `${oh.fullName} - ID (front)`,
        subtitle: oh.idDocType,
        url: oh.idDocFilePath,
      },
      oh.idDocBackFilePath && {
        title: `${oh.fullName} - ID (back)`,
        subtitle: oh.idDocType,
        url: oh.idDocBackFilePath,
      },
    ]),
    ...shareholders.map(
      (sh) =>
        sh.extractFilePath && {
          title: `${sh.fullName} - corporate extract`,
          subtitle: sh.memberType,
          url: sh.extractFilePath,
        },
    ),
  ].filter(
    (f, i, all) => f?.url && all.findIndex((x) => x?.url === f.url) === i,
  );

  // --------------------------------------------------------------------------
  // TABS
  // --------------------------------------------------------------------------
  const overviewTab = (
    <div className="space-y-4">
      <Section
        icon={<ProfileOutlined />}
        title="Application"
        fields={[
          ["Primary Service", reg.primaryService],
          ["Additional Services", tagList(reg.additionalServices)],
          ["Date Requested", formatDate(reg.dateServiceRequested)],
          ["Urgent", reg.isUrgent ? "Yes" : null],
          ["Urgency", reg.urgencyExplanation, true],
          [
            "Previous Refusal",
            answerWithDetail(reg.previousRefusal, reg.previousRefusalDetails),
            true,
          ],
        ]}
      />
      <Section
        icon={<BankOutlined />}
        title="Proposed Company"
        fields={[
          [
            "1st Choice Name",
            reg.companyName1 && (
              <strong className="text-brand-primary dark:text-emerald-400">
                {reg.companyName1}
              </strong>
            ),
          ],
          ["2nd Choice Name", reg.companyName2],
          ["3rd Choice Name", reg.companyName3],
          [
            "Use ACN as Name",
            reg.useAcnAsName ? yesNo(reg.useAcnAsName) : null,
          ],
          [
            "Name Reserved",
            reg.isNameReserved ? yesNo(reg.isNameReserved) : null,
          ],
          ["Reservation Number", reg.reservationNumber],
          ["Reservation Date", formatDate(reg.reservationDate)],
          ["Reserved By", reg.reservationApplicant],
          ["Company Type", reg.companyType],
          ["Special Purpose", reg.specialPurposeDetail],
          [
            "State of Registration",
            reg.jurisdictionState || reg.stateOfRegistration,
          ],
          [
            "Company Purpose",
            reg.companyPurpose === "Other"
              ? reg.otherPurposeDetail || "Other"
              : reg.companyPurpose,
          ],
          ["Main Business Activity", reg.mainBusinessActivity, true],
          ["ANZSIC Description", reg.anzsicDescription],
          ["Trading Name", reg.tradingNameChoice],
          ["Proposed Business Name", reg.proposedBusinessName],
          ["Commencement Date", formatDate(reg.commencementDate)],
          ["Governance Document", reg.governanceDocument],
          [
            "Part of a Group",
            reg.isPartOfGroup ? yesNo(reg.isPartOfGroup) : null,
          ],
          ["Group Description", reg.groupDescription, true],
          [
            "Ultimate Holding Company",
            joinAddress(
              reg.ultimateHoldingName,
              reg.ultimateHoldingAcn && `ACN ${reg.ultimateHoldingAcn}`,
              reg.ultimateHoldingCountry,
            ),
          ],
          ["Special Instructions", reg.specialInstructions, true],
        ]}
      />
      <Section
        icon={<UserOutlined />}
        title="Contact Person"
        fields={[
          ["Full Name", reg.contactName],
          [
            "Email",
            reg.contactEmail && (
              <a href={`mailto:${reg.contactEmail}`}>{reg.contactEmail}</a>
            ),
          ],
          ["Mobile", reg.contactMobile],
          [
            "Relationship",
            reg.contactRelationship === "Other"
              ? reg.otherRelationshipDetail || "Other"
              : reg.contactRelationship,
          ],
          ["Authority", reg.authorityDescription, true],
        ]}
      />
    </div>
  );

  const addressesTab = (
    <div className="space-y-4">
      <Section
        icon={<EnvironmentOutlined />}
        title="Registered Office"
        fields={[
          [
            "Address",
            joinAddress(
              reg.regOfficeHouseNumber,
              reg.regOfficeStreet,
              reg.regOfficeSuburb,
              reg.regOfficeState,
              reg.regOfficePostcode,
            ),
            true,
          ],
          [
            "Company Occupies the Premises",
            reg.companyOccupiesRegisteredOffice,
          ],
          ["Occupier Name", reg.occupierName],
        ]}
      />
      <Section
        icon={<EnvironmentOutlined />}
        title="Principal Place of Business"
        fields={[
          [
            "Same as Registered Office",
            reg.samePrincipalAddress ? yesNo(reg.samePrincipalAddress) : null,
          ],
          [
            "Address",
            joinAddress(
              reg.ppobHouseNumber,
              reg.ppobStreet,
              reg.ppobSuburb,
              reg.ppobState,
              reg.ppobPostcode,
            ),
            true,
          ],
        ]}
      />
      <Section
        icon={<SolutionOutlined />}
        title="Address Service"
        fields={[
          [
            "Registered Office Address Service",
            reg.provideRegisteredOfficeAddress
              ? yesNo(reg.provideRegisteredOfficeAddress)
              : null,
          ],
          [
            "Principal Place Address Service",
            reg.providePrincipalPlaceAddress
              ? yesNo(reg.providePrincipalPlaceAddress)
              : null,
          ],
          ["Commercial Reason", reg.addressServiceCommercialReason, true],
          ["Authorised Recipient", reg.authorisedRecipientName],
          ["Recipient Email", reg.authorisedRecipientEmail],
          ["Recipient Phone", reg.authorisedRecipientPhone],
          [
            "Service Terms Accepted",
            reg.addressServiceAccepted
              ? yesNo(reg.addressServiceAccepted)
              : null,
          ],
        ]}
      />
    </div>
  );

  const peopleTab = (
    <div className="space-y-4">
      {officeholders.map((oh, i) => (
        <Section
          key={`oh-${oh.id || i}`}
          icon={<IdcardOutlined />}
          title={`Officeholder ${i + 1}: ${oh.fullName || "-"}${oh.role ? ` (${oh.role})` : ""}`}
          fields={[
            ["Full Name", oh.fullName],
            ["Former Names", oh.formerNames],
            ["Date of Birth", formatDate(oh.dob)],
            [
              "Place of Birth",
              joinAddress(oh.birthCity, oh.birthState, oh.birthCountry),
            ],
            ["Email", oh.email],
            ["Mobile", oh.mobile],
            ["Occupation", oh.occupation],
            ["Citizenship", oh.citizenship],
            ["Tax Residence", oh.taxResidence],
            [
              "Australian Resident Director",
              oh.isAustralianResidentDirector
                ? yesNo(oh.isAustralianResidentDirector)
                : null,
            ],
            [
              "Director ID",
              joinAddress(oh.directorIdNumber, oh.directorIdStatus),
            ],
            ["ID Document", joinAddress(oh.idDocType, oh.idDocNumber)],
            ["PEP Status", oh.pepStatus],
            ["Sanctions Declaration", oh.sanctionsDeclaration],
            ["Source of Wealth", oh.sourceOfWealth, true],
            ["Residential Address", oh.residentialAddress, true],
            [
              "Consent",
              oh.consentAccepted
                ? `Accepted${oh.signatureDate ? ` · ${formatDate(oh.signatureDate)}` : ""}`
                : "Not given",
            ],
          ]}
        />
      ))}
      {shareholders.map((sh, i) => (
        <Section
          key={`sh-${sh.id || i}`}
          icon={<TeamOutlined />}
          title={`Shareholder ${i + 1}: ${sh.fullName || "-"}`}
          fields={[
            ["Member Type", sh.memberType],
            ["Share Class", sh.shareClass],
            ["Number of Shares", sh.numberOfShares],
            ["Amount Paid / Share", money(sh.amountPaidPerShare)],
            ["Amount Unpaid / Share", money(sh.amountUnpaidPerShare)],
            ["Beneficially Held", sh.isBeneficiallyHeld],
            ["Held For", sh.heldForWhom],
            ["Corporate Ownership Chain", sh.corporateOwnershipChain, true],
            ["Address", sh.address, true],
            ["Consent", sh.consentAccepted ? "Accepted" : "Not given"],
          ]}
        />
      ))}
      {owners.map((bo, i) => (
        <Section
          key={`bo-${bo.id || i}`}
          icon={<ApartmentOutlined />}
          title={`Beneficial Owner ${i + 1}: ${bo.fullName || "-"}`}
          fields={[
            ["Date of Birth", formatDate(bo.dob)],
            [
              "Ownership",
              isEmpty(bo.ownershipPercentage)
                ? null
                : `${bo.ownershipPercentage}%`,
            ],
            ["Holding Type", bo.holdingType],
            ["How Control is Held", bo.howControlIsHeld, true],
            ["Address", bo.address, true],
          ]}
        />
      ))}
      {!officeholders.length && !shareholders.length && !owners.length && (
        <EmptyState
          icon={<TeamOutlined />}
          title={loadingFull ? "Loading..." : "No people recorded"}
        />
      )}
    </div>
  );

  const complianceTab = (
    <div className="space-y-4">
      <Section
        icon={<ApartmentOutlined />}
        title="Ownership & Control"
        fields={Object.entries(CONTROL_QUESTIONS).map(([key, q]) => [
          q,
          yesNo(controlAnswers[key]),
          true,
        ])}
      />
      <Section
        icon={<SafetyCertificateOutlined />}
        title="Customer Due Diligence"
        fields={CDD_QUESTIONS.map((q, i) => [
          q,
          answerWithDetail(reg[`cddQ${i + 1}`], reg[`cddQ${i + 1}Detail`]),
          true,
        ])}
      />
      <Section
        icon={<DollarOutlined />}
        title="Funding & Source of Wealth"
        fields={[
          ["Initial Capital", money(reg.initialCapitalAmount)],
          ["Capital Paid By", reg.initialCapitalPaidBy],
          ["Capital Source", reg.initialCapitalSource],
          ["First 12 Months Funding", money(reg.first12MonthsFundingAmount)],
          ["Funding Source", reg.first12MonthsFundingSource],
          ["Funder", reg.first12MonthsFunderName],
          ["Origin Bank", reg.first12MonthsOriginBank],
          ["Source of Wealth", reg.sourceOfWealthSummary, true],
          [
            "Offshore Funding",
            answerWithDetail(
              reg.hasOffshoreFunding,
              joinAddress(
                reg.offshoreCountries,
                reg.offshoreBanks,
                reg.offshoreExplanation,
              ),
            ),
            true,
          ],
          [
            "Cash over $10,000",
            answerWithDetail(
              reg.hasCashOver10k,
              joinAddress(money(reg.cashAmount), reg.cashPayer, reg.cashReason),
            ),
            true,
          ],
        ]}
      />
      <Section
        icon={<SolutionOutlined />}
        title="Nominee & Trust Arrangements"
        fields={[
          [
            "Director Acting for Others",
            answerWithDetail(
              reg.isDirectorActingForOthers,
              reg.directorNominatorName,
            ),
          ],
          [
            "Nominee Shareholder",
            answerWithDetail(
              reg.isNomineeShareholder,
              joinAddress(reg.nomineeNominator, reg.nomineeBeneficialOwner),
            ),
          ],
          [
            "Trustee Involved",
            answerWithDetail(
              reg.isTrusteeInvolved,
              joinAddress(reg.trustName, reg.trustSettlor),
            ),
          ],
          [
            "Legal Advice",
            answerWithDetail(
              reg.hasLegalAdvice,
              joinAddress(reg.legalAdviserName, reg.legalAdviceSummary),
            ),
            true,
          ],
          [
            "Nominee Terms Accepted",
            reg.nomineeArrangementAccepted
              ? yesNo(reg.nomineeArrangementAccepted)
              : null,
          ],
        ]}
      />
      <Section
        icon={<ProfileOutlined />}
        title="Tax & Business Setup"
        fields={[
          ["ABN / TFN", reg.abnTfnRequired],
          ["GST Registration", reg.gstRegistrationRequired],
          ["Expected Turnover", reg.expectedTurnover],
          ["PAYG Withholding", reg.paygWithholdingRequired],
          ["Business Name Registration", reg.businessNameRegistrationRequired],
          ["Proposed Business Name", reg.proposedTaxBusinessName],
          ["Bank Account Assistance", reg.bankAccountAssistance],
          [
            "Accounting Software",
            reg.accountingSoftware === "Other"
              ? reg.otherAccountingSoftware || "Other"
              : reg.accountingSoftware,
          ],
          ["Registered Agent Support", reg.registeredAgentSupport],
        ]}
      />
      <Section
        icon={<CheckSquareOutlined />}
        title="Declarations & Signatories"
        fields={[
          ...DECLARATIONS.map((text, i) => [
            text,
            reg[`declaration${i + 1}`] ? "Agreed" : null,
            true,
          ]),
          [
            "Signatory 1",
            joinAddress(
              reg.signatory1Name,
              reg.signatory1Capacity,
              formatDate(reg.signatory1Date),
            ),
          ],
          [
            "Signatory 2",
            joinAddress(
              reg.signatory2Name,
              reg.signatory2Capacity,
              formatDate(reg.signatory2Date),
            ),
          ],
          [
            "Terms of Engagement",
            reg.terms_accepted
              ? `Accepted ${formatDate(reg.terms_accepted_at, true) || ""} (v${reg.terms_version || "-"})`
              : null,
          ],
          [
            "Privacy Notice",
            reg.privacy_notice_acknowledged
              ? `Acknowledged ${formatDate(reg.privacy_notice_acknowledged_at, true) || ""}`
              : null,
          ],
        ]}
      />
    </div>
  );

  const consents = reg.consents || [];
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
      {files.length > 0 && (
        <Section
          icon={<FolderOpenOutlined />}
          title={`Uploaded Documents (${files.length})`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {files.map((f) => (
              <FileTile
                key={f.url}
                icon={fileIcon(f.url)}
                title={f.title}
                subtitle={f.subtitle}
                url={f.url}
              />
            ))}
          </div>
        </Section>
      )}
      {consents.length > 0 && (
        <Section icon={<SignatureOutlined />} title="Consents">
          <ul className="m-0 p-0 list-none divide-y divide-slate-100 dark:divide-zinc-800">
            {consents.map((c) => (
              <li
                key={c.id}
                className="flex flex-wrap items-center justify-between gap-2 py-2 first:pt-0 last:pb-0 text-[13px]"
              >
                <span className="flex items-center gap-2">
                  <Tag
                    className="m-0!"
                    color={
                      c.status === "Valid" || c.status === "Active"
                        ? "green"
                        : "default"
                    }
                  >
                    {c.consentType || c.personType}
                  </Tag>
                  <span className="font-medium text-slate-800 dark:text-zinc-100">
                    {c.personName || "-"}
                  </span>
                  {c.consentVersion && (
                    <span className="text-slate-400 dark:text-zinc-500">
                      · v{c.consentVersion}
                    </span>
                  )}
                </span>
                <span className="text-[12px] text-slate-500 dark:text-zinc-400">
                  {formatDate(c.signedAt, true)}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}
      {!pdfs.length && !files.length && !consents.length && (
        <EmptyState
          icon={<FolderOpenOutlined />}
          title={loadingFull ? "Loading..." : "No documents yet"}
          description={
            loadingFull
              ? null
              : "Nothing has been uploaded or generated for this registration."
          }
        />
      )}
    </div>
  );

  const reviewTab = review ? (
    <div className="space-y-4">
      <Section
        icon={<AuditOutlined />}
        title="Decision"
        fields={[
          [
            "Decision",
            review.reviewStatus && (
              <Tag
                color={statusColor(review.reviewStatus)}
                className="m-0! font-semibold"
              >
                {review.reviewStatus}
              </Tag>
            ),
          ],
          ["Reviewer", joinAddress(review.reviewerName, review.reviewerRole)],
          ["Reviewed", formatDate(review.reviewedAt || review.updatedAt, true)],
          [
            "Overall Risk",
            review.overallRiskRating && (
              <Tag color={riskColor(review.overallRiskRating)} className="m-0!">
                {review.overallRiskRating}
              </Tag>
            ),
          ],
          ["Risk Rationale", review.riskRationale, true],
          ["Decision Notes", review.decisionNotes, true],
          ["Approval Conditions", review.approvalConditions, true],
        ]}
      />
      <Section
        icon={<SafetyCertificateOutlined />}
        title="Verification & Screening"
        fields={[
          ["PEP / Sanctions Screening", review.pepSanctionsScreeningResult],
          ["Adverse Media", review.adverseMediaResult],
          ["Address Service Approval", review.addressServiceApproval],
          ["Identity Verification", review.identityVerificationNotes, true],
          ["Ownership Verification", review.ownershipVerificationNotes, true],
          ["Source of Funds", review.sourceOfFundsNotes, true],
          ["CDD Verification", review.cddVerificationNotes, true],
        ]}
      />
      {review.signatureFilePath && (
        <Section icon={<SignatureOutlined />} title="Reviewer Signature">
          <a
            href={getFileUrl(review.signatureFilePath)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-40 items-center justify-center rounded-lg border border-slate-200 bg-white p-1 dark:border-zinc-700"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- uploaded file from the API server */}
            <img
              src={getFileUrl(review.signatureFilePath)}
              alt={`Signature of ${review.reviewerName || "reviewer"}`}
              className="max-h-full max-w-full object-contain"
            />
          </a>
        </Section>
      )}
    </div>
  ) : (
    <EmptyState
      icon={<ClockCircleOutlined />}
      title="Awaiting review"
      description="No decision has been recorded for this registration yet."
      action={
        typeof onReview === "function" && (
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onReview(data)}
            className="bg-brand-primary!"
          >
            Start Review &amp; Decision
          </Button>
        )
      }
    />
  );

  // --------------------------------------------------------------------------
  // FOOTER: Close · PDF split-button · Review & Decision (primary)
  // --------------------------------------------------------------------------
  const footer = (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <span className="hidden sm:flex items-center gap-1.5 text-[12px] text-slate-400 dark:text-zinc-500">
        <ClockCircleOutlined />
        Last updated {formatDate(reg.updatedAt || reg.createdAt, true)}
      </span>
      <div className="flex flex-wrap items-center gap-2 ml-auto">
        <Button onClick={onClose}>Close</Button>
        <PdfSplitButton pdfs={pdfs} />
        {typeof onReview === "function" && (
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onReview(data)}
            className="bg-brand-primary!"
          >
            Review &amp; Decision
          </Button>
        )}
      </div>
    </div>
  );

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
        <DetailsHeader
          name={companyName}
          reference={reference}
          avatar={<BankOutlined className="text-xl" />}
          submittedAt={reg.submittedAt || reg.createdAt}
          tags={
            <>
              <Tag
                color={statusColor(reg.status)}
                className="m-0! font-semibold"
              >
                {reg.status || "Submitted"}
              </Tag>
              {reg.isUrgent && (
                <Tag color="volcano" className="m-0!">
                  Urgent
                </Tag>
              )}
              {loadingFull && <Spin size="small" />}
            </>
          }
        />
      }
    >
      <div className={`${styles.body} modal-flush`}>
        {/* Quick facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-6 pt-5">
          <Fact
            icon={<UserOutlined />}
            label="Contact"
            value={reg.contactName}
          />
          <Fact
            icon={<MailOutlined />}
            label="Email"
            value={reg.contactEmail}
            href={reg.contactEmail && `mailto:${reg.contactEmail}`}
          />
          <Fact
            icon={<PhoneOutlined />}
            label="Mobile"
            value={reg.contactMobile}
            href={
              reg.contactMobile &&
              `tel:${String(reg.contactMobile).replace(/\s/g, "")}`
            }
          />
          <Fact
            icon={<EnvironmentOutlined />}
            label="State / Type"
            value={joinAddress(
              reg.jurisdictionState || reg.stateOfRegistration,
              reg.companyType,
            )}
          />
        </div>

        <Tabs
          className="mt-3"
          defaultActiveKey="overview"
          tabBarStyle={{ padding: "0 24px" }}
          items={[
            {
              key: "overview",
              label: tabLabel(<BankOutlined />, "Overview"),
              children: <div className="px-6 pb-6">{overviewTab}</div>,
            },
            {
              key: "addresses",
              label: tabLabel(<EnvironmentOutlined />, "Addresses"),
              children: <div className="px-6 pb-6">{addressesTab}</div>,
            },
            {
              key: "people",
              label: tabLabel(
                <TeamOutlined />,
                "People & Shares",
                officeholders.length + shareholders.length + owners.length,
              ),
              children: <div className="px-6 pb-6">{peopleTab}</div>,
            },
            {
              key: "compliance",
              label: tabLabel(<SafetyCertificateOutlined />, "Compliance"),
              children: <div className="px-6 pb-6">{complianceTab}</div>,
            },
            {
              key: "documents",
              label: tabLabel(
                <FolderOpenOutlined />,
                "Documents & PDFs",
                pdfs.length + files.length,
              ),
              children: <div className="px-6 pb-6">{documentsTab}</div>,
            },
            {
              key: "review",
              label: tabLabel(<AuditOutlined />, "Review", undefined, !review),
              children: <div className="px-6 pb-6">{reviewTab}</div>,
            },
          ]}
        />
      </div>
    </Modal>
  );
}
