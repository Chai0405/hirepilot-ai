"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
// FIX YOUR IMPORTS:

import {
  CheckCircle2,
  PhoneCall,
  Headset,
  UserCheck,
  BriefcaseBusiness,
  Settings2,
  Clock3,
  ShieldCheck,
  Shield,
  BadgeCheck,
  KeyRound,
  Lock,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SalesPage() {
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
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-normal"
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

      <section className="relative px-6 lg:px-20 pt-24 pb-20">

  <div className="max-w-7xl mx-auto">

    {/* HERO */}
    <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Background */}
        <div className="absolute top-0 -left-32 w-[950px] h-[720px] pointer-events-none opacity-[0.08] z-0">
          <img
            src="/graphics/neural-network-bg.png"
            alt="Background Glow"
            className="w-full h-full object-contain object-top-left mix-blend-screen"
          />
        </div>

      {/* LEFT CONTENT */}
      <div>

        <p className="text-sm tracking-[0.35em] uppercase text-purple-400 mb-4 -mt-2">
          Talk to Sales
        </p>

        <h1 className="text-5xl md:text-6xl text-white leading-tight">
          We’re here to help you transform hiring <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
             at scale
          </span>
        </h1>

        <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
          Our team of enterprise hiring experts is ready to understand
          your unique challenges and build the right solution for your
          organization.
        </p>

        <div className="mt-10 space-y-4">

  {[
    {
      text: "Get personalized guidance from hiring specialists",
      icon: UserCheck,
    },
    {
      text: "Discuss your requirements and see tailored solutions",
      icon: BriefcaseBusiness,
    },
    {
      text: "Enterprise pricing, integrations & implementation support",
      icon: Settings2,
    },
  ].map((item, i) => {
    const Icon = item.icon as LucideIcon;
    return (
      <div key={i} className="flex items-start gap-4">

        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-xl shrink-0">

          <Icon className="w-5 h-5 text-purple-300" />

        </div>

        <p className="text-gray-300 text-sm leading-relaxed pt-1">
          {item.text}
        </p>

      </div>
    );
  })}

</div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="relative w-full h-full ml-10">

  <img
    src="/graphics/sales-team-meeting.webp"
    alt="HirePilot Sales Team"
    className="w-full min-w-[100px] h-full min-h-[550px] object-cover"
  />

</div>

    </div>


    {/* CONTACT CARDS */}
<div className="grid md:grid-cols-2 gap-8 mt-14">

  {/* SALES CARD */}
  <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-blue-500/30 shadow-[0_0_35px_rgba(168,85,247,0.10)] hover:shadow-[0_0_55px_rgba(168,85,247,0.18)] transition-all duration-500">

    <div className="rounded-3xl bg-black/85 backdrop-blur-xl p-8 h-full flex flex-col justify-between">

      <div>

        {/* ICON + TITLE + DESC */}
        <div className="flex items-start gap-5 mb-8">

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-blue-500/20 border border-purple-400/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)] shrink-0">
            <PhoneCall className="w-9 h-9 text-pink-300" />
          </div>

          <div>
            <h3 className="text-3xl text-white">
              Talk to Sales
            </h3>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Speak with our sales experts to explore how HirePilot AI
              can help your organization hire faster, smarter, and better.
            </p>
          </div>

        </div>


        {/* BULLETS */}
        <div className="space-y-4">

          {[
            "Enterprise solutions & custom pricing",
            "Product walkthroughs & demos",
            "Integrations & implementation",
            "Strategic hiring transformation",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-400 pl-6">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              {item}
            </div>
          ))}

        </div>

      </div>


      {/* BUTTON */}
      <div className="mt-10">

        <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 py-4 text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] hover:scale-[1.01] transition-all duration-300 cursor-pointer">
          Talk to Sales Team →
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">

  <Clock3 className="w-3.5 h-3.5 text-gray-500" />

  <p>
    Response time: Within 4 business hours
  </p>

</div>

      </div>

    </div>

  </div>


  {/* SUPPORT CARD */}
  <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-purple-500/30 shadow-[0_0_35px_rgba(59,130,246,0.10)] hover:shadow-[0_0_55px_rgba(59,130,246,0.18)] transition-all duration-500">

    <div className="rounded-3xl bg-black/85 backdrop-blur-xl p-8 h-full flex flex-col justify-between">

      <div>

        {/* ICON + TITLE + DESC */}
        <div className="flex items-start gap-5 mb-8">

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] shrink-0">
            <Headset className="w-9 h-9 text-blue-300" />
          </div>

          <div>
            <h3 className="text-3xl text-white">
              Customer Support
            </h3>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Get help with your existing account, technical issues,
              or any questions about using HirePilot AI.
            </p>
          </div>

        </div>


        {/* BULLETS */}
        <div className="space-y-4">

          {[
            "Technical support & troubleshooting",
            "Account & billing assistance",
            "Feature guidance & best practices",
            "General platform inquiries",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-400 pl-6">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              {item}
            </div>
          ))}

        </div>

      </div>


      {/* BUTTON */}
      <div className="mt-10">

        <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-white shadow-[0_0_30px_rgba(59,130,246,0.18)] hover:scale-[1.01] transition-all duration-300 cursor-pointer">
          Contact Support Team →
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">

  <Clock3 className="w-3.5 h-3.5 text-gray-500" />

  <p>
    Response time: Within 12 business hours
  </p>

</div>

      </div>

    </div>

  </div>

</div>

  </div>

</section>

{/* TRUST & SECURITY SECTION */}
<section className="relative px-5 lg:px-20 pb-15 -mt-10">

  <div className="max-w-7xl mx-auto">

    <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/25 to-pink-500/30 shadow-[0_0_40px_rgba(168,85,247,0.08)]">

      <div className="rounded-3xl bg-black/80 backdrop-blur-xl px-8 py-10 overflow-hidden">

        {/* Gloss Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none rounded-3xl" />

        <div className="relative z-10">

          {/* Heading */}
          <h3 className="text-center text-2xl lg:text-2xl text-white">
            Trusted by enterprises. Secured by design.
          </h3>

          {/* Security Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-5">

            {[
              {
                icon: ShieldCheck,
                title: "SOC 2",
                desc: "Type II Certified",
                color: "text-pink-300",
              },
              {
                icon: Shield,
                title: "ISO 27001",
                desc: "Certified",
                color: "text-purple-300",
              },
              {
                icon: BadgeCheck,
                title: "GDPR",
                desc: "Compliant",
                color: "text-violet-300",
              },
              {
                icon: KeyRound,
                title: "SSO & SAML",
                desc: "Enabled",
                color: "text-cyan-300",
              },
              {
                icon: Lock,
                title: "Data Encryption",
                desc: "At Rest & In Transit",
                color: "text-indigo-300",
              },
              {
                icon: CheckCircle2,
                title: "99.9%",
                desc: "Uptime SLA",
                color: "text-emerald-300",
              },
            ].map((item, i) => {
              const Icon = item.icon as LucideIcon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 relative"
                >

                  {/* Divider */}
                  {i !== 0 && (
                    <div className="hidden lg:block absolute left-[-16px] top-1/2 -translate-y-1/2 h-14 w-px bg-white/8" />
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-pink-500/15 border border-white/8 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.08)] backdrop-blur-xl mb-4">
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>

                   {/* Text */}
  <div className="text-left">

    <h4 className="text-white text-xs leading-none">
      {item.title}
    </h4>

    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
      {item.desc}
    </p>

  </div>

</div>
              );
            })}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* GLOBAL OFFICES SECTION */}
<section className="relative px-6 lg:px-20 pb-24">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-14">

      <p className="text-xs tracking-[0.35em] uppercase text-purple-400 mb-4">
        Global Presence
      </p>

      <h2 className="text-4xl lg:text-5xl text-white leading-tight">
        Local expertise.
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {" "}Global reach.
        </span>
      </h2>

      <p className="mt-5 text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Connect with HirePilot teams across strategic regions worldwide
        for enterprise consultations, support, and implementation.
      </p>

    </div>


    {/* Office Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          city: "San Francisco, USA",
          role: "Headquarters",
          address: "548 Market St, San Francisco, CA 94104, USA",
          phone: "+1 (888) 123-4567",
          flag: "/graphics/flags/us-flag.png",
          image: "/graphics/offices/san-francisco.jpg",
        },
        {
          city: "London, UK",
          role: "Regional Office",
          address: "7 Bell Yard, London WC2A 2JR, UK",
          phone: "+44 20 3868 0834",
          flag: "/graphics/flags/uk-flag.png",
          image: "/graphics/offices/london.jpg",
        },
        {
          city: "Bangalore, India",
          role: "Technology Hub",
          address: "Manyata Tech Park, Bangalore, Karnataka 560045, India",
          phone: "+91 80 6789 1234",
          flag: "/graphics/flags/india-flag.png",
          image: "/graphics/offices/bangalore.jpg",
        },
        {
          city: "Sydney, Australia",
          role: "Regional Office",
          address: "20 Martin Place, Sydney NSW 2000, Australia",
          phone: "+61 2 9123 4567",
          flag: "/graphics/flags/aus-flag.png",
          image: "/graphics/offices/sydney.jpg",
        },
      ].map((office, i) => (
        <div
          key={i}
          className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.08)] hover:border-purple-500/30 hover:shadow-[0_0_55px_rgba(168,85,247,0.15)] transition-all duration-500"
        >

          {/* Background Image */}
          <img
            src={office.image}
            alt={office.city}
            className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

          {/* Gloss */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 p-6 min-h-[290px] flex flex-col justify-between">

            <div>

              {/* Top */}
              <div className="flex items-start gap-3 mb-5">

                <img
  src={office.flag}
  alt={office.city}
  className="w-8 h-8 object-cover shrink-0"
/>

                <div>
                  <h3 className="text-white text-lg">
                    {office.city}
                  </h3>

                  <p className="text-sm text-purple-300 mt-1">
                    {office.role}
                  </p>
                </div>

              </div>


              {/* Address */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {office.address}
              </p>

            </div>


            {/* Phone */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-8">

              <PhoneCall className="w-4 h-4 text-purple-400" />

              <span>{office.phone}</span>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

{/* FAQ + FINAL CTA SECTION */}
<section className="relative px-6 lg:px-20 pb-24">

  <div className="max-w-7xl mx-auto">

    {/* FAQ HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

      <h2 className="text-4xl lg:text-5xl text-white leading-tight">
        Frequently asked
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {" "}questions
        </span>
      </h2>

      <button className="text-sm text-purple-400 hover:text-pink-400 transition-colors flex items-center gap-2">
        View all FAQs →
      </button>

    </div>


    {/* FAQ GRID */}
    <div className="grid md:grid-cols-2 gap-5">

      {[
        "How long does it take to implement HirePilot AI?",
        "Can you handle high-volume hiring for global teams?",
        "Do you offer custom integrations with our existing tools?",
        "What kind of onboarding and training do you provide?",
      ].map((faq, i) => (
        <button
          key={i}
          className="group rounded-2xl border border-white/8 bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.02] to-pink-500/[0.03] backdrop-blur-xl px-6 py-5 flex items-center justify-between text-left hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.08)] transition-all duration-300"
        >

          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            {faq}
          </span>

          <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors shrink-0 ml-4" />

        </button>
      ))}

    </div>


    {/* FINAL CTA */}
    <div className="mt-12 relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/35 via-purple-500/30 to-pink-500/35 shadow-[0_0_45px_rgba(168,85,247,0.10)]">

      <div className="rounded-3xl bg-black/80 backdrop-blur-xl px-8 lg:px-12 py-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)] shrink-0">
              <CalendarDays className="w-8 h-8 text-purple-300" />
            </div>

            <div>

              <h3 className="text-3xl text-white">
                Ready to transform your hiring?
              </h3>

              <p className="mt-2 text-gray-400 leading-relaxed">
                Let’s discuss how HirePilot AI can help you achieve your hiring goals.
              </p>

            </div>

          </div>


          {/* RIGHT BUTTON */}
          <Link href="/demo">

            <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 px-10 py-4 text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap cursor-pointer">
              Book a Demo →
            </button>

          </Link>

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
      <div className="mt-10 -mb-20 pt-8  text-center text-xs text-gray-500">
        © 2026 HirePilot AI. All rights reserved.
      </div>


</footer>

  </div>

</section>

    </main>
  );
}