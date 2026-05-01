import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className={`${inter.className} flex items-center justify-between max-w-8xl`}>
      {/* Logo */}
      <Link href="/" className="flex items-center -ml-13">
              <img
                src="/branding/logos/hirepilot-horizontal-logo.png"
                alt="HirePilot AI"
                className="w-[260px] object-contain"
              />
            </Link>

      {/* Nav Links */}
      <div className="hidden items-center gap-8 max-w-2xl text-sm leading-relaxed text-slate-300 lg:flex">
        <a href="features" className="transition hover:text-white">
          Features
        </a>

        <a href="/solutions" className="font-sans text-sm font-medium leading-relaxed text-slate-300 transition hover:text-white">
          Solutions
        </a>

        <a href="/resources" className="font-sans text-sm font-medium leading-relaxed text-slate-300 transition hover:text-white">
          Resources
        </a>

        <a
          href="/pricing"
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Pricing
        </a>

        <a href="/about" className="transition hover:text-white">
          About Us
        </a>
      </div>

      {/* CTA */}
      <Link
  href="/demo">
<button className="rounded-4xl border border-purple-500/40 bg-black/30 px-4 py-3 text-xs text-white shadow-[0_0_18px_rgba(168,85,247,0.18)] backdrop-blur-md transition hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.28)] cursor-pointer">
  Request Demo
</button>
</Link>
    </nav>
  );
}