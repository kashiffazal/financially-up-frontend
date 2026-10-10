/**
 * Blog admin API calls (/api/blog-admin). Every function resolves to the
 * response body, or `false` when the request failed (the HTTP helper already
 * shows the error message unless `quiet` is passed).
 */

import { HTTP } from "@/services";
import { resolveBlogImage } from "@/lib/blog";

const BASE = "/blog-admin";

export const blogApi = {
  // Posts
  listPosts: (params = {}) => HTTP("GET", `${BASE}/posts`, params, false, true),
  getPost: (id) => HTTP("GET", `${BASE}/posts/${id}`, undefined, false, true),
  createPost: (payload) => HTTP("POST", `${BASE}/posts`, payload),
  updatePost: (id, payload) => HTTP("PUT", `${BASE}/posts/${id}`, payload),
  setFeatured: (id, featured) => HTTP("PUT", `${BASE}/posts/${id}/featured`, { featured }),
  trashPost: (id) => HTTP("POST", `${BASE}/posts/${id}/trash`, {}),
  restorePost: (id) => HTTP("POST", `${BASE}/posts/${id}/restore`, {}),
  deletePost: (id) => HTTP("DELETE", `${BASE}/posts/${id}`),

  // Categories
  listCategories: () => HTTP("GET", `${BASE}/categories`, undefined, false, true),
  createCategory: (payload) => HTTP("POST", `${BASE}/categories`, payload),
  updateCategory: (id, payload) => HTTP("PUT", `${BASE}/categories/${id}`, payload),
  deleteCategory: (id) => HTTP("DELETE", `${BASE}/categories/${id}`),

  // Tags
  listTags: () => HTTP("GET", `${BASE}/tags`, undefined, false, true),
  createTag: (payload) => HTTP("POST", `${BASE}/tags`, payload),
  updateTag: (id, payload) => HTTP("PUT", `${BASE}/tags/${id}`, payload),
  deleteTag: (id) => HTTP("DELETE", `${BASE}/tags/${id}`),

  // Authors
  listAuthors: () => HTTP("GET", `${BASE}/authors`, undefined, false, true),

  /**
   * Uploads an image file; resolves to { path, url } where `path` is what gets
   * saved ("/uploads/blog/...") and `url` is the full address for previews/editor.
   */
  uploadImage: async (file) => {
    const res = await HTTP("POST", `${BASE}/media`, { file });
    if (!res?.success || !res.url) return null;
    return { path: res.url, url: resolveBlogImage(res.url) };
  },
};

/** Status colours / labels used across the blog admin. */
export const POST_STATUS_META = {
  Published: { color: "success", label: "Published" },
  Scheduled: { color: "processing", label: "Scheduled" },
  Draft: { color: "default", label: "Draft" },
  Trash: { color: "error", label: "Trash" },
};
