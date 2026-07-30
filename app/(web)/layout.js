'use client';

import React from 'react';
import WebsiteHeader from '../../components/website/Header';
import WebsiteFooter from '../../components/website/Footer';
import './web.css';

export default function WebLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 transition-colors duration-300">
      <WebsiteHeader />
      <main className="flex-grow">
        {children}
      </main>
      <WebsiteFooter />
    </div>
  );
}
