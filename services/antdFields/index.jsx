"use client";

import UploadFile from "@/components/mutual/antd-upload-file-component";
import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  Checkbox,
  Upload,
  Switch,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CheckCircleFilled } from "@ant-design/icons";

dayjs.extend(customParseFormat);

const toValidDayjs = (val, fmt) => {
  if (!val) return null;
  if (dayjs.isDayjs(val)) return val.isValid() ? val : null;
  let d = dayjs(val);
  if (d.isValid()) return d;
  if (fmt) {
    d = dayjs(val, fmt);
    if (d.isValid()) return d;
  }
  return null;
};

const { TextArea } = Input;

/**
 * Custom Checkbox Card Group Component for designVariant="card"
 */
function CheckboxCardGroup({ value = [], onChange, options = [], gridClassName, cardClassName, cardStyle }) {
  const selectedValues = Array.isArray(value) ? value : [];
  return (
    <Checkbox.Group value={selectedValues} onChange={onChange} className="w-full">
      <div className={gridClassName || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"}>
        {options.map((item) => {
          const val = item.value !== undefined ? item.value : item.label;
          const isChecked = selectedValues.includes(val);
          return (
            <label
              key={val}
              className={`relative p-4 rounded-2xl cursor-pointer block select-none border transition-all duration-200 ${
                cardClassName || ""
              } ${
                isChecked
                  ? "bg-brand-primary-soft/60 dark:bg-emerald-950/60 border-brand-primary dark:border-emerald-500 shadow-md"
                  : "bg-white dark:bg-zinc-900 border-slate-200/80 dark:border-zinc-800"
              }`}
              style={cardStyle}
            >
              <div className="flex items-start gap-3">
                <Checkbox value={val} className="mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon && <span className="text-base shrink-0">{item.icon}</span>}
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 leading-snug truncate">
                      {item.label}
                    </h4>
                  </div>
                  {item.description && (
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
                {isChecked && (
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-base shrink-0 ml-1" />
                )}
              </div>
            </label>
          );
        })}
      </div>
    </Checkbox.Group>
  );
}

/**
 * Custom Radio Card Group Component for designVariant="card"
 */
function RadioCardGroup({ value, onChange, options = [], gridClassName, cardClassName, cardStyle, onBlur, disabled, size }) {
  return (
    <Radio.Group
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      onBlur={onBlur}
      disabled={disabled}
      size={size}
      className="w-full"
    >
      <div className={gridClassName || "grid grid-cols-1 sm:grid-cols-3 gap-3 w-full"}>
        {options.map((opt) => {
          const val = opt.value !== undefined ? opt.value : opt.label;
          const isSelected = value === val;
          return (
            <label
              key={val}
              className={`p-4 rounded-xl cursor-pointer block select-none border transition-all duration-200 ${
                cardClassName || ""
              } ${
                isSelected
                  ? "bg-white dark:bg-zinc-900 border-brand-primary dark:border-emerald-500 shadow-sm ring-2 ring-brand-primary/20"
                  : "bg-white/70 dark:bg-zinc-900/50 border-slate-200/80 dark:border-zinc-800"
              }`}
              style={cardStyle}
            >
              <div className="flex items-start gap-3">
                <Radio value={val} className="mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                    {opt.title || opt.label}
                  </div>
                  {(opt.desc || opt.description) && (
                    <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-tight">
                      {opt.desc || opt.description}
                    </div>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </Radio.Group>
  );
}

/**
 * Format and parse currency/number prefixes, postfixes, and commas
 */
const numberPrefixPostfix = (prefix, postfix, value) => {
  if (value === undefined || value === null) {
    return { formatter: "", parser: "" };
  }
  let strVal = value.toString();
  if (prefix && postfix) {
    let regex = new RegExp("\\" + prefix + "\\s?|(,*)" + postfix, "g");
    return {
      formatter: `${prefix} ${strVal}${postfix}`.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      ),
      parser: strVal.replace(regex, "").trim(),
    };
  } else if (prefix) {
    let regex = new RegExp("\\" + prefix.trim() + "\\s?|(,*)", "g");
    return {
      formatter: `${prefix} ${strVal}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      parser: strVal.replace(regex, "").trim(),
    };
  } else if (postfix) {
    return {
      formatter: `${strVal}${postfix}`,
      parser: strVal.replace(postfix, ""),
    };
  } else {
    return {
      formatter: strVal,
      parser: strVal,
    };
  }
};

const nameErrorStyle = {
  border: "1px solid #d8d8d8",
  padding: "5px 12px",
  borderRadius: "4px",
  background: "#ffeaea",
  color: "#d40000",
};

const radioVerticalStyle = {
  display: "flex",
  minHeight: "30px",
  alignItems: "center",
  margin: "0px",
};

const checkboxVerticalStyle = radioVerticalStyle;

/**
 * AntInput - Universal Ant Design v6.5.0 Form Field Component
 */

/**
 * Extract plain string text from any label (string, number, or JSX element)
 */
function extractTextFromLabel(lbl) {
  if (!lbl) return "";
  if (typeof lbl === "string") return lbl.replace(/\s*\*$/, "").trim();
  if (typeof lbl === "number") return String(lbl);
  if (React.isValidElement(lbl)) {
    if (typeof lbl.props?.children === "string") {
      return lbl.props.children.replace(/\s*\*$/, "").trim();
    }
    if (Array.isArray(lbl.props?.children)) {
      return lbl.props.children
        .map(extractTextFromLabel)
        .join("")
        .replace(/\s*\*$/, "")
        .trim();
    }
    if (React.isValidElement(lbl.props?.children)) {
      return extractTextFromLabel(lbl.props.children);
    }
  }
  return "";
}

export const AntInput = ({
  // Essentials
  type = "text",
  name,
  placeholder,
  value,
  label,
  noRequired = false,
  reqMsg = "Required",
  className = "",
  style,
  containerStyle,
  containerClassName,
  onChange,
  onClick,
  onBlur,
  onKeyDown,
  disabled,
  // Design Variants
  designVariant = "default",
  gridClassName,
  cardClassName,
  cardStyle,
  rules,
  validator,
  maxLength,
  showCount,
  // Icons
  preIconAnt = false,
  preIconLine = false,
  preIconColorLine = "rgba(0,0,0,.25)",
  sufIconAnt = false,
  sufIconLine = false,
  sufIconColorLine = "rgba(0,0,0,.25)",
  autoComplete = undefined,
  // Validation
  emailErrorMsg = "The input is not a valid E-mail!",
  // Number
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  step = 0.1,
  numPreFix = false,
  numPostFix = false,
  comma = false,
  // Select
  options = [],
  setValueLabel = false,
  filter = true,
  mode = false,
  emptyFirstVal = "-Select-",
  // Datepicker
  format = "DD/MM/YYYY",
  disabledPreviousDate = false,
  disabledNextDate = false,
  // Timepicker
  timeFormat = "h:mm:ss a",
  // Radio
  radioOptions = [],
  vertical = false,
  optionType = "default",
  // Checkbox
  group = false,
  text,
  indeterminate = false,
  // Textarea
  rows,
  minRows = 4,
  maxRows,
  // Antd Essentials
  size = "default",
  formProps,
  help = undefined,
  feedback,
  addonBefore = false,
  addonAfter = false,
  loading = false,
}) => {
  // Normalize options if custom setValueLabel mapping is provided (Called unconditionally at top)
  const normalizedSelectOptions = React.useMemo(() => {
    let formatted = [];

    if (Array.isArray(options) && options.length > 0) {
      options.forEach((item, i) => {
        if (typeof item === "object" && item !== null) {
          let val = item.value;
          let lbl = item.label;

          if (setValueLabel && Array.isArray(setValueLabel) && setValueLabel.length >= 2) {
            val = item[setValueLabel[0]];
            lbl = item[setValueLabel[1]];
          }

          formatted.push({
            key: item.key || item.id || i,
            value: val !== undefined ? val : lbl,
            label: lbl !== undefined ? lbl : val,
            disabled: item.disabled || false,
          });
        } else {
          formatted.push({
            key: i,
            value: item,
            label: item,
          });
        }
      });
    }

    return formatted;
  }, [options, setValueLabel]);

  let validateKeyword = undefined;

  if (!name) {
    return <div style={nameErrorStyle}>Please provide name attribute</div>;
  }

  // Handle AntD feedback status
  if (feedback && feedback !== true) {
    if (
      feedback !== "success" &&
      feedback !== "warning" &&
      feedback !== "error" &&
      feedback !== "validating"
    ) {
      return (
        <div style={nameErrorStyle}>
          Feedback status must be &apos;success&apos;, &apos;warning&apos;, &apos;error&apos;, or &apos;validating&apos;.
        </div>
      );
    }
    validateKeyword = feedback;
    feedback = true;
  } else {
    feedback = feedback !== true ? undefined : feedback;
  }

  // Build field rules dynamically
  const fieldRules = rules || [
    validator
      ? { validator }
      : { required: !noRequired, message: reqMsg },
  ];

  // 1. InputNumber / Currency
  if (type === "inputNumber") {
    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={fieldRules}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <InputNumber
          style={{ width: "100%", ...style }}
          className={className}
          size={size}
          formatter={(val) => numberPrefixPostfix(numPreFix, numPostFix, val).formatter}
          parser={(val) => numberPrefixPostfix(numPreFix, numPostFix, val).parser}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
          }}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
          disabled={loading || disabled}
        />
      </Form.Item>
    );
  }

  // 2. Generic Number
  if (type === "number") {
    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={fieldRules}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <InputNumber
          style={{ width: "100%", ...style }}
          className={className}
          size={size}
          formatter={(val) => {
            let str = val ? String(val).replace(/[A-Za-z!@#$%^&*()]/g, "") : "";
            if (comma) {
              str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            return str;
          }}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
          }}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
          disabled={loading || disabled}
        />
      </Form.Item>
    );
  }

  // 3. Email Input
  if (type === "email") {
    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={rules || [
          { type: "email", message: emailErrorMsg },
          validator
            ? { validator }
            : { required: !noRequired, message: reqMsg },
        ]}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <Input
          style={style}
          className={className}
          size={size}
          prefix={
            preIconLine ? (
              <i className={preIconLine} style={{ color: preIconColorLine }} />
            ) : (
              preIconAnt || ""
            )
          }
          suffix={
            sufIconLine ? (
              <i className={sufIconLine} style={{ color: sufIconColorLine }} />
            ) : (
              sufIconAnt || ""
            )
          }
          placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e.target.value);
          }}
          disabled={loading || disabled}
          autoComplete={autoComplete}
        />
      </Form.Item>
    );
  }

  // 4. Select Dropdown
  if (type === "select") {
    const labelText = extractTextFromLabel(label);
    const selectPlaceholder =
      placeholder ||
      (typeof emptyFirstVal === "string" && emptyFirstVal !== "-Select-" && emptyFirstVal !== ""
        ? emptyFirstVal
        : labelText
        ? `- Select ${labelText} -`
        : "- Select -");

    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined && value !== "" ? { initialValue: value } : {})}
        rules={fieldRules}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <Select
          style={style}
          className={className}
          size={size}
          allowClear={true}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          onClick={(e) => {
            onClick && onClick(e);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
          }}
          showSearch={filter}
          mode={mode === "multiple-responsive" ? "multiple" : mode || undefined}
          maxTagCount={mode === "multiple-responsive" ? "responsive" : undefined}
          options={normalizedSelectOptions}
          placeholder={selectPlaceholder}
          filterOption={(input, option) =>
            (option?.label ?? "").toString().toLowerCase().includes(input.toLowerCase())
          }
          disabled={loading || disabled}
        />
      </Form.Item>
    );
  }

  // 5. DatePicker (using DayJS)
  if (type === "datepicker") {
    const datePlaceholder = placeholder || "DD/MM/YYYY";

    return (
      <Form.Item
        label={label}
        name={name}
        rules={fieldRules}
        getValueProps={(val) => ({
          value: toValidDayjs(val, format || "DD/MM/YYYY"),
        })}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <DatePicker
          size={size}
          className={className}
          style={{ width: "100%", ...style }}
          onChange={(date, dateString) => {
            onChange && onChange(date, dateString);
          }}
          format={format || "DD/MM/YYYY"}
          disabledDate={(current) => {
            if (!current) return false;
            if (disabledPreviousDate && current.isBefore(dayjs().startOf("day"))) {
              return true;
            }
            if (disabledNextDate && current.isAfter(dayjs().endOf("day"))) {
              return true;
            }
            return false;
          }}
          disabled={loading || disabled}
          placeholder={datePlaceholder}
        />
      </Form.Item>
    );
  }

  // 6. TimePicker (using DayJS)
  if (type === "timepicker") {
    return (
      <Form.Item
        label={label}
        name={name}
        rules={fieldRules}
        getValueProps={(val) => ({
          value: toValidDayjs(val, timeFormat || "HH:mm"),
        })}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <TimePicker
          use12Hours
          size={size}
          className={className}
          style={{ width: "100%", ...style }}
          onChange={(time, timeString) => {
            onChange && onChange(time, timeString);
          }}
          format={timeFormat || "HH:mm"}
          disabled={loading || disabled}
          placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
        />
      </Form.Item>
    );
  }

  // 7. Radio Group
  if (type === "radio") {
    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={fieldRules}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        {designVariant === "card" ? (
          <RadioCardGroup
            options={radioOptions}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            size={size}
            gridClassName={gridClassName}
            cardClassName={cardClassName}
            cardStyle={cardStyle}
          />
        ) : vertical ? (
          <Radio.Group
            onChange={(e) => {
              onChange && onChange(e.target.value);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e.target.value);
            }}
            disabled={loading || disabled}
            size={size}
          >
            {radioOptions.map((item, i) => (
              <Radio
                style={{ ...radioVerticalStyle, ...style }}
                className={className}
                key={item.key || item.id || i}
                value={item.value !== undefined ? item.value : item.label}
              >
                {item.label}
              </Radio>
            ))}
          </Radio.Group>
        ) : (
          <Radio.Group
            onChange={(e) => {
              onChange && onChange(e.target.value);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e.target.value);
            }}
            disabled={loading || disabled}
            optionType={optionType}
            options={radioOptions}
            size={size}
          />
        )}
      </Form.Item>
    );
  }

  // 8. Checkbox (Group vs Single)
  if (type === "checkbox") {
    if (group) {
      return (
        <Form.Item
          label={label}
          name={name}
          {...(value !== undefined ? { initialValue: value || [] } : {})}
          rules={fieldRules}
          validateStatus={loading ? "validating" : validateKeyword}
          hasFeedback={loading ? true : feedback}
          help={help}
          style={containerStyle}
          className={containerClassName}
        >
          {designVariant === "card" ? (
            <CheckboxCardGroup
              options={group}
              onChange={onChange}
              gridClassName={gridClassName}
              cardClassName={cardClassName}
              cardStyle={cardStyle}
            />
          ) : (
            <Checkbox.Group
              className={gridClassName || (vertical ? "flex flex-col gap-2" : "w-full")}
              onChange={(val) => {
                onChange && onChange(val);
              }}
            >
              {Array.isArray(group) &&
                group.map((item, i) => (
                  <Checkbox
                    key={item.key || item.value || i}
                    style={vertical ? { ...checkboxVerticalStyle, ...style, ...item.style } : { ...style, ...item.style }}
                    className={className ? `${className} ${item.className || ""}` : item.className}
                    disabled={item.disabled || false}
                    onChange={(e) => {
                      item.onChange && item.onChange(e.target.checked);
                    }}
                    value={item.value !== undefined ? item.value : item.label}
                  >
                    {item.label || label}
                  </Checkbox>
                ))}
            </Checkbox.Group>
          )}
        </Form.Item>
      );
    }

    return (
      <Form.Item
        label={label}
        name={name}
        valuePropName="checked"
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={[
          {
            required: !noRequired,
            message: reqMsg,
            transform: (vl) => vl || undefined,
            type: "boolean",
          },
        ]}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <Checkbox
          style={style}
          className={className}
          indeterminate={indeterminate}
          disabled={loading || disabled}
          onChange={(e) => {
            onChange && onChange(e.target.checked);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e.target.checked);
          }}
        >
          {text || label}
        </Checkbox>
      </Form.Item>
    );
  }

  // 9. TextArea
  if (type === "textarea") {
    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={fieldRules}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <TextArea
          style={style}
          rows={rows || minRows}
          className={className}
          size={size}
          placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
          }}
          disabled={loading || disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
          showCount={showCount}
          autoSize={maxRows ? { minRows: rows || minRows, maxRows: maxRows } : undefined}
        />
      </Form.Item>
    );
  }

  // 10. Switch
  if (type === "switch") {
    return (
      <Form.Item
        label={label}
        name={name}
        valuePropName="checked"
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={fieldRules}
        style={containerStyle}
        className={containerClassName}
      >
        <Switch
          style={style}
          className={className}
          onChange={(checked) => {
            onChange && onChange(checked);
          }}
          disabled={loading || disabled}
          size={size}
        />
      </Form.Item>
    );
  }

  // 11. Password Input
  if (type === "password") {
    return (
      <Form.Item
        label={label}
        name={name}
        {...(value !== undefined ? { initialValue: value } : {})}
        rules={fieldRules}
        validateStatus={loading ? "validating" : validateKeyword}
        hasFeedback={loading ? true : feedback}
        help={help}
        style={containerStyle}
        className={containerClassName}
      >
        <Input.Password
          style={style}
          className={className}
          size={size}
          prefix={
            preIconLine ? (
              <i className={preIconLine} style={{ color: preIconColorLine }} />
            ) : (
              preIconAnt || ""
            )
          }
          suffix={
            sufIconLine ? (
              <i className={sufIconLine} style={{ color: sufIconColorLine }} />
            ) : (
              sufIconAnt || ""
            )
          }
          placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
          }}
          disabled={loading || disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
      </Form.Item>
    );
  }

  // Default: Standard Text Input
  return (
    <Form.Item
      label={label}
      name={name}
      {...(value !== undefined ? { initialValue: value } : {})}
      rules={fieldRules}
      validateStatus={loading ? "validating" : validateKeyword}
      hasFeedback={loading ? true : feedback}
      help={help}
      style={containerStyle}
      className={containerClassName}
    >
      <Input
        style={style}
        className={className}
        size={size}
        {...(addonBefore ? { addonBefore } : {})}
        {...(addonAfter ? { addonAfter } : {})}
        prefix={
          preIconLine ? (
            <i className={preIconLine} style={{ color: preIconColorLine }} />
          ) : (
            preIconAnt || ""
          )
        }
        suffix={
          sufIconLine ? (
            <i className={sufIconLine} style={{ color: sufIconColorLine }} />
          ) : (
            sufIconAnt || ""
          )
        }
        placeholder={placeholder || (extractTextFromLabel(label) ? `Enter ${extractTextFromLabel(label)}` : "")}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
        }}
        onKeyDown={(e) => {
          onKeyDown && onKeyDown(e);
        }}
        disabled={loading || disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    </Form.Item>
  );
};

/**
 * AntFileUpload - Universal Ant Design Upload Dragger Component
 */
export const AntFileUpload = ({
  label = false,
  icon = null,
  heading = "Click or drag file to upload",
  para = "",
  multiple = false,
  maxCount = 1,
  listType = "text",
  onChange = false,
  name,
  noRequired = false,
  reqMsg = "Please upload file",
  containerStyle,
  containerClassName,
  help,
  value = false,
}) => {
  if (!name) {
    return <div style={nameErrorStyle}>Please provide name attribute</div>;
  }

  const { Dragger } = Upload;

  const uploadProps = {
    multiple: multiple,
    listType: listType,
    maxCount: maxCount,
    beforeUpload: () => false,
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    onChange && onChange(e?.fileList);
    return e?.fileList;
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: !noRequired, message: reqMsg }]}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      help={help}
      style={containerStyle}
      className={containerClassName}
    >
      <Dragger {...uploadProps}>
        {icon && <p className="ant-upload-drag-icon" style={{ margin: 0 }}>{icon}</p>}
        {heading && <p style={{ fontSize: "16px", fontWeight: "bold" }}>{heading}</p>}
        {para && <p className="text-xs text-slate-500">{para}</p>}
      </Dragger>
    </Form.Item>
  );
};
