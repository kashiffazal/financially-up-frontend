"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, message } from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ShareAltOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  BookOutlined,
  PhoneOutlined,
  LinkedinFilled,
  TwitterOutlined,
  FacebookFilled,
  LinkOutlined,
  RightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { BLOG_POSTS } from "../data/blogData";

export default function SingleBlogPostPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Find post by slug or default to first post
  const post =
    BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  // Recent articles (excluding current post)
  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      message.success("Article link copied to clipboard!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      message.success("Thank you for subscribing to our Weekly Dispatch!");
      setEmailInput("");
    }
  };

  return (
    <div className="w-full bg-slate-50/60 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      
      {/* ── 1. RICH COLORED HERO SECTION (Deep Brand Emerald Gradient) ── */}
      <section className="relative pt-16 sm:pt-20 pb-28 sm:pb-36 bg-gradient-to-br from-[#00381e] via-[#005a30] to-[#008043] dark:from-[#002413] dark:via-[#003b20] dark:to-[#00170c] text-white overflow-hidden shadow-lg">
        {/* Ambient Glowing Lighting Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#ccff00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          {/* Frosted Glass Pill Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white/90 shadow-sm">
            <Link href="/" className="hover:text-emerald-200 transition-colors">
              Home
            </Link>
            <RightOutlined className="text-[9px] text-emerald-200" />
            <Link href="/blog" className="hover:text-emerald-200 transition-colors">
              Blog
            </Link>
            <RightOutlined className="text-[9px] text-emerald-200" />
            <span className="text-emerald-300 font-black">
              {post.category}
            </span>
          </nav>

          {/* Big Bold Headline in Pure White */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-sm">
            {post.title}
          </h1>

          {/* Centered Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-bold text-emerald-100/90 pt-1">
            <span className="px-3.5 py-1 rounded-full bg-[#ccff00] text-black font-black uppercase text-[10px] tracking-wider shadow-sm">
              {post.category}
            </span>

            <span className="flex items-center gap-1.5">
              <CalendarOutlined className="text-emerald-300" /> {post.date}
            </span>

            <span className="hidden sm:inline text-emerald-300/60">•</span>

            <span className="flex items-center gap-1.5">
              <ClockCircleOutlined className="text-emerald-300" /> {post.readTime}
            </span>

            <span className="hidden sm:inline text-emerald-300/60">|</span>

            {/* Author Avatar & Name in Frosted Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white">
              <div className="w-5 h-5 rounded-full bg-white text-brand-primary flex items-center justify-center text-[9px] font-black">
                {post.author.avatar}
              </div>
              <span className="font-bold">{post.author.name}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. FLOATING 16:9 FEATURED IMAGE (Max-Width 1200px with Negative Margin Overlap) ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-28 relative z-20">
        <div className="relative w-full h-64 sm:h-80 md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-zinc-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <span className="text-xs font-semibold text-white/95 backdrop-blur-md px-3.5 py-1 rounded-xl bg-black/40 border border-white/20 shadow-sm">
              {post.badge || "Official ATO Guidance"}
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. MAIN READING AREA (Max-Width 1200px: 8 Cols Content + 4 Cols Sidebar) ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ── LEFT ARTICLE CONTENT (8 Columns) ── */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Key Article Summary Callout Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-brand-primary-soft/40 dark:bg-emerald-950/30 border-l-4 border-brand-primary border border-emerald-200/50 dark:border-emerald-800/40 space-y-2 shadow-xs">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary dark:text-emerald-400 block">
                KEY ARTICLE SUMMARY
              </span>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-100 leading-relaxed font-semibold">
                {post.summary}
              </p>
            </div>

            {/* Article Intro / Lead Paragraph */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-zinc-50 leading-tight">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-normal leading-relaxed">
                {post.content.intro}
              </p>
            </div>

            {/* Article Content Sections with Emerald Subheadings */}
            <div className="space-y-6 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-black uppercase text-brand-primary dark:text-emerald-400 tracking-tight leading-snug">
                    {sec.heading}
                  </h3>
                  <p className="leading-relaxed">{sec.body}</p>
                </div>
              ))}
            </div>

            {/* Key Takeaways Checklist Box */}
            {post.content.keyTakeaways && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-4 shadow-xs">
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
                  <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400" />
                  Key Takeaways for Taxpayers
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  {post.content.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircleFilled className="text-brand-primary text-xs mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags Row */}
            {post.tags && (
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-zinc-800">
                <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 mr-1">
                  TAGS:
                </span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[11px] font-bold text-slate-700 dark:text-zinc-300 shadow-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Footer Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-brand-primary-soft/50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black text-base shrink-0 shadow-md">
                {post.author.avatar}
              </div>
              <div className="space-y-1 text-center sm:text-left min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-primary dark:text-emerald-400 block">
                  ARTICLE CONTRIBUTOR
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-zinc-50">
                  {post.author.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-300 font-semibold">
                  {post.author.role} • {post.author.qualifications}
                </p>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed pt-1">
                  Registered Australian tax agent and advisor helping individuals, sole traders, and companies navigate ATO compliance, deductions optimization, and wealth structuring.
                </p>
              </div>
            </div>

            {/* Back to Blog Listing Button */}
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-brand-primary dark:hover:border-emerald-400 text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-zinc-200 transition-all !no-underline shadow-xs"
              >
                <ArrowLeftOutlined className="text-xs" /> Back to Blog Listing
              </Link>
            </div>

          </main>

          {/* ── RIGHT SIDEBAR (4 Columns) ── */}
          <aside className="lg:col-span-4 space-y-6 relative">
            
            {/* Widget 1: Need Advice CTA (Scrolls Normally at Top) */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#008043] via-[#006e39] to-[#004d28] text-white shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white text-lg">
                <SafetyCertificateOutlined />
              </div>
              <h3 className="text-lg font-black text-white leading-tight">
                Need Tax Advice on This Topic?
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Connect with our registered tax agents for tailored tax planning, ATO lodgements, and business structuring consultations.
              </p>
              <Link href="/book-an-appointment" className="block !no-underline">
                <Button
                  size="large"
                  className="w-full h-11 rounded-xl font-extrabold text-xs bg-white text-brand-primary hover:bg-slate-50 border-none shadow-md"
                >
                  Book 1-on-1 Consultation <ArrowRightOutlined className="text-xs" />
                </Button>
              </Link>
              <a
                href="tel:1300328316"
                className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-100 hover:text-white pt-1 !no-underline"
              >
                <PhoneOutlined /> Call 1300 328 316
              </a>
            </div>

            {/* ── STICKY SIDEBAR CONTAINER (Starting from RECENT ARTICLES, Desktop Only) ── */}
            <div className="lg:sticky lg:top-[140px] space-y-6">
              
              {/* Widget 2: RECENT ARTICLES */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-zinc-50 flex items-center gap-2">
                  <BookOutlined className="text-brand-primary dark:text-emerald-400" />
                  RECENT ARTICLES
                </h4>
                <div className="space-y-4 divide-y divide-slate-100 dark:divide-zinc-800">
                  {recentPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blog/${rPost.slug}`}
                      className="flex items-center gap-3 pt-3.5 first:pt-0 group !no-underline"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-800 shrink-0 border border-slate-200/60 dark:border-zinc-700">
                        <Image
                          src={rPost.image}
                          alt={rPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <span className="text-[10px] font-extrabold uppercase text-brand-primary dark:text-emerald-400 block truncate">
                          {rPost.category}
                        </span>
                        <h5 className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                          {rPost.title}
                        </h5>
                        <span className="text-[10px] text-slate-400 block">
                          {rPost.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 3: SHARE THIS ARTICLE */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-3.5">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-zinc-50 flex items-center gap-2">
                  <ShareAltOutlined className="text-brand-primary dark:text-emerald-400" />
                  SHARE THIS ARTICLE
                </h4>
                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://financiallyup.com.au/blog/" + post.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform shadow-xs cursor-pointer"
                    title="Share on Facebook"
                  >
                    <FacebookFilled className="text-base" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent("https://financiallyup.com.au/blog/" + post.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 flex items-center justify-center hover:scale-110 transition-transform shadow-xs cursor-pointer"
                    title="Share on X"
                  >
                    <TwitterOutlined className="text-base" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://financiallyup.com.au/blog/" + post.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[#0077b5] flex items-center justify-center hover:scale-110 transition-transform shadow-xs cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <LinkedinFilled className="text-base" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:border-brand-primary hover:text-brand-primary flex items-center justify-center transition-all shadow-xs cursor-pointer"
                    title="Copy Link"
                  >
                    <LinkOutlined className="text-base" />
                  </button>
                </div>
              </div>

              {/* Widget 4: WEEKLY DISPATCH / ENJOYED THIS READ? */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-3.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary dark:text-emerald-400 block">
                  WEEKLY DISPATCH
                </span>
                <h4 className="text-base font-black uppercase text-slate-900 dark:text-zinc-50 leading-tight">
                  ENJOYED THIS READ?
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                  Subscribe to get the latest tax strategies, ATO updates, and compliance guides delivered weekly.
                </p>

                {subscribed ? (
                  <div className="p-3.5 rounded-2xl bg-brand-primary-soft/80 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-brand-primary dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircleFilled className="text-sm" />
                    <span>Subscribed! Check your inbox soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                    />
                    <Button
                      htmlType="submit"
                      size="large"
                      className="w-full h-11 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-700/20 border-none"
                    >
                      <SendOutlined className="text-xs" /> GET UPDATES
                    </Button>
                  </form>
                )}
              </div>

            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
