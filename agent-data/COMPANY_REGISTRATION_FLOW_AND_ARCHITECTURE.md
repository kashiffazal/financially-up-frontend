# Company Registration Module: Architecture & Workflow Guide

---

## 1. Executive Summary & Architectural Strategy

The **Company Registration Module** (`app/admin/company-registration-new`) is designed around a **modular, status-driven lifecycle architecture** modeled after enterprise ERP systems.

### Core Goals of this Architecture:
1. **Direct Log-Centric Interface**:
   - The main admin page (`page.js`) directly embeds the status-categorized log view, keeping navigation focused and accessible.
2. **Dedicated Public Form Link & Reusable Share Modal**:
   - The header displays the dedicated public form link (`/resources/registration-forms/company-registration`) with one-click clipboard copying and external opening.
   - The reusable `<ShareFormModal />` (`components/admin/ShareFormModal.jsx`) enables admins to quickly invite clients by email.
3. **Zero-Reload Real-Time Status Transitions**:
   - Status changes update local memory state immediately via `LogDeleteRow` and `LogResetList`, keeping tab badges and tables synchronized without requiring slow full-page network re-fetches.
4. **Reusable Modernized DataTable**:
   - Built on React 19 + Ant Design v6.5.0 with global search, column-specific dropdown filtering, page-size changing, row selections, and bulk action popovers.

---

## 2. Directory & File Breakdown

```
financially-up-frontend/
├── app/admin/company-registration-new/
│   ├── page.js                     # 1. Main Route Entry (Consumes PageTitle & embeds Log module)
│   ├── viewDetails.js              # 2. Structured Descriptions Modal (Horizontal/Vertical View)
│   │
│   ├── log/
│   │   ├── index.js                # 3. Status Tabs Controller (Buckets data by status, calculates live counts)
│   │   └── partial/
│   │       └── mainLog.js          # 4. Table Renderer (Configures DataTable columns, actions & bulk actions)
│   │
│   └── form/
│       ├── index.js                # 5. Form Module Container (Hosts interactive application form)
│       └── mainForm/               # 6. Full 12-Step Form Engine & Legal Modals
│           ├── index.jsx           # Main 12-step form orchestrator
│           ├── Step1EngagementService.jsx ... Step12DeclarationSignatures.jsx
│           └── AddressServiceTermsTrigger.jsx, legalDocumentsText.js, etc.
│
├── components/admin/
│   ├── PageTitle.jsx               # 7. Universal Admin Page Title (Icon, Title, Form Link Pill, Share Button, Breadcrumb)
│   └── ShareFormModal.jsx          # 8. Reusable Share Form Modal (Email dispatch & Copy URL)
│
└── components/mutual/andt-data-table-component/
    ├── index.js                    # 9. Reusable Ant Design v6 DataTable Component
    ├── styles.css                  # Table styling & Light/Dark mode token integration
    └── Read.md                     # Component API & Props Documentation
```


---

## 3. Step-by-Step Data Flow & Lifecycle

```
                                  +---------------------------------------+
                                  |       /admin/company-registration     |
                                  |                 (page.js)             |
                                  +-------------------+-------------------+
                                                      |
                         +----------------------------+----------------------------+
                         |                                                         |
                         v                                                         v
          +-------------------------------+                         +-------------------------------+
          |       Header Action Bar       |                         |    Share Registration Form    |
          |  (Link Pill + Copy + Share)   |                         |     (ShareFormModal.jsx)      |
          +-------------------------------+                         +-------------------------------+
                         |
                         v
          +-------------------------------+
          |       Registrations Log       |
          |       (log/index.js)          |
          +---------------+---------------+
                          |
         Fetches & Groups |
         into Status Tabs |
                          v
          +-------------------------------+
          |   Tabs: [All] [Submitted]...  |
          |   (Live Count Badges)         |
          +---------------+---------------+
                          |
                          v
          +-------------------------------+
          |    log/partial/mainLog.js     |
          | (Embeds DataTable Component)  |
          +---------------+---------------+
                          |
      +-------------------+-------------------+
      |                   |                   |
      v                   v                   v
+-------------+     +-------------+     +-------------+
| View Detail |     | Review/Edit |     | Bulk Action |
| Modal       |     | Decision    |     | or Status   |
| (viewDetails|     | (AdminForm) |     | Transition  |
+-------------+     +-------------+     +-------------+
```

---

### Flow 1: Sharing Form with Clients (`ShareFormModal.jsx`)
1. Admin clicks the **"Share Form"** button in the header of `/admin/company-registration-new`.
2. The reusable `<ShareFormModal />` opens with:
   - Client Full Name (`clientName`)
   - Client Email Address (`clientEmail`)
   - Personalized Message (pre-filled with standard message)
   - Public Form Link box with one-click **"Copy Link"** button.
3. Clicking **"Send Invitation"** sends the email invitation and notifies the admin with a confirmation alert.

---

### Flow 2: Client Submitting Application (`form/mainForm/`)
1. Client opens the direct link `/resources/registration-forms/company-registration`.
2. Completes the 12 structured registration steps:
   - **Step 1**: Client Contact & Engagement Scope
   - **Step 2**: Proposed Company Names (1st, 2nd, 3rd Choice) & State of Registration
   - **Step 3**: Registered Office & Principal Business Address
   - **Step 4**: Directors & Officeholders (including Director ID / DIN verification)
   - **Step 5**: Share Structure & Shareholders
   - **Step 6**: Beneficial Ownership & Ultimate Holding Company
   - **Step 7**: AML / CDD Compliance Questions
   - **Step 8**: Source of Funds & Wealth
   - **Step 9**: Nominee & Trustee Arrangements
   - **Step 10**: Optional Tax Services (TFN, ABN, GST, PAYG)
   - **Step 11**: Supporting Identity Document Uploads (Driver Licence, Passport)
   - **Step 12**: Statutory Declarations & Digital Signatures
3. On submission, `POST /new-company-registrations` creates the application record in the database.

---

### Flow 3: Fetching, Grouping & Live Count Calculation (`log/index.js`)
1. On page load, `fetchRecords()` retrieves applications from `GET /new-company-registrations`.
2. The response array is categorized into status buckets:
   ```javascript
   const statusMap = { All: normalizedRecords };
   COMPANY_REG_STATUS_LIST.forEach((st) => { statusMap[st.key] = []; });
   normalizedRecords.forEach((item) => {
     const itemStatus = item.status || "Submitted";
     if (statusMap[itemStatus]) {
       statusMap[itemStatus].push(item);
     }
   });
   ```
3. Each tab header dynamically computes its count (`listDataByStatus[st.key].length`) and displays a styled count badge:
   - **Green Badge** when count > 0
   - **Muted Badge** when count = 0
4. Clicking any status tab instantly renders that status's data without any network delay.

---

### Flow 4: Real-Time Status Transitions (Zero-Reload Strategy)
When an admin updates an application's status (e.g. moving from `Submitted` &rarr; `Under Review` or `Approved`):
1. Admin clicks **Actions &rarr; Change Status to... &rarr; [Target Status]** in `mainLog.js`.
2. Ant Design confirmation modal asks: *"Are you sure you want to change status from [Old Status] to [New Status]?"*.
3. Admin clicks **"Yes, Update Status"**.
4. API request `PUT /new-company-registrations/:id/status` executes.
5. On success, `handleUpdateListOnChangeStatus(row, newStatus, oldStatus)` executes in `log/index.js`:
   ```javascript
   // 1. Remove record from old tab bucket
   updatedMap[oldStatus] = LogDeleteRow(updatedRow, updatedMap[oldStatus]);
   // 2. Prepend record to new tab bucket
   updatedMap[newStatus] = LogResetList(updatedRow, updatedMap[newStatus]);
   // 3. Update master "All" list
   updatedMap.All = LogResetList(updatedRow, updatedMap.All);
   ```
6. **Result**: The record smoothly transitions to the new tab, and both tab count badges update instantly in memory!

---

### Flow 5: Row Operations (`mainLog.js`)
Each row provides an **"Actions"** dropdown menu with:
1. **View Details**:
   - Opens `viewDetails.js` modal showing structured company overview, names, addresses, directors (with DIN), shareholders, and signatures.
   - Includes a top-right switcher to toggle between **Horizontal** and **Vertical** Descriptions layout.
2. **Review & Decision**:
   - Opens `CompanyRegistrationAdminForm` to record compliance risk rating (`Low`, `Medium`, `High`), official decision notes, conditions, and admin signature.
3. **View Official PDF**:
   - Direct link to the generated Australian incorporation legal document package.
4. **Delete Record**:
   - Popconfirm modal executes `DELETE /new-company-registrations/:id` and refreshes list.

---

### Flow 6: Multi-Row Selection & Bulk Operations
1. User clicks row checkboxes in `DataTable`.
2. A bulk action toolbar appears displaying the count of selected records (e.g. `3 selected`).
3. User selects a bulk action from the dropdown (e.g. *"Mark as Approved"*, *"Mark as On Hold"*, *"Mark as Lodged with ASIC"*, or *"Delete Selected"*).
4. User clicks **"Apply"** &rarr; Ant Design `Popconfirm` confirms the batch operation.
5. `handleBulkAction()` executes parallel requests via `Promise.all()` and refreshes table state.

---

## 4. Reusable `DataTable` Component (`andt-data-table-component`)

The table component provides 5 built-in toolbar controls:

1. **Global Search Input**: Real-time filtering across all dataIndex columns.
2. **Custom Column Filter Dropdown**: Narrow search to a specific column (`Filter By: Company Name / Email / Reference`).
3. **Page Size Selector**: Choose between `10, 20, 50, 100` records per page.
4. **Bulk Action Controls**: Dynamically displays count badge, action selector, and popconfirm.
5. **Export Buttons Slot (`extraHeader`)**: One-click Excel `.xlsx` and PDF export of currently displayed records.

---

## 5. Reusable `ShareFormModal` Component (`components/admin/ShareFormModal.jsx`)

Provides universal form-sharing capabilities for any admin module:
```jsx
<ShareFormModal
  open={isShareModalOpen}
  onClose={() => setIsShareModalOpen(false)}
  formTitle="Company Registration Form"
  formPath="/resources/registration-forms/company-registration"
  defaultMessage="Dear client, please complete your Australian Company Registration application using the secure link below."
/>
```

---

## 6. How to Replicate This Architecture in Other Modules

To implement this exact architecture in future modules (e.g. **Individual Engagement**, **SMSF Registrations**, **Trust Registrations**, or **GST Registrations**):

1. **Create Module Directory**:
   ```
   app/admin/<module-name>/
   ├── page.js          # Direct embed of log + ShareFormModal
   ├── viewDetails.js   # Structured Descriptions modal
   ├── log/
   │   ├── index.js     # Status tabs + live count badges
   │   └── partial/
   │       └── mainLog.js # DataTable + Actions + Export
   └── form/
       ├── index.js
       └── mainForm/
   ```
2. **Define Status List** in `log/index.js`.
3. **Configure Columns & Row Actions** in `log/partial/mainLog.js`.
4. **Use `<ShareFormModal />`** in `page.js` with the module's specific `formTitle` and `formPath`.
