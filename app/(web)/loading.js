import React from "react";
import Image from "next/image";

/**
 * Public Website Loading Screen
 * ==============================
 * Clean, lightweight full-screen loading state:
 * - Ambient radial glow with emerald accents
 * - Double animated ripple wave and rotating spinner ring
 * - Central favicon icon (/images/icon.ico)
 * - Brand typography and 3 animated status bounce dots
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950 overflow-hidden select-none transition-colors duration-300">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/15 dark:bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
        {/* Animated Double Ring & Glowing Logo Container */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Ripple Wave */}
          <div className="absolute inset-0 rounded-full border border-brand-primary/30 dark:border-emerald-400/30 animate-ping opacity-75"></div>

          {/* Inner Glowing Spinner Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-zinc-800 border-t-brand-primary dark:border-t-emerald-400 border-r-brand-primary dark:border-r-emerald-400 animate-spin"></div>

          {/* Central Logo Container */}
          <div className="relative w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shadow-xl shadow-brand-primary/10">
            <Image
              src="/images/icon.ico"
              alt="Financially Up Loading"
              width={32}
              height={32}
              className="w-7 h-7 object-contain animate-pulse"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* High-Impact Typography & Animated Status */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-900 dark:text-zinc-50 leading-none">
            FINANCIALLY <span className="text-brand-primary dark:text-emerald-400">UP</span>
          </h2>

          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
            <span>Taxation &amp; Advisory</span>
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
