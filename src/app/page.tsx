"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="text-sm hover:opacity-80">
              Pricing
            </a>
            <Link
              href="/downloads"
              className="inline-flex items-center rounded-full bg-[#5E6AD2] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Download
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.black/.25),transparent)] dark:[background:radial-gradient(1200px_600px_at_50%_-200px,theme(colors.white/.12),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Avoid distractions. Focus like a pro.
          </h1>
          <p className="mt-5 text-base/7 sm:text-lg/8 text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            A lightweight macOS app that uses AI to keep distractions away and
            help you reach your productivity goals.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full bg-[#5E6AD2] text-white px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for macOS
            </Link>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
            >
              See how it works
            </a>
          </div>
          <div className="mt-12 relative mx-auto max-w-5xl rounded-2xl border border-black/10 dark:border-white/15 shadow-2xl overflow-hidden bg-white/50 dark:bg-black/30">
            <Image
              src="/product/screenshot-live-session.png"
              alt="Deepwork AI live session screenshot"
              width={1278}
              height={720}
              className="w-full h-auto overflow-hidden"
              priority
            />
          </div>

          {/* Trusted by section */}
          <div className="mt-16">
            <p className="text-sm text-black/60 dark:text-white/60 text-center mb-8">
              Trusted by students and professionals at:
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Image
                src="/logos/schools/harvard.webp"
                alt="Harvard"
                width={100}
                height={50}
                className="h-10 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/logos/schools/mit.webp"
                alt="MIT"
                width={80}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/logos/schools/stanford.webp"
                alt="Stanford"
                width={100}
                height={50}
                className="h-14 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/logos/companies/microsoft.png"
                alt="Microsoft"
                width={120}
                height={60}
                className="h-10 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/logos/companies/meta.webp"
                alt="Meta"
                width={80}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/logos/companies/bcg.png"
                alt="BCG"
                width={80}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
          Designed to help you get it done
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mt-3 max-w-2xl mx-auto">
          Focus without friction. Build without burnout. Ship what matters.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Focus Sessions"
            description="Start timeboxed deep work with intention prompts."
            icon="/file.svg"
          />
          <FeatureCard
            title="Lightweight Tracking"
            description="Capture just enough data—no surveillance. You own your flow."
            icon="/globe.svg"
          />
          <FeatureCard
            title="Distraction Guard"
            description="AI distraction detection to keep you focused and away from doomscrolling."
            icon="/window.svg"
          />
          <FeatureCard
            title="Progress Insights"
            description="See what actually moves the needle across days and weeks."
            icon="/chart.svg"
          />
          <FeatureCard
            title="Session History"
            description="See your past sessions and insights to help you stay on track."
            icon="/history.svg"
          />
          <FeatureCard
            title="Privacy First"
            description="Secure and safeguarded data that you own."
            icon="/file.svg"
          />
        </div>
      </section>

      {/* Distraction Detection Showcase */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
          AI-powered distraction detection
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mt-3 max-w-2xl mx-auto">
          Get gentle nudges when you drift off course, with smart detection that
          understands context.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/15 shadow-xl overflow-hidden bg-white/50 dark:bg-black/30">
              <Image
                src="/product/screenshot-warning.png"
                alt="Distraction warning notification"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-lg">Gentle nudges</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mt-1">
                Get notified when you&apos;re getting distracted with
                context-aware alerts
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/15 shadow-xl overflow-hidden bg-white/50 dark:bg-black/30">
              <Image
                src="/product/screenshot-distraction.png"
                alt="Distraction analysis in app"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-lg">Smart analysis</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mt-1">
                Review and learn from your distraction patterns to improve focus
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/15 shadow-xl overflow-hidden bg-white/50 dark:bg-black/30">
              <Image
                src="/product/screenshot-break-alert.png"
                alt="Break reminder notification"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-lg">Break reminders</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mt-1">
                Set automatic break reminders for sustainable productivity
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/15 shadow-xl overflow-hidden bg-white/50 dark:bg-black/30">
              <Image
                src="/product/screenshot-start-session.png"
                alt="Customize session goals screen"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-lg">
                Customize your session goals
              </h3>
              <p className="text-sm text-black/70 dark:text-white/70 mt-1">
                Set intentions and goals before you start a session
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black/[.03] dark:bg-white/[.03] border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Loved by focused teams
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial
              quote="Finally! I beat procrastination and now I'm getting so much more work done with DeepWork AI."
              author="Sara, Product Designer at a startup"
            />
            <Testimonial
              quote="DeepWork stops me from going down 3 hour doom-scrolling rabbit holes and makes it so much easier to lock in."
              author="Brian, Biology major at NYU"
            />
            <Testimonial
              quote="I've gotten 2x the work done in half the time. Turns out the internet is a dangerous place without safeguards in place."
              author="Jonathan, Software Engineer at Meta"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
          Pricing
        </h2>
        <p className="text-center text-black/70 dark:text-white/70 mt-3 max-w-2xl mx-auto">
          Start free. Pay how you want and cancel anytime.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Plan
            title="Monthly - 7 days free, then"
            price="$9.99"
            priceSubtext="USD/month"
            tagline="Perfect for getting started"
            features={[]}
            cta="Start Monthly"
          />
          <Plan
            title="Annual - 7 days free, then"
            price="$83.99"
            originalPrice="$120"
            priceSubtext="$7 USD/month"
            tagline="Best value"
            features={[]}
            highlighted
            cta="Start Annual"
            badge="Best value"
            cornerSticker="SAVE 30%"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          <FAQItem
            question="How does DeepWork work?"
            answer="Our proprietary AI model analyzes your screen activity and application usage patterns to identify when you're getting distracted. It uses machine learning to understand the difference between productive work and distracting activities, then sends gentle notifications to help you refocus."
          />
          <FAQItem
            question="Is my data private and secure?"
            answer="Absolutely. All your data that we store is directly visible to you, and you can delete it at any time. It should go without saying, but we will never sell your data to third parties."
          />
          <FAQItem
            question="Can I customize the focus sessions?"
            answer="Yes! You can set custom session lengths, choose different types of work modes, customize distraction sensitivity, and set specific goals for each session. The app adapts to your workflow and preferences."
          />
          <FAQItem
            question="How much does it cost after the free trial?"
            answer="After your 7-day free trial, you can choose between $9.99/month or $83.99/year (which saves you 30%). You can cancel anytime with no commitments."
          />
          <FAQItem
            question="Can I use DeepWork for free?"
            answer="We understand that not everyone can pay for a subscription and we are working on a free tier. For now, we need to be able to cover engineering, cloud, and AI inference costs so it is greatly appreciated if you can support us."
          />
          <FAQItem
            question="Will this slow down my computer?"
            answer="Not at all. Deepwork AI is designed to be lightweight and efficient. It uses minimal system resources and runs quietly in the background without affecting your Mac's performance."
          />
          <FAQItem
            question="Is DeepWork available on PC/Windows?"
            answer="We're working on it! However, currently we only support macOS."
          />
          <FAQItem
            question="I have more questions!"
            answer="Please do not hesitate to reach out to us at support@deepwork.fit"
          />
        </div>
      </section>

      {/* Download */}
      <section
        id="download"
        className="bg-black/[.03] dark:bg-white/[.03] border-y border-black/5 dark:border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Download Deepwork AI for macOS
          </h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Universal build for Apple Silicon and Intel
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/downloads"
              className="inline-flex items-center rounded-full bg-[#5E6AD2] text-white px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Download .dmg
            </Link>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
            >
              Release notes
            </a>
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

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/50 dark:bg-black/30">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-sm sm:text-base pr-4">{question}</h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/50 dark:bg-black/30">
      <div className="flex items-center gap-3">
        <Image src={icon} alt="" width={20} height={20} aria-hidden />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-black/70 dark:text-white/70">
        {description}
      </p>
    </div>
  );
}

type TestimonialProps = { quote: string; author: string };
function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <figure className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white/50 dark:bg-black/30">
      <blockquote className="text-sm sm:text-base">“{quote}”</blockquote>
      <figcaption className="mt-3 text-xs text-black/60 dark:text-white/60">
        — {author}
      </figcaption>
    </figure>
  );
}

type PlanProps = {
  title: string;
  price: string;
  originalPrice?: string;
  priceSubtext?: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
  cornerSticker?: string;
};

function Plan({
  title,
  price,
  originalPrice,
  priceSubtext,
  tagline,
  features,
  cta,
  highlighted,
  badge,
  cornerSticker,
}: PlanProps) {
  return (
    <div
      className={`relative rounded-2xl border p-6 ${
        highlighted
          ? "border-blue-600 bg-gradient-to-br from-blue-700 via-purple-700 to-cyan-700 text-white"
          : "border-black/10 dark:border-white/15 bg-white/50 dark:bg-black/30"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {badge}
          </span>
        </div>
      )}
      {cornerSticker && (
        <div className="absolute -top-3 -right-3 transform rotate-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg border-2 border-white">
            <div className="transform -rotate-1">{cornerSticker}</div>
          </div>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <div className="flex items-center justify-center gap-3">
            {originalPrice && (
              <div
                className={`text-3xl font-bold line-through ${
                  highlighted
                    ? "text-white/70"
                    : "text-black/60 dark:text-white/60"
                }`}
              >
                {originalPrice}
              </div>
            )}
            <div className="text-3xl font-bold">{price}</div>
          </div>
          {priceSubtext && (
            <div
              className={`text-sm ${
                highlighted
                  ? "text-white/80"
                  : "text-black/60 dark:text-white/60"
              }`}
            >
              {priceSubtext}
            </div>
          )}
        </div>
        <p
          className={`text-sm mb-4 ${
            highlighted ? "text-white/80" : "text-black/70 dark:text-white/70"
          }`}
        >
          {tagline}
        </p>
      </div>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm">
          {features.map((f) => (
            <li key={f} className="text-center">
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6">
        <Link
          href="/downloads"
          className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-medium ${
            highlighted
              ? "bg-white text-[#5E6AD2] hover:opacity-90"
              : "border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
