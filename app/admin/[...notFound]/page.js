import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-bold text-[#008043]">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for doesn&#39;t exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/admin/dashboard">Go to Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
