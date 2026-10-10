/**
 * Website blog data (server components only).
 *
 * Reads live posts from the API (/api/blog). Responses are cached by Next.js and
 * tagged "blog": the admin refreshes them instantly after a change (see
 * app/api/revalidate), and they refresh on their own every 60 seconds — which is
 * also how scheduled posts appear at their publish time.
 */

import { API_BASE } from "./blog";

const REVALIDATE_SECONDS = 60;
const TIMEOUT_MS = 5000;

const getJson = async (path) => {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["blog"] },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status === 404) return { notFound: true };
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.warn(`[Blog] ${path} unavailable: ${error.name === "TimeoutError" ? `no response within ${TIMEOUT_MS / 1000}s` : error.message}`);
    return null;
  }
};

/** Website shape: category names in capitals, exactly as the blog design shows them. */
const forDisplay = (post) => ({ ...post, category: String(post.category || "").toUpperCase() });

/**
 * { posts, categories, tags, ok } for /blog. `ok: false` when the API couldn't be
 * reached (lists are then empty).
 */
export async function getBlogHub() {
  const json = await getJson("/blog/hub");
  const data = json?.data || {};
  return {
    ok: Boolean(json?.success),
    posts: (data.posts || []).map(forDisplay),
    categories: data.categories || [],
    tags: data.tags || [],
  };
}

/**
 * One article + recent articles. `notFound: true` when the slug doesn't exist,
 * `post: null` when the API couldn't be reached.
 */
export async function getBlogPost(slug) {
  const json = await getJson(`/blog/posts/${encodeURIComponent(slug)}`);
  if (json?.notFound) return { notFound: true, post: null, recentPosts: [] };
  const data = json?.data;
  return {
    notFound: false,
    post: data?.post ? forDisplay(data.post) : null,
    recentPosts: (data?.recentPosts || []).map(forDisplay),
  };
}
