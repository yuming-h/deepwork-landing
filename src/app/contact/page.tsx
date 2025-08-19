import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>
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

      {/* Contact Content */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.black/.25),transparent)] dark:[background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.white/.12),transparent)]" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            Get in touch
          </h1>
          <p className="mt-5 text-base/7 sm:text-lg/8 text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Have questions about Deepwork AI? We&apos;d love to hear from you.
          </p>

          {/* Contact Card */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-8 bg-white/50 dark:bg-black/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#5E6AD2]/10 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#5E6AD2]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-3">Email Support</h2>
              <p className="text-black/70 dark:text-white/70 text-sm mb-6">
                Send us a message and we&apos;ll get back to you as soon as
                possible.
              </p>
              <a
                href="mailto:support@deepwork.fit"
                className="inline-flex items-center gap-2 rounded-full bg-[#5E6AD2] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                support@deepwork.fit
              </a>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="mt-12">
            <p className="text-black/60 dark:text-white/60 text-sm mb-4">
              Looking for quick answers?
            </p>
            <Link
              href="/#faq"
              className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Check out our FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60 dark:text-white/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Deepwork AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
