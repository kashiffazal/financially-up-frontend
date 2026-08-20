'use client';

/**
 * Admin Root Layout
 * =================
 * Provides global authentication context, responsive sidebar collapsible state,
 * route protection, and dynamic theme switching.
 */

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Spin } from 'antd';
import { AuthProvider, useAuth } from '../../context/AuthContext';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/admin/Header';
import Footer from '../../components/admin/Footer';
import './admin.css';

function AdminLayoutContent({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const { user, loading } = useAuth();

  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.push('/admin/login');
    }
  }, [user, loading, isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <Spin size="large" />
          <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
            Verifying secure session...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
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

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}
