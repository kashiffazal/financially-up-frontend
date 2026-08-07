import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-zinc-950 text-slate-800 dark:text-zinc-100">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-bold text-brand-primary">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

        <p className="mt-4 text-slate-600 dark:text-zinc-400">
          Sorry, the page you are looking for doesn&#39;t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary-hover transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/business-services"
            className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 font-semibold hover:bg-slate-200 transition-colors"
          >
            Business Services
          </Link>
          <Link
            href="/individual-services"
            className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 font-semibold hover:bg-slate-200 transition-colors"
          >
            Individual Services
          </Link>
        </div>
      </div>
    </main>
  );
}
