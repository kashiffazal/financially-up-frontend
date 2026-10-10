"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SetPasswordCard from "@/components/admin/SetPasswordCard";

/** Public page opened from the "Set / reset your password" emails. */
function SetPasswordPage() {
  const token = useSearchParams().get("token") || "";
  return <SetPasswordCard token={token} />;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SetPasswordPage />
    </Suspense>
  );
}
