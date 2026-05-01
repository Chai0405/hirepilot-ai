"use client";

import Link from "next/link";
import {
  Zap,
  Target,
  TrendingUp,
   CalendarDays,
  Lock,
  ChevronDown,
  Bot,
  Cpu,
  BarChart3,
  ShieldCheck,
  ChevronLeft, 
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});




export default function DemoPage() {

  const [testimonialIndex, setTestimonialIndex] = useState(0);

const testimonials = [
  {
    quote:
      "HirePilot AI has reduced our time-to-hire by 60%. The AI screening is incredibly accurate and saves us hours every week.",
    name: "Sarah Johnson",
    role: "Head of Talent, TechCorp",
    image: "/avatars/testimonial-sarah.jpg",
  },
  {
    quote:
      "Finally, a recruitment platform that actually understands our needs. The automation and insights are game-changers.",
    name: "Michael Chen",
    role: "Recruitment Manager, ScaleUp",
    image: "/avatars/testimonial-michael.png",
  },
  {
    quote:
      "The best hiring experience for our team and candidates. Highly recommended.",
    name: "Priya Sharma",
    role: "HR Director, InnovateX",
    image: "/avatars/testimonial-priya.jpg",
  },
  {
    quote:
      "HirePilot transformed our recruitment workflows and significantly improved candidate quality.",
    name: "David Brooks",
    role: "VP Hiring, FutureScale",
    image: "/avatars/testimonial-david.jpg",
  },
  {
    quote:
      "Their automation tools have helped us save hundreds of recruiter hours monthly.",
    name: "Emma Wilson",
    role: "Talent Director, NovaWorks",
    image: "/avatars/testimonial-emma.jpg",
  },
];

const visibleTestimonials = testimonials.slice(
  testimonialIndex,
  testimonialIndex + 3
);

  return (
    <main
      className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_30%),linear-gradient(to_bottom,#000000,#000000)]`}
    >

      {/* BACKGROUND GRAPHICS */}
<div className="absolute inset-0 pointer-events-none opacity-[0.06]">

  <img
    src="/graphics/neural-network-bg.png"
    alt="Background"
    className="w-full h-full object-cover object-center mix-blend-screen"
  />

</div>

      {/* NAVBAR */}
      <header className="relative z-50 bg-transparent">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-30">

            {/* Logo */}
            <Link href="/" className="flex items-center -ml-13 cursor-pointer">
              <img
                src="/branding/logos/hirepilot-horizontal-logo.png"
                alt="HirePilot AI"
                className="w-[260px] object-contain"
              />
            </Link>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
              <Link href="/features" className="hover:text-white">Features</Link>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/solutions" className="hover:text-white">Solutions</Link>
              <Link href="/resources" className="hover:text-white">Resources</Link>
              <Link href="/about" className="hover:text-white">About Us</Link>
            </nav>

            {/* CTA */}
            <Link href="/login">
              <button className="rounded-4xl border border-purple-500/40 bg-black/30 px-4 py-3 text-xs text-white shadow-[0_0_18px_rgba(168,85,247,0.18)] backdrop-blur-md transition hover:border-purple-400">
                Log in
              </button>
            </Link>

          </div>
        </div>
      </header>


      {/* HERO SECTION STARTS HERE */}
      <section className="relative pt-12 pb-24 px-6 lg:px-20">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

         {/* LEFT CONTENT */}
<div>

  {/* Label */}
  <div className="inline-flex rounded-full px-1 py-2 text-xs uppercase tracking-[0.28em] text-purple-500 backdrop-blur-xl">
    See HirePilot AI in Action
  </div>


  {/* Heading */}
  <h1 className="mt-8 text-5xl md:text-6xl text-white leading-[1.05]">
    Book a Demo &
    
    Transform Your Hiring <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
    with AI
    </span>
  </h1>


  {/* Description */}
  <p className="mt-8 text-md text-gray-400 leading-relaxed max-w-xl">
    Discover how HirePilot AI helps recruiters and
    enterprises hire faster, smarter, and better with
    AI-powered recruitment.
  </p>


  {/* BENEFIT CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

    
    {[
  {
    title: "Faster Hiring",
    desc: "Reduce time-to-hire by up to 70%",
    icon: Zap,
    iconBg: "from-violet-500/35 to-purple-400/15",
  },
  {
    title: "Better Matches",
    desc: "AI-matched candidates with high accuracy",
    icon: Target,
    iconBg: "from-blue-500/35 to-cyan-400/15",
  },
  {
    title: "Enterprise Scale",
    desc: "Automate screening & hiring at scale",
    icon: TrendingUp,
    iconBg: "from-pink-500/35 to-fuchsia-400/15",
  },
].map((item, i) => {
  const Icon = item.icon as React.ElementType;

  return (
    <div
      key={i}
      className="rounded-2xl border border-white/8 bg-black/30 backdrop-blur-xl p-4"
    >

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconBg} border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.08)]`}
      >
        <Icon
          className="w-9 h-9 text-white"
          strokeWidth={2}
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-white">
        {item.title}
      </h3>

      {/* Desc */}
      <p className="mt-2 text-xs text-gray-400 leading-relaxed">
        {item.desc}
      </p>

    </div>
  );
})}

  </div>


  {/* TRUST LOGOS */}
  <div className="mt-10">

    <p className="text-sm text-gray-500 mb-5">
      Trusted by innovative teams worldwide
    </p>

    <div className="flex items-center gap-10 opacity-70">

  {[
    "/branding/logos/google.png",
    "/branding/logos/microsoft.png",
    "/branding/logos/amazon-new.png",
    "/branding/logos/dell.png",
    "/branding/logos/airbnb-new.png",
  ].map((logo, i) => (
    <div
      key={i}
      className="h-6 w-[100px] flex items-center justify-center"
    >
      <img
        src={logo}
        alt="brand"
        className="max-h-5 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ))}

</div>

  </div>


  {/* DASHBOARD IMAGE */}
  <div className="relative mt-12 rounded-3xl p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_35px_rgba(168,85,247,0.22)]">

  <div className="rounded-3xl overflow-hidden bg-black">

    <img
      src="/solutions-dashboard.png"
      alt="HirePilot Dashboard"
      className="w-full object-cover"
    />

  </div>

</div>

</div>

         {/* RIGHT FORM */}
<div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 shadow-[0_0_45px_rgba(168,85,247,0.12)]">

  <div className="rounded-3xl bg-black/50 backdrop-blur-2xl border border-white/8 p-8 lg:p-10">

    {/* TOP ICON */}
    <div className="flex justify-center">

      <div className="w-16 h-16 rounded-full border border-blue-400/25 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/15 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.12)]">

        <CalendarDays
          className="w-9 h-9 text-blue-300"
          strokeWidth={2}
        />

      </div>

    </div>


    {/* Heading */}
    <h2 className="mt-6 text-4xl text-white text-center">
      Book Your Demo
    </h2>


    {/* Subheading */}
    <p className="mt-4 text-center text-gray-400 leading-relaxed">
      Fill in your details and our team will
      schedule a personalized demo for you.
    </p>


    {/* FORM */}
    <form className="mt-10 space-y-5">

      {/* Full Name */}
      <div>
        <label className="block text-sm text-gray-300 mb-2 pl-2">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full rounded-2xl border border-white/8 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 backdrop-blur-xl outline-none focus:border-purple-400/30"
        />
      </div>


      {/* Work Email */}
      <div>
        <label className="block text-sm text-gray-300 mb-2 pl-2">
          Work Email
        </label>

        <input
          type="email"
          placeholder="Enter your work email"
          className="w-full rounded-2xl border border-white/8 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 backdrop-blur-xl outline-none focus:border-purple-400/30"
        />
      </div>


      {/* Company */}
      <div>
        <label className="block text-sm text-gray-300 mb-2 pl-2">
          Company Name
        </label>

        <input
          type="text"
          placeholder="Enter your company name"
          className="w-full rounded-2xl border border-white/8 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 backdrop-blur-xl outline-none focus:border-purple-400/30"
        />
      </div>


      {/* Team Size + Hiring Volume */}
      <div className="grid sm:grid-cols-2 gap-4">

  {/* Team Size */}
  <div>
    <label className="block text-sm text-gray-300 mb-2 pl-2">
      Team Size
    </label>

    <div className="relative">
      <select className="w-full appearance-none rounded-2xl border border-white/8 bg-black/30 px-5 pr-12 py-4 text-gray-400 backdrop-blur-xl outline-none focus:border-purple-400/30">
        <option>Select team size</option>
        <option>1-10</option>
        <option>11-50</option>
        <option>51-200</option>
        <option>200+</option>
      </select>

      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  </div>


  {/* Hiring Volume */}
  <div>
    <label className="block text-sm text-gray-300 mb-2 pl-2">
      Hiring Volume (Per Month)
    </label>

    <div className="relative">
      <select className="w-full appearance-none rounded-2xl border border-white/8 bg-black/30 px-5 pr-12 py-4 text-gray-400 backdrop-blur-xl outline-none focus:border-purple-400/30">
        <option>Select volume</option>
        <option>1-10</option>
        <option>11-50</option>
        <option>50+</option>
      </select>

      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  </div>

</div>


      {/* Challenges */}
      <div>
        <label className="block text-sm text-gray-300 mb-2 pl-2">
          What are your top hiring challenges?
        </label>

        <textarea
          rows={4}
          placeholder="Tell us about your hiring challenges..."
          className="w-full rounded-2xl border border-white/8 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 backdrop-blur-xl outline-none focus:border-purple-400/30 resize-none"
        />
      </div>


      {/* CTA */}
      <button
        type="submit"
        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-4 text-white font-medium shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-300 hover:scale-[1.02]"
      >

        <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent pointer-events-none" />

        <span className="relative z-10">
          Book Demo
        </span>

      </button>


      {/* Security Note */}
      <p className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">

        <Lock className="w-4 h-4" />

        Your information is secure and confidential.

      </p>

    </form>

  </div>

</div>

        </div>

      </section>

      {/* WHY HIREPILOT + TESTIMONIALS SECTION */}
<section className="relative -py-4 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* WHY HIREPILOT HEADER */}
    <div className="text-center mb-16">

      <p className="inline-flex rounded-full px-5 -py-2 text-sm uppercase tracking-[0.25em] text-purple-500 backdrop-blur-xl">
        Why HirePilot AI
      </p>

      <h2 className="mt-8 text-4xl md:text-5xl text-white">
        Built for Modern Recruitment Teams
      </h2>

    </div>


    {/* FEATURES GRID */}
    <div className="-mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "AI-Powered Screening",
          desc: "Automatically screen resumes, rank candidates, and surface the best matches.",
          icon: Bot,
          iconBg: "from-violet-500/35 to-purple-400/15",
        },
        {
          title: "Intelligent Automation",
          desc: "Automate repetitive tasks and let your team focus on what really matters.",
          icon: Cpu,
          iconBg: "from-blue-500/35 to-cyan-400/15",
        },
        {
          title: "Data-Driven Insights",
          desc: "Make smarter hiring decisions with real-time analytics and predictive insights.",
          icon: BarChart3,
          iconBg: "from-pink-500/35 to-fuchsia-400/15",
        },
        {
          title: "Enterprise Security",
          desc: "Bank-level security, GDPR compliance, and role-based access control.",
          icon: ShieldCheck,
          iconBg: "from-teal-400/35 to-cyan-400/15",
        },
      ].map((item, i) => {
        const Icon = item.icon as React.ElementType;

        return (
          <div
            key={i}
            className="rounded-3xl border border-white/8 bg-black/30 backdrop-blur-xl p-8"
          >

            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.iconBg} border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.08)]`}
            >
              <Icon
                className="w-9 h-9 text-white"
                strokeWidth={1.8}
              />
            </div>

            <h3 className="mt-6 text-xl text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>

          </div>
        );
      })}

    </div>


    {/* TESTIMONIALS HEADER */}
    <div className="text-center mt-15 mb-14">

      <p className="inline-flex rounded-full px-5 py-2 text-sm uppercase tracking-[0.25em] text-purple-500 backdrop-blur-xl font-medium">
        Trusted by Recruiters
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl text-white">
        What Our Customers Say
      </h2>

    </div>


    {/* TESTIMONIAL CARDS */}
<div className="relative mt-14">

  {/* LEFT BUTTON */}
  <button
    onClick={() =>
      setTestimonialIndex((prev) =>
        prev === 0 ? testimonials.length - 3 : prev - 1
      )
    }
    className="absolute -left-14 top-[39%] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:border-purple-400/30"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>


  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-8">

    {visibleTestimonials.map((item, i) => (
      <div
        key={i}
        className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.06] to-pink-500/[0.08] backdrop-blur-2xl p-7 -mt-2 shadow-[0_0_35px_rgba(168,85,247,0.08)] overflow-hidden"
      >

        {/* Gloss Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">

          {/* Quote Icon */}
          <p className="text-purple-400 text-4xl mb-4 leading-none">
            ❝
          </p>

          {/* Quote */}
          <p className="text-sm text-gray-300 leading-relaxed min-h-[90px] pl-7 -mt-13">
            {item.quote}
          </p>

          {/* User */}
          <div className="flex items-center gap-4 mt-2">

            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover border border-white/10"
            />

            <div>
              <h4 className="text-white text-md">
                {item.name}
              </h4>

              <p className="text-xs text-gray-400">
                {item.role}
              </p>
            </div>

          </div>

        </div>

      </div>
    ))}

  </div>


  {/* RIGHT BUTTON */}
  <button
    onClick={() =>
      setTestimonialIndex((prev) =>
        prev >= testimonials.length - 3 ? 0 : prev + 1
      )
    }
    className="absolute -right-14 top-[39%] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:border-purple-400/30"
  >
    <ChevronRight className="w-5 h-5" />
  </button>


  {/* DOTS */}
  <div className="flex justify-center gap-3 mt-10">
    {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
      <button
        key={i}
        onClick={() => setTestimonialIndex(i)}
        className={`h-2 rounded-full transition-all ${
          testimonialIndex === i
            ? "w-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            : "w-2 bg-white/20"
        }`}
      />
    ))}
  </div>

</div>

  </div>

</section>

{/* FINAL CTA BANNER */}
<section className="relative py-10 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 shadow-[0_0_45px_rgba(168,85,247,0.12)] overflow-hidden">

      {/* Main Card */}
      <div className="relative rounded-3xl bg-black/50 backdrop-blur-2xl px-8 lg:px-12 py-8">

        {/* Gloss Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* LEFT */}
          <div className="flex items-center gap-6">

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.12)]">

              <Zap className="w-9 h-9 text-purple-300" />

            </div>


            {/* Text */}
            <div>

              <h2 className="text-3xl text-white">
                Ready to Transform Your Hiring?
              </h2>

              <p className="mt-2 text-gray-400">
                Join 500+ companies hiring smarter with HirePilot AI.
              </p>

            </div>

          </div>


          {/* RIGHT BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">

            {/* Explore Features */}
            <Link
              href="/features"
              className="rounded-2xl border border-purple-500/25 bg-black/30 px-7 py-3 text-sm text-white backdrop-blur-xl transition hover:border-purple-400/40"
            >
              Explore Features
            </Link>


            {/* Start Hiring */}
            <Link
              href="/signup"
              className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-3 text-sm text-white shadow-[0_0_25px_rgba(168,85,247,0.16)] transition hover:scale-105"
            >
              Start Hiring Now →
            </Link>

          </div>

        </div>

      </div>

    </div>

    {/* FOOTER */}
<footer className="-mt-3 -pt-4">

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
          <p className="-mt-14 text-gray-400 text-xs leading-relaxed">
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

        {/* PRODUCT */}
      <div>
        <h4 className="text-white font-medium mb-5 mt-20 pl-20">
          Product
        </h4>

        <ul className="space-y-2 text-sm text-gray-400 pl-20">
          <li><Link href="/features" className="hover:text-white">Features</Link></li>
          <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
          <li><Link href="/solutions" className="hover:text-white">Integrations</Link></li>
          <li><Link href="/resources" className="hover:text-white">Roadmap</Link></li>
        </ul>
      </div>


      {/* RESOURCES */}
      <div>
        <h4 className="text-white font-medium mb-5 mt-20 pl-5">
          Resources
        </h4>

        <ul className="space-y-2 text-sm text-gray-400 pl-5">
          <li><Link href="/resources" className="hover:text-white">Blog</Link></li>
          <li><Link href="/resources" className="hover:text-white">Guides</Link></li>
          <li><Link href="/resources" className="hover:text-white">Help Center</Link></li>
          <li><Link href="/resources" className="hover:text-white">API Docs</Link></li>
        </ul>
      </div>


      {/* COMPANY */}
      <div>
        <h4 className="text-white font-medium mb-5 mt-20 -pl-6">
          Company
        </h4>

        <ul className="space-y-2 text-sm text-gray-400 -pl-6">
          <li><Link href="/about" className="hover:text-white">About Us</Link></li>
          <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          <li><Link href="/contact" className="hover:text-white">Privacy Policy</Link></li>
          <li><Link href="/contact" className="hover:text-white">Terms of Service</Link></li>
        </ul>
      </div>

{/* CONTACT */}
      <div>
        <h4 className="text-sm text-gray-400 mb-2 mt-20 pl-7">
          Connect With Us
        </h4>

        <div className="flex items-center gap-4">

          {[
            "/branding/logos/linkedin.png",
            "/branding/logos/x.png",
            "/branding/logos/instagram.png",
            "/branding/logos/email.png",
          ].map((social, i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition hover:border-purple-500/30 "
            >
              <img
                src={social}
                alt="social icon"
                className="w-11 h-11 object-contain opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer mr-10"
              />
            </div>
          ))}

        </div>

      </div>
  
    

  </div>

  {/* Bottom Copyright */}
      <div className="mt-10 -mb-5 pt-8  text-center text-xs text-gray-500">
        © 2026 HirePilot AI. All rights reserved.
      </div>


</footer>

  </div>

</section>

    </main>
  );
}