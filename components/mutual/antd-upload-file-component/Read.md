# UploadFile Component Documentation

Universal, responsive, animated file upload component supporting **4 Design Types**, customizable **`height`**, and **Smart Defaults**.

---

## 4 Design Variations

### 1. Type 1: Vertical Dropzone Card (`type="1"`)
Best for large primary file attachments, consent letters, or prominent drag-and-drop zones:
```jsx
<UploadFile
  name="authorityEvidence"
  label="Upload Evidence of Authority"
  title="Click or drag authority document"
  msg="Signed Authorisation Letter or Power of Attorney"
  type="1"
  height={180}
/>
```

---

### 2. Type 4: Horizontal Compact Dropzone Card (`type="4"`)
**Icon on Left, Wording on Right**. Best for medium-height side-by-side grid layouts (e.g. `height={126}` / `height={140}` sitting alongside 2 stacked input/select fields):
```jsx
<UploadFile
  name="photoId"
  label="Upload Photo ID Copy *"
  title="Click or drag photo ID copy"
  msg="Passport or Australian Driver Licence"
  type="4"
  height={126}
  className="rounded-xl"
/>
```

---

### 3. Type 2: Compact Button Mode (`type="2"`)
Best for toolbars, inline actions, and tight spaces:
```jsx
<UploadFile
  name="companyLogo"
  title="Upload Company Logo"
  type="2"
  height={40}
/>
```

---

### 4. Type 3: Input-Field Style (`type="3"`)
Best for single-row side-by-side placement with standard form inputs (`AntInput size="large"`), guaranteeing exact equal height (`40px` / `44px`):
```jsx
<UploadFile
  name="occupierConsent"
  label="Upload Written Occupier Consent Letter"
  placeholder="Choose signed occupier consent..."
  type="3"
  height={40}
  className="rounded-xl"
/>
```

---

## Multi-File Upload & `maxCount` Validation
When `multiple={true}` and `maxCount={N}` (e.g. `maxCount={2}` or `maxCount={5}`):
- Users can select multiple files at once or upload files progressively.
- If the user attempts to upload more than `maxCount`, the excess files are rejected and a clear warning banner is displayed:
  > **Upload limit reached! You cannot upload more than N files. Please remove a file to upload another.**
- Each uploaded file is rendered with a dedicated card displaying file icon, filename, formatted size, and individual delete button.
- Type 1 and Type 4 automatically render a `MAX N FILES` badge in the dropzone header.

---

## Props Reference
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `undefined` | Ant Design Form field name. If provided, automatically wraps with `<Form.Item>`. |
| `label` | `string \| ReactNode` | `undefined` | Label shown above the upload field. |
| `type` | `"1" \| "2" \| "3" \| "4"` | `"1"` | Design variation: `"1"` (Vertical Dropzone), `"2"` (Button), `"3"` (Input Style), `"4"` (Horizontal Dropzone). |
| `height` | `number \| string` | `140px / 40px / 120px` | Custom height (e.g. `40`, `126`, `180`, `"44px"`). |
| `accept` | `string` | `".pdf, .jpg, .jpeg, .png, .webp"` | Allowed file types. Automatically handles dialog filter and drag-and-drop validation. |
| `fileSize` | `number` | `5` | Max file size in MB (defaults to **5MB**). |
| `maxCount` | `number` | `1` | Maximum number of uploaded files (defaults to **1**). Displays limit badge and validation error when exceeded. |
| `multiple` | `boolean` | `false` | Allows multiple file selection. |
| `loader` | `boolean` | `false` | Displays animated progress bar indicator. |
| `progress` | `number` | `0` | Upload progress percentage (0-100). |
| `noRequired` | `boolean` | `false` | Disables required validation. |
| `reqMsg` | `string` | `"Please upload a file"` | Required validation error message. |
| `uploadedDocuments` | `string \| string[]` | `undefined` | Pre-uploaded document names/paths. |
| `filePath` | `string` | `""` | Base URL / path prepended to view links. |
| `className` | `string` | `""` | Applied to the inner interactive element / box (e.g. `"rounded-xl"`). |
| `containerClassName` | `string` | `""` | Applied to the outer `<Form.Item>` / wrapper container (e.g. `"!mb-0"`). |
