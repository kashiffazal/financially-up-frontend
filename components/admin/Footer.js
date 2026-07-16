// 'use client';

import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 py-5 px-8 mt-auto border-t border-slate-200/80 dark:border-zinc-800 text-[11px] font-semibold text-slate-400 dark:text-zinc-500 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div>
        © 2026 Financially Up. All rights reserved. |{" "}
        <a href="#" className="hover:text-slate-650 dark:hover:text-zinc-300">
          Terms of Use
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-slate-650 dark:hover:text-zinc-300">
          Privacy Policy
        </a>
      </div>
      <div className="flex items-center gap-1 font-bold">
        <span>&lt;/&gt; Developed by</span>
        <a
          href="https://innotechcloud.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#008043] dark:text-emerald-400 hover:underline"
        >
          Innotech Cloud
        </a>
      </div>
    </footer>
  );
}
