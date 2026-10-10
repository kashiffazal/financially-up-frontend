import React from "react";
import BlogAccessGuard from "@/components/admin/blog/BlogAccessGuard";
import PostEditor from "@/components/admin/blog/PostEditor";

/**
 * /admin/blog/[id] — Edit Post.
 */
export default async function EditBlogPostPage({ params }) {
  const { id } = await params;
  return (
    <BlogAccessGuard>
      <PostEditor key={id} postId={id} />
    </BlogAccessGuard>
  );
}
