import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";
import {
  ShieldCheck,
  Clock3,
  Lock,
  BrainCircuit,
  TrendingUp,
  Headphones,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function PricingPage() {
  return (
    <section
      className={`${inter.className} relative min-h-screen overflow-hidden bg-black text-white`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 -mt-17 pb-16 lg:px-12">
        <Navbar />

        {/* Hero Section */}
        <div className="-mt-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-purple-400">
              Pricing
            </p>

            <h2 className="mt-5 text-6xl leading-tight tracking-tight">
              Flexible pricing for teams of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                every size
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-md leading-relaxed text-slate-400">
              Scale smarter with AI-powered recruitment tools built for startups,
              agencies, and enterprise hiring teams.
            </p>

            {/* Pricing Toggle */}
            <div className="mt-8 flex w-fit items-center gap-4 rounded-full border border-purple-500/30 bg-black/30 px-3 py-2 shadow-[0_0_25px_rgba(139,92,246,0.12)]">
              <button className="text-sm font-medium text-white">
                Monthly
              </button>

              <div className="relative flex h-7 w-14 items-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="h-5 w-5 rounded-full bg-white shadow-md" />
              </div>

              <button className="text-sm font-medium text-white">
                Yearly
              </button>

              <span className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-3 py-1 text-[10px] font-medium text-white">
                Save 20%
              </span>
            </div>

           {/* Trust Indicators */}
<div className="mt-12 grid max-w-[300px] grid-cols-3 gap-1">
  {[
    {
      icon: ShieldCheck,
      title: "14-Day",
      subtitle: "Free Trial",
    },
    {
      icon: Clock3,
      title: "Cancel",
      subtitle: "Anytime",
    },
    {
      icon: Lock,
      title: "Secure",
      subtitle: "Payments",
    },
  ].map((item, i) => {
    const Icon = item.icon as React.ElementType;

    return (
      <div
        key={i}
        className={`flex flex-col items-center text-center ${
          i !== 2 ? "border-r border-white/10" : ""
        }`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center">
          <Icon
            size={40}
            strokeWidth={1.8}
            className="text-transparent"
            style={{ stroke: "url(#icon-gradient)" }}
          />
        </div>

        <p className="text-sm text-slate-400">
          {item.title}
        </p>

        <p className="text-sm text-slate-400">
          {item.subtitle}
        </p>
      </div>
    );
  })}
</div>

            {/* SVG Gradient */}
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Recruiter Trust Box */}
            <div className="mt-8 max-w-md rounded-3xl border border-blue-500/20 px-6 py-5">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/avatars/user${i}.jpg`}
                      alt={`Recruiter ${i}`}
                      className="h-12 w-12 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                </div>

                <div>
                  <div className="mb-1 flex text-yellow-400">{"★★★★★"}</div>

                  <p className="text-sm font-medium text-white">
                    Trusted by 500+ Recruiters
                  </p>

                  <p className="text-xs text-slate-400">
                    from leading companies
                  </p>
                </div>
              </div>
            </div>
          </div>
          

          {/* Right Section */}
          <div className="relative flex flex-col justify-start pt-44 scale-[0.92] origin-top">
            {/* Background */}
            <div className="absolute bottom-0 left-1/2 z-0 w-[200%] max-w-5xl -translate-x-1/2 opacity-15 pointer-events-none">
              <img
                src="/pricing-grid.png"
                alt="Pricing Grid Background"
                className="w-full object-cover mix-blend-screen"
              />
            </div>

            {/* Dashboard */}
            <div className="absolute top-0 left-1/2 z-20 w-[88%] max-w-[980px] -translate-x-1/2 rounded-3xl border border-blue-500/20 bg-gradient-to-b from-[#0b1024]/95 to-black/95 px-5 py-3 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.12)] opacity-50">
              <div className="mb-3 flex items-center justify-between border-b border-blue-500/10 pb-3">
                <div className="flex items-center gap-2">
  <img
    src="/hirepilot-talent-icon.png"
    alt="Dashboard"
    className="h-9 w-9 object-contain opacity-80"
  />
  <p className="text-xs font-medium text-slate-300">
    Hiring Overview
  </p>
</div>

                <div className="flex items-center gap-3 text-slate-500">
  <span className="text-lg">◌</span>
  <span className="text-lg">⌂</span>
  <span className="text-lg">⊕</span>
</div>
              </div>

              <div className="grid grid-cols-[55px_repeat(3,130px)_150px_85px] gap-4 items-start overflow-visible">
                {/* Sidebar */}
                <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-white/5 bg-black/20 py-4">

                <div className="absolute -left-25 top-3 flex h-15 w-15 items-center justify-center rounded-xl border border-blue-500/30 bg-black/60 shadow-[0_0_25px_rgba(59,130,246,0.25)]">
  <img
    src="/user-img.png"
    alt="Users"
    className="h-18 w-18 scale-150 object-contain"
  />
</div>
                  {["⌂", "👥", "📄", "⚙"].map((icon, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-black/20 text-xl text-slate-400"
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="contents">
                  {[
  {
    title: "Total Recruiters",
    value: "10,842",
    growth: "+24.5% this month",
    type: "chart",
    color: "blue",
  },
  {
    title: "Time to Hire",
    value: "24",
    growth: "-18% this month",
    type: "chart",
    color: "purple",
  },
  {
    title: "Offer Acceptance",
    value: "95%",
    growth: "+12% this month",
    type: "circle",
    color: "pink",
  },
].map((card, i) => (
  <div
    key={i}
    className="rounded-2xl border border-blue-500/10 bg-black/35 p-4"
  >
    <p className="text-xs text-slate-400">{card.title}</p>

    <p className="mt-2 text-3xl font-bold text-white">
      {card.value}
    </p>

    <p className="mt-1 text-xs text-green-400">
      {card.growth}
    </p>

    {card.type === "chart" ? (
      <div className="mt-4 h-16 rounded-xl bg-gradient-to-t from-blue-500/5 to-transparent p-2">
        <svg viewBox="0 0 100 40" className="h-full w-full">
          <polyline
            fill="none"
            stroke={
              card.color === "blue"
                ? "url(#blueChart)"
                : "url(#purpleChart)"
            }
            strokeWidth="2.5"
            points="0,35 10,30 20,32 30,24 40,28 50,18 60,22 70,12 85,15 100,2"
          />
          <defs>
            <linearGradient id="blueChart" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <linearGradient id="purpleChart" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ) : (
      <div className="mt-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-purple-500/20 border-t-blue-500 border-r-pink-500">
        </div>
      </div>
    )}
  </div>
))}
                </div>

                {/* Match Score */}
                <div className="relative -ml-6 mr-6 mt-15 h-[145px] rounded-2xl border border-blue-500/20 bg-black/30 p-5 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,0.12)] z-30">
                  <p className="text-xs text-slate-400">AI Match Score</p>
                    <div className="mt-5 flex justify-center">
                    <div className="flex h-18 w-18 items-center justify-center rounded-full border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                      <span className="text-xl font-bold text-white">
                        95%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-25 -top-4 z-40 flex items-center justify-center">
  <img
      src="/ai-chip.png"
      alt="AI"
      className="h-27 w-27 object-contain opacity-55"
    />
  
</div>
              </div>
            </div>

           {/* Pricing Cards */}
<div className="relative z-30 mt-10 mx-auto max-w-5xl">
  <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden">

    {/* Starter */}
    <div className="min-h-[470px] px-8 py-8 rounded-3xl border border-cyan-400/50 bg-black/70 shadow-[0_0_35px_rgba(34,211,238,0.22)]">
      <h3 className="text-2xl font-semibold text-blue-400">
        Starter
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Perfect for small teams
      </p>

      <div className="mt-6 flex items-end gap-2">
        <p className="text-3xl font-bold">Rs.199</p>
        <span className="mb-2 text-xs text-slate-400">
          /month
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Billed monthly
      </p>

      <div className="my-6 border-t border-white/10"></div>

      <ul className="space-y-3 text-xs text-slate-300">
        {[
          "Resume ATS Analysis",
          "Basic Analytics",
          "Candidate Matching",
          "Up to 3 Team Members",
          "Email Support",
        ].map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-blue-400">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-xl border border-blue-500/30 py-3 text-sm font-medium text-white transition hover:border-blue-400">
        Start Free Trial
      </button>
    </div>

    {/* Pro */}
    <div className="relative min-h-[500px] px-8 py-10 scale-100 rounded-3xl border border-pink-500/60 bg-gradient-to-b from-purple-950/80 to-black/85 shadow-[0_0_55px_rgba(236,72,153,0.35),0_0_80px_rgba(168,85,247,0.25)] z-20">

      {/* Most Popular Badge */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 text-xs font-semibold text-white shadow-xl">
        Most Popular
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-purple-400">
        Pro
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Ideal for growing teams
      </p>

      <div className="mt-6 flex items-end gap-2">
        <p className="text-3xl font-bold">Rs.499</p>
        <span className="mb-2 text-xs text-slate-400">
          /month
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Billed monthly
      </p>

      <div className="my-6 border-t border-white/10"></div>

      <ul className="space-y-3 text-xs text-slate-300">
        {[
          "All Starter Features",
          "AI Interview Prep",
          "Advanced Analytics",
          "Up to 10 Team Members",
          "Priority Support",
          "API Integrations",
        ].map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-purple-400">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3 text-sm font-medium text-white shadow-[0_0_35px_rgba(168,85,247,0.35)]">
        Start Free Trial
      </button>
    </div>

    {/* Enterprise */}
    <div className="min-h-[470px] px-8 py-8 rounded-3xl border border-fuchsia-500/50 bg-black/70 shadow-[0_0_35px_rgba(217,70,239,0.22)]">
      <h3 className="text-2xl font-semibold text-pink-400">
        Enterprise
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Built for large organizations
      </p>

      <div className="mt-6">
        <p className="text-3xl font-bold">
          Custom
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Contact Sales
        </p>
      </div>

      <div className="my-6 border-t border-white/10"></div>

      <ul className="space-y-3 text-xs text-slate-300">
        {[
          "All Pro Features",
          "Unlimited Workflows",
          "White-label Solution",
          "Dedicated Account Manager",
          "Custom AI Models",
          "SLA & Compliance",
        ].map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-pink-400">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-xl border border-pink-500/30 py-3 text-sm font-medium text-white transition hover:border-pink-400">
        Contact Sales
      </button>
    </div>

  </div>
</div>



          </div> {/* Right Section */}
        </div>   {/* Hero Section */}
      </div>     {/* Main Container */}

       {/* Bottom Feature Strip */}
      <div className="relative z-10 -mt-23 mb-7 mx-auto w-full max-w-7xl px-12">
        <div className="w-full rounded-2xl border border-blue-500/20 bg-black/30 px-12 py-6 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.08)]">
          <div className="grid grid-cols-4">

            {[
              [BrainCircuit, "AI-Powered", "Smart automation"],
              [ShieldCheck, "Secure & Compliant", "Enterprise-grade security"],
              [TrendingUp, "Scalable", "Grow without limits"],
              [Headphones, "24/7 Support", "We’re here anytime"],
            ].map(([Icon, title, subtitle], i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-8 ${
                  i !== 3 ? "border-r border-white/10" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <Icon
                    size={40}
                    strokeWidth={1.8}
                    className="text-transparent"
                    style={{ stroke: "url(#icon-gradient)" }}
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {title}
                  </p>

                  <p className="text-xs text-slate-400">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    
    </section>
  );
}