/**
 * POST /api/revalidate — called by the backend after blog changes so the website
 * shows them immediately (otherwise cached blog data refreshes within 60s).
 *
 * Header:  x-revalidate-secret: <REVALIDATE_SECRET>   (same value in backend + frontend env)
 * Body:    { "tags": ["blog"] }
 */

import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const ALLOWED_TAGS = new Set(["blog", "settings"]);

export async function POST(request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ success: false, message: "Not allowed." }, { status: 401 });
  }

  let tags = ["blog"];
  try {
    const body = await request.json();
    if (Array.isArray(body?.tags) && body.tags.length) tags = body.tags;
  } catch {
    // no body: default to "blog"
  }

  const refreshed = tags.filter((t) => ALLOWED_TAGS.has(t));
  // Webhook from another server: expire immediately so the next visitor gets fresh content
  refreshed.forEach((tag) => revalidateTag(tag, { expire: 0 }));
  return NextResponse.json({ success: true, revalidated: refreshed });
}
