"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "antd";
import { EditOutlined, ClearOutlined } from "@ant-design/icons";
import SignatureCanvas from "react-signature-canvas";

export default function AdminSignatureCanvas({ value, onChange }) {
  const sigCanvasRef = useRef(null);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (value && sigCanvasRef.current && sigCanvasRef.current.isEmpty()) {
      try {
        sigCanvasRef.current.fromDataURL(value);
        setHasDrawn(true);
      } catch (e) {
        console.error("Error loading signature:", e);
      }
    }
  }, [value]);

  const handleEnd = () => {
    if (sigCanvasRef.current && !sigCanvasRef.current.isEmpty()) {
      setHasDrawn(true);
      if (onChange) {
        onChange(sigCanvasRef.current.getCanvas().toDataURL("image/png"));
      }
    }
  };

  const handleClear = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
      setHasDrawn(false);
      if (onChange) onChange(null);
    }
  };

  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 overflow-hidden shadow-inner focus-within:border-brand-primary"
        style={{ touchAction: "none" }}
      >
        <SignatureCanvas
          ref={sigCanvasRef}
          penColor="#008043"
          minWidth={1.8}
          maxWidth={4.2}
          velocityFilterWeight={0.7}
          onBegin={() => setHasDrawn(true)}
          onEnd={handleEnd}
          canvasProps={{
            className: "w-full h-36 cursor-crosshair block",
            style: { touchAction: "none", width: "100%", height: "144px" },
          }}
        />
        {!hasDrawn && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-slate-400 select-none">
            <EditOutlined className="text-xl mb-1 text-brand-primary" />
            <span className="text-xs text-slate-500 font-semibold px-4 text-center">
              Draw staff signature smoothly using mouse or stylus
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
          {hasDrawn ? "✓ Staff signature captured" : "Draw inside box above"}
        </span>
        {hasDrawn && (
          <Button
            type="text"
            size="small"
            icon={<ClearOutlined />}
            onClick={handleClear}
            className="text-xs text-red-500 hover:text-red-600 font-bold"
          >
            Clear Signature
          </Button>
        )}
      </div>
    </div>
  );
}
