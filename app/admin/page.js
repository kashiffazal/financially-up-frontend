import { redirect } from "next/navigation";

/** /admin has no page of its own — go to the Dashboard (login is handled there). */
export default function AdminIndexPage() {
  redirect("/admin/dashboard");
}
