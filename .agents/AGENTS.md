# Workspace Rules & Company Context

## Company Contact Information

Whenever displaying or referencing company contact information in components, footers, headers, or forms, ALWAYS use these exact official details:

- **Phone**: `1300 328 316`
- **Email Address**: `info@financiallyup.com.au`
- **Head Office Address**: `Level 5, 100 Walker St, North Sydney NSW 2060, Australia`

---

## 📋 Mandatory Rule: Implementation Plan Approval

**ALWAYS** generate a comprehensive implementation plan first on every code change, feature, or refactor, and wait for explicit user approval before writing or modifying any code.

---

## 🛠️ Mandatory Rule: Ant Design Form Field Helpers (`services/antdFields`)

**ALWAYS** use the unified Ant Design Form Field Helper components from `@/services/antdFields` across **ALL** forms in the application (now and for all future forms). Do not manually write raw `<Form.Item><Input /></Form.Item>` boilerplate.

### Form Field Helper Surface:

- `import { AntInput, AntFileUpload, AntSignature } from "@/services/antdFields";`
- Standard text / email / password / number / textarea / select / date / radio / checkbox: use `<AntInput ... />`
- Document and file uploads: use `<AntFileUpload ... />`
- Signature canvases and touch capture: use `<AntSignature ... />`

---

## ⚠️ Mandatory Rule: Ant Design `<Alert>` Component

**ALWAYS** use `title` instead of the deprecated `message` prop when specifying header content for Ant Design `<Alert>` components:

```jsx
// ✅ Correct
<Alert title="Title content here" description="Description content" type="info" />

// ❌ Incorrect (Deprecated in Ant Design)
<Alert message="Title content here" description="Description content" type="info" />
```

---

# CSS & Component Architecture Rule

1. **Folder per Component**: Every UI component MUST have its own dedicated directory named after the component (e.g. `components/website/Header/` or `app/(web)/home-components/HeroSection/`).
2. **Files inside Component Folder**:
   - `index.jsx` (or `[ComponentName].jsx`) for JSX & component logic.
   - `[ComponentName].module.css` for component-specific styling.
3. **Shared / Global CSS**: Keep utility classes, design tokens, and global resets in `app/(web)/web.css`.
4. **Future Pages & Components**: Always follow this Component Folder + JSX + CSS Module structure for all web pages and components.
