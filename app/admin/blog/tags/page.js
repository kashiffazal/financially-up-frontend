import React from "react";
import BlogAccessGuard from "@/components/admin/blog/BlogAccessGuard";
import TaxonomyManager from "@/components/admin/blog/TaxonomyManager";

/**
 * /admin/blog/tags — add / edit / delete blog tags.
 */
export default function BlogTagsPage() {
  return (
    <BlogAccessGuard>
      <TaxonomyManager type="tag" />
    </BlogAccessGuard>
  );
}
