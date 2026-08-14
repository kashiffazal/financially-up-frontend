# 🛡️ Individual Client Engagement Form - Part 12 Admin Portal Specification & Field Map

> **Official Internal Admin Specification (Extracted from `Part_12_Admin_Portal_Specification.docx`)**  
> _Target:_ Next.js 16 + React 19 + Ant Design v6.5.0  
> _Component Path:_ `components/admin/forms/individual-engagement-admin/index.jsx`  
> _Admin Route:_ `/admin/individual-engagement`  
> _User Roles:_ `Administrator`, `Accountant`, `Compliance Officer`

---

## 📌 Overview & User Roles

The Admin Portal is the internal administration component used by Financially Up staff after a client submits an engagement. These screens are strictly internal and must never be visible to client-facing users.

| User Role              | Primary Responsibilities                                                              |
| :--------------------- | :------------------------------------------------------------------------------------ |
| **Administrator**      | Manage users, system configuration, document rules, fees, and global settings.        |
| **Accountant**         | Review engagements, request additional information, accept or decline engagements.    |
| **Compliance Officer** | Review AML/CTF, sanctions screening, beneficial ownership, and high-risk engagements. |

---

## 📋 Exact Section Breakdown (From Part 12 Specification)

### 1. User Role Selection

- **Field Name:** `userRole`
- **Control Type:** Select Dropdown
- **Options:** `Accountant`, `Compliance Officer`, `Administrator`

---

### 2. Section 3: Internal Review Checklist (`ADM-001` to `ADM-010`)

- **Field Name:** `admChecklist`
- **Control Type:** Multi-Select Checkbox Group
- **Items:**
  - `ADM-001`: Mandatory fields complete
  - `ADM-002`: Identity verified
  - `ADM-003`: Representative authority verified
  - `ADM-004`: Engagement Schedule complete
  - `ADM-005`: Conflict check completed
  - `ADM-006`: Previous adviser reviewed
  - `ADM-007`: Risk assessment completed
  - `ADM-008`: TPB disclosure current
  - `ADM-009`: AML/CTF review (if applicable)
  - `ADM-010`: Sanctions review (if applicable)

---

### 3. Section 4: Risk Assessment

- **Field Name:** `riskLevel`
- **Control Type:** Radio Group
- **Levels & Actions:**
  - `Low` - Verified identity, standard tax return (Normal review)
  - `Medium` - Foreign income, crypto, overdue lodgements (Senior review)
  - `High` - Identity concerns, major inconsistencies (Enhanced review)
  - `Unacceptable` - False identity, fraudulent documents (Decline engagement)
- **Field Name:** `riskNotes` (Textarea for evaluation rationale)

---

### 4. Section 5: Anti-Money Laundering (AML / CTF) Review

- `amlDesignatedServiceInvolved` - Radio (`Yes`, `No`)
- `amlBeneficialOwnershipVerified` - Radio (`Yes`, `No`, `N/A`)
- `amlSourceOfFundsRecorded` - Radio (`Yes`, `No`, `N/A`)
- `amlEscalationRequired` - Radio (`Yes`, `No`) - Escalates case to Compliance Officer

---

### 5. Section 6: Sanctions Screening Review

- `sanctionsOverseasActivityCheck` - Radio (`Pass`, `Flagged`)
- `sanctionsHighRiskJurisdictionCheck` - Radio (`Pass`, `Flagged`)
- `sanctionsNameMatchCheck` - Radio (`Clear - No Match`, `Potential Match - Escalate`)

---

### 6. Section 7: Available Staff Decisions

- **Field Name:** `decision`
- **Control Type:** Radio Group
- **Options:**
  - `Accept` - Generates Engagement Acceptance Notice
  - `Conditional Accept` - Accept subject to specific terms
  - `Request Information` - Contact client for missing documents
  - `Enhanced Monitoring` - Ongoing compliance monitoring
  - `Escalate` - Escalate to Compliance Officer
  - `Decline` - Decline engagement
- **Field Name:** `staffMemberName` (Text Input)
- **Field Name:** `staffSignatureType` (`draw`, `type`, `upload`) with smooth `SignaturePad` canvas
- **Field Name:** `reviewNotes` (Section 8: Internal Review Notes & Audit Log Details)
