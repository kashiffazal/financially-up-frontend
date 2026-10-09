import { AntdRegistry } from "@ant-design/nextjs-registry";
import localFont from "next/font/local";
import ThemeProvider from "./ThemeProvider";
import { SettingsProvider } from "../context/SettingsContext";
import { getSettings } from "../lib/getSettings";
import "./globals.css";

// Geist fonts are bundled with the project (app/fonts, SIL Open Font License)
// instead of `next/font/google`. Google fonts are downloaded during `next build`
// with no time limit, so a build server that can't reach Google hangs forever
// with no error. Same font family and CSS variables as before.
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
});

export const metadata = {
  title: "Financially Up - ERP & Admin Portal",
  description: "Secure Admin Accounts and Taxation ERP System",
  // Global search engine crawler blocking (noindex & nofollow)
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children }) {
  // Global variables (company identity, contact emails, URLs) shared by the
  // public website, the Admin Portal and every client-facing form.
  const settings = await getSettings();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        <AntdRegistry>
          <SettingsProvider initialSettings={settings}>
            <ThemeProvider>{children}</ThemeProvider>
          </SettingsProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
