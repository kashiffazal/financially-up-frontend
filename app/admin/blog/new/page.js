import React from "react";
import BlogAccessGuard from "@/components/admin/blog/BlogAccessGuard";
import PostEditor from "@/components/admin/blog/PostEditor";

/**
 * /admin/blog/new — Add New Post.
 */
export default function NewBlogPostPage() {
  return (
    <BlogAccessGuard>
      <PostEditor />
    </BlogAccessGuard>
  );
}
