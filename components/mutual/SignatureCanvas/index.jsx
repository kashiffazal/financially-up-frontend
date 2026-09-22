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
import { UndoOutlined, ClearOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./SignatureCanvas.module.css";

/**
 * ============================================================
 * Helper: cropSignatureDataUrl
 * ============================================================
 * Automatically crops extra whitespace and transparent areas surrounding
 * a drawn signature. Computes the exact bounding box of drawn ink pixels
 * and returns a tightly cropped, centered PNG data URL with clean padding.
 *
 * @param {string} dataUrl - Raw base64 PNG data URL from canvas
 * @param {number} padding - Padding in pixels around bounding box (default: 10)
 * @returns {Promise<string>} - Cropped signature data URL
 */
export function cropSignatureDataUrl(dataUrl, padding = 10) {
  return new Promise((resolve) => {
    if (!dataUrl || typeof window === "undefined" || typeof document === "undefined") {
      return resolve(dataUrl);
    }

    const img = new window.Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;

        if (!width || !height) {
          return resolve(dataUrl);
        }

        // Create temporary canvas to inspect pixel data
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          return resolve(dataUrl);
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, width, height);
        const pixels = imgData.data;

        let minX = width;
        let minY = height;
        let maxX = -1;
        let maxY = -1;

        // Iterate through all pixels and find the bounding box of non-background ink
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            const a = pixels[index + 3];

            // Consider a pixel as ink if it is not transparent (alpha >= 30)
            // and not almost pure white (ink strokes are colored or dark)
            const isTransparent = a < 30;
            const isWhite = r > 220 && g > 220 && b > 220;

            if (!isTransparent && !isWhite) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        // If no visible ink strokes were found, return the original data URL
        if (maxX === -1 || maxY === -1) {
          return resolve(dataUrl);
        }

        // Calculate bounded crop coordinates with padding
        const cropX = Math.max(0, minX - padding);
        const cropY = Math.max(0, minY - padding);
        const cropW = Math.min(width - cropX, (maxX - minX + 1) + padding * 2);
        const cropH = Math.min(height - cropY, (maxY - minY + 1) + padding * 2);

        if (cropW <= 0 || cropH <= 0) {
          return resolve(dataUrl);
        }

        // Create the tightly cropped canvas
        const croppedCanvas = document.createElement("canvas");
        croppedCanvas.width = cropW;
        croppedCanvas.height = cropH;
        const croppedCtx = croppedCanvas.getContext("2d");
        if (!croppedCtx) {
          return resolve(dataUrl);
        }

        croppedCtx.drawImage(
          canvas,
          cropX, cropY, cropW, cropH,
          0, 0, cropW, cropH
        );

        // Enforce 100% transparent PNG background:
        // Convert any white or near-white background pixels into fully transparent pixels
        const croppedImgData = croppedCtx.getImageData(0, 0, cropW, cropH);
        const cPixels = croppedImgData.data;
        for (let i = 0; i < cPixels.length; i += 4) {
          const r = cPixels[i];
          const g = cPixels[i + 1];
          const b = cPixels[i + 2];
          const a = cPixels[i + 3];

          // If pixel is near-white or low alpha, convert to 100% transparent
          if (a < 30 || (r > 210 && g > 210 && b > 210)) {
            cPixels[i + 3] = 0;
          }
        }
        croppedCtx.putImageData(croppedImgData, 0, 0);

        const croppedDataUrl = croppedCanvas.toDataURL("image/png");
        resolve(croppedDataUrl);
      } catch (err) {
        console.warn("SignatureCanvas: Automatic cropping failed, falling back to original image:", err);
        resolve(dataUrl);
      }
    };

    img.onerror = () => {
      resolve(dataUrl);
    };

    img.src = dataUrl;
  });
}

/**
 * ============================================================
 * Helper: clearAllSignatureStorage / clearSignatureStorage
 * ============================================================
 * Wipes cached signature vector paths from localStorage and dispatches
 * a global event to instantly reset any mounted SignatureCanvas components.
 */
export function clearAllSignatureStorage() {
  if (typeof window === "undefined") return;
  try {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith("sig_paths_") || key.startsWith("signature_"))) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent("resetSignatureCanvases"));
  } catch (err) {
    console.error("SignatureCanvas: Failed to clear signature storage:", err);
  }
}

export function clearSignatureStorage(storageKey) {
  if (typeof window === "undefined" || !storageKey) return;
  try {
    localStorage.removeItem(`sig_paths_${storageKey}`);
    window.dispatchEvent(
      new CustomEvent("resetSignatureCanvases", { detail: { storageKey } })
    );
  } catch (err) {
    console.error(
      "SignatureCanvas: Failed to clear signature storage for key:",
      storageKey,
      err
    );
  }
}

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

  // Only initialize hasDrawn from localStorage if value or initialImage exists
  const [internalHasDrawn, setInternalHasDrawn] = useState(() => {
    if (typeof window !== "undefined" && storageKey && (value || initialImage)) {
      const saved = localStorage.getItem(`sig_paths_${storageKey}`);
      if (saved && saved !== "false") {
        try {
          const parsed = JSON.parse(saved);
          return Array.isArray(parsed) && parsed.length > 0;
        } catch {
          return false;
        }
      }
    }
    return false;
  });
  const [isInteracting, setIsInteracting] = useState(false);
  const [showImage, setShowImage] = useState(() => Boolean(initialImage));
  const [displayImage, setDisplayImage] = useState(initialImage);

  /* Auto-crop saved initialImage if provided */
  useEffect(() => {
    let isMounted = true;
    if (initialImage) {
      cropSignatureDataUrl(initialImage).then((cropped) => {
        if (isMounted && cropped) {
          setDisplayImage(cropped);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [initialImage]);

  /* Adjust state when value changes */
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    if (!value) {
      setInternalHasDrawn(false);
      setIsInteracting(false);
    }
  }

  /* Read live validation status from Ant Design Form.Item context */
  const { status: formItemStatus, errors: formItemErrors = [] } =
    Form.Item.useStatus();

  /* Height normalization */
  const numericHeight =
    typeof height === "number" ? height : parseInt(height, 10) || 210;
  const heightStyle = `${numericHeight}px`;

  /* Synchronize canvas with value prop / localStorage */
  useEffect(() => {
    const key = storageKey;
    if (!key || typeof window === "undefined") return;

    if (value || initialImage) {
      // If form has an active signature value/draft, restore vector paths
      if (canvasRef.current) {
        const savedPaths = localStorage.getItem(`sig_paths_${key}`);
        if (savedPaths && savedPaths !== "false") {
          try {
            const paths = JSON.parse(savedPaths);
            if (paths && paths.length > 0) {
              canvasRef.current.loadPaths(paths);
            }
          } catch (err) {
            console.error("SignatureCanvas: Failed to load saved paths:", err);
          }
        }
      }
    } else {
      // Value is empty/null/undefined: this is a fresh form or reset form.
      // Ensure canvas is completely blanked and purge any leftover cached paths.
      if (canvasRef.current) {
        canvasRef.current.resetCanvas();
      }
      localStorage.removeItem(`sig_paths_${key}`);
    }
  }, [storageKey, value, initialImage]);

  /* Listen for global reset event (e.g. form submission success) */
  useEffect(() => {
    const handleReset = (event) => {
      const targetKey = event?.detail?.storageKey;
      if (!targetKey || targetKey === storageKey) {
        if (canvasRef.current) {
          canvasRef.current.resetCanvas();
        }
        setInternalHasDrawn(false);
        setIsInteracting(false);
        setShowImage(false);
        setDisplayImage(null);
        if (storageKey && typeof window !== "undefined") {
          localStorage.removeItem(`sig_paths_${storageKey}`);
        }
        if (onChange) {
          onChange(null);
        }
      }
    };

    window.addEventListener("resetSignatureCanvases", handleReset);
    return () => {
      window.removeEventListener("resetSignatureCanvases", handleReset);
    };
  }, [storageKey, onChange]);

  /* Immediate interaction trigger */
  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
  }, []);

  /* Export signature as cropped data URL after each stroke */
  const handleStrokeEnd = useCallback(async () => {
    if (!canvasRef.current) return;

    try {
      const paths = await canvasRef.current.exportPaths();
      if (paths && paths.length > 0) {
        const rawDataUrl = await canvasRef.current.exportImage("png");
        // Automatically crop empty whitespace around the signature
        const croppedDataUrl = await cropSignatureDataUrl(rawDataUrl);

        setInternalHasDrawn(true);
        setIsInteracting(true);

        if (onChange) {
          onChange(croppedDataUrl);
        }

        if (storageKey && typeof window !== "undefined") {
          localStorage.setItem(
            `sig_paths_${storageKey}`,
            JSON.stringify(paths),
          );
        }
      } else {
        setInternalHasDrawn(false);
        if (onChange) onChange(null);
      }
    } catch (err) {
      console.error("SignatureCanvas: Failed to export image:", err);
    }
  }, [onChange, storageKey]);

  /* Undo last stroke and export cropped image */
  const handleUndo = useCallback(async () => {
    if (!canvasRef.current) return;
    canvasRef.current.undo();

    setTimeout(async () => {
      try {
        const paths = await canvasRef.current.exportPaths();
        if (paths && paths.length > 0) {
          const rawDataUrl = await canvasRef.current.exportImage("png");
          // Automatically crop empty whitespace around the signature
          const croppedDataUrl = await cropSignatureDataUrl(rawDataUrl);

          setInternalHasDrawn(true);
          if (onChange) onChange(croppedDataUrl);
          if (storageKey && typeof window !== "undefined")
            localStorage.setItem(
              `sig_paths_${storageKey}`,
              JSON.stringify(paths),
            );
        } else {
          setInternalHasDrawn(false);
          setIsInteracting(false);
          if (onChange) onChange(null);
          if (storageKey && typeof window !== "undefined")
            localStorage.removeItem(`sig_paths_${storageKey}`);
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
    setInternalHasDrawn(false);
    setIsInteracting(false);

    if (onChange) onChange(null);
    if (storageKey && typeof window !== "undefined")
      localStorage.removeItem(`sig_paths_${storageKey}`);
  }, [onChange, storageKey]);

  /* Switch from image view to drawing mode */
  const handleEditSignature = useCallback(() => {
    setShowImage(false);
    setInternalHasDrawn(false);
    setIsInteracting(false);
    if (onChange) onChange(null);
  }, [onChange]);

  /* Signature presence check */
  const hasSignature = Boolean(value) || internalHasDrawn;

  /* Validation status evaluation */
  const activeStatus = formItemStatus || propStatus;
  const isError =
    !hasSignature && (activeStatus === "error" || Boolean(propErrorMsg));
  const activeErrorText =
    formItemErrors[0] ||
    propErrorMsg ||
    reqMsg ||
    requiredMsg ||
    "Signature is required.";

  /* ── RENDER: Saved Image View ── */
  if (showImage && (displayImage || initialImage)) {
    const activeImage = displayImage || initialImage;
    return (
      <div
        className={`${styles.signatureWrapper} flex flex-col justify-between h-full ${className}`}
      >
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
          className={`${styles.existingSignature} relative rounded-xl border-2 border-dashed border-slate-200 dark:border-zinc-700 bg-transparent overflow-hidden shadow-inner flex items-center justify-center`}
          style={{ height: heightStyle }}
        >
          {/* Next.js Image component with unoptimized prop to handle dynamic Base64 data URLs & remote signatures */}
          <div className="relative w-full h-full p-3 flex items-center justify-center">
            <Image
              src={activeImage}
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
    <div
      className={`${styles.signatureWrapper} flex flex-col justify-between h-full ${className}`}
    >
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
          relative rounded-xl border-2 border-dashed overflow-hidden shadow-inner
          transition-all duration-200
          ${
            disabled
              ? "border-slate-200 dark:border-zinc-800 bg-slate-100/50 dark:bg-zinc-900/50"
              : isError
                ? "border-red-400 dark:border-red-500 bg-red-50/20 dark:bg-red-950/10 hover:border-red-500"
                : hasSignature
                  ? "border-emerald-400/80 dark:border-emerald-600/80 bg-transparent"
                  : "border-slate-300 dark:border-zinc-700 bg-transparent hover:border-blue-400 dark:hover:border-blue-600"
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
  const effectiveStorageKey =
    storageKey || (typeof name === "string" ? name : undefined);

  /* If 'name' is provided, encapsulate Ant Design Form.Item */
  if (name) {
    const validationRules =
      rules ||
      (noRequired
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
