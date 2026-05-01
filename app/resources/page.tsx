"use client";

import Link from "next/link";
import { 
Search,
BookOpen,
  FileText,
  Users,
  BarChart3,
  TrendingUp,
  ShieldCheck,
FileSearch,
  MessageSquareQuote,
 } from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ResourcesPage() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_30%),linear-gradient(to_bottom,#000000,#000000)]`}
    >

      {/* NAVBAR */}
      <header className="relative z-50 bg-transparent">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-30">

            {/* Logo */}
            <Link href="/" className="flex items-center -ml-13 cursor-pointer">
              <img
                src="/branding/logos/hirepilot-horizontal-logo.png"
                alt="HirePilot AI"
                className="w-[260px] object-contain transition-all duration-300 hover:opacity-95"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center justify-between gap-8">
              <Link href="/features" className="text-gray-300 hover:text-white text-sm">
                Features
              </Link>

              <Link href="/solutions" className="text-gray-300 hover:text-white text-sm">
                Solutions
              </Link>

              <Link href="/resources" className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-sm font-medium">
                Resources
              </Link>

              <Link href="/pricing" className="text-gray-300 hover:text-white text-sm">
                Pricing
              </Link>

              <Link href="/about" className="text-gray-300 hover:text-white text-sm">
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

        {/* Background */}
        <div className="absolute top-0 -left-32 w-[950px] h-[720px] pointer-events-none opacity-[0.08] z-0">
          <img
            src="/graphics/neural-network-bg.png"
            alt="Background Glow"
            className="w-full h-full object-contain object-top-left mix-blend-screen"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-purple-400 mb-6">
              Resources Hub
            </p>

            <h1 className="text-5xl md:text-7xl text-white leading-tight">
              Resources to
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                hire smarter
              </span>
            </h1>

            <p className="mt-3 text-lg text-gray-400 leading-relaxed max-w-xl">
              Guides, templates, tools, and hiring insights to help
              you build world-class teams faster.
            </p>

            {/* Search */}
            <div className="mt-5">

  {/* Search Bar */}
  <div className="relative">
    <Search
  className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white z-10 pointer-events-none"
  strokeWidth={2}
/>

    <input
      type="text"
      placeholder="Search guides, templates, tools..."
      className="w-full rounded-2xl border border-blue-500/25 bg-black/30 pl-14 pr-6 py-4 text-white placeholder:text-gray-500 backdrop-blur-xl outline-none shadow-[0_0_25px_rgba(59,130,246,0.08)] focus:border-purple-400/40"
    />
  </div>

  {/* Popular Tags */}
  <div className="mt-5 flex flex-wrap items-center gap-2">

    <span className="text-sm font-semibold text-gray-400">Popular:</span>

    {[
      "ATS Templates",
      "Interview Questions",
      "Hiring Guides",
      "AI in Hiring",
    ].map((tag, i) => (
      <button
        key={i}
        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-gray-300 hover:border-purple-400/30 hover:text-white transition-all duration-300"
      >
        {tag}
      </button>
    ))}

  </div>

</div>

          </div>


          {/* RIGHT */}
          
            <img
              src="/resources-dashboard.png"
              alt="Resources Dashboard"
              className="w-full rounded-2xl scale-110 object-cover opacity-70"
            />

          </div>

        

      </section>

      {/* BROWSE BY CATEGORY SECTION */}
<section className="relative -py-1 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl text-white">
        Browse by{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          category
        </span>
      </h2>

      <p className="mt-4 text-gray-400 text-md">
        Find the right resources for every stage of your hiring journey.
      </p>
    </div>


    {/* Category Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 -mt-4">

      {[
        {
          title: "Hiring Guides",
          desc: "Step-by-step guides to improve your hiring process.",
          icon: BookOpen,
          iconBg: "from-violet-500/35 to-purple-400/15",
        },
        {
          title: "ATS Templates",
          desc: "Customizable templates to streamline your recruitment.",
          icon: FileText,
          iconBg: "from-blue-500/35 to-cyan-400/15",
        },
        {
          title: "Interview Playbooks",
          desc: "Structured playbooks for role-specific interviews.",
          icon: Users,
          
        },
        {
          title: "Salary Benchmarks",
          desc: "Up-to-date salary data to hire competitively.",
          icon: BarChart3,
          
        },
        {
          title: "Recruitment Trends",
          desc: "Insights and trends shaping the future of hiring.",
          icon: TrendingUp,
          
        },
        {
          title: "Compliance",
          desc: "Stay compliant with hiring laws and regulations.",
          icon: ShieldCheck,
          
        },
      ].map((item, i) => {
        const Icon = item.icon as React.ElementType;

        return (
          <div
  key={i}
  className="group relative rounded-3xl bg-gradient-to-br from-blue-500/[0.04] via-purple-500/[0.03] to-pink-500/[0.05] backdrop-blur-xl border border-white/8 p-8 min-h-[320px] flex flex-col justify-between overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.10)] transition-all duration-500"
>

            {/* Glass Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-60" />

            <div className="relative z-10">

              {/* Icon */}
             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
                {item.title === "Salary Benchmarks" ? (
  <Icon
    className="w-9 h-9 text-purple-300"
    strokeWidth={1.8}
  />
) : (
  <Icon
    className="w-9 h-9"
    style={{
      stroke: "url(#icon-gradient)",
    }}
    strokeWidth={1.8}
  />
)}
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
              <h3 className="mt-8 text-lg text-white leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>

            </div>

            {/* CTA */}
            <button className="relative z-10 mt-5 text-sm text-purple-400 hover:text-pink-400 transition-colors text-left">
              Explore →
            </button>

          </div>
        );
      })}

    </div>

  </div>

</section>

{/* FEATURED RESOURCES SECTION */}
<section className="relative py-15 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">

      <div>
        <h2 className="text-4xl md:text-5xl text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            resources
          </span>
        </h2>

        <p className="mt-4 text-gray-400 text-md">
          Handpicked insights, guides, and templates from our experts.
        </p>
      </div>

      <button className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.10)] transition-all duration-300 hover:scale-105 hover:border-purple-400/25 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">

  {/* Gloss Layer */}
  <span className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent pointer-events-none" />

  {/* Text */}
  <span className="relative z-10 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
    View all resources →
  </span>

</button>

    </div>


    {/* Resource Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          type: "GUIDE",
          title: "The Ultimate Guide to AI-Powered Hiring",
          desc: "Learn how AI can help you find, screen, and hire top talent faster.",
          time: "10 min read",
          image: "/graphics/resource-ai-guide.png",
          accent: "text-purple-400",
        },
        {
          type: "TEMPLATE",
          title: "ATS Implementation Checklist",
          desc: "A complete checklist to implement your ATS the right way.",
          time: "5 min read",
          image: "/graphics/resource-ats-template.png",
          accent: "text-cyan-400",
        },
        {
          type: "PLAYBOOK",
          title: "Technical Interview Playbook",
          desc: "Questions, scorecards, and tips to conduct better technical interviews.",
          time: "8 min read",
          image: "/graphics/resource-interview-playbook.png",
          accent: "text-pink-400",
        },
        {
          type: "REPORT",
          title: "2024 Recruiting Trends Report",
          desc: "Key trends, stats, and predictions for modern recruiters.",
          time: "12 min read",
          image: "/graphics/resource-trends-report.png",
          accent: "text-teal-400",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/8 overflow-hidden hover:border-purple-500/25 transition-all duration-500"
        >

          {/* Top Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-1 left-4 right-4 flex items-center justify-between">

  {/* Type Badge */}
  <span
  className={`rounded-full px-3 py-1 text-[10px] tracking-[0.2em] text-white backdrop-blur-md
  ${
    item.type === "GUIDE"
      ? "bg-gradient-to-r from-violet-500/80 to-purple-500/70"
      : item.type === "TEMPLATE"
      ? "bg-gradient-to-r from-cyan-500/80 to-blue-500/70"
      : item.type === "PLAYBOOK"
      ? "bg-gradient-to-r from-pink-500/80 to-fuchsia-500/70"
      : "bg-gradient-to-r from-teal-500/80 to-cyan-500/70"
  }`}
>
  {item.type}
</span>
  {/* Read Time */}
  <span className="text-xs text-gray-300">
    {item.time}
  </span>

</div>
          </div>


          {/* Content */}
          <div className="p-6">

            <h3 className="text-xl text-white leading-snug">
              {item.title}
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>

            <button
              className={`mt-6 text-sm font-medium ${item.accent} hover:text-white transition-colors text-left`}
            >
              Read more →
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

{/* FREE TOOLS SECTION */}
<section className="relative py-2 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">

      <div>
        <h2 className="text-4xl md:text-5xl text-white">
          Free tools for{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            recruiters
          </span>
        </h2>

        <p className="mt-4 text-gray-400 text-md">
          Smart tools to save time and hire better.
        </p>
      </div>

      <button className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.10)] transition-all duration-300 hover:scale-105 hover:border-purple-400/25 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">
        <span className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent pointer-events-none" />
        <span className="relative z-10 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          View all tools →
        </span>
      </button>

    </div>


    {/* Tools Grid */}
<div className="-mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
    {
      title: "Resume Score Checker",
      desc: "Analyze resumes instantly and get an AI-powered score.",
      icon: FileSearch,
      accent: "text-cyan-400",
    },
    {
      title: "ATS Keyword Optimizer",
      desc: "Optimize job descriptions for better candidate matches.",
      icon: Search,
      accent: "text-teal-400",
    },
    {
      title: "Interview Question Bank",
      desc: "Access 1000+ role-based interview questions.",
      icon: MessageSquareQuote,
      accent: "text-purple-400",
    },
  ].map((tool, i) => {
    const Icon = tool.icon;

    return (
      <div
  key={i}
  className="group relative rounded-3xl bg-gradient-to-br from-blue-500/[0.04] via-purple-500/[0.03] to-pink-500/[0.05] backdrop-blur-xl border border-white/8 px-8 py-7 flex flex-col justify-between overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.10)] transition-all duration-500"
>

        {/* Glass Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-60" />

        <div className="relative z-10">

          {/* Top Row */}
          <div className="flex items-center gap-5">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.08)] shrink-0"
            >
              <Icon
                className="w-10 h-10"
                style= {{
                  stroke: "url(#icon-gradient)",
                }}
                strokeWidth={1.8}
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
            <h3 className="text-2xl text-white leading-snug">
              {tool.title}
            </h3>

          </div>

          {/* Description */}
          <p className="mt-6 text-gray-400 leading-relaxed text-sm max-w-[90%]">
            {tool.desc}
          </p>

          {/* CTA */}
          <button
            className={`mt-6 text-sm font-medium ${tool.accent} hover:text-white transition-colors`}
          >
            Try now →
          </button>

        </div>

      </div>
    );
  })}

</div>

  </div>

</section>

{/* NEWSLETTER + FOOTER SECTION */}
<section className="relative pt-12 pb-10 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* NEWSLETTER CTA */}
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.08)]">

      <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-14">

        {/* LEFT */}
        <div className="flex items-center gap-6">

          {/* Image */}
          <img
            src="/graphics/newsletter-icon.png"
            alt="Newsletter"
            className="w-24 h-24 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.22)] scale-330 opacity-50"
          />

          {/* Text */}
          <div>
            <h3 className="text-4xl text-white">
              Stay ahead in hiring
            </h3>

            <p className="mt-3 text-gray-300 leading-relaxed max-w-lg">
              Get the latest hiring insights, templates, and trends
              straight to your inbox.
            </p>
          </div>

        </div>


        {/* RIGHT */}
        <div>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white placeholder:text-gray-500 backdrop-blur-xl outline-none"
            />

            <button className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-white font-medium shadow-[0_0_30px_rgba(168,85,247,0.22)] hover:scale-105 transition-all duration-300">
              Subscribe
            </button>

          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-500">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>

    </div>


    {/* FOOTER */}
    <footer className="mt-3 pt-14">

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* BRAND */}
        <div>

          {/* Logo */}
          <img
            src="/branding/logos/hirepilot-horizontal-logo.png"
            alt="HirePilot"
            className="w-[240px] scale-130 object-contain"
          />

          {/* Description */}
          <p className="-mt-14 text-gray-400 text-sm leading-relaxed">
            AI-powered recruitment platform
            to help you hire smarter and faster.
          </p>

          {/* Social Logos */}
          <div className="flex gap-4 mt-6">

            {[
              "/branding/logos/linkedin.png",
              "/branding/logos/x.png",
              "/branding/logos/youtube.png",
              "/branding/logos/instagram.png",
            ].map((social, i) => (
              <img
                key={i}
                src={social}
                alt="social icon"
                className="w-9 h-9 object-contain opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            ))}

          </div>

        </div>


        {/* Platform */}
        <div>
          <h4 className="text-white font-medium mb-5">Platform</h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
            <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>


        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-5">Resources</h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
          </ul>
        </div>


        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-5">Company</h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>


        {/* Book Demo */}
        <div>

          <h4 className="text-white font-medium mb-5">
            Book a demo
          </h4>

          <p className="text-sm text-gray-400 leading-relaxed">
            See HirePilot in action and transform your hiring process.
          </p>

<Link href="/demo">
          <button className="mt-6 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.18)] hover:scale-105 transition-all duration-300 cursor-pointer">
            Book a Demo
          </button>
</Link>

        </div>

      </div>


      {/* Bottom Copyright */}
      <div className="mt-14 pt-8  text-center text-xs text-gray-500">
        © 2026 HirePilot AI. All rights reserved.
      </div>

    </footer>

  </div>

</section>

    </main>
  );
}
