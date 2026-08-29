import React from "react";
import Image from "next/image";

/**
 * Admin ERP Portal Loading Screen
 * ================================
 * Specialized enterprise loading state for the Financially Up Admin Portal:
 * - Supports both Light and Dark modes seamlessly.
 * - Light Mode: Clean enterprise slate canvas with emerald radar accents.
 * - Dark Mode: Deep obsidian cyber canvas with luminous neon green telemetry rings.
 * - Multi-ring radar scan & rotating tech spinner around the official mark icon.
 * - Enterprise branding with ERP PORTAL badge and animated session indicator dots.
 */
export default function AdminLoading() {
  return (
    <div
      aria-label="Authenticating Financially Up ERP Admin Portal..."
      role="status"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-hidden select-none transition-colors duration-300"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-primary/10 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      {/* Subtle Micro-Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#008043_1px,transparent_1px)] dark:bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4 max-w-md">
        {/* Animated Double Radar Scan & Admin Emblem Container */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Ripple Radar Wave */}
          <div className="absolute inset-0 rounded-full border border-brand-primary/25 dark:border-emerald-500/25 animate-ping opacity-60"></div>

          {/* Middle Dashed Telemetry Ring */}
          <div className="absolute -inset-1 rounded-full border border-dashed border-brand-primary/30 dark:border-emerald-500/30 animate-[spin_8s_linear_infinite]"></div>

          {/* Inner Glowing Spinner Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-zinc-800 border-t-brand-primary dark:border-t-emerald-400 border-r-brand-primary dark:border-r-emerald-500 animate-spin"></div>

          {/* Central Admin Logo Container */}
          <div className="relative w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shadow-xl shadow-brand-primary/10 dark:shadow-emerald-500/20">
            <Image
              src="/images/icon.ico"
              alt="Financially Up ERP"
              width={32}
              height={32}
              className="w-7 h-7 object-contain animate-pulse"
              priority
              unoptimized
            />
          </div>

          {/* Live Verified Security Check Badge */}
          <div className="absolute -bottom-0.5 -right-0.5 bg-brand-primary dark:bg-emerald-500 text-white dark:text-slate-950 p-1 rounded-full shadow-lg border-2 border-white dark:border-slate-950 flex items-center justify-center">
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* High-Impact ERP Typography & Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-900 dark:text-white leading-none">
              FINANCIALLY <span className="text-brand-primary dark:text-emerald-400">UP</span>
            </h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 text-brand-primary dark:text-emerald-300 tracking-wider">
              ERP
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs font-mono tracking-wider text-slate-600 dark:text-zinc-400">
            <span>Authenticating Secure Session</span>
            <span className="inline-flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 animate-bounce"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
