import React from "react";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import BlogHub from "./components/BlogHub";
import { getBlogHub } from "@/lib/blogFetch";
import { getSettings } from "@/lib/getSettings";
import { siteBaseUrl } from "@/lib/blog";

/**
 * /blog — Blog & Tax Insights listing.
 * Articles, categories and tags come from the database (managed at /admin/blog);
 * cached and refreshed automatically when posts change (see lib/blogFetch.js).
 */

export async function generateMetadata() {
  const settings = await getSettings();
  const siteUrl = siteBaseUrl(settings["url.website"]);
  return {
    metadataBase: new URL(siteUrl),
    title: "Blog & Tax Insights | Financially Up",
    description:
      "Expert tax tips, ATO compliance updates, business structuring advice and wealth strategies from Australian registered tax agents.",
    alternates: { canonical: "/blog" },
  };
}

export default async function BlogHubPage() {
  const { ok, posts, categories, tags } = await getBlogHub();
  // API unreachable: during `next build` render an empty blog (the build must not
  // fail); on the live site throw, so Next.js keeps serving the last good page
  // instead of caching an empty one.
  if (!ok && process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
    throw new Error("Blog articles are temporarily unavailable.");
  }
  return <BlogHub posts={posts} categories={categories} tags={tags} />;
}
