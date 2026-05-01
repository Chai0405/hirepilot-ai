// FILE:
// client/app/features/page.tsx

"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import Features from "@/components/landing/Features";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FeaturesPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_30%),linear-gradient(to_bottom,#000000,#000000)]`}>
      
      {/* FEATURES PAGE NAVBAR */}
      <header className="relative z-50 bg-transparent">
        {/* Uniform background blend */}

        <div className="relative max-w-8xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-30 ">

            {/* Logo */}
            <Link href="/" className="flex items-center -ml-13">
              <img
                src="/branding/logos/hirepilot-horizontal-logo.png"
                alt="HirePilot AI"
                className="w-[260px] object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center justify-between gap-8">
              <Link
                href="/features"
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-sm font-medium"
              >
                Features
              </Link>

              <Link
                href="/solutions"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-normal"
              >
                Solutions
              </Link>

              <Link
                href="/resources"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-normal"
              >
                Resources
              </Link>

              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-normal"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-normal"
              >
                About Us
              </Link>
            </nav>

            {/* CTA */}
            <Link
  href="/demo"
  className="inline-flex items-center justify-center rounded-4xl border border-purple-500/40 bg-black/30 px-4 py-3 text-xs text-white shadow-[0_0_18px_rgba(168,85,247,0.18)] backdrop-blur-md transition hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.28)]"
>
  Request Demo
</Link>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <Features />
    </main>
  );
}