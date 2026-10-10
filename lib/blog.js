/**
 * Blog helpers shared by the admin blog module and the website blog pages.
 */

// Works on the server (website pages) and in the browser (admin)
export const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/+$/, "");

/** Base URL of the API server (uploaded blog images live there under /uploads). */
export const API_ORIGIN = API_BASE.replace(/\/api$/, "");

/**
 * Image location -> usable URL.
 *   "/uploads/..."  -> uploaded through the admin (served by the API server)
 *   "/images/..."   -> file in the website's /public folder
 *   "https://..."   -> external URL, used as is
 */
export const resolveBlogImage = (src) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;
  if (src.startsWith("/uploads/")) return `${API_ORIGIN}${src}`;
  return src.startsWith("/") ? src : `/${src}`;
};

/**
 * True for images on other websites (pasted URLs): next/image can't optimise
 * hosts it doesn't know, so these are shown as-is (`unoptimized`).
 */
export const isExternalImage = (url) => /^https?:\/\//i.test(url || "") && !String(url).startsWith(API_ORIGIN);

/** "Tax Tips & Tricks 2026!" -> "tax-tips-tricks-2026" (same rules as the API) */
export const slugify = (text) =>
  String(text || "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);

/** Plain text of editor HTML. */
export const htmlToText = (html) =>
  String(html || "")
    .replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

export const countWords = (html) => {
  const text = htmlToText(html);
  return text ? text.split(" ").length : 0;
};

/**
 * Website base URL for permalinks, "View post", canonical URLs and schema.
 * NEXT_PUBLIC_SITE_URL (.env.local / .env.production) decides it, so a domain
 * change is one env value; falls back to the settings URL, then the current site.
 */
export const siteBaseUrl = (settingsUrl) =>
  String(
    process.env.NEXT_PUBLIC_SITE_URL ||
      settingsUrl ||
      (typeof window !== "undefined" ? window.location.origin : "https://financiallyup.com.au")
  ).replace(/\/+$/, "");

/**
 * BlogPosting JSON-LD for a post.
 * @param {object} post  - { title, slug, excerpt, metaTitle, metaDescription, featuredImage, publishedAt, updatedAt, authorName, tags: [{name}] | [name], focusKeyword }
 * @param {object} site  - { url, name, logo }
 */
export const buildBlogSchema = (post, site) => {
  const url = `${site.url}/blog/${post.slug || ""}`;
  const image = resolveBlogImage(post.featuredImage || post.image);
  const tags = (post.tags || []).map((t) => (typeof t === "string" ? t : t.name)).filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: (post.metaTitle || post.title || "").slice(0, 110),
    description: post.metaDescription || post.excerpt || "",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
    dateModified: new Date(post.updatedAt || post.publishedAt || Date.now()).toISOString(),
    author: { "@type": "Person", name: post.authorName || post.author?.name || site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      ...(site.logo ? { logo: { "@type": "ImageObject", url: site.logo } } : {}),
    },
  };
  if (image) schema.image = /^https?:/.test(image) ? image : `${site.url}${image}`;
  if (tags.length || post.focusKeyword) schema.keywords = [post.focusKeyword, ...tags].filter(Boolean).join(", ");
  return JSON.parse(JSON.stringify(schema)); // drop undefined values
};
