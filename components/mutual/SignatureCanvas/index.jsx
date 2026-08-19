"use client";

/**
 * ============================================================
 * SignatureCanvas — Reusable Signature Drawing Component
 * ============================================================
 *
 * Encapsulates Ant Design's <Form.Item> directly inside the component
 * (similar to AntInput), providing automatic form validation, live error
 * display in the small mono bottom-left toolbar, and localStorage persistence.
 *
 * Props:
 *   - name: Ant Design Form field name (e.g. "signatory1Signature")
 *   - label: Field label displayed above the canvas
 *   - reqMsg / requiredMsg: Custom validation error message
 *   - noRequired: If true, signature is optional (no validator rule)
 *   - rules: Custom validation rules array
 *   - height: Explicit pixel height (default 210)
 *   - penColor: Stroke color (default #0f172a)
 *   - strokeWidth: Drawing stroke width (default 2.5)
 *   - placeholder: Background guide text
 *   - storageKey: LocalStorage key (defaults to name)
 *   - disabled: Disables drawing
 *   - initialImage: Display saved signature image with edit toggle
 *   - containerClassName: Custom className for outer Form.Item wrapper
 *   - value / onChange: Controlled props when used standalone without name
 */

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { Button, Tooltip, Form } from "antd";
import {
  UndoOutlined,
  ClearOutlined,
  EditOutlined,
} from "@ant-design/icons";
import styles from "./SignatureCanvas.module.css";

/* ═══════════════════════════════════════════════════════════════
   INNER CONTROL: Drawing surface & bottom status/action toolbar
   ═══════════════════════════════════════════════════════════════ */
const SignatureCanvasControl = ({
  value = null,
  onChange,
  label,
  height = 210,
  penColor = "#0f172a",
  strokeWidth = 2.5,
  disabled = false,
  initialImage = null,
  storageKey,
  placeholder = "Draw your signature here...",
  reqMsg,
  requiredMsg,
  status: propStatus,
  errorMsg: propErrorMsg,
  className = "",
}) => {
  const canvasRef = useRef(null);

  const [hasDrawn, setHasDrawn] = useState(Boolean(value));
  const [isInteracting, setIsInteracting] = useState(false);
  const [showImage, setShowImage] = useState(false);

  /* Read live validation status from Ant Design Form.Item context */
  const { status: formItemStatus, errors: formItemErrors = [] } = Form.Item.useStatus();

  /* Height normalization */
  const numericHeight = typeof height === "number" ? height : parseInt(height, 10) || 210;
  const heightStyle = `${numericHeight}px`;

  /* Sync hasDrawn with controlled value */
  useEffect(() => {
    if (value) {
      setHasDrawn(true);
    } else {
      setHasDrawn(false);
    }
  }, [value]);

  /* Initialize from existing image */
  useEffect(() => {
    if (initialImage) {
      setShowImage(true);
    }
  }, [initialImage]);

  /* Load saved paths from localStorage on mount */
  useEffect(() => {
    const key = storageKey;
    if (key && canvasRef.current) {
      const savedPaths = localStorage.getItem(`sig_paths_${key}`);
      if (savedPaths && savedPaths !== "false") {
        try {
          const paths = JSON.parse(savedPaths);
          if (paths && paths.length > 0) {
            canvasRef.current.loadPaths(paths);
            setHasDrawn(true);
          }
        } catch (err) {
          console.error("SignatureCanvas: Failed to load saved paths:", err);
        }
      }
    }
  }, [storageKey]);

  /* Immediate interaction trigger */
  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
  }, []);

  /* Export signature as data URL after each stroke */
  const handleStrokeEnd = useCallback(async () => {
    if (!canvasRef.current) return;

    try {
      const paths = await canvasRef.current.exportPaths();
      if (paths && paths.length > 0) {
        const dataUrl = await canvasRef.current.exportImage("png");
        setHasDrawn(true);
        setIsInteracting(true);

        if (onChange) {
          onChange(dataUrl);
        }

        if (storageKey) {
          localStorage.setItem(`sig_paths_${storageKey}`, JSON.stringify(paths));
        }
      } else {
        setHasDrawn(false);
        if (onChange) onChange(null);
      }
    } catch (err) {
      console.error("SignatureCanvas: Failed to export image:", err);
    }
  }, [onChange, storageKey]);

  /* Undo last stroke */
  const handleUndo = useCallback(async () => {
    if (!canvasRef.current) return;
    canvasRef.current.undo();

    setTimeout(async () => {
      try {
        const paths = await canvasRef.current.exportPaths();
        if (paths && paths.length > 0) {
          const dataUrl = await canvasRef.current.exportImage("png");
          setHasDrawn(true);
          if (onChange) onChange(dataUrl);
          if (storageKey) localStorage.setItem(`sig_paths_${storageKey}`, JSON.stringify(paths));
        } else {
          setHasDrawn(false);
          setIsInteracting(false);
          if (onChange) onChange(null);
          if (storageKey) localStorage.removeItem(`sig_paths_${storageKey}`);
        }
      } catch (err) {
        console.error("SignatureCanvas: Undo export failed:", err);
      }
    }, 100);
  }, [onChange, storageKey]);

  /* Clear entire canvas */
  const handleClear = useCallback(() => {
    if (!canvasRef.current) return;
    canvasRef.current.resetCanvas();
    setHasDrawn(false);
    setIsInteracting(false);

    if (onChange) onChange(null);
    if (storageKey) localStorage.removeItem(`sig_paths_${storageKey}`);
  }, [onChange, storageKey]);

  /* Switch from image view to drawing mode */
  const handleEditSignature = useCallback(() => {
    setShowImage(false);
    setHasDrawn(false);
    setIsInteracting(false);
    if (onChange) onChange(null);
  }, [onChange]);

  /* Signature presence check */
  const hasSignature = Boolean(value) || hasDrawn;

  /* Validation status evaluation */
  const activeStatus = formItemStatus || propStatus;
  const isError = !hasSignature && (activeStatus === "error" || Boolean(propErrorMsg));
  const activeErrorText = formItemErrors[0] || propErrorMsg || reqMsg || requiredMsg || "Signature is required.";

  /* ── RENDER: Saved Image View ── */
  if (showImage && initialImage) {
    return (
      <div className={`${styles.signatureWrapper} flex flex-col justify-between h-full ${className}`}>
        {label && (
          <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-1">
            {label}
          </label>
        )}

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
            ✓ Signature on file
          </span>
          {!disabled && (
            <Button
              type="link"
              size="small"
              icon={<EditOutlined />}
              onClick={handleEditSignature}
              className="text-xs font-bold text-blue-500 hover:text-blue-600 px-0"
            >
              Want to Edit?
            </Button>
          )}
        </div>

        <div
          className={`${styles.existingSignature} relative rounded-2xl border-2 border-dashed border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden shadow-inner flex items-center justify-center`}
          style={{ height: heightStyle }}
        >
          {/* Next.js Image component with unoptimized prop to handle dynamic Base64 data URLs & remote signatures */}
          <div className="relative w-full h-full p-3 flex items-center justify-center">
            <Image
              src={initialImage}
              alt="Saved signature"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain p-3"
              unoptimized
            />
          </div>
        </div>
      </div>
    );
  }

  /* ── RENDER: Drawing Canvas View ── */
  return (
    <div className={`${styles.signatureWrapper} flex flex-col justify-between h-full ${className}`}>
      {label && (
        <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-1">
          {label}
        </label>
      )}

      {/* Canvas container with dashed border and pen cursor */}
      <div
        onPointerDownCapture={handleInteractionStart}
        onMouseDownCapture={handleInteractionStart}
        onTouchStartCapture={handleInteractionStart}
        className={`
          relative rounded-2xl border-2 border-dashed overflow-hidden shadow-inner
          transition-all duration-200
          ${disabled
            ? "border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900"
            : isError
            ? "border-red-400 dark:border-red-500 bg-red-50/20 dark:bg-red-950/10 hover:border-red-500"
            : hasSignature
            ? "border-emerald-400/80 dark:border-emerald-600/80 bg-white dark:bg-zinc-950"
            : "border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 hover:border-blue-400 dark:hover:border-blue-600"
          }
          ${styles.canvasContainer}
          ${disabled ? styles.disabled : ""}
        `}
        style={{ height: heightStyle }}
      >
        <ReactSketchCanvas
          ref={canvasRef}
          width="100%"
          height={heightStyle}
          strokeWidth={strokeWidth}
          strokeColor={penColor}
          canvasColor="transparent"
          exportWithBackgroundImage={false}
          style={{
            border: "none",
            borderRadius: "0",
            height: heightStyle,
            width: "100%",
          }}
          onStroke={handleStrokeEnd}
        />

        {!hasSignature && !isInteracting && !disabled && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none transition-opacity duration-150">
            <EditOutlined className="text-2xl mb-1.5 text-slate-300 dark:text-zinc-600" />
            <span className="text-xs text-slate-400 dark:text-zinc-500 font-semibold px-6 text-center leading-relaxed">
              {placeholder}
            </span>
          </div>
        )}
      </div>

      {/* Toolbar — status text / inline error in small mono font + action buttons */}
      <div className="flex items-center justify-between px-1 mt-1.5 min-h-[22px]">
        <span
          className={`text-[11px] font-mono leading-none transition-colors duration-150 ${
            isError
              ? "text-red-500 dark:text-red-400 font-semibold"
              : hasSignature
              ? "text-emerald-600 dark:text-emerald-400 font-semibold"
              : "text-slate-500 dark:text-zinc-400"
          }`}
        >
          {isError
            ? activeErrorText
            : hasSignature
            ? "✓ Signature captured"
            : "Draw inside box above"}
        </span>

        {hasSignature && !disabled && (
          <div className="flex items-center gap-1">
            <Tooltip title="Undo last stroke">
              <Button
                type="text"
                size="small"
                icon={<UndoOutlined />}
                onClick={handleUndo}
                className="text-xs text-blue-500 hover:text-blue-600 font-semibold h-6 px-1.5"
                styles={{
                  root: { padding: "0px", height: "0px" },
                  icon: { fontSize: "11px" },
                  content: { fontSize: "11px" },
                }}
              >
                Undo
              </Button>
            </Tooltip>

            <Tooltip title="Clear entire signature">
              <Button
                type="text"
                size="small"
                icon={<ClearOutlined />}
                onClick={handleClear}
                className="text-xs text-red-500 hover:text-red-600 font-bold h-6 px-1.5"
                styles={{
                  root: { padding: "0px", height: "0px" },
                  icon: { fontSize: "11px" },
                  content: { fontSize: "11px" },
                }}
              >
                Clear
              </Button>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT: Encapsulates Form.Item when 'name' is provided
   ═══════════════════════════════════════════════════════════════ */
const SignatureCanvas = ({
  name,
  label,
  reqMsg,
  requiredMsg,
  noRequired = false,
  rules,
  storageKey,
  containerClassName = "",
  value,
  onChange,
  ...restProps
}) => {
  const effectiveReqMsg = reqMsg || requiredMsg || "Signature is required.";
  const effectiveStorageKey = storageKey || (typeof name === "string" ? name : undefined);

  /* If 'name' is provided, encapsulate Ant Design Form.Item */
  if (name) {
    const validationRules = rules || (noRequired
      ? []
      : [
          {
            validator: (_, v) =>
              v
                ? Promise.resolve()
                : Promise.reject(new Error(effectiveReqMsg)),
          },
        ]);

    return (
      <Form.Item
        name={name}
        rules={validationRules}
        className={`!mb-0 flex-1 flex flex-col [&_.ant-form-item-explain]:hidden ${containerClassName}`}
      >
        <SignatureCanvasControl
          label={label}
          storageKey={effectiveStorageKey}
          reqMsg={effectiveReqMsg}
          {...restProps}
        />
      </Form.Item>
    );
  }

  /* Standalone usage without Form.Item */
  return (
    <SignatureCanvasControl
      label={label}
      storageKey={effectiveStorageKey}
      reqMsg={effectiveReqMsg}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
};

export default SignatureCanvas;
