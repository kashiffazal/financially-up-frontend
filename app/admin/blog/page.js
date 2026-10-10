import React, { Suspense } from "react";
import BlogAccessGuard from "@/components/admin/blog/BlogAccessGuard";
import PostsList from "@/components/admin/blog/PostsList";

/**
 * /admin/blog — All blog posts (status tabs, search, featured, trash).
 */
export default function BlogPostsPage() {
  return (
    <BlogAccessGuard>
      {/* PostsList reads ?status= / ?category= from the URL */}
      <Suspense fallback={null}>
        <PostsList />
      </Suspense>
    </BlogAccessGuard>
  );
}
