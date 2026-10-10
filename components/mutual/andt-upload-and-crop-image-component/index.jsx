"use client";

/**
 * ============================================================================
 * Ant Design Image Upload & Crop Component (`UploadAndCropImage`)
 * ============================================================================
 * High-performance, zero-external-dependency image uploader and interactive
 * cropper tailored for staff avatars and user profiles.
 *
 * Architecture Role:
 * 1. Strictly hides raw HTML <input type="file"> via inline display:none to
 *    prevent browser native "Choose file No file chosen" text leaks.
 * 2. Uses centered Ant Design Modal dialog (`centered={true}`) for vertical middle alignment.
 * 3. Incorporates official brand variables (--brand-primary, --brand-primary-hover,
 *    --brand-primary-soft, --brand-border-hover).
 * 4. Zero-dependency HTML5 Canvas image cropping & zooming engine (pan, zoom, rotate).
 * 5. Full support for dark/light themes and high-fidelity base64 export.
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Modal, Slider, Button, Tooltip } from "antd";
import {
  CameraOutlined,
  UserOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  RotateRightOutlined,
  UploadOutlined,
  DeleteOutlined,
  CheckOutlined,
  PictureOutlined,
  InboxOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

// Crop frame size in the editor (px) and the largest zoom allowed
const VIEWPORT = 260;
const MAX_ZOOM = 8;

export default function UploadAndCropImage({
  value = "",
  defaultImageUrl = "",
  onChange,
  imageType = "circle", // "circle" | "square"
  width = 88,
  height,
  title = "Staff Profile Avatar",
  acceptedFileTypes = "image/png, image/jpeg, image/jpg, image/webp",
  disabled = false,
  className = "",
  showActionButtons = true,
}) {
  // Current active image URL (controlled or initial)
  const currentImage = value || defaultImageUrl || "";

  // Modal & File Selection state
  const [modalOpen, setModalOpen] = useState(false);
  const [rawImageSrc, setRawImageSrc] = useState(null);
  const [fileName, setFileName] = useState("avatar.jpg");

  // Natural size of the chosen image (sets the editor size and the zoom range)
  const [imgSize, setImgSize] = useState({ w: 1, h: 1 });
  const imgAspect = imgSize.w / imgSize.h;
  // Image size at 100% zoom: fills the crop frame (the same maths as the saved crop)
  const baseW = imgAspect > 1 ? VIEWPORT * imgAspect : VIEWPORT;
  const baseH = imgAspect > 1 ? VIEWPORT : VIEWPORT / imgAspect;
  // Zoom out until the whole photo fits in the frame; zoom in up to 800%
  const minZoom = Math.min(1, VIEWPORT / Math.max(baseW, baseH));
  const clampZoom = (z) => Math.min(MAX_ZOOM, Math.max(minZoom, z));

  // Transform controls: Zoom (scale), Offset (pan), Rotation
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // DOM Refs
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  // --------------------------------------------------------------------------
  // RESET CONTROLS ON NEW IMAGE LOAD
  // --------------------------------------------------------------------------
  const resetTransforms = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  }, []);

  // Handle local file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setRawImageSrc(reader.result);
      resetTransforms();
      setModalOpen(true);
    };
    reader.readAsDataURL(file);
    e.target.value = ""; // Reset input so same file can be re-selected
  };

  // --------------------------------------------------------------------------
  // PAN / DRAG INTERACTION
  // --------------------------------------------------------------------------
  const handleMouseDown = (e) => {
    if (!rawImageSrc) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Support for mobile devices
  const handleTouchStart = (e) => {
    if (!rawImageSrc || e.touches.length === 0) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length === 0) return;
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  // Attach global mouseup listener to catch releases outside viewport
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchend", handleGlobalMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging]);

  // --------------------------------------------------------------------------
  // CANVAS CROP & EXPORT
  // --------------------------------------------------------------------------
  const handleApplyCrop = () => {
    if (!rawImageSrc || !imageRef.current) return;

    const img = imageRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Output dimension: 400x400 for crisp, high-DPI staff avatars
    const outputSize = 400;
    canvas.width = outputSize;
    canvas.height = outputSize;

    // White behind any empty edges when zoomed out to fit the whole photo
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, outputSize, outputSize);

    const scaleRatio = outputSize / VIEWPORT;

    // Center canvas context
    ctx.translate(outputSize / 2, outputSize / 2);

    // Apply Rotation
    ctx.rotate((rotation * Math.PI) / 180);

    // Same size the editor shows (baseW / baseH), so the result matches the preview
    const drawW = baseW * zoom * scaleRatio;
    const drawH = baseH * zoom * scaleRatio;
    const drawX = offset.x * scaleRatio - drawW / 2;
    const drawY = offset.y * scaleRatio - drawH / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    // Generate compressed JPEG
    const croppedBase64 = canvas.toDataURL("image/jpeg", 0.92);

    if (typeof onChange === "function") {
      onChange(croppedBase64);
    }

    setModalOpen(false);
  };

  // Handle removing avatar
  const handleRemovePhoto = (e) => {
    if (e) e.stopPropagation();
    if (typeof onChange === "function") {
      onChange("");
    }
  };

  const isCircle = imageType === "circle";
  const displayW = width || 88;
  const displayH = height || displayW;

  return (
    <div className={`upload-and-crop-wrapper inline-flex flex-col items-center ${className}`}>
      {/* -------------------------------------------------------------------- */}
      {/* 1. VISUAL TRIGGER BUTTON (EXECUTIVE AVATAR BADGE)                    */}
      {/* -------------------------------------------------------------------- */}
      <div className="relative group cursor-pointer select-none">
        <div
          onClick={() => {
            if (disabled) return;
            if (currentImage) {
              setRawImageSrc(currentImage);
              setModalOpen(true);
            } else {
              fileInputRef.current?.click();
            }
          }}
          style={{ width: `${displayW}px`, height: `${displayH}px` }}
          className={`relative overflow-hidden transition-all duration-300 shadow-sm border-2 border-[var(--brand-primary)] ring-4 ring-[var(--brand-primary-soft)] hover:ring-[var(--brand-border-hover)] ${
            isCircle ? "rounded-full" : "rounded-2xl"
          } ${disabled ? "opacity-60 cursor-not-allowed" : "hover:shadow-md hover:scale-[1.02]"}`}
        >
          {currentImage ? (
            <img
              src={currentImage}
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex flex-col items-center justify-center">
              <UserOutlined style={{ fontSize: `${Math.round(displayW * 0.44)}px` }} />
            </div>
          )}

          {/* Hover Camera Overlay */}
          {!disabled && (
            <div
              className={`absolute inset-0 bg-black/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white ${
                isCircle ? "rounded-full" : "rounded-2xl"
              }`}
            >
              <CameraOutlined className="text-xl" />
              <span className="text-[10px] font-bold mt-1 tracking-tight">
                {currentImage ? "Adjust" : "Upload"}
              </span>
            </div>
          )}
        </div>

        {/* Mini Camera Badge Accent (Bottom-Right) */}
        {!disabled && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white shadow-md flex items-center justify-center text-xs border-2 border-white dark:border-zinc-900 transition-transform duration-200 hover:scale-110"
            title={currentImage ? "Choose new photo" : "Upload photo"}
          >
            <CameraOutlined />
          </div>
        )}
      </div>

      {/* Optional action strip below trigger */}
      {showActionButtons && (
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={() => {
              if (disabled) return;
              if (currentImage) {
                setRawImageSrc(currentImage);
                setModalOpen(true);
              } else {
                fileInputRef.current?.click();
              }
            }}
            disabled={disabled}
            className="text-xs font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
          >
            <span>{currentImage ? "Adjust Crop" : "Select Photo"}</span>
          </button>

          {currentImage && !disabled && (
            <>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="text-xs text-rose-500 hover:text-rose-600 hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              >
                <span>Remove</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Strict Display-None Native File Input (Prevents any HTML file text leakage) */}
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        style={{ display: "none" }}
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* -------------------------------------------------------------------- */}
      {/* 2. INTERACTIVE CROP MODAL (VERTICALLY CENTERED)                       */}
      {/* -------------------------------------------------------------------- */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-zinc-800">
            <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center text-base border border-[var(--brand-primary)]/20">
              <CameraOutlined />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
                {title}
              </h3>
              <p className="text-[11px] text-slate-400 font-normal m-0">
                Reposition, zoom, and rotate for an executive portrait.
              </p>
            </div>
          </div>
        }
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setRawImageSrc(null);
        }}
        width={680}
        destroyOnHidden
        footer={[
          <div key="footer-row" className="flex items-center justify-between pt-2">
            <div>
              {rawImageSrc && (
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="middle"
                  className="rounded-xl text-xs hover:border-[var(--brand-border-hover)]"
                >
                  Choose Another Image
                </Button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  setModalOpen(false);
                  setRawImageSrc(null);
                }}
                className="rounded-xl px-5"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                onClick={handleApplyCrop}
                disabled={!rawImageSrc}
                className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white border-none font-semibold rounded-xl px-6 shadow-sm"
              >
                Apply & Save Avatar
              </Button>
            </div>
          </div>,
        ]}
      >
        <div className="py-3">
          {!rawImageSrc ? (
            /* 2A. FILE UPLOAD DROPZONE */
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) {
                  setFileName(file.name);
                  const reader = new FileReader();
                  reader.onload = () => {
                    setRawImageSrc(reader.result);
                    resetTransforms();
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="border-2 border-dashed border-slate-300 dark:border-zinc-700 hover:border-[var(--brand-border-hover)] rounded-2xl p-10 text-center cursor-pointer transition-colors bg-slate-50/60 dark:bg-zinc-800/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] flex items-center justify-center text-3xl mx-auto mb-4 border border-[var(--brand-primary)]/20 shadow-xs">
                <InboxOutlined />
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-zinc-100 mb-1">
                Click or drag portrait photo here to upload
              </h4>
              <p className="text-xs text-slate-400 dark:text-zinc-500 max-w-sm mx-auto mb-4">
                Supported formats: PNG, JPG, JPEG, or WebP (Max 5MB). Optimal resolution 400x400px.
              </p>
              <Button
                type="primary"
                icon={<UploadOutlined />}
                className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold rounded-xl border-none shadow-xs"
              >
                Select Image File
              </Button>
            </div>
          ) : (
            /* 2B. INTERACTIVE CROPPING STUDIO */
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Crop Canvas Viewport */}
                <div
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUp}
                  style={{ width: "260px", height: "260px" }}
                  className="relative overflow-hidden bg-white rounded-2xl shadow-inner cursor-grab active:cursor-grabbing select-none shrink-0 border border-slate-700/80"
                >
                  {/* Image to be transformed */}
                  <div
                    style={{
                      transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) scale(${zoom})`,
                      transformOrigin: "center center",
                      transition: isDragging ? "none" : "transform 0.05s ease-out",
                    }}
                    className="w-full h-full flex items-center justify-center pointer-events-none"
                  >
                    <img
                      ref={imageRef}
                      src={rawImageSrc}
                      alt="Crop Source"
                      onLoad={(e) => setImgSize({ w: e.currentTarget.naturalWidth || 1, h: e.currentTarget.naturalHeight || 1 })}
                      className="max-w-none select-none pointer-events-none"
                      style={{ width: `${baseW}px`, height: `${baseH}px`, flexShrink: 0 }}
                    />
                  </div>

                  {/* Darkened Mask Overlay with Clear Center Frame */}
                  <div
                    className={`absolute inset-0 pointer-events-none border-[3px] border-[var(--brand-border-hover)] shadow-[0_0_0_9999px_rgba(0,0,0,0.65)] ${
                      isCircle ? "rounded-full" : "rounded-xl"
                    }`}
                  >
                    {/* Subtle Alignment Grid */}
                    <div className="w-full h-full grid grid-cols-3 grid-rows-3 opacity-30">
                      <div className="border-r border-b border-white"></div>
                      <div className="border-r border-b border-white"></div>
                      <div className="border-b border-white"></div>
                      <div className="border-r border-b border-white"></div>
                      <div className="border-r border-b border-white"></div>
                      <div className="border-b border-white"></div>
                      <div className="border-r border-white"></div>
                      <div className="border-r border-white"></div>
                      <div></div>
                    </div>
                  </div>
                </div>

                {/* Controls and Real-time Preview Panel */}
                <div className="flex-1 w-full space-y-4">
                  {/* Live Preview Card */}
                  <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-800/30 flex items-center gap-4">
                    <div
                      style={{ width: "64px", height: "64px" }}
                      className={`overflow-hidden border-2 border-[var(--brand-primary)] shadow-xs shrink-0 ${
                        isCircle ? "rounded-full" : "rounded-xl"
                      }`}
                    >
                      <div
                        style={{
                          transform: `scale(${64 / 260})`,
                          transformOrigin: "top left",
                          width: "260px",
                          height: "260px",
                        }}
                        className="relative overflow-hidden bg-white"
                      >
                        <div
                          style={{
                            transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) scale(${zoom})`,
                            transformOrigin: "center center",
                          }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <img
                            src={rawImageSrc}
                            alt="Mini Preview"
                            className="max-w-none"
                            style={{ width: `${baseW}px`, height: `${baseH}px`, flexShrink: 0 }}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                        Live Portrait Preview
                      </div>
                      <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-0.5 m-0">
                        Synchronized with your adjustments in real-time.
                      </p>
                    </div>
                  </div>

                  {/* Zoom Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                      <span className="flex items-center gap-1.5">
                        <ZoomInOutlined />
                        <span>Zoom</span>
                      </span>
                      <span className="font-mono text-slate-400">
                        {Math.round(zoom * 100)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="small"
                        icon={<ZoomOutOutlined />}
                        onClick={() => setZoom((prev) => clampZoom(prev - 0.25))}
                      />
                      <Slider
                        min={Number(minZoom.toFixed(2))}
                        max={MAX_ZOOM}
                        step={0.05}
                        value={zoom}
                        onChange={setZoom}
                        tooltip={{ formatter: (v) => `${Math.round(v * 100)}%` }}
                        className="flex-1 my-1"
                      />
                      <Button
                        size="small"
                        icon={<ZoomInOutlined />}
                        onClick={() => setZoom((prev) => clampZoom(prev + 0.25))}
                      />
                    </div>
                  </div>

                  {/* Rotate and Reset Toolstrip */}
                  <div className="flex items-center gap-2 pt-1">
                    <Button
                      size="small"
                      icon={<RotateRightOutlined />}
                      onClick={() => setRotation((prev) => (prev + 90) % 360)}
                      className="rounded-lg text-xs"
                    >
                      Rotate 90°
                    </Button>
                    <Button
                      size="small"
                      icon={<ReloadOutlined />}
                      onClick={resetTransforms}
                      className="rounded-lg text-xs"
                    >
                      Reset View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
