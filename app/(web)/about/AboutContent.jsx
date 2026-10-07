"use client";

import React from "react";
import Link from "next/link";
import {
  SafetyCertificateOutlined,
  CheckCircleFilled,
  TeamOutlined,
  RocketOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  SmileOutlined,
  FileProtectOutlined,
  BankOutlined,
  SolutionOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  ShieldCheckOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import PageHero from "@/components/website/PageHero";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * AboutContent Component
 * ======================
 * Executive client presentation for the About page:
 * - PageHero with breadcrumbs & high-contrast emerald theme
 * - Company story & vision
 * - 4 core values
 * - Practice statistics & milestone metrics
 * - Who we serve (personas)
 * - Official Australian accreditations
 * - Pre-footer CTA banner
 */
export default function AboutContent() {
  const company = useCompany();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ];

  // 4 Core Practice Value Pillars
  const coreValues = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Uncompromising Compliance",
      description:
        "Every return, BAS, and advisory paper is prepared with strict adherence to ATO legislation, TPB ethical codes, and Australian Corporations Law. We protect your position with precision.",
    },
    {
      icon: <DollarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Transparent Fixed Pricing",
      description:
        "We believe in zero billing surprises. Our services are priced upfront with transparent scopes, so you always know your exact investment before any work begins.",
    },
    {
      icon: <ThunderboltOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Cloud-First Speed & Simplicity",
      description:
        "100% online, paperless, and secure. We leverage smart digital portals, bank-grade encryption, and seamless e-signatures to deliver prompt turnarounds without office queues.",
    },
    {
      icon: <RocketOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Strategic Forward Advisory",
      description:
        "We do more than look backward at tax time. Our team proactively identifies deduction opportunities, optimizes corporate structures, and builds pathways for wealth creation.",
    },
  ];

  // Key Practice Milestone Metrics
  const milestoneStats = [
    {
      value: "10,000+",
      label: "Lodgements Completed",
      subtext: "Across Australia",
    },
    {
      value: "100%",
      label: "ATO Compliant",
      subtext: "Strict Regulatory Rigor",
    },
    {
      value: "15+",
      label: "Core Service Pillars",
      subtext: "Tax, Advisory & Corporate",
    },
    {
      value: "4.9 ★",
      label: "Client Satisfaction",
      subtext: "Trusted Nationwide",
    },
  ];

  // Practice Personas
  const clientPersonas = [
    {
      icon: <TeamOutlined className="text-xl" />,
      title: "Individuals & Remote Pros",
      desc: "Salary earners, healthcare workers, contractors, and expatriates seeking maximized legal deductions and fast refunds.",
      href: "/services/individual-tax",
    },
    {
      icon: <BankOutlined className="text-xl" />,
      title: "Small & Medium Businesses",
      desc: "Companies, sole traders, and partnerships needing comprehensive bookkeeping, payroll, quarterly BAS, and annual returns.",
      href: "/services/business-tax",
    },
    {
      icon: <SolutionOutlined className="text-xl" />,
      title: "Trusts & Asset Holdings",
      desc: "Family trusts, unit trusts, and investment vehicles requiring accurate distribution resolutions and asset protection.",
      href: "/services/trusts",
    },
    {
      icon: <AuditOutlined className="text-xl" />,
      title: "Property & High Net Worth",
      desc: "Investors with multiple rental properties, capital gains events, crypto assets, or self-managed super funds (SMSF).",
      href: "/services/property-tax",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* 1. Global Page Title Hero Component */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="About Financially Up"
        title="Empowering Australians With Trusted, Modern Accounting"
        subtitle="Registered tax agents and qualified CPA advisors delivering proactive, 100% online tax and advisory services nationwide."
      />

      {/* 2. Executive Story & Mission Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <CompassOutlined className="text-sm" />
              <span>Our Mission &amp; Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Accounting Built for the Way You Work Today.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              At <strong className="text-slate-900 dark:text-white font-semibold">{company.legalName}</strong>, 
              we believe managing your taxation, business compliance, and financial growth should never be overwhelming. 
              Traditional accounting is often bogged down by slow turnarounds, confusing jargon, and unexpected invoices.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              We reimagined the entire experience. By combining certified Australian CPA expertise with seamless cloud-based 
              technology, we deliver personal, highly responsive accounting services to individuals, founders, and growing enterprises 
              in Sydney, Melbourne, Brisbane, Perth, and across regional Australia.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "100% Australian Registered Tax Agents",
                "Dedicated CPA Qualified Advisors",
                "Fast, Paperless & Secure Digital Workflow",
                "Upfront Fixed Pricing With Zero Surprises",
                "Year-Round Proactive Advisory Support",
                "National Coverage Across All States & Territories",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Consultation Link */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/book-an-appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-bold shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRightOutlined className="text-xs" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-primary text-slate-700 dark:text-zinc-200 text-sm font-bold shadow-2xs transition-all hover:scale-[1.02]"
              >
                <span>Contact Our Practice</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Trust & Credentials Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#012413] to-slate-950 text-white shadow-2xl border border-emerald-800/40 overflow-hidden">
              {/* Decorative Glow Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-emerald-800/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Practice Snapshot
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-200/80">
                    ABN {company.abn}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {company.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                    Delivering strategic accounting clarity, rigorous ATO compliance, and proactive financial stewardship for ambitious Australians.
                  </p>
                </div>

                {/* Highlight Cards */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-base">
                        <SafetyCertificateOutlined />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Registered Tax Agent</div>
                        <div className="text-[11px] text-emerald-200">Tax Practitioners Board #25992004</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200">
                      Active
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-base">
                        <BankOutlined />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">CPA Australia Firm</div>
                        <div className="text-[11px] text-emerald-200">Certified Practising Accountants</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200">
                      Qualified
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-base">
                        <ClockCircleOutlined />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">100% Online Consultations</div>
                        <div className="text-[11px] text-emerald-200">Sydney Head Office + Australia-Wide</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200">
                      Nationwide
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-emerald-200/80">
                  <span>Head Office: {company.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid Section */}
      <section className="py-16 bg-slate-50 dark:bg-zinc-900/60 border-y border-slate-200/70 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span>Our Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Values That Drive Every Client Engagement
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300">
              We hold ourselves to the highest standards of financial accuracy, confidentiality, and proactive care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-brand-primary dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Milestone Stats & Performance Numbers */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-brand-primary to-emerald-800 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {milestoneStats.map((stat, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 sm:px-4 space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-emerald-100">
                  {stat.label}
                </div>
                <div className="text-xs text-emerald-200/80">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who We Serve (Client Persona Pathways) */}
      <section className="py-16 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span>Client Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored Accounting for Every Life Stage &amp; Business
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300">
            Whether you are filing your first individual return or managing a multi-million dollar corporate group, our CPA team provides targeted support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientPersonas.map((persona, idx) => (
            <Link
              key={idx}
              href={persona.href}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-primary dark:hover:border-emerald-500 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center font-bold">
                  {persona.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                  {persona.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {persona.desc}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Services</span>
                <ArrowRightOutlined className="text-[10px]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Pre-Footer Call to Action Banner */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Experience seamless, stress-free accounting today"
        subtitle="Speak with a qualified Australian CPA. We are ready to assist you with all individual, business, and strategic tax matters."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Our Team"
      />
    </div>
  );
}
