"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../../ThemeProvider";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function Login() {
  const { isDark, toggleTheme } = useTheme();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle Login submission
  const handleLogin = (values) => {
    setLoading(true);
    console.log(values);

    setLoading(false);
    if (
      values.email === "admin@financiallyup.com.au" &&
      values.password === "123456"
    ) {
      message.success("Welcome back, Kashif!");
      localStorage.setItem("login", "true");
      router.push("/admin/dashboard");
    } else {
      message.error("Invalid email or password");
      localStorage.setItem("login", "false");
    }
  };

  // Handle Forgot Password submission
  const handleForgotPassword = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Password reset link sent to " + values.email);
      setIsForgotPassword(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      {/* LEFT SECTION: FORM CARDS AND HEADER */}
      <div className="relative flex flex-col justify-between w-full lg:w-[45%] xl:w-[40%] p-6 md:p-12 lg:p-16 bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 transition-colors duration-300">
        {/* Header containing Logo & Theme toggle */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
              alt="Financially Up Logo"
              width={160}
              height={44}
              priority
              className="object-contain h-10 w-auto"
            />
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunOutlined className="text-amber-500 text-lg" />
            ) : (
              <MoonOutlined className="text-slate-700 text-lg" />
            )}
          </button>
        </div>

        {/* Center content containing LoginForm / ForgotPasswordForm */}
        <div className="relative flex flex-col justify-center my-auto py-12 md:py-16 min-h-[460px]">
          {/* LOGIN VIEW CONTAINER */}
          <div
            className={`w-full transition-all duration-300 transform ${
              isForgotPassword
                ? "opacity-0 -translate-x-8 pointer-events-none absolute"
                : "opacity-100 translate-x-0"
            }`}
          >
            <LoginForm
              onFinish={handleLogin}
              loading={loading}
              onForgotPasswordClick={() => setIsForgotPassword(true)}
            />

            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-zinc-800"></div>
              </div>
              <span className="relative bg-white dark:bg-zinc-900 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Secure ERP Access
              </span>
            </div>

            <p className="text-center text-sm text-slate-500 dark:text-zinc-400">
              Need an account?{" "}
              <a
                href="mailto:admin@financiallyup.com"
                className="font-semibold text-[#008043] hover:text-[#006635] transition-colors"
              >
                Contact your administrator
              </a>
            </p>
          </div>

          {/* FORGOT PASSWORD VIEW CONTAINER */}
          <div
            className={`w-full transition-all duration-300 transform ${
              !isForgotPassword
                ? "opacity-0 translate-x-8 pointer-events-none absolute"
                : "opacity-100 translate-x-0"
            }`}
          >
            <ForgotPasswordForm
              onFinish={handleForgotPassword}
              loading={loading}
              onBackToSignInClick={() => setIsForgotPassword(false)}
            />
          </div>
        </div>

        {/* Footer legal copyrights */}
        <div className="w-full text-left text-xs text-slate-400 dark:text-zinc-500 pt-6 border-t border-slate-100 dark:border-zinc-800">
          © 2026 Financially Up Pty Ltd - Accounting · Taxation · Advisory
        </div>
      </div>

      {/* RIGHT SECTION: DYNAMIC MESH GRADIENT AND OVERLAYING FLOATING GLOWING BLOBS */}
      <div className="relative flex flex-col justify-center w-full lg:w-[55%] xl:w-[60%] p-8 md:p-16 lg:p-24 overflow-hidden animate-mesh-gradient">
        {/* Super premium floating glowing blob layer */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#008043]/30 blur-[90px] animate-blob-1 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-400/20 blur-[90px] animate-blob-2 pointer-events-none"></div>
        <div className="absolute top-[30%] right-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/20 blur-[80px] animate-blob-3 pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] rounded-full bg-green-500/15 blur-[80px] animate-blob-4 pointer-events-none"></div>

        {/* Radial darkening gradient layout overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.45))] pointer-events-none opacity-50"></div>

        {/* Branding text content */}
        <div className="relative z-10 w-full max-w-2xl text-white">
          <span className="glass-panel px-3.5 py-1.5 text-xs font-bold rounded-full text-white tracking-widest uppercase inline-block shadow-sm">
            Enterprise ERP
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mt-6 mb-4 drop-shadow-sm">
            Run your practice with
            <br />
            clarity and control.
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-12 drop-shadow-sm">
            Manage registrations, engagements, and compliance workflows across
            Medicare, GST, Trusts, SMSF and more - all in one place.
          </p>

          {/* 3 Glassmorphism Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <span className="text-3xl font-extrabold tracking-tight">
                24+
              </span>
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-2 block">
                Workflow types
              </span>
            </div>

            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <span className="text-3xl font-extrabold tracking-tight">
                99.9%
              </span>
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-2 block">
                Uptime SLA
              </span>
            </div>

            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <span className="text-3xl font-extrabold tracking-tight">
                SOC 2
              </span>
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-2 block">
                Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
