# 🛠️ `services/antdFields` — Ant Design v6.5.0 Form Field Helper Library

> **Updated Service Component**  
> *Target:* Next.js 16 + React 19 + Ant Design v6.5.0  
> *Location:* `services/antdFields/index.jsx`  

---

## 📌 Overview

`services/antdFields` provides a clean, unified, declarative wrapper component (`AntInput` & `AntFileUpload`) for Ant Design `<Form.Item>` form controls. It removes boilerplates, unifies validation rules, replaces legacy `moment` with `dayjs`, and removes jQuery (`$`).

---

## 🚀 Quick Usage Examples

### 1. Standard Text & Password Inputs
```jsx
import { AntInput } from "@/services/antdFields";

<AntInput
  name="fullName"
  label="Full Legal Name"
  placeholder="e.g. John Smith"
  noRequired={false}
  reqMsg="Please enter your name"
/>

<AntInput
  type="password"
  name="password"
  label="Account Password"
  noRequired={false}
/>
```

### 2. Select Dropdown (With Custom Value/Label Key Mapping)
```jsx
<AntInput
  type="select"
  name="employmentStatus"
  label="Employment Status"
  options={employmentOptions}
  setValueLabel={['id', 'title']} // Custom mapping for object keys
  emptyFirstVal="- Select Status -"
  filter={true} // Searchable
/>
```

### 3. DatePicker (DayJS Integration)
```jsx
<AntInput
  type="datepicker"
  name="dateOfBirth"
  label="Date of Birth"
  format="DD/MM/YYYY"
  reqMsg="Please select your date of birth."
/>
```
> **Automatic Dayjs Normalization (`getValueProps`):**
> Automatically handles string dates (e.g. `"2026-08-07"` or `"07/08/2026"`), ISO strings from localStorage, or existing `dayjs` objects and normalizes them safely into valid Dayjs instances for Ant Design v6. Prevents `getUDayjs(...).isValid is not a function` errors when navigating multi-step forms.

### 4. Radio Group (Horizontal or Vertical)
```jsx
<AntInput
  type="radio"
  name="isAustralianCitizen"
  label="Are you an Australian Citizen?"
  radioOptions={[
    { value: 'Yes', label: 'Yes, Australian Citizen' },
    { value: 'No', label: 'No, Foreign Resident' }
  ]}
  vertical={true}
/>
```

### 5. Number & Currency Input
```jsx
<AntInput
  type="inputNumber"
  name="taxableIncome"
  label="Taxable Income ($)"
  numPreFix="$"
  comma={true}
  min={0}
/>
```

### 6. Card Grid Design Variants (`designVariant="card"`)

#### Card-Style Multi-Select Checkbox Group
```jsx
<AntInput
  type="checkbox"
  name="services"
  designVariant="card"
  group={[
    { value: "tax", label: "Tax Return", description: "Individual filing", icon: <UserOutlined /> },
    { value: "cgt", label: "Capital Gains", description: "Property & shares", icon: <DollarOutlined /> }
  ]}
  gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
/>
```

#### Card-Style Radio Group
```jsx
<AntInput
  type="radio"
  name="entityService"
  designVariant="card"
  radioOptions={[
    { value: "No", title: "No, Individual Only", desc: "Personal tax affairs" },
    { value: "Yes", title: "Yes, Relates to Entity", desc: "Company or Trust involved" }
  ]}
  gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full"
/>
```

### 7. Dragger File Upload (`AntFileUpload`)
```jsx
import { AntFileUpload } from "@/services/antdFields";

<AntFileUpload
  name="primaryId"
  label="Primary Photo ID"
  heading="Click or drag ID document to upload"
  para="Supports PDF, JPG, PNG"
  maxCount={1}
/>
```

---

## ⚙️ Complete Props Reference Table

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | String | `"text"` | `"text"`, `"password"`, `"email"`, `"number"`, `"inputNumber"`, `"select"`, `"datepicker"`, `"timepicker"`, `"radio"`, `"checkbox"`, `"textarea"`, `"switch"` |
| `name` | String | **Required** | Form field name / key identifier |
| `label` | String / Node | `undefined` | Form item label text |
| `designVariant` | String | `"default"` | Set to `"card"` for rich card grid design for `radio` or `checkbox` groups |
| `gridClassName` | String | `undefined` | Custom Tailwind grid class for card layouts (e.g. `grid grid-cols-3 gap-4`) |
| `cardClassName` | String | `""` | Custom CSS / Tailwind class for individual option cards |
| `cardStyle` | Object | `undefined` | Inline style overrides for option cards |
| `validator` | Function | `undefined` | Custom async validator function `(_, value) => Promise` |
| `noRequired` | Boolean | `false` | Set `true` to make field optional |
| `reqMsg` | String | `"Required"` | Error message displayed if required validation fails |
| `options` | Array | `[]` | Options array for `select` type |
| `setValueLabel` | Array | `false` | Custom key mapping `[valueKey, labelKey]` for object options |
| `emptyFirstVal` | String | `"-Select-"` | Label for initial empty option in single select |
| `filter` | Boolean | `true` | Enables search filtering inside `<Select>` |
| `radioOptions` | Array | `[]` | Options array for `radio` type `[{value, label, title, desc}]` |
| `vertical` | Boolean | `false` | Formats radio buttons vertically |
| `format` | String | `"DD-MM-YYYY"` | Format string for DatePicker |
| `disabledPreviousDate` | Boolean | `false` | Disables dates prior to today |
| `disabledNextDate` | Boolean | `false` | Disables future dates |
| `group` | Array / Boolean | `false` | Renders Checkbox.Group when array provided `[{value, label, description, icon}]` |
| `numPreFix` | String | `false` | Currency prefix (e.g. `"$"` or `"AUD"`) |
| `numPostFix` | String | `false` | Suffix string for numeric inputs |
| `comma` | Boolean | `false` | Format numeric input with thousands separators |
| `loading` | Boolean | `false` | Displays validating state spinner |

