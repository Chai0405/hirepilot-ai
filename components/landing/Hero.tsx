import { Inter } from "next/font/google";
import { FileText,
  Users,
  Brain,
  PenSquare,
  BarChart3,
  UserRoundCog,
UserPlus,
TrendingUp,
Zap,
 } from "lucide-react";
 import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section
      className={`${inter.className} relative min-h-[90vh] overflow-hidden bg-black text-white`}
    >
      {/* Premium dark mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.18),_transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.96),rgba(0,0,0,1))]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

<img
  src="/graphics/neural-network-bg.png"
  alt="Neural Network"
  className="absolute top-0 left-0 w-[50%] max-h-[35%] object-contain opacity-11"
/>

      {/* Glow effects */}
      <div className="absolute right-24 top-40 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-3xl" />
      <div className="absolute bottom-0 left-20 h-[400px] w-[400px] rounded-full bg-blue-700/20 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-4 pt-50 lg:px-12">
        {/* Large centered logo */}
        <div className="absolute -top-25 left-1/2 z-20 -translate-x-1/2">
          <img
            src="/branding/logos/hirepilot-horizontal-logo.png"
            alt="HirePilot AI"
            className="w-[380px] max-w-full object-contain"
          />
        </div>
        

        {/* Hero grid */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.15fr]">
          {/* Left content */}
          <div>
            <h1 className="text-6xl leading-[0.95] tracking-tight md:text-6xl">
              <span className="block">Intelligent Hiring.</span>
              <span className="mt-3 block">
                <span className="text-white">Better </span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Outcomes.
                </span>
              </span>
            </h1>

            <p className="hidden mt-4 items-center gap-8 max-w-2xl text-md leading-relaxed text-slate-300 lg:flex">
              AI-powered recruitment infrastructure for smarter talent
              discovery, automated screening, and enterprise-scale hiring
              efficiency.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-5">
              <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 px-4 py-3 text-md shadow-[0_0_35px_rgba(139,92,246,0.35)] transition hover:scale-105 cursor-pointer">
                Start Hiring →
              </button>
              <Link href="/demo">
              <button className="rounded-full border border-purple-500/40 bg-black/20 px-4 py-3 text-md backdrop-blur-sm transition hover:border-purple-400 cursor-pointer">
                Request Demo
              </button>
              </Link>
              <Link href="/features">
  <button className="rounded-full border border-purple-500/40 bg-black/20 px-4 py-3 text-md backdrop-blur-sm transition hover:border-purple-400 cursor-pointer">
    Learn More..
  </button>
</Link>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
  {[
    "/avatars/avatar-1.jpg",
    "/avatars/avatar-2.jpg",
    "/avatars/avatar-3.jpg",
    "/avatars/avatar-4.jpg",
  ].map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Recruiter ${i + 1}`}
      className="h-14 w-14 rounded-full border-2 border-black object-cover"
    />
  ))}
</div>
              <div>
                <div className="text-lg text-yellow-400">★★★★★</div>
                <p className="text-sm text-slate-400">
                  Trusted by 500+ Recruiters
                </p>
              </div>
            </div>
          </div>

             {/* Dashboard preview */}
      <div className="relative -left-22 scale-[0.82] origin-top-right">
        {/* Glow ring */}
        <img
          src="/graphics/dashboard-glow-ring.png"
          alt="Dashboard Glow Ring"
          className="absolute bottom-[-100px] left-1/2 z-0 w-[1200px] max-w-none -translate-x-1/2 opacity-15 mix-blend-screen blur-[1px] pointer-events-none"
        />

        {/* Dashboard shell */}
        <div className="relative z-10 flex max-w-[820px] overflow-visible rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-slate-950/95 via-[#060b1a] to-black shadow-[0_0_120px_rgba(59,130,246,0.18)] backdrop-blur-2xl">

          {/* Sidebar */}
          <div className="flex w-16 flex-col items-center gap-5 border-r border-white/5 bg-black/30 py-6">
            <img
              src="/avatars/rahul.jpg"
              alt="Rahul"
              className="h-14 w-14 rounded-full object-cover border border-white/10"
            />

            {["⌂", "👥", "📄", "◎", "▣", "⚙"].map((icon, i) => (
              <div
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-white shadow-[0_0_12px_rgba(255,255,255,0.04)]"
              >
                <span className="text-md font-medium">{icon}</span>
              </div>
            ))}
          </div>

          {/* Main dashboard */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold tracking-tight">
                Dashboard
              </h3>

              <div className="flex items-center gap-5 text-white/80">
                <span className="text-lg">🎧</span>
                <span className="text-lg">◌</span>
              </div>
            </div>

            {/* Top row */}
            <div className="grid gap-5 md:grid-cols-[1.35fr_1fr]">
              {/* Analytics card */}
              <div className="rounded-3xl border border-blue-500/10 bg-black/35 p-5 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                <p className="text-sm text-slate-400">
                  Total Candidates Screened
                </p>
                <h4 className="mt-3 text-5xl font-bold">10,842</h4>
                <p className="mt-2 text-green-400">+24% this month</p>

                <div className="mt-6 h-24 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent p-2">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <polyline
                      fill="none"
                      stroke="url(#gradientLine)"
                      strokeWidth="2.8"
                      points="0,35 10,30 20,32 30,24 40,28 50,18 60,22 70,12 85,15 100,2"
                    />
                    <defs>
                      <linearGradient
                        id="gradientLine"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* ATS card */}
              <div className="rounded-3xl border border-blue-500/10 bg-black/35 p-5">
                <p className="text-sm text-slate-400">ATS Match Rate</p>
                <h4 className="mt-3 text-5xl font-bold">95%</h4>

                <div className="mt-6 flex justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-purple-500/20 border-t-blue-500 border-r-pink-500 text-3xl font-bold shadow-[0_0_30px_rgba(168,85,247,0.18)]">
                    95
                  </div>
                </div>

                <p className="mt-4 text-sm text-green-400">
                  +18% improvement
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-5 grid gap-5 md:grid-cols-[1.25fr_0.9fr]">
              {/* Candidate */}
              <div className="rounded-3xl border border-blue-500/10 bg-black/40 p-5">
                <div className="flex items-center gap-4">
                  <img
                    src="/avatars/arjun-mehta.jpg"
                    alt="Arjun Mehta"
                    className="h-14 w-14 rounded-full object-cover border border-white/10"
                  />

                  <div>
                    <h4 className="text-lg font-semibold">Arjun Mehta</h4>
                    <p className="text-sm text-slate-400">
                      Senior Frontend Developer
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                    96% Match
                  </span>

                  {["React", "TypeScript", "Next.js"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shortlisted */}
              <div className="rounded-3xl border border-blue-500/10 bg-black/40 p-5">
                <p className="text-sm text-slate-400">Shortlisted</p>
                <h4 className="mt-2 text-5xl font-bold">248</h4>
                <p className="mt-2 text-green-400">+32%</p>

                <div className="mt-5 h-20 rounded-xl bg-gradient-to-t from-blue-500/10 to-transparent p-2">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <polyline
                      fill="none"
                      stroke="url(#shortlistGradient)"
                      strokeWidth="2.5"
                      points="0,35 12,30 24,28 36,22 48,25 60,18 72,12 84,15 100,5"
                    />
                    <defs>
                      <linearGradient
                        id="shortlistGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating AI card */}
          <div className="absolute right-[-125px] top-[210px] w-[205px] rounded-3xl border border-blue-500/20 bg-black/70 p-5 shadow-[0_0_60px_rgba(59,130,246,0.2)] backdrop-blur-2xl">
            <p className="text-sm text-slate-400">AI Screening</p>
            <h4 className="mt-3 text-5xl font-bold">87%</h4>
            <p className="mt-1 text-sm text-slate-400">Resume Score</p>

            <div className="mt-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-purple-500/20 border-t-blue-500 border-r-pink-500 text-2xl font-bold">
                87
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Skills Match",
                "Experience",
                "Education",
                "Culture Fit",
              ].map((item) => (
                <div key={item}>
                  <p className="mb-1 text-xs text-slate-400">{item}</p>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Metrics bar */}
    <div className="mt-1 rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900/80 to-slate-950/80 p-10 backdrop-blur-xl">
      <div className="grid gap-8 md:grid-cols-4">
        {[
  {
    icon: Users,
    stat: "10K+",
    label: "Candidates Screened",
  },
  {
    icon: UserPlus,
    stat: "500+",
    label: "Recruiters",
  },
  {
    icon: Zap,
    stat: "95%",
    label: "Faster Hiring",
  },
  {
    icon: BarChart3,
    stat: "40%",
    label: "Better ATS Match",
  },
].map((item, index) => {
  const Icon = item.icon as React.ElementType;

  return (
    <div
      key={item.stat}
      className={`flex items-center justify-center gap-4 px-6 ${
        index !== 3 ? "border-r border-white/10" : ""
      }`}
    >
      <div className="text-blue-400">
        <Icon size={30} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-4xl font-bold text-white">
          {item.stat}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {item.label}
        </p>
      </div>
    </div>
  );
})}
</div>
</div>

   {/* Features Section */}
<section className="relative mt-14">
  <div className="text-center">
    <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
      Powerful AI Features
    </p>

    <h2 className="mt-3 text-4xl tracking-tight text-white">
      Everything you need to hire the best
    </h2>
  </div>

  <div className="mt-10 flex justify-center gap-4">
    {[
      {
        icon: FileText,
        title: "Resume ATS Analyzer",
        desc: "Advanced parsing & scoring for perfect ATS alignment.",
      },
      {
        icon: Users,
        title: "Smart Candidate Matching",
        desc: "AI matches the right talent based on skills, experience & culture fit.",
      },
      {
        icon: Brain,
        title: "AI Interview Prep",
        desc: "Generate role-specific questions & realistic candidate responses.",
      },
      {
        icon: PenSquare,
        title: "Cover Letter Generator",
        desc: "Create personalized, impactful cover letters in seconds.",
      },
      {
        icon: TrendingUp,
        title: "Recruiter Analytics",
        desc: "Real-time insights to track performance and optimize hiring.",
      },
      {
        icon: UserRoundCog,
        title: "Team Hiring Tools",
        desc: "Collaborate with your team and streamline the entire hiring process.",
      },
    ].map((feature, i) => (
      <div
        key={i}
        className="group w-[230px] h-[230px] rounded-3xl border border-blue-500/10 bg-gradient-to-b from-[#050816] via-[#040714] to-black p-6 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-xl transition hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] flex flex-col items-center text-center"
      >
        {/* Icon */}
        <div className="mb-5 flex justify-center">
          <feature.icon
            size={55}
            strokeWidth={1.8}
            className="text-transparent drop-shadow-[0_0_16px_rgba(139,92,246,0.45)]"
            style={{
              stroke: "url(#icon-gradient)",
            }}
          />
        </div>

        {/* Title */}
        <h3 className="min-h-[50px] text-md leading-snug text-white">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs leading-snug text-slate-400">
          {feature.desc}
        </p>
      </div>
    ))}
  </div>

  {/* SVG Gradient Definition */}
  <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>
</section>

{/* Modern Recruitment Teams Section */}
<section className="relative mt-16">
  <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">

    {/* Left Content */}
    <div className="max-w-lg">
      <p className="text-base font-medium text-blue-400">
        Smart. Fast. Scalable.
      </p>

      <h2 className="mt-4 text-5xl leading-tight text-white">
        Built for modern <br /> recruitment teams
      </h2>

      <p className="mt-5 text-md leading-relaxed text-slate-400">
        From startups to enterprises, HirePilot AI helps you find,
        evaluate and hire top talent faster and smarter.
      </p>

      <div className="mt-8 space-y-4">
        {[
          "AI-powered candidate shortlisting",
          "Real-time collaboration",
          "Bias-free intelligent screening",
          "Seamless ATS integration",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 text-blue-400 text-md">
              ✓
            </div>
            <span className="text-sm text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right Dashboard */}
    <div className="relative w-full max-w-[930px]">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-gradient-to-b from-slate-950/95 via-[#050816] to-black shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-2xl">
        <div className="flex">

          {/* Sidebar */}
          <div className="flex w-[62px] flex-col items-center gap-5 border-r border-white/5 bg-black/20 py-5">
            <img
              src="/avatars/user-1.jpg"
              alt="Recruiter"
              className="h-10 w-10 rounded-full border border-white/10 object-cover"
            />

            {["⌂", "⌕", "▣", "◎", "◌", "⚙"].map((icon, i) => (
              <div
                key={i}
                className={`flex h-9 w-9 items-center justify-center rounded-xl border text-lg transition ${
  i === 0
    ? "border-blue-500/40 bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
    : "border-white/10 bg-white/[0.02] text-white/75 hover:border-white/20 hover:bg-white/[0.04]"
}`}
              >
                <span>{icon}</span>
              </div>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <div className="flex-1 px-7 py-5">

            {/* Top bar */}
            <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-lg font-semibold">Candidates</h3>

              <div className="flex items-center gap-4 text-white/80 text-lg">
                <span>◌</span>
                <span>⌕</span>
                <span>🔔︎</span>

                <img
                  src="/avatars/user-2.jpg"
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Search/filter row */}
            <div className="mb-4 grid gap-2 md:grid-cols-4">
              <div className="rounded-lg border border-white/5 bg-black/25 px-3 py-2 text-xs text-slate-500">
                Search candidates...
              </div>

              {[
  { label: "All Jobs", icon: "▼" },
  { label: "All Stages", icon: "▼" },
  { label: "Filters", icon: "≡" },
].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/25 px-3 py-2 text-xs text-slate-300"
                >
                  <span>{item.label}</span>
                  <span className="ml-2 text-sm text-slate-500">
                    {item.icon}
                  </span>
                </div>
              ))}
            </div>

            {/* Candidate table */}
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-black/20">
              <div className="grid grid-cols-[1.5fr_1.5fr_1.4fr_1.2fr_1fr] border-b border-white/5 px-6 py-3 text-[10px] uppercase tracking-wide text-slate-500">
                <span>Candidate</span>
                <span>Job Role</span>
                <span>Match Score</span>
                <span>Stage</span>
                <span>Status</span>
              </div>

              {[
                ["Arjun Mehta", "Frontend Developer", "96%", "Shortlisted"],
                ["Priya Sharma", "Product Designer", "93%", "Assessment"],
                ["Rohan Verma", "Backend Engineer", "91%", "Interview"],
                ["Sneha Iyer", "Data Scientist", "89%", "Shortlisted"],
                ["Karan Malhotra", "DevOps Engineer", "88%", "Assessment"],
              ].map(([name, role, score, stage], i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1.3fr_1.1fr] items-center gap-4 border-b border-white/5 px-6 py-4 text-xs text-slate-300"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`/avatars/user${(i % 5) + 1}.jpg`}
                      alt={name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span>{name}</span>
                  </div>

                  <span>{role}</span>

                  <div>
                    <span className="text-green-400">{score}</span>
                    <div className="mt-1 h-1.5 rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-green-400"
                        style={{ width: score }}
                      />
                    </div>
                  </div>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] text-blue-300 w-fit">
                    {stage}
                  </span>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-[10px] text-green-400 w-fit">
                    Active
                  </span>
                </div>
              ))}
                            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* CTA + Footer Section */}
<section className="relative mt-10 pb-0 mb-0">
  
  {/* CTA Banner */}
  <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-[#050816] via-[#0a0f2d] to-[#12061f] px-8 py-6 shadow-[0_0_50px_rgba(59,130,246,0.08)]">
    
    {/* Glow background */}
    <div className="absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

    <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
      
      {/* Left Content */}
      <div>
        <h2 className="text-4xl font-semibold leading-tight text-white">
           Transform your hiring with the power of{" "}
  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    AI
  </span>
        </h2>
      </div>

      {/* Center Content */}
      <div className="max-w-md text-center lg:text-left">
        <p className="text-md leading-relaxed text-slate-400">
          Join hundreds of recruiters who are already hiring smarter
          and faster with HirePilot AI.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
          <button className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105 cursor-pointer">
            Start Hiring Now →
          </button>

<Link href="/demo">
          <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition hover:border-purple-400 cursor-pointer">
            Book a Demo
          </button>
          </Link>
        </div>
      </div>

      {/* Right Ring */}
      <div className="flex justify-center">
  <img
    src="/ai-ring.png"
    alt="AI Ring"
    className="w-[260px] max-w-none object-contain scale-150 mix-blend-screen opacity-95 drop-shadow-[0_0_65px_rgba(139,92,246,0.22)]"
  />
</div>

    </div>
  </div>

  {/* Footer */}
 <div className="-mt-16 -mb-20 flex items-center justify-between pt-1 pb-0">

  {/* Logo */}
  <div className="flex items-center">
    <img
      src="/branding/logos/hirepilot-horizontal-logo.png"
      alt="HirePilot AI"
      className="w-[220px] object-contain"
    />
  </div>

   {/* Copyright */}
  <div className="text-center text-xs text-slate-500">
    © 2026 HirePilot AI. All rights reserved.
  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-4">

  {[
    "/branding/logos/linkedin.png",
    "/branding/logos/x.png",
    "/branding/logos/instagram.png",
  ].map((social, i) => (
    <div
      key={i}
      className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition hover:border-purple-500/30"
    >
      <img
        src={social}
        alt="social icon"
        className="w-10 h-10 object-contain opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
      />
    </div>
  ))}

</div>

</div>
</section>
</div>
</section>
 );
}