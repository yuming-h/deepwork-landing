"use client";

import Image from "next/image";
import Link from "next/link";

export default function Downloads() {
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
            <Link
              href="/downloads"
              className="inline-flex items-center rounded-full bg-[#5E6AD2] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Download
            </Link>
          </div>
        </div>
      </header>

      {/* Demo Video */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.black/.25),transparent)] dark:[background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.white/.12),transparent)]" />
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-20">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
            Deepwork AI Demo
          </h1>
          <div className="mt-8 relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 shadow-2xl bg-white/50 dark:bg-black/30">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PD97z2UW7Og"
                title="Deepwork AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60 dark:text-white/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Deepwork AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
