"use client";

import Link from "next/link";
import {
  Bot,
  Sparkles,
  Users,
  Lightbulb,
  ShieldCheck,
  Zap,
  UserRound,
  Building2,
  Clock3,
  Globe2,
} from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutPage() {
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

              <Link href="/resources" className="text-gray-300 hover:text-white text-sm">
                Resources
              </Link>

              <Link href="/pricing" className="text-gray-300 hover:text-white text-sm">
                Pricing
              </Link>

              <Link
                href="/about"
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-sm font-medium"
              >
                About Us
              </Link>
            </nav>

            {/* CTA */}
            <Link
  href="/demo">
            <button className="rounded-4xl border border-purple-500/40 bg-black/30 px-4 py-3 text-xs text-white shadow-[0_0_18px_rgba(168,85,247,0.18)] backdrop-blur-md transition hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.28)]">
              Request Demo
            </button>
</Link>
          </div>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="relative -pt-4 pb-28 px-6 lg:px-20 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
          <img
            src="/graphics/neural-network-bg.png"
            alt="Background"
            className="w-full h-full object-cover object-top-left mix-blend-screen"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="mt-17">

            {/* Label */}
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-purple-400">
              About Hirepilot
            </p>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-7xl text-white leading-[1.05]">
              Redefining the
              <br />
              future of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                hiring
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              HirePilot is on a mission to help companies build
              high-performing teams with AI-powered recruitment
              intelligence and automation.
            </p>

            {/* CTA */}
            <button className="mt-10 rounded-2xl border border-purple-500/25 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 px-6 py-3 text-white backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.10)] transition-all duration-300 hover:scale-105 hover:border-purple-400/35">
              Our Journey →
            </button>

          </div>


          {/* RIGHT GRAPHIC */}
          <div className="relative flex justify-center">

            <img
              src="/graphics/about-hero.png"
              alt="About HirePilot"
              className="w-full max-w-[800px] object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.18)] scale-130"
            />

          </div>

        </div>

      </section>

      {/* OUR STORY SECTION */}
<section className="relative -py-5 px-6 lg:px-20">

  <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 shadow-[0_0_45px_rgba(168,85,247,0.10)]">

  <div className="relative rounded-3xl overflow-hidden bg-black/50 backdrop-blur-2xl">

    <div className="grid lg:grid-cols-2 gap-0 items-stretch">

        {/* LEFT IMAGE */}
        <div className="relative">

          <img
            src="/graphics/about-story.png"
            alt="Our Story"
            className="w-full h-full object-cover"
          />

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />

        </div>


        {/* RIGHT CONTENT */}
        <div className="p-10 lg:p-14 flex flex-col justify-center">

          {/* Label */}
          <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-6">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-white leading-tight">
  Why we built{" "}
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
    HirePilot AI
  </span>
</h2>

          {/* Paragraphs */}
          <p className="mt-8 text-gray-400 leading-relaxed text-md">
            Hiring is hard. Teams spend countless hours screening resumes,
            writing job descriptions, and managing interviews—often with
            outdated tools and fragmented processes.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed text-md">
            We built HirePilot to change that. By combining AI with recruiter
            expertise, we help you find the right talent faster, reduce bias,
            and make confident hiring decisions.
          </p>


          {/* Value Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">

            {[
              {
                title: "Smarter\nAutomation",
                icon: Bot,
              },
              {
                title: "Better\nMatches",
                icon: Sparkles,
              },
              {
                title: "Stronger\nTeams",
                icon: Users,
              },
            ].map((item, i) => {
              const Icon = item.icon as React.ElementType;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4"
                >

                  {/* Icon */}
                  <div
                    className= "w-14 h-14 rounded-2xl bg-gradient-to-br border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.08)] shrink-0"
                  >
                    <Icon
                      className="w-9 h-9"
                      style= {{ stroke: "url(#icon-gradient)" }}
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

                  {/* Text */}
                  <p className="text-gray-400 leading-snug whitespace-pre-line text-sm">
                    {item.title}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* VALUES + IMPACT SECTION */}
<section className="relative py-20 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* VALUES HEADER */}
    <div className="text-center mb-16">

      <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-4">
        Our Values
      </p>

      <h2 className="text-4xl md:text-5xl text-white">
        The principles that guide us
      </h2>

      <p className="mt-5 text-md text-gray-400">
        We’re building more than a product. We’re building a better way to hire.
      </p>

    </div>


    {/* VALUES GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Innovation",
          desc: "We push boundaries with AI to solve real-world hiring challenges.",
          icon: Lightbulb,
        },
        {
          title: "Transparency",
          desc: "We believe in honest communication and actionable insights.",
          icon: ShieldCheck,
        },
        {
          title: "Speed",
          desc: "We move fast so you can hire faster without compromising quality.",
          icon: Zap,
        },
        {
          title: "Human-Centered",
          desc: "We put people at the center of every decision we build.",
          icon: UserRound,
        },
      ].map((value, i) => {
        const Icon = value.icon;

        return (
          <div
            key={i}
            className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15"
          >
            <div className="group rounded-3xl bg-black/40 backdrop-blur-xl border border-white/8 p-8 min-h-[260px] flex flex-col overflow-hidden hover:border-purple-500/20 transition-all duration-500">

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-60" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
                  <Icon
                    className="w-9 h-9"
                    style= {{ stroke: "url(#icon-gradient)" }}
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
                <h3 className="mt-8 text-2xl text-white ">
                  {value.title}
                </h3>

                {/* Desc */}
                <p className="mt-5 text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>

              </div>

            </div>
          </div>
        );
      })}

    </div>


    {/* IMPACT SECTION */}
    <div className="mt-24">

      <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15">

        <div className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/8 p-12">

          {/* Header */}
          <div className="text-center mb-14">

            <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-4">
              Our Impact
            </p>

            <h2 className="text-4xl md:text-5xl text-white ">
              Making a measurable difference
            </h2>

          </div>


          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                stat: "2,500+",
                label: "Companies Trust Us",
                icon: Building2,
                iconBg: "from-violet-500/35 to-purple-400/15",
              },
              {
                stat: "1.2M+",
                label: "Candidates Screened",
                icon: Users,
                iconBg: "from-teal-400/35 to-cyan-400/15",
              },
              {
                stat: "70%",
                label: "Time Saved",
                icon: Clock3,
                iconBg: "from-blue-500/35 to-cyan-400/15",
              },
              {
                stat: "50+",
                label: "Countries Worldwide",
                icon: Globe2,
                iconBg: "from-pink-500/35 to-fuchsia-400/15",
              },
            ].map((item, i) => {
              const Icon = item.icon as React.ElementType;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.iconBg} border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.08)]`}
                  >
                    <Icon
                      className="w-9 h-9 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Stat */}
                  <h3 className="mt-6 text-4xl text-white">
                    {item.stat}
                  </h3>

                  {/* Label */}
                  <p className="mt-3 text-gray-400 text-sm">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* TEAM SECTION */}
<section className="relative -py-1 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">

      <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-4">
        Meet the Team
      </p>

      <h2 className="text-4xl md:text-5xl text-white">
        The people behind{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          HirePilot AI
        </span>
      </h2>

      <p className="mt-5 text-md text-gray-400">
        A team of innovators, engineers, and recruiters passionate about transforming hiring.
      </p>

    </div>


    {/* TEAM GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  {[
    {
      name: "Arjun Patel",
      role: "Co-Founder & CEO",
      desc: "Ex-recruiter turned builder. Passionate about using AI to solve hiring challenges.",
      image: "/avatars/arjun-patel.png",
    },
    {
      name: "Meera Nair",
      role: "Co-Founder & COO",
      desc: "Operations leader with a mission to scale impactful products.",
      image: "/avatars/meera-nair.png",
    },
    {
      name: "Rohan Verma",
      role: "CTO",
      desc: "Engineering leader building intelligent and scalable platforms.",
      image: "/avatars/rohan-verma.png",
    },
    {
      name: "Sneha Iyer",
      role: "Head of Product",
      desc: "Product strategist focused on creating delightful recruiter experiences.",
      image: "/avatars/sneha-iyer.png",
    },
    {
      name: "Karan Malhotra",
      role: "VP of Engineering",
      desc: "Leads platform innovation and ensures product scalability.",
      image: "/avatars/karan-malhotra.png",
    },
    {
      name: "Priya Sharma",
      role: "Director of Customer Success",
      desc: "Dedicated to helping clients maximize hiring outcomes.",
      image: "/avatars/priya-sharma.png",
    },
    {
      name: "Aisha Khan",
      role: "Head of AI Research",
      desc: "Designs next-gen hiring intelligence and predictive systems.",
      image: "/avatars/aisha-khan.png",
    },
    {
      name: "Dev Mehta",
      role: "Head of Growth",
      desc: "Drives expansion, partnerships, and product adoption globally.",
      image: "/avatars/dev-mehta.png",
    },
    {
  name: "Nikhil Rao",
  role: "Lead UX Designer",
  desc: "Designs intuitive recruiter workflows and premium user experiences.",
  image: "/avatars/nikhil-rao.png",
},
{
  name: "Sara Thomas",
  role: "Head of Talent Strategy",
  desc: "Aligns AI recruiting systems with enterprise talent acquisition goals.",
  image: "/avatars/sara-thomas.png",
},
{
  name: "Rahul Desai",
  role: "Principal Backend Engineer",
  desc: "Architects secure and scalable recruitment infrastructure.",
  image: "/avatars/rahul-desai.png",
},
{
  name: "Ananya Kapoor",
  role: "Senior Product Designer",
  desc: "Shapes product journeys that simplify modern hiring.",
  image: "/avatars/ananya-kapoor.png",
},
{
  name: "Vikram Joshi",
  role: "Global Partnerships Lead",
  desc: "Builds strategic alliances to expand HirePilot’s ecosystem.",
  image: "/avatars/vikram-joshi.png",
},
{
  name: "Neha Reddy",
  role: "Director of Marketing",
  desc: "Leads brand growth through performance and product storytelling.",
  image: "/avatars/neha-reddy.png",
},
{
  name: "Aditya Sen",
  role: "Machine Learning Engineer",
  desc: "Develops intelligent matching systems for better hiring outcomes.",
  image: "/avatars/aditya-sen.png",
},
{
  name: "Ishita Malhotra",
  role: "Enterprise Success Manager",
  desc: "Ensures large-scale clients achieve measurable recruitment ROI.",
  image: "/avatars/ishita-malhotra.png",
},
  ].map((member, i) => (
    <div
      key={i}
      className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 h-full"
    >

      <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#071226] via-[#050814] to-[#0a0f1f] backdrop-blur-2xl border border-white/8 hover:border-purple-400/20 transition-all duration-500 h-full flex flex-col shadow-[0_0_35px_rgba(59,130,246,0.05)]">

        {/* LinkedIn */}
        <div className="absolute top-4 right-4 z-20">
          <img
            src="/branding/logos/linkedin.png"
            alt="LinkedIn"
            className="w-9 h-9 object-contain opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </div>


        {/* IMAGE SECTION */}
        <div className="relative h-[320px] overflow-hidden shrink-0 bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-purple-500/10">

          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        </div>


        {/* GLASS INFO PANEL */}
        <div className="relative p-6 flex-1 flex flex-col bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl border-t border-white/8">

          {/* Subtle Glass Shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">

            {/* Name */}
            <h3 className="text-2xl text-white">
              {member.name}
            </h3>

            {/* Role */}
            <p className="mt-2 text-sm text-purple-300 font-medium">
              {member.role}
            </p>

            {/* Desc */}
            <p className="mt-4 text-sm text-gray-400 leading-relaxed flex-1">
              {member.desc}
            </p>

          </div>

        </div>

      </div>

    </div>
  ))}

</div>

  </div>

</section>

{/* FINAL CTA SECTION */}
<section className="relative py-14 px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl shadow-[0_0_45px_rgba(168,85,247,0.08)]">

      {/* Glass Shine */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-10 py-10 lg:px-14">

        {/* LEFT */}
        <div className="flex items-center gap-6">

          {/* Icon */}
          <div className="w-24 h-24 rounded-full border border-purple-400/25 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-pink-500/15 backdrop-blur-xl flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.12)]">

            <img
              src="/graphics/team-cta-icon.png"
              alt="Join Team"
              className="w-12 h-12 scale-250 object-contain"
            />

          </div>


          {/* Text */}
          <div>

            <h2 className="text-4xl text-white">
              Join us in transforming hiring
            </h2>

            <p className="mt-4 text-md text-gray-300 leading-relaxed max-w-2xl">
              Whether you’re a company, recruiter, or innovator—let’s build
              the future of work together.
            </p>

          </div>

        </div>


        {/* RIGHT CTA */}
        <button className="relative overflow-hidden rounded-2xl border border-purple-400/25 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300 hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]">

  {/* Gloss Layer */}
  <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent pointer-events-none" />

  <span className="relative z-10 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
    Explore Opportunities →
  </span>

</button>

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

          <button className="mt-6 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.18)] hover:scale-105 transition-all duration-300">
            Book a Demo
          </button>

        </div>

      </div>


      {/* Bottom Copyright */}
      <div className="mt-10 -mb-5 pt-8  text-center text-sm text-gray-500">
        © 2026 HirePilot AI. All rights reserved.
      </div>

    </footer>

  </div>

</section>

    </main>
  );
}