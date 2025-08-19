import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
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
            <a
              href="/#download"
              className="inline-flex items-center rounded-full bg-[#5E6AD2] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-semibold tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-lg text-black/70 dark:text-white/70 mb-8">
            At Deepwork AI, your privacy isn't just important to us—it's
            fundamental to everything we do.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Privacy Promise</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium mb-3 text-blue-900 dark:text-blue-100">
                We will never:
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li>• Surveil or spy on your activities</li>
                <li>• Sell your personal data to third parties</li>
                <li>• Give away your data to advertisers or data brokers</li>
                <li>
                  • Use your information for purposes other than improving your
                  Deepwork AI experience
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              What Information We Collect
            </h2>
            <p className="mb-4">
              Deepwork AI is designed to be minimally invasive. We only collect
              information that's necessary to provide you with the best focus
              experience:
            </p>
            <ul className="space-y-2 mb-4">
              <li>
                • <strong>Account Information:</strong> Your email address for
                account creation and important updates
              </li>
              <li>
                • <strong>Session Data:</strong> Basic information about your
                focus sessions (duration, goals) to help you track your progress
              </li>
              <li>
                • <strong>Usage Analytics:</strong> Anonymous, aggregated data
                about how the app is used to improve performance and features
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              How We Protect Your Data
            </h2>
            <p className="mb-4">Your data security is our top priority:</p>
            <ul className="space-y-2 mb-4">
              <li>
                • <strong>Local-First:</strong> Most of your data stays on your
                device
              </li>
              <li>
                • <strong>Encryption:</strong> All data transmission is
                encrypted using industry-standard protocols
              </li>
              <li>
                • <strong>Minimal Storage:</strong> We store only what's
                necessary to sync your progress across devices
              </li>
              <li>
                • <strong>No Screenshots:</strong> We never capture or store
                screenshots of your screen
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">You have complete control over your data:</p>
            <ul className="space-y-2 mb-4">
              <li>
                • <strong>Access:</strong> Request a copy of all data we have
                about you
              </li>
              <li>
                • <strong>Delete:</strong> Delete your account and all
                associated data at any time
              </li>
              <li>
                • <strong>Export:</strong> Export your session data in a
                portable format
              </li>
              <li>
                • <strong>Correct:</strong> Update or correct any information we
                have about you
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              We use a minimal number of trusted third-party services:
            </p>
            <ul className="space-y-2 mb-4">
              <li>
                • <strong>Authentication:</strong> Secure login services that
                don't access your personal data
              </li>
              <li>
                • <strong>Analytics:</strong> Privacy-focused analytics that
                don't track individuals
              </li>
              <li>
                • <strong>Hosting:</strong> Secure cloud infrastructure with
                strict data protection standards
              </li>
            </ul>
            <p>
              All third-party services we use are carefully vetted and
              contractually bound to protect your privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. When we do:
            </p>
            <ul className="space-y-2 mb-4">
              <li>
                • We'll notify you via email if there are significant changes
              </li>
              <li>
                • We'll post the updated policy with a clear revision date
              </li>
              <li>
                • We'll never retroactively change how we handle data you've
                already provided
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or how we
              handle your data, please don't hesitate to reach out:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@deepwork.fit"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  support@deepwork.fit
                </a>
              </p>
              <p>
                We're committed to transparency and will respond to your privacy
                questions promptly.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60 dark:text-white/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Deepwork AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="#">Terms</Link>
            <a href="mailto:hello@deepwork.ai">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
