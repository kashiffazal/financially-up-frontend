# 📋 Individual Client Engagement Form — Phase 1 Client Specification & Field Map

> **Official Documentation Extracted directly from `agent-data/Individual-Engagement-form/Part_1_...` through `Part_11_...`**  
> *Target:* Next.js 16 + React 19 + Ant Design v6.5.0  
> *Portal Route:* `/resources/engagement-forms/individual-engagement-form`  
> *Compliance:* Tax Agent Services Act 2009, Privacy Act 1988, Electronic Transactions Act 1999  

---

## 📌 Executive Summary

The **Individual Client Engagement Form (Phase 1)** is a 10-step guided onboarding wizard designed for Australian individual taxpayers. It collects all required identity, tax residency, income source, sole trader business, ATO authority, and legal consent data needed for a registered tax agent to legally represent and lodge tax returns for a client.

---

## 📑 Complete 10-Step Field Directory (Extracted from Parts 2 to 11 Specification)

### 1️⃣ Step 1: Service Selection (`Part_2_Step_1_Service_Selection.docx`)
| Field Name | Type | Label / Description | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `services` | Checkbox Group | *What would you like help with?* | `Individual Tax Return`, `Prior-Year Return`, `Amendment`, `Rental Property`, `Capital Gains`, `Cryptocurrency`, `Foreign Income / Residency`, `Tax Planning`, `ATO Matter`, `Sole Trader BAS`, `ABN Application`, `GST Registration`, `Other` | **Required** (At least 1) |
| `entityService` | Radio Group | *Relates to Company, Trust, Partnership?* | `No`, `Yes`, `Unsure` | **Required** |

---

### 2️⃣ Step 2: Personal Information (`Part_3_Step_2_Personal_Information.docx`)
| Field Name | Type | Label | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `fullName` | Text Input | *Full Legal Name* | Free Text | **Required** |
| `hasPreviousName` | Radio Group | *Have you used another name?* | `Yes`, `No` | Optional |
| `previousNames` | Text Input | *Previous / Other Names* | Free Text | **Required if `hasPreviousName = Yes`** |
| `dateOfBirth` | DatePicker | *Date of Birth* | DD/MM/YYYY | **Required** |
| `tfn` | Text Input | *Tax File Number* | 9 Digits | **Required for Tax Services** |
| `tfnStatus` | Radio Group | *TFN Provision Options* | `Provided`, `Applied`, `Exempt`, `Later` | Optional |
| `tfnExplanation` | TextArea | *Explanation for TFN Status* | Free Text | **Required if TFN not provided** |
| `birthCity` | Text Input | *City / Town of Birth* | Free Text | Optional |
| `birthCountry` | Select | *Country of Birth* | Country List | **Required** |
| `address` | Text Input | *Residential Address* | Australian Address | **Required** |
| `mobile` | Text Input | *Mobile Phone Number* | Australian Mobile | **Required** |
| `email` | Email Input | *Email Address* | Valid Email | **Required** |
| `occupation` | Text Input | *Main Occupation* | Free Text | **Required** |
| `employmentStatus` | Select | *Employment Status* | Full-Time, Part-Time, Casual, Self-Employed, Retired, Unemployed, Student | **Required** |
| `about` | TextArea | *Tell us about your tax situation* | Max 500 Chars | Optional |

---

### 3️⃣ Step 3: Residency & Family Information (`Part_4_Step_3_Residency_and_Family.docx`)
| Field Name | Type | Label | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `isAustralianCitizen` | Radio Group | *Are you an Australian citizen?* | `Yes`, `No` | **Required** |
| `taxResidency` | Radio Cards | *Australian Tax Residency Status* | `Australian Resident`, `Foreign Resident`, `Became Resident`, `Ceased Residence`, `Unsure` | **Required** |
| `citizenshipCountry` | Select | *Country of Citizenship* | Country List | **Required if `isAustralianCitizen = No`** |
| `visaStatus` | Select | *Visa Status* | PR, 482, 417, 500, 820, Visitor, Other | **Required if `isAustralianCitizen = No`** |
| `visaSubclass` | Text Input | *Visa Subclass Number* | Subclass Number | **Required if `isAustralianCitizen = No`** |
| `visaExpiry` | DatePicker | *Visa Expiry Date* | DD/MM/YYYY | **Required if `isAustralianCitizen = No`** |
| `arrivalDate` | DatePicker | *First Arrival Date* | DD/MM/YYYY | **Required if `isAustralianCitizen = No`** |
| `visaEvidence` | File Upload | *Upload Visa Grant Letter* | PDF, JPG, PNG | **Required if `isAustralianCitizen = No`** |
| `residentArrival` | DatePicker | *Date Became Resident* | DD/MM/YYYY | Optional |
| `residentDeparture` | DatePicker | *Date Ceased Residency* | DD/MM/YYYY | Optional |
| `foreignCountry` | Select | *Foreign Country of Residence* | Country List | Optional |
| `foreignInfo` | TextArea | *Describe Overseas Income & Assets* | Free Text | Optional |
| `hasSpouse` | Radio Group | *Did you have a spouse?* | `Yes`, `No` | **Required** |
| `spouseName` | Text Input | *Spouse Full Name* | Free Text | **Required if `hasSpouse = Yes`** |
| `spouseDob` | DatePicker | *Spouse Date of Birth* | DD/MM/YYYY | **Required if `hasSpouse = Yes`** |
| `spouseIncome` | InputNumber | *Spouse Taxable Income ($)* | Currency | Optional |
| `prepareSpouseReturn` | Radio Group | *Prepare spouse return?* | `Yes`, `No` | Optional |
| `hasDependants` | Radio Group | *Did you have dependants?* | `Yes`, `No` | **Required** |
| `dependantCount` | Number Input | *Number of Dependent Children* | 1 to 15 | **Required if `hasDependants = Yes`** |

---

### 4️⃣ Step 4: Income & Tax Profile (`Part_5_Step_4_Income_Tax_Profile.docx`)
| Field Name | Type | Label | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `incomeActivities` | Checkbox Group | *Which income sources apply?* | 12 Income Options | **Required** (At least 1) |
| `hadPreviousAccountant` | Radio Group | *Did you use a previous tax agent?* | `Yes`, `No` | **Required** |
| `previousFirm` | Text Input | *Previous Accounting Firm Name* | Free Text | **Required if `hadPreviousAccountant = Yes`** |
| `reasonForChange` | TextArea | *Reason for Changing Accountants* | Free Text | **Required if `hadPreviousAccountant = Yes`** |
| `authorisePreviousAdvisor` | Radio Group | *Authorise Ethical Clearance Contact?* | `Authorise`, `Do Not Authorise` | Optional |
| `atoIssues` | Radio Group | *ATO Debts, Audits, Disputes?* | `No`, `Yes`, `Unsure` | **Required** |
| `atoExplanation` | TextArea | *Describe ATO Matter* | Free Text | **Required if `atoIssues != No`** |
| `noticeDate` | DatePicker | *ATO Notice Date* | DD/MM/YYYY | **Required if `atoIssues != No`** |
| `dueDate` | DatePicker | *ATO Due Date* | DD/MM/YYYY | **Required if `atoIssues != No`** |
| `atoDocuments` | File Upload | *Upload ATO Letters / Notices* | PDF, JPG, PNG | **Required if `atoIssues != No`** |

---

### 5️⃣ Step 5: BAS / ABN / GST (`Part_6_Step_5_BAS_ABN_GST.docx`)
| Field Name | Section | Type | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `existingAbn` | BAS | Text Input | 11-Digit ABN | **Required for BAS** |
| `abnStatus` | BAS | Radio Group | `Existing`, `No ABN`, `Application Requested`, `Unsure` | **Required for BAS** |
| `basPeriod` | BAS | Select | Period List | **Required for BAS** |
| `reportingFrequency` | BAS | Select | `Monthly`, `Quarterly`, `Annual` | **Required for BAS** |
| `gstStatus` | BAS | Radio Group | `Registered`, `Not Registered` | **Required for BAS** |
| `overdueBas` | BAS | Radio Group | `Yes`, `No` | **Required for BAS** |
| `recordsComplete` | BAS | Radio Group | `Yes`, `No` | **Required for BAS** |
| `recordsMaintainedBy` | BAS | Select | `Client`, `Bookkeeper`, `Accountant` | **Required for BAS** |
| `hasPayroll` | BAS | Radio Group | `Yes`, `No` | **Required for BAS** |
| `basScope` | BAS | Checkbox Group | `Prepare`, `Review GST`, `Reconcile`, `Correct Records`, `Lodge Only` | Optional |
| `businessStartDate` | ABN | DatePicker | DD/MM/YYYY | **Required for ABN** |
| `businessActivity` | ABN | Text Input | Free Text | **Required for ABN** |
| `businessLocation` | ABN | Text Input | Free Text | **Required for ABN** |
| `expectedTurnover` | ABN | InputNumber | Currency ($) | **Required for ABN** |
| `profitExpectation` | ABN | Radio Group | `Yes`, `No` | **Required for ABN** |
| `hasEmployees` | ABN | Radio Group | `Yes`, `No` | **Required for ABN** |
| `registerGST` | ABN | Radio Group | `Yes`, `No` | **Required for ABN** |
| `registerPAYG` | ABN | Radio Group | `Yes`, `No` | **Required for ABN** |
| `gstAbn` | GST | Text Input | 11-Digit ABN | **Required for GST** |
| `gstEffectiveDate` | GST | DatePicker | DD/MM/YYYY | **Required for GST** |
| `gstTurnover` | GST | InputNumber | Currency ($) | **Required for GST** |
| `gstRegistrationType` | GST | Radio Group | `Compulsory`, `Voluntary`, `Unsure` | **Required for GST** |
| `accountingMethod` | GST | Radio Group | `Cash`, `Non-Cash`, `Advise Me` | **Required for GST** |
| `gstBasFrequency` | GST | Select | `Monthly`, `Quarterly`, `Annual` | Optional |
| `fuelTaxCredits` | GST | Radio Group | `Yes`, `No` | Optional |
| `imports` | GST | Radio Group | `Yes`, `No` | Optional |
| `exports` | GST | Radio Group | `Yes`, `No` | Optional |
| `digitalSales` | GST | Radio Group | `Yes`, `No` | Optional |

---

### 6️⃣ Step 6: Documents & Identity Verification (`Part_7_Step_6_Documents_Identity_Verification.docx`)
| Field Name | Type | Label | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `identityMethod` | Radio Cards | *Verification Method* | `Upload ID`, `Electronic Verification`, `Live Video`, `In Person`, `No Photo ID` | **Required** |
| `primaryId` | File Upload | *Primary Photo ID* | License / Passport / Photo Card | **Required if Upload/Electronic** |
| `supportingId` | File Upload | *Supporting ID* | Medicare / Utility / Bank Statement | **Required if Upload/Electronic** |
| `noPhotoIdReason` | TextArea | *Reason for No Photo ID* | Free Text | **Required if `identityMethod = No Photo ID`** |
| `selfie` | File Upload | *Selfie Photo ID* | JPG, PNG | **Required if Electronic Verification** |
| `biometricConsent` | Checkbox | *Biometric Consent* | Checked / Unchecked | **Required if Electronic Verification** |

---

### 7️⃣ Step 7: Representative, Bank & Authorities (`Part_8_Step_7_Representative_Bank_Authorities.docx`)
| Field Name | Section | Type | Values / Options | Validation |
| :--- | :--- | :--- | :--- | :--- |
| `isSelf` | Rep | Radio Group | `Yes`, `No` | **Required** |
| `repName` | Rep | Text Input | Free Text | **Required if `isSelf = No`** |
| `relationship` | Rep | Select | Parent, Guardian, Attorney, Executor, Other | **Required if `isSelf = No`** |
| `authorityDoc` | Rep | File Upload | PDF, JPG, PNG | **Required if `isSelf = No`** |
| `authorityDesc` | Rep | TextArea | Free Text | Optional |
| `needBank` | Bank | Radio Group | `Yes`, `No`, `Unsure` | **Required** |
| `accountName` | Bank | Text Input | Free Text | **Required if `needBank = Yes`** |
| `bsb` | Bank | Text Input | 6 Digits (000-000) | **Required if `needBank = Yes`** |
| `accountNumber` | Bank | Text Input | Free Text | **Required if `needBank = Yes`** |
| `confirmOwnership` | Bank | Checkbox | Checked / Unchecked | **Required if `needBank = Yes`** |
| `atoAuthority` | Auth | Checkbox | Checked / Unchecked | **Mandatory** |
| `abrAuthority` | Auth | Checkbox | Checked / Unchecked | **Required for ABN/GST** |
| `previousAuthority` | Auth | Radio Group | `Authorise`, `Do Not Authorise` | **Required if Previous Accountant = Yes** |

---

### 8️⃣ Step 8: Engagement Schedule (`Part_9_Step_8_Engagement_Schedule.docx`)
- Read-only automatically generated schedule. Client must open and review before signature.

---

### 9️⃣ Step 9: Final Consents (`Part_10_Step_9_Final_Consent_Legal_Agreements.docx`)
| Field Name | Type | Statement | Validation |
| :--- | :--- | :--- | :--- |
| `consentScheduleTerms` | Checkbox | **CONSENT 1:** Agree to Schedule & Terms | **Mandatory** |
| `consentPrivacy` | Checkbox | **CONSENT 2:** Acknowledge Privacy & TPB Notice | **Mandatory** |
| `consentAtoAuthority` | Checkbox | **CONSENT 3:** Authorise Financially Up to act with ATO | **Mandatory** |
| `consentCloudOverseas` | Radio Group | **CONSENT 4:** Cloud & Outsourced Processing | **Required** (`Yes`/`No`) |
| `consentBiometric` | Checkbox | **CONSENT 5:** Biometric Identity Consent | **Required if Electronic Verification** |
| `consentRecording` | Checkbox | **CONSENT 6:** Audio/Video Recording Consent | Optional |

---

### 🔟 Step 10: Electronic Signature (`Part_11_Step_10_Electronic_Signature_Final_Submission.docx`)
| Field Name | Type | Values / Options | Validation |
| :--- | :--- | :--- | :--- |
| `signerFullName` | Text Input | Signer Full Legal Name | **Required** |
| `signatureType` | Radio Group | `draw` (Canvas), `type` (Digital Font), `upload` (File Image) | Default: `draw` |
| `signatureDrawnData` | Smooth Canvas | Base64 PNG Stroke Data URL | **Required if `signatureType = draw`** |
| `signatureText` | Text Input | Free Text (Cursive Preview) | **Required if `signatureType = type`** |
| `signatureUploadedFile` | File Upload | PNG, JPG, JPEG | **Required if `signatureType = upload`** |
| `confirmSignatureBinding` | Checkbox | Confirm ETA 1999 Binding Signature | **Mandatory** |
