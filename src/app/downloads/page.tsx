"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DOWNLOAD_URL =
  "https://deepwork-releases.s3.us-east-1.amazonaws.com/DeepWorkAI-0.1.4.dmg";

export default function Downloads() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // Track Facebook Pixel download event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "DeepWork AI Download",
        content_category: "Software Download",
        value: 0,
        currency: "USD",
      });
    }

    window.open(DOWNLOAD_URL, "_blank");
  };

  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/deepwork-logo.png"
              alt="Deepwork AI logo"
              width={28}
              height={28}
              priority
            />
            <span className="text-sm font-medium tracking-tight">
              Deepwork AI
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/#pricing" className="text-sm hover:opacity-80">
              Pricing
            </Link>
            <button
              onClick={handleDownload}
              className="inline-flex items-center rounded-full bg-[#5E6AD2] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Download
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.black/.25),transparent)] dark:[background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.white/.12),transparent)]" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            Download Deepwork AI
          </h1>
          <p className="mt-5 text-base/7 sm:text-lg/8 text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Get the lightweight macOS app that uses AI to keep distractions away
            and help you reach your productivity goals.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-black/10 dark:border-white/15 p-8 bg-white/50 dark:bg-black/30">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/deepwork-logo.png"
                alt="Deepwork AI"
                width={64}
                height={64}
                className="mx-auto"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-2">
              Deepwork AI for macOS
            </h2>
            <p className="text-black/70 dark:text-white/70 mb-6">
              Latest Version (0.1.4) • Universal build for Apple Silicon and
              Intel
            </p>

            <div className="space-y-4 max-w-md mx-auto">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#5E6AD2] text-white px-6 py-4 text-base font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download .dmg (7.2 MB)
                  </>
                )}
              </button>

              <div className="text-sm text-black/60 dark:text-white/60">
                <p className="mb-2">System Requirements:</p>
                <ul className="text-left space-y-1">
                  <li>• macOS 11.0 (Big Sur) or later</li>
                  <li>• Apple Silicon or Intel processor</li>
                  <li>• 20 MB free disk space</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/50 dark:bg-black/30">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              What&apos;s Included
            </h3>
            <ul className="text-sm text-black/70 dark:text-white/70 space-y-2">
              <li>• AI-powered distraction detection</li>
              <li>• Focus session timer</li>
              <li>• Progress tracking and insights</li>
              <li>• 7-day free trial</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/50 dark:bg-black/30">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Safe & Secure
            </h3>
            <ul className="text-sm text-black/70 dark:text-white/70 space-y-2">
              <li>• Pending notarization by Apple</li>
              <li>• No hidden telemetry or tracking</li>
              <li>• Regular security updates</li>
            </ul>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60 dark:text-white/60 mt-20 border-t border-black/5 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Deepwork AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:hello@deepwork.ai">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
