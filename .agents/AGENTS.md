# Workspace Rules & Company Context

## Company Contact Information
Whenever displaying or referencing company contact information in components, footers, headers, or forms, ALWAYS use these exact official details:

- **Phone**: `1300 328 316`
- **Email Address**: `info@financiallyup.com.au`
- **Head Office Address**: `Level 5, 100 Walker St, North Sydney NSW 2060, Australia`

---

## 🛠️ Mandatory Rule: Ant Design Form Field Helpers (`services/antdFields`)
**ALWAYS** use the unified Ant Design Form Field Helper components from `@/services/antdFields` across **ALL** forms in the application (now and for all future forms). Do not manually write raw `<Form.Item><Input /></Form.Item>` boilerplate.

### Form Field Helper Surface:
- `import { AntInput, AntFileUpload, AntSignature } from "@/services/antdFields";`
- Standard text / email / password / number / textarea / select / date / radio / checkbox: use `<AntInput ... />`
- Document and file uploads: use `<AntFileUpload ... />`
- Signature canvases and touch capture: use `<AntSignature ... />`
