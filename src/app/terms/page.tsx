import Image from "next/image";
import Link from "next/link";

export default function Terms() {
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

      {/* Terms Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            Terms of Service
          </h1>
          <p className="mt-5 text-base/7 text-black/70 dark:text-white/70">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                By downloading, installing, or using Deepwork AI (&quot;the
                Service&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, do not
                use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Description of Service
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-3">
                Deepwork AI is a macOS application that uses artificial
                intelligence to help users maintain focus and productivity by:
              </p>
              <ul className="list-disc list-inside text-black/70 dark:text-white/70 space-y-2 ml-4">
                <li>
                  Monitoring screen activity and application usage patterns
                </li>
                <li>Detecting potential distractions</li>
                <li>Providing focus session management</li>
                <li>Generating productivity insights and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. User Accounts and Subscriptions
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-3">
                To access certain features of the Service, you may be required
                to create an account and purchase a subscription. You agree to:
              </p>
              <ul className="list-disc list-inside text-black/70 dark:text-white/70 space-y-2 ml-4">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>Maintain and update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>
                  Pay all applicable fees for your chosen subscription plan
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Privacy and Data Collection
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-3">
                Our collection and use of your personal information is governed
                by our Privacy Policy. By using the Service, you consent to:
              </p>
              <ul className="list-disc list-inside text-black/70 dark:text-white/70 space-y-2 ml-4">
                <li>
                  Collection of screen activity data for distraction detection
                </li>
                <li>Processing of usage patterns to improve AI accuracy</li>
                <li>Storage of session data and productivity metrics</li>
                <li>Use of anonymized data for service improvements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Acceptable Use Policy
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-3">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-black/70 dark:text-white/70 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>
                  Attempt to reverse engineer, decompile, or disassemble the
                  software
                </li>
                <li>
                  Use the Service for any commercial purpose without
                  authorization
                </li>
                <li>Interfere with or disrupt the Service or its servers</li>
                <li>Share your account credentials with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Intellectual Property Rights
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                The Service and its original content, features, and
                functionality are owned by Deepwork AI and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws. You may not copy, modify,
                distribute, sell, or lease any part of our Service without our
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Payment Terms</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-3">
                For paid subscriptions:
              </p>
              <ul className="list-disc list-inside text-black/70 dark:text-white/70 space-y-2 ml-4">
                <li>
                  Fees are charged in advance on a monthly or annual basis
                </li>
                <li>
                  All payments are non-refundable except as required by law
                </li>
                <li>
                  We may change subscription fees with 30 days advance notice
                </li>
                <li>
                  Your subscription will automatically renew unless cancelled
                </li>
                <li>
                  You may cancel your subscription at any time through your
                  account settings
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Free Trial</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                We offer a 7-day free trial for new users. At the end of the
                trial period, your subscription will automatically begin and
                your payment method will be charged unless you cancel before the
                trial expires. You may cancel your trial at any time to avoid
                charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice, if you breach these
                Terms. Upon termination, your right to use the Service will
                cease immediately, and any data associated with your account may
                be deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                IN NO EVENT SHALL DEEPWORK AI BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF
                THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                SUCH DAMAGES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Indemnification
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Deepwork AI
                from and against any claims, damages, obligations, losses,
                liabilities, costs, or debt, and expenses (including
                attorney&apos;s fees) arising from your use of the Service or
                violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where Deepwork AI is
                incorporated, without regard to its conflict of law provisions.
                Any disputes arising under these Terms shall be resolved in the
                courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                We reserve the right to modify these Terms at any time. If we
                make material changes, we will notify you by email or through
                the Service at least 30 days before the changes take effect.
                Your continued use of the Service after the changes become
                effective constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                15. Contact Information
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:support@deepwork.fit"
                  className="text-[#5E6AD2] hover:opacity-80"
                >
                  support@deepwork.fit
                </a>
                .
              </p>
            </section>
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
