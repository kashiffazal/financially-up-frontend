"use client";

/**
 * ============================================================
 * UploadFile — Universal Modern Ant Design File Upload Component
 * ============================================================
 *
 * Supports 4 Design Types:
 *   - type="1": Vertical Dropzone Card (centered icon on top, title, subtitle, badges)
 *   - type="2": Compact Button Mode (sleek button trigger with file chip & quick remove)
 *   - type="3": Input-Field Style (matches AntInput height e.g. 40px/44px for single-row alignments)
 *   - type="4": Horizontal Dropzone Card (left-aligned icon box, right-side title, subtitle & badges — optimal for medium-height side-by-side grids)
 *
 * Smart Defaults:
 *   - Default File Types: Images (.jpg, .jpeg, .png, .webp) and PDF (.pdf)
 *   - Default File Size: 5MB
 *   - Default Max Count: 1
 *   - Unified accept & restrictExtension: Passing `accept` automatically configures
 *     both the OS file picker and drag-and-drop validation.
 *
 * Features:
 *   - Full-width by default across all containers and Ant Design wrappers
 *   - Customizable height prop across all types (e.g. height={40}, height={126}, height={150})
 *   - Client-side format & size validation with error badges
 *   - Progress bar / loader indicator
 *   - Existing document viewing (uploadedDocuments + filePath)
 *   - Full dark mode and Tailwind CSS responsiveness
 *   - Seamless Ant Design Form.Item encapsulation
 */

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Upload, Progress, Form, Button, Tooltip } from "antd";
import {
  UploadOutlined,
  CloseOutlined,
  InboxOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  FileTextOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FileZipOutlined,
  FileOutlined,
  DeleteOutlined,
  EyeOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

const { Dragger } = Upload;

const DEFAULT_EXTENSIONS_STR = "pdf, jpg, jpeg, png, webp";
const DEFAULT_ACCEPT_STR = ".pdf, .jpg, .jpeg, .png, .webp";
const DEFAULT_MAX_FILE_SIZE_MB = 5;

/* Format bytes into human-readable size */
const formatBytes = (bytes) => {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
};

/* Get appropriate icon based on file extension */
const getFileIcon = (fileName = "") => {
  const ext = fileName.split(".").pop().toLowerCase();
  if (["pdf"].includes(ext)) {
    return <FilePdfOutlined className="text-red-500 text-lg" />;
  }
  if (["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(ext)) {
    return <FileImageOutlined className="text-blue-500 text-lg" />;
  }
  if (["doc", "docx"].includes(ext)) {
    return <FileWordOutlined className="text-blue-600 text-lg" />;
  }
  if (["xls", "xlsx", "csv"].includes(ext)) {
    return <FileExcelOutlined className="text-emerald-600 text-lg" />;
  }
  if (["zip", "rar", "7z", "tar"].includes(ext)) {
    return <FileZipOutlined className="text-amber-600 text-lg" />;
  }
  if (["txt", "rtf", "md"].includes(ext)) {
    return <FileTextOutlined className="text-slate-500 text-lg" />;
  }
  return <FileOutlined className="text-slate-400 text-lg" />;
};

/* ═══════════════════════════════════════════════════════════════
   INTERNAL CONTROL: Renders Type 1, Type 2, Type 3, or Type 4
   ═══════════════════════════════════════════════════════════════ */
const UploadFileControl = ({
  value = [],
  onChange,
  type = "1",
  height,
  title,
  heading,
  msg,
  para,
  placeholder,
  accept,
  restrictExtension,
  fileSize = DEFAULT_MAX_FILE_SIZE_MB,
  multiple = false,
  maxCount = 1,
  loader = false,
  progress = 0,
  disabled = false,
  uploadedDocuments,
  filePath = "",
  className = "",
  btnClassName = "",
  closeClassName = "",
}) => {
  /* State for internal file list (uncontrolled fallback) & error handling */
  const [internalFileList, setInternalFileList] = useState([]);
  const [extensionError, setExtensionError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [maxCountError, setMaxCountError] = useState(false);

  /* Active file list derived cleanly from controlled value or internal state */
  const fileList = useMemo(() => {
    if (Array.isArray(value)) return value;
    if (value && typeof value === "object") return [value];
    if (value === null || value === false) return [];
    return internalFileList;
  }, [value, internalFileList]);

  /* Normalize type: support legacy "2.1" as "2" */
  const normalizedType = type === "2.1" ? "2" : String(type || "1");

  /* Height normalization: supports number (40, 126) or string ("44px", "100%") */
  const normalizedHeight = height
    ? typeof height === "number"
      ? `${height}px`
      : height
    : undefined;

  /* Derive allowed extensions and accept string seamlessly */
  const effectiveExtensions = useMemo(() => {
    if (restrictExtension) {
      return restrictExtension
        .split(",")
        .map((e) => e.trim().toLowerCase().replace(/^\./, ""))
        .filter(Boolean);
    }
    if (accept) {
      return accept
        .split(",")
        .map((e) => e.trim().toLowerCase().replace(/^\./, ""))
        .filter(Boolean);
    }
    return DEFAULT_EXTENSIONS_STR.split(",").map((e) => e.trim());
  }, [restrictExtension, accept]);

  const effectiveAccept = useMemo(() => {
    if (accept) return accept;
    if (restrictExtension) {
      return restrictExtension
        .split(",")
        .map((e) => `.${e.trim().toLowerCase().replace(/^\./, "")}`)
        .join(", ");
    }
    return DEFAULT_ACCEPT_STR;
  }, [accept, restrictExtension]);

  const displayExtensionsBadge = useMemo(() => {
    return effectiveExtensions.join(", ").toUpperCase();
  }, [effectiveExtensions]);
  const existingDocs = useMemo(() => {
    if (!uploadedDocuments) return [];
    if (Array.isArray(uploadedDocuments)) return uploadedDocuments;
    return String(uploadedDocuments)
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);
  }, [uploadedDocuments]);

  /* Ref to synchronously track latest file list across rapid batch beforeUpload calls */
  const fileListRef = React.useRef(fileList);
  useEffect(() => {
    fileListRef.current = fileList;
  }, [fileList]);

  /* Extension validation check */
  const checkFileExtension = useCallback(
    (file) => {
      if (!effectiveExtensions || effectiveExtensions.length === 0) return true;
      const fileExt = file.name.split(".").pop().toLowerCase();
      return effectiveExtensions.includes(fileExt);
    },
    [effectiveExtensions],
  );

  /* Size validation check */
  const checkFileSize = useCallback(
    (file) => {
      const maxMb = parseFloat(fileSize) || DEFAULT_MAX_FILE_SIZE_MB;
      const maxBytes = maxMb * 1024 * 1024;
      return file.size <= maxBytes;
    },
    [fileSize],
  );

  /* Handle file addition */
  const handleAddFile = useCallback(
    (file) => {
      const current = fileListRef.current || [];

      // Validate maxCount limit
      if (maxCount && current.length >= maxCount) {
        setMaxCountError(true);
        setExtensionError(false);
        setSizeError(false);
        return false;
      }

      const isExtValid = checkFileExtension(file);
      const isSizeValid = checkFileSize(file);

      if (!isExtValid) {
        setExtensionError(true);
        setSizeError(false);
        setMaxCountError(false);
        return false;
      }
      if (!isSizeValid) {
        setSizeError(true);
        setExtensionError(false);
        setMaxCountError(false);
        return false;
      }

      setExtensionError(false);
      setSizeError(false);
      setMaxCountError(false);

      let updated;
      if (multiple) {
        // Prevent duplicate file references
        const exists = current.some(
          (f) =>
            (f.uid && file.uid && f.uid === file.uid) ||
            (f.name === file.name &&
              f.size === file.size &&
              f.lastModified === file.lastModified),
        );
        if (exists) {
          return false;
        }
        updated = [...current, file];
      } else {
        updated = [file];
      }

      fileListRef.current = updated;
      setInternalFileList(updated);
      if (onChange) onChange(updated);
      return false; // Prevent automatic antd network upload
    },
    [checkFileExtension, checkFileSize, multiple, maxCount, onChange],
  );

  /* Handle file removal */
  const handleRemoveFile = useCallback(
    (index) => {
      const current = fileListRef.current || [];
      const updated = current.filter((_, i) => i !== index);
      fileListRef.current = updated;
      setInternalFileList(updated);
      setExtensionError(false);
      setSizeError(false);
      setMaxCountError(false);
      if (onChange) onChange(updated.length > 0 ? updated : null);
    },
    [onChange],
  );

  /* Props for Ant Design Upload / Dragger */
  const uploadProps = {
    multiple,
    maxCount,
    accept: effectiveAccept,
    disabled,
    showUploadList: false,
    beforeUpload: handleAddFile,
  };

  /* Helper to render shared previews, loader, and errors */
  const renderSharedPreviewsAndErrors = () => (
    <>
      {/* Progress Bar Indicator */}
      {loader && (
        <div className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5">
            <span>Uploading File...</span>
            <span className="font-mono text-brand-primary">{progress}%</span>
          </div>
          <Progress
            percent={progress}
            size="small"
            status={progress < 100 ? "active" : "success"}
            strokeColor="#008043"
          />
        </div>
      )}

      {/* Validation Errors */}
      {extensionError && (
        <div className="w-full p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400 font-semibold animate-fadeIn">
          <CloseCircleFilled />
          <span>
            Invalid format! Please upload files with:{" "}
            <strong className="font-mono font-bold">
              {displayExtensionsBadge}
            </strong>
          </span>
        </div>
      )}
      {sizeError && (
        <div className="w-full p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400 font-semibold animate-fadeIn">
          <CloseCircleFilled />
          <span>
            File too large! Maximum allowed size is{" "}
            <strong className="font-mono font-bold">
              {fileSize || DEFAULT_MAX_FILE_SIZE_MB}MB
            </strong>
            .
          </span>
        </div>
      )}
      {maxCountError && (
        <div className="w-full p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300 font-semibold animate-fadeIn">
          <CloseCircleFilled />
          <span>
            Upload limit reached! You cannot upload more than{" "}
            <strong className="font-mono font-bold">{maxCount}</strong>{" "}
            {maxCount === 1 ? "file" : "files"}.
          </span>
        </div>
      )}

      {/* Uploaded File List Preview Cards */}
      {fileList.length > 0 && (
        <div className="w-full space-y-2">
          {fileList.map((file, idx) => (
            <div
              key={file.uid || file.name || idx}
              className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-sm animate-fadeIn"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  {getFileIcon(file.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-800 dark:text-zinc-100 truncate mb-0.5">
                    {file.name}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span>{formatBytes(file.size)}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircleFilled className="text-[10px]" /> Ready to
                      submit
                    </span>
                  </div>
                </div>
              </div>

              {!disabled && (
                <Tooltip title="Remove file">
                  <Button
                    danger
                    type="text"
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveFile(idx)}
                    className="text-slate-400 hover:text-red-500 h-8 w-8 rounded-lg shrink-0"
                  />
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Existing Saved Documents View */}
      {existingDocs.length > 0 && (
        <div className="w-full space-y-1.5 pt-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Files on File
          </span>
          {existingDocs.map((doc, i) => (
            <a
              key={i}
              href={`${filePath}${doc}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 rounded-xl bg-slate-100/70 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 flex items-center justify-between text-xs font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
            >
              <span className="truncate">{doc}</span>
              <EyeOutlined className="text-sm" />
            </a>
          ))}
        </div>
      )}
    </>
  );

  /* ═══════════════════════════════════════════════════════════════
     RENDER: TYPE 1 — Vertical Dropzone Card
     ═══════════════════════════════════════════════════════════════ */
  if (normalizedType === "1") {
    const mainTitle =
      title || heading || "Click or drag file to this area to upload";
    const subMsg =
      msg ||
      para ||
      "Support for single or bulk upload. Strict confidential handling.";

    return (
      <div className="w-full space-y-3 [&_.ant-upload-wrapper]:!w-full [&_.ant-upload]:!w-full">
        <div
          style={{
            height: normalizedHeight,
            minHeight: normalizedHeight || "140px",
          }}
          className={`w-full rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 bg-slate-50/60 dark:bg-zinc-900/50 hover:border-brand-primary dark:hover:border-emerald-500 hover:bg-brand-primary-soft/30 dark:hover:bg-emerald-950/20 transition-all duration-200 overflow-hidden flex flex-col justify-center ${className}`}
        >
          <Dragger
            {...uploadProps}
            style={{
              padding: "16px 20px",
              background: "transparent",
              border: "none",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col items-center justify-center text-center space-y-2 select-none w-full">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 border border-brand-primary/20 dark:border-emerald-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                <InboxOutlined className="text-2xl" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-800 dark:text-zinc-100 tracking-tight mb-0.5">
                  {mainTitle}
                </p>
                <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                  {subMsg}
                </p>
              </div>

              {/* Badges for allowed formats & max size */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  {displayExtensionsBadge}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Max {fileSize || DEFAULT_MAX_FILE_SIZE_MB}MB
                </span>
                {maxCount && (multiple || maxCount > 1) && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-brand-primary-soft dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 border border-brand-primary/20 dark:border-emerald-800">
                    Max {maxCount} Files
                  </span>
                )}
              </div>
            </div>
          </Dragger>
        </div>

        {renderSharedPreviewsAndErrors()}
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     RENDER: TYPE 4 — Horizontal Compact Dropzone Card (Icon on Left)
     ═══════════════════════════════════════════════════════════════ */
  if (normalizedType === "4") {
    const mainTitle = title || heading || "Click or drag file to upload";
    const subMsg = msg || para || "Support for certified documents.";

    return (
      <div className="w-full space-y-3 [&_.ant-upload-wrapper]:!w-full [&_.ant-upload]:!w-full">
        <div
          style={{
            height: normalizedHeight,
            minHeight: normalizedHeight || "120px",
          }}
          className={`w-full rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 bg-slate-50/60 dark:bg-zinc-900/50 hover:border-brand-primary dark:hover:border-emerald-500 hover:bg-brand-primary-soft/30 dark:hover:bg-emerald-950/20 transition-all duration-200 overflow-hidden flex flex-col justify-center ${className}`}
        >
          <Dragger
            {...uploadProps}
            style={{
              padding: "12px 18px",
              background: "transparent",
              border: "none",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="flex flex-row items-center gap-3.5 select-none w-full text-left">
              {/* Left Icon */}
              <div className="w-12 h-12 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 border border-brand-primary/20 dark:border-emerald-800 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <InboxOutlined className="text-2xl" />
              </div>

              {/* Right Content: Title, Subtitle, Badges */}
              <div className="min-w-0 flex-1 space-y-0.5">
                <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-zinc-100 tracking-tight leading-snug truncate">
                  {mainTitle}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 leading-snug line-clamp-1">
                  {subMsg}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    {displayExtensionsBadge}
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    Max {fileSize || DEFAULT_MAX_FILE_SIZE_MB}MB
                  </span>
                  {maxCount && (multiple || maxCount > 1) && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-primary-soft dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 border border-brand-primary/20 dark:border-emerald-800">
                      Max {maxCount} Files
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Dragger>
        </div>

        {renderSharedPreviewsAndErrors()}
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     RENDER: TYPE 2 — Compact Button Mode
     ═══════════════════════════════════════════════════════════════ */
  if (normalizedType === "2") {
    const btnTitle = title || heading || "Upload Document";
    const hasFiles = fileList.length > 0;

    return (
      <div className="w-full flex flex-wrap items-center gap-2 [&_.ant-upload-wrapper]:!w-auto">
        <Upload {...uploadProps}>
          <Button
            icon={<UploadOutlined />}
            type={hasFiles ? "primary" : "default"}
            disabled={disabled}
            style={{ height: normalizedHeight }}
            className={`rounded-xl font-bold flex items-center gap-2 ${
              hasFiles
                ? "bg-brand-primary border-brand-primary hover:bg-brand-primary-hover"
                : ""
            } ${btnClassName} ${className}`}
          >
            {btnTitle}
          </Button>
        </Upload>

        {/* Attached file chips with quick remove */}
        {hasFiles && (
          <div className="flex flex-wrap items-center gap-1.5">
            {fileList.map((f, i) => (
              <div
                key={f.uid || f.name || i}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-800 dark:text-zinc-200 animate-fadeIn"
              >
                {getFileIcon(f.name)}
                <span className="truncate max-w-[150px]">{f.name}</span>
                {!disabled && (
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(i)}
                    className="text-slate-400 hover:text-red-500 ml-1"
                  >
                    <CloseOutlined className="text-[10px]" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Existing Document View Link */}
        {existingDocs.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {existingDocs.map((doc, idx) => (
              <a
                key={idx}
                href={`${filePath}${doc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-primary dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <EyeOutlined /> {doc}
              </a>
            ))}
          </div>
        )}

        {/* Error message */}
        {(extensionError || sizeError || maxCountError) && (
          <span className="text-[11px] text-red-500 font-semibold block w-full animate-fadeIn">
            {extensionError
              ? `Allowed: ${displayExtensionsBadge}`
              : sizeError
                ? `Max size: ${fileSize || DEFAULT_MAX_FILE_SIZE_MB}MB`
                : `Maximum allowed limit is ${maxCount} ${maxCount === 1 ? "file" : "files"}. Please remove a file first.`}
          </span>
        )}
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     RENDER: TYPE 3 — Input-Field Style (Equal-Height Input Box)
     ═══════════════════════════════════════════════════════════════ */
  const inputPlaceholder = placeholder || title || "Choose file to upload...";
  const hasFile = fileList.length > 0;
  const currentFile = fileList[0];

  return (
    <div className="w-full space-y-1 [&_.ant-upload-wrapper]:!w-full [&_.ant-upload]:!w-full [&_.ant-upload-select]:!w-full">
      <Upload
        {...uploadProps}
        className="w-full !block [&_.ant-upload-select]:!w-full [&_.ant-upload]:!w-full"
      >
        <div
          style={{
            height: normalizedHeight || "40px",
            minHeight: normalizedHeight || "40px",
          }}
          className={`w-full px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 flex items-center justify-between gap-2.5 transition-all duration-200 cursor-pointer select-none hover:border-brand-primary dark:hover:border-emerald-500 ${
            hasFile
              ? "border-brand-primary/60 dark:border-emerald-600/60 bg-brand-primary-soft/20 dark:bg-emerald-950/20"
              : ""
          } ${disabled ? "opacity-60 cursor-not-allowed bg-slate-100 dark:bg-zinc-900" : ""} ${className}`}
        >
          {/* Left content: Icon + Name / Placeholder */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            {hasFile ? (
              getFileIcon(currentFile?.name)
            ) : (
              <UploadOutlined className="text-slate-400 text-sm shrink-0" />
            )}

            <div className="truncate text-xs min-w-0 flex-1">
              {hasFile ? (
                fileList.length === 1 ? (
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="font-bold text-slate-800 dark:text-zinc-100 truncate">
                      {currentFile?.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">
                      ({formatBytes(currentFile?.size)})
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="font-bold text-slate-800 dark:text-zinc-100 truncate">
                      {fileList.length} files selected
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono truncate">
                      ({fileList.map((f) => f.name).join(", ")})
                    </span>
                  </div>
                )
              ) : (
                <span className="text-slate-400 dark:text-zinc-500 truncate block">
                  {inputPlaceholder}
                </span>
              )}
            </div>
          </div>

          {/* Right action button */}
          <div className="flex items-center gap-1 shrink-0">
            {hasFile ? (
              !disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile(fileList.length - 1);
                  }}
                  className="w-6 h-6 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 flex items-center justify-center transition-colors"
                >
                  <CloseOutlined className="text-xs" />
                </button>
              )
            ) : (
              <span className="text-[11px] font-bold text-brand-primary dark:text-emerald-400 px-2 py-0.5 rounded-lg bg-brand-primary-soft dark:bg-emerald-950/80 border border-brand-primary/20 dark:border-emerald-800">
                Browse
              </span>
            )}
          </div>
        </div>
      </Upload>

      {/* Existing documents link if available */}
      {existingDocs.length > 0 && (
        <div className="w-full flex items-center justify-between text-[11px] px-1 text-slate-500">
          <span>Uploaded:</span>
          <a
            href={`${filePath}${existingDocs[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
          >
            <EyeOutlined /> {existingDocs[0]}
          </a>
        </div>
      )}

      {/* Validation Error Badges */}
      {extensionError && (
        <span className="text-[11px] text-red-500 font-semibold block px-1 animate-fadeIn w-full">
          Invalid format! Allowed: {displayExtensionsBadge}
        </span>
      )}
      {sizeError && (
        <span className="text-[11px] text-red-500 font-semibold block px-1 animate-fadeIn w-full">
          File too large! Max {fileSize || DEFAULT_MAX_FILE_SIZE_MB}MB
        </span>
      )}
      {maxCountError && (
        <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold block px-1 animate-fadeIn w-full">
          Maximum allowed limit is {maxCount}{" "}
          {maxCount === 1 ? "file" : "files"}. Please remove a file first.
        </span>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT: Encapsulates Form.Item when 'name' is provided
   ═══════════════════════════════════════════════════════════════ */
const UploadFile = ({
  name,
  label,
  reqMsg,
  noRequired = false,
  rules,
  help,
  containerStyle,
  containerClassName = "",
  value,
  onChange,
  ...restProps
}) => {
  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList || e;
  };

  /* If 'name' is provided, encapsulate Ant Design Form.Item */
  if (name) {
    const validationRules =
      rules ||
      (noRequired
        ? []
        : [
            {
              required: true,
              message: reqMsg || "Please upload a file.",
            },
          ]);

    return (
      <Form.Item
        name={name}
        label={label}
        rules={validationRules}
        help={help}
        style={containerStyle}
        className={`w-full [&_.ant-form-item-control-input]:w-full [&_.ant-form-item-control-input-content]:w-full ${containerClassName}`}
        valuePropName="value"
        getValueFromEvent={normFile}
      >
        <UploadFileControl {...restProps} />
      </Form.Item>
    );
  }

  /* Standalone usage without Form.Item */
  return (
    <div style={containerStyle} className={`w-full ${containerClassName}`}>
      {label && (
        <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-1">
          {label}
        </label>
      )}
      <UploadFileControl value={value} onChange={onChange} {...restProps} />
      {help && <p className="text-xs text-slate-400 mt-1">{help}</p>}
    </div>
  );
};

export default UploadFile;
export { UploadFile };
