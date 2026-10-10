import React from "react";
import BlogAccessGuard from "@/components/admin/blog/BlogAccessGuard";
import TaxonomyManager from "@/components/admin/blog/TaxonomyManager";

/**
 * /admin/blog/categories — add / edit / delete blog categories (with sub-categories).
 */
export default function BlogCategoriesPage() {
  return (
    <BlogAccessGuard>
      <TaxonomyManager type="category" />
    </BlogAccessGuard>
  );
}
