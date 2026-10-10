import React from "react";
import { notFound } from "next/navigation";
import BlogArticle from "../components/BlogArticle";
import { getBlogPost } from "@/lib/blogFetch";
import { getSettings } from "@/lib/getSettings";
import { buildBlogSchema, resolveBlogImage, siteBaseUrl } from "@/lib/blog";

/**
 * /blog/[slug] — single article, from the database (managed at /admin/blog).
 * Per-article SEO: meta title / description, Open Graph image, canonical URL
 * and BlogPosting JSON-LD (custom from the editor, or generated automatically).
 */

const siteInfo = (settings) => {
  const url = siteBaseUrl(settings["url.website"]);
  const logo = settings["company.logoUrl"] || "";
  return {
    url,
    name: settings["company.name"] || "Financially Up",
    logo: logo ? (/^https?:/.test(logo) ? logo : `${url}${logo}`) : "",
  };
};

const absoluteImage = (src, site) => {
  const resolved = resolveBlogImage(src);
  if (!resolved) return null;
  return /^https?:/.test(resolved) ? resolved : `${site.url}${resolved}`;
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { post } = await getBlogPost(slug);
  if (!post) return { title: "Article not found | Financially Up" };

  const site = siteInfo(await getSettings());
  const title = post.seo.metaTitle || `${post.title} | ${site.name}`;
  const description = post.seo.metaDescription || post.excerpt || undefined;
  const image = absoluteImage(post.image, site);

  return {
    // Absolute canonical / Open Graph URLs on the real website domain
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: [post.seo.focusKeyword, ...post.tags].filter(Boolean),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${site.url}/blog/${post.slug}`,
      siteName: site.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      ...(image ? { images: [{ url: image, alt: post.title }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** Custom JSON-LD from the editor when valid, otherwise generated from the post. */
const structuredData = (post, site) => {
  if (post.seo.schemaJson) {
    try {
      return JSON.parse(post.seo.schemaJson);
    } catch {
      // fall through to the generated schema
    }
  }
  return buildBlogSchema(
    {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      metaTitle: post.seo.metaTitle,
      metaDescription: post.seo.metaDescription,
      featuredImage: absoluteImage(post.image, site),
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      authorName: post.author.name,
      tags: post.tags,
      focusKeyword: post.seo.focusKeyword,
    },
    site
  );
};

export default async function SingleBlogPostPage({ params }) {
  const { slug } = await params;
  const { post, recentPosts, notFound: missing } = await getBlogPost(slug);
  if (missing) notFound();
  if (!post) throw new Error("The blog is temporarily unavailable. Please try again shortly.");

  const site = siteInfo(await getSettings());
  // "<" escaped so the JSON can never close the script tag early
  const jsonLd = JSON.stringify(structuredData(post, site)).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <BlogArticle post={post} recentPosts={recentPosts} />
    </>
  );
}
