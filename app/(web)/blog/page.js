"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, message } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  SearchOutlined,
  SendOutlined,
  LeftOutlined,
  RightOutlined,
  FireOutlined,
  CheckCircleFilled,
  AppstoreOutlined,
} from "@ant-design/icons";
import PageHero from "@/components/website/PageHero";
import { BLOG_CATEGORIES, POPULAR_TAGS, BLOG_POSTS } from "./data/blogData";

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts based on category, tag, and search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      activeCategory === "ALL" || post.category === activeCategory;
    const matchesTag =
      !selectedTag ||
      (post.tags && post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase()));
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesTag && matchesSearch;
  });

  const featuredPost =
    BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  // Grid posts: 6 articles when on default view (excluding featured)
  const gridPosts =
    activeCategory === "ALL" && !selectedTag && !searchQuery
      ? filteredPosts.filter((p) => p.id !== featuredPost.id)
      : filteredPosts;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      message.success("Thank you for subscribing to our Weekly Dispatch!");
      setEmailInput("");
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog & Tax Insights" },
  ];

  return (
    <div className="w-full bg-slate-50/60 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Accounting & Tax Advisory Insights"
        title="Insights & Tax Strategies"
        subtitle="Stay ahead with expert tax tips, ATO compliance updates, business structuring advice, and wealth management strategies from Australian registered tax agents."
      />

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        
        {/* 2. Refined Executive Segmented Filter Bar with Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedTag("");
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md shadow-emerald-700/25 scale-102"
                      : "text-slate-600 dark:text-zinc-400 hover:text-brand-primary dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-600 dark:text-zinc-300 shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>Showing {filteredPosts.length} Tax Articles</span>
          </div>
        </div>

        {/* 3. Main 2-Column Architecture (8 Cols Left + 4 Cols Right Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ── LEFT AREA (8 Columns) ── */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Blog Spotlight Card (100% Clickable Box) */}
            {activeCategory === "ALL" && !selectedTag && !searchQuery && featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative block rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-md hover:shadow-2xl hover:border-brand-primary/60 dark:hover:border-emerald-500/50 transition-all duration-300 overflow-hidden cursor-pointer !no-underline"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                  
                  {/* Left 16:9 Image */}
                  <div className="md:col-span-6 relative min-h-[260px] sm:min-h-[320px] bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-white text-[10px] font-black uppercase tracking-wider self-start shadow-md">
                        <FireOutlined className="text-amber-300" />
                        <span>FEATURED SPOTLIGHT</span>
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">
                        {featuredPost.badge || "TOP TAX GUIDE"}
                      </span>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5 text-[11px] font-bold text-slate-400 dark:text-zinc-500">
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-primary-soft text-brand-primary dark:bg-emerald-950/80 dark:text-emerald-400 font-extrabold uppercase text-[10px]">
                          {featuredPost.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <ClockCircleOutlined /> {featuredPost.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-50 group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors leading-snug">
                        {featuredPost.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-zinc-300">
                        <div className="w-6 h-6 rounded-full bg-brand-primary-soft text-brand-primary flex items-center justify-center text-[10px] font-black">
                          {featuredPost.author.avatar}
                        </div>
                        <span className="text-[11px] truncate max-w-[110px]">{featuredPost.author.name}</span>
                      </div>

                      <span className="text-brand-primary dark:text-emerald-400 font-black text-xs flex items-center gap-1 group-hover:underline uppercase tracking-wider">
                        <span>READ MORE</span>
                        <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            )}

            {/* 2-Column Grid of 6 Article Cards (100% Clickable Boxes) */}
            {gridPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {gridPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-brand-primary/60 dark:hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer !no-underline"
                  >
                    {/* Top 16:9 Featured Image with Floating Category Badge */}
                    <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Floating Category Pill Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full bg-brand-primary text-white font-black uppercase text-[10px] tracking-wider shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        {/* Date & Read Time */}
                        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 dark:text-zinc-500">
                          <span className="flex items-center gap-1.5">
                            <CalendarOutlined /> {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <ClockCircleOutlined /> {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-zinc-50 group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Bottom Author & Read More */}
                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-black">
                        <div className="flex items-center gap-2.5 text-slate-700 dark:text-zinc-300">
                          <div className="w-7 h-7 rounded-full bg-brand-primary-soft dark:bg-zinc-800 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-[10px] font-black border border-emerald-200/60 dark:border-emerald-800/40">
                            {post.author.avatar}
                          </div>
                          <span className="text-[11px] truncate max-w-[120px]">
                            {post.author.name}
                          </span>
                        </div>

                        <span className="text-brand-primary dark:text-emerald-400 flex items-center gap-1 group-hover:underline text-[11px] uppercase tracking-wider">
                          <span>READ MORE</span>
                          <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                <p className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                  No articles found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("ALL");
                    setSelectedTag("");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-primary text-white font-bold text-xs shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setCurrentPage(1)}
                className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-brand-primary flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label="Previous Page"
              >
                <LeftOutlined className="text-xs" />
              </button>

              <button
                onClick={() => setCurrentPage(1)}
                className={`w-10 h-10 rounded-xl font-black text-xs transition-all cursor-pointer ${
                  currentPage === 1
                    ? "bg-brand-primary text-white shadow-md shadow-emerald-700/20"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300"
                }`}
              >
                1
              </button>

              <button
                onClick={() => setCurrentPage(2)}
                className={`w-10 h-10 rounded-xl font-black text-xs transition-all cursor-pointer ${
                  currentPage === 2
                    ? "bg-brand-primary text-white shadow-md shadow-emerald-700/20"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-brand-primary"
                }`}
              >
                2
              </button>

              <button
                onClick={() => setCurrentPage(2)}
                className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-brand-primary flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label="Next Page"
              >
                <RightOutlined className="text-xs" />
              </button>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR (4 Columns, Sticky on Desktop Only) ── */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[140px] self-start">
            
            {/* Widget 1: SEARCH ARTICLES */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-4 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-zinc-50">
                SEARCH ARTICLES
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                />
                <SearchOutlined className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
              </div>
            </div>

            {/* Widget 2: POPULAR TAGS */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-4 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-zinc-50">
                POPULAR TAGS
              </h4>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag) => {
                  const tagId = "#" + tag.replace(/\s+/g, "");
                  const isSelected = selectedTag === tagId;
                  return (
                    <button
                      key={tag}
                      onClick={() =>
                        setSelectedTag(isSelected ? "" : tagId)
                      }
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-brand-primary text-white shadow-md shadow-emerald-700/20"
                          : "bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-brand-primary hover:text-brand-primary border border-slate-200 dark:border-zinc-700"
                      }`}
                    >
                      <span className="text-slate-400">#</span>
                      <span>{tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: WEEKLY DISPATCH / NEWSLETTER */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-3.5 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary dark:text-emerald-400 block">
                WEEKLY DISPATCH
              </span>
              <h4 className="text-base font-black uppercase text-slate-900 dark:text-zinc-50 leading-tight">
                JOIN THE FINANCIALLY UP NEWSLETTER
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Get tax tips, ATO compliance reminders, and structuring guides delivered straight to your inbox once a week.
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
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full h-11 px-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                  <Button
                    htmlType="submit"
                    size="large"
                    className="w-full h-11 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-700/20 border-none"
                  >
                    <SendOutlined className="text-xs" /> SUBSCRIBE NOW
                  </Button>
                </form>
              )}
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
