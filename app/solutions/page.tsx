"use client";

import Link from "next/link";
import {
  Rocket,
  Building2,
  Users,
  Globe,
  Code2,
  HeartPulse,
  BadgeDollarSign,
  ShoppingBag,
  Building,
  Search,
  FileSearch,
  ClipboardCheck,
  CheckCircle2,
  ChevronRight 
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SolutionsPage() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_30%),linear-gradient(to_bottom,#000000,#000000)]`}
    >

      {/* NAVBAR */}
      <header className="relative z-50 bg-transparent">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-30">

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
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Features
              </Link>

              <Link
                href="/solutions"
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-sm font-medium"
              >
                Solutions
              </Link>

              <Link
                href="/resources"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Resources
              </Link>

              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                About Us
              </Link>
            </nav>

            {/* CTA */}
            <Link
  href="/demo">
            <button className="rounded-4xl border border-purple-500/40 bg-black/30 px-4 py-3 text-xs text-white shadow-[0_0_18px_rgba(168,85,247,0.18)] backdrop-blur-md transition hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.28)] cursor-pointer">
              Request Demo
            </button>
</Link>
          </div>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="relative pt-8 pb-24 px-6 lg:px-20 overflow-hidden">

        {/* Neural Background */}
        <div className="absolute top-0 -left-32 w-[950px] h-[720px] pointer-events-none opacity-[0.08] z-0">
          <img
            src="/graphics/neural-network-bg.png"
            alt="Background Glow"
            className="w-full h-full object-contain object-top-left mix-blend-screen"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Section Label */}
          <p className="text-xs uppercase tracking-[0.35em] text-purple-400 mb-2 ml-2 text-left">
            Solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div>

              <h1 className="text-3xl md:text-6xl text-white leading-tight">
                Tailored hiring
                <br />
                solutions for{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  every team
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
                HirePilot AI empowers startups, agencies, and enterprises
                with scalable hiring workflows, automation, and
                AI-powered recruitment infrastructure.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">

                <button
                onClick={() =>
    document.getElementById("solutions-categories")?.scrollIntoView({
      behavior: "smooth",
    })
  } 
                className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-7 py-3 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.18)] hover:scale-105 transition-all duration-300 cursor-pointer">
                  Explore Solutions →
                </button>
<Link href="/sales">
                <button 
                className="rounded-2xl border border-white/10 px-7 py-3 text-white hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  Talk to Sales
                </button>
                </Link>

              </div>

            </div>


            {/* Right Visual */}
            <div className="relative rounded-3xl shadow-[0_25px_90px_rgba(168,85,247,0.14)]">

  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl opacity-60 -z-10" />

  <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-3xl p-6 overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]">
                
                <img
                  src="/solutions-dashboard.png"
                  alt="Solutions Dashboard"
                  className="w-full rounded-2xl object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOLUTIONS CARDS SECTION */}
<section 
id="solutions-categories"
className="relative -py-2 px-6 lg:px-20 scroll-mt-24">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl text-white">
        Solutions for every{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          team
        </span>
      </h2>

      <p className="mt-4 text-gray-400 text-lg">
        Powerful hiring solutions designed to fit teams of all sizes.
      </p>
    </div>


    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Startups",
          desc: "Move fast and hire smarter. Perfect for early-stage teams building the future.",
          icon: Rocket,
        },
        {
          title: "Enterprises",
          desc: "Scale your hiring across locations with enterprise-grade security and control.",
          icon: Building2,
        },
        {
          title: "Agencies",
          desc: "Hire for multiple clients and manage talent efficiently in one place.",
          icon: Users,
        },
        {
          title: "Remote Teams",
          desc: "Find and hire top global talent and build remote teams that win.",
          icon: Globe,
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
  key={i}
  className="group relative rounded-3xl bg-gradient-to-br from-blue-500/[0.04] via-purple-500/[0.03] to-pink-500/[0.05] backdrop-blur-xl border border-white/8 p-8 min-h-[320px] flex flex-col justify-between overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.10)] transition-all duration-500"
>

            {/* Gradient Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-100 transition-all duration-500`}
            />

            <div className="relative z-10">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
                <Icon
                  className="w-9 h-9"
                   style={{
              stroke: "url(#icon-gradient)",
            }}
                />
              </div>

              <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

              {/* Title */}
              <h3 className="mt-8 text-2xl text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>

            </div>

            {/* CTA */}
            <button className="relative z-10 mt-8 text-sm font-medium text-purple-400 hover:text-pink-400 transition-colors text-left">
              Learn more →
            </button>

          </div>

          
        );
      })}

    </div>

  </div>

</section>

{/* INDUSTRIES SECTION */}
<section className="relative py-14 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl text-white">
        Built for every{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          industry
        </span>
      </h2>

      <p className="mt-4 text-gray-400 text-lg">
        We understand hiring challenges across industries.
      </p>
    </div>


    {/* Industry Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

      {[
        {
          title: "Technology",
          desc: "Hire developers, designers, and product experts faster.",
          icon: Code2,
        },
        {
          title: "Healthcare",
          desc: "Find top healthcare professionals and medical experts.",
          icon: HeartPulse,
          
        },
        {
          title: "Finance",
          desc: "Hire financial analysts, compliance experts, and more.",
          icon: BadgeDollarSign,
        },
        {
          title: "Retail",
          desc: "Build high-performing retail and operations teams.",
          icon: ShoppingBag,
        },
        {
          title: "And More",
          desc: "Education, Real Estate, Manufacturing and more.",
          icon: Building,
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
  key={i}
  className="group relative rounded-3xl bg-gradient-to-br from-blue-500/[0.04] via-purple-500/[0.03] to-pink-500/[0.05] backdrop-blur-xl border border-white/8 p-8 min-h-[320px] flex flex-col justify-between overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.10)] transition-all duration-500"
>

            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-60" />

            <div className="relative z-10">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
                <Icon
                  className="w-9 h-9"
                   style={{
              stroke: "url(#icon-gradient)",
            }}
                />
              </div>

              <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

              {/* Title */}
              <h3 className="mt-8 text-2xl text-white">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>

            </div>

            {/* CTA */}
            <button className="relative z-10 mt-5 text-sm font-medium text-purple-400 hover:text-pink-400 transition-colors text-left">
              Learn more →
            </button>

          </div>
        );
      })}

    </div>

  </div>

</section>

{/* WORKFLOW SECTION */}
<section className="relative py-5 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl text-white">
        Your complete hiring{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          workflow
        </span>
      </h2>

      <p className="mt-4 text-gray-400 text-lg">
        From sourcing to offer management — streamline every hiring stage.
      </p>
    </div>


    {/* Workflow Steps */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative">

      {[
        {
          number: "01",
          title: "Source",
          desc: "Find top global candidates faster.",
          icon: Search,
          iconBg: "from-blue-500/35 to-blue-400/15",
        },
        {
          number: "02",
          title: "Screen",
          desc: "AI resume analysis and candidate ranking.",
          icon: FileSearch,
          iconBg: "from-violet-500/35 to-purple-400/15",
        },
        {
          number: "03",
          title: "Interview",
          desc: "Automated scheduling and scorecards.",
          icon: Users,
          iconBg: "from-pink-500/35 to-fuchsia-400/15",
        },
        {
          number: "04",
          title: "Evaluate",
          desc: "Collaborate with teams and review candidates.",
          icon: ClipboardCheck,
          iconBg: "from-amber-400/35 to-yellow-300/15",
        },
        {
          number: "05",
          title: "Hire",
          desc: "Make confident offers and scale growth.",
          icon: CheckCircle2,
          iconBg: "from-teal-400/35 to-cyan-400/15",
        },
      ].map((step, i) => {
        const Icon = step.icon;

        return (
          <div
            key={i}
            className="relative flex flex-col items-center text-center min-w-0"
          >

            {/* Connector Line */}
           {i < 4 && (
  <div className="hidden md:flex absolute top-5 left-[58%] w-[90%] items-center">

    {/* Dotted Line */}
    <div className="flex-1 border-t border-dashed border-purple-400/30" />

    {/* Arrow */}
    <div className="flex items-center justify-center -ml-[2px]">
      <ChevronRight
        className="w-4 h-4 text-cyan-400/70"
        strokeWidth={1.8}
      />
    </div>

  </div>
)}
  {/* Icon Circle */}
  <div
    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.iconBg} border border-white/12 backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.12)]`}
  >

    <Icon
      className="w-9 h-9 text-white relative z-10"
      strokeWidth={1.8}
    />
  </div>

  {/* Number */}
  <span className="mt-5 text-xs tracking-[0.3em] text-gray-500">
    {step.number}
  </span>

  {/* Title */}
  <h3 className="mt-2 text-xl text-white font-semibold">
    {step.title}
  </h3>

  {/* Description */}
  <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-[180px]">
    {step.desc}
  </p>

</div>
        );
      })}

    </div>


    {/* CTA Banner */}
    <div className="mt-17 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/8 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(168,85,247,0.08)]">

      <div className="grid lg:grid-cols-3 gap-8 items-center">

        {/* Left */}
        <div>
          <h3 className="text-3xl text-white leading-tight">
            Ready to transform your hiring?
          </h3>
        </div>

        {/* Middle */}
        <div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Join 500+ companies using HirePilot AI to hire faster and smarter.
          </p>
        </div>

        {/* Right CTA */}
        <div className="flex flex-wrap gap-4 lg:justify-end">

          <Link href="/demo">
          <button className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-medium hover:scale-105 transition-all duration-300 cursor-pointer">
            Book a Demo →
          </button>
</Link>
<Link href="/sales">
          <button className="rounded-2xl border border-white/10 px-6 py-3 text-white hover:bg-white/5 transition-all duration-300">
            Talk to Sales
          </button>
</Link>

        </div>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}
