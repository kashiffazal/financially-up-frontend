'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/admin/Header';
import Footer from '../../components/admin/Footer';
import './admin.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Exclude login screen from sharing the admin navigation wrapper
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      
      {/* Sidebar navigation panel */}
      <Sidebar collapsed={collapsed} />

      {/* Main content body wrapper */}
      <div 
        className={`flex flex-col flex-1 min-w-0 min-h-screen transition-all duration-300 ${
          collapsed ? 'pl-20' : 'pl-64'
        }`}
      >
        {/* Top toolbar header */}
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Dynamic page content container */}
        <main className="flex-grow p-6 md:p-8 space-y-6 overflow-y-auto overflow-x-hidden">
          {children}
        </main>

        {/* Standard copyright and credits footer */}
        <Footer />
      </div>
      
    </div>
  );
}
