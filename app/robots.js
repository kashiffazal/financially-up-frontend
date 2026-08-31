/**
 * Dynamic robots.txt configuration for Next.js App Router
 * Prevents search engines and web crawlers from indexing any routes.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
